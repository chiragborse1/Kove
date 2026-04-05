import { n as redactSensitiveText } from "./redact-BDinS1q9.js";
import { d as resolveGatewayPort } from "./paths-CG2veZVr.js";
import { i as resolvePreferredOpenClawTmpDir } from "./tmp-openclaw-dir-FwzW84ZI.js";
import { b as resolveUserPath } from "./utils-CQHEfYrT.js";
import { r as runCommandWithTimeout } from "./exec-Cdhvx72k.js";
import { r as isLoopbackHost } from "./net-CTrWm98z.js";
import { a as resolveGatewayAuth } from "./auth-CYVZDPWu.js";
import { a as tryLoadActivatedBundledPluginPublicSurfaceModuleSync, n as createLazyFacadeObjectValue, r as loadActivatedBundledPluginPublicSurfaceModuleSync } from "./facade-runtime-DBTedwAV.js";
import { n as deriveDefaultBrowserCdpPortRange, r as deriveDefaultBrowserControlPort } from "./port-defaults-rJDGvVxq.js";
import path from "node:path";
import os from "node:os";
import fs from "node:fs/promises";
import { randomBytes } from "node:crypto";
const DEFAULT_BROWSER_EVALUATE_ENABLED = true;
const DEFAULT_OPENCLAW_BROWSER_COLOR = "#FF4500";
const DEFAULT_OPENCLAW_BROWSER_PROFILE_NAME = "openclaw";
const DEFAULT_AI_SNAPSHOT_MAX_CHARS = 8e4;
const DEFAULT_FALLBACK_BROWSER_TMP_DIR = "/tmp/openclaw";
const CDP_PORT_RANGE_START = 18800;
function canUseNodeFs() {
	const getBuiltinModule = process.getBuiltinModule;
	if (typeof getBuiltinModule !== "function") return false;
	try {
		return getBuiltinModule("fs") !== void 0;
	} catch {
		return false;
	}
}
const DEFAULT_BROWSER_TMP_DIR = canUseNodeFs() ? resolvePreferredOpenClawTmpDir() : DEFAULT_FALLBACK_BROWSER_TMP_DIR;
const DEFAULT_UPLOAD_DIR = path.join(DEFAULT_BROWSER_TMP_DIR, "uploads");
function normalizeHexColor(raw) {
	const value = (raw ?? "").trim();
	if (!value) return DEFAULT_OPENCLAW_BROWSER_COLOR;
	const normalized = value.startsWith("#") ? value : `#${value}`;
	if (!/^#[0-9a-fA-F]{6}$/.test(normalized)) return DEFAULT_OPENCLAW_BROWSER_COLOR;
	return normalized.toUpperCase();
}
function normalizeTimeoutMs(raw, fallback) {
	const value = typeof raw === "number" && Number.isFinite(raw) ? Math.floor(raw) : fallback;
	return value < 0 ? fallback : value;
}
function resolveCdpPortRangeStart(rawStart, fallbackStart, rangeSpan) {
	const start = typeof rawStart === "number" && Number.isFinite(rawStart) ? Math.floor(rawStart) : fallbackStart;
	if (start < 1 || start > 65535) throw new Error(`browser.cdpPortRangeStart must be between 1 and 65535, got: ${start}`);
	const maxStart = 65535 - rangeSpan;
	if (start > maxStart) throw new Error(`browser.cdpPortRangeStart (${start}) is too high for a ${rangeSpan + 1}-port range; max is ${maxStart}.`);
	return start;
}
function normalizeStringList(raw) {
	if (!Array.isArray(raw) || raw.length === 0) return;
	const values = raw.map((value) => value.trim()).filter((value) => value.length > 0);
	return values.length > 0 ? values : void 0;
}
function resolveBrowserSsrFPolicy(cfg) {
	const allowPrivateNetwork = cfg?.ssrfPolicy?.allowPrivateNetwork;
	const dangerouslyAllowPrivateNetwork = cfg?.ssrfPolicy?.dangerouslyAllowPrivateNetwork;
	const allowedHostnames = normalizeStringList(cfg?.ssrfPolicy?.allowedHostnames);
	const hostnameAllowlist = normalizeStringList(cfg?.ssrfPolicy?.hostnameAllowlist);
	const hasExplicitPrivateSetting = allowPrivateNetwork !== void 0 || dangerouslyAllowPrivateNetwork !== void 0;
	const resolvedAllowPrivateNetwork = dangerouslyAllowPrivateNetwork === true || allowPrivateNetwork === true || !hasExplicitPrivateSetting;
	if (!resolvedAllowPrivateNetwork && !hasExplicitPrivateSetting && !allowedHostnames && !hostnameAllowlist) return;
	return {
		...resolvedAllowPrivateNetwork ? { dangerouslyAllowPrivateNetwork: true } : {},
		...allowedHostnames ? { allowedHostnames } : {},
		...hostnameAllowlist ? { hostnameAllowlist } : {}
	};
}
function parseBrowserHttpUrl(raw, label) {
	const trimmed = raw.trim();
	const parsed = new URL(trimmed);
	if (![
		"http:",
		"https:",
		"ws:",
		"wss:"
	].includes(parsed.protocol)) throw new Error(`${label} must be http(s) or ws(s), got: ${parsed.protocol.replace(":", "")}`);
	const isSecure = parsed.protocol === "https:" || parsed.protocol === "wss:";
	const port = parsed.port && Number.parseInt(parsed.port, 10) > 0 ? Number.parseInt(parsed.port, 10) : isSecure ? 443 : 80;
	if (Number.isNaN(port) || port <= 0 || port > 65535) throw new Error(`${label} has invalid port: ${parsed.port}`);
	return {
		parsed,
		port,
		normalized: parsed.toString().replace(/\/$/, "")
	};
}
function ensureDefaultProfile(profiles, defaultColor, legacyCdpPort, derivedDefaultCdpPort, legacyCdpUrl) {
	const result = { ...profiles };
	if (!result["openclaw"]) result[DEFAULT_OPENCLAW_BROWSER_PROFILE_NAME] = {
		cdpPort: legacyCdpPort ?? derivedDefaultCdpPort ?? CDP_PORT_RANGE_START,
		color: defaultColor,
		...legacyCdpUrl ? { cdpUrl: legacyCdpUrl } : {}
	};
	return result;
}
function ensureDefaultUserBrowserProfile(profiles) {
	const result = { ...profiles };
	if (result.user) return result;
	result.user = {
		driver: "existing-session",
		attachOnly: true,
		color: "#00AA00"
	};
	return result;
}
function resolveBrowserConfig(cfg, rootConfig) {
	const enabled = cfg?.enabled ?? true;
	const evaluateEnabled = cfg?.evaluateEnabled ?? true;
	const controlPort = deriveDefaultBrowserControlPort(resolveGatewayPort(rootConfig) ?? 18791);
	const defaultColor = normalizeHexColor(cfg?.color);
	const remoteCdpTimeoutMs = normalizeTimeoutMs(cfg?.remoteCdpTimeoutMs, 1500);
	const remoteCdpHandshakeTimeoutMs = normalizeTimeoutMs(cfg?.remoteCdpHandshakeTimeoutMs, Math.max(2e3, remoteCdpTimeoutMs * 2));
	const derivedCdpRange = deriveDefaultBrowserCdpPortRange(controlPort);
	const cdpRangeSpan = derivedCdpRange.end - derivedCdpRange.start;
	const cdpPortRangeStart = resolveCdpPortRangeStart(cfg?.cdpPortRangeStart, derivedCdpRange.start, cdpRangeSpan);
	const cdpPortRangeEnd = cdpPortRangeStart + cdpRangeSpan;
	const rawCdpUrl = (cfg?.cdpUrl ?? "").trim();
	let cdpInfo;
	if (rawCdpUrl) cdpInfo = parseBrowserHttpUrl(rawCdpUrl, "browser.cdpUrl");
	else {
		const derivedPort = controlPort + 1;
		if (derivedPort > 65535) throw new Error(`Derived CDP port (${derivedPort}) is too high; check gateway port configuration.`);
		const derived = new URL(`http://127.0.0.1:${derivedPort}`);
		cdpInfo = {
			parsed: derived,
			port: derivedPort,
			normalized: derived.toString().replace(/\/$/, "")
		};
	}
	const headless = cfg?.headless === true;
	const noSandbox = cfg?.noSandbox === true;
	const attachOnly = cfg?.attachOnly === true;
	const executablePath = cfg?.executablePath?.trim() || void 0;
	const defaultProfileFromConfig = cfg?.defaultProfile?.trim() || void 0;
	const legacyCdpPort = rawCdpUrl ? cdpInfo.port : void 0;
	const isWsUrl = cdpInfo.parsed.protocol === "ws:" || cdpInfo.parsed.protocol === "wss:";
	const legacyCdpUrl = rawCdpUrl && isWsUrl ? cdpInfo.normalized : void 0;
	const profiles = ensureDefaultUserBrowserProfile(ensureDefaultProfile(cfg?.profiles, defaultColor, legacyCdpPort, cdpPortRangeStart, legacyCdpUrl));
	const cdpProtocol = cdpInfo.parsed.protocol === "https:" ? "https" : "http";
	const defaultProfile = defaultProfileFromConfig ?? (profiles["openclaw"] ? "openclaw" : profiles["openclaw"] ? "openclaw" : "user");
	const extraArgs = Array.isArray(cfg?.extraArgs) ? cfg.extraArgs.filter((a) => typeof a === "string" && a.trim().length > 0) : [];
	const ssrfPolicy = resolveBrowserSsrFPolicy(cfg);
	return {
		enabled,
		evaluateEnabled,
		controlPort,
		cdpPortRangeStart,
		cdpPortRangeEnd,
		cdpProtocol,
		cdpHost: cdpInfo.parsed.hostname,
		cdpIsLoopback: isLoopbackHost(cdpInfo.parsed.hostname),
		remoteCdpTimeoutMs,
		remoteCdpHandshakeTimeoutMs,
		color: defaultColor,
		executablePath,
		headless,
		noSandbox,
		attachOnly,
		defaultProfile,
		profiles,
		ssrfPolicy,
		extraArgs
	};
}
function resolveProfile(resolved, profileName) {
	const profile = resolved.profiles[profileName];
	if (!profile) return null;
	const rawProfileUrl = profile.cdpUrl?.trim() ?? "";
	let cdpHost = resolved.cdpHost;
	let cdpPort = profile.cdpPort ?? 0;
	let cdpUrl = "";
	const driver = profile.driver === "existing-session" ? "existing-session" : "openclaw";
	if (driver === "existing-session") return {
		name: profileName,
		cdpPort: 0,
		cdpUrl: "",
		cdpHost: "",
		cdpIsLoopback: true,
		userDataDir: resolveUserPath(profile.userDataDir?.trim() || "") || void 0,
		color: profile.color,
		driver,
		attachOnly: true
	};
	if (rawProfileUrl !== "" && cdpPort > 0 && /^wss?:\/\//i.test(rawProfileUrl) && /\/devtools\/browser\//i.test(rawProfileUrl)) {
		cdpHost = new URL(rawProfileUrl).hostname;
		cdpUrl = `${resolved.cdpProtocol}://${cdpHost}:${cdpPort}`;
	} else if (rawProfileUrl) {
		const parsed = parseBrowserHttpUrl(rawProfileUrl, `browser.profiles.${profileName}.cdpUrl`);
		cdpHost = parsed.parsed.hostname;
		cdpPort = parsed.port;
		cdpUrl = parsed.normalized;
	} else if (cdpPort) cdpUrl = `${resolved.cdpProtocol}://${resolved.cdpHost}:${cdpPort}`;
	else throw new Error(`Profile "${profileName}" must define cdpPort or cdpUrl.`);
	return {
		name: profileName,
		cdpPort,
		cdpUrl,
		cdpHost,
		cdpIsLoopback: isLoopbackHost(cdpHost),
		color: profile.color,
		driver,
		attachOnly: profile.attachOnly ?? resolved.attachOnly
	};
}
function resolveBrowserControlAuth(cfg, env = process.env) {
	const auth = resolveGatewayAuth({
		authConfig: cfg?.gateway?.auth,
		env,
		tailscaleMode: cfg?.gateway?.tailscale?.mode
	});
	const token = typeof auth.token === "string" ? auth.token.trim() : "";
	const password = typeof auth.password === "string" ? auth.password.trim() : "";
	return {
		token: token || void 0,
		password: password || void 0
	};
}
function redactCdpUrl(cdpUrl) {
	if (typeof cdpUrl !== "string") return cdpUrl;
	const trimmed = cdpUrl.trim();
	if (!trimmed) return trimmed;
	try {
		const parsed = new URL(trimmed);
		parsed.username = "";
		parsed.password = "";
		return redactSensitiveText(parsed.toString().replace(/\/$/, ""));
	} catch {
		return redactSensitiveText(trimmed);
	}
}
//#endregion
//#region src/plugin-sdk/browser-maintenance.ts
function createTrashCollisionSuffix() {
	return randomBytes(6).toString("hex");
}
const closeTrackedBrowserTabsForSessions = (async (...args) => {
	const closeTrackedTabs = tryLoadActivatedBundledPluginPublicSurfaceModuleSync({
		dirName: "browser",
		artifactBasename: "runtime-api.js"
	})?.closeTrackedBrowserTabsForSessions;
	if (typeof closeTrackedTabs !== "function") return 0;
	return await closeTrackedTabs(...args);
});
const movePathToTrash = (async (...args) => {
	const [targetPath] = args;
	try {
		const result = await runCommandWithTimeout(["trash", targetPath], { timeoutMs: 1e4 });
		if (result.code !== 0) throw new Error(`trash exited with code ${result.code ?? "unknown"}`);
		return targetPath;
	} catch {
		const trashDir = path.join(os.homedir(), ".Trash");
		await fs.mkdir(trashDir, { recursive: true });
		const base = path.basename(targetPath);
		const timestamp = Date.now();
		let destination = path.join(trashDir, `${base}-${timestamp}`);
		try {
			await fs.access(destination);
			destination = path.join(trashDir, `${base}-${timestamp}-${createTrashCollisionSuffix()}`);
		} catch {}
		await fs.rename(targetPath, destination);
		return destination;
	}
});
//#endregion
//#region src/plugin-sdk/browser-runtime.ts
function loadFacadeModule() {
	return loadActivatedBundledPluginPublicSurfaceModuleSync({
		dirName: "browser",
		artifactBasename: "runtime-api.js"
	});
}
const applyBrowserProxyPaths = ((...args) => loadFacadeModule()["applyBrowserProxyPaths"](...args));
const browserAct = ((...args) => loadFacadeModule()["browserAct"](...args));
const browserArmDialog = ((...args) => loadFacadeModule()["browserArmDialog"](...args));
const browserArmFileChooser = ((...args) => loadFacadeModule()["browserArmFileChooser"](...args));
const browserCloseTab = ((...args) => loadFacadeModule()["browserCloseTab"](...args));
const browserConsoleMessages = ((...args) => loadFacadeModule()["browserConsoleMessages"](...args));
const browserCreateProfile = ((...args) => loadFacadeModule()["browserCreateProfile"](...args));
const browserDeleteProfile = ((...args) => loadFacadeModule()["browserDeleteProfile"](...args));
const browserFocusTab = ((...args) => loadFacadeModule()["browserFocusTab"](...args));
const browserHandlers = createLazyFacadeObjectValue(() => loadFacadeModule()["browserHandlers"]);
const browserNavigate = ((...args) => loadFacadeModule()["browserNavigate"](...args));
const browserOpenTab = ((...args) => loadFacadeModule()["browserOpenTab"](...args));
const browserPdfSave = ((...args) => loadFacadeModule()["browserPdfSave"](...args));
const browserProfiles = ((...args) => loadFacadeModule()["browserProfiles"](...args));
const browserResetProfile = ((...args) => loadFacadeModule()["browserResetProfile"](...args));
const browserScreenshotAction = ((...args) => loadFacadeModule()["browserScreenshotAction"](...args));
const browserSnapshot = ((...args) => loadFacadeModule()["browserSnapshot"](...args));
const browserStart = ((...args) => loadFacadeModule()["browserStart"](...args));
const browserStatus = ((...args) => loadFacadeModule()["browserStatus"](...args));
const browserStop = ((...args) => loadFacadeModule()["browserStop"](...args));
const browserTabAction = ((...args) => loadFacadeModule()["browserTabAction"](...args));
const browserTabs = ((...args) => loadFacadeModule()["browserTabs"](...args));
const createBrowserControlContext = ((...args) => loadFacadeModule()["createBrowserControlContext"](...args));
const createBrowserPluginService = ((...args) => loadFacadeModule()["createBrowserPluginService"](...args));
const createBrowserRouteContext = ((...args) => loadFacadeModule()["createBrowserRouteContext"](...args));
const createBrowserRouteDispatcher = ((...args) => loadFacadeModule()["createBrowserRouteDispatcher"](...args));
const createBrowserRuntimeState = ((...args) => loadFacadeModule()["createBrowserRuntimeState"](...args));
const createBrowserTool = ((...args) => loadFacadeModule()["createBrowserTool"](...args));
const definePluginEntry = ((...args) => loadFacadeModule()["definePluginEntry"](...args));
const ensureBrowserControlAuth = ((...args) => loadFacadeModule()["ensureBrowserControlAuth"](...args));
const getBrowserControlState = ((...args) => loadFacadeModule()["getBrowserControlState"](...args));
const getBrowserProfileCapabilities = ((...args) => loadFacadeModule()["getBrowserProfileCapabilities"](...args));
const handleBrowserGatewayRequest = ((...args) => loadFacadeModule()["handleBrowserGatewayRequest"](...args));
const installBrowserAuthMiddleware = ((...args) => loadFacadeModule()["installBrowserAuthMiddleware"](...args));
const installBrowserCommonMiddleware = ((...args) => loadFacadeModule()["installBrowserCommonMiddleware"](...args));
const isPersistentBrowserProfileMutation = ((...args) => loadFacadeModule()["isPersistentBrowserProfileMutation"](...args));
const normalizeBrowserFormField = ((...args) => loadFacadeModule()["normalizeBrowserFormField"](...args));
const normalizeBrowserFormFieldValue = ((...args) => loadFacadeModule()["normalizeBrowserFormFieldValue"](...args));
const normalizeBrowserRequestPath = ((...args) => loadFacadeModule()["normalizeBrowserRequestPath"](...args));
const parseBrowserMajorVersion = ((...args) => loadFacadeModule()["parseBrowserMajorVersion"](...args));
const persistBrowserProxyFiles = ((...args) => loadFacadeModule()["persistBrowserProxyFiles"](...args));
const readBrowserVersion = ((...args) => loadFacadeModule()["readBrowserVersion"](...args));
const registerBrowserCli = ((...args) => loadFacadeModule()["registerBrowserCli"](...args));
const registerBrowserRoutes = ((...args) => loadFacadeModule()["registerBrowserRoutes"](...args));
const resolveExistingPathsWithinRoot = ((...args) => loadFacadeModule()["resolveExistingPathsWithinRoot"](...args));
const resolveGoogleChromeExecutableForPlatform = ((...args) => loadFacadeModule()["resolveGoogleChromeExecutableForPlatform"](...args));
const resolveRequestedBrowserProfile = ((...args) => loadFacadeModule()["resolveRequestedBrowserProfile"](...args));
const runBrowserProxyCommand = ((...args) => loadFacadeModule()["runBrowserProxyCommand"](...args));
const startBrowserBridgeServer = ((...args) => loadFacadeModule()["startBrowserBridgeServer"](...args));
const startBrowserControlServiceFromConfig = ((...args) => loadFacadeModule()["startBrowserControlServiceFromConfig"](...args));
const stopBrowserBridgeServer = ((...args) => loadFacadeModule()["stopBrowserBridgeServer"](...args));
const stopBrowserControlService = ((...args) => loadFacadeModule()["stopBrowserControlService"](...args));
const stopBrowserRuntime = ((...args) => loadFacadeModule()["stopBrowserRuntime"](...args));
const trackSessionBrowserTab = ((...args) => loadFacadeModule()["trackSessionBrowserTab"](...args));
const untrackSessionBrowserTab = ((...args) => loadFacadeModule()["untrackSessionBrowserTab"](...args));
//#endregion
export { stopBrowserRuntime as $, ensureBrowserControlAuth as A, parseBrowserMajorVersion as B, createBrowserControlContext as C, createBrowserRuntimeState as D, createBrowserRouteDispatcher as E, installBrowserCommonMiddleware as F, resolveExistingPathsWithinRoot as G, readBrowserVersion as H, isPersistentBrowserProfileMutation as I, runBrowserProxyCommand as J, resolveGoogleChromeExecutableForPlatform as K, normalizeBrowserFormField as L, getBrowserProfileCapabilities as M, handleBrowserGatewayRequest as N, createBrowserTool as O, installBrowserAuthMiddleware as P, stopBrowserControlService as Q, normalizeBrowserFormFieldValue as R, browserTabs as S, createBrowserRouteContext as T, registerBrowserCli as U, persistBrowserProxyFiles as V, registerBrowserRoutes as W, startBrowserControlServiceFromConfig as X, startBrowserBridgeServer as Y, stopBrowserBridgeServer as Z, browserSnapshot as _, browserCloseTab as a, DEFAULT_BROWSER_EVALUATE_ENABLED as at, browserStop as b, browserDeleteProfile as c, DEFAULT_UPLOAD_DIR as ct, browserNavigate as d, resolveBrowserControlAuth as dt, trackSessionBrowserTab as et, browserOpenTab as f, resolveProfile as ft, browserScreenshotAction as g, browserResetProfile as h, browserArmFileChooser as i, DEFAULT_AI_SNAPSHOT_MAX_CHARS as it, getBrowserControlState as j, definePluginEntry as k, browserFocusTab as l, redactCdpUrl as lt, browserProfiles as m, browserAct as n, closeTrackedBrowserTabsForSessions as nt, browserConsoleMessages as o, DEFAULT_OPENCLAW_BROWSER_COLOR as ot, browserPdfSave as p, resolveRequestedBrowserProfile as q, browserArmDialog as r, movePathToTrash as rt, browserCreateProfile as s, DEFAULT_OPENCLAW_BROWSER_PROFILE_NAME as st, applyBrowserProxyPaths as t, untrackSessionBrowserTab as tt, browserHandlers as u, resolveBrowserConfig as ut, browserStart as v, createBrowserPluginService as w, browserTabAction as x, browserStatus as y, normalizeBrowserRequestPath as z };
