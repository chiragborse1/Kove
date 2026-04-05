import { r as makeProxyFetch } from "../../proxy-fetch-CCEfesuW.js";
import { r as listTelegramAccountIds, s as resolveTelegramAccount } from "../../accounts-B2HLxJT-.js";
import { i as telegramOutbound } from "../../status-issues-40NGJS4v.js";
import { n as resolveTelegramFetch } from "../../fetch-BSiyD18N.js";
import { _ as sendPollTelegram, g as sendMessageTelegram } from "../../sticker-cache-D6rJ5ybk.js";
import { i as handleTelegramAction, n as telegramMessageActionRuntime } from "../../monitor-BOesSSip.js";
import { n as setTelegramRuntime, t as telegramPlugin } from "../../channel-GjcpR1E-.js";
import { r as resetTelegramThreadBindingsForTests } from "../../thread-bindings-BTTMa1Kx.js";
//#region extensions/telegram/src/bot-message-context.test-harness.ts
const baseTelegramMessageContextConfig = {
	agents: { defaults: {
		model: "anthropic/claude-opus-4-5",
		workspace: "/tmp/openclaw"
	} },
	channels: { telegram: {} },
	messages: { groupChat: { mentionPatterns: [] } }
};
async function buildTelegramMessageContextForTest(params) {
	const { vi } = await loadVitestModule();
	return await (await loadBuildTelegramMessageContext())({
		primaryCtx: {
			message: {
				message_id: 1,
				date: 17e8,
				text: "hello",
				from: {
					id: 42,
					first_name: "Alice"
				},
				...params.message
			},
			me: {
				id: 7,
				username: "bot"
			}
		},
		allMedia: params.allMedia ?? [],
		storeAllowFrom: [],
		options: params.options ?? {},
		bot: { api: {
			sendChatAction: vi.fn(),
			setMessageReaction: vi.fn()
		} },
		cfg: params.cfg ?? baseTelegramMessageContextConfig,
		loadFreshConfig: () => params.cfg ?? baseTelegramMessageContextConfig,
		account: { accountId: params.accountId ?? "default" },
		historyLimit: 0,
		groupHistories: /* @__PURE__ */ new Map(),
		dmPolicy: "open",
		allowFrom: [],
		groupAllowFrom: [],
		ackReactionScope: "off",
		logger: { info: vi.fn() },
		resolveGroupActivation: params.resolveGroupActivation ?? (() => void 0),
		resolveGroupRequireMention: params.resolveGroupRequireMention ?? (() => false),
		resolveTelegramGroupConfig: params.resolveTelegramGroupConfig ?? (() => ({
			groupConfig: { requireMention: false },
			topicConfig: void 0
		})),
		sendChatActionHandler: { sendChatAction: vi.fn() }
	});
}
let buildTelegramMessageContextLoader;
let vitestModuleLoader;
let messageContextMocksInstalled = false;
async function loadBuildTelegramMessageContext() {
	await installMessageContextTestMocks();
	if (!buildTelegramMessageContextLoader) ({buildTelegramMessageContext: buildTelegramMessageContextLoader} = await import("../../bot-message-context-lCAo3-zC.js"));
	return buildTelegramMessageContextLoader;
}
async function loadVitestModule() {
	vitestModuleLoader ??= import("../../dist-BVhv7QUO.js");
	return await vitestModuleLoader;
}
async function installMessageContextTestMocks() {
	if (messageContextMocksInstalled) return;
	const { vi } = await loadVitestModule();
	vi.doMock("openclaw/plugin-sdk/config-runtime", async (importOriginal) => {
		return {
			...await importOriginal(),
			readSessionUpdatedAt: () => void 0,
			resolveStorePath: (storePath) => storePath ?? "/tmp/sessions.json"
		};
	});
	messageContextMocksInstalled = true;
}
//#endregion
export { buildTelegramMessageContextForTest, handleTelegramAction, listTelegramAccountIds, makeProxyFetch, resetTelegramThreadBindingsForTests, resolveTelegramAccount, resolveTelegramFetch, sendMessageTelegram, sendPollTelegram, setTelegramRuntime, telegramMessageActionRuntime, telegramOutbound, telegramPlugin };
