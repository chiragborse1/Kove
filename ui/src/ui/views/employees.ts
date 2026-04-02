import { html, nothing } from "lit";
import { formatRelativeTimestamp } from "../format.ts";
import {
  KOVA_EMPLOYEES,
  type EmployeeCard,
  type EmployeesDashboardResult,
  type KovaEmployeeId,
} from "../controllers/employees.ts";

export type EmployeesProps = {
  loading: boolean;
  error: string | null;
  dashboard: EmployeesDashboardResult | null;
  filterAgentId: KovaEmployeeId | null;
  onClearFilter: () => void;
  onRefresh: () => void;
  onOpenChat: (agentId: KovaEmployeeId) => void;
  onViewSessions: (agentId: KovaEmployeeId) => void;
};

export function renderEmployees(props: EmployeesProps) {
  const cardsById = new Map(
    (props.dashboard?.employees ?? []).map((employee) => [employee.id, employee] as const),
  );
  const employees = KOVA_EMPLOYEES.map((employee) => ({
    id: employee.id,
    name: employee.name,
    role: employee.role,
    avatar: employee.avatar,
    autonomy: employee.autonomy,
    status: cardsById.get(employee.id)?.status ?? "never",
    lastActiveAt: cardsById.get(employee.id)?.lastActiveAt ?? null,
    sessionsToday: cardsById.get(employee.id)?.sessionsToday ?? 0,
    totalMessages: cardsById.get(employee.id)?.totalMessages ?? 0,
  } satisfies EmployeeCard));
  const selectedEmployee = props.filterAgentId
    ? (KOVA_EMPLOYEES.find((employee) => employee.id === props.filterAgentId) ?? null)
    : null;
  const visibleEmployees = selectedEmployee
    ? employees.filter((employee) => employee.id === selectedEmployee.id)
    : employees;
  const activity = (props.dashboard?.activity ?? []).filter(
    (entry) => !selectedEmployee || entry.id === selectedEmployee.id,
  );

  return html`
    <div class="employees-page">
      <section class="card employees-hero">
        <div>
          <div class="card-title employees-hero__title">Your AI Team</div>
          <div class="card-sub">5 employees active</div>
          ${selectedEmployee
            ? html`
                <div class="employees-hero__filter">
                  Showing activity for <strong>${selectedEmployee.avatar} ${selectedEmployee.name}</strong>
                </div>
              `
            : nothing}
        </div>
        <div class="employees-hero__actions">
          ${selectedEmployee
            ? html`
                <button class="btn btn--ghost" @click=${props.onClearFilter}>Show all</button>
              `
            : nothing}
          <button class="btn" ?disabled=${props.loading} @click=${props.onRefresh}>
            ${props.loading ? "Refreshing..." : "Refresh"}
          </button>
        </div>
      </section>

      ${props.error ? html`<div class="callout danger">${props.error}</div>` : nothing}

      <section class="employees-grid">
        ${visibleEmployees.map((employee) => renderEmployeeCard(employee, props))}
      </section>

      <section class="card employees-activity">
        <div class="employees-activity__header">
          <div class="card-title">Recent Activity</div>
        </div>
        ${activity.length === 0
          ? html`
              <div class="employees-activity__empty">
                ${props.loading
                  ? "Loading recent activity..."
                  : selectedEmployee
                    ? `No recent activity for ${selectedEmployee.name} yet.`
                    : "No activity yet. Start chatting with your employees."}
              </div>
            `
          : html`
              <div class="employees-activity__list">
                ${activity.map(
                  (entry) => html`
                    <div class="employees-activity__row">
                      <div class="employees-activity__identity">
                        <span class="employees-activity__avatar">${entry.avatar}</span>
                        <span class="employees-activity__name">${entry.name}</span>
                      </div>
                      <div class="employees-activity__description">${entry.description}</div>
                      <div class="employees-activity__time">
                        ${formatRelativeTimestamp(entry.timestamp)}
                      </div>
                    </div>
                  `,
                )}
              </div>
            `}
      </section>
    </div>
  `;
}

function renderEmployeeCard(employee: EmployeeCard, props: EmployeesProps) {
  return html`
    <article class="card employees-card">
      <div class="employees-card__header">
        <div class="employees-card__identity">
          <div class="employees-card__avatar">${employee.avatar}</div>
          <div>
            <div class="employees-card__name">${employee.name}</div>
            <div class="employees-card__role">${employee.role}</div>
          </div>
        </div>
        <span class="employees-card__badge">${employee.autonomy}</span>
      </div>

      <div class="employees-card__status-row">
        <span class="employees-status employees-status--${employee.status}">
          <span class="employees-status__dot"></span>
          <span>${statusLabel(employee.status)}</span>
        </span>
        <span class="employees-card__last-active">Last active: ${formatLastActive(employee.lastActiveAt)}</span>
      </div>

      <div class="employees-card__metrics">
        ${renderMetric("Sessions today", formatCount(employee.sessionsToday))}
        ${renderMetric("Total messages", formatCount(employee.totalMessages))}
      </div>

      <div class="employees-card__actions">
        <button class="btn btn--sm" @click=${() => props.onOpenChat(employee.id)}>Chat</button>
        <button class="btn btn--sm btn--ghost" @click=${() => props.onViewSessions(employee.id)}>
          View sessions
        </button>
      </div>
    </article>
  `;
}

function renderMetric(label: string, value: string) {
  return html`
    <div class="employees-metric">
      <div class="employees-metric__label">${label}</div>
      <div class="employees-metric__value">${value}</div>
    </div>
  `;
}

function statusLabel(status: EmployeeCard["status"]) {
  switch (status) {
    case "active":
      return "Active";
    case "idle":
      return "Idle";
    default:
      return "Never used";
  }
}

function formatLastActive(timestamp: number | null) {
  return timestamp ? formatRelativeTimestamp(timestamp) : "never";
}

function formatCount(value: number) {
  return new Intl.NumberFormat().format(value);
}