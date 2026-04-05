import { _ as normalizeAccountId } from "./session-key-vgS1x1jn.js";
import "./routing-oH2So2eA.js";
import { n as resolveApprovalRequestAccountId } from "./exec-approval-session-target-Bbzl49uB.js";
import { c as createChannelExecApprovalProfile, l as isChannelExecApprovalTargetRecipient, t as resolveApprovalApprovers } from "./approval-runtime-BaPurhzP.js";
import { r as listTelegramAccountIds, s as resolveTelegramAccount } from "./accounts-B2HLxJT-.js";
import { a as resolveTelegramTargetChatType, n as normalizeTelegramChatId } from "./targets-JtQ-WRy7.js";
//#region extensions/telegram/src/inline-buttons.ts
const DEFAULT_INLINE_BUTTONS_SCOPE = "allowlist";
function normalizeInlineButtonsScope(value) {
	if (typeof value !== "string") return;
	const trimmed = value.trim().toLowerCase();
	if (trimmed === "off" || trimmed === "dm" || trimmed === "group" || trimmed === "all" || trimmed === "allowlist") return trimmed;
}
function readInlineButtonsCapability(value) {
	if (!value || Array.isArray(value) || typeof value !== "object" || !("inlineButtons" in value)) return;
	return value.inlineButtons;
}
function resolveTelegramInlineButtonsConfigScope(capabilities) {
	return normalizeInlineButtonsScope(readInlineButtonsCapability(capabilities));
}
function resolveTelegramInlineButtonsScopeFromCapabilities(capabilities) {
	if (!capabilities) return DEFAULT_INLINE_BUTTONS_SCOPE;
	if (Array.isArray(capabilities)) return capabilities.some((entry) => String(entry).trim().toLowerCase() === "inlinebuttons") ? "all" : "off";
	if (typeof capabilities === "object") return resolveTelegramInlineButtonsConfigScope(capabilities) ?? DEFAULT_INLINE_BUTTONS_SCOPE;
	return DEFAULT_INLINE_BUTTONS_SCOPE;
}
function resolveTelegramInlineButtonsScope(params) {
	return resolveTelegramInlineButtonsScopeFromCapabilities(resolveTelegramAccount({
		cfg: params.cfg,
		accountId: params.accountId
	}).config.capabilities);
}
function isTelegramInlineButtonsEnabled(params) {
	if (params.accountId) return resolveTelegramInlineButtonsScope(params) !== "off";
	const accountIds = listTelegramAccountIds(params.cfg);
	if (accountIds.length === 0) return resolveTelegramInlineButtonsScope(params) !== "off";
	return accountIds.some((accountId) => resolveTelegramInlineButtonsScope({
		cfg: params.cfg,
		accountId
	}) !== "off");
}
//#endregion
//#region extensions/telegram/src/exec-approvals.ts
function normalizeApproverId(value) {
	return String(value).trim();
}
function normalizeTelegramDirectApproverId(value) {
	const chatId = normalizeTelegramChatId(normalizeApproverId(value));
	if (!chatId || chatId.startsWith("-")) return;
	return chatId;
}
function resolveTelegramExecApprovalConfig(params) {
	return resolveTelegramAccount(params).config.execApprovals;
}
function getTelegramExecApprovalApprovers(params) {
	const account = resolveTelegramAccount(params).config;
	return resolveApprovalApprovers({
		explicit: resolveTelegramExecApprovalConfig(params)?.approvers,
		allowFrom: account.allowFrom,
		defaultTo: account.defaultTo ? String(account.defaultTo) : null,
		normalizeApprover: normalizeTelegramDirectApproverId
	});
}
function isTelegramExecApprovalTargetRecipient(params) {
	return isChannelExecApprovalTargetRecipient({
		...params,
		channel: "telegram",
		matchTarget: ({ target, normalizedSenderId }) => {
			const to = target.to ? normalizeTelegramChatId(target.to) : void 0;
			if (!to || to.startsWith("-")) return false;
			return to === normalizedSenderId;
		}
	});
}
const telegramExecApprovalProfile = createChannelExecApprovalProfile({
	resolveConfig: resolveTelegramExecApprovalConfig,
	resolveApprovers: getTelegramExecApprovalApprovers,
	isTargetRecipient: isTelegramExecApprovalTargetRecipient,
	matchesRequestAccount: ({ cfg, accountId, request }) => {
		const boundAccountId = resolveApprovalRequestAccountId({
			cfg,
			request,
			channel: request.request.turnSourceChannel?.trim().toLowerCase() === "telegram" ? null : "telegram"
		});
		return !boundAccountId || !accountId || normalizeAccountId(boundAccountId) === normalizeAccountId(accountId);
	},
	fallbackAgentIdFromSessionKey: true,
	requireClientEnabledForLocalPromptSuppression: false
});
const isTelegramExecApprovalClientEnabled = telegramExecApprovalProfile.isClientEnabled;
const isTelegramExecApprovalApprover = telegramExecApprovalProfile.isApprover;
const isTelegramExecApprovalAuthorizedSender = telegramExecApprovalProfile.isAuthorizedSender;
const resolveTelegramExecApprovalTarget = telegramExecApprovalProfile.resolveTarget;
const shouldHandleTelegramExecApprovalRequest = telegramExecApprovalProfile.shouldHandleRequest;
function shouldInjectTelegramExecApprovalButtons(params) {
	if (!isTelegramExecApprovalClientEnabled(params)) return false;
	const target = resolveTelegramExecApprovalTarget(params);
	const chatType = resolveTelegramTargetChatType(params.to);
	if (chatType === "direct") return target === "dm" || target === "both";
	if (chatType === "group") return target === "channel" || target === "both";
	return target === "both";
}
function resolveExecApprovalButtonsExplicitlyDisabled(params) {
	const capabilities = resolveTelegramAccount(params).config.capabilities;
	return resolveTelegramInlineButtonsConfigScope(capabilities) === "off";
}
function shouldEnableTelegramExecApprovalButtons(params) {
	if (!shouldInjectTelegramExecApprovalButtons(params)) return false;
	return !resolveExecApprovalButtonsExplicitlyDisabled(params);
}
function shouldSuppressLocalTelegramExecApprovalPrompt(params) {
	return telegramExecApprovalProfile.shouldSuppressLocalPrompt(params);
}
//#endregion
export { isTelegramExecApprovalTargetRecipient as a, shouldEnableTelegramExecApprovalButtons as c, shouldSuppressLocalTelegramExecApprovalPrompt as d, isTelegramInlineButtonsEnabled as f, resolveTelegramInlineButtonsScopeFromCapabilities as h, isTelegramExecApprovalClientEnabled as i, shouldHandleTelegramExecApprovalRequest as l, resolveTelegramInlineButtonsScope as m, isTelegramExecApprovalApprover as n, resolveTelegramExecApprovalConfig as o, resolveTelegramInlineButtonsConfigScope as p, isTelegramExecApprovalAuthorizedSender as r, resolveTelegramExecApprovalTarget as s, getTelegramExecApprovalApprovers as t, shouldInjectTelegramExecApprovalButtons as u };
