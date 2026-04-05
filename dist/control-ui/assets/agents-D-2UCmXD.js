import{i as e,n as t}from"./lit-zdTgzAJI.js";import{t as n}from"./preload-helper-Chd9yIcd.js";import{l as r}from"./format-BahKhiOC.js";import{A as i,C as a,D as o,E as s,F as c,G as l,I as u,L as d,M as f,O as p,P as m,S as h,T as g,_,b as v,i as y,j as b,k as x,n as S,o as C,r as w,v as T,w as E,x as D,y as ee}from"./index-Jm72Sfp3.js";import{r as O}from"./channel-config-extras-YNNd-4PG.js";import{i as k,n as A,r as j,t as M}from"./skills-shared-Bg0Qcnkp.js";function N(n){let{agent:r,configForm:i,agentFilesList:c,configLoading:l,configSaving:u,configDirty:d,onConfigReload:f,onConfigSave:m,onModelChange:h,onModelFallbacksChange:_,onSelectPanel:v}=n,y=g(i,r.id),b=r.model,x=(c&&c.agentId===r.id?c.workspace:null)||y.entry?.workspace||y.defaults?.workspace||r.workspace||`default`,S=y.entry?.model?o(y.entry?.model):y.defaults?.model?o(y.defaults?.model):o(b),C=o(y.defaults?.model??b),w=p(y.entry?.model),T=p(y.defaults?.model)||(C===`-`?null:a(C))||(i?null:p(b)),D=w??T??null,O=s(y.entry?.model)??s(y.defaults?.model)??(i?null:s(b))??[],k=Array.isArray(y.entry?.skills)?y.entry?.skills:null,A=k?.length??null,j=!!(n.defaultId&&r.id===n.defaultId),M=!i||l||u,N=e=>{let t=O.filter((t,n)=>n!==e);_(r.id,t)};return e`
    <section class="card">
      <div class="card-title">Overview</div>
      <div class="card-sub">Workspace paths and identity metadata.</div>

      <div class="agents-overview-grid" style="margin-top: 16px;">
        <div class="agent-kv">
          <div class="label">Workspace</div>
          <div>
            <button
              type="button"
              class="workspace-link mono"
              @click=${()=>v(`files`)}
              title="Open Files tab"
            >
              ${x}
            </button>
          </div>
        </div>
        <div class="agent-kv">
          <div class="label">Primary Model</div>
          <div class="mono">${S}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Skills Filter</div>
          <div>${k?`${A} selected`:`all skills`}</div>
        </div>
      </div>

      ${d?e`
            <div class="callout warn" style="margin-top: 16px">
              You have unsaved config changes.
            </div>
          `:t}

      <div class="agent-model-select" style="margin-top: 20px;">
        <div class="label">Model Selection</div>
        <div class="agent-model-fields">
          <label class="field">
            <span>Primary model${j?` (default)`:``}</span>
            <select
              .value=${j?D??``:w??``}
              ?disabled=${M}
              @change=${e=>h(r.id,e.target.value||null)}
            >
              ${j?e` <option value="">Not set</option> `:e`
                    <option value="">
                      ${T?`Inherit default (${T})`:`Inherit default`}
                    </option>
                  `}
              ${ee(i,D??void 0,n.modelCatalog)}
            </select>
          </label>
          <div class="field">
            <span>Fallbacks</span>
            <div
              class="agent-chip-input"
              @click=${e=>{let t=e.currentTarget.querySelector(`input`);t&&t.focus()}}
            >
              ${O.map((t,n)=>e`
                  <span class="chip">
                    ${t}
                    <button
                      type="button"
                      class="chip-remove"
                      ?disabled=${M}
                      @click=${()=>N(n)}
                    >
                      &times;
                    </button>
                  </span>
                `)}
              <input
                ?disabled=${M}
                placeholder=${O.length===0?`provider/model`:``}
                @keydown=${e=>{let t=e.target;if(e.key===`Enter`||e.key===`,`){e.preventDefault();let n=E(t.value);n.length>0&&(_(r.id,[...O,...n]),t.value=``)}}}
                @blur=${e=>{let t=e.target,n=E(t.value);n.length>0&&(_(r.id,[...O,...n]),t.value=``)}}
              />
            </div>
          </div>
        </div>
        <div class="agent-model-actions">
          <button
            type="button"
            class="btn btn--sm"
            ?disabled=${l}
            @click=${f}
          >
            Reload Config
          </button>
          <button
            type="button"
            class="btn btn--sm primary"
            ?disabled=${u||!d}
            @click=${m}
          >
            ${u?`Saving…`:`Save`}
          </button>
        </div>
      </div>
    </section>
  `}var P=Object.defineProperty,te=(e,t,n)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,F=(e,t,n)=>te(e,typeof t==`symbol`?t:t+``,n),I={classPrefix:`cm-`,theme:`github`,linkTarget:`_blank`,sanitize:!1,plugins:[],customRenderers:{}};function L(e){return{...I,...e,plugins:e?.plugins??[],customRenderers:e?.customRenderers??{}}}function ne(e,t){return typeof t==`function`?t(e):e}function R(e,t){let n=L(t),r=n.classPrefix,i=e;for(let e of n.plugins)e.transformBlock&&(i=i.map(e.transformBlock));let a=`<div class="${r}preview">${i.map(e=>{for(let t of n.plugins)if(t.renderBlock){let r=t.renderBlock(e,()=>z(e,n));if(r!==null)return r}let t=n.customRenderers[e.type];return t?t(e):z(e,n)}).join(`
`)}</div>`;return a=ne(a,n.sanitize),a}async function re(e,t){let n=L(t);for(let e of n.plugins)e.init&&await e.init();let r=R(e,t);for(let e of n.plugins)e.postProcess&&(r=await e.postProcess(r));return r}function z(e,t){let n=t.classPrefix;switch(e.type){case`paragraph`:return`<p class="${n}paragraph">${K(e.content,t)}</p>`;case`heading`:return ie(e,t);case`bulletList`:return ae(e,t);case`numberedList`:return B(e,t);case`checkList`:return V(e,t);case`codeBlock`:return H(e,t);case`blockquote`:return`<blockquote class="${n}blockquote">${K(e.content,t)}</blockquote>`;case`table`:return U(e,t);case`image`:return W(e,t);case`divider`:return`<hr class="${n}divider" />`;case`callout`:return G(e,t);default:return`<div class="${n}unknown">${K(e.content,t)}</div>`}}function ie(e,t){let n=t.classPrefix,r=e.props.level,i=`h${r}`;return`<${i} class="${n}heading ${n}h${r}">${K(e.content,t)}</${i}>`}function ae(e,t){return`<ul class="${t.classPrefix}bullet-list">
${e.children.map(e=>`<li>${K(e.content,t)}</li>`).join(`
`)}
</ul>`}function B(e,t){return`<ol class="${t.classPrefix}numbered-list">
${e.children.map(e=>`<li>${K(e.content,t)}</li>`).join(`
`)}
</ol>`}function V(e,t){let n=t.classPrefix,r=e.props.checked;return`
<div class="${n}checklist-item">
  <input type="checkbox" ${r?`checked disabled`:`disabled`} />
  <span class="${r?`${n}checked`:``}">${K(e.content,t)}</span>
</div>`.trim()}function H(e,t){let n=t.classPrefix,r=e.content.map(e=>e.text).join(``),i=e.props.language||``,a=J(r),o=i?` language-${i}`:``;return`<pre class="${n}code-block"${i?` data-language="${i}"`:``}><code class="${n}code${o}">${a}</code></pre>`}function U(e,t){let n=t.classPrefix,{headers:r,rows:i,alignments:a}=e.props,o=e=>{let t=a?.[e];return t?` style="text-align: ${t}"`:``};return`<table class="${n}table">
${r.length>0?`<thead><tr>${r.map((e,t)=>`<th${o(t)}>${J(e)}</th>`).join(``)}</tr></thead>`:``}
<tbody>
${i.map(e=>`<tr>${e.map((e,t)=>`<td${o(t)}>${J(e)}</td>`).join(``)}</tr>`).join(`
`)}
</tbody>
</table>`}function W(e,t){let n=t.classPrefix,{url:r,alt:i,title:a,width:o,height:s}=e.props,c=i?` alt="${J(i)}"`:` alt=""`,l=a?` title="${J(a)}"`:``,u=o?` width="${o}"`:``,d=s?` height="${s}"`:``;return`<figure class="${n}image">${`<img src="${J(r)}"${c}${l}${u}${d} />`}${i?`<figcaption>${J(i)}</figcaption>`:``}</figure>`}function G(e,t){let n=t.classPrefix,r=e.props.type;return`
<div class="${n}callout ${n}callout-${r}" role="alert">
  <strong class="${n}callout-title">${r}</strong>
  <div class="${n}callout-content">${K(e.content,t)}</div>
</div>`.trim()}function K(e,t){return e.map(e=>q(e,t)).join(``)}function q(e,t){let n=J(e.text),r=e.styles;if(r.code&&(n=`<code>${n}</code>`),r.highlight&&(n=`<mark>${n}</mark>`),r.strikethrough&&(n=`<del>${n}</del>`),r.underline&&(n=`<u>${n}</u>`),r.italic&&(n=`<em>${n}</em>`),r.bold&&(n=`<strong>${n}</strong>`),r.link){let e=t.linkTarget===`_blank`?` target="_blank" rel="noopener noreferrer"`:``,i=r.link.title?` title="${J(r.link.title)}"`:``;n=`<a href="${J(r.link.url)}"${i}${e}>${n}</a>`}return n}function J(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function oe(e){return[...[1,2,3,4,5,6].map(t=>({tag:`h${t}`,classes:[`${e}heading`,`${e}h${t}`]})),{tag:`p`,classes:[`${e}paragraph`]},{tag:`ul`,classes:[`${e}bullet-list`]},{tag:`ol`,classes:[`${e}numbered-list`]},{tag:`pre`,classes:[`${e}code-block`]},{tag:`blockquote`,classes:[`${e}blockquote`]},{tag:`hr`,classes:[`${e}divider`]},{tag:`table`,classes:[`${e}table`]},{tag:`figure`,classes:[`${e}image`]}]}function se(e,t){let n=t.join(` `),r=/\bclass\s*=\s*"([^"]*)"/i,i=e.match(r);return i?e.replace(r,`class="${n} ${i[1]}"`):e.endsWith(`/>`)?e.slice(0,-2)+` class="${n}" />`:e.slice(0,-1)+` class="${n}">`}function ce(e,t){return e.replace(/(?<!<figure[^>]*>\s*)(<img\s[^>]*\/?>)(?!\s*<\/figure>)/gi,`<figure class="${t}image">$1</figure>`)}function le(e,t){let n=t?.classPrefix??`cm-`,r=t?.wrapperClass??`${n}preview`,i=oe(n),a=e;for(let{tag:e,classes:t}of i){let n=RegExp(`<${e}(\\s[^>]*)?>|<${e}\\s*\\/?>`,`gi`);a=a.replace(n,e=>se(e,t))}return a=ce(a,n),a=`<div class="${r}">${a}</div>`,typeof t?.sanitize==`function`&&(a=t.sanitize(a)),a}async function ue(e){try{return(await n(()=>import(`./dist-D8DZLmCF.js`),[],import.meta.url)).parse(e)}catch{throw Error(`@create-markdown/core is required to parse markdown in <markdown-preview>. Install it, or provide pre-parsed blocks via the blocks attribute / setBlocks().`)}}F(class extends HTMLElement{constructor(){super(),F(this,`_shadow`,null),F(this,`plugins`,[]),F(this,`defaultTheme`,`github`),F(this,`styleElement`),F(this,`contentElement`);let e=this.constructor._shadowMode;e!==`none`&&(this._shadow=this.attachShadow({mode:e})),this.styleElement=document.createElement(`style`),this.renderRoot.appendChild(this.styleElement),this.contentElement=document.createElement(`div`),this.contentElement.className=`markdown-preview-content`,this.renderRoot.appendChild(this.contentElement),this.updateStyles()}static get observedAttributes(){return[`theme`,`link-target`,`async`]}get renderRoot(){return this._shadow??this}connectedCallback(){this.render()}attributeChangedCallback(e,t,n){this.render()}setPlugins(e){this.plugins=e,this.render()}setDefaultTheme(e){this.defaultTheme=e,this.render()}getMarkdown(){let e=this.getAttribute(`blocks`);if(e)try{return JSON.parse(e).map(e=>e.content.map(e=>e.text).join(``)).join(`

