import { i as loadBundledPluginPublicSurfaceModuleSync } from "../facade-runtime-DBTedwAV.js";
//#region src/plugin-sdk/kimi-coding.ts
function loadFacadeModule() {
	return loadBundledPluginPublicSurfaceModuleSync({
		dirName: "kimi-coding",
		artifactBasename: "api.js"
	});
}
const buildKimiCodingProvider = ((...args) => loadFacadeModule()["buildKimiCodingProvider"](...args));
//#endregion
export { buildKimiCodingProvider };
