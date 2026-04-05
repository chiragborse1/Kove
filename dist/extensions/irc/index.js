import { i as defineChannelPluginEntry } from "../../core-sXO_DI7q.js";
import { n as setIrcRuntime, t as ircPlugin } from "../../channel-Crg8dVQR.js";
//#region extensions/irc/index.ts
var irc_default = defineChannelPluginEntry({
	id: "irc",
	name: "IRC",
	description: "IRC channel plugin",
	plugin: ircPlugin,
	setRuntime: setIrcRuntime
});
//#endregion
export { irc_default as default, ircPlugin, setIrcRuntime };
