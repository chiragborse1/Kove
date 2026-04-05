import { t as formatDocsLink } from "./links-Cr8R_hS1.js";
import { r as theme } from "./theme-DwswwArY.js";
import { n as inheritOptionFromParent } from "./command-options-5coRiipK.js";
import { t as formatCliCommand } from "./command-format-Wh1wnuz1.js";
import "./daemon-cli-UoBLYf6Z.js";
import { t as runDaemonStatus } from "./status-BPfK1jML.js";
import { t as formatHelpExamples } from "./help-format-B6p6tNX6.js";
//#region src/cli/program/register.kova-status.ts
function resolveRpcOptions(cmdOpts, command) {
	const parentToken = inheritOptionFromParent(command, "token");
	const parentPassword = inheritOptionFromParent(command, "password");
	return {
		...cmdOpts,
		token: cmdOpts.token ?? parentToken,
		password: cmdOpts.password ?? parentPassword
	};
}
function registerKovaStatusCommand(program) {
	program.command("status").description("Show Kova gateway status + probe reachability").option("--url <url>", "Gateway WebSocket URL (defaults to config/remote/local)").option("--token <token>", "Gateway token (if required)").option("--password <password>", "Gateway password (password auth)").option("--timeout <ms>", "Timeout in ms", "10000").option("--no-probe", "Skip RPC probe").option("--require-rpc", "Exit non-zero when the RPC probe fails", false).option("--deep", "Scan system-level services", false).option("--json", "Output JSON", false).addHelpText("after", () => `\n${theme.heading("Examples:")}\n${formatHelpExamples([
		[formatCliCommand("kova status"), "Show Kova gateway status and probe reachability."],
		[formatCliCommand("kova status --deep"), "Also scan system-level services."],
		[formatCliCommand("kova status --json"), "Machine-readable output."],
		[formatCliCommand("kova status --require-rpc"), "Exit non-zero when the probe fails."]
	])}\n\n${theme.muted("Docs:")} ${formatDocsLink("/cli/gateway", "docs.kova.ai/cli/gateway")}\n`).action(async (cmdOpts, command) => {
		await runDaemonStatus({
			rpc: resolveRpcOptions(cmdOpts, command),
			probe: Boolean(cmdOpts.probe),
			requireRpc: Boolean(cmdOpts.requireRpc),
			deep: Boolean(cmdOpts.deep),
			json: Boolean(cmdOpts.json)
		});
	});
}
//#endregion
export { registerKovaStatusCommand };
