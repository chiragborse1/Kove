import crypto from "node:crypto";
import fs from "node:fs/promises";
import {
  resolveAgentDir,
  resolveAgentWorkspaceDir,
  resolveDefaultAgentId,
} from "../../agents/agent-scope.js";
import { loadAuthProfileStoreForRuntime } from "../../agents/auth-profiles.js";
import { describeFailoverError } from "../../agents/failover-error.js";
import { parseModelRef } from "../../agents/model-selection.js";
import { runEmbeddedPiAgent } from "../../agents/pi-embedded.js";
import { updateAuthProfileStoreWithLock } from "../../agents/auth-profiles/store.js";
import type { AuthProfileCredential } from "../../agents/auth-profiles/types.js";
import { resolveDefaultAgentWorkspaceDir } from "../../agents/workspace.js";
import {
  readConfigFileSnapshot,
  replaceConfigFile,
  resolveConfigSnapshotHash,
  validateConfigObjectWithPlugins,
  type OpenClawConfig,
} from "../../config/config.js";
import { ConfigMutationConflictError } from "../../config/mutate.js";
import {
  resolveSessionTranscriptPath,
  resolveSessionTranscriptsDirForAgent,
} from "../../config/sessions/paths.js";
import { applyDefaultModel } from "../../plugins/provider-auth-choice-helpers.js";
import { applyAuthProfileConfig, buildApiKeyCredential } from "../../plugins/provider-auth-helpers.js";
import { maskApiKey } from "../../utils/mask-api-key.js";
import {
  ErrorCodes,
  errorShape,
  formatValidationErrors,
  validateApiKeysActiveModelSetParams,
  validateApiKeysOpenRouterGetParams,
  validateApiKeysOpenRouterSetParams,
  validateApiKeysOpenRouterTestParams,
  validateApiKeysProviderSetParams,
  validateApiKeysProviderTestParams,
  validateApiKeysProvidersGetParams,
} from "../protocol/index.js";
import type { GatewayRequestHandlers } from "./types.js";

const DEFAULT_PROVIDER = "openrouter";
const DEFAULT_MODEL = "openrouter/auto";
const PROBE_PROMPT = "Reply with OK. Do not use tools.";

const PROVIDER_RECOMMENDED_MODELS = {
  openrouter: "openrouter/auto",
  anthropic: "anthropic/claude-sonnet-4-5",
  openai: "openai/gpt-4o",
  google: "google/gemini-2.0-flash",
  groq: "groq/llama-3.3-70b",
  huggingface: "huggingface/Qwen/Qwen3-Coder-480B-A35B-Instruct",
} as const;

type SupportedApiKeyProvider = keyof typeof PROVIDER_RECOMMENDED_MODELS;

type ApiKeyProviderStatus = {
  provider: SupportedApiKeyProvider;
  profileId: string;
  hasKey: boolean;
  maskedKey: string | null;
  recommendedModel: string;
};

type ApiKeysSnapshot = {
  providers: ApiKeyProviderStatus[];
  currentModel: string;
  configHash: string | null;
};

type ApiKeyProviderTestResult = {
  ok: boolean;
  provider: SupportedApiKeyProvider;
  model: string;
  message: string;
};

type OpenRouterStatus = {
  provider: "openrouter";
  profileId: string;
  hasKey: boolean;
  maskedKey: string | null;
  model: string;
  configHash: string | null;
};

function getErrorMessage(error: unknown): string {
  if (error instanceof Error && error.message.trim()) {
    return error.message;
  }
  return String(error);
}

function getProviderLabel(provider: SupportedApiKeyProvider): string {
  switch (provider) {
    case "openrouter":
      return "OpenRouter";
    case "anthropic":
      return "Anthropic";
    case "openai":
      return "OpenAI";
    case "google":
      return "Google Gemini";
    case "groq":
      return "Groq";
    case "huggingface":
      return "Hugging Face";
  }
}

function resolveProviderModel(
  provider: SupportedApiKeyProvider,
  raw: unknown,
  fallback = PROVIDER_RECOMMENDED_MODELS[provider],
): string {
  const candidate = typeof raw === "string" && raw.trim().length > 0 ? raw.trim() : fallback;
  const parsed = parseModelRef(candidate, provider);
  if (!parsed || parsed.provider !== provider || !parsed.model.trim()) {
    throw new Error(`${getProviderLabel(provider)} models must use the ${provider}/... format.`);
  }
  return `${parsed.provider}/${parsed.model}`;
}

