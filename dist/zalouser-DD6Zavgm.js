import "./tmp-openclaw-dir-FwzW84ZI.js";
import "./zod-schema.core-1c4_V7ob.js";
import "./config-schema-Cc0c0E9K.js";
import "./zod-schema.agent-runtime-0dgF17UR.js";
import "./setup-helpers-DvZddQZR.js";
import "./status-helpers-Ck6TZ9om.js";
import "./outbound-media-BfVH6Gk1.js";
import "./setup-wizard-helpers-CiTUqqHq.js";
import { t as createOptionalChannelSetupSurface } from "./channel-setup-CQTJk8LB.js";
import "./channel-reply-pipeline-DJJm0_z6.js";
import "./command-auth-DRQbCa36.js";
//#region src/plugin-sdk/zalouser.ts
const zalouserSetup = createOptionalChannelSetupSurface({
	channel: "zalouser",
	label: "Zalo Personal",
	npmSpec: "@openclaw/zalouser",
	docsPath: "/channels/zalouser"
});
const zalouserSetupAdapter = zalouserSetup.setupAdapter;
const zalouserSetupWizard = zalouserSetup.setupWizard;
//#endregion
export { zalouserSetupWizard as n, zalouserSetupAdapter as t };
