import { html, nothing } from "lit";
import {
  filterByChannel,
  formatLastMessage,
  formatResponder,
  getChannelFromSession,
  hasEmployeeReply,
  type InboxChannelFilter,
} from "../controllers/inbox.ts";
import { formatRelativeTimestamp } from "../format.ts";
import { pathForTab } from "../navigation.ts";
import type { GatewaySessionRow } from "../types.ts";

export type InboxProps = {
  loading: boolean;
  error: string | null;
  sessions: GatewaySessionRow[] | null;
  filter: InboxChannelFilter;
  basePath: string;
  onFilterChange: (next: InboxChannelFilter) => void;
  onRefresh: () => void;
  onNavigateToChat?: (sessionKey: string) => void;
};

const FILTER_TABS: Array<{ id: InboxChannelFilter; label: string }> = [
  { id: "all", label: "All" },
  { id: "telegram", label: "Telegram" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "unanswered", label: "Unanswered" },
];

function renderSkeletonRows() {
  return html`
    ${Array.from(
      { length: 3 },
      (_, index) => html`
        <div class="card" style="display: grid; gap: 14px; opacity: 0.7;" data-skeleton=${index}>
          <div class="row" style="justify-content: space-between; gap: 16px; align-items: center;">
            <div style="display: flex; gap: 12px; align-items: center; min-width: 0;">
              <div
                style="width: 36px; height: 36px; border-radius: 12px; background: var(--surface); border: 1px solid var(--border);"
              ></div>
              <div style="display: grid; gap: 8px; min-width: 0;">
                <div
                  style="width: 140px; height: 10px; border-radius: 999px; background: var(--surface);"
                ></div>
                <div
                  style="width: 220px; height: 10px; border-radius: 999px; background: var(--surface);"
                ></div>
              </div>
            </div>
            <div
              style="width: 52px; height: 10px; border-radius: 999px; background: var(--surface);"
            ></div>
          </div>
        </div>
      `,
    )}
  `;
}

function renderEmptyState(props: InboxProps, filteredSessions: GatewaySessionRow[]) {
  if (props.loading) {
    return nothing;
  }
  if ((props.sessions ?? []).length === 0) {
    return html`
      <div class="card" style="display: grid; gap: 8px; max-width: 820px;">
        <div class="card-title">No conversations yet</div>
        <div class="card-sub">Connect a channel to start receiving messages.</div>
      </div>
    `;
  }
  if (filteredSessions.length === 0) {
    return html`
      <div class="card" style="display: grid; gap: 8px; max-width: 820px;">
        <div class="card-title">No conversations match this filter</div>
        <div class="card-sub">Try a different channel filter or refresh the inbox.</div>
      </div>
    `;
  }
  return nothing;
}

function renderChannelBadge(session: GatewaySessionRow) {
  const channel = getChannelFromSession(session);
  if (channel === "telegram") {
    return html`<span class="chip chip-ok">✈️ Telegram</span>`;
  }
  if (channel === "whatsapp") {
    return html`<span class="chip chip-ok">📱 WhatsApp</span>`;
  }
  return html`<span class="chip">Conversation</span>`;
}

function renderInboxRow(session: GatewaySessionRow, props: InboxProps) {
  const channel = getChannelFromSession(session);
  const href = `${pathForTab("chat", props.basePath)}?session=${encodeURIComponent(session.key)}`;
  const title =
    session.displayName?.trim() ||
    session.label?.trim() ||
    session.subject?.trim() ||
    session.derivedTitle?.trim() ||
    session.key;
  const updated = session.updatedAt ? formatRelativeTimestamp(session.updatedAt) : "n/a";
  const responder = formatResponder(session);
  const unanswered = !hasEmployeeReply(session);

  return html`
    <a
      href=${href}
      class="card"
      style="display: block; text-decoration: none; color: inherit; transition: transform var(--duration-fast) ease, border-color var(--duration-fast) ease;"
      @click=${(event: MouseEvent) => {
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return;
        }
        if (props.onNavigateToChat) {
          event.preventDefault();
          props.onNavigateToChat(session.key);
        }
      }}
    >
      <div class="row" style="justify-content: space-between; gap: 16px; align-items: flex-start;">
        <div style="display: flex; gap: 14px; align-items: flex-start; min-width: 0; flex: 1;">
          <div
            style="width: 40px; height: 40px; border-radius: 14px; border: 1px solid var(--border); background: var(--surface); display: inline-flex; align-items: center; justify-content: center; font-size: 18px; flex: 0 0 auto;"
            aria-hidden="true"
          >
            ${channel === "whatsapp" ? "📱" : "✈️"}
          </div>
          <div style="display: grid; gap: 8px; min-width: 0; flex: 1;">
            <div class="row" style="gap: 8px; flex-wrap: wrap; align-items: center;">
              <div style="font-weight: 600; color: var(--text-strong); min-width: 0;">${title}</div>
              ${renderChannelBadge(session)}
            </div>
            <div class="muted" style="font-size: 13px; line-height: 1.45;">
              ${formatLastMessage(session)}
            </div>
            <div class="muted" style="font-size: 12px;">${responder}</div>
          </div>
        </div>
        <div style="display: grid; gap: 8px; justify-items: end; flex: 0 0 auto;">
          <div class="muted" style="font-size: 12px; white-space: nowrap;">${updated}</div>
          ${unanswered
            ? html`
                <span
                  title="Awaiting employee reply"
                  style="width: 10px; height: 10px; border-radius: 999px; background: var(--warn, #f59e0b); display: inline-block;"
                ></span>
              `
            : nothing}
        </div>
      </div>
    </a>
  `;
}

export function renderInbox(props: InboxProps) {
  const allSessions = props.sessions ?? [];
  const filteredSessions = filterByChannel(allSessions, props.filter);

  return html`
    <section class="page page--settings" style="display: grid; gap: 20px;">
      <div class="card" style="display: grid; gap: 16px; max-width: 920px;">
        <div
          class="row"
          style="justify-content: space-between; gap: 12px; align-items: flex-start; flex-wrap: wrap;"
        >
          <div style="display: grid; gap: 4px;">
            <div class="card-title">Inbox</div>
            <div class="card-sub">All conversations across your connected channels.</div>
          </div>
          <button class="btn" ?disabled=${props.loading} @click=${() => props.onRefresh()}>
            ${props.loading ? "Refreshing..." : "Refresh"}
          </button>
        </div>

        <div class="chip-row">
          ${FILTER_TABS.map(
            (tab) => html`
              <button
                class="chip ${props.filter === tab.id ? "chip-ok" : ""}"
                style="cursor: pointer;"
                @click=${() => props.onFilterChange(tab.id)}
              >
                ${tab.label}
              </button>
            `,
          )}
        </div>

        ${props.error ? html`<div class="callout danger">${props.error}</div>` : nothing}
      </div>

      <div style="display: grid; gap: 14px; max-width: 920px;">
        ${props.loading && allSessions.length === 0 ? renderSkeletonRows() : nothing}
        ${filteredSessions.map((session) => renderInboxRow(session, props))}
        ${renderEmptyState(props, filteredSessions)}
      </div>
    </section>
  `;
}
