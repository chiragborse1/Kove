import { html, nothing } from "lit";
import { formatRelativeTimestamp } from "../format.ts";
import type { WhatsAppStatus } from "../types.ts";
import { renderChannelConfigSection } from "./channels.config.ts";
import type { ChannelsProps } from "./channels.types.ts";

function resolveWhatsAppIdentity(whatsapp?: WhatsAppStatus) {
  return whatsapp?.self?.e164?.trim() || whatsapp?.self?.jid?.trim() || null;
}

function resolveMessageText(message: string | null): string | null {
  const trimmed = message?.trim();
  return trimmed ? trimmed : null;
}

function isAlreadyLinkedMessage(message: string | null): boolean {
  return /already linked/i.test(message ?? "");
}

export function renderWhatsAppCard(params: {
  props: ChannelsProps;
  whatsapp?: WhatsAppStatus;
  accountCountLabel: unknown;
}) {
  const { props, whatsapp, accountCountLabel } = params;
  const phoneNumber = resolveWhatsAppIdentity(whatsapp);
  const connected = whatsapp?.connected === true || props.whatsappConnected === true;
  const linked = Boolean(whatsapp?.linked || phoneNumber);
  const staleLinked = !connected && linked;
  const hasQr = Boolean(props.whatsappQrDataUrl);
  const setupMessage = resolveMessageText(props.whatsappMessage);
  const showClearRelink = staleLinked && isAlreadyLinkedMessage(setupMessage);
  const showRelink = staleLinked && !showClearRelink;

  return html`
    <div class="card">
      <div class="row" style="justify-content: space-between; align-items: flex-start; gap: 12px;">
        <div>
          <div class="card-title">WhatsApp</div>
          <div class="card-sub">
            ${connected
              ? "WhatsApp is linked and ready for messages."
              : "Link WhatsApp Web from the Channels page with a QR code."}
          </div>
        </div>
        <span class="pill pill--sm ${connected ? "pill--ok" : ""}">
          ${connected ? "Connected" : "Not connected"}
        </span>
      </div>

      ${accountCountLabel}

      ${connected
        ? html`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">Phone</span>
                <span>${phoneNumber ?? "n/a"}</span>
              </div>
              <div>
                <span class="label">Linked</span>
                <span>${whatsapp?.linked ? "Yes" : "No"}</span>
              </div>
              <div>
                <span class="label">Running</span>
                <span>${whatsapp?.running ? "Yes" : "No"}</span>
              </div>
              <div>
                <span class="label">Last connect</span>
                <span>
                  ${whatsapp?.lastConnectedAt
                    ? formatRelativeTimestamp(whatsapp.lastConnectedAt)
                    : "n/a"}
                </span>
              </div>
              <div>
                <span class="label">Last message</span>
                <span>
                  ${whatsapp?.lastMessageAt ? formatRelativeTimestamp(whatsapp.lastMessageAt) : "n/a"}
                </span>
              </div>
            </div>
          `
        : staleLinked
          ? html`
              <div class="callout" style="margin-top: 14px;">
                Stored WhatsApp credentials were found for ${phoneNumber ?? "this account"}, but the
                gateway is not currently connected. Clear the stale session and relink to generate a
                fresh QR.
              </div>
              ${setupMessage
                ? html`<div class="callout" style="margin-top: 12px;">${setupMessage}</div>`
                : nothing}
              <div class="status-list" style="margin-top: 16px;">
                <div>
                  <span class="label">Stored identity</span>
                  <span>${phoneNumber ?? "n/a"}</span>
                </div>
                <div>
                  <span class="label">Linked</span>
                  <span>${whatsapp?.linked ? "Yes" : "No"}</span>
                </div>
                <div>
                  <span class="label">Running</span>
                  <span>${whatsapp?.running ? "Yes" : "No"}</span>
                </div>
                <div>
                  <span class="label">Last connect</span>
                  <span>
                    ${whatsapp?.lastConnectedAt
                      ? formatRelativeTimestamp(whatsapp.lastConnectedAt)
                      : "n/a"}
                  </span>
                </div>
              </div>
            `
        : html`
            <div class="callout" style="margin-top: 14px;">
              Open WhatsApp -> Linked Devices -> Scan QR.
            </div>
            ${setupMessage
              ? html`<div class="callout" style="margin-top: 12px;">${setupMessage}</div>`
              : nothing}
            ${hasQr
              ? html`
                  <div class="qr-wrap">
                    <img src=${props.whatsappQrDataUrl ?? ""} alt="WhatsApp QR" />
                  </div>
                  <div class="muted" style="margin-top: 8px;">
                    QR refreshes automatically every 30 seconds until WhatsApp connects.
                  </div>
                `
              : html`
                  <div class="muted" style="margin-top: 12px;">
                    Start a WhatsApp login to generate a QR code.
                  </div>
                `}
          `}

      ${whatsapp?.lastError
        ? html`<div class="callout danger" style="margin-top: 12px;">${whatsapp.lastError}</div>`
        : nothing}

      ${renderChannelConfigSection({ channelId: "whatsapp", props })}

      <div class="row" style="margin-top: 14px; flex-wrap: wrap;">
        ${showClearRelink
          ? html`
              <button class="btn danger" ?disabled=${props.whatsappBusy} @click=${() => props.onWhatsAppRelink()}>
                ${props.whatsappBusy ? "Working..." : "Clear & Relink"}
              </button>
            `
          : nothing}
        ${showRelink
          ? html`
              <button class="btn primary" ?disabled=${props.whatsappBusy} @click=${() => props.onWhatsAppRelink()}>
                ${props.whatsappBusy ? "Working..." : "Relink"}
              </button>
            `
          : nothing}
        ${connected
          ? html`
              <button class="btn danger" ?disabled=${props.whatsappBusy} @click=${() => props.onWhatsAppLogout()}>
                ${props.whatsappBusy ? "Working..." : "Disconnect"}
              </button>
            `
          : !staleLinked
            ? html`
                <button
                  class="btn primary"
                  ?disabled=${props.whatsappBusy}
                  @click=${() => props.onWhatsAppStart(false)}
                >
                  ${props.whatsappBusy ? "Starting..." : hasQr ? "Refresh QR" : "Connect WhatsApp"}
                </button>
              `
            : nothing}
        <button class="btn" ?disabled=${props.loading || props.whatsappBusy} @click=${() => props.onRefresh(true)}>
          Refresh
        </button>
      </div>
    </div>
  `;
}
