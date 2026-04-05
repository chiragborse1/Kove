import { t as definePluginEntry } from "../../plugin-entry-Dhumb90r.js";
import { t as buildMicrosoftSpeechProvider } from "../../speech-provider-BD06swpr.js";
//#region extensions/microsoft/index.ts
var microsoft_default = definePluginEntry({
	id: "microsoft",
	name: "Microsoft Speech",
	description: "Bundled Microsoft speech provider",
	register(api) {
		api.registerSpeechProvider(buildMicrosoftSpeechProvider());
	}
});
//#endregion
export { microsoft_default as default };
