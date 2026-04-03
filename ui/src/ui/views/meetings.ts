import { html, nothing } from "lit";
import { MEETING_EMPTY_SECTION_TEXT } from "../controllers/meetings.ts";
import { formatRelativeTimestamp } from "../format.ts";
import { icons } from "../icons.ts";
import type { MeetingAnalysisResult } from "../types.ts";

export type MeetingsProps = {
  connected: boolean;
  title: string;
  transcript: string;
  sourceName: string | null;
  analyzing: boolean;
  sendingTelegram: boolean;
  error: string | null;
  notice: string | null;
  result: MeetingAnalysisResult | null;
  history: MeetingAnalysisResult[];
  onTitleChange: (next: string) => void;
  onTranscriptChange: (next: string) => void;
  onFileSelect: (file: File | null) => Promise<void> | void;
  onAnalyze: () => Promise<void> | void;
  onCopy: (label: string, value: string) => Promise<void> | void;
  onSave: () => void;
  onLoadHistory: (id: string) => void;
  onClearHistory: () => void;
  onSendTelegram: () => Promise<void> | void;
};

type ResultCardProps = {
  title: string;
  body: string;
  copyLabel: string;
  onCopy: () => void;
  footer?: unknown;
};

function renderMessage(kind: "danger" | "success", message: string | null) {
  if (!message) {
    return nothing;
  }
  return html`<div class="callout ${kind}">${message}</div>`;
}

function renderResultCard(props: ResultCardProps) {
  return html`
    <article class="card" style="display: grid; gap: 14px;">
      <div class="row" style="justify-content: space-between; gap: 12px; align-items: center; flex-wrap: wrap;">
        <div class="card-title">${props.title}</div>
        <button type="button" class="btn btn--sm" @click=${props.onCopy}>
          <span aria-hidden="true">${icons.copy}</span>
          <span>Copy</span>
        </button>
      </div>
      <div
        style="white-space: pre-wrap; line-height: 1.65; font-size: 14px; color: var(--text); min-height: 120px;"
      >
        ${props.body.trim() || MEETING_EMPTY_SECTION_TEXT}
      </div>
      ${props.footer ?? nothing}
    </article>
  `;
}

function renderHistoryItem(entry: MeetingAnalysisResult, onLoad: (id: string) => void) {
  const title = entry.title.trim() || "Untitled meeting";
  const preview = entry.summary.trim() || entry.actionItems.trim() || entry.decisions.trim();
  return html`
    <button
      type="button"
      class="card"
      style="display: grid; gap: 8px; text-align: left; width: 100%; cursor: pointer;"
      @click=${() => onLoad(entry.id)}
    >
      <div class="row" style="justify-content: space-between; gap: 10px; align-items: flex-start;">
        <div style="display: grid; gap: 4px;">
          <div class="card-title" style="font-size: 15px;">${title}</div>
          <div class="card-sub">
            ${entry.sourceName ? `Source: ${entry.sourceName}` : "Pasted transcript"}
          </div>
        </div>
        <span class="chip">${formatRelativeTimestamp(entry.createdAt)}</span>
      </div>
      <div class="muted" style="font-size: 13px; line-height: 1.5;">
        ${preview ? `${preview.slice(0, 180)}${preview.length > 180 ? "..." : ""}` : "Tap to reload this meeting analysis."}
      </div>
    </button>
  `;
}

