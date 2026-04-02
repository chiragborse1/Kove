import { html, nothing } from "lit";
import { formatRelativeTimestamp } from "../format.ts";
import type { ChannelAccountSnapshot, TelegramStatus } from "../types.ts";
import { renderChannelConfigSection } from "./channels.config.ts";
import {
  formatNullableBoolean,
  renderSingleAccountChannelCard,
  resolveChannelConfigured,
} from "./channels.shared.ts";
import type { ChannelsProps } from "./channels.types.ts";

function readTelegramConfig(props: ChannelsProps): Record<string, unknown> | null {
  const channels = (props.configForm as { channels?: unknown } | null)?.channels;
  if (!channels || typeof channels !== "object" || Array.isArray(channels)) {
    return null;
  }
  const telegram = (channels as { telegram?: unknown }).telegram;
  if (!telegram || typeof telegram !== "object" || Array.isArray(telegram)) {
    return null;
  }
  return telegram as Record<string, unknown>;
}

function hasStoredTelegramToken(props: ChannelsProps): boolean {
  const telegramConfig = readTelegramConfig(props);
  return typeof telegramConfig?.botToken === "string" && telegramConfig.botToken.trim().length > 0;
}

function resolveTelegramTokenSource(
  telegram: TelegramStatus | undefined,
  telegramAccounts: ChannelAccountSnapshot[],
): string | null {
  const primaryAccount = telegramAccounts[0];
  return (
    telegram?.tokenSource ??
    primaryAccount?.tokenSource ??
    primaryAccount?.botTokenSource ??
    null
  );
}

function renderTelegramSetupSection(
  props: ChannelsProps,
  telegram: TelegramStatus | undefined,
  telegramAccounts: ChannelAccountSnapshot[],
) {
  const configured = resolveChannelConfigured("telegram", props) === true;
  const busy = props.telegramSetupBusy || props.configSaving;
  const tokenSource = resolveTelegramTokenSource(telegram, telegramAccounts);
  const canDisconnect = tokenSource === "config" || hasStoredTelegramToken(props);

  return html`
    <div
      style="margin-top: 12px; padding: 12px; border: 1px solid var(--border); border-radius: 12px; display: grid; gap: 12px;"
    >
      <div class="row" style="justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap;">
        <div>
          <div style="font-weight: 600;">Quick setup</div>
          <div class="muted" style="font-size: 13px;">
            Paste a Telegram bot token and connect without editing config files.
          </div>
        </div>
        <span class="chip ${configured ? "chip-ok" : ""}">${configured ? "Connected" : "Not connected"}</span>
      </div>

      <label class="field">
        <span>Bot token</span>
        <input
          type="password"
          .value=${props.telegramSetupToken}
          @input=${(e: Event) => props.onTelegramTokenInput((e.target as HTMLInputElement).value)}
          placeholder="123456:ABCDEF..."
          autocomplete="off"
          ?disabled=${busy}
        />
      </label>

      <div class="row" style="gap: 8px; flex-wrap: wrap; align-items: center;">
        <button
          class="btn primary"
          ?disabled=${busy || !props.connected}
          @click=${() => props.onTelegramConnect()}
        >
          ${busy ? "Saving..." : "Connect Telegram"}
        </button>
        ${canDisconnect
          ? html`
              <button
                class="btn"
                ?disabled=${busy || !props.connected}
                @click=${() => props.onTelegramDisconnect()}
              >
                Disconnect
              </button>
            `
          : nothing}
        ${tokenSource && tokenSource !== "config"
          ? html`<div class="muted" style="font-size: 12px;">Current token source: ${tokenSource}</div>`
          : nothing}
      </div>

      ${props.telegramSetupMessage
        ? html`
            <div class="callout ${props.telegramSetupMessage.kind === "error" ? "danger" : "success"}">
              ${props.telegramSetupMessage.text}
            </div>
          `
        : nothing}
    </div>
  `;
}

function renderTelegramPendingApprovals(props: ChannelsProps) {
  const approvals = props.telegramPendingApprovals;

  return html`
    <div
      style="margin-top: 12px; padding: 12px; border: 1px solid var(--border); border-radius: 12px; display: grid; gap: 12px;"
    >
      <div class="row" style="justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap;">
        <div>
          <div style="font-weight: 600;">Pending approvals</div>
          <div class="muted" style="font-size: 13px;">
            Approve or reject new Telegram users without using the terminal.
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${props.telegramApprovalsLoading || !props.connected || Boolean(props.telegramApprovalsBusyCode)}
          @click=${() => props.onTelegramApprovalsRefresh()}
        >
          ${props.telegramApprovalsLoading ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      ${props.telegramApprovalsMessage
        ? html`
            <div class="callout ${props.telegramApprovalsMessage.kind === "error" ? "danger" : "success"}">
              ${props.telegramApprovalsMessage.text}
            </div>
          `
        : nothing}

      ${props.telegramApprovalsLoading && approvals.length === 0
        ? html`<div class="muted" style="font-size: 13px;">Loading pending approvals...</div>`
        : approvals.length === 0
          ? html`<div class="muted" style="font-size: 13px;">No pending approvals.</div>`
          : html`
              <div style="display: grid; gap: 8px;">
                ${approvals.map((approval) => {
                  const busy = props.telegramApprovalsBusyCode === approval.code;
                  return html`
                    <div
                      style="padding: 12px; border: 1px solid var(--border); border-radius: 10px; display: grid; gap: 10px;"
                    >
                      <div style="display: grid; gap: 4px;">
                        <div style="font-weight: 600;">Telegram user ID ${approval.userId}</div>
                        <div class="muted" style="font-size: 12px;">Pairing code ${approval.code}</div>
                        <div class="muted" style="font-size: 12px;">
                          Requested ${formatRelativeTimestamp(approval.createdAt)}
                        </div>
                      </div>
                      <div class="row" style="gap: 8px; flex-wrap: wrap; align-items: center;">
                        <button
                          class="btn"
                          style="background: var(--success, #15803d); border-color: var(--success, #15803d); color: white;"
                          ?disabled=${busy || !props.connected}
                          @click=${() => props.onTelegramApprove(approval.code)}
                        >
                          ${busy ? "Working..." : "Approve"}
                        </button>
                        <button
                          class="btn"
                          ?disabled=${busy || !props.connected}
                          @click=${() => props.onTelegramReject(approval.code)}
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  `;
                })}
              </div>
            `}
    </div>
  `;
}

