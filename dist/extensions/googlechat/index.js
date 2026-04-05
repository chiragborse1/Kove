import { i as defineChannelPluginEntry } from "../../core-sXO_DI7q.js";
import { n as setGoogleChatRuntime } from "../../runtime-DcR8TetP.js";
import { t as googlechatPlugin } from "../../channel-IZbCawYE.js";
//#region extensions/googlechat/index.ts
var googlechat_default = defineChannelPluginEntry({
	id: "googlechat",
	name: "Google Chat",
	description: "OpenClaw Google Chat channel plugin",
	plugin: googlechatPlugin,
	setRuntime: setGoogleChatRuntime
});
//#endregion
export { googlechat_default as default, googlechatPlugin, setGoogleChatRuntime };
