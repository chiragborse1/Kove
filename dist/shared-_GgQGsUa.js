import { n as defaultRuntime } from "./runtime-kS8e4c6-.js";
import { g as pathExists } from "./utils-CQHEfYrT.js";
import { r as theme } from "./theme-DwswwArY.js";
import { r as runCommandWithTimeout } from "./exec-Cdhvx72k.js";
import { t as resolveOpenClawPackageRoot } from "./openclaw-root-CQxvqRkp.js";
import { a as parseSemver } from "./runtime-guard-DMJNv0NA.js";
import { o as trimLogTail } from "./restart-sentinel-DJXvg4HW.js";
import { i as fetchNpmTagVersion } from "./update-check-DOpmXLpi.js";
import { a as detectGlobalInstallManagerByPresence, f as normalizePackageTagInput, i as createGlobalInstallEnv, o as detectGlobalInstallManagerForRoot, p as readPackageName, t as canResolveRegistryVersionForPackageTarget } from "./update-global-MbGSNuuu.js";
import path from "node:path";
import { spawnSync } from "node:child_process";
import os from "node:os";
import fs from "node:fs/promises";
//#region src/cli/update-cli/shared.ts
const INVALID_TIMEOUT_ERROR = "--timeout must be a positive integer (seconds)";
function parseTimeoutMsOrExit(timeout) {
	const timeoutMs = timeout ? Number.parseInt(timeout, 10) * 1e3 : void 0;
	if (timeoutMs !== void 0 && (Number.isNaN(timeoutMs) || timeoutMs <= 0)) {
		defaultRuntime.error(INVALID_TIMEOUT_ERROR);
		defaultRuntime.exit(1);
		return null;
	}
	return timeoutMs;
}
const OPENCLAW_REPO_URL = "https://github.com/openclaw/openclaw.git";
const MAX_LOG_CHARS = 8e3;
const DEFAULT_PACKAGE_NAME = "openclaw";
const CORE_PACKAGE_NAMES = new Set([DEFAULT_PACKAGE_NAME]);
function normalizeTag(value) {
	return normalizePackageTagInput(value, ["openclaw", DEFAULT_PACKAGE_NAME]);
}
function normalizeVersionTag(tag) {
	const trimmed = tag.trim();
	if (!trimmed) return null;
	const cleaned = trimmed.startsWith("v") ? trimmed.slice(1) : trimmed;
	return parseSemver(cleaned) ? cleaned : null;
}
async function resolveTargetVersion(tag, timeoutMs) {
	if (!canResolveRegistryVersionForPackageTarget(tag)) return null;
	const direct = normalizeVersionTag(tag);
	if (direct) return direct;
	return (await fetchNpmTagVersion({
		tag,
		timeoutMs
	})).version ?? null;
}
async function isGitCheckout(root) {
	try {
		await fs.stat(path.join(root, ".git"));
		return true;
	} catch {
		return false;
	}
}
async function isCorePackage(root) {
	const name = await readPackageName(root);
	return Boolean(name && CORE_PACKAGE_NAMES.has(name));
}
async function isEmptyDir(targetPath) {
	try {
		return (await fs.readdir(targetPath)).length === 0;
	} catch {
		return false;
	}
}
function resolveGitInstallDir() {
	const override = process.env.OPENCLAW_GIT_DIR?.trim();
	if (override) return path.resolve(override);
	return resolveDefaultGitDir();
}
function resolveDefaultGitDir() {
	const home = os.homedir();
	if (home.startsWith("/")) return path.posix.join(home, "openclaw");
	return path.join(home, "openclaw");
}
function resolveNodeRunner() {
	const base = path.basename(process.execPath).toLowerCase();
	if (base === "node" || base === "node.exe") return process.execPath;
	return "node";
}
async function resolveUpdateRoot() {
	return await resolveOpenClawPackageRoot({
		moduleUrl: import.meta.url,
		argv1: process.argv[1],
		cwd: process.cwd()
	}) ?? process.cwd();
}
async function runUpdateStep(params) {
	const command = params.argv.join(" ");
	params.progress?.onStepStart?.({
		name: params.name,
		command,
		index: 0,
		total: 0
	});
	const started = Date.now();
	const res = await runCommandWithTimeout(params.argv, {
		cwd: params.cwd,
		env: params.env,
		timeoutMs: params.timeoutMs
	});
	const durationMs = Date.now() - started;
	const stderrTail = trimLogTail(res.stderr, MAX_LOG_CHARS);
	params.progress?.onStepComplete?.({
		name: params.name,
		command,
		index: 0,
		total: 0,
		durationMs,
		exitCode: res.code,
		stderrTail
	});
	return {
		name: params.name,
		command,
		cwd: params.cwd ?? process.cwd(),
		durationMs,
		exitCode: res.code,
		stdoutTail: trimLogTail(res.stdout, MAX_LOG_CHARS),
		stderrTail
	};
}
async function ensureGitCheckout(params) {
	const gitEnv = params.env ?? await createGlobalInstallEnv();
	if (!await pathExists(params.dir)) return await runUpdateStep({
		name: "git clone",
		argv: [
			"git",
			"clone",
			OPENCLAW_REPO_URL,
			params.dir
		],
		env: gitEnv,
		timeoutMs: params.timeoutMs,
		progress: params.progress
	});
	if (!await isGitCheckout(params.dir)) {
		if (!await isEmptyDir(params.dir)) throw new Error(`OPENCLAW_GIT_DIR points at a non-git directory: ${params.dir}. Set OPENCLAW_GIT_DIR to an empty folder or an openclaw checkout.`);
		return await runUpdateStep({
			name: "git clone",
			argv: [
				"git",
				"clone",
				OPENCLAW_REPO_URL,
				params.dir
			],
			cwd: params.dir,
			env: gitEnv,
			timeoutMs: params.timeoutMs,
			progress: params.progress
		});
	}
	if (!await isCorePackage(params.dir)) throw new Error(`OPENCLAW_GIT_DIR does not look like a core checkout: ${params.dir}.`);
	return null;
}
async function resolveGlobalManager(params) {
	const runCommand = createGlobalCommandRunner();
	if (params.installKind === "package") {
		const detected = await detectGlobalInstallManagerForRoot(runCommand, params.root, params.timeoutMs);
		if (detected) return detected;
	}
	return await detectGlobalInstallManagerByPresence(runCommand, params.timeoutMs) ?? "npm";
}
async function tryWriteCompletionCache(root, jsonMode) {
	const binPath = path.join(root, "openclaw.mjs");
	if (!await pathExists(binPath)) return;
	const result = spawnSync(resolveNodeRunner(), [
		binPath,
		"completion",
		"--write-state"
	], {
		cwd: root,
		env: process.env,
		encoding: "utf-8"
	});
	if (result.error) {
		if (!jsonMode) defaultRuntime.log(theme.warn(`Completion cache update failed: ${String(result.error)}`));
		return;
	}
	if (result.status !== 0 && !jsonMode) {
		const stderr = (result.stderr ?? "").toString().trim();
		const detail = stderr ? ` (${stderr})` : "";
		defaultRuntime.log(theme.warn(`Completion cache update failed${detail}.`));
	}
}
function createGlobalCommandRunner() {
	return async (argv, options) => {
		const res = await runCommandWithTimeout(argv, options);
		return {
			stdout: res.stdout,
			stderr: res.stderr,
			code: res.code
		};
	};
}
//#endregion
export { isGitCheckout as a, resolveGitInstallDir as c, resolveTargetVersion as d, resolveUpdateRoot as f, isEmptyDir as i, resolveGlobalManager as l, tryWriteCompletionCache as m, createGlobalCommandRunner as n, normalizeTag as o, runUpdateStep as p, ensureGitCheckout as r, parseTimeoutMsOrExit as s, DEFAULT_PACKAGE_NAME as t, resolveNodeRunner as u };
