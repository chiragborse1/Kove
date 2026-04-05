import { i as defineChannelPluginEntry } from "../../core-sXO_DI7q.js";
import { t as bluebubblesPlugin } from "../../channel-DmWkwhvM.js";
import { n as setBlueBubblesRuntime } from "../../runtime-gKDLOm4l.js";
//#region extensions/bluebubbles/index.ts
var bluebubbles_default = defineChannelPluginEntry({
	id: "bluebubbles",
	name: "BlueBubbles",
	description: "BlueBubbles channel plugin (macOS app)",
	plugin: bluebubblesPlugin,
	setRuntime: setBlueBubblesRuntime
});
//#endregion
export { bluebubblesPlugin, bluebubbles_default as default, setBlueBubblesRuntime };
