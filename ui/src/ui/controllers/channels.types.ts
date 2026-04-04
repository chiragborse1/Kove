import type { GatewayBrowserClient } from "../gateway.ts";
import type { ChannelsStatusSnapshot, ConfigSnapshot } from "../types.ts";

export type TelegramSetupMessage = {
  kind: "success" | "error";
  text: string;
};

export type TelegramPendingApproval = {
  userId: string;
  code: string;
  createdAt: string;
  lastSeenAt: string;
};

export type ChannelsState = {
  client: GatewayBrowserClient | null;
  connected: boolean;
  channelsLoading: boolean;
  channelsSnapshot: ChannelsStatusSnapshot | null;
  channelsError: string | null;
  channelsLastSuccess: number | null;
  whatsappLoginMessage: string | null;
  whatsappLoginQrDataUrl: string | null;
  whatsappLoginConnected: boolean | null;
  whatsappBusy: boolean;
  configSnapshot: ConfigSnapshot | null;
  configForm: Record<string, unknown> | null;
  telegramSetupToken: string;
  telegramSetupBusy: boolean;
  telegramSetupMessage: TelegramSetupMessage | null;
  telegramApprovalsLoading: boolean;
  telegramApprovalsBusyCode: string | null;
  telegramApprovalsMessage: TelegramSetupMessage | null;
  telegramPendingApprovals: TelegramPendingApproval[];
};
