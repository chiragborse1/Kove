import { html, nothing } from "lit";
import {
  DAILY_BRIEFING_CITY,
  formatBriefingChannelLabel,
  type BriefingChannelId,
  type BriefingFormState,
  type BriefingMessage,
  type BriefingSectionId,
} from "../controllers/briefing.ts";

type BriefingViewProps = {
  connected: boolean;
  loading: boolean;
  saving: boolean;
  timezone: string;
  availableChannels: BriefingChannelId[];
  form: BriefingFormState;
  message: BriefingMessage | null;
  previewDate: string;
  onEnabledChange: (next: boolean) => void;
  onTimeChange: (next: string) => void;
  onChannelChange: (next: BriefingChannelId | "") => void;
  onSectionChange: (section: BriefingSectionId, next: boolean) => void;
  onSave: () => Promise<void> | void;
  onOpenChannels: () => void;
};

const SECTION_DEFINITIONS: Array<{
  id: BriefingSectionId;
  title: string;
  description: string;
}> = [
  {
    id: "news",
    title: "Top News",
    description: "Alex finds 5 headlines relevant to your interests.",
  },
  {
    id: "weather",
    title: "Weather",
    description: `Quick forecast for ${DAILY_BRIEFING_CITY}.`,
  },
  {
    id: "markets",
    title: "Markets",
    description: "Nifty50, Sensex, and BTC opening prices.",
  },
  {
    id: "tasks",
    title: "Tasks Reminder",
    description: "Pending items pulled from HEARTBEAT.md.",
  },
  {
    id: "quote",
    title: "Quote of the Day",
    description: "One short motivational quote to start the day.",
  },
];

function renderMessage(message: BriefingMessage | null) {
  if (!message) {
    return nothing;
  }
  return html`
    <div class="callout ${message.kind === "error" ? "danger" : "success"}">${message.text}</div>
  `;
}

function renderPreview(props: BriefingViewProps) {
  const lines = [`☀️ Good morning! Here's your Kova briefing for ${props.previewDate}`, ""];
  if (props.form.sections.news) {
    lines.push("📰 TOP NEWS", "- Headline one", "- Headline two", "");
  }
  if (props.form.sections.weather) {
    lines.push("🌤 WEATHER", `${DAILY_BRIEFING_CITY}: 31°C, clear skies`, "");
  }
  if (props.form.sections.markets) {
    lines.push("📈 MARKETS", "Nifty50, Sensex, and BTC opening snapshot", "");
  }
  if (props.form.sections.tasks) {
    lines.push("✅ TASKS", "- Follow up on priority items from HEARTBEAT.md", "");
  }
  if (props.form.sections.quote) {
    lines.push("💬 QUOTE", '"Small steps still move you forward."', "");
  }
  lines.push("— Sent by your Kova team");

  return html`
    <div
      style="padding: 16px; border-radius: 16px; border: 1px solid var(--border); background: var(--surface); white-space: pre-wrap; font-size: 13px; line-height: 1.6;"
    >
      ${lines.join("\n")}
    </div>
  `;
}

function renderNoChannelsState(props: BriefingViewProps) {
  return html`
    <div class="callout" style="display: grid; gap: 12px;">
      <div>
        Connect Telegram or WhatsApp first so Kova has somewhere to deliver your morning digest.
      </div>
      <div class="row" style="gap: 8px; flex-wrap: wrap;">
        <button class="btn" @click=${() => props.onOpenChannels()}>Open Channels</button>
      </div>
    </div>
  `;
}

