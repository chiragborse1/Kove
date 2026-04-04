import { html, nothing } from "lit";
import { ref } from "lit/directives/ref.js";
import type {
  KovaMarketplaceCategory,
  KovaMarketplaceSkill,
  SkillMessageMap,
} from "../controllers/skills.ts";
import { clampText } from "../format.ts";
import { resolveSafeExternalUrl } from "../open-external-url.ts";
import type { SkillStatusEntry, SkillStatusReport } from "../types.ts";
import { groupSkills } from "./skills-grouping.ts";
import {
  computeSkillMissing,
  computeSkillReasons,
  renderSkillStatusChips,
} from "./skills-shared.ts";

function safeExternalHref(raw?: string): string | null {
  if (!raw) {
    return null;
  }
  return resolveSafeExternalUrl(raw, window.location.href);
}

export type SkillsStatusFilter = "all" | "ready" | "needs-setup" | "disabled" | "marketplace";

export type SkillsProps = {
  connected: boolean;
  loading: boolean;
  report: SkillStatusReport | null;
  error: string | null;
  filter: string;
  statusFilter: SkillsStatusFilter;
  edits: Record<string, string>;
  busyKey: string | null;
  messages: SkillMessageMap;
  detailKey: string | null;
  kova_marketplaceLoading: boolean;
  kova_marketplaceSkills: KovaMarketplaceSkill[];
  kova_marketplaceError: string | null;
  kova_marketplaceCategory: KovaMarketplaceCategory;
  kova_marketplaceInstalledIds: string[];
  kova_marketplaceBusyId: string | null;
  onFilterChange: (next: string) => void;
  onStatusFilterChange: (next: SkillsStatusFilter) => void;
  onRefresh: () => void;
  onToggle: (skillKey: string, enabled: boolean) => void;
  onEdit: (skillKey: string, value: string) => void;
  onSaveKey: (skillKey: string) => void;
  onInstall: (skillKey: string, name: string, installId: string) => void;
  onDetailOpen: (skillKey: string) => void;
  onDetailClose: () => void;
  onKovaMarketplaceCategoryChange: (next: KovaMarketplaceCategory) => void;
  onKovaMarketplaceInstall: (skill: KovaMarketplaceSkill) => void;
};

type StatusTabDef = { id: SkillsStatusFilter; label: string };
type KovaCategoryTabDef = { id: KovaMarketplaceCategory; label: string };

const STATUS_TABS: StatusTabDef[] = [
  { id: "all", label: "All" },
  { id: "ready", label: "Ready" },
  { id: "needs-setup", label: "Needs Setup" },
  { id: "disabled", label: "Disabled" },
  { id: "marketplace", label: "Marketplace" },
];

const KOVA_CATEGORY_TABS: KovaCategoryTabDef[] = [
  { id: "all", label: "All" },
  { id: "Productivity", label: "Productivity" },
  { id: "News", label: "News" },
  { id: "Finance", label: "Finance" },
  { id: "Developer", label: "Developer" },
  { id: "Social", label: "Social" },
];

function skillMatchesStatus(
  skill: SkillStatusEntry,
  status: Exclude<SkillsStatusFilter, "marketplace">,
): boolean {
  switch (status) {
    case "all":
      return true;
    case "ready":
      return !skill.disabled && skill.eligible;
    case "needs-setup":
      return !skill.disabled && !skill.eligible;
    case "disabled":
      return skill.disabled;
  }
}

function skillStatusClass(skill: SkillStatusEntry): string {
  if (skill.disabled) {
    return "muted";
  }
  return skill.eligible ? "ok" : "warn";
}

function kova_marketplaceMatchesFilter(skill: KovaMarketplaceSkill, filter: string): boolean {
  if (!filter) {
    return true;
  }
  const haystack = [skill.name, skill.description].join(" ").toLowerCase();
  return haystack.includes(filter);
}

function kova_marketplaceMatchesCategory(
  skill: KovaMarketplaceSkill,
  category: KovaMarketplaceCategory,
): boolean {
  return category === "all" || skill.category === category;
}

