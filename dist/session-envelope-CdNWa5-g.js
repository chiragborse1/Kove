import { o as readSessionUpdatedAt } from "./store-nI7efowo.js";
import "./sessions-Sa--dLyw.js";
import { l as resolveStorePath } from "./paths-B2rgdouq.js";
import { a as resolveEnvelopeFormatOptions } from "./envelope-Dvl2s3iI.js";
//#region src/channels/session-envelope.ts
function resolveInboundSessionEnvelopeContext(params) {
	const storePath = resolveStorePath(params.cfg.session?.store, { agentId: params.agentId });
	return {
		storePath,
		envelopeOptions: resolveEnvelopeFormatOptions(params.cfg),
		previousTimestamp: readSessionUpdatedAt({
			storePath,
			sessionKey: params.sessionKey
		})
	};
}
//#endregion
export { resolveInboundSessionEnvelopeContext as t };
