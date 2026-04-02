import { GatewayBrowserClient } from "../gateway.ts";
import type { GatewayBrowserClient as GatewayBrowserClientType } from "../gateway.ts";
import type { UiSettings } from "../storage.ts";
import type { AgentsFilesListResult, AgentsFilesSetResult, SkillStatusReport } from "../types.ts";

const KOVA_MARKETPLACE_REGISTRY_URL =
  "https://raw.githubusercontent.com/chiragborse1/kova-skills/main/registry.json";
const KOVA_MARKETPLACE_SKILL_FILE_RE = /^skills\/([^/]+)\/SKILL\.md$/;
const KOVA_MARKETPLACE_ID_RE = /^[A-Za-z0-9._-]+$/;
const KOVA_MARKETPLACE_CLIENT_TIMEOUT_MS = 15000;

export type KovaMarketplaceCategory =
  | "all"
  | "Productivity"
  | "News"
  | "Finance"
  | "Developer"
  | "Social";

export type KovaMarketplaceSkill = {
  id: string;
  name: string;
  description: string;
  version: string;
  author: string;
  category: string;
  tags: string[];
  downloads: number | null;
  free: boolean;
  url: string;
};

export type SkillsState = {
  client: GatewayBrowserClientType | null;
  connected: boolean;
  settings: Pick<UiSettings, "gatewayUrl" | "token">;
  password: string;
  clientInstanceId: string;
  skillsLoading: boolean;
  skillsReport: SkillStatusReport | null;
  skillsError: string | null;
  skillsBusyKey: string | null;
  skillEdits: Record<string, string>;
  skillMessages: SkillMessageMap;
  kova_marketplaceLoading: boolean;
  kova_marketplaceSkills: KovaMarketplaceSkill[];
  kova_marketplaceError: string | null;
  kova_marketplaceCategory: KovaMarketplaceCategory;
  kova_installedLoading: boolean;
  kova_installedError: string | null;
  kova_installedSkillIds: string[];
  kova_marketplaceBusyId: string | null;
};

export type SkillMessage = {
  kind: "success" | "error";
  message: string;
};

export type SkillMessageMap = Record<string, SkillMessage>;

type LoadSkillsOptions = {
  clearMessages?: boolean;
};

function setSkillMessage(state: SkillsState, key: string, message?: SkillMessage) {
  if (!key.trim()) {
    return;
  }
  const next = { ...state.skillMessages };
  if (message) {
    next[key] = message;
  } else {
    delete next[key];
  }
  state.skillMessages = next;
}

function getErrorMessage(err: unknown) {
  if (err instanceof Error) {
    return err.message;
  }
  return String(err);
}

async function kova_loadSkillsStatus(state: SkillsState) {
  if (!state.client || !state.connected) {
    return;
  }
  if (state.skillsLoading) {
    return;
  }
  state.skillsLoading = true;
  state.skillsError = null;
  try {
    const res = await state.client.request<SkillStatusReport | undefined>("skills.status", {});
    if (res) {
      state.skillsReport = res;
    }
  } catch (err) {
    state.skillsError = getErrorMessage(err);
  } finally {
    state.skillsLoading = false;
  }
}

function kova_normalizeMarketplaceSkill(entry: unknown): KovaMarketplaceSkill | null {
  if (!entry || typeof entry !== "object") {
    return null;
  }
  const candidate = entry as Record<string, unknown>;
  const id = typeof candidate.id === "string" ? candidate.id.trim() : "";
  const name = typeof candidate.name === "string" ? candidate.name.trim() : "";
  const url = typeof candidate.url === "string" ? candidate.url.trim() : "";
  if (!(id && name && url)) {
    return null;
  }
  return {
    id,
    name,
    description: typeof candidate.description === "string" ? candidate.description.trim() : "",
    version: typeof candidate.version === "string" ? candidate.version.trim() : "",
    author: typeof candidate.author === "string" && candidate.author.trim()
      ? candidate.author.trim()
      : "Unknown author",
    category: typeof candidate.category === "string" && candidate.category.trim()
      ? candidate.category.trim()
      : "Other",
    tags: Array.isArray(candidate.tags)
      ? candidate.tags
          .filter((tag): tag is string => typeof tag === "string")
          .map((tag) => tag.trim())
          .filter(Boolean)
      : [],
    downloads:
      typeof candidate.downloads === "number" && Number.isFinite(candidate.downloads)
        ? candidate.downloads
        : null,
    free: candidate.free !== false,
    url,
  };
}

