import type { Command } from "commander";
import {
  createGlobalInstallEnv,
  detectGlobalInstallManagerByPresence,
  globalInstallArgs,
} from "../../infra/update-global.js";
import { runCommandWithTimeout } from "../../process/exec.js";
import { defaultRuntime } from "../../runtime.js";
import { theme } from "../../terminal/theme.js";
import { runCommandWithRuntime } from "../cli-utils.js";
import { createGlobalCommandRunner } from "../update-cli/shared.js";

const KOVA_PACKAGE_SPEC = "kova";
const KOVA_UPDATE_TIMEOUT_MS = 20 * 60 * 1000;

export function registerKovaUpdateCommand(program: Command) {
  program
    .command("update [managerArgs...]")
    .description("Update Kova via your global package manager")
    .allowUnknownOption(true)
    .allowExcessArguments(true)
    .action(async (managerArgs: string[] = []) => {
      await runCommandWithRuntime(defaultRuntime, async () => {
        const runCommand = createGlobalCommandRunner();
        const manager = (await detectGlobalInstallManagerByPresence(runCommand, 3_000)) ?? "npm";
        const env = await createGlobalInstallEnv();
        const argv = [...globalInstallArgs(manager, KOVA_PACKAGE_SPEC), ...managerArgs];
        defaultRuntime.log(theme.muted(`Running: ${argv.join(" ")}`));
        const result = await runCommandWithTimeout(argv, {
          env,
          timeoutMs: KOVA_UPDATE_TIMEOUT_MS,
        });
        if (result.stdout.trim()) {
          defaultRuntime.log(result.stdout.trimEnd());
        }
        if (result.stderr.trim()) {
          defaultRuntime.error(result.stderr.trimEnd());
        }
        if (result.code !== 0) {
          defaultRuntime.exit(result.code ?? 1);
        }
      });
    });
}
