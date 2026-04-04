import { html, nothing } from "lit";
import type { AgentCreatorDraft } from "../types.ts";

const EMPLOYEE_EMOJIS = [
  "\u{1F469}\u200D\u{1F4BC}",
  "\u{1F468}\u200D\u{1F4BC}",
  "\u{1F9D1}\u200D\u{1F4BB}",
  "\u{1F469}\u200D\u{1F52C}",
  "\u{1F468}\u200D\u{1F3EB}",
  "\u{1F9D1}\u200D\u{1F3A8}",
  "\u{1F469}\u200D\u2695\uFE0F",
  "\u{1F468}\u200D\u{1F373}",
  "\u{1F9D1}\u200D\u{1F680}",
  "\u{1F469}\u200D\u2696\uFE0F",
  "\u{1F916}",
  "\u{1F98A}",
  "\u{1F43A}",
  "\u{1F981}",
  "\u{1F42F}",
  "\u{1F985}",
  "\u{1F31F}",
  "\u26A1",
  "\u{1F525}",
  "\u{1F48E}",
] as const;

const CREATOR_STEPS = [
  { id: 1, label: "Identity" },
  { id: 2, label: "Personality" },
  { id: 3, label: "Review" },
] as const;

export type AgentCreatorProps = {
  step: 1 | 2 | 3;
  value: AgentCreatorDraft;
  creating: boolean;
  error: string | null;
  onClose: () => void;
  onStepChange: (step: 1 | 2 | 3) => void;
  onChange: (patch: Partial<AgentCreatorDraft>) => void;
  onCreate: (value: AgentCreatorDraft) => void;
};

function hasIdentity(value: AgentCreatorDraft): boolean {
  return value.name.trim().length > 0 && value.role.trim().length > 0;
}

function renderIdentityStep(props: AgentCreatorProps) {
  return html`
    <div style="display: grid; gap: 16px;">
      <div
        style="display: grid; gap: 12px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));"
      >
        <label class="field">
          <span>Name</span>
          <input
            .value=${props.value.name}
            @input=${(event: Event) =>
              props.onChange({ name: (event.target as HTMLInputElement).value })}
            placeholder="Alex"
            autocomplete="off"
          />
        </label>
        <label class="field">
          <span>Role / Title</span>
          <input
            .value=${props.value.role}
            @input=${(event: Event) =>
              props.onChange({ role: (event.target as HTMLInputElement).value })}
            placeholder="Research Lead"
            autocomplete="off"
          />
        </label>
      </div>

      <div class="field">
        <span>Emoji</span>
        <div
          style="display: grid; grid-template-columns: repeat(auto-fit, minmax(48px, 1fr)); gap: 8px;"
        >
          ${EMPLOYEE_EMOJIS.map(
            (emoji) => html`
              <button
                type="button"
                class="btn btn--sm ${props.value.emoji === emoji ? "primary" : ""}"
                style="padding: 10px 0; font-size: 20px;"
                title=${`Select ${emoji}`}
                @click=${() => props.onChange({ emoji })}
              >
                ${emoji}
              </button>
            `,
          )}
        </div>
      </div>

      <label class="field">
        <span>Autonomy</span>
        <select
          .value=${props.value.autonomy}
          @change=${(event: Event) =>
            props.onChange({
              autonomy: (event.target as HTMLSelectElement).value as AgentCreatorDraft["autonomy"],
            })}
        >
          <option value="Supervised">Supervised</option>
          <option value="Act + Notify">Act + Notify</option>
          <option value="Autonomous">Autonomous</option>
        </select>
      </label>
    </div>
  `;
}

function renderPersonalityStep(props: AgentCreatorProps) {
  return html`
    <div style="display: grid; gap: 16px;">
      <label class="field">
        <span>How should this employee communicate?</span>
        <textarea
          rows="4"
          .value=${props.value.personality}
          @input=${(event: Event) =>
            props.onChange({ personality: (event.target as HTMLTextAreaElement).value })}
          placeholder="Calm, concise, and direct with clear next steps."
        ></textarea>
      </label>

      <label class="field">
        <span>What is this employee's main focus?</span>
        <textarea
          rows="4"
          .value=${props.value.focus}
          @input=${(event: Event) =>
            props.onChange({ focus: (event.target as HTMLTextAreaElement).value })}
          placeholder="Owns customer research, synthesizes findings, and flags product risks early."
        ></textarea>
      </label>

      <label class="field">
        <span>Any specific instructions?</span>
        <textarea
          rows="4"
          .value=${props.value.instructions}
          @input=${(event: Event) =>
            props.onChange({ instructions: (event.target as HTMLTextAreaElement).value })}
          placeholder="Escalate anything that could affect launch quality or customer trust."
        ></textarea>
      </label>
    </div>
  `;
}

