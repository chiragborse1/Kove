import { i as defineChannelPluginEntry } from "../../core-sXO_DI7q.js";
import { n as setSlackRuntime, t as slackPlugin } from "../../channel-97DSZJag.js";
//#region extensions/slack/index.ts
var slack_default = defineChannelPluginEntry({
	id: "slack",
	name: "Slack",
	description: "Slack channel plugin",
	plugin: slackPlugin,
	setRuntime: setSlackRuntime
});
//#endregion
export { slack_default as default, setSlackRuntime, slackPlugin };
