import { i as normalizeBaseUrl, n as assertOkOrThrowHttpError, o as postTranscriptionRequest, s as requireTranscriptionText, t as applyProviderRequestHeaders } from "./shared-BJEtxa6U.js";
import "./image-runtime-D2eFRd_C.js";
import path from "node:path";
//#region src/media-understanding/openai-compatible-audio.ts
function resolveModel(model, fallback) {
	return model?.trim() || fallback;
}
async function transcribeOpenAiCompatibleAudio(params) {
	const fetchFn = params.fetchFn ?? fetch;
	const baseUrl = normalizeBaseUrl(params.baseUrl, params.defaultBaseUrl);
	const allowPrivate = Boolean(params.baseUrl?.trim());
	const url = `${baseUrl}/audio/transcriptions`;
	const model = resolveModel(params.model, params.defaultModel);
	const form = new FormData();
	const fileName = params.fileName?.trim() || path.basename(params.fileName) || "audio";
	const bytes = new Uint8Array(params.buffer);
	const blob = new Blob([bytes], { type: params.mime ?? "application/octet-stream" });
	form.append("file", blob, fileName);
	form.append("model", model);
	if (params.language?.trim()) form.append("language", params.language.trim());
	if (params.prompt?.trim()) form.append("prompt", params.prompt.trim());
	const headers = applyProviderRequestHeaders({
		headers: params.headers,
		provider: params.provider,
		api: "openai-audio-transcriptions",
		baseUrl,
		capability: "audio",
		transport: "media-understanding"
	});
	if (!headers.has("authorization")) headers.set("authorization", `Bearer ${params.apiKey}`);
	const { response: res, release } = await postTranscriptionRequest({
		url,
		headers,
		body: form,
		timeoutMs: params.timeoutMs,
		fetchFn,
		allowPrivateNetwork: allowPrivate
	});
	try {
		await assertOkOrThrowHttpError(res, "Audio transcription failed");
		return {
			text: requireTranscriptionText((await res.json()).text, "Audio transcription response missing text"),
			model
		};
	} finally {
		await release();
	}
}
//#endregion
export { transcribeOpenAiCompatibleAudio as t };
