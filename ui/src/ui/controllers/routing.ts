import type { AgentsListResult, ChannelsStatusSnapshot, ConfigSnapshot } from "../types.ts";
import { cloneConfigObject, serializeConfigForm } from "./config/form-utils.ts";
import { KOVA_EMPLOYEES } from "./employees.ts";

export type RoutingChannelId = "telegram" | "whatsapp";

export type RoutingAssignments = Record<RoutingChannelId, string>;

export type RoutingMessage = {
  kind: "success" | "error";
  text: string;
};

export type RoutingEmployeeOption = {
  id: string;
  name: string;
  role: string | null;
  isCustom: boolean;
};

export const ROUTING_CHANNELS = ["telegram", "whatsapp"] as const satisfies readonly RoutingChannelId[];

const DEFAULT_ASSIGNMENTS: RoutingAssignments = {
  telegram: "main",
  whatsapp: "main",
};

const BUILTIN_EMPLOYEE_META = new Map(KOVA_EMPLOYEES.map((employee) => [employee.id, employee] as const));

function normalizeRoutingChannel(value: unknown): RoutingChannelId | null {
  if (value === "telegram" || value === "whatsapp") {
    return value;
  }
  return null;
}

function normalizeAssignedAgentId(value: unknown): string {
  return typeof value === "string" && value.trim() ? value.trim() : "main";
}

function deriveEmployeeName(agentId: string): string {
  const trimmed = agentId.replace(/^kova-/, "").trim();
  if (!trimmed) {
    return agentId;
  }
  return trimmed
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function isManagedRoutingBinding(binding: unknown): binding is {
  type?: "route";
  agentId?: string;
  match?: { channel?: RoutingChannelId };
} {
  if (!binding || typeof binding !== "object" || Array.isArray(binding)) {
    return false;
  }
  const record = binding as {
    type?: unknown;
    match?: {
      channel?: unknown;
      accountId?: unknown;
      peer?: unknown;
      guildId?: unknown;
      teamId?: unknown;
      roles?: unknown;
    };
  };
  if (record.type != null && record.type !== "route") {
    return false;
  }
  const channel = normalizeRoutingChannel(record.match?.channel);
  if (!channel) {
    return false;
  }
  if (typeof record.match?.accountId === "string" && record.match.accountId.trim()) {
    return false;
  }
  if (record.match?.peer || record.match?.guildId || record.match?.teamId) {
    return false;
  }
  if (Array.isArray(record.match?.roles) && record.match.roles.length > 0) {
    return false;
  }
  return true;
}

export function resolveRoutingEmployees(agentsList: AgentsListResult | null): RoutingEmployeeOption[] {
  const agents = Array.isArray(agentsList?.agents) ? agentsList.agents : [];
  const agentNameById = new Map(
    agents.map((agent) => [agent.id, typeof agent.name === "string" ? agent.name.trim() : ""] as const),
  );

  const builtins = KOVA_EMPLOYEES.map((employee) => ({
    id: employee.id,
    name: agentNameById.get(employee.id) || employee.name,
    role: employee.role,
    isCustom: false,
  }));

  const customs = agents
    .filter((agent) => typeof agent.id === "string" && agent.id.startsWith("kova-"))
    .filter((agent) => !BUILTIN_EMPLOYEE_META.has(agent.id))
    .map((agent) => ({
      id: agent.id,
      name:
        (typeof agent.name === "string" && agent.name.trim()) || deriveEmployeeName(agent.id),
      role: "Custom Kova employee",
      isCustom: true,
    }))
    .toSorted((left, right) => left.name.localeCompare(right.name));

  return [...builtins, ...customs];
}

function resolveBindings(snapshot: ConfigSnapshot | null): unknown[] {
  const config = snapshot?.config;
  const bindings = config && typeof config === "object" ? config.bindings : null;
  return Array.isArray(bindings) ? bindings : [];
}

export function hydrateRoutingAssignments(snapshot: ConfigSnapshot | null): RoutingAssignments {
  const next: RoutingAssignments = { ...DEFAULT_ASSIGNMENTS };
  const seen = new Set<RoutingChannelId>();
  for (const binding of resolveBindings(snapshot)) {
    if (!isManagedRoutingBinding(binding)) {
      continue;
    }
    const channel = binding.match?.channel;
    if (!channel || seen.has(channel)) {
      continue;
    }
    next[channel] = normalizeAssignedAgentId(binding.agentId);
    seen.add(channel);
  }
  return next;
}

export function serializeRoutingConfig(
  snapshot: ConfigSnapshot | null,
  assignments: RoutingAssignments,
): string {
  const nextConfig = cloneConfigObject((snapshot?.config ?? {}));
  const currentBindings = resolveBindings(snapshot);
  const preservedBindings = currentBindings.filter((binding) => !isManagedRoutingBinding(binding));
  const managedBindings = ROUTING_CHANNELS.flatMap((channel) => {
    const agentId = normalizeAssignedAgentId(assignments[channel]);
    if (agentId === "main") {
      return [];
    }
    return [
      {
        type: "route" as const,
        agentId,
        match: { channel },
      },
    ];
  });

  if (preservedBindings.length > 0 || managedBindings.length > 0) {
    nextConfig.bindings = [...preservedBindings, ...managedBindings];
  } else {
    delete nextConfig.bindings;
  }

  return serializeConfigForm(nextConfig);
}

function readChannelStatus<T>(snapshot: ChannelsStatusSnapshot | null, channelId: string): T | null {
  const channel = snapshot?.channels?.[channelId];
  if (!channel || typeof channel !== "object" || Array.isArray(channel)) {
    return null;
  }
  return channel as T;
}

export function isRoutingChannelConnected(
  snapshot: ChannelsStatusSnapshot | null,
  whatsappLoginConnected: boolean | null,
  channel: RoutingChannelId,
): boolean {
  if (channel === "telegram") {
    const telegram = readChannelStatus<{ running?: boolean | null }>(snapshot, "telegram");
    return (
      telegram?.running === true ||
      (snapshot?.channelAccounts?.telegram ?? []).some((account) => account.running === true)
    );
  }

  const whatsapp = readChannelStatus<{ connected?: boolean | null }>(snapshot, "whatsapp");
  return (
    whatsapp?.connected === true ||
    whatsappLoginConnected === true ||
    (snapshot?.channelAccounts?.whatsapp ?? []).some((account) => account.connected === true)
  );
}

export function labelForRoutingChannel(channel: RoutingChannelId): string {
  return channel === "telegram" ? "Telegram" : "WhatsApp";
}
