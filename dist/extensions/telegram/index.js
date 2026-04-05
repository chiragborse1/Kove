import { i as defineChannelPluginEntry } from "../../core-sXO_DI7q.js";
import { n as setTelegramRuntime, t as telegramPlugin } from "../../channel-GjcpR1E-.js";
//#region extensions/telegram/index.ts
var telegram_default = defineChannelPluginEntry({
	id: "telegram",
	name: "Telegram",
	description: "Telegram channel plugin",
	plugin: telegramPlugin,
	setRuntime: setTelegramRuntime
});
//#endregion
export { telegram_default as default, setTelegramRuntime, telegramPlugin };