function kova_parseMarketplaceRegistry(payload: unknown): KovaMarketplaceSkill[] {
  if (!payload || typeof payload !== "object") {
    throw new Error("Marketplace registry returned an invalid response.");
  }
  const skills = (payload as { skills?: unknown }).skills;
  if (!Array.isArray(skills)) {
    throw new Error("Marketplace registry is missing the skills list.");
  }
  return skills
    .map((entry) => kova_normalizeMarketplaceSkill(entry))
    .filter((entry): entry is KovaMarketplaceSkill => entry !== null)
    .sort((left, right) => left.name.localeCompare(right.name));
}

async function kova_loadMarketplaceRegistry(state: SkillsState) {
  if (state.kova_marketplaceLoading) {
    return;
  }
  state.kova_marketplaceLoading = true;
  state.kova_marketplaceError = null;
  try {
    const response = await fetch(KOVA_MARKETPLACE_REGISTRY_URL, {
      cache: "no-store",
      mode: "cors",
    });
    if (!response.ok) {
      throw new Error(`Marketplace registry request failed (${response.status}).`);
    }
    const payload = (await response.json()) as unknown;
    state.kova_marketplaceSkills = kova_parseMarketplaceRegistry(payload);
  } catch (err) {
    state.kova_marketplaceError = getErrorMessage(err);
  } finally {
    state.kova_marketplaceLoading = false;
  }
}

function kova_extractInstalledSkillIds(result: AgentsFilesListResult): string[] {
  const ids = new Set<string>();
  for (const file of result.files) {
    const match = file.name.match(KOVA_MARKETPLACE_SKILL_FILE_RE);
    if (match?.[1]) {
      ids.add(match[1]);
    }
  }
  return Array.from(ids).sort((left, right) => left.localeCompare(right));
}

async function kova_requestInstalledFilesList(state: SkillsState): Promise<AgentsFilesListResult> {
  const gatewayUrl = state.settings.gatewayUrl.trim();
  if (!gatewayUrl) {
    throw new Error("Marketplace install checks require a configured gateway URL.");
  }

  return await new Promise<AgentsFilesListResult>((resolve, reject) => {
    let settled = false;
    let timeoutId = 0;
    let client: GatewayBrowserClient | null = null;

    const kova_finish = (handler: () => void) => {
      if (settled) {
        return;
      }
      settled = true;
      window.clearTimeout(timeoutId);
      handler();
      client?.stop();
    };

    client = new GatewayBrowserClient({
      url: gatewayUrl,
      token: state.settings.token.trim() ? state.settings.token : undefined,
      password: state.password.trim() ? state.password : undefined,
      clientName: "openclaw-control-ui",
      clientVersion: "control-ui-marketplace",
      mode: "webchat",
      instanceId: `${state.clientInstanceId}:kova-marketplace`,
      onHello: () => {
        void client
          ?.request<AgentsFilesListResult>("agents.files.list", { agentId: "main" })
          .then((result) => {
            kova_finish(() => resolve(result));
          })
          .catch((err) => {
            kova_finish(() => reject(err));
          });
      },
      onClose: ({ reason, error }) => {
        kova_finish(() =>
          reject(new Error((error?.message ?? reason) || "Marketplace install check disconnected.")),
        );
      },
    });

    timeoutId = window.setTimeout(() => {
      kova_finish(() => reject(new Error("Marketplace install check timed out.")));
    }, KOVA_MARKETPLACE_CLIENT_TIMEOUT_MS);

    client.start();
  });
}

async function kova_loadInstalledSkills(state: SkillsState) {
  if (!state.client || !state.connected) {
    return;
  }
  if (state.kova_installedLoading) {
    return;
  }
  state.kova_installedLoading = true;
  state.kova_installedError = null;
  try {
    const result = await kova_requestInstalledFilesList(state);
    state.kova_installedSkillIds = kova_extractInstalledSkillIds(result);
  } catch (err) {
    state.kova_installedError = getErrorMessage(err);
  } finally {
    state.kova_installedLoading = false;
  }
}

async function kova_loadMarketplaceState(state: SkillsState) {
  await Promise.allSettled([kova_loadMarketplaceRegistry(state), kova_loadInstalledSkills(state)]);
}

function kova_validateMarketplaceSkillId(id: string): string {
  const trimmed = id.trim();
  if (!KOVA_MARKETPLACE_ID_RE.test(trimmed)) {
    throw new Error(`Marketplace skill id "${id}" is not a safe folder name.`);
  }
  return trimmed;
}

function kova_validateMarketplaceSkillUrl(rawUrl: string): string {
  let parsed: URL;
  try {
    parsed = new URL(rawUrl);
  } catch {
    throw new Error("Marketplace skill URL is invalid.");
  }
  if (!(parsed.protocol === "https:" || parsed.protocol === "http:")) {
    throw new Error("Marketplace skill URL must use http or https.");
  }
  return parsed.toString();
}

