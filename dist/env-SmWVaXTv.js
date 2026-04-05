import { t as createSubsystemLogger } from "./subsystem-D1w25rM-.js";
//#region src/infra/env.ts
let log = null;
const loggedEnv = /* @__PURE__ */ new Set();
function getLog() {
	if (!log) log = createSubsystemLogger("env");
	return log;
}
function formatEnvValue(value, redact) {
	if (redact) return "<redacted>";
	const singleLine = value.replace(/\s+/g, " ").trim();
	if (singleLine.length <= 160) return singleLine;
	return `${singleLine.slice(0, 160)}…`;
}
function logAcceptedEnvOption(option) {
	if (process.env.VITEST || false) return;
	if (loggedEnv.has(option.key)) return;
	const rawValue = option.value ?? process.env[option.key];
	if (!rawValue || !rawValue.trim()) return;
	loggedEnv.add(option.key);
	getLog().info(`env: ${option.key}=${formatEnvValue(rawValue, option.redact)} (${option.description})`);
}
function normalizeZaiEnv() {
	if (!process.env.ZAI_API_KEY?.trim() && process.env.Z_AI_API_KEY?.trim()) process.env.ZAI_API_KEY = process.env.Z_AI_API_KEY;
}
function normalizeStateDirEnv() {
	const kovaStateDir = process.env.KOVA_STATE_DIR?.trim();
	const openClawStateDir = process.env.OPENCLAW_STATE_DIR?.trim();
	if (kovaStateDir && !openClawStateDir) process.env.OPENCLAW_STATE_DIR = kovaStateDir;
	if (openClawStateDir && !kovaStateDir) process.env.KOVA_STATE_DIR = openClawStateDir;
}
function isTruthyEnvValue(value) {
	if (typeof value !== "string") return false;
	switch (value.trim().toLowerCase()) {
		case "1":
		case "on":
		case "true":
		case "yes": return true;
		default: return false;
	}
}
function normalizeEnv() {
	normalizeStateDirEnv();
	normalizeZaiEnv();
}
//#endregion
export { normalizeZaiEnv as a, normalizeStateDirEnv as i, logAcceptedEnvOption as n, normalizeEnv as r, isTruthyEnvValue as t };
