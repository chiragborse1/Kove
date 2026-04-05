import { g as pathExists } from "./utils-CQHEfYrT.js";
import { n as listBundledPluginMetadata } from "./bundled-plugin-metadata-BoHf6EFf.js";
import { t as applyPathPrepend } from "./path-prepend-Buutjh8r.js";
import path from "node:path";
import os from "node:os";
import fs from "node:fs/promises";
//#region src/infra/package-json.ts
async function readPackageVersion(root) {
	try {
		const raw = await fs.readFile(path.join(root, "package.json"), "utf-8");
		const version = JSON.parse(raw)?.version?.trim();
		return version ? version : null;
	} catch {
		return null;
	}
}
async function readPackageName(root) {
	try {
		const raw = await fs.readFile(path.join(root, "package.json"), "utf-8");
		const name = JSON.parse(raw)?.name?.trim();
		return name ? name : null;
	} catch {
		return null;
	}
}
//#endregion
//#region src/infra/package-tag.ts
function normalizePackageTagInput(value, packageNames) {
	const trimmed = value?.trim();
	if (!trimmed) return null;
	for (const packageName of packageNames) {
		if (trimmed === packageName) return null;
		const prefix = `${packageName}@`;
		if (trimmed.startsWith(prefix)) {
			const tag = trimmed.slice(prefix.length).trim();
			return tag ? tag : null;
		}
	}
	return trimmed;
}
//#endregion
//#region src/plugins/public-artifacts.ts
function assertUniqueValues(values, label) {
	const seen = /* @__PURE__ */ new Set();
	const duplicates = /* @__PURE__ */ new Set();
	for (const value of values) {
		if (seen.has(value)) {
			duplicates.add(value);
			continue;
		}
		seen.add(value);
	}
	if (duplicates.size > 0) throw new Error(`Duplicate ${label}: ${Array.from(duplicates).join(", ")}`);
	return values;
}
function getPublicArtifactBasename(relativePath) {
	return relativePath.split("/").at(-1) ?? relativePath;
}
function buildBundledDistArtifactPath(dirName, artifact) {
	return [
		"dist",
		"extensions",
		dirName,
		artifact
	].join("/");
}
const BUNDLED_RUNTIME_SIDECAR_PATHS = assertUniqueValues(listBundledPluginMetadata().flatMap((entry) => (entry.runtimeSidecarArtifacts ?? []).map((artifact) => buildBundledDistArtifactPath(entry.dirName, artifact))).toSorted((left, right) => left.localeCompare(right)), "bundled runtime sidecar path");
const EXTRA_GUARDED_EXTENSION_PUBLIC_SURFACE_BASENAMES = assertUniqueValues([
	"action-runtime.runtime.js",
	"action-runtime-api.js",
	"allow-from.js",
	"api.js",
	"auth-presence.js",
	"channel-config-api.js",
	"index.js",
	"login-qr-api.js",
	"onboard.js",
	"openai-codex-catalog.js",
	"provider-catalog.js",
	"session-key-api.js",
	"setup-api.js",
	"setup-entry.js",
	"timeouts.js",
	"x-search.js"
], "extra guarded extension public surface basename");
assertUniqueValues([...assertUniqueValues([...new Set(BUNDLED_RUNTIME_SIDECAR_PATHS.map(getPublicArtifactBasename))], "bundled runtime sidecar basename"), ...EXTRA_GUARDED_EXTENSION_PUBLIC_SURFACE_BASENAMES], "guarded extension public surface basename");
//#endregion
//#region src/infra/update-global.ts
const PRIMARY_PACKAGE_NAME = "openclaw";
const ALL_PACKAGE_NAMES = [PRIMARY_PACKAGE_NAME];
const GLOBAL_RENAME_PREFIX = ".";
const OPENCLAW_MAIN_PACKAGE_SPEC = "github:openclaw/openclaw#main";
const NPM_GLOBAL_INSTALL_QUIET_FLAGS = [
	"--no-fund",
	"--no-audit",
	"--loglevel=error"
];
const NPM_GLOBAL_INSTALL_OMIT_OPTIONAL_FLAGS = ["--omit=optional", ...NPM_GLOBAL_INSTALL_QUIET_FLAGS];
function normalizePackageTarget(value) {
	return value.trim();
}
function isMainPackageTarget(value) {
	return normalizePackageTarget(value).toLowerCase() === "main";
}
function isExplicitPackageInstallSpec(value) {
	const trimmed = normalizePackageTarget(value);
	if (!trimmed) return false;
	return trimmed.includes("://") || trimmed.includes("#") || /^(?:file|github|git\+ssh|git\+https|git\+http|git\+file|npm):/i.test(trimmed);
}
function resolveExpectedInstalledVersionFromSpec(packageName, spec) {
	const normalizedPackageName = packageName.trim();
	const normalizedSpec = normalizePackageTarget(spec);
	if (!normalizedPackageName || !normalizedSpec.startsWith(`${normalizedPackageName}@`)) return null;
	const rawVersion = normalizedSpec.slice(normalizedPackageName.length + 1).trim();
	if (!rawVersion || rawVersion.includes("/") || rawVersion.includes(":") || rawVersion.includes("#") || /^(latest|beta|next|main)$/i.test(rawVersion)) return null;
	return rawVersion;
}
async function collectInstalledGlobalPackageErrors(params) {
	const errors = [];
	const installedVersion = await readPackageVersion(params.packageRoot);
	if (params.expectedVersion && installedVersion !== params.expectedVersion) errors.push(`expected installed version ${params.expectedVersion}, found ${installedVersion ?? "<missing>"}`);
	for (const relativePath of BUNDLED_RUNTIME_SIDECAR_PATHS) if (!await pathExists(path.join(params.packageRoot, relativePath))) errors.push(`missing bundled runtime sidecar ${relativePath}`);
	return errors;
}
function canResolveRegistryVersionForPackageTarget(value) {
	const trimmed = normalizePackageTarget(value);
	if (!trimmed) return true;
	return !isMainPackageTarget(trimmed) && !isExplicitPackageInstallSpec(trimmed);
}
async function resolvePortableGitPathPrepend(env) {
	if (process.platform !== "win32") return [];
	const localAppData = env?.LOCALAPPDATA?.trim() || process.env.LOCALAPPDATA?.trim();
	if (!localAppData) return [];
	const portableGitRoot = path.join(localAppData, "OpenClaw", "deps", "portable-git");
	const candidates = [
		path.join(portableGitRoot, "mingw64", "bin"),
		path.join(portableGitRoot, "usr", "bin"),
		path.join(portableGitRoot, "cmd"),
		path.join(portableGitRoot, "bin")
	];
	const existing = [];
	for (const candidate of candidates) if (await pathExists(candidate)) existing.push(candidate);
	return existing;
}
function applyWindowsPackageInstallEnv(env) {
	if (process.platform !== "win32") return;
	env.NPM_CONFIG_UPDATE_NOTIFIER = "false";
	env.NPM_CONFIG_FUND = "false";
	env.NPM_CONFIG_AUDIT = "false";
	env.NPM_CONFIG_SCRIPT_SHELL = "cmd.exe";
	env.NODE_LLAMA_CPP_SKIP_DOWNLOAD = "1";
}
function resolveGlobalInstallSpec(params) {
	const override = params.env?.OPENCLAW_UPDATE_PACKAGE_SPEC?.trim() || process.env.OPENCLAW_UPDATE_PACKAGE_SPEC?.trim();
	if (override) return override;
	const target = normalizePackageTarget(params.tag);
	if (isMainPackageTarget(target)) return OPENCLAW_MAIN_PACKAGE_SPEC;
	if (isExplicitPackageInstallSpec(target)) return target;
	return `${params.packageName}@${target}`;
}
async function createGlobalInstallEnv(env) {
	const pathPrepend = await resolvePortableGitPathPrepend(env);
	if (pathPrepend.length === 0 && process.platform !== "win32") return env;
	const merged = Object.fromEntries(Object.entries(env ?? process.env).filter(([, value]) => value != null).map(([key, value]) => [key, String(value)]));
	applyPathPrepend(merged, pathPrepend);
	applyWindowsPackageInstallEnv(merged);
	return merged;
}
async function tryRealpath(targetPath) {
	try {
		return await fs.realpath(targetPath);
	} catch {
		return path.resolve(targetPath);
	}
}
function resolveBunGlobalRoot() {
	const bunInstall = process.env.BUN_INSTALL?.trim() || path.join(os.homedir(), ".bun");
	return path.join(bunInstall, "install", "global", "node_modules");
}
async function resolveGlobalRoot(manager, runCommand, timeoutMs) {
	if (manager === "bun") return resolveBunGlobalRoot();
	const res = await runCommand(manager === "pnpm" ? [
		"pnpm",
		"root",
		"-g"
	] : [
		"npm",
		"root",
		"-g"
	], { timeoutMs }).catch(() => null);
	if (!res || res.code !== 0) return null;
	return res.stdout.trim() || null;
}
async function resolveGlobalPackageRoot(manager, runCommand, timeoutMs) {
	const root = await resolveGlobalRoot(manager, runCommand, timeoutMs);
	if (!root) return null;
	return path.join(root, PRIMARY_PACKAGE_NAME);
}
async function detectGlobalInstallManagerForRoot(runCommand, pkgRoot, timeoutMs) {
	const pkgReal = await tryRealpath(pkgRoot);
	for (const { manager, argv } of [{
		manager: "npm",
		argv: [
			"npm",
			"root",
			"-g"
		]
	}, {
		manager: "pnpm",
		argv: [
			"pnpm",
			"root",
			"-g"
		]
	}]) {
		const res = await runCommand(argv, { timeoutMs }).catch(() => null);
		if (!res || res.code !== 0) continue;
		const globalRoot = res.stdout.trim();
		if (!globalRoot) continue;
		const globalReal = await tryRealpath(globalRoot);
		for (const name of ALL_PACKAGE_NAMES) {
			const expectedReal = await tryRealpath(path.join(globalReal, name));
			if (path.resolve(expectedReal) === path.resolve(pkgReal)) return manager;
		}
	}
	const bunGlobalReal = await tryRealpath(resolveBunGlobalRoot());
	for (const name of ALL_PACKAGE_NAMES) {
		const bunExpectedReal = await tryRealpath(path.join(bunGlobalReal, name));
		if (path.resolve(bunExpectedReal) === path.resolve(pkgReal)) return "bun";
	}
	return null;
}
async function detectGlobalInstallManagerByPresence(runCommand, timeoutMs) {
	for (const manager of ["npm", "pnpm"]) {
		const root = await resolveGlobalRoot(manager, runCommand, timeoutMs);
		if (!root) continue;
		for (const name of ALL_PACKAGE_NAMES) if (await pathExists(path.join(root, name))) return manager;
	}
	const bunRoot = resolveBunGlobalRoot();
	for (const name of ALL_PACKAGE_NAMES) if (await pathExists(path.join(bunRoot, name))) return "bun";
	return null;
}
function globalInstallArgs(manager, spec) {
	if (manager === "pnpm") return [
		"pnpm",
		"add",
		"-g",
		spec
	];
	if (manager === "bun") return [
		"bun",
		"add",
		"-g",
		spec
	];
	return [
		"npm",
		"i",
		"-g",
		spec,
		...NPM_GLOBAL_INSTALL_QUIET_FLAGS
	];
}
function globalInstallFallbackArgs(manager, spec) {
	if (manager !== "npm") return null;
	return [
		"npm",
		"i",
		"-g",
		spec,
		...NPM_GLOBAL_INSTALL_OMIT_OPTIONAL_FLAGS
	];
}
async function cleanupGlobalRenameDirs(params) {
	const removed = [];
	const root = params.globalRoot.trim();
	const name = params.packageName.trim();
	if (!root || !name) return { removed };
	const prefix = `${GLOBAL_RENAME_PREFIX}${name}-`;
	let entries = [];
	try {
		entries = await fs.readdir(root);
	} catch {
		return { removed };
	}
	for (const entry of entries) {
		if (!entry.startsWith(prefix)) continue;
		const target = path.join(root, entry);
		try {
			if (!(await fs.lstat(target)).isDirectory()) continue;
			await fs.rm(target, {
				recursive: true,
				force: true
			});
			removed.push(entry);
		} catch {}
	}
	return { removed };
}
//#endregion
export { detectGlobalInstallManagerByPresence as a, globalInstallFallbackArgs as c, resolveGlobalPackageRoot as d, normalizePackageTagInput as f, createGlobalInstallEnv as i, resolveExpectedInstalledVersionFromSpec as l, readPackageVersion as m, cleanupGlobalRenameDirs as n, detectGlobalInstallManagerForRoot as o, readPackageName as p, collectInstalledGlobalPackageErrors as r, globalInstallArgs as s, canResolveRegistryVersionForPackageTarget as t, resolveGlobalInstallSpec as u };
