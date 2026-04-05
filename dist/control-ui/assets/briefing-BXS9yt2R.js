import{i as e,n as t}from"./lit-zdTgzAJI.js";import{m as n,p as r}from"./index-DU0It9SM.js";var i=[{id:`news`,title:`Top News`,description:`Alex finds 5 headlines relevant to your interests.`},{id:`weather`,title:`Weather`,description:`Quick forecast for ${r}.`},{id:`markets`,title:`Markets`,description:`Nifty50, Sensex, and BTC opening prices.`},{id:`tasks`,title:`Tasks Reminder`,description:`Pending items pulled from HEARTBEAT.md.`},{id:`quote`,title:`Quote of the Day`,description:`One short motivational quote to start the day.`}];function a(n){return n?e`
    <div class="callout ${n.kind===`error`?`danger`:`success`}">${n.text}</div>
  `:t}function o(t){let n=[`☀️ Good morning! Here's your Kova briefing for ${t.previewDate}`,``];return t.form.sections.news&&n.push(`📰 TOP NEWS`,`- Headline one`,`- Headline two`,``),t.form.sections.weather&&n.push(`🌤 WEATHER`,`${r}: 31°C, clear skies`,``),t.form.sections.markets&&n.push(`📈 MARKETS`,`Nifty50, Sensex, and BTC opening snapshot`,``),t.form.sections.tasks&&n.push(`✅ TASKS`,`- Follow up on priority items from HEARTBEAT.md`,``),t.form.sections.quote&&n.push(`💬 QUOTE`,`"Small steps still move you forward."`,``),n.push(`— Sent by your Kova team`),e`
    <div
      style="padding: 16px; border-radius: 16px; border: 1px solid var(--border); background: var(--surface); white-space: pre-wrap; font-size: 13px; line-height: 1.6;"
    >
      ${n.join(`
`)}
    </div>
  `}function s(t){return e`
    <div class="callout" style="display: grid; gap: 12px;">
      <div>
        Connect Telegram or WhatsApp first so Kova has somewhere to deliver your morning digest.
      </div>
      <div class="row" style="gap: 8px; flex-wrap: wrap;">
        <button class="btn" @click=${()=>t.onOpenChannels()}>Open Channels</button>
      </div>
    </div>
  `}function c(t){let r=t.availableChannels.length>0,c=t.connected&&!t.loading&&!t.saving&&r&&Object.values(t.form.sections).some(Boolean);return e`
    <section class="page page--settings" style="display: grid; gap: 20px;">
      <div class="card" style="display: grid; gap: 16px; max-width: 920px;">
        <div class="row" style="justify-content: space-between; align-items: flex-start; gap: 16px; flex-wrap: wrap;">
          <div style="display: grid; gap: 6px;">
            <div class="card-title">Daily Briefing</div>
            <div class="card-sub">
              Your AI team delivers a morning digest to your phone every day.
            </div>
          </div>
          <label class="field-inline checkbox" style="font-size: 13px; align-self: center;">
            <input
              type="checkbox"
              .checked=${t.form.enabled}
              @change=${e=>t.onEnabledChange(e.target.checked)}
            />
            <span>${t.form.enabled?`Briefing enabled`:`Briefing disabled`}</span>
          </label>
        </div>
        <div class="muted" style="font-size: 13px;">
          Kova saves this as one cron job and delivers the finished digest to your connected channel.
        </div>
        ${a(t.message)}
      </div>

      <div class="card" style="display: grid; gap: 16px; max-width: 920px;">
        <div style="display: grid; gap: 4px;">
          <div class="card-title">Delivery Settings</div>
          <div class="card-sub">Choose when and where your briefing arrives.</div>
        </div>
        ${r?e`
              <div
                style="display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));"
              >
                <label class="field">
                  <span>Deliver at</span>
                  <select
                    .value=${t.form.time}
                    @change=${e=>t.onTimeChange(e.target.value)}
                    ?disabled=${t.saving}
                  >
                    ${Array.from({length:13},(t,n)=>{let r=300+n*30,i=Math.floor(r/60),a=r%60,o=`${String(i).padStart(2,`0`)}:${String(a).padStart(2,`0`)}`,s=i%12||12,c=i<12?`AM`:`PM`;return e`<option value=${o}>${s}:${String(a).padStart(2,`0`)} ${c}</option>`})}
                  </select>
                </label>

                <label class="field">
                  <span>Send to</span>
                  <select
                    .value=${t.form.channel}
                    @change=${e=>t.onChannelChange(e.target.value)}
                    ?disabled=${t.saving}
                  >
                    ${t.availableChannels.map(t=>e`<option value=${t}>${n(t)}</option>`)}
                  </select>
                </label>
              </div>
              <div class="muted" style="font-size: 12px;">Times are in your local timezone: ${t.timezone}</div>
            `:s(t)}
      </div>

      <div class="card" style="display: grid; gap: 16px; max-width: 920px;">
        <div style="display: grid; gap: 4px;">
          <div class="card-title">Briefing Sections</div>
          <div class="card-sub">Pick the updates Kova should assemble each morning.</div>
        </div>
        <div class="chip-row">
          ${i.map(n=>e`
              <label class="chip" style="display: grid; gap: 4px; min-width: 220px; align-items: start;">
                <span style="display: inline-flex; align-items: center; gap: 8px;">
                  <input
                    type="checkbox"
                    .checked=${t.form.sections[n.id]}
                    @change=${e=>t.onSectionChange(n.id,e.target.checked)}
                  />
                  <span style="color: var(--text-strong);">${n.title}</span>
                </span>
                <span class="muted" style="font-size: 12px; line-height: 1.45;">${n.description}</span>
              </label>
            `)}
        </div>
      </div>

      <div class="card" style="display: grid; gap: 16px; max-width: 920px;">
        <div style="display: grid; gap: 4px;">
          <div class="card-title">Preview</div>
          <div class="card-sub">
            This is the style your briefing will use in ${n(t.form.channel)}.
          </div>
        </div>
        ${o(t)}
      </div>

      <div class="row" style="gap: 10px; flex-wrap: wrap; align-items: center;">
        <button class="btn primary" ?disabled=${!c} @click=${()=>t.onSave()}>
          ${t.saving?`Saving...`:`Save Daily Briefing`}
        </button>
        <span class="muted" style="font-size: 12px;">
          ${t.form.enabled?`Kova will keep the job enabled.`:`Saving will keep the job disabled.`}
        </span>
      </div>
    </section>
  `}export{c as renderBriefing};
//# sourceMappingURL=briefing-BXS9yt2R.js.map