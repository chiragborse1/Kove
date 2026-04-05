import { n as parseTelegramTopicConversation } from "./conversation-id-Cp_e3CNB.js";
import "./telegram-core-C9uJZdEP.js";
//#region extensions/telegram/src/session-conversation.ts
function resolveTelegramSessionConversation(params) {
	const parsed = parseTelegramTopicConversation({ conversationId: params.rawId });
	if (!parsed) return null;
	return {
		id: parsed.chatId,
		threadId: parsed.topicId,
		baseConversationId: parsed.chatId,
		parentConversationCandidates: [parsed.chatId]
	};
}
//#endregion
export { resolveTelegramSessionConversation as t };
