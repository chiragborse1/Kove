import { n as defaultRuntime } from "./runtime-kS8e4c6-.js";
import { a as toKovaDisplayLogPath, i as resolvePreferredOpenClawTmpDir, r as ensureKovaTmpSymlinkSync } from "./tmp-openclaw-dir-FwzW84ZI.js";
import { r as theme } from "./theme-DwswwArY.js";
import { n as runCommandWithRuntime } from "./cli-utils-Ck3m3E7C.js";
import path from "node:path";
import fs from "node:fs/promises";
//#region src/cli/program/register.kova-logs.ts
const KOVA_LOG_PREFIXES = ["kova-", "openclaw-"];
const KOVA_LOG_SUFFIX = ".log";
const KOVA_LOG_LINES = 50;
const KOVA_LOG_READ_CHUNK_BYTES = 64 * 1024;
async function resolveLatestKovaLogPath() {
	const logDir = resolvePreferredOpenClawTmpDir();
	let entries;
	try {
		entries = await fs.readdir(logDir);
	} catch {
		return null;
	}
	return (await Promise.all(entries.filter((entry) => KOVA_LOG_PREFIXES.some((prefix) => entry.startsWith(prefix)) && entry.endsWith(KOVA_LOG_SUFFIX)).map(async (entry) => {
		const filePath = path.join(logDir, entry);
		try {
			const stat = await fs.stat(filePath);
			if (!stat.isFile()) return null;
			return {
				filePath,
				mtimeMs: stat.mtimeMs
			};
		} catch {
			return null;
		}
	}))).filter((entry) => entry !== null).toSorted((a, b) => b.mtimeMs - a.mtimeMs || b.filePath.localeCompare(a.filePath))[0]?.filePath ?? null;
}
async function readLastLines(filePath, lineCount) {
	const handle = await fs.open(filePath, "r");
	try {
		const stat = await handle.stat();
		if (stat.size <= 0) return "";
		let position = stat.size;
		let text = "";
		while (position > 0) {
			const chunkSize = Math.min(KOVA_LOG_READ_CHUNK_BYTES, position);
			position -= chunkSize;
			const buffer = Buffer.alloc(chunkSize);
			const { bytesRead } = await handle.read(buffer, 0, chunkSize, position);
			if (bytesRead <= 0) break;
			text = buffer.toString("utf8", 0, bytesRead) + text;
			if (text.split("\n").length > lineCount + 1) break;
		}
		const lines = text.split("\n");
		if (lines.at(-1) === "") lines.pop();
		return lines.slice(-lineCount).join("\n");
	} finally {
		await handle.close();
	}
}
function registerKovaLogsCommand(program) {
	program.command("logs").description(`Print the last ${KOVA_LOG_LINES} lines from the latest Kova gateway log`).action(async () => {
		await runCommandWithRuntime(defaultRuntime, async () => {
			ensureKovaTmpSymlinkSync();
			const logPath = await resolveLatestKovaLogPath();
			if (!logPath) throw new Error(`No Kova gateway log files found under ${toKovaDisplayLogPath(resolvePreferredOpenClawTmpDir())}.`);
			const output = await readLastLines(logPath, KOVA_LOG_LINES);
			defaultRuntime.log(theme.muted(`Latest log: ${toKovaDisplayLogPath(logPath)}`));
			if (output.trim()) {
				defaultRuntime.log(output);
				return;
			}
			defaultRuntime.log(theme.muted("Log file is empty."));
		});
	});
}
//#endregion
export { registerKovaLogsCommand };