export function renderMeetings(props: MeetingsProps) {
  const canAnalyze = props.connected && !props.analyzing && props.transcript.trim().length > 0;

  return html`
    <section class="page page--settings" style="display: grid; gap: 20px;">
      <div class="card" style="display: grid; gap: 12px; max-width: 1100px;">
        <div style="display: grid; gap: 4px;">
          <div class="card-title">Meeting Intelligence</div>
          <div class="card-sub">
            Upload a transcript or paste notes and Morgan will turn the meeting into a summary,
            action list, decisions log, and follow-up draft.
          </div>
        </div>
        ${renderMessage("danger", props.error)} ${renderMessage("success", props.notice)}
      </div>

      <div
        style="display: grid; gap: 20px; align-items: start; grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr);"
      >
        <div style="display: grid; gap: 20px;">
          <section class="card" style="display: grid; gap: 16px;">
            <div style="display: grid; gap: 4px;">
              <div class="card-title">Upload Transcript</div>
              <div class="card-sub">Accepts '.txt', '.md', and '.pdf' files, or paste the transcript below.</div>
            </div>

            <label
              class="card"
              style="display: grid; gap: 10px; border: 1px dashed var(--border-strong); background: var(--surface-elevated); cursor: pointer;"
              @dragover=${(event: DragEvent) => event.preventDefault()}
              @drop=${(event: DragEvent) => {
                event.preventDefault();
                const file = event.dataTransfer?.files?.[0] ?? null;
                void props.onFileSelect(file);
              }}
            >
              <input
                type="file"
                accept=".txt,.md,.pdf"
                hidden
                @change=${(event: Event) => {
                  const input = event.target as HTMLInputElement;
                  const file = input.files?.[0] ?? null;
                  void props.onFileSelect(file);
                  input.value = "";
                }}
              />
              <div style="font-size: 34px; line-height: 1;">📝</div>
              <div style="display: grid; gap: 4px;">
                <strong>Drop a transcript here</strong>
                <span class="muted">or click to browse from disk</span>
              </div>
              ${props.sourceName
                ? html`<span class="chip">Loaded: ${props.sourceName}</span>`
                : html`<span class="chip">No file selected yet</span>`}
            </label>

            <label class="field">
              <span>Meeting title</span>
              <input
                .value=${props.title}
                @input=${(event: Event) =>
                  props.onTitleChange((event.target as HTMLInputElement).value)}
                placeholder="Optional"
              />
            </label>

            <label class="field">
              <span>Paste meeting transcript here</span>
              <textarea
                rows="18"
                .value=${props.transcript}
                @input=${(event: Event) =>
                  props.onTranscriptChange((event.target as HTMLTextAreaElement).value)}
                placeholder="Paste the transcript, notes, or cleaned-up meeting minutes here..."
              ></textarea>
            </label>

            <div class="row" style="gap: 10px; flex-wrap: wrap; align-items: center;">
              <button type="button" class="btn primary" ?disabled=${!canAnalyze} @click=${props.onAnalyze}>
                ${props.analyzing ? "Analysing..." : "Analyse Meeting"}
              </button>
              <span class="muted" style="font-size: 12px;">
                Morgan uses the transcript to generate a summary, actions, decisions, and a follow-up email.
              </span>
            </div>
          </section>

          ${props.analyzing
            ? html`
                <section class="card" style="display: grid; gap: 12px;">
                  <div class="row" style="gap: 10px; align-items: center;">
                    <span class="spin" aria-hidden="true">${icons.loader}</span>
                    <strong>Morgan is reading the transcript...</strong>
                  </div>
                  <div class="muted" style="font-size: 13px;">
                    This can take a moment for long transcripts or PDFs.
                  </div>
                </section>
              `
            : nothing}

          ${props.result
            ? html`
                <section style="display: grid; gap: 16px;">
                  <div class="row" style="justify-content: space-between; gap: 12px; align-items: center; flex-wrap: wrap;">
                    <div style="display: grid; gap: 4px;">
                      <div class="card-title">Results</div>
                      <div class="card-sub">
                        ${props.result.title.trim() || "Untitled meeting"} · generated ${formatRelativeTimestamp(props.result.createdAt)}
                      </div>
                    </div>
                    <button type="button" class="btn" @click=${props.onSave}>
                      <span aria-hidden="true">${icons.bookmark}</span>
                      <span>Save</span>
                    </button>
                  </div>

                  <div
                    style="display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));"
                  >
                    ${renderResultCard({
                      title: "Summary",
                      body: props.result.summary,
                      copyLabel: "summary",
                      onCopy: () => void props.onCopy("summary", props.result?.summary ?? ""),
                    })}
                    ${renderResultCard({
                      title: "Action Items",
                      body: props.result.actionItems,
                      copyLabel: "action items",
                      onCopy: () =>
                        void props.onCopy("action items", props.result?.actionItems ?? ""),
                    })}
                    ${renderResultCard({
                      title: "Decisions",
                      body: props.result.decisions,
                      copyLabel: "decisions",
                      onCopy: () => void props.onCopy("decisions", props.result?.decisions ?? ""),
                    })}
                    ${renderResultCard({
                      title: "Follow-up Email",
                      body: props.result.followUpEmail,
                      copyLabel: "follow-up email",
                      onCopy: () =>
                        void props.onCopy("follow-up email", props.result?.followUpEmail ?? ""),
                      footer: html`
                        <div class="row" style="gap: 8px; flex-wrap: wrap;">
                          <button
                            type="button"
                            class="btn btn--sm primary"
                            ?disabled=${props.sendingTelegram}
                            @click=${props.onSendTelegram}
                          >
                            <span aria-hidden="true">${icons.send}</span>
                            <span>${props.sendingTelegram ? "Sending..." : "Send via Telegram"}</span>
                          </button>
                        </div>
                      `,
                    })}
                  </div>
                </section>
              `
            : nothing}
        </div>

        <aside style="display: grid; gap: 20px;">
          <section class="card" style="display: grid; gap: 14px;">
            <div style="display: grid; gap: 4px;">
              <div class="card-title">Recent History</div>
              <div class="card-sub">The last 5 saved meeting analyses from this browser.</div>
            </div>

            ${props.history.length === 0
              ? html`<div class="muted" style="font-size: 13px;">Save a meeting result to keep it here.</div>`
              : html`<div style="display: grid; gap: 12px;">
                  ${props.history.map((entry) => renderHistoryItem(entry, props.onLoadHistory))}
                </div>`}

            <button
              type="button"
              class="btn btn--ghost"
              ?disabled=${props.history.length === 0}
              @click=${props.onClearHistory}
            >
              <span aria-hidden="true">${icons.trash}</span>
              <span>Clear history</span>
            </button>
          </section>
        </aside>
      </div>
    </section>
  `;
}
