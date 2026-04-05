import { i as getChildLogger } from "../../logger-Cnt8m3Fg.js";
import { l as normalizeMainKey } from "../../session-key-vgS1x1jn.js";
import { c as loadConfig } from "../../io-DcGUiGNW.js";
import { t as redactIdentifier } from "../../redact-identifier-3CI3eDo3.js";
import { d as updateSessionStore, i as loadSessionStore } from "../../store-nI7efowo.js";
import { t as canonicalizeMainSessionAlias } from "../../main-session-Boe1XF3k.js";
import { l as resolveStorePath } from "../../paths-B2rgdouq.js";
import { a as resolveSessionResetType, i as resolveSessionResetPolicy, n as evaluateSessionFreshness, o as resolveThreadFlag, r as resolveChannelResetConfig } from "../../session-file-BCUUiCxa.js";
import { c as optimizeImageToPng } from "../../image-ops-ZY_ZZQcg.js";
import { i as LocalMediaAccessError, n as loadWebMediaRaw, o as getDefaultLocalRoots, r as optimizeImageToJpeg, t as loadWebMedia } from "../../web-media-DGgQXJ01.js";
import { n as resolveSessionKey } from "../../session-key-crL5znw2.js";
import { n as SILENT_REPLY_TOKEN, t as HEARTBEAT_TOKEN } from "../../tokens-B5NhZrWK.js";
import { a as stripHeartbeatToken, i as resolveHeartbeatPrompt, n as HEARTBEAT_PROMPT } from "../../heartbeat-BX_FfPLq.js";
import { p as resolveSendableOutboundReplyParts, s as hasOutboundReplyContent } from "../../reply-payload-Cu4vfSif.js";
import { t as appendCronStyleCurrentTimeLine } from "../../current-time-U71juIiQ.js";
import "../../routing-oH2So2eA.js";
import { n as emitHeartbeatEvent, o as resolveIndicatorType, t as resolveHeartbeatVisibility } from "../../heartbeat-visibility-BEMWM9No.js";
import { t as resolveHeartbeatReplyPayload } from "../../heartbeat-reply-payload-CfTBD5Et.js";
import { t as getReplyFromConfig } from "../../reply-BtSdz7GP.js";
import "../../runtime-env-CW1mAvib.js";
import "../../config-runtime-BQrL1bXq.js";
import "../../reply-runtime-CM1YamGV.js";
import { t as resolveWhatsAppHeartbeatRecipients } from "../../whatsapp-heartbeat-C5pPW59J.js";
import "../../channel-runtime-D66JDTZf.js";
import "../../text-runtime-5EJuv437.js";
import "../../agent-runtime-DnuvrKvv.js";
import { n as resolveWebCredsBackupPath, r as resolveWebCredsPath, t as hasWebCredsSync } from "../../creds-files-CQ0h4E6f.js";
import "../../runtime-api-DTMRML7b.js";
import { n as whatsAppActionRuntime, t as handleWhatsAppAction } from "../../action-runtime-B9xRx65R.js";
import { i as setActiveWebListener, n as requireActiveWebListener, r as resolveWebAccountId, t as getActiveWebListener } from "../../active-listener-BhaAkai6.js";
import { n as sendPollWhatsApp, r as sendReactionWhatsApp, t as sendMessageWhatsApp } from "../../send-BSpv6aWp.js";
import { t as createWhatsAppLoginTool } from "../../agent-tools-login-Bun3wNxs.js";
import { t as DEFAULT_WEB_MEDIA_BYTES } from "../../constants-DghWJtKg.js";
import { a as maybeRestoreCredsFromBackup, c as readWebSelfId, d as webAuthExists, i as logoutWeb, l as readWebSelfIdentity, n as getWebAuthAgeMs, o as pickWebChannel, r as logWebSelfId, s as readCredsJsonRaw, t as WA_WEB_AUTH_DIR, u as resolveDefaultWebAuthDir } from "../../auth-store-CJShpjwx.js";
import { n as getStatusCode, t as formatError } from "../../session-errors-D0g42Tbt.js";
import { o as whatsappHeartbeatLog, u as newConnectionId$1 } from "../../deliver-reply-BCK0XqPA.js";
import { a as waitForWaConnection, i as waitForCredsSaveQueueWithTimeout, n as newConnectionId, r as waitForCredsSaveQueue, t as createWaSocket } from "../../session-CINbo525.js";
import { a as extractMediaPlaceholder, i as extractLocationData, n as monitorWebChannel, o as extractText, r as monitorWebInbox, s as resetWebInboundDedupe, t as loginWeb } from "../../login-DA6nMHG6.js";
//#region extensions/whatsapp/src/auto-reply/session-snapshot.ts
function getSessionSnapshot(cfg, from, _isHeartbeat = false, ctx) {
	const sessionCfg = cfg.session;
	const scope = sessionCfg?.scope ?? "per-sender";
	const key = ctx?.sessionKey?.trim() ?? resolveSessionKey(scope, {
		From: from,
		To: "",
		Body: ""
	}, normalizeMainKey(sessionCfg?.mainKey));
	const entry = loadSessionStore(resolveStorePath(sessionCfg?.store))[key];
	const isThread = resolveThreadFlag({
		sessionKey: key,
		messageThreadId: ctx?.messageThreadId ?? null,
		threadLabel: ctx?.threadLabel ?? null,
		threadStarterBody: ctx?.threadStarterBody ?? null,
		parentSessionKey: ctx?.parentSessionKey ?? null
	});
	const resetType = resolveSessionResetType({
		sessionKey: key,
		isGroup: ctx?.isGroup,
		isThread
	});
	const resetPolicy = resolveSessionResetPolicy({
		sessionCfg,
		resetType,
		resetOverride: resolveChannelResetConfig({
			sessionCfg,
			channel: entry?.lastChannel ?? entry?.channel
		})
	});
	const now = Date.now();
	const freshness = entry ? evaluateSessionFreshness({
		updatedAt: entry.updatedAt,
		now,
		policy: resetPolicy
	}) : { fresh: false };
	return {
		key,
		entry,
		fresh: freshness.fresh,
		resetPolicy,
		resetType,
		dailyResetAt: freshness.dailyResetAt,
		idleExpiresAt: freshness.idleExpiresAt
	};
}
//#endregion
//#region extensions/whatsapp/src/auto-reply/heartbeat-runner.ts
function resolveDefaultAgentIdFromConfig(cfg) {
	const agents = cfg.agents?.list ?? [];
	return (agents.find((agent) => agent?.default)?.id ?? agents[0]?.id ?? "main").trim().toLowerCase() || "main";
}
async function runWebHeartbeatOnce(opts) {
	const { cfg: cfgOverride, to, verbose = false, sessionId, overrideBody, dryRun = false } = opts;
	const replyResolver = opts.replyResolver ?? getReplyFromConfig;
	const sender = opts.sender ?? sendMessageWhatsApp;
	const runId = newConnectionId$1();
	const redactedTo = redactIdentifier(to);
	const heartbeatLogger = getChildLogger({
		module: "web-heartbeat",
		runId,
		to: redactedTo
	});
	const cfg = cfgOverride ?? loadConfig();
	const visibility = resolveHeartbeatVisibility({
		cfg,
		channel: "whatsapp"
	});
	const heartbeatOkText = HEARTBEAT_TOKEN;
	const maybeSendHeartbeatOk = async () => {
		if (!visibility.showOk) return false;
		if (dryRun) {
			whatsappHeartbeatLog.info(`[dry-run] heartbeat ok -> ${redactedTo}`);
			return false;
		}
		const sendResult = await sender(to, heartbeatOkText, { verbose });
		heartbeatLogger.info({
			to: redactedTo,
			messageId: sendResult.messageId,
			chars: heartbeatOkText.length,
			reason: "heartbeat-ok"
		}, "heartbeat ok sent");
		whatsappHeartbeatLog.info(`heartbeat ok sent to ${redactedTo} (id ${sendResult.messageId})`);
		return true;
	};
	const sessionCfg = cfg.session;
	const sessionScope = sessionCfg?.scope ?? "per-sender";
	const mainKey = normalizeMainKey(sessionCfg?.mainKey);
	const rawSessionKey = resolveSessionKey(sessionScope, { From: to }, mainKey);
	const sessionKey = canonicalizeMainSessionAlias({
		cfg,
		agentId: resolveDefaultAgentIdFromConfig(cfg),
		sessionKey: rawSessionKey
	});
	if (sessionId) {
		const storePath = resolveStorePath(cfg.session?.store);
		const store = loadSessionStore(storePath);
		const current = store[sessionKey] ?? {};
		store[sessionKey] = {
			...current,
			sessionId,
			updatedAt: Date.now()
		};
		await updateSessionStore(storePath, (nextStore) => {
			nextStore[sessionKey] = {
				...nextStore[sessionKey] ?? current,
				sessionId,
				updatedAt: Date.now()
			};
		});
	}
	const sessionSnapshot = getSessionSnapshot(cfg, to, true, { sessionKey });
	if (verbose) heartbeatLogger.info({
		to: redactedTo,
		sessionKey: sessionSnapshot.key,
		sessionId: sessionId ?? sessionSnapshot.entry?.sessionId ?? null,
		sessionFresh: sessionSnapshot.fresh,
		resetMode: sessionSnapshot.resetPolicy.mode,
		resetAtHour: sessionSnapshot.resetPolicy.atHour,
		idleMinutes: sessionSnapshot.resetPolicy.idleMinutes ?? null,
		dailyResetAt: sessionSnapshot.dailyResetAt ?? null,
		idleExpiresAt: sessionSnapshot.idleExpiresAt ?? null
	}, "heartbeat session snapshot");
	if (overrideBody && overrideBody.trim().length === 0) throw new Error("Override body must be non-empty when provided.");
	try {
		if (overrideBody) {
			if (dryRun) {
				whatsappHeartbeatLog.info(`[dry-run] web send -> ${redactedTo} (${overrideBody.trim().length} chars, manual message)`);
				return;
			}
			const sendResult = await sender(to, overrideBody, { verbose });
			emitHeartbeatEvent({
				status: "sent",
				to,
				preview: overrideBody.slice(0, 160),
				hasMedia: false,
				channel: "whatsapp",
				indicatorType: visibility.useIndicator ? resolveIndicatorType("sent") : void 0
			});
			heartbeatLogger.info({
				to: redactedTo,
				messageId: sendResult.messageId,
				chars: overrideBody.length,
				reason: "manual-message"
			}, "manual heartbeat message sent");
			whatsappHeartbeatLog.info(`manual heartbeat sent to ${redactedTo} (id ${sendResult.messageId})`);
			return;
		}
		if (!visibility.showAlerts && !visibility.showOk && !visibility.useIndicator) {
			heartbeatLogger.info({
				to: redactedTo,
				reason: "alerts-disabled"
			}, "heartbeat skipped");
			emitHeartbeatEvent({
				status: "skipped",
				to,
				reason: "alerts-disabled",
				channel: "whatsapp"
			});
			return;
		}
		const replyPayload = resolveHeartbeatReplyPayload(await replyResolver({
			Body: appendCronStyleCurrentTimeLine(resolveHeartbeatPrompt(cfg.agents?.defaults?.heartbeat?.prompt), cfg, Date.now()),
			From: to,
			To: to,
			MessageSid: sessionId ?? sessionSnapshot.entry?.sessionId
		}, { isHeartbeat: true }, cfg));
		if (!replyPayload || !hasOutboundReplyContent(replyPayload)) {
			heartbeatLogger.info({
				to: redactedTo,
				reason: "empty-reply",
				sessionId: sessionSnapshot.entry?.sessionId ?? null
			}, "heartbeat skipped");
			emitHeartbeatEvent({
				status: "ok-empty",
				to,
				channel: "whatsapp",
				silent: !await maybeSendHeartbeatOk(),
				indicatorType: visibility.useIndicator ? resolveIndicatorType("ok-empty") : void 0
			});
			return;
		}
		const reply = resolveSendableOutboundReplyParts(replyPayload);
		const hasMedia = reply.hasMedia;
		const ackMaxChars = Math.max(0, cfg.agents?.defaults?.heartbeat?.ackMaxChars ?? 300);
		const stripped = stripHeartbeatToken(replyPayload.text, {
			mode: "heartbeat",
			maxAckChars: ackMaxChars
		});
		if (stripped.shouldSkip && !hasMedia) {
			const storePath = resolveStorePath(cfg.session?.store);
			const store = loadSessionStore(storePath);
			if (sessionSnapshot.entry && store[sessionSnapshot.key]) {
				store[sessionSnapshot.key].updatedAt = sessionSnapshot.entry.updatedAt;
				await updateSessionStore(storePath, (nextStore) => {
					const nextEntry = nextStore[sessionSnapshot.key];
					if (!nextEntry) return;
					nextStore[sessionSnapshot.key] = {
						...nextEntry,
						updatedAt: sessionSnapshot.entry.updatedAt
					};
				});
			}
			heartbeatLogger.info({
				to: redactedTo,
				reason: "heartbeat-token",
				rawLength: replyPayload.text?.length
			}, "heartbeat skipped");
			emitHeartbeatEvent({
				status: "ok-token",
				to,
				channel: "whatsapp",
				silent: !await maybeSendHeartbeatOk(),
				indicatorType: visibility.useIndicator ? resolveIndicatorType("ok-token") : void 0
			});
			return;
		}
		if (hasMedia) heartbeatLogger.warn({ to: redactedTo }, "heartbeat reply contained media; sending text only");
		const finalText = stripped.text || reply.text;
		if (!visibility.showAlerts) {
			heartbeatLogger.info({
				to: redactedTo,
				reason: "alerts-disabled"
			}, "heartbeat skipped");
			emitHeartbeatEvent({
				status: "skipped",
				to,
				reason: "alerts-disabled",
				preview: finalText.slice(0, 200),
				channel: "whatsapp",
				hasMedia,
				indicatorType: visibility.useIndicator ? resolveIndicatorType("sent") : void 0
			});
			return;
		}
		if (dryRun) {
			heartbeatLogger.info({
				to: redactedTo,
				reason: "dry-run",
				chars: finalText.length
			}, "heartbeat dry-run");
			whatsappHeartbeatLog.info(`[dry-run] heartbeat -> ${redactedTo} (${finalText.length} chars)`);
			return;
		}
		const sendResult = await sender(to, finalText, { verbose });
		emitHeartbeatEvent({
			status: "sent",
			to,
			preview: finalText.slice(0, 160),
			hasMedia,
			channel: "whatsapp",
			indicatorType: visibility.useIndicator ? resolveIndicatorType("sent") : void 0
		});
		heartbeatLogger.info({
			to: redactedTo,
			messageId: sendResult.messageId,
			chars: finalText.length
		}, "heartbeat sent");
		whatsappHeartbeatLog.info(`heartbeat alert sent to ${redactedTo}`);
	} catch (err) {
		const reason = formatError(err);
		heartbeatLogger.warn({
			to: redactedTo,
			error: reason
		}, "heartbeat failed");
		whatsappHeartbeatLog.warn(`heartbeat failed (${reason})`);
		emitHeartbeatEvent({
			status: "failed",
			to,
			reason,
			channel: "whatsapp",
			indicatorType: visibility.useIndicator ? resolveIndicatorType("failed") : void 0
		});
		throw err;
	}
}
function resolveHeartbeatRecipients(cfg, opts = {}) {
	return resolveWhatsAppHeartbeatRecipients(cfg, opts);
}
//#endregion
//#region extensions/whatsapp/runtime-api.ts
let loginQrModulePromise = null;
function loadLoginQrModule() {
	loginQrModulePromise ??= import("../../login-qr-BxvWlfex.js");
	return loginQrModulePromise;
}
async function startWebLoginWithQr(...args) {
	const { startWebLoginWithQr } = await loadLoginQrModule();
	return await startWebLoginWithQr(...args);
}
async function waitForWebLogin(...args) {
	const { waitForWebLogin } = await loadLoginQrModule();
	return await waitForWebLogin(...args);
}
//#endregion
export { DEFAULT_WEB_MEDIA_BYTES, HEARTBEAT_PROMPT, HEARTBEAT_TOKEN, LocalMediaAccessError, SILENT_REPLY_TOKEN, WA_WEB_AUTH_DIR, createWaSocket, createWhatsAppLoginTool, extractLocationData, extractMediaPlaceholder, extractText, formatError, getActiveWebListener, getDefaultLocalRoots, getStatusCode, getWebAuthAgeMs, handleWhatsAppAction, hasWebCredsSync, loadWebMedia, loadWebMediaRaw, logWebSelfId, loginWeb, logoutWeb, maybeRestoreCredsFromBackup, monitorWebChannel, monitorWebInbox, newConnectionId, optimizeImageToJpeg, optimizeImageToPng, pickWebChannel, readCredsJsonRaw, readWebSelfId, readWebSelfIdentity, requireActiveWebListener, resetWebInboundDedupe, resolveDefaultWebAuthDir, resolveHeartbeatRecipients, resolveWebAccountId, resolveWebCredsBackupPath, resolveWebCredsPath, runWebHeartbeatOnce, sendMessageWhatsApp, sendPollWhatsApp, sendReactionWhatsApp, setActiveWebListener, startWebLoginWithQr, stripHeartbeatToken, waitForCredsSaveQueue, waitForCredsSaveQueueWithTimeout, waitForWaConnection, waitForWebLogin, webAuthExists, whatsAppActionRuntime };