export function renderBriefing(props: BriefingViewProps) {
  const hasConnectedChannel = props.availableChannels.length > 0;
  const canSave =
    props.connected &&
    !props.loading &&
    !props.saving &&
    hasConnectedChannel &&
    Object.values(props.form.sections).some(Boolean);

  return html`
    <section class="page page--settings" style="display: grid; gap: 20px;">
      <div class="card" style="display: grid; gap: 16px; max-width: 920px;">
        <div class="row" style="justify-content: space-between; align-items: flex-start; gap: 16px; flex-wrap: wrap;">
          <div style="display: grid; gap: 6px;">
            <div class="card-title">Daily Briefing</div>
            <div class="card-sub">
              Your AI team delivers a morning digest to your phone every day.
            </div>
          </div>
          <label class="field-inline checkbox" style="font-size: 13px; align-self: center;">
            <input
              type="checkbox"
              .checked=${props.form.enabled}
              @change=${(event: Event) =>
                props.onEnabledChange((event.target as HTMLInputElement).checked)}
            />
            <span>${props.form.enabled ? "Briefing enabled" : "Briefing disabled"}</span>
          </label>
        </div>
        <div class="muted" style="font-size: 13px;">
          Kova saves this as one cron job and delivers the finished digest to your connected channel.
        </div>
        ${renderMessage(props.message)}
      </div>

      <div class="card" style="display: grid; gap: 16px; max-width: 920px;">
        <div style="display: grid; gap: 4px;">
          <div class="card-title">Delivery Settings</div>
          <div class="card-sub">Choose when and where your briefing arrives.</div>
        </div>
        ${hasConnectedChannel
          ? html`
              <div
                style="display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));"
              >
                <label class="field">
                  <span>Deliver at</span>
                  <select
                    .value=${props.form.time}
                    @change=${(event: Event) =>
                      props.onTimeChange((event.target as HTMLSelectElement).value)}
                    ?disabled=${props.saving}
                  >
                    ${Array.from({ length: 13 }, (_, index) => {
                      const totalMinutes = (5 * 60) + index * 30;
                      const hour = Math.floor(totalMinutes / 60);
                      const minute = totalMinutes % 60;
                      const value = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
                      const hour12 = hour % 12 || 12;
                      const meridiem = hour < 12 ? "AM" : "PM";
                      return html`<option value=${value}>${hour12}:${String(minute).padStart(2, "0")} ${meridiem}</option>`;
                    })}
                  </select>
                </label>

                <label class="field">
                  <span>Send to</span>
                  <select
                    .value=${props.form.channel}
                    @change=${(event: Event) =>
                      props.onChannelChange(
                        (event.target as HTMLSelectElement).value as BriefingChannelId,
                      )}
                    ?disabled=${props.saving}
                  >
                    ${props.availableChannels.map(
                      (channel) =>
                        html`<option value=${channel}>${formatBriefingChannelLabel(channel)}</option>`,
                    )}
                  </select>
                </label>
              </div>
              <div class="muted" style="font-size: 12px;">Times are in your local timezone: ${props.timezone}</div>
            `
          : renderNoChannelsState(props)}
      </div>

      <div class="card" style="display: grid; gap: 16px; max-width: 920px;">
        <div style="display: grid; gap: 4px;">
          <div class="card-title">Briefing Sections</div>
          <div class="card-sub">Pick the updates Kova should assemble each morning.</div>
        </div>
        <div class="chip-row">
          ${SECTION_DEFINITIONS.map(
            (section) => html`
              <label class="chip" style="display: grid; gap: 4px; min-width: 220px; align-items: start;">
                <span style="display: inline-flex; align-items: center; gap: 8px;">
                  <input
                    type="checkbox"
                    .checked=${props.form.sections[section.id]}
                    @change=${(event: Event) =>
                      props.onSectionChange(section.id, (event.target as HTMLInputElement).checked)}
                  />
                  <span style="color: var(--text-strong);">${section.title}</span>
                </span>
                <span class="muted" style="font-size: 12px; line-height: 1.45;">${section.description}</span>
              </label>
            `,
          )}
        </div>
      </div>

      <div class="card" style="display: grid; gap: 16px; max-width: 920px;">
        <div style="display: grid; gap: 4px;">
          <div class="card-title">Preview</div>
          <div class="card-sub">
            This is the style your briefing will use in ${formatBriefingChannelLabel(props.form.channel)}.
          </div>
        </div>
        ${renderPreview(props)}
      </div>

      <div class="row" style="gap: 10px; flex-wrap: wrap; align-items: center;">
        <button class="btn primary" ?disabled=${!canSave} @click=${() => props.onSave()}>
          ${props.saving ? "Saving..." : "Save Daily Briefing"}
        </button>
        <span class="muted" style="font-size: 12px;">
          ${props.form.enabled ? "Kova will keep the job enabled." : "Saving will keep the job disabled."}
        </span>
      </div>
    </section>
  `;
}
