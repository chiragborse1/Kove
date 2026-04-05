import { i as defineChannelPluginEntry } from "../../core-sXO_DI7q.js";
import { t as zaloPlugin } from "../../channel-D25AfDEi.js";
import { n as setZaloRuntime } from "../../runtime-Bhewxsf6.js";
//#region extensions/zalo/index.ts
var zalo_default = defineChannelPluginEntry({
	id: "zalo",
	name: "Zalo",
	description: "Zalo channel plugin",
	plugin: zaloPlugin,
	setRuntime: setZaloRuntime
});
//#endregion
export { zalo_default as default, setZaloRuntime, zaloPlugin };
