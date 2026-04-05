import "./utils-CQHEfYrT.js";
import "./links-Cr8R_hS1.js";
import "./setup-helpers-DvZddQZR.js";
import "./setup-binary-D82pm9vL.js";
import "./signal-cli-install-1codrHjy.js";
import "./setup-wizard-proxy-TZ32nVgp.js";
import "./setup-wizard-helpers-CiTUqqHq.js";
//#region src/plugin-sdk/resolution-notes.ts
/** Format a short note that separates successfully resolved targets from unresolved passthrough values. */
function formatResolvedUnresolvedNote(params) {
	if (params.resolved.length === 0 && params.unresolved.length === 0) return;
	return [params.resolved.length > 0 ? `Resolved: ${params.resolved.join(", ")}` : void 0, params.unresolved.length > 0 ? `Unresolved (kept as typed): ${params.unresolved.join(", ")}` : void 0].filter(Boolean).join("\n");
}
//#endregion
export { formatResolvedUnresolvedNote as t };
