import { i as loadBundledPluginPublicSurfaceModuleSync } from "./facade-runtime-DBTedwAV.js";
//#region src/plugin-sdk/telegram-account.ts
function loadFacadeModule() {
	return loadBundledPluginPublicSurfaceModuleSync({
		dirName: "telegram",
		artifactBasename: "api.js"
	});
}
const resolveTelegramAccount = ((...args) => loadFacadeModule()["resolveTelegramAccount"](...args));
//#endregion
export { resolveTelegramAccount as t };
