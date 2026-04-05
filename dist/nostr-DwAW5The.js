import "./zod-schema.core-1c4_V7ob.js";
import "./config-schema-Cc0c0E9K.js";
import "./status-helpers-Ck6TZ9om.js";
import "./ssrf-vpSSEUV4.js";
import { t as createOptionalChannelSetupSurface } from "./channel-setup-CQTJk8LB.js";
import "./channel-reply-pipeline-DJJm0_z6.js";
import "./webhook-memory-guards-Bku8XXlX.js";
import "./direct-dm-OkTkeO5d.js";
//#region src/plugin-sdk/nostr.ts
const nostrSetup = createOptionalChannelSetupSurface({
	channel: "nostr",
	label: "Nostr",
	npmSpec: "@openclaw/nostr",
	docsPath: "/channels/nostr"
});
const nostrSetupAdapter = nostrSetup.setupAdapter;
const nostrSetupWizard = nostrSetup.setupWizard;
//#endregion
export { nostrSetupWizard as n, nostrSetupAdapter as t };
