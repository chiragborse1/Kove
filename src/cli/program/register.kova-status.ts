import type { Command } from "commander";
import { formatDocsLink } from "../../terminal/links.js";
import { theme } from "../../terminal/theme.js";
import { formatCliCommand } from "../command-format.js";
import { inheritOptionFromParent } from "../command-options.js";
import { runDaemonStatus } from "../daemon-cli.js";
import { formatHelpExamples } from "../help-format.js";

function resolveRpcOptions(
  cmdOpts: {
    url?: string;
    token?: string;
    password?: string;
    timeout?: string;
  },
  command?: Command,
) {
  const parentToken = inheritOptionFromParent<string>(command, "token");
  const parentPassword = inheritOptionFromParent<string>(command, "password");
  return {
    ...cmdOpts,
    token: cmdOpts.token ?? parentToken,
    password: cmdOpts.password ?? parentPassword,
  };
}

export function registerKovaStatusCommand(program: Command) {
  program
    .command("status")
    .description("Show Kova gateway status + probe reachability")
    .option("--url <url>", "Gateway WebSocket URL (defaults to config/remote/local)")
    .option("--token <token>", "Gateway token (if required)")
    .option("--password <password>", "Gateway password (password auth)")
    .option("--timeout <ms>", "Timeout in ms", "10000")
    .option("--no-probe", "Skip RPC probe")
    .option("--require-rpc", "Exit non-zero when the RPC probe fails", false)
    .option("--deep", "Scan system-level services", false)
    .option("--json", "Output JSON", false)
    .addHelpText(
      "after",
      () =>
        `\n${theme.heading("Examples:")}\n${formatHelpExamples([
          [formatCliCommand("openclaw status"), "Show Kova gateway status and probe reachability."],
          [formatCliCommand("openclaw status --deep"), "Also scan system-level services."],
          [formatCliCommand("openclaw status --json"), "Machine-readable output."],
          [
            formatCliCommand("openclaw status --require-rpc"),
            "Exit non-zero when the probe fails.",
          ],
        ])}\n\n${theme.muted("Docs:")} ${formatDocsLink("/cli/gateway", "docs.openclaw.ai/cli/gateway")}\n`,
    )
    .action(async (cmdOpts, command) => {
      await runDaemonStatus({
        rpc: resolveRpcOptions(cmdOpts, command),
        probe: Boolean(cmdOpts.probe),
        requireRpc: Boolean(cmdOpts.requireRpc),
        deep: Boolean(cmdOpts.deep),
        json: Boolean(cmdOpts.json),
      });
    });
}
