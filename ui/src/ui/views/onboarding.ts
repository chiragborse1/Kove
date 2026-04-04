import { html, nothing } from "lit";
import type {
  ApiKeyMessage,
  ApiKeyProviderId,
  ApiKeyProviderStatus,
} from "../controllers/api-keys.ts";
import type { TelegramSetupMessage } from "../controllers/channels.types.ts";
import { buildExternalLinkRel, EXTERNAL_LINK_TARGET } from "../external-link.ts";
import {
  detectPlatform,
  DOWNLOAD_VERSION,
  getDownloadUrl,
  type DownloadPlatform,
} from "../lib/download-urls.ts";
import type {
  ChannelAccountSnapshot,
  ChannelsStatusSnapshot,
  TelegramStatus,
  WhatsAppStatus,
} from "../types.ts";

type OnboardingProps = {
  step: 1 | 2 | 3;
  selectedProvider: ApiKeyProviderId;
  connected: boolean;
  savingProviderId: ApiKeyProviderId | null;
  providerStatuses: Record<ApiKeyProviderId, ApiKeyProviderStatus | null>;
  providerInputs: Record<ApiKeyProviderId, string>;
  providerMessages: Record<ApiKeyProviderId, ApiKeyMessage | null>;
  snapshot: ChannelsStatusSnapshot | null;
  whatsappMessage: string | null;
  whatsappQrDataUrl: string | null;
  whatsappConnected: boolean | null;
  whatsappBusy: boolean;
  telegramSetupToken: string;
  telegramSetupBusy: boolean;
  telegramSetupMessage: TelegramSetupMessage | null;
  onStart: () => void;
  onSelectProvider: (provider: ApiKeyProviderId) => void;
  onProviderInput: (provider: ApiKeyProviderId, value: string) => void;
  onSaveProvider: (provider: ApiKeyProviderId) => Promise<void> | void;
  onContinueFromProvider: () => void;
  onSkip: () => void;
  onTelegramTokenInput: (next: string) => void;
  onTelegramConnect: () => void;
  onWhatsAppStart: () => void;
  onWhatsAppLogout: () => void;
  onFinish: () => void;
};

const ONBOARDING_PROVIDERS: Array<{
  id: ApiKeyProviderId;
  emoji: string;
  label: string;
  description: string;
  keyPlaceholder: string;
  keyUrl: string;
  recommended?: boolean;
}> = [
  {
    id: "openrouter",
    emoji: "🔀",
    label: "OpenRouter",
    description: "Access 100+ models with one key. Best for most users.",
    keyPlaceholder: "sk-or-v1-...",
    keyUrl: "https://openrouter.ai/keys",
    recommended: true,
  },
  {
    id: "anthropic",
    emoji: "🧠",
    label: "Anthropic",
    description: "Claude models. Smartest reasoning.",
    keyPlaceholder: "sk-ant-...",
    keyUrl: "https://console.anthropic.com/keys",
  },
  {
    id: "openai",
    emoji: "⚡",
    label: "OpenAI",
    description: "GPT models. Fast and reliable.",
    keyPlaceholder: "sk-...",
    keyUrl: "https://platform.openai.com/api-keys",
  },
];

function renderCallout(message: ApiKeyMessage | TelegramSetupMessage | null) {
  if (!message) {
    return nothing;
  }
  return html`
    <div class="callout ${message.kind === "error" ? "danger" : "success"}">${message.text}</div>
  `;
}

function readChannelStatus<T>(
  snapshot: ChannelsStatusSnapshot | null,
  channelId: string,
): T | undefined {
  const channel = snapshot?.channels?.[channelId];
  if (!channel || typeof channel !== "object" || Array.isArray(channel)) {
    return undefined;
  }
  return channel as T;
}

function readChannelAccounts(
  snapshot: ChannelsStatusSnapshot | null,
  channelId: string,
): ChannelAccountSnapshot[] {
  const accounts = snapshot?.channelAccounts?.[channelId];
  return Array.isArray(accounts) ? accounts : [];
}

function isTelegramConnected(snapshot: ChannelsStatusSnapshot | null): boolean {
  const telegram = readChannelStatus<TelegramStatus>(snapshot, "telegram");
  if (telegram?.configured || telegram?.running) {
    return true;
  }
  return readChannelAccounts(snapshot, "telegram").some(
    (account) => account.configured || account.running,
  );
}

