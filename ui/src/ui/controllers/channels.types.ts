import type { ChannelsStatusSnapshot } from "../types.ts";
import type { ConfigState } from "./config.ts";

export type TelegramSetupMessage = {
  kind: "success" | "error";
  text: string;
};

export type TelegramPendingApproval = {
  userId: string;
  code: string;
  createdAt: number;
  lastSeenAt: number;
};

export type ChannelsState = ConfigState & {
  channelsLoading: boolean;
  channelsSnapshot: ChannelsStatusSnapshot | null;
  channelsError: string | null;
  channelsLastSuccess: number | null;
  whatsappLoginMessage: string | null;
  whatsappLoginQrDataUrl: string | null;
  whatsappLoginConnected: boolean | null;
  whatsappBusy: boolean;
  telegramSetupToken: string;
  telegramSetupBusy: boolean;
  telegramSetupMessage: TelegramSetupMessage | null;
  telegramApprovalsLoading: boolean;
  telegramApprovalsBusyCode: string | null;
  telegramApprovalsMessage: TelegramSetupMessage | null;
  telegramPendingApprovals: TelegramPendingApproval[];
};