function resolveConfiguredModel(cfg: OpenClawConfig): string {
  const configured = cfg.agents?.defaults?.model;
  const rawModel =
    typeof configured === "string"
      ? configured
      : configured &&
          typeof configured === "object" &&
          typeof (configured as { primary?: unknown }).primary === "string"
        ? (configured as { primary: string }).primary
        : DEFAULT_MODEL;
  const parsed = parseModelRef(String(rawModel ?? "").trim() || DEFAULT_MODEL, DEFAULT_PROVIDER);
  if (!parsed || !parsed.provider.trim() || !parsed.model.trim()) {
    return DEFAULT_MODEL;
  }
  return `${parsed.provider}/${parsed.model}`;
}

function resolveProviderProfileId(
  cfg: OpenClawConfig,
  store: ReturnType<typeof loadAuthProfileStoreForRuntime>,
  provider: SupportedApiKeyProvider,
): string {
  const configuredProfileId = Object.entries(cfg.auth?.profiles ?? {}).find(([, profile]) => {
    return profile.provider === provider && profile.mode === "api_key";
  })?.[0];
  if (configuredProfileId) {
    return configuredProfileId;
  }
  const storedProfileId = Object.entries(store.profiles).find(([, credential]) => {
    return credential.provider === provider && credential.type === "api_key";
  })?.[0];
  return storedProfileId ?? `${provider}:default`;
}

function maskProviderCredential(
  provider: SupportedApiKeyProvider,
  credential: AuthProfileCredential | undefined,
): string | null {
  if (!credential || credential.provider !== provider || credential.type !== "api_key") {
    return null;
  }
  if (typeof credential.key === "string" && credential.key.trim()) {
    return maskApiKey(credential.key);
  }
  if (credential.keyRef) {
    return `SecretRef (${credential.keyRef.source}:${credential.keyRef.provider}:${credential.keyRef.id})`;
  }
  return null;
}

function buildProviderStatus(
  provider: SupportedApiKeyProvider,
  cfg: OpenClawConfig,
  store: ReturnType<typeof loadAuthProfileStoreForRuntime>,
): ApiKeyProviderStatus {
  const profileId = resolveProviderProfileId(cfg, store, provider);
  const maskedKey = maskProviderCredential(provider, store.profiles[profileId]);
  return {
    provider,
    profileId,
    hasKey: Boolean(maskedKey),
    maskedKey,
    recommendedModel: PROVIDER_RECOMMENDED_MODELS[provider],
  };
}

async function loadApiKeysContext(): Promise<{
  cfg: OpenClawConfig;
  agentId: string;
  agentDir: string;
  workspaceDir: string;
  snapshot: ApiKeysSnapshot;
}> {
  const snapshot = await readConfigFileSnapshot();
  if (!snapshot.valid) {
    throw new Error("Config is invalid. Fix the config page before editing API keys.");
  }
  const cfg = snapshot.runtimeConfig ?? snapshot.config;
  const agentId = resolveDefaultAgentId(cfg);
  const agentDir = resolveAgentDir(cfg, agentId);
  const workspaceDir =
    resolveAgentWorkspaceDir(cfg, agentId) ?? resolveDefaultAgentWorkspaceDir();
  const store = loadAuthProfileStoreForRuntime(agentDir, {
    readOnly: true,
    allowKeychainPrompt: false,
  });
  return {
    cfg,
    agentId,
    agentDir,
    workspaceDir,
    snapshot: {
      providers: (Object.keys(PROVIDER_RECOMMENDED_MODELS) as SupportedApiKeyProvider[]).map(
        (provider) => buildProviderStatus(provider, cfg, store),
      ),
      currentModel: resolveConfiguredModel(cfg),
      configHash: resolveConfigSnapshotHash(snapshot) ?? null,
    },
  };
}