`)}catch{return``}return this.textContent||``}setMarkdown(e){this.textContent=e,this.render()}setBlocks(e){this.setAttribute(`blocks`,JSON.stringify(e)),this.render()}getOptions(){return{theme:this.getAttribute(`theme`)||this.defaultTheme,linkTarget:this.getAttribute(`link-target`)||`_blank`,plugins:this.plugins}}async getBlocks(){let e=this.getAttribute(`blocks`);if(e)try{return JSON.parse(e)}catch{return console.warn(`Invalid blocks JSON in markdown-preview element`),[]}return ue(this.textContent||``)}async render(){let e=await this.getBlocks(),t=this.getOptions(),n=this.hasAttribute(`async`)||this.plugins.length>0;try{let r;r=n?await re(e,t):R(e,t),this.contentElement.innerHTML=r}catch(e){console.error(`Error rendering markdown preview:`,e),this.contentElement.innerHTML=`<div class="error">Error rendering content</div>`}}updateStyles(){let e=this.plugins.filter(e=>e.getCSS).map(e=>e.getCSS()).join(`

`),t=this._shadow?`:host { display: block; }`:`markdown-preview { display: block; }`;this.styleElement.textContent=`
${t}

.markdown-preview-content {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
}

.error {
  color: #cf222e;
  padding: 1rem;
  background: #ffebe9;
  border-radius: 6px;
}

