import { a as defineSetupPluginEntry } from "../../core-sXO_DI7q.js";
import { n as telegramSetupAdapter, t as telegramSetupWizard } from "../../setup-surface-CItyjb4y.js";
import { t as createTelegramPluginBase } from "../../shared-DpSq0TYm.js";
//#region extensions/telegram/src/channel.setup.ts
const telegramSetupPlugin = { ...createTelegramPluginBase({
	setupWizard: telegramSetupWizard,
	setup: telegramSetupAdapter
}) };
//#endregion
//#region extensions/telegram/setup-entry.ts
var setup_entry_default = defineSetupPluginEntry(telegramSetupPlugin);
//#endregion
export { setup_entry_default as default, telegramSetupPlugin };
