import { html, nothing } from "lit";
import { icons } from "../icons.ts";
import {
  ROUTING_CHANNELS,
  labelForRoutingChannel,
  type RoutingAssignments,
  type RoutingChannelId,
  type RoutingEmployeeOption,
  type RoutingMessage,
} from "../controllers/routing.ts";

export type RoutingProps = {
  connected: boolean;
  loading: boolean;
  saving: boolean;
  message: RoutingMessage | null;
  assignments: RoutingAssignments;
  employees: RoutingEmployeeOption[];
  telegramConnected: boolean;
  whatsappConnected: boolean;
  onAssignmentChange: (channel: RoutingChannelId, agentId: string) => void;
  onPreset: (agentId: string) => void;
  onSave: () => Promise<void> | void;
};

function renderMessage(message: RoutingMessage | null) {
  if (!message) {
    return nothing;
  }
  return html`<div class="callout ${message.kind === "error" ? "danger" : "success"}">${message.text}</div>`;
}

function resolveChannelIcon(channel: RoutingChannelId) {
  return channel === "telegram" ? icons.send : icons.messageSquare;
}

function resolveChannelConnected(props: RoutingProps, channel: RoutingChannelId): boolean {
  return channel === "telegram" ? props.telegramConnected : props.whatsappConnected;
}

function resolveOwnerLabel(agentId: string, employees: Map<string, RoutingEmployeeOption>): string {
  if (agentId === "main") {
    return "Main agent (default)";
  }
  return employees.get(agentId)?.name ?? agentId;
}

function resolveOwnerSubLabel(agentId: string, employees: Map<string, RoutingEmployeeOption>): string {
  if (agentId === "main") {
    return "Current Kova default";
  }
  return employees.get(agentId)?.role ?? "Assigned employee";
}

export function renderRouting(props: RoutingProps) {
  const employeesById = new Map(props.employees.map((employee) => [employee.id, employee] as const));

  return html`
    <section class="page page--settings" style="display: grid; gap: 20px;">
      <div class="callout" style="display: grid; gap: 8px;">
        <div class="card-title">Multi-Agent Routing</div>
        <div style="line-height: 1.6;">
          When someone messages you on Telegram, which employee should respond? Set that here.
        </div>
      </div>

      <section class="card" style="display: grid; gap: 14px;">
        <div class="row" style="justify-content: space-between; gap: 12px; align-items: center; flex-wrap: wrap;">
          <div style="display: grid; gap: 4px;">
            <div class="card-title">Quick Presets</div>
            <div class="card-sub">Pick a starting point, then fine-tune each channel below.</div>
          </div>
          ${props.loading ? html`<span class="chip">Loading current routing...</span>` : nothing}
        </div>

        <div class="row" style="gap: 10px; flex-wrap: wrap;">
          <button
            type="button"
            class="btn"
            ?disabled=${props.saving}
            @click=${() => props.onPreset("kova-jordan")}
          >
            Jordan handles everything
          </button>
          <button
            type="button"
            class="btn"
            ?disabled=${props.saving}
            @click=${() => props.onPreset("kova-alex")}
          >
            Alex handles everything
          </button>
          <button
            type="button"
            class="btn"
            ?disabled=${props.saving}
            @click=${() => props.onPreset("main")}
          >
            Reset to default
          </button>
        </div>
      </section>

      <section class="card" style="display: grid; gap: 16px; overflow: hidden;">
        <div style="display: grid; gap: 4px;">
          <div class="card-title">Channel Routing</div>
          <div class="card-sub">
            Telegram and WhatsApp always stay visible here. Inactive channels show as not connected until you finish setup.
          </div>
        </div>

        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; min-width: 980px;">
            <thead>
              <tr>
                <th style="text-align: left; padding: 0 0 14px; min-width: 220px;">Channel</th>
                <th style="text-align: left; padding: 0 0 14px; min-width: 180px;">Current owner</th>
                ${props.employees.map(
                  (employee) => html`
                    <th style="text-align: center; padding: 0 8px 14px; min-width: 120px;">
                      <div style="display: grid; gap: 4px; justify-items: center;">
                        <span>${employee.name}</span>
                        <span class="muted" style="font-size: 12px;">
                          ${employee.isCustom ? "Custom" : employee.role ?? "Employee"}
                        </span>
                      </div>
                    </th>
                  `,
                )}
                <th style="text-align: left; padding: 0 0 14px; min-width: 220px;">Assign to</th>
              </tr>
            </thead>
            <tbody>
              ${ROUTING_CHANNELS.map((channel) => {
                const assignedAgentId = props.assignments[channel] ?? "main";
                const connected = resolveChannelConnected(props, channel);
                return html`
                  <tr style="border-top: 1px solid var(--border);">
                    <td style="padding: 16px 0; vertical-align: top;">
                      <div style="display: grid; gap: 8px;">
                        <div class="row" style="gap: 10px; align-items: center;">
                          <span
                            style="
                              display: inline-flex;
                              width: 34px;
                              height: 34px;
                              align-items: center;
                              justify-content: center;
                              border-radius: 999px;
                              background: var(--surface-elevated);
                              border: 1px solid var(--border);
                            "
                            aria-hidden="true"
                            >${resolveChannelIcon(channel)}</span
                          >
                          <div style="display: grid; gap: 3px;">
                            <strong>${labelForRoutingChannel(channel)}</strong>
                            <span class="muted" style="font-size: 12px;">
                              ${connected ? "Connected and ready to route" : "Not connected"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td style="padding: 16px 8px; vertical-align: top;">
                      <div style="display: grid; gap: 4px;">
                        <span class="chip">${resolveOwnerLabel(assignedAgentId, employeesById)}</span>
                        <span class="muted" style="font-size: 12px;">
                          ${resolveOwnerSubLabel(assignedAgentId, employeesById)}
                        </span>
                      </div>
                    </td>
                    ${props.employees.map((employee) => {
                      const active = assignedAgentId === employee.id;
                      return html`
                        <td style="padding: 16px 8px; text-align: center; vertical-align: top;">
                          ${active
                            ? html`<span class="chip" style="background: var(--surface-elevated);">
                                ${icons.check}
                                <span>Assigned</span>
                              </span>`
                            : html`<span class="muted">-</span>`}
                        </td>
                      `;
                    })}
                    <td style="padding: 16px 0 16px 8px; vertical-align: top;">
                      <label class="field" style="margin: 0;">
                        <select
                          .value=${assignedAgentId}
                          ?disabled=${props.saving}
                          @change=${(event: Event) =>
                            props.onAssignmentChange(
                              channel,
                              (event.target as HTMLSelectElement).value,
                            )}
                        >
                          <option value="main">Main agent (default)</option>
                          ${props.employees.map(
                            (employee) =>
                              html`<option value=${employee.id}>${employee.name}</option>`,
                          )}
                        </select>
                      </label>
                    </td>
                  </tr>
                `;
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section class="card" style="display: grid; gap: 12px;">
        <div class="row" style="justify-content: space-between; gap: 12px; align-items: center; flex-wrap: wrap;">
          <div style="display: grid; gap: 4px;">
            <div class="card-title">Save routing</div>
            <div class="card-sub">Changes take effect immediately - no restart needed.</div>
          </div>
          <button
            type="button"
            class="btn primary"
            ?disabled=${!props.connected || props.saving}
            @click=${props.onSave}
          >
            ${props.saving ? "Saving..." : "Save Routing"}
          </button>
        </div>
        ${renderMessage(props.message)}
      </section>
    </section>
  `;
}
