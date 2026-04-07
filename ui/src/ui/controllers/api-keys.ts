import type { GatewayBrowserClient } from "../gateway.ts";
import type { ConfigSnapshot } from "../types.ts";
import {
  cacheElevenLabsApiKey,
  getCachedElevenLabsApiKey,
  speakText as speakElevenLabsText,
} from "../voice/elevenlabs.ts";

export const CUSTOM_MODEL_OPTION = "__custom__";

export type ApiKeyProviderId =
  | "openrouter"
  | "anthropic"
  | "openai"
  | "google"
  | "groq"
  | "huggingface";

export type ApiKeyMessage = {
  kind: "success" | "error";
  text: string;
};

export type ApiKeyProviderDefinition = {
  id: ApiKeyProviderId;
  label: string;
  emoji: string;
  keyUrl: string;
  keyPlaceholder: string;
  recommendedModel: string;
  popularModels: readonly string[];
};

function buildProviderRecord<T>(
  createValue: (providerId: ApiKeyProviderId) => T,
): Record<ApiKeyProviderId, T> {
  return {
    openrouter: createValue("openrouter"),
    anthropic: createValue("anthropic"),
    openai: createValue("openai"),
    google: createValue("google"),
    groq: createValue("groq"),
    huggingface: createValue("huggingface"),
  };
}

export const API_KEY_PROVIDER_DEFINITIONS = [
  {
    id: "openrouter",
    label: "OpenRouter",
    emoji: "🔶",
    keyUrl: "https://openrouter.ai/keys",
    keyPlaceholder: "sk-or-v1-...",
    recommendedModel: "openrouter/auto",
    popularModels: [
      "openrouter/auto",
      "openrouter/claude-3.5-sonnet",
      "openrouter/gpt-4o",
      "openrouter/gemini-pro",
    ],
  },
  {
    id: "anthropic",
    label: "Anthropic",
    emoji: "🟣",
    keyUrl: "https://console.anthropic.com",
    keyPlaceholder: "sk-ant-...",
    recommendedModel: "anthropic/claude-sonnet-4-5",
    popularModels: ["anthropic/claude-sonnet-4-5", "anthropic/claude-opus-4"],
  },
  {
    id: "openai",
    label: "OpenAI",
    emoji: "🟢",
    keyUrl: "https://platform.openai.com/api-keys",
    keyPlaceholder: "sk-...",
    recommendedModel: "openai/gpt-4o",
    popularModels: ["openai/gpt-4o", "openai/gpt-4o-mini", "openai/o3"],
  },
  {
    id: "google",
    label: "Gemini",
    emoji: "🔵",
    keyUrl: "https://aistudio.google.com",
    keyPlaceholder: "AIza...",
    recommendedModel: "google/gemini-2.0-flash",
    popularModels: ["google/gemini-2.0-flash", "google/gemini-pro"],
  },
  {
    id: "groq",
    label: "Groq",
    emoji: "⚡",
    keyUrl: "https://console.groq.com",
    keyPlaceholder: "gsk_...",
    recommendedModel: "groq/llama-3.3-70b",
    popularModels: ["groq/llama-3.3-70b", "groq/mixtral-8x7b"],
  },
  {
    id: "huggingface",
    label: "Hugging Face",
    emoji: "🤗",
    keyUrl: "https://huggingface.co/settings/tokens",
    keyPlaceholder: "hf_...",
    recommendedModel: "huggingface/Qwen/Qwen3-Coder-480B-A35B-Instruct",
    popularModels: [],
  },
] as const satisfies readonly ApiKeyProviderDefinition[];

const PROVIDER_BY_ID = buildProviderRecord((providerId) => {
  const provider = API_KEY_PROVIDER_DEFINITIONS.find((entry) => entry.id === providerId);
  if (!provider) {
    throw new Error(`Unknown API key provider: ${providerId}`);
  }
  return provider;
});

const POPULAR_MODELS = new Set<string>(
  API_KEY_PROVIDER_DEFINITIONS.flatMap((provider) => provider.popularModels),
);

