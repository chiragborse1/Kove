import{i as e,n as t}from"./lit-zdTgzAJI.js";import{l as n}from"./format-BahKhiOC.js";function r(r){let a=r.dashboard?.employees??[],o=r.filterAgentId?a.find(e=>e.id===r.filterAgentId)??null:null,s=o?a.filter(e=>e.id===o.id):a,c=(r.dashboard?.activity??[]).filter(e=>!o||e.id===o.id);return e`
    <div class="employees-page">
      <section class="card employees-hero">
        <div>
          <div class="card-title employees-hero__title">Your AI Team</div>
          <div class="card-sub">
            ${a.length===1?`1 employee available`:`${a.length} employees available`}
          </div>
          ${o?e`
                <div class="employees-hero__filter">
                  Showing activity for <strong>${o.avatar} ${o.name}</strong>
                </div>
              `:t}
        </div>
        <div class="employees-hero__actions">
          ${o?e`
                <button class="btn btn--ghost" @click=${r.onClearFilter}>Show all</button>
              `:t}
          <button class="btn" ?disabled=${r.loading} @click=${r.onRefresh}>
            ${r.loading?`Refreshing...`:`Refresh`}
          </button>
        </div>
      </section>

      ${r.error?e`<div class="callout danger">${r.error}</div>`:t}

      ${s.length===0?e`
            <section class="card">
              <div class="muted" style="font-size: 13px;">
                ${r.loading?`Loading Kova employees...`:`No Kova employees found yet. Create one from the Agents page to see it here.`}
              </div>
            </section>
          `:e`
            <section class="employees-grid">
              ${s.map(e=>i(e,r))}
            </section>
          `}

      <section class="card employees-activity">
        <div class="employees-activity__header">
          <div class="card-title">Recent Activity</div>
        </div>
        ${c.length===0?e`
              <div class="employees-activity__empty">
                ${r.loading?`Loading recent activity...`:o?`No recent activity for ${o.name} yet.`:`No activity yet. Start chatting with your employees.`}
              </div>
            `:e`
              <div class="employees-activity__list">
                ${c.map(t=>e`
                    <div class="employees-activity__row">
                      <div class="employees-activity__identity">
                        <span class="employees-activity__avatar">${t.avatar}</span>
                        <span class="employees-activity__name">${t.name}</span>
                      </div>
                      <div class="employees-activity__description">${t.description}</div>
                      <div class="employees-activity__time">
                        ${n(t.timestamp)}
                      </div>
                    </div>
                  `)}
              </div>
            `}
      </section>
    </div>
  `}function i(t,n){return e`
    <article class="card employees-card">
      <div class="employees-card__header">
        <div class="employees-card__identity">
          <div class="employees-card__avatar">${t.avatar}</div>
          <div>
            <div class="employees-card__name">${t.name}</div>
            <div class="employees-card__role">${t.role}</div>
          </div>
        </div>
        <span class="employees-card__badge">${t.autonomy}</span>
      </div>

      <div class="employees-card__status-row">
        <span class="employees-status employees-status--${t.status}">
          <span class="employees-status__dot"></span>
          <span>${o(t.status)}</span>
        </span>
        <span class="employees-card__last-active">Last active: ${s(t.lastActiveAt)}</span>
      </div>

      <div class="employees-card__metrics">
        ${a(`Sessions today`,c(t.sessionsToday))}
        ${a(`Total messages`,c(t.totalMessages))}
      </div>

      <div class="employees-card__actions">
        <button class="btn btn--sm" @click=${()=>n.onOpenChat(t.id)}>Chat</button>
        <button class="btn btn--sm btn--ghost" @click=${()=>n.onViewSessions(t.id)}>
          View sessions
        </button>
      </div>
    </article>
  `}function a(t,n){return e`
    <div class="employees-metric">
      <div class="employees-metric__label">${t}</div>
      <div class="employees-metric__value">${n}</div>
    </div>
  `}function o(e){switch(e){case`active`:return`Active`;case`idle`:return`Idle`;default:return`Never used`}}function s(e){return e?n(e):`never`}function c(e){return new Intl.NumberFormat().format(e)}export{r as renderEmployees};
//# sourceMappingURL=employees-DV-5FV4K.js.map