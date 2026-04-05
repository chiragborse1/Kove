import { t as addGatewayRunCommand } from "./run-2E36aL9F.js";
//#region src/cli/program/register.start.ts
function registerStartCommand(program) {
	addGatewayRunCommand(program.command("start").description("Start Kova locally and open the Control UI"), { openBrowser: true });
}
//#endregion
export { registerStartCommand };
