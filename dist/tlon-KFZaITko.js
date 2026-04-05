import "./links-Cr8R_hS1.js";
import "./config-schema-Cc0c0E9K.js";
import "./setup-helpers-DvZddQZR.js";
import "./status-helpers-Ck6TZ9om.js";
import "./ssrf-vpSSEUV4.js";
import "./fetch-guard-DMwHR6fc.js";
import "./runtime-DR2rtL1F.js";
import { t as createOptionalChannelSetupSurface } from "./channel-setup-CQTJk8LB.js";
import "./channel-reply-pipeline-DJJm0_z6.js";
//#region src/plugin-sdk/tlon.ts
const tlonSetup = createOptionalChannelSetupSurface({
	channel: "tlon",
	label: "Tlon",
	npmSpec: "@openclaw/tlon",
	docsPath: "/channels/tlon"
});
const tlonSetupAdapter = tlonSetup.setupAdapter;
const tlonSetupWizard = tlonSetup.setupWizard;
//#endregion
export { tlonSetupWizard as n, tlonSetupAdapter as t };
