import { c as normalizeResolvedSecretInputString } from "../../types.secrets-mzCLKGg0.js";
import { n as normalizeSecretInput } from "../../normalize-secret-input-CRNbANMO.js";
import { t as SsrFBlockedError, u as resolvePinnedHostname } from "../../ssrf-vpSSEUV4.js";
import { n as fetchWithSsrFGuard } from "../../fetch-guard-DMwHR6fc.js";
import { c as jsonResult, h as readStringParam, r as ToolInputError } from "../../common-CGHRdLb5.js";
import { t as definePluginEntry } from "../../plugin-entry-Dhumb90r.js";
import "../../secret-input-B8qqJm2M.js";
import "../../infra-runtime-CGpVEUOg.js";
import "../../agent-runtime-DnuvrKvv.js";
import { Type } from "@sinclair/typebox";
//#region extensions/tinyfish/src/tinyfish-tool.ts
const DEFAULT_BASE_URL = "https://agent.tinyfish.ai";
const RUN_STREAM_PATH = "v1/automation/run-sse";
/** TinyFish API integration identifier (body field contract with TinyFish). */
const TINYFISH_API_INTEGRATION = "openclaw";
/** Generic attribution header value for request origin tracking. */
const CLIENT_SOURCE = "openclaw";
const STREAM_TIMEOUT_MS = 900 * 1e3;
const MAX_ERROR_TEXT_BYTES = 2048;
function asRecord(value) {
	return value && typeof value === "object" && !Array.isArray(value) ? value : null;
}
function readOptionalString(value) {
	return typeof value === "string" && value.trim() ? value.trim() : void 0;
}
function buildBaseUrl(rawBaseUrl) {
	const value = readOptionalString(rawBaseUrl) ?? DEFAULT_BASE_URL;
	let parsed;
	try {
		parsed = new URL(value);
	} catch {
		throw new Error("TinyFish base URL is invalid. Check plugins.entries.tinyfish.config.baseUrl.");
	}
	if (!["http:", "https:"].includes(parsed.protocol)) throw new Error("TinyFish base URL must use http or https. Check plugins.entries.tinyfish.config.baseUrl.");
	if (parsed.username || parsed.password) throw new Error("TinyFish base URL must not include embedded credentials. Check plugins.entries.tinyfish.config.baseUrl.");
	if (parsed.search || parsed.hash) throw new Error("TinyFish base URL must not include query parameters or fragments. Check plugins.entries.tinyfish.config.baseUrl.");
	parsed.pathname = parsed.pathname.endsWith("/") ? parsed.pathname : `${parsed.pathname}/`;
	return parsed.toString();
}
function resolveTinyFishConfig(pluginConfig, env) {
	const configRecord = asRecord(pluginConfig) ?? {};
	const apiKey = normalizeSecretInput(normalizeResolvedSecretInputString({
		value: configRecord.apiKey,
		path: "plugins.entries.tinyfish.config.apiKey"
	})) || normalizeSecretInput(env.TINYFISH_API_KEY) || void 0;
	if (!apiKey) throw new Error("TinyFish API key missing. Set plugins.entries.tinyfish.config.apiKey or TINYFISH_API_KEY.");
	return {
		apiKey,
		baseUrl: buildBaseUrl(configRecord.baseUrl)
	};
}
function validateTargetUrl(rawUrl) {
	let parsed;
	try {
		parsed = new URL(rawUrl);
	} catch {
		throw new ToolInputError("url must be a valid http or https URL");
	}
	if (!["http:", "https:"].includes(parsed.protocol)) throw new ToolInputError("url must be a valid http or https URL");
	if (parsed.username || parsed.password) throw new ToolInputError("url must not include embedded credentials");
	return parsed.toString();
}
async function assertPublicTargetUrl(rawUrl, resolveHostname) {
	const parsed = new URL(rawUrl);
	if (parsed.hostname === "") throw new ToolInputError("url must target a public website");
	try {
		await resolveHostname(parsed.hostname);
	} catch (error) {
		if (error instanceof SsrFBlockedError) throw new ToolInputError("url must target a public website");
		throw error;
	}
}
function readBrowserProfile(params) {
	const value = readStringParam(params, "browser_profile");
	if (!value) return;
	if (value === "lite" || value === "stealth") return value;
	throw new ToolInputError("browser_profile must be one of: lite, stealth");
}
function readProxyConfig(params) {
	const raw = params.proxy_config ?? params.proxyConfig;
	if (raw === void 0) return;
	const record = asRecord(raw);
	if (!record) throw new ToolInputError("proxy_config must be an object");
	if (typeof record.enabled !== "boolean") throw new ToolInputError("proxy_config.enabled must be true or false");
	const countryCode = readOptionalString(record.country_code ?? record.countryCode);
	if (countryCode && !/^[A-Za-z]{2}$/.test(countryCode)) throw new ToolInputError("proxy_config.country_code must be a 2-letter country code");
	return {
		enabled: record.enabled,
		...countryCode ? { country_code: countryCode.toUpperCase() } : {}
	};
}
function normalizeTinyFishParams(params) {
	const browserProfile = readBrowserProfile(params);
	const proxyConfig = readProxyConfig(params);
	return {
		url: validateTargetUrl(readStringParam(params, "url", { required: true })),
		goal: readStringParam(params, "goal", { required: true }),
		...browserProfile ? { browser_profile: browserProfile } : {},
		...proxyConfig ? { proxy_config: proxyConfig } : {}
	};
}
function buildRunEndpoint(baseUrl) {
	return new URL(RUN_STREAM_PATH, baseUrl);
}
function extractHelpField(completeEvent, field) {
	const directValue = readOptionalString(completeEvent[field]);
	if (directValue) return directValue;
	return readOptionalString(asRecord(completeEvent.error)?.[field]) ?? null;
}
function finalizeRunResult(params) {
	const status = readOptionalString(params.completeEvent.status) ?? "COMPLETED";
	return {
		run_id: readOptionalString(params.completeEvent.run_id) ?? params.runId ?? null,
		status,
		result: params.completeEvent.result ?? params.completeEvent.resultJson ?? null,
		error: params.completeEvent.error ?? null,
		help_url: extractHelpField(params.completeEvent, "help_url"),
		help_message: extractHelpField(params.completeEvent, "help_message"),
		streaming_url: readOptionalString(params.completeEvent.streaming_url) ?? params.streamingUrl ?? null
	};
}
function parseEventBlock(block) {
	const dataLines = [];
	for (const line of block.split(/\r?\n/)) {
		if (!line || line.startsWith(":")) continue;
		if (line.startsWith("data:")) dataLines.push(line.slice(5).trimStart());
	}
	if (dataLines.length === 0) return null;
	const payload = dataLines.join("\n").trim();
	if (!payload) return null;
	let parsed;
	try {
		parsed = JSON.parse(payload);
	} catch {
		throw new Error(`TinyFish SSE payload was not valid JSON: ${payload.slice(0, 120)}`);
	}
	const record = asRecord(parsed);
	if (!record) throw new Error("TinyFish SSE payload must be a JSON object");
	return record;
}
async function parseRunStream(body, logger) {
	const reader = body.getReader();
	const decoder = new TextDecoder();
	let buffer = "";
	let runId;
	let streamingUrl;
	let completeEvent = null;
	let completeReceived = false;
	const handleEvent = (event) => {
		const type = readOptionalString(event.type);
		if (type === "STARTED") {
			runId = readOptionalString(event.run_id) ?? runId;
			return;
		}
		if (type === "STREAMING_URL") {
			runId = readOptionalString(event.run_id) ?? runId;
			streamingUrl = readOptionalString(event.streaming_url) ?? readOptionalString(event.url);
			return;
		}
		if (type === "PROGRESS" || type === "HEARTBEAT") {
			logger.debug?.(`[tinyfish] stream event: ${type}`);
			return;
		}
		if (type === "COMPLETE") {
			completeEvent = event;
			completeReceived = true;
			runId = readOptionalString(event.run_id) ?? runId;
			streamingUrl = readOptionalString(event.streaming_url) ?? streamingUrl ?? readOptionalString(event.url);
			return;
		}
		logger.debug?.(`[tinyfish] ignoring unknown stream event: ${String(type ?? "unknown")}`);
	};
	try {
		while (true) {
			const { done, value } = await reader.read();
			buffer += decoder.decode(value ?? new Uint8Array(), { stream: !done });
			let match = /\r?\n\r?\n/.exec(buffer);
			while (match) {
				const block = buffer.slice(0, match.index);
				buffer = buffer.slice(match.index + match[0].length);
				const event = parseEventBlock(block);
				if (event) {
					handleEvent(event);
					if (completeReceived) break;
				}
				match = /\r?\n\r?\n/.exec(buffer);
			}
			if (done || completeReceived) break;
		}
	} finally {
		if (completeReceived) await reader.cancel().catch(() => {});
		reader.releaseLock();
	}
	const finalBlock = buffer.trim();
	if (!completeReceived && finalBlock) try {
		const event = parseEventBlock(finalBlock);
		if (event) handleEvent(event);
	} catch {}
	if (!completeEvent) {
		const runHint = runId ? ` after run_id ${runId}` : "";
		throw new Error(`TinyFish SSE stream ended before COMPLETE${runHint}. Retry the tool call.`);
	}
	return finalizeRunResult({
		completeEvent,
		runId,
		streamingUrl
	});
}
async function readErrorText(response) {
	const reader = response.body?.getReader();
	if (!reader) return "";
	const decoder = new TextDecoder();
	let remainingBytes = MAX_ERROR_TEXT_BYTES;
	let text = "";
	try {
		while (remainingBytes > 0) {
			const { done, value } = await reader.read();
			if (done) break;
			if (!value || value.byteLength === 0) continue;
			const chunk = value.byteLength > remainingBytes ? value.subarray(0, remainingBytes) : value;
			text += decoder.decode(chunk, { stream: true });
			remainingBytes -= chunk.byteLength;
			if (chunk.byteLength < value.byteLength) {
				await reader.cancel().catch(() => {});
				break;
			}
		}
		text += decoder.decode();
	} catch {
		return text;
	} finally {
		reader.releaseLock();
	}
	if (!text) return "";
	try {
		const record = asRecord(JSON.parse(text));
		return readOptionalString(record?.message) ?? readOptionalString(record?.detail) ?? readOptionalString(record?.error) ?? text;
	} catch {
		return text;
	}
}
async function runTinyFishAutomation(params, api, deps) {
	const env = deps.env ?? process.env;
	const config = resolveTinyFishConfig(api.pluginConfig, env);
	const endpoint = buildRunEndpoint(config.baseUrl);
	const fetchWithGuard = deps.fetchWithGuard ?? fetchWithSsrFGuard;
	const resolveHostname = deps.resolveHostname ?? resolvePinnedHostname;
	await assertPublicTargetUrl(params.url, resolveHostname);
	const requestBody = {
		url: params.url,
		goal: params.goal,
		api_integration: TINYFISH_API_INTEGRATION
	};
	if (params.browser_profile) requestBody.browser_profile = params.browser_profile;
	if (params.proxy_config) requestBody.proxy_config = params.proxy_config;
	const { response, release } = await fetchWithGuard({
		url: endpoint.toString(),
		init: {
			method: "POST",
			headers: {
				Accept: "text/event-stream",
				"Content-Type": "application/json",
				"X-API-Key": config.apiKey,
				"X-Client-Source": CLIENT_SOURCE
			},
			body: JSON.stringify(requestBody)
		},
		policy: { hostnameAllowlist: [endpoint.hostname] },
		timeoutMs: STREAM_TIMEOUT_MS,
		auditContext: "tinyfish-automation-run-sse"
	});
	try {
		if (!response.ok) {
			const errorText = await readErrorText(response);
			const suffix = errorText ? `: ${errorText}` : "";
			throw new Error(`TinyFish API request failed (${response.status})${suffix}`);
		}
		if (!response.body) throw new Error("TinyFish API returned an empty SSE body");
		return await parseRunStream(response.body, api.logger);
	} finally {
		await release();
	}
}
function createTinyFishTool(api, deps = {}) {
	return {
		name: "tinyfish_automation",
		label: "TinyFish Automation",
		description: "Run TinyFish hosted browser automation for public multi-step workflows, forms, JS-heavy pages, and structured extraction.",
		parameters: Type.Object({
			url: Type.String({ description: "Target public website URL to automate." }),
			goal: Type.String({ description: "Natural-language description of what TinyFish should accomplish." }),
			browser_profile: Type.Optional(Type.Unsafe({
				type: "string",
				enum: ["lite", "stealth"],
				description: "Optional TinyFish browser profile."
			})),
			proxy_config: Type.Optional(Type.Object({
				enabled: Type.Boolean({ description: "Enable or disable TinyFish proxy routing for this run." }),
				country_code: Type.Optional(Type.String({ description: "Optional 2-letter country code, for example US." }))
			}))
		}),
		async execute(_id, rawParams) {
			return jsonResult(await runTinyFishAutomation(normalizeTinyFishParams(rawParams), api, deps));
		}
	};
}
//#endregion
//#region extensions/tinyfish/index.ts
var tinyfish_default = definePluginEntry({
	id: "tinyfish",
	name: "TinyFish",
	description: "Hosted browser automation for complex public web workflows.",
	register(api) {
		api.registerTool(createTinyFishTool(api));
	}
});
//#endregion
export { tinyfish_default as default };
