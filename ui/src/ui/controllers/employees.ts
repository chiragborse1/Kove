import type { GatewayBrowserClient } from "../gateway.ts";
import type { GatewaySessionRow, SessionsListResult, SessionsUsageResult } from "../types.ts";
import {
  formatMissingOperatorReadScopeMessage,
  isMissingOperatorReadScopeError,
} from "./scope-errors.ts";

export type KovaEmployeeId =
  | "kova-alex"
  | "kova-casey"
  | "kova-morgan"
  | "kova-jordan"
  | "kova-riley";

export type EmployeeAutonomy = "Supervised" | "Act + Notify" | "Autonomous";
export type EmployeeStatus = "active" | "idle" | "never";

export type EmployeeCard = {
  id: KovaEmployeeId;
  name: string;
  role: string;
  avatar: string;
  autonomy: EmployeeAutonomy;
  status: EmployeeStatus;
  lastActiveAt: number | null;
  sessionsToday: number;
  totalMessages: number;
};

export type EmployeeActivityItem = {
  id: KovaEmployeeId;
  name: string;
  avatar: string;
  description: string;
  timestamp: number;
};

export type EmployeesDashboardResult = {
  employees: EmployeeCard[];
  activity: EmployeeActivityItem[];
  updatedAt: number;
};

export type EmployeesState = {
  client: GatewayBrowserClient | null;
  connected: boolean;
  employeesLoading: boolean;
  employeesError: string | null;
  employeesDashboard: EmployeesDashboardResult | null;
};

type EmployeeMeta = {
  id: KovaEmployeeId;
  name: string;
  role: string;
  avatar: string;
  autonomy: EmployeeAutonomy;
};

const EMPLOYEE_USAGE_LIMIT = 5000;
const EMPLOYEE_SESSION_LIMIT = 200;

export const KOVA_EMPLOYEES: EmployeeMeta[] = [
  {
    id: "kova-alex",
    name: "Alex",
    role: "Researcher",
    avatar: "🔍",
    autonomy: "Act + Notify",
  },
  {
    id: "kova-casey",
    name: "Casey",
    role: "Analyst",
    avatar: "📊",
    autonomy: "Act + Notify",
  },
  {
    id: "kova-morgan",
    name: "Morgan",
    role: "Editor",
    avatar: "✍️",
    autonomy: "Act + Notify",
  },
  {
    id: "kova-jordan",
    name: "Jordan",
    role: "Inbox Manager",
    avatar: "📬",
    autonomy: "Supervised",
  },
  {
    id: "kova-riley",
    name: "Riley",
    role: "Social Manager",
    avatar: "📱",
    autonomy: "Autonomous",
  },
];

export async function loadEmployeesDashboard(state: EmployeesState) {
  if (!state.client || !state.connected || state.employeesLoading) {
    return;
  }
  state.employeesLoading = true;
  state.employeesError = null;
  try {
    const sessionsByAgentEntries = await Promise.all(
      KOVA_EMPLOYEES.map(async (employee) => {
        const result = await state.client!.request<SessionsListResult>("sessions.list", {
          agentId: employee.id,
          includeGlobal: false,
          includeUnknown: false,
          limit: EMPLOYEE_SESSION_LIMIT,
        });
        return [employee.id, result] as const;
      }),
    );
    const usageResult = await state.client.request<SessionsUsageResult>("sessions.usage", {
      startDate: "2000-01-01",
      endDate: new Date().toISOString().slice(0, 10),
      limit: EMPLOYEE_USAGE_LIMIT,
    });
    const sessionsByAgent = Object.fromEntries(
      sessionsByAgentEntries,
    ) as Record<KovaEmployeeId, SessionsListResult>;
    state.employeesDashboard = buildEmployeesDashboard(sessionsByAgent, usageResult);
  } catch (err) {
    state.employeesDashboard = null;
    state.employeesError = isMissingOperatorReadScopeError(err)
      ? formatMissingOperatorReadScopeMessage("employee activity")
      : String(err);
  } finally {
    state.employeesLoading = false;
  }
}

