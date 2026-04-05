import{i as e,n as t}from"./lit-zdTgzAJI.js";import{l as n}from"./format-BahKhiOC.js";import{K as r,l as i,q as a,u as o}from"./index-DH95F1dW.js";import{n as s,t as c}from"./channel-config-extras-YNNd-4PG.js";function l(e,t){let n=e;for(let e of t){if(!n)return null;let t=a(n);if(t===`object`){let t=n.properties??{};if(typeof e==`string`&&t[e]){n=t[e];continue}let r=n.additionalProperties;if(typeof e==`string`&&r&&typeof r==`object`){n=r;continue}return null}if(t===`array`){if(typeof e!=`number`)return null;n=(Array.isArray(n.items)?n.items[0]:n.items)??null;continue}return null}return n}function u(e,t){return s(e,t)??{}}var d=[`groupPolicy`,`streamMode`,`dmPolicy`];function f(t){let n=d.flatMap(e=>e in t?[[e,t[e]]]:[]);return n.length===0?null:e`
    <div class="status-list" style="margin-top: 12px;">
      ${n.map(([t,n])=>e`
          <div>
            <span class="label">${t}</span>
            <span>${c(n)}</span>
          </div>
        `)}
    </div>
  `}function p(t){let n=i(t.schema),r=n.schema;if(!r)return e` <div class="callout danger">Schema unavailable. Use Raw.</div> `;let a=l(r,[`channels`,t.channelId]);if(!a)return e` <div class="callout danger">Channel config schema unavailable.</div> `;let s=u(t.configValue??{},t.channelId);return e`
    <div class="config-form">
      ${o({schema:a,value:s,path:[`channels`,t.channelId],hints:t.uiHints,unsupported:new Set(n.unsupportedPaths),disabled:t.disabled,showLabel:!1,onPatch:t.onPatch})}
    </div>
    ${f(s)}
  `}function m(t){let{channelId:n,props:r}=t,i=r.configSaving||r.configSchemaLoading;return e`
    <div style="margin-top: 16px;">
      ${r.configSchemaLoading?e` <div class="muted">Loading config schema…</div> `:p({channelId:n,configValue:r.configForm,schema:r.configSchema,uiHints:r.configUiHints,disabled:i,onPatch:r.onConfigPatch})}
      <div class="row" style="margin-top: 12px;">
        <button
          class="btn primary"
          ?disabled=${i||!r.configFormDirty}
          @click=${()=>r.onConfigSave()}
        >
          ${r.configSaving?`Saving…`:`Save`}
        </button>
        <button class="btn" ?disabled=${i} @click=${()=>r.onConfigReload()}>
          Reload
        </button>
      </div>
    </div>
  `}function h(e,t){return t.snapshot?.channels?.[e]}function g(e,t){let n=t.snapshot?.channelAccounts?.[e]??[],r=t.snapshot?.channelDefaultAccountId?.[e];return(r?n.find(e=>e.accountId===r):void 0)??n[0]??null}function _(e,t){let n=h(e,t),r=t.snapshot?.channelAccounts?.[e]??[],i=g(e,t);return{configured:typeof n?.configured==`boolean`?n.configured:typeof i?.configured==`boolean`?i.configured:null,running:typeof n?.running==`boolean`?n.running:null,connected:typeof n?.connected==`boolean`?n.connected:null,defaultAccount:i,hasAnyActiveAccount:r.some(e=>e.configured||e.running||e.connected),status:n}}function v(e,t){if(!t.snapshot)return!1;let n=_(e,t);return n.configured===!0||n.running===!0||n.connected===!0||n.hasAnyActiveAccount}function y(e,t){return _(e,t).configured}function b(e){return e==null?`n/a`:e?`Yes`:`No`}function x(n){return e`
    <div class="card">
      <div class="card-title">${n.title}</div>
      <div class="card-sub">${n.subtitle}</div>
      ${n.accountCountLabel}

      <div class="status-list" style="margin-top: 16px;">
        ${n.statusRows.map(t=>e`
            <div>
              <span class="label">${t.label}</span>
              <span>${t.value}</span>
            </div>
          `)}
      </div>

      ${n.lastError?e`<div class="callout danger" style="margin-top: 12px;">${n.lastError}</div>`:t}
      ${n.secondaryCallout??t} ${n.extraContent??t}
      ${n.configSection} ${n.footer??t}
    </div>
  `}function S(e,t){return t?.[e]?.length??0}function C(n,r){let i=S(n,r);return i<2?t:e`<div class="account-count">Accounts (${i})</div>`}function w(r){let{props:i,discord:a,accountCountLabel:o}=r;return x({title:`Discord`,subtitle:`Bot status and channel configuration.`,accountCountLabel:o,statusRows:[{label:`Configured`,value:b(y(`discord`,i))},{label:`Running`,value:a?.running?`Yes`:`No`},{label:`Last start`,value:a?.lastStartAt?n(a.lastStartAt):`n/a`},{label:`Last probe`,value:a?.lastProbeAt?n(a.lastProbeAt):`n/a`}],lastError:a?.lastError,secondaryCallout:a?.probe?e`<div class="callout" style="margin-top: 12px;">
          Probe ${a.probe.ok?`ok`:`failed`} · ${a.probe.status??``}
          ${a.probe.error??``}
        </div>`:t,configSection:m({channelId:`discord`,props:i}),footer:e`<div class="row" style="margin-top: 12px;">
      <button class="btn" @click=${()=>i.onRefresh(!0)}>Probe</button>
    </div>`})}function T(r){let{props:i,googleChat:a,accountCountLabel:o}=r;return x({title:`Google Chat`,subtitle:`Chat API webhook status and channel configuration.`,accountCountLabel:o,statusRows:[{label:`Configured`,value:b(y(`googlechat`,i))},{label:`Running`,value:a?a.running?`Yes`:`No`:`n/a`},{label:`Credential`,value:a?.credentialSource??`n/a`},{label:`Audience`,value:a?.audienceType?`${a.audienceType}${a.audience?` · ${a.audience}`:``}`:`n/a`},{label:`Last start`,value:a?.lastStartAt?n(a.lastStartAt):`n/a`},{label:`Last probe`,value:a?.lastProbeAt?n(a.lastProbeAt):`n/a`}],lastError:a?.lastError,secondaryCallout:a?.probe?e`<div class="callout" style="margin-top: 12px;">
          Probe ${a.probe.ok?`ok`:`failed`} · ${a.probe.status??``}
          ${a.probe.error??``}
        </div>`:t,configSection:m({channelId:`googlechat`,props:i}),footer:e`<div class="row" style="margin-top: 12px;">
      <button class="btn" @click=${()=>i.onRefresh(!0)}>Probe</button>
    </div>`})}function E(r){let{props:i,imessage:a,accountCountLabel:o}=r;return x({title:`iMessage`,subtitle:`macOS bridge status and channel configuration.`,accountCountLabel:o,statusRows:[{label:`Configured`,value:b(y(`imessage`,i))},{label:`Running`,value:a?.running?`Yes`:`No`},{label:`Last start`,value:a?.lastStartAt?n(a.lastStartAt):`n/a`},{label:`Last probe`,value:a?.lastProbeAt?n(a.lastProbeAt):`n/a`}],lastError:a?.lastError,secondaryCallout:a?.probe?e`<div class="callout" style="margin-top: 12px;">
          Probe ${a.probe.ok?`ok`:`failed`} · ${a.probe.error??``}
        </div>`:t,configSection:m({channelId:`imessage`,props:i}),footer:e`<div class="row" style="margin-top: 12px;">
      <button class="btn" @click=${()=>i.onRefresh(!0)}>Probe</button>
    </div>`})}function D(e){return e?e.length<=20?e:`${e.slice(0,8)}...${e.slice(-8)}`:`n/a`}function O(i){let{props:a,nostr:o,nostrAccounts:s,accountCountLabel:c,profileFormState:l,profileFormCallbacks:u,onEditProfile:d}=i,f=s[0],p=o?.configured??f?.configured??!1,h=o?.running??f?.running??!1,g=o?.publicKey??f?.publicKey,_=o?.lastStartAt??f?.lastStartAt??null,v=o?.lastError??f?.lastError??null,y=s.length>1,b=l!=null,x=r=>{let i=r.publicKey,a=r.profile;return e`
      <div class="account-card">
        <div class="account-card-header">
          <div class="account-card-title">${a?.displayName??a?.name??r.name??r.accountId}</div>
          <div class="account-card-id">${r.accountId}</div>
        </div>
        <div class="status-list account-card-status">
          <div>
            <span class="label">Running</span>
            <span>${r.running?`Yes`:`No`}</span>
          </div>
          <div>
            <span class="label">Configured</span>
            <span>${r.configured?`Yes`:`No`}</span>
          </div>
          <div>
            <span class="label">Public Key</span>
            <span class="monospace" title="${i??``}">${D(i)}</span>
          </div>
          <div>
            <span class="label">Last inbound</span>
            <span
              >${r.lastInboundAt?n(r.lastInboundAt):`n/a`}</span
            >
          </div>
          ${r.lastError?e` <div class="account-card-error">${r.lastError}</div> `:t}
        </div>
      </div>
    `};return e`
    <div class="card">
      <div class="card-title">Nostr</div>
      <div class="card-sub">Decentralized DMs via Nostr relays (NIP-04).</div>
      ${c}
      ${y?e`
            <div class="account-card-list">
              ${s.map(e=>x(e))}
            </div>
          `:e`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">Configured</span>
                <span>${p?`Yes`:`No`}</span>
              </div>
              <div>
                <span class="label">Running</span>
                <span>${h?`Yes`:`No`}</span>
              </div>
              <div>
                <span class="label">Public Key</span>
                <span class="monospace" title="${g??``}"
                  >${D(g)}</span
                >
              </div>
              <div>
                <span class="label">Last start</span>
                <span
                  >${_?n(_):`n/a`}</span
                >
              </div>
            </div>
          `}
      ${v?e`<div class="callout danger" style="margin-top: 12px;">${v}</div>`:t}
      ${(()=>{if(b&&u)return r({state:l,callbacks:u,accountId:s[0]?.accountId??`default`});let{name:n,displayName:i,about:a,picture:c,nip05:m}=f?.profile??o?.profile??{},h=n||i||a||c||m;return e`
      <div
        style="margin-top: 16px; padding: 12px; background: var(--bg-secondary); border-radius: var(--radius-md);"
      >
        <div
          style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;"
        >
          <div style="font-weight: 500;">Profile</div>
          ${p?e`
                <button
                  class="btn btn--sm"
                  @click=${d}
                  style="font-size: 12px; padding: 4px 8px;"
                >
                  Edit Profile
                </button>
              `:t}
        </div>
        ${h?e`
              <div class="status-list">
                ${c?e`
                      <div style="margin-bottom: 8px;">
                        <img
                          src=${c}
                          alt="Profile picture"
                          style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-color);"
                          @error=${e=>{e.target.style.display=`none`}}
                        />
                      </div>
                    `:t}
                ${n?e`<div><span class="label">Name</span><span>${n}</span></div>`:t}
                ${i?e`<div>
                      <span class="label">Display Name</span><span>${i}</span>
                    </div>`:t}
                ${a?e`<div>
                      <span class="label">About</span
                      ><span style="max-width: 300px; overflow: hidden; text-overflow: ellipsis;"
                        >${a}</span
                      >
                    </div>`:t}
                ${m?e`<div><span class="label">NIP-05</span><span>${m}</span></div>`:t}
              </div>
            `:e`
              <div style="color: var(--text-muted); font-size: 13px">
                No profile set. Click "Edit Profile" to add your name, bio, and avatar.
              </div>
            `}
      </div>
    `})()} ${m({channelId:`nostr`,props:a})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>a.onRefresh(!1)}>Refresh</button>
      </div>
    </div>
  `}function k(r){let{props:i,signal:a,accountCountLabel:o}=r;return x({title:`Signal`,subtitle:`signal-cli status and channel configuration.`,accountCountLabel:o,statusRows:[{label:`Configured`,value:b(y(`signal`,i))},{label:`Running`,value:a?.running?`Yes`:`No`},{label:`Base URL`,value:a?.baseUrl??`n/a`},{label:`Last start`,value:a?.lastStartAt?n(a.lastStartAt):`n/a`},{label:`Last probe`,value:a?.lastProbeAt?n(a.lastProbeAt):`n/a`}],lastError:a?.lastError,secondaryCallout:a?.probe?e`<div class="callout" style="margin-top: 12px;">
          Probe ${a.probe.ok?`ok`:`failed`} · ${a.probe.status??``}
          ${a.probe.error??``}
        </div>`:t,configSection:m({channelId:`signal`,props:i}),footer:e`<div class="row" style="margin-top: 12px;">
      <button class="btn" @click=${()=>i.onRefresh(!0)}>Probe</button>
    </div>`})}function A(r){let{props:i,slack:a,accountCountLabel:o}=r;return x({title:`Slack`,subtitle:`Socket mode status and channel configuration.`,accountCountLabel:o,statusRows:[{label:`Configured`,value:b(y(`slack`,i))},{label:`Running`,value:a?.running?`Yes`:`No`},{label:`Last start`,value:a?.lastStartAt?n(a.lastStartAt):`n/a`},{label:`Last probe`,value:a?.lastProbeAt?n(a.lastProbeAt):`n/a`}],lastError:a?.lastError,secondaryCallout:a?.probe?e`<div class="callout" style="margin-top: 12px;">
          Probe ${a.probe.ok?`ok`:`failed`} · ${a.probe.status??``}
          ${a.probe.error??``}
        </div>`:t,configSection:m({channelId:`slack`,props:i}),footer:e`<div class="row" style="margin-top: 12px;">
      <button class="btn" @click=${()=>i.onRefresh(!0)}>Probe</button>
    </div>`})}function j(e){let t=e.configForm?.channels;if(!t||typeof t!=`object`||Array.isArray(t))return null;let n=t.telegram;return!n||typeof n!=`object`||Array.isArray(n)?null:n}function M(e){let t=j(e);return typeof t?.botToken==`string`&&t.botToken.trim().length>0}function N(e,t){let n=t[0];return e?.tokenSource??n?.tokenSource??n?.botTokenSource??null}function P(e,t,n){return y(`telegram`,e)===!0||t?.configured||t?.running?!0:n.some(e=>e.configured||e.running)}function F(n){let{props:r,busy:i,tokenSource:a}=n;return e`
    <div
      style="margin-top: 12px; padding: 12px; border: 1px solid var(--border); border-radius: 12px; display: grid; gap: 12px;"
    >
      <div class="row" style="justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap;">
        <div>
          <div style="font-weight: 600;">Quick setup</div>
          <div class="muted" style="font-size: 13px;">
            Paste a Telegram bot token and connect without editing config files.
          </div>
        </div>
        <span class="pill pill--sm">Not connected</span>
      </div>

      <label class="field">
        <span>Bot token</span>
        <input
          type="password"
          .value=${r.telegramSetupToken}
          @input=${e=>r.onTelegramTokenInput(e.target.value)}
          placeholder="123456:ABCDEF..."
          autocomplete="off"
          ?disabled=${i}
        />
      </label>

      <div class="row" style="gap: 8px; flex-wrap: wrap; align-items: center;">
        <button
          class="btn primary"
          ?disabled=${i||!r.connected}
          @click=${()=>r.onTelegramConnect()}
        >
          ${i?`Saving...`:`Connect Telegram`}
        </button>
        ${a&&a!==`config`?e`<div class="muted" style="font-size: 12px;">Current token source: ${a}</div>`:t}
      </div>

      ${r.telegramSetupMessage?e`
            <div class="callout ${r.telegramSetupMessage.kind===`error`?`danger`:`success`}">
              ${r.telegramSetupMessage.text}
            </div>
          `:t}
    </div>
  `}function I(r){let i=r.telegramPendingApprovals;return e`
    <div
      style="margin-top: 12px; padding: 12px; border: 1px solid var(--border); border-radius: 12px; display: grid; gap: 12px;"
    >
      <div class="row" style="justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap;">
        <div>
          <div style="font-weight: 600;">Pending approvals</div>
          <div class="muted" style="font-size: 13px;">
            Approve or reject new Telegram users without using the terminal.
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${r.telegramApprovalsLoading||!r.connected||!!r.telegramApprovalsBusyCode}
          @click=${()=>r.onTelegramApprovalsRefresh()}
        >
          ${r.telegramApprovalsLoading?`Refreshing...`:`Refresh`}
        </button>
      </div>

      ${r.telegramApprovalsMessage?e`
            <div class="callout ${r.telegramApprovalsMessage.kind===`error`?`danger`:`success`}">
              ${r.telegramApprovalsMessage.text}
            </div>
          `:t}

      ${r.telegramApprovalsLoading&&i.length===0?e`<div class="muted" style="font-size: 13px;">Loading pending approvals...</div>`:i.length===0?e`<div class="muted" style="font-size: 13px;">No pending approvals.</div>`:e`
              <div style="display: grid; gap: 8px;">
                ${i.map(t=>{let i=r.telegramApprovalsBusyCode===t.code;return e`
                    <div
                      style="padding: 12px; border: 1px solid var(--border); border-radius: 10px; display: grid; gap: 10px;"
                    >
                      <div style="display: grid; gap: 4px;">
                        <div style="font-weight: 600;">Telegram user ID ${t.userId}</div>
                        <div class="muted" style="font-size: 12px;">Pairing code ${t.code}</div>
                        <div class="muted" style="font-size: 12px;">
                          Requested ${n(t.createdAt)}
                        </div>
                      </div>
                      <div class="row" style="gap: 8px; flex-wrap: wrap; align-items: center;">
                        <button
                          class="btn"
                          style="background: var(--success, #15803d); border-color: var(--success, #15803d); color: white;"
                          ?disabled=${i||!r.connected}
                          @click=${()=>r.onTelegramApprove(t.code)}
                        >
                          ${i?`Working...`:`Approve`}
                        </button>
                        <button
                          class="btn"
                          ?disabled=${i||!r.connected}
                          @click=${()=>r.onTelegramReject(t.code)}
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  `})}
              </div>
            `}
    </div>
  `}function L(r){let i=r.probe?.bot?.username,a=r.name||r.accountId;return e`
    <div class="account-card">
      <div class="account-card-header">
        <div class="account-card-title">${i?`@${i}`:a}</div>
        <div class="account-card-id">${r.accountId}</div>
      </div>
      <div class="status-list account-card-status">
        <div>
          <span class="label">Running</span>
          <span>${r.running?`Yes`:`No`}</span>
        </div>
        <div>
          <span class="label">Configured</span>
          <span>${r.configured?`Yes`:`No`}</span>
        </div>
        <div>
          <span class="label">Last inbound</span>
          <span>${r.lastInboundAt?n(r.lastInboundAt):`n/a`}</span>
        </div>
        ${r.lastError?e`<div class="account-card-error">${r.lastError}</div>`:t}
      </div>
    </div>
  `}function R(t){let{telegram:r,telegramAccounts:i}=t;return i.length>1?e`
      <div class="account-card-list" style="margin-top: 16px;">
        ${i.map(e=>L(e))}
      </div>
    `:e`
    <div class="status-list" style="margin-top: 16px;">
      <div>
        <span class="label">Running</span>
        <span>${r?.running?`Yes`:`No`}</span>
      </div>
      <div>
        <span class="label">Mode</span>
        <span>${r?.mode??`n/a`}</span>
      </div>
      <div>
        <span class="label">Last start</span>
        <span>${r?.lastStartAt?n(r.lastStartAt):`n/a`}</span>
      </div>
      <div>
        <span class="label">Last probe</span>
        <span>${r?.lastProbeAt?n(r.lastProbeAt):`n/a`}</span>
      </div>
    </div>
  `}function z(n){let{props:r,telegram:i,telegramAccounts:a,accountCountLabel:o}=n,s=P(r,i,a),c=r.telegramSetupBusy||r.configSaving,l=N(i,a),u=l===`config`||M(r);return s?e`
    <div class="card">
      <div class="row" style="justify-content: space-between; align-items: flex-start; gap: 12px; flex-wrap: wrap;">
        <div>
          <div class="card-title">Telegram</div>
          <div class="card-sub">Bot status, approvals, and channel configuration.</div>
        </div>
        <span class="pill pill--sm pill--ok">Connected</span>
      </div>

      ${o}
      ${R({telegram:i,telegramAccounts:a})}

      ${i?.lastError?e`<div class="callout danger" style="margin-top: 12px;">${i.lastError}</div>`:t}
      ${i?.probe?e`<div class="callout" style="margin-top: 12px;">
            Probe ${i.probe.ok?`ok`:`failed`} · ${i.probe.status??``}
            ${i.probe.error??``}
          </div>`:t}

      ${I(r)}
      ${m({channelId:`telegram`,props:r})}

      <div class="row" style="margin-top: 12px; gap: 8px; flex-wrap: wrap; align-items: center;">
        ${u?e`
              <button
                class="btn"
                ?disabled=${c||!r.connected}
                @click=${()=>r.onTelegramDisconnect()}
              >
                Disconnect
              </button>
            `:t}
        <button class="btn" ?disabled=${r.loading} @click=${()=>r.onRefresh(!0)}>Probe</button>
        ${l&&l!==`config`?e`<div class="muted" style="font-size: 12px;">Current token source: ${l}</div>`:t}
      </div>

      ${r.telegramSetupMessage&&r.telegramSetupMessage.kind===`error`?e`
            <div class="callout danger" style="margin-top: 12px;">
              ${r.telegramSetupMessage.text}
            </div>
          `:t}
    </div>
  `:e`
      <div class="card">
        <div class="row" style="justify-content: space-between; align-items: flex-start; gap: 12px;">
          <div>
            <div class="card-title">Telegram</div>
            <div class="card-sub">Connect a Telegram bot to start receiving and sending messages.</div>
          </div>
          <span class="pill pill--sm">Not connected</span>
        </div>
        ${o}
        ${F({props:r,busy:c,tokenSource:l})}
      </div>
    `}var B=[`telegram`];function V(r){let i=r.snapshot?.channels,a=i?.whatsapp??void 0,o=i?.telegram??void 0,s=i?.discord??null,c=i?.googlechat??null,l=i?.slack??null,u=i?.signal??null,d=i?.imessage??null,f=i?.nostr??null;return e`
    <section class="grid grid-cols-2">
      ${H(r.snapshot).map((e,t)=>({key:e,enabled:v(e,r),order:t})).toSorted((e,t)=>e.enabled===t.enabled?e.order-t.order:e.enabled?-1:1).map(e=>U(e.key,r,{whatsapp:a,telegram:o,discord:s,googlechat:c,slack:l,signal:u,imessage:d,nostr:f,channelAccounts:r.snapshot?.channelAccounts??null}))}
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Channel health</div>
          <div class="card-sub">Channel status snapshots from the gateway.</div>
        </div>
        <div class="muted">
          ${r.lastSuccessAt?n(r.lastSuccessAt):`n/a`}
        </div>
      </div>
      ${r.lastError?e`<div class="callout danger" style="margin-top: 12px;">${r.lastError}</div>`:t}
      <pre class="code-block" style="margin-top: 12px;">
${r.snapshot?JSON.stringify(r.snapshot,null,2):`No snapshot yet.`}
      </pre
      >
    </section>
  `}function H(e){let t=e?.channelMeta?.length?e.channelMeta.map(e=>e.id):e?.channelOrder?.length?e.channelOrder:[];return[...new Set([...B,...t])].filter(e=>e!==`whatsapp`)}function U(e,n,r){let i=C(e,r.channelAccounts);switch(e){case`whatsapp`:return t;case`telegram`:return z({props:n,telegram:r.telegram,telegramAccounts:r.channelAccounts?.telegram??[],accountCountLabel:i});case`discord`:return w({props:n,discord:r.discord,accountCountLabel:i});case`googlechat`:return T({props:n,googleChat:r.googlechat,accountCountLabel:i});case`slack`:return A({props:n,slack:r.slack,accountCountLabel:i});case`signal`:return k({props:n,signal:r.signal,accountCountLabel:i});case`imessage`:return E({props:n,imessage:r.imessage,accountCountLabel:i});case`nostr`:{let e=r.channelAccounts?.nostr??[],t=e[0],a=t?.accountId??`default`,o=t?.profile??null,s=n.nostrProfileAccountId===a?n.nostrProfileFormState:null,c=s?{onFieldChange:n.onNostrProfileFieldChange,onSave:n.onNostrProfileSave,onImport:n.onNostrProfileImport,onCancel:n.onNostrProfileCancel,onToggleAdvanced:n.onNostrProfileToggleAdvanced}:null;return O({props:n,nostr:r.nostr,nostrAccounts:e,accountCountLabel:i,profileFormState:s,profileFormCallbacks:c,onEditProfile:()=>n.onNostrProfileEdit(a,o)})}default:return W(e,n,r.channelAccounts??{})}}function W(n,r,i){let a=K(r.snapshot,n),o=_(n,r),s=typeof o.status?.lastError==`string`?o.status.lastError:void 0,c=i[n]??[];return e`
    <div class="card">
      <div class="card-title">${a}</div>
      <div class="card-sub">Channel status and configuration.</div>
      ${C(n,i)}
      ${c.length>0?e`
            <div class="account-card-list">
              ${c.map(e=>Z(e))}
            </div>
          `:e`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">Configured</span>
                <span>${b(o.configured)}</span>
              </div>
              <div>
                <span class="label">Running</span>
                <span>${b(o.running)}</span>
              </div>
              <div>
                <span class="label">Connected</span>
                <span>${b(o.connected)}</span>
              </div>
            </div>
          `}
      ${s?e`<div class="callout danger" style="margin-top: 12px;">${s}</div>`:t}
      ${m({channelId:n,props:r})}
    </div>
  `}function G(e){return e?.channelMeta?.length?Object.fromEntries(e.channelMeta.map(e=>[e.id,e])):{}}function K(e,t){return G(e)[t]?.label??e?.channelLabels?.[t]??t}var q=600*1e3;function J(e){return e.lastInboundAt?Date.now()-e.lastInboundAt<q:!1}function Y(e){return e.running?`Yes`:J(e)?`Active`:`No`}function X(e){return e.connected===!0?`Yes`:e.connected===!1?`No`:J(e)?`Active`:`n/a`}function Z(r){let i=Y(r),a=X(r);return e`
    <div class="account-card">
      <div class="account-card-header">
        <div class="account-card-title">${r.name||r.accountId}</div>
        <div class="account-card-id">${r.accountId}</div>
      </div>
      <div class="status-list account-card-status">
        <div>
          <span class="label">Running</span>
          <span>${i}</span>
        </div>
        <div>
          <span class="label">Configured</span>
          <span>${r.configured?`Yes`:`No`}</span>
        </div>
        <div>
          <span class="label">Connected</span>
          <span>${a}</span>
        </div>
        <div>
          <span class="label">Last inbound</span>
          <span
            >${r.lastInboundAt?n(r.lastInboundAt):`n/a`}</span
          >
        </div>
        ${r.lastError?e` <div class="account-card-error">${r.lastError}</div> `:t}
      </div>
    </div>
  `}export{V as renderChannels};
//# sourceMappingURL=channels-D-hnVZ0k.js.map