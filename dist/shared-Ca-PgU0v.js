import { t as getChatChannelMeta } from "./chat-meta-_mVp3ucX.js";
import { n as describeAccountSnapshot } from "./account-helpers-l05u5LeW.js";
import { c as createScopedChannelConfigAdapter, m as formatTrimmedAllowFromEntries, t as adaptScopedAccountAccessor } from "./channel-config-helpers-Dofa5d7Q.js";
import { n as createChannelPluginBase } from "./core-sXO_DI7q.js";
import { t as createRestrictSendersChannelSecurity } from "./channel-policy-Ccizleqj.js";
import "./runtime-api-C6tCiFqi.js";
import { b as resolveIMessageAccount, v as listIMessageAccountIds, y as resolveDefaultIMessageAccountId } from "./monitor-provider-BA7-ZvID.js";
import { n as createIMessageSetupWizardProxy } from "./setup-core-B574ZcUV.js";
import { t as IMessageChannelConfigSchema } from "./config-schema-DCYnO8ZW.js";
//#region extensions/imessage/src/shared.ts
const IMESSAGE_CHANNEL = "imessage";
async function loadIMessageChannelRuntime() {
	return await import("./channel.runtime-Cn53Ch9l.js");
}
const imessageSetupWizard = createIMessageSetupWizardProxy(async () => (await loadIMessageChannelRuntime()).imessageSetupWizard);
const imessageConfigAdapter = createScopedChannelConfigAdapter({
	sectionKey: IMESSAGE_CHANNEL,
	listAccountIds: listIMessageAccountIds,
	resolveAccount: adaptScopedAccountAccessor(resolveIMessageAccount),
	defaultAccountId: resolveDefaultIMessageAccountId,
	clearBaseFields: [
		"cliPath",
		"dbPath",
		"service",
		"region",
		"name"
	],
	resolveAllowFrom: (account) => account.config.allowFrom,
	formatAllowFrom: (allowFrom) => formatTrimmedAllowFromEntries(allowFrom),
	resolveDefaultTo: (account) => account.config.defaultTo
});
const imessageSecurityAdapter = createRestrictSendersChannelSecurity({
	channelKey: IMESSAGE_CHANNEL,
	resolveDmPolicy: (account) => account.config.dmPolicy,
	resolveDmAllowFrom: (account) => account.config.allowFrom,
	resolveGroupPolicy: (account) => account.config.groupPolicy,
	surface: "iMessage groups",
	openScope: "any member",
	groupPolicyPath: "channels.imessage.groupPolicy",
	groupAllowFromPath: "channels.imessage.groupAllowFrom",
	mentionGated: false,
	policyPathSuffix: "dmPolicy"
});
function createIMessagePluginBase(params) {
	return createChannelPluginBase({
		id: IMESSAGE_CHANNEL,
		meta: {
			...getChatChannelMeta(IMESSAGE_CHANNEL),
			aliases: ["imsg"],
			showConfigured: false
		},
		setupWizard: params.setupWizard,
		capabilities: {
			chatTypes: ["direct", "group"],
			media: true
		},
		reload: { configPrefixes: ["channels.imessage"] },
		configSchema: IMessageChannelConfigSchema,
		config: {
			...imessageConfigAdapter,
			isConfigured: (account) => account.configured,
			describeAccount: (account) => describeAccountSnapshot({
				account,
				configured: account.configured
			})
		},
		security: imessageSecurityAdapter,
		setup: params.setup
	});
}
//#endregion
export { imessageSecurityAdapter as n, imessageSetupWizard as r, createIMessagePluginBase as t };
