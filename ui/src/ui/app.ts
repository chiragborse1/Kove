import { LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { resolveAgentIdFromSessionKey } from "../../../src/routing/session-key.js";
import { i18n, I18nController, isSupportedLocale } from "../i18n/index.ts";
import { getSafeLocalStorage } from "../local-storage.ts";
import {
  handleChannelConfigReload as handleChannelConfigReloadInternal,
  handleChannelConfigSave as handleChannelConfigSaveInternal,
  handleNostrProfileCancel as handleNostrProfileCancelInternal,
  handleNostrProfileEdit as handleNostrProfileEditInternal,
  handleNostrProfileFieldChange as handleNostrProfileFieldChangeInternal,
  handleNostrProfileImport as handleNostrProfileImportInternal,
  handleNostrProfileSave as handleNostrProfileSaveInternal,
  handleNostrProfileToggleAdvanced as handleNostrProfileToggleAdvancedInternal,
  handleWhatsAppLogout as handleWhatsAppLogoutInternal,
  handleWhatsAppRelink as handleWhatsAppRelinkInternal,
  handleWhatsAppStart as handleWhatsAppStartInternal,
  handleWhatsAppWait as handleWhatsAppWaitInternal,
} from "./app-channels.ts";
import {
  handleAbortChat as handleAbortChatInternal,
  handleSendChat as handleSendChatInternal,
  removeQueuedMessage as removeQueuedMessageInternal,
} from "./app-chat.ts";
import { DEFAULT_CRON_FORM, DEFAULT_LOG_LEVEL_FILTERS } from "./app-defaults.ts";
import type { EventLogEntry } from "./app-events.ts";
import { connectGateway as connectGatewayInternal } from "./app-gateway.ts";
import {
  handleConnected,
  handleDisconnected,
  handleFirstUpdated,
  handleUpdated,
} from "./app-lifecycle.ts";
import { renderApp } from "./app-render.ts";
import {
  exportLogs as exportLogsInternal,
  handleChatScroll as handleChatScrollInternal,
  handleLogsScroll as handleLogsScrollInternal,
  resetChatScroll as resetChatScrollInternal,
  scheduleChatScroll as scheduleChatScrollInternal,
} from "./app-scroll.ts";
import {
  applySettings as applySettingsInternal,
  loadCron as loadCronInternal,
  loadOverview as loadOverviewInternal,
  setTab as setTabInternal,
  setTheme as setThemeInternal,
  setThemeMode as setThemeModeInternal,
  onPopState as onPopStateInternal,
} from "./app-settings.ts";
import {
  resetToolStream as resetToolStreamInternal,
  type ToolStreamEntry,
  type CompactionStatus,
  type FallbackStatus,
} from "./app-tool-stream.ts";
import type { AppViewState } from "./app-view-state.ts";
import { normalizeAssistantIdentity } from "./assistant-identity.ts";
import { exportChatMarkdown } from "./chat/export.ts";
import { extractText } from "./chat/message-extract.ts";
import {
  loadAgents,
  loadToolsEffective as loadToolsEffectiveInternal,
  refreshVisibleToolsEffectiveForCurrentSession as refreshVisibleToolsEffectiveForCurrentSessionInternal,
} from "./controllers/agents.ts";
import { loadAssistantIdentity as loadAssistantIdentityInternal } from "./controllers/assistant-identity.ts";
import { loadAgentSoulContents } from "./controllers/agent-soul.ts";
import {
  createApiKeyInputRecord,
  createApiKeyMessageRecord,
  createApiKeyStatusRecord,
  loadElevenLabsApiKey,
  type ApiKeyMessage,
  type ApiKeyProviderId,
  type ApiKeyProviderStatus,
} from "./controllers/api-keys.ts";
import {
  buildBriefingDescription,
  buildBriefingPrompt,
  buildDailyBriefingCronExpr,
  createDefaultBriefingForm,
  DAILY_BRIEFING_JOB_NAME,
  findDailyBriefingJob,
  formatBriefingChannelLabel,
  getLocalBriefingTimeZone,
  hydrateBriefingForm,
  resolveBriefingConnectedChannels,
  type BriefingChannelId,
  type BriefingMessage,
} from "./controllers/briefing.ts";
import type { TelegramPendingApproval, TelegramSetupMessage } from "./controllers/channels.types.ts";
import { loadChannels } from "./controllers/channels.ts";
import { loadConfig } from "./controllers/config.ts";
import type { DevicePairingList } from "./controllers/devices.ts";
import type { ExecApprovalRequest } from "./controllers/exec-approval.ts";
import type { ExecApprovalsFile, ExecApprovalsSnapshot } from "./controllers/exec-approvals.ts";
import type { EmployeesDashboardResult, KovaEmployeeId } from "./controllers/employees.ts";
import {
  loadInbox as loadInboxInternal,
  type InboxChannelFilter,
} from "./controllers/inbox.ts";
import {
  buildMeetingAnalysisPrompt,
  clearMeetingHistoryStorage,
  loadMeetingHistoryFromStorage,
  MEETING_ANALYSIS_AGENT_ID,
  parseMeetingAnalysisResponse,
  readMeetingTranscriptFile,
  resolveLatestMeetingTelegramTarget,
  upsertMeetingHistory,
  type MeetingAnalysisResult,
} from "./controllers/meetings.ts";
import {
  hydrateRoutingAssignments,
  serializeRoutingConfig,
  type RoutingAssignments,
  type RoutingChannelId,
  type RoutingMessage,
} from "./controllers/routing.ts";
import type { KovaMarketplaceCategory, KovaMarketplaceSkill, SkillMessage } from "./controllers/skills.ts";
import type { GatewayBrowserClient, GatewayHelloOk } from "./gateway.ts";
import type { Tab } from "./navigation.ts";
import { loadSettings, type UiSettings } from "./storage.ts";
import { VALID_THEME_NAMES, type ResolvedTheme, type ThemeMode, type ThemeName } from "./theme.ts";
import type {
  AgentCreatorDraft,
  AgentIdentityResult,
  AgentsCreateResult,
  AgentsFilesListResult,
  AgentsFilesSetResult,
  AgentsListResult,
  AgentsUpdateResult,
  ConfigSnapshot,
  ConfigUiHints,
  GatewaySessionRow,
  ChatModelOverride,
  CronJob,
  CronRunLogEntry,
  CronStatus,
  HealthSummary,
  LogEntry,
  LogLevel,
  ModelCatalogEntry,
  PresenceEntry,
  ChannelsStatusSnapshot,
  SessionsListResult,
  SkillStatusReport,
  StatusSummary,
  NostrProfile,
  ToolsCatalogResult,
  ToolsEffectiveResult,
} from "./types.ts";
import { type ChatAttachment, type ChatQueueItem, type CronFormState } from "./ui-types.ts";
import { generateUUID } from "./uuid.ts";
import type { NostrProfileFormState } from "./views/channels.nostr-profile-form.ts";
import {
  buildCanvasUrl,
  ensureCanvasAuthWorker,
  probeCanvasUrl,
  resolveCanvasAuthToken,
  resolveCanvasBaseUrl,
} from "./controllers/canvas.ts";
import {
  getCachedElevenLabsApiKey,
  isKovaEmployeeVoiceAgent,
  isVoicePlaybackInterrupted,
  speakText as speakElevenLabsText,
  stopSpeaking as stopElevenLabsPlayback,
} from "./voice/elevenlabs.ts";

declare global {
  interface Window {
    __OPENCLAW_CONTROL_UI_BASE_PATH__?: string;
  }
}

const bootAssistantIdentity = normalizeAssistantIdentity({});

const DEFAULT_EMPLOYEE_MODEL = "openrouter/auto";
const MEETING_ANALYSIS_SESSION_KEY = `agent:${MEETING_ANALYSIS_AGENT_ID}:meetings`;
const DEFAULT_AGENT_CREATOR_DRAFT: AgentCreatorDraft = {
  name: "",
  role: "",
  emoji: "\u{1F469}\u200D\u{1F4BC}",
  autonomy: "Supervised",
  personality: "",
  focus: "",
  instructions: "",
};

function autonomyToSoulMarker(autonomy: AgentCreatorDraft["autonomy"]): 1 | 2 | 3 {
  switch (autonomy) {
    case "Supervised":
      return 1;
    case "Autonomous":
      return 3;
    default:
      return 2;
  }
}

function trimAgentCreatorDraft(draft: AgentCreatorDraft): AgentCreatorDraft {
  return {
    ...draft,
    name: draft.name.trim(),
    role: draft.role.trim(),
    personality: draft.personality.trim(),
    focus: draft.focus.trim(),
    instructions: draft.instructions.trim(),
  };
}

function buildEmployeeAgentId(name: string): string {
  return `kova-${name.toLowerCase().replace(/\s+/g, "-")}`;
}

function resolveAgentWorkspaceBaseDir(agentsList: AgentsListResult | null): string {
  const agents = agentsList?.agents ?? [];
  for (const agent of agents) {
    const workspace = typeof agent.workspace === "string" ? agent.workspace.trim() : "";
    const suffix = `workspace-${agent.id}`;
    if (workspace && workspace.endsWith(suffix)) {
      return workspace.slice(0, -suffix.length);
    }
  }

  const mainWorkspace = agents.find((agent) => agent.id === "main")?.workspace?.trim();
  if (mainWorkspace) {
    const trimmed = mainWorkspace.replace(/[\\/]+$/g, "");
    const lastSlash = Math.max(trimmed.lastIndexOf("/"), trimmed.lastIndexOf("\\"));
    if (lastSlash >= 0) {
      return trimmed.slice(0, lastSlash + 1);
    }
  }

  return "~/.openclaw/";
}

function resolveEmployeeWorkspacePath(agentsList: AgentsListResult | null, agentId: string): string {
  return `${resolveAgentWorkspaceBaseDir(agentsList)}workspace-${agentId}`;
}

function buildEmployeeSoul(draft: AgentCreatorDraft): string {
  const normalized = trimAgentCreatorDraft(draft);
  return [
    "---",
    "kova: true",
    `name: ${JSON.stringify(normalized.name)}`,
    `role: ${JSON.stringify(normalized.role)}`,
    `autonomy: ${autonomyToSoulMarker(normalized.autonomy)}`,
    `emoji: ${JSON.stringify(normalized.emoji)}`,
    "---",
    "",
    `# ${normalized.emoji} ${normalized.name} \u2014 ${normalized.role}`,
    "",
    "## Identity",
    `You are ${normalized.name}, Kova's ${normalized.role}.`,
    "",
    "## Personality",
    normalized.personality,
    "",
    "## Focus",
    normalized.focus,
    "",
    "## Instructions",
    normalized.instructions,
    "",
    "## Autonomy",
    `Level: ${normalized.autonomy}`,
  ].join("\n");
}

function formatAgentCreatorError(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

function formatMeetingError(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

function extractAssistantTextFromMessage(message: unknown): string {
  const text = extractText(message);
  return typeof text === "string" ? text.trim() : "";
}

function resolveLatestAssistantMessageInfo(
  messages: readonly unknown[],
): { signature: string; text: string } | null {
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    const message = messages[index] as Record<string, unknown> | undefined;
    if (!message || message.role !== "assistant") {
      continue;
    }
    const text = extractAssistantTextFromMessage(message);
    if (!text) {
      continue;
    }
    const id =
      typeof message.id === "string"
        ? message.id
        : typeof message.messageId === "string"
          ? message.messageId
          : typeof message.timestamp === "number"
            ? String(message.timestamp)
            : `assistant-${index}`;
    return {
      signature: `${id}:${text}`,
      text,
    };
  }
  return null;
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function resolveMeetingHistoryEntry(
  history: MeetingAnalysisResult[],
  id: string,
): MeetingAnalysisResult | null {
  return history.find((entry) => entry.id === id) ?? null;
}

function createMeetingResult(params: {
  id: string;
  title: string;
  transcript: string;
  sourceName: string | null;
  rawResponse: string;
}): MeetingAnalysisResult {
  const parsed = parseMeetingAnalysisResponse(params.rawResponse);
  return {
    id: params.id,
    title: params.title.trim(),
    transcript: params.transcript.trim(),
    sourceName: params.sourceName,
    createdAt: Date.now(),
    summary: parsed.summary,
    actionItems: parsed.actionItems,
    decisions: parsed.decisions,
    followUpEmail: parsed.followUpEmail,
    rawResponse: parsed.rawResponse,
  };
}

function resolveOnboardingMode(): boolean {
  if (!window.location.search) {
    return false;
  }
  const params = new URLSearchParams(window.location.search);
  const raw = params.get("onboarding");
  if (!raw) {
    return false;
  }
  const normalized = raw.trim().toLowerCase();
  return normalized === "1" || normalized === "true" || normalized === "yes" || normalized === "on";
}

@customElement("openclaw-app")
export class OpenClawApp extends LitElement {
  private i18nController = new I18nController(this);
  private voiceSeenBySession = new Map<string, string>();
  private voicePlaybackGeneration = 0;
  clientInstanceId = generateUUID();
  connectGeneration = 0;
  @state() settings: UiSettings = loadSettings();
  constructor() {
    super();
    if (isSupportedLocale(this.settings.locale)) {
      void i18n.setLocale(this.settings.locale);
    }
  }
  @state() password = "";
  @state() loginShowGatewayToken = false;
  @state() loginShowGatewayPassword = false;
  @state() tab: Tab = "chat";
  @state() onboarding = resolveOnboardingMode();
  @state() onboardingStep: 1 | 2 | 3 = 1;
  @state() onboardingProvider: ApiKeyProviderId = "openrouter";
  @state() onboardingInteracted = false;
  @state() briefingForm = createDefaultBriefingForm();
  @state() briefingDirty = false;
  @state() briefingLoading = false;
  @state() briefingSaving = false;
  @state() briefingMessage: BriefingMessage | null = null;
  @state() connected = false;
  @state() theme: ThemeName = this.settings.theme ?? "claw";
  @state() themeMode: ThemeMode = this.settings.themeMode ?? "system";
  @state() themeResolved: ResolvedTheme = "dark";
  @state() themeOrder: ThemeName[] = this.buildThemeOrder(this.theme);
  @state() hello: GatewayHelloOk | null = null;
  @state() lastError: string | null = null;
  @state() lastErrorCode: string | null = null;
  @state() eventLog: EventLogEntry[] = [];
  private eventLogBuffer: EventLogEntry[] = [];
  private toolStreamSyncTimer: number | null = null;
  private sidebarCloseTimer: number | null = null;

  @state() assistantName = bootAssistantIdentity.name;
  @state() assistantAvatar = bootAssistantIdentity.avatar;
  @state() assistantAgentId = bootAssistantIdentity.agentId ?? null;
  @state() serverVersion: string | null = null;

  @state() sessionKey = this.settings.sessionKey;
  @state() chatLoading = false;
  @state() chatSending = false;
  @state() chatMessage = "";
  @state() chatMessages: unknown[] = [];
  @state() chatToolMessages: unknown[] = [];
  @state() chatStreamSegments: Array<{ text: string; ts: number }> = [];
  @state() chatStream: string | null = null;
  @state() chatStreamStartedAt: number | null = null;
  @state() chatRunId: string | null = null;
  @state() compactionStatus: CompactionStatus | null = null;
  @state() fallbackStatus: FallbackStatus | null = null;
  @state() chatAvatarUrl: string | null = null;
  @state() chatThinkingLevel: string | null = null;
  @state() chatModelOverrides: Record<string, ChatModelOverride | null> = {};
  @state() chatModelsLoading = false;
  @state() chatModelCatalog: ModelCatalogEntry[] = [];
  @state() chatQueue: ChatQueueItem[] = [];
  @state() chatAttachments: ChatAttachment[] = [];
  @state() chatManualRefreshInFlight = false;
  @state() navDrawerOpen = false;

  onSlashAction?: (action: string) => void;

  // Sidebar state for tool output viewing
  @state() sidebarOpen = false;
  @state() sidebarContent: string | null = null;
  @state() sidebarError: string | null = null;
  @state() splitRatio = this.settings.splitRatio;

  @state() nodesLoading = false;
  @state() nodes: Array<Record<string, unknown>> = [];
  @state() devicesLoading = false;
  @state() devicesError: string | null = null;
  @state() devicesList: DevicePairingList | null = null;
  @state() execApprovalsLoading = false;
  @state() execApprovalsSaving = false;
  @state() execApprovalsDirty = false;
  @state() execApprovalsSnapshot: ExecApprovalsSnapshot | null = null;
  @state() execApprovalsForm: ExecApprovalsFile | null = null;
  @state() execApprovalsSelectedAgent: string | null = null;
  @state() execApprovalsTarget: "gateway" | "node" = "gateway";
  @state() execApprovalsTargetNodeId: string | null = null;
  @state() execApprovalQueue: ExecApprovalRequest[] = [];
  @state() execApprovalBusy = false;
  @state() execApprovalError: string | null = null;
  @state() pendingGatewayUrl: string | null = null;
  pendingGatewayToken: string | null = null;

  @state() configLoading = false;
  @state() configRaw = "{\n}\n";
  @state() configRawOriginal = "";
  @state() configValid: boolean | null = null;
  @state() configIssues: unknown[] = [];
  @state() configSaving = false;
  @state() configApplying = false;
  @state() updateRunning = false;
  @state() applySessionKey = this.settings.lastActiveSessionKey;
  @state() configSnapshot: ConfigSnapshot | null = null;
  @state() configSchema: unknown = null;
  @state() configSchemaVersion: string | null = null;
  @state() configSchemaLoading = false;
  @state() configUiHints: ConfigUiHints = {};
  @state() configForm: Record<string, unknown> | null = null;
  @state() configFormOriginal: Record<string, unknown> | null = null;
  @state() configFormDirty = false;
  @state() configFormMode: "form" | "raw" = "form";
  @state() configSearchQuery = "";
  @state() configActiveSection: string | null = null;
  @state() configActiveSubsection: string | null = null;
  @state() communicationsFormMode: "form" | "raw" = "form";
  @state() communicationsSearchQuery = "";
  @state() communicationsActiveSection: string | null = null;
  @state() communicationsActiveSubsection: string | null = null;
  @state() appearanceFormMode: "form" | "raw" = "form";
  @state() appearanceSearchQuery = "";
  @state() appearanceActiveSection: string | null = null;
  @state() appearanceActiveSubsection: string | null = null;
  @state() automationFormMode: "form" | "raw" = "form";
  @state() automationSearchQuery = "";
  @state() automationActiveSection: string | null = null;
  @state() automationActiveSubsection: string | null = null;
  @state() infrastructureFormMode: "form" | "raw" = "form";
  @state() infrastructureSearchQuery = "";
  @state() infrastructureActiveSection: string | null = null;
  @state() infrastructureActiveSubsection: string | null = null;
  @state() aiAgentsFormMode: "form" | "raw" = "form";
  @state() aiAgentsSearchQuery = "";
  @state() aiAgentsActiveSection: string | null = null;
  @state() aiAgentsActiveSubsection: string | null = null;
  @state() apiKeysLoading = false;
  @state() apiKeysLoaded = false;
  @state() apiKeysSavingProviderId: ApiKeyProviderId | null = null;
  @state() apiKeysTestingProviderId: ApiKeyProviderId | null = null;
  @state() apiKeysModelSaving = false;
  @state() apiKeysCurrentModel = "openrouter/auto";
  @state() apiKeysModelOption = "openrouter/auto";
  @state() apiKeysCustomModelInput = "";
  @state() apiKeysConfigHash: string | null = null;
  @state() apiKeysPageMessage: ApiKeyMessage | null = null;
  @state() apiKeysElevenLabsInput = "";
  @state() apiKeysElevenLabsConfigured = false;
  @state() apiKeysElevenLabsSaving = false;
  @state() apiKeysElevenLabsTesting = false;
  @state() apiKeysElevenLabsConfigHash: string | null = null;
  @state() apiKeysElevenLabsMessage: ApiKeyMessage | null = null;
  @state() apiKeyProviderInputs: Record<ApiKeyProviderId, string> = createApiKeyInputRecord();
  @state() apiKeyProviderStatuses: Record<ApiKeyProviderId, ApiKeyProviderStatus | null> =
    createApiKeyStatusRecord();
  @state() apiKeyProviderMessages: Record<ApiKeyProviderId, ApiKeyMessage | null> =
    createApiKeyMessageRecord();

  @state() channelsLoading = false;
  @state() channelsSnapshot: ChannelsStatusSnapshot | null = null;
  @state() channelsError: string | null = null;
  @state() channelsLastSuccess: number | null = null;
  @state() whatsappLoginMessage: string | null = null;
  @state() whatsappLoginQrDataUrl: string | null = null;
  @state() whatsappLoginConnected: boolean | null = null;
  @state() whatsappBusy = false;
  @state() telegramSetupToken = "";
  @state() telegramSetupBusy = false;
  @state() telegramSetupMessage: TelegramSetupMessage | null = null;
  @state() telegramApprovalsLoading = false;
  @state() telegramApprovalsBusyCode: string | null = null;
  @state() telegramApprovalsMessage: TelegramSetupMessage | null = null;
  @state() telegramPendingApprovals: TelegramPendingApproval[] = [];
  @state() nostrProfileFormState: NostrProfileFormState | null = null;
  @state() nostrProfileAccountId: string | null = null;

  @state() presenceLoading = false;
  @state() presenceEntries: PresenceEntry[] = [];
  @state() presenceError: string | null = null;
  @state() presenceStatus: string | null = null;

  @state() agentsLoading = false;
  @state() agentsList: AgentsListResult | null = null;
  @state() agentsError: string | null = null;
  @state() agentsSelectedId: string | null = null;
  @state() toolsCatalogLoading = false;
  @state() toolsCatalogError: string | null = null;
  @state() toolsCatalogResult: ToolsCatalogResult | null = null;
  @state() toolsEffectiveLoading = false;
  @state() toolsEffectiveLoadingKey: string | null = null;
  @state() toolsEffectiveResultKey: string | null = null;
  @state() toolsEffectiveError: string | null = null;
  @state() toolsEffectiveResult: ToolsEffectiveResult | null = null;
  @state() agentsPanel: "overview" | "files" | "tools" | "skills" | "channels" | "cron" = "files";
  @state() agentFilesLoading = false;
  @state() agentFilesError: string | null = null;
  @state() agentFilesList: AgentsFilesListResult | null = null;
  @state() agentFileContents: Record<string, string> = {};
  @state() agentFileDrafts: Record<string, string> = {};
  @state() agentFileActive: string | null = null;
  @state() agentFileSaving = false;
  @state() agentIdentityLoading = false;
  @state() agentIdentityError: string | null = null;
  @state() agentIdentityById: Record<string, AgentIdentityResult> = {};
  @state() agentSoulLoading = false;
  @state() agentSoulContentById: Record<string, string | null> = {};
  @state() agentSkillsLoading = false;
  @state() agentSkillsError: string | null = null;
  @state() agentSkillsReport: SkillStatusReport | null = null;
  @state() agentSkillsAgentId: string | null = null;
  @state() employeesLoading = false;
  @state() employeesError: string | null = null;
  @state() employeesDashboard: EmployeesDashboardResult | null = null;
  @state() employeesFilterAgentId: KovaEmployeeId | null = null;
  @state() canvasRefreshing = false;
  @state() canvasStatus: import("./controllers/canvas.ts").CanvasStatus = "idle";
  @state() canvasFrameUrl: string | null = null;
  @state() canvasSelectedAgentId = "main";
  @state() voiceSpeaking = false;
  @state() voiceMessage: ApiKeyMessage | null = null;
  @state() routingSaving = false;
  @state() routingDirty = false;
  @state() routingAssignments: RoutingAssignments = { telegram: "main", whatsapp: "main" };
  @state() routingMessage: RoutingMessage | null = null;
  @state() meetingsTitle = "";
  @state() meetingsTranscript = "";
  @state() meetingsSourceName: string | null = null;
  @state() meetingsAnalyzing = false;
  @state() meetingsSendingTelegram = false;
  @state() meetingsError: string | null = null;
  @state() meetingsNotice: string | null = null;
  @state() meetingsResult: MeetingAnalysisResult | null = null;
  @state() meetingsHistory: MeetingAnalysisResult[] = loadMeetingHistoryFromStorage();
  @state() showAgentCreator = false;
  @state() agentCreatorStep: 1 | 2 | 3 = 1;
  @state() agentCreatorCreating = false;
  @state() agentCreatorDraft: AgentCreatorDraft = { ...DEFAULT_AGENT_CREATOR_DRAFT };
  @state() agentCreatorSuccess: string | null = null;
  @state() agentCreatorError: string | null = null;
  @state() inboxSessions: GatewaySessionRow[] | null = null;
  @state() inboxLoading = false;
  @state() inboxError: string | null = null;
  @state() inboxChannelFilter: InboxChannelFilter = "all";

  @state() sessionsLoading = false;
  @state() sessionsResult: SessionsListResult | null = null;
  @state() sessionsError: string | null = null;
  @state() sessionsFilterActive = "";
  @state() sessionsFilterLimit = "120";
  @state() sessionsIncludeGlobal = true;
  @state() sessionsIncludeUnknown = false;
  @state() sessionsHideCron = true;
  @state() sessionsSearchQuery = "";
  @state() sessionsSortColumn: "key" | "kind" | "updated" | "tokens" = "updated";
  @state() sessionsSortDir: "asc" | "desc" = "desc";
  @state() sessionsPage = 0;
  @state() sessionsPageSize = 25;
  @state() sessionsSelectedKeys: Set<string> = new Set();

  @state() usageLoading = false;
  @state() usageResult: import("./types.js").SessionsUsageResult | null = null;
  @state() usageCostSummary: import("./types.js").CostUsageSummary | null = null;
  @state() usageError: string | null = null;
  @state() usageStartDate = (() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  })();
  @state() usageEndDate = (() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  })();
  @state() usageSelectedSessions: string[] = [];
  @state() usageSelectedDays: string[] = [];
  @state() usageSelectedHours: number[] = [];
  @state() usageChartMode: "tokens" | "cost" = "tokens";
  @state() usageDailyChartMode: "total" | "by-type" = "by-type";
  @state() usageTimeSeriesMode: "cumulative" | "per-tun" = "per-tun";
  @state() usageTimeSeriesBreakdownMode: "total" | "by-type" = "by-type";
  @state() usageTimeSeries: import("./types.js").SessionUsageTimeSeries | null = null;
  @state() usageTimeSeriesLoading = false;
  @state() usageTimeSeriesCursorStart: number | null = null;
  @state() usageTimeSeriesCursorEnd: number | null = null;
  @state() usageSessionLogs: import("./views/usage.js").SessionLogEntry[] | null = null;
  @state() usageSessionLogsLoading = false;
  @state() usageSessionLogsExpanded = false;
  // Applied query (used to filter the already-loaded sessions list client-side).
  @state() usageQuery = "";
  // Draft query text (updates immediately as the user types; applied via debounce or "Search").
  @state() usageQueryDraft = "";
  @state() usageSessionSort: "tokens" | "cost" | "recent" | "messages" | "errors" = "recent";
  @state() usageSessionSortDir: "desc" | "asc" = "desc";
  @state() usageRecentSessions: string[] = [];
  @state() usageTimeZone: "local" | "utc" = "local";
  @state() usageContextExpanded = false;
  @state() usageHeaderPinned = false;
  @state() usageSessionsTab: "all" | "recent" = "all";
  @state() usageVisibleColumns: string[] = [
    "channel",
    "agent",
    "provider",
    "model",
    "messages",
    "tools",
    "errors",
    "duration",
  ];
  @state() usageLogFilterRoles: import("./views/usage.js").SessionLogRole[] = [];
  @state() usageLogFilterTools: string[] = [];
  @state() usageLogFilterHasTools = false;
  @state() usageLogFilterQuery = "";

  // Non-reactive (do not trigger renders just for timer bookkeeping).
  usageQueryDebounceTimer: number | null = null;

  @state() cronLoading = false;
  @state() cronJobsLoadingMore = false;
  @state() cronJobs: CronJob[] = [];
  @state() cronJobsTotal = 0;
  @state() cronJobsHasMore = false;
  @state() cronJobsNextOffset: number | null = null;
  @state() cronJobsLimit = 50;
  @state() cronJobsQuery = "";
  @state() cronJobsEnabledFilter: import("./types.js").CronJobsEnabledFilter = "all";
  @state() cronJobsScheduleKindFilter: import("./controllers/cron.js").CronJobsScheduleKindFilter =
    "all";
  @state() cronJobsLastStatusFilter: import("./controllers/cron.js").CronJobsLastStatusFilter =
    "all";
  @state() cronJobsSortBy: import("./types.js").CronJobsSortBy = "nextRunAtMs";
  @state() cronJobsSortDir: import("./types.js").CronSortDir = "asc";
  @state() cronStatus: CronStatus | null = null;
  @state() cronError: string | null = null;
  @state() cronForm: CronFormState = { ...DEFAULT_CRON_FORM };
  @state() cronFieldErrors: import("./controllers/cron.js").CronFieldErrors = {};
  @state() cronEditingJobId: string | null = null;
  @state() cronRunsJobId: string | null = null;
  @state() cronRunsLoadingMore = false;
  @state() cronRuns: CronRunLogEntry[] = [];
  @state() cronRunsTotal = 0;
  @state() cronRunsHasMore = false;
  @state() cronRunsNextOffset: number | null = null;
  @state() cronRunsLimit = 50;
  @state() cronRunsScope: import("./types.js").CronRunScope = "all";
  @state() cronRunsStatuses: import("./types.js").CronRunsStatusValue[] = [];
  @state() cronRunsDeliveryStatuses: import("./types.js").CronDeliveryStatus[] = [];
  @state() cronRunsStatusFilter: import("./types.js").CronRunsStatusFilter = "all";
  @state() cronRunsQuery = "";
  @state() cronRunsSortDir: import("./types.js").CronSortDir = "desc";
  @state() cronModelSuggestions: string[] = [];
  @state() cronBusy = false;

  @state() updateAvailable: import("./types.js").UpdateAvailable | null = null;

  // Overview dashboard state
  @state() attentionItems: import("./types.js").AttentionItem[] = [];
  @state() paletteOpen = false;
  @state() paletteQuery = "";
  @state() paletteActiveIndex = 0;
  @state() overviewShowGatewayToken = false;
  @state() overviewShowGatewayPassword = false;
  @state() overviewLogLines: string[] = [];
  @state() overviewLogCursor = 0;

  @state() skillsLoading = false;
  @state() skillsReport: SkillStatusReport | null = null;
  @state() skillsError: string | null = null;
  @state() skillsFilter = "";
  @state() skillsStatusFilter: "all" | "ready" | "needs-setup" | "disabled" | "marketplace" = "all";
  @state() skillEdits: Record<string, string> = {};
  @state() skillsBusyKey: string | null = null;
  @state() skillMessages: Record<string, SkillMessage> = {};
  @state() skillsDetailKey: string | null = null;
  @state() kova_marketplaceLoading = false;
  @state() kova_marketplaceSkills: KovaMarketplaceSkill[] = [];
  @state() kova_marketplaceError: string | null = null;
  @state() kova_marketplaceCategory: KovaMarketplaceCategory = "all";
  @state() kova_installedLoading = false;
  @state() kova_installedError: string | null = null;
  @state() kova_installedSkillIds: string[] = [];
  @state() kova_marketplaceBusyId: string | null = null;

  @state() healthLoading = false;
  @state() healthResult: HealthSummary | null = null;
  @state() healthError: string | null = null;

  @state() debugLoading = false;
  @state() debugStatus: StatusSummary | null = null;
  @state() debugHealth: HealthSummary | null = null;
  @state() debugModels: ModelCatalogEntry[] = [];
  @state() debugHeartbeat: unknown = null;
  @state() debugCallMethod = "";
  @state() debugCallParams = "{}";
  @state() debugCallResult: string | null = null;
  @state() debugCallError: string | null = null;

  @state() logsLoading = false;
  @state() logsError: string | null = null;
  @state() logsFile: string | null = null;
  @state() logsEntries: LogEntry[] = [];
  @state() logsFilterText = "";
  @state() logsLevelFilters: Record<LogLevel, boolean> = {
    ...DEFAULT_LOG_LEVEL_FILTERS,
  };
  @state() logsAutoFollow = true;
  @state() logsTruncated = false;
  @state() logsCursor: number | null = null;
  @state() logsLastFetchAt: number | null = null;
  @state() logsLimit = 500;
  @state() logsMaxBytes = 250_000;
  @state() logsAtBottom = true;

  client: GatewayBrowserClient | null = null;
  private chatScrollFrame: number | null = null;
  private chatScrollTimeout: number | null = null;
  private chatHasAutoScrolled = false;
  private chatUserNearBottom = true;
  private briefingHydrationKey: string | null = null;
  @state() chatNewMessagesBelow = false;
  private nodesPollInterval: number | null = null;
  private logsPollInterval: number | null = null;
  private debugPollInterval: number | null = null;
  private inboxPollInterval: number | null = null;
  private logsScrollFrame: number | null = null;
  private toolStreamById = new Map<string, ToolStreamEntry>();
  private toolStreamOrder: string[] = [];
  refreshSessionsAfterChat = new Set<string>();
  basePath = "";
  private popStateHandler = () =>
    onPopStateInternal(this as unknown as Parameters<typeof onPopStateInternal>[0]);
  private topbarObserver: ResizeObserver | null = null;
  private globalKeydownHandler = (e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && !e.shiftKey && e.key === "k") {
      e.preventDefault();
      this.paletteOpen = !this.paletteOpen;
      if (this.paletteOpen) {
        this.paletteQuery = "";
        this.paletteActiveIndex = 0;
      }
    }
  };

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this.onSlashAction = (action: string) => {
      switch (action) {
        case "toggle-focus":
          this.applySettings({
            ...this.settings,
            chatFocusMode: !this.settings.chatFocusMode,
          });
          break;
        case "export":
          exportChatMarkdown(this.chatMessages, this.assistantName);
          break;
        case "refresh-tools-effective": {
          void refreshVisibleToolsEffectiveForCurrentSessionInternal(this);
          break;
        }
      }
    };
    document.addEventListener("keydown", this.globalKeydownHandler);
    handleConnected(this as unknown as Parameters<typeof handleConnected>[0]);
  }

  protected firstUpdated() {
    handleFirstUpdated(this as unknown as Parameters<typeof handleFirstUpdated>[0]);
  }

  disconnectedCallback() {
    document.removeEventListener("keydown", this.globalKeydownHandler);
    this.stopVoicePlayback({ silent: true });
    handleDisconnected(this as unknown as Parameters<typeof handleDisconnected>[0]);
    super.disconnectedCallback();
  }

  protected updated(changed: Map<PropertyKey, unknown>) {
    handleUpdated(this as unknown as Parameters<typeof handleUpdated>[0], changed);
    if (this.syncOnboardingRouteState()) {
      return;
    }
    if (
      (changed.has("connected") && this.connected) ||
      (changed.has("tab") && (this.tab === "chat" || this.tab === "apiKeys"))
    ) {
      void loadElevenLabsApiKey(this);
    }
    if (changed.has("sessionKey")) {
      this.stopVoicePlayback({ silent: true });
      this.voiceMessage = null;
      this.markCurrentAssistantMessageAsSeen(this.sessionKey);
    }
    if (changed.has("chatMessages")) {
      void this.maybeSpeakLatestAssistantMessage();
    }
    if (
      this.tab === "briefing" &&
      (changed.has("tab") ||
        changed.has("cronJobs") ||
        changed.has("channelsSnapshot") ||
        changed.has("whatsappLoginConnected"))
    ) {
      this.syncBriefingFormFromState(changed.has("tab"));
    }
    if (
      this.tab === "canvas" &&
      (changed.has("tab") || changed.has("connected") || changed.has("hello"))
    ) {
      void this.refreshCanvas();
    }
    if ((changed.has("tab") || changed.has("configSnapshot")) && this.tab === "routing") {
      this.syncRoutingAssignmentsFromState(changed.has("tab"));
    }
    if (!changed.has("sessionKey") || this.agentsPanel !== "tools") {
      return;
    }
    const activeSessionAgentId = resolveAgentIdFromSessionKey(this.sessionKey);
    if (this.agentsSelectedId && this.agentsSelectedId === activeSessionAgentId) {
      void loadToolsEffectiveInternal(this, {
        agentId: this.agentsSelectedId,
        sessionKey: this.sessionKey,
      });
      return;
    }
    this.toolsEffectiveResult = null;
    this.toolsEffectiveResultKey = null;
    this.toolsEffectiveError = null;
    this.toolsEffectiveLoading = false;
    this.toolsEffectiveLoadingKey = null;
  }

  connect() {
    connectGatewayInternal(this as unknown as Parameters<typeof connectGatewayInternal>[0]);
  }

  handleChatScroll(event: Event) {
    handleChatScrollInternal(
      this as unknown as Parameters<typeof handleChatScrollInternal>[0],
      event,
    );
  }

  handleLogsScroll(event: Event) {
    handleLogsScrollInternal(
      this as unknown as Parameters<typeof handleLogsScrollInternal>[0],
      event,
    );
  }

  exportLogs(lines: string[], label: string) {
    exportLogsInternal(lines, label);
  }

  resetToolStream() {
    resetToolStreamInternal(this as unknown as Parameters<typeof resetToolStreamInternal>[0]);
  }

  resetChatScroll() {
    resetChatScrollInternal(this as unknown as Parameters<typeof resetChatScrollInternal>[0]);
  }

  scrollToBottom(opts?: { smooth?: boolean }) {
    resetChatScrollInternal(this as unknown as Parameters<typeof resetChatScrollInternal>[0]);
    scheduleChatScrollInternal(
      this as unknown as Parameters<typeof scheduleChatScrollInternal>[0],
      true,
      Boolean(opts?.smooth),
    );
  }

  async loadAssistantIdentity() {
    await loadAssistantIdentityInternal(this);
  }

  applySettings(next: UiSettings) {
    applySettingsInternal(this as unknown as Parameters<typeof applySettingsInternal>[0], next);
  }

  setTab(next: Tab) {
    setTabInternal(this as unknown as Parameters<typeof setTabInternal>[0], next);
    this.onboarding = next === "onboarding";
    this.navDrawerOpen = false;
  }

  setOnboardingStep(next: 1 | 2 | 3) {
    this.onboardingInteracted = true;
    this.onboardingStep = next;
  }

  selectOnboardingProvider(provider: ApiKeyProviderId) {
    this.onboardingInteracted = true;
    this.onboardingProvider = provider;
  }

  completeOnboarding() {
    this.persistOnboardingFlag();
    this.onboardingInteracted = false;
    this.onboardingStep = 1;
    this.setTab("employees");
  }

  skipOnboarding() {
    this.completeOnboarding();
  }

  setTheme(next: ThemeName, context?: Parameters<typeof setThemeInternal>[2]) {
    setThemeInternal(this as unknown as Parameters<typeof setThemeInternal>[0], next, context);
    this.themeOrder = this.buildThemeOrder(next);
  }

  setThemeMode(next: ThemeMode, context?: Parameters<typeof setThemeModeInternal>[2]) {
    setThemeModeInternal(
      this as unknown as Parameters<typeof setThemeModeInternal>[0],
      next,
      context,
    );
  }

  setBorderRadius(value: number) {
    applySettingsInternal(this as unknown as Parameters<typeof applySettingsInternal>[0], {
      ...this.settings,
      borderRadius: value,
    });
    this.requestUpdate();
  }

  buildThemeOrder(active: ThemeName): ThemeName[] {
    const all = [...VALID_THEME_NAMES];
    const rest = all.filter((id) => id !== active);
    return [active, ...rest];
  }

  async loadOverview() {
    await loadOverviewInternal(this as unknown as Parameters<typeof loadOverviewInternal>[0]);
  }

  async loadCron() {
    await loadCronInternal(this as unknown as Parameters<typeof loadCronInternal>[0]);
  }

  async loadInbox() {
    await loadInboxInternal(this);
  }

  setInboxFilter(next: InboxChannelFilter) {
    this.inboxChannelFilter = next;
  }

  private resolveCurrentChatAgentId(): string {
    return resolveAgentIdFromSessionKey(this.sessionKey) || "main";
  }

  private resolveCurrentVoiceApiKey(): string {
    return this.apiKeysElevenLabsInput.trim() || getCachedElevenLabsApiKey(this.settings.gatewayUrl);
  }

  private isVoiceEnabledForAgent(agentId: string): boolean {
    return Boolean(this.settings.voiceEnabledByAgent[agentId]);
  }

  private markCurrentAssistantMessageAsSeen(sessionKey: string) {
    const latest = resolveLatestAssistantMessageInfo(this.chatMessages);
    if (latest) {
      this.voiceSeenBySession.set(sessionKey, latest.signature);
    }
  }

  stopVoicePlayback(options?: { silent?: boolean }) {
    this.voicePlaybackGeneration += 1;
    stopElevenLabsPlayback();
    this.voiceSpeaking = false;
    if (!options?.silent) {
      this.voiceMessage = null;
    }
  }

  toggleVoiceForCurrentAgent() {
    const agentId = this.resolveCurrentChatAgentId();
    if (!isKovaEmployeeVoiceAgent(agentId)) {
      this.voiceMessage = {
        kind: "error",
        text: "Voice mode is available for Kova employees only.",
      };
      return;
    }
    if (!this.resolveCurrentVoiceApiKey()) {
      this.voiceMessage = {
        kind: "error",
        text: "Add your ElevenLabs key in API Keys settings.",
      };
      return;
    }

    const nextEnabled = !this.isVoiceEnabledForAgent(agentId);
    this.applySettings({
      ...this.settings,
      voiceEnabledByAgent: {
        ...this.settings.voiceEnabledByAgent,
        [agentId]: nextEnabled,
      },
    });
    if (!nextEnabled) {
      this.stopVoicePlayback({ silent: true });
      this.voiceMessage = null;
      return;
    }

    this.markCurrentAssistantMessageAsSeen(this.sessionKey);
    this.voiceMessage = {
      kind: "success",
      text: "Voice mode is on for this employee.",
    };
  }

  private async maybeSpeakLatestAssistantMessage() {
    if (this.tab !== "chat") {
      return;
    }
    const agentId = this.resolveCurrentChatAgentId();
    if (!isKovaEmployeeVoiceAgent(agentId) || !this.isVoiceEnabledForAgent(agentId)) {
      return;
    }
    const latest = resolveLatestAssistantMessageInfo(this.chatMessages);
    if (!latest) {
      return;
    }
    const seenSignature = this.voiceSeenBySession.get(this.sessionKey);
    if (!seenSignature) {
      this.voiceSeenBySession.set(this.sessionKey, latest.signature);
      return;
    }
    if (seenSignature === latest.signature) {
      return;
    }
    this.voiceSeenBySession.set(this.sessionKey, latest.signature);

    const apiKey = this.resolveCurrentVoiceApiKey();
    if (!apiKey) {
      this.voiceMessage = {
        kind: "error",
        text: "Add your ElevenLabs key in API Keys settings.",
      };
      return;
    }

    const generation = ++this.voicePlaybackGeneration;
    this.voiceSpeaking = true;
    this.voiceMessage = null;
    try {
      await speakElevenLabsText(latest.text, agentId, apiKey);
      if (generation === this.voicePlaybackGeneration) {
        this.voiceSpeaking = false;
      }
    } catch (error) {
      if (generation !== this.voicePlaybackGeneration) {
        return;
      }
      this.voiceSpeaking = false;
      if (isVoicePlaybackInterrupted(error)) {
        return;
      }
      this.voiceMessage = {
        kind: "error",
        text: `Could not play voice: ${error instanceof Error ? error.message : String(error)}`,
      };
    }
  }

  handleCanvasAgentChange(agentId: string) {
    this.canvasSelectedAgentId = agentId;
    if (this.tab === "canvas") {
      void this.refreshCanvas();
    }
  }

  async refreshCanvas() {
    if (this.canvasRefreshing) {
      return;
    }
    const baseUrl = resolveCanvasBaseUrl({
      hello: this.hello,
      settings: this.settings,
    });
    if (!baseUrl) {
      this.canvasStatus = "error";
      this.canvasFrameUrl = null;
      return;
    }

    const refreshKey = String(Date.now());
    const token = resolveCanvasAuthToken({
      hello: this.hello,
      settings: this.settings,
      password: this.password,
    });
    const canvasUrl = buildCanvasUrl({
      baseUrl,
      agentId: this.canvasSelectedAgentId,
      refreshKey,
    });

    this.canvasRefreshing = true;
    this.canvasStatus = "checking";
    try {
      await ensureCanvasAuthWorker({
        basePath: this.basePath,
        token,
      });
      const probe = await probeCanvasUrl({ url: canvasUrl, token });
      if (!probe.ok) {
        this.canvasStatus = "error";
        this.canvasFrameUrl = null;
        return;
      }
      this.canvasFrameUrl = canvasUrl;
      this.canvasStatus = "ready";
    } finally {
      this.canvasRefreshing = false;
    }
  }

  async openCanvasInNewTab() {
    const baseUrl = resolveCanvasBaseUrl({
      hello: this.hello,
      settings: this.settings,
    });
    if (!baseUrl) {
      return;
    }
    const token = resolveCanvasAuthToken({
      hello: this.hello,
      settings: this.settings,
      password: this.password,
    });
    await ensureCanvasAuthWorker({
      basePath: this.basePath,
      token,
    });
    const canvasUrl = buildCanvasUrl({
      baseUrl,
      agentId: this.canvasSelectedAgentId,
      refreshKey: null,
    });
    window.open(canvasUrl, "_blank", "noopener,noreferrer");
  }

  handleRoutingAssignmentChange(channel: RoutingChannelId, agentId: string) {
    this.routingAssignments = {
      ...this.routingAssignments,
      [channel]: agentId,
    };
    this.routingDirty = true;
    this.routingMessage = null;
  }

  applyRoutingPreset(agentId: string) {
    this.routingAssignments = {
      telegram: agentId,
      whatsapp: agentId,
    };
    this.routingDirty = true;
    this.routingMessage = null;
  }

  async saveRouting() {
    if (!this.client || !this.connected || this.routingSaving) {
      return;
    }
    const baseHash = this.configSnapshot?.hash;
    if (!baseHash) {
      this.routingMessage = {
        kind: "error",
        text: "Config is not loaded yet. Reload and try again.",
      };
      return;
    }

    this.routingSaving = true;
    this.routingMessage = null;
    try {
      const raw = serializeRoutingConfig(this.configSnapshot, this.routingAssignments);
      await this.client.request("config.set", { raw, baseHash });
      this.routingDirty = false;
      await Promise.allSettled([loadConfig(this), loadChannels(this, false), loadAgents(this)]);
      this.routingMessage = {
        kind: "success",
        text: "Routing saved. Changes take effect immediately - no restart needed.",
      };
    } catch (error) {
      this.routingMessage = {
        kind: "error",
        text: `Could not save routing: ${error instanceof Error ? error.message : String(error)}`,
      };
    } finally {
      this.routingSaving = false;
    }
  }

  handleMeetingsTitleChange(next: string) {
    this.meetingsTitle = next;
    this.meetingsNotice = null;
  }

  handleMeetingsTranscriptChange(next: string) {
    this.meetingsTranscript = next;
    this.meetingsNotice = null;
  }

  async handleMeetingsFileSelect(file: File | null) {
    if (!file) {
      return;
    }
    this.meetingsError = null;
    this.meetingsNotice = null;
    try {
      const { transcript, sourceName } = await readMeetingTranscriptFile(file);
      this.meetingsTranscript = transcript;
      this.meetingsSourceName = sourceName;
      if (!this.meetingsTitle.trim()) {
        this.meetingsTitle = sourceName.replace(/\.[^.]+$/, "");
      }
      this.meetingsNotice = `Loaded transcript from ${sourceName}.`;
    } catch (error) {
      this.meetingsError = `Could not read transcript: ${formatMeetingError(error)}`;
    }
  }

  async analyzeMeeting() {
    if (!this.client || !this.connected || this.meetingsAnalyzing) {
      return;
    }

    const transcript = this.meetingsTranscript.trim();
    if (!transcript) {
      this.meetingsError = "Paste a transcript or upload a file before running the analysis.";
      return;
    }

    const title = this.meetingsTitle.trim();
    this.meetingsAnalyzing = true;
    this.meetingsError = null;
    this.meetingsNotice = null;

    try {
      const beforeHistory = await this.client.request<{ messages?: unknown[] }>("chat.history", {
        sessionKey: MEETING_ANALYSIS_SESSION_KEY,
        limit: 200,
      });
      const beforeAssistantCount = (beforeHistory.messages ?? []).filter(
        (message) => extractAssistantTextFromMessage(message).length > 0,
      ).length;

      await this.client.request("chat.send", {
        sessionKey: MEETING_ANALYSIS_SESSION_KEY,
        message: buildMeetingAnalysisPrompt({ title, transcript }),
        deliver: false,
        idempotencyKey: generateUUID(),
      });

      let rawResponse = "";
      for (let attempt = 0; attempt < 40; attempt += 1) {
        await wait(attempt === 0 ? 400 : 800);
        const history = await this.client.request<{ messages?: unknown[] }>("chat.history", {
          sessionKey: MEETING_ANALYSIS_SESSION_KEY,
          limit: 200,
        });
        const assistantMessages = (history.messages ?? [])
          .map((message) => extractAssistantTextFromMessage(message))
          .filter(Boolean);
        if (assistantMessages.length > beforeAssistantCount) {
          rawResponse = assistantMessages.at(-1) ?? "";
          break;
        }
      }

      if (!rawResponse.trim()) {
        throw new Error("Morgan did not return a completed analysis yet. Please try again.");
      }

      const nextResult = createMeetingResult({
        id: generateUUID(),
        title,
        transcript,
        sourceName: this.meetingsSourceName,
        rawResponse,
      });
      this.meetingsResult = nextResult;
      this.meetingsNotice = "Meeting analysis is ready.";
    } catch (error) {
      this.meetingsError = `Could not analyse the meeting: ${formatMeetingError(error)}`;
    } finally {
      this.meetingsAnalyzing = false;
    }
  }

  saveMeetingResult() {
    if (!this.meetingsResult) {
      return;
    }
    const nextResult: MeetingAnalysisResult = {
      ...this.meetingsResult,
      title: this.meetingsTitle.trim(),
      transcript: this.meetingsTranscript.trim(),
      sourceName: this.meetingsSourceName,
    };
    this.meetingsResult = nextResult;
    this.meetingsHistory = upsertMeetingHistory(this.meetingsHistory, nextResult);
    this.meetingsError = null;
    this.meetingsNotice = `Saved ${nextResult.title || "meeting analysis"} to history.`;
  }

  loadMeetingHistoryEntry(id: string) {
    const entry = resolveMeetingHistoryEntry(this.meetingsHistory, id);
    if (!entry) {
      this.meetingsError = "That meeting is no longer available in local history.";
      return;
    }
    this.meetingsTitle = entry.title;
    this.meetingsTranscript = entry.transcript;
    this.meetingsSourceName = entry.sourceName;
    this.meetingsResult = entry;
    this.meetingsError = null;
    this.meetingsNotice = `Loaded ${entry.title || "saved meeting"} from history.`;
  }

  clearMeetingHistory() {
    clearMeetingHistoryStorage();
    this.meetingsHistory = [];
    this.meetingsError = null;
    this.meetingsNotice = "Meeting history cleared.";
  }

  async copyMeetingSection(label: string, value: string) {
    const trimmed = value.trim();
    if (!trimmed) {
      this.meetingsError = `There is no ${label} text to copy yet.`;
      return;
    }
    try {
      await navigator.clipboard.writeText(trimmed);
      this.meetingsError = null;
      this.meetingsNotice = `Copied ${label}.`;
    } catch (error) {
      this.meetingsError = `Could not copy ${label}: ${formatMeetingError(error)}`;
    }
  }

  async sendMeetingFollowUpViaTelegram() {
    if (!this.client || !this.connected || !this.meetingsResult || this.meetingsSendingTelegram) {
      return;
    }
    const message = this.meetingsResult.followUpEmail.trim();
    if (!message) {
      this.meetingsError = "Generate a follow-up email before sending it to Telegram.";
      return;
    }

    this.meetingsSendingTelegram = true;
    this.meetingsError = null;
    this.meetingsNotice = null;

    try {
      const sessions = await this.client.request<SessionsListResult>("sessions.list", {
        limit: 100,
        includeGlobal: true,
        includeUnknown: true,
      });
      const telegramTarget = resolveLatestMeetingTelegramTarget(sessions.sessions ?? []);

      if (!telegramTarget) {
        throw new Error("Send a message to your Telegram bot first to enable this.");
      }

      await this.client.request("chat.send", {
        sessionKey: telegramTarget.sessionKey,
        message,
        deliver: true,
        idempotencyKey: generateUUID(),
      });

      this.meetingsNotice = `Follow-up email sent to Telegram via ${telegramTarget.label}.`;
    } catch (error) {
      this.meetingsError = `Could not send via Telegram: ${formatMeetingError(error)}`;
    } finally {
      this.meetingsSendingTelegram = false;
    }
  }

  openAgentCreator() {
    this.showAgentCreator = true;
    this.agentCreatorStep = 1;
    this.agentCreatorCreating = false;
    this.agentCreatorDraft = { ...DEFAULT_AGENT_CREATOR_DRAFT };
    this.agentCreatorSuccess = null;
    this.agentCreatorError = null;
  }

  closeAgentCreator() {
    this.showAgentCreator = false;
    this.agentCreatorStep = 1;
    this.agentCreatorCreating = false;
    this.agentCreatorDraft = { ...DEFAULT_AGENT_CREATOR_DRAFT };
    this.agentCreatorSuccess = null;
    this.agentCreatorError = null;
  }

  async createEmployee(params: AgentCreatorDraft) {
    if (!this.client || !this.connected || this.agentCreatorCreating) {
      return;
    }

    const draft = trimAgentCreatorDraft(params);
    if (!draft.name || !draft.role) {
      this.agentCreatorStep = 1;
      this.agentCreatorError = "Add a name and role before creating the employee.";
      return;
    }

    const requestedAgentId = buildEmployeeAgentId(draft.name);
    const workspace = resolveEmployeeWorkspacePath(this.agentsList, requestedAgentId);
    let createdAgentId: string | null = null;

    this.agentCreatorCreating = true;
    this.agentCreatorDraft = { ...draft };
    this.agentCreatorSuccess = null;
    this.agentCreatorError = null;

    try {
      const created = await this.client.request<AgentsCreateResult>("agents.create", {
        id: requestedAgentId,
        name: draft.name,
        emoji: draft.emoji,
        workspace,
      });
      createdAgentId = created.agentId;

      await this.client.request<AgentsFilesSetResult>("agents.files.set", {
        agentId: created.agentId,
        name: "SOUL.md",
        content: buildEmployeeSoul(draft),
      });

      await this.client.request<AgentsUpdateResult>("agents.update", {
        agentId: created.agentId,
        model: DEFAULT_EMPLOYEE_MODEL,
      });

      this.showAgentCreator = false;
      this.agentCreatorStep = 1;
      this.agentCreatorDraft = { ...DEFAULT_AGENT_CREATOR_DRAFT };
      this.agentCreatorError = null;
      this.agentCreatorSuccess = `Created ${created.name} (${created.agentId}).`;
      await loadAgents(this);
      this.agentSoulContentById = {
        ...this.agentSoulContentById,
        [created.agentId]: buildEmployeeSoul(draft),
      };
      await loadAgentSoulContents(this, [created.agentId]);
    } catch (error) {
      const detail = formatAgentCreatorError(error);
      this.agentCreatorError = createdAgentId
        ? `Employee ${createdAgentId} was created, but setup did not finish: ${detail}`
        : `Could not create employee: ${detail}`;
    } finally {
      this.agentCreatorCreating = false;
    }
  }

  async saveBriefing() {
    if (!this.client || !this.connected || this.briefingSaving) {
      return;
    }
    const availableChannels = resolveBriefingConnectedChannels(
      this.channelsSnapshot,
      this.whatsappLoginConnected,
    );
    if (availableChannels.length === 0) {
      this.briefingMessage = {
        kind: "error",
        text: "Connect Telegram or WhatsApp before saving a daily briefing.",
      };
      return;
    }
    if (!Object.values(this.briefingForm.sections).some(Boolean)) {
      this.briefingMessage = {
        kind: "error",
        text: "Select at least one briefing section before saving.",
      };
      return;
    }
    const channel =
      availableChannels.includes(this.briefingForm.channel as BriefingChannelId)
        ? this.briefingForm.channel
        : availableChannels[0];
    const timezone = getLocalBriefingTimeZone();
    const jobPatch = {
      name: DAILY_BRIEFING_JOB_NAME,
      description: buildBriefingDescription({ ...this.briefingForm, channel }, timezone),
      agentId: "kova-alex",
      enabled: this.briefingForm.enabled,
      deleteAfterRun: false,
      schedule: {
        kind: "cron" as const,
        expr: buildDailyBriefingCronExpr(this.briefingForm.time),
        tz: timezone,
      },
      sessionTarget: "isolated" as const,
      wakeMode: "next-heartbeat" as const,
      payload: {
        kind: "agentTurn" as const,
        message: buildBriefingPrompt({ ...this.briefingForm, channel }, timezone),
        lightContext: true,
      },
      delivery: {
        mode: "announce" as const,
        channel,
        bestEffort: true,
      },
      failureAlert: false as const,
    };
    const existingJob = findDailyBriefingJob(this.cronJobs);
    this.briefingSaving = true;
    this.briefingLoading = true;
    this.briefingMessage = null;
    try {
      if (existingJob) {
        await this.client.request("cron.update", { id: existingJob.id, patch: jobPatch });
      } else {
        await this.client.request("cron.add", jobPatch);
      }
      this.briefingForm = { ...this.briefingForm, channel };
      this.briefingDirty = false;
      this.briefingMessage = {
        kind: "success",
        text: `Daily briefing saved for ${formatBriefingChannelLabel(channel)} at ${this.briefingForm.time}.`,
      };
      await this.loadCron();
    } catch (error) {
      this.briefingMessage = {
        kind: "error",
        text: `Could not save the daily briefing: ${String(error)}`,
      };
    } finally {
      this.briefingLoading = false;
      this.briefingSaving = false;
    }
  }

  async handleAbortChat() {
    await handleAbortChatInternal(this as unknown as Parameters<typeof handleAbortChatInternal>[0]);
  }

  removeQueuedMessage(id: string) {
    removeQueuedMessageInternal(
      this as unknown as Parameters<typeof removeQueuedMessageInternal>[0],
      id,
    );
  }

  async handleSendChat(
    messageOverride?: string,
    opts?: Parameters<typeof handleSendChatInternal>[2],
  ) {
    await handleSendChatInternal(
      this as unknown as Parameters<typeof handleSendChatInternal>[0],
      messageOverride,
      opts,
    );
  }

  async handleWhatsAppStart(force: boolean) {
    await handleWhatsAppStartInternal(this, force);
  }

  async handleWhatsAppRelink() {
    await handleWhatsAppRelinkInternal(this);
  }

  async handleWhatsAppWait() {
    await handleWhatsAppWaitInternal(this);
  }

  async handleWhatsAppLogout() {
    await handleWhatsAppLogoutInternal(this);
  }

  async handleChannelConfigSave() {
    await handleChannelConfigSaveInternal(this);
  }

  async handleChannelConfigReload() {
    await handleChannelConfigReloadInternal(this);
  }

  handleNostrProfileEdit(accountId: string, profile: NostrProfile | null) {
    handleNostrProfileEditInternal(this, accountId, profile);
  }

  handleNostrProfileCancel() {
    handleNostrProfileCancelInternal(this);
  }

  handleNostrProfileFieldChange(field: keyof NostrProfile, value: string) {
    handleNostrProfileFieldChangeInternal(this, field, value);
  }

  async handleNostrProfileSave() {
    await handleNostrProfileSaveInternal(this);
  }

  async handleNostrProfileImport() {
    await handleNostrProfileImportInternal(this);
  }

  handleNostrProfileToggleAdvanced() {
    handleNostrProfileToggleAdvancedInternal(this);
  }

  async handleExecApprovalDecision(decision: "allow-once" | "allow-always" | "deny") {
    const active = this.execApprovalQueue[0];
    if (!active || !this.client || this.execApprovalBusy) {
      return;
    }
    this.execApprovalBusy = true;
    this.execApprovalError = null;
    try {
      const method = active.kind === "plugin" ? "plugin.approval.resolve" : "exec.approval.resolve";
      await this.client.request(method, {
        id: active.id,
        decision,
      });
      this.execApprovalQueue = this.execApprovalQueue.filter((entry) => entry.id !== active.id);
    } catch (err) {
      this.execApprovalError = `Approval failed: ${String(err)}`;
    } finally {
      this.execApprovalBusy = false;
    }
  }

  handleGatewayUrlConfirm() {
    const nextGatewayUrl = this.pendingGatewayUrl;
    if (!nextGatewayUrl) {
      return;
    }
    const nextToken = this.pendingGatewayToken?.trim() || "";
    this.pendingGatewayUrl = null;
    this.pendingGatewayToken = null;
    applySettingsInternal(this as unknown as Parameters<typeof applySettingsInternal>[0], {
      ...this.settings,
      gatewayUrl: nextGatewayUrl,
      token: nextToken,
    });
    this.connect();
  }

  handleGatewayUrlCancel() {
    this.pendingGatewayUrl = null;
    this.pendingGatewayToken = null;
  }

  // Sidebar handlers for tool output viewing
  handleOpenSidebar(content: string) {
    if (this.sidebarCloseTimer != null) {
      window.clearTimeout(this.sidebarCloseTimer);
      this.sidebarCloseTimer = null;
    }
    this.sidebarContent = content;
    this.sidebarError = null;
    this.sidebarOpen = true;
  }

  handleCloseSidebar() {
    this.sidebarOpen = false;
    // Clear content after transition
    if (this.sidebarCloseTimer != null) {
      window.clearTimeout(this.sidebarCloseTimer);
    }
    this.sidebarCloseTimer = window.setTimeout(() => {
      if (this.sidebarOpen) {
        return;
      }
      this.sidebarContent = null;
      this.sidebarError = null;
      this.sidebarCloseTimer = null;
    }, 200);
  }

  handleSplitRatioChange(ratio: number) {
    const newRatio = Math.max(0.4, Math.min(0.7, ratio));
    this.splitRatio = newRatio;
    this.applySettings({ ...this.settings, splitRatio: newRatio });
  }

  render() {
    return renderApp(this as unknown as AppViewState);
  }

  private hasSavedProviderKey(): boolean {
    return Object.values(this.apiKeyProviderStatuses).some((status) => status?.hasKey === true);
  }

  private hasCompletedOnboarding(): boolean {
    return getSafeLocalStorage()?.getItem("kova_onboarded") === "1";
  }

  private persistOnboardingFlag() {
    getSafeLocalStorage()?.setItem("kova_onboarded", "1");
  }

  private syncBriefingFormFromState(force = false) {
    const availableChannels = resolveBriefingConnectedChannels(
      this.channelsSnapshot,
      this.whatsappLoginConnected,
    );
    const job = findDailyBriefingJob(this.cronJobs);
    const nextHydrationKey = JSON.stringify({
      jobId: job?.id ?? null,
      updatedAtMs: job?.updatedAtMs ?? null,
      description: job?.description ?? null,
      enabled: job?.enabled ?? null,
      schedule:
        job?.schedule.kind === "cron"
          ? `${job.schedule.expr}|${job.schedule.tz ?? ""}`
          : job?.schedule.kind ?? null,
      deliveryChannel: job?.delivery?.channel ?? null,
      availableChannels,
    });
    if (!force && this.briefingDirty) {
      return;
    }
    if (!force && this.briefingHydrationKey === nextHydrationKey) {
      return;
    }
    this.briefingForm = hydrateBriefingForm(job, availableChannels);
    this.briefingDirty = false;
    this.briefingHydrationKey = nextHydrationKey;
  }

  private syncRoutingAssignmentsFromState(force = false) {
    if (!force && this.routingDirty) {
      return;
    }
    const nextAssignments = hydrateRoutingAssignments(this.configSnapshot);
    const currentKey = JSON.stringify(this.routingAssignments);
    const nextKey = JSON.stringify(nextAssignments);
    if (!force && currentKey === nextKey) {
      return;
    }
    this.routingAssignments = nextAssignments;
    this.routingDirty = false;
    if (force) {
      this.routingMessage = null;
    }
  }

  private syncOnboardingRouteState(): boolean {
    if (this.onboarding !== (this.tab === "onboarding")) {
      this.onboarding = this.tab === "onboarding";
    }

    if (!this.connected) {
      return false;
    }

    if (!this.apiKeysLoaded) {
      return false;
    }

    if (this.tab === "onboarding") {
      if (this.hasCompletedOnboarding() || (this.hasSavedProviderKey() && !this.onboardingInteracted)) {
        this.setTab("employees");
        return true;
      }
      return false;
    }

    if (!this.hasCompletedOnboarding() && !this.hasSavedProviderKey()) {
      this.onboardingStep = 1;
      this.onboardingInteracted = false;
      this.setTab("onboarding");
      return true;
    }

    return false;
  }
}