export type ApiKeyProviderStatus = {
  provider: ApiKeyProviderId;
  profileId: string;
  hasKey: boolean;
  maskedKey: string | null;
  recommendedModel: string;
};

export type ApiKeysSnapshot = {
  providers: ApiKeyProviderStatus[];
  currentModel: string;
  configHash: string | null;
};

export type ApiKeyProviderTestResult = {
  ok: boolean;
  provider: ApiKeyProviderId;
  model: string;
  message: string;
};

export type ApiKeysState = {
  client: GatewayBrowserClient | null;
  connected: boolean;
  settings: { gatewayUrl: string };
  apiKeysLoading: boolean;
  apiKeysLoaded: boolean;
  apiKeysSavingProviderId: ApiKeyProviderId | null;
  apiKeysTestingProviderId: ApiKeyProviderId | null;
  apiKeysModelSaving: boolean;
  apiKeysCurrentModel: string;
  apiKeysModelOption: string;
  apiKeysCustomModelInput: string;
  apiKeysConfigHash: string | null;
  apiKeysPageMessage: ApiKeyMessage | null;
  apiKeysElevenLabsInput: string;
  apiKeysElevenLabsConfigured: boolean;
  apiKeysElevenLabsSaving: boolean;
  apiKeysElevenLabsTesting: boolean;
  apiKeysElevenLabsConfigHash: string | null;
  apiKeysElevenLabsMessage: ApiKeyMessage | null;
  apiKeyProviderInputs: Record<ApiKeyProviderId, string>;
  apiKeyProviderStatuses: Record<ApiKeyProviderId, ApiKeyProviderStatus | null>;
  apiKeyProviderMessages: Record<ApiKeyProviderId, ApiKeyMessage | null>;
};

const ELEVENLABS_TEST_AGENT_ID = "kova-alex";
const ELEVENLABS_TEST_TEXT = "Hello, I am Alex, your AI researcher.";
const ELEVENLABS_CONFIG_PATH = ["messages", "tts", "providers", "elevenlabs", "apiKey"] as const;

function createProviderRecord<T>(createValue: () => T): Record<ApiKeyProviderId, T> {
  return buildProviderRecord(() => createValue());
}

export function createApiKeyInputRecord(): Record<ApiKeyProviderId, string> {
  return createProviderRecord(() => "");
}

export function createApiKeyStatusRecord(): Record<ApiKeyProviderId, ApiKeyProviderStatus | null> {
  return createProviderRecord(() => null);
}

export function createApiKeyMessageRecord(): Record<ApiKeyProviderId, ApiKeyMessage | null> {
  return createProviderRecord(() => null);
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error && error.message.trim()) {
    return error.message;
  }
  return String(error);
}

function getProviderDefinition(provider: ApiKeyProviderId): ApiKeyProviderDefinition {
  return PROVIDER_BY_ID[provider];
}

function setProviderMessage(
  state: ApiKeysState,
  provider: ApiKeyProviderId,
  message: ApiKeyMessage | null,
) {
  state.apiKeyProviderMessages = {
    ...state.apiKeyProviderMessages,
    [provider]: message,
  };
}

function extractProviderFromModel(model: string): ApiKeyProviderId | null {
  const providerId = model.trim().split("/", 1)[0]?.trim().toLowerCase();
  if (!providerId) {
    return null;
  }
  return Object.hasOwn(PROVIDER_BY_ID, providerId) ? (providerId as ApiKeyProviderId) : null;
}

function syncModelDraft(state: ApiKeysState, currentModel: string) {
  state.apiKeysCurrentModel = currentModel;
  if (POPULAR_MODELS.has(currentModel)) {
    state.apiKeysModelOption = currentModel;
    state.apiKeysCustomModelInput = "";
    return;
  }
  state.apiKeysModelOption = CUSTOM_MODEL_OPTION;
  state.apiKeysCustomModelInput = currentModel;
}

