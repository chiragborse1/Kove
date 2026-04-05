import "./links-Cr8R_hS1.js";
import "./zod-schema.core-1c4_V7ob.js";
import "./config-schema-Cc0c0E9K.js";
import { t as createOptionalChannelSetupSurface } from "./channel-setup-CQTJk8LB.js";
import "./channel-reply-pipeline-DJJm0_z6.js";
//#region src/plugin-sdk/twitch.ts
const twitchSetup = createOptionalChannelSetupSurface({
	channel: "twitch",
	label: "Twitch",
	npmSpec: "@openclaw/twitch"
});
const twitchSetupAdapter = twitchSetup.setupAdapter;
const twitchSetupWizard = twitchSetup.setupWizard;
//#endregion
export { twitchSetupWizard as n, twitchSetupAdapter as t };
