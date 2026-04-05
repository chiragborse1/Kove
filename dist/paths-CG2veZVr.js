import fsSync from "node:fs";
import path from "node:path";
import os from "node:os";
//#region src/infra/home-dir.ts
function normalize(value) {
	const trimmed = value?.trim();
	if (!trimmed) return;
	if (trimmed === "undefined" || trimmed === "null") return;
	return trimmed;
}
function resolveEffectiveHomeDir(env = process.env, homedir = os.homedir) {
	const raw = resolveRawHomeDir(env, homedir);
	return raw ? path.resolve(raw) : void 0;
}
function resolveOsHomeDir(env = process.env, homedir = os.homedir) {
	const raw = resolveRawOsHomeDir(env, homedir);
	return raw ? path.resolve(raw) : void 0;
}
function resolveRawHomeDir(env, homedir) {
	const explicitHome = normalize(env.OPENCLAW_HOME);
	if (explicitHome) {
		if (explicitHome === "~" || explicitHome.startsWith("~/") || explicitHome.startsWith("~\\")) {
			const fallbackHome = resolveRawOsHomeDir(env, homedir);
			if (fallbackHome) return explicitHome.replace(/^~(?=$|[\\/])/, fallbackHome);
			return;
		}
		return explicitHome;
	}
	return resolveRawOsHomeDir(env, homedir);
}
function resolveRawOsHomeDir(env, homedir) {
	const envHome = normalize(env.HOME);
	if (envHome) return envHome;
	const userProfile = normalize(env.USERPROFILE);
	if (userProfile) return userProfile;
	return normalizeSafe(homedir);
}
function normalizeSafe(homedir) {
	try {
		return normalize(homedir());
	} catch {
		return;
	}
}
function resolveRequiredHomeDir(env = process.env, homedir = os.homedir) {
	return resolveEffectiveHomeDir(env, homedir) ?? path.resolve(process.cwd());
}
function resolveRequiredOsHomeDir(env = process.env, homedir = os.homedir) {
	return resolveOsHomeDir(env, homedir) ?? path.resolve(process.cwd());
}
function expandHomePrefix(input, opts) {
	if (!input.startsWith("~")) return input;
	const home = normalize(opts?.home) ?? resolveEffectiveHomeDir(opts?.env ?? process.env, opts?.homedir ?? os.homedir);
	if (!home) return input;
	return input.replace(/^~(?=$|[\\/])/, home);
}
function resolveHomeRelativePath(input, opts) {
	const trimmed = input.trim();
	if (!trimmed) return trimmed;
	if (trimmed.startsWith("~")) {
		const expanded = expandHomePrefix(trimmed, {
			home: resolveRequiredHomeDir(opts?.env ?? process.env, opts?.homedir ?? os.homedir),
			env: opts?.env,
			homedir: opts?.homedir
		});
		return path.resolve(expanded);
	}
	return path.resolve(trimmed);
}
function resolveOsHomeRelativePath(input, opts) {
	const trimmed = input.trim();
	if (!trimmed) return trimmed;
	if (trimmed.startsWith("~")) {
		const expanded = expandHomePrefix(trimmed, {
			home: resolveRequiredOsHomeDir(opts?.env ?? process.env, opts?.homedir ?? os.homedir),
			env: opts?.env,
			homedir: opts?.homedir
		});
		return path.resolve(expanded);
	}
	return path.resolve(trimmed);
}
//#endregion
//#region src/config/paths.ts
/**
* Nix mode detection: When OPENCLAW_NIX_MODE=1, the gateway is running under Nix.
* In this mode:
* - No auto-install flows should be attempted
* - Missing dependencies should produce actionable Nix-specific error messages
* - Config is managed externally (read-only from Nix perspective)
*/
function resolveIsNixMode(env = process.env) {
	return env.OPENCLAW_NIX_MODE === "1";
}
const isNixMode = resolveIsNixMode();
const PREFERRED_STATE_DIRNAME = ".kova";
const OPENCLAW_COMPAT_STATE_DIRNAME = ".openclaw";
const LEGACY_STATE_DIRNAMES = [".clawdbot"];
const CONFIG_FILENAME = "kova.json";
const LEGACY_CONFIG_FILENAMES = ["openclaw.json", "clawdbot.json"];
function resolveDefaultHomeDir() {
	return resolveRequiredHomeDir(process.env, os.homedir);
}
/** Build a homedir thunk that respects OPENCLAW_HOME for the given env. */
function envHomedir(env) {
	return () => resolveRequiredHomeDir(env, os.homedir);
}
function preferredStateDir(homedir = resolveDefaultHomeDir) {
	return path.join(homedir(), PREFERRED_STATE_DIRNAME);
}
function openClawCompatStateDir(homedir = resolveDefaultHomeDir) {
	return path.join(homedir(), OPENCLAW_COMPAT_STATE_DIRNAME);
}
function legacyStateDirs(homedir = resolveDefaultHomeDir) {
	return LEGACY_STATE_DIRNAMES.map((dir) => path.join(homedir(), dir));
}
function newStateDir(homedir = resolveDefaultHomeDir) {
	return openClawCompatStateDir(homedir);
}
function resolveLegacyStateDir(homedir = resolveDefaultHomeDir) {
	return legacyStateDirs(homedir)[0] ?? newStateDir(homedir);
}
function resolveLegacyStateDirs(homedir = resolveDefaultHomeDir) {
	return legacyStateDirs(homedir);
}
function resolveNewStateDir(homedir = resolveDefaultHomeDir) {
	return newStateDir(homedir);
}
function pathExists(targetPath) {
	try {
		return fsSync.existsSync(targetPath);
	} catch {
		return false;
	}
}
function resolveStateDirOverrideValue(env) {
	const kovaOverride = env.KOVA_STATE_DIR?.trim();
	if (kovaOverride) return kovaOverride;
	const openClawOverride = env.OPENCLAW_STATE_DIR?.trim();
	if (openClawOverride) return openClawOverride;
}
function buildKovaCompatLinkMessage(params) {
	if (params.env.OPENCLAW_HOME?.trim()) return `Kova: linked ${params.preferredDir} -> ${params.compatDir} for compatibility`;
	return "Kova: linked ~/.kova → ~/.openclaw for compatibility";
}
function ensureDefaultStateDirReady(env = process.env, homedir = envHomedir(env)) {
	if (resolveStateDirOverrideValue(env) || env.VITEST === "true") return {
		created: false,
		linked: false
	};
	const effectiveHomedir = () => resolveRequiredHomeDir(env, homedir);
	const preferredDir = preferredStateDir(effectiveHomedir);
	if (pathExists(preferredDir)) return {
		created: false,
		linked: false
	};
	const compatDir = openClawCompatStateDir(effectiveHomedir);
	if (pathExists(compatDir)) try {
		fsSync.symlinkSync(compatDir, preferredDir, process.platform === "win32" ? "junction" : "dir");
		return {
			created: false,
			linked: true,
			message: buildKovaCompatLinkMessage({
				env,
				preferredDir,
				compatDir
			})
		};
	} catch {
		return {
			created: false,
			linked: false
		};
	}
	if (legacyStateDirs(effectiveHomedir).some((dir) => pathExists(dir))) return {
		created: false,
		linked: false
	};
	try {
		fsSync.mkdirSync(preferredDir, {
			recursive: true,
			mode: 448
		});
		return {
			created: true,
			linked: false
		};
	} catch {
		return {
			created: false,
			linked: false
		};
	}
}
/**
* State directory for mutable data (sessions, logs, caches).
* Can be overridden via KOVA_STATE_DIR or OPENCLAW_STATE_DIR.
* Default: ~/.kova
*/
function resolveStateDir(env = process.env, homedir = envHomedir(env)) {
	const effectiveHomedir = () => resolveRequiredHomeDir(env, homedir);
	const override = resolveStateDirOverrideValue(env);
	if (override) return resolveUserPath(override, env, effectiveHomedir);
	const newDir = preferredStateDir(effectiveHomedir);
	if (env.OPENCLAW_TEST_FAST === "1") return newDir;
	ensureDefaultStateDirReady(env, effectiveHomedir);
	if (pathExists(newDir)) return newDir;
	const existingLegacy = [openClawCompatStateDir(effectiveHomedir), ...legacyStateDirs(effectiveHomedir)].find((dir) => {
		try {
			return fsSync.existsSync(dir);
		} catch {
			return false;
		}
	});
	if (existingLegacy) return existingLegacy;
	return newDir;
}
function resolveUserPath(input, env = process.env, homedir = envHomedir(env)) {
	return resolveHomeRelativePath(input, {
		env,
		homedir
	});
}
const STATE_DIR = resolveStateDir();
/**
* Config file path (JSON or JSON5).
* Can be overridden via OPENCLAW_CONFIG_PATH.
* Default: ~/.kova/kova.json (or $KOVA_STATE_DIR/kova.json)
*/
function resolveCanonicalConfigPath(env = process.env, stateDir = resolveStateDir(env, envHomedir(env))) {
	const override = env.OPENCLAW_CONFIG_PATH?.trim();
	if (override) return resolveUserPath(override, env, envHomedir(env));
	return path.join(stateDir, CONFIG_FILENAME);
}
function resolveLegacyConfigPathsForCanonicalPath(configPath) {
	const dir = path.dirname(configPath);
	return LEGACY_CONFIG_FILENAMES.map((name) => path.join(dir, name));
}
/**
* Resolve the active config path by preferring existing config candidates
* before falling back to the canonical path.
*/
function resolveConfigPathCandidate(env = process.env, homedir = envHomedir(env)) {
	if (env.OPENCLAW_TEST_FAST === "1") return resolveCanonicalConfigPath(env, resolveStateDir(env, homedir));
	const existing = resolveDefaultConfigCandidates(env, homedir).find((candidate) => {
		try {
			return fsSync.existsSync(candidate);
		} catch {
			return false;
		}
	});
	if (existing) return existing;
	return resolveCanonicalConfigPath(env, resolveStateDir(env, homedir));
}
/**
* Active config path (prefers existing config files).
*/
function resolveConfigPath(env = process.env, stateDir = resolveStateDir(env, envHomedir(env)), homedir = envHomedir(env)) {
	const override = env.OPENCLAW_CONFIG_PATH?.trim();
	if (override) return resolveUserPath(override, env, homedir);
	if (env.OPENCLAW_TEST_FAST === "1") return path.join(stateDir, CONFIG_FILENAME);
	const stateOverride = resolveStateDirOverrideValue(env);
	const existing = [path.join(stateDir, CONFIG_FILENAME), ...LEGACY_CONFIG_FILENAMES.map((name) => path.join(stateDir, name))].find((candidate) => {
		try {
			return fsSync.existsSync(candidate);
		} catch {
			return false;
		}
	});
	if (existing) return existing;
	if (stateOverride) return path.join(stateDir, CONFIG_FILENAME);
	const defaultStateDir = resolveStateDir(env, homedir);
	if (path.resolve(stateDir) === path.resolve(defaultStateDir)) return resolveConfigPathCandidate(env, homedir);
	return path.join(stateDir, CONFIG_FILENAME);
}
const CONFIG_PATH = resolveConfigPathCandidate();
/**
* Resolve default config path candidates across default locations.
* Order: explicit config path → state-dir-derived paths → preferred default → compatibility dirs.
*/
function resolveDefaultConfigCandidates(env = process.env, homedir = envHomedir(env)) {
	const effectiveHomedir = () => resolveRequiredHomeDir(env, homedir);
	const explicit = env.OPENCLAW_CONFIG_PATH?.trim();
	if (explicit) return [resolveUserPath(explicit, env, effectiveHomedir)];
	const candidates = [];
	const stateDirOverride = resolveStateDirOverrideValue(env);
	if (stateDirOverride) {
		const resolved = resolveUserPath(stateDirOverride, env, effectiveHomedir);
		candidates.push(path.join(resolved, CONFIG_FILENAME));
		candidates.push(...LEGACY_CONFIG_FILENAMES.map((name) => path.join(resolved, name)));
	}
	const defaultDirs = [
		preferredStateDir(effectiveHomedir),
		openClawCompatStateDir(effectiveHomedir),
		...legacyStateDirs(effectiveHomedir)
	];
	for (const dir of defaultDirs) {
		candidates.push(path.join(dir, CONFIG_FILENAME));
		candidates.push(...LEGACY_CONFIG_FILENAMES.map((name) => path.join(dir, name)));
	}
	return candidates;
}
const DEFAULT_GATEWAY_PORT = 18789;
/**
* Gateway lock directory (ephemeral).
* Default: os.tmpdir()/openclaw-<uid> (uid suffix when available).
*/
function resolveGatewayLockDir(tmpdir = os.tmpdir) {
	const base = tmpdir();
	const uid = typeof process.getuid === "function" ? process.getuid() : void 0;
	const suffix = uid != null ? `openclaw-${uid}` : "openclaw";
	return path.join(base, suffix);
}
const OAUTH_FILENAME = "oauth.json";
/**
* OAuth credentials storage directory.
*
* Precedence:
* - `OPENCLAW_OAUTH_DIR` (explicit override)
* - `$*_STATE_DIR/credentials` (canonical server/default)
*/
function resolveOAuthDir(env = process.env, stateDir = resolveStateDir(env, envHomedir(env))) {
	const override = env.OPENCLAW_OAUTH_DIR?.trim();
	if (override) return resolveUserPath(override, env, envHomedir(env));
	return path.join(stateDir, "credentials");
}
function resolveOAuthPath(env = process.env, stateDir = resolveStateDir(env, envHomedir(env))) {
	return path.join(resolveOAuthDir(env, stateDir), OAUTH_FILENAME);
}
function parseGatewayPortEnvValue(raw) {
	const trimmed = raw?.trim();
	if (!trimmed) return null;
	if (/^\d+$/.test(trimmed)) {
		const parsed = Number.parseInt(trimmed, 10);
		return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
	}
	const bracketedIpv6Match = trimmed.match(/^\[[^\]]+\]:(\d+)$/);
	if (bracketedIpv6Match?.[1]) {
		const parsed = Number.parseInt(bracketedIpv6Match[1], 10);
		return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
	}
	const firstColon = trimmed.indexOf(":");
	const lastColon = trimmed.lastIndexOf(":");
	if (firstColon <= 0 || firstColon !== lastColon) return null;
	const suffix = trimmed.slice(firstColon + 1);
	if (!/^\d+$/.test(suffix)) return null;
	const parsed = Number.parseInt(suffix, 10);
	return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}
