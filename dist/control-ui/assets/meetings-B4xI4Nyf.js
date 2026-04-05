import{i as e,n as t}from"./lit-zdTgzAJI.js";import{l as n}from"./format-BahKhiOC.js";import{I as r}from"./index-DU0It9SM.js";function i(n,r){return r?e`<div class="callout ${n}">${r}</div>`:t}function a(n){return e`
    <article class="card" style="display: grid; gap: 14px;">
      <div class="row" style="justify-content: space-between; gap: 12px; align-items: center; flex-wrap: wrap;">
        <div class="card-title">${n.title}</div>
        <button type="button" class="btn btn--sm" @click=${n.onCopy}>
          <span aria-hidden="true">${r.copy}</span>
          <span>Copy</span>
        </button>
      </div>
      <div
        style="white-space: pre-wrap; line-height: 1.65; font-size: 14px; color: var(--text); min-height: 120px;"
      >
        ${n.body.trim()||`None identified`}
      </div>
      ${n.footer??t}
    </article>
  `}function o(t,r){let i=t.title.trim()||`Untitled meeting`,a=t.summary.trim()||t.actionItems.trim()||t.decisions.trim();return e`
    <button
      type="button"
      class="card"
      style="display: grid; gap: 8px; text-align: left; width: 100%; cursor: pointer;"
      @click=${()=>r(t.id)}
    >
      <div class="row" style="justify-content: space-between; gap: 10px; align-items: flex-start;">
        <div style="display: grid; gap: 4px;">
          <div class="card-title" style="font-size: 15px;">${i}</div>
          <div class="card-sub">
            ${t.sourceName?`Source: ${t.sourceName}`:`Pasted transcript`}
          </div>
        </div>
        <span class="chip">${n(t.createdAt)}</span>
      </div>
      <div class="muted" style="font-size: 13px; line-height: 1.5;">
        ${a?`${a.slice(0,180)}${a.length>180?`...`:``}`:`Tap to reload this meeting analysis.`}
      </div>
    </button>
  `}function s(s){let c=s.connected&&!s.analyzing&&s.transcript.trim().length>0;return e`
    <section class="page page--settings" style="display: grid; gap: 20px;">
      <div class="card" style="display: grid; gap: 12px; max-width: 1100px;">
        <div style="display: grid; gap: 4px;">
          <div class="card-title">Meeting Intelligence</div>
          <div class="card-sub">
            Upload a transcript or paste notes and Morgan will turn the meeting into a summary,
            action list, decisions log, and follow-up draft.
          </div>
        </div>
        ${i(`danger`,s.error)} ${i(`success`,s.notice)}
      </div>

      <div
        style="display: grid; gap: 20px; align-items: start; grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr);"
      >
        <div style="display: grid; gap: 20px;">
          <section class="card" style="display: grid; gap: 16px;">
            <div style="display: grid; gap: 4px;">
              <div class="card-title">Upload Transcript</div>
              <div class="card-sub">Accepts '.txt', '.md', and '.pdf' files, or paste the transcript below.</div>
            </div>

            <label
              class="card"
              style="display: grid; gap: 10px; border: 1px dashed var(--border-strong); background: var(--surface-elevated); cursor: pointer;"
              @dragover=${e=>e.preventDefault()}
              @drop=${e=>{e.preventDefault();let t=e.dataTransfer?.files?.[0]??null;s.onFileSelect(t)}}
            >
              <input
                type="file"
                accept=".txt,.md,.pdf"
                hidden
                @change=${e=>{let t=e.target,n=t.files?.[0]??null;s.onFileSelect(n),t.value=``}}
              />
              <div style="font-size: 34px; line-height: 1;">📝</div>
              <div style="display: grid; gap: 4px;">
                <strong>Drop a transcript here</strong>
                <span class="muted">or click to browse from disk</span>
              </div>
              ${s.sourceName?e`<span class="chip">Loaded: ${s.sourceName}</span>`:e`<span class="chip">No file selected yet</span>`}
            </label>

            <label class="field">
              <span>Meeting title</span>
              <input
                .value=${s.title}
                @input=${e=>s.onTitleChange(e.target.value)}
                placeholder="Optional"
              />
            </label>

            <label class="field">
              <span>Paste meeting transcript here</span>
              <textarea
                rows="18"
                .value=${s.transcript}
                @input=${e=>s.onTranscriptChange(e.target.value)}
                placeholder="Paste the transcript, notes, or cleaned-up meeting minutes here..."
              ></textarea>
            </label>

            <div class="row" style="gap: 10px; flex-wrap: wrap; align-items: center;">
              <button type="button" class="btn primary" ?disabled=${!c} @click=${s.onAnalyze}>
                ${s.analyzing?`Analysing...`:`Analyse Meeting`}
              </button>
              <span class="muted" style="font-size: 12px;">
                Morgan uses the transcript to generate a summary, actions, decisions, and a follow-up email.
              </span>
            </div>
          </section>

          ${s.analyzing?e`
                <section class="card" style="display: grid; gap: 12px;">
                  <div class="row" style="gap: 10px; align-items: center;">
                    <span class="spin" aria-hidden="true">${r.loader}</span>
                    <strong>Morgan is reading the transcript...</strong>
                  </div>
                  <div class="muted" style="font-size: 13px;">
                    This can take a moment for long transcripts or PDFs.
                  </div>
                </section>
              `:t}

          ${s.result?e`
                <section style="display: grid; gap: 16px;">
                  <div class="row" style="justify-content: space-between; gap: 12px; align-items: center; flex-wrap: wrap;">
                    <div style="display: grid; gap: 4px;">
                      <div class="card-title">Results</div>
                      <div class="card-sub">
                        ${s.result.title.trim()||`Untitled meeting`} · generated ${n(s.result.createdAt)}
                      </div>
                    </div>
                    <button type="button" class="btn" @click=${s.onSave}>
                      <span aria-hidden="true">${r.bookmark}</span>
                      <span>Save</span>
                    </button>
                  </div>

                  <div
                    style="display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));"
                  >
                    ${a({title:`Summary`,body:s.result.summary,copyLabel:`summary`,onCopy:()=>void s.onCopy(`summary`,s.result?.summary??``)})}
                    ${a({title:`Action Items`,body:s.result.actionItems,copyLabel:`action items`,onCopy:()=>void s.onCopy(`action items`,s.result?.actionItems??``)})}
                    ${a({title:`Decisions`,body:s.result.decisions,copyLabel:`decisions`,onCopy:()=>void s.onCopy(`decisions`,s.result?.decisions??``)})}
                    ${a({title:`Follow-up Email`,body:s.result.followUpEmail,copyLabel:`follow-up email`,onCopy:()=>void s.onCopy(`follow-up email`,s.result?.followUpEmail??``),footer:e`
                        <div class="row" style="gap: 8px; flex-wrap: wrap;">
                          <button
                            type="button"
                            class="btn btn--sm primary"
                            ?disabled=${s.sendingTelegram}
                            @click=${s.onSendTelegram}
                          >
                            <span aria-hidden="true">${r.send}</span>
                            <span>${s.sendingTelegram?`Sending...`:`Send via Telegram`}</span>
                          </button>
                        </div>
                      `})}
                  </div>
                </section>
              `:t}
        </div>

        <aside style="display: grid; gap: 20px;">
          <section class="card" style="display: grid; gap: 14px;">
            <div style="display: grid; gap: 4px;">
              <div class="card-title">Recent History</div>
              <div class="card-sub">The last 5 saved meeting analyses from this browser.</div>
            </div>

            ${s.history.length===0?e`<div class="muted" style="font-size: 13px;">Save a meeting result to keep it here.</div>`:e`<div style="display: grid; gap: 12px;">
                  ${s.history.map(e=>o(e,s.onLoadHistory))}
                </div>`}

            <button
              type="button"
              class="btn btn--ghost"
              ?disabled=${s.history.length===0}
              @click=${s.onClearHistory}
            >
              <span aria-hidden="true">${r.trash}</span>
              <span>Clear history</span>
            </button>
          </section>
        </aside>
      </div>
    </section>
  `}export{s as renderMeetings};
//# sourceMappingURL=meetings-B4xI4Nyf.js.map