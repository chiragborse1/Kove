import { i as loadBundledPluginPublicSurfaceModuleSync } from "./facade-runtime-DBTedwAV.js";
//#region src/plugin-sdk/discord-account.ts
function loadFacadeModule() {
	return loadBundledPluginPublicSurfaceModuleSync({
		dirName: "discord",
		artifactBasename: "api.js"
	});
}
const resolveDiscordAccount = ((...args) => loadFacadeModule()["resolveDiscordAccount"](...args));
//#endregion
export { resolveDiscordAccount as t };
