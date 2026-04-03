import { html, nothing } from "lit";
import type { CanvasEmployeeOption, CanvasStatus } from "../controllers/canvas.ts";
import { icons } from "../icons.ts";

export type CanvasProps = {
  connected: boolean;
  loading: boolean;
  status: CanvasStatus;
  frameUrl: string | null;
  selectedAgentId: string;
  employees: CanvasEmployeeOption[];
  onAgentChange: (agentId: string) => void;
  onRefresh: () => Promise<void> | void;
  onOpenInNewTab: () => Promise<void> | void;
};

function renderStatusDot(status: CanvasStatus) {
  const background =
    status === "ready"
      ? "var(--success, #16a34a)"
      : status === "error"
        ? "var(--danger, #dc2626)"
        : "var(--muted, #94a3b8)";
  const label =
    status === "ready" ? "Canvas loaded" : status === "error" ? "Canvas unavailable" : "Checking canvas";

  return html`
    <div class="row" style="gap: 8px; align-items: center;">
      <span
        aria-hidden="true"
        style="
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: ${background};
          box-shadow: 0 0 0 3px color-mix(in srgb, ${background} 18%, transparent);
        "
      ></span>
      <span class="muted" style="font-size: 12px;">${label}</span>
    </div>
  `;
}

export function renderCanvas(props: CanvasProps) {
  const iframeVisible = Boolean(props.frameUrl) && props.status !== "error";

  return html`
    <section
      class="page page--settings"
      style="display: grid; gap: 14px; min-height: calc(100vh - 128px); align-content: start;"
    >
      <section class="card" style="display: grid; gap: 12px;">
        <div class="row" style="justify-content: space-between; gap: 12px; align-items: center; flex-wrap: wrap;">
          <div style="display: grid; gap: 4px;">
            <div class="card-title">Live Canvas</div>
            <div class="card-sub">Real-time agent workspace and visual output</div>
          </div>
          ${renderStatusDot(props.status)}
        </div>

        <div class="row" style="gap: 10px; flex-wrap: wrap; align-items: end;">
          <label class="field" style="min-width: 220px; margin: 0;">
            <span>Employee workspace</span>
            <select
              .value=${props.selectedAgentId}
              ?disabled=${props.loading}
              @change=${(event: Event) =>
                props.onAgentChange((event.target as HTMLSelectElement).value)}
            >
              ${props.employees.map(
                (employee) =>
                  html`<option value=${employee.id}>
                    ${employee.name}${employee.role ? ` - ${employee.role}` : ""}
                  </option>`,
              )}
            </select>
          </label>

          <button
            type="button"
            class="btn"
            ?disabled=${!props.connected || props.loading}
            @click=${props.onRefresh}
          >
            <span aria-hidden="true">${icons.loader}</span>
            <span>Refresh</span>
          </button>

          <button
            type="button"
            class="btn"
            ?disabled=${!props.connected || !props.frameUrl}
            @click=${props.onOpenInNewTab}
          >
            <span aria-hidden="true">${icons.externalLink}</span>
            <span>Open in new tab</span>
          </button>

          <span class="muted" style="font-size: 12px;">
            The selector adds an agent hint to the canvas URL when the host supports it.
          </span>
        </div>
      </section>

      ${iframeVisible
        ? html`
            <section
              style="
                height: calc(100vh - 230px);
                min-height: 560px;
                background: #020617;
                overflow: hidden;
              "
            >
              <iframe
                title="Live Canvas"
                src=${props.frameUrl ?? "about:blank"}
                style="width: 100%; height: 100%; border: 0; display: block; background: #020617;"
                referrerpolicy="no-referrer"
              ></iframe>
            </section>
          `
        : html`
            <section
              class="card"
              style="display: grid; place-items: center; min-height: calc(100vh - 230px); text-align: center;"
            >
              <div style="display: grid; gap: 10px; max-width: 420px;">
                <div class="card-title">Canvas is starting up</div>
                <div class="muted">Canvas is starting up. Try refreshing in a moment.</div>
                ${props.status === "checking"
                  ? html`<div class="muted" style="font-size: 12px;">Checking the live canvas endpoint...</div>`
                  : nothing}
              </div>
            </section>
          `}
    </section>
  `;
}
