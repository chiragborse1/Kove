import { html, nothing } from "lit";
import {
  KOVA_EMPLOYEES,
  type EmployeeAutonomy,
} from "../controllers/employees.ts";
import type {
  AgentIdentityResult,
  AgentsFilesListResult,
  AgentsListResult,
  ChannelsStatusSnapshot,
  CronJob,
  CronStatus,
  ModelCatalogEntry,
  SkillStatusReport,
  ToolsCatalogResult,
  ToolsEffectiveResult,
} from "../types.ts";
import { renderAgentOverview } from "./agents-panels-overview.ts";
import {
  renderAgentFiles,
  renderAgentChannels,
  renderAgentCron,
} from "./agents-panels-status-files.ts";
import { renderAgentTools, renderAgentSkills } from "./agents-panels-tools-skills.ts";
import { agentBadgeText, buildAgentContext, normalizeAgentLabel } from "./agents-utils.ts";

export type AgentsPanel = "overview" | "files" | "tools" | "skills" | "channels" | "cron";

export type ConfigState = {
  form: Record<string, unknown> | null;
  loading: boolean;
  saving: boolean;
  dirty: boolean;
};

export type ChannelsState = {
  snapshot: ChannelsStatusSnapshot | null;
  loading: boolean;
  error: string | null;
  lastSuccess: number | null;
};

export type CronState = {
  status: CronStatus | null;
  jobs: CronJob[];
  loading: boolean;
  error: string | null;
};

export type AgentFilesState = {
  list: AgentsFilesListResult | null;
  loading: boolean;
  error: string | null;
  active: string | null;
  contents: Record<string, string>;
  drafts: Record<string, string>;
  saving: boolean;
};

export type AgentSkillsState = {
  report: SkillStatusReport | null;
  loading: boolean;
  error: string | null;
  agentId: string | null;
  filter: string;
};

export type ToolsCatalogState = {
  loading: boolean;
  error: string | null;
  result: ToolsCatalogResult | null;
};

export type ToolsEffectiveState = {
  loading: boolean;
  error: string | null;
  result: ToolsEffectiveResult | null;
};

export type AgentsProps = {
  basePath: string;
  loading: boolean;
  error: string | null;
  agentsList: AgentsListResult | null;
  selectedAgentId: string | null;
  activePanel: AgentsPanel;
  config: ConfigState;
  channels: ChannelsState;
  cron: CronState;
  agentFiles: AgentFilesState;
  agentIdentityLoading: boolean;
  agentIdentityError: string | null;
  agentIdentityById: Record<string, AgentIdentityResult>;
  agentSoulContentById: Record<string, string | null>;
  agentSkills: AgentSkillsState;
  toolsCatalog: ToolsCatalogState;
  toolsEffective: ToolsEffectiveState;
  runtimeSessionKey: string;
  runtimeSessionMatchesSelectedAgent: boolean;
  modelCatalog: ModelCatalogEntry[];
  agentCreatorSuccess: string | null;
  onRefresh: () => void;
  onOpenAgentCreator: () => void;
  onSelectAgent: (agentId: string) => void;
  onSelectPanel: (panel: AgentsPanel) => void;
  onLoadFiles: (agentId: string) => void;
  onSelectFile: (name: string) => void;
  onFileDraftChange: (name: string, content: string) => void;
  onFileReset: (name: string) => void;
  onFileSave: (name: string) => void;
  onToolsProfileChange: (agentId: string, profile: string | null, clearAllow: boolean) => void;
  onToolsOverridesChange: (agentId: string, alsoAllow: string[], deny: string[]) => void;
  onConfigReload: () => void;
  onConfigSave: () => void;
  onModelChange: (agentId: string, modelId: string | null) => void;
  onModelFallbacksChange: (agentId: string, fallbacks: string[]) => void;
  onChannelsRefresh: () => void;
  onCronRefresh: () => void;
  onCronRunNow: (jobId: string) => void;
  onSkillsFilterChange: (next: string) => void;
  onSkillsRefresh: () => void;
  onAgentSkillToggle: (agentId: string, skillName: string, enabled: boolean) => void;
  onAgentSkillsClear: (agentId: string) => void;
  onAgentSkillsDisableAll: (agentId: string) => void;
  onSetDefault: (agentId: string) => void;
  onNavigateToChat: (agentId: string) => void;
  onNavigateToActivity: (agentId: string) => void;
};

