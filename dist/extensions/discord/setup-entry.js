import { a as defineSetupPluginEntry } from "../../core-sXO_DI7q.js";
import { r as discordSetupAdapter } from "../../setup-core-BdFo6lXv.js";
import { t as createDiscordPluginBase } from "../../shared-jxt3TJOP.js";
//#region extensions/discord/src/channel.setup.ts
const discordSetupPlugin = { ...createDiscordPluginBase({ setup: discordSetupAdapter }) };
//#endregion
//#region extensions/discord/setup-entry.ts
var setup_entry_default = defineSetupPluginEntry(discordSetupPlugin);
//#endregion
export { setup_entry_default as default, discordSetupPlugin };
