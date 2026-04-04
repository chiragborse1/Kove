import type { ChannelsStatusSnapshot, CronJob } from "../types.ts";

export type BriefingChannelId = "telegram" | "whatsapp";
export type BriefingSectionId = "news" | "weather" | "markets" | "tasks" | "quote";
export type BriefingMessage = {
  kind: "success" | "error";
  text: string;
};
export type BriefingSections = Record<BriefingSectionId, boolean>;
export type BriefingFormState = {
  enabled: boolean;
  time: string;
  channel: BriefingChannelId | "";
  sections: BriefingSections;
};

export const DAILY_BRIEFING_JOB_NAME = "kova-daily-briefing";
export const DAILY_BRIEFING_CITY = "Mumbai";
export const DEFAULT_BRIEFING_TIME = "08:00";

const DEFAULT_BRIEFING_SECTIONS: BriefingSections = {
  news: true,
  weather: true,
  markets: true,
  tasks: false,
  quote: false,
};

function readChannelStatus<T>(snapshot: ChannelsStatusSnapshot | null, channelId: string): T | null {
  const channel = snapshot?.channels?.[channelId];
  if (!channel || typeof channel !== "object" || Array.isArray(channel)) {
    return null;
  }
  return channel as T;
}

function parseBriefingMetadata(description: string | undefined): Partial<BriefingFormState> | null {
  if (!description) {
    return null;
  }
  const match = description.match(/\[briefing:([^\]]+)\]/i);
  if (!match) {
    return null;
  }
  const params = new URLSearchParams(match[1].replaceAll(";", "&"));
  const channel = params.get("channel");
  const time = params.get("time");
  const sectionsRaw = params.get("sections");
  const sections = createDefaultBriefingSections();
  let sectionMatched = false;
  if (sectionsRaw) {
    for (const entry of sectionsRaw.split(",")) {
      const key = entry.trim().toLowerCase() as BriefingSectionId;
      if (key in sections) {
        sections[key] = true;
        sectionMatched = true;
      }
    }
    if (sectionMatched) {
      for (const key of Object.keys(sections) as BriefingSectionId[]) {
        sections[key] = false;
      }
      for (const entry of sectionsRaw.split(",")) {
        const key = entry.trim().toLowerCase() as BriefingSectionId;
        if (key in sections) {
          sections[key] = true;
        }
      }
    }
  }
  return {
    channel: channel === "telegram" || channel === "whatsapp" ? channel : "",
    time: isValidBriefingTime(time) ? time : undefined,
    sections: sectionMatched ? sections : undefined,
  };
}

function parseSectionsFromPrompt(message: string | undefined): BriefingSections {
  const normalized = message?.toLowerCase() ?? "";
  const includes: BriefingSections = {
    news: normalized.includes("top 5 news") || normalized.includes("top news"),
    weather: normalized.includes("weather"),
    markets: normalized.includes("nifty50") || normalized.includes("sensex") || normalized.includes("bitcoin"),
    tasks: normalized.includes("heartbeat.md") || normalized.includes("pending tasks"),
    quote: normalized.includes("motivational quote") || normalized.includes("quote of the day"),
  };
  if (Object.values(includes).some(Boolean)) {
    return includes;
  }
  return createDefaultBriefingSections();
}

export function createDefaultBriefingSections(): BriefingSections {
  return { ...DEFAULT_BRIEFING_SECTIONS };
}

export function createDefaultBriefingForm(): BriefingFormState {
  return {
    enabled: true,
    time: DEFAULT_BRIEFING_TIME,
    channel: "",
    sections: createDefaultBriefingSections(),
  };
}

export function findDailyBriefingJob(jobs: CronJob[]): CronJob | null {
  return jobs.find((job) => job.name === DAILY_BRIEFING_JOB_NAME) ?? null;
}

export function getLocalBriefingTimeZone(): string {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone?.trim();
  return timeZone || "UTC";
}

export function resolveBriefingConnectedChannels(
  snapshot: ChannelsStatusSnapshot | null,
  whatsappConnected: boolean | null = null,
): BriefingChannelId[] {
  const available: BriefingChannelId[] = [];
  const telegram = readChannelStatus<{ running?: boolean | null }>(snapshot, "telegram");
  const telegramConnected =
    telegram?.running === true ||
    (snapshot?.channelAccounts?.telegram ?? []).some((account) => account.running === true);
  if (telegramConnected) {
    available.push("telegram");
  }
  const whatsapp = readChannelStatus<{ connected?: boolean | null }>(snapshot, "whatsapp");
  const whatsappIsConnected =
    whatsapp?.connected === true ||
    whatsappConnected === true ||
    (snapshot?.channelAccounts?.whatsapp ?? []).some((account) => account.connected === true);
  if (whatsappIsConnected) {
    available.push("whatsapp");
  }
  return available;
}