export function renderTelegramCard(params: {
  props: ChannelsProps;
  telegram?: TelegramStatus;
  telegramAccounts: ChannelAccountSnapshot[];
  accountCountLabel: unknown;
}) {
  const { props, telegram, telegramAccounts, accountCountLabel } = params;
  const hasMultipleAccounts = telegramAccounts.length > 1;
  const configured = resolveChannelConfigured("telegram", props);
  const setupSection = renderTelegramSetupSection(props, telegram, telegramAccounts);
  const pendingApprovalsSection = renderTelegramPendingApprovals(props);

  const renderAccountCard = (account: ChannelAccountSnapshot) => {
    const probe = account.probe as { bot?: { username?: string } } | undefined;
    const botUsername = probe?.bot?.username;
    const label = account.name || account.accountId;
    return html`
      <div class="account-card">
        <div class="account-card-header">
          <div class="account-card-title">${botUsername ? `@${botUsername}` : label}</div>
          <div class="account-card-id">${account.accountId}</div>
        </div>
        <div class="status-list account-card-status">
          <div>
            <span class="label">Running</span>
            <span>${account.running ? "Yes" : "No"}</span>
          </div>
          <div>
            <span class="label">Configured</span>
            <span>${account.configured ? "Yes" : "No"}</span>
          </div>
          <div>
            <span class="label">Last inbound</span>
            <span
              >${account.lastInboundAt
                ? formatRelativeTimestamp(account.lastInboundAt)
                : "n/a"}</span
            >
          </div>
          ${account.lastError
            ? html` <div class="account-card-error">${account.lastError}</div> `
            : nothing}
        </div>
      </div>
    `;
  };

  if (hasMultipleAccounts) {
    return html`
      <div class="card">
        <div class="card-title">Telegram</div>
        <div class="card-sub">Bot status and channel configuration.</div>
        ${accountCountLabel}

        <div class="account-card-list">
          ${telegramAccounts.map((account) => renderAccountCard(account))}
        </div>

        ${telegram?.lastError
          ? html`<div class="callout danger" style="margin-top: 12px;">${telegram.lastError}</div>`
          : nothing}
        ${telegram?.probe
          ? html`<div class="callout" style="margin-top: 12px;">
              Probe ${telegram.probe.ok ? "ok" : "failed"} · ${telegram.probe.status ?? ""}
              ${telegram.probe.error ?? ""}
            </div>`
          : nothing}
        ${setupSection}
        ${pendingApprovalsSection}
        ${renderChannelConfigSection({ channelId: "telegram", props })}

        <div class="row" style="margin-top: 12px;">
          <button class="btn" @click=${() => props.onRefresh(true)}>Probe</button>
        </div>
      </div>
    `;
  }

  return renderSingleAccountChannelCard({
    title: "Telegram",
    subtitle: "Bot status and channel configuration.",
    accountCountLabel,
    statusRows: [
      { label: "Configured", value: formatNullableBoolean(configured) },
      { label: "Running", value: telegram?.running ? "Yes" : "No" },
      { label: "Mode", value: telegram?.mode ?? "n/a" },
      {
        label: "Last start",
        value: telegram?.lastStartAt ? formatRelativeTimestamp(telegram.lastStartAt) : "n/a",
      },
      {
        label: "Last probe",
        value: telegram?.lastProbeAt ? formatRelativeTimestamp(telegram.lastProbeAt) : "n/a",
      },
    ],
    lastError: telegram?.lastError,
    secondaryCallout: telegram?.probe
      ? html`<div class="callout" style="margin-top: 12px;">
          Probe ${telegram.probe.ok ? "ok" : "failed"} · ${telegram.probe.status ?? ""}
          ${telegram.probe.error ?? ""}
        </div>`
      : nothing,
    extraContent: html`${setupSection}${pendingApprovalsSection}`,
    configSection: renderChannelConfigSection({ channelId: "telegram", props }),
    footer: html`<div class="row" style="margin-top: 12px;">
      <button class="btn" @click=${() => props.onRefresh(true)}>Probe</button>
    </div>`,
  });
}