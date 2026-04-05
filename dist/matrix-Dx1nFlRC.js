import "./redact-BDinS1q9.js";
import "./links-Cr8R_hS1.js";
import "./zod-schema.core-1c4_V7ob.js";
import "./config-schema-Cc0c0E9K.js";
import "./zod-schema.agent-runtime-0dgF17UR.js";
import "./net-CTrWm98z.js";
import "./setup-helpers-DvZddQZR.js";
import "./channel-plugin-common-BzZZ-Vr6.js";
import "./status-helpers-Ck6TZ9om.js";
import "./fetch-guard-DMwHR6fc.js";
import "./local-roots-BoxEMvfH.js";
import "./outbound-media-BfVH6Gk1.js";
import "./json-store-CRriDSH2.js";
import "./session-binding-service-B_GIaT8n.js";
import "./identity-CwBJTOdk.js";
import "./common-CGHRdLb5.js";
import "./secret-input-B8qqJm2M.js";
import "./setup-wizard-helpers-CiTUqqHq.js";
import "./run-command-CCfXt_3-.js";
import "./runtime-DR2rtL1F.js";
import { t as createOptionalChannelSetupSurface } from "./channel-setup-CQTJk8LB.js";
import "./reply-prefix-DCVVSuWM.js";
import "./channel-reply-pipeline-DJJm0_z6.js";
import "./setup-group-access-BFJjwmB_.js";
import "./matrix-thread-bindings-D-C1KQ66.js";
import "./matrix-helper-BsElMdVL.js";
import "./matrix-runtime-surface-C7Nut4eu.js";
import "./matrix-surface-DvPA4-60.js";
//#region src/plugin-sdk/matrix.ts
const matrixSetup = createOptionalChannelSetupSurface({
	channel: "matrix",
	label: "Matrix",
	npmSpec: "@openclaw/matrix",
	docsPath: "/channels/matrix"
});
const matrixSetupWizard = matrixSetup.setupWizard;
const matrixSetupAdapter = matrixSetup.setupAdapter;
//#endregion
export { matrixSetupWizard as n, matrixSetupAdapter as t };
