import "./utils-CQHEfYrT.js";
import "./links-Cr8R_hS1.js";
import "./zod-schema.providers-core-BbmGNv_u.js";
import "./config-schema-Cc0c0E9K.js";
import "./file-lock-B6EjeH4S.js";
import "./status-helpers-Ck6TZ9om.js";
import "./mime-DZjPKZZF.js";
import "./ssrf-vpSSEUV4.js";
import "./fetch-guard-DMwHR6fc.js";
import "./web-media-CH_eHpuc.js";
import "./outbound-media-BfVH6Gk1.js";
import "./json-store-CRriDSH2.js";
import "./tokens-B5NhZrWK.js";
import "./store-CGR5Vf2I.js";
import "./setup-wizard-helpers-CiTUqqHq.js";
import "./dm-policy-shared-BBYLu_bL.js";
import "./history-cG4wDsWR.js";
import { t as createOptionalChannelSetupSurface } from "./channel-setup-CQTJk8LB.js";
import "./channel-reply-pipeline-DJJm0_z6.js";
import "./ssrf-policy-Dmj0TcRS.js";
import "./inbound-reply-dispatch-CU5HZq0g.js";
import "./session-envelope-CdNWa5-g.js";
//#region src/plugin-sdk/msteams.ts
const msteamsSetup = createOptionalChannelSetupSurface({
	channel: "msteams",
	label: "Microsoft Teams",
	npmSpec: "@openclaw/msteams",
	docsPath: "/channels/msteams"
});
const msteamsSetupWizard = msteamsSetup.setupWizard;
const msteamsSetupAdapter = msteamsSetup.setupAdapter;
//#endregion
export { msteamsSetupWizard as n, msteamsSetupAdapter as t };