function buildEmployeesDashboard(
  sessionsByAgent: Record<KovaEmployeeId, SessionsListResult>,
  usageResult: SessionsUsageResult,
): EmployeesDashboardResult {
  const now = Date.now();
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const todayStartMs = todayStart.getTime();
  const activity: EmployeeActivityItem[] = [];

  const employees = KOVA_EMPLOYEES.map((employee) => {
    const agentSessions = usageResult.sessions.filter(
      (session): session is typeof session & { agentId: KovaEmployeeId } => session.agentId === employee.id,
    );
    const liveRows = sessionsByAgent[employee.id]?.sessions ?? [];
    const liveRowsByKey = new Map(liveRows.map((row) => [row.key, row] as const));
    const lastActiveAt = resolveLastActiveAt(agentSessions, liveRows);
    const sessionsToday = new Set(
      agentSessions.filter((session) => session.updatedAt >= todayStartMs).map((session) => session.key),
    ).size;
    const totalMessages = agentSessions.reduce(
      (sum, session) => sum + (session.usage?.messageCounts?.total ?? 0),
      0,
    );
    const status = resolveEmployeeStatus(
      lastActiveAt,
      agentSessions.length > 0 || liveRows.length > 0,
      now,
    );

    for (const session of agentSessions) {
      const liveRow = liveRowsByKey.get(session.key);
      if (!session.updatedAt) {
        continue;
      }
      activity.push({
        id: employee.id,
        name: employee.name,
        avatar: employee.avatar,
        description: describeActivity(session, liveRow),
        timestamp: session.updatedAt,
      });
    }

    return {
      id: employee.id,
      name: employee.name,
      role: employee.role,
      avatar: employee.avatar,
      autonomy: employee.autonomy,
      status,
      lastActiveAt,
      sessionsToday,
      totalMessages,
    };
  });

  return {
    employees,
    activity: activity.toSorted((left, right) => right.timestamp - left.timestamp).slice(0, 10),
    updatedAt: now,
  };
}

function resolveLastActiveAt(
  usageSessions: SessionsUsageResult["sessions"],
  liveRows: GatewaySessionRow[],
): number | null {
  const candidates = [
    ...usageSessions.map((session) => session.updatedAt),
    ...liveRows.map((row) => row.updatedAt ?? 0),
  ].filter((value): value is number => Number.isFinite(value) && value > 0);
  return candidates.length > 0 ? Math.max(...candidates) : null;
}

function resolveEmployeeStatus(
  lastActiveAt: number | null,
  hasHistory: boolean,
  now: number,
): EmployeeStatus {
  if (!hasHistory || !lastActiveAt) {
    return "never";
  }
  return now - lastActiveAt <= 24 * 60 * 60 * 1000 ? "active" : "idle";
}

function describeActivity(
  session: SessionsUsageResult["sessions"][number],
  liveRow?: GatewaySessionRow,
): string {
  const title = resolveActivityTitle(session, liveRow);
  switch (liveRow?.status) {
    case "running":
      return `Working in ${title}`;
    case "failed":
      return `Hit an error in ${title}`;
    case "killed":
      return `Stopped ${title}`;
    case "timeout":
      return `Timed out in ${title}`;
    case "done":
      return `Updated ${title}`;
    default:
      break;
  }
  const assistantMessages = session.usage?.messageCounts?.assistant ?? 0;
  const toolCalls = session.usage?.messageCounts?.toolCalls ?? 0;
  if (assistantMessages > 0) {
    return `Replied in ${title}`;
  }
  if (toolCalls > 0) {
    return `Used tools in ${title}`;
  }
  return `Opened ${title}`;
}

function resolveActivityTitle(
  session: SessionsUsageResult["sessions"][number],
  liveRow?: GatewaySessionRow,
): string {
  const preferred = [
    liveRow?.displayName,
    liveRow?.label,
    session.label,
    session.sessionId ? `session ${session.sessionId.slice(0, 8)}` : null,
  ].find((value): value is string => typeof value === "string" && value.trim().length > 0);
  return preferred ?? "a session";
}
