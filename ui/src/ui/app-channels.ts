import type { OpenClawApp } from "./app.ts";
import {
  loadChannels,
  logoutWhatsApp,
  startWhatsAppLogin,
  waitWhatsAppLogin,
} from "./controllers/channels.ts";
import { loadConfig, saveConfig } from "./controllers/config.ts";
import type { NostrProfile, WhatsAppStatus } from "./types.ts";
import { createNostrProfileFormState } from "./views/channels.nostr-profile-form.ts";

const WHATSAPP_QR_REFRESH_MS = 30_000;
const WHATSAPP_STATUS_POLL_MS = 3_000;
const WHATSAPP_CONNECTED_POLL_WINDOW_MS = 30_000;

const whatsappFlowTokens = new WeakMap<OpenClawApp, number>();
const whatsappRefreshTimers = new WeakMap<OpenClawApp, ReturnType<typeof globalThis.setTimeout>>();
const whatsappQrIssuedAt = new WeakMap<OpenClawApp, number>();
const whatsappPollDeadlines = new WeakMap<OpenClawApp, number>();

function resolveWhatsAppStatus(host: OpenClawApp): WhatsAppStatus | null {
  const channels = host.channelsSnapshot?.channels as Record<string, unknown> | null;
  return ((channels?.whatsapp as WhatsAppStatus | undefined) ?? null) as WhatsAppStatus | null;
}

function resolveWhatsAppIdentity(status: WhatsAppStatus | null): string | null {
  const e164 = status?.self?.e164?.trim();
  if (e164) {
    return e164;
  }
  const jid = status?.self?.jid?.trim();
  return jid || null;
}

function isWhatsAppConnected(status: WhatsAppStatus | null): boolean {
  return status?.connected === true;
}

function currentWhatsAppFlowToken(host: OpenClawApp): number {
  return whatsappFlowTokens.get(host) ?? 0;
}

function clearWhatsAppRefreshTimer(host: OpenClawApp) {
  const timer = whatsappRefreshTimers.get(host);
  if (timer) {
    globalThis.clearTimeout(timer);
    whatsappRefreshTimers.delete(host);
  }
}

function stopWhatsAppSetupFlow(host: OpenClawApp) {
  clearWhatsAppRefreshTimer(host);
  whatsappQrIssuedAt.delete(host);
  whatsappPollDeadlines.delete(host);
  whatsappFlowTokens.set(host, currentWhatsAppFlowToken(host) + 1);
}

function beginWhatsAppSetupFlow(host: OpenClawApp): number {
  stopWhatsAppSetupFlow(host);
  return currentWhatsAppFlowToken(host);
}

function markWhatsAppConnected(host: OpenClawApp, status: WhatsAppStatus | null) {
  const identity = resolveWhatsAppIdentity(status);
  host.whatsappLoginConnected = true;
  host.whatsappLoginQrDataUrl = null;
  host.whatsappLoginMessage = identity ? `Connected as ${identity}.` : "Connected.";
  clearWhatsAppRefreshTimer(host);
  whatsappQrIssuedAt.delete(host);
  whatsappPollDeadlines.delete(host);
}

function beginWhatsAppConnectedPolling(
  host: OpenClawApp,
  token: number,
  opts: { resetWindow?: boolean } = {},
) {
  if (opts.resetWindow || !whatsappPollDeadlines.has(host)) {
    whatsappPollDeadlines.set(host, Date.now() + WHATSAPP_CONNECTED_POLL_WINDOW_MS);
  }
  scheduleWhatsAppSetupTick(host, token);
}

function scheduleWhatsAppSetupTick(host: OpenClawApp, token: number) {
  clearWhatsAppRefreshTimer(host);
  const timer = globalThis.setTimeout(() => {
    void runWhatsAppSetupTick(host, token);
  }, WHATSAPP_STATUS_POLL_MS);
  whatsappRefreshTimers.set(host, timer);
}

async function runWhatsAppSetupTick(host: OpenClawApp, token: number) {
  if (currentWhatsAppFlowToken(host) !== token || !host.connected) {
    return;
  }
  await loadChannels(host, true);
  if (currentWhatsAppFlowToken(host) !== token) {
    return;
  }

  const status = resolveWhatsAppStatus(host);
  if (isWhatsAppConnected(status)) {
    markWhatsAppConnected(host, status);
    return;
  }

  const issuedAt = whatsappQrIssuedAt.get(host) ?? 0;
  const pollDeadline = whatsappPollDeadlines.get(host) ?? 0;
  const shouldRefreshQr =
    Boolean(host.whatsappLoginQrDataUrl) && Date.now() - issuedAt >= WHATSAPP_QR_REFRESH_MS;

  if (shouldRefreshQr) {
    await startWhatsAppLogin(host, false);
    if (currentWhatsAppFlowToken(host) !== token) {
      return;
    }
    await loadChannels(host, true);
    if (currentWhatsAppFlowToken(host) !== token) {
      return;
    }
    if (host.whatsappLoginQrDataUrl) {
      whatsappQrIssuedAt.set(host, Date.now());
      whatsappPollDeadlines.set(host, Date.now() + WHATSAPP_CONNECTED_POLL_WINDOW_MS);
    }
  }

  if (host.whatsappLoginQrDataUrl && Date.now() < pollDeadline) {
    scheduleWhatsAppSetupTick(host, token);
  }
}

