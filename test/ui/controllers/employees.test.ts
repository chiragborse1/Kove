import { describe, expect, it, vi } from "vitest";
import {
  loadEmployeesDashboard,
  type EmployeesState,
} from "../../../ui/src/ui/controllers/employees.ts";

describe("loadEmployeesDashboard", () => {
  it("loads dynamic kova-* employees from agents.list", async () => {
    const request = vi.fn(async (method: string, params?: Record<string, unknown>) => {
      if (method === "agents.list") {
        return {
          defaultId: "main",
          mainKey: "main",
          scope: "user",
          agents: [
            { id: "main", name: "Main" },
            { id: "kova-alex", name: "Alex", identity: { emoji: "🔍" } },
            { id: "kova-sam", name: "Sam", identity: { emoji: "🧠" } },
          ],
        };
      }
      if (method === "sessions.list") {
        return {
          ts: 0,
          path: "",
          count: 1,
          defaults: { modelProvider: null, model: null, contextTokens: null },
          sessions: [
            {
              key: `agent:${String(params?.agentId)}:main`,
              updatedAt: 1_700_000_000_000,
              status: "done",
            },
          ],
        };
      }
      if (method === "sessions.usage") {
        return {
          totals: {},
          sessions: [
            {
              key: "agent:kova-sam:main",
              agentId: "kova-sam",
              updatedAt: 1_700_000_000_000,
              usage: { messageCounts: { total: 4, assistant: 1, toolCalls: 0 } },
            },
          ],
        };
      }
      throw new Error(`unexpected method: ${method}`);
    });

    const state: EmployeesState = {
      client: { request } as unknown as EmployeesState["client"],
      connected: true,
      employeesLoading: false,
      employeesError: null,
      employeesDashboard: null,
      agentsList: null,
    };

    await loadEmployeesDashboard(state);

    expect(request).toHaveBeenCalledWith("agents.list", {});
    expect(state.employeesDashboard?.employees.map((employee) => employee.id)).toEqual([
      "kova-alex",
      "kova-sam",
    ]);
    expect(state.employeesDashboard?.employees[1]?.name).toBe("Sam");
  });
});
