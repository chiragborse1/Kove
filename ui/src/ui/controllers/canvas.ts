import { normalizeBasePath } from "../navigation.ts";
import type { UiSettings } from "../storage.ts";
import type { AgentsListResult } from "../types.ts";
import { KOVA_EMPLOYEES } from "./employees.ts";

export type CanvasStatus = "idle" | "checking" | "ready" | "error";

export type CanvasEmployeeOption = {
  id: string;
  name: string;
  role: string | null;
};

const CANVAS_SW_PATH = "openclaw-canvas-auth-sw.js";
const CANVAS_MESSAGE_TYPE = "openclaw-canvas-auth:set-token";
const CANVAS_HOST_PATH = "/__openclaw__/canvas/";
const CANVAS_AUTH_ACK_TIMEOUT_MS = 1_500;

function deriveEmployeeName(agentId: string): string {
  return agentId
    .replace(/^kova-/, "")
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function resolveCanvasEmployees(agentsList: AgentsListResult | null): CanvasEmployeeOption[] {
  const knownIds = new Set<string>();
  const options: CanvasEmployeeOption[] = [
    { id: "main", name: "Main", role: "Kova Core Agent" },
    ...KOVA_EMPLOYEES.map((employee) => ({
      id: employee.id,
      name: employee.name,
      role: employee.role,
    })),
  ];

  for (const option of options) {
    knownIds.add(option.id);
  }

  for (const agent of agentsList?.agents ?? []) {
    if (!agent.id.startsWith("kova-") || knownIds.has(agent.id)) {
      continue;
    }
    options.push({
      id: agent.id,
      name: agent.name?.trim() || deriveEmployeeName(agent.id),
      role: "Custom Kova employee",
    });
    knownIds.add(agent.id);
  }

  return options;
}

function toHttpOrigin(gatewayUrl: string): string | null {
  const trimmed = gatewayUrl.trim();
  if (!trimmed) {
    return null;
  }
  try {
    const parsed = new URL(trimmed, window.location.href);
    parsed.protocol =
      parsed.protocol === "wss:" ? "https:" : parsed.protocol === "ws:" ? "http:" : parsed.protocol;
    parsed.pathname = "/";
    parsed.search = "";
    parsed.hash = "";
    return parsed.toString().replace(/\/$/, "");
  } catch {
    return null;
  }
}

export function resolveCanvasBaseUrl(params: {
  hello: import("../gateway.ts").GatewayHelloOk | null;
  settings: Pick<UiSettings, "gatewayUrl">;
}): string | null {
  const helloUrl = params.hello?.canvasHostUrl?.trim();
  if (helloUrl) {
    try {
      return new URL(helloUrl, window.location.href).toString().replace(/\/$/, "");
    } catch {
      // Fall through to the gateway URL-derived origin.
    }
  }
  return toHttpOrigin(params.settings.gatewayUrl);
}

export function resolveCanvasAuthToken(params: {
  hello?: import("../gateway.ts").GatewayHelloOk | null;
  settings: Pick<UiSettings, "token">;
  password?: string | null;
}): string {
  const deviceToken = params.hello?.auth?.deviceToken?.trim();
  if (deviceToken) {
    return deviceToken;
  }
  const sharedToken = params.settings.token.trim();
  if (sharedToken) {
    return sharedToken;
  }
  return params.password?.trim() ?? "";
}

export function buildCanvasUrl(params: {
  baseUrl: string;
  agentId?: string | null;
  refreshKey?: string | null;
}): string {
  const url = new URL(params.baseUrl, window.location.href);
  const currentPath = url.pathname.replace(/\/+$/, "");
  url.pathname = `${currentPath}${CANVAS_HOST_PATH}`;
  url.search = "";
  url.hash = "";
  if (params.agentId?.trim()) {
    url.searchParams.set("agent", params.agentId.trim());
  }
  if (params.refreshKey?.trim()) {
    url.searchParams.set("_ui_refresh", params.refreshKey.trim());
  }
  return url.toString();
}

export function resolveCanvasWorkerScriptUrl(basePath: string): string {
  const normalizedBasePath = normalizeBasePath(basePath);
  return normalizedBasePath ? `${normalizedBasePath}/${CANVAS_SW_PATH}` : `/${CANVAS_SW_PATH}`;
}

export async function ensureCanvasAuthWorker(params: {
  basePath: string;
  token: string;
}): Promise<boolean> {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
    return false;
  }

  try {
    const registration = await navigator.serviceWorker.register(
      resolveCanvasWorkerScriptUrl(params.basePath),
      { scope: "/" },
    );
    const readyRegistration = await navigator.serviceWorker.ready;
    const message = {
      type: CANVAS_MESSAGE_TYPE,
      token: params.token.trim(),
    };
    const targets = [
      registration.active,
      readyRegistration.active,
      navigator.serviceWorker.controller,
      registration.waiting,
      readyRegistration.waiting,
      registration.installing,
      readyRegistration.installing,
    ].filter((target, index, list): target is ServiceWorker => Boolean(target) && list.indexOf(target) === index);

    for (const target of targets) {
      if (await postCanvasAuthToken(target, message)) {
        return true;
      }
    }
    return false;
  } catch {
    return false;
  }
}

async function postCanvasAuthToken(
  target: Pick<ServiceWorker, "postMessage">,
  message: { type: string; token: string },
): Promise<boolean> {
  if (typeof MessageChannel === "undefined") {
    try {
      target.postMessage(message);
      return true;
    } catch {
      return false;
    }
  }

  return await new Promise<boolean>((resolve) => {
    const channel = new MessageChannel();
    const timeoutId = window.setTimeout(() => resolve(false), CANVAS_AUTH_ACK_TIMEOUT_MS);
    channel.port1.onmessage = () => {
      clearTimeout(timeoutId);
      resolve(true);
    };
    try {
      target.postMessage(message, [channel.port2]);
    } catch {
      clearTimeout(timeoutId);
      resolve(false);
    }
  });
}

export async function probeCanvasUrl(params: {
  url: string;
  token: string;
}): Promise<{ ok: true } | { ok: false; status: number | null }> {
  try {
    const headers = new Headers();
    const token = params.token.trim();
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    const response = await fetch(params.url, {
      method: "HEAD",
      headers,
      cache: "no-store",
    });
    if (response.ok) {
      return { ok: true };
    }
    return { ok: false, status: response.status };
  } catch {
    return { ok: false, status: null };
  }
}