function getProviderStatus(
  snapshot: ApiKeysSnapshot,
  provider: SupportedApiKeyProvider,
): ApiKeyProviderStatus {
  const status = snapshot.providers.find((entry) => entry.provider === provider);
  if (!status) {
    throw new Error(`Unsupported API key provider: ${provider}`);
  }
  return status;
}

function buildLegacyOpenRouterStatus(snapshot: ApiKeysSnapshot): OpenRouterStatus {
  const status = getProviderStatus(snapshot, "openrouter");
  return {
    provider: "openrouter",
    profileId: status.profileId,
    hasKey: status.hasKey,
    maskedKey: status.maskedKey,
    model: snapshot.currentModel,
    configHash: snapshot.configHash,
  };
}

async function persistProviderApiKey(params: {
  agentDir: string;
  provider: SupportedApiKeyProvider;
  profileId: string;
  apiKey: string;
}): Promise<void> {
  const updated = await updateAuthProfileStoreWithLock({
    agentDir: params.agentDir,
    updater: (store) => {
      store.profiles[params.profileId] = buildApiKeyCredential(params.provider, params.apiKey);
      return true;
    },
  });
  if (!updated) {
    throw new Error(`Could not save the ${getProviderLabel(params.provider)} API key.`);
  }
}

async function withTemporaryProviderProfile<T>(params: {
  agentDir: string;
  provider: SupportedApiKeyProvider;
  apiKey: string;
  run: (profileId: string) => Promise<T>;
}): Promise<T> {
  const profileId = `${params.provider}:kova-ui-test`;
  const store = loadAuthProfileStoreForRuntime(params.agentDir, {
    readOnly: true,
    allowKeychainPrompt: false,
  });
  const hadPrevious = Object.hasOwn(store.profiles, profileId);
  const previous = store.profiles[profileId];

  await persistProviderApiKey({
    agentDir: params.agentDir,
    provider: params.provider,
    profileId,
    apiKey: params.apiKey,
  });

  try {
    return await params.run(profileId);
  } finally {
    await updateAuthProfileStoreWithLock({
      agentDir: params.agentDir,
      updater: (draft) => {
        if (hadPrevious && previous) {
          draft.profiles[profileId] = previous;
          return true;
        }
        if (!Object.hasOwn(draft.profiles, profileId)) {
          return false;
        }
        delete draft.profiles[profileId];
        return true;
      },
    });
  }
}

async function probeProviderConnection(params: {
  cfg: OpenClawConfig;
  agentId: string;
  agentDir: string;
  workspaceDir: string;
  profileId: string;
  provider: SupportedApiKeyProvider;
  model: string;
}): Promise<ApiKeyProviderTestResult> {
  const normalizedModel = resolveProviderModel(params.provider, params.model);
  const parsed = parseModelRef(normalizedModel, params.provider);
  if (!parsed || parsed.provider !== params.provider || !parsed.model.trim()) {
    return {
      ok: false,
      provider: params.provider,
      model: normalizedModel,
      message: `${getProviderLabel(params.provider)} models must use the ${params.provider}/... format.`,
    };
  }

  const sessionId = `probe-${params.provider}-${crypto.randomUUID()}`;
  const sessionDir = resolveSessionTranscriptsDirForAgent(params.agentId);
  const sessionFile = resolveSessionTranscriptPath(sessionId, params.agentId);
  await fs.mkdir(sessionDir, { recursive: true });
  await fs.mkdir(params.workspaceDir, { recursive: true });

  try {
    await runEmbeddedPiAgent({
      sessionId,
      sessionFile,
      agentId: params.agentId,
      workspaceDir: params.workspaceDir,
      agentDir: params.agentDir,
      config: params.cfg,
      prompt: PROBE_PROMPT,
      provider: parsed.provider,
      model: parsed.model,
      authProfileId: params.profileId,
      authProfileIdSource: "user",
      timeoutMs: 12000,
      runId: `probe-${crypto.randomUUID()}`,
      lane: `auth-probe:${params.provider}:${params.profileId}`,
      thinkLevel: "off",
      reasoningLevel: "off",
      verboseLevel: "off",
      streamParams: { maxTokens: 8 },
    });
    return {
      ok: true,
      provider: params.provider,
      model: `${parsed.provider}/${parsed.model}`,
      message: "Connected",
    };
  } catch (error) {
    const described = describeFailoverError(error);
    return {
      ok: false,
      provider: params.provider,
      model: `${parsed.provider}/${parsed.model}`,
      message: described.message,
    };
  }
}

