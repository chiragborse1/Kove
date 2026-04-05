import{i as e,n as t}from"./lit-zdTgzAJI.js";import{I as n,d as r,f as i}from"./index-CseIEt-I.js";function a(n){return n?e`<div class="callout ${n.kind===`error`?`danger`:`success`}">${n.text}</div>`:t}function o(e){return e===`telegram`?n.send:n.messageSquare}function s(e,t){return t===`telegram`?e.telegramConnected:e.whatsappConnected}function c(e,t){return e===`main`?`Main agent (default)`:t.get(e)?.name??e}function l(e,t){return e===`main`?`Current Kova default`:t.get(e)?.role??`Assigned employee`}function u(u){let d=new Map(u.employees.map(e=>[e.id,e]));return e`
    <section class="page page--settings" style="display: grid; gap: 20px;">
      <div class="callout" style="display: grid; gap: 8px;">
        <div class="card-title">Multi-Agent Routing</div>
        <div style="line-height: 1.6;">
          When someone messages you on Telegram, which employee should respond? Set that here.
        </div>
      </div>

      <section class="card" style="display: grid; gap: 14px;">
        <div class="row" style="justify-content: space-between; gap: 12px; align-items: center; flex-wrap: wrap;">
          <div style="display: grid; gap: 4px;">
            <div class="card-title">Quick Presets</div>
            <div class="card-sub">Pick a starting point, then fine-tune each channel below.</div>
          </div>
          ${u.loading?e`<span class="chip">Loading current routing...</span>`:t}
        </div>

        <div class="row" style="gap: 10px; flex-wrap: wrap;">
          <button
            type="button"
            class="btn"
            ?disabled=${u.saving}
            @click=${()=>u.onPreset(`kova-jordan`)}
          >
            Jordan handles everything
          </button>
          <button
            type="button"
            class="btn"
            ?disabled=${u.saving}
            @click=${()=>u.onPreset(`kova-alex`)}
          >
            Alex handles everything
          </button>
          <button
            type="button"
            class="btn"
            ?disabled=${u.saving}
            @click=${()=>u.onPreset(`main`)}
          >
            Reset to default
          </button>
        </div>
      </section>

      <section class="card" style="display: grid; gap: 16px; overflow: hidden;">
        <div style="display: grid; gap: 4px;">
          <div class="card-title">Channel Routing</div>
          <div class="card-sub">
            Telegram and WhatsApp always stay visible here. Inactive channels show as not connected until you finish setup.
          </div>
        </div>

        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; min-width: 980px;">
            <thead>
              <tr>
                <th style="text-align: left; padding: 0 0 14px; min-width: 220px;">Channel</th>
                <th style="text-align: left; padding: 0 0 14px; min-width: 180px;">Current owner</th>
                ${u.employees.map(t=>e`
                    <th style="text-align: center; padding: 0 8px 14px; min-width: 120px;">
                      <div style="display: grid; gap: 4px; justify-items: center;">
                        <span>${t.name}</span>
                        <span class="muted" style="font-size: 12px;">
                          ${t.isCustom?`Custom`:t.role??`Employee`}
                        </span>
                      </div>
                    </th>
                  `)}
                <th style="text-align: left; padding: 0 0 14px; min-width: 220px;">Assign to</th>
              </tr>
            </thead>
            <tbody>
              ${r.map(t=>{let r=u.assignments[t]??`main`,a=s(u,t);return e`
                  <tr style="border-top: 1px solid var(--border);">
                    <td style="padding: 16px 0; vertical-align: top;">
                      <div style="display: grid; gap: 8px;">
                        <div class="row" style="gap: 10px; align-items: center;">
                          <span
                            style="
                              display: inline-flex;
                              width: 34px;
                              height: 34px;
                              align-items: center;
                              justify-content: center;
                              border-radius: 999px;
                              background: var(--surface-elevated);
                              border: 1px solid var(--border);
                            "
                            aria-hidden="true"
                            >${o(t)}</span
                          >
                          <div style="display: grid; gap: 3px;">
                            <strong>${i(t)}</strong>
                            <span class="muted" style="font-size: 12px;">
                              ${a?`Connected and ready to route`:`Not connected`}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td style="padding: 16px 8px; vertical-align: top;">
                      <div style="display: grid; gap: 4px;">
                        <span class="chip">${c(r,d)}</span>
                        <span class="muted" style="font-size: 12px;">
                          ${l(r,d)}
                        </span>
                      </div>
                    </td>
                    ${u.employees.map(t=>e`
                        <td style="padding: 16px 8px; text-align: center; vertical-align: top;">
                          ${r===t.id?e`<span class="chip" style="background: var(--surface-elevated);">
                                ${n.check}
                                <span>Assigned</span>
                              </span>`:e`<span class="muted">-</span>`}
                        </td>
                      `)}
                    <td style="padding: 16px 0 16px 8px; vertical-align: top;">
                      <label class="field" style="margin: 0;">
                        <select
                          .value=${r}
                          ?disabled=${u.saving}
                          @change=${e=>u.onAssignmentChange(t,e.target.value)}
                        >
                          <option value="main">Main agent (default)</option>
                          ${u.employees.map(t=>e`<option value=${t.id}>${t.name}</option>`)}
                        </select>
                      </label>
                    </td>
                  </tr>
                `})}
            </tbody>
          </table>
        </div>
      </section>

      <section class="card" style="display: grid; gap: 12px;">
        <div class="row" style="justify-content: space-between; gap: 12px; align-items: center; flex-wrap: wrap;">
          <div style="display: grid; gap: 4px;">
            <div class="card-title">Save routing</div>
            <div class="card-sub">Changes take effect immediately - no restart needed.</div>
          </div>
          <button
            type="button"
            class="btn primary"
            ?disabled=${!u.connected||u.saving}
            @click=${u.onSave}
          >
            ${u.saving?`Saving...`:`Save Routing`}
          </button>
        </div>
        ${a(u.message)}
      </section>
    </section>
  `}export{u as renderRouting};
//# sourceMappingURL=routing-BWGVcEBp.js.map