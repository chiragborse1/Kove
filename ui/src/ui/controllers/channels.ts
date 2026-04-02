import type { ChannelsStatusSnapshot } from "../types.ts";
import { loadConfig } from "./config.ts";
import {
  cloneConfigObject,
  removePathValue,
  serializeConfigForm,
  setPathValue,
} from "./config/form-utils.ts";
import type {
  ChannelsState,
  TelegramPendingApproval,
  TelegramSetupMessage,
} from "./channels.types.ts";
import {
  formatMissingOperatorReadScopeMessage,
  isMissingOperatorReadScopeError,
} from "./scope-errors.ts";

export type { ChannelsState, TelegramPendingApproval, TelegramSetupMessage };

type PairingListResponse = {
  requests?: Array<{
    id?: unknown;
    code?: unknown;
    createdAt?: unknown;
    lastSeenAt?: unknown;
  }>;
};

function getErrorMessage(err: unknown): string {
  if (err instanceof Error) {
    return err.message;
  }
  return String(err);
}

function syncWhatsAppStateFromSnapshot(state: ChannelsState, snapshot: ChannelsStatusSnapshot | null) {
  const channels = snapshot?.channels as Record<string, unknown> | null;
  const whatsapp = (channels?.whatsapp ?? null) as
    | { connected?: unknown; self?: { e164?: unknown; jid?: unknown } | null }
    | null;
  const connected = whatsapp?.connected === true;
  const e164 = typeof whatsapp?.self?.e164 === "string" ? whatsapp.self.e164.trim() : "";
  const jid = typeof whatsapp?.self?.jid === "string" ? whatsapp.self.jid.trim() : "";
  const identity = e164 || jid;
  if (!connected) {
    state.whatsappLoginConnected = false;
    return;
  }
  state.whatsappLoginConnected = true;
  state.whatsappLoginQrDataUrl = null;
  if (identity) {
    state.whatsappLoginMessage = `Connected as ${identity}.`;
  }
}

function setTelegramSetupMessage(
  state: ChannelsState,
  message: TelegramSetupMessage | null,
): void {
  state.telegramSetupMessage = message;
}

function setTelegramApprovalsMessage(
  state: ChannelsState,
  message: TelegramSetupMessage | null,
): void {
  state.telegramApprovalsMessage = message;
}

function normalizeTelegramPendingApprovals(response: PairingListResponse): TelegramPendingApproval[] {
  const requests = Array.isArray(response.requests) ? response.requests : [];
  return requests
    .map((entry) => {
      const userId = typeof entry.id === "string" ? entry.id.trim() : "";
      const code = typeof entry.code === "string" ? entry.code.trim() : "";
      const createdAt = typeof entry.createdAt === "string" ? entry.createdAt : "";
      const lastSeenAt = typeof entry.lastSeenAt === "string" ? entry.lastSeenAt : createdAt;
      if (!userId || !code || !createdAt) {
        return null;
      }
      return {
        userId,
        code,
        createdAt,
        lastSeenAt,
      } satisfies TelegramPendingApproval;
    })
    .filter((entry): entry is TelegramPendingApproval => entry !== null);
}

function buildTelegramConfigSavePayload(
  state: ChannelsState,
  updater: (config: Record<string, unknown>) => void,
): { raw: string; baseHash: string } {
  const baseHash = state.configSnapshot?.hash;
  if (!baseHash) {
    throw new Error("Config is not loaded yet. Reload and try again.");
  }
  const nextConfig = cloneConfigObject(state.configForm ?? state.configSnapshot?.config ?? {});
  updater(nextConfig);
  return {
    raw: serializeConfigForm(nextConfig),
    baseHash,
  };
}

export async function loadChannels(state: ChannelsState, probe: boolean) {
  if (!state.client || !state.connected) {
    return;
  }
  if (state.channelsLoading) {
    return;
  }
  state.channelsLoading = true;
  state.channelsError = null;
  try {
    const res = await state.client.request<ChannelsStatusSnapshot | null>("channels.status", {
      probe,
      timeoutMs: 8000,
    });
    state.channelsSnapshot = res;
    syncWhatsAppStateFromSnapshot(state, res);
    state.channelsLastSuccess = Date.now();
  } catch (err) {
    if (isMissingOperatorReadScopeError(err)) {
      state.channelsSnapshot = null;
      state.channelsError = formatMissingOperatorReadScopeMessage("channel status");
    } else {
      state.channelsError = String(err);
    }
  } finally {
    state.channelsLoading = false;
  }
}

export async function loadTelegramPendingApprovals(
  state: ChannelsState,
  opts?: { quiet?: boolean },
) {
  if (!state.client || !state.connected) {
    return;
  }
  if (state.telegramApprovalsLoading) {
    return;
  }
  state.telegramApprovalsLoading = true;
  if (!opts?.quiet) {
    setTelegramApprovalsMessage(state, null);
  }
  try {
    const response = await state.client.request<PairingListResponse>("pairing.list", {
      channel: "telegram",
    });
    state.telegramPendingApprovals = normalizeTelegramPendingApprovals(response);
  } catch (err) {
    setTelegramApprovalsMessage(state, {
      kind: "error",
      text: `Could not load pending approvals: ${getErrorMessage(err)}`,
    });
  } finally {
    state.telegramApprovalsLoading = false;
  }
}

export function updateTelegramSetupToken(state: ChannelsState, value: string) {
  state.telegramSetupToken = value;
  if (state.telegramSetupMessage) {
    state.telegramSetupMessage = null;
  }
}

