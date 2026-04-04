import type { Command } from "commander";
import { buildParseArgv } from "../argv.js";
import { rewritePrimaryCliCommand } from "../kova-aliases.js";

export function registerKovaApiKeyCommand(program: Command) {
  const apiKey = program.command("api-key").description("Manage Kova API keys");
  apiKey.allowUnknownOption(true);
  apiKey.allowExcessArguments(true);
  apiKey.action(async (...actionArgs) => {
    const actionCommand = actionArgs.at(-1) as Command | undefined;
    const root = actionCommand?.parent ?? program;
    const rawArgs = (root as Command & { rawArgs?: string[] }).rawArgs ?? process.argv;
    const parseArgv = buildParseArgv({
      programName: program.name(),
      rawArgs: rewritePrimaryCliCommand(rawArgs, ["api-keys"]),
    });
    await program.parseAsync(parseArgv);
  });
}
