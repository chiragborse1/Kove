import{i as e,n as t}from"./lit-zdTgzAJI.js";import{l as n}from"./format-BahKhiOC.js";import{B as r,H as i,U as a,V as o,W as s,z as c}from"./index-DF5xlLDy.js";var l=[{id:`all`,label:`All`},{id:`telegram`,label:`Telegram`},{id:`whatsapp`,label:`WhatsApp`},{id:`unanswered`,label:`Unanswered`}];function u(){return e`
    ${Array.from({length:3},(t,n)=>e`
      <div class="card" style="display: grid; gap: 14px; opacity: 0.7;" data-skeleton=${n}>
        <div class="row" style="justify-content: space-between; gap: 16px; align-items: center;">
          <div style="display: flex; gap: 12px; align-items: center; min-width: 0;">
            <div style="width: 36px; height: 36px; border-radius: 12px; background: var(--surface); border: 1px solid var(--border);"></div>
            <div style="display: grid; gap: 8px; min-width: 0;">
              <div style="width: 140px; height: 10px; border-radius: 999px; background: var(--surface);"></div>
              <div style="width: 220px; height: 10px; border-radius: 999px; background: var(--surface);"></div>
            </div>
          </div>
          <div style="width: 52px; height: 10px; border-radius: 999px; background: var(--surface);"></div>
        </div>
      </div>
    `)}
  `}function d(n,r){return n.loading?t:(n.sessions??[]).length===0?e`
      <div class="card" style="display: grid; gap: 8px; max-width: 820px;">
        <div class="card-title">No conversations yet</div>
        <div class="card-sub">Connect a channel to start receiving messages.</div>
      </div>
    `:r.length===0?e`
      <div class="card" style="display: grid; gap: 8px; max-width: 820px;">
        <div class="card-title">No conversations match this filter</div>
        <div class="card-sub">Try a different channel filter or refresh the inbox.</div>
      </div>
    `:t}function f(t){let n=a(t);return n===`telegram`?e`<span class="chip chip-ok">✈️ Telegram</span>`:n===`whatsapp`?e`<span class="chip chip-ok">📱 WhatsApp</span>`:e`<span class="chip">Conversation</span>`}function p(r,l){let u=a(r),d=`${c(`chat`,l.basePath)}?session=${encodeURIComponent(r.key)}`,p=r.displayName?.trim()||r.label?.trim()||r.subject?.trim()||r.derivedTitle?.trim()||r.key,m=r.updatedAt?n(r.updatedAt):`n/a`,h=i(r),g=!s(r);return e`
    <a
      href=${d}
      class="card"
      style="display: block; text-decoration: none; color: inherit; transition: transform var(--duration-fast) ease, border-color var(--duration-fast) ease;"
      @click=${e=>{e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||l.onNavigateToChat&&(e.preventDefault(),l.onNavigateToChat(r.key))}}
    >
      <div class="row" style="justify-content: space-between; gap: 16px; align-items: flex-start;">
        <div style="display: flex; gap: 14px; align-items: flex-start; min-width: 0; flex: 1;">
          <div
            style="width: 40px; height: 40px; border-radius: 14px; border: 1px solid var(--border); background: var(--surface); display: inline-flex; align-items: center; justify-content: center; font-size: 18px; flex: 0 0 auto;"
            aria-hidden="true"
          >
            ${u===`whatsapp`?`📱`:`✈️`}
          </div>
          <div style="display: grid; gap: 8px; min-width: 0; flex: 1;">
            <div class="row" style="gap: 8px; flex-wrap: wrap; align-items: center;">
              <div style="font-weight: 600; color: var(--text-strong); min-width: 0;">${p}</div>
              ${f(r)}
            </div>
            <div class="muted" style="font-size: 13px; line-height: 1.45;">
              ${o(r)}
            </div>
            <div class="muted" style="font-size: 12px;">
              ${h}
            </div>
          </div>
        </div>
        <div style="display: grid; gap: 8px; justify-items: end; flex: 0 0 auto;">
          <div class="muted" style="font-size: 12px; white-space: nowrap;">${m}</div>
          ${g?e`
                <span
                  title="Awaiting employee reply"
                  style="width: 10px; height: 10px; border-radius: 999px; background: var(--warn, #f59e0b); display: inline-block;"
                ></span>
              `:t}
        </div>
      </div>
    </a>
  `}function m(n){let i=n.sessions??[],a=r(i,n.filter);return e`
    <section class="page page--settings" style="display: grid; gap: 20px;">
      <div class="card" style="display: grid; gap: 16px; max-width: 920px;">
        <div class="row" style="justify-content: space-between; gap: 12px; align-items: flex-start; flex-wrap: wrap;">
          <div style="display: grid; gap: 4px;">
            <div class="card-title">Inbox</div>
            <div class="card-sub">All conversations across your connected channels.</div>
          </div>
          <button class="btn" ?disabled=${n.loading} @click=${()=>n.onRefresh()}>
            ${n.loading?`Refreshing...`:`Refresh`}
          </button>
        </div>

        <div class="chip-row">
          ${l.map(t=>e`
              <button
                class="chip ${n.filter===t.id?`chip-ok`:``}"
                style="cursor: pointer;"
                @click=${()=>n.onFilterChange(t.id)}
              >
                ${t.label}
              </button>
            `)}
        </div>

        ${n.error?e`<div class="callout danger">${n.error}</div>`:t}
      </div>

      <div style="display: grid; gap: 14px; max-width: 920px;">
        ${n.loading&&i.length===0?u():t}
        ${a.map(e=>p(e,n))}
        ${d(n,a)}
      </div>
    </section>
  `}export{m as renderInbox};
//# sourceMappingURL=inbox-C65pzgtD.js.map