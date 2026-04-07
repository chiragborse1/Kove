import { resolveAgentIdFromSessionKey } from "../../../../src/routing/session-key.js";
import type { GatewayBrowserClient } from "../gateway.ts";
import type { GatewaySessionRow, SessionsListResult } from "../types.ts";
import { KOVA_EMPLOYEES } from "./employees.ts";
import {
  formatMissingOperatorReadScopeMessage,
  isMissingOperatorReadScopeError,
} from "./scope-errors.ts";

export type InboxChannelFilter = "all" | "telegram" | "whatsapp" | "unanswered";

export type InboxState = {
  client: GatewayBrowserClient | null;
  connected: boolean;
  inboxLoading: boolean;
  inboxSessions: GatewaySessionRow[] | null;
  inboxError: string | null;
};

const KOVA_EMPLOYEE_NAMES = new Map(KOVA_EMPLOYEES.map((employee) => [employee.id, employee.name]));

function normalizeChannel(value: unknown): string {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}

export function getChannelFromSession(session: GatewaySessionRow): "telegram" | "whatsapp" | null {
  const candidates = [
    session.channel,
    session.lastChannel,
    session.surface,
    typeof session.origin === "object" && session.origin
      ? (session.origin as { channel?: unknown }).channel
      : undefined,
    session.key,
  ];
  for (const candidate of candidates) {
    const normalized = normalizeChannel(candidate);
    if (normalized.includes("telegram")) {
      return "telegram";
    }
    if (normalized.includes("whatsapp")) {
      return "whatsapp";
    }
  }
  return null;
}

export function formatLastMessage(session: GatewaySessionRow): string {
  const text =
    session.lastMessagePreview?.trim() ||
    session.derivedTitle?.trim() ||
    session.subject?.trim() ||
    session.displayName?.trim() ||
    session.label?.trim() ||
    "Open the conversation in Chat to read the latest messages.";
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= 80) {
    return normalized;
  }
  return `${normalized.slice(0, 77)}...`;
}

export function hasEmployeeReply(session: GatewaySessionRow): boolean {
  return session.systemSent === true;
}

export function formatResponder(session: GatewaySessionRow): string {
  if (!hasEmployeeReply(session)) {
    return "Awaiting employee reply";
  }
  const agentId = resolveAgentIdFromSessionKey(session.key);
  const employeeName = agentId ? KOVA_EMPLOYEE_NAMES.get(agentId) : null;
  return employeeName ? `${employeeName} replied` : "Employee replied";
}

export function filterByChannel(
  sessions: GatewaySessionRow[],
  channel: InboxChannelFilter,
): GatewaySessionRow[] {
  const channelSessions = sessions.filter((session) => getChannelFromSession(session) !== null);
  if (channel === "all") {
    return channelSessions;
  }
  if (channel === "unanswered") {
    return channelSessions.filter((session) => !hasEmployeeReply(session));
  }
  return channelSessions.filter((session) => getChannelFromSession(session) === channel);
}

export async function loadInbox(state: InboxState) {
  if (!state.client || !state.connected || state.inboxLoading) {
    return;
  }
  state.inboxLoading = true;
  state.inboxError = null;
  try {
    const result = await state.client.request<SessionsListResult | undefined>("sessions.list", {
      limit: 50,
      includeGlobal: false,
      includeUnknown: false,
    });
    const sessions = [...(result?.sessions ?? [])].toSorted(
      (left, right) => (right.updatedAt ?? 0) - (left.updatedAt ?? 0),
    );
    state.inboxSessions = sessions;
  } catch (error) {
    if (isMissingOperatorReadScopeError(error)) {
      state.inboxSessions = null;
      state.inboxError = formatMissingOperatorReadScopeMessage("inbox");
    } else {
      state.inboxError = String(error);
    }
  } finally {
    state.inboxLoading = false;
  }
}