async function replaceValidatedConfig(
  nextConfig: OpenClawConfig,
  baseHash: string | undefined,
  errorContext: string,
): Promise<void> {
  const validated = validateConfigObjectWithPlugins(nextConfig);
  if (!validated.ok) {
    throw new Error(`${errorContext} produced an invalid config.`);
  }
  await replaceConfigFile({
    nextConfig: validated.config,
    baseHash,
  });
}

function applyProviderSelection(
  cfg: OpenClawConfig,
  provider: SupportedApiKeyProvider,
  profileId: string,
): OpenClawConfig {
  return applyAuthProfileConfig(cfg, {
    profileId,
    provider,
    mode: "api_key",
  });
}

export const apiKeysHandlers: GatewayRequestHandlers = {
  "apiKeys.providers.get": async ({ params, respond }) => {
    if (!validateApiKeysProvidersGetParams(params)) {
      respond(
        false,
        undefined,
        errorShape(
          ErrorCodes.INVALID_REQUEST,
          `invalid apiKeys.providers.get params: ${formatValidationErrors(validateApiKeysProvidersGetParams.errors)}`,
        ),
      );
      return;
    }

    try {
      const { snapshot } = await loadApiKeysContext();
      respond(true, snapshot, undefined);
    } catch (error) {
      respond(false, undefined, errorShape(ErrorCodes.INVALID_REQUEST, getErrorMessage(error)));
    }
  },
  "apiKeys.provider.set": async ({ params, respond, context }) => {
    if (!validateApiKeysProviderSetParams(params)) {
      respond(
        false,
        undefined,
        errorShape(
          ErrorCodes.INVALID_REQUEST,
          `invalid apiKeys.provider.set params: ${formatValidationErrors(validateApiKeysProviderSetParams.errors)}`,
        ),
      );
      return;
    }

    try {
      const request = params as {
        provider: SupportedApiKeyProvider;
        apiKey?: string;
        baseHash?: string;
      };
      const { cfg, agentDir, snapshot } = await loadApiKeysContext();
      const status = getProviderStatus(snapshot, request.provider);
      const nextApiKey = typeof request.apiKey === "string" ? request.apiKey.trim() : "";

      if (!nextApiKey && !status.hasKey) {
        respond(
          false,
          undefined,
          errorShape(
            ErrorCodes.INVALID_REQUEST,
            `${getProviderLabel(request.provider)} API key is required.`,
          ),
        );
        return;
      }

      if (nextApiKey) {
        await persistProviderApiKey({
          agentDir,
          provider: request.provider,
          profileId: status.profileId,
          apiKey: nextApiKey,
        });
      }

      const nextConfig = applyProviderSelection(cfg, request.provider, status.profileId);
      await replaceValidatedConfig(nextConfig, request.baseHash, `${getProviderLabel(request.provider)} settings`);
      const reloaded = await loadApiKeysContext();
      context.logGateway.info(`apiKeys.provider.set provider=${request.provider} profile=${status.profileId}`);
      respond(true, reloaded.snapshot, undefined);
    } catch (error) {
      if (error instanceof ConfigMutationConflictError) {
        respond(
          false,
          undefined,
          errorShape(ErrorCodes.INVALID_REQUEST, "Config changed since last load; reload and retry."),
        );
        return;
      }
      respond(false, undefined, errorShape(ErrorCodes.INVALID_REQUEST, getErrorMessage(error)));
    }
  },
  "apiKeys.provider.test": async ({ params, respond }) => {
    if (!validateApiKeysProviderTestParams(params)) {
      respond(
        false,
        undefined,
        errorShape(
          ErrorCodes.INVALID_REQUEST,
          `invalid apiKeys.provider.test params: ${formatValidationErrors(validateApiKeysProviderTestParams.errors)}`,
        ),
      );
      return;
    }

    try {
      const request = params as {
        provider: SupportedApiKeyProvider;
        apiKey?: string;
        model?: string;
      };
      const { cfg, agentId, agentDir, workspaceDir, snapshot } = await loadApiKeysContext();
      const status = getProviderStatus(snapshot, request.provider);
      const modelFallback = snapshot.currentModel.startsWith(`${request.provider}/`)
        ? snapshot.currentModel
        : status.recommendedModel;
      const nextModel = resolveProviderModel(request.provider, request.model, modelFallback);
      const nextApiKey = typeof request.apiKey === "string" ? request.apiKey.trim() : "";

      if (!nextApiKey && !status.hasKey) {
        respond(
          true,
          {
            ok: false,
            provider: request.provider,
            model: nextModel,
            message: `Save a ${getProviderLabel(request.provider)} API key before testing the connection.`,
          },
          undefined,
        );
        return;
      }

      const result = nextApiKey
        ? await withTemporaryProviderProfile({
            agentDir,
            provider: request.provider,
            apiKey: nextApiKey,
            run: (profileId) =>
              probeProviderConnection({
                cfg,
                agentId,
                agentDir,
                workspaceDir,
                profileId,
                provider: request.provider,
                model: nextModel,
              }),
          })
        : await probeProviderConnection({
            cfg,
            agentId,
            agentDir,
            workspaceDir,
            profileId: status.profileId,
            provider: request.provider,
            model: nextModel,
          });

      respond(true, result, undefined);
    } catch (error) {
      respond(false, undefined, errorShape(ErrorCodes.INVALID_REQUEST, getErrorMessage(error)));
    }
  },
  "apiKeys.activeModel.set": async ({ params, respond, context }) => {
    if (!validateApiKeysActiveModelSetParams(params)) {
      respond(
        false,
        undefined,
        errorShape(
          ErrorCodes.INVALID_REQUEST,
          `invalid apiKeys.activeModel.set params: ${formatValidationErrors(validateApiKeysActiveModelSetParams.errors)}`,
        ),
      );
      return;
    }

    try {
      const request = params as {
        provider: SupportedApiKeyProvider;
        model: string;
        baseHash?: string;
      };
      const { cfg, snapshot } = await loadApiKeysContext();
      const status = getProviderStatus(snapshot, request.provider);
      if (!status.hasKey) {
        respond(
          false,
          undefined,
          errorShape(
            ErrorCodes.INVALID_REQUEST,
            `Save a ${getProviderLabel(request.provider)} API key before setting it active.`,
          ),
        );
        return;
      }

      const nextModel = resolveProviderModel(request.provider, request.model, status.recommendedModel);
      const nextConfig = applyDefaultModel(
        applyProviderSelection(cfg, request.provider, status.profileId),
        nextModel,
      );
      await replaceValidatedConfig(nextConfig, request.baseHash, `${getProviderLabel(request.provider)} model settings`);
      const reloaded = await loadApiKeysContext();
      context.logGateway.info(`apiKeys.activeModel.set provider=${request.provider} model=${nextModel}`);
      respond(true, reloaded.snapshot, undefined);
    } catch (error) {
      if (error instanceof ConfigMutationConflictError) {
        respond(
          false,
          undefined,
          errorShape(ErrorCodes.INVALID_REQUEST, "Config changed since last load; reload and retry."),
        );
        return;
      }
      respond(false, undefined, errorShape(ErrorCodes.INVALID_REQUEST, getErrorMessage(error)));
    }
  },
  "apiKeys.openrouter.get": async ({ params, respond }) => {
    if (!validateApiKeysOpenRouterGetParams(params)) {
      respond(
        false,
        undefined,
        errorShape(
          ErrorCodes.INVALID_REQUEST,
          `invalid apiKeys.openrouter.get params: ${formatValidationErrors(validateApiKeysOpenRouterGetParams.errors)}`,
        ),
      );
      return;
    }
    try {
      const { snapshot } = await loadApiKeysContext();
      respond(true, buildLegacyOpenRouterStatus(snapshot), undefined);
    } catch (error) {
      respond(false, undefined, errorShape(ErrorCodes.INVALID_REQUEST, getErrorMessage(error)));
    }
  },
  "apiKeys.openrouter.set": async ({ params, respond, context }) => {
    if (!validateApiKeysOpenRouterSetParams(params)) {
      respond(
        false,
        undefined,
        errorShape(
          ErrorCodes.INVALID_REQUEST,
          `invalid apiKeys.openrouter.set params: ${formatValidationErrors(validateApiKeysOpenRouterSetParams.errors)}`,
        ),
      );
      return;
    }

    try {
      const request = params as { apiKey?: string; model?: string; baseHash?: string };
      const { cfg, agentDir, snapshot } = await loadApiKeysContext();
      const status = getProviderStatus(snapshot, "openrouter");
      const modelFallback = snapshot.currentModel.startsWith("openrouter/")
        ? snapshot.currentModel
        : status.recommendedModel;
      const nextModel = resolveProviderModel("openrouter", request.model, modelFallback);
      const nextApiKey = typeof request.apiKey === "string" ? request.apiKey.trim() : "";

      if (!nextApiKey && !status.hasKey) {
        respond(
          false,
          undefined,
          errorShape(ErrorCodes.INVALID_REQUEST, "OpenRouter API key is required."),
        );
        return;
      }

      if (nextApiKey) {
        await persistProviderApiKey({
          agentDir,
          provider: "openrouter",
          profileId: status.profileId,
          apiKey: nextApiKey,
        });
      }

      const nextConfig = applyDefaultModel(
        applyProviderSelection(cfg, "openrouter", status.profileId),
        nextModel,
      );
      await replaceValidatedConfig(nextConfig, request.baseHash, "OpenRouter settings");
      const reloaded = await loadApiKeysContext();
      context.logGateway.info(
        `apiKeys.openrouter.set profile=${status.profileId} model=${reloaded.snapshot.currentModel}`,
      );
      respond(true, buildLegacyOpenRouterStatus(reloaded.snapshot), undefined);
    } catch (error) {
      if (error instanceof ConfigMutationConflictError) {
        respond(
          false,
          undefined,
          errorShape(ErrorCodes.INVALID_REQUEST, "Config changed since last load; reload and retry."),
        );
        return;
      }
      respond(false, undefined, errorShape(ErrorCodes.INVALID_REQUEST, getErrorMessage(error)));
    }
  },
  "apiKeys.openrouter.test": async ({ params, respond }) => {
    if (!validateApiKeysOpenRouterTestParams(params)) {
      respond(
        false,
        undefined,
        errorShape(
          ErrorCodes.INVALID_REQUEST,
          `invalid apiKeys.openrouter.test params: ${formatValidationErrors(validateApiKeysOpenRouterTestParams.errors)}`,
        ),
      );
      return;
    }

    try {
      const request = params as { apiKey?: string; model?: string };
      const { cfg, agentId, agentDir, workspaceDir, snapshot } = await loadApiKeysContext();
      const status = getProviderStatus(snapshot, "openrouter");
      const modelFallback = snapshot.currentModel.startsWith("openrouter/")
        ? snapshot.currentModel
        : status.recommendedModel;
      const nextModel = resolveProviderModel("openrouter", request.model, modelFallback);
      const nextApiKey = typeof request.apiKey === "string" ? request.apiKey.trim() : "";

      if (!nextApiKey && !status.hasKey) {
        respond(
          true,
          {
            ok: false,
            provider: "openrouter",
            model: nextModel,
            message: "Save an OpenRouter API key before testing the connection.",
          },
          undefined,
        );
        return;
      }

      const result = nextApiKey
        ? await withTemporaryProviderProfile({
            agentDir,
            provider: "openrouter",
            apiKey: nextApiKey,
            run: (profileId) =>
              probeProviderConnection({
                cfg,
                agentId,
                agentDir,
                workspaceDir,
                profileId,
                provider: "openrouter",
                model: nextModel,
              }),
          })
        : await probeProviderConnection({
            cfg,
            agentId,
            agentDir,
            workspaceDir,
            profileId: status.profileId,
            provider: "openrouter",
            model: nextModel,
          });

      respond(
        true,
        {
          ok: result.ok,
          provider: "openrouter",
          model: result.model,
          message: result.message,
        },
        undefined,
      );
    } catch (error) {
      respond(false, undefined, errorShape(ErrorCodes.INVALID_REQUEST, getErrorMessage(error)));
    }
  },
};