export function formatBriefingChannelLabel(channel: BriefingChannelId | ""): string {
  return channel === "whatsapp" ? "WhatsApp" : channel === "telegram" ? "Telegram" : "channel";
}

export function hydrateBriefingForm(
  job: CronJob | null,
  availableChannels: BriefingChannelId[],
): BriefingFormState {
  const defaults = createDefaultBriefingForm();
  defaults.channel = availableChannels[0] ?? "";
  if (!job) {
    return defaults;
  }
  const metadata = parseBriefingMetadata(job.description);
  const savedChannel =
    metadata?.channel ??
    (job.delivery?.channel === "telegram" || job.delivery?.channel === "whatsapp"
      ? job.delivery.channel
      : "");
  return {
    enabled: job.enabled,
    time:
      metadata?.time ??
      (job.schedule.kind === "cron" ? parseDailyTimeFromCron(job.schedule.expr) : null) ??
      DEFAULT_BRIEFING_TIME,
    channel: availableChannels.includes(savedChannel) ? savedChannel : (availableChannels[0] ?? ""),
    sections:
      metadata?.sections ??
      (job.payload.kind === "agentTurn"
        ? parseSectionsFromPrompt(job.payload.message)
        : createDefaultBriefingSections()),
  };
}

function parseDailyTimeFromCron(expr: string): string | null {
  const parts = expr.trim().split(/\s+/);
  if (parts.length < 5) {
    return null;
  }
  const [minute, hour, dayOfMonth, month, dayOfWeek] = parts;
  if (dayOfMonth !== "*" || month !== "*" || dayOfWeek !== "*") {
    return null;
  }
  const minuteValue = Number.parseInt(minute, 10);
  const hourValue = Number.parseInt(hour, 10);
  if (!Number.isInteger(minuteValue) || !Number.isInteger(hourValue)) {
    return null;
  }
  if (hourValue < 0 || hourValue > 23 || minuteValue < 0 || minuteValue > 59) {
    return null;
  }
  return `${String(hourValue).padStart(2, "0")}:${String(minuteValue).padStart(2, "0")}`;
}

export function isValidBriefingTime(value: string | null | undefined): value is string {
  return typeof value === "string" && /^\d{2}:\d{2}$/.test(value);
}

export function buildDailyBriefingCronExpr(time: string): string {
  if (!isValidBriefingTime(time)) {
    return "0 8 * * *";
  }
  const [hourRaw, minuteRaw] = time.split(":");
  const hour = Number.parseInt(hourRaw, 10);
  const minute = Number.parseInt(minuteRaw, 10);
  if (!Number.isInteger(hour) || !Number.isInteger(minute)) {
    return "0 8 * * *";
  }
  return `${minute} ${hour} * * *`;
}

export function buildBriefingDescription(form: BriefingFormState, timezone: string): string {
  const selectedSections = (
    Object.entries(form.sections) as Array<[BriefingSectionId, boolean]>
  )
    .filter(([, enabled]) => enabled)
    .map(([section]) => section)
    .join(",");
  return `Daily morning briefing to ${formatBriefingChannelLabel(form.channel)}. [briefing:channel=${form.channel};time=${form.time};tz=${timezone};sections=${selectedSections};city=${DAILY_BRIEFING_CITY}]`;
}

export function buildBriefingPrompt(form: BriefingFormState, timezone: string): string {
  const tasks: string[] = [];
  if (form.sections.news) {
    tasks.push("1. Top News: Find today's top 5 news headlines relevant to the user's interests and summarize each in one line.");
  }
  if (form.sections.weather) {
    tasks.push(
      `2. Weather: Give today's weather forecast for ${DAILY_BRIEFING_CITY}. Include temperature and conditions in one concise line.`,
    );
  }
  if (form.sections.markets) {
    tasks.push(
      "3. Markets: Give today's opening prices for Nifty50, Sensex, and Bitcoin in one line each.",
    );
  }
  if (form.sections.tasks) {
    tasks.push("4. Tasks Reminder: Check HEARTBEAT.md and list any pending tasks.");
  }
  if (form.sections.quote) {
    tasks.push("5. Quote of the Day: Give one short motivational quote for today.");
  }
  return [
    `Prepare a daily briefing message for ${formatBriefingChannelLabel(form.channel)} delivery.`,
    `The user's local timezone is ${timezone}, and the user is based in ${DAILY_BRIEFING_CITY}.`,
    'Start with "☀️ Good morning! Here\'s your Kova briefing for [date]" and end with "— Sent by your Kova team".',
    "Use section headers with emojis and keep the message concise, readable, and phone-friendly.",
    "Return only the final briefing message text with no extra commentary.",
    "Include only these sections:",
    ...tasks,
  ].join("\n");
}
