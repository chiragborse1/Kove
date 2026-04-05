import { t as formatDocsLink } from "./links-Cr8R_hS1.js";
import { r as theme } from "./theme-DwswwArY.js";
import { a as runDaemonStop } from "./daemon-cli-UoBLYf6Z.js";
//#region src/cli/program/register.kova-stop.ts
function registerKovaStopCommand(program) {
	program.command("stop").description("Stop the Kova gateway service").option("--json", "Output JSON", false).addHelpText("after", () => `\n${theme.muted("Docs:")} ${formatDocsLink("/cli/gateway", "docs.kova.ai/cli/gateway")}\n`).action(async (cmdOpts) => {
		await runDaemonStop(cmdOpts);
	});
}
//#endregion
export { registerKovaStopCommand };