function kova_renderMarketplace(props: SkillsProps) {
  const filter = props.filter.trim().toLowerCase();
  const filtered = props.kova_marketplaceSkills.filter(
    (skill) =>
      kova_marketplaceMatchesCategory(skill, props.kova_marketplaceCategory) &&
      kova_marketplaceMatchesFilter(skill, filter),
  );

  return html`
    <div
      class="filters"
      style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-top: 12px;"
    >
      <label class="field" style="flex: 1; min-width: 180px;">
        <input
          .value=${props.filter}
          @input=${(e: Event) => props.onFilterChange((e.target as HTMLInputElement).value)}
          placeholder="Search marketplace"
          autocomplete="off"
          name="skills-filter"
        />
      </label>
      <div class="muted">${filtered.length} shown</div>
    </div>

    <div class="agent-tabs" style="margin-top: 12px; flex-wrap: wrap;">
      ${KOVA_CATEGORY_TABS.map(
        (tab) => html`
          <button
            class="agent-tab ${props.kova_marketplaceCategory === tab.id ? "active" : ""}"
            @click=${() => props.onKovaMarketplaceCategoryChange(tab.id)}
          >
            ${tab.label}
          </button>
        `,
      )}
    </div>

    ${props.kova_marketplaceError
      ? html`<div class="callout danger" style="margin-top: 12px;">
          ${props.kova_marketplaceError}
        </div>`
      : nothing}
    ${filtered.length === 0
      ? html`
          <div class="muted" style="margin-top: 16px;">
            ${props.kova_marketplaceLoading
              ? "Loading marketplace..."
              : "No marketplace skills found."}
          </div>
        `
      : html`
          <div
            class="kova-marketplace-grid"
            style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; margin-top: 16px;"
          >
            ${filtered.map((skill) => kova_renderMarketplaceCard(skill, props))}
          </div>
        `}
  `;
}

function kova_renderMarketplaceCard(skill: KovaMarketplaceSkill, props: SkillsProps) {
  const installed = props.kova_marketplaceInstalledIds.includes(skill.id);
  const busy = props.kova_marketplaceBusyId === skill.id;
  const buttonLabel = installed ? "Installed" : busy ? "Installing..." : "Install";

  return html`
    <div
      class="list-item"
      style="display: grid; grid-template-columns: minmax(0, 3fr) minmax(96px, 1fr); gap: 14px; align-items: start; border: 1px solid var(--border);"
    >
      <div class="list-main" style="min-width: 0;">
        <div
          class="list-title"
          style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;"
        >
          <span>${skill.name}</span>
          <span class="chip">${skill.category}</span>
          ${skill.free ? html`<span class="chip chip-ok">Free</span>` : nothing}
          ${installed ? html`<span class="chip">Installed</span>` : nothing}
        </div>
        <div
          class="list-sub"
          style="margin-top: 6px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;"
        >
          ${skill.description || "No description provided."}
        </div>
        <div class="muted" style="margin-top: 8px; font-size: 12px;">By ${skill.author}</div>
      </div>
      <div style="display: flex; justify-content: flex-end;">
        <button
          class="btn ${installed ? "" : "primary"}"
          ?disabled=${installed || busy || !props.connected}
          @click=${() => props.onKovaMarketplaceInstall(skill)}
        >
          ${buttonLabel}
        </button>
      </div>
    </div>
  `;
}

