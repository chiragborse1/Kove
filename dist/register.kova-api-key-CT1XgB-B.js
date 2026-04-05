import { t as buildParseArgv } from "./argv-CrD4Uaj1.js";
import { r as rewritePrimaryCliCommand } from "./kova-aliases-D1ECR5dN.js";
//#region src/cli/program/register.kova-api-key.ts
function registerKovaApiKeyCommand(program) {
	const apiKey = program.command("api-key").description("Manage Kova API keys");
	apiKey.allowUnknownOption(true);
	apiKey.allowExcessArguments(true);
	apiKey.action(async (...actionArgs) => {
		const rawArgs = (actionArgs.at(-1)?.parent ?? program).rawArgs ?? process.argv;
		const parseArgv = buildParseArgv({
			programName: program.name(),
			rawArgs: rewritePrimaryCliCommand(rawArgs, ["api-keys"])
		});
		await program.parseAsync(parseArgv);
	});
}
//#endregion
export { registerKovaApiKeyCommand };
