#!/usr/bin/env -S node --import tsx

import { spawnSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";

type RunStep = {
  command: string;
  args: string[];
  env?: NodeJS.ProcessEnv;
};

function run(step: RunStep): void {
  const result = spawnSync(step.command, step.args, {
    stdio: "inherit",
    env: step.env ?? process.env,
  });
  if (result.status === 0) {
    return;
  }
  process.exit(result.status ?? 1);
}

function main(): void {
  const isolatedHome = mkdtempSync(path.join(os.tmpdir(), "kova-prepack-home-"));
  const isolatedStateDir = mkdtempSync(path.join(os.tmpdir(), "kova-prepack-state-"));
  try {
    run({
      command: "node",
      args: ["scripts/tsdown-build.mjs"],
    });
    run({
      command: "node",
      args: ["scripts/build-stamp.mjs"],
    });
    run({
      command: "node",
      args: ["scripts/copy-bundled-plugin-metadata.mjs"],
    });
    run({
      command: "node",
      args: ["scripts/write-official-channel-catalog.mjs"],
    });
    run({
      command: "node",
      args: ["--import", "tsx", "scripts/write-cli-startup-metadata.ts"],
      env: {
        ...process.env,
        HOME: isolatedHome,
        OPENCLAW_STATE_DIR: isolatedStateDir,
      },
    });
    run({
      command: "node",
      args: ["--import", "tsx", "scripts/write-build-info.ts"],
    });
    run({
      command: "node",
      args: ["--import", "tsx", "scripts/write-cli-compat.ts"],
    });
  } finally {
    rmSync(isolatedHome, { recursive: true, force: true });
    rmSync(isolatedStateDir, { recursive: true, force: true });
  }
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  main();
}
