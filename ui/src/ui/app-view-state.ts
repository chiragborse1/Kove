import type { EventLogEntry } from "./app-events.ts";
import type { CompactionStatus, FallbackStatus } from "./app-tool-stream.ts";
import type {
  ApiKeyMessage,
  ApiKeyProviderId,
  ApiKeyProviderStatus,
} from "./controllers/api-keys.ts";
import type { BriefingFormState, BriefingMessage } from "./controllers/briefing.ts";
import type { CanvasStatus } from "./controllers/canvas.ts";
import type {
  TelegramPendingApproval,
  TelegramSetupMessage,
} from "./controllers/channels.types.ts";
import type { CronModelSuggestionsState, CronState } from "./controllers/cron.ts";
import type { DevicePairingList } from "./controllers/devices.ts";
import type { EmployeesDashboardResult, KovaEmployeeId } from "./controllers/employees.ts";
import type { ExecApprovalRequest } from "./controllers/exec-approval.ts";
import type { ExecApprovalsFile, ExecApprovalsSnapshot } from "./controllers/exec-approvals.ts";
import type { InboxChannelFilter } from "./controllers/inbox.ts";
import type {
  RoutingAssignments,
  RoutingChannelId,
  RoutingMessage,
} from "./controllers/routing.ts";
import type {
  KovaMarketplaceCategory,
  KovaMarketplaceSkill,
  SkillMessage,
} from "./controllers/skills.ts";
import type { GatewayBrowserClient, GatewayHelloOk } from "./gateway.ts";
import type { Tab } from "./navigation.ts";
import type { UiSettings } from "./storage.ts";
import type { ThemeTransitionContext } from "./theme-transition.ts";
import type { ResolvedTheme, ThemeMode, ThemeName } from "./theme.ts";
import type {
  AgentsListResult,
  AgentsFilesListResult,
  AgentCreatorDraft,
  AgentIdentityResult,
  AttentionItem,
  ChannelsStatusSnapshot,
  ConfigSnapshot,
  ConfigUiHints,
  GatewaySessionRow,
  HealthSummary,
  LogEntry,
  LogLevel,
  ChatModelOverride,
  ModelCatalogEntry,
  MeetingAnalysisResult,
  NostrProfile,
  PresenceEntry,
  SessionsUsageResult,
  CostUsageSummary,
  SessionUsageTimeSeries,
  SessionsListResult,
  SkillStatusReport,
  StatusSummary,
  ToolsCatalogResult,
} from "./types.ts";
import type { ChatAttachment, ChatQueueItem } from "./ui-types.ts";
import type { NostrProfileFormState } from "./views/channels.nostr-profile-form.ts";
import type { SessionLogEntry } from "./views/usage.ts";

