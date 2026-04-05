import { t as createSubsystemLogger } from "./subsystem-D1w25rM-.js";
import { n as withBundledPluginEnablementCompat, t as withBundledPluginAllowlistCompat } from "./bundled-compat-DYxEn5CL.js";
import { t as applyPluginAutoEnable } from "./plugin-auto-enable-B-0kVuVf.js";
import { a as withBundledProviderVitestCompat, r as resolveEnabledProviderPluginIds, t as resolveBundledProviderCompatPluginIds } from "./providers-CsRcXQxM.js";
import { n as loadOpenClawPlugins } from "./loader-bzDVDQev.js";
import { t as createPluginLoaderLogger } from "./logger-KGKENizf.js";
//#region src/plugins/providers.runtime.ts
const log = createSubsystemLogger("plugins");
function resolvePluginProviders(params) {
	const env = params.env ?? process.env;
	const autoEnabledConfig = params.config !== void 0 ? applyPluginAutoEnable({
		config: params.config,
		env
	}).config : void 0;
	const bundledProviderCompatPluginIds = params.bundledProviderAllowlistCompat || params.bundledProviderVitestCompat ? resolveBundledProviderCompatPluginIds({
		config: autoEnabledConfig,
		workspaceDir: params.workspaceDir,
		env,
		onlyPluginIds: params.onlyPluginIds
	}) : [];
	const maybeAllowlistCompat = params.bundledProviderAllowlistCompat ? withBundledPluginAllowlistCompat({
		config: autoEnabledConfig,
		pluginIds: bundledProviderCompatPluginIds
	}) : autoEnabledConfig;
	const allowlistCompatConfig = params.bundledProviderAllowlistCompat ? withBundledPluginEnablementCompat({
		config: maybeAllowlistCompat,
		pluginIds: bundledProviderCompatPluginIds
	}) : maybeAllowlistCompat;
	const config = params.bundledProviderVitestCompat ? withBundledProviderVitestCompat({
		config: allowlistCompatConfig,
		pluginIds: bundledProviderCompatPluginIds,
		env
	}) : allowlistCompatConfig;
	const providerPluginIds = resolveEnabledProviderPluginIds({
		config,
		workspaceDir: params.workspaceDir,
		env,
		onlyPluginIds: params.onlyPluginIds
	});
	return loadOpenClawPlugins({
		config,
		workspaceDir: params.workspaceDir,
		env,
		onlyPluginIds: providerPluginIds,
		pluginSdkResolution: params.pluginSdkResolution,
		cache: params.cache ?? false,
		activate: params.activate ?? false,
		logger: createPluginLoaderLogger(log)
	}).providers.map((entry) => ({
		...entry.provider,
		pluginId: entry.pluginId
	}));
}
//#endregion
export { resolvePluginProviders as t };
