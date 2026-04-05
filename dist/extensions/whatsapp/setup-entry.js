import { a as defineSetupPluginEntry } from "../../core-sXO_DI7q.js";
import { n as resolveWhatsAppGroupIntroHint } from "../../whatsapp-shared-D89bP_to.js";
import { n as resolveWhatsAppGroupToolPolicy, t as resolveWhatsAppGroupRequireMention } from "../../group-policy-CzNCUe91.js";
import { t as whatsappSetupAdapter } from "../../setup-core-C_ItagVs.js";
import { i as whatsappSetupWizardProxy, n as createWhatsAppPluginBase } from "../../shared-BQ7FSQi8.js";
import "../../api-Cnt0DMkK.js";
import { d as webAuthExists } from "../../auth-store-CJShpjwx.js";
//#region extensions/whatsapp/src/channel.setup.ts
const whatsappSetupPlugin = { ...createWhatsAppPluginBase({
	groups: {
		resolveRequireMention: resolveWhatsAppGroupRequireMention,
		resolveToolPolicy: resolveWhatsAppGroupToolPolicy,
		resolveGroupIntroHint: resolveWhatsAppGroupIntroHint
	},
	setupWizard: whatsappSetupWizardProxy,
	setup: whatsappSetupAdapter,
	isConfigured: async (account) => await webAuthExists(account.authDir)
}) };
//#endregion
//#region extensions/whatsapp/setup-entry.ts
var setup_entry_default = defineSetupPluginEntry(whatsappSetupPlugin);
//#endregion
export { setup_entry_default as default, whatsappSetupPlugin };
