import { r as normalizeProviderId } from "./provider-id-CHzLB538.js";
import { s as resolveRuntimeServiceVersion } from "./version-By7KE3vz.js";
//#region src/agents/provider-attribution.ts
const OPENCLAW_ATTRIBUTION_PRODUCT = "OpenClaw";
const OPENCLAW_ATTRIBUTION_ORIGINATOR = "openclaw";
const LOCAL_ENDPOINT_HOSTS = new Set([
	"localhost",
	"127.0.0.1",
	"::1",
	"[::1]"
]);
function formatOpenClawUserAgent(version) {
	return `${OPENCLAW_ATTRIBUTION_ORIGINATOR}/${version}`;
}
function resolveUrlHostname(value) {
	if (typeof value !== "string" || !value.trim()) return;
	try {
		return new URL(value).hostname.toLowerCase();
	} catch {
		const normalized = value.trim().toLowerCase();
		if (normalized.includes("api.openai.com")) return "api.openai.com";
		if (normalized.includes("chatgpt.com")) return "chatgpt.com";
		if (normalized.includes(".openai.azure.com")) {
			const suffixStart = normalized.indexOf(".openai.azure.com");
			return `${normalized.slice(0, suffixStart).replace(/^https?:\/\//, "")}.openai.azure.com`;
		}
		if (normalized.includes("openrouter.ai")) return "openrouter.ai";
		if (normalized.includes("localhost") || normalized.includes("127.0.0.1") || normalized.includes("[::1]") || normalized.includes("://::1")) return "localhost";
		return;
	}
}
function isLocalEndpointHost(host) {
	return LOCAL_ENDPOINT_HOSTS.has(host) || host.endsWith(".localhost") || host.endsWith(".local") || host.endsWith(".internal");
}
function classifyProviderEndpoint(baseUrl) {
	if (typeof baseUrl !== "string" || !baseUrl.trim()) return "default";
	const host = resolveUrlHostname(baseUrl);
	if (!host) return "invalid";
	if (host === "api.openai.com") return "openai-public";
	if (host === "chatgpt.com") return "openai-codex";
	if (host === "openrouter.ai" || host.endsWith(".openrouter.ai")) return "openrouter";
	if (host.endsWith(".openai.azure.com")) return "azure-openai";
	if (isLocalEndpointHost(host)) return "local";
	return "custom";
}
function resolveKnownProviderFamily(provider) {
	switch (provider) {
		case "openai":
		case "openai-codex":
		case "azure-openai":
		case "azure-openai-responses": return "openai-family";
		case "openrouter": return "openrouter";
		case "anthropic": return "anthropic";
		case "google": return "google";
		case "github-copilot": return "github-copilot";
		case "groq": return "groq";
		case "mistral": return "mistral";
		case "together": return "together";
		default: return provider || "unknown";
	}
}
function resolveProviderAttributionIdentity(env = process.env) {
	return {
		product: OPENCLAW_ATTRIBUTION_PRODUCT,
		version: resolveRuntimeServiceVersion(env)
	};
}
function buildOpenRouterAttributionPolicy(env = process.env) {
	const identity = resolveProviderAttributionIdentity(env);
	return {
		provider: "openrouter",
		enabledByDefault: true,
		verification: "vendor-documented",
		hook: "request-headers",
		docsUrl: "https://openrouter.ai/docs/app-attribution",
		reviewNote: "Documented app attribution headers. Verified in OpenClaw runtime wrapper.",
		...identity,
		headers: {
			"HTTP-Referer": "https://openclaw.ai",
			"X-OpenRouter-Title": identity.product,
			"X-OpenRouter-Categories": "cli-agent"
		}
	};
}
function buildOpenAIAttributionPolicy(env = process.env) {
	const identity = resolveProviderAttributionIdentity(env);
	return {
		provider: "openai",
		enabledByDefault: true,
		verification: "vendor-hidden-api-spec",
		hook: "request-headers",
		reviewNote: "OpenAI native traffic supports hidden originator/User-Agent attribution. Verified against the Codex wire contract.",
		...identity,
		headers: {
			originator: OPENCLAW_ATTRIBUTION_ORIGINATOR,
			version: identity.version,
			"User-Agent": formatOpenClawUserAgent(identity.version)
		}
	};
}
function buildOpenAICodexAttributionPolicy(env = process.env) {
	const identity = resolveProviderAttributionIdentity(env);
	return {
		provider: "openai-codex",
		enabledByDefault: true,
		verification: "vendor-hidden-api-spec",
		hook: "request-headers",
		reviewNote: "OpenAI Codex ChatGPT-backed traffic supports the same hidden originator/User-Agent attribution contract.",
		...identity,
		headers: {
			originator: OPENCLAW_ATTRIBUTION_ORIGINATOR,
			version: identity.version,
			"User-Agent": formatOpenClawUserAgent(identity.version)
		}
	};
}
function buildSdkHookOnlyPolicy(provider, hook, reviewNote, env = process.env) {
	return {
		provider,
		enabledByDefault: false,
		verification: "vendor-sdk-hook-only",
		hook,
		reviewNote,
		...resolveProviderAttributionIdentity(env)
	};
}
function listProviderAttributionPolicies(env = process.env) {
	return [
		buildOpenRouterAttributionPolicy(env),
		buildOpenAIAttributionPolicy(env),
		buildOpenAICodexAttributionPolicy(env),
		buildSdkHookOnlyPolicy("anthropic", "default-headers", "Anthropic JS SDK exposes defaultHeaders, but app attribution is not yet verified.", env),
		buildSdkHookOnlyPolicy("google", "user-agent-extra", "Google GenAI JS SDK exposes userAgentExtra/httpOptions, but provider-side attribution is not yet verified.", env),
		buildSdkHookOnlyPolicy("groq", "default-headers", "Groq JS SDK exposes defaultHeaders, but app attribution is not yet verified.", env),
		buildSdkHookOnlyPolicy("mistral", "custom-user-agent", "Mistral JS SDK exposes a custom userAgent option, but app attribution is not yet verified.", env),
		buildSdkHookOnlyPolicy("together", "default-headers", "Together JS SDK exposes defaultHeaders, but app attribution is not yet verified.", env)
	];
}
function resolveProviderAttributionPolicy(provider, env = process.env) {
	const normalized = normalizeProviderId(provider ?? "");
	return listProviderAttributionPolicies(env).find((policy) => policy.provider === normalized);
}
function resolveProviderAttributionHeaders(provider, env = process.env) {
	const policy = resolveProviderAttributionPolicy(provider, env);
	if (!policy?.enabledByDefault) return;
	return policy.headers;
}
function resolveProviderRequestPolicy(input, env = process.env) {
	const provider = normalizeProviderId(input.provider ?? "");
	const policy = resolveProviderAttributionPolicy(provider, env);
	const endpointClass = classifyProviderEndpoint(input.baseUrl);
	const api = input.api?.trim().toLowerCase();
	const usesConfiguredBaseUrl = endpointClass !== "default";
	const usesKnownNativeOpenAIEndpoint = endpointClass === "openai-public" || endpointClass === "openai-codex" || endpointClass === "azure-openai";
	const usesOpenAIPublicAttributionHost = endpointClass === "openai-public";
	const usesOpenAICodexAttributionHost = endpointClass === "openai-codex";
	const usesVerifiedOpenAIAttributionHost = usesOpenAIPublicAttributionHost || usesOpenAICodexAttributionHost;
	const usesExplicitProxyLikeEndpoint = usesConfiguredBaseUrl && !usesKnownNativeOpenAIEndpoint;
	let attributionProvider;
	if (provider === "openai" && (api === "openai-completions" || api === "openai-responses" || input.capability === "audio" && api === "openai-audio-transcriptions") && usesOpenAIPublicAttributionHost) attributionProvider = "openai";
	else if (provider === "openai-codex" && (api === "openai-codex-responses" || api === "openai-responses") && usesOpenAICodexAttributionHost) attributionProvider = "openai-codex";
	else if (provider === "openrouter" && policy?.enabledByDefault) attributionProvider = "openrouter";
	const attributionHeaders = attributionProvider ? resolveProviderAttributionHeaders(attributionProvider, env) : void 0;
	return {
		provider: provider || void 0,
		policy,
		endpointClass,
		usesConfiguredBaseUrl,
		knownProviderFamily: resolveKnownProviderFamily(provider || void 0),
		attributionProvider,
		attributionHeaders,
		allowsHiddenAttribution: attributionProvider !== void 0 && policy?.verification === "vendor-hidden-api-spec",
		usesKnownNativeOpenAIEndpoint,
		usesKnownNativeOpenAIRoute: endpointClass === "default" ? provider === "openai" : usesKnownNativeOpenAIEndpoint,
		usesVerifiedOpenAIAttributionHost,
		usesExplicitProxyLikeEndpoint
	};
}
function resolveProviderRequestAttributionHeaders(input, env = process.env) {
	return resolveProviderRequestPolicy(input, env).attributionHeaders;
}
//#endregion
export { resolveProviderRequestPolicy as n, resolveProviderRequestAttributionHeaders as t };
