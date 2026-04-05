import { t as createSubsystemLogger } from "./subsystem-D1w25rM-.js";
import { i as openBoundaryFileSync } from "./boundary-file-read-DUzcQ8hk.js";
import { a as buildPluginLoaderAliasMap, d as shouldPreferNativeJiti, o as buildPluginLoaderJitiOptions } from "./bundled-plugin-metadata-BoHf6EFf.js";
import { i as discoverOpenClawPlugins, n as loadPluginManifestRegistry } from "./manifest-registry-NzxlUGDZ.js";
import fsSync from "node:fs";
import { createJiti } from "jiti";
//#region src/channels/plugins/bundled.ts
const log = createSubsystemLogger("channels");
function resolveChannelPluginModuleEntry(moduleExport) {
	const resolved = moduleExport && typeof moduleExport === "object" && "default" in moduleExport ? moduleExport.default : moduleExport;
	if (!resolved || typeof resolved !== "object") return null;
	const record = resolved;
	if (!record.channelPlugin || typeof record.channelPlugin !== "object") return null;
	return {
		channelPlugin: record.channelPlugin,
		...typeof record.setChannelRuntime === "function" ? { setChannelRuntime: record.setChannelRuntime } : {}
	};
}
function resolveChannelSetupModuleEntry(moduleExport) {
	const resolved = moduleExport && typeof moduleExport === "object" && "default" in moduleExport ? moduleExport.default : moduleExport;
	if (!resolved || typeof resolved !== "object") return null;
	const record = resolved;
	if (!record.plugin || typeof record.plugin !== "object") return null;
	return { plugin: record.plugin };
}
function createModuleLoader() {
	const jitiLoaders = /* @__PURE__ */ new Map();
	return (modulePath) => {
		const tryNative = shouldPreferNativeJiti(modulePath);
		const aliasMap = buildPluginLoaderAliasMap(modulePath, process.argv[1], import.meta.url);
		const cacheKey = JSON.stringify({
			tryNative,
			aliasMap: Object.entries(aliasMap).toSorted(([left], [right]) => left.localeCompare(right))
		});
		const cached = jitiLoaders.get(cacheKey);
		if (cached) return cached;
		const loader = createJiti(import.meta.url, {
			...buildPluginLoaderJitiOptions(aliasMap),
			tryNative
		});
		jitiLoaders.set(cacheKey, loader);
		return loader;
	};
}
const loadModule = createModuleLoader();
function loadBundledModule(modulePath, rootDir) {
	const opened = openBoundaryFileSync({
		absolutePath: modulePath,
		rootPath: rootDir,
		boundaryLabel: "plugin root",
		rejectHardlinks: false,
		skipLexicalRootCheck: true
	});
	if (!opened.ok) throw new Error("plugin entry path escapes plugin root or fails alias checks");
	const safePath = opened.path;
	fsSync.closeSync(opened.fd);
	return loadModule(safePath)(safePath);
}
function loadGeneratedBundledChannelEntries() {
	const discovery = discoverOpenClawPlugins({ cache: false });
	const manifestRegistry = loadPluginManifestRegistry({
		cache: false,
		config: {},
		candidates: discovery.candidates,
		diagnostics: discovery.diagnostics
	});
	const manifestByRoot = new Map(manifestRegistry.plugins.map((plugin) => [plugin.rootDir, plugin]));
	const seenIds = /* @__PURE__ */ new Set();
	const entries = [];
	for (const candidate of discovery.candidates) {
		const manifest = manifestByRoot.get(candidate.rootDir);
		if (!manifest || manifest.origin !== "bundled" || manifest.channels.length === 0) continue;
		if (seenIds.has(manifest.id)) continue;
		seenIds.add(manifest.id);
		try {
			const entry = resolveChannelPluginModuleEntry(loadBundledModule(candidate.source, candidate.rootDir));
			if (!entry) {
				log.warn(`[channels] bundled channel entry ${manifest.id} missing channelPlugin export; skipping`);
				continue;
			}
			const setupEntry = manifest.setupSource ? resolveChannelSetupModuleEntry(loadBundledModule(manifest.setupSource, candidate.rootDir)) : null;
			entries.push({
				id: manifest.id,
				entry,
				...setupEntry ? { setupEntry } : {}
			});
		} catch (error) {
			log.warn(`[channels] failed to load bundled channel ${manifest.id} from ${candidate.source}: ${String(error)}`);
		}
	}
	return entries;
}
function buildBundledChannelPluginsById(plugins) {
	const byId = /* @__PURE__ */ new Map();
	for (const plugin of plugins) {
		if (byId.has(plugin.id)) throw new Error(`duplicate bundled channel plugin id: ${plugin.id}`);
		byId.set(plugin.id, plugin);
	}
	return byId;
}
let cachedBundledChannelState = null;
function getBundledChannelState() {
	if (cachedBundledChannelState) return cachedBundledChannelState;
	const entries = loadGeneratedBundledChannelEntries();
	const plugins = entries.map(({ entry }) => entry.channelPlugin);
	const setupPlugins = entries.flatMap(({ setupEntry }) => {
		const plugin = setupEntry?.plugin;
		return plugin ? [plugin] : [];
	});
	const runtimeSettersById = /* @__PURE__ */ new Map();
	for (const { entry } of entries) if (entry.setChannelRuntime) runtimeSettersById.set(entry.channelPlugin.id, entry.setChannelRuntime);
	cachedBundledChannelState = {
		entries,
		plugins,
		setupPlugins,
		pluginsById: buildBundledChannelPluginsById(plugins),
		runtimeSettersById
	};
	return cachedBundledChannelState;
}
function listBundledChannelPlugins() {
	return getBundledChannelState().plugins;
}
function listBundledChannelSetupPlugins() {
	return getBundledChannelState().setupPlugins;
}
function getBundledChannelPlugin(id) {
	return getBundledChannelState().pluginsById.get(id);
}
//#endregion
export { listBundledChannelPlugins as n, listBundledChannelSetupPlugins as r, getBundledChannelPlugin as t };
