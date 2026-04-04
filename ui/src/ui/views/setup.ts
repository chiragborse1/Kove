import { html, nothing } from "lit";
import type { ApiKeyMessage, ApiKeyProviderId } from "../controllers/api-keys.ts";
import { buildExternalLinkRel, EXTERNAL_LINK_TARGET } from "../external-link.ts";

export type SetupChannel = "telegram" | "whatsapp" | "skip";

export type SetupProps = {
  step: 1 | 2 | 3 | 4;
  loading: boolean;
  message: ApiKeyMessage | null;
  userName: string;
  provider: ApiKeyProviderId;
  apiKey: string;
  channel: SetupChannel;
  telegramToken: string;
  onNameInput: (value: string) => void;
  onSelectProvider: (provider: ApiKeyProviderId) => void;
  onApiKeyInput: (value: string) => void;
  onSelectChannel: (channel: SetupChannel) => void;
  onTelegramTokenInput: (value: string) => void;
  onBack: () => void;
  onNext: () => void;
  onLaunch: () => void;
};

export type SetupSplashProps = {
  title: string;
  message: string;
};

const PROVIDERS: Array<{
  id: ApiKeyProviderId;
  label: string;
  emoji: string;
  description: string;
  placeholder: string;
}> = [
  {
    id: "openrouter",
    label: "OpenRouter",
    emoji: "🔶",
    description: "Best all-around starting point with broad model coverage.",
    placeholder: "sk-or-v1-...",
  },
  {
    id: "anthropic",
    label: "Anthropic",
    emoji: "🧠",
    description: "Claude models for long-form reasoning and writing.",
    placeholder: "sk-ant-...",
  },
  {
    id: "openai",
    label: "OpenAI",
    emoji: "⚡",
    description: "GPT models for fast multi-purpose assistant work.",
    placeholder: "sk-...",
  },
  {
    id: "google",
    label: "Gemini",
    emoji: "🔵",
    description: "Gemini models for speed, multimodal work, and search-style tasks.",
    placeholder: "AIza...",
  },
  {
    id: "groq",
    label: "Groq",
    emoji: "🚀",
    description: "Ultra-fast open-weight inference for chat-heavy workflows.",
    placeholder: "gsk_...",
  },
];

const CHANNELS: Array<{
  id: SetupChannel;
  label: string;
  emoji: string;
  description: string;
}> = [
  {
    id: "telegram",
    label: "Telegram",
    emoji: "✈️",
    description: "Start with a bot your team can message immediately.",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    emoji: "💬",
    description: "Connect WhatsApp after launch from Communications.",
  },
  {
    id: "skip",
    label: "Skip for now",
    emoji: "⏭️",
    description: "Launch Kova first and finish channels later.",
  },
];

function renderCallout(message: ApiKeyMessage | null) {
  if (!message) {
    return nothing;
  }
  return html`<div class="callout ${message.kind === "error" ? "danger" : "success"}">
    ${message.text}
  </div>`;
}

function renderProgress(step: SetupProps["step"]) {
  const labels = ["Your Name", "AI Provider", "Channel", "Launch"] as const;
  return html`
    <div class="setup-progress">
      ${labels.map(
        (label, index) => html`
          <div
            class="setup-progress__step ${step === index + 1 ? "setup-progress__step--active" : ""}"
          >
            <div class="setup-progress__step-index">Step ${index + 1} of 4</div>
            <div class="setup-progress__step-label">${label}</div>
          </div>
        `,
      )}
    </div>
  `;
}

function providerDetails(provider: ApiKeyProviderId) {
  return PROVIDERS.find((entry) => entry.id === provider) ?? PROVIDERS[0];
}