export async function loadSkills(state: SkillsState, options?: LoadSkillsOptions) {
  if (options?.clearMessages && Object.keys(state.skillMessages).length > 0) {
    state.skillMessages = {};
  }
  if (options?.clearMessages) {
    state.kova_marketplaceError = null;
    state.kova_installedError = null;
  }

  await Promise.allSettled([kova_loadSkillsStatus(state), kova_loadMarketplaceState(state)]);
}

export function updateSkillEdit(state: SkillsState, skillKey: string, value: string) {
  state.skillEdits = { ...state.skillEdits, [skillKey]: value };
}

export async function updateSkillEnabled(state: SkillsState, skillKey: string, enabled: boolean) {
  if (!state.client || !state.connected) {
    return;
  }
  state.skillsBusyKey = skillKey;
  state.skillsError = null;
  try {
    await state.client.request("skills.update", { skillKey, enabled });
    await kova_loadSkillsStatus(state);
    setSkillMessage(state, skillKey, {
      kind: "success",
      message: enabled ? "Skill enabled" : "Skill disabled",
    });
  } catch (err) {
    const message = getErrorMessage(err);
    state.skillsError = message;
    setSkillMessage(state, skillKey, {
      kind: "error",
      message,
    });
  } finally {
    state.skillsBusyKey = null;
  }
}

export async function saveSkillApiKey(state: SkillsState, skillKey: string) {
  if (!state.client || !state.connected) {
    return;
  }
  state.skillsBusyKey = skillKey;
  state.skillsError = null;
  try {
    const apiKey = state.skillEdits[skillKey] ?? "";
    await state.client.request("skills.update", { skillKey, apiKey });
    await kova_loadSkillsStatus(state);
    setSkillMessage(state, skillKey, {
      kind: "success",
      message: "API key saved - stored in openclaw.json (skills.entries." + skillKey + ")",
    });
  } catch (err) {
    const message = getErrorMessage(err);
    state.skillsError = message;
    setSkillMessage(state, skillKey, {
      kind: "error",
      message,
    });
  } finally {
    state.skillsBusyKey = null;
  }
}

export async function installSkill(
  state: SkillsState,
  skillKey: string,
  name: string,
  installId: string,
  dangerouslyForceUnsafeInstall = false,
) {
  if (!state.client || !state.connected) {
    return;
  }
  state.skillsBusyKey = skillKey;
  state.skillsError = null;
  try {
    const result = await state.client.request<{ message?: string }>("skills.install", {
      name,
      installId,
      dangerouslyForceUnsafeInstall,
      timeoutMs: 120000,
    });
    await kova_loadSkillsStatus(state);
    setSkillMessage(state, skillKey, {
      kind: "success",
      message: result?.message ?? "Installed",
    });
  } catch (err) {
    const message = getErrorMessage(err);
    state.skillsError = message;
    setSkillMessage(state, skillKey, {
      kind: "error",
      message,
    });
  } finally {
    state.skillsBusyKey = null;
  }
}

export async function kova_installMarketplaceSkill(
  state: SkillsState,
  marketplaceSkill: KovaMarketplaceSkill,
) {
  if (!state.client || !state.connected) {
    state.kova_marketplaceError = "Reconnect to install marketplace skills.";
    return;
  }

  const skillId = kova_validateMarketplaceSkillId(marketplaceSkill.id);
  const skillUrl = kova_validateMarketplaceSkillUrl(marketplaceSkill.url);

  state.kova_marketplaceBusyId = skillId;
  state.kova_marketplaceError = null;

  try {
    const response = await fetch(skillUrl, { cache: "no-store", mode: "cors" });
    if (!response.ok) {
      throw new Error(`Marketplace skill download failed (${response.status}).`);
    }
    const content = await response.text();
    if (!content.trim()) {
      throw new Error("Marketplace skill download returned an empty file.");
    }

    await state.client.request<AgentsFilesSetResult>("agents.files.set", {
      agentId: "main",
      name: `skills/${skillId}/SKILL.md`,
      content,
    });

    state.kova_installedSkillIds = Array.from(
      new Set([...state.kova_installedSkillIds, skillId]),
    ).sort((left, right) => left.localeCompare(right));

    await Promise.allSettled([kova_loadInstalledSkills(state), kova_loadSkillsStatus(state)]);
  } catch (err) {
    state.kova_marketplaceError = getErrorMessage(err);
  } finally {
    state.kova_marketplaceBusyId = null;
  }
}