export function renderAgents(props: AgentsProps) {
  const agents = props.agentsList?.agents ?? [];
  const defaultId = props.agentsList?.defaultId ?? null;
  const selectedId = props.selectedAgentId ?? defaultId ?? agents[0]?.id ?? null;
  const selectedAgent = selectedId
    ? (agents.find((agent) => agent.id === selectedId) ?? null)
    : null;
  const kovaAgents = buildKovaAgents(agents, props.agentIdentityById, props.agentSoulContentById);
  const systemAgent = agents.find((agent) => agent.id === "main") ?? null;
  const otherAgents = agents.filter(
    (agent) => agent.id !== "main" && !isKovaAgent(agent.id, props.agentSoulContentById[agent.id]),
  );
  const selectedSkillCount =
    selectedId && props.agentSkills.agentId === selectedId
      ? (props.agentSkills.report?.skills?.length ?? null)
      : null;

  const channelEntryCount = props.channels.snapshot
    ? Object.keys(props.channels.snapshot.channelAccounts ?? {}).length
    : null;
  const cronJobCount = selectedId
    ? props.cron.jobs.filter((j) => j.agentId === selectedId).length
    : null;
  const tabCounts: Record<string, number | null> = {
    files: props.agentFiles.list?.files?.length ?? null,
    skills: selectedSkillCount,
    channels: channelEntryCount,
    cron: cronJobCount || null,
  };

  return html`
    <div class="agents-layout">
      <section class="card agents-toolbar agents-toolbar--kova">
        <div class="agents-toolbar-row">
          <div>
            <div class="card-title">Kova Employees</div>
            <div class="card-sub">
              Choose a teammate, jump into chat, or inspect their agent workspace below.
            </div>
          </div>
          <div class="agents-toolbar-actions">
            ${selectedAgent
              ? html`
                  <button
                    type="button"
                    class="btn btn--sm btn--ghost"
                    @click=${() => void navigator.clipboard.writeText(selectedAgent.id)}
                    title="Copy agent ID to clipboard"
                  >
                    Copy ID
                  </button>
                  <button
                    type="button"
                    class="btn btn--sm btn--ghost"
                    ?disabled=${Boolean(defaultId && selectedAgent.id === defaultId)}
                    @click=${() => props.onSetDefault(selectedAgent.id)}
                    title=${defaultId && selectedAgent.id === defaultId
                      ? "Already the default agent"
                      : "Set as the default agent"}
                  >
                    ${defaultId && selectedAgent.id === defaultId ? "Default" : "Set Default"}
                  </button>
                `
              : nothing}
            <button
              class="btn btn--sm agents-refresh-btn"
              ?disabled=${props.loading}
              @click=${props.onRefresh}
            >
              ${props.loading ? "Loading…" : "Refresh"}
            </button>
          </div>
        </div>
        ${props.error ? html`<div class="callout danger">${props.error}</div>` : nothing}
      </section>

      <section class="agents-section">
        <div
          class="agents-section__header"
          style="display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; flex-wrap: wrap;"
        >
          <div>
            <div class="card-title">Kova Team</div>
            <div class="card-sub">All Kova employees and custom teammates live here.</div>
          </div>
          <button type="button" class="btn btn--sm primary" @click=${props.onOpenAgentCreator}>
            + New Employee
          </button>
        </div>
        ${props.agentCreatorSuccess
          ? html`<div class="callout success" style="margin-top: 12px;">${props.agentCreatorSuccess}</div>`
          : nothing}
        ${kovaAgents.length === 0
          ? html`<div class="card" style="margin-top: 12px;">
              <div class="card-sub">No Kova employees are available yet.</div>
            </div>`
          : html`<div class="agents-employee-grid">
              ${kovaAgents.map((meta) =>
                renderEmployeeCard({
                  meta,
                  selectedId,
                  defaultId,
                  onSelectAgent: props.onSelectAgent,
                  onNavigateToChat: props.onNavigateToChat,
                  onNavigateToActivity: props.onNavigateToActivity,
                }),
              )}
            </div>`}
      </section>

      <section class="agents-section">
        <div class="agents-section__header">
          <div class="card-title">System</div>
          <div class="card-sub">The default OpenClaw system agent lives here.</div>
        </div>
        ${systemAgent
          ? renderSystemCard({
              agent: systemAgent,
              selectedId,
              defaultId,
              onSelectAgent: props.onSelectAgent,
            })
          : html`
              <div class="card agents-system-card agents-system-card--empty">
                <div class="card-sub">The <code>main</code> agent is not available in the current list.</div>
              </div>
            `}
      </section>

      ${otherAgents.length > 0
        ? html`
            <section class="agents-section">
              <div class="agents-section__header">
                <div class="card-title">Other Agents</div>
                <div class="card-sub">Any additional configured agents stay available here.</div>
              </div>
              <div class="agents-other-grid">
                ${otherAgents.map((agent) =>
                  renderOtherAgentCard({
                    agent,
                    selectedId,
                    defaultId,
                    onSelectAgent: props.onSelectAgent,
                  }),
                )}
              </div>
            </section>
          `
        : nothing}

      <section class="agents-main">
        ${!selectedAgent
          ? html`
              <div class="card">
                <div class="card-title">Select an agent</div>
                <div class="card-sub">Pick an agent above to inspect its workspace and tools.</div>
              </div>
            `
          : html`
              ${renderAgentTabs(
                props.activePanel,
                (panel) => props.onSelectPanel(panel),
                tabCounts,
              )}
              ${props.activePanel === "overview"
                ? renderAgentOverview({
                    agent: selectedAgent,
                    basePath: props.basePath,
                    defaultId,
                    configForm: props.config.form,
                    agentFilesList: props.agentFiles.list,
                    agentIdentity: props.agentIdentityById[selectedAgent.id] ?? null,
                    agentIdentityError: props.agentIdentityError,
                    agentIdentityLoading: props.agentIdentityLoading,
                    configLoading: props.config.loading,
                    configSaving: props.config.saving,
                    configDirty: props.config.dirty,
                    modelCatalog: props.modelCatalog,
                    onConfigReload: props.onConfigReload,
                    onConfigSave: props.onConfigSave,
                    onModelChange: props.onModelChange,
                    onModelFallbacksChange: props.onModelFallbacksChange,
                    onSelectPanel: props.onSelectPanel,
                  })
                : nothing}
              ${props.activePanel === "files"
                ? renderAgentFiles({
                    agentId: selectedAgent.id,
                    agentFilesList: props.agentFiles.list,
                    agentFilesLoading: props.agentFiles.loading,
                    agentFilesError: props.agentFiles.error,
                    agentFileActive: props.agentFiles.active,
                    agentFileContents: props.agentFiles.contents,
                    agentFileDrafts: props.agentFiles.drafts,
                    agentFileSaving: props.agentFiles.saving,
                    onLoadFiles: props.onLoadFiles,
                    onSelectFile: props.onSelectFile,
                    onFileDraftChange: props.onFileDraftChange,
                    onFileReset: props.onFileReset,
                    onFileSave: props.onFileSave,
                  })
                : nothing}
              ${props.activePanel === "tools"
                ? renderAgentTools({
                    agentId: selectedAgent.id,
                    configForm: props.config.form,
                    configLoading: props.config.loading,
                    configSaving: props.config.saving,
                    configDirty: props.config.dirty,
                    toolsCatalogLoading: props.toolsCatalog.loading,
                    toolsCatalogError: props.toolsCatalog.error,
                    toolsCatalogResult: props.toolsCatalog.result,
                    toolsEffectiveLoading: props.toolsEffective.loading,
                    toolsEffectiveError: props.toolsEffective.error,
                    toolsEffectiveResult: props.toolsEffective.result,
                    runtimeSessionKey: props.runtimeSessionKey,
                    runtimeSessionMatchesSelectedAgent: props.runtimeSessionMatchesSelectedAgent,
                    onProfileChange: props.onToolsProfileChange,
                    onOverridesChange: props.onToolsOverridesChange,
                    onConfigReload: props.onConfigReload,
                    onConfigSave: props.onConfigSave,
                  })
                : nothing}
              ${props.activePanel === "skills"
                ? renderAgentSkills({
                    agentId: selectedAgent.id,
                    report: props.agentSkills.report,
                    loading: props.agentSkills.loading,
                    error: props.agentSkills.error,
                    activeAgentId: props.agentSkills.agentId,
                    configForm: props.config.form,
                    configLoading: props.config.loading,
                    configSaving: props.config.saving,
                    configDirty: props.config.dirty,
                    filter: props.agentSkills.filter,
                    onFilterChange: props.onSkillsFilterChange,
                    onRefresh: props.onSkillsRefresh,
                    onToggle: props.onAgentSkillToggle,
                    onClear: props.onAgentSkillsClear,
                    onDisableAll: props.onAgentSkillsDisableAll,
                    onConfigReload: props.onConfigReload,
                    onConfigSave: props.onConfigSave,
                  })
                : nothing}
              ${props.activePanel === "channels"
                ? renderAgentChannels({
                    context: buildAgentContext(
                      selectedAgent,
                      props.config.form,
                      props.agentFiles.list,
                      defaultId,
                      props.agentIdentityById[selectedAgent.id] ?? null,
                    ),
                    configForm: props.config.form,
                    snapshot: props.channels.snapshot,
                    loading: props.channels.loading,
                    error: props.channels.error,
                    lastSuccess: props.channels.lastSuccess,
                    onRefresh: props.onChannelsRefresh,
                    onSelectPanel: props.onSelectPanel,
                  })
                : nothing}
              ${props.activePanel === "cron"
                ? renderAgentCron({
                    context: buildAgentContext(
                      selectedAgent,
                      props.config.form,
                      props.agentFiles.list,
                      defaultId,
                      props.agentIdentityById[selectedAgent.id] ?? null,
                    ),
                    agentId: selectedAgent.id,
                    jobs: props.cron.jobs,
                    status: props.cron.status,
                    loading: props.cron.loading,
                    error: props.cron.error,
                    onRefresh: props.onCronRefresh,
                    onRunNow: props.onCronRunNow,
                    onSelectPanel: props.onSelectPanel,
                  })
                : nothing}
            `}
      </section>
    </div>
  `;
}

