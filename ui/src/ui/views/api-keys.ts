import { html, nothing } from "lit";
import { buildExternalLinkRel, EXTERNAL_LINK_TARGET } from "../external-link.ts";
import {
  API_KEY_PROVIDER_DEFINITIONS,
  CUSTOM_MODEL_OPTION,
  type ApiKeyMessage,
  type ApiKeyProviderId,
  type ApiKeyProviderStatus,
} from "../controllers/api-keys.ts";

type ApiKeysProps = {
  loading: boolean;
  connected: boolean;
  savingProviderId: ApiKeyProviderId | null;
  testingProviderId: ApiKeyProviderId | null;
  modelSaving: boolean;
  currentModel: string;
  modelOption: string;
  customModelInput: string;
  pageMessage: ApiKeyMessage | null;
  elevenLabsInput: string;
  elevenLabsConfigured: boolean;
  elevenLabsSaving: boolean;
  elevenLabsTesting: boolean;
  elevenLabsMessage: ApiKeyMessage | null;
  providerStatuses: Record<ApiKeyProviderId, ApiKeyProviderStatus | null>;
  providerInputs: Record<ApiKeyProviderId, string>;
  providerMessages: Record<ApiKeyProviderId, ApiKeyMessage | null>;
  onProviderInput: (provider: ApiKeyProviderId, value: string) => void;
  onElevenLabsInput: (value: string) => void;
  onModelOptionChange: (value: string) => void;
  onCustomModelInput: (value: string) => void;
  onRefresh: () => Promise<void> | void;
  onSaveElevenLabs: () => Promise<void> | void;
  onTestElevenLabs: () => Promise<void> | void;
  onSaveProvider: (provider: ApiKeyProviderId) => Promise<void> | void;
  onSaveModel: () => Promise<void> | void;
  onTestProvider: (provider: ApiKeyProviderId) => Promise<void> | void;
  onSetActive: (provider: ApiKeyProviderId) => Promise<void> | void;
};

function renderCallout(message: ApiKeyMessage | null) {
  if (!message) {
    return nothing;
  }
  return html`
    <div class="callout ${message.kind === "error" ? "danger" : "success"}">${message.text}</div>
  `;
}

function resolveActiveProvider(props: ApiKeysProps) {
  const providerId = props.currentModel.trim().split("/", 1)[0]?.trim().toLowerCase();
  return API_KEY_PROVIDER_DEFINITIONS.find(
    (provider) => provider.id === providerId && props.providerStatuses[provider.id]?.hasKey,
  );
}

function resolveDraftModel(props: ApiKeysProps) {
  return props.modelOption === CUSTOM_MODEL_OPTION
    ? props.customModelInput.trim()
    : props.modelOption.trim();
}

function renderCurrentKey(status: ApiKeyProviderStatus | null, label: string) {
  if (!status?.hasKey) {
    return html`<div class="muted" style="font-size: 13px;">No saved ${label} key yet.</div>`;
  }
  return html`
    <div class="muted" style="font-size: 13px;">
      Current saved key: <span style="font-family: var(--font-mono, monospace);">${status.maskedKey}</span>
    </div>
  `;
}

