import { html } from "lit";
import type { CanvasEmployeeOption, CanvasStatus } from "../controllers/canvas.ts";

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

export function renderCanvas(_props: CanvasProps) {
  return html`
    <section
      class="page page--settings"
      style="display: grid; gap: 14px; min-height: calc(100vh - 128px); align-content: start;"
    >
      <section class="card" style="display: grid; gap: 12px;">
        <div style="display: grid; gap: 6px;">
          <div class="card-title">Canvas — Coming in Desktop App</div>
          <div class="muted">
            The live canvas workspace will be available in the Kova desktop app. It uses a native
            WebView for full canvas support.
          </div>
        </div>
      </section>
    </section>
  `;
}