function renderEmployeeCard(args: {
  meta: {
    id: string;
    name: string;
    role: string;
    avatar: string;
    autonomy: EmployeeAutonomy;
    agent: AgentsListResult["agents"][number];
  };
  selectedId: string | null;
  defaultId: string | null;
  onSelectAgent: (agentId: string) => void;
  onNavigateToChat: (agentId: string) => void;
  onNavigateToActivity: (agentId: string) => void;
}) {
  const { meta, selectedId, defaultId } = args;
  const isSelected = selectedId === meta.agent.id;
  const isDefault = defaultId === meta.agent.id;
  const badge = autonomyBadgeClass(meta.autonomy);
  return html`
    <article
      class="card agents-employee-card ${isSelected ? "is-selected" : ""}"
      @click=${() => args.onSelectAgent(meta.agent.id)}
    >
      <div class="agents-employee-card__header">
        <div class="agents-employee-card__avatar">${meta.avatar}</div>
        <div class="agents-employee-card__identity">
          <div class="agents-employee-card__name-row">
            <div class="agents-employee-card__name">${meta.name}</div>
            ${isDefault ? html`<span class="agents-chip">Default</span>` : nothing}
            ${isSelected ? html`<span class="agents-chip agents-chip--selected">Selected</span>` : nothing}
          </div>
          <div class="agents-employee-card__role">${meta.role}</div>
        </div>
      </div>
      <div class="agents-employee-card__meta-row">
        <span class="agents-autonomy-badge ${badge}">${meta.autonomy}</span>
        <span class="agents-employee-card__agent-id">${meta.agent.id}</span>
      </div>
      <div class="agents-employee-card__actions">
        <button
          type="button"
          class="btn btn--sm"
          @click=${(event: MouseEvent) => {
            event.stopPropagation();
            args.onNavigateToChat(meta.agent.id);
          }}
        >
          Chat
        </button>
        <button
          type="button"
          class="btn btn--sm btn--ghost"
          @click=${(event: MouseEvent) => {
            event.stopPropagation();
            args.onNavigateToActivity(meta.agent.id);
          }}
        >
          Activity
        </button>
      </div>
    </article>
  `;
}