function resolveTelegramDetails(snapshot: ChannelsStatusSnapshot | null): string | null {
  const telegram = readChannelStatus<TelegramStatus>(snapshot, "telegram");
  const primaryAccount = readChannelAccounts(snapshot, "telegram")[0];
  const probe = telegram?.probe as { bot?: { username?: string | null } } | null | undefined;
  const username = probe?.bot?.username?.trim();
  if (username) {
    return `Connected as @${username}`;
  }
  if (primaryAccount?.name?.trim()) {
    return `Connected as ${primaryAccount.name.trim()}`;
  }
  return null;
}

function resolveWhatsAppIdentity(whatsapp?: WhatsAppStatus): string | null {
  return whatsapp?.self?.e164?.trim() || whatsapp?.self?.jid?.trim() || null;
}

function renderStepIndicator(step: 1 | 2 | 3) {
  const labels = ["Welcome", "Provider", "Channel"] as const;
  return html`
    <div class="row" style="gap: 8px; flex-wrap: wrap;">
      ${labels.map((label, index) => {
        const active = step === index + 1;
        const done = step > index + 1;
        return html`
          <span class="chip ${active || done ? "chip-ok" : ""}"> ${index + 1}. ${label} </span>
        `;
      })}
    </div>
  `;
}

const DOWNLOAD_PLATFORMS: Array<{ id: DownloadPlatform; label: string }> = [
  { id: "windows", label: "Windows" },
  { id: "mac", label: "macOS" },
  { id: "linux", label: "Linux" },
];

function labelForPlatform(platform: DownloadPlatform): string {
  switch (platform) {
    case "mac":
      return "macOS";
    case "linux":
      return "Linux";
    default:
      return "Windows";
  }
}

function startPlatformDownload(platform: DownloadPlatform) {
  window.location.href = getDownloadUrl(platform);
}

function renderWelcomeScreen(props: OnboardingProps) {
  const detectedPlatform = detectPlatform();
  const primaryLabel = labelForPlatform(detectedPlatform);

  return html`
    <div style="display: grid; gap: 20px; text-align: center;">
      <div
        style="
          width: 92px;
          height: 92px;
          margin: 0 auto;
          border-radius: 28px;
          display: grid;
          place-items: center;
          background:
            radial-gradient(circle at top, rgba(255,255,255,0.28), transparent 55%),
            linear-gradient(135deg, rgba(25,118,210,0.95), rgba(3,169,244,0.82));
          color: white;
          font-size: 34px;
          font-weight: 700;
          letter-spacing: 0.08em;
        "
      >
        K
      </div>
      <div style="display: grid; gap: 8px;">
        <div class="row" style="justify-content: center;">
          <span class="chip chip-ok">v${DOWNLOAD_VERSION}</span>
        </div>
        <div
          style="font-size: 16px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted);"
        >
          Kova
        </div>
        <h1 style="margin: 0; font-size: clamp(32px, 6vw, 52px); line-height: 1.04;">
          Meet your AI team
        </h1>
        <p class="muted" style="margin: 0; font-size: 16px;">
          Set up Kova in 2 minutes. No terminal needed.
        </p>
      </div>
      <div style="display: grid; gap: 12px; justify-items: center;">
        <button
          class="btn primary"
          style="min-width: 260px;"
          @click=${() => startPlatformDownload(detectedPlatform)}
        >
          Download for ${primaryLabel}
        </button>
        <div
          style="
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;
            width: min(520px, 100%);
          "
        >
          ${DOWNLOAD_PLATFORMS.map(
            (platform) => html`
              <a class="btn" href=${getDownloadUrl(platform.id)} style="text-align: center;"
                >${platform.label}</a
              >
            `,
          )}
        </div>
        <div class="muted" style="font-size: 13px;">
          Downloads come from the latest GitHub release.
        </div>
      </div>
      <div class="row" style="justify-content: center;">
        <button class="btn" style="min-width: 220px;" @click=${() => props.onStart()}>
          Get Started ->
        </button>
      </div>
    </div>
  `;
}