export async function connectTelegram(state: ChannelsState) {
  if (!state.client || !state.connected || state.telegramSetupBusy) {
    return;
  }
  const token = state.telegramSetupToken.trim();
  if (!token) {
    setTelegramSetupMessage(state, {
      kind: "error",
      text: "Enter a Telegram bot token.",
    });
    return;
  }

  state.telegramSetupBusy = true;
  setTelegramSetupMessage(state, null);
  try {
    const { raw, baseHash } = buildTelegramConfigSavePayload(state, (config) => {
      setPathValue(config, ["channels", "telegram", "enabled"], true);
      setPathValue(config, ["channels", "telegram", "botToken"], token);
    });
    await state.client.request("config.set", { raw, baseHash });
    state.telegramSetupToken = "";
    await loadConfig(state);
    await loadChannels(state, true);
    await loadTelegramPendingApprovals(state, { quiet: true });
    setTelegramSetupMessage(state, {
      kind: "success",
      text: "Telegram connected.",
    });
  } catch (err) {
    setTelegramSetupMessage(state, {
      kind: "error",
      text: `Telegram connect failed: ${getErrorMessage(err)}`,
    });
  } finally {
    state.telegramSetupBusy = false;
  }
}

export async function disconnectTelegram(state: ChannelsState) {
  if (!state.client || !state.connected || state.telegramSetupBusy) {
    return;
  }

  state.telegramSetupBusy = true;
  setTelegramSetupMessage(state, null);
  try {
    const { raw, baseHash } = buildTelegramConfigSavePayload(state, (config) => {
      removePathValue(config, ["channels", "telegram", "botToken"]);
    });
    await state.client.request("config.set", { raw, baseHash });
    state.telegramSetupToken = "";
    await loadConfig(state);
    await loadChannels(state, true);
    setTelegramSetupMessage(state, {
      kind: "success",
      text: "Telegram disconnected.",
    });
  } catch (err) {
    setTelegramSetupMessage(state, {
      kind: "error",
      text: `Telegram disconnect failed: ${getErrorMessage(err)}`,
    });
  } finally {
    state.telegramSetupBusy = false;
  }
}

export async function approveTelegramPairing(state: ChannelsState, code: string) {
  if (!state.client || !state.connected || state.telegramApprovalsBusyCode) {
    return;
  }
  state.telegramApprovalsBusyCode = code;
  setTelegramApprovalsMessage(state, null);
  try {
    await state.client.request("pairing.approve", {
      channel: "telegram",
      code,
    });
    await loadTelegramPendingApprovals(state, { quiet: true });
    setTelegramApprovalsMessage(state, {
      kind: "success",
      text: `Approved pairing code ${code}.`,
    });
  } catch (err) {
    setTelegramApprovalsMessage(state, {
      kind: "error",
      text: `Could not approve pairing code ${code}: ${getErrorMessage(err)}`,
    });
  } finally {
    state.telegramApprovalsBusyCode = null;
  }
}

export async function rejectTelegramPairing(state: ChannelsState, code: string) {
  if (!state.client || !state.connected || state.telegramApprovalsBusyCode) {
    return;
  }
  state.telegramApprovalsBusyCode = code;
  setTelegramApprovalsMessage(state, null);
  try {
    await state.client.request("pairing.reject", {
      channel: "telegram",
      code,
    });
    await loadTelegramPendingApprovals(state, { quiet: true });
    setTelegramApprovalsMessage(state, {
      kind: "success",
      text: `Rejected pairing code ${code}.`,
    });
  } catch (err) {
    setTelegramApprovalsMessage(state, {
      kind: "error",
      text: `Could not reject pairing code ${code}: ${getErrorMessage(err)}`,
    });
  } finally {
    state.telegramApprovalsBusyCode = null;
  }
}

export async function startWhatsAppLogin(state: ChannelsState, force: boolean) {
  if (!state.client || !state.connected || state.whatsappBusy) {
    return;
  }
  state.whatsappBusy = true;
  try {
    const res = await state.client.request<{ message?: string; qrDataUrl?: string }>(
      "channels.login",
      {
        channel: "whatsapp",
        force,
        timeoutMs: 30000,
      },
    );
    state.whatsappLoginMessage = res.message ?? null;
    state.whatsappLoginQrDataUrl = res.qrDataUrl ?? null;
    state.whatsappLoginConnected = null;
  } catch (err) {
    state.whatsappLoginMessage = String(err);
    state.whatsappLoginQrDataUrl = null;
    state.whatsappLoginConnected = null;
  } finally {
    state.whatsappBusy = false;
  }
}

export async function waitWhatsAppLogin(state: ChannelsState) {
  if (!state.client || !state.connected || state.whatsappBusy) {
    return;
  }
  state.whatsappBusy = true;
  try {
    const res = await state.client.request<{ message?: string; connected?: boolean }>(
      "channels.login.wait",
      {
        channel: "whatsapp",
        timeoutMs: 120000,
      },
    );
    state.whatsappLoginMessage = res.message ?? null;
    state.whatsappLoginConnected = res.connected ?? null;
    if (res.connected) {
      state.whatsappLoginQrDataUrl = null;
    }
  } catch (err) {
    state.whatsappLoginMessage = String(err);
    state.whatsappLoginConnected = null;
  } finally {
    state.whatsappBusy = false;
  }
}

export async function logoutWhatsApp(state: ChannelsState) {
  if (!state.client || !state.connected || state.whatsappBusy) {
    return;
  }
  state.whatsappBusy = true;
  try {
    await state.client.request("channels.logout", { channel: "whatsapp" });
    state.whatsappLoginMessage = "Logged out.";
    state.whatsappLoginQrDataUrl = null;
    state.whatsappLoginConnected = null;
  } catch (err) {
    state.whatsappLoginMessage = String(err);
  } finally {
    state.whatsappBusy = false;
  }
}