function noteWhatsAppQrReceived(host: OpenClawApp) {
  const token = currentWhatsAppFlowToken(host);
  whatsappQrIssuedAt.set(host, Date.now());
  beginWhatsAppConnectedPolling(host, token, { resetWindow: true });
}

export async function handleWhatsAppStart(host: OpenClawApp, force: boolean) {
  const token = beginWhatsAppSetupFlow(host);
  host.whatsappLoginConnected = false;
  await startWhatsAppLogin(host, force);
  await loadChannels(host, true);
  if (currentWhatsAppFlowToken(host) !== token) {
    return;
  }

  const status = resolveWhatsAppStatus(host);
  if (isWhatsAppConnected(status)) {
    markWhatsAppConnected(host, status);
    return;
  }

  if (host.whatsappLoginQrDataUrl) {
    if (!host.whatsappLoginMessage) {
      host.whatsappLoginMessage = "Open WhatsApp -> Linked Devices -> Scan QR.";
    }
    noteWhatsAppQrReceived(host);
  }
}

export function handleWhatsAppQrCodeEvent(host: OpenClawApp) {
  host.whatsappLoginConnected = false;
  if (!host.whatsappLoginQrDataUrl) {
    return;
  }
  noteWhatsAppQrReceived(host);
}

export async function handleWhatsAppRelink(host: OpenClawApp) {
  stopWhatsAppSetupFlow(host);
  host.whatsappLoginConnected = false;
  host.whatsappLoginQrDataUrl = null;
  host.whatsappLoginMessage = "Clearing the stored WhatsApp session and generating a fresh QR…";
  await logoutWhatsApp(host);
  await loadChannels(host, true);
  await handleWhatsAppStart(host, false);
}

export async function handleWhatsAppWait(host: OpenClawApp) {
  await waitWhatsAppLogin(host);
  await loadChannels(host, true);
  const status = resolveWhatsAppStatus(host);
  if (isWhatsAppConnected(status)) {
    markWhatsAppConnected(host, status);
  }
}

export async function handleWhatsAppLogout(host: OpenClawApp) {
  stopWhatsAppSetupFlow(host);
  host.whatsappLoginConnected = false;
  host.whatsappLoginQrDataUrl = null;
  await logoutWhatsApp(host);
  await loadChannels(host, true);
}

export async function handleChannelConfigSave(host: OpenClawApp) {
  await saveConfig(host);
  await loadConfig(host);
  await loadChannels(host, true);
}

export async function handleChannelConfigReload(host: OpenClawApp) {
  await loadConfig(host);
  await loadChannels(host, true);
}

function parseValidationErrors(details: unknown): Record<string, string> {
  if (!Array.isArray(details)) {
    return {};
  }
  const errors: Record<string, string> = {};
  for (const entry of details) {
    if (typeof entry !== "string") {
      continue;
    }
    const [rawField, ...rest] = entry.split(":");
    if (!rawField || rest.length === 0) {
      continue;
    }
    const field = rawField.trim();
    const message = rest.join(":").trim();
    if (field && message) {
      errors[field] = message;
    }
  }
  return errors;
}

function resolveNostrAccountId(host: OpenClawApp): string {
  const accounts = host.channelsSnapshot?.channelAccounts?.nostr ?? [];
  return accounts[0]?.accountId ?? host.nostrProfileAccountId ?? "default";
}

function buildNostrProfileUrl(accountId: string, suffix = ""): string {
  return `/api/channels/nostr/${encodeURIComponent(accountId)}/profile${suffix}`;
}

function resolveGatewayHttpAuthHeader(host: OpenClawApp): string | null {
  const deviceToken = host.hello?.auth?.deviceToken?.trim();
  if (deviceToken) {
    return `Bearer ${deviceToken}`;
  }
  const token = host.settings.token.trim();
  if (token) {
    return `Bearer ${token}`;
  }
  const password = host.password.trim();
  if (password) {
    return `Bearer ${password}`;
  }
  return null;
}

