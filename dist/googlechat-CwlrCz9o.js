import "./links-Cr8R_hS1.js";
import "./zod-schema.providers-core-BbmGNv_u.js";
import "./config-schema-Cc0c0E9K.js";
import "./registry-L-LA-YJT.js";
import "./setup-helpers-DvZddQZR.js";
import "./status-helpers-Ck6TZ9om.js";
import "./fetch-guard-DMwHR6fc.js";
import "./local-roots-BoxEMvfH.js";
import "./web-media-CH_eHpuc.js";
import "./outbound-media-BfVH6Gk1.js";
import "./common-CGHRdLb5.js";
import { n as resolveChannelGroupRequireMention } from "./group-policy-CiVp1DxF.js";
import "./setup-wizard-helpers-CiTUqqHq.js";
import "./dm-policy-shared-BBYLu_bL.js";
import "./channel-policy-Ccizleqj.js";
import { t as createOptionalChannelSetupSurface } from "./channel-setup-CQTJk8LB.js";
import "./channel-reply-pipeline-DJJm0_z6.js";
import "./webhook-ingress-HfEJPMza.js";
//#region src/plugin-sdk/googlechat.ts
function resolveGoogleChatGroupRequireMention(params) {
	return resolveChannelGroupRequireMention({
		cfg: params.cfg,
		channel: "googlechat",
		groupId: params.groupId,
		accountId: params.accountId
	});
}
const googlechatSetup = createOptionalChannelSetupSurface({
	channel: "googlechat",
	label: "Google Chat",
	npmSpec: "@openclaw/googlechat",
	docsPath: "/channels/googlechat"
});
const googlechatSetupAdapter = googlechatSetup.setupAdapter;
const googlechatSetupWizard = googlechatSetup.setupWizard;
//#endregion
export { googlechatSetupWizard as n, resolveGoogleChatGroupRequireMention as r, googlechatSetupAdapter as t };
