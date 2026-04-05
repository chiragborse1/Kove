import { y as resolveStateDir } from "./paths-CG2veZVr.js";
import { b as resolveUserPath } from "./utils-CQHEfYrT.js";
import { t as DEFAULT_AGENT_ID } from "./session-key-vgS1x1jn.js";
import path from "node:path";
//#region src/agents/agent-paths.ts
function resolveOpenClawAgentDir(env = process.env) {
	const override = env.OPENCLAW_AGENT_DIR?.trim() || env.PI_CODING_AGENT_DIR?.trim();
	if (override) return resolveUserPath(override, env);
	return resolveUserPath(path.join(resolveStateDir(env), "agents", DEFAULT_AGENT_ID, "agent"), env);
}
//#endregion
export { resolveOpenClawAgentDir as t };
