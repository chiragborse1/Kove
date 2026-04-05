import { a as defineSetupPluginEntry } from "../../core-sXO_DI7q.js";
import { s as signalSetupAdapter } from "../../setup-core-pYWkXANj.js";
import { i as signalSetupWizard, t as createSignalPluginBase } from "../../shared-EEV9CtO4.js";
//#region extensions/signal/src/channel.setup.ts
const signalSetupPlugin = { ...createSignalPluginBase({
	setupWizard: signalSetupWizard,
	setup: signalSetupAdapter
}) };
//#endregion
//#region extensions/signal/setup-entry.ts
var setup_entry_default = defineSetupPluginEntry(signalSetupPlugin);
//#endregion
export { setup_entry_default as default, signalSetupPlugin };
