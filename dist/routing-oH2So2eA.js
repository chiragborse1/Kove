import "./message-channel-CAdct431.js";
import "./bindings-DXraMTyy.js";
import "./resolve-route-B9Vq-Kno.js";
import "./base-session-key-D5r9bR86.js";
//#region src/infra/outbound/thread-id.ts
function normalizeOutboundThreadId(value) {
	if (value == null) return;
	if (typeof value === "number") {
		if (!Number.isFinite(value)) return;
		return String(Math.trunc(value));
	}
	const trimmed = value.trim();
	return trimmed ? trimmed : void 0;
}
//#endregion
export { normalizeOutboundThreadId as t };
