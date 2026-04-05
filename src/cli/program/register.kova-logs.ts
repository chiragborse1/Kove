import fs from "node:fs/promises";
import path from "node:path";
import type { Command } from "commander";
import {
  ensureKovaTmpSymlinkSync,
  POSIX_KOVA_TMP_DIR,
  POSIX_OPENCLAW_TMP_DIR,
  toKovaDisplayLogPath,
} from "../../infra/tmp-openclaw-dir.js";
import { defaultRuntime } from "../../runtime.js";
import { theme } from "../../terminal/theme.js";
import { runCommandWithRuntime } from "../cli-utils.js";

const KOVA_LOG_DIR = POSIX_OPENCLAW_TMP_DIR;
const KOVA_DISPLAY_LOG_DIR = POSIX_KOVA_TMP_DIR;
const KOVA_LOG_PREFIX = "openclaw-";
const KOVA_LOG_SUFFIX = ".log";
const KOVA_LOG_LINES = 50;
const KOVA_LOG_READ_CHUNK_BYTES = 64 * 1024;

async function resolveLatestKovaLogPath(): Promise<string | null> {
  let entries: string[];
  try {
    entries = await fs.readdir(KOVA_LOG_DIR);
  } catch {
    return null;
  }

  const candidates = await Promise.all(
    entries
      .filter((entry) => entry.startsWith(KOVA_LOG_PREFIX) && entry.endsWith(KOVA_LOG_SUFFIX))
      .map(async (entry) => {
        const filePath = path.join(KOVA_LOG_DIR, entry);
        try {
          const stat = await fs.stat(filePath);
          if (!stat.isFile()) {
            return null;
          }
          return { filePath, mtimeMs: stat.mtimeMs };
        } catch {
          return null;
        }
      }),
  );

  const latest = candidates
    .filter((entry): entry is { filePath: string; mtimeMs: number } => entry !== null)
    .toSorted((a, b) => b.mtimeMs - a.mtimeMs || b.filePath.localeCompare(a.filePath))[0];

  return latest?.filePath ?? null;
}

async function readLastLines(filePath: string, lineCount: number): Promise<string> {
  const handle = await fs.open(filePath, "r");
  try {
    const stat = await handle.stat();
    if (stat.size <= 0) {
      return "";
    }

    let position = stat.size;
    let text = "";

    while (position > 0) {
      const chunkSize = Math.min(KOVA_LOG_READ_CHUNK_BYTES, position);
      position -= chunkSize;
      const buffer = Buffer.alloc(chunkSize);
      const { bytesRead } = await handle.read(buffer, 0, chunkSize, position);
      if (bytesRead <= 0) {
        break;
      }
      text = buffer.toString("utf8", 0, bytesRead) + text;
      if (text.split("\n").length > lineCount + 1) {
        break;
      }
    }

    const lines = text.split("\n");
    if (lines.at(-1) === "") {
      lines.pop();
    }
    return lines.slice(-lineCount).join("\n");
  } finally {
    await handle.close();
  }
}

export function registerKovaLogsCommand(program: Command) {
  program
    .command("logs")
    .description(`Print the last ${KOVA_LOG_LINES} lines from the latest Kova gateway log`)
    .action(async () => {
      await runCommandWithRuntime(defaultRuntime, async () => {
        ensureKovaTmpSymlinkSync();
        const logPath = await resolveLatestKovaLogPath();
        if (!logPath) {
          throw new Error(`No Kova gateway log files found under ${KOVA_DISPLAY_LOG_DIR}.`);
        }
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