function renderSystemCard(args: {
  agent: AgentsListResult["agents"][number];
  selectedId: string | null;
  defaultId: string | null;
  onSelectAgent: (agentId: string) => void;
}) {
  const { agent, selectedId, defaultId } = args;
  const selected = agent.id === selectedId;
  const badge = agentBadgeText(agent.id, defaultId);
  return html`
    <article
      class="card agents-system-card ${selected ? "is-selected" : ""}"
      @click=${() => args.onSelectAgent(agent.id)}
    >
      <div class="agents-system-card__content">
        <div class="agents-system-card__icon">⚙️</div>
        <div>
          <div class="agents-system-card__title-row">
            <div class="agents-system-card__title">${normalizeAgentLabel(agent)}</div>
            ${badge ? html`<span class="agents-chip">${badge}</span>` : nothing}
          </div>
          <div class="agents-system-card__sub">OpenClaw system agent</div>
        </div>
      </div>
      <button type="button" class="btn btn--sm btn--ghost">Inspect</button>
    </article>
  `;
}

function renderOtherAgentCard(args: {
  agent: AgentsListResult["agents"][number];
  selectedId: string | null;
  defaultId: string | null;
  onSelectAgent: (agentId: string) => void;
}) {
  const { agent, selectedId, defaultId } = args;
  const selected = agent.id === selectedId;
  const badge = agentBadgeText(agent.id, defaultId);
  return html`
    <article class="card agents-other-card ${selected ? "is-selected" : ""}">
      <div>
        <div class="agents-other-card__title-row">
          <div class="agents-other-card__title">${normalizeAgentLabel(agent)}</div>
          ${badge ? html`<span class="agents-chip">${badge}</span>` : nothing}
        </div>
        <div class="agents-other-card__sub">${agent.id}</div>
      </div>
      <button type="button" class="btn btn--sm btn--ghost" @click=${() => args.onSelectAgent(agent.id)}>
        Inspect
      </button>
    </article>
  `;
}