function renderProviderScreen(props: OnboardingProps) {
  const provider =
    ONBOARDING_PROVIDERS.find((entry) => entry.id === props.selectedProvider) ??
    ONBOARDING_PROVIDERS[0];
  const saved = props.providerStatuses[provider.id]?.hasKey === true;
  const saving = props.savingProviderId === provider.id;
  const inputValue = props.providerInputs[provider.id];
  const currentKey = props.providerStatuses[provider.id]?.maskedKey ?? null;

  return html`
    <div style="display: grid; gap: 20px;">
      ${renderStepIndicator(props.step)}
      <div style="display: grid; gap: 8px;">
        <h1 style="margin: 0; font-size: clamp(28px, 4vw, 40px);">Connect your AI provider</h1>
        <p class="muted" style="margin: 0;">
          Pick the provider you want Kova to use, save the key, then continue to channel setup.
        </p>
      </div>

      <div
        style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px;"
      >
        ${ONBOARDING_PROVIDERS.map(
          (entry) => html`
            <button
              class="card"
              style="
                text-align: left;
                display: grid;
                gap: 10px;
                cursor: pointer;
                border-width: 2px;
                border-color: ${entry.id === provider.id
                ? "var(--accent, #1976d2)"
                : "var(--border)"};
                box-shadow: ${entry.id === provider.id
                ? "0 0 0 2px rgba(25,118,210,0.12)"
                : "none"};
              "
              @click=${() => props.onSelectProvider(entry.id)}
            >
              <div class="row" style="justify-content: space-between; align-items: center;">
                <span style="font-size: 22px;">${entry.emoji}</span>
                ${entry.recommended ? html`<span class="chip chip-ok">Recommended</span>` : nothing}
              </div>
              <div style="display: grid; gap: 4px;">
                <div style="font-weight: 700;">${entry.label}</div>
                <div class="muted" style="font-size: 13px;">${entry.description}</div>
              </div>
            </button>
          `,
        )}
      </div>

      <div class="card" style="display: grid; gap: 14px;">
        <div
          class="row"
          style="justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap;"
        >
          <div style="display: grid; gap: 4px;">
            <div class="card-title">${provider.emoji} ${provider.label}</div>
            <div class="card-sub">${provider.description}</div>
          </div>
          <span class="chip ${saved ? "chip-ok" : ""}">${saved ? "Key saved" : "Needs key"}</span>
        </div>

        <label class="field">
          <span>${provider.label} API key</span>
          <input
            type="password"
            .value=${inputValue}
            @input=${(event: Event) =>
              props.onProviderInput(provider.id, (event.target as HTMLInputElement).value)}
            placeholder=${provider.keyPlaceholder}
            autocomplete="off"
            ?disabled=${saving || !props.connected}
          />
        </label>

        <div
          class="row"
          style="justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap;"
        >
          <a
            href=${provider.keyUrl}
            target=${EXTERNAL_LINK_TARGET}
            rel=${buildExternalLinkRel()}
            style="font-size: 14px; font-weight: 600;"
          >
            Get a free key ->
          </a>
          ${currentKey
            ? html`
                <div class="muted" style="font-size: 13px;">
                  Saved key:
                  <span style="font-family: var(--font-mono, monospace);">${currentKey}</span>
                </div>
              `
            : nothing}
        </div>

        ${renderCallout(props.providerMessages[provider.id])}

        <div style="display: grid; gap: 10px; justify-items: start;">
          <button
            class="btn"
            ?disabled=${saving || !props.connected || !inputValue.trim()}
            @click=${() => props.onSaveProvider(provider.id)}
          >
            ${saving ? "Saving..." : "Save key"}
          </button>
          <button
            class="btn primary"
            style="min-width: 200px;"
            ?disabled=${!saved || saving}
            @click=${() => props.onContinueFromProvider()}
          >
            Continue ->
          </button>
          <button
            class="btn-link"
            style="padding: 0; border: 0; background: none; color: var(--muted);"
            @click=${() => props.onSkip()}
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderChannelScreen(props: OnboardingProps) {
  const telegramConnected = isTelegramConnected(props.snapshot);
  const telegramDetails = resolveTelegramDetails(props.snapshot);
  const whatsapp = readChannelStatus<WhatsAppStatus>(props.snapshot, "whatsapp");
  const whatsappConnected = whatsapp?.connected === true || props.whatsappConnected === true;
  const whatsappIdentity = resolveWhatsAppIdentity(whatsapp);

  return html`
    <div style="display: grid; gap: 20px;">
      ${renderStepIndicator(props.step)}
      <div style="display: grid; gap: 8px;">
        <h1 style="margin: 0; font-size: clamp(28px, 4vw, 40px);">
          Connect a channel to chat with your team
        </h1>
        <p class="muted" style="margin: 0;">
          Start with Telegram or WhatsApp now. You can always add the other channels later.
        </p>
      </div>

      <div
        style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;"
      >
        <div class="card" style="display: grid; gap: 14px;">
          <div class="row" style="justify-content: space-between; align-items: center; gap: 12px;">
            <div style="display: grid; gap: 4px;">
              <div class="card-title">Telegram</div>
              <div class="card-sub">Recommended for the fastest first chat loop.</div>
            </div>
            <span class="chip ${telegramConnected ? "chip-ok" : ""}">
              ${telegramConnected ? "Connected" : "Recommended"}
            </span>
          </div>

          <label class="field">
            <span>Bot token</span>
            <input
              type="password"
              .value=${props.telegramSetupToken}
              @input=${(event: Event) =>
                props.onTelegramTokenInput((event.target as HTMLInputElement).value)}
              placeholder="123456:ABCDEF..."
              autocomplete="off"
              ?disabled=${props.telegramSetupBusy}
            />
          </label>

          ${telegramDetails
            ? html`<div class="muted" style="font-size: 13px;">${telegramDetails}</div>`
            : nothing}
          ${renderCallout(props.telegramSetupMessage)}

          <button
            class="btn primary"
            ?disabled=${props.telegramSetupBusy || !props.connected}
            @click=${() => props.onTelegramConnect()}
          >
            ${props.telegramSetupBusy ? "Saving..." : "Connect Telegram"}
          </button>
        </div>

        <div class="card" style="display: grid; gap: 14px;">
          <div class="row" style="justify-content: space-between; align-items: center; gap: 12px;">
            <div style="display: grid; gap: 4px;">
              <div class="card-title">WhatsApp</div>
              <div class="card-sub">Link from your phone with a QR code.</div>
            </div>
            <span class="chip ${whatsappConnected ? "chip-ok" : ""}">
              ${whatsappConnected ? "Connected" : "QR setup"}
            </span>
          </div>

          ${whatsappIdentity
            ? html`<div class="muted" style="font-size: 13px;">Phone: ${whatsappIdentity}</div>`
            : nothing}
          ${props.whatsappMessage
            ? html`<div class="callout">${props.whatsappMessage}</div>`
            : html`
                <div class="muted" style="font-size: 13px;">
                  Open WhatsApp, go to Linked Devices, then scan the QR code here.
                </div>
              `}
          ${props.whatsappQrDataUrl
            ? html`
                <div class="qr-wrap" style="margin: 0; justify-self: start;">
                  <img src=${props.whatsappQrDataUrl} alt="WhatsApp QR" />
                </div>
              `
            : nothing}

          <div class="row" style="gap: 8px; flex-wrap: wrap;">
            ${whatsappConnected
              ? html`
                  <button
                    class="btn"
                    ?disabled=${props.whatsappBusy}
                    @click=${() => props.onWhatsAppLogout()}
                  >
                    ${props.whatsappBusy ? "Working..." : "Disconnect"}
                  </button>
                `
              : html`
                  <button
                    class="btn primary"
                    ?disabled=${props.whatsappBusy || !props.connected}
                    @click=${() => props.onWhatsAppStart()}
                  >
                    ${props.whatsappBusy
                      ? "Starting..."
                      : props.whatsappQrDataUrl
                        ? "Refresh QR"
                        : "Connect via QR"}
                  </button>
                `}
          </div>
        </div>
      </div>

      <div
        class="row"
        style="justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap;"
      >
        <button
          class="btn-link"
          style="padding: 0; border: 0; background: none; color: var(--muted);"
          @click=${() => props.onSkip()}
        >
          Skip for now
        </button>
        <button class="btn primary" style="min-width: 220px;" @click=${() => props.onFinish()}>
          Finish Setup ->
        </button>
      </div>
    </div>
  `;
}

export function renderOnboarding(props: OnboardingProps) {
  return html`
    <section
      class="page"
      style="
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 32px 20px;
        background:
          radial-gradient(circle at top left, rgba(25,118,210,0.16), transparent 26%),
          radial-gradient(circle at top right, rgba(3,169,244,0.14), transparent 24%),
          linear-gradient(180deg, rgba(255,255,255,0.02), transparent 40%);
      "
    >
      <div
        class="card"
        style="
          width: min(960px, 100%);
          display: grid;
          gap: 22px;
          padding: clamp(24px, 4vw, 40px);
          border-radius: 28px;
          box-shadow: 0 24px 80px rgba(15, 23, 42, 0.16);
        "
      >
        ${props.step === 1
          ? renderWelcomeScreen(props)
          : props.step === 2
            ? renderProviderScreen(props)
            : renderChannelScreen(props)}
      </div>
    </section>
  `;
}
