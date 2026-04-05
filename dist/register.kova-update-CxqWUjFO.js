import { n as defaultRuntime } from "./runtime-kS8e4c6-.js";
import { r as theme } from "./theme-DwswwArY.js";
import { r as runCommandWithTimeout } from "./exec-Cdhvx72k.js";
import { n as runCommandWithRuntime } from "./cli-utils-Ck3m3E7C.js";
import { a as detectGlobalInstallManagerByPresence, i as createGlobalInstallEnv, s as globalInstallArgs } from "./update-global-MbGSNuuu.js";
import { n as createGlobalCommandRunner } from "./shared-_GgQGsUa.js";
//#region src/cli/program/register.kova-update.ts
const KOVA_PACKAGE_SPEC = "kova";
const KOVA_UPDATE_TIMEOUT_MS = 1200 * 1e3;
function registerKovaUpdateCommand(program) {
	program.command("update [managerArgs...]").description("Update Kova via your global package manager").allowUnknownOption(true).allowExcessArguments(true).action(async (managerArgs = []) => {
		await runCommandWithRuntime(defaultRuntime, async () => {
			const manager = await detectGlobalInstallManagerByPresence(createGlobalCommandRunner(), 3e3) ?? "npm";
			const env = await createGlobalInstallEnv();
			const argv = [...globalInstallArgs(manager, KOVA_PACKAGE_SPEC), ...managerArgs];
			defaultRuntime.log(theme.muted(`Running: ${argv.join(" ")}`));
			const result = await runCommandWithTimeout(argv, {
				env,
				timeoutMs: KOVA_UPDATE_TIMEOUT_MS
			});
			if (result.stdout.trim()) defaultRuntime.log(result.stdout.trimEnd());
			if (result.stderr.trim()) defaultRuntime.error(result.stderr.trimEnd());
			if (result.code !== 0) defaultRuntime.exit(result.code ?? 1);
		});
	});
}
//#endregion
export { registerKovaUpdateCommand };