function autonomyBadgeClass(autonomy: EmployeeAutonomy) {
  switch (autonomy) {
    case "Supervised":
      return "agents-autonomy-badge--supervised";
    case "Autonomous":
      return "agents-autonomy-badge--autonomous";
    default:
      return "agents-autonomy-badge--act-notify";
  }
}

type ParsedKovaSoul = {
  kova: boolean;
  name?: string;
  role?: string;
  emoji?: string;
  autonomy?: EmployeeAutonomy;
};

function buildKovaAgents(
  agents: AgentsListResult["agents"],
  identityById: Record<string, AgentIdentityResult>,
  soulContentById: Record<string, string | null>,
) {
  const builtInOrder = new Map(KOVA_EMPLOYEES.map((employee, index) => [employee.id, index] as const));
  return agents
    .filter((agent) => agent.id !== "main" && isKovaAgent(agent.id, soulContentById[agent.id]))
    .map((agent) => {
      const builtIn = KOVA_EMPLOYEES.find((employee) => employee.id === agent.id);
      const identity = identityById[agent.id];
      const soul = parseKovaSoul(soulContentById[agent.id]);
      return {
        id: agent.id,
        name: soul?.name ?? identity?.name ?? builtIn?.name ?? normalizeAgentLabel(agent),
        role: soul?.role ?? builtIn?.role ?? "Kova Employee",
        avatar: soul?.emoji ?? identity?.emoji ?? builtIn?.avatar ?? "\u{1F916}",
        autonomy: soul?.autonomy ?? builtIn?.autonomy ?? "Act + Notify",
        agent,
        order: builtInOrder.get(agent.id) ?? KOVA_EMPLOYEES.length,
      };
    })
    .toSorted((left, right) =>
      left.order === right.order ? left.name.localeCompare(right.name) : left.order - right.order,
    );
}