export function renderSetup(props: SetupProps) {
  const selectedProvider = providerDetails(props.provider);
  return html`
    <div class="setup-screen">
      <div class="setup-card setup-shell">
        <div class="setup-header">
          <div class="setup-brand">
            <div class="setup-brand__mark">K</div>
            <div class="setup-brand__copy">
              <div class="setup-kicker">Kova</div>
              <div class="card-title">Hire Your AI Team</div>
              <div class="card-sub">
                A focused desktop HQ for your gateway, employees, and conversations.
              </div>
            </div>
          </div>
          ${renderProgress(props.step)}
        </div>

        ${renderCallout(props.message)}
        ${props.step === 1
          ? html`
              <div class="setup-grid">
                <div>
                  <h1 style="margin: 0 0 8px;">What should your team call you?</h1>
                  <p class="muted" style="margin: 0;">
                    Kova will use your name to make greetings and employee prompts feel more
                    personal.
                  </p>
                </div>
                <label class="field">
                  <span>Your name</span>
                  <input
                    type="text"
                    .value=${props.userName}
                    placeholder="Chirag"
                    @input=${(event: Event) =>
                      props.onNameInput((event.target as HTMLInputElement).value)}
                  />
                </label>
              </div>
            `
          : nothing}
        ${props.step === 2
          ? html`
              <div class="setup-grid">
                <div>
                  <h1 style="margin: 0 0 8px;">Choose your primary AI provider</h1>
                  <p class="muted" style="margin: 0;">
                    Kova will save this key and make the provider active before the app launches.
                  </p>
                </div>
                <div class="setup-option-grid">
                  ${PROVIDERS.map(
                    (provider) => html`
                      <button
                        class="setup-option ${props.provider === provider.id
                          ? "setup-option--selected"
                          : ""}"
                        @click=${() => props.onSelectProvider(provider.id)}
                      >
                        <div style="font-size: 24px;">${provider.emoji}</div>
                        <div class="setup-option__title">${provider.label}</div>
                        <div class="setup-option__meta">${provider.description}</div>
                      </button>
                    `,
                  )}
                </div>
                <label class="field">
                  <span>${selectedProvider.label} API key</span>
                  <input
                    type="password"
                    .value=${props.apiKey}
                    placeholder=${selectedProvider.placeholder}
                    @input=${(event: Event) =>
                      props.onApiKeyInput((event.target as HTMLInputElement).value)}
                  />
                </label>
              </div>
            `
          : nothing}
        ${props.step === 3
          ? html`
              <div class="setup-grid">
                <div>
                  <h1 style="margin: 0 0 8px;">Pick your first channel</h1>
                  <p class="muted" style="margin: 0;">
                    Telegram is ready during setup. WhatsApp can be connected right after launch.
                  </p>
                </div>
                <div class="setup-option-grid">
                  ${CHANNELS.map(
                    (channel) => html`
                      <button
                        class="setup-option ${props.channel === channel.id
                          ? "setup-option--selected"
                          : ""}"
                        @click=${() => props.onSelectChannel(channel.id)}
                      >
                        <div style="font-size: 24px;">${channel.emoji}</div>
                        <div class="setup-option__title">${channel.label}</div>
                        <div class="setup-option__meta">${channel.description}</div>
                      </button>
                    `,
                  )}
                </div>
                ${props.channel === "telegram"
                  ? html`
                      <label class="field">
                        <span>Telegram bot token</span>
                        <input
                          type="password"
                          .value=${props.telegramToken}
                          placeholder="123456789:AA..."
                          @input=${(event: Event) =>
                            props.onTelegramTokenInput((event.target as HTMLInputElement).value)}
                        />
                      </label>
                      <div class="muted" style="font-size: 13px;">
                        Need help?
                        <a
                          href="https://core.telegram.org/bots#how-do-i-create-a-bot"
                          target=${EXTERNAL_LINK_TARGET}
                          rel=${buildExternalLinkRel(EXTERNAL_LINK_TARGET)}
                        >
                          Telegram bot setup instructions
                        </a>
                      </div>
                    `
                  : nothing}
              </div>
            `
          : nothing}
        ${props.step === 4
          ? html`
              <div class="setup-grid">
                <div>
                  <h1 style="margin: 0 0 8px;">Confirm and launch Kova</h1>
                  <p class="muted" style="margin: 0;">
                    We’ll save your provider key, activate it, and then open your team workspace.
                  </p>
                </div>
                <div class="setup-summary">
                  <div class="setup-summary__item">
                    <div class="setup-summary__label">Owner</div>
                    <div>${props.userName.trim() || "Not set"}</div>
                  </div>
                  <div class="setup-summary__item">
                    <div class="setup-summary__label">Provider</div>
                    <div>${selectedProvider.label}</div>
                  </div>
                  <div class="setup-summary__item">
                    <div class="setup-summary__label">Primary Channel</div>
                    <div>
                      ${CHANNELS.find((entry) => entry.id === props.channel)?.label ??
                      "Skip for now"}
                    </div>
                  </div>
                </div>
                <div class="card-sub">
                  ${props.channel === "telegram"
                    ? "Telegram will be configured during launch."
                    : props.channel === "whatsapp"
                      ? "WhatsApp will stay as your preferred channel, and you can finish pairing from Communications."
                      : "You can finish channel setup later from Communications."}
                </div>
              </div>
            `
          : nothing}

        <div class="setup-actions">
          <button
            class="btn btn--ghost"
            ?disabled=${props.step === 1 || props.loading}
            @click=${props.onBack}
          >
            Back
          </button>
          ${props.step < 4
            ? html`
                <button class="btn primary" ?disabled=${props.loading} @click=${props.onNext}>
                  Continue
                </button>
              `
            : html`
                <button class="btn primary" ?disabled=${props.loading} @click=${props.onLaunch}>
                  ${props.loading ? "Launching..." : "Confirm and Launch"}
                </button>
              `}
        </div>
      </div>
    </div>
  `;
}

export function renderSetupSplash(props: SetupSplashProps) {
  return html`
    <div class="setup-screen">
      <div class="setup-card setup-loading">
        <div class="setup-loading__pulse">K</div>
        <div style="display: grid; gap: 8px;">
          <div class="card-title">${props.title}</div>
          <div class="card-sub">${props.message}</div>
        </div>
      </div>
    </div>
  `;
}
