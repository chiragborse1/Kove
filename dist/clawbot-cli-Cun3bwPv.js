import { t as formatDocsLink } from "./links-Cr8R_hS1.js";
import { r as theme } from "./theme-DwswwArY.js";
import { t as registerQrCli } from "./qr-cli-n6sckfUm.js";
//#region src/cli/clawbot-cli.ts
function registerClawbotCli(program) {
	registerQrCli(program.command("clawbot").description("Legacy clawbot command aliases").addHelpText("after", () => `\n${theme.muted("Docs:")} ${formatDocsLink("/cli/clawbot", "docs.kova.ai/cli/clawbot")}\n`));
}
//#endregion
export { registerClawbotCli };