function isKovaAgent(agentId: string, soulContent: string | null | undefined): boolean {
  return agentId.startsWith("kova-") || parseKovaSoul(soulContent)?.kova === true;
}

function parseKovaSoul(content: string | null | undefined): ParsedKovaSoul | null {
  if (!content) {
    return null;
  }
  const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  const frontmatter = frontmatterMatch?.[1] ?? "";
  const body = frontmatterMatch ? content.slice(frontmatterMatch[0].length) : content;
  const result: ParsedKovaSoul = { kova: false };

  for (const line of frontmatter.split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator < 0) {
      continue;
    }
    const key = line.slice(0, separator).trim().toLowerCase();
    const rawValue = line.slice(separator + 1).trim();
    const value = unquoteFrontmatterValue(rawValue);
    switch (key) {
      case "kova":
        result.kova = /^(true|1|yes)$/i.test(value);
        break;
      case "name":
        result.name = value || undefined;
        break;
      case "role":
        result.role = value || undefined;
        break;
      case "emoji":
        result.emoji = value || undefined;
        break;
      case "autonomy":
        result.autonomy = parseAutonomyValue(value) ?? result.autonomy;
        break;
      default:
        break;
    }
  }

  const headingMatch = body.match(/^#\s+(\S+)\s+(.+?)\s+[—-]\s+(.+)$/m);
  if (headingMatch) {
    result.emoji ??= headingMatch[1]?.trim() || undefined;
    result.name ??= headingMatch[2]?.trim() || undefined;
    result.role ??= headingMatch[3]?.trim() || undefined;
  }

  const autonomyMatch = body.match(/^Level:\s*(.+)$/m);
  if (autonomyMatch) {
    result.autonomy ??= parseAutonomyValue(autonomyMatch[1]);
  }

  return result;
}

function unquoteFrontmatterValue(value: string): string {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    try {
      return JSON.parse(value);
    } catch {
      return value.slice(1, -1);
    }
  }
  return value;
}

function parseAutonomyValue(value: string | undefined): EmployeeAutonomy | undefined {
  const normalized = value?.trim().toLowerCase();
  switch (normalized) {
    case "1":
    case "supervised":
      return "Supervised";
    case "2":
    case "act + notify":
    case "act+notify":
    case "act-notify":
      return "Act + Notify";
    case "3":
    case "autonomous":
      return "Autonomous";
    default:
      return undefined;
  }
}

function renderAgentTabs(
  active: AgentsPanel,
  onSelect: (panel: AgentsPanel) => void,
  counts: Record<string, number | null>,
) {
  const tabs: Array<{ id: AgentsPanel; label: string }> = [
    { id: "overview", label: "Overview" },
    { id: "files", label: "Files" },
    { id: "tools", label: "Tools" },
    { id: "skills", label: "Skills" },
    { id: "channels", label: "Channels" },
    { id: "cron", label: "Cron Jobs" },
  ];
  return html`
    <div class="agent-tabs">
      ${tabs.map(
        (tab) => html`
          <button
            class="agent-tab ${active === tab.id ? "active" : ""}"
            type="button"
            @click=${() => onSelect(tab.id)}
          >
            ${tab.label}${counts[tab.id] != null
              ? html`<span class="agent-tab-count">${counts[tab.id]}</span>`
              : nothing}
          </button>
        `,
      )}
    </div>
  `;
}