function buildGatewayHttpHeaders(host: OpenClawApp): Record<string, string> {
  const authorization = resolveGatewayHttpAuthHeader(host);
  return authorization ? { Authorization: authorization } : {};
}

export function handleNostrProfileEdit(
  host: OpenClawApp,
  accountId: string,
  profile: NostrProfile | null,
) {
  host.nostrProfileAccountId = accountId;
  host.nostrProfileFormState = createNostrProfileFormState(profile ?? undefined);
}

export function handleNostrProfileCancel(host: OpenClawApp) {
  host.nostrProfileFormState = null;
  host.nostrProfileAccountId = null;
}

export function handleNostrProfileFieldChange(
  host: OpenClawApp,
  field: keyof NostrProfile,
  value: string,
) {
  const state = host.nostrProfileFormState;
  if (!state) {
    return;
  }
  host.nostrProfileFormState = {
    ...state,
    values: {
      ...state.values,
      [field]: value,
    },
    fieldErrors: {
      ...state.fieldErrors,
      [field]: "",
    },
  };
}

export function handleNostrProfileToggleAdvanced(host: OpenClawApp) {
  const state = host.nostrProfileFormState;
  if (!state) {
    return;
  }
  host.nostrProfileFormState = {
    ...state,
    showAdvanced: !state.showAdvanced,
  };
}

export async function handleNostrProfileSave(host: OpenClawApp) {
  const state = host.nostrProfileFormState;
  if (!state || state.saving) {
    return;
  }
  const accountId = resolveNostrAccountId(host);

  host.nostrProfileFormState = {
    ...state,
    saving: true,
    error: null,
    success: null,
    fieldErrors: {},
  };

  try {
    const response = await fetch(buildNostrProfileUrl(accountId), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...buildGatewayHttpHeaders(host),
      },
      body: JSON.stringify(state.values),
    });
    const data = (await response.json().catch(() => null)) as {
      ok?: boolean;
      error?: string;
      details?: unknown;
      persisted?: boolean;
    } | null;

    if (!response.ok || data?.ok === false || !data) {
      const errorMessage = data?.error ?? `Profile update failed (${response.status})`;
      host.nostrProfileFormState = {
        ...state,
        saving: false,
        error: errorMessage,
        success: null,
        fieldErrors: parseValidationErrors(data?.details),
      };
      return;
    }

    if (!data.persisted) {
      host.nostrProfileFormState = {
        ...state,
        saving: false,
        error: "Profile publish failed on all relays.",
        success: null,
      };
      return;
    }

    host.nostrProfileFormState = {
      ...state,
      saving: false,
      error: null,
      success: "Profile published to relays.",
      fieldErrors: {},
      original: { ...state.values },
    };
    await loadChannels(host, true);
  } catch (err) {
    host.nostrProfileFormState = {
      ...state,
      saving: false,
      error: `Profile update failed: ${String(err)}`,
      success: null,
    };
  }
}

export async function handleNostrProfileImport(host: OpenClawApp) {
  const state = host.nostrProfileFormState;
  if (!state || state.importing) {
    return;
  }
  const accountId = resolveNostrAccountId(host);

  host.nostrProfileFormState = {
    ...state,
    importing: true,
    error: null,
    success: null,
  };

  try {
    const response = await fetch(buildNostrProfileUrl(accountId, "/import"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...buildGatewayHttpHeaders(host),
      },
      body: JSON.stringify({ autoMerge: true }),
    });
    const data = (await response.json().catch(() => null)) as {
      ok?: boolean;
      error?: string;
      imported?: NostrProfile;
      merged?: NostrProfile;
      saved?: boolean;
    } | null;

    if (!response.ok || data?.ok === false || !data) {
      const errorMessage = data?.error ?? `Profile import failed (${response.status})`;
      host.nostrProfileFormState = {
        ...state,
        importing: false,
        error: errorMessage,
        success: null,
      };
      return;
    }

    const merged = data.merged ?? data.imported ?? null;
    const nextValues = merged ? { ...state.values, ...merged } : state.values;
    const showAdvanced = Boolean(
      nextValues.banner || nextValues.website || nextValues.nip05 || nextValues.lud16,
    );

    host.nostrProfileFormState = {
      ...state,
      importing: false,
      values: nextValues,
      error: null,
      success: data.saved
        ? "Profile imported from relays. Review and publish."
        : "Profile imported. Review and publish.",
      showAdvanced,
    };

    if (data.saved) {
      await loadChannels(host, true);
    }
  } catch (err) {
    host.nostrProfileFormState = {
      ...state,
      importing: false,
      error: `Profile import failed: ${String(err)}`,
      success: null,
    };
  }
}