export function renderSkills(props: SkillsProps) {
  const skills = props.report?.skills ?? [];

  const statusCounts: Record<SkillsStatusFilter, number> = {
    all: skills.length,
    ready: 0,
    "needs-setup": 0,
    disabled: 0,
    marketplace: props.kova_marketplaceSkills.length,
  };
  for (const s of skills) {
    if (s.disabled) {
      statusCounts.disabled++;
    } else if (s.eligible) {
      statusCounts.ready++;
    } else {
      statusCounts["needs-setup"]++;
    }
  }

  const afterStatus =
    props.statusFilter === "marketplace"
      ? skills
      : props.statusFilter === "all"
        ? skills
        : skills.filter((s) => skillMatchesStatus(s, props.statusFilter));

  const filter = props.filter.trim().toLowerCase();
  const filtered = filter
    ? afterStatus.filter((skill) =>
        [skill.name, skill.description, skill.source].join(" ").toLowerCase().includes(filter),
      )
    : afterStatus;
  const groups = groupSkills(filtered);

  const detailSkill =
    props.statusFilter !== "marketplace" && props.detailKey
      ? (skills.find((s) => s.skillKey === props.detailKey) ?? null)
      : null;

  return html`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Skills</div>
          <div class="card-sub">
            ${props.statusFilter === "marketplace"
              ? "Discover and install marketplace skills."
              : "Installed skills and their status."}
          </div>
        </div>
        <button class="btn" ?disabled=${props.loading} @click=${props.onRefresh}>
          ${props.loading ? "Loading..." : "Refresh"}
        </button>
      </div>

      <div class="agent-tabs" style="margin-top: 14px;">
        ${STATUS_TABS.map(
          (tab) => html`
            <button
              class="agent-tab ${props.statusFilter === tab.id ? "active" : ""}"
              @click=${() => props.onStatusFilterChange(tab.id)}
            >
              ${tab.label}<span class="agent-tab-count">${statusCounts[tab.id]}</span>
            </button>
          `,
        )}
      </div>

      ${props.statusFilter === "marketplace"
        ? kova_renderMarketplace(props)
        : html`
            <div
              class="filters"
              style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-top: 12px;"
            >
              <label class="field" style="flex: 1; min-width: 180px;">
                <input
                  .value=${props.filter}
                  @input=${(e: Event) => props.onFilterChange((e.target as HTMLInputElement).value)}
                  placeholder="Search skills"
                  autocomplete="off"
                  name="skills-filter"
                />
              </label>
              <div class="muted">${filtered.length} shown</div>
            </div>

            ${props.error
              ? html`<div class="callout danger" style="margin-top: 12px;">${props.error}</div>`
              : nothing}
            ${filtered.length === 0
              ? html`
                  <div class="muted" style="margin-top: 16px">
                    ${!props.connected && !props.report
                      ? "Not connected to gateway."
                      : "No skills found."}
                  </div>
                `
              : html`
                  <div class="agent-skills-groups" style="margin-top: 16px;">
                    ${groups.map(
                      (group) => html`
                        <details class="agent-skills-group" open>
                          <summary class="agent-skills-header">
                            <span>${group.label}</span>
                            <span class="muted">${group.skills.length}</span>
                          </summary>
                          <div class="list skills-grid">
                            ${group.skills.map((skill) => renderSkill(skill, props))}
                          </div>
                        </details>
                      `,
                    )}
                  </div>
                `}
          `}
    </section>

    ${detailSkill ? renderSkillDetail(detailSkill, props) : nothing}
  `;
}

function renderSkill(skill: SkillStatusEntry, props: SkillsProps) {
  const busy = props.busyKey === skill.skillKey;
  const dotClass = skillStatusClass(skill);

  return html`
    <div class="list-item list-item-clickable" @click=${() => props.onDetailOpen(skill.skillKey)}>
      <div class="list-main">
        <div class="list-title" style="display: flex; align-items: center; gap: 8px;">
          <span class="statusDot ${dotClass}"></span>
          ${skill.emoji ? html`<span>${skill.emoji}</span>` : nothing}
          <span>${skill.name}</span>
        </div>
        <div class="list-sub">${clampText(skill.description, 140)}</div>
      </div>
      <div
        class="list-meta"
        style="display: flex; align-items: center; justify-content: flex-end; gap: 10px;"
      >
        <label class="skill-toggle-wrap" @click=${(e: Event) => e.stopPropagation()}>
          <input
            type="checkbox"
            class="skill-toggle"
            .checked=${!skill.disabled}
            ?disabled=${busy}
            @change=${(e: Event) => {
              e.stopPropagation();
              props.onToggle(skill.skillKey, skill.disabled);
            }}
          />
        </label>
      </div>
    </div>
  `;
}

