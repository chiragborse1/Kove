import { n as fetchWithSsrFGuard } from "./fetch-guard-DMwHR6fc.js";
import { t as resolveProviderRequestAttributionHeaders } from "./provider-attribution-Dk-CuqIy.js";
//#region src/media-understanding/shared.ts
const MAX_ERROR_CHARS = 300;
function normalizeBaseUrl(baseUrl, fallback) {
	return (baseUrl?.trim() || fallback).replace(/\/+$/, "");
}
function applyProviderRequestHeaders(params) {
	const headers = new Headers(params.headers);
	const attributionHeaders = resolveProviderRequestAttributionHeaders({
		provider: params.provider,
		api: params.api,
		baseUrl: params.baseUrl,
		capability: params.capability ?? "other",
		transport: params.transport ?? "http"
	});
	if (!attributionHeaders) return headers;
	for (const [key, value] of Object.entries(attributionHeaders)) if (!headers.has(key)) headers.set(key, value);
	return headers;
}
async function fetchWithTimeoutGuarded(url, init, timeoutMs, fetchFn, options) {
	return await fetchWithSsrFGuard({
		url,
		fetchImpl: fetchFn,
		init,
		timeoutMs,
		policy: options?.ssrfPolicy,
		lookupFn: options?.lookupFn,
		pinDns: options?.pinDns
	});
}
async function postTranscriptionRequest(params) {
	return fetchWithTimeoutGuarded(params.url, {
		method: "POST",
		headers: params.headers,
		body: params.body
	}, params.timeoutMs, params.fetchFn, params.allowPrivateNetwork ? { ssrfPolicy: { allowPrivateNetwork: true } } : void 0);
}
async function postJsonRequest(params) {
	return fetchWithTimeoutGuarded(params.url, {
		method: "POST",
		headers: params.headers,
		body: JSON.stringify(params.body)
	}, params.timeoutMs, params.fetchFn, params.allowPrivateNetwork ? { ssrfPolicy: { allowPrivateNetwork: true } } : void 0);
}
async function readErrorResponse(res) {
	try {
		const collapsed = (await res.text()).replace(/\s+/g, " ").trim();
		if (!collapsed) return;
		if (collapsed.length <= MAX_ERROR_CHARS) return collapsed;
		return `${collapsed.slice(0, MAX_ERROR_CHARS)}…`;
	} catch {
		return;
	}
}
async function assertOkOrThrowHttpError(res, label) {
	if (res.ok) return;
	const detail = await readErrorResponse(res);
	const suffix = detail ? `: ${detail}` : "";
	throw new Error(`${label} (HTTP ${res.status})${suffix}`);
}
function requireTranscriptionText(value, missingMessage) {
	const text = value?.trim();
	if (!text) throw new Error(missingMessage);
	return text;
}
//#endregion
export { postJsonRequest as a, normalizeBaseUrl as i, assertOkOrThrowHttpError as n, postTranscriptionRequest as o, fetchWithTimeoutGuarded as r, requireTranscriptionText as s, applyProviderRequestHeaders as t };
