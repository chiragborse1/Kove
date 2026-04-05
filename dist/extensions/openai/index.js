import { t as definePluginEntry } from "../../plugin-entry-Dhumb90r.js";
import { t as buildOpenAICodexCliBackend } from "../../cli-backend-xz3aeYGz.js";
import { t as buildOpenAIImageGenerationProvider } from "../../image-generation-provider-CstCP42v.js";
import { n as openaiCodexMediaUnderstandingProvider, r as openaiMediaUnderstandingProvider } from "../../media-understanding-provider-kusdgE6b.js";
import { t as buildOpenAICodexProviderPlugin } from "../../openai-codex-provider-DEoQfdS2.js";
import { t as buildOpenAIProvider } from "../../openai-provider-Dyj6oU2C.js";
import { t as buildOpenAISpeechProvider } from "../../speech-provider-BBe1NG9A.js";
//#region extensions/openai/index.ts
var openai_default = definePluginEntry({
	id: "openai",
	name: "OpenAI Provider",
	description: "Bundled OpenAI provider plugins",
	register(api) {
		api.registerCliBackend(buildOpenAICodexCliBackend());
		api.registerProvider(buildOpenAIProvider());
		api.registerProvider(buildOpenAICodexProviderPlugin());
		api.registerSpeechProvider(buildOpenAISpeechProvider());
		api.registerMediaUnderstandingProvider(openaiMediaUnderstandingProvider);
		api.registerMediaUnderstandingProvider(openaiCodexMediaUnderstandingProvider);
		api.registerImageGenerationProvider(buildOpenAIImageGenerationProvider());
	}
});
//#endregion
export { openai_default as default };