function renderSkillDetail(skill: SkillStatusEntry, props: SkillsProps) {
  const busy = props.busyKey === skill.skillKey;
  const apiKey = props.edits[skill.skillKey] ?? "";
  const message = props.messages[skill.skillKey] ?? null;
  const canInstall = skill.install.length > 0 && skill.missing.bins.length > 0;
  const showBundledBadge = Boolean(skill.bundled && skill.source !== "openclaw-bundled");
  const missing = computeSkillMissing(skill);
  const reasons = computeSkillReasons(skill);
  const ensureModalOpen = (el?: Element) => {
    if (!(el instanceof HTMLDialogElement) || el.open) {
      return;
    }
    el.showModal();
  };

  return html`
    <dialog
      class="md-preview-dialog"
      ${ref(ensureModalOpen)}
      @click=${(e: Event) => {
        const dialog = e.currentTarget as HTMLDialogElement;
        if (e.target === dialog) {
          dialog.close();
        }
      }}
      @close=${props.onDetailClose}
    >
      <div class="md-preview-dialog__panel">
        <div class="md-preview-dialog__header">
          <div
            class="md-preview-dialog__title"
            style="display: flex; align-items: center; gap: 8px;"
          >
            <span class="statusDot ${skillStatusClass(skill)}"></span>
            ${skill.emoji ? html`<span style="font-size: 18px;">${skill.emoji}</span>` : nothing}
            <span>${skill.name}</span>
          </div>
          <button
            class="btn btn--sm"
            @click=${(e: Event) => {
              (e.currentTarget as HTMLElement).closest("dialog")?.close();
            }}
          >
            Close
          </button>
        </div>
        <div class="md-preview-dialog__body" style="display: grid; gap: 16px;">
          <div>
            <div style="font-size: 14px; line-height: 1.5; color: var(--text);">
              ${skill.description}
            </div>
            ${renderSkillStatusChips({ skill, showBundledBadge })}
          </div>

          ${missing.length > 0
            ? html`
                <div
                  class="callout"
                  style="border-color: var(--warn-subtle); background: var(--warn-subtle); color: var(--warn);"
                >
                  <div style="font-weight: 600; margin-bottom: 4px;">Missing requirements</div>
                  <div>${missing.join(", ")}</div>
                </div>
              `
            : nothing}
          ${reasons.length > 0
            ? html`
                <div class="muted" style="font-size: 13px;">Reason: ${reasons.join(", ")}</div>
              `
            : nothing}

          <div style="display: flex; align-items: center; gap: 12px;">
            <label class="skill-toggle-wrap">
              <input
                type="checkbox"
                class="skill-toggle"
                .checked=${!skill.disabled}
                ?disabled=${busy}
                @change=${() => props.onToggle(skill.skillKey, skill.disabled)}
              />
            </label>
            <span style="font-size: 13px; font-weight: 500;">
              ${skill.disabled ? "Disabled" : "Enabled"}
            </span>
            ${canInstall
              ? html`<button
                  class="btn"
                  ?disabled=${busy}
                  @click=${() => props.onInstall(skill.skillKey, skill.name, skill.install[0].id)}
                >
                  ${busy ? "Installing..." : skill.install[0].label}
                </button>`
              : nothing}
          </div>

          ${message
            ? html`<div class="callout ${message.kind === "error" ? "danger" : "success"}">
                ${message.message}
              </div>`
            : nothing}
          ${skill.primaryEnv
            ? html`
                <div style="display: grid; gap: 8px;">
                  <div class="field">
                    <span
                      >API key
                      <span class="muted" style="font-weight: normal; font-size: 0.88em;"
                        >(${skill.primaryEnv})</span
                      ></span
                    >
                    <input
                      type="password"
                      .value=${apiKey}
                      @input=${(e: Event) =>
                        props.onEdit(skill.skillKey, (e.target as HTMLInputElement).value)}
                    />
                  </div>
                  ${(() => {
                    const href = safeExternalHref(skill.homepage);
                    return href
                      ? html`<div class="muted" style="font-size: 13px;">
                          Get your key:
                          <a href="${href}" target="_blank" rel="noopener noreferrer"
                            >${skill.homepage}</a
                          >
                        </div>`
                      : nothing;
                  })()}
                  <button
                    class="btn primary"
                    ?disabled=${busy}
                    @click=${() => props.onSaveKey(skill.skillKey)}
                  >
                    Save key
                  </button>
                </div>
              `
            : nothing}

          <div
            style="border-top: 1px solid var(--border); padding-top: 12px; display: grid; gap: 6px; font-size: 12px; color: var(--muted);"
          >
            <div><span style="font-weight: 600;">Source:</span> ${skill.source}</div>
            <div style="font-family: var(--mono); word-break: break-all;">${skill.filePath}</div>
            ${(() => {
              const safeHref = safeExternalHref(skill.homepage);
              return safeHref
                ? html`<div>
                    <a href="${safeHref}" target="_blank" rel="noopener noreferrer"
                      >${skill.homepage}</a
                    >
                  </div>`
                : nothing;
            })()}
          </div>
        </div>
      </div>
    </dialog>
  `;
}
