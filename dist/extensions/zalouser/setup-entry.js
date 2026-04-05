import { a as defineSetupPluginEntry } from "../../core-sXO_DI7q.js";
import { n as zalouserSetupAdapter, t as zalouserSetupWizard } from "../../setup-surface-C4DcyeNt.js";
import { t as createZalouserPluginBase } from "../../shared-CK5b_JRh.js";
//#region extensions/zalouser/src/channel.setup.ts
const zalouserSetupPlugin = { ...createZalouserPluginBase({
	setupWizard: zalouserSetupWizard,
	setup: zalouserSetupAdapter
}) };
//#endregion
//#region extensions/zalouser/setup-entry.ts
var setup_entry_default = defineSetupPluginEntry(zalouserSetupPlugin);
//#endregion
export { setup_entry_default as default, zalouserSetupPlugin };