export type AppViewState = {
  settings: UiSettings;
  password: string;
  loginShowGatewayToken: boolean;
  loginShowGatewayPassword: boolean;
  desktopApp: boolean;
  setupStateLoading: boolean;
  setupComplete: boolean;
  setupName: string;
  setupStep: 1 | 2 | 3 | 4;
  setupProvider: ApiKeyProviderId;
  setupApiKey: string;
  setupChannel: "telegram" | "whatsapp" | "skip";
  setupTelegramToken: string;
  setupBusy: boolean;
  setupMessage: ApiKeyMessage | null;
  tab: Tab;
  onboarding: boolean;
  onboardingStep: 1 | 2 | 3;
  onboardingProvider: ApiKeyProviderId;
  briefingForm: BriefingFormState;
  briefingDirty: boolean;
  briefingLoading: boolean;
  briefingSaving: boolean;
  briefingMessage: BriefingMessage | null;
  basePath: string;
  connected: boolean;
  theme: ThemeName;
  themeMode: ThemeMode;
  themeResolved: ResolvedTheme;
  themeOrder: ThemeName[];
  hello: GatewayHelloOk | null;
  lastError: string | null;
  lastErrorCode: string | null;
  eventLog: EventLogEntry[];
  assistantName: string;
  assistantAvatar: string | null;
  assistantAgentId: string | null;
  sessionKey: string;
  chatLoading: boolean;
  chatSending: boolean;
  chatMessage: string;
  chatAttachments: ChatAttachment[];
  chatMessages: unknown[];
  chatToolMessages: unknown[];
  chatStreamSegments: Array<{ text: string; ts: number }>;
  chatStream: string | null;
  chatStreamStartedAt: number | null;
  chatRunId: string | null;
  compactionStatus: CompactionStatus | null;
  fallbackStatus: FallbackStatus | null;
  chatAvatarUrl: string | null;
  chatThinkingLevel: string | null;
  chatModelOverrides: Record<string, ChatModelOverride | null>;
  chatModelsLoading: boolean;
  chatModelCatalog: ModelCatalogEntry[];
  chatQueue: ChatQueueItem[];
  chatManualRefreshInFlight: boolean;
  nodesLoading: boolean;
  nodes: Array<Record<string, unknown>>;
  chatNewMessagesBelow: boolean;
  navDrawerOpen: boolean;
  sidebarOpen: boolean;
  sidebarContent: string | null;
  sidebarError: string | null;
  splitRatio: number;
  scrollToBottom: (opts?: { smooth?: boolean }) => void;
  devicesLoading: boolean;
  devicesError: string | null;
  devicesList: DevicePairingList | null;
  execApprovalsLoading: boolean;
  execApprovalsSaving: boolean;
  execApprovalsDirty: boolean;
  execApprovalsSnapshot: ExecApprovalsSnapshot | null;
  execApprovalsForm: ExecApprovalsFile | null;
  execApprovalsSelectedAgent: string | null;
  execApprovalsTarget: "gateway" | "node";
  execApprovalsTargetNodeId: string | null;
  execApprovalQueue: ExecApprovalRequest[];
  execApprovalBusy: boolean;
  execApprovalError: string | null;
  pendingGatewayUrl: string | null;
  configLoading: boolean;
  configRaw: string;
  configRawOriginal: string;
  configValid: boolean | null;
  configIssues: unknown[];
  configSaving: boolean;
  configApplying: boolean;
  updateRunning: boolean;
  applySessionKey: string;
  configSnapshot: ConfigSnapshot | null;
  configSchema: unknown;
  configSchemaVersion: string | null;
  configSchemaLoading: boolean;
  configUiHints: ConfigUiHints;
  configForm: Record<string, unknown> | null;
  configFormOriginal: Record<string, unknown> | null;
  configFormMode: "form" | "raw";
  configSearchQuery: string;
  configActiveSection: string | null;
  configActiveSubsection: string | null;
  communicationsFormMode: "form" | "raw";
  communicationsSearchQuery: string;
  communicationsActiveSection: string | null;
  communicationsActiveSubsection: string | null;
  appearanceFormMode: "form" | "raw";
  appearanceSearchQuery: string;
  appearanceActiveSection: string | null;
  appearanceActiveSubsection: string | null;
  automationFormMode: "form" | "raw";
  automationSearchQuery: string;
  automationActiveSection: string | null;
  automationActiveSubsection: string | null;
  infrastructureFormMode: "form" | "raw";
  infrastructureSearchQuery: string;
  infrastructureActiveSection: string | null;
  infrastructureActiveSubsection: string | null;
  aiAgentsFormMode: "form" | "raw";
  aiAgentsSearchQuery: string;
  aiAgentsActiveSection: string | null;
  aiAgentsActiveSubsection: string | null;
  apiKeysLoading: boolean;
  apiKeysLoaded: boolean;
  apiKeysSavingProviderId: ApiKeyProviderId | null;
  apiKeysTestingProviderId: ApiKeyProviderId | null;
  apiKeysModelSaving: boolean;
  apiKeysCurrentModel: string;
  apiKeysModelOption: string;
  apiKeysCustomModelInput: string;
  apiKeysConfigHash: string | null;
  apiKeysPageMessage: ApiKeyMessage | null;
  apiKeysElevenLabsInput: string;
  apiKeysElevenLabsConfigured: boolean;
  apiKeysElevenLabsSaving: boolean;
  apiKeysElevenLabsTesting: boolean;
  apiKeysElevenLabsConfigHash: string | null;
  apiKeysElevenLabsMessage: ApiKeyMessage | null;
  apiKeyProviderInputs: Record<ApiKeyProviderId, string>;
  apiKeyProviderStatuses: Record<ApiKeyProviderId, ApiKeyProviderStatus | null>;
  apiKeyProviderMessages: Record<ApiKeyProviderId, ApiKeyMessage | null>;
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
  nostrProfileFormState: NostrProfileFormState | null;
  nostrProfileAccountId: string | null;
  configFormDirty: boolean;
  presenceLoading: boolean;
  presenceEntries: PresenceEntry[];
  presenceError: string | null;
  presenceStatus: string | null;
  agentsLoading: boolean;
  agentsList: AgentsListResult | null;
  agentsError: string | null;
  agentsSelectedId: string | null;
  toolsCatalogLoading: boolean;
  toolsCatalogError: string | null;
  toolsCatalogResult: ToolsCatalogResult | null;
  toolsEffectiveLoading: boolean;
  toolsEffectiveLoadingKey: string | null;
  toolsEffectiveResultKey: string | null;
  toolsEffectiveError: string | null;
  toolsEffectiveResult: import("./types.js").ToolsEffectiveResult | null;
  agentsPanel: "overview" | "files" | "tools" | "skills" | "channels" | "cron";
  agentFilesLoading: boolean;
  agentFilesError: string | null;
  agentFilesList: AgentsFilesListResult | null;
  agentFileContents: Record<string, string>;
  agentFileDrafts: Record<string, string>;
  agentFileActive: string | null;
  agentFileSaving: boolean;
  agentIdentityLoading: boolean;
  agentIdentityError: string | null;
  agentIdentityById: Record<string, AgentIdentityResult>;
  agentSoulLoading: boolean;
  agentSoulContentById: Record<string, string | null>;
  agentSkillsLoading: boolean;
  agentSkillsError: string | null;
  agentSkillsReport: SkillStatusReport | null;
  agentSkillsAgentId: string | null;
  employeesLoading: boolean;
  employeesError: string | null;
  employeesDashboard: EmployeesDashboardResult | null;
  employeesFilterAgentId: KovaEmployeeId | null;
  canvasRefreshing: boolean;
  canvasStatus: CanvasStatus;
  canvasFrameUrl: string | null;
  canvasSelectedAgentId: string;
  voiceSpeaking: boolean;
  voiceMessage: ApiKeyMessage | null;
  routingSaving: boolean;
  routingDirty: boolean;
  routingAssignments: RoutingAssignments;
  routingMessage: RoutingMessage | null;
  meetingsTitle: string;
  meetingsTranscript: string;
  meetingsSourceName: string | null;
  meetingsAnalyzing: boolean;
  meetingsSendingTelegram: boolean;
  meetingsError: string | null;
  meetingsNotice: string | null;
  meetingsResult: MeetingAnalysisResult | null;
  meetingsHistory: MeetingAnalysisResult[];
  showAgentCreator: boolean;
  agentCreatorStep: 1 | 2 | 3;
  agentCreatorCreating: boolean;
  agentCreatorDraft: AgentCreatorDraft;
  agentCreatorSuccess: string | null;
  agentCreatorError: string | null;
  inboxSessions: GatewaySessionRow[] | null;
  inboxLoading: boolean;
  inboxError: string | null;
  inboxChannelFilter: InboxChannelFilter;
  sessionsLoading: boolean;
  sessionsResult: SessionsListResult | null;
  sessionsError: string | null;
  sessionsFilterActive: string;
  sessionsFilterLimit: string;
  sessionsIncludeGlobal: boolean;
  sessionsIncludeUnknown: boolean;
  sessionsHideCron: boolean;
  sessionsSearchQuery: string;
  sessionsSortColumn: "key" | "kind" | "updated" | "tokens";
  sessionsSortDir: "asc" | "desc";
  sessionsPage: number;
  sessionsPageSize: number;
  sessionsSelectedKeys: Set<string>;
  usageLoading: boolean;
  usageResult: SessionsUsageResult | null;
  usageCostSummary: CostUsageSummary | null;
  usageError: string | null;
  usageStartDate: string;
  usageEndDate: string;
  usageSelectedSessions: string[];
  usageSelectedDays: string[];
  usageSelectedHours: number[];
  usageChartMode: "tokens" | "cost";
  usageDailyChartMode: "total" | "by-type";
  usageTimeSeriesMode: "cumulative" | "per-tun";
  usageTimeSeriesBreakdownMode: "total" | "by-type";
  usageTimeSeries: SessionUsageTimeSeries | null;
  usageTimeSeriesLoading: boolean;
  usageTimeSeriesCursorStart: number | null;
  usageTimeSeriesCursorEnd: number | null;
  usageSessionLogs: SessionLogEntry[] | null;
  usageSessionLogsLoading: boolean;
  usageSessionLogsExpanded: boolean;
  usageQuery: string;
  usageQueryDraft: string;
  usageQueryDebounceTimer: number | null;
  usageSessionSort: "tokens" | "cost" | "recent" | "messages" | "errors";
  usageSessionSortDir: "asc" | "desc";
  usageRecentSessions: string[];
  usageTimeZone: "local" | "utc";
  usageContextExpanded: boolean;
  usageHeaderPinned: boolean;
  usageSessionsTab: "all" | "recent";
  usageVisibleColumns: string[];
  usageLogFilterRoles: import("./views/usage.js").SessionLogRole[];
  usageLogFilterTools: string[];
  usageLogFilterHasTools: boolean;
  usageLogFilterQuery: string;
} & Pick<
  CronState,
  | "cronLoading"
  | "cronJobsLoadingMore"
  | "cronJobs"
  | "cronJobsTotal"
  | "cronJobsHasMore"
  | "cronJobsNextOffset"
  | "cronJobsLimit"
  | "cronJobsQuery"
  | "cronJobsEnabledFilter"
  | "cronJobsScheduleKindFilter"
  | "cronJobsLastStatusFilter"
  | "cronJobsSortBy"
  | "cronJobsSortDir"
  | "cronStatus"
  | "cronError"
  | "cronForm"
  | "cronFieldErrors"
  | "cronEditingJobId"
  | "cronRunsJobId"
  | "cronRunsLoadingMore"
  | "cronRuns"
  | "cronRunsTotal"
  | "cronRunsHasMore"
  | "cronRunsNextOffset"
  | "cronRunsLimit"
  | "cronRunsScope"
  | "cronRunsStatuses"
  | "cronRunsDeliveryStatuses"
  | "cronRunsStatusFilter"
  | "cronRunsQuery"
  | "cronRunsSortDir"
  | "cronBusy"