${e}
    `.trim()}},`_shadowMode`,`open`);function Y(t,n,r){return e`
    <section class="card">
      <div class="card-title">Agent Context</div>
      <div class="card-sub">${n}</div>
      <div class="agents-overview-grid" style="margin-top: 16px;">
        <div class="agent-kv">
          <div class="label">Workspace</div>
          <div>
            <button
              type="button"
              class="workspace-link mono"
              @click=${()=>r(`files`)}
              title="Open Files tab"
            >
              ${t.workspace}
            </button>
          </div>
        </div>
        <div class="agent-kv">
          <div class="label">Primary Model</div>
          <div class="mono">${t.model}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Identity Name</div>
          <div>${t.identityName}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Identity Avatar</div>
          <div>${t.identityAvatar}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Skills Filter</div>
          <div>${t.skillsLabel}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Default</div>
          <div>${t.isDefault?`yes`:`no`}</div>
        </div>
      </div>
    </section>
  `}function de(e,t){let n=e.channelMeta?.find(e=>e.id===t);return n?.label?n.label:e.channelLabels?.[t]??t}function fe(e){if(!e)return[];let t=new Set;for(let n of e.channelOrder??[])t.add(n);for(let n of e.channelMeta??[])t.add(n.id);for(let n of Object.keys(e.channelAccounts??{}))t.add(n);let n=[],r=e.channelOrder?.length?e.channelOrder:Array.from(t);for(let e of r)t.has(e)&&(n.push(e),t.delete(e));for(let e of t)n.push(e);return n.map(t=>({id:t,label:de(e,t),accounts:e.channelAccounts?.[t]??[]}))}var pe=[`groupPolicy`,`streamMode`,`dmPolicy`];function me(e){let t=0,n=0,r=0;for(let i of e){let e=i.probe&&typeof i.probe==`object`&&`ok`in i.probe?!!i.probe.ok:!1;(i.connected===!0||i.running===!0||e)&&(t+=1),i.configured&&(n+=1),i.enabled&&(r+=1)}return{total:e.length,connected:t,configured:n,enabled:r}}function he(n){let i=fe(n.snapshot),a=n.lastSuccess?r(n.lastSuccess):`never`;return e`
    <section class="grid grid-cols-2">
      ${Y(n.context,`Workspace, identity, and model configuration.`,n.onSelectPanel)}
      <section class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">Channels</div>
            <div class="card-sub">Gateway-wide channel status snapshot.</div>
          </div>
          <button class="btn btn--sm" ?disabled=${n.loading} @click=${n.onRefresh}>
            ${n.loading?`Refreshing…`:`Refresh`}
          </button>
        </div>
        <div class="muted" style="margin-top: 8px;">Last refresh: ${a}</div>
        ${n.error?e`<div class="callout danger" style="margin-top: 12px;">${n.error}</div>`:t}
        ${n.snapshot?t:e`
              <div class="callout info" style="margin-top: 12px">
                Load channels to see live status.
              </div>
            `}
        ${i.length===0?e` <div class="muted" style="margin-top: 16px">No channels found.</div> `:e`
              <div class="list" style="margin-top: 16px;">
                ${i.map(r=>{let i=me(r.accounts),a=i.total?`${i.connected}/${i.total} connected`:`no accounts`,o=i.configured?`${i.configured} configured`:`not configured`,s=i.total?`${i.enabled} enabled`:`disabled`,c=O({configForm:n.configForm,channelId:r.id,fields:pe});return e`
                    <div class="list-item">
                      <div class="list-main">
                        <div class="list-title">${r.label}</div>
                        <div class="list-sub mono">${r.id}</div>
                      </div>
                      <div class="list-meta">
                        <div>${a}</div>
                        <div>${o}</div>
                        <div>${s}</div>
                        ${i.configured===0?e`
                              <div>
                                <a
                                  href="https://docs.kova.ai/channels"
                                  target="_blank"
                                  rel="noopener"
                                  style="color: var(--accent); font-size: 12px"
                                  >Setup guide</a
                                >
                              </div>
                            `:t}
                        ${c.length>0?c.map(t=>e`<div>${t.label}: ${t.value}</div>`):t}
                      </div>
                    </div>
                  `})}
              </div>
            `}
      </section>
    </section>
  `}function ge(n){let r=n.jobs.filter(e=>e.agentId===n.agentId);return e`
    <section class="grid grid-cols-2">
      ${Y(n.context,`Workspace and scheduling targets.`,n.onSelectPanel)}
      <section class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">Scheduler</div>
            <div class="card-sub">Gateway cron status.</div>
          </div>
          <button class="btn btn--sm" ?disabled=${n.loading} @click=${n.onRefresh}>
            ${n.loading?`Refreshing…`:`Refresh`}
          </button>
        </div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">Enabled</div>
            <div class="stat-value">
              ${n.status?n.status.enabled?`Yes`:`No`:`n/a`}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">Jobs</div>
            <div class="stat-value">${n.status?.jobs??`n/a`}</div>
          </div>
          <div class="stat">
            <div class="stat-label">Next wake</div>
            <div class="stat-value">${C(n.status?.nextWakeAtMs??null)}</div>
          </div>
        </div>
        ${n.error?e`<div class="callout danger" style="margin-top: 12px;">${n.error}</div>`:t}
      </section>
    </section>
    <section class="card">
      <div class="card-title">Agent Cron Jobs</div>
      <div class="card-sub">Scheduled jobs targeting this agent.</div>
      ${r.length===0?e` <div class="muted" style="margin-top: 16px">No jobs assigned.</div> `:e`
            <div class="list" style="margin-top: 16px;">
              ${r.map(r=>e`
                  <div class="list-item">
                    <div class="list-main">
                      <div class="list-title">${r.name}</div>
                      ${r.description?e`<div class="list-sub">${r.description}</div>`:t}
                      <div class="chip-row" style="margin-top: 6px;">
                        <span class="chip">${w(r)}</span>
                        <span class="chip ${r.enabled?`chip-ok`:`chip-warn`}">
                          ${r.enabled?`enabled`:`disabled`}
                        </span>
                        <span class="chip">${r.sessionTarget}</span>
                      </div>
                    </div>
                    <div class="list-meta">
                      <div class="mono">${y(r)}</div>
                      <div class="muted">${S(r)}</div>
                      <button
                        class="btn btn--sm"
                        style="margin-top: 6px;"
                        ?disabled=${!r.enabled}
                        @click=${()=>n.onRunNow(r.id)}
                      >
                        Run Now
                      </button>
                    </div>
                  </div>
                `)}
            </div>
          `}
    </section>
  `}function _e(n){let r=n.agentFilesList?.agentId===n.agentId?n.agentFilesList:null,i=r?.files??[],a=n.agentFileActive??null,o=a?i.find(e=>e.name===a)??null:null,s=a?n.agentFileContents[a]??``:``,l=a?n.agentFileDrafts[a]??s:``,f=a?l!==s:!1;return e`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Core Files</div>
          <div class="card-sub">Bootstrap persona, identity, and tool guidance.</div>
        </div>
        <button
          class="btn btn--sm"
          ?disabled=${n.agentFilesLoading}
          @click=${()=>n.onLoadFiles(n.agentId)}
        >
          ${n.agentFilesLoading?`Loading…`:`Refresh`}
        </button>
      </div>
      ${r?e`<div class="muted mono" style="margin-top: 8px;">
            Workspace: <span>${r.workspace}</span>
          </div>`:t}
      ${n.agentFilesError?e`<div class="callout danger" style="margin-top: 12px;">
            ${n.agentFilesError}
          </div>`:t}
      ${r?i.length===0?e` <div class="muted" style="margin-top: 16px">No files found.</div> `:e`
              <div class="agent-tabs" style="margin-top: 14px;">
                ${i.map(r=>{let i=a===r.name,o=r.name.replace(/\.md$/i,``);return e`
                    <button
                      class="agent-tab ${i?`active`:``} ${r.missing?`agent-tab--missing`:``}"
                      @click=${()=>n.onSelectFile(r.name)}
                    >
                      ${o}${r.missing?e` <span class="agent-tab-badge">missing</span> `:t}
                    </button>
                  `})}
              </div>
              ${o?e`
                    <div class="agent-file-header" style="margin-top: 14px;">
                      <div>
                        <div class="agent-file-sub mono">${o.path}</div>
                      </div>
                      <div class="agent-file-actions">
                        <button
                          class="btn btn--sm"
                          title="Preview rendered markdown"
                          @click=${e=>{let t=e.currentTarget.closest(`.card`)?.querySelector(`dialog`);t&&t.showModal()}}
                        >
                          ${u.eye} Preview
                        </button>
                        <button
                          class="btn btn--sm"
                          ?disabled=${!f}
                          @click=${()=>n.onFileReset(o.name)}
                        >
                          Reset
                        </button>
                        <button
                          class="btn btn--sm primary"
                          ?disabled=${n.agentFileSaving||!f}
                          @click=${()=>n.onFileSave(o.name)}
                        >
                          ${n.agentFileSaving?`Saving…`:`Save`}
                        </button>
                      </div>
                    </div>
                    ${o.missing?e`
                          <div class="callout info" style="margin-top: 10px">
                            This file is missing. Saving will create it in the agent workspace.
                          </div>
                        `:t}
                    <label class="field agent-file-field" style="margin-top: 12px;">
                      <span>Content</span>
                      <textarea
                        class="agent-file-textarea"
                        .value=${l}
                        @input=${e=>n.onFileDraftChange(o.name,e.target.value)}
                      ></textarea>
                    </label>
                    <dialog
                      class="md-preview-dialog"
                      @click=${e=>{let t=e.currentTarget;e.target===t&&t.close()}}
                      @close=${e=>{e.currentTarget.querySelector(`.md-preview-dialog__panel`)?.classList.remove(`fullscreen`)}}
                    >
                      <div class="md-preview-dialog__panel">
                        <div class="md-preview-dialog__header">
                          <div class="md-preview-dialog__title mono">${o.name}</div>
                          <div class="md-preview-dialog__actions">
                            <button
                              class="btn btn--sm md-preview-expand-btn"
                              title="Toggle fullscreen"
                              @click=${e=>{let t=e.currentTarget,n=t.closest(`.md-preview-dialog__panel`);if(!n)return;let r=n.classList.toggle(`fullscreen`);t.classList.toggle(`is-fullscreen`,r)}}
                            >
                              <span class="when-normal">${u.maximize} Expand</span
                              ><span class="when-fullscreen">${u.minimize} Collapse</span>
                            </button>
                            <button
                              class="btn btn--sm"
                              title="Edit file"
                              @click=${e=>{e.currentTarget.closest(`dialog`)?.close(),document.querySelector(`.agent-file-textarea`)?.focus()}}
                            >
                              ${u.edit} Editor
                            </button>
                            <button
                              class="btn btn--sm"
                              @click=${e=>{e.currentTarget.closest(`dialog`)?.close()}}
                            >
                              ${u.x} Close
                            </button>
                          </div>
                        </div>
                        <div class="md-preview-dialog__body">
                          ${d(le(m.parse(l,{gfm:!0,breaks:!0}),{sanitize:e=>c.sanitize(e)}))}
                        </div>
                      </div>
                    </dialog>
                  `:e` <div class="muted" style="margin-top: 16px">Select a file to edit.</div> `}
            `:e`
            <div class="callout info" style="margin-top: 12px">
              Load the agent workspace files to edit core instructions.
            </div>
          `}
    </section>
  `}function ve(n,r){let i=r.source??n.source,a=r.pluginId??n.pluginId,o=[];return i===`plugin`&&a?o.push(`plugin:${a}`):i===`core`&&o.push(`core`),r.optional&&o.push(`optional`),o.length===0?t:e`
    <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: 6px;">
      ${o.map(t=>e`<span class="agent-pill">${t}</span>`)}
    </div>
  `}function ye(e){return e.source===`plugin`?e.pluginId?`Connected: ${e.pluginId}`:`Connected`:e.source===`channel`?e.channelId?`Channel: ${e.channelId}`:`Channel`:`Built-in`}function be(n){let r=g(n.configForm,n.agentId),a=r.entry?.tools??{},o=r.globalTools??{},s=a.profile??o.profile??`full`,c=i(n.toolsCatalogResult),l=b(n.toolsCatalogResult),u=a.profile?`agent override`:o.profile?`global default`:`default`,d=Array.isArray(a.allow)&&a.allow.length>0,p=Array.isArray(o.allow)&&o.allow.length>0,m=!!n.configForm&&!n.configLoading&&!n.configSaving&&!d&&!(n.toolsCatalogLoading&&!n.toolsCatalogResult&&!n.toolsCatalogError),h=d?[]:Array.isArray(a.alsoAllow)?a.alsoAllow:[],_=d?[]:Array.isArray(a.deny)?a.deny:[],y=d?{allow:a.allow??[],deny:a.deny??[]}:x(s)??void 0,S=l.flatMap(e=>e.tools.map(e=>e.id)),C=e=>{let t=v(e,y),n=D(e,h),r=D(e,_);return{allowed:(t||n)&&!r,baseAllowed:t,denied:r}},w=S.filter(e=>C(e).allowed).length,T=(e,t)=>{let r=new Set(h.map(e=>f(e)).filter(e=>e.length>0)),i=new Set(_.map(e=>f(e)).filter(e=>e.length>0)),a=C(e).baseAllowed,o=f(e);t?(i.delete(o),a||r.add(o)):(r.delete(o),i.add(o)),n.onOverridesChange(n.agentId,[...r],[...i])},E=e=>{let t=new Set(h.map(e=>f(e)).filter(e=>e.length>0)),r=new Set(_.map(e=>f(e)).filter(e=>e.length>0));for(let n of S){let i=C(n).baseAllowed,a=f(n);e?(r.delete(a),i||t.add(a)):(t.delete(a),r.add(a))}n.onOverridesChange(n.agentId,[...t],[...r])};return e`
    <section class="card">
      <div class="row" style="justify-content: space-between; flex-wrap: wrap;">
        <div style="min-width: 0;">
          <div class="card-title">Tool Access</div>
          <div class="card-sub">
            Profile + per-tool overrides for this agent.
            <span class="mono">${w}/${S.length}</span> enabled.
          </div>
        </div>
        <div class="row" style="gap: 8px; flex-wrap: wrap;">
          <button class="btn btn--sm" ?disabled=${!m} @click=${()=>E(!0)}>
            Enable All
          </button>
          <button class="btn btn--sm" ?disabled=${!m} @click=${()=>E(!1)}>
            Disable All
          </button>
          <button
            class="btn btn--sm"
            ?disabled=${n.configLoading}
            @click=${n.onConfigReload}
          >
            Reload Config
          </button>
          <button
            class="btn btn--sm primary"
            ?disabled=${n.configSaving||!n.configDirty}
            @click=${n.onConfigSave}
          >
            ${n.configSaving?`Saving…`:`Save`}
          </button>
        </div>
      </div>

      ${n.configForm?t:e`
            <div class="callout info" style="margin-top: 12px">
              Load the gateway config to adjust tool profiles.
            </div>
          `}
      ${d?e`
            <div class="callout info" style="margin-top: 12px">
              This agent is using an explicit allowlist in config. Tool overrides are managed in the
              Config tab.
            </div>
          `:t}
      ${p?e`
            <div class="callout info" style="margin-top: 12px">
              Global tools.allow is set. Agent overrides cannot enable tools that are globally
              blocked.
            </div>
          `:t}
      ${n.toolsCatalogLoading&&!n.toolsCatalogResult&&!n.toolsCatalogError?e`
            <div class="callout info" style="margin-top: 12px">Loading runtime tool catalog…</div>
          `:t}
      ${n.toolsCatalogError?e`
            <div class="callout info" style="margin-top: 12px">
              Could not load runtime tool catalog. Showing built-in fallback list instead.
            </div>
          `:t}

      <div class="agent-tools-meta" style="margin-top: 16px;">
        <div class="agent-kv">
          <div class="label">Profile</div>
          <div class="mono">${s}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Source</div>
          <div>${u}</div>
        </div>
        ${n.configDirty?e`
              <div class="agent-kv">
                <div class="label">Status</div>
                <div class="mono">unsaved</div>
              </div>
            `:t}
      </div>

      <div style="margin-top: 18px;">
        <div class="label">Available Right Now</div>
        <div class="card-sub">
          What this agent can use in the current chat session.
          <span class="mono">${n.runtimeSessionKey||`no session`}</span>
        </div>
        ${n.runtimeSessionMatchesSelectedAgent?n.toolsEffectiveLoading&&!n.toolsEffectiveResult&&!n.toolsEffectiveError?e`
                <div class="callout info" style="margin-top: 12px">Loading available tools…</div>
              `:n.toolsEffectiveError?e`
                  <div class="callout info" style="margin-top: 12px">
                    Could not load available tools for this session.
                  </div>
                `:(n.toolsEffectiveResult?.groups?.length??0)===0?e`
                    <div class="callout info" style="margin-top: 12px">
                      No tools are available for this session right now.
                    </div>
                  `:e`
                    <div class="agent-tools-grid" style="margin-top: 16px;">
                      ${n.toolsEffectiveResult?.groups.map(t=>e`
                          <div class="agent-tools-section">
                            <div class="agent-tools-header">${t.label}</div>
                            <div class="agent-tools-list">
                              ${t.tools.map(t=>e`
                                  <div class="agent-tool-row">
                                    <div>
                                      <div class="agent-tool-title">${t.label}</div>
                                      <div class="agent-tool-sub">${t.description}</div>
                                      <div
                                        style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: 6px;"
                                      >
                                        <span class="agent-pill"
                                          >${ye(t)}</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                `)}
                            </div>
                          </div>
                        `)}
                    </div>
                  `:e`
              <div class="callout info" style="margin-top: 12px">
                Switch chat to this agent to view its live runtime tools.
              </div>
            `}
      </div>

      <div class="agent-tools-presets" style="margin-top: 16px;">
        <div class="label">Quick Presets</div>
        <div class="agent-tools-buttons">
          ${c.map(t=>e`
              <button
                class="btn btn--sm ${s===t.id?`active`:``}"
                ?disabled=${!m}
                @click=${()=>n.onProfileChange(n.agentId,t.id,!0)}
              >
                ${t.label}
              </button>
            `)}
          <button
            class="btn btn--sm"
            ?disabled=${!m}
            @click=${()=>n.onProfileChange(n.agentId,null,!1)}
          >
            Inherit
          </button>
        </div>
      </div>

      <div class="agent-tools-grid" style="margin-top: 20px;">
        ${l.map(n=>e`
            <div class="agent-tools-section">
              <div class="agent-tools-header">
                ${n.label}
                ${n.source===`plugin`&&n.pluginId?e`<span class="agent-pill" style="margin-left: 8px;"
                      >plugin:${n.pluginId}</span
                    >`:t}
              </div>
              <div class="agent-tools-list">
                ${n.tools.map(t=>{let{allowed:r}=C(t.id);return e`
                    <div class="agent-tool-row">
                      <div>
                        <div class="agent-tool-title mono">${t.label}</div>
                        <div class="agent-tool-sub">${t.description}</div>
                        ${ve(n,t)}
                      </div>
                      <label class="cfg-toggle">
                        <input
                          type="checkbox"
                          .checked=${r}
                          ?disabled=${!m}
                          @change=${e=>T(t.id,e.target.checked)}
                        />
                        <span class="cfg-toggle__track"></span>
                      </label>
                    </div>
                  `})}
              </div>
            </div>
          `)}
      </div>
    </section>
  `}function xe(n){let r=!!n.configForm&&!n.configLoading&&!n.configSaving,i=g(n.configForm,n.agentId),a=Array.isArray(i.entry?.skills)?i.entry?.skills:void 0,o=new Set((a??[]).map(e=>e.trim()).filter(Boolean)),s=a!==void 0,c=!!(n.report&&n.activeAgentId===n.agentId),l=c?n.report?.skills??[]:[],u=n.filter.trim().toLowerCase(),d=u?l.filter(e=>[e.name,e.description,e.source].join(` `).toLowerCase().includes(u)):l,f=k(d),p=s?l.filter(e=>o.has(e.name)).length:l.length,m=l.length;return e`
    <section class="card">
      <div class="row" style="justify-content: space-between; flex-wrap: wrap;">
        <div style="min-width: 0;">
          <div class="card-title">Skills</div>
          <div class="card-sub">
            Per-agent skill allowlist and workspace skills.
            ${m>0?e`<span class="mono">${p}/${m}</span>`:t}
          </div>
        </div>
        <div class="row" style="gap: 8px; flex-wrap: wrap;">
          <div
            class="row"
            style="gap: 4px; border: 1px solid var(--border); border-radius: var(--radius-md); padding: 2px;"
          >
            <button
              class="btn btn--sm"
              ?disabled=${!r}
              @click=${()=>n.onClear(n.agentId)}
            >
              Enable All
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!r}
              @click=${()=>n.onDisableAll(n.agentId)}
            >
              Disable All
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!r||!s}
              @click=${()=>n.onClear(n.agentId)}
              title="Remove per-agent allowlist and use all skills"
            >
              Reset
            </button>
          </div>
          <button
            class="btn btn--sm"
            ?disabled=${n.configLoading}
            @click=${n.onConfigReload}
          >
            Reload Config
          </button>
          <button class="btn btn--sm" ?disabled=${n.loading} @click=${n.onRefresh}>
            ${n.loading?`Loading…`:`Refresh`}
          </button>
          <button
            class="btn btn--sm primary"
            ?disabled=${n.configSaving||!n.configDirty}
            @click=${n.onConfigSave}
          >
            ${n.configSaving?`Saving…`:`Save`}
          </button>
        </div>
      </div>

      ${n.configForm?t:e`
            <div class="callout info" style="margin-top: 12px">
              Load the gateway config to set per-agent skills.
            </div>
          `}
      ${s?e`
            <div class="callout info" style="margin-top: 12px">
              This agent uses a custom skill allowlist.
            </div>
          `:e`
            <div class="callout info" style="margin-top: 12px">
              All skills are enabled. Disabling any skill will create a per-agent allowlist.
            </div>
          `}
      ${!c&&!n.loading?e`
            <div class="callout info" style="margin-top: 12px">
              Load skills for this agent to view workspace-specific entries.
            </div>
          `:t}
      ${n.error?e`<div class="callout danger" style="margin-top: 12px;">${n.error}</div>`:t}

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="flex: 1;">
          <span>Filter</span>
          <input
            .value=${n.filter}
            @input=${e=>n.onFilterChange(e.target.value)}
            placeholder="Search skills"
            autocomplete="off"
            name="agent-skills-filter"
          />
        </label>
        <div class="muted">${d.length} shown</div>
      </div>

      ${d.length===0?e` <div class="muted" style="margin-top: 16px">No skills found.</div> `:e`
            <div class="agent-skills-groups" style="margin-top: 16px;">
              ${f.map(e=>Se(e,{agentId:n.agentId,allowSet:o,usingAllowlist:s,editable:r,onToggle:n.onToggle}))}
            </div>
          `}
    </section>
  `}function Se(t,n){return e`
    <details class="agent-skills-group" ?open=${!(t.id===`workspace`||t.id===`built-in`)}>
      <summary class="agent-skills-header">
        <span>${t.label}</span>
        <span class="muted">${t.skills.length}</span>
      </summary>
      <div class="list skills-grid">
        ${t.skills.map(e=>Ce(e,{agentId:n.agentId,allowSet:n.allowSet,usingAllowlist:n.usingAllowlist,editable:n.editable,onToggle:n.onToggle}))}
      </div>
    </details>
  `}function Ce(n,r){let i=r.usingAllowlist?r.allowSet.has(n.name):!0,a=M(n),o=A(n);return e`
    <div class="list-item agent-skill-row">
      <div class="list-main">
        <div class="list-title">${n.emoji?`${n.emoji} `:``}${n.name}</div>
        <div class="list-sub">${n.description}</div>
        ${j({skill:n})}
        ${a.length>0?e`<div class="muted" style="margin-top: 6px;">Missing: ${a.join(`, `)}</div>`:t}
        ${o.length>0?e`<div class="muted" style="margin-top: 6px;">Reason: ${o.join(`, `)}</div>`:t}
      </div>
      <div class="list-meta">
        <label class="cfg-toggle">
          <input
            type="checkbox"
            .checked=${i}
            ?disabled=${!r.editable}
            @change=${e=>r.onToggle(r.agentId,n.name,e.target.checked)}
          />
          <span class="cfg-toggle__track"></span>
        </label>
      </div>
    </div>
  `}function X(n){let r=n.agentsList?.agents??[],i=n.agentsList?.defaultId??null,a=n.selectedAgentId??i??r[0]?.id??null,o=a?r.find(e=>e.id===a)??null:null,s=Oe(r,n.agentIdentityById,n.agentSoulContentById),c=r.find(e=>e.id===`main`)??null,l=r.filter(e=>e.id!==`main`&&!Z(e.id,n.agentSoulContentById[e.id])),u=a&&n.agentSkills.agentId===a?n.agentSkills.report?.skills?.length??null:null,d=n.channels.snapshot?Object.keys(n.channels.snapshot.channelAccounts??{}).length:null,f=a?n.cron.jobs.filter(e=>e.agentId===a).length:null,p={files:n.agentFiles.list?.files?.length??null,skills:u,channels:d,cron:f||null};return e`
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
            ${o?e`
                  <button
                    type="button"
                    class="btn btn--sm btn--ghost"
                    @click=${()=>void navigator.clipboard.writeText(o.id)}
                    title="Copy agent ID to clipboard"
                  >
                    Copy ID
                  </button>
                  <button
                    type="button"
                    class="btn btn--sm btn--ghost"
                    ?disabled=${!!(i&&o.id===i)}
                    @click=${()=>n.onSetDefault(o.id)}
                    title=${i&&o.id===i?`Already the default agent`:`Set as the default agent`}
                  >
                    ${i&&o.id===i?`Default`:`Set Default`}
                  </button>
                `:t}
            <button
              class="btn btn--sm agents-refresh-btn"
              ?disabled=${n.loading}
              @click=${n.onRefresh}
            >
              ${n.loading?`Loading…`:`Refresh`}
            </button>
          </div>
        </div>
        ${n.error?e`<div class="callout danger">${n.error}</div>`:t}
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
          <button type="button" class="btn btn--sm primary" @click=${n.onOpenAgentCreator}>
            + New Employee
          </button>
        </div>
        ${n.agentCreatorSuccess?e`<div class="callout success" style="margin-top: 12px;">${n.agentCreatorSuccess}</div>`:t}
        ${s.length===0?e`<div class="card" style="margin-top: 12px;">
              <div class="card-sub">No Kova employees are available yet.</div>
            </div>`:e`<div class="agents-employee-grid">
              ${s.map(e=>we({meta:e,selectedId:a,defaultId:i,onSelectAgent:n.onSelectAgent,onNavigateToChat:n.onNavigateToChat,onNavigateToActivity:n.onNavigateToActivity}))}
            </div>`}
      </section>

      <section class="agents-section">
        <div class="agents-section__header">
          <div class="card-title">System</div>
          <div class="card-sub">The default Kova Core Agent lives here.</div>
        </div>
        ${c?Te({agent:c,selectedId:a,defaultId:i,onSelectAgent:n.onSelectAgent}):e`
              <div class="card agents-system-card agents-system-card--empty">
                <div class="card-sub">The <code>main</code> agent is not available in the current list.</div>
              </div>
            `}
      </section>

      ${l.length>0?e`
            <section class="agents-section">
              <div class="agents-section__header">
                <div class="card-title">Other Agents</div>
                <div class="card-sub">Any additional configured agents stay available here.</div>
              </div>
              <div class="agents-other-grid">
                ${l.map(e=>Ee({agent:e,selectedId:a,defaultId:i,onSelectAgent:n.onSelectAgent}))}
              </div>
            </section>
          `:t}

      <section class="agents-main">
        ${o?e`
              ${Ae(n.activePanel,e=>n.onSelectPanel(e),p)}
              ${n.activePanel===`overview`?N({agent:o,basePath:n.basePath,defaultId:i,configForm:n.config.form,agentFilesList:n.agentFiles.list,agentIdentity:n.agentIdentityById[o.id]??null,agentIdentityError:n.agentIdentityError,agentIdentityLoading:n.agentIdentityLoading,configLoading:n.config.loading,configSaving:n.config.saving,configDirty:n.config.dirty,modelCatalog:n.modelCatalog,onConfigReload:n.onConfigReload,onConfigSave:n.onConfigSave,onModelChange:n.onModelChange,onModelFallbacksChange:n.onModelFallbacksChange,onSelectPanel:n.onSelectPanel}):t}
              ${n.activePanel===`files`?_e({agentId:o.id,agentFilesList:n.agentFiles.list,agentFilesLoading:n.agentFiles.loading,agentFilesError:n.agentFiles.error,agentFileActive:n.agentFiles.active,agentFileContents:n.agentFiles.contents,agentFileDrafts:n.agentFiles.drafts,agentFileSaving:n.agentFiles.saving,onLoadFiles:n.onLoadFiles,onSelectFile:n.onSelectFile,onFileDraftChange:n.onFileDraftChange,onFileReset:n.onFileReset,onFileSave:n.onFileSave}):t}
              ${n.activePanel===`tools`?be({agentId:o.id,configForm:n.config.form,configLoading:n.config.loading,configSaving:n.config.saving,configDirty:n.config.dirty,toolsCatalogLoading:n.toolsCatalog.loading,toolsCatalogError:n.toolsCatalog.error,toolsCatalogResult:n.toolsCatalog.result,toolsEffectiveLoading:n.toolsEffective.loading,toolsEffectiveError:n.toolsEffective.error,toolsEffectiveResult:n.toolsEffective.result,runtimeSessionKey:n.runtimeSessionKey,runtimeSessionMatchesSelectedAgent:n.runtimeSessionMatchesSelectedAgent,onProfileChange:n.onToolsProfileChange,onOverridesChange:n.onToolsOverridesChange,onConfigReload:n.onConfigReload,onConfigSave:n.onConfigSave}):t}
              ${n.activePanel===`skills`?xe({agentId:o.id,report:n.agentSkills.report,loading:n.agentSkills.loading,error:n.agentSkills.error,activeAgentId:n.agentSkills.agentId,configForm:n.config.form,configLoading:n.config.loading,configSaving:n.config.saving,configDirty:n.config.dirty,filter:n.agentSkills.filter,onFilterChange:n.onSkillsFilterChange,onRefresh:n.onSkillsRefresh,onToggle:n.onAgentSkillToggle,onClear:n.onAgentSkillsClear,onDisableAll:n.onAgentSkillsDisableAll,onConfigReload:n.onConfigReload,onConfigSave:n.onConfigSave}):t}
              ${n.activePanel===`channels`?he({context:T(o,n.config.form,n.agentFiles.list,i,n.agentIdentityById[o.id]??null),configForm:n.config.form,snapshot:n.channels.snapshot,loading:n.channels.loading,error:n.channels.error,lastSuccess:n.channels.lastSuccess,onRefresh:n.onChannelsRefresh,onSelectPanel:n.onSelectPanel}):t}
              ${n.activePanel===`cron`?ge({context:T(o,n.config.form,n.agentFiles.list,i,n.agentIdentityById[o.id]??null),agentId:o.id,jobs:n.cron.jobs,status:n.cron.status,loading:n.cron.loading,error:n.cron.error,onRefresh:n.onCronRefresh,onRunNow:n.onCronRunNow,onSelectPanel:n.onSelectPanel}):t}
            `:e`
              <div class="card">
                <div class="card-title">Select an agent</div>
                <div class="card-sub">Pick an agent above to inspect its workspace and tools.</div>
              </div>
            `}
      </section>
    </div>
  `}function we(n){let{meta:r,selectedId:i,defaultId:a}=n,o=i===r.agent.id,s=a===r.agent.id,c=De(r.autonomy);return e`
    <article
      class="card agents-employee-card ${o?`is-selected`:``}"
      @click=${()=>n.onSelectAgent(r.agent.id)}
    >
      <div class="agents-employee-card__header">
        <div class="agents-employee-card__avatar">${r.avatar}</div>
        <div class="agents-employee-card__identity">
          <div class="agents-employee-card__name-row">
            <div class="agents-employee-card__name">${r.name}</div>
            ${s?e`<span class="agents-chip">Default</span>`:t}
            ${o?e`<span class="agents-chip agents-chip--selected">Selected</span>`:t}
          </div>
          <div class="agents-employee-card__role">${r.role}</div>
        </div>
      </div>
      <div class="agents-employee-card__meta-row">
        <span class="agents-autonomy-badge ${c}">${r.autonomy}</span>
        <span class="agents-employee-card__agent-id">${r.agent.id}</span>
      </div>
      <div class="agents-employee-card__actions">
        <button
          type="button"
          class="btn btn--sm"
          @click=${e=>{e.stopPropagation(),n.onNavigateToChat(r.agent.id)}}
        >
          Chat
        </button>
        <button
          type="button"
          class="btn btn--sm btn--ghost"
          @click=${e=>{e.stopPropagation(),n.onNavigateToActivity(r.agent.id)}}
        >
          Activity
        </button>
      </div>
    </article>
  `}function Te(n){let{agent:r,selectedId:i,defaultId:a}=n,o=r.id===i,s=_(r.id,a);return e`
    <article
      class="card agents-system-card ${o?`is-selected`:``}"
      @click=${()=>n.onSelectAgent(r.id)}
    >
      <div class="agents-system-card__content">
        <div class="agents-system-card__icon">⚙️</div>
        <div>
          <div class="agents-system-card__title-row">
            <div class="agents-system-card__title">${h(r)}</div>
            ${s?e`<span class="agents-chip">${s}</span>`:t}
          </div>
          <div class="agents-system-card__sub">Kova Core</div>
        </div>
      </div>
      <button type="button" class="btn btn--sm btn--ghost">Inspect</button>
    </article>
  `}function Ee(n){let{agent:r,selectedId:i,defaultId:a}=n,o=r.id===i,s=_(r.id,a);return e`
    <article class="card agents-other-card ${o?`is-selected`:``}">
      <div>
        <div class="agents-other-card__title-row">
          <div class="agents-other-card__title">${h(r)}</div>
          ${s?e`<span class="agents-chip">${s}</span>`:t}
        </div>
        <div class="agents-other-card__sub">${r.id}</div>
      </div>
      <button type="button" class="btn btn--sm btn--ghost" @click=${()=>n.onSelectAgent(r.id)}>
        Inspect
      </button>
    </article>
  `}function De(e){switch(e){case`Supervised`:return`agents-autonomy-badge--supervised`;case`Autonomous`:return`agents-autonomy-badge--autonomous`;default:return`agents-autonomy-badge--act-notify`}}function Oe(e,t,n){let r=new Map(l.map((e,t)=>[e.id,t]));return e.filter(e=>e.id!==`main`&&Z(e.id,n[e.id])).map(e=>{let i=l.find(t=>t.id===e.id),a=t[e.id],o=Q(n[e.id]);return{id:e.id,name:o?.name??a?.name??i?.name??h(e),role:o?.role??i?.role??`Kova Employee`,avatar:o?.emoji??a?.emoji??i?.avatar??`🤖`,autonomy:o?.autonomy??i?.autonomy??`Act + Notify`,agent:e,order:r.get(e.id)??l.length}}).toSorted((e,t)=>e.order===t.order?e.name.localeCompare(t.name):e.order-t.order)}function Z(e,t){return e.startsWith(`kova-`)||Q(t)?.kova===!0}function Q(e){if(!e)return null;let t=e.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/),n=t?.[1]??``,r=t?e.slice(t[0].length):e,i={kova:!1};for(let e of n.split(/\r?\n/)){let t=e.indexOf(`:`);if(t<0)continue;let n=e.slice(0,t).trim().toLowerCase(),r=ke(e.slice(t+1).trim());switch(n){case`kova`:i.kova=/^(true|1|yes)$/i.test(r);break;case`name`:i.name=r||void 0;break;case`role`:i.role=r||void 0;break;case`emoji`:i.emoji=r||void 0;break;case`autonomy`:i.autonomy=$(r)??i.autonomy;break;default:break}}let a=r.match(/^#\s+(\S+)\s+(.+?)\s+[—-]\s+(.+)$/m);a&&(i.emoji??=a[1]?.trim()||void 0,i.name??=a[2]?.trim()||void 0,i.role??=a[3]?.trim()||void 0);let o=r.match(/^Level:\s*(.+)$/m);return o&&(i.autonomy??=$(o[1])),i}function ke(e){if(e.startsWith(`"`)&&e.endsWith(`"`)||e.startsWith(`'`)&&e.endsWith(`'`))try{return JSON.parse(e)}catch{return e.slice(1,-1)}return e}function $(e){switch(e?.trim().toLowerCase()){case`1`:case`supervised`:return`Supervised`;case`2`:case`act + notify`:case`act+notify`:case`act-notify`:return`Act + Notify`;case`3`:case`autonomous`:return`Autonomous`;default:return}}function Ae(n,r,i){return e`
    <div class="agent-tabs">
      ${[{id:`overview`,label:`Overview`},{id:`files`,label:`Files`},{id:`tools`,label:`Tools`},{id:`skills`,label:`Skills`},{id:`channels`,label:`Channels`},{id:`cron`,label:`Cron Jobs`}].map(a=>e`
          <button
            class="agent-tab ${n===a.id?`active`:``}"
            type="button"
            @click=${()=>r(a.id)}
          >
            ${a.label}${i[a.id]==null?t:e`<span class="agent-tab-count">${i[a.id]}</span>`}
          </button>
        `)}
    </div>
  `}export{X as renderAgents};
//# sourceMappingURL=agents-D-2UCmXD.js.map