function renderReviewStep(props: AgentCreatorProps) {
  return html`
    <div style="display: grid; gap: 16px;">
      <div
        class="card"
        style="border: 1px solid var(--border); background: var(--surface-elevated);"
      >
        <div style="display: flex; align-items: flex-start; gap: 16px;">
          <div
            style="width: 64px; height: 64px; border-radius: 18px; display: grid; place-items: center; font-size: 34px; background: var(--surface); border: 1px solid var(--border);"
          >
            ${props.value.emoji}
          </div>
          <div style="display: grid; gap: 8px; min-width: 0;">
            <div>
              <div class="card-title" style="font-size: 20px;">
                ${props.value.name || "New employee"}
              </div>
              <div class="card-sub">${props.value.role || "Role coming next"}</div>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <span class="chip">${props.value.autonomy}</span>
              <span class="chip">Model: openrouter/auto</span>
            </div>
          </div>
        </div>
      </div>

      <div
        style="display: grid; gap: 12px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));"
      >
        <div class="card" style="border: 1px solid var(--border);">
          <div class="card-title" style="font-size: 14px;">Communication</div>
          <div class="card-sub">
            ${props.value.personality || "No communication guidance added yet."}
          </div>
        </div>
        <div class="card" style="border: 1px solid var(--border);">
          <div class="card-title" style="font-size: 14px;">Focus</div>
          <div class="card-sub">${props.value.focus || "No focus statement added yet."}</div>
        </div>
      </div>

      ${props.value.instructions.trim()
        ? html`<div class="card" style="border: 1px solid var(--border);">
            <div class="card-title" style="font-size: 14px;">Instructions</div>
            <div class="card-sub">${props.value.instructions}</div>
          </div>`
        : nothing}
    </div>
  `;
}

export function renderAgentCreator(props: AgentCreatorProps) {
  const canContinue = props.step === 1 ? hasIdentity(props.value) : true;
  const canCreate = hasIdentity(props.value) && !props.creating;

  return html`
    <dialog
      class="md-preview-dialog"
      ?open=${true}
      @click=${(event: Event) => {
        const dialog = event.currentTarget as HTMLDialogElement;
        if (event.target === dialog) {
          dialog.close();
        }
      }}
      @close=${props.onClose}
    >
      <div class="md-preview-dialog__panel" style="max-width: 760px;">
        <div class="md-preview-dialog__header">
          <div class="md-preview-dialog__title">Employee Creator</div>
          <button
            type="button"
            class="btn btn--sm"
            ?disabled=${props.creating}
            @click=${(event: Event) => {
              (event.currentTarget as HTMLElement).closest("dialog")?.close();
            }}
          >
            Close
          </button>
        </div>

        <div class="md-preview-dialog__body" style="display: grid; gap: 20px;">
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            ${CREATOR_STEPS.map(
              (step) => html`<span class="chip ${props.step === step.id ? "chip-ok" : ""}">
                ${step.id}. ${step.label}
              </span>`,
            )}
          </div>

          ${props.error ? html`<div class="callout danger">${props.error}</div>` : nothing}
          ${props.step === 1
            ? renderIdentityStep(props)
            : props.step === 2
              ? renderPersonalityStep(props)
              : renderReviewStep(props)}

          <div style="display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap;">
            <div class="muted" style="font-size: 13px;">
              ${props.step === 1
                ? "Choose identity basics first, then shape how this employee works."
                : props.step === 2
                  ? "These notes will be written into SOUL.md for the employee workspace."
                  : "Creating the employee provisions the agent, writes SOUL.md, and sets the default model."}
            </div>
            <div style="display: flex; gap: 8px; margin-left: auto;">
              ${props.step === 1
                ? html`<button
                    type="button"
                    class="btn"
                    ?disabled=${props.creating}
                    @click=${props.onClose}
                  >
                    Cancel
                  </button>`
                : html`<button
                    type="button"
                    class="btn"
                    ?disabled=${props.creating}
                    @click=${() => props.onStepChange((props.step - 1) as 1 | 2 | 3)}
                  >
                    Back
                  </button>`}
              ${props.step < 3
                ? html`<button
                    type="button"
                    class="btn primary"
                    ?disabled=${props.creating || !canContinue}
                    @click=${() => props.onStepChange((props.step + 1) as 1 | 2 | 3)}
                  >
                    Next
                  </button>`
                : html`<button
                    type="button"
                    class="btn primary"
                    ?disabled=${!canCreate}
                    @click=${() => props.onCreate(props.value)}
                  >
                    ${props.creating ? "Creating..." : "Create Employee"}
                  </button>`}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  `;
}
