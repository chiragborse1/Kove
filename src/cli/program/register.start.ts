import type { Command } from "commander";
import { addGatewayRunCommand } from "../gateway-cli/run.js";

export function registerStartCommand(program: Command) {
  addGatewayRunCommand(
    program.command("start").description("Start Kova locally and open the Control UI"),
    {
      openBrowser: true,
    },
  );
}