function applySnapshot(
  state: ApiKeysState,
  snapshot: ApiKeysSnapshot,
  options?: { resetInputs?: boolean },
) {
  const nextStatuses = createApiKeyStatusRecord();
  for (const status of snapshot.providers) {
    nextStatuses[status.provider] = status;
  }
  state.apiKeysLoaded = true;
  state.apiKeyProviderStatuses = nextStatuses;
  state.apiKeysConfigHash = snapshot.configHash;
  syncModelDraft(state, snapshot.currentModel);
  if (options?.resetInputs) {
    state.apiKeyProviderInputs = createApiKeyInputRecord();
  }
}

function resolveDraftModel(state: ApiKeysState): string {
  return state.apiKeysModelOption === CUSTOM_MODEL_OPTION
    ? state.apiKeysCustomModelInput.trim()
    : state.apiKeysModelOption.trim();
}

function resolveProviderTestModel(state: ApiKeysState, provider: ApiKeyProviderId): string {
  const draftModel = resolveDraftModel(state);
  if (extractProviderFromModel(draftModel) === provider) {
    return draftModel;
  }
  return getProviderDefinition(provider).recommendedModel;
}

function getNestedConfigValue(
  config: Record<string, unknown> | null | undefined,
  path: readonly string[],
): unknown {
  let current: unknown = config;
  for (const key of path) {
    if (!current || typeof current !== "object" || Array.isArray(current)) {
      return undefined;
    }
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

function isConfiguredSecretValue(value: unknown): boolean {
  if (typeof value === "string") {
    return value.trim().length > 0;
  }
  return Boolean(value && typeof value === "object");
}

function applyElevenLabsSnapshot(state: ApiKeysState, snapshot: ConfigSnapshot) {
  state.apiKeysElevenLabsConfigured = isConfiguredSecretValue(
    getNestedConfigValue(snapshot.config ?? null, ELEVENLABS_CONFIG_PATH),
  );
  state.apiKeysElevenLabsConfigHash = snapshot.hash ?? null;
  const cachedApiKey = getCachedElevenLabsApiKey(state.settings.gatewayUrl);
  if (!state.apiKeysElevenLabsInput.trim() && cachedApiKey) {
    state.apiKeysElevenLabsInput = cachedApiKey;
  }
}

async function fetchElevenLabsSnapshot(state: ApiKeysState): Promise<ConfigSnapshot> {
  if (!state.client) {
    throw new Error("Gateway client is not available.");
  }
  return state.client.request<ConfigSnapshot>("config.get", {});
}

async function ensureElevenLabsConfigHash(state: ApiKeysState): Promise<string> {
  if (state.apiKeysElevenLabsConfigHash) {
    return state.apiKeysElevenLabsConfigHash;
  }
  const snapshot = await fetchElevenLabsSnapshot(state);
  applyElevenLabsSnapshot(state, snapshot);
  if (!snapshot.hash) {
    throw new Error("Config hash is not available yet. Refresh and try again.");
  }
  return snapshot.hash;
}

function resolveElevenLabsApiKey(state: ApiKeysState): string {
  return (
    state.apiKeysElevenLabsInput.trim() || getCachedElevenLabsApiKey(state.settings.gatewayUrl)
  );
}

async function applyActiveModel(state: ApiKeysState, provider: ApiKeyProviderId, model: string) {
  if (!state.client || !state.connected || state.apiKeysModelSaving) {
    return;
  }
  state.apiKeysModelSaving = true;
  state.apiKeysPageMessage = null;
  try {
    const snapshot = await state.client.request<ApiKeysSnapshot>("apiKeys.activeModel.set", {
      provider,
      model,
      ...(state.apiKeysConfigHash ? { baseHash: state.apiKeysConfigHash } : {}),
    });
    applySnapshot(state, snapshot);
    state.apiKeysPageMessage = {
      kind: "success",
      text: `${getProviderDefinition(provider).label} is now active.`,
    };
  } catch (error) {
    state.apiKeysPageMessage = {
      kind: "error",
      text: `Could not save the active model: ${getErrorMessage(error)}`,
    };
  } finally {
    state.apiKeysModelSaving = false;
  }
}

export function updateProviderApiKeyInput(
  state: ApiKeysState,
  provider: ApiKeyProviderId,
  value: string,
) {
  state.apiKeyProviderInputs = {
    ...state.apiKeyProviderInputs,
    [provider]: value,
  };
  setProviderMessage(state, provider, null);
}

export function updateApiKeysModelOption(state: ApiKeysState, value: string) {
  state.apiKeysModelOption = value;
  if (value !== CUSTOM_MODEL_OPTION) {
    state.apiKeysCustomModelInput = "";
  }
  state.apiKeysPageMessage = null;
}

export function updateApiKeysCustomModelInput(state: ApiKeysState, value: string) {
  state.apiKeysCustomModelInput = value;
  state.apiKeysPageMessage = null;
}

export async function loadApiKeys(state: ApiKeysState) {
  if (!state.client || !state.connected || state.apiKeysLoading) {
    return;
  }
  state.apiKeysLoading = true;
  state.apiKeysPageMessage = null;
  state.apiKeysElevenLabsMessage = null;
  try {
    const [providerResult, elevenLabsResult] = await Promise.allSettled([
      state.client.request<ApiKeysSnapshot>("apiKeys.providers.get", {}),
      fetchElevenLabsSnapshot(state),
    ]);

    if (providerResult.status !== "fulfilled") {
      throw providerResult.reason;
    }

    applySnapshot(state, providerResult.value, { resetInputs: true });
    state.apiKeyProviderMessages = createApiKeyMessageRecord();

    if (elevenLabsResult.status === "fulfilled") {
      applyElevenLabsSnapshot(state, elevenLabsResult.value);
    } else {
      state.apiKeysElevenLabsMessage = {
        kind: "error",
        text: `Could not load ElevenLabs settings: ${getErrorMessage(elevenLabsResult.reason)}`,
      };
    }
  } catch (error) {
    state.apiKeysPageMessage = {
      kind: "error",
      text: `Could not load API key settings: ${getErrorMessage(error)}`,
    };
  } finally {
    state.apiKeysLoading = false;
  }
}

export async function saveProviderApiKey(state: ApiKeysState, provider: ApiKeyProviderId) {
  if (!state.client || !state.connected || state.apiKeysSavingProviderId) {
    return;
  }
  state.apiKeysSavingProviderId = provider;
  setProviderMessage(state, provider, null);
  try {
    const apiKey = state.apiKeyProviderInputs[provider].trim();
    const snapshot = await state.client.request<ApiKeysSnapshot>("apiKeys.provider.set", {
      provider,
      ...(apiKey ? { apiKey } : {}),
      ...(state.apiKeysConfigHash ? { baseHash: state.apiKeysConfigHash } : {}),
    });
    applySnapshot(state, snapshot);
    state.apiKeyProviderInputs = {
      ...state.apiKeyProviderInputs,
      [provider]: "",
    };
    setProviderMessage(state, provider, {
      kind: "success",
      text: `${getProviderDefinition(provider).label} key saved.`,
    });
  } catch (error) {
    setProviderMessage(state, provider, {
      kind: "error",
      text: `Could not save ${getProviderDefinition(provider).label}: ${getErrorMessage(error)}`,
    });
  } finally {
    state.apiKeysSavingProviderId = null;
  }
}

export async function saveActiveModel(state: ApiKeysState) {
  const model = resolveDraftModel(state);
  const provider = extractProviderFromModel(model);
  if (!provider) {
    state.apiKeysPageMessage = {
      kind: "error",
      text: "Custom models must start with openrouter/, anthropic/, openai/, google/, groq/, or huggingface/.",
    };
    return;
  }
  await applyActiveModel(state, provider, model);
}

export async function setActiveApiKeyProvider(state: ApiKeysState, provider: ApiKeyProviderId) {
  await applyActiveModel(state, provider, getProviderDefinition(provider).recommendedModel);
}

export async function testProviderApiKey(state: ApiKeysState, provider: ApiKeyProviderId) {
  if (!state.client || !state.connected || state.apiKeysTestingProviderId) {
    return;
  }
  state.apiKeysTestingProviderId = provider;
  setProviderMessage(state, provider, null);
  try {
    const apiKey = state.apiKeyProviderInputs[provider].trim();
    const result = await state.client.request<ApiKeyProviderTestResult>("apiKeys.provider.test", {
      provider,
      ...(apiKey ? { apiKey } : {}),
      model: resolveProviderTestModel(state, provider),
    });
    setProviderMessage(state, provider, {
      kind: result.ok ? "success" : "error",
      text: result.ok ? "Connected ✓" : result.message,
    });
  } catch (error) {
    setProviderMessage(state, provider, {
      kind: "error",
      text: `Connection test failed: ${getErrorMessage(error)}`,
    });
  } finally {
    state.apiKeysTestingProviderId = null;
  }
}

export function updateElevenLabsApiKeyInput(state: ApiKeysState, value: string) {
  state.apiKeysElevenLabsInput = value;
  state.apiKeysElevenLabsMessage = null;
}

export async function loadElevenLabsApiKey(state: ApiKeysState) {
  if (!state.client || !state.connected || state.apiKeysLoading) {
    return;
  }
  try {
    applyElevenLabsSnapshot(state, await fetchElevenLabsSnapshot(state));
  } catch (error) {
    state.apiKeysElevenLabsMessage = {
      kind: "error",
      text: `Could not load ElevenLabs settings: ${getErrorMessage(error)}`,
    };
  }
}

export async function saveElevenLabsApiKey(state: ApiKeysState) {
  if (!state.client || !state.connected || state.apiKeysElevenLabsSaving) {
    return;
  }
  const apiKey = state.apiKeysElevenLabsInput.trim();
  if (!apiKey) {
    state.apiKeysElevenLabsMessage = {
      kind: "error",
      text: "Paste your ElevenLabs API key before saving.",
    };
    return;
  }

  state.apiKeysElevenLabsSaving = true;
  state.apiKeysElevenLabsMessage = null;
  try {
    const baseHash = await ensureElevenLabsConfigHash(state);
    await state.client.request("config.patch", {
      baseHash,
      raw: JSON.stringify({
        messages: {
          tts: {
            providers: {
              elevenlabs: {
                apiKey,
              },
            },
          },
        },
      }),
    });
    cacheElevenLabsApiKey(state.settings.gatewayUrl, apiKey);
    await loadElevenLabsApiKey(state);
    state.apiKeysElevenLabsMessage = {
      kind: "success",
      text: "ElevenLabs key saved. Changes take effect immediately.",
    };
  } catch (error) {
    state.apiKeysElevenLabsMessage = {
      kind: "error",
      text: `Could not save ElevenLabs key: ${getErrorMessage(error)}`,
    };
  } finally {
    state.apiKeysElevenLabsSaving = false;
  }
}

export async function testElevenLabsApiKey(state: ApiKeysState) {
  if (!state.connected || state.apiKeysElevenLabsTesting) {
    return;
  }
  const apiKey = resolveElevenLabsApiKey(state);
  if (!apiKey) {
    state.apiKeysElevenLabsMessage = {
      kind: "error",
      text: "Paste your ElevenLabs API key before running the voice test.",
    };
    return;
  }

  state.apiKeysElevenLabsTesting = true;
  state.apiKeysElevenLabsMessage = null;
  try {
    cacheElevenLabsApiKey(state.settings.gatewayUrl, apiKey);
    await speakElevenLabsText(ELEVENLABS_TEST_TEXT, ELEVENLABS_TEST_AGENT_ID, apiKey);
    state.apiKeysElevenLabsMessage = {
      kind: "success",
      text: "Voice test played.",
    };
  } catch (error) {
    state.apiKeysElevenLabsMessage = {
      kind: "error",
      text: `Voice test failed: ${getErrorMessage(error)}`,
    };
  } finally {
    state.apiKeysElevenLabsTesting = false;
  }
}
