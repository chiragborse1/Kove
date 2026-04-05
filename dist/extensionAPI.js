import { n as DEFAULT_MODEL, r as DEFAULT_PROVIDER } from "./defaults-OPjrzs9a.js";
import { S as resolveThinkingDefault } from "./model-selection-CdS674HX.js";
import { a as resolveAgentDir, p as resolveAgentWorkspaceDir } from "./agent-scope-PYTdAamx.js";
import { d as ensureAgentWorkspace } from "./workspace-DBgoItUM.js";
import { i as loadSessionStore, l as saveSessionStore } from "./store-nI7efowo.js";
import "./sessions-Sa--dLyw.js";
import { l as resolveStorePath, r as resolveSessionFilePath } from "./paths-B2rgdouq.js";
import { n as resolveAgentIdentity } from "./identity-CwBJTOdk.js";
import { t as runEmbeddedPiAgent } from "./pi-embedded-BJKTXjFk.js";
import { n as resolveAgentTimeoutMs } from "./content-blocks-DHUAuqmI.js";
//#region src/extensionAPI.ts
if (process.env.VITEST !== "true" && process.env.OPENCLAW_SUPPRESS_EXTENSION_API_WARNING !== "1") process.emitWarning("openclaw/extension-api is deprecated. Migrate to api.runtime.agent.* or focused openclaw/plugin-sdk/<subpath> imports. See https://docs.openclaw.ai/plugins/sdk-migration", {
	code: "OPENCLAW_EXTENSION_API_DEPRECATED",
	detail: "This compatibility bridge is temporary. Bundled plugins should use the injected plugin runtime instead of importing host-side agent helpers directly. Migration guide: https://docs.openclaw.ai/plugins/sdk-migration"
});
//#endregion
export { DEFAULT_MODEL, DEFAULT_PROVIDER, ensureAgentWorkspace, loadSessionStore, resolveAgentDir, resolveAgentIdentity, resolveAgentTimeoutMs, resolveAgentWorkspaceDir, resolveSessionFilePath, resolveStorePath, resolveThinkingDefault, runEmbeddedPiAgent, saveSessionStore };