function resolveGatewayPort(cfg, env = process.env) {
	const envRaw = env.OPENCLAW_GATEWAY_PORT?.trim();
	const envPort = parseGatewayPortEnvValue(envRaw);
	if (envPort !== null) return envPort;
	const configPort = cfg?.gateway?.port;
	if (typeof configPort === "number" && Number.isFinite(configPort)) {
		if (configPort > 0) return configPort;
	}
	return DEFAULT_GATEWAY_PORT;
}
//#endregion
export { resolveOsHomeDir as C, resolveRequiredOsHomeDir as E, resolveHomeRelativePath as S, resolveRequiredHomeDir as T, resolveOAuthDir as _, isNixMode as a, expandHomePrefix as b, resolveConfigPathCandidate as c, resolveGatewayPort as d, resolveIsNixMode as f, resolveNewStateDir as g, resolveLegacyStateDirs as h, ensureDefaultStateDirReady as i, resolveDefaultConfigCandidates as l, resolveLegacyStateDir as m, DEFAULT_GATEWAY_PORT as n, resolveCanonicalConfigPath as o, resolveLegacyConfigPathsForCanonicalPath as p, STATE_DIR as r, resolveConfigPath as s, CONFIG_PATH as t, resolveGatewayLockDir as u, resolveOAuthPath as v, resolveOsHomeRelativePath as w, resolveEffectiveHomeDir as x, resolveStateDir as y };
