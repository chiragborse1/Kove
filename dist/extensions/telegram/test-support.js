import { t as getChatChannelMeta } from "../../chat-meta-_mVp3ucX.js";
import { a as splitChannelApprovalCapability } from "../../approval-runtime-BaPurhzP.js";
import { n as buildDmGroupAccountAllowlistAdapter } from "../../allowlist-config-edit-CMhyFYax.js";
import "../../telegram-core-C9uJZdEP.js";
import { s as resolveTelegramAccount } from "../../accounts-B2HLxJT-.js";
import { t as telegramApprovalCapability } from "../../approval-native-DxHxNYfS.js";
import { i as telegramConfigAdapter } from "../../shared-DpSq0TYm.js";
//#region extensions/telegram/test-support.ts
const telegramNativeApprovalAdapter = splitChannelApprovalCapability(telegramApprovalCapability);
const telegramCommandTestPlugin = {
	id: "telegram",
	meta: getChatChannelMeta("telegram"),
	capabilities: {
		chatTypes: [
			"direct",
			"group",
			"channel",
			"thread"
		],
		reactions: true,
		threads: true,
		media: true,
		polls: true,
		nativeCommands: true,
		blockStreaming: true
	},
	config: telegramConfigAdapter,
	auth: telegramNativeApprovalAdapter.auth,
	approvalCapability: telegramApprovalCapability,
	pairing: { idLabel: "telegramUserId" },
	allowlist: buildDmGroupAccountAllowlistAdapter({
		channelId: "telegram",
		resolveAccount: resolveTelegramAccount,
		normalize: ({ cfg, accountId, values }) => telegramConfigAdapter.formatAllowFrom({
			cfg,
			accountId,
			allowFrom: values
		}),
		resolveDmAllowFrom: (account) => account.config.allowFrom,
		resolveGroupAllowFrom: (account) => account.config.groupAllowFrom,
		resolveDmPolicy: (account) => account.config.dmPolicy,
		resolveGroupPolicy: (account) => account.config.groupPolicy
	})
};
//#endregion
export { telegramCommandTestPlugin };
