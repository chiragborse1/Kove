import type { Command } from "commander";
import { formatDocsLink } from "../../terminal/links.js";
import { theme } from "../../terminal/theme.js";
import { runDaemonStop } from "../daemon-cli.js";

export function registerKovaStopCommand(program: Command) {
  program
    .command("stop")
    .description("Stop the Kova gateway service")
    .option("--json", "Output JSON", false)
    .addHelpText(
      "after",
      () =>
        `\n${theme.muted("Docs:")} ${formatDocsLink("/cli/gateway", "docs.openclaw.ai/cli/gateway")}\n`,
    )
    .action(async (cmdOpts) => {
      await runDaemonStop(cmdOpts);
    });
}
