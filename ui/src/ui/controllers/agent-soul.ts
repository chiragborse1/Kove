import type { GatewayBrowserClient } from "../gateway.ts";
import type { AgentsFilesGetResult } from "../types.ts";

export type AgentSoulState = {
  client: GatewayBrowserClient | null;
  connected: boolean;
  agentSoulLoading: boolean;
  agentSoulContentById: Record<string, string | null>;
};

async function fetchAgentSoul(state: AgentSoulState, agentId: string): Promise<string | null> {
  try {
    const result = await state.client?.request<AgentsFilesGetResult | null>("agents.files.get", {
      agentId,
      name: "SOUL.md",
    });
    return typeof result?.file?.content === "string" ? result.file.content : null;
  } catch {
    return null;
  }
}

export async function loadAgentSoulContents(state: AgentSoulState, agentIds: string[]) {
  if (!state.client || !state.connected || state.agentSoulLoading) {
    return;
  }
  const missing = agentIds.filter((agentId) => !Object.hasOwn(state.agentSoulContentById, agentId));
  if (missing.length === 0) {
    return;
  }
  state.agentSoulLoading = true;
  try {
    for (const agentId of missing) {
      const content = await fetchAgentSoul(state, agentId);
      state.agentSoulContentById = { ...state.agentSoulContentById, [agentId]: content };
    }
  } finally {
    state.agentSoulLoading = false;
  }
}
