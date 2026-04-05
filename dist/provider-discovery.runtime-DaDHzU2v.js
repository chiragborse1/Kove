import { t as resolvePluginProviders } from "./providers.runtime-BvwU2IuS.js";
//#region src/plugins/provider-discovery.runtime.ts
function resolvePluginDiscoveryProvidersRuntime(params) {
	return resolvePluginProviders({
		...params,
		bundledProviderAllowlistCompat: true
	});
}
//#endregion
export { resolvePluginDiscoveryProvidersRuntime };
