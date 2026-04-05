import { t as applyPluginAutoEnable } from "./plugin-auto-enable-B-0kVuVf.js";
import { r as resolveRuntimePluginRegistry } from "./loader-bzDVDQev.js";
import { a as getMemoryRuntime } from "./memory-state-Sm982BGU.js";
//#region src/plugins/memory-runtime.ts
function ensureMemoryRuntime(cfg) {
	const current = getMemoryRuntime();
	if (current || !cfg) return current;
	const resolvedConfig = applyPluginAutoEnable({
		config: cfg,
		env: process.env
	}).config;
	resolveRuntimePluginRegistry({ config: resolvedConfig });
	return getMemoryRuntime();
}
async function getActiveMemorySearchManager(params) {
	const runtime = ensureMemoryRuntime(params.cfg);
	if (!runtime) return {
		manager: null,
		error: "memory plugin unavailable"
	};
	return await runtime.getMemorySearchManager(params);
}
function resolveActiveMemoryBackendConfig(params) {
	return ensureMemoryRuntime(params.cfg)?.resolveMemoryBackendConfig(params) ?? null;
}
async function closeActiveMemorySearchManagers(cfg) {
	await getMemoryRuntime()?.closeAllMemorySearchManagers?.();
}
//#endregion
export { getActiveMemorySearchManager as n, resolveActiveMemoryBackendConfig as r, closeActiveMemorySearchManagers as t };