> &
  Pick<CronModelSuggestionsState, "cronModelSuggestions"> & {
    skillsLoading: boolean;
    skillsReport: SkillStatusReport | null;
    skillsError: string | null;
    skillsFilter: string;
    skillsStatusFilter: "all" | "ready" | "needs-setup" | "disabled" | "marketplace";
    skillEdits: Record<string, string>;
    skillMessages: Record<string, SkillMessage>;
    skillsBusyKey: string | null;
    skillsDetailKey: string | null;
    kova_marketplaceLoading: boolean;
    kova_marketplaceSkills: KovaMarketplaceSkill[];
    kova_marketplaceError: string | null;
    kova_marketplaceCategory: KovaMarketplaceCategory;
    kova_installedLoading: boolean;
    kova_installedError: string | null;
    kova_installedSkillIds: string[];
    kova_marketplaceBusyId: string | null;
    healthLoading: boolean;
    healthResult: HealthSummary | null;
    healthError: string | null;
    debugLoading: boolean;
    debugStatus: StatusSummary | null;
    debugHealth: HealthSummary | null;
    debugModels: ModelCatalogEntry[];
    debugHeartbeat: unknown;
    debugCallMethod: string;
    debugCallParams: string;
    debugCallResult: string | null;
    debugCallError: string | null;
    logsLoading: boolean;
    logsError: string | null;
    logsFile: string | null;
    logsEntries: LogEntry[];
    logsFilterText: string;
    logsLevelFilters: Record<LogLevel, boolean>;
    logsAutoFollow: boolean;
    logsTruncated: boolean;
    logsCursor: number | null;
    logsLastFetchAt: number | null;
    logsLimit: number;
    logsMaxBytes: number;
    logsAtBottom: boolean;
    updateAvailable: import("./types.js").UpdateAvailable | null;
    attentionItems: AttentionItem[];
    paletteOpen: boolean;
    paletteQuery: string;
    paletteActiveIndex: number;
    streamMode: boolean;
    overviewShowGatewayToken: boolean;
    overviewShowGatewayPassword: boolean;
    overviewLogLines: string[];
    overviewLogCursor: number;
    client: GatewayBrowserClient | null;
    refreshSessionsAfterChat: Set<string>;
    connect: () => void;
    setTab: (tab: Tab) => void;
    setSetupName: (value: string) => void;
    setSetupProvider: (provider: ApiKeyProviderId) => void;
    setSetupApiKey: (value: string) => void;
    setSetupChannel: (channel: "telegram" | "whatsapp" | "skip") => void;
    setSetupTelegramToken: (value: string) => void;
    goToPreviousSetupStep: () => void;
    advanceSetupStep: () => void;
    completeSetup: () => Promise<void>;
    setOnboardingStep: (step: 1 | 2 | 3) => void;
    selectOnboardingProvider: (provider: ApiKeyProviderId) => void;
    completeOnboarding: () => void;
    skipOnboarding: () => void;
    setTheme: (theme: ThemeName, context?: ThemeTransitionContext) => void;
    setThemeMode: (mode: ThemeMode, context?: ThemeTransitionContext) => void;
    setBorderRadius: (value: number) => void;
    applySettings: (next: UiSettings) => void;
    loadOverview: () => Promise<void>;
    loadAssistantIdentity: () => Promise<void>;
    loadCron: () => Promise<void>;
    loadInbox: () => Promise<void>;
    setInboxFilter: (filter: InboxChannelFilter) => void;
    handleCanvasAgentChange: (agentId: string) => void;
    refreshCanvas: () => Promise<void>;
    openCanvasInNewTab: () => Promise<void>;
    handleRoutingAssignmentChange: (channel: RoutingChannelId, agentId: string) => void;
    applyRoutingPreset: (agentId: string) => void;
    saveRouting: () => Promise<void>;
    handleMeetingsTitleChange: (next: string) => void;
    handleMeetingsTranscriptChange: (next: string) => void;
    handleMeetingsFileSelect: (file: File | null) => Promise<void>;
    analyzeMeeting: () => Promise<void>;
    saveMeetingResult: () => void;
    loadMeetingHistoryEntry: (id: string) => void;
    clearMeetingHistory: () => void;
    copyMeetingSection: (label: string, value: string) => Promise<void>;
    sendMeetingFollowUpViaTelegram: () => Promise<void>;
    openAgentCreator: () => void;
    closeAgentCreator: () => void;
    createEmployee: (params: AgentCreatorDraft) => Promise<void>;
    saveBriefing: () => Promise<void>;
    handleWhatsAppStart: (force: boolean) => Promise<void>;
    handleWhatsAppWait: () => Promise<void>;
    handleWhatsAppLogout: () => Promise<void>;
    handleChannelConfigSave: () => Promise<void>;
    handleChannelConfigReload: () => Promise<void>;
    handleNostrProfileEdit: (accountId: string, profile: NostrProfile | null) => void;
    handleNostrProfileCancel: () => void;
    handleNostrProfileFieldChange: (field: keyof NostrProfile, value: string) => void;
    handleNostrProfileSave: () => Promise<void>;
    handleNostrProfileImport: () => Promise<void>;
    handleNostrProfileToggleAdvanced: () => void;
    handleExecApprovalDecision: (decision: "allow-once" | "allow-always" | "deny") => Promise<void>;
    handleGatewayUrlConfirm: () => void;
    handleGatewayUrlCancel: () => void;
    handleConfigLoad: () => Promise<void>;
    handleConfigSave: () => Promise<void>;
    handleConfigApply: () => Promise<void>;
    handleConfigFormUpdate: (path: string, value: unknown) => void;
    handleConfigFormModeChange: (mode: "form" | "raw") => void;
    handleConfigRawChange: (raw: string) => void;
    handleInstallSkill: (key: string) => Promise<void>;
    handleUpdateSkill: (key: string) => Promise<void>;
    handleToggleSkillEnabled: (key: string, enabled: boolean) => Promise<void>;
    handleUpdateSkillEdit: (key: string, value: string) => void;
    handleSaveSkillApiKey: (key: string, apiKey: string) => Promise<void>;
    handleCronToggle: (jobId: string, enabled: boolean) => Promise<void>;
    handleCronRun: (jobId: string) => Promise<void>;
    handleCronRemove: (jobId: string) => Promise<void>;
    handleCronAdd: () => Promise<void>;
    handleCronRunsLoad: (jobId: string) => Promise<void>;
    handleCronFormUpdate: (path: string, value: unknown) => void;
    handleSessionsLoad: () => Promise<void>;
    handleSessionsPatch: (key: string, patch: unknown) => Promise<void>;
    handleLoadNodes: () => Promise<void>;
    handleLoadPresence: () => Promise<void>;
    handleLoadSkills: () => Promise<void>;
    handleLoadDebug: () => Promise<void>;
    handleLoadLogs: () => Promise<void>;
    handleDebugCall: () => Promise<void>;
    handleRunUpdate: () => Promise<void>;
    setPassword: (next: string) => void;
    setChatMessage: (next: string) => void;
    handleSendChat: (messageOverride?: string, opts?: { restoreDraft?: boolean }) => Promise<void>;
    handleAbortChat: () => Promise<void>;
    removeQueuedMessage: (id: string) => void;
    handleChatScroll: (event: Event) => void;
    resetToolStream: () => void;
    resetChatScroll: () => void;
    exportLogs: (lines: string[], label: string) => void;
    handleLogsScroll: (event: Event) => void;
    handleOpenSidebar: (content: string) => void;
    handleCloseSidebar: () => void;
    handleSplitRatioChange: (ratio: number) => void;
  };