export function renderApiKeys(props: ApiKeysProps) {
  const activeProvider = resolveActiveProvider(props);
  const draftModel = resolveDraftModel(props);
  const busy = !props.connected || props.loading || props.modelSaving;

  return html`
    <section class="page page--settings" style="display: grid; gap: 20px;">
      <div class="card" style="display: grid; gap: 16px; max-width: 860px;">
        <div class="row" style="justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap;">
          <div style="display: grid; gap: 4px;">
            <div class="card-title">API Keys</div>
            <div class="card-sub">Manage provider API keys and default models without editing config files.</div>
          </div>
          <span class="chip ${activeProvider ? "chip-ok" : ""}">
            ${activeProvider ? `${activeProvider.emoji} ${activeProvider.label} active` : "No active provider"}
          </span>
        </div>

        <div class="muted" style="font-size: 13px;">
          Current model:
          <span style="font-family: var(--font-mono, monospace);">${props.currentModel}</span>
        </div>
        ${draftModel && draftModel !== props.currentModel
          ? html`
              <div class="muted" style="font-size: 13px;">
                Draft model:
                <span style="font-family: var(--font-mono, monospace);">${draftModel}</span>
              </div>
            `
          : nothing}

        <label class="field">
          <span>Model</span>
          <select
            .value=${props.modelOption}
            @change=${(event: Event) =>
              props.onModelOptionChange((event.target as HTMLSelectElement).value)}
            ?disabled=${busy}
          >
            ${API_KEY_PROVIDER_DEFINITIONS.filter((provider) => provider.popularModels.length > 0).map(
              (provider) => html`
                <optgroup label=${provider.label}>
                  ${provider.popularModels.map(
                    (model) => html`<option value=${model}>${model}</option>`,
                  )}
                </optgroup>
              `,
            )}
            <option value=${CUSTOM_MODEL_OPTION}>Custom model...</option>
          </select>
        </label>

        ${props.modelOption === CUSTOM_MODEL_OPTION
          ? html`
              <label class="field">
                <span>Custom model</span>
                <input
                  type="text"
                  .value=${props.customModelInput}
                  @input=${(event: Event) =>
                    props.onCustomModelInput((event.target as HTMLInputElement).value)}
                  placeholder="provider/model"
                  autocomplete="off"
                  ?disabled=${busy}
                />
              </label>
            `
          : nothing}

        <div class="muted" style="font-size: 13px;">
          Leave this on <span style="font-family: var(--font-mono, monospace);">openrouter/auto</span>
          to let OpenRouter pick the best model, or switch to Custom model... to paste any provider/model ref.
        </div>

        <div class="row" style="gap: 8px; flex-wrap: wrap; align-items: center;">
          <button class="btn" ?disabled=${!props.connected || props.loading} @click=${() => props.onRefresh()}>
            ${props.loading ? "Refreshing..." : "Refresh"}
          </button>
          <button
            class="btn primary"
            ?disabled=${busy || !draftModel}
            @click=${() => props.onSaveModel()}
          >
            ${props.modelSaving ? "Saving model..." : "Save model"}
          </button>
        </div>

        ${renderCallout(props.pageMessage)}
      </div>

      <div style="display: grid; gap: 16px;">
        <div class="card" style="display: grid; gap: 16px; max-width: 860px;">
          <div class="row" style="justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap;">
            <div style="display: grid; gap: 4px;">
              <div class="card-title">Voice Settings (ElevenLabs)</div>
              <div class="card-sub">Let Kova employees speak their replies with ElevenLabs TTS.</div>
            </div>
            <span class="chip ${props.elevenLabsConfigured ? "chip-ok" : ""}">
              ${props.elevenLabsConfigured ? "Configured" : "Not configured"}
            </span>
          </div>

          <label class="field">
            <span>ElevenLabs API key</span>
            <input
              type="password"
              .value=${props.elevenLabsInput}
              @input=${(event: Event) =>
                props.onElevenLabsInput((event.target as HTMLInputElement).value)}
              placeholder="sk_..."
              autocomplete="off"
              ?disabled=${!props.connected || props.loading || props.elevenLabsSaving || props.elevenLabsTesting}
            />
          </label>

          <div class="muted" style="font-size: 13px;">
            Get your key at
            <a
              href="https://elevenlabs.io"
              target=${EXTERNAL_LINK_TARGET}
              rel=${buildExternalLinkRel()}
            >elevenlabs.io</a>
          </div>

          <div class="muted" style="font-size: 13px;">
            Voice mode is available for Kova employees in chat. Changes take effect immediately.
          </div>

          <div class="row" style="gap: 8px; flex-wrap: wrap; align-items: center;">
            <button
              class="btn primary"
              ?disabled=${!props.connected || props.loading || props.elevenLabsSaving || !props.elevenLabsInput.trim()}
              @click=${() => props.onSaveElevenLabs()}
            >
              ${props.elevenLabsSaving ? "Saving..." : "Save"}
            </button>
            <button
              class="btn"
              ?disabled=${!props.connected || props.loading || props.elevenLabsSaving || props.elevenLabsTesting}
              @click=${() => props.onTestElevenLabs()}
            >
              ${props.elevenLabsTesting ? "Speaking..." : "Test voice"}
            </button>
          </div>

          ${renderCallout(props.elevenLabsMessage)}
        </div>

        ${API_KEY_PROVIDER_DEFINITIONS.map((provider) => {
          const status = props.providerStatuses[provider.id];
          const configured = status?.hasKey === true;
          const isActive = activeProvider?.id === provider.id;
          const saving = props.savingProviderId === provider.id;
          const testing = props.testingProviderId === provider.id;
          const inputValue = props.providerInputs[provider.id];
          const canSave = props.connected && !props.loading && !props.modelSaving && !saving && Boolean(inputValue.trim());
          const canTest =
            props.connected &&
            !props.loading &&
            !props.modelSaving &&
            !testing &&
            (configured || Boolean(inputValue.trim()));
          const canSetActive = props.connected && !props.loading && !props.modelSaving && configured && !isActive;

          return html`
            <div class="card" style="display: grid; gap: 16px; max-width: 860px;">
              <div class="row" style="justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap;">
                <div style="display: grid; gap: 4px;">
                  <div class="card-title">${provider.emoji} ${provider.label}</div>
                  <div class="card-sub">
                    Recommended model:
                    <span style="font-family: var(--font-mono, monospace);">${provider.recommendedModel}</span>
                  </div>
                </div>
                <div class="row" style="gap: 8px; flex-wrap: wrap; align-items: center;">
                  ${isActive ? html`<span class="chip chip-ok">Active</span>` : nothing}
                  <span class="chip ${configured ? "chip-ok" : ""}">
                    ${configured ? "Configured" : "Not configured"}
                  </span>
                </div>
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
                  ?disabled=${!props.connected || props.loading || props.modelSaving || saving || testing}
                />
              </label>

              <div class="muted" style="font-size: 13px;">
                Get your key at
                <a
                  href=${provider.keyUrl}
                  target=${EXTERNAL_LINK_TARGET}
                  rel=${buildExternalLinkRel()}
                >${provider.keyUrl.replace(/^https?:\/\//, "")}</a>
              </div>

              ${renderCurrentKey(status, provider.label)}

              <div class="row" style="gap: 8px; flex-wrap: wrap; align-items: center;">
                <button class="btn primary" ?disabled=${!canSave} @click=${() => props.onSaveProvider(provider.id)}>
                  ${saving ? "Saving..." : "Save"}
                </button>
                <button class="btn" ?disabled=${!canTest} @click=${() => props.onTestProvider(provider.id)}>
                  ${testing ? "Testing..." : "Test connection"}
                </button>
                <button class="btn" ?disabled=${!canSetActive} @click=${() => props.onSetActive(provider.id)}>
                  ${isActive ? "Active" : "Set as active"}
                </button>
              </div>

              ${renderCallout(props.providerMessages[provider.id])}
            </div>
          `;
        })}
      </div>
    </section>
  `;
}
