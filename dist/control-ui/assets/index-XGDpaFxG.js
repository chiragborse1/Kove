const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./anthropic-CFEPAL-v.js","./event-stream-B8X6sYaV.js","./github-copilot-headers-CrI0CIJ7.js","./transform-messages-XKqwKV3D.js","./azure-openai-responses-CxiWQLmZ.js","./openai-responses-shared-8nKH8ywL.js","./hash-Bt1aVMQ3.js","./openai-Cn7eGqwa.js","./google-BT0bmsh5.js","./google-shared-CbPHVnPr.js","./google-gemini-cli-BpxbH95Q.js","./google-vertex-lQwbjEII.js","./mistral-CBrDC_Gv.js","./openai-codex-responses-DuhESMYF.js","./preload-helper-Chd9yIcd.js","./openai-completions-Bv33lqKL.js","./openai-responses-BPxpapOg.js","./agents-CLtFQRXd.js","./lit-zdTgzAJI.js","./format-BahKhiOC.js","./channel-config-extras-YNNd-4PG.js","./skills-shared-Bg0Qcnkp.js","./briefing-DS4VWpUL.js","./channels-BKdM7i5r.js","./cron-C11m3yJi.js","./debug-DFf2qCcM.js","./employees-DV-5FV4K.js","./inbox-C4tOnlJr.js","./instances-Cyr-tbN6.js","./logs-B7--7dYP.js","./canvas-BfC_2Nqy.js","./meetings-DSqn6s7n.js","./nodes-Cvq_sAqT.js","./routing-DizI_FiJ.js","./sessions-N9rgJP2R.js","./skills-D1vP4MkL.js","./pdf-BwYFZMZM.js"])))=>i.map(i=>d[i]);
import{a as e,c as t,i as n,o as r,s as i,t as a}from"./event-stream-B8X6sYaV.js";import{a as o,c as s,i as c,l,n as u,o as d,r as f,s as p,t as m}from"./lit-zdTgzAJI.js";import{n as h,t as g}from"./local-storage-D3baoRWx.js";import{t as _}from"./preload-helper-Chd9yIcd.js";import{a as v,c as y,d as b,i as x,l as S,n as C,o as w,s as T,u as ee}from"./format-BahKhiOC.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var E=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},te={attribute:!0,type:String,converter:s,reflect:!1,hasChanged:p},D=(e=te,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function O(e){return(t,n)=>typeof n==`object`?D(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function k(e){return O({...e,state:!0,attribute:!1})}function A(e){let t=(e??``).trim().toLowerCase();if(!t)return null;let n=t.split(`:`).filter(Boolean);if(n.length<3||n[0]!==`agent`)return null;let r=n[1]?.trim(),i=n.slice(2).join(`:`);return!r||!i?null:{agentId:r,rest:i}}function ne(e){let t=(e??``).trim();return t?t.toLowerCase().startsWith(`subagent:`)?!0:!!(A(t)?.rest??``).toLowerCase().startsWith(`subagent:`):!1}var j=`main`,re=`main`,ie=/^[a-z0-9][a-z0-9_-]{0,63}$/i,M=/[^a-z0-9_-]+/g,ae=/^-+/,oe=/-+$/;function se(e){let t=(e??``).trim();return t?t.toLowerCase():re}function N(e){return ce(A(e)?.agentId??`main`)}function ce(e){let t=(e??``).trim();return t?ie.test(t)?t.toLowerCase():t.toLowerCase().replace(M,`-`).replace(ae,``).replace(oe,``).slice(0,64)||`main`:j}function le(e){return`agent:${ce(e.agentId)}:${se(e.mainKey)}`}var ue={common:{health:`Health`,ok:`OK`,online:`Online`,offline:`Offline`,connect:`Connect`,refresh:`Refresh`,enabled:`Enabled`,disabled:`Disabled`,na:`n/a`,version:`Version`,docs:`Docs`,theme:`Theme`,resources:`Resources`,search:`Search`},nav:{chat:`Chat`,control:`Control`,agent:`Agent`,settings:`Settings`,expand:`Expand sidebar`,collapse:`Collapse sidebar`,resize:`Resize sidebar`},tabs:{employees:`Employees`,agents:`Agents`,overview:`Overview`,channels:`Channels`,instances:`Instances`,sessions:`Sessions`,usage:`Usage`,cron:`Cron Jobs`,skills:`Skills`,nodes:`Nodes`,chat:`Chat`,config:`Config`,apiKeys:`API Keys`,communications:`Communications`,appearance:`Appearance`,automation:`Automation`,infrastructure:`Infrastructure`,aiAgents:`AI & Agents`,debug:`Debug`,logs:`Logs`},subtitles:{employees:`AI team and recent activity.`,agents:`Workspaces, tools, identities.`,overview:`Status, entry points, health.`,channels:`Channels and settings.`,instances:`Connected clients and nodes.`,sessions:`Active sessions and defaults.`,usage:`API usage and costs.`,cron:`Wakeups and recurring runs.`,skills:`Skills and API keys.`,nodes:`Paired devices and commands.`,chat:`Gateway chat for quick interventions.`,config:`Edit openclaw.json.`,apiKeys:`OpenRouter key and model defaults.`,communications:`Channels, messages, and audio settings.`,appearance:`Theme, UI, and setup wizard settings.`,automation:`Commands, hooks, cron, and plugins.`,infrastructure:`Gateway, web, browser, and media settings.`,aiAgents:`Agents, models, skills, tools, memory, session.`,debug:`Snapshots, events, RPC.`,logs:`Live gateway logs.`},overview:{access:{title:`Gateway Access`,subtitle:`Where the dashboard connects and how it authenticates.`,wsUrl:`WebSocket URL`,token:`Gateway Token`,password:`Password (not stored)`,sessionKey:`Default Session Key`,language:`Language`,connectHint:`Click Connect to apply connection changes.`,trustedProxy:`Authenticated via trusted proxy.`},snapshot:{title:`Snapshot`,subtitle:`Latest gateway handshake information.`,status:`Status`,uptime:`Uptime`,tickInterval:`Tick Interval`,lastChannelsRefresh:`Last Channels Refresh`,channelsHint:`Use Channels to link WhatsApp, Telegram, Discord, Signal, or iMessage.`},stats:{instances:`Instances`,instancesHint:`Presence beacons in the last 5 minutes.`,sessions:`Sessions`,sessionsHint:`Recent session keys tracked by the gateway.`,cron:`Cron`,cronNext:`Next wake {time}`},notes:{title:`Notes`,subtitle:`Quick reminders for remote control setups.`,tailscaleTitle:`Tailscale serve`,tailscaleText:`Prefer serve mode to keep the gateway on loopback with tailnet auth.`,sessionTitle:`Session hygiene`,sessionText:`Use /new or sessions.patch to reset context.`,cronTitle:`Cron reminders`,cronText:`Use isolated sessions for recurring runs.`},auth:{required:`This gateway requires auth. Add a token or password, then click Connect.`,failed:`Auth failed. Re-copy a tokenized URL with {command}, or update the token, then click Connect.`},pairing:{hint:`This device needs pairing approval from the gateway host.`,mobileHint:`On mobile? Copy the full URL (including #token=...) from kova dashboard --no-open on your desktop.`},insecure:{hint:`This page is HTTP, so the browser blocks device identity. Use HTTPS (Tailscale Serve) or open {url} on the gateway host.`,stayHttp:`If you must stay on HTTP, set {config} (token-only).`},connection:{title:`How to connect`,step1:`Start the gateway on your host machine:`,step2:`Get a tokenized dashboard URL:`,step3:`Paste the WebSocket URL and token above, or open the tokenized URL directly.`,step4:`Or generate a reusable token:`,docsHint:`For remote access, Tailscale Serve is recommended. `,docsLink:`Read the docs →`},cards:{cost:`Cost`,skills:`Skills`,recentSessions:`Recent Sessions`},attention:{title:`Attention`},eventLog:{title:`Event Log`},logTail:{title:`Gateway Logs`},quickActions:{newSession:`New Session`,automation:`Automation`,refreshAll:`Refresh All`,terminal:`Terminal`},palette:{placeholder:`Type a command…`,noResults:`No results`}},usage:{page:{subtitle:`See where tokens go, when sessions spike, and what drives cost.`},common:{emptyValue:`—`,unknown:`unknown`},loading:{title:`Usage Overview`,badge:`Loading`},metrics:{tokens:`Tokens`,cost:`Cost`,session:`session`,sessions:`sessions`},presets:{today:`Today`,last7d:`7d`,last30d:`30d`},filters:{title:`Filters`,to:`to`,startDate:`Start date`,endDate:`End date`,timeZone:`Time zone`,timeZoneLocal:`Local`,timeZoneUtc:`UTC`,pin:`Pin`,pinned:`Pinned`,unpin:`Unpin filters`,selectAll:`Select All`,clear:`Clear`,clearAll:`Clear All`,remove:`Remove filter`,all:`All`,days:`Days`,hours:`Hours`,session:`Session`,agent:`Agent`,channel:`Channel`,provider:`Provider`,model:`Model`,tool:`Tool`,daysCount:`{count} days`,hoursCount:`{count} hours`,sessionsCount:`{count} sessions`},query:{placeholder:`Filter sessions (e.g. key:agent:main:cron* model:gpt-4o has:errors minTokens:2000)`,apply:`Filter (client-side)`,matching:`{shown} of {total} sessions match`,inRange:`{total} sessions in range`,tip:`Tip: use filters or click bars to refine days.`},export:{label:`Export`,sessionsCsv:`Sessions CSV`,dailyCsv:`Daily CSV`,json:`JSON`},empty:{title:`Start with a date range`,subtitle:`Load usage data to compare costs, inspect sessions, and drill into timelines without leaving the dashboard.`,hint:`Select a date range and click Refresh to load usage.`,noData:`No data`,featureOverview:`Overview cards`,featureSessions:`Session ranking`,featureTimeline:`Timeline drilldown`},daily:{title:`Daily Usage`,total:`Total`,byType:`By Type`,tokensTitle:`Daily Token Usage`,costTitle:`Daily Cost`},breakdown:{output:`Output`,input:`Input`,cacheWrite:`Cache Write`,cacheRead:`Cache Read`,total:`Total`,tokensByType:`Tokens by Type`,costByType:`Cost by Type`},overview:{title:`Usage Overview`,messages:`Messages`,messagesHint:`Total user and assistant messages in range.`,messagesAbbrev:`msgs`,user:`user`,assistant:`assistant`,toolCalls:`Tool Calls`,toolCallsHint:`Total tool call count across sessions.`,toolsUsed:`tools used`,errors:`Errors`,errorsHint:`Total message and tool errors in range.`,toolResults:`tool results`,avgTokens:`Avg Tokens / Msg`,avgTokensHint:`Average tokens per message in this range.`,avgCost:`Avg Cost / Msg`,avgCostHint:`Average cost per message when providers report costs.`,avgCostHintMissing:`Average cost per message when providers report costs. Cost data is missing for some or all sessions in this range.`,acrossMessages:`Across {count} messages`,sessions:`Sessions`,sessionsHint:`Distinct sessions in the range.`,sessionsInRange:`of {count} in range`,throughput:`Throughput`,throughputHint:`Throughput shows tokens per minute over active time. Higher is better.`,tokensPerMinute:`tok/min`,perMinute:`/ min`,errorRate:`Error Rate`,errorHint:`Error rate = errors / total messages. Lower is better.`,avgSession:`avg session`,cacheHitRate:`Cache Hit Rate`,cacheHint:`Cache hit rate = cache read / (input + cache read). Higher is better.`,cached:`cached`,prompt:`prompt`,calls:`calls`,topModels:`Top Models`,topProviders:`Top Providers`,topTools:`Top Tools`,topAgents:`Top Agents`,topChannels:`Top Channels`,peakErrorDays:`Peak Error Days`,peakErrorHours:`Peak Error Hours`,noModelData:`No model data`,noProviderData:`No provider data`,noToolCalls:`No tool calls`,noAgentData:`No agent data`,noChannelData:`No channel data`,noErrorData:`No error data`},sessions:{title:`Sessions`,shown:`{count} shown`,total:`{count} total`,avg:`avg`,all:`All`,recent:`Recently viewed`,recentShort:`Recent`,sort:`Sort`,ascending:`Ascending`,descending:`Descending`,clearSelection:`Clear Selection`,noRecent:`No recent sessions`,noneInRange:`No sessions in range`,more:`+{count} more`,selected:`Selected ({count})`,copy:`Copy`,copyName:`Copy session name`,limitReached:`Showing first 1,000 sessions. Narrow date range for complete results.`},details:{noUsageData:`No usage data for this session.`,duration:`Duration`,modelMix:`Model Mix`,filtered:`(filtered)`,close:`Close session details`,noTimeline:`No timeline data`,noDataInRange:`No data in range`,usageOverTime:`Usage Over Time`,reset:`Reset`,perTurn:`Per Turn`,cumulative:`Cumulative`,turnRange:`Turns {start}–{end} of {total}`,assistantOutputTokens:`Assistant output tokens`,userToolInputTokens:`User + tool input tokens`,tokensWrittenToCache:`Tokens written to cache`,tokensReadFromCache:`Tokens read from cache`,noContextData:`No context data`,systemPromptBreakdown:`System Prompt Breakdown`,collapse:`Collapse`,collapseAll:`Collapse All`,expandAll:`Expand All`,baseContextPerMessage:`Base context per message`,system:`System`,systemShort:`Sys`,skills:`Skills`,tools:`Tools`,files:`Files`,ofInput:`of input`,of:`of`,timelineFiltered:`timeline filtered`,conversation:`Conversation`,noMessages:`No messages`,tool:`Tool`,toolResult:`Tool result`,hasTools:`Has tools`,searchConversation:`Search conversation`,you:`You`,noMessagesMatch:`No messages match the filters.`},mosaic:{title:`Activity by Time`,subtitleEmpty:`Estimates require session timestamps.`,subtitle:`Estimated from session spans (first/last activity). Time zone: {zone}.`,noTimelineData:`No timeline data yet.`,dayOfWeek:`Day of Week`,midnight:`Midnight`,fourAm:`4am`,eightAm:`8am`,noon:`Noon`,fourPm:`4pm`,eightPm:`8pm`,legend:`Low → High token density`,sun:`Sun`,mon:`Mon`,tue:`Tue`,wed:`Wed`,thu:`Thu`,fri:`Fri`,sat:`Sat`}},login:{subtitle:`Gateway Dashboard`,passwordPlaceholder:`optional`},chat:{disconnected:`Disconnected from gateway.`,refreshTitle:`Refresh chat data`,thinkingToggle:`Toggle assistant thinking/working output`,toolCallsToggle:`Toggle tool calls and tool results`,focusToggle:`Toggle focus mode (hide sidebar + page header)`,hideCronSessions:`Hide cron sessions`,showCronSessions:`Show cron sessions`,showCronSessionsHidden:`Show cron sessions ({count} hidden)`,onboardingDisabled:`Disabled during setup`},languages:{en:`English`,zhCN:`简体中文 (Simplified Chinese)`,zhTW:`繁體中文 (Traditional Chinese)`,ptBR:`Português (Brazilian Portuguese)`,de:`Deutsch (German)`,es:`Español (Spanish)`},cron:{summary:{enabled:`Enabled`,yes:`Yes`,no:`No`,jobs:`Jobs`,nextWake:`Next wake`,refreshing:`Refreshing...`,refresh:`Refresh`},jobs:{title:`Jobs`,subtitle:`All scheduled jobs stored in the gateway.`,shownOf:`{shown} shown of {total}`,searchJobs:`Search jobs`,searchPlaceholder:`Name, description, or agent`,enabled:`Enabled`,schedule:`Schedule`,lastRun:`Last run`,all:`All`,sort:`Sort`,nextRun:`Next run`,recentlyUpdated:`Recently updated`,name:`Name`,direction:`Direction`,ascending:`Ascending`,descending:`Descending`,reset:`Reset`,noMatching:`No matching jobs.`,loading:`Loading...`,loadMore:`Load more jobs`},runs:{title:`Run history`,subtitleAll:`Latest runs across all jobs.`,subtitleJob:`Latest runs for {title}.`,scope:`Scope`,allJobs:`All jobs`,selectedJob:`Selected job`,searchRuns:`Search runs`,searchPlaceholder:`Summary, error, or job`,newestFirst:`Newest first`,oldestFirst:`Oldest first`,status:`Status`,delivery:`Delivery`,clear:`Clear`,allStatuses:`All statuses`,allDelivery:`All delivery`,selectJobHint:`Select a job to inspect run history.`,noMatching:`No matching runs.`,loadMore:`Load more runs`,runStatusOk:`OK`,runStatusError:`Error`,runStatusSkipped:`Skipped`,runStatusUnknown:`Unknown`,deliveryDelivered:`Delivered`,deliveryNotDelivered:`Not delivered`,deliveryUnknown:`Unknown`,deliveryNotRequested:`Not requested`},form:{editJob:`Edit Job`,newJob:`New Job`,updateSubtitle:`Update the selected scheduled job.`,createSubtitle:`Create a scheduled wakeup or agent run.`,required:`Required`,requiredSr:`required`,basics:`Basics`,basicsSub:`Name it, choose the assistant, and set enabled state.`,fieldName:`Name`,description:`Description`,agentId:`Agent ID`,namePlaceholder:`Morning brief`,descriptionPlaceholder:`Optional context for this job`,agentPlaceholder:`main or ops`,agentHelp:`Start typing to pick a known agent, or enter a custom one.`,schedule:`Schedule`,scheduleSub:`Control when this job runs.`,every:`Every`,at:`At`,cronOption:`Cron`,runAt:`Run at`,unit:`Unit`,minutes:`Minutes`,hours:`Hours`,days:`Days`,expression:`Expression`,expressionPlaceholder:`0 7 * * *`,everyAmountPlaceholder:`30`,timezoneOptional:`Timezone (optional)`,timezonePlaceholder:`America/Los_Angeles`,timezoneHelp:`Pick a common timezone or enter any valid IANA timezone.`,jitterHelp:`Need jitter? Use Advanced → Stagger window / Stagger unit.`,execution:`Execution`,executionSub:`Choose when to wake, and what this job should do.`,session:`Session`,main:`Main`,isolated:`Isolated`,sessionHelp:`Main posts a system event. Isolated runs a dedicated agent turn.`,wakeMode:`Wake mode`,now:`Now`,nextHeartbeat:`Next heartbeat`,wakeModeHelp:`Now triggers immediately. Next heartbeat waits for the next cycle.`,payloadKind:`What should run?`,systemEvent:`Post message to main timeline`,agentTurn:`Run assistant task (isolated)`,systemEventHelp:`Sends your text to the gateway main timeline (good for reminders/triggers).`,agentTurnHelp:`Starts an assistant run in its own session using your prompt.`,timeoutSeconds:`Timeout (seconds)`,timeoutPlaceholder:`Optional, e.g. 90`,timeoutHelp:`Optional. Leave blank to use the gateway default timeout behavior for this run.`,mainTimelineMessage:`Main timeline message`,assistantTaskPrompt:`Assistant task prompt`,deliverySection:`Delivery`,deliverySub:`Choose where run summaries are sent.`,resultDelivery:`Result delivery`,announceDefault:`Announce summary (default)`,webhookPost:`Webhook POST`,noneInternal:`None (internal)`,deliveryHelp:`Announce posts a summary to chat. None keeps execution internal.`,webhookUrl:`Webhook URL`,channel:`Channel`,webhookPlaceholder:`https://example.com/cron`,channelHelp:`Choose which connected channel receives the summary.`,webhookHelp:`Send run summaries to a webhook endpoint.`,to:`To`,toPlaceholder:`+1555... or chat id`,toHelp:`Optional recipient override (chat id, phone, or user id).`,advanced:`Advanced`,advancedHelp:`Optional overrides for delivery guarantees, schedule jitter, and model controls.`,deleteAfterRun:`Delete after run`,deleteAfterRunHelp:`Best for one-shot reminders that should auto-clean up.`,clearAgentOverride:`Clear agent override`,clearAgentHelp:`Force this job to use the gateway default assistant.`,exactTiming:`Exact timing (no stagger)`,exactTimingHelp:`Run on exact cron boundaries with no spread.`,staggerWindow:`Stagger window`,staggerUnit:`Stagger unit`,staggerPlaceholder:`30`,seconds:`Seconds`,model:`Model`,modelPlaceholder:`openai/gpt-5.2`,modelHelp:`Start typing to pick a known model, or enter a custom one.`,thinking:`Thinking`,thinkingPlaceholder:`low`,thinkingHelp:`Use a suggested level or enter a provider-specific value.`,bestEffortDelivery:`Best effort delivery`,bestEffortHelp:`Do not fail the job if delivery itself fails.`,cantAddYet:`Can't add job yet`,fillRequired:`Fill the required fields below to enable submit.`,fixFields:`Fix {count} field to continue.`,fixFieldsPlural:`Fix {count} fields to continue.`,saving:`Saving...`,saveChanges:`Save changes`,addJob:`Add job`,cancel:`Cancel`},jobList:{allJobs:`all jobs`,selectJob:`(select a job)`,enabled:`enabled`,disabled:`disabled`,edit:`Edit`,clone:`Clone`,disable:`Disable`,enable:`Enable`,run:`Run`,history:`History`,remove:`Remove`},jobDetail:{system:`System`,prompt:`Prompt`,delivery:`Delivery`,agent:`Agent`},jobState:{status:`Status`,next:`Next`,last:`Last`},runEntry:{noSummary:`No summary.`,runAt:`Run at`,openRunChat:`Open run chat`,next:`Next {rel}`,due:`Due {rel}`},errors:{nameRequired:`Name is required.`,scheduleAtInvalid:`Enter a valid date/time.`,everyAmountInvalid:`Interval must be greater than 0.`,cronExprRequired:`Cron expression is required.`,staggerAmountInvalid:`Stagger must be greater than 0.`,systemTextRequired:`System text is required.`,agentMessageRequired:`Agent message is required.`,timeoutInvalid:`If set, timeout must be greater than 0 seconds.`,webhookUrlRequired:`Webhook URL is required.`,webhookUrlInvalid:`Webhook URL must start with http:// or https://.`,invalidRunTime:`Invalid run time.`,invalidIntervalAmount:`Invalid interval amount.`,cronExprRequiredShort:`Cron expression required.`,invalidStaggerAmount:`Invalid stagger amount.`,systemEventTextRequired:`System event text required.`,agentMessageRequiredShort:`Agent message required.`,nameRequiredShort:`Name required.`}}},de=[`zh-CN`,`zh-TW`,`pt-BR`,`de`,`es`],fe={"zh-CN":{exportName:`zh_CN`,loader:()=>_(()=>import(`./zh-CN-C5tPG8Eu.js`),[],import.meta.url)},"zh-TW":{exportName:`zh_TW`,loader:()=>_(()=>import(`./zh-TW-CPSoC7Wz.js`),[],import.meta.url)},"pt-BR":{exportName:`pt_BR`,loader:()=>_(()=>import(`./pt-BR-lSsBb08k.js`),[],import.meta.url)},de:{exportName:`de`,loader:()=>_(()=>import(`./de-rLAkQOBc.js`),[],import.meta.url)},es:{exportName:`es`,loader:()=>_(()=>import(`./es-CIeD3O54.js`),[],import.meta.url)}},pe=[`en`,...de];function me(e){return e!=null&&pe.includes(e)}function he(e){return de.includes(e)}function ge(e){return e.startsWith(`zh`)?e===`zh-TW`||e===`zh-HK`?`zh-TW`:`zh-CN`:e.startsWith(`pt`)?`pt-BR`:e.startsWith(`de`)?`de`:e.startsWith(`es`)?`es`:`en`}async function _e(e){if(!he(e))return null;let t=fe[e];return(await t.loader())[t.exportName]??null}var ve=new class{constructor(){this.locale=`en`,this.translations={en:ue},this.subscribers=new Set,this.loadLocale()}readStoredLocale(){let e=g();if(!e)return null;try{return e.getItem(`openclaw.i18n.locale`)}catch{return null}}persistLocale(e){let t=g();if(t)try{t.setItem(`openclaw.i18n.locale`,e)}catch{}}resolveInitialLocale(){let e=this.readStoredLocale();return me(e)?e:ge((typeof globalThis.navigator?.language==`string`?globalThis.navigator.language:null)??``)}loadLocale(){let e=this.resolveInitialLocale();if(e===`en`){this.locale=`en`;return}this.setLocale(e)}getLocale(){return this.locale}async setLocale(e){let t=e!==`en`&&!this.translations[e];if(!(this.locale===e&&!t)){if(t)try{let t=await _e(e);if(!t)return;this.translations[e]=t}catch(t){console.error(`Failed to load locale: ${e}`,t);return}this.locale=e,this.persistLocale(e),this.notify()}}registerTranslation(e,t){this.translations[e]=t}subscribe(e){return this.subscribers.add(e),()=>this.subscribers.delete(e)}notify(){this.subscribers.forEach(e=>e(this.locale))}t(e,t){let n=e.split(`.`),r=this.translations[this.locale]||this.translations.en;for(let e of n)if(r&&typeof r==`object`)r=r[e];else{r=void 0;break}if(r===void 0&&this.locale!==`en`){r=this.translations.en;for(let e of n)if(r&&typeof r==`object`)r=r[e];else{r=void 0;break}}return typeof r==`string`?t?r.replace(/\{(\w+)\}/g,(e,n)=>t[n]||`{${n}}`):r:e}},P=(e,t)=>ve.t(e,t),ye=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){this.unsubscribe=ve.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){this.unsubscribe?.()}};function be(e){if(e)return Array.isArray(e.type)?e.type.filter(e=>e!==`null`)[0]??e.type[0]:e.type}function xe(e){if(!e)return``;if(e.default!==void 0)return e.default;switch(be(e)){case`object`:return{};case`array`:return[];case`boolean`:return!1;case`number`:case`integer`:return 0;case`string`:return``;default:return``}}function Se(e){return e.filter(e=>typeof e==`string`).join(`.`)}function Ce(e,t){let n=Se(e),r=t[n];if(r)return r;let i=n.split(`.`);for(let[e,n]of Object.entries(t)){if(!e.includes(`*`))continue;let t=e.split(`.`);if(t.length!==i.length)continue;let r=!0;for(let e=0;e<i.length;e+=1)if(t[e]!==`*`&&t[e]!==i[e]){r=!1;break}if(r)return n}}function we(e){return e.replace(/_/g,` `).replace(/([a-z0-9])([A-Z])/g,`$1 $2`).replace(/\s+/g,` `).replace(/^./,e=>e.toUpperCase())}var Te=[`maxtokens`,`maxoutputtokens`,`maxinputtokens`,`maxcompletiontokens`,`contexttokens`,`totaltokens`,`tokencount`,`tokenlimit`,`tokenbudget`,`passwordfile`],Ee=[/token$/i,/password/i,/secret/i,/api.?key/i,/serviceaccount(?:ref)?$/i],De=/^\$\{[^}]*\}$/,Oe=`[redacted - click reveal to view]`;function ke(e){return De.test(e.trim())}function Ae(e){let t=e.toLowerCase();return!Te.some(e=>t.endsWith(e))&&Ee.some(t=>t.test(e))}function je(e){return typeof e==`string`?e.trim().length>0&&!ke(e):e!=null}function Me(e){return e?.sensitive??!1}function Ne(e,t,n){let r=Se(t);return(Me(Ce(t,n))||Ae(r))&&je(e)?!0:Array.isArray(e)?e.some((e,r)=>Ne(e,[...t,r],n)):e&&typeof e==`object`?Object.entries(e).some(([e,r])=>Ne(r,[...t,e],n)):!1}function Pe(e,t,n){if(e==null)return 0;let r=Se(t);return(Me(Ce(t,n))||Ae(r))&&je(e)?1:Array.isArray(e)?e.reduce((e,r,i)=>e+Pe(r,[...t,i],n),0):e&&typeof e==`object`?Object.entries(e).reduce((e,[r,i])=>e+Pe(i,[...t,r],n),0):0}function Fe(e,t){let n=e.trim();if(n===``)return;let r=Number(n);return!Number.isFinite(r)||t&&!Number.isInteger(r)?e:r}function Ie(e){let t=e.trim();return t===`true`?!0:t===`false`?!1:e}function Le(e,t){if(e==null)return e;if(t.allOf&&t.allOf.length>0){let n=e;for(let e of t.allOf)n=Le(n,e);return n}let n=be(t);if(t.anyOf||t.oneOf){let n=(t.anyOf??t.oneOf??[]).filter(e=>!(e.type===`null`||Array.isArray(e.type)&&e.type.includes(`null`)));if(n.length===1)return Le(e,n[0]);if(typeof e==`string`)for(let t of n){let n=be(t);if(n===`number`||n===`integer`){let t=Fe(e,n===`integer`);if(t===void 0||typeof t==`number`)return t}if(n===`boolean`){let t=Ie(e);if(typeof t==`boolean`)return t}}for(let t of n){let n=be(t);if(n===`object`&&typeof e==`object`&&!Array.isArray(e)||n===`array`&&Array.isArray(e))return Le(e,t)}return e}if(n===`number`||n===`integer`){if(typeof e==`string`){let t=Fe(e,n===`integer`);if(t===void 0||typeof t==`number`)return t}return e}if(n===`boolean`){if(typeof e==`string`){let t=Ie(e);if(typeof t==`boolean`)return t}return e}if(n===`object`){if(typeof e!=`object`||Array.isArray(e))return e;let n=e,r=t.properties??{},i=t.additionalProperties&&typeof t.additionalProperties==`object`?t.additionalProperties:null,a={};for(let[e,t]of Object.entries(n)){let n=r[e]??i,o=n?Le(t,n):t;o!==void 0&&(a[e]=o)}return a}if(n===`array`){if(!Array.isArray(e))return e;if(Array.isArray(t.items)){let n=t.items;return e.map((e,t)=>{let r=t<n.length?n[t]:void 0;return r?Le(e,r):e})}let n=t.items;return n?e.map(e=>Le(e,n)).filter(e=>e!==void 0):e}return e}function Re(e){return typeof structuredClone==`function`?structuredClone(e):JSON.parse(JSON.stringify(e))}function ze(e){return`${JSON.stringify(e,null,2).trimEnd()}\n`}var Be=new Set([`__proto__`,`prototype`,`constructor`]);function Ve(e){return typeof e==`string`&&Be.has(e)}function He(e,t,n){if(t.length===0||t.some(Ve))return null;let r=e;for(let e=0;e<t.length-1;e+=1){let i=t[e],a=t[e+1];if(typeof i==`number`){if(!Array.isArray(r))return null;if(r[i]==null){if(!n)return null;r[i]=typeof a==`number`?[]:{}}r=r[i];continue}if(typeof r!=`object`||!r)return null;let o=r;if(o[i]==null){if(!n)return null;o[i]=typeof a==`number`?[]:{}}r=o[i]}return{current:r,lastKey:t[t.length-1]}}function Ue(e,t,n){let r=He(e,t,!0);if(r){if(typeof r.lastKey==`number`){Array.isArray(r.current)&&(r.current[r.lastKey]=n);return}typeof r.current==`object`&&r.current!=null&&(r.current[r.lastKey]=n)}}function We(e,t){let n=He(e,t,!1);if(n){if(typeof n.lastKey==`number`){Array.isArray(n.current)&&n.current.splice(n.lastKey,1);return}typeof n.current==`object`&&n.current!=null&&delete n.current[n.lastKey]}}async function F(e){if(!(!e.client||!e.connected)){e.configLoading=!0,e.lastError=null;try{qe(e,await e.client.request(`config.get`,{}))}catch(t){e.lastError=String(t)}finally{e.configLoading=!1}}}async function Ge(e){if(!(!e.client||!e.connected)&&!e.configSchemaLoading){e.configSchemaLoading=!0;try{Ke(e,await e.client.request(`config.schema`,{}))}catch(t){e.lastError=String(t)}finally{e.configSchemaLoading=!1}}}function Ke(e,t){e.configSchema=t.schema??null,e.configUiHints=t.uiHints??{},e.configSchemaVersion=t.version??null}function qe(e,t){e.configSnapshot=t,typeof t.raw!=`string`&&e.configFormMode===`raw`&&(e.configFormMode=`form`);let n=typeof t.raw==`string`?t.raw:t.config&&typeof t.config==`object`?ze(t.config):e.configRaw;!e.configFormDirty||e.configFormMode===`raw`?e.configRaw=n:e.configForm?e.configRaw=ze(e.configForm):e.configRaw=n,e.configValid=typeof t.valid==`boolean`?t.valid:null,e.configIssues=Array.isArray(t.issues)?t.issues:[],e.configFormDirty||(e.configForm=Re(t.config??{}),e.configFormOriginal=Re(t.config??{}),e.configRawOriginal=n)}function Je(e){return!e||typeof e!=`object`||Array.isArray(e)?null:e}function Ye(e){if(e.configFormMode===`raw`&&typeof e.configSnapshot?.raw!=`string`)throw Error(`Raw config editing is unavailable for this snapshot. Switch to Form mode.`);if(e.configFormMode!==`form`||!e.configForm)return e.configRaw;let t=Je(e.configSchema);return ze(t?Le(e.configForm,t):e.configForm)}async function Xe(e){if(!(!e.client||!e.connected)){e.configSaving=!0,e.lastError=null;try{let t=Ye(e),n=e.configSnapshot?.hash;if(!n){e.lastError=`Config hash missing; reload and retry.`;return}await e.client.request(`config.set`,{raw:t,baseHash:n}),e.configFormDirty=!1,await F(e)}catch(t){e.lastError=String(t)}finally{e.configSaving=!1}}}async function Ze(e){if(!(!e.client||!e.connected)){e.configApplying=!0,e.lastError=null;try{let t=Ye(e),n=e.configSnapshot?.hash;if(!n){e.lastError=`Config hash missing; reload and retry.`;return}await e.client.request(`config.apply`,{raw:t,baseHash:n,sessionKey:e.applySessionKey}),e.configFormDirty=!1,await F(e)}catch(t){e.lastError=String(t)}finally{e.configApplying=!1}}}async function Qe(e){if(!(!e.client||!e.connected)){e.updateRunning=!0,e.lastError=null;try{let t=await e.client.request(`update.run`,{sessionKey:e.applySessionKey});t&&t.ok===!1&&(e.lastError=`Update ${t.result?.status??`error`}: ${t.result?.reason??`Update failed.`}`)}catch(t){e.lastError=String(t)}finally{e.updateRunning=!1}}}function I(e,t,n){let r=Re(e.configForm??e.configSnapshot?.config??{});Ue(r,t,n),e.configForm=r,e.configFormDirty=!0,e.configFormMode===`form`&&(e.configRaw=ze(r))}function $e(e,t){let n=Re(e.configForm??e.configSnapshot?.config??{});We(n,t),e.configForm=n,e.configFormDirty=!0,e.configFormMode===`form`&&(e.configRaw=ze(n))}function et(e,t){let n=t.trim();if(!n)return-1;let r=e?.agents?.list;return Array.isArray(r)?r.findIndex(e=>e&&typeof e==`object`&&`id`in e&&e.id===n):-1}function tt(e,t){let n=t.trim();if(!n)return-1;let r=e.configForm??e.configSnapshot?.config,i=et(r,n);if(i>=0)return i;let a=r?.agents?.list,o=Array.isArray(a)?a.length:0;return I(e,[`agents`,`list`,o,`id`],n),o}async function nt(e){if(!(!e.client||!e.connected))try{await e.client.request(`config.openFile`,{})}catch{let t=e.configSnapshot?.path;if(t)try{await navigator.clipboard.writeText(t)}catch{}}}var L={AUTH_REQUIRED:`AUTH_REQUIRED`,AUTH_UNAUTHORIZED:`AUTH_UNAUTHORIZED`,AUTH_TOKEN_MISSING:`AUTH_TOKEN_MISSING`,AUTH_TOKEN_MISMATCH:`AUTH_TOKEN_MISMATCH`,AUTH_TOKEN_NOT_CONFIGURED:`AUTH_TOKEN_NOT_CONFIGURED`,AUTH_PASSWORD_MISSING:`AUTH_PASSWORD_MISSING`,AUTH_PASSWORD_MISMATCH:`AUTH_PASSWORD_MISMATCH`,AUTH_PASSWORD_NOT_CONFIGURED:`AUTH_PASSWORD_NOT_CONFIGURED`,AUTH_BOOTSTRAP_TOKEN_INVALID:`AUTH_BOOTSTRAP_TOKEN_INVALID`,AUTH_DEVICE_TOKEN_MISMATCH:`AUTH_DEVICE_TOKEN_MISMATCH`,AUTH_RATE_LIMITED:`AUTH_RATE_LIMITED`,AUTH_TAILSCALE_IDENTITY_MISSING:`AUTH_TAILSCALE_IDENTITY_MISSING`,AUTH_TAILSCALE_PROXY_MISSING:`AUTH_TAILSCALE_PROXY_MISSING`,AUTH_TAILSCALE_WHOIS_FAILED:`AUTH_TAILSCALE_WHOIS_FAILED`,AUTH_TAILSCALE_IDENTITY_MISMATCH:`AUTH_TAILSCALE_IDENTITY_MISMATCH`,CONTROL_UI_ORIGIN_NOT_ALLOWED:`CONTROL_UI_ORIGIN_NOT_ALLOWED`,CONTROL_UI_DEVICE_IDENTITY_REQUIRED:`CONTROL_UI_DEVICE_IDENTITY_REQUIRED`,DEVICE_IDENTITY_REQUIRED:`DEVICE_IDENTITY_REQUIRED`,DEVICE_AUTH_INVALID:`DEVICE_AUTH_INVALID`,DEVICE_AUTH_DEVICE_ID_MISMATCH:`DEVICE_AUTH_DEVICE_ID_MISMATCH`,DEVICE_AUTH_SIGNATURE_EXPIRED:`DEVICE_AUTH_SIGNATURE_EXPIRED`,DEVICE_AUTH_NONCE_REQUIRED:`DEVICE_AUTH_NONCE_REQUIRED`,DEVICE_AUTH_NONCE_MISMATCH:`DEVICE_AUTH_NONCE_MISMATCH`,DEVICE_AUTH_SIGNATURE_INVALID:`DEVICE_AUTH_SIGNATURE_INVALID`,DEVICE_AUTH_PUBLIC_KEY_INVALID:`DEVICE_AUTH_PUBLIC_KEY_INVALID`,PAIRING_REQUIRED:`PAIRING_REQUIRED`},rt=new Set([`retry_with_device_token`,`update_auth_configuration`,`update_auth_credentials`,`wait_then_retry`,`review_auth_configuration`]);function it(e){if(!e||typeof e!=`object`||Array.isArray(e))return null;let t=e.code;return typeof t==`string`&&t.trim().length>0?t:null}function at(e){if(!e||typeof e!=`object`||Array.isArray(e))return{};let t=e,n=typeof t.canRetryWithDeviceToken==`boolean`?t.canRetryWithDeviceToken:void 0,r=typeof t.recommendedNextStep==`string`?t.recommendedNextStep.trim():``;return{canRetryWithDeviceToken:n,recommendedNextStep:rt.has(r)?r:void 0}}function ot(e){let t=e.scopes.join(`,`),n=e.token??``;return[`v2`,e.deviceId,e.clientId,e.clientMode,e.role,t,String(e.signedAtMs),n,e.nonce].join(`|`)}var st={WEBCHAT_UI:`webchat-ui`,CONTROL_UI:`openclaw-control-ui`,TUI:`openclaw-tui`,WEBCHAT:`webchat`,CLI:`cli`,GATEWAY_CLIENT:`gateway-client`,MACOS_APP:`openclaw-macos`,IOS_APP:`openclaw-ios`,ANDROID_APP:`openclaw-android`,NODE_HOST:`node-host`,TEST:`test`,FINGERPRINT:`fingerprint`,PROBE:`openclaw-probe`},ct=st,lt={WEBCHAT:`webchat`,CLI:`cli`,UI:`ui`,BACKEND:`backend`,NODE:`node`,PROBE:`probe`,TEST:`test`};new Set(Object.values(st)),new Set(Object.values(lt));function ut(e){return e.trim()}function dt(e){if(!Array.isArray(e))return[];let t=new Set;for(let n of e){let e=n.trim();e&&t.add(e)}return t.has(`operator.admin`)?(t.add(`operator.read`),t.add(`operator.write`)):t.has(`operator.write`)&&t.add(`operator.read`),[...t].toSorted()}function ft(e){let t=e.adapter.readStore();if(!t||t.deviceId!==e.deviceId)return null;let n=ut(e.role),r=t.tokens[n];return!r||typeof r.token!=`string`?null:r}function pt(e){let t=ut(e.role),n=e.adapter.readStore(),r={version:1,deviceId:e.deviceId,tokens:n&&n.deviceId===e.deviceId&&n.tokens?{...n.tokens}:{}},i={token:e.token,role:t,scopes:dt(e.scopes),updatedAtMs:Date.now()};return r.tokens[t]=i,e.adapter.writeStore(r),i}function mt(e){let t=e.adapter.readStore();if(!t||t.deviceId!==e.deviceId)return;let n=ut(e.role);if(!t.tokens[n])return;let r={version:1,deviceId:t.deviceId,tokens:{...t.tokens}};delete r.tokens[n],e.adapter.writeStore(r)}var ht=`openclaw.device.auth.v1`;function gt(){try{let e=g()?.getItem(ht);if(!e)return null;let t=JSON.parse(e);return!t||t.version!==1||!t.deviceId||typeof t.deviceId!=`string`||!t.tokens||typeof t.tokens!=`object`?null:t}catch{return null}}function _t(e){try{g()?.setItem(ht,JSON.stringify(e))}catch{}}function vt(e){return ft({adapter:{readStore:gt,writeStore:_t},deviceId:e.deviceId,role:e.role})}function yt(e){return pt({adapter:{readStore:gt,writeStore:_t},deviceId:e.deviceId,role:e.role,token:e.token,scopes:e.scopes})}function bt(e){mt({adapter:{readStore:gt,writeStore:_t},deviceId:e.deviceId,role:e.role})}var xt={p:57896044618658097711785492504343953926634992332820282019728792003956564819949n,n:7237005577332262213973186563042994240857116359379907606001950938285454250989n,h:8n,a:57896044618658097711785492504343953926634992332820282019728792003956564819948n,d:37095705934669439343138083508754565189542113879843219016388785533085940283555n,Gx:15112221349535400772501151409588531511454012693041857206046113283949847762202n,Gy:46316835694926478169428394003475163141307993866256225615783033603165251855960n},{p:St,n:Ct,Gx:wt,Gy:Tt,a:Et,d:Dt,h:Ot}=xt,kt=32,At=(...e)=>{`captureStackTrace`in Error&&typeof Error.captureStackTrace==`function`&&Error.captureStackTrace(...e)},jt=(e=``)=>{let t=Error(e);throw At(t,jt),t},Mt=e=>typeof e==`bigint`,Nt=e=>typeof e==`string`,Pt=e=>e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name===`Uint8Array`,Ft=(e,t,n=``)=>{let r=Pt(e),i=e?.length,a=t!==void 0;if(!r||a&&i!==t){let o=n&&`"${n}" `,s=a?` of length ${t}`:``,c=r?`length=${i}`:`type=${typeof e}`;jt(o+`expected Uint8Array`+s+`, got `+c)}return e},It=e=>new Uint8Array(e),Lt=e=>Uint8Array.from(e),Rt=(e,t)=>e.toString(16).padStart(t,`0`),zt=e=>Array.from(Ft(e)).map(e=>Rt(e,2)).join(``),Bt={_0:48,_9:57,A:65,F:70,a:97,f:102},Vt=e=>{if(e>=Bt._0&&e<=Bt._9)return e-Bt._0;if(e>=Bt.A&&e<=Bt.F)return e-(Bt.A-10);if(e>=Bt.a&&e<=Bt.f)return e-(Bt.a-10)},Ht=e=>{let t=`hex invalid`;if(!Nt(e))return jt(t);let n=e.length,r=n/2;if(n%2)return jt(t);let i=It(r);for(let n=0,a=0;n<r;n++,a+=2){let r=Vt(e.charCodeAt(a)),o=Vt(e.charCodeAt(a+1));if(r===void 0||o===void 0)return jt(t);i[n]=r*16+o}return i},Ut=()=>globalThis?.crypto,Wt=()=>Ut()?.subtle??jt(`crypto.subtle must be defined, consider polyfill`),Gt=(...e)=>{let t=It(e.reduce((e,t)=>e+Ft(t).length,0)),n=0;return e.forEach(e=>{t.set(e,n),n+=e.length}),t},Kt=(e=kt)=>Ut().getRandomValues(It(e)),qt=BigInt,Jt=(e,t,n,r=`bad number: out of range`)=>Mt(e)&&t<=e&&e<n?e:jt(r),Yt=(e,t=St)=>{let n=e%t;return n>=0n?n:t+n},Xt=(1n<<255n)-1n,R=e=>{e<0n&&jt(`negative coordinate`);let t=(e>>255n)*19n+(e&Xt);return t=(t>>255n)*19n+(t&Xt),t%St},Zt=e=>Yt(e,Ct),Qt=(e,t)=>{(e===0n||t<=0n)&&jt(`no inverse n=`+e+` mod=`+t);let n=Yt(e,t),r=t,i=0n,a=1n,o=1n,s=0n;for(;n!==0n;){let e=r/n,t=r%n,c=i-o*e,l=a-s*e;r=n,n=t,i=o,a=s,o=c,s=l}return r===1n?Yt(i,t):jt(`no inverse`)},$t=e=>{let t=Sn[e];return typeof t!=`function`&&jt(`hashes.`+e+` not set`),t},en=e=>e instanceof nn?e:jt(`Point expected`),tn=2n**256n,nn=class e{static BASE;static ZERO;X;Y;Z;T;constructor(e,t,n,r){let i=tn;this.X=Jt(e,0n,i),this.Y=Jt(t,0n,i),this.Z=Jt(n,1n,i),this.T=Jt(r,0n,i),Object.freeze(this)}static CURVE(){return xt}static fromAffine(t){return new e(t.x,t.y,1n,R(t.x*t.y))}static fromBytes(t,n=!1){let r=Dt,i=Lt(Ft(t,kt)),a=t[31];i[31]=a&-129;let o=sn(i);Jt(o,0n,n?tn:St);let s=R(o*o),{isValid:c,value:l}=dn(Yt(s-1n),R(r*s+1n));c||jt(`bad point: y not sqrt`);let u=(l&1n)==1n,d=(a&128)!=0;return!n&&l===0n&&d&&jt(`bad point: x==0, isLastByteOdd`),d!==u&&(l=Yt(-l)),new e(l,o,1n,R(l*o))}static fromHex(t,n){return e.fromBytes(Ht(t),n)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}assertValidity(){let e=Et,t=Dt,n=this;if(n.is0())return jt(`bad point: ZERO`);let{X:r,Y:i,Z:a,T:o}=n,s=R(r*r),c=R(i*i),l=R(a*a),u=R(l*l);return R(l*(R(s*e)+c))===Yt(u+R(t*R(s*c)))?R(r*i)===R(a*o)?this:jt(`bad point: equation left != right (2)`):jt(`bad point: equation left != right (1)`)}equals(e){let{X:t,Y:n,Z:r}=this,{X:i,Y:a,Z:o}=en(e),s=R(t*o),c=R(i*r),l=R(n*o),u=R(a*r);return s===c&&l===u}is0(){return this.equals(an)}negate(){return new e(Yt(-this.X),this.Y,this.Z,Yt(-this.T))}double(){let{X:t,Y:n,Z:r}=this,i=Et,a=R(t*t),o=R(n*n),s=R(2n*r*r),c=R(i*a),l=Yt(t+n),u=Yt(R(l*l)-a-o),d=Yt(c+o),f=Yt(d-s),p=Yt(c-o),m=R(u*f),h=R(d*p),g=R(u*p);return new e(m,h,R(f*d),g)}add(t){let{X:n,Y:r,Z:i,T:a}=this,{X:o,Y:s,Z:c,T:l}=en(t),u=Et,d=Dt,f=R(n*o),p=R(r*s),m=R(R(a*d)*l),h=R(i*c),g=Yt(R(Yt(n+r)*Yt(o+s))-f-p),_=Yt(h-m),v=Yt(h+m),y=Yt(p-R(u*f)),b=R(g*_),x=R(v*y),S=R(g*y);return new e(b,x,R(_*v),S)}subtract(e){return this.add(en(e).negate())}multiply(e,t=!0){if(!t&&(e===0n||this.is0()))return an;if(Jt(e,1n,Ct),e===1n)return this;if(this.equals(rn))return An(e).p;let n=an,r=rn;for(let i=this;e>0n;i=i.double(),e>>=1n)e&1n?n=n.add(i):t&&(r=r.add(i));return n}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){let{X:e,Y:t,Z:n}=this;if(this.equals(an))return{x:0n,y:1n};let r=Qt(n,St);return R(n*r)!==1n&&jt(`invalid inverse`),{x:R(e*r),y:R(t*r)}}toBytes(){let{x:e,y:t}=this.toAffine(),n=on(t);return n[31]|=e&1n?128:0,n}toHex(){return zt(this.toBytes())}clearCofactor(){return this.multiply(qt(Ot),!1)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){let e=this.multiply(Ct/2n,!1).double();return Ct%2n&&(e=e.add(this)),e.is0()}},rn=new nn(wt,Tt,1n,Yt(wt*Tt)),an=new nn(0n,1n,1n,0n);nn.BASE=rn,nn.ZERO=an;var on=e=>Ht(Rt(Jt(e,0n,tn),64)).reverse(),sn=e=>qt(`0x`+zt(Lt(Ft(e)).reverse())),cn=(e,t)=>{let n=e;for(;t-- >0n;)n=R(n*n);return n},ln=e=>{let t=R(R(e*e)*e),n=R(cn(R(cn(t,2n)*t),1n)*e),r=R(cn(n,5n)*n),i=R(cn(r,10n)*r),a=R(cn(i,20n)*i),o=R(cn(a,40n)*a);return{pow_p_5_8:R(cn(R(cn(R(cn(R(cn(o,80n)*o),80n)*o),10n)*r),2n)*e),b2:t}},un=19681161376707505956807079304988542015446066515923890162744021073123829784752n,dn=(e,t)=>{let n=R(t*R(t*t)),r=ln(R(e*R(R(n*n)*t))).pow_p_5_8,i=R(e*R(n*r)),a=R(t*R(i*i)),o=i,s=R(i*un),c=a===e,l=a===Yt(-e),u=a===Yt(-e*un);return c&&(i=o),(l||u)&&(i=s),(Yt(i)&1n)==1n&&(i=Yt(-i)),{isValid:c||l,value:i}},fn=e=>Zt(sn(e)),pn=(...e)=>Sn.sha512Async(Gt(...e)),mn=(...e)=>$t(`sha512`)(Gt(...e)),hn=e=>{let t=e.slice(0,32);t[0]&=248,t[31]&=127,t[31]|=64;let n=e.slice(32,64),r=fn(t),i=rn.multiply(r);return{head:t,prefix:n,scalar:r,point:i,pointBytes:i.toBytes()}},gn=e=>pn(Ft(e,kt)).then(hn),_n=e=>hn(mn(Ft(e,kt))),vn=e=>gn(e).then(e=>e.pointBytes),yn=e=>pn(e.hashable).then(e.finish),bn=(e,t,n)=>{let{pointBytes:r,scalar:i}=e,a=fn(t),o=rn.multiply(a).toBytes();return{hashable:Gt(o,r,n),finish:e=>Ft(Gt(o,on(Zt(a+fn(e)*i))),64)}},xn=async(e,t)=>{let n=Ft(e),r=await gn(t);return yn(bn(r,await pn(r.prefix,n),n))},Sn={sha512Async:async e=>{let t=Wt(),n=Gt(e);return It(await t.digest(`SHA-512`,n.buffer))},sha512:void 0},Cn={getExtendedPublicKeyAsync:gn,getExtendedPublicKey:_n,randomSecretKey:(e=Kt(kt))=>e},wn=8,Tn=Math.ceil(256/wn)+1,En=2**(wn-1),Dn=()=>{let e=[],t=rn,n=t;for(let r=0;r<Tn;r++){n=t,e.push(n);for(let r=1;r<En;r++)n=n.add(t),e.push(n);t=n.double()}return e},On=void 0,kn=(e,t)=>{let n=t.negate();return e?n:t},An=e=>{let t=On||=Dn(),n=an,r=rn,i=2**wn,a=i,o=qt(i-1),s=qt(wn);for(let i=0;i<Tn;i++){let c=Number(e&o);e>>=s,c>En&&(c-=a,e+=1n);let l=i*En,u=l,d=l+Math.abs(c)-1,f=i%2!=0,p=c<0;c===0?r=r.add(kn(f,t[u])):n=n.add(kn(p,t[d]))}return e!==0n&&jt(`invalid wnaf`),{p:n,f:r}},jn=`openclaw-device-identity-v1`;function Mn(e){let t=``;for(let n of e)t+=String.fromCharCode(n);return btoa(t).replaceAll(`+`,`-`).replaceAll(`/`,`_`).replace(/=+$/g,``)}function Nn(e){let t=e.replaceAll(`-`,`+`).replaceAll(`_`,`/`),n=t+`=`.repeat((4-t.length%4)%4),r=atob(n),i=new Uint8Array(r.length);for(let e=0;e<r.length;e+=1)i[e]=r.charCodeAt(e);return i}function Pn(e){return Array.from(e).map(e=>e.toString(16).padStart(2,`0`)).join(``)}async function Fn(e){let t=await crypto.subtle.digest(`SHA-256`,e.slice().buffer);return Pn(new Uint8Array(t))}async function In(){let e=Cn.randomSecretKey(),t=await vn(e);return{deviceId:await Fn(t),publicKey:Mn(t),privateKey:Mn(e)}}async function Ln(){let e=g();try{let t=e?.getItem(jn);if(t){let n=JSON.parse(t);if(n?.version===1&&typeof n.deviceId==`string`&&typeof n.publicKey==`string`&&typeof n.privateKey==`string`){let t=await Fn(Nn(n.publicKey));if(t!==n.deviceId){let r={...n,deviceId:t};return e?.setItem(jn,JSON.stringify(r)),{deviceId:t,publicKey:n.publicKey,privateKey:n.privateKey}}return{deviceId:n.deviceId,publicKey:n.publicKey,privateKey:n.privateKey}}}}catch{}let t=await In(),n={version:1,deviceId:t.deviceId,publicKey:t.publicKey,privateKey:t.privateKey,createdAtMs:Date.now()};return e?.setItem(jn,JSON.stringify(n)),t}async function Rn(e,t){let n=Nn(e);return Mn(await xn(new TextEncoder().encode(t),n))}var zn=!1;function Bn(e){e[6]=e[6]&15|64,e[8]=e[8]&63|128;let t=``;for(let n=0;n<e.length;n++)t+=e[n].toString(16).padStart(2,`0`);return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`}function Vn(){zn||(zn=!0,console.warn(`[uuid] crypto API missing; refusing insecure UUID generation`))}function Hn(e=globalThis.crypto){if(e&&typeof e.randomUUID==`function`)return e.randomUUID();if(e&&typeof e.getRandomValues==`function`){let t=new Uint8Array(16);return e.getRandomValues(t),Bn(t)}throw Vn(),Error(`Web Crypto is required for UUID generation`)}var Un=class extends Error{constructor(e){super(e.message),this.name=`GatewayRequestError`,this.gatewayCode=e.code,this.details=e.details}};function Wn(e){return it(e?.details)}function Gn(e){if(!e)return!1;let t=Wn(e);return t===L.AUTH_TOKEN_MISSING||t===L.AUTH_BOOTSTRAP_TOKEN_INVALID||t===L.AUTH_PASSWORD_MISSING||t===L.AUTH_PASSWORD_MISMATCH||t===L.AUTH_RATE_LIMITED||t===L.PAIRING_REQUIRED||t===L.CONTROL_UI_DEVICE_IDENTITY_REQUIRED||t===L.DEVICE_IDENTITY_REQUIRED}function Kn(e){try{let t=new URL(e,window.location.href),n=t.hostname.trim().toLowerCase(),r=n===`localhost`||n===`::1`||n===`[::1]`||n===`127.0.0.1`,i=n.startsWith(`127.`);if(r||i)return!0;let a=new URL(window.location.href);return t.host===a.host}catch{return!1}}var qn=`operator`,Jn=[`operator.admin`,`operator.read`,`operator.write`,`operator.approvals`,`operator.pairing`],Yn=4008;function Xn(e){let t=e.authToken;if(t||e.authPassword)return{token:t,deviceToken:e.authDeviceToken??e.resolvedDeviceToken,password:e.authPassword}}async function Zn(e){let{deviceIdentity:t}=e;if(!t)return;let n=Date.now(),r=e.connectNonce??``,i=ot({deviceId:t.deviceId,clientId:e.client.id,clientMode:e.client.mode,role:e.role,scopes:e.scopes,signedAtMs:n,token:e.authToken??null,nonce:r}),a=await Rn(t.privateKey,i);return{id:t.deviceId,publicKey:t.publicKey,signature:a,signedAt:n,nonce:r}}function Qn(e){return!e.deviceTokenRetryBudgetUsed&&!e.authDeviceToken&&!!e.explicitGatewayToken&&!!e.deviceIdentity&&!!e.storedToken&&e.canRetryWithDeviceTokenHint&&Kn(e.url)}var $n=class{constructor(e){this.opts=e,this.ws=null,this.pending=new Map,this.closed=!1,this.lastSeq=null,this.connectNonce=null,this.connectSent=!1,this.connectTimer=null,this.backoffMs=800,this.pendingDeviceTokenRetry=!1,this.deviceTokenRetryBudgetUsed=!1}start(){this.closed=!1,this.connect()}stop(){this.closed=!0,this.connectTimer!==null&&(window.clearTimeout(this.connectTimer),this.connectTimer=null),this.ws?.close(),this.ws=null,this.pendingConnectError=void 0,this.pendingDeviceTokenRetry=!1,this.deviceTokenRetryBudgetUsed=!1,this.flushPending(Error(`gateway client stopped`))}get connected(){return this.ws?.readyState===WebSocket.OPEN}connect(){this.closed||(this.ws=new WebSocket(this.opts.url),this.ws.addEventListener(`open`,()=>this.queueConnect()),this.ws.addEventListener(`message`,e=>this.handleMessage(String(e.data??``))),this.ws.addEventListener(`close`,e=>{let t=String(e.reason??``),n=this.pendingConnectError;this.pendingConnectError=void 0,this.ws=null,this.flushPending(Error(`gateway closed (${e.code}): ${t}`)),this.opts.onClose?.({code:e.code,reason:t,error:n}),!(Wn(n)===L.AUTH_TOKEN_MISMATCH&&this.deviceTokenRetryBudgetUsed&&!this.pendingDeviceTokenRetry)&&(Gn(n)||this.scheduleReconnect())}),this.ws.addEventListener(`error`,()=>{}))}scheduleReconnect(){if(this.closed)return;let e=this.backoffMs;this.backoffMs=Math.min(this.backoffMs*1.7,15e3),window.setTimeout(()=>this.connect(),e)}flushPending(e){for(let[,t]of this.pending)t.reject(e);this.pending.clear()}buildConnectClient(){return{id:this.opts.clientName??ct.CONTROL_UI,version:this.opts.clientVersion??`control-ui`,platform:this.opts.platform??navigator.platform??`web`,mode:this.opts.mode??lt.WEBCHAT,instanceId:this.opts.instanceId}}buildConnectParams(e){return{minProtocol:3,maxProtocol:3,client:e.client,role:e.role,scopes:e.scopes,device:e.device,caps:[`tool-events`],auth:e.auth,userAgent:navigator.userAgent,locale:navigator.language}}async buildConnectPlan(){let e=qn,t=[...Jn],n=this.buildConnectClient(),r=this.opts.token?.trim()||void 0,i=this.opts.password?.trim()||void 0,a=typeof crypto<`u`&&!!crypto.subtle,o=null,s={authToken:r,authPassword:i,canFallbackToShared:!1};return a&&(o=await Ln(),s=this.selectConnectAuth({role:e,deviceId:o.deviceId}),this.pendingDeviceTokenRetry&&s.authDeviceToken&&(this.pendingDeviceTokenRetry=!1)),{role:e,scopes:t,client:n,explicitGatewayToken:r,selectedAuth:s,auth:Xn(s),deviceIdentity:o,device:await Zn({deviceIdentity:o,client:n,role:e,scopes:t,authToken:s.authToken,connectNonce:this.connectNonce})}}handleConnectHello(e,t){this.pendingDeviceTokenRetry=!1,this.deviceTokenRetryBudgetUsed=!1,e?.auth?.deviceToken&&t.deviceIdentity&&yt({deviceId:t.deviceIdentity.deviceId,role:e.auth.role??t.role,token:e.auth.deviceToken,scopes:e.auth.scopes??[]}),this.backoffMs=800,this.opts.onHello?.(e)}handleConnectFailure(e,t){let n=e instanceof Un?Wn(e):null,r=e instanceof Un?at(e.details):{},i=r.recommendedNextStep===`retry_with_device_token`,a=r.canRetryWithDeviceToken===!0||i||n===L.AUTH_TOKEN_MISMATCH;Qn({deviceTokenRetryBudgetUsed:this.deviceTokenRetryBudgetUsed,authDeviceToken:t.selectedAuth.authDeviceToken,explicitGatewayToken:t.explicitGatewayToken,deviceIdentity:t.deviceIdentity,storedToken:t.selectedAuth.storedToken,canRetryWithDeviceTokenHint:a,url:this.opts.url})&&(this.pendingDeviceTokenRetry=!0,this.deviceTokenRetryBudgetUsed=!0),e instanceof Un?this.pendingConnectError={code:e.gatewayCode,message:e.message,details:e.details}:this.pendingConnectError=void 0,t.selectedAuth.canFallbackToShared&&t.deviceIdentity&&n===L.AUTH_DEVICE_TOKEN_MISMATCH&&bt({deviceId:t.deviceIdentity.deviceId,role:t.role}),this.ws?.close(Yn,`connect failed`)}async sendConnect(){if(this.connectSent)return;this.connectSent=!0,this.connectTimer!==null&&(window.clearTimeout(this.connectTimer),this.connectTimer=null);let e=await this.buildConnectPlan();this.request(`connect`,this.buildConnectParams(e)).then(t=>this.handleConnectHello(t,e)).catch(t=>this.handleConnectFailure(t,e))}handleMessage(e){let t;try{t=JSON.parse(e)}catch{return}let n=t;if(n.type===`event`){let e=t;if(e.event===`connect.challenge`){let t=e.payload,n=t&&typeof t.nonce==`string`?t.nonce:null;n&&(this.connectNonce=n,this.sendConnect());return}let n=typeof e.seq==`number`?e.seq:null;n!==null&&(this.lastSeq!==null&&n>this.lastSeq+1&&this.opts.onGap?.({expected:this.lastSeq+1,received:n}),this.lastSeq=n);try{this.opts.onEvent?.(e)}catch(e){console.error(`[gateway] event handler error:`,e)}return}if(n.type===`res`){let e=t,n=this.pending.get(e.id);if(!n)return;this.pending.delete(e.id),e.ok?n.resolve(e.payload):n.reject(new Un({code:e.error?.code??`UNAVAILABLE`,message:e.error?.message??`request failed`,details:e.error?.details}));return}}selectConnectAuth(e){let t=this.opts.token?.trim()||void 0,n=this.opts.password?.trim()||void 0,r=vt({deviceId:e.deviceId,role:e.role}),i=r?.scopes??[],a=e.role!==`operator`||i.includes(`operator.read`)||i.includes(`operator.write`)||i.includes(`operator.admin`)?r?.token:void 0,o=this.pendingDeviceTokenRetry&&!!t&&!!a&&Kn(this.opts.url),s=t||n?void 0:a??void 0;return{authToken:t??s,authDeviceToken:o?a??void 0:void 0,authPassword:n,resolvedDeviceToken:s,storedToken:a??void 0,canFallbackToShared:!!(a&&t)}}request(e,t){if(!this.ws||this.ws.readyState!==WebSocket.OPEN)return Promise.reject(Error(`gateway not connected`));let n=Hn(),r={type:`req`,id:n,method:e,params:t},i=new Promise((e,t)=>{this.pending.set(n,{resolve:t=>e(t),reject:t})});return this.ws.send(JSON.stringify(r)),i}queueConnect(){this.connectNonce=null,this.connectSent=!1,this.connectTimer!==null&&window.clearTimeout(this.connectTimer),this.connectTimer=window.setTimeout(()=>{this.sendConnect()},750)}};function er(e){return e instanceof Un?Wn(e)===L.AUTH_UNAUTHORIZED?!0:e.message.includes(`missing scope: operator.read`):!1}function tr(e){return`This connection is missing operator.read, so ${e} cannot be loaded yet.`}function nr(e){return e instanceof Error?e.message:String(e)}function rr(e,t){let n=t?.channels?.whatsapp??null,r=n?.connected===!0,i=typeof n?.self?.e164==`string`?n.self.e164.trim():``,a=typeof n?.self?.jid==`string`?n.self.jid.trim():``,o=i||a;if(!r){e.whatsappLoginConnected=!1;return}e.whatsappLoginConnected=!0,e.whatsappLoginQrDataUrl=null,o&&(e.whatsappLoginMessage=`Connected as ${o}.`)}function ir(e,t){e.telegramSetupMessage=t}function ar(e,t){e.telegramApprovalsMessage=t}function or(e){return(Array.isArray(e.requests)?e.requests:[]).map(e=>{let t=typeof e.id==`string`?e.id.trim():``,n=typeof e.code==`string`?e.code.trim():``,r=typeof e.createdAt==`string`?e.createdAt:``,i=typeof e.lastSeenAt==`string`?e.lastSeenAt:r;return!t||!n||!r?null:{userId:t,code:n,createdAt:r,lastSeenAt:i}}).filter(e=>e!==null)}function sr(e,t){let n=e.configSnapshot?.hash;if(!n)throw Error(`Config is not loaded yet. Reload and try again.`);let r=Re(e.configForm??e.configSnapshot?.config??{});return t(r),{raw:ze(r),baseHash:n}}async function cr(e,t){if(!(!e.client||!e.connected)&&!e.channelsLoading){e.channelsLoading=!0,e.channelsError=null;try{let n=await e.client.request(`channels.status`,{probe:t,timeoutMs:8e3});e.channelsSnapshot=n,rr(e,n),e.channelsLastSuccess=Date.now()}catch(t){er(t)?(e.channelsSnapshot=null,e.channelsError=tr(`channel status`)):e.channelsError=String(t)}finally{e.channelsLoading=!1}}}async function lr(e,t){if(!(!e.client||!e.connected)&&!e.telegramApprovalsLoading){e.telegramApprovalsLoading=!0,t?.quiet||ar(e,null);try{e.telegramPendingApprovals=or(await e.client.request(`pairing.list`,{channel:`telegram`}))}catch(t){ar(e,{kind:`error`,text:`Could not load pending approvals: ${nr(t)}`})}finally{e.telegramApprovalsLoading=!1}}}function ur(e,t){e.telegramSetupToken=t,e.telegramSetupMessage&&=null}async function dr(e){if(!e.client||!e.connected||e.telegramSetupBusy)return;let t=e.telegramSetupToken.trim();if(!t){ir(e,{kind:`error`,text:`Enter a Telegram bot token.`});return}e.telegramSetupBusy=!0,ir(e,null);try{let{raw:n,baseHash:r}=sr(e,e=>{Ue(e,[`channels`,`telegram`,`enabled`],!0),Ue(e,[`channels`,`telegram`,`botToken`],t)});await e.client.request(`config.set`,{raw:n,baseHash:r}),e.telegramSetupToken=``,await F(e),await cr(e,!0),await lr(e,{quiet:!0}),ir(e,{kind:`success`,text:`Telegram connected.`})}catch(t){ir(e,{kind:`error`,text:`Telegram connect failed: ${nr(t)}`})}finally{e.telegramSetupBusy=!1}}async function fr(e){if(!(!e.client||!e.connected||e.telegramSetupBusy)){e.telegramSetupBusy=!0,ir(e,null);try{let{raw:t,baseHash:n}=sr(e,e=>{We(e,[`channels`,`telegram`,`botToken`])});await e.client.request(`config.set`,{raw:t,baseHash:n}),e.telegramSetupToken=``,await F(e),await cr(e,!0),ir(e,{kind:`success`,text:`Telegram disconnected.`})}catch(t){ir(e,{kind:`error`,text:`Telegram disconnect failed: ${nr(t)}`})}finally{e.telegramSetupBusy=!1}}}async function pr(e,t){if(!(!e.client||!e.connected||e.telegramApprovalsBusyCode)){e.telegramApprovalsBusyCode=t,ar(e,null);try{await e.client.request(`pairing.approve`,{channel:`telegram`,code:t}),await lr(e,{quiet:!0}),ar(e,{kind:`success`,text:`Approved pairing code ${t}.`})}catch(n){ar(e,{kind:`error`,text:`Could not approve pairing code ${t}: ${nr(n)}`})}finally{e.telegramApprovalsBusyCode=null}}}async function mr(e,t){if(!(!e.client||!e.connected||e.telegramApprovalsBusyCode)){e.telegramApprovalsBusyCode=t,ar(e,null);try{await e.client.request(`pairing.reject`,{channel:`telegram`,code:t}),await lr(e,{quiet:!0}),ar(e,{kind:`success`,text:`Rejected pairing code ${t}.`})}catch(n){ar(e,{kind:`error`,text:`Could not reject pairing code ${t}: ${nr(n)}`})}finally{e.telegramApprovalsBusyCode=null}}}async function hr(e,t){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{let n=await e.client.request(`web.login.start`,{force:t,timeoutMs:3e4});e.whatsappLoginMessage=n.message??null,e.whatsappLoginQrDataUrl=n.qrDataUrl??null,e.whatsappLoginConnected=null}catch(t){e.whatsappLoginMessage=String(t),e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function gr(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{let t=await e.client.request(`web.login.wait`,{timeoutMs:12e4});e.whatsappLoginMessage=t.message??null,e.whatsappLoginConnected=t.connected??null,t.connected&&(e.whatsappLoginQrDataUrl=null)}catch(t){e.whatsappLoginMessage=String(t),e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function _r(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{await e.client.request(`channels.logout`,{channel:`whatsapp`}),e.whatsappLoginMessage=`Logged out.`,e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}catch(t){e.whatsappLoginMessage=String(t)}finally{e.whatsappBusy=!1}}}function vr(e){let{values:t,original:n}=e;return t.name!==n.name||t.displayName!==n.displayName||t.about!==n.about||t.picture!==n.picture||t.banner!==n.banner||t.website!==n.website||t.nip05!==n.nip05||t.lud16!==n.lud16}function yr(e){let{state:t,callbacks:n,accountId:r}=e,i=vr(t),a=(e,r,i={})=>{let{type:a=`text`,placeholder:o,maxLength:s,help:l}=i,d=t.values[e]??``,f=t.fieldErrors[e],p=`nostr-profile-${e}`;return a===`textarea`?c`
        <div class="form-field" style="margin-bottom: 12px;">
          <label for="${p}" style="display: block; margin-bottom: 4px; font-weight: 500;">
            ${r}
          </label>
          <textarea
            id="${p}"
            .value=${d}
            placeholder=${o??``}
            maxlength=${s??2e3}
            rows="3"
            style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: var(--radius-sm); resize: vertical; font-family: inherit;"
            @input=${t=>{let r=t.target;n.onFieldChange(e,r.value)}}
            ?disabled=${t.saving}
          ></textarea>
          ${l?c`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
                ${l}
              </div>`:u}
          ${f?c`<div style="font-size: 12px; color: var(--danger-color); margin-top: 2px;">
                ${f}
              </div>`:u}
        </div>
      `:c`
      <div class="form-field" style="margin-bottom: 12px;">
        <label for="${p}" style="display: block; margin-bottom: 4px; font-weight: 500;">
          ${r}
        </label>
        <input
          id="${p}"
          type=${a}
          .value=${d}
          placeholder=${o??``}
          maxlength=${s??256}
          style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: var(--radius-sm);"
          @input=${t=>{let r=t.target;n.onFieldChange(e,r.value)}}
          ?disabled=${t.saving}
        />
        ${l?c`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
              ${l}
            </div>`:u}
        ${f?c`<div style="font-size: 12px; color: var(--danger-color); margin-top: 2px;">
              ${f}
            </div>`:u}
      </div>
    `};return c`
    <div
      class="nostr-profile-form"
      style="padding: 16px; background: var(--bg-secondary); border-radius: var(--radius-md); margin-top: 12px;"
    >
      <div
        style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;"
      >
        <div style="font-weight: 600; font-size: 16px;">Edit Profile</div>
        <div style="font-size: 12px; color: var(--text-muted);">Account: ${r}</div>
      </div>

      ${t.error?c`<div class="callout danger" style="margin-bottom: 12px;">${t.error}</div>`:u}
      ${t.success?c`<div class="callout success" style="margin-bottom: 12px;">${t.success}</div>`:u}
      ${(()=>{let e=t.values.picture;return e?c`
      <div style="margin-bottom: 12px;">
        <img
          src=${e}
          alt="Profile picture preview"
          style="max-width: 80px; max-height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-color);"
          @error=${e=>{let t=e.target;t.style.display=`none`}}
          @load=${e=>{let t=e.target;t.style.display=`block`}}
        />
      </div>
    `:u})()}
      ${a(`name`,`Username`,{placeholder:`satoshi`,maxLength:256,help:`Short username (e.g., satoshi)`})}
      ${a(`displayName`,`Display Name`,{placeholder:`Satoshi Nakamoto`,maxLength:256,help:`Your full display name`})}
      ${a(`about`,`Bio`,{type:`textarea`,placeholder:`Tell people about yourself...`,maxLength:2e3,help:`A brief bio or description`})}
      ${a(`picture`,`Avatar URL`,{type:`url`,placeholder:`https://example.com/avatar.jpg`,help:`HTTPS URL to your profile picture`})}
      ${t.showAdvanced?c`
            <div
              style="border-top: 1px solid var(--border-color); padding-top: 12px; margin-top: 12px;"
            >
              <div style="font-weight: 500; margin-bottom: 12px; color: var(--text-muted);">
                Advanced
              </div>

              ${a(`banner`,`Banner URL`,{type:`url`,placeholder:`https://example.com/banner.jpg`,help:`HTTPS URL to a banner image`})}
              ${a(`website`,`Website`,{type:`url`,placeholder:`https://example.com`,help:`Your personal website`})}
              ${a(`nip05`,`NIP-05 Identifier`,{placeholder:`you@example.com`,help:`Verifiable identifier (e.g., you@domain.com)`})}
              ${a(`lud16`,`Lightning Address`,{placeholder:`you@getalby.com`,help:`Lightning address for tips (LUD-16)`})}
            </div>
          `:u}

      <div style="display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap;">
        <button
          class="btn primary"
          @click=${n.onSave}
          ?disabled=${t.saving||!i}
        >
          ${t.saving?`Saving...`:`Save & Publish`}
        </button>

        <button
          class="btn"
          @click=${n.onImport}
          ?disabled=${t.importing||t.saving}
        >
          ${t.importing?`Importing...`:`Import from Relays`}
        </button>

        <button class="btn" @click=${n.onToggleAdvanced}>
          ${t.showAdvanced?`Hide Advanced`:`Show Advanced`}
        </button>

        <button class="btn" @click=${n.onCancel} ?disabled=${t.saving}>Cancel</button>
      </div>

      ${i?c`
            <div style="font-size: 12px; color: var(--warning-color); margin-top: 8px">
              You have unsaved changes
            </div>
          `:u}
    </div>
  `}function br(e){let t={name:e?.name??``,displayName:e?.displayName??``,about:e?.about??``,picture:e?.picture??``,banner:e?.banner??``,website:e?.website??``,nip05:e?.nip05??``,lud16:e?.lud16??``};return{values:t,original:{...t},saving:!1,importing:!1,error:null,success:null,fieldErrors:{},showAdvanced:!!(e?.banner||e?.website||e?.nip05||e?.lud16)}}var xr=3e4,Sr=3e3,Cr=3e4,wr=new WeakMap,Tr=new WeakMap,Er=new WeakMap,Dr=new WeakMap;function Or(e){return e.channelsSnapshot?.channels?.whatsapp??null}function kr(e){return e?.self?.e164?.trim()||e?.self?.jid?.trim()||null}function Ar(e){return e?.connected===!0}function jr(e){return wr.get(e)??0}function Mr(e){let t=Tr.get(e);t&&(globalThis.clearTimeout(t),Tr.delete(e))}function Nr(e){Mr(e),Er.delete(e),Dr.delete(e),wr.set(e,jr(e)+1)}function Pr(e){return Nr(e),jr(e)}function Fr(e,t){let n=kr(t);e.whatsappLoginConnected=!0,e.whatsappLoginQrDataUrl=null,e.whatsappLoginMessage=n?`Connected as ${n}.`:`Connected.`,Mr(e),Er.delete(e),Dr.delete(e)}function Ir(e,t,n={}){(n.resetWindow||!Dr.has(e))&&Dr.set(e,Date.now()+Cr),Lr(e,t)}function Lr(e,t){Mr(e);let n=globalThis.setTimeout(()=>{Rr(e,t)},Sr);Tr.set(e,n)}async function Rr(e,t){if(jr(e)!==t||!e.connected||(await cr(e,!0),jr(e)!==t))return;let n=Or(e);if(Ar(n)){Fr(e,n);return}let r=Er.get(e)??0,i=Dr.get(e)??0;if(e.whatsappLoginQrDataUrl&&Date.now()-r>=xr){if(await hr(e,!1),jr(e)!==t||(await cr(e,!0),jr(e)!==t))return;e.whatsappLoginQrDataUrl&&(Er.set(e,Date.now()),Dr.set(e,Date.now()+Cr))}e.whatsappLoginQrDataUrl&&Date.now()<i&&Lr(e,t)}function zr(e){let t=jr(e);Er.set(e,Date.now()),Ir(e,t,{resetWindow:!0})}async function Br(e,t){let n=Pr(e);if(e.whatsappLoginConnected=!1,await hr(e,t),await cr(e,!0),jr(e)!==n)return;let r=Or(e);if(Ar(r)){Fr(e,r);return}e.whatsappLoginQrDataUrl&&(e.whatsappLoginMessage||=`Open WhatsApp -> Linked Devices -> Scan QR.`,zr(e))}function Vr(e){e.whatsappLoginConnected=!1,e.whatsappLoginQrDataUrl&&zr(e)}async function Hr(e){Nr(e),e.whatsappLoginConnected=!1,e.whatsappLoginQrDataUrl=null,e.whatsappLoginMessage=`Clearing the stored WhatsApp session and generating a fresh QR…`,await _r(e),await cr(e,!0),await Br(e,!1)}async function Ur(e){await gr(e),await cr(e,!0);let t=Or(e);Ar(t)&&Fr(e,t)}async function Wr(e){Nr(e),e.whatsappLoginConnected=!1,e.whatsappLoginQrDataUrl=null,await _r(e),await cr(e,!0)}async function Gr(e){await Xe(e),await F(e),await cr(e,!0)}async function Kr(e){await F(e),await cr(e,!0)}function qr(e){if(!Array.isArray(e))return{};let t={};for(let n of e){if(typeof n!=`string`)continue;let[e,...r]=n.split(`:`);if(!e||r.length===0)continue;let i=e.trim(),a=r.join(`:`).trim();i&&a&&(t[i]=a)}return t}function Jr(e){return(e.channelsSnapshot?.channelAccounts?.nostr??[])[0]?.accountId??e.nostrProfileAccountId??`default`}function Yr(e,t=``){return`/api/channels/nostr/${encodeURIComponent(e)}/profile${t}`}function Xr(e){let t=e.hello?.auth?.deviceToken?.trim();if(t)return`Bearer ${t}`;let n=e.settings.token.trim();if(n)return`Bearer ${n}`;let r=e.password.trim();return r?`Bearer ${r}`:null}function Zr(e){let t=Xr(e);return t?{Authorization:t}:{}}function Qr(e,t,n){e.nostrProfileAccountId=t,e.nostrProfileFormState=br(n??void 0)}function $r(e){e.nostrProfileFormState=null,e.nostrProfileAccountId=null}function ei(e,t,n){let r=e.nostrProfileFormState;r&&(e.nostrProfileFormState={...r,values:{...r.values,[t]:n},fieldErrors:{...r.fieldErrors,[t]:``}})}function ti(e){let t=e.nostrProfileFormState;t&&(e.nostrProfileFormState={...t,showAdvanced:!t.showAdvanced})}async function ni(e){let t=e.nostrProfileFormState;if(!t||t.saving)return;let n=Jr(e);e.nostrProfileFormState={...t,saving:!0,error:null,success:null,fieldErrors:{}};try{let r=await fetch(Yr(n),{method:`PUT`,headers:{"Content-Type":`application/json`,...Zr(e)},body:JSON.stringify(t.values)}),i=await r.json().catch(()=>null);if(!r.ok||i?.ok===!1||!i){let n=i?.error??`Profile update failed (${r.status})`;e.nostrProfileFormState={...t,saving:!1,error:n,success:null,fieldErrors:qr(i?.details)};return}if(!i.persisted){e.nostrProfileFormState={...t,saving:!1,error:`Profile publish failed on all relays.`,success:null};return}e.nostrProfileFormState={...t,saving:!1,error:null,success:`Profile published to relays.`,fieldErrors:{},original:{...t.values}},await cr(e,!0)}catch(n){e.nostrProfileFormState={...t,saving:!1,error:`Profile update failed: ${String(n)}`,success:null}}}async function ri(e){let t=e.nostrProfileFormState;if(!t||t.importing)return;let n=Jr(e);e.nostrProfileFormState={...t,importing:!0,error:null,success:null};try{let r=await fetch(Yr(n,`/import`),{method:`POST`,headers:{"Content-Type":`application/json`,...Zr(e)},body:JSON.stringify({autoMerge:!0})}),i=await r.json().catch(()=>null);if(!r.ok||i?.ok===!1||!i){let n=i?.error??`Profile import failed (${r.status})`;e.nostrProfileFormState={...t,importing:!1,error:n,success:null};return}let a=i.merged??i.imported??null,o=a?{...t.values,...a}:t.values,s=!!(o.banner||o.website||o.nip05||o.lud16);e.nostrProfileFormState={...t,importing:!1,values:o,error:null,success:i.saved?`Profile imported from relays. Review and publish.`:`Profile imported. Review and publish.`,showAdvanced:s},i.saved&&await cr(e,!0)}catch(n){e.nostrProfileFormState={...t,importing:!1,error:`Profile import failed: ${String(n)}`,success:null}}}var ii=450;function ai(e,t){return typeof e.querySelector==`function`?e.querySelector(t):null}function oi(e,t=!1,n=!1){e.chatScrollFrame&&cancelAnimationFrame(e.chatScrollFrame),e.chatScrollTimeout!=null&&(clearTimeout(e.chatScrollTimeout),e.chatScrollTimeout=null);let r=()=>{let t=ai(e,`.chat-thread`);if(t){let e=getComputedStyle(t).overflowY;if(e===`auto`||e===`scroll`||t.scrollHeight-t.clientHeight>1)return t}return document.scrollingElement??document.documentElement};e.updateComplete.then(()=>{e.chatScrollFrame=requestAnimationFrame(()=>{e.chatScrollFrame=null;let i=r();if(!i)return;let a=i.scrollHeight-i.scrollTop-i.clientHeight,o=t&&!e.chatHasAutoScrolled;if(!(o||e.chatUserNearBottom||a<ii)){e.chatNewMessagesBelow=!0;return}o&&(e.chatHasAutoScrolled=!0);let s=n&&(typeof window>`u`||typeof window.matchMedia!=`function`||!window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),c=i.scrollHeight;typeof i.scrollTo==`function`?i.scrollTo({top:c,behavior:s?`smooth`:`auto`}):i.scrollTop=c,e.chatUserNearBottom=!0,e.chatNewMessagesBelow=!1;let l=o?150:120;e.chatScrollTimeout=window.setTimeout(()=>{e.chatScrollTimeout=null;let t=r();if(!t)return;let n=t.scrollHeight-t.scrollTop-t.clientHeight;(o||e.chatUserNearBottom||n<ii)&&(t.scrollTop=t.scrollHeight,e.chatUserNearBottom=!0)},l)})})}function si(e,t=!1){e.logsScrollFrame&&cancelAnimationFrame(e.logsScrollFrame),e.updateComplete.then(()=>{e.logsScrollFrame=requestAnimationFrame(()=>{e.logsScrollFrame=null;let n=ai(e,`.log-stream`);if(!n)return;let r=n.scrollHeight-n.scrollTop-n.clientHeight;(t||r<80)&&(n.scrollTop=n.scrollHeight)})})}function ci(e,t){let n=t.currentTarget;n&&(e.chatUserNearBottom=n.scrollHeight-n.scrollTop-n.clientHeight<ii,e.chatUserNearBottom&&(e.chatNewMessagesBelow=!1))}function li(e,t){let n=t.currentTarget;n&&(e.logsAtBottom=n.scrollHeight-n.scrollTop-n.clientHeight<80)}function ui(e){e.chatHasAutoScrolled=!1,e.chatUserNearBottom=!0,e.chatNewMessagesBelow=!1}function di(e,t){if(e.length===0)return;let n=new Blob([`${e.join(`
`)}\n`],{type:`text/plain`}),r=URL.createObjectURL(n),i=document.createElement(`a`),a=new Date().toISOString().slice(0,19).replace(/[:T]/g,`-`);i.href=r,i.download=`kova-logs-${t}-${a}.log`,i.click(),URL.revokeObjectURL(r)}function fi(e){if(typeof ResizeObserver>`u`)return;let t=ai(e,`.topbar`);if(!t)return;let n=()=>{let{height:n}=t.getBoundingClientRect();e.style.setProperty(`--topbar-height`,`${n}px`)};n(),e.topbarObserver=new ResizeObserver(()=>n()),e.topbarObserver.observe(t)}var pi=`operator`,mi=`operator.admin`,hi=`operator.read`,gi=`operator.write`,_i=`operator.`;function vi(e){let t=new Set;for(let n of e){let e=n.trim();e&&t.add(e)}return[...t]}function yi(e,t){return t.has(mi)&&e.startsWith(_i)?!0:e===hi?t.has(hi)||t.has(gi):e===gi?t.has(gi):t.has(e)}function bi(e){let t=vi(e.requestedScopes);if(t.length===0)return!0;let n=vi(e.allowedScopes);if(n.length===0)return!1;let r=new Set(n);return e.role.trim()===pi?t.every(e=>yi(e,r)):t.every(e=>r.has(e))}async function xi(e){if(!(!e.client||!e.connected)&&!e.debugLoading){e.debugLoading=!0;try{let[t,n,r,i]=await Promise.all([e.client.request(`status`,{}),e.client.request(`health`,{}),e.client.request(`models.list`,{}),e.client.request(`last-heartbeat`,{})]);e.debugStatus=t,e.debugHealth=n;let a=r;e.debugModels=Array.isArray(a?.models)?a?.models:[],e.debugHeartbeat=i}catch(t){e.debugCallError=String(t)}finally{e.debugLoading=!1}}}async function Si(e){if(!(!e.client||!e.connected)){e.debugCallError=null,e.debugCallResult=null;try{let t=e.debugCallParams.trim()?JSON.parse(e.debugCallParams):{},n=await e.client.request(e.debugCallMethod.trim(),t);e.debugCallResult=JSON.stringify(n,null,2)}catch(t){e.debugCallError=String(t)}}}var Ci=5e3,wi=200,Ti=[{id:`kova-alex`,name:`Alex`,role:`Researcher`,avatar:`🔍`,autonomy:`Act + Notify`},{id:`kova-casey`,name:`Casey`,role:`Analyst`,avatar:`📊`,autonomy:`Act + Notify`},{id:`kova-morgan`,name:`Morgan`,role:`Editor`,avatar:`✍️`,autonomy:`Act + Notify`},{id:`kova-jordan`,name:`Jordan`,role:`Inbox Manager`,avatar:`📬`,autonomy:`Supervised`},{id:`kova-riley`,name:`Riley`,role:`Social Manager`,avatar:`📱`,autonomy:`Autonomous`}];async function Ei(e){if(!(!e.client||!e.connected||e.employeesLoading)){e.employeesLoading=!0,e.employeesError=null;try{let t=Di(e.agentsList??await e.client.request(`agents.list`,{})),n=await Promise.all(t.map(async t=>{let n=await e.client.request(`sessions.list`,{agentId:t.id,includeGlobal:!1,includeUnknown:!1,limit:wi});return[t.id,n]})),r=await e.client.request(`sessions.usage`,{startDate:`2000-01-01`,endDate:new Date().toISOString().slice(0,10),limit:Ci});e.employeesDashboard=Oi(t,Object.fromEntries(n),r)}catch(t){e.employeesDashboard=null,e.employeesError=er(t)?tr(`employee activity`):String(t)}finally{e.employeesLoading=!1}}}function Di(e){let t=new Map(Ti.map(e=>[e.id,e])),n=(e?.agents??[]).filter(e=>e.id.startsWith(`kova-`)).map(e=>{let n=t.get(e.id),r=e.id.replace(/^kova-/,``).split(`-`).filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `);return{id:e.id,name:e.identity?.name?.trim()||e.name?.trim()||n?.name||r||e.id,role:n?.role??`Employee`,avatar:e.identity?.emoji?.trim()||n?.avatar||`🤖`,autonomy:n?.autonomy??`Act + Notify`}});return n.length>0?n:Ti}function Oi(e,t,n){let r=Date.now(),i=new Date;i.setHours(0,0,0,0);let a=i.getTime(),o=[];return{employees:e.map(e=>{let i=n.sessions.filter(t=>t.agentId===e.id),s=t[e.id]?.sessions??[],c=new Map(s.map(e=>[e.key,e])),l=ki(i,s),u=new Set(i.filter(e=>e.updatedAt>=a).map(e=>e.key)).size,d=i.reduce((e,t)=>e+(t.usage?.messageCounts?.total??0),0),f=Ai(l,i.length>0||s.length>0,r);for(let t of i){let n=c.get(t.key);t.updatedAt&&o.push({id:e.id,name:e.name,avatar:e.avatar,description:ji(t,n),timestamp:t.updatedAt})}return{id:e.id,name:e.name,role:e.role,avatar:e.avatar,autonomy:e.autonomy,status:f,lastActiveAt:l,sessionsToday:u,totalMessages:d}}),activity:o.toSorted((e,t)=>t.timestamp-e.timestamp).slice(0,10),updatedAt:r}}function ki(e,t){let n=[...e.map(e=>e.updatedAt),...t.map(e=>e.updatedAt??0)].filter(e=>Number.isFinite(e)&&e>0);return n.length>0?Math.max(...n):null}function Ai(e,t,n){return!t||!e?`never`:n-e<=1440*60*1e3?`active`:`idle`}function ji(e,t){let n=Mi(e,t);switch(t?.status){case`running`:return`Working in ${n}`;case`failed`:return`Hit an error in ${n}`;case`killed`:return`Stopped ${n}`;case`timeout`:return`Timed out in ${n}`;case`done`:return`Updated ${n}`;default:break}let r=e.usage?.messageCounts?.assistant??0,i=e.usage?.messageCounts?.toolCalls??0;return r>0?`Replied in ${n}`:i>0?`Used tools in ${n}`:`Opened ${n}`}function Mi(e,t){return[t?.displayName,t?.label,e.label,e.sessionId?`session ${e.sessionId.slice(0,8)}`:null].find(e=>typeof e==`string`&&e.trim().length>0)??`a session`}var Ni=new Map(Ti.map(e=>[e.id,e.name]));function Pi(e){return typeof e==`string`?e.trim().toLowerCase():``}function Fi(e){let t=[e.channel,e.lastChannel,e.surface,typeof e.origin==`object`&&e.origin?e.origin.channel:void 0,e.key];for(let e of t){let t=Pi(e);if(t.includes(`telegram`))return`telegram`;if(t.includes(`whatsapp`))return`whatsapp`}return null}function Ii(e){let t=(e.lastMessagePreview?.trim()||e.derivedTitle?.trim()||e.subject?.trim()||e.displayName?.trim()||e.label?.trim()||`Open the conversation in Chat to read the latest messages.`).replace(/\s+/g,` `).trim();return t.length<=80?t:`${t.slice(0,77)}...`}function Li(e){return e.systemSent===!0}function Ri(e){if(!Li(e))return`Awaiting employee reply`;let t=N(e.key),n=t?Ni.get(t):null;return n?`${n} replied`:`Employee replied`}function zi(e,t){let n=e.filter(e=>Fi(e)!==null);return t===`all`?n:t===`unanswered`?n.filter(e=>!Li(e)):n.filter(e=>Fi(e)===t)}async function Bi(e){if(!(!e.client||!e.connected||e.inboxLoading)){e.inboxLoading=!0,e.inboxError=null;try{e.inboxSessions=[...(await e.client.request(`sessions.list`,{limit:50,includeGlobal:!1,includeUnknown:!1}))?.sessions??[]].sort((e,t)=>(t.updatedAt??0)-(e.updatedAt??0))}catch(t){er(t)?(e.inboxSessions=null,e.inboxError=tr(`inbox`)):e.inboxError=String(t)}finally{e.inboxLoading=!1}}}var Vi=2e3,Hi=new Set([`trace`,`debug`,`info`,`warn`,`error`,`fatal`]);function Ui(e){if(typeof e!=`string`)return null;let t=e.trim();if(!t.startsWith(`{`)||!t.endsWith(`}`))return null;try{let e=JSON.parse(t);return!e||typeof e!=`object`?null:e}catch{return null}}function Wi(e){if(typeof e!=`string`)return null;let t=e.toLowerCase();return Hi.has(t)?t:null}function Gi(e){if(!e.trim())return{raw:e,message:e};try{let t=JSON.parse(e),n=t&&typeof t._meta==`object`&&t._meta!==null?t._meta:null,r=typeof t.time==`string`?t.time:typeof n?.date==`string`?n?.date:null,i=Wi(n?.logLevelName??n?.level),a=typeof t[0]==`string`?t[0]:typeof n?.name==`string`?n?.name:null,o=Ui(a),s=null;o&&(typeof o.subsystem==`string`?s=o.subsystem:typeof o.module==`string`&&(s=o.module)),!s&&a&&a.length<120&&(s=a);let c=null;return typeof t[1]==`string`?c=t[1]:typeof t[2]==`string`?c=t[2]:!o&&typeof t[0]==`string`?c=t[0]:typeof t.message==`string`&&(c=t.message),{raw:e,time:r,level:i,subsystem:s,message:c??e,meta:n??void 0}}catch{return{raw:e,message:e}}}async function Ki(e,t){if(!(!e.client||!e.connected)&&!(e.logsLoading&&!t?.quiet)){t?.quiet||(e.logsLoading=!0),e.logsError=null;try{let n=await e.client.request(`logs.tail`,{cursor:t?.reset?void 0:e.logsCursor??void 0,limit:e.logsLimit,maxBytes:e.logsMaxBytes}),r=(Array.isArray(n.lines)?n.lines.filter(e=>typeof e==`string`):[]).map(Gi);e.logsEntries=t?.reset||n.reset||e.logsCursor==null?r:[...e.logsEntries,...r].slice(-Vi),typeof n.cursor==`number`&&(e.logsCursor=n.cursor),typeof n.file==`string`&&(e.logsFile=n.file),e.logsTruncated=!!n.truncated,e.logsLastFetchAt=Date.now()}catch(t){er(t)?(e.logsEntries=[],e.logsError=tr(`logs`)):e.logsError=String(t)}finally{t?.quiet||(e.logsLoading=!1)}}}async function qi(e,t){if(!(!e.client||!e.connected)&&!e.nodesLoading){e.nodesLoading=!0,t?.quiet||(e.lastError=null);try{let t=await e.client.request(`node.list`,{});e.nodes=Array.isArray(t.nodes)?t.nodes:[]}catch(n){t?.quiet||(e.lastError=String(n))}finally{e.nodesLoading=!1}}}function Ji(e){e.nodesPollInterval??=window.setInterval(()=>void qi(e,{quiet:!0}),5e3)}function Yi(e){e.nodesPollInterval!=null&&(clearInterval(e.nodesPollInterval),e.nodesPollInterval=null)}function Xi(e){e.logsPollInterval??=window.setInterval(()=>{e.tab===`logs`&&Ki(e,{quiet:!0})},2e3)}function Zi(e){e.logsPollInterval!=null&&(clearInterval(e.logsPollInterval),e.logsPollInterval=null)}function Qi(e){e.debugPollInterval??=window.setInterval(()=>{e.tab===`debug`&&xi(e)},3e3)}function $i(e){e.debugPollInterval!=null&&(clearInterval(e.debugPollInterval),e.debugPollInterval=null)}function ea(e){e.inboxPollInterval??=window.setInterval(()=>{e.tab===`inbox`&&Bi(e)},3e4)}function ta(e){e.inboxPollInterval!=null&&(clearInterval(e.inboxPollInterval),e.inboxPollInterval=null)}var na=`Kova`,ra=`KOVA`,ia=`Your AI Team`,aa=[[`OpenClaw system agent`,`Kova Core`],[`Default OpenClaw agent`,`Kova Core Agent`],[`Current OpenClaw default`,`Current Kova default`],[`OpenClaw`,na]];function oa(e){let t=e;for(let[e,n]of aa)t=t.replaceAll(e,n);return t}function sa(e){let t=e?.trim()??``;return t?oa(t):``}function ca(e,t){if(!e)return e;let n=e.files.some(e=>e.name===t.name)?e.files.map(e=>e.name===t.name?t:e):[...e.files,t];return{...e,files:n}}async function la(e,t){if(!(!e.client||!e.connected||e.agentFilesLoading)){e.agentFilesLoading=!0,e.agentFilesError=null;try{let n=await e.client.request(`agents.files.list`,{agentId:t});n&&(e.agentFilesList=n,e.agentFileActive&&!n.files.some(t=>t.name===e.agentFileActive)&&(e.agentFileActive=null))}catch(t){e.agentFilesError=String(t)}finally{e.agentFilesLoading=!1}}}async function ua(e,t,n,r){if(!(!e.client||!e.connected||e.agentFilesLoading)&&!(!r?.force&&Object.hasOwn(e.agentFileContents,n))){e.agentFilesLoading=!0,e.agentFilesError=null;try{let i=await e.client.request(`agents.files.get`,{agentId:t,name:n});if(i?.file){let t=i.file.content??``,a=e.agentFileContents[n]??``,o=e.agentFileDrafts[n],s=r?.preserveDraft??!0;e.agentFilesList=ca(e.agentFilesList,i.file),e.agentFileContents={...e.agentFileContents,[n]:t},(!s||!Object.hasOwn(e.agentFileDrafts,n)||o===a)&&(e.agentFileDrafts={...e.agentFileDrafts,[n]:t})}}catch(t){e.agentFilesError=String(t)}finally{e.agentFilesLoading=!1}}}async function da(e,t,n,r){if(!(!e.client||!e.connected||e.agentFileSaving)){e.agentFileSaving=!0,e.agentFilesError=null;try{let i=await e.client.request(`agents.files.set`,{agentId:t,name:n,content:r});i?.file&&(e.agentFilesList=ca(e.agentFilesList,i.file),e.agentFileContents={...e.agentFileContents,[n]:r},e.agentFileDrafts={...e.agentFileDrafts,[n]:r})}catch(t){e.agentFilesError=String(t)}finally{e.agentFileSaving=!1}}}async function fa(e,t){if(!(!e.client||!e.connected||e.agentIdentityLoading)&&!e.agentIdentityById[t]){e.agentIdentityLoading=!0,e.agentIdentityError=null;try{let n=await e.client.request(`agent.identity.get`,{agentId:t});n&&(e.agentIdentityById={...e.agentIdentityById,[t]:n})}catch(t){e.agentIdentityError=String(t)}finally{e.agentIdentityLoading=!1}}}async function pa(e,t){if(!e.client||!e.connected||e.agentIdentityLoading)return;let n=t.filter(t=>!e.agentIdentityById[t]);if(n.length!==0){e.agentIdentityLoading=!0,e.agentIdentityError=null;try{for(let t of n){let n=await e.client.request(`agent.identity.get`,{agentId:t});n&&(e.agentIdentityById={...e.agentIdentityById,[t]:n})}}catch(t){e.agentIdentityError=String(t)}finally{e.agentIdentityLoading=!1}}}async function ma(e,t){if(!(!e.client||!e.connected)&&!e.agentSkillsLoading){e.agentSkillsLoading=!0,e.agentSkillsError=null;try{let n=await e.client.request(`skills.status`,{agentId:t});n&&(e.agentSkillsReport=n,e.agentSkillsAgentId=t)}catch(t){e.agentSkillsError=String(t)}finally{e.agentSkillsLoading=!1}}}async function ha(e,t){try{let n=await e.client?.request(`agents.files.get`,{agentId:t,name:`SOUL.md`});return typeof n?.file?.content==`string`?n.file.content:null}catch{return null}}async function ga(e,t){if(!e.client||!e.connected||e.agentSoulLoading)return;let n=t.filter(t=>!Object.hasOwn(e.agentSoulContentById,t));if(n.length!==0){e.agentSoulLoading=!0;try{for(let t of n){let n=await ha(e,t);e.agentSoulContentById={...e.agentSoulContentById,[t]:n}}}finally{e.agentSoulLoading=!1}}}function _a(e,t){let n=e.trim();if(!n)return``;let r=t?.trim();return r?`${r}/${n}`:n}function va(e){let t=e.trim();return t?t.includes(`/`)?{kind:`qualified`,value:t}:{kind:`raw`,value:t}:null}function ya(e,t){return ba(e,t).value}function ba(e,t){if(!e)return{value:``,source:`empty`,reason:`empty`};let n=e?.value.trim();if(!n)return{value:``,source:`empty`,reason:`empty`};if(e.kind===`qualified`)return{value:n,source:`qualified`};let r=``;for(let e of t){if(e.id.trim().toLowerCase()!==n.toLowerCase())continue;let t=_a(e.id,e.provider);if(!r){r=t;continue}if(r.toLowerCase()!==t.toLowerCase())return{value:n,source:`raw`,reason:`ambiguous`}}return r?{value:r,source:`catalog`}:{value:n,source:`raw`,reason:`missing`}}function xa(e,t){return typeof e==`string`?_a(e,t):``}function Sa(e,t,n){if(typeof e!=`string`)return{value:``,source:`empty`,reason:`empty`};let r=e.trim();if(!r)return{value:``,source:`empty`,reason:`empty`};let i=ba(va(r),n);return i.source===`qualified`||i.source===`catalog`?i:{value:xa(r,t),source:`server`,reason:i.reason}}function Ca(e,t,n){return Sa(e,t,n).value}function wa(e){let t=e.trim();if(!t)return``;let n=t.indexOf(`/`);return n<=0?t:`${t.slice(n+1)} · ${t.slice(0,n)}`}function Ta(e){let t=e.provider?.trim();return{value:_a(e.id,t),label:t?`${e.id} · ${t}`:e.id}}async function Ea(e){if(!(!e.client||!e.connected)&&!e.agentsLoading){e.agentsLoading=!0,e.agentsError=null;try{let t=await e.client.request(`agents.list`,{});if(t){e.agentsList=t;let n=e.agentsSelectedId,r=t.agents.some(e=>e.id===n);(!n||!r)&&(e.agentsSelectedId=t.defaultId??t.agents[0]?.id??null)}}catch(t){er(t)?(e.agentsList=null,e.agentsError=tr(`agent list`)):e.agentsError=String(t)}finally{e.agentsLoading=!1}}}async function Da(e,t){let n=t.trim();if(!(!e.client||!e.connected||!n)&&!(e.toolsCatalogLoading&&e.toolsCatalogLoadingAgentId===n)){e.toolsCatalogLoading=!0,e.toolsCatalogLoadingAgentId=n,e.toolsCatalogError=null,e.toolsCatalogResult=null;try{let t=await e.client.request(`tools.catalog`,{agentId:n,includePlugins:!0});if(e.toolsCatalogLoadingAgentId!==n||e.agentsSelectedId&&e.agentsSelectedId!==n)return;e.toolsCatalogResult=t}catch(t){if(e.toolsCatalogLoadingAgentId!==n||e.agentsSelectedId&&e.agentsSelectedId!==n)return;e.toolsCatalogResult=null,e.toolsCatalogError=er(t)?tr(`tools catalog`):String(t)}finally{e.toolsCatalogLoadingAgentId===n&&(e.toolsCatalogLoadingAgentId=null,e.toolsCatalogLoading=!1)}}}async function Oa(e,t){let n=t.agentId.trim(),r=t.sessionKey.trim(),i=ka(e,{agentId:n,sessionKey:r});if(!(!e.client||!e.connected||!n||!r)&&!(e.toolsEffectiveLoading&&e.toolsEffectiveLoadingKey===i)){e.toolsEffectiveLoading=!0,e.toolsEffectiveLoadingKey=i,e.toolsEffectiveResultKey=null,e.toolsEffectiveError=null,e.toolsEffectiveResult=null;try{let t=await e.client.request(`tools.effective`,{agentId:n,sessionKey:r});if(e.toolsEffectiveLoadingKey!==i||e.agentsSelectedId&&e.agentsSelectedId!==n)return;e.toolsEffectiveResultKey=i,e.toolsEffectiveResult=t}catch(t){if(e.toolsEffectiveLoadingKey!==i||e.agentsSelectedId&&e.agentsSelectedId!==n)return;e.toolsEffectiveResult=null,e.toolsEffectiveResultKey=null,e.toolsEffectiveError=er(t)?tr(`effective tools`):String(t)}finally{e.toolsEffectiveLoadingKey===i&&(e.toolsEffectiveLoadingKey=null,e.toolsEffectiveLoading=!1)}}}function ka(e,t){let n=t.agentId.trim(),r=t.sessionKey.trim();return`${n}:${r}:model=${ja(e,r)||`(default)`}`}function Aa(e){let t=e.sessionKey?.trim();if(!t||e.agentsPanel!==`tools`||!e.agentsSelectedId)return;let n=N(t);if(!(!n||e.agentsSelectedId!==n))return Oa(e,{agentId:n,sessionKey:t})}function ja(e,t){let n=t.trim();if(!n)return``;let r=e.chatModelCatalog??[],i=e.chatModelOverrides?.[n],a=e.sessionsResult?.defaults,o=Ca(a?.model,a?.modelProvider,r);if(i===null)return o;if(i)return ba(i,r).value;let s=e.sessionsResult?.sessions?.find(e=>e.key===n);return s?.model?Ca(s.model,s.modelProvider,r):o}async function Ma(e){let t=e.agentsSelectedId;await Xe(e),await Ea(e),t&&e.agentsList?.agents.some(e=>e.id===t)&&(e.agentsSelectedId=t)}var Na=`https://api.elevenlabs.io/v1/text-to-speech`,Pa={"kova-alex":`21m00Tcm4TlvDq8ikWAM`,"kova-casey":`AZnzlk1XvdvUeBnXmlld`,"kova-morgan":`EXAVITQu4vr4xnSDxMaL`,"kova-jordan":`ErXwobaYiN019PkySvjV`,"kova-riley":`MF3mGyEYCl7XYWbV9V6O`},Fa=Pa[`kova-alex`],Ia=`eleven_multilingual_v2`,La=`openclaw.control.voice.elevenlabs.v1:`,Ra=`playback-stopped`,za=null,Ba=null,Va=null,Ha=null;function Ua(e){return`${La}${e.trim()||`default`}`}function Wa(){za&&=(za.pause(),za.src=``,null),Ba&&=(URL.revokeObjectURL(Ba),null),Va=null,Ha=null}function Ga(e){return new Promise((t,n)=>{let r=()=>{e.removeEventListener(`ended`,i),e.removeEventListener(`error`,a),za===e&&Wa()},i=()=>{r(),t()},a=()=>{let t=typeof e.error?.message==`string`&&e.error.message.trim()?e.error.message:`Audio playback failed.`;r(),n(Error(t))};Ha=e=>{r(),n(e instanceof Error?e:Error(Ra))},e.addEventListener(`ended`,i,{once:!0}),e.addEventListener(`error`,a,{once:!0}),e.play().catch(e=>{r(),n(e)})})}function Ka(e){return e.replace(/```[\s\S]*?```/g,``).replace(/`[^`]+`/g,``).replace(/!\[.*?\]\(.*?\)/g,``).replace(/\[([^\]]+)\]\(.*?\)/g,`$1`).replace(/^#{1,6}\s+/gm,``).replace(/\*{1,3}(.*?)\*{1,3}/g,`$1`).replace(/_{1,3}(.*?)_{1,3}/g,`$1`).replace(/^>\s?/gm,``).replace(/^[-*_]{3,}\s*$/gm,``).replace(/^\s*[-*+]\s+/gm,``).replace(/^\s*\d+\.\s+/gm,``).replace(/<[^>]+>/g,``).replace(/\n{3,}/g,`

`).trim()}function qa(e){return Pa[e]??Fa}function Ja(e){return e instanceof Error&&e.message===Ra}function Ya(){if(Va?.abort(),Ha){Ha(Error(Ra));return}Wa()}function Xa(e,t){let n=h();if(!n)return;let r=t.trim(),i=Ua(e);if(!r){n.removeItem(i);return}n.setItem(i,r)}function Za(e){let t=h();return t?(t.getItem(Ua(e))??``).trim():``}function Qa(e){return e.trim().startsWith(`kova-`)}async function $a(e,t,n){let r=Ka(e),i=n.trim();if(!r)throw Error(`There is no text to speak yet.`);if(!i)throw Error(`Add your ElevenLabs key before enabling voice mode.`);Ya();let a=new AbortController;Va=a;let o=await fetch(`${Na}/${qa(t)}`,{method:`POST`,signal:a.signal,headers:{Accept:`audio/mpeg`,"Content-Type":`application/json`,"xi-api-key":i},body:JSON.stringify({text:r,model_id:Ia})});if(!o.ok){let e=await o.text().catch(()=>``);throw Error(e.trim()||`ElevenLabs request failed (${o.status}).`)}let s=await o.blob();Ba=URL.createObjectURL(s),za=new Audio(Ba),await Ga(za)}var eo=`__custom__`,to=[{id:`openrouter`,label:`OpenRouter`,emoji:`🔶`,keyUrl:`https://openrouter.ai/keys`,keyPlaceholder:`sk-or-v1-...`,recommendedModel:`openrouter/auto`,popularModels:[`openrouter/auto`,`openrouter/claude-3.5-sonnet`,`openrouter/gpt-4o`,`openrouter/gemini-pro`]},{id:`anthropic`,label:`Anthropic`,emoji:`🟣`,keyUrl:`https://console.anthropic.com`,keyPlaceholder:`sk-ant-...`,recommendedModel:`anthropic/claude-sonnet-4-5`,popularModels:[`anthropic/claude-sonnet-4-5`,`anthropic/claude-opus-4`]},{id:`openai`,label:`OpenAI`,emoji:`🟢`,keyUrl:`https://platform.openai.com/api-keys`,keyPlaceholder:`sk-...`,recommendedModel:`openai/gpt-4o`,popularModels:[`openai/gpt-4o`,`openai/gpt-4o-mini`,`openai/o3`]},{id:`google`,label:`Gemini`,emoji:`🔵`,keyUrl:`https://aistudio.google.com`,keyPlaceholder:`AIza...`,recommendedModel:`google/gemini-2.0-flash`,popularModels:[`google/gemini-2.0-flash`,`google/gemini-pro`]},{id:`groq`,label:`Groq`,emoji:`⚡`,keyUrl:`https://console.groq.com`,keyPlaceholder:`gsk_...`,recommendedModel:`groq/llama-3.3-70b`,popularModels:[`groq/llama-3.3-70b`,`groq/mixtral-8x7b`]},{id:`huggingface`,label:`Hugging Face`,emoji:`🤗`,keyUrl:`https://huggingface.co/settings/tokens`,keyPlaceholder:`hf_...`,recommendedModel:`huggingface/Qwen/Qwen3-Coder-480B-A35B-Instruct`,popularModels:[]}],no=Object.fromEntries(to.map(e=>[e.id,e])),ro=new Set(to.flatMap(e=>e.popularModels)),io=`kova-alex`,ao=`Hello, I am Alex, your AI researcher.`,oo=[`messages`,`tts`,`providers`,`elevenlabs`,`apiKey`];function so(e){return{openrouter:e(),anthropic:e(),openai:e(),google:e(),groq:e(),huggingface:e()}}function co(){return so(()=>``)}function lo(){return so(()=>null)}function uo(){return so(()=>null)}function fo(e){return e instanceof Error&&e.message.trim()?e.message:String(e)}function po(e){return no[e]}function mo(e,t,n){e.apiKeyProviderMessages={...e.apiKeyProviderMessages,[t]:n}}function ho(e){let t=e.trim().split(`/`,1)[0]?.trim().toLowerCase();return t&&Object.hasOwn(no,t)?t:null}function go(e,t){if(e.apiKeysCurrentModel=t,ro.has(t)){e.apiKeysModelOption=t,e.apiKeysCustomModelInput=``;return}e.apiKeysModelOption=eo,e.apiKeysCustomModelInput=t}function _o(e,t,n){let r=lo();for(let e of t.providers)r[e.provider]=e;e.apiKeysLoaded=!0,e.apiKeyProviderStatuses=r,e.apiKeysConfigHash=t.configHash,go(e,t.currentModel),n?.resetInputs&&(e.apiKeyProviderInputs=co())}function vo(e){return e.apiKeysModelOption===`__custom__`?e.apiKeysCustomModelInput.trim():e.apiKeysModelOption.trim()}function yo(e,t){let n=vo(e);return ho(n)===t?n:po(t).recommendedModel}function bo(e,t){let n=e;for(let e of t){if(!n||typeof n!=`object`||Array.isArray(n))return;n=n[e]}return n}function xo(e){return typeof e==`string`?e.trim().length>0:!!(e&&typeof e==`object`)}function So(e,t){e.apiKeysElevenLabsConfigured=xo(bo(t.config??null,oo)),e.apiKeysElevenLabsConfigHash=t.hash??null;let n=Za(e.settings.gatewayUrl);!e.apiKeysElevenLabsInput.trim()&&n&&(e.apiKeysElevenLabsInput=n)}async function Co(e){if(!e.client)throw Error(`Gateway client is not available.`);return e.client.request(`config.get`,{})}async function wo(e){if(e.apiKeysElevenLabsConfigHash)return e.apiKeysElevenLabsConfigHash;let t=await Co(e);if(So(e,t),!t.hash)throw Error(`Config hash is not available yet. Refresh and try again.`);return t.hash}function To(e){return e.apiKeysElevenLabsInput.trim()||Za(e.settings.gatewayUrl)}async function Eo(e,t,n){if(!(!e.client||!e.connected||e.apiKeysModelSaving)){e.apiKeysModelSaving=!0,e.apiKeysPageMessage=null;try{_o(e,await e.client.request(`apiKeys.activeModel.set`,{provider:t,model:n,...e.apiKeysConfigHash?{baseHash:e.apiKeysConfigHash}:{}})),e.apiKeysPageMessage={kind:`success`,text:`${po(t).label} is now active.`}}catch(t){e.apiKeysPageMessage={kind:`error`,text:`Could not save the active model: ${fo(t)}`}}finally{e.apiKeysModelSaving=!1}}}function Do(e,t,n){e.apiKeyProviderInputs={...e.apiKeyProviderInputs,[t]:n},mo(e,t,null)}function Oo(e,t){e.apiKeysModelOption=t,t!==`__custom__`&&(e.apiKeysCustomModelInput=``),e.apiKeysPageMessage=null}function ko(e,t){e.apiKeysCustomModelInput=t,e.apiKeysPageMessage=null}async function Ao(e){if(!(!e.client||!e.connected||e.apiKeysLoading)){e.apiKeysLoading=!0,e.apiKeysPageMessage=null,e.apiKeysElevenLabsMessage=null;try{let[t,n]=await Promise.allSettled([e.client.request(`apiKeys.providers.get`,{}),Co(e)]);if(t.status!==`fulfilled`)throw t.reason;_o(e,t.value,{resetInputs:!0}),e.apiKeyProviderMessages=uo(),n.status===`fulfilled`?So(e,n.value):e.apiKeysElevenLabsMessage={kind:`error`,text:`Could not load ElevenLabs settings: ${fo(n.reason)}`}}catch(t){e.apiKeysPageMessage={kind:`error`,text:`Could not load API key settings: ${fo(t)}`}}finally{e.apiKeysLoading=!1}}}async function jo(e,t){if(!(!e.client||!e.connected||e.apiKeysSavingProviderId)){e.apiKeysSavingProviderId=t,mo(e,t,null);try{let n=e.apiKeyProviderInputs[t].trim();_o(e,await e.client.request(`apiKeys.provider.set`,{provider:t,...n?{apiKey:n}:{},...e.apiKeysConfigHash?{baseHash:e.apiKeysConfigHash}:{}})),e.apiKeyProviderInputs={...e.apiKeyProviderInputs,[t]:``},mo(e,t,{kind:`success`,text:`${po(t).label} key saved.`})}catch(n){mo(e,t,{kind:`error`,text:`Could not save ${po(t).label}: ${fo(n)}`})}finally{e.apiKeysSavingProviderId=null}}}async function Mo(e){let t=vo(e),n=ho(t);if(!n){e.apiKeysPageMessage={kind:`error`,text:`Custom models must start with openrouter/, anthropic/, openai/, google/, groq/, or huggingface/.`};return}await Eo(e,n,t)}async function No(e,t){await Eo(e,t,po(t).recommendedModel)}async function Po(e,t){if(!(!e.client||!e.connected||e.apiKeysTestingProviderId)){e.apiKeysTestingProviderId=t,mo(e,t,null);try{let n=e.apiKeyProviderInputs[t].trim(),r=await e.client.request(`apiKeys.provider.test`,{provider:t,...n?{apiKey:n}:{},model:yo(e,t)});mo(e,t,{kind:r.ok?`success`:`error`,text:r.ok?`Connected ✓`:r.message})}catch(n){mo(e,t,{kind:`error`,text:`Connection test failed: ${fo(n)}`})}finally{e.apiKeysTestingProviderId=null}}}function Fo(e,t){e.apiKeysElevenLabsInput=t,e.apiKeysElevenLabsMessage=null}async function Io(e){if(!(!e.client||!e.connected||e.apiKeysLoading))try{So(e,await Co(e))}catch(t){e.apiKeysElevenLabsMessage={kind:`error`,text:`Could not load ElevenLabs settings: ${fo(t)}`}}}async function Lo(e){if(!e.client||!e.connected||e.apiKeysElevenLabsSaving)return;let t=e.apiKeysElevenLabsInput.trim();if(!t){e.apiKeysElevenLabsMessage={kind:`error`,text:`Paste your ElevenLabs API key before saving.`};return}e.apiKeysElevenLabsSaving=!0,e.apiKeysElevenLabsMessage=null;try{let n=await wo(e);await e.client.request(`config.patch`,{baseHash:n,raw:JSON.stringify({messages:{tts:{providers:{elevenlabs:{apiKey:t}}}}})}),Xa(e.settings.gatewayUrl,t),await Io(e),e.apiKeysElevenLabsMessage={kind:`success`,text:`ElevenLabs key saved. Changes take effect immediately.`}}catch(t){e.apiKeysElevenLabsMessage={kind:`error`,text:`Could not save ElevenLabs key: ${fo(t)}`}}finally{e.apiKeysElevenLabsSaving=!1}}async function Ro(e){if(!e.connected||e.apiKeysElevenLabsTesting)return;let t=To(e);if(!t){e.apiKeysElevenLabsMessage={kind:`error`,text:`Paste your ElevenLabs API key before running the voice test.`};return}e.apiKeysElevenLabsTesting=!0,e.apiKeysElevenLabsMessage=null;try{Xa(e.settings.gatewayUrl,t),await $a(ao,io,t),e.apiKeysElevenLabsMessage={kind:`success`,text:`Voice test played.`}}catch(t){e.apiKeysElevenLabsMessage={kind:`error`,text:`Voice test failed: ${fo(t)}`}}finally{e.apiKeysElevenLabsTesting=!1}}var zo={trace:!0,debug:!0,info:!0,warn:!0,error:!0,fatal:!0},Bo={name:``,description:``,agentId:``,sessionKey:``,clearAgent:!1,enabled:!0,deleteAfterRun:!0,scheduleKind:`every`,scheduleAt:``,everyAmount:`30`,everyUnit:`minutes`,cronExpr:`0 7 * * *`,cronTz:``,scheduleExact:!1,staggerAmount:``,staggerUnit:`seconds`,sessionTarget:`isolated`,wakeMode:`now`,payloadKind:`agentTurn`,payloadText:``,payloadModel:``,payloadThinking:``,payloadLightContext:!1,deliveryMode:`announce`,deliveryChannel:`last`,deliveryTo:``,deliveryAccountId:``,deliveryBestEffort:!1,failureAlertMode:`inherit`,failureAlertAfter:`2`,failureAlertCooldownSeconds:`3600`,failureAlertChannel:`last`,failureAlertTo:``,failureAlertDeliveryMode:`announce`,failureAlertAccountId:``,timeoutSeconds:``},Vo=`last`;function Ho(e){return e.sessionTarget!==`main`&&e.payloadKind===`agentTurn`}function Uo(e){return e.deliveryMode!==`announce`||Ho(e)?e:{...e,deliveryMode:`none`}}function Wo(e){let t={};if(e.name.trim()||(t.name=`cron.errors.nameRequired`),e.scheduleKind===`at`){let n=Date.parse(e.scheduleAt);Number.isFinite(n)||(t.scheduleAt=`cron.errors.scheduleAtInvalid`)}else if(e.scheduleKind===`every`)T(e.everyAmount,0)<=0&&(t.everyAmount=`cron.errors.everyAmountInvalid`);else if(e.cronExpr.trim()||(t.cronExpr=`cron.errors.cronExprRequired`),!e.scheduleExact){let n=e.staggerAmount.trim();n&&T(n,0)<=0&&(t.staggerAmount=`cron.errors.staggerAmountInvalid`)}if(e.payloadText.trim()||(t.payloadText=e.payloadKind===`systemEvent`?`cron.errors.systemTextRequired`:`cron.errors.agentMessageRequired`),e.payloadKind===`agentTurn`){let n=e.timeoutSeconds.trim();n&&T(n,0)<=0&&(t.timeoutSeconds=`cron.errors.timeoutInvalid`)}if(e.deliveryMode===`webhook`){let n=e.deliveryTo.trim();n?/^https?:\/\//i.test(n)||(t.deliveryTo=`cron.errors.webhookUrlInvalid`):t.deliveryTo=`cron.errors.webhookUrlRequired`}if(e.failureAlertMode===`custom`){let n=e.failureAlertAfter.trim();if(n){let e=T(n,0);(!Number.isFinite(e)||e<=0)&&(t.failureAlertAfter=`Failure alert threshold must be greater than 0.`)}let r=e.failureAlertCooldownSeconds.trim();if(r){let e=T(r,-1);(!Number.isFinite(e)||e<0)&&(t.failureAlertCooldownSeconds=`Cooldown must be 0 or greater.`)}}return t}function Go(e){return Object.keys(e).length>0}async function Ko(e){if(!(!e.client||!e.connected))try{e.cronStatus=await e.client.request(`cron.status`,{})}catch(t){er(t)?(e.cronStatus=null,e.cronError=tr(`cron status`)):e.cronError=String(t)}}async function qo(e){return await Yo(e,{append:!1})}function Jo(e){let t=typeof e.totalRaw==`number`&&Number.isFinite(e.totalRaw)?Math.max(0,Math.floor(e.totalRaw)):e.pageCount,n=typeof e.limitRaw==`number`&&Number.isFinite(e.limitRaw)?Math.max(1,Math.floor(e.limitRaw)):Math.max(1,e.pageCount),r=typeof e.offsetRaw==`number`&&Number.isFinite(e.offsetRaw)?Math.max(0,Math.floor(e.offsetRaw)):0,i=typeof e.hasMoreRaw==`boolean`?e.hasMoreRaw:r+e.pageCount<Math.max(t,r+e.pageCount);return{total:t,limit:n,offset:r,hasMore:i,nextOffset:typeof e.nextOffsetRaw==`number`&&Number.isFinite(e.nextOffsetRaw)?Math.max(0,Math.floor(e.nextOffsetRaw)):i?r+e.pageCount:null}}async function Yo(e,t){if(!e.client||!e.connected||e.cronLoading||e.cronJobsLoadingMore)return;let n=t?.append===!0;if(n){if(!e.cronJobsHasMore)return;e.cronJobsLoadingMore=!0}else e.cronLoading=!0;e.cronError=null;try{let t=n?Math.max(0,e.cronJobsNextOffset??e.cronJobs.length):0,r=await e.client.request(`cron.list`,{includeDisabled:e.cronJobsEnabledFilter===`all`,limit:e.cronJobsLimit,offset:t,query:e.cronJobsQuery.trim()||void 0,enabled:e.cronJobsEnabledFilter,sortBy:e.cronJobsSortBy,sortDir:e.cronJobsSortDir}),i=Array.isArray(r.jobs)?r.jobs:[];e.cronJobs=n?[...e.cronJobs,...i]:i;let a=Jo({totalRaw:r.total,limitRaw:r.limit,offsetRaw:r.offset,nextOffsetRaw:r.nextOffset,hasMoreRaw:r.hasMore,pageCount:i.length});e.cronJobsTotal=Math.max(a.total,e.cronJobs.length),e.cronJobsHasMore=a.hasMore,e.cronJobsNextOffset=a.nextOffset,e.cronEditingJobId&&!e.cronJobs.some(t=>t.id===e.cronEditingJobId)&&es(e)}catch(t){e.cronError=String(t)}finally{n?e.cronJobsLoadingMore=!1:e.cronLoading=!1}}async function Xo(e){await Yo(e,{append:!0})}async function Zo(e){await Yo(e,{append:!1})}function Qo(e,t){typeof t.cronJobsQuery==`string`&&(e.cronJobsQuery=t.cronJobsQuery),t.cronJobsEnabledFilter&&(e.cronJobsEnabledFilter=t.cronJobsEnabledFilter),t.cronJobsScheduleKindFilter&&(e.cronJobsScheduleKindFilter=t.cronJobsScheduleKindFilter),t.cronJobsLastStatusFilter&&(e.cronJobsLastStatusFilter=t.cronJobsLastStatusFilter),t.cronJobsSortBy&&(e.cronJobsSortBy=t.cronJobsSortBy),t.cronJobsSortDir&&(e.cronJobsSortDir=t.cronJobsSortDir)}function $o(e){return e.cronJobs.filter(t=>!(e.cronJobsScheduleKindFilter!==`all`&&t.schedule.kind!==e.cronJobsScheduleKindFilter||e.cronJobsLastStatusFilter!==`all`&&t.state?.lastStatus!==e.cronJobsLastStatusFilter))}function es(e){e.cronEditingJobId=null}function ts(e){e.cronForm={...Bo},e.cronFieldErrors=Wo(e.cronForm)}function ns(e){let t=Date.parse(e);if(!Number.isFinite(t))return``;let n=new Date(t);return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,`0`)}-${String(n.getDate()).padStart(2,`0`)}T${String(n.getHours()).padStart(2,`0`)}:${String(n.getMinutes()).padStart(2,`0`)}`}function rs(e){if(e%864e5==0)return{everyAmount:String(Math.max(1,e/864e5)),everyUnit:`days`};if(e%36e5==0)return{everyAmount:String(Math.max(1,e/36e5)),everyUnit:`hours`};let t=Math.max(1,Math.ceil(e/6e4));return{everyAmount:String(t),everyUnit:`minutes`}}function is(e){return e===0?{scheduleExact:!0,staggerAmount:``,staggerUnit:`seconds`}:typeof e!=`number`||!Number.isFinite(e)||e<0?{scheduleExact:!1,staggerAmount:``,staggerUnit:`seconds`}:e%6e4==0?{scheduleExact:!1,staggerAmount:String(Math.max(1,e/6e4)),staggerUnit:`minutes`}:{scheduleExact:!1,staggerAmount:String(Math.max(1,Math.ceil(e/1e3))),staggerUnit:`seconds`}}function as(e,t){let n=e.failureAlert,r={...t,name:e.name,description:e.description??``,agentId:e.agentId??``,sessionKey:e.sessionKey??``,clearAgent:!1,enabled:e.enabled,deleteAfterRun:e.deleteAfterRun??!1,scheduleKind:e.schedule.kind,scheduleAt:``,everyAmount:t.everyAmount,everyUnit:t.everyUnit,cronExpr:t.cronExpr,cronTz:``,scheduleExact:!1,staggerAmount:``,staggerUnit:`seconds`,sessionTarget:e.sessionTarget,wakeMode:e.wakeMode,payloadKind:e.payload.kind,payloadText:e.payload.kind===`systemEvent`?e.payload.text:e.payload.message,payloadModel:e.payload.kind===`agentTurn`?e.payload.model??``:``,payloadThinking:e.payload.kind===`agentTurn`?e.payload.thinking??``:``,payloadLightContext:e.payload.kind===`agentTurn`?e.payload.lightContext===!0:!1,deliveryMode:e.delivery?.mode??`none`,deliveryChannel:e.delivery?.channel??`last`,deliveryTo:e.delivery?.to??``,deliveryAccountId:e.delivery?.accountId??``,deliveryBestEffort:e.delivery?.bestEffort??!1,failureAlertMode:n===!1?`disabled`:n&&typeof n==`object`?`custom`:`inherit`,failureAlertAfter:n&&typeof n==`object`&&typeof n.after==`number`?String(n.after):Bo.failureAlertAfter,failureAlertCooldownSeconds:n&&typeof n==`object`&&typeof n.cooldownMs==`number`?String(Math.floor(n.cooldownMs/1e3)):Bo.failureAlertCooldownSeconds,failureAlertChannel:n&&typeof n==`object`?n.channel??`last`:Vo,failureAlertTo:n&&typeof n==`object`?n.to??``:``,failureAlertDeliveryMode:n&&typeof n==`object`?n.mode??`announce`:`announce`,failureAlertAccountId:n&&typeof n==`object`?n.accountId??``:``,timeoutSeconds:e.payload.kind===`agentTurn`&&typeof e.payload.timeoutSeconds==`number`?String(e.payload.timeoutSeconds):``};if(e.schedule.kind===`at`)r.scheduleAt=ns(e.schedule.at);else if(e.schedule.kind===`every`){let t=rs(e.schedule.everyMs);r.everyAmount=t.everyAmount,r.everyUnit=t.everyUnit}else{r.cronExpr=e.schedule.expr,r.cronTz=e.schedule.tz??``;let t=is(e.schedule.staggerMs);r.scheduleExact=t.scheduleExact,r.staggerAmount=t.staggerAmount,r.staggerUnit=t.staggerUnit}return Uo(r)}function os(e){if(e.scheduleKind===`at`){let t=Date.parse(e.scheduleAt);if(!Number.isFinite(t))throw Error(P(`cron.errors.invalidRunTime`));return{kind:`at`,at:new Date(t).toISOString()}}if(e.scheduleKind===`every`){let t=T(e.everyAmount,0);if(t<=0)throw Error(P(`cron.errors.invalidIntervalAmount`));let n=e.everyUnit;return{kind:`every`,everyMs:t*(n===`minutes`?6e4:n===`hours`?36e5:864e5)}}let t=e.cronExpr.trim();if(!t)throw Error(P(`cron.errors.cronExprRequiredShort`));if(e.scheduleExact)return{kind:`cron`,expr:t,tz:e.cronTz.trim()||void 0,staggerMs:0};let n=e.staggerAmount.trim();if(!n)return{kind:`cron`,expr:t,tz:e.cronTz.trim()||void 0};let r=T(n,0);if(r<=0)throw Error(P(`cron.errors.invalidStaggerAmount`));let i=e.staggerUnit===`minutes`?r*6e4:r*1e3;return{kind:`cron`,expr:t,tz:e.cronTz.trim()||void 0,staggerMs:i}}function ss(e){if(e.payloadKind===`systemEvent`){let t=e.payloadText.trim();if(!t)throw Error(P(`cron.errors.systemEventTextRequired`));return{kind:`systemEvent`,text:t}}let t=e.payloadText.trim();if(!t)throw Error(P(`cron.errors.agentMessageRequiredShort`));let n={kind:`agentTurn`,message:t},r=e.payloadModel.trim();r&&(n.model=r);let i=e.payloadThinking.trim();i&&(n.thinking=i);let a=T(e.timeoutSeconds,0);return a>0&&(n.timeoutSeconds=a),e.payloadLightContext&&(n.lightContext=!0),n}function cs(e){if(e.failureAlertMode===`disabled`)return!1;if(e.failureAlertMode!==`custom`)return;let t=T(e.failureAlertAfter.trim(),0),n=e.failureAlertCooldownSeconds.trim(),r=n.length>0?T(n,0):void 0,i=r!==void 0&&Number.isFinite(r)&&r>=0?Math.floor(r*1e3):void 0,a=e.failureAlertDeliveryMode,o=e.failureAlertAccountId.trim(),s={after:t>0?Math.floor(t):void 0,channel:e.failureAlertChannel.trim()||`last`,to:e.failureAlertTo.trim()||void 0,...i===void 0?{}:{cooldownMs:i}};return a&&(s.mode=a),s.accountId=o||void 0,s}async function ls(e){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{let t=Uo(e.cronForm);t!==e.cronForm&&(e.cronForm=t);let n=Wo(t);if(e.cronFieldErrors=n,Go(n))return;let r=os(t),i=ss(t),a=e.cronEditingJobId?e.cronJobs.find(t=>t.id===e.cronEditingJobId):void 0;if(i.kind===`agentTurn`){let n=a?.payload.kind===`agentTurn`?a.payload.lightContext:void 0;!t.payloadLightContext&&e.cronEditingJobId&&n!==void 0&&(i.lightContext=!1)}let o=t.deliveryMode,s=o&&o!==`none`?{mode:o,channel:o===`announce`?t.deliveryChannel.trim()||`last`:void 0,to:t.deliveryTo.trim()||void 0,accountId:o===`announce`?t.deliveryAccountId.trim():void 0,bestEffort:t.deliveryBestEffort}:o===`none`?{mode:`none`}:void 0,c=cs(t),l=t.clearAgent?null:t.agentId.trim(),u=t.sessionKey.trim()||(a?.sessionKey?null:void 0),d={name:t.name.trim(),description:t.description.trim(),agentId:l===null?null:l||void 0,sessionKey:u,enabled:t.enabled,deleteAfterRun:t.deleteAfterRun,schedule:r,sessionTarget:t.sessionTarget,wakeMode:t.wakeMode,payload:i,delivery:s,failureAlert:c};if(!d.name)throw Error(P(`cron.errors.nameRequiredShort`));e.cronEditingJobId?(await e.client.request(`cron.update`,{id:e.cronEditingJobId,patch:d}),es(e)):(await e.client.request(`cron.add`,d),ts(e)),await qo(e),await Ko(e)}catch(t){e.cronError=String(t)}finally{e.cronBusy=!1}}}async function us(e,t,n){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request(`cron.update`,{id:t.id,patch:{enabled:n}}),await qo(e),await Ko(e)}catch(t){e.cronError=String(t)}finally{e.cronBusy=!1}}}async function ds(e,t,n=`force`){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request(`cron.run`,{id:t.id,mode:n}),e.cronRunsScope===`all`?await ps(e,null):await ps(e,t.id)}catch(t){e.cronError=String(t)}finally{e.cronBusy=!1}}}async function fs(e,t){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request(`cron.remove`,{id:t.id}),e.cronEditingJobId===t.id&&es(e),e.cronRunsJobId===t.id&&(e.cronRunsJobId=null,e.cronRuns=[],e.cronRunsTotal=0,e.cronRunsHasMore=!1,e.cronRunsNextOffset=null),await qo(e),await Ko(e)}catch(t){e.cronError=String(t)}finally{e.cronBusy=!1}}}async function ps(e,t,n){if(!e.client||!e.connected)return;let r=e.cronRunsScope,i=t??e.cronRunsJobId;if(r===`job`&&!i){e.cronRuns=[],e.cronRunsTotal=0,e.cronRunsHasMore=!1,e.cronRunsNextOffset=null;return}let a=n?.append===!0;if(!(a&&!e.cronRunsHasMore))try{a&&(e.cronRunsLoadingMore=!0);let t=a?Math.max(0,e.cronRunsNextOffset??e.cronRuns.length):0,n=await e.client.request(`cron.runs`,{scope:r,id:r===`job`?i??void 0:void 0,limit:e.cronRunsLimit,offset:t,statuses:e.cronRunsStatuses.length>0?e.cronRunsStatuses:void 0,status:e.cronRunsStatusFilter,deliveryStatuses:e.cronRunsDeliveryStatuses.length>0?e.cronRunsDeliveryStatuses:void 0,query:e.cronRunsQuery.trim()||void 0,sortDir:e.cronRunsSortDir}),o=Array.isArray(n.entries)?n.entries:[];e.cronRuns=a&&(r===`all`||e.cronRunsJobId===i)?[...e.cronRuns,...o]:o,r===`job`&&(e.cronRunsJobId=i??null);let s=Jo({totalRaw:n.total,limitRaw:n.limit,offsetRaw:n.offset,nextOffsetRaw:n.nextOffset,hasMoreRaw:n.hasMore,pageCount:o.length});e.cronRunsTotal=Math.max(s.total,e.cronRuns.length),e.cronRunsHasMore=s.hasMore,e.cronRunsNextOffset=s.nextOffset}catch(t){e.cronError=String(t)}finally{a&&(e.cronRunsLoadingMore=!1)}}async function ms(e){e.cronRunsScope===`job`&&!e.cronRunsJobId||await ps(e,e.cronRunsJobId,{append:!0})}function hs(e,t){t.cronRunsScope&&(e.cronRunsScope=t.cronRunsScope),Array.isArray(t.cronRunsStatuses)&&(e.cronRunsStatuses=t.cronRunsStatuses,e.cronRunsStatusFilter=t.cronRunsStatuses.length===1?t.cronRunsStatuses[0]:`all`),Array.isArray(t.cronRunsDeliveryStatuses)&&(e.cronRunsDeliveryStatuses=t.cronRunsDeliveryStatuses),t.cronRunsStatusFilter&&(e.cronRunsStatusFilter=t.cronRunsStatusFilter,e.cronRunsStatuses=t.cronRunsStatusFilter===`all`?[]:[t.cronRunsStatusFilter]),typeof t.cronRunsQuery==`string`&&(e.cronRunsQuery=t.cronRunsQuery),t.cronRunsSortDir&&(e.cronRunsSortDir=t.cronRunsSortDir)}function gs(e,t){e.cronEditingJobId=t.id,e.cronRunsJobId=t.id,e.cronForm=as(t,e.cronForm),e.cronFieldErrors=Wo(e.cronForm)}function _s(e,t){let n=e.trim()||`Job`,r=`${n} copy`;if(!t.has(r.toLowerCase()))return r;let i=2;for(;i<1e3;){let e=`${n} copy ${i}`;if(!t.has(e.toLowerCase()))return e;i+=1}return`${n} copy ${Date.now()}`}function vs(e,t){es(e),e.cronRunsJobId=t.id;let n=new Set(e.cronJobs.map(e=>e.name.trim().toLowerCase())),r=as(t,e.cronForm);r.name=_s(t.name,n),e.cronForm=r,e.cronFieldErrors=Wo(e.cronForm)}function ys(e){es(e),ts(e)}async function bs(e,t){if(!(!e.client||!e.connected)&&!e.devicesLoading){e.devicesLoading=!0,t?.quiet||(e.devicesError=null);try{let t=await e.client.request(`device.pair.list`,{});e.devicesList={pending:Array.isArray(t?.pending)?t.pending:[],paired:Array.isArray(t?.paired)?t.paired:[]}}catch(n){t?.quiet||(e.devicesError=String(n))}finally{e.devicesLoading=!1}}}async function xs(e,t){if(!(!e.client||!e.connected))try{await e.client.request(`device.pair.approve`,{requestId:t}),await bs(e)}catch(t){e.devicesError=String(t)}}async function Ss(e,t){if(!(!e.client||!e.connected)&&window.confirm(`Reject this device pairing request?`))try{await e.client.request(`device.pair.reject`,{requestId:t}),await bs(e)}catch(t){e.devicesError=String(t)}}async function Cs(e,t){if(!(!e.client||!e.connected))try{let n=await e.client.request(`device.token.rotate`,t);if(n?.token){let e=await Ln(),r=n.role??t.role;(n.deviceId===e.deviceId||t.deviceId===e.deviceId)&&yt({deviceId:e.deviceId,role:r,token:n.token,scopes:n.scopes??t.scopes??[]}),window.prompt(`New device token (copy and store securely):`,n.token)}await bs(e)}catch(t){e.devicesError=String(t)}}async function ws(e,t){if(!(!e.client||!e.connected)&&window.confirm(`Revoke token for ${t.deviceId} (${t.role})?`))try{await e.client.request(`device.token.revoke`,t);let n=await Ln();t.deviceId===n.deviceId&&bt({deviceId:n.deviceId,role:t.role}),await bs(e)}catch(t){e.devicesError=String(t)}}function Ts(e){if(!e||e.kind===`gateway`)return{method:`exec.approvals.get`,params:{}};let t=e.nodeId.trim();return t?{method:`exec.approvals.node.get`,params:{nodeId:t}}:null}function Es(e,t){if(!e||e.kind===`gateway`)return{method:`exec.approvals.set`,params:t};let n=e.nodeId.trim();return n?{method:`exec.approvals.node.set`,params:{...t,nodeId:n}}:null}async function Ds(e,t){if(!(!e.client||!e.connected)&&!e.execApprovalsLoading){e.execApprovalsLoading=!0,e.lastError=null;try{let n=Ts(t);if(!n){e.lastError=`Select a node before loading exec approvals.`;return}Os(e,await e.client.request(n.method,n.params))}catch(t){e.lastError=String(t)}finally{e.execApprovalsLoading=!1}}}function Os(e,t){e.execApprovalsSnapshot=t,e.execApprovalsDirty||(e.execApprovalsForm=Re(t.file??{}))}async function ks(e,t){if(!(!e.client||!e.connected)){e.execApprovalsSaving=!0,e.lastError=null;try{let n=e.execApprovalsSnapshot?.hash;if(!n){e.lastError=`Exec approvals hash missing; reload and retry.`;return}let r=Es(t,{file:e.execApprovalsForm??e.execApprovalsSnapshot?.file??{},baseHash:n});if(!r){e.lastError=`Select a node before saving exec approvals.`;return}await e.client.request(r.method,r.params),e.execApprovalsDirty=!1,await Ds(e,t)}catch(t){e.lastError=String(t)}finally{e.execApprovalsSaving=!1}}}function As(e,t,n){let r=Re(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});Ue(r,t,n),e.execApprovalsForm=r,e.execApprovalsDirty=!0}function js(e,t){let n=Re(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});We(n,t),e.execApprovalsForm=n,e.execApprovalsDirty=!0}async function Ms(e){if(!(!e.client||!e.connected)&&!e.presenceLoading){e.presenceLoading=!0,e.presenceError=null,e.presenceStatus=null;try{let t=await e.client.request(`system-presence`,{});Array.isArray(t)?(e.presenceEntries=t,e.presenceStatus=t.length===0?`No instances yet.`:null):(e.presenceEntries=[],e.presenceStatus=`No presence payload.`)}catch(t){er(t)?(e.presenceEntries=[],e.presenceStatus=null,e.presenceError=tr(`instance presence`)):e.presenceError=String(t)}finally{e.presenceLoading=!1}}}async function Ns(e){if(!(!e.client||!e.connected))try{await e.client.request(`sessions.subscribe`,{})}catch(t){e.sessionsError=String(t)}}async function Ps(e,t){if(!(!e.client||!e.connected)&&!e.sessionsLoading){e.sessionsLoading=!0,e.sessionsError=null;try{let n=t?.includeGlobal??e.sessionsIncludeGlobal,r=t?.includeUnknown??e.sessionsIncludeUnknown,i=t?.activeMinutes??T(e.sessionsFilterActive,0),a=t?.limit??T(e.sessionsFilterLimit,0),o={includeGlobal:n,includeUnknown:r};i>0&&(o.activeMinutes=i),a>0&&(o.limit=a);let s=await e.client.request(`sessions.list`,o);s&&(e.sessionsResult=s)}catch(t){er(t)?(e.sessionsResult=null,e.sessionsError=tr(`sessions`)):e.sessionsError=String(t)}finally{e.sessionsLoading=!1}}}async function Fs(e,t,n){if(!e.client||!e.connected)return;let r={key:t};`label`in n&&(r.label=n.label),`thinkingLevel`in n&&(r.thinkingLevel=n.thinkingLevel),`fastMode`in n&&(r.fastMode=n.fastMode),`verboseLevel`in n&&(r.verboseLevel=n.verboseLevel),`reasoningLevel`in n&&(r.reasoningLevel=n.reasoningLevel);try{await e.client.request(`sessions.patch`,r),await Ps(e)}catch(t){e.sessionsError=String(t)}}async function Is(e,t){if(!e.client||!e.connected||t.length===0||e.sessionsLoading)return[];let n=t.length===1?`session`:`sessions`;if(!window.confirm(`Delete ${t.length} ${n}?\n\nThis will delete the session entries and archive their transcripts.`))return[];e.sessionsLoading=!0,e.sessionsError=null;let r=[],i=[];try{for(let n of t)try{await e.client.request(`sessions.delete`,{key:n,deleteTranscript:!0}),r.push(n)}catch(e){i.push(String(e))}}finally{e.sessionsLoading=!1}return r.length>0&&await Ps(e),i.length>0&&(e.sessionsError=i.join(`; `)),r}var Ls=`https://raw.githubusercontent.com/chiragborse1/kova-skills/main/registry.json`,Rs=/^skills\/([^/]+)\/SKILL\.md$/,zs=/^[A-Za-z0-9._-]+$/,Bs=15e3;function Vs(e,t,n){if(!t.trim())return;let r={...e.skillMessages};n?r[t]=n:delete r[t],e.skillMessages=r}function Hs(e){return e instanceof Error?e.message:String(e)}async function Us(e){if(!(!e.client||!e.connected)&&!e.skillsLoading){e.skillsLoading=!0,e.skillsError=null;try{let t=await e.client.request(`skills.status`,{});t&&(e.skillsReport=t)}catch(t){e.skillsError=Hs(t)}finally{e.skillsLoading=!1}}}function Ws(e){if(!e||typeof e!=`object`)return null;let t=e,n=typeof t.id==`string`?t.id.trim():``,r=typeof t.name==`string`?t.name.trim():``,i=typeof t.url==`string`?t.url.trim():``;return n&&r&&i?{id:n,name:r,description:typeof t.description==`string`?t.description.trim():``,version:typeof t.version==`string`?t.version.trim():``,author:typeof t.author==`string`&&t.author.trim()?t.author.trim():`Unknown author`,category:typeof t.category==`string`&&t.category.trim()?t.category.trim():`Other`,tags:Array.isArray(t.tags)?t.tags.filter(e=>typeof e==`string`).map(e=>e.trim()).filter(Boolean):[],downloads:typeof t.downloads==`number`&&Number.isFinite(t.downloads)?t.downloads:null,free:t.free!==!1,url:i}:null}function Gs(e){if(!e||typeof e!=`object`)throw Error(`Marketplace registry returned an invalid response.`);let t=e.skills;if(!Array.isArray(t))throw Error(`Marketplace registry is missing the skills list.`);return t.map(e=>Ws(e)).filter(e=>e!==null).sort((e,t)=>e.name.localeCompare(t.name))}async function Ks(e){if(!e.kova_marketplaceLoading){e.kova_marketplaceLoading=!0,e.kova_marketplaceError=null;try{let t=await fetch(Ls,{cache:`no-store`,mode:`cors`});if(!t.ok)throw Error(`Marketplace registry request failed (${t.status}).`);e.kova_marketplaceSkills=Gs(await t.json())}catch(t){e.kova_marketplaceError=Hs(t)}finally{e.kova_marketplaceLoading=!1}}}function qs(e){let t=new Set;for(let n of e.files){let e=n.name.match(Rs);e?.[1]&&t.add(e[1])}return Array.from(t).sort((e,t)=>e.localeCompare(t))}async function Js(e){let t=e.settings.gatewayUrl.trim();if(!t)throw Error(`Marketplace install checks require a configured gateway URL.`);return await new Promise((n,r)=>{let i=!1,a=0,o=null,s=e=>{i||(i=!0,window.clearTimeout(a),e(),o?.stop())};o=new $n({url:t,token:e.settings.token.trim()?e.settings.token:void 0,password:e.password.trim()?e.password:void 0,clientName:`openclaw-control-ui`,clientVersion:`control-ui-marketplace`,mode:`webchat`,instanceId:`${e.clientInstanceId}:kova-marketplace`,onHello:()=>{o?.request(`agents.files.list`,{agentId:`main`}).then(e=>{s(()=>n(e))}).catch(e=>{s(()=>r(e))})},onClose:({reason:e,error:t})=>{s(()=>r(Error((t?.message??e)||`Marketplace install check disconnected.`)))}}),a=window.setTimeout(()=>{s(()=>r(Error(`Marketplace install check timed out.`)))},Bs),o.start()})}async function Ys(e){if(!(!e.client||!e.connected)&&!e.kova_installedLoading){e.kova_installedLoading=!0,e.kova_installedError=null;try{e.kova_installedSkillIds=qs(await Js(e))}catch(t){e.kova_installedError=Hs(t)}finally{e.kova_installedLoading=!1}}}async function Xs(e){await Promise.allSettled([Ks(e),Ys(e)])}function Zs(e){let t=e.trim();if(!zs.test(t))throw Error(`Marketplace skill id "${e}" is not a safe folder name.`);return t}function Qs(e){let t;try{t=new URL(e)}catch{throw Error(`Marketplace skill URL is invalid.`)}if(!(t.protocol===`https:`||t.protocol===`http:`))throw Error(`Marketplace skill URL must use http or https.`);return t.toString()}async function $s(e,t){t?.clearMessages&&Object.keys(e.skillMessages).length>0&&(e.skillMessages={}),t?.clearMessages&&(e.kova_marketplaceError=null,e.kova_installedError=null),await Promise.allSettled([Us(e),Xs(e)])}function ec(e,t,n){e.skillEdits={...e.skillEdits,[t]:n}}async function tc(e,t,n){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{await e.client.request(`skills.update`,{skillKey:t,enabled:n}),await Us(e),Vs(e,t,{kind:`success`,message:n?`Skill enabled`:`Skill disabled`})}catch(n){let r=Hs(n);e.skillsError=r,Vs(e,t,{kind:`error`,message:r})}finally{e.skillsBusyKey=null}}}async function nc(e,t){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{let n=e.skillEdits[t]??``;await e.client.request(`skills.update`,{skillKey:t,apiKey:n}),await Us(e),Vs(e,t,{kind:`success`,message:`API key saved - stored in openclaw.json (skills.entries.`+t+`)`})}catch(n){let r=Hs(n);e.skillsError=r,Vs(e,t,{kind:`error`,message:r})}finally{e.skillsBusyKey=null}}}async function rc(e,t,n,r,i=!1){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{let a=await e.client.request(`skills.install`,{name:n,installId:r,dangerouslyForceUnsafeInstall:i,timeoutMs:12e4});await Us(e),Vs(e,t,{kind:`success`,message:a?.message??`Installed`})}catch(n){let r=Hs(n);e.skillsError=r,Vs(e,t,{kind:`error`,message:r})}finally{e.skillsBusyKey=null}}}async function ic(e,t){if(!e.client||!e.connected){e.kova_marketplaceError=`Reconnect to install marketplace skills.`;return}let n=Zs(t.id),r=Qs(t.url);e.kova_marketplaceBusyId=n,e.kova_marketplaceError=null;try{let t=await fetch(r,{cache:`no-store`,mode:`cors`});if(!t.ok)throw Error(`Marketplace skill download failed (${t.status}).`);let i=await t.text();if(!i.trim())throw Error(`Marketplace skill download returned an empty file.`);await e.client.request(`agents.files.set`,{agentId:`main`,name:`skills/${n}/SKILL.md`,content:i}),e.kova_installedSkillIds=Array.from(new Set([...e.kova_installedSkillIds,n])).sort((e,t)=>e.localeCompare(t)),await Promise.allSettled([Ys(e),Us(e)])}catch(t){e.kova_marketplaceError=Hs(t)}finally{e.kova_marketplaceBusyId=null}}var ac=`openclaw.control.usage.date-params.v1`,oc=`__default__`,sc=/unexpected property ['"]mode['"]/i,cc=/unexpected property ['"]utcoffset['"]/i,lc=/invalid sessions\.usage params/i,uc=null;function dc(){return g()}function fc(){let e=dc();if(!e)return new Set;try{let t=e.getItem(ac);if(!t)return new Set;let n=JSON.parse(t);return!n||!Array.isArray(n.unsupportedGatewayKeys)?new Set:new Set(n.unsupportedGatewayKeys.filter(e=>typeof e==`string`).map(e=>e.trim()).filter(Boolean))}catch{return new Set}}function pc(e){let t=dc();if(t)try{t.setItem(ac,JSON.stringify({unsupportedGatewayKeys:Array.from(e)}))}catch{}}function mc(){return uc||=fc(),uc}function hc(e){let t=e?.trim();if(!t)return oc;try{let e=new URL(t),n=e.pathname===`/`?``:e.pathname;return`${e.protocol}//${e.host}${n}`.toLowerCase()}catch{return t.toLowerCase()}}function gc(e){return hc(e.settings?.gatewayUrl)}function _c(e){return!mc().has(gc(e))}function vc(e){let t=mc();t.add(gc(e)),pc(t)}function yc(e){let t=Sc(e);return lc.test(t)&&(sc.test(t)||cc.test(t))}var bc=e=>{let t=-e,n=t>=0?`+`:`-`,r=Math.abs(t),i=Math.floor(r/60),a=r%60;return a===0?`UTC${n}${i}`:`UTC${n}${i}:${a.toString().padStart(2,`0`)}`},xc=(e,t)=>{if(t)return e===`utc`?{mode:`utc`}:{mode:`specific`,utcOffset:bc(new Date().getTimezoneOffset())}};function Sc(e){if(typeof e==`string`)return e;if(e instanceof Error&&typeof e.message==`string`&&e.message.trim())return e.message;if(e&&typeof e==`object`)try{let t=JSON.stringify(e);if(t)return t}catch{}return`request failed`}async function Cc(e,t){let n=e.client;if(!(!n||!e.connected)&&!e.usageLoading){e.usageLoading=!0,e.usageError=null;try{let r=t?.startDate??e.usageStartDate,i=t?.endDate??e.usageEndDate,a=async t=>{let a=xc(e.usageTimeZone,t);return await Promise.all([n.request(`sessions.usage`,{startDate:r,endDate:i,...a,limit:1e3,includeContextWeight:!0}),n.request(`usage.cost`,{startDate:r,endDate:i,...a})])},o=(t,n)=>{t&&(e.usageResult=t),n&&(e.usageCostSummary=n)},s=_c(e);try{let[e,t]=await a(s);o(e,t)}catch(t){if(s&&yc(t)){vc(e);let[t,n]=await a(!1);o(t,n)}else throw t}}catch(t){er(t)?(e.usageResult=null,e.usageCostSummary=null,e.usageError=tr(`usage`)):e.usageError=Sc(t)}finally{e.usageLoading=!1}}}async function wc(e,t){if(!(!e.client||!e.connected)&&!e.usageTimeSeriesLoading){e.usageTimeSeriesLoading=!0,e.usageTimeSeries=null;try{let n=await e.client.request(`sessions.usage.timeseries`,{key:t});n&&(e.usageTimeSeries=n)}catch{e.usageTimeSeries=null}finally{e.usageTimeSeriesLoading=!1}}}async function Tc(e,t){if(!(!e.client||!e.connected)&&!e.usageSessionLogsLoading){e.usageSessionLogsLoading=!0,e.usageSessionLogs=null;try{let n=await e.client.request(`sessions.usage.logs`,{key:t,limit:1e3});n&&Array.isArray(n.logs)&&(e.usageSessionLogs=n.logs)}catch{e.usageSessionLogs=null}finally{e.usageSessionLogsLoading=!1}}}var Ec=[{label:`chat`,tabs:[`chat`]},{label:`control`,tabs:[`overview`,`channels`,`instances`,`sessions`,`usage`,`cron`]},{label:`agent`,tabs:[`employees`,`inbox`,`briefing`,`meetings`,`canvas`,`routing`,`agents`,`skills`,`nodes`]},{label:`settings`,tabs:[`config`,`apiKeys`,`communications`,`appearance`,`automation`,`infrastructure`,`aiAgents`,`debug`,`logs`]}],Dc={onboarding:`/onboarding`,employees:`/employees`,inbox:`/inbox`,briefing:`/briefing`,meetings:`/meetings`,canvas:`/canvas`,routing:`/routing`,agents:`/agents`,overview:`/overview`,channels:`/channels`,instances:`/instances`,sessions:`/sessions`,usage:`/usage`,cron:`/cron`,skills:`/skills`,nodes:`/nodes`,chat:`/chat`,config:`/config`,apiKeys:`/api-keys`,communications:`/communications`,appearance:`/appearance`,automation:`/automation`,infrastructure:`/infrastructure`,aiAgents:`/ai-agents`,debug:`/debug`,logs:`/logs`},Oc=new Map(Object.entries(Dc).map(([e,t])=>[t,e]));function kc(e){if(!e)return``;let t=e.trim();return t.startsWith(`/`)||(t=`/${t}`),t===`/`?``:(t.endsWith(`/`)&&(t=t.slice(0,-1)),t)}function Ac(e){if(!e)return`/`;let t=e.trim();return t.startsWith(`/`)||(t=`/${t}`),t.length>1&&t.endsWith(`/`)&&(t=t.slice(0,-1)),t}function jc(e,t=``){let n=kc(t),r=Dc[e];return n?`${n}${r}`:r}function Mc(e,t=``){let n=kc(t),r=e||`/`;n&&(r===n?r=`/`:r.startsWith(`${n}/`)&&(r=r.slice(n.length)));let i=Ac(r).toLowerCase();return i.endsWith(`/index.html`)&&(i=`/`),i===`/`?`chat`:Oc.get(i)??null}function Nc(e){let t=Ac(e);if(t.endsWith(`/index.html`)&&(t=Ac(t.slice(0,-11))),t===`/`)return``;let n=t.split(`/`).filter(Boolean);if(n.length===0)return``;for(let e=0;e<n.length;e++){let t=`/${n.slice(e).join(`/`)}`.toLowerCase();if(Oc.has(t)){let t=n.slice(0,e);return t.length?`/${t.join(`/`)}`:``}}return`/${n.join(`/`)}`}function Pc(e){switch(e){case`onboarding`:return`spark`;case`employees`:return`brain`;case`inbox`:return`inbox`;case`briefing`:return`sun`;case`meetings`:return`penLine`;case`canvas`:return`palette`;case`routing`:return`shuffle`;case`agents`:return`folder`;case`chat`:return`messageSquare`;case`overview`:return`barChart`;case`channels`:return`link`;case`instances`:return`radio`;case`sessions`:return`fileText`;case`usage`:return`barChart`;case`cron`:return`loader`;case`skills`:return`zap`;case`nodes`:return`monitor`;case`config`:return`settings`;case`apiKeys`:return`settings`;case`communications`:return`send`;case`appearance`:return`spark`;case`automation`:return`terminal`;case`infrastructure`:return`globe`;case`aiAgents`:return`brain`;case`debug`:return`bug`;case`logs`:return`scrollText`;default:return`folder`}}function Fc(e){return e===`onboarding`?`Onboarding`:e===`briefing`?`Daily Briefing`:e===`inbox`?`Inbox`:e===`meetings`?`Meetings`:e===`canvas`?`Canvas`:e===`routing`?`Routing`:P(`tabs.${e}`)}function Ic(e){return e===`onboarding`?`Set up Kova without the terminal.`:e===`briefing`?`Schedule Kova's morning digest for Telegram or WhatsApp.`:e===`inbox`?`All conversations across your connected channels.`:e===`meetings`?`Upload or paste transcripts for summaries, action items, and follow-up drafts.`:e===`canvas`?`Real-time agent workspace and visual output.`:e===`routing`?`Choose which Kova employee handles Telegram and WhatsApp.`:P(`subtitles.${e}`)}var Lc=new Set([`claw`,`knot`,`dash`]),Rc=new Set([`system`,`light`,`dark`]),zc={defaultTheme:{theme:`claw`,mode:`dark`},docsTheme:{theme:`claw`,mode:`light`},lightTheme:{theme:`knot`,mode:`dark`},landingTheme:{theme:`knot`,mode:`dark`},newTheme:{theme:`knot`,mode:`dark`},dark:{theme:`claw`,mode:`dark`},light:{theme:`claw`,mode:`light`},openknot:{theme:`knot`,mode:`dark`},fieldmanual:{theme:`dash`,mode:`dark`},clawdash:{theme:`dash`,mode:`light`},system:{theme:`claw`,mode:`system`}};function Bc(){return typeof globalThis.matchMedia==`function`?globalThis.matchMedia(`(prefers-color-scheme: light)`).matches:!1}function Vc(e,t){let n=typeof e==`string`?e:``,r=typeof t==`string`?t:``;return{theme:Lc.has(n)?n:zc[n]?.theme??`claw`,mode:Rc.has(r)?r:zc[n]?.mode??`system`}}function Hc(e){return e===`system`?Bc()?`light`:`dark`:e}function Uc(e,t){let n=Hc(t);return e===`claw`?n===`light`?`light`:`dark`:e===`knot`?n===`light`?`openknot-light`:`openknot`:n===`light`?`dash-light`:`dash`}var Wc=`openclaw.control.settings.v1:`,Gc=`openclaw.control.settings.v1`,Kc=`openclaw.control.token.v1`,qc=`openclaw.control.token.v1:`,Jc=10;function Yc(e){return`${Wc}${nl(e)}`}var Xc=[0,25,50,75,100];function Zc(e){let t=Xc[0],n=Math.abs(e-t);for(let r of Xc){let i=Math.abs(e-r);i<n&&(t=r,n=i)}return t}function Qc(){return typeof document>`u`?!1:!!document.querySelector(`script[src*="/@vite/client"]`)}function $c(e,t){return`${e.includes(`:`)?`[${e}]`:e}:${t}`}function el(){let e=location.protocol===`https:`?`wss`:`ws`,t=typeof window<`u`&&typeof window.__OPENCLAW_CONTROL_UI_BASE_PATH__==`string`&&window.__OPENCLAW_CONTROL_UI_BASE_PATH__.trim(),n=t?kc(t):Nc(location.pathname),r=`${e}://${location.host}${n}`;return Qc()?{pageUrl:r,effectiveUrl:`${e}://${$c(location.hostname,`18789`)}`}:{pageUrl:r,effectiveUrl:r}}function tl(){return h()}function nl(e){let t=e.trim();if(!t)return`default`;try{let e=typeof location<`u`?`${location.protocol}//${location.host}${location.pathname||`/`}`:void 0,n=e?new URL(t,e):new URL(t),r=n.pathname===`/`?``:n.pathname.replace(/\/+$/,``)||n.pathname;return`${n.protocol}//${n.host}${r}`}catch{return t}}function rl(e){return`${qc}${nl(e)}`}function il(e,t,n){let r=nl(e),i=t.sessionsByGateway?.[r];if(i&&typeof i.sessionKey==`string`&&i.sessionKey.trim()&&typeof i.lastActiveSessionKey==`string`&&i.lastActiveSessionKey.trim())return{sessionKey:i.sessionKey.trim(),lastActiveSessionKey:i.lastActiveSessionKey.trim()};let a=typeof t.sessionKey==`string`&&t.sessionKey.trim()?t.sessionKey.trim():n.sessionKey;return{sessionKey:a,lastActiveSessionKey:typeof t.lastActiveSessionKey==`string`&&t.lastActiveSessionKey.trim()?t.lastActiveSessionKey.trim():a||n.lastActiveSessionKey}}function al(e){try{let t=tl();return t?(t.removeItem(Kc),(t.getItem(rl(e))??``).trim()):``}catch{return``}}function ol(e,t){try{let n=tl();if(!n)return;n.removeItem(Kc);let r=rl(e),i=t.trim();if(i){n.setItem(r,i);return}n.removeItem(r)}catch{}}function sl(){let{pageUrl:e,effectiveUrl:t}=el(),n=g(),r={gatewayUrl:t,token:al(t),sessionKey:`main`,lastActiveSessionKey:`main`,theme:`claw`,themeMode:`system`,chatFocusMode:!1,chatShowThinking:!0,chatShowToolCalls:!0,splitRatio:.6,navCollapsed:!1,navWidth:220,navGroupsCollapsed:{},borderRadius:50,voiceEnabledByAgent:{}};try{let i=Yc(r.gatewayUrl),a=n?.getItem(i)??n?.getItem(Wc+`default`)??n?.getItem(Gc);if(!a)return r;let o=JSON.parse(a),s=typeof o.gatewayUrl==`string`&&o.gatewayUrl.trim()?o.gatewayUrl.trim():r.gatewayUrl,c=s===e?t:s,l=il(c,o,r),{theme:u,mode:d}=Vc(o.theme,o.themeMode),f={gatewayUrl:c,token:al(c),sessionKey:l.sessionKey,lastActiveSessionKey:l.lastActiveSessionKey,theme:u,themeMode:d,chatFocusMode:typeof o.chatFocusMode==`boolean`?o.chatFocusMode:r.chatFocusMode,chatShowThinking:typeof o.chatShowThinking==`boolean`?o.chatShowThinking:r.chatShowThinking,chatShowToolCalls:typeof o.chatShowToolCalls==`boolean`?o.chatShowToolCalls:r.chatShowToolCalls,splitRatio:typeof o.splitRatio==`number`&&o.splitRatio>=.4&&o.splitRatio<=.7?o.splitRatio:r.splitRatio,navCollapsed:typeof o.navCollapsed==`boolean`?o.navCollapsed:r.navCollapsed,navWidth:typeof o.navWidth==`number`&&o.navWidth>=200&&o.navWidth<=400?o.navWidth:r.navWidth,navGroupsCollapsed:typeof o.navGroupsCollapsed==`object`&&o.navGroupsCollapsed!==null?o.navGroupsCollapsed:r.navGroupsCollapsed,borderRadius:typeof o.borderRadius==`number`&&o.borderRadius>=0&&o.borderRadius<=100?Zc(o.borderRadius):r.borderRadius,voiceEnabledByAgent:typeof o.voiceEnabledByAgent==`object`&&o.voiceEnabledByAgent!==null?Object.fromEntries(Object.entries(o.voiceEnabledByAgent).filter(([e,t])=>e.trim()&&typeof t==`boolean`)):r.voiceEnabledByAgent,locale:me(o.locale)?o.locale:void 0};return`token`in o&&ll(f),f}catch{return r}}function cl(e){ll(e)}function ll(e){ol(e.gatewayUrl,e.token);let t=g(),n=nl(e.gatewayUrl),r=Yc(e.gatewayUrl),i={};try{let e=t?.getItem(r)??t?.getItem(Wc+`default`)??t?.getItem(`openclaw.control.settings.v1`);if(e){let t=JSON.parse(e);t.sessionsByGateway&&typeof t.sessionsByGateway==`object`&&(i=t.sessionsByGateway)}}catch{}let a=Object.fromEntries([...Object.entries(i).filter(([e])=>e!==n),[n,{sessionKey:e.sessionKey,lastActiveSessionKey:e.lastActiveSessionKey}]].slice(-Jc)),o={gatewayUrl:e.gatewayUrl,theme:e.theme,themeMode:e.themeMode,chatFocusMode:e.chatFocusMode,chatShowThinking:e.chatShowThinking,chatShowToolCalls:e.chatShowToolCalls,splitRatio:e.splitRatio,navCollapsed:e.navCollapsed,navWidth:e.navWidth,navGroupsCollapsed:e.navGroupsCollapsed,borderRadius:e.borderRadius,voiceEnabledByAgent:e.voiceEnabledByAgent,sessionsByGateway:a,...e.locale?{locale:e.locale}:{}},s=JSON.stringify(o);try{t?.setItem(r,s),t?.setItem(Gc,s)}catch{}}var ul=e=>{e.classList.remove(`theme-transition`),e.style.removeProperty(`--theme-switch-x`),e.style.removeProperty(`--theme-switch-y`)},dl=({nextTheme:e,applyTheme:t,currentTheme:n})=>{if(n===e){t();return}let r=globalThis.document??null;if(!r){t();return}let i=r.documentElement;t(),ul(i)},{I:fl}=o,pl=e=>e,ml=e=>e.strings===void 0,hl=()=>document.createComment(``),gl=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new fl(r.insertBefore(hl(),i),r.insertBefore(hl(),i),e,e.options);else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=pl(e).nextSibling;pl(r).insertBefore(e,i),e=t}}}return n},_l=(e,t,n=e)=>(e._$AI(t,n),e),vl={},yl=(e,t=vl)=>e._$AH=t,bl=e=>e._$AH,xl=e=>{e._$AR(),e._$AA.remove()},Sl={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Cl=e=>(...t)=>({_$litDirective$:e,values:t}),wl=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},Tl=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),Tl(e,t);return!0},El=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Dl=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Al(t)}};function Ol(e){this._$AN===void 0?this._$AM=e:(El(this),this._$AM=e,Dl(this))}function kl(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)Tl(r[e],!1),El(r[e]);else r!=null&&(Tl(r,!1),El(r));else Tl(this,e)}var Al=e=>{e.type==Sl.CHILD&&(e._$AP??=kl,e._$AQ??=Ol)},jl=class extends wl{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Dl(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Tl(this,e),El(this))}setValue(e){if(ml(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Ml=new WeakMap,Nl=Cl(class extends jl{render(e){return u}update(e,[t]){let n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),u}rt(e){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=Ml.get(t);n===void 0&&(n=new WeakMap,Ml.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?Ml.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Pl=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},Fl=Cl(class extends wl{constructor(e){if(super(e),e.type!==Sl.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=bl(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],l,u,d=0,p=i.length-1,m=0,h=a.length-1;for(;d<=p&&m<=h;)if(i[d]===null)d++;else if(i[p]===null)p--;else if(s[d]===o[m])c[m]=_l(i[d],a[m]),d++,m++;else if(s[p]===o[h])c[h]=_l(i[p],a[h]),p--,h--;else if(s[d]===o[h])c[h]=_l(i[d],a[h]),gl(e,c[h+1],i[d]),d++,h--;else if(s[p]===o[m])c[m]=_l(i[p],a[m]),gl(e,i[d],i[p]),p--,m++;else if(l===void 0&&(l=Pl(o,m,h),u=Pl(s,d,p)),l.has(s[d]))if(l.has(s[p])){let t=u.get(o[m]),n=t===void 0?null:i[t];if(n===null){let t=gl(e,i[d]);_l(t,a[m]),c[m]=t}else c[m]=_l(n,a[m]),gl(e,i[d],n),i[t]=null;m++}else xl(i[p]),p--;else xl(i[d]),d++;for(;m<=h;){let t=gl(e,c[h+1]);_l(t,a[m]),c[m++]=t}for(;d<=p;){let e=i[d++];e!==null&&xl(e)}return this.ut=o,yl(e,c),f}}),Il=`image/*`;function Ll(e){return typeof e==`string`&&e.startsWith(`image/`)}var Rl=`openclaw:deleted:`,zl=class{constructor(e){this._keys=new Set,this.key=Rl+e,this.load()}has(e){return this._keys.has(e)}delete(e){this._keys.add(e),this.save()}restore(e){this._keys.delete(e),this.save()}clear(){this._keys.clear(),this.save()}load(){try{let e=g()?.getItem(this.key);if(!e)return;let t=JSON.parse(e);Array.isArray(t)&&(this._keys=new Set(t.filter(e=>typeof e==`string`)))}catch{}}save(){try{g()?.setItem(this.key,JSON.stringify([...this._keys]))}catch{}}};Object.freeze({status:`aborted`});function z(e,t,n){function r(n,r){if(n._zod||Object.defineProperty(n,`_zod`,{value:{def:r,constr:o,traits:new Set},enumerable:!1}),n._zod.traits.has(e))return;n._zod.traits.add(e),t(n,r);let i=o.prototype,a=Object.keys(i);for(let e=0;e<a.length;e++){let t=a[e];t in n||(n[t]=i[t].bind(n))}}let i=n?.Parent??Object;class a extends i{}Object.defineProperty(a,`name`,{value:e});function o(e){var t;let i=n?.Parent?new a:this;r(i,e),(t=i._zod).deferred??(t.deferred=[]);for(let e of i._zod.deferred)e();return i}return Object.defineProperty(o,`init`,{value:r}),Object.defineProperty(o,Symbol.hasInstance,{value:t=>n?.Parent&&t instanceof n.Parent?!0:t?._zod?.traits?.has(e)}),Object.defineProperty(o,`name`,{value:e}),o}var Bl=class extends Error{constructor(){super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`)}},Vl=class extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name=`ZodEncodeError`}},Hl={};function Ul(e){return e&&Object.assign(Hl,e),Hl}function Wl(e,t){return typeof t==`bigint`?t.toString():t}function Gl(e){return e==null}function Kl(e){let t=e.startsWith(`^`)?1:0,n=e.endsWith(`$`)?e.length-1:e.length;return e.slice(t,n)}var ql=Symbol(`evaluating`);function B(e,t,n){let r;Object.defineProperty(e,t,{get(){if(r!==ql)return r===void 0&&(r=ql,r=n()),r},set(n){Object.defineProperty(e,t,{value:n})},configurable:!0})}function Jl(...e){let t={};for(let n of e)Object.assign(t,Object.getOwnPropertyDescriptors(n));return Object.defineProperties({},t)}function Yl(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,``).replace(/[\s_-]+/g,`-`).replace(/^-+|-+$/g,``)}var Xl=`captureStackTrace`in Error?Error.captureStackTrace:(...e)=>{};function Zl(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function Ql(e){if(Zl(e)===!1)return!1;let t=e.constructor;if(t===void 0||typeof t!=`function`)return!0;let n=t.prototype;return!(Zl(n)===!1||Object.prototype.hasOwnProperty.call(n,`isPrototypeOf`)===!1)}function $l(e){return Ql(e)?{...e}:Array.isArray(e)?[...e]:e}function eu(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function tu(e,t,n){let r=new e._zod.constr(t??e._zod.def);return(!t||n?.parent)&&(r._zod.parent=e),r}function V(e){let t=e;if(!t)return{};if(typeof t==`string`)return{error:()=>t};if(t?.message!==void 0){if(t?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");t.error=t.message}return delete t.message,typeof t.error==`string`?{...t,error:()=>t.error}:t}-Number.MAX_VALUE,Number.MAX_VALUE;function nu(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue!==!0)return!0;return!1}function ru(e,t){return t.map(t=>{var n;return(n=t).path??(n.path=[]),t.path.unshift(e),t})}function iu(e){return typeof e==`string`?e:e?.message}function au(e,t,n){let r={...e,path:e.path??[]};return e.message||(r.message=iu(e.inst?._zod.def?.error?.(e))??iu(t?.error?.(e))??iu(n.customError?.(e))??iu(n.localeError?.(e))??`Invalid input`),delete r.inst,delete r.continue,t?.reportInput||delete r.input,r}function ou(e){return Array.isArray(e)?`array`:typeof e==`string`?`string`:`unknown`}function su(...e){let[t,n,r]=e;return typeof t==`string`?{message:t,code:`custom`,input:n,inst:r}:{...t}}var cu=(e,t)=>{e.name=`$ZodError`,Object.defineProperty(e,`_zod`,{value:e._zod,enumerable:!1}),Object.defineProperty(e,`issues`,{value:t,enumerable:!1}),e.message=JSON.stringify(t,Wl,2),Object.defineProperty(e,`toString`,{value:()=>e.message,enumerable:!1})},lu=z(`$ZodError`,cu),uu=z(`$ZodError`,cu,{Parent:Error});function du(e,t=e=>e.message){let n={},r=[];for(let i of e.issues)i.path.length>0?(n[i.path[0]]=n[i.path[0]]||[],n[i.path[0]].push(t(i))):r.push(t(i));return{formErrors:r,fieldErrors:n}}function fu(e,t=e=>e.message){let n={_errors:[]},r=e=>{for(let i of e.issues)if(i.code===`invalid_union`&&i.errors.length)i.errors.map(e=>r({issues:e}));else if(i.code===`invalid_key`)r({issues:i.issues});else if(i.code===`invalid_element`)r({issues:i.issues});else if(i.path.length===0)n._errors.push(t(i));else{let e=n,r=0;for(;r<i.path.length;){let n=i.path[r];r===i.path.length-1?(e[n]=e[n]||{_errors:[]},e[n]._errors.push(t(i))):e[n]=e[n]||{_errors:[]},e=e[n],r++}}};return r(e),n}var pu=e=>(t,n,r,i)=>{let a=r?Object.assign(r,{async:!1}):{async:!1},o=t._zod.run({value:n,issues:[]},a);if(o instanceof Promise)throw new Bl;if(o.issues.length){let t=new(i?.Err??e)(o.issues.map(e=>au(e,a,Ul())));throw Xl(t,i?.callee),t}return o.value},mu=e=>async(t,n,r,i)=>{let a=r?Object.assign(r,{async:!0}):{async:!0},o=t._zod.run({value:n,issues:[]},a);if(o instanceof Promise&&(o=await o),o.issues.length){let t=new(i?.Err??e)(o.issues.map(e=>au(e,a,Ul())));throw Xl(t,i?.callee),t}return o.value},hu=e=>(t,n,r)=>{let i=r?{...r,async:!1}:{async:!1},a=t._zod.run({value:n,issues:[]},i);if(a instanceof Promise)throw new Bl;return a.issues.length?{success:!1,error:new(e??lu)(a.issues.map(e=>au(e,i,Ul())))}:{success:!0,data:a.value}},gu=hu(uu),_u=e=>async(t,n,r)=>{let i=r?Object.assign(r,{async:!0}):{async:!0},a=t._zod.run({value:n,issues:[]},i);return a instanceof Promise&&(a=await a),a.issues.length?{success:!1,error:new e(a.issues.map(e=>au(e,i,Ul())))}:{success:!0,data:a.value}},vu=_u(uu),yu=e=>(t,n,r)=>{let i=r?Object.assign(r,{direction:`backward`}):{direction:`backward`};return pu(e)(t,n,i)},bu=e=>(t,n,r)=>pu(e)(t,n,r),xu=e=>async(t,n,r)=>{let i=r?Object.assign(r,{direction:`backward`}):{direction:`backward`};return mu(e)(t,n,i)},Su=e=>async(t,n,r)=>mu(e)(t,n,r),Cu=e=>(t,n,r)=>{let i=r?Object.assign(r,{direction:`backward`}):{direction:`backward`};return hu(e)(t,n,i)},wu=e=>(t,n,r)=>hu(e)(t,n,r),Tu=e=>async(t,n,r)=>{let i=r?Object.assign(r,{direction:`backward`}):{direction:`backward`};return _u(e)(t,n,i)},Eu=e=>async(t,n,r)=>_u(e)(t,n,r),Du=/^[cC][^\s-]{8,}$/,Ou=/^[0-9a-z]+$/,ku=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,Au=/^[0-9a-vA-V]{20}$/,ju=/^[A-Za-z0-9]{27}$/,Mu=/^[a-zA-Z0-9_-]{21}$/,Nu=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Pu=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Fu=e=>e?RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,Iu=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,Lu=`^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;function Ru(){return new RegExp(Lu,`u`)}var zu=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Bu=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,Vu=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,Hu=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Uu=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,Wu=/^[A-Za-z0-9_-]*$/,Gu=/^\+[1-9]\d{6,14}$/,Ku=`(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`,qu=RegExp(`^${Ku}$`);function Ju(e){let t=`(?:[01]\\d|2[0-3]):[0-5]\\d`;return typeof e.precision==`number`?e.precision===-1?`${t}`:e.precision===0?`${t}:[0-5]\\d`:`${t}:[0-5]\\d\\.\\d{${e.precision}}`:`${t}(?::[0-5]\\d(?:\\.\\d+)?)?`}function Yu(e){return RegExp(`^${Ju(e)}$`)}function Xu(e){let t=Ju({precision:e.precision}),n=[`Z`];e.local&&n.push(``),e.offset&&n.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);let r=`${t}(?:${n.join(`|`)})`;return RegExp(`^${Ku}T(?:${r})$`)}var Zu=e=>{let t=e?`[\\s\\S]{${e?.minimum??0},${e?.maximum??``}}`:`[\\s\\S]*`;return RegExp(`^${t}$`)},Qu=/^-?\d+(?:\.\d+)?$/,$u=/^[^A-Z]*$/,ed=/^[^a-z]*$/,td=z(`$ZodCheck`,(e,t)=>{var n;e._zod??={},e._zod.def=t,(n=e._zod).onattach??(n.onattach=[])}),nd=z(`$ZodCheckMaxLength`,(e,t)=>{var n;td.init(e,t),(n=e._zod.def).when??(n.when=e=>{let t=e.value;return!Gl(t)&&t.length!==void 0}),e._zod.onattach.push(e=>{let n=e._zod.bag.maximum??1/0;t.maximum<n&&(e._zod.bag.maximum=t.maximum)}),e._zod.check=n=>{let r=n.value;if(r.length<=t.maximum)return;let i=ou(r);n.issues.push({origin:i,code:`too_big`,maximum:t.maximum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),rd=z(`$ZodCheckMinLength`,(e,t)=>{var n;td.init(e,t),(n=e._zod.def).when??(n.when=e=>{let t=e.value;return!Gl(t)&&t.length!==void 0}),e._zod.onattach.push(e=>{let n=e._zod.bag.minimum??-1/0;t.minimum>n&&(e._zod.bag.minimum=t.minimum)}),e._zod.check=n=>{let r=n.value;if(r.length>=t.minimum)return;let i=ou(r);n.issues.push({origin:i,code:`too_small`,minimum:t.minimum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),id=z(`$ZodCheckLengthEquals`,(e,t)=>{var n;td.init(e,t),(n=e._zod.def).when??(n.when=e=>{let t=e.value;return!Gl(t)&&t.length!==void 0}),e._zod.onattach.push(e=>{let n=e._zod.bag;n.minimum=t.length,n.maximum=t.length,n.length=t.length}),e._zod.check=n=>{let r=n.value,i=r.length;if(i===t.length)return;let a=ou(r),o=i>t.length;n.issues.push({origin:a,...o?{code:`too_big`,maximum:t.length}:{code:`too_small`,minimum:t.length},inclusive:!0,exact:!0,input:n.value,inst:e,continue:!t.abort})}}),ad=z(`$ZodCheckStringFormat`,(e,t)=>{var n,r;td.init(e,t),e._zod.onattach.push(e=>{let n=e._zod.bag;n.format=t.format,t.pattern&&(n.patterns??=new Set,n.patterns.add(t.pattern))}),t.pattern?(n=e._zod).check??(n.check=n=>{t.pattern.lastIndex=0,!t.pattern.test(n.value)&&n.issues.push({origin:`string`,code:`invalid_format`,format:t.format,input:n.value,...t.pattern?{pattern:t.pattern.toString()}:{},inst:e,continue:!t.abort})}):(r=e._zod).check??(r.check=()=>{})}),od=z(`$ZodCheckRegex`,(e,t)=>{ad.init(e,t),e._zod.check=n=>{t.pattern.lastIndex=0,!t.pattern.test(n.value)&&n.issues.push({origin:`string`,code:`invalid_format`,format:`regex`,input:n.value,pattern:t.pattern.toString(),inst:e,continue:!t.abort})}}),sd=z(`$ZodCheckLowerCase`,(e,t)=>{t.pattern??=$u,ad.init(e,t)}),cd=z(`$ZodCheckUpperCase`,(e,t)=>{t.pattern??=ed,ad.init(e,t)}),ld=z(`$ZodCheckIncludes`,(e,t)=>{td.init(e,t);let n=eu(t.includes),r=new RegExp(typeof t.position==`number`?`^.{${t.position}}${n}`:n);t.pattern=r,e._zod.onattach.push(e=>{let t=e._zod.bag;t.patterns??=new Set,t.patterns.add(r)}),e._zod.check=n=>{n.value.includes(t.includes,t.position)||n.issues.push({origin:`string`,code:`invalid_format`,format:`includes`,includes:t.includes,input:n.value,inst:e,continue:!t.abort})}}),ud=z(`$ZodCheckStartsWith`,(e,t)=>{td.init(e,t);let n=RegExp(`^${eu(t.prefix)}.*`);t.pattern??=n,e._zod.onattach.push(e=>{let t=e._zod.bag;t.patterns??=new Set,t.patterns.add(n)}),e._zod.check=n=>{n.value.startsWith(t.prefix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`starts_with`,prefix:t.prefix,input:n.value,inst:e,continue:!t.abort})}}),dd=z(`$ZodCheckEndsWith`,(e,t)=>{td.init(e,t);let n=RegExp(`.*${eu(t.suffix)}$`);t.pattern??=n,e._zod.onattach.push(e=>{let t=e._zod.bag;t.patterns??=new Set,t.patterns.add(n)}),e._zod.check=n=>{n.value.endsWith(t.suffix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`ends_with`,suffix:t.suffix,input:n.value,inst:e,continue:!t.abort})}}),fd=z(`$ZodCheckOverwrite`,(e,t)=>{td.init(e,t),e._zod.check=e=>{e.value=t.tx(e.value)}}),pd={major:4,minor:3,patch:6},md=z(`$ZodType`,(e,t)=>{var n;e??={},e._zod.def=t,e._zod.bag=e._zod.bag||{},e._zod.version=pd;let r=[...e._zod.def.checks??[]];e._zod.traits.has(`$ZodCheck`)&&r.unshift(e);for(let t of r)for(let n of t._zod.onattach)n(e);if(r.length===0)(n=e._zod).deferred??(n.deferred=[]),e._zod.deferred?.push(()=>{e._zod.run=e._zod.parse});else{let t=(e,t,n)=>{let r=nu(e),i;for(let a of t){if(a._zod.def.when){if(!a._zod.def.when(e))continue}else if(r)continue;let t=e.issues.length,o=a._zod.check(e);if(o instanceof Promise&&n?.async===!1)throw new Bl;if(i||o instanceof Promise)i=(i??Promise.resolve()).then(async()=>{await o,e.issues.length!==t&&(r||=nu(e,t))});else{if(e.issues.length===t)continue;r||=nu(e,t)}}return i?i.then(()=>e):e},n=(n,i,a)=>{if(nu(n))return n.aborted=!0,n;let o=t(i,r,a);if(o instanceof Promise){if(a.async===!1)throw new Bl;return o.then(t=>e._zod.parse(t,a))}return e._zod.parse(o,a)};e._zod.run=(i,a)=>{if(a.skipChecks)return e._zod.parse(i,a);if(a.direction===`backward`){let t=e._zod.parse({value:i.value,issues:[]},{...a,skipChecks:!0});return t instanceof Promise?t.then(e=>n(e,i,a)):n(t,i,a)}let o=e._zod.parse(i,a);if(o instanceof Promise){if(a.async===!1)throw new Bl;return o.then(e=>t(e,r,a))}return t(o,r,a)}}B(e,`~standard`,()=>({validate:t=>{try{let n=gu(e,t);return n.success?{value:n.data}:{issues:n.error?.issues}}catch{return vu(e,t).then(e=>e.success?{value:e.data}:{issues:e.error?.issues})}},vendor:`zod`,version:1}))}),hd=z(`$ZodString`,(e,t)=>{md.init(e,t),e._zod.pattern=[...e?._zod.bag?.patterns??[]].pop()??Zu(e._zod.bag),e._zod.parse=(n,r)=>{if(t.coerce)try{n.value=String(n.value)}catch{}return typeof n.value==`string`||n.issues.push({expected:`string`,code:`invalid_type`,input:n.value,inst:e}),n}}),gd=z(`$ZodStringFormat`,(e,t)=>{ad.init(e,t),hd.init(e,t)}),_d=z(`$ZodGUID`,(e,t)=>{t.pattern??=Pu,gd.init(e,t)}),vd=z(`$ZodUUID`,(e,t)=>{if(t.version){let e={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[t.version];if(e===void 0)throw Error(`Invalid UUID version: "${t.version}"`);t.pattern??=Fu(e)}else t.pattern??=Fu();gd.init(e,t)}),yd=z(`$ZodEmail`,(e,t)=>{t.pattern??=Iu,gd.init(e,t)}),bd=z(`$ZodURL`,(e,t)=>{gd.init(e,t),e._zod.check=n=>{try{let r=n.value.trim(),i=new URL(r);t.hostname&&(t.hostname.lastIndex=0,t.hostname.test(i.hostname)||n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid hostname`,pattern:t.hostname.source,input:n.value,inst:e,continue:!t.abort})),t.protocol&&(t.protocol.lastIndex=0,t.protocol.test(i.protocol.endsWith(`:`)?i.protocol.slice(0,-1):i.protocol)||n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid protocol`,pattern:t.protocol.source,input:n.value,inst:e,continue:!t.abort})),t.normalize?n.value=i.href:n.value=r;return}catch{n.issues.push({code:`invalid_format`,format:`url`,input:n.value,inst:e,continue:!t.abort})}}}),xd=z(`$ZodEmoji`,(e,t)=>{t.pattern??=Ru(),gd.init(e,t)}),Sd=z(`$ZodNanoID`,(e,t)=>{t.pattern??=Mu,gd.init(e,t)}),Cd=z(`$ZodCUID`,(e,t)=>{t.pattern??=Du,gd.init(e,t)}),wd=z(`$ZodCUID2`,(e,t)=>{t.pattern??=Ou,gd.init(e,t)}),Td=z(`$ZodULID`,(e,t)=>{t.pattern??=ku,gd.init(e,t)}),Ed=z(`$ZodXID`,(e,t)=>{t.pattern??=Au,gd.init(e,t)}),Dd=z(`$ZodKSUID`,(e,t)=>{t.pattern??=ju,gd.init(e,t)}),Od=z(`$ZodISODateTime`,(e,t)=>{t.pattern??=Xu(t),gd.init(e,t)}),kd=z(`$ZodISODate`,(e,t)=>{t.pattern??=qu,gd.init(e,t)}),Ad=z(`$ZodISOTime`,(e,t)=>{t.pattern??=Yu(t),gd.init(e,t)}),jd=z(`$ZodISODuration`,(e,t)=>{t.pattern??=Nu,gd.init(e,t)}),Md=z(`$ZodIPv4`,(e,t)=>{t.pattern??=zu,gd.init(e,t),e._zod.bag.format=`ipv4`}),Nd=z(`$ZodIPv6`,(e,t)=>{t.pattern??=Bu,gd.init(e,t),e._zod.bag.format=`ipv6`,e._zod.check=n=>{try{new URL(`http://[${n.value}]`)}catch{n.issues.push({code:`invalid_format`,format:`ipv6`,input:n.value,inst:e,continue:!t.abort})}}}),Pd=z(`$ZodCIDRv4`,(e,t)=>{t.pattern??=Vu,gd.init(e,t)}),Fd=z(`$ZodCIDRv6`,(e,t)=>{t.pattern??=Hu,gd.init(e,t),e._zod.check=n=>{let r=n.value.split(`/`);try{if(r.length!==2)throw Error();let[e,t]=r;if(!t)throw Error();let n=Number(t);if(`${n}`!==t||n<0||n>128)throw Error();new URL(`http://[${e}]`)}catch{n.issues.push({code:`invalid_format`,format:`cidrv6`,input:n.value,inst:e,continue:!t.abort})}}});function Id(e){if(e===``)return!0;if(e.length%4!=0)return!1;try{return atob(e),!0}catch{return!1}}var Ld=z(`$ZodBase64`,(e,t)=>{t.pattern??=Uu,gd.init(e,t),e._zod.bag.contentEncoding=`base64`,e._zod.check=n=>{Id(n.value)||n.issues.push({code:`invalid_format`,format:`base64`,input:n.value,inst:e,continue:!t.abort})}});function Rd(e){if(!Wu.test(e))return!1;let t=e.replace(/[-_]/g,e=>e===`-`?`+`:`/`);return Id(t.padEnd(Math.ceil(t.length/4)*4,`=`))}var zd=z(`$ZodBase64URL`,(e,t)=>{t.pattern??=Wu,gd.init(e,t),e._zod.bag.contentEncoding=`base64url`,e._zod.check=n=>{Rd(n.value)||n.issues.push({code:`invalid_format`,format:`base64url`,input:n.value,inst:e,continue:!t.abort})}}),Bd=z(`$ZodE164`,(e,t)=>{t.pattern??=Gu,gd.init(e,t)});function Vd(e,t=null){try{let n=e.split(`.`);if(n.length!==3)return!1;let[r]=n;if(!r)return!1;let i=JSON.parse(atob(r));return!(`typ`in i&&i?.typ!==`JWT`||!i.alg||t&&(!(`alg`in i)||i.alg!==t))}catch{return!1}}var Hd=z(`$ZodJWT`,(e,t)=>{gd.init(e,t),e._zod.check=n=>{Vd(n.value,t.alg)||n.issues.push({code:`invalid_format`,format:`jwt`,input:n.value,inst:e,continue:!t.abort})}}),Ud=z(`$ZodUnknown`,(e,t)=>{md.init(e,t),e._zod.parse=e=>e});function Wd(e,t,n){e.issues.length&&t.issues.push(...ru(n,e.issues)),t.value[n]=e.value}var Gd=z(`$ZodArray`,(e,t)=>{md.init(e,t),e._zod.parse=(n,r)=>{let i=n.value;if(!Array.isArray(i))return n.issues.push({expected:`array`,code:`invalid_type`,input:i,inst:e}),n;n.value=Array(i.length);let a=[];for(let e=0;e<i.length;e++){let o=i[e],s=t.element._zod.run({value:o,issues:[]},r);s instanceof Promise?a.push(s.then(t=>Wd(t,n,e))):Wd(s,n,e)}return a.length?Promise.all(a).then(()=>n):n}});function Kd(e,t,n,r){for(let n of e)if(n.issues.length===0)return t.value=n.value,t;let i=e.filter(e=>!nu(e));return i.length===1?(t.value=i[0].value,i[0]):(t.issues.push({code:`invalid_union`,input:t.value,inst:n,errors:e.map(e=>e.issues.map(e=>au(e,r,Ul())))}),t)}var qd=z(`$ZodUnion`,(e,t)=>{md.init(e,t),B(e._zod,`optin`,()=>t.options.some(e=>e._zod.optin===`optional`)?`optional`:void 0),B(e._zod,`optout`,()=>t.options.some(e=>e._zod.optout===`optional`)?`optional`:void 0),B(e._zod,`values`,()=>{if(t.options.every(e=>e._zod.values))return new Set(t.options.flatMap(e=>Array.from(e._zod.values)))}),B(e._zod,`pattern`,()=>{if(t.options.every(e=>e._zod.pattern)){let e=t.options.map(e=>e._zod.pattern);return RegExp(`^(${e.map(e=>Kl(e.source)).join(`|`)})$`)}});let n=t.options.length===1,r=t.options[0]._zod.run;e._zod.parse=(i,a)=>{if(n)return r(i,a);let o=!1,s=[];for(let e of t.options){let t=e._zod.run({value:i.value,issues:[]},a);if(t instanceof Promise)s.push(t),o=!0;else{if(t.issues.length===0)return t;s.push(t)}}return o?Promise.all(s).then(t=>Kd(t,i,e,a)):Kd(s,i,e,a)}}),Jd=z(`$ZodIntersection`,(e,t)=>{md.init(e,t),e._zod.parse=(e,n)=>{let r=e.value,i=t.left._zod.run({value:r,issues:[]},n),a=t.right._zod.run({value:r,issues:[]},n);return i instanceof Promise||a instanceof Promise?Promise.all([i,a]).then(([t,n])=>Xd(e,t,n)):Xd(e,i,a)}});function Yd(e,t){if(e===t||e instanceof Date&&t instanceof Date&&+e==+t)return{valid:!0,data:e};if(Ql(e)&&Ql(t)){let n=Object.keys(t),r=Object.keys(e).filter(e=>n.indexOf(e)!==-1),i={...e,...t};for(let n of r){let r=Yd(e[n],t[n]);if(!r.valid)return{valid:!1,mergeErrorPath:[n,...r.mergeErrorPath]};i[n]=r.data}return{valid:!0,data:i}}if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return{valid:!1,mergeErrorPath:[]};let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r],o=Yd(i,a);if(!o.valid)return{valid:!1,mergeErrorPath:[r,...o.mergeErrorPath]};n.push(o.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function Xd(e,t,n){let r=new Map,i;for(let n of t.issues)if(n.code===`unrecognized_keys`){i??=n;for(let e of n.keys)r.has(e)||r.set(e,{}),r.get(e).l=!0}else e.issues.push(n);for(let t of n.issues)if(t.code===`unrecognized_keys`)for(let e of t.keys)r.has(e)||r.set(e,{}),r.get(e).r=!0;else e.issues.push(t);let a=[...r].filter(([,e])=>e.l&&e.r).map(([e])=>e);if(a.length&&i&&e.issues.push({...i,keys:a}),nu(e))return e;let o=Yd(t.value,n.value);if(!o.valid)throw Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);return e.value=o.data,e}var Zd=z(`$ZodRecord`,(e,t)=>{md.init(e,t),e._zod.parse=(n,r)=>{let i=n.value;if(!Ql(i))return n.issues.push({expected:`record`,code:`invalid_type`,input:i,inst:e}),n;let a=[],o=t.keyType._zod.values;if(o){n.value={};let s=new Set;for(let e of o)if(typeof e==`string`||typeof e==`number`||typeof e==`symbol`){s.add(typeof e==`number`?e.toString():e);let o=t.valueType._zod.run({value:i[e],issues:[]},r);o instanceof Promise?a.push(o.then(t=>{t.issues.length&&n.issues.push(...ru(e,t.issues)),n.value[e]=t.value})):(o.issues.length&&n.issues.push(...ru(e,o.issues)),n.value[e]=o.value)}let c;for(let e in i)s.has(e)||(c??=[],c.push(e));c&&c.length>0&&n.issues.push({code:`unrecognized_keys`,input:i,inst:e,keys:c})}else{n.value={};for(let o of Reflect.ownKeys(i)){if(o===`__proto__`)continue;let s=t.keyType._zod.run({value:o,issues:[]},r);if(s instanceof Promise)throw Error(`Async schemas not supported in object keys currently`);if(typeof o==`string`&&Qu.test(o)&&s.issues.length){let e=t.keyType._zod.run({value:Number(o),issues:[]},r);if(e instanceof Promise)throw Error(`Async schemas not supported in object keys currently`);e.issues.length===0&&(s=e)}if(s.issues.length){t.mode===`loose`?n.value[o]=i[o]:n.issues.push({code:`invalid_key`,origin:`record`,issues:s.issues.map(e=>au(e,r,Ul())),input:o,path:[o],inst:e});continue}let c=t.valueType._zod.run({value:i[o],issues:[]},r);c instanceof Promise?a.push(c.then(e=>{e.issues.length&&n.issues.push(...ru(o,e.issues)),n.value[s.value]=e.value})):(c.issues.length&&n.issues.push(...ru(o,c.issues)),n.value[s.value]=c.value)}}return a.length?Promise.all(a).then(()=>n):n}}),Qd=z(`$ZodTransform`,(e,t)=>{md.init(e,t),e._zod.parse=(n,r)=>{if(r.direction===`backward`)throw new Vl(e.constructor.name);let i=t.transform(n.value,n);if(r.async)return(i instanceof Promise?i:Promise.resolve(i)).then(e=>(n.value=e,n));if(i instanceof Promise)throw new Bl;return n.value=i,n}});function $d(e,t){return e.issues.length&&t===void 0?{issues:[],value:void 0}:e}var ef=z(`$ZodOptional`,(e,t)=>{md.init(e,t),e._zod.optin=`optional`,e._zod.optout=`optional`,B(e._zod,`values`,()=>t.innerType._zod.values?new Set([...t.innerType._zod.values,void 0]):void 0),B(e._zod,`pattern`,()=>{let e=t.innerType._zod.pattern;return e?RegExp(`^(${Kl(e.source)})?$`):void 0}),e._zod.parse=(e,n)=>{if(t.innerType._zod.optin===`optional`){let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(t=>$d(t,e.value)):$d(r,e.value)}return e.value===void 0?e:t.innerType._zod.run(e,n)}}),tf=z(`$ZodExactOptional`,(e,t)=>{ef.init(e,t),B(e._zod,`values`,()=>t.innerType._zod.values),B(e._zod,`pattern`,()=>t.innerType._zod.pattern),e._zod.parse=(e,n)=>t.innerType._zod.run(e,n)}),nf=z(`$ZodNullable`,(e,t)=>{md.init(e,t),B(e._zod,`optin`,()=>t.innerType._zod.optin),B(e._zod,`optout`,()=>t.innerType._zod.optout),B(e._zod,`pattern`,()=>{let e=t.innerType._zod.pattern;return e?RegExp(`^(${Kl(e.source)}|null)$`):void 0}),B(e._zod,`values`,()=>t.innerType._zod.values?new Set([...t.innerType._zod.values,null]):void 0),e._zod.parse=(e,n)=>e.value===null?e:t.innerType._zod.run(e,n)}),rf=z(`$ZodDefault`,(e,t)=>{md.init(e,t),e._zod.optin=`optional`,B(e._zod,`values`,()=>t.innerType._zod.values),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);if(e.value===void 0)return e.value=t.defaultValue,e;let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(e=>af(e,t)):af(r,t)}});function af(e,t){return e.value===void 0&&(e.value=t.defaultValue),e}var of=z(`$ZodPrefault`,(e,t)=>{md.init(e,t),e._zod.optin=`optional`,B(e._zod,`values`,()=>t.innerType._zod.values),e._zod.parse=(e,n)=>(n.direction===`backward`||e.value===void 0&&(e.value=t.defaultValue),t.innerType._zod.run(e,n))}),sf=z(`$ZodNonOptional`,(e,t)=>{md.init(e,t),B(e._zod,`values`,()=>{let e=t.innerType._zod.values;return e?new Set([...e].filter(e=>e!==void 0)):void 0}),e._zod.parse=(n,r)=>{let i=t.innerType._zod.run(n,r);return i instanceof Promise?i.then(t=>cf(t,e)):cf(i,e)}});function cf(e,t){return!e.issues.length&&e.value===void 0&&e.issues.push({code:`invalid_type`,expected:`nonoptional`,input:e.value,inst:t}),e}var lf=z(`$ZodCatch`,(e,t)=>{md.init(e,t),B(e._zod,`optin`,()=>t.innerType._zod.optin),B(e._zod,`optout`,()=>t.innerType._zod.optout),B(e._zod,`values`,()=>t.innerType._zod.values),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(r=>(e.value=r.value,r.issues.length&&(e.value=t.catchValue({...e,error:{issues:r.issues.map(e=>au(e,n,Ul()))},input:e.value}),e.issues=[]),e)):(e.value=r.value,r.issues.length&&(e.value=t.catchValue({...e,error:{issues:r.issues.map(e=>au(e,n,Ul()))},input:e.value}),e.issues=[]),e)}}),uf=z(`$ZodPipe`,(e,t)=>{md.init(e,t),B(e._zod,`values`,()=>t.in._zod.values),B(e._zod,`optin`,()=>t.in._zod.optin),B(e._zod,`optout`,()=>t.out._zod.optout),B(e._zod,`propValues`,()=>t.in._zod.propValues),e._zod.parse=(e,n)=>{if(n.direction===`backward`){let r=t.out._zod.run(e,n);return r instanceof Promise?r.then(e=>df(e,t.in,n)):df(r,t.in,n)}let r=t.in._zod.run(e,n);return r instanceof Promise?r.then(e=>df(e,t.out,n)):df(r,t.out,n)}});function df(e,t,n){return e.issues.length?(e.aborted=!0,e):t._zod.run({value:e.value,issues:e.issues},n)}var ff=z(`$ZodReadonly`,(e,t)=>{md.init(e,t),B(e._zod,`propValues`,()=>t.innerType._zod.propValues),B(e._zod,`values`,()=>t.innerType._zod.values),B(e._zod,`optin`,()=>t.innerType?._zod?.optin),B(e._zod,`optout`,()=>t.innerType?._zod?.optout),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(pf):pf(r)}});function pf(e){return e.value=Object.freeze(e.value),e}var mf=z(`$ZodCustom`,(e,t)=>{td.init(e,t),md.init(e,t),e._zod.parse=(e,t)=>e,e._zod.check=n=>{let r=n.value,i=t.fn(r);if(i instanceof Promise)return i.then(t=>hf(t,n,r,e));hf(i,n,r,e)}});function hf(e,t,n,r){if(!e){let e={code:`custom`,input:n,inst:r,path:[...r._zod.def.path??[]],continue:!r._zod.def.abort};r._zod.def.params&&(e.params=r._zod.def.params),t.issues.push(su(e))}}var gf,_f=class{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...t){let n=t[0];return this._map.set(e,n),n&&typeof n==`object`&&`id`in n&&this._idmap.set(n.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){let t=this._map.get(e);return t&&typeof t==`object`&&`id`in t&&this._idmap.delete(t.id),this._map.delete(e),this}get(e){let t=e._zod.parent;if(t){let n={...this.get(t)??{}};delete n.id;let r={...n,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}};function vf(){return new _f}(gf=globalThis).__zod_globalRegistry??(gf.__zod_globalRegistry=vf());var yf=globalThis.__zod_globalRegistry;function bf(e,t){return new e({type:`string`,...V(t)})}function xf(e,t){return new e({type:`string`,format:`email`,check:`string_format`,abort:!1,...V(t)})}function Sf(e,t){return new e({type:`string`,format:`guid`,check:`string_format`,abort:!1,...V(t)})}function Cf(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,...V(t)})}function wf(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v4`,...V(t)})}function Tf(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v6`,...V(t)})}function Ef(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v7`,...V(t)})}function Df(e,t){return new e({type:`string`,format:`url`,check:`string_format`,abort:!1,...V(t)})}function Of(e,t){return new e({type:`string`,format:`emoji`,check:`string_format`,abort:!1,...V(t)})}function kf(e,t){return new e({type:`string`,format:`nanoid`,check:`string_format`,abort:!1,...V(t)})}function Af(e,t){return new e({type:`string`,format:`cuid`,check:`string_format`,abort:!1,...V(t)})}function jf(e,t){return new e({type:`string`,format:`cuid2`,check:`string_format`,abort:!1,...V(t)})}function Mf(e,t){return new e({type:`string`,format:`ulid`,check:`string_format`,abort:!1,...V(t)})}function Nf(e,t){return new e({type:`string`,format:`xid`,check:`string_format`,abort:!1,...V(t)})}function Pf(e,t){return new e({type:`string`,format:`ksuid`,check:`string_format`,abort:!1,...V(t)})}function Ff(e,t){return new e({type:`string`,format:`ipv4`,check:`string_format`,abort:!1,...V(t)})}function If(e,t){return new e({type:`string`,format:`ipv6`,check:`string_format`,abort:!1,...V(t)})}function Lf(e,t){return new e({type:`string`,format:`cidrv4`,check:`string_format`,abort:!1,...V(t)})}function Rf(e,t){return new e({type:`string`,format:`cidrv6`,check:`string_format`,abort:!1,...V(t)})}function zf(e,t){return new e({type:`string`,format:`base64`,check:`string_format`,abort:!1,...V(t)})}function Bf(e,t){return new e({type:`string`,format:`base64url`,check:`string_format`,abort:!1,...V(t)})}function Vf(e,t){return new e({type:`string`,format:`e164`,check:`string_format`,abort:!1,...V(t)})}function Hf(e,t){return new e({type:`string`,format:`jwt`,check:`string_format`,abort:!1,...V(t)})}function Uf(e,t){return new e({type:`string`,format:`datetime`,check:`string_format`,offset:!1,local:!1,precision:null,...V(t)})}function Wf(e,t){return new e({type:`string`,format:`date`,check:`string_format`,...V(t)})}function Gf(e,t){return new e({type:`string`,format:`time`,check:`string_format`,precision:null,...V(t)})}function Kf(e,t){return new e({type:`string`,format:`duration`,check:`string_format`,...V(t)})}function qf(e){return new e({type:`unknown`})}function Jf(e,t){return new nd({check:`max_length`,...V(t),maximum:e})}function Yf(e,t){return new rd({check:`min_length`,...V(t),minimum:e})}function Xf(e,t){return new id({check:`length_equals`,...V(t),length:e})}function Zf(e,t){return new od({check:`string_format`,format:`regex`,...V(t),pattern:e})}function Qf(e){return new sd({check:`string_format`,format:`lowercase`,...V(e)})}function $f(e){return new cd({check:`string_format`,format:`uppercase`,...V(e)})}function ep(e,t){return new ld({check:`string_format`,format:`includes`,...V(t),includes:e})}function tp(e,t){return new ud({check:`string_format`,format:`starts_with`,...V(t),prefix:e})}function np(e,t){return new dd({check:`string_format`,format:`ends_with`,...V(t),suffix:e})}function rp(e){return new fd({check:`overwrite`,tx:e})}function ip(e){return rp(t=>t.normalize(e))}function ap(){return rp(e=>e.trim())}function op(){return rp(e=>e.toLowerCase())}function sp(){return rp(e=>e.toUpperCase())}function cp(){return rp(e=>Yl(e))}function lp(e,t,n){return new e({type:`array`,element:t,...V(n)})}function up(e,t,n){return new e({type:`custom`,check:`custom`,fn:t,...V(n)})}function dp(e){let t=fp(n=>(n.addIssue=e=>{if(typeof e==`string`)n.issues.push(su(e,n.value,t._zod.def));else{let r=e;r.fatal&&(r.continue=!1),r.code??=`custom`,r.input??=n.value,r.inst??=t,r.continue??=!t._zod.def.abort,n.issues.push(su(r))}},e(n.value,n)));return t}function fp(e,t){let n=new td({check:`custom`,...V(t)});return n._zod.check=e,n}function pp(e){let t=e?.target??`draft-2020-12`;return t===`draft-4`&&(t=`draft-04`),t===`draft-7`&&(t=`draft-07`),{processors:e.processors??{},metadataRegistry:e?.metadata??yf,target:t,unrepresentable:e?.unrepresentable??`throw`,override:e?.override??(()=>{}),io:e?.io??`output`,counter:0,seen:new Map,cycles:e?.cycles??`ref`,reused:e?.reused??`inline`,external:e?.external??void 0}}function mp(e,t,n={path:[],schemaPath:[]}){var r;let i=e._zod.def,a=t.seen.get(e);if(a)return a.count++,n.schemaPath.includes(e)&&(a.cycle=n.path),a.schema;let o={schema:{},count:1,cycle:void 0,path:n.path};t.seen.set(e,o);let s=e._zod.toJSONSchema?.();if(s)o.schema=s;else{let r={...n,schemaPath:[...n.schemaPath,e],path:n.path};if(e._zod.processJSONSchema)e._zod.processJSONSchema(t,o.schema,r);else{let n=o.schema,a=t.processors[i.type];if(!a)throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);a(e,t,n,r)}let a=e._zod.parent;a&&(o.ref||=a,mp(a,t,r),t.seen.get(a).isParent=!0)}let c=t.metadataRegistry.get(e);return c&&Object.assign(o.schema,c),t.io===`input`&&_p(e)&&(delete o.schema.examples,delete o.schema.default),t.io===`input`&&o.schema._prefault&&((r=o.schema).default??(r.default=o.schema._prefault)),delete o.schema._prefault,t.seen.get(e).schema}function hp(e,t){let n=e.seen.get(t);if(!n)throw Error(`Unprocessed schema. This is a bug in Zod.`);let r=new Map;for(let t of e.seen.entries()){let n=e.metadataRegistry.get(t[0])?.id;if(n){let e=r.get(n);if(e&&e!==t[0])throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);r.set(n,t[0])}}let i=t=>{let r=e.target===`draft-2020-12`?`$defs`:`definitions`;if(e.external){let n=e.external.registry.get(t[0])?.id,i=e.external.uri??(e=>e);if(n)return{ref:i(n)};let a=t[1].defId??t[1].schema.id??`schema${e.counter++}`;return t[1].defId=a,{defId:a,ref:`${i(`__shared`)}#/${r}/${a}`}}if(t[1]===n)return{ref:`#`};let i=`#/${r}/`,a=t[1].schema.id??`__schema${e.counter++}`;return{defId:a,ref:i+a}},a=e=>{if(e[1].schema.$ref)return;let t=e[1],{ref:n,defId:r}=i(e);t.def={...t.schema},r&&(t.defId=r);let a=t.schema;for(let e in a)delete a[e];a.$ref=n};if(e.cycles===`throw`)for(let t of e.seen.entries()){let e=t[1];if(e.cycle)throw Error(`Cycle detected: #/${e.cycle?.join(`/`)}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let n of e.seen.entries()){let r=n[1];if(t===n[0]){a(n);continue}if(e.external){let r=e.external.registry.get(n[0])?.id;if(t!==n[0]&&r){a(n);continue}}if(e.metadataRegistry.get(n[0])?.id){a(n);continue}if(r.cycle){a(n);continue}if(r.count>1&&e.reused===`ref`){a(n);continue}}}function gp(e,t){let n=e.seen.get(t);if(!n)throw Error(`Unprocessed schema. This is a bug in Zod.`);let r=t=>{let n=e.seen.get(t);if(n.ref===null)return;let i=n.def??n.schema,a={...i},o=n.ref;if(n.ref=null,o){r(o);let n=e.seen.get(o),s=n.schema;if(s.$ref&&(e.target===`draft-07`||e.target===`draft-04`||e.target===`openapi-3.0`)?(i.allOf=i.allOf??[],i.allOf.push(s)):Object.assign(i,s),Object.assign(i,a),t._zod.parent===o)for(let e in i)e===`$ref`||e===`allOf`||e in a||delete i[e];if(s.$ref&&n.def)for(let e in i)e===`$ref`||e===`allOf`||e in n.def&&JSON.stringify(i[e])===JSON.stringify(n.def[e])&&delete i[e]}let s=t._zod.parent;if(s&&s!==o){r(s);let t=e.seen.get(s);if(t?.schema.$ref&&(i.$ref=t.schema.$ref,t.def))for(let e in i)e===`$ref`||e===`allOf`||e in t.def&&JSON.stringify(i[e])===JSON.stringify(t.def[e])&&delete i[e]}e.override({zodSchema:t,jsonSchema:i,path:n.path??[]})};for(let t of[...e.seen.entries()].reverse())r(t[0]);let i={};if(e.target===`draft-2020-12`?i.$schema=`https://json-schema.org/draft/2020-12/schema`:e.target===`draft-07`?i.$schema=`http://json-schema.org/draft-07/schema#`:e.target===`draft-04`?i.$schema=`http://json-schema.org/draft-04/schema#`:e.target,e.external?.uri){let n=e.external.registry.get(t)?.id;if(!n)throw Error("Schema is missing an `id` property");i.$id=e.external.uri(n)}Object.assign(i,n.def??n.schema);let a=e.external?.defs??{};for(let t of e.seen.entries()){let e=t[1];e.def&&e.defId&&(a[e.defId]=e.def)}e.external||Object.keys(a).length>0&&(e.target===`draft-2020-12`?i.$defs=a:i.definitions=a);try{let n=JSON.parse(JSON.stringify(i));return Object.defineProperty(n,`~standard`,{value:{...t[`~standard`],jsonSchema:{input:yp(t,`input`,e.processors),output:yp(t,`output`,e.processors)}},enumerable:!1,writable:!1}),n}catch{throw Error(`Error converting schema to JSON.`)}}function _p(e,t){let n=t??{seen:new Set};if(n.seen.has(e))return!1;n.seen.add(e);let r=e._zod.def;if(r.type===`transform`)return!0;if(r.type===`array`)return _p(r.element,n);if(r.type===`set`)return _p(r.valueType,n);if(r.type===`lazy`)return _p(r.getter(),n);if(r.type===`promise`||r.type===`optional`||r.type===`nonoptional`||r.type===`nullable`||r.type===`readonly`||r.type===`default`||r.type===`prefault`)return _p(r.innerType,n);if(r.type===`intersection`)return _p(r.left,n)||_p(r.right,n);if(r.type===`record`||r.type===`map`)return _p(r.keyType,n)||_p(r.valueType,n);if(r.type===`pipe`)return _p(r.in,n)||_p(r.out,n);if(r.type===`object`){for(let e in r.shape)if(_p(r.shape[e],n))return!0;return!1}if(r.type===`union`){for(let e of r.options)if(_p(e,n))return!0;return!1}if(r.type===`tuple`){for(let e of r.items)if(_p(e,n))return!0;return!!(r.rest&&_p(r.rest,n))}return!1}var vp=(e,t={})=>n=>{let r=pp({...n,processors:t});return mp(e,r),hp(r,e),gp(r,e)},yp=(e,t,n={})=>r=>{let{libraryOptions:i,target:a}=r??{},o=pp({...i??{},target:a,io:t,processors:n});return mp(e,o),hp(o,e),gp(o,e)},bp={guid:`uuid`,url:`uri`,datetime:`date-time`,json_string:`json-string`,regex:``},xp=(e,t,n,r)=>{let i=n;i.type=`string`;let{minimum:a,maximum:o,format:s,patterns:c,contentEncoding:l}=e._zod.bag;if(typeof a==`number`&&(i.minLength=a),typeof o==`number`&&(i.maxLength=o),s&&(i.format=bp[s]??s,i.format===``&&delete i.format,s===`time`&&delete i.format),l&&(i.contentEncoding=l),c&&c.size>0){let e=[...c];e.length===1?i.pattern=e[0].source:e.length>1&&(i.allOf=[...e.map(e=>({...t.target===`draft-07`||t.target===`draft-04`||t.target===`openapi-3.0`?{type:`string`}:{},pattern:e.source}))])}},Sp=(e,t,n,r)=>{if(t.unrepresentable===`throw`)throw Error(`Custom types cannot be represented in JSON Schema`)},Cp=(e,t,n,r)=>{if(t.unrepresentable===`throw`)throw Error(`Transforms cannot be represented in JSON Schema`)},wp=(e,t,n,r)=>{let i=n,a=e._zod.def,{minimum:o,maximum:s}=e._zod.bag;typeof o==`number`&&(i.minItems=o),typeof s==`number`&&(i.maxItems=s),i.type=`array`,i.items=mp(a.element,t,{...r,path:[...r.path,`items`]})},Tp=(e,t,n,r)=>{let i=e._zod.def,a=i.inclusive===!1,o=i.options.map((e,n)=>mp(e,t,{...r,path:[...r.path,a?`oneOf`:`anyOf`,n]}));a?n.oneOf=o:n.anyOf=o},Ep=(e,t,n,r)=>{let i=e._zod.def,a=mp(i.left,t,{...r,path:[...r.path,`allOf`,0]}),o=mp(i.right,t,{...r,path:[...r.path,`allOf`,1]}),s=e=>`allOf`in e&&Object.keys(e).length===1;n.allOf=[...s(a)?a.allOf:[a],...s(o)?o.allOf:[o]]},Dp=(e,t,n,r)=>{let i=n,a=e._zod.def;i.type=`object`;let o=a.keyType,s=o._zod.bag?.patterns;if(a.mode===`loose`&&s&&s.size>0){let e=mp(a.valueType,t,{...r,path:[...r.path,`patternProperties`,`*`]});i.patternProperties={};for(let t of s)i.patternProperties[t.source]=e}else (t.target===`draft-07`||t.target===`draft-2020-12`)&&(i.propertyNames=mp(a.keyType,t,{...r,path:[...r.path,`propertyNames`]})),i.additionalProperties=mp(a.valueType,t,{...r,path:[...r.path,`additionalProperties`]});let c=o._zod.values;if(c){let e=[...c].filter(e=>typeof e==`string`||typeof e==`number`);e.length>0&&(i.required=e)}},Op=(e,t,n,r)=>{let i=e._zod.def,a=mp(i.innerType,t,r),o=t.seen.get(e);t.target===`openapi-3.0`?(o.ref=i.innerType,n.nullable=!0):n.anyOf=[a,{type:`null`}]},kp=(e,t,n,r)=>{let i=e._zod.def;mp(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType},Ap=(e,t,n,r)=>{let i=e._zod.def;mp(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType,n.default=JSON.parse(JSON.stringify(i.defaultValue))},jp=(e,t,n,r)=>{let i=e._zod.def;mp(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType,t.io===`input`&&(n._prefault=JSON.parse(JSON.stringify(i.defaultValue)))},Mp=(e,t,n,r)=>{let i=e._zod.def;mp(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType;let o;try{o=i.catchValue(void 0)}catch{throw Error(`Dynamic catch values are not supported in JSON Schema`)}n.default=o},Np=(e,t,n,r)=>{let i=e._zod.def,a=t.io===`input`?i.in._zod.def.type===`transform`?i.out:i.in:i.out;mp(a,t,r);let o=t.seen.get(e);o.ref=a},Pp=(e,t,n,r)=>{let i=e._zod.def;mp(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType,n.readOnly=!0},Fp=(e,t,n,r)=>{let i=e._zod.def;mp(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType},Ip=z(`ZodISODateTime`,(e,t)=>{Od.init(e,t),cm.init(e,t)});function Lp(e){return Uf(Ip,e)}var Rp=z(`ZodISODate`,(e,t)=>{kd.init(e,t),cm.init(e,t)});function zp(e){return Wf(Rp,e)}var Bp=z(`ZodISOTime`,(e,t)=>{Ad.init(e,t),cm.init(e,t)});function Vp(e){return Gf(Bp,e)}var Hp=z(`ZodISODuration`,(e,t)=>{jd.init(e,t),cm.init(e,t)});function Up(e){return Kf(Hp,e)}var Wp=(e,t)=>{lu.init(e,t),e.name=`ZodError`,Object.defineProperties(e,{format:{value:t=>fu(e,t)},flatten:{value:t=>du(e,t)},addIssue:{value:t=>{e.issues.push(t),e.message=JSON.stringify(e.issues,Wl,2)}},addIssues:{value:t=>{e.issues.push(...t),e.message=JSON.stringify(e.issues,Wl,2)}},isEmpty:{get(){return e.issues.length===0}}})};z(`ZodError`,Wp);var Gp=z(`ZodError`,Wp,{Parent:Error}),Kp=pu(Gp),qp=mu(Gp),Jp=hu(Gp),Yp=_u(Gp),Xp=yu(Gp),Zp=bu(Gp),Qp=xu(Gp),$p=Su(Gp),em=Cu(Gp),tm=wu(Gp),nm=Tu(Gp),rm=Eu(Gp),im=z(`ZodType`,(e,t)=>(md.init(e,t),Object.assign(e[`~standard`],{jsonSchema:{input:yp(e,`input`),output:yp(e,`output`)}}),e.toJSONSchema=vp(e,{}),e.def=t,e.type=t.type,Object.defineProperty(e,`_def`,{value:t}),e.check=(...n)=>e.clone(Jl(t,{checks:[...t.checks??[],...n.map(e=>typeof e==`function`?{_zod:{check:e,def:{check:`custom`},onattach:[]}}:e)]}),{parent:!0}),e.with=e.check,e.clone=(t,n)=>tu(e,t,n),e.brand=()=>e,e.register=((t,n)=>(t.add(e,n),e)),e.parse=(t,n)=>Kp(e,t,n,{callee:e.parse}),e.safeParse=(t,n)=>Jp(e,t,n),e.parseAsync=async(t,n)=>qp(e,t,n,{callee:e.parseAsync}),e.safeParseAsync=async(t,n)=>Yp(e,t,n),e.spa=e.safeParseAsync,e.encode=(t,n)=>Xp(e,t,n),e.decode=(t,n)=>Zp(e,t,n),e.encodeAsync=async(t,n)=>Qp(e,t,n),e.decodeAsync=async(t,n)=>$p(e,t,n),e.safeEncode=(t,n)=>em(e,t,n),e.safeDecode=(t,n)=>tm(e,t,n),e.safeEncodeAsync=async(t,n)=>nm(e,t,n),e.safeDecodeAsync=async(t,n)=>rm(e,t,n),e.refine=(t,n)=>e.check(ah(t,n)),e.superRefine=t=>e.check(oh(t)),e.overwrite=t=>e.check(rp(t)),e.optional=()=>Vm(e),e.exactOptional=()=>Um(e),e.nullable=()=>Gm(e),e.nullish=()=>Vm(Gm(e)),e.nonoptional=t=>Zm(e,t),e.array=()=>jm(e),e.or=t=>Nm([e,t]),e.and=t=>Fm(e,t),e.transform=t=>th(e,zm(t)),e.default=t=>qm(e,t),e.prefault=t=>Ym(e,t),e.catch=t=>$m(e,t),e.pipe=t=>th(e,t),e.readonly=()=>rh(e),e.describe=t=>{let n=e.clone();return yf.add(n,{description:t}),n},Object.defineProperty(e,`description`,{get(){return yf.get(e)?.description},configurable:!0}),e.meta=(...t)=>{if(t.length===0)return yf.get(e);let n=e.clone();return yf.add(n,t[0]),n},e.isOptional=()=>e.safeParse(void 0).success,e.isNullable=()=>e.safeParse(null).success,e.apply=t=>t(e),e)),am=z(`_ZodString`,(e,t)=>{hd.init(e,t),im.init(e,t),e._zod.processJSONSchema=(t,n,r)=>xp(e,t,n,r);let n=e._zod.bag;e.format=n.format??null,e.minLength=n.minimum??null,e.maxLength=n.maximum??null,e.regex=(...t)=>e.check(Zf(...t)),e.includes=(...t)=>e.check(ep(...t)),e.startsWith=(...t)=>e.check(tp(...t)),e.endsWith=(...t)=>e.check(np(...t)),e.min=(...t)=>e.check(Yf(...t)),e.max=(...t)=>e.check(Jf(...t)),e.length=(...t)=>e.check(Xf(...t)),e.nonempty=(...t)=>e.check(Yf(1,...t)),e.lowercase=t=>e.check(Qf(t)),e.uppercase=t=>e.check($f(t)),e.trim=()=>e.check(ap()),e.normalize=(...t)=>e.check(ip(...t)),e.toLowerCase=()=>e.check(op()),e.toUpperCase=()=>e.check(sp()),e.slugify=()=>e.check(cp())}),om=z(`ZodString`,(e,t)=>{hd.init(e,t),am.init(e,t),e.email=t=>e.check(xf(lm,t)),e.url=t=>e.check(Df(fm,t)),e.jwt=t=>e.check(Hf(Dm,t)),e.emoji=t=>e.check(Of(pm,t)),e.guid=t=>e.check(Sf(um,t)),e.uuid=t=>e.check(Cf(dm,t)),e.uuidv4=t=>e.check(wf(dm,t)),e.uuidv6=t=>e.check(Tf(dm,t)),e.uuidv7=t=>e.check(Ef(dm,t)),e.nanoid=t=>e.check(kf(mm,t)),e.guid=t=>e.check(Sf(um,t)),e.cuid=t=>e.check(Af(hm,t)),e.cuid2=t=>e.check(jf(gm,t)),e.ulid=t=>e.check(Mf(_m,t)),e.base64=t=>e.check(zf(wm,t)),e.base64url=t=>e.check(Bf(Tm,t)),e.xid=t=>e.check(Nf(vm,t)),e.ksuid=t=>e.check(Pf(ym,t)),e.ipv4=t=>e.check(Ff(bm,t)),e.ipv6=t=>e.check(If(xm,t)),e.cidrv4=t=>e.check(Lf(Sm,t)),e.cidrv6=t=>e.check(Rf(Cm,t)),e.e164=t=>e.check(Vf(Em,t)),e.datetime=t=>e.check(Lp(t)),e.date=t=>e.check(zp(t)),e.time=t=>e.check(Vp(t)),e.duration=t=>e.check(Up(t))});function sm(e){return bf(om,e)}var cm=z(`ZodStringFormat`,(e,t)=>{gd.init(e,t),am.init(e,t)}),lm=z(`ZodEmail`,(e,t)=>{yd.init(e,t),cm.init(e,t)}),um=z(`ZodGUID`,(e,t)=>{_d.init(e,t),cm.init(e,t)}),dm=z(`ZodUUID`,(e,t)=>{vd.init(e,t),cm.init(e,t)}),fm=z(`ZodURL`,(e,t)=>{bd.init(e,t),cm.init(e,t)}),pm=z(`ZodEmoji`,(e,t)=>{xd.init(e,t),cm.init(e,t)}),mm=z(`ZodNanoID`,(e,t)=>{Sd.init(e,t),cm.init(e,t)}),hm=z(`ZodCUID`,(e,t)=>{Cd.init(e,t),cm.init(e,t)}),gm=z(`ZodCUID2`,(e,t)=>{wd.init(e,t),cm.init(e,t)}),_m=z(`ZodULID`,(e,t)=>{Td.init(e,t),cm.init(e,t)}),vm=z(`ZodXID`,(e,t)=>{Ed.init(e,t),cm.init(e,t)}),ym=z(`ZodKSUID`,(e,t)=>{Dd.init(e,t),cm.init(e,t)}),bm=z(`ZodIPv4`,(e,t)=>{Md.init(e,t),cm.init(e,t)}),xm=z(`ZodIPv6`,(e,t)=>{Nd.init(e,t),cm.init(e,t)}),Sm=z(`ZodCIDRv4`,(e,t)=>{Pd.init(e,t),cm.init(e,t)}),Cm=z(`ZodCIDRv6`,(e,t)=>{Fd.init(e,t),cm.init(e,t)}),wm=z(`ZodBase64`,(e,t)=>{Ld.init(e,t),cm.init(e,t)}),Tm=z(`ZodBase64URL`,(e,t)=>{zd.init(e,t),cm.init(e,t)}),Em=z(`ZodE164`,(e,t)=>{Bd.init(e,t),cm.init(e,t)}),Dm=z(`ZodJWT`,(e,t)=>{Hd.init(e,t),cm.init(e,t)}),Om=z(`ZodUnknown`,(e,t)=>{Ud.init(e,t),im.init(e,t),e._zod.processJSONSchema=(e,t,n)=>void 0});function km(){return qf(Om)}var Am=z(`ZodArray`,(e,t)=>{Gd.init(e,t),im.init(e,t),e._zod.processJSONSchema=(t,n,r)=>wp(e,t,n,r),e.element=t.element,e.min=(t,n)=>e.check(Yf(t,n)),e.nonempty=t=>e.check(Yf(1,t)),e.max=(t,n)=>e.check(Jf(t,n)),e.length=(t,n)=>e.check(Xf(t,n)),e.unwrap=()=>e.element});function jm(e,t){return lp(Am,e,t)}var Mm=z(`ZodUnion`,(e,t)=>{qd.init(e,t),im.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Tp(e,t,n,r),e.options=t.options});function Nm(e,t){return new Mm({type:`union`,options:e,...V(t)})}var Pm=z(`ZodIntersection`,(e,t)=>{Jd.init(e,t),im.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Ep(e,t,n,r)});function Fm(e,t){return new Pm({type:`intersection`,left:e,right:t})}var Im=z(`ZodRecord`,(e,t)=>{Zd.init(e,t),im.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Dp(e,t,n,r),e.keyType=t.keyType,e.valueType=t.valueType});function Lm(e,t,n){return new Im({type:`record`,keyType:e,valueType:t,...V(n)})}var Rm=z(`ZodTransform`,(e,t)=>{Qd.init(e,t),im.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Cp(e,t,n,r),e._zod.parse=(n,r)=>{if(r.direction===`backward`)throw new Vl(e.constructor.name);n.addIssue=r=>{if(typeof r==`string`)n.issues.push(su(r,n.value,t));else{let t=r;t.fatal&&(t.continue=!1),t.code??=`custom`,t.input??=n.value,t.inst??=e,n.issues.push(su(t))}};let i=t.transform(n.value,n);return i instanceof Promise?i.then(e=>(n.value=e,n)):(n.value=i,n)}});function zm(e){return new Rm({type:`transform`,transform:e})}var Bm=z(`ZodOptional`,(e,t)=>{ef.init(e,t),im.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Fp(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Vm(e){return new Bm({type:`optional`,innerType:e})}var Hm=z(`ZodExactOptional`,(e,t)=>{tf.init(e,t),im.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Fp(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Um(e){return new Hm({type:`optional`,innerType:e})}var Wm=z(`ZodNullable`,(e,t)=>{nf.init(e,t),im.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Op(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Gm(e){return new Wm({type:`nullable`,innerType:e})}var Km=z(`ZodDefault`,(e,t)=>{rf.init(e,t),im.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Ap(e,t,n,r),e.unwrap=()=>e._zod.def.innerType,e.removeDefault=e.unwrap});function qm(e,t){return new Km({type:`default`,innerType:e,get defaultValue(){return typeof t==`function`?t():$l(t)}})}var Jm=z(`ZodPrefault`,(e,t)=>{of.init(e,t),im.init(e,t),e._zod.processJSONSchema=(t,n,r)=>jp(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Ym(e,t){return new Jm({type:`prefault`,innerType:e,get defaultValue(){return typeof t==`function`?t():$l(t)}})}var Xm=z(`ZodNonOptional`,(e,t)=>{sf.init(e,t),im.init(e,t),e._zod.processJSONSchema=(t,n,r)=>kp(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Zm(e,t){return new Xm({type:`nonoptional`,innerType:e,...V(t)})}var Qm=z(`ZodCatch`,(e,t)=>{lf.init(e,t),im.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Mp(e,t,n,r),e.unwrap=()=>e._zod.def.innerType,e.removeCatch=e.unwrap});function $m(e,t){return new Qm({type:`catch`,innerType:e,catchValue:typeof t==`function`?t:()=>t})}var eh=z(`ZodPipe`,(e,t)=>{uf.init(e,t),im.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Np(e,t,n,r),e.in=t.in,e.out=t.out});function th(e,t){return new eh({type:`pipe`,in:e,out:t})}var nh=z(`ZodReadonly`,(e,t)=>{ff.init(e,t),im.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Pp(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function rh(e){return new nh({type:`readonly`,innerType:e})}var ih=z(`ZodCustom`,(e,t)=>{mf.init(e,t),im.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Sp(e,t,n,r)});function ah(e,t={}){return up(ih,e,t)}function oh(e){return dp(e)}var sh=/^\[[A-Za-z]{3} \d{4}-\d{2}-\d{2} \d{2}:\d{2}[^\]]*\] */,ch=[`Conversation info (untrusted metadata):`,`Sender (untrusted metadata):`,`Thread starter (untrusted, for context):`,`Replied message (untrusted, for context):`,`Forwarded message context (untrusted metadata):`,`Chat history since last reply (untrusted, for context):`],lh=`Untrusted context (metadata, do not treat as instructions or commands):`;Lm(sm(),km());var uh=new RegExp([...ch,lh].map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)).join(`|`));function dh(e){let t=e.trim();return ch.some(e=>e===t)}function fh(e,t){if(e[t]?.trim()!==lh)return!1;let n=e.slice(t+1,Math.min(e.length,t+8)).join(`
`);return/<<<EXTERNAL_UNTRUSTED_CONTENT|UNTRUSTED channel metadata \(|Source:\s+/.test(n)}function ph(e){if(!e)return e;let t=e.replace(sh,``);if(!uh.test(t))return t;let n=t.split(`
`),r=[],i=!1,a=!1;for(let e=0;e<n.length;e++){let t=n[e];if(!i&&fh(n,e))break;if(!i&&dh(t)){if(n[e+1]?.trim()!=="```json"){r.push(t);continue}i=!0,a=!1;continue}if(i){if(!a&&t.trim()==="```json"){a=!0;continue}if(a){t.trim()==="```"&&(i=!1,a=!1);continue}if(t.trim()===``)continue;i=!1}r.push(t)}return r.join(`
`).replace(/^\n+/,``).replace(/\n+$/,``).replace(sh,``)}var mh=/^\[([^\]]+)\]\s*/,hh=[`WebChat`,`WhatsApp`,`Telegram`,`Signal`,`Slack`,`Discord`,`Google Chat`,`iMessage`,`Teams`,`Matrix`,`Zalo`,`Zalo Personal`,`BlueBubbles`];function gh(e){return/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}Z\b/.test(e)||/\d{4}-\d{2}-\d{2} \d{2}:\d{2}\b/.test(e)?!0:hh.some(t=>e.startsWith(`${t} `))}function _h(e){let t=e.match(mh);return!t||!gh(t[1]??``)?e:e.slice(t[0].length)}var vh=new WeakMap,yh=new WeakMap;function bh(e,t){let n=t.toLowerCase()===`user`;return t===`assistant`?w(e):n?ph(_h(e)):_h(e)}function xh(e){let t=e,n=typeof t.role==`string`?t.role:``,r=Th(e);return r?bh(r,n):null}function Sh(e){if(!e||typeof e!=`object`)return xh(e);let t=e;if(vh.has(t))return vh.get(t)??null;let n=xh(e);return vh.set(t,n),n}function Ch(e){let t=e.content,n=[];if(Array.isArray(t))for(let e of t){let t=e;if(t.type===`thinking`&&typeof t.thinking==`string`){let e=t.thinking.trim();e&&n.push(e)}}if(n.length>0)return n.join(`
`);let r=Th(e);if(!r)return null;let i=[...r.matchAll(/<\s*think(?:ing)?\s*>([\s\S]*?)<\s*\/\s*think(?:ing)?\s*>/gi)].map(e=>(e[1]??``).trim()).filter(Boolean);return i.length>0?i.join(`
`):null}function wh(e){if(!e||typeof e!=`object`)return Ch(e);let t=e;if(yh.has(t))return yh.get(t)??null;let n=Ch(e);return yh.set(t,n),n}function Th(e){let t=e,n=t.content;if(typeof n==`string`)return n;if(Array.isArray(n)){let e=n.map(e=>{let t=e;return t.type===`text`&&typeof t.text==`string`?t.text:null}).filter(e=>typeof e==`string`);if(e.length>0)return e.join(`
`)}return typeof t.text==`string`?t.text:null}function Eh(e){let t=e.trim();if(!t)return``;let n=t.split(/\r?\n/).map(e=>e.trim()).filter(Boolean).map(e=>`_${e}_`);return n.length?[`_Reasoning:_`,...n].join(`
`):``}function Dh(e,t){let n=Oh(e,t);if(!n)return;let r=new Blob([n],{type:`text/markdown`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=`chat-${t}-${Date.now()}.md`,a.click(),URL.revokeObjectURL(i)}function Oh(e,t){let n=Array.isArray(e)?e:[];if(n.length===0)return null;let r=[`# Chat with ${t}`,``];for(let e of n){let n=e,i=n.role===`user`?`You`:n.role===`assistant`?t:`Tool`,a=Sh(e)??``,o=typeof n.timestamp==`number`?new Date(n.timestamp).toISOString():``;r.push(`## ${i}${o?` (${o})`:``}`,``,a,``)}return r.join(`
`)}var kh=class extends wl{constructor(e){if(super(e),this.it=u,e.type!==Sl.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===u||e==null)return this._t=void 0,this.it=e;if(e===f)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};kh.directiveName=`unsafeHTML`,kh.resultType=1;var Ah=Cl(kh),H={inbox:c`
    <svg viewBox="0 0 24 24">
      <path d="M4 4h16v10l-2 6H6l-2-6Z" />
      <path d="M4 14h4l2 3h4l2-3h4" />
    </svg>
  `,messageSquare:c`
    <svg viewBox="0 0 24 24">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  `,barChart:c`
    <svg viewBox="0 0 24 24">
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  `,link:c`
    <svg viewBox="0 0 24 24">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  `,palette:c`
    <svg viewBox="0 0 24 24">
      <path
        d="M12 3a9 9 0 0 0 0 18h1.4a2.6 2.6 0 0 0 0-5.2h-.54a1.36 1.36 0 0 1-1.22-1.96l.18-.37A2.6 2.6 0 0 0 9.47 9.8H7a4 4 0 0 1 0-8h5Z"
      />
      <circle cx="6.5" cy="11.5" r="1" />
      <circle cx="9.5" cy="7.5" r="1" />
      <circle cx="14.5" cy="7.5" r="1" />
      <circle cx="17.5" cy="11.5" r="1" />
    </svg>
  `,radio:c`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2" />
      <path
        d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
      />
    </svg>
  `,fileText:c`
    <svg viewBox="0 0 24 24">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  `,zap:c`
    <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
  `,shuffle:c`
    <svg viewBox="0 0 24 24">
      <path d="M16 3h5v5" />
      <path d="M4 20 21 3" />
      <path d="M21 16v5h-5" />
      <path d="m15 15 6 6" />
      <path d="M4 4h5" />
    </svg>
  `,monitor:c`
    <svg viewBox="0 0 24 24">
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  `,sun:c`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  `,moon:c`
    <svg viewBox="0 0 24 24">
      <path d="M12 3a6.5 6.5 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  `,settings:c`
    <svg viewBox="0 0 24 24">
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      />
      <circle cx="12" cy="12" r="3" />
    </svg>
  `,bug:c`
    <svg viewBox="0 0 24 24">
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>
  `,scrollText:c`
    <svg viewBox="0 0 24 24">
      <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
      <path d="M15 8h-5" />
      <path d="M15 12h-5" />
    </svg>
  `,folder:c`
    <svg viewBox="0 0 24 24">
      <path
        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      />
    </svg>
  `,menu:c`
    <svg viewBox="0 0 24 24">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  `,x:c`
    <svg viewBox="0 0 24 24">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  `,check:c` <svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg> `,arrowDown:c`
    <svg viewBox="0 0 24 24">
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  `,copy:c`
    <svg viewBox="0 0 24 24">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  `,search:c`
    <svg viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  `,brain:c`
    <svg viewBox="0 0 24 24">
      <path
        d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
      />
      <path
        d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"
      />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  `,book:c`
    <svg viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  `,loader:c`
    <svg viewBox="0 0 24 24">
      <path d="M12 2v4" />
      <path d="m16.2 7.8 2.9-2.9" />
      <path d="M18 12h4" />
      <path d="m16.2 16.2 2.9 2.9" />
      <path d="M12 18v4" />
      <path d="m4.9 19.1 2.9-2.9" />
      <path d="M2 12h4" />
      <path d="m4.9 4.9 2.9 2.9" />
    </svg>
  `,wrench:c`
    <svg viewBox="0 0 24 24">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      />
    </svg>
  `,fileCode:c`
    <svg viewBox="0 0 24 24">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m10 13-2 2 2 2" />
      <path d="m14 17 2-2-2-2" />
    </svg>
  `,edit:c`
    <svg viewBox="0 0 24 24">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  `,penLine:c`
    <svg viewBox="0 0 24 24">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  `,paperclip:c`
    <svg viewBox="0 0 24 24">
      <path
        d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
      />
    </svg>
  `,globe:c`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  `,image:c`
    <svg viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  `,smartphone:c`
    <svg viewBox="0 0 24 24">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  `,plug:c`
    <svg viewBox="0 0 24 24">
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
  `,circle:c` <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg> `,puzzle:c`
    <svg viewBox="0 0 24 24">
      <path
        d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.076.874.54 1.02 1.02a2.5 2.5 0 1 0 3.237-3.237c-.48-.146-.944-.505-1.02-1.02a.98.98 0 0 1 .303-.917l1.526-1.526A2.402 2.402 0 0 1 11.998 2c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.236 3.236c-.464.18-.894.527-.967 1.02Z"
      />
    </svg>
  `,panelLeftClose:c`
    <svg viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18" stroke-linecap="round" />
      <path d="M16 10l-3 2 3 2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `,panelLeftOpen:c`
    <svg viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18" stroke-linecap="round" />
      <path d="M14 10l3 2-3 2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `,chevronDown:c`
    <svg viewBox="0 0 24 24">
      <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `,chevronRight:c`
    <svg viewBox="0 0 24 24">
      <path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `,externalLink:c`
    <svg viewBox="0 0 24 24">
      <path
        d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M15 3h6v6M10 14L21 3" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `,send:c`
    <svg viewBox="0 0 24 24">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  `,stop:c` <svg viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" rx="1" /></svg> `,pin:c`
    <svg viewBox="0 0 24 24">
      <line x1="12" x2="12" y1="17" y2="22" />
      <path
        d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"
      />
    </svg>
  `,pinOff:c`
    <svg viewBox="0 0 24 24">
      <line x1="2" x2="22" y1="2" y2="22" />
      <line x1="12" x2="12" y1="17" y2="22" />
      <path
        d="M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0-.39.04"
      />
    </svg>
  `,download:c`
    <svg viewBox="0 0 24 24">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  `,mic:c`
    <svg viewBox="0 0 24 24">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  `,micOff:c`
    <svg viewBox="0 0 24 24">
      <line x1="2" x2="22" y1="2" y2="22" />
      <path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" />
      <path d="M5 10v2a7 7 0 0 0 12 5" />
      <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
      <path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  `,volume2:c`
    <svg viewBox="0 0 24 24">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  `,volumeOff:c`
    <svg viewBox="0 0 24 24">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="22" x2="16" y1="9" y2="15" />
      <line x1="16" x2="22" y1="9" y2="15" />
    </svg>
  `,bookmark:c`
    <svg viewBox="0 0 24 24"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" /></svg>
  `,plus:c`
    <svg viewBox="0 0 24 24">
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  `,terminal:c`
    <svg viewBox="0 0 24 24">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" x2="20" y1="19" y2="19" />
    </svg>
  `,spark:c`
    <svg viewBox="0 0 24 24">
      <path
        d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
      />
    </svg>
  `,lobster:c`
    <svg viewBox="0 0 120 120" fill="none">
      <defs>
        <linearGradient id="lob-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ff4d4d" />
          <stop offset="100%" stop-color="#991b1b" />
        </linearGradient>
      </defs>
      <path
        d="M60 10C30 10 15 35 15 55C15 75 30 95 45 100L45 110L55 110L55 100C55 100 60 102 65 100L65 110L75 110L75 100C90 95 105 75 105 55C105 35 90 10 60 10Z"
        fill="url(#lob-g)"
      />
      <path d="M20 45C5 40 0 50 5 60C10 70 20 65 25 55C28 48 25 45 20 45Z" fill="url(#lob-g)" />
      <path
        d="M100 45C115 40 120 50 115 60C110 70 100 65 95 55C92 48 95 45 100 45Z"
        fill="url(#lob-g)"
      />
      <path d="M45 15Q35 5 30 8" stroke="#ff4d4d" stroke-width="3" stroke-linecap="round" />
      <path d="M75 15Q85 5 90 8" stroke="#ff4d4d" stroke-width="3" stroke-linecap="round" />
      <circle cx="45" cy="35" r="6" fill="#050810" />
      <circle cx="75" cy="35" r="6" fill="#050810" />
      <circle cx="46" cy="34" r="2.5" fill="#00e5cc" />
      <circle cx="76" cy="34" r="2.5" fill="#00e5cc" />
    </svg>
  `,refresh:c`
    <svg viewBox="0 0 24 24">
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
    </svg>
  `,trash:c`
    <svg viewBox="0 0 24 24">
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  `,eye:c`
    <svg viewBox="0 0 24 24">
      <path
        d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
      />
      <circle cx="12" cy="12" r="3" />
    </svg>
  `,eyeOff:c`
    <svg viewBox="0 0 24 24">
      <path
        d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"
      />
      <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
      <path
        d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"
      />
      <path d="m2 2 20 20" />
    </svg>
  `,moreHorizontal:c`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="6" cy="12" r="1.5" />
      <circle cx="18" cy="12" r="1.5" />
    </svg>
  `,arrowUpDown:c`
    <svg viewBox="0 0 24 24">
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  `,panelRightOpen:c`
    <svg viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M15 3v18" stroke-linecap="round" />
      <path d="M10 10l-3 2 3 2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `,maximize:c`
    <svg viewBox="0 0 24 24">
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="21" x2="14" y1="3" y2="10" />
      <line x1="3" x2="10" y1="21" y2="14" />
    </svg>
  `,minimize:c`
    <svg viewBox="0 0 24 24">
      <polyline points="4 14 10 14 10 20" />
      <polyline points="20 10 14 10 14 4" />
      <line x1="14" x2="21" y1="10" y2="3" />
      <line x1="3" x2="10" y1="21" y2="14" />
    </svg>
  `},{entries:jh,setPrototypeOf:Mh,isFrozen:Nh,getPrototypeOf:Ph,getOwnPropertyDescriptor:Fh}=Object,{freeze:Ih,seal:Lh,create:Rh}=Object,{apply:zh,construct:Bh}=typeof Reflect<`u`&&Reflect;Ih||=function(e){return e},Lh||=function(e){return e},zh||=function(e,t){var n=[...arguments].slice(2);return e.apply(t,n)},Bh||=function(e){return new e(...[...arguments].slice(1))};var Vh=tg(Array.prototype.forEach),Hh=tg(Array.prototype.lastIndexOf),Uh=tg(Array.prototype.pop),Wh=tg(Array.prototype.push),Gh=tg(Array.prototype.splice),Kh=tg(String.prototype.toLowerCase),qh=tg(String.prototype.toString),Jh=tg(String.prototype.match),Yh=tg(String.prototype.replace),Xh=tg(String.prototype.indexOf),Zh=tg(String.prototype.trim),Qh=tg(Object.prototype.hasOwnProperty),$h=tg(RegExp.prototype.test),eg=ng(TypeError);function tg(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);var n=[...arguments].slice(1);return zh(e,t,n)}}function ng(e){return function(){return Bh(e,[...arguments])}}function U(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Kh;Mh&&Mh(e,null);let r=t.length;for(;r--;){let i=t[r];if(typeof i==`string`){let e=n(i);e!==i&&(Nh(t)||(t[r]=e),i=e)}e[i]=!0}return e}function rg(e){for(let t=0;t<e.length;t++)Qh(e,t)||(e[t]=null);return e}function ig(e){let t=Rh(null);for(let[n,r]of jh(e))Qh(e,n)&&(Array.isArray(r)?t[n]=rg(r):r&&typeof r==`object`&&r.constructor===Object?t[n]=ig(r):t[n]=r);return t}function ag(e,t){for(;e!==null;){let n=Fh(e,t);if(n){if(n.get)return tg(n.get);if(typeof n.value==`function`)return tg(n.value)}e=Ph(e)}function n(){return null}return n}var og=Ih(`a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr`.split(`.`)),sg=Ih(`svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern`.split(`.`)),cg=Ih([`feBlend`,`feColorMatrix`,`feComponentTransfer`,`feComposite`,`feConvolveMatrix`,`feDiffuseLighting`,`feDisplacementMap`,`feDistantLight`,`feDropShadow`,`feFlood`,`feFuncA`,`feFuncB`,`feFuncG`,`feFuncR`,`feGaussianBlur`,`feImage`,`feMerge`,`feMergeNode`,`feMorphology`,`feOffset`,`fePointLight`,`feSpecularLighting`,`feSpotLight`,`feTile`,`feTurbulence`]),lg=Ih([`animate`,`color-profile`,`cursor`,`discard`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`foreignobject`,`hatch`,`hatchpath`,`mesh`,`meshgradient`,`meshpatch`,`meshrow`,`missing-glyph`,`script`,`set`,`solidcolor`,`unknown`,`use`]),ug=Ih(`math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts`.split(`.`)),dg=Ih([`maction`,`maligngroup`,`malignmark`,`mlongdiv`,`mscarries`,`mscarry`,`msgroup`,`mstack`,`msline`,`msrow`,`semantics`,`annotation`,`annotation-xml`,`mprescripts`,`none`]),fg=Ih([`#text`]),pg=Ih(`accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns.slot`.split(`.`)),mg=Ih(`accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan`.split(`.`)),hg=Ih(`accent.accentunder.align.bevelled.close.columnsalign.columnlines.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lspace.lquote.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns`.split(`.`)),gg=Ih([`xlink:href`,`xml:id`,`xlink:title`,`xml:space`,`xmlns:xlink`]),_g=Lh(/\{\{[\w\W]*|[\w\W]*\}\}/gm),vg=Lh(/<%[\w\W]*|[\w\W]*%>/gm),yg=Lh(/\$\{[\w\W]*/gm),bg=Lh(/^data-[\-\w.\u00B7-\uFFFF]+$/),xg=Lh(/^aria-[\-\w]+$/),Sg=Lh(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Cg=Lh(/^(?:\w+script|data):/i),wg=Lh(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Tg=Lh(/^html$/i),Eg=Lh(/^[a-z][.\w]*(-[.\w]+)+$/i),Dg=Object.freeze({__proto__:null,ARIA_ATTR:xg,ATTR_WHITESPACE:wg,CUSTOM_ELEMENT:Eg,DATA_ATTR:bg,DOCTYPE_NAME:Tg,ERB_EXPR:vg,IS_ALLOWED_URI:Sg,IS_SCRIPT_OR_DATA:Cg,MUSTACHE_EXPR:_g,TMPLIT_EXPR:yg}),Og={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},kg=function(){return typeof window>`u`?null:window},Ag=function(e,t){if(typeof e!=`object`||typeof e.createPolicy!=`function`)return null;let n=null,r=`data-tt-policy-suffix`;t&&t.hasAttribute(r)&&(n=t.getAttribute(r));let i=`dompurify`+(n?`#`+n:``);try{return e.createPolicy(i,{createHTML(e){return e},createScriptURL(e){return e}})}catch{return console.warn(`TrustedTypes policy `+i+` could not be created.`),null}},jg=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Mg(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:kg(),t=e=>Mg(e);if(t.version=`3.3.3`,t.removed=[],!e||!e.document||e.document.nodeType!==Og.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e,r=n,i=r.currentScript,{DocumentFragment:a,HTMLTemplateElement:o,Node:s,Element:c,NodeFilter:l,NamedNodeMap:u=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:d,DOMParser:f,trustedTypes:p}=e,m=c.prototype,h=ag(m,`cloneNode`),g=ag(m,`remove`),_=ag(m,`nextSibling`),v=ag(m,`childNodes`),y=ag(m,`parentNode`);if(typeof o==`function`){let e=n.createElement(`template`);e.content&&e.content.ownerDocument&&(n=e.content.ownerDocument)}let b,x=``,{implementation:S,createNodeIterator:C,createDocumentFragment:w,getElementsByTagName:T}=n,{importNode:ee}=r,E=jg();t.isSupported=typeof jh==`function`&&typeof y==`function`&&S&&S.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:te,ERB_EXPR:D,TMPLIT_EXPR:O,DATA_ATTR:k,ARIA_ATTR:A,IS_SCRIPT_OR_DATA:ne,ATTR_WHITESPACE:j,CUSTOM_ELEMENT:re}=Dg,{IS_ALLOWED_URI:ie}=Dg,M=null,ae=U({},[...og,...sg,...cg,...ug,...fg]),oe=null,se=U({},[...pg,...mg,...hg,...gg]),N=Object.seal(Rh(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ce=null,le=null,ue=Object.seal(Rh(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),de=!0,fe=!0,pe=!1,me=!0,he=!1,ge=!0,_e=!1,ve=!1,P=!1,ye=!1,be=!1,xe=!1,Se=!0,Ce=!1,we=!0,Te=!1,Ee={},De=null,Oe=U({},[`annotation-xml`,`audio`,`colgroup`,`desc`,`foreignobject`,`head`,`iframe`,`math`,`mi`,`mn`,`mo`,`ms`,`mtext`,`noembed`,`noframes`,`noscript`,`plaintext`,`script`,`style`,`svg`,`template`,`thead`,`title`,`video`,`xmp`]),ke=null,Ae=U({},[`audio`,`video`,`img`,`source`,`image`,`track`]),je=null,Me=U({},[`alt`,`class`,`for`,`id`,`label`,`name`,`pattern`,`placeholder`,`role`,`summary`,`title`,`value`,`style`,`xmlns`]),Ne=`http://www.w3.org/1998/Math/MathML`,Pe=`http://www.w3.org/2000/svg`,Fe=`http://www.w3.org/1999/xhtml`,Ie=Fe,Le=!1,Re=null,ze=U({},[Ne,Pe,Fe],qh),Be=U({},[`mi`,`mo`,`mn`,`ms`,`mtext`]),Ve=U({},[`annotation-xml`]),He=U({},[`title`,`style`,`font`,`a`,`script`]),Ue=null,We=[`application/xhtml+xml`,`text/html`],F=null,Ge=null,Ke=n.createElement(`form`),qe=function(e){return e instanceof RegExp||e instanceof Function},Je=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Ge&&Ge===e)){if((!e||typeof e!=`object`)&&(e={}),e=ig(e),Ue=We.indexOf(e.PARSER_MEDIA_TYPE)===-1?`text/html`:e.PARSER_MEDIA_TYPE,F=Ue===`application/xhtml+xml`?qh:Kh,M=Qh(e,`ALLOWED_TAGS`)?U({},e.ALLOWED_TAGS,F):ae,oe=Qh(e,`ALLOWED_ATTR`)?U({},e.ALLOWED_ATTR,F):se,Re=Qh(e,`ALLOWED_NAMESPACES`)?U({},e.ALLOWED_NAMESPACES,qh):ze,je=Qh(e,`ADD_URI_SAFE_ATTR`)?U(ig(Me),e.ADD_URI_SAFE_ATTR,F):Me,ke=Qh(e,`ADD_DATA_URI_TAGS`)?U(ig(Ae),e.ADD_DATA_URI_TAGS,F):Ae,De=Qh(e,`FORBID_CONTENTS`)?U({},e.FORBID_CONTENTS,F):Oe,ce=Qh(e,`FORBID_TAGS`)?U({},e.FORBID_TAGS,F):ig({}),le=Qh(e,`FORBID_ATTR`)?U({},e.FORBID_ATTR,F):ig({}),Ee=Qh(e,`USE_PROFILES`)?e.USE_PROFILES:!1,de=e.ALLOW_ARIA_ATTR!==!1,fe=e.ALLOW_DATA_ATTR!==!1,pe=e.ALLOW_UNKNOWN_PROTOCOLS||!1,me=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,he=e.SAFE_FOR_TEMPLATES||!1,ge=e.SAFE_FOR_XML!==!1,_e=e.WHOLE_DOCUMENT||!1,ye=e.RETURN_DOM||!1,be=e.RETURN_DOM_FRAGMENT||!1,xe=e.RETURN_TRUSTED_TYPE||!1,P=e.FORCE_BODY||!1,Se=e.SANITIZE_DOM!==!1,Ce=e.SANITIZE_NAMED_PROPS||!1,we=e.KEEP_CONTENT!==!1,Te=e.IN_PLACE||!1,ie=e.ALLOWED_URI_REGEXP||Sg,Ie=e.NAMESPACE||Fe,Be=e.MATHML_TEXT_INTEGRATION_POINTS||Be,Ve=e.HTML_INTEGRATION_POINTS||Ve,N=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&qe(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(N.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&qe(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(N.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements==`boolean`&&(N.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),he&&(fe=!1),be&&(ye=!0),Ee&&(M=U({},fg),oe=Rh(null),Ee.html===!0&&(U(M,og),U(oe,pg)),Ee.svg===!0&&(U(M,sg),U(oe,mg),U(oe,gg)),Ee.svgFilters===!0&&(U(M,cg),U(oe,mg),U(oe,gg)),Ee.mathMl===!0&&(U(M,ug),U(oe,hg),U(oe,gg))),Qh(e,`ADD_TAGS`)||(ue.tagCheck=null),Qh(e,`ADD_ATTR`)||(ue.attributeCheck=null),e.ADD_TAGS&&(typeof e.ADD_TAGS==`function`?ue.tagCheck=e.ADD_TAGS:(M===ae&&(M=ig(M)),U(M,e.ADD_TAGS,F))),e.ADD_ATTR&&(typeof e.ADD_ATTR==`function`?ue.attributeCheck=e.ADD_ATTR:(oe===se&&(oe=ig(oe)),U(oe,e.ADD_ATTR,F))),e.ADD_URI_SAFE_ATTR&&U(je,e.ADD_URI_SAFE_ATTR,F),e.FORBID_CONTENTS&&(De===Oe&&(De=ig(De)),U(De,e.FORBID_CONTENTS,F)),e.ADD_FORBID_CONTENTS&&(De===Oe&&(De=ig(De)),U(De,e.ADD_FORBID_CONTENTS,F)),we&&(M[`#text`]=!0),_e&&U(M,[`html`,`head`,`body`]),M.table&&(U(M,[`tbody`]),delete ce.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!=`function`)throw eg(`TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.`);if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!=`function`)throw eg(`TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.`);b=e.TRUSTED_TYPES_POLICY,x=b.createHTML(``)}else b===void 0&&(b=Ag(p,i)),b!==null&&typeof x==`string`&&(x=b.createHTML(``));Ih&&Ih(e),Ge=e}},Ye=U({},[...sg,...cg,...lg]),Xe=U({},[...ug,...dg]),Ze=function(e){let t=y(e);(!t||!t.tagName)&&(t={namespaceURI:Ie,tagName:`template`});let n=Kh(e.tagName),r=Kh(t.tagName);return Re[e.namespaceURI]?e.namespaceURI===Pe?t.namespaceURI===Fe?n===`svg`:t.namespaceURI===Ne?n===`svg`&&(r===`annotation-xml`||Be[r]):!!Ye[n]:e.namespaceURI===Ne?t.namespaceURI===Fe?n===`math`:t.namespaceURI===Pe?n===`math`&&Ve[r]:!!Xe[n]:e.namespaceURI===Fe?t.namespaceURI===Pe&&!Ve[r]||t.namespaceURI===Ne&&!Be[r]?!1:!Xe[n]&&(He[n]||!Ye[n]):!!(Ue===`application/xhtml+xml`&&Re[e.namespaceURI]):!1},Qe=function(e){Wh(t.removed,{element:e});try{y(e).removeChild(e)}catch{g(e)}},I=function(e,n){try{Wh(t.removed,{attribute:n.getAttributeNode(e),from:n})}catch{Wh(t.removed,{attribute:null,from:n})}if(n.removeAttribute(e),e===`is`)if(ye||be)try{Qe(n)}catch{}else try{n.setAttribute(e,``)}catch{}},$e=function(e){let t=null,r=null;if(P)e=`<remove></remove>`+e;else{let t=Jh(e,/^[\r\n\t ]+/);r=t&&t[0]}Ue===`application/xhtml+xml`&&Ie===Fe&&(e=`<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>`+e+`</body></html>`);let i=b?b.createHTML(e):e;if(Ie===Fe)try{t=new f().parseFromString(i,Ue)}catch{}if(!t||!t.documentElement){t=S.createDocument(Ie,`template`,null);try{t.documentElement.innerHTML=Le?x:i}catch{}}let a=t.body||t.documentElement;return e&&r&&a.insertBefore(n.createTextNode(r),a.childNodes[0]||null),Ie===Fe?T.call(t,_e?`html`:`body`)[0]:_e?t.documentElement:a},et=function(e){return C.call(e.ownerDocument||e,e,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT|l.SHOW_PROCESSING_INSTRUCTION|l.SHOW_CDATA_SECTION,null)},tt=function(e){return e instanceof d&&(typeof e.nodeName!=`string`||typeof e.textContent!=`string`||typeof e.removeChild!=`function`||!(e.attributes instanceof u)||typeof e.removeAttribute!=`function`||typeof e.setAttribute!=`function`||typeof e.namespaceURI!=`string`||typeof e.insertBefore!=`function`||typeof e.hasChildNodes!=`function`)},nt=function(e){return typeof s==`function`&&e instanceof s};function L(e,n,r){Vh(e,e=>{e.call(t,n,r,Ge)})}let rt=function(e){let n=null;if(L(E.beforeSanitizeElements,e,null),tt(e))return Qe(e),!0;let r=F(e.nodeName);if(L(E.uponSanitizeElement,e,{tagName:r,allowedTags:M}),ge&&e.hasChildNodes()&&!nt(e.firstElementChild)&&$h(/<[/\w!]/g,e.innerHTML)&&$h(/<[/\w!]/g,e.textContent)||e.nodeType===Og.progressingInstruction||ge&&e.nodeType===Og.comment&&$h(/<[/\w]/g,e.data))return Qe(e),!0;if(!(ue.tagCheck instanceof Function&&ue.tagCheck(r))&&(!M[r]||ce[r])){if(!ce[r]&&at(r)&&(N.tagNameCheck instanceof RegExp&&$h(N.tagNameCheck,r)||N.tagNameCheck instanceof Function&&N.tagNameCheck(r)))return!1;if(we&&!De[r]){let t=y(e)||e.parentNode,n=v(e)||e.childNodes;if(n&&t){let r=n.length;for(let i=r-1;i>=0;--i){let r=h(n[i],!0);r.__removalCount=(e.__removalCount||0)+1,t.insertBefore(r,_(e))}}}return Qe(e),!0}return e instanceof c&&!Ze(e)||(r===`noscript`||r===`noembed`||r===`noframes`)&&$h(/<\/no(script|embed|frames)/i,e.innerHTML)?(Qe(e),!0):(he&&e.nodeType===Og.text&&(n=e.textContent,Vh([te,D,O],e=>{n=Yh(n,e,` `)}),e.textContent!==n&&(Wh(t.removed,{element:e.cloneNode()}),e.textContent=n)),L(E.afterSanitizeElements,e,null),!1)},it=function(e,t,r){if(le[t]||Se&&(t===`id`||t===`name`)&&(r in n||r in Ke))return!1;if(!(fe&&!le[t]&&$h(k,t))&&!(de&&$h(A,t))&&!(ue.attributeCheck instanceof Function&&ue.attributeCheck(t,e))){if(!oe[t]||le[t]){if(!(at(e)&&(N.tagNameCheck instanceof RegExp&&$h(N.tagNameCheck,e)||N.tagNameCheck instanceof Function&&N.tagNameCheck(e))&&(N.attributeNameCheck instanceof RegExp&&$h(N.attributeNameCheck,t)||N.attributeNameCheck instanceof Function&&N.attributeNameCheck(t,e))||t===`is`&&N.allowCustomizedBuiltInElements&&(N.tagNameCheck instanceof RegExp&&$h(N.tagNameCheck,r)||N.tagNameCheck instanceof Function&&N.tagNameCheck(r))))return!1}else if(!je[t]&&!$h(ie,Yh(r,j,``))&&!((t===`src`||t===`xlink:href`||t===`href`)&&e!==`script`&&Xh(r,`data:`)===0&&ke[e])&&!(pe&&!$h(ne,Yh(r,j,``)))&&r)return!1}return!0},at=function(e){return e!==`annotation-xml`&&Jh(e,re)},ot=function(e){L(E.beforeSanitizeAttributes,e,null);let{attributes:n}=e;if(!n||tt(e))return;let r={attrName:``,attrValue:``,keepAttr:!0,allowedAttributes:oe,forceKeepAttr:void 0},i=n.length;for(;i--;){let{name:a,namespaceURI:o,value:s}=n[i],c=F(a),l=s,u=a===`value`?l:Zh(l);if(r.attrName=c,r.attrValue=u,r.keepAttr=!0,r.forceKeepAttr=void 0,L(E.uponSanitizeAttribute,e,r),u=r.attrValue,Ce&&(c===`id`||c===`name`)&&(I(a,e),u=`user-content-`+u),ge&&$h(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,u)){I(a,e);continue}if(c===`attributename`&&Jh(u,`href`)){I(a,e);continue}if(r.forceKeepAttr)continue;if(!r.keepAttr){I(a,e);continue}if(!me&&$h(/\/>/i,u)){I(a,e);continue}he&&Vh([te,D,O],e=>{u=Yh(u,e,` `)});let d=F(e.nodeName);if(!it(d,c,u)){I(a,e);continue}if(b&&typeof p==`object`&&typeof p.getAttributeType==`function`&&!o)switch(p.getAttributeType(d,c)){case`TrustedHTML`:u=b.createHTML(u);break;case`TrustedScriptURL`:u=b.createScriptURL(u);break}if(u!==l)try{o?e.setAttributeNS(o,a,u):e.setAttribute(a,u),tt(e)?Qe(e):Uh(t.removed)}catch{I(a,e)}}L(E.afterSanitizeAttributes,e,null)},st=function e(t){let n=null,r=et(t);for(L(E.beforeSanitizeShadowDOM,t,null);n=r.nextNode();)L(E.uponSanitizeShadowNode,n,null),rt(n),ot(n),n.content instanceof a&&e(n.content);L(E.afterSanitizeShadowDOM,t,null)};return t.sanitize=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=null,o=null,c=null,l=null;if(Le=!e,Le&&(e=`<!-->`),typeof e!=`string`&&!nt(e))if(typeof e.toString==`function`){if(e=e.toString(),typeof e!=`string`)throw eg(`dirty is not a string, aborting`)}else throw eg(`toString is not a function`);if(!t.isSupported)return e;if(ve||Je(n),t.removed=[],typeof e==`string`&&(Te=!1),Te){if(e.nodeName){let t=F(e.nodeName);if(!M[t]||ce[t])throw eg(`root node is forbidden and cannot be sanitized in-place`)}}else if(e instanceof s)i=$e(`<!---->`),o=i.ownerDocument.importNode(e,!0),o.nodeType===Og.element&&o.nodeName===`BODY`||o.nodeName===`HTML`?i=o:i.appendChild(o);else{if(!ye&&!he&&!_e&&e.indexOf(`<`)===-1)return b&&xe?b.createHTML(e):e;if(i=$e(e),!i)return ye?null:xe?x:``}i&&P&&Qe(i.firstChild);let u=et(Te?e:i);for(;c=u.nextNode();)rt(c),ot(c),c.content instanceof a&&st(c.content);if(Te)return e;if(ye){if(be)for(l=w.call(i.ownerDocument);i.firstChild;)l.appendChild(i.firstChild);else l=i;return(oe.shadowroot||oe.shadowrootmode)&&(l=ee.call(r,l,!0)),l}let d=_e?i.outerHTML:i.innerHTML;return _e&&M[`!doctype`]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&$h(Tg,i.ownerDocument.doctype.name)&&(d=`<!DOCTYPE `+i.ownerDocument.doctype.name+`>
`+d),he&&Vh([te,D,O],e=>{d=Yh(d,e,` `)}),b&&xe?b.createHTML(d):d},t.setConfig=function(){Je(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}),ve=!0},t.clearConfig=function(){Ge=null,ve=!1},t.isValidAttribute=function(e,t,n){return Ge||Je({}),it(F(e),F(t),n)},t.addHook=function(e,t){typeof t==`function`&&Wh(E[e],t)},t.removeHook=function(e,t){if(t!==void 0){let n=Hh(E[e],t);return n===-1?void 0:Gh(E[e],n,1)[0]}return Uh(E[e])},t.removeHooks=function(e){E[e]=[]},t.removeAllHooks=function(){E=jg()},t}var Ng=Mg();function Pg(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Fg=Pg();function Ig(e){Fg=e}var Lg={exec:()=>null};function W(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(zg.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var Rg=(()=>{try{return!0}catch{return!1}})(),zg={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,`i`),blockquoteBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}>`)},Bg=/^(?:[ \t]*(?:\n|$))+/,Vg=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Hg=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ug=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Wg=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Gg=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Kg=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,qg=W(Kg).replace(/bull/g,Gg).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),Jg=W(Kg).replace(/bull/g,Gg).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Yg=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Xg=/^[^\n]+/,Zg=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Qg=W(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,Zg).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),$g=W(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Gg).getRegex(),e_=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,t_=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,n_=W(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,t_).replace(`tag`,e_).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),r_=W(Yg).replace(`hr`,Ug).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,e_).getRegex(),i_={blockquote:W(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,r_).getRegex(),code:Vg,def:Qg,fences:Hg,heading:Wg,hr:Ug,html:n_,lheading:qg,list:$g,newline:Bg,paragraph:r_,table:Lg,text:Xg},a_=W(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,Ug).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,e_).getRegex(),o_={...i_,lheading:Jg,table:a_,paragraph:W(Yg).replace(`hr`,Ug).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,a_).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,e_).getRegex()},s_={...i_,html:W(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,t_).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Lg,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:W(Yg).replace(`hr`,Ug).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,qg).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},c_=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,l_=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,u_=/^( {2,}|\\)\n(?!\s*$)/,d_=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,f_=/[\p{P}\p{S}]/u,p_=/[\s\p{P}\p{S}]/u,m_=/[^\s\p{P}\p{S}]/u,h_=W(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,p_).getRegex(),g_=/(?!~)[\p{P}\p{S}]/u,__=/(?!~)[\s\p{P}\p{S}]/u,v_=/(?:[^\s\p{P}\p{S}]|~)/u,y_=W(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,Rg?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),b_=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,x_=W(b_,`u`).replace(/punct/g,f_).getRegex(),S_=W(b_,`u`).replace(/punct/g,g_).getRegex(),C_=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,w_=W(C_,`gu`).replace(/notPunctSpace/g,m_).replace(/punctSpace/g,p_).replace(/punct/g,f_).getRegex(),T_=W(C_,`gu`).replace(/notPunctSpace/g,v_).replace(/punctSpace/g,__).replace(/punct/g,g_).getRegex(),E_=W(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,m_).replace(/punctSpace/g,p_).replace(/punct/g,f_).getRegex(),D_=W(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,f_).getRegex(),O_=W(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,m_).replace(/punctSpace/g,p_).replace(/punct/g,f_).getRegex(),k_=W(/\\(punct)/,`gu`).replace(/punct/g,f_).getRegex(),A_=W(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),j_=W(t_).replace(`(?:-->|$)`,`-->`).getRegex(),M_=W(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,j_).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),N_=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,P_=W(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,N_).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),F_=W(/^!?\[(label)\]\[(ref)\]/).replace(`label`,N_).replace(`ref`,Zg).getRegex(),I_=W(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,Zg).getRegex(),L_=W(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,F_).replace(`nolink`,I_).getRegex(),R_=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,z_={_backpedal:Lg,anyPunctuation:k_,autolink:A_,blockSkip:y_,br:u_,code:l_,del:Lg,delLDelim:Lg,delRDelim:Lg,emStrongLDelim:x_,emStrongRDelimAst:w_,emStrongRDelimUnd:E_,escape:c_,link:P_,nolink:I_,punctuation:h_,reflink:F_,reflinkSearch:L_,tag:M_,text:d_,url:Lg},B_={...z_,link:W(/^!?\[(label)\]\((.*?)\)/).replace(`label`,N_).getRegex(),reflink:W(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,N_).getRegex()},V_={...z_,emStrongRDelimAst:T_,emStrongLDelim:S_,delLDelim:D_,delRDelim:O_,url:W(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,R_).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:W(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,R_).getRegex()},H_={...V_,br:W(u_).replace(`{2,}`,`*`).getRegex(),text:W(V_.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},U_={normal:i_,gfm:o_,pedantic:s_},W_={normal:z_,gfm:V_,breaks:H_,pedantic:B_},G_={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},K_=e=>G_[e];function q_(e,t){if(t){if(zg.escapeTest.test(e))return e.replace(zg.escapeReplace,K_)}else if(zg.escapeTestNoEncode.test(e))return e.replace(zg.escapeReplaceNoEncode,K_);return e}function J_(e){try{e=encodeURI(e).replace(zg.percentDecode,`%`)}catch{return null}return e}function Y_(e,t){let n=e.replace(zg.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(zg.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(zg.slashPipe,`|`);return n}function X_(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function Z_(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function Q_(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function $_(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function ev(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var tv=class{options;rules;lexer;constructor(e){this.options=e||Fg}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(this.rules.other.codeRemoveIndent,``);return{type:`code`,raw:t[0],codeBlockStyle:`indented`,text:this.options.pedantic?e:X_(e,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=ev(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=X_(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:X_(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=X_(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.blockquote(a);i[i.length-1]=o,n=n.substring(0,n.length-t.raw.length)+o.raw,r=r.substring(0,r.length-t.text.length)+o.text;break}else if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=Q_(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),e.task){if(e.text=e.text.replace(this.rules.other.listReplaceTask,``),e.tokens[0]?.type===`text`||e.tokens[0]?.type===`paragraph`){e.tokens[0].raw=e.tokens[0].raw.replace(this.rules.other.listReplaceTask,``),e.tokens[0].text=e.tokens[0].text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}}let t=this.rules.other.listTaskCheckbox.exec(e.raw);if(t){let n={type:`checkbox`,raw:t[0]+` `,checked:t[0]!==`[ ]`};e.checked=n.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=n.raw+e.tokens[0].raw,e.tokens[0].text=n.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(n)):e.tokens.unshift({type:`paragraph`,raw:n.raw,text:n.raw,tokens:[n]}):e.tokens.unshift(n)}}if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:`html`,block:!0,raw:t[0],pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:t[0],href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Y_(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:t[0],header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(Y_(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:t[0],depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=X_(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=Z_(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),$_(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return $_(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},nv=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Fg,this.options.tokenizer=this.options.tokenizer||new tv,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:zg,block:U_.normal,inline:W_.normal};this.options.pedantic?(t.block=U_.pedantic,t.inline=W_.pedantic):this.options.gfm&&(t.block=U_.gfm,this.options.breaks?t.inline=W_.breaks:t.inline=W_.gfm),this.tokenizer.rules=t}static get rules(){return{block:U_,inline:W_}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(zg.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){for(this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(zg.tabCharGlobal,`    `).replace(zg.spaceLine,``));e;){let r;if(this.options.extensions?.block?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let n=t.at(-1);r.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+r.raw,n.text+=`
`+r.text,this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+r.raw,n.text+=`
`+r.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title},t.push(r));continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i))){let a=t.at(-1);n&&a?.type===`paragraph`?(a.raw+=(a.raw.endsWith(`
`)?``:`
`)+r.raw,a.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(r),n=i.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+r.raw,n.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``;for(;e;){a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return t}},rv=class{options;parser;constructor(e){this.options=e||Fg}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(zg.notSpaceStart)?.[0],i=e.replace(zg.endingNewline,``)+`
`;return r?`<pre><code class="language-`+q_(r)+`">`+(n?i:q_(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:q_(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${q_(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=J_(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+q_(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=J_(e);if(i===null)return q_(n);e=i;let a=`<img src="${e}" alt="${q_(n)}"`;return t&&(a+=` title="${q_(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:q_(e.text)}},iv=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},av=class e{options;renderer;textRenderer;constructor(e){this.options=e||Fg,this.options.renderer=this.options.renderer||new rv,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new iv}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},ov=class{options;block;constructor(e){this.options=e||Fg}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?nv.lex:nv.lexInline}provideParser(){return this.block?av.parse:av.parseInline}},sv=new class{defaults=Pg();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=av;Renderer=rv;TextRenderer=iv;Lexer=nv;Tokenizer=tv;Hooks=ov;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new rv(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new tv(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new ov;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];ov.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&ov.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return nv.lex(e,t??this.defaults)}parser(e,t){return av.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer():e?nv.lex:nv.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser():e?av.parse:av.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer():e?nv.lex:nv.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser():e?av.parse:av.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+q_(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function G(e,t){return sv.parse(e,t)}G.options=G.setOptions=function(e){return sv.setOptions(e),G.defaults=sv.defaults,Ig(G.defaults),G},G.getDefaults=Pg,G.defaults=Fg,G.use=function(...e){return sv.use(...e),G.defaults=sv.defaults,Ig(G.defaults),G},G.walkTokens=function(e,t){return sv.walkTokens(e,t)},G.parseInline=sv.parseInline,G.Parser=av,G.parser=av.parse,G.Renderer=rv,G.TextRenderer=iv,G.Lexer=nv,G.lexer=nv.lex,G.Tokenizer=tv,G.Hooks=ov,G.parse=G,G.options,G.setOptions,G.use,G.walkTokens,G.parseInline,av.parse,nv.lex;var cv={ALLOWED_TAGS:`a.b.blockquote.br.button.code.del.details.div.em.h1.h2.h3.h4.hr.i.li.ol.p.pre.span.strong.summary.table.tbody.td.th.thead.tr.ul.img`.split(`.`),ALLOWED_ATTR:[`class`,`href`,`rel`,`target`,`title`,`start`,`src`,`alt`,`data-code`,`type`,`aria-label`],ADD_DATA_URI_TAGS:[`img`]},lv=!1,uv=14e4,dv=4e4,fv=200,pv=5e4,mv=/^data:image\/[a-z0-9.+-]+;base64,/i,hv=new Map,gv=`chat-link-tail-blur`,_v=/([\u4E00-\u9FFF\u3000-\u303F\uFF01-\uFF5E\s]+)$/;function vv(e){let t=hv.get(e);return t===void 0?null:(hv.delete(e),hv.set(e,t),t)}function yv(e,t){if(hv.set(e,t),hv.size<=fv)return;let n=hv.keys().next().value;n&&hv.delete(n)}function bv(){lv||(lv=!0,Ng.addHook(`afterSanitizeAttributes`,e=>{if(!(e instanceof HTMLAnchorElement))return;let t=e.getAttribute(`href`);if(t){try{let n=new URL(t,window.location.href);if(n.protocol!==`http:`&&n.protocol!==`https:`&&n.protocol!==`mailto:`){e.removeAttribute(`href`);return}}catch{}e.setAttribute(`rel`,`noreferrer noopener`),e.setAttribute(`target`,`_blank`),t.toLowerCase().includes(`tail`)&&e.classList.add(gv)}}))}G.use({extensions:[{name:`url`,level:`inline`,start(e){let t=e.match(/https?:\/\//i);return t?t.index:-1},tokenizer(e){let t=/^https?:\/\/[^\s<]+[^<.,:;"')\]\s]/i.exec(e);if(t){let e=t[0],n=e.match(_v);return n&&(e=e.substring(0,e.length-n[1].length)),{type:`link`,raw:e,text:e,href:e,tokens:[{type:`text`,raw:e,text:e}]}}}}]});function xv(e){let t=e.trim();if(!t)return``;if(bv(),t.length<=pv){let e=vv(t);if(e!==null)return e}let n=y(t,uv),r=n.truncated?`\n\n… truncated (${n.total} chars, showing first ${n.text.length}).`:``;if(n.text.length>dv){let e=Tv(`${n.text}${r}`),i=Ng.sanitize(e,cv);return t.length<=pv&&yv(t,i),i}let i;try{i=G.parse(`${n.text}${r}`,{renderer:Sv,gfm:!0,breaks:!0})}catch(e){console.warn(`[markdown] marked.parse failed, falling back to plain text:`,e),i=`<pre class="code-block">${wv(`${n.text}${r}`)}</pre>`}let a=Ng.sanitize(i,cv);return t.length<=pv&&yv(t,a),a}var Sv=new G.Renderer;Sv.html=({text:e})=>wv(e),Sv.image=e=>{let t=Cv(e.text),n=e.href?.trim()??``;return mv.test(n)?`<img class="markdown-inline-image" src="${wv(n)}" alt="${wv(t)}">`:wv(t)};function Cv(e){return e?.trim()||`image`}Sv.code=({text:e,lang:t,escaped:n})=>{let r=`<pre><code${t?` class="language-${wv(t)}"`:``}>${n?e:wv(e)}</code></pre>`,i=`<div class="code-block-header">${t?`<span class="code-block-lang">${wv(t)}</span>`:``}${`<button type="button" class="code-block-copy" data-code="${e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}" aria-label="Copy code"><span class="code-block-copy__idle">Copy</span><span class="code-block-copy__done">Copied!</span></button>`}</div>`,a=e.trim();if(t===`json`||!t&&(a.startsWith(`{`)&&a.endsWith(`}`)||a.startsWith(`[`)&&a.endsWith(`]`))){let t=e.split(`
`).length;return`<details class="json-collapse"><summary>${t>1?`JSON &middot; ${t} lines`:`JSON`}</summary><div class="code-block-wrapper">${i}${r}</div></details>`}return`<div class="code-block-wrapper">${i}${r}</div>`};function wv(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function Tv(e){return`<div class="markdown-plain-text-fallback">${wv(e.replace(/\r\n?/g,`
`))}</div>`}var Ev=`data:`,Dv=new Set([`http:`,`https:`,`blob:`]),Ov=new Set([`image/svg+xml`]);function kv(e){if(!e.toLowerCase().startsWith(Ev))return!1;let t=e.indexOf(`,`);if(t<5)return!1;let n=e.slice(5,t).split(`;`)[0]?.trim().toLowerCase()??``;return n.startsWith(`image/`)?!Ov.has(n):!1}function Av(e,t,n={}){let r=e.trim();if(!r)return null;if(n.allowDataImage===!0&&kv(r))return r;if(r.toLowerCase().startsWith(Ev))return null;try{let e=new URL(r,t);return Dv.has(e.protocol.toLowerCase())?e.toString():null}catch{return null}}function jv(e,t={}){let n=Av(e,t.baseHref??window.location.href,t);if(!n)return null;let r=window.open(n,`_blank`,`noopener,noreferrer`);return r&&(r.opener=null),r}var Mv=/\p{Script=Hebrew}|\p{Script=Arabic}|\p{Script=Syriac}|\p{Script=Thaana}|\p{Script=Nko}|\p{Script=Samaritan}|\p{Script=Mandaic}|\p{Script=Adlam}|\p{Script=Phoenician}|\p{Script=Lydian}/u;function Nv(e,t=/[\s\p{P}\p{S}]/u){if(!e)return`ltr`;for(let n of e)if(!t.test(n))return Mv.test(n)?`rtl`:`ltr`;return`ltr`}var Pv=[{id:`read`,label:`read`,description:`Read file contents`,sectionId:`fs`,profiles:[`coding`]},{id:`write`,label:`write`,description:`Create or overwrite files`,sectionId:`fs`,profiles:[`coding`]},{id:`edit`,label:`edit`,description:`Make precise edits`,sectionId:`fs`,profiles:[`coding`]},{id:`apply_patch`,label:`apply_patch`,description:`Patch files`,sectionId:`fs`,profiles:[`coding`]},{id:`exec`,label:`exec`,description:`Run shell commands`,sectionId:`runtime`,profiles:[`coding`]},{id:`process`,label:`process`,description:`Manage background processes`,sectionId:`runtime`,profiles:[`coding`]},{id:`code_execution`,label:`code_execution`,description:`Run sandboxed remote analysis`,sectionId:`runtime`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`web_search`,label:`web_search`,description:`Search the web`,sectionId:`web`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`web_fetch`,label:`web_fetch`,description:`Fetch web content`,sectionId:`web`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`x_search`,label:`x_search`,description:`Search X posts`,sectionId:`web`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`memory_search`,label:`memory_search`,description:`Semantic search`,sectionId:`memory`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`memory_get`,label:`memory_get`,description:`Read memory files`,sectionId:`memory`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`sessions_list`,label:`sessions_list`,description:`List sessions`,sectionId:`sessions`,profiles:[`coding`,`messaging`],includeInOpenClawGroup:!0},{id:`sessions_history`,label:`sessions_history`,description:`Session history`,sectionId:`sessions`,profiles:[`coding`,`messaging`],includeInOpenClawGroup:!0},{id:`sessions_send`,label:`sessions_send`,description:`Send to session`,sectionId:`sessions`,profiles:[`coding`,`messaging`],includeInOpenClawGroup:!0},{id:`sessions_spawn`,label:`sessions_spawn`,description:`Spawn sub-agent`,sectionId:`sessions`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`sessions_yield`,label:`sessions_yield`,description:`End turn to receive sub-agent results`,sectionId:`sessions`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`subagents`,label:`subagents`,description:`Manage sub-agents`,sectionId:`sessions`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`session_status`,label:`session_status`,description:`Session status`,sectionId:`sessions`,profiles:[`minimal`,`coding`,`messaging`],includeInOpenClawGroup:!0},{id:`browser`,label:`browser`,description:`Control web browser`,sectionId:`ui`,profiles:[],includeInOpenClawGroup:!0},{id:`canvas`,label:`canvas`,description:`Control canvases`,sectionId:`ui`,profiles:[],includeInOpenClawGroup:!0},{id:`message`,label:`message`,description:`Send messages`,sectionId:`messaging`,profiles:[`messaging`],includeInOpenClawGroup:!0},{id:`cron`,label:`cron`,description:`Schedule tasks`,sectionId:`automation`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`gateway`,label:`gateway`,description:`Gateway control`,sectionId:`automation`,profiles:[],includeInOpenClawGroup:!0},{id:`nodes`,label:`nodes`,description:`Nodes + devices`,sectionId:`nodes`,profiles:[],includeInOpenClawGroup:!0},{id:`agents_list`,label:`agents_list`,description:`List agents`,sectionId:`agents`,profiles:[],includeInOpenClawGroup:!0},{id:`image`,label:`image`,description:`Image understanding`,sectionId:`media`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`image_generate`,label:`image_generate`,description:`Image generation`,sectionId:`media`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`tts`,label:`tts`,description:`Text-to-speech conversion`,sectionId:`media`,profiles:[],includeInOpenClawGroup:!0}];new Map(Pv.map(e=>[e.id,e]));function Fv(e){return Pv.filter(t=>t.profiles.includes(e)).map(e=>e.id)}var Iv={minimal:{allow:Fv(`minimal`)},coding:{allow:Fv(`coding`)},messaging:{allow:Fv(`messaging`)},full:{}};function Lv(){let e=new Map;for(let t of Pv){let n=`group:${t.sectionId}`,r=e.get(n)??[];r.push(t.id),e.set(n,r)}let t=Pv.filter(e=>e.includeInOpenClawGroup).map(e=>e.id);return{"group:openclaw":t,...Object.fromEntries(e.entries())}}var Rv=Lv();function zv(e){if(!e)return;let t=Iv[e];if(t&&!(!t.allow&&!t.deny))return{allow:t.allow?[...t.allow]:void 0,deny:t.deny?[...t.deny]:void 0}}var Bv={bash:`exec`,"apply-patch":`apply_patch`},Vv={...Rv};function Hv(e){let t=e.trim().toLowerCase();return Bv[t]??t}function Uv(e){return e?e.map(Hv).filter(Boolean):[]}function Wv(e){let t=Uv(e),n=[];for(let e of t){let t=Vv[e];if(t){n.push(...t);continue}n.push(e)}return Array.from(new Set(n))}function Gv(e){return zv(e)}var Kv=[{id:`fs`,label:`Files`,tools:[{id:`read`,label:`read`,description:`Read file contents`},{id:`write`,label:`write`,description:`Create or overwrite files`},{id:`edit`,label:`edit`,description:`Make precise edits`},{id:`apply_patch`,label:`apply_patch`,description:`Patch files (OpenAI)`}]},{id:`runtime`,label:`Runtime`,tools:[{id:`exec`,label:`exec`,description:`Run shell commands`},{id:`process`,label:`process`,description:`Manage background processes`}]},{id:`web`,label:`Web`,tools:[{id:`web_search`,label:`web_search`,description:`Search the web`},{id:`web_fetch`,label:`web_fetch`,description:`Fetch web content`}]},{id:`memory`,label:`Memory`,tools:[{id:`memory_search`,label:`memory_search`,description:`Semantic search`},{id:`memory_get`,label:`memory_get`,description:`Read memory files`}]},{id:`sessions`,label:`Sessions`,tools:[{id:`sessions_list`,label:`sessions_list`,description:`List sessions`},{id:`sessions_history`,label:`sessions_history`,description:`Session history`},{id:`sessions_send`,label:`sessions_send`,description:`Send to session`},{id:`sessions_spawn`,label:`sessions_spawn`,description:`Spawn sub-agent`},{id:`session_status`,label:`session_status`,description:`Session status`}]},{id:`ui`,label:`UI`,tools:[{id:`browser`,label:`browser`,description:`Control web browser`},{id:`canvas`,label:`canvas`,description:`Control canvases`}]},{id:`messaging`,label:`Messaging`,tools:[{id:`message`,label:`message`,description:`Send messages`}]},{id:`automation`,label:`Automation`,tools:[{id:`cron`,label:`cron`,description:`Schedule tasks`},{id:`gateway`,label:`gateway`,description:`Gateway control`}]},{id:`nodes`,label:`Nodes`,tools:[{id:`nodes`,label:`nodes`,description:`Nodes + devices`}]},{id:`agents`,label:`Agents`,tools:[{id:`agents_list`,label:`agents_list`,description:`List agents`}]},{id:`media`,label:`Media`,tools:[{id:`image`,label:`image`,description:`Image understanding`}]}],qv=[{id:`minimal`,label:`Minimal`},{id:`coding`,label:`Coding`},{id:`messaging`,label:`Messaging`},{id:`full`,label:`Full`}];function Jv(e){return e?.groups?.length?e.groups.map(e=>({id:e.id,label:e.label,source:e.source,pluginId:e.pluginId,tools:e.tools.map(e=>({id:e.id,label:e.label,description:e.description,source:e.source,pluginId:e.pluginId,optional:e.optional,defaultProfiles:[...e.defaultProfiles]}))})):Kv}function Yv(e){return e?.profiles?.length?e.profiles:qv}function Xv(e){return sa(e.name?.trim()||e.identity?.name?.trim()||e.id)}var Zv=/^(https?:\/\/|data:image\/|\/)/i;function Qv(e,t){let n=[t?.avatar?.trim(),e.identity?.avatarUrl?.trim(),e.identity?.avatar?.trim()];for(let e of n)if(e&&Zv.test(e))return e;return null}function $v(e){let t=e?.trim()?e.replace(/\/$/,``):``;return t?`${t}/assets/kova-logo.png`:`/assets/kova-logo.png`}function ey(e,t){return t&&e===t?`default`:null}function ty(e,t){let n=e;return{entry:(n?.agents?.list??[]).find(e=>e?.id===t),defaults:n?.agents?.defaults,globalTools:n?.tools}}function ny(e,t,n,r,i){let a=ty(t,e.id),o=(n&&n.agentId===e.id?n.workspace:null)||a.entry?.workspace||a.defaults?.workspace||e.workspace||`default`,s=a.entry?.model?ry(a.entry?.model):a.defaults?.model?ry(a.defaults?.model):ry(e.model),c=i?.name?.trim()||e.identity?.name?.trim()||e.name?.trim()||a.entry?.name||e.id,l=Qv(e,i)?`custom`:`—`,u=Array.isArray(a.entry?.skills)?a.entry?.skills:null,d=u?.length??null;return{workspace:o,model:s,identityName:c,identityAvatar:l,skillsLabel:u?`${d} selected`:`all skills`,isDefault:!!(r&&e.id===r)}}function ry(e){if(!e)return`-`;if(typeof e==`string`)return e.trim()||`-`;if(typeof e==`object`&&e){let t=e,n=t.primary?.trim();if(n){let e=Array.isArray(t.fallbacks)?t.fallbacks.length:0;return e>0?`${n} (+${e} fallback)`:n}}return`-`}function iy(e){let t=e.match(/^(.+) \(\+\d+ fallback\)$/);return t?t[1]:e}function ay(e){if(!e)return null;if(typeof e==`string`)return e.trim()||null;if(typeof e==`object`&&e){let t=e;return(typeof t.primary==`string`?t.primary:typeof t.model==`string`?t.model:typeof t.id==`string`?t.id:typeof t.value==`string`?t.value:null)?.trim()||null}return null}function oy(e){if(!e||typeof e==`string`)return null;if(typeof e==`object`&&e){let t=e,n=Array.isArray(t.fallbacks)?t.fallbacks:Array.isArray(t.fallback)?t.fallback:null;return n?n.filter(e=>typeof e==`string`):null}return null}function sy(e,t){return oy(e)??oy(t)}function cy(e,t){if(typeof t!=`string`)return;let n=t.trim();n&&e.add(n)}function ly(e,t){if(!t)return;if(typeof t==`string`){cy(e,t);return}if(typeof t!=`object`)return;let n=t;cy(e,n.primary),cy(e,n.model),cy(e,n.id),cy(e,n.value);let r=Array.isArray(n.fallbacks)?n.fallbacks:Array.isArray(n.fallback)?n.fallback:[];for(let t of r)cy(e,t)}function uy(e){let t=Array.from(e),n=Array.from({length:t.length},()=>``),r=(e,r,i)=>{let a=e,o=r,s=e;for(;a<r&&o<i;)n[s++]=t[a].localeCompare(t[o])<=0?t[a++]:t[o++];for(;a<r;)n[s++]=t[a++];for(;o<i;)n[s++]=t[o++];for(let r=e;r<i;r+=1)t[r]=n[r]},i=(e,t)=>{if(t-e<=1)return;let n=e+t>>>1;i(e,n),i(n,t),r(e,n,t)};return i(0,t.length),t}function dy(e){if(!e||typeof e!=`object`)return[];let t=e.agents;if(!t||typeof t!=`object`)return[];let n=new Set,r=t.defaults;if(r&&typeof r==`object`){let e=r;ly(n,e.model);let t=e.models;if(t&&typeof t==`object`)for(let e of Object.keys(t))cy(n,e)}let i=t.list;if(i&&typeof i==`object`)for(let e of Object.values(i))!e||typeof e!=`object`||ly(n,e.model);return uy(n)}function fy(e){return e.split(`,`).map(e=>e.trim()).filter(Boolean)}function py(e){let t=e?.agents?.defaults?.models;if(!t||typeof t!=`object`)return[];let n=[];for(let[e,r]of Object.entries(t)){let t=e.trim();if(!t)continue;let i=r&&typeof r==`object`&&`alias`in r&&typeof r.alias==`string`?r.alias?.trim():void 0,a=i&&i!==t?`${i} (${t})`:t;n.push({value:t,label:a})}return n}function my(e,t,n){let r=new Set,i=[],a=(e,t)=>{let n=e.toLowerCase();r.has(n)||(r.add(n),i.push({value:e,label:t}))};for(let t of py(e))a(t.value,t.label);if(n)for(let e of n){let t=e.provider?.trim();a(t?`${t}/${e.id}`:e.id,t?`${e.id} · ${t}`:e.id)}return t&&!r.has(t.toLowerCase())&&i.unshift({value:t,label:`Current (${t})`}),i.length===0?u:i.map(e=>c`<option value=${e.value}>${e.label}</option>`)}function hy(e){let t=Hv(e);if(!t)return{kind:`exact`,value:``};if(t===`*`)return{kind:`all`};if(!t.includes(`*`))return{kind:`exact`,value:t};let n=t.replace(/[.*+?^${}()|[\\]\\]/g,`\\$&`);return{kind:`regex`,value:RegExp(`^${n.replaceAll(`\\*`,`.*`)}$`)}}function gy(e){return Array.isArray(e)?Wv(e).map(hy).filter(e=>e.kind!==`exact`||e.value.length>0):[]}function _y(e,t){for(let n of t)if(n.kind===`all`||n.kind===`exact`&&e===n.value||n.kind===`regex`&&n.value.test(e))return!0;return!1}function vy(e,t){if(!t)return!0;let n=Hv(e);if(_y(n,gy(t.deny)))return!1;let r=gy(t.allow);return!!(r.length===0||_y(n,r)||n===`apply_patch`&&_y(`exec`,r))}function yy(e,t){if(!Array.isArray(t)||t.length===0)return!1;let n=Hv(e),r=gy(t);return!!(_y(n,r)||n===`apply_patch`&&_y(`exec`,r))}function by(e){return Gv(e)??void 0}var xy=1500,Sy=2e3,Cy=`Copy as markdown`,wy=`Copied`,Ty=`Copy failed`;async function Ey(e){if(!e)return!1;try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}function Dy(e,t){e.title=t,e.setAttribute(`aria-label`,t)}function Oy(e){let t=e.label??Cy;return c`
    <button
      class="btn btn--xs chat-copy-btn"
      type="button"
      title=${t}
      aria-label=${t}
      @click=${async n=>{let r=n.currentTarget;if(!r||r.dataset.copying===`1`)return;r.dataset.copying=`1`,r.setAttribute(`aria-busy`,`true`),r.disabled=!0;let i=await Ey(e.text());if(r.isConnected){if(delete r.dataset.copying,r.removeAttribute(`aria-busy`),r.disabled=!1,!i){r.dataset.error=`1`,Dy(r,Ty),window.setTimeout(()=>{r.isConnected&&(delete r.dataset.error,Dy(r,t))},Sy);return}r.dataset.copied=`1`,Dy(r,wy),window.setTimeout(()=>{r.isConnected&&(delete r.dataset.copied,Dy(r,t))},xy)}}}
    >
      <span class="chat-copy-btn__icon" aria-hidden="true">
        <span class="chat-copy-btn__icon-copy">${H.copy}</span>
        <span class="chat-copy-btn__icon-check">${H.check}</span>
      </span>
    </button>
  `}function ky(e,t=Cy){return Oy({text:()=>e,label:t})}function Ay(e){return ky(e,Cy)}function jy(e){return typeof e==`string`?e.toLowerCase():``}function My(e){let t=jy(e);return t===`toolcall`||t===`tool_call`||t===`tooluse`||t===`tool_use`}function Ny(e){let t=jy(e);return t===`toolresult`||t===`tool_result`}function Py(e){return e.args??e.arguments??e.input}function Fy(e){let t=e,n=typeof t.role==`string`?t.role:`unknown`,r=typeof t.toolCallId==`string`||typeof t.tool_call_id==`string`,i=t.content,a=Array.isArray(i)?i:null,o=Array.isArray(a)&&a.some(e=>{let t=e;return Ny(t.type)||My(t.type)}),s=typeof t.toolName==`string`||typeof t.tool_name==`string`;(r||o||s)&&(n=`toolResult`);let c=[];typeof t.content==`string`?c=[{type:`text`,text:t.content}]:Array.isArray(t.content)?c=t.content.map(e=>({type:e.type||`text`,text:e.text,name:e.name,args:Py(e)})):typeof t.text==`string`&&(c=[{type:`text`,text:t.text}]);let l=typeof t.timestamp==`number`?t.timestamp:Date.now(),u=typeof t.id==`string`?t.id:void 0,d=typeof t.senderLabel==`string`&&t.senderLabel.trim()?t.senderLabel.trim():null;return(n===`user`||n===`User`)&&(c=c.map(e=>e.type===`text`&&typeof e.text==`string`?{...e,text:ph(e.text)}:e)),{role:n,content:c,timestamp:l,id:u,senderLabel:d}}function Iy(e){let t=e.toLowerCase();return e===`user`||e===`User`?e:e===`assistant`?`assistant`:e===`system`?`system`:t===`toolresult`||t===`tool_result`||t===`tool`||t===`function`?`tool`:e}function Ly(e){let t=e,n=typeof t.role==`string`?t.role.toLowerCase():``;return n===`toolresult`||n===`tool_result`}function Ry(){let e=globalThis;return e.SpeechRecognition??e.webkitSpeechRecognition??null}function zy(){return Ry()!==null}var By=null;function Vy(e){let t=Ry();if(!t)return e.onError?.(`Speech recognition is not supported in this browser`),!1;Hy();let n=new t;return n.continuous=!0,n.interimResults=!0,n.lang=navigator.language||`en-US`,n.addEventListener(`start`,()=>e.onStart?.()),n.addEventListener(`result`,t=>{let n=t,r=``,i=``;for(let e=n.resultIndex;e<n.results.length;e++){let t=n.results[e];if(!t?.[0])continue;let a=t[0].transcript;t.isFinal?i+=a:r+=a}i?e.onTranscript(i,!0):r&&e.onTranscript(r,!1)}),n.addEventListener(`error`,t=>{let n=t;n.error===`aborted`||n.error===`no-speech`||e.onError?.(n.error)}),n.addEventListener(`end`,()=>{By===n&&(By=null),e.onEnd?.()}),By=n,n.start(),!0}function Hy(){if(By){let e=By;By=null;try{e.stop()}catch{}}}function Uy(){return`speechSynthesis`in globalThis}var Wy=null;function Gy(e,t){if(!Uy())return t?.onError?.(`Speech synthesis is not supported in this browser`),!1;Ky();let n=Jy(e);if(!n.trim())return!1;let r=new SpeechSynthesisUtterance(n);return r.rate=1,r.pitch=1,r.addEventListener(`start`,()=>t?.onStart?.()),r.addEventListener(`end`,()=>{Wy===r&&(Wy=null),t?.onEnd?.()}),r.addEventListener(`error`,e=>{Wy===r&&(Wy=null),!(e.error===`canceled`||e.error===`interrupted`)&&t?.onError?.(e.error)}),Wy=r,speechSynthesis.speak(r),!0}function Ky(){Wy&&=null,Uy()&&speechSynthesis.cancel()}function qy(){return Uy()&&speechSynthesis.speaking}function Jy(e){return e.replace(/```[\s\S]*?```/g,``).replace(/`[^`]+`/g,``).replace(/!\[.*?\]\(.*?\)/g,``).replace(/\[([^\]]+)\]\(.*?\)/g,`$1`).replace(/^#{1,6}\s+/gm,``).replace(/\*{1,3}(.*?)\*{1,3}/g,`$1`).replace(/_{1,3}(.*?)_{1,3}/g,`$1`).replace(/^>\s?/gm,``).replace(/^[-*_]{3,}\s*$/gm,``).replace(/^\s*[-*+]\s+/gm,``).replace(/^\s*\d+\.\s+/gm,``).replace(/<[^>]+>/g,``).replace(/\n{3,}/g,`

`).trim()}var Yy={version:1,fallback:{emoji:`🧩`,detailKeys:[`command`,`path`,`url`,`targetUrl`,`targetId`,`ref`,`element`,`node`,`nodeId`,`id`,`requestId`,`to`,`channelId`,`guildId`,`userId`,`name`,`query`,`pattern`,`messageId`]},tools:{bash:{emoji:`🛠️`,title:`Bash`,detailKeys:[`command`]},process:{emoji:`🧰`,title:`Process`,detailKeys:[`sessionId`]},read:{emoji:`📖`,title:`Read`,detailKeys:[`path`]},write:{emoji:`✍️`,title:`Write`,detailKeys:[`path`]},edit:{emoji:`📝`,title:`Edit`,detailKeys:[`path`]},attach:{emoji:`📎`,title:`Attach`,detailKeys:[`path`,`url`,`fileName`]},browser:{emoji:`🌐`,title:`Browser`,actions:{status:{label:`status`},start:{label:`start`},stop:{label:`stop`},tabs:{label:`tabs`},open:{label:`open`,detailKeys:[`targetUrl`]},focus:{label:`focus`,detailKeys:[`targetId`]},close:{label:`close`,detailKeys:[`targetId`]},snapshot:{label:`snapshot`,detailKeys:[`targetUrl`,`targetId`,`ref`,`element`,`format`]},screenshot:{label:`screenshot`,detailKeys:[`targetUrl`,`targetId`,`ref`,`element`]},navigate:{label:`navigate`,detailKeys:[`targetUrl`,`targetId`]},console:{label:`console`,detailKeys:[`level`,`targetId`]},pdf:{label:`pdf`,detailKeys:[`targetId`]},upload:{label:`upload`,detailKeys:[`paths`,`ref`,`inputRef`,`element`,`targetId`]},dialog:{label:`dialog`,detailKeys:[`accept`,`promptText`,`targetId`]},act:{label:`act`,detailKeys:[`request.kind`,`request.ref`,`request.selector`,`request.text`,`request.value`]}}},canvas:{emoji:`🖼️`,title:`Canvas`,actions:{present:{label:`present`,detailKeys:[`target`,`node`,`nodeId`]},hide:{label:`hide`,detailKeys:[`node`,`nodeId`]},navigate:{label:`navigate`,detailKeys:[`url`,`node`,`nodeId`]},eval:{label:`eval`,detailKeys:[`javaScript`,`node`,`nodeId`]},snapshot:{label:`snapshot`,detailKeys:[`format`,`node`,`nodeId`]},a2ui_push:{label:`A2UI push`,detailKeys:[`jsonlPath`,`node`,`nodeId`]},a2ui_reset:{label:`A2UI reset`,detailKeys:[`node`,`nodeId`]}}},nodes:{emoji:`📱`,title:`Nodes`,actions:{status:{label:`status`},describe:{label:`describe`,detailKeys:[`node`,`nodeId`]},pending:{label:`pending`},approve:{label:`approve`,detailKeys:[`requestId`]},reject:{label:`reject`,detailKeys:[`requestId`]},notify:{label:`notify`,detailKeys:[`node`,`nodeId`,`title`,`body`]},camera_snap:{label:`camera snap`,detailKeys:[`node`,`nodeId`,`facing`,`deviceId`]},camera_list:{label:`camera list`,detailKeys:[`node`,`nodeId`]},camera_clip:{label:`camera clip`,detailKeys:[`node`,`nodeId`,`facing`,`duration`,`durationMs`]},screen_record:{label:`screen record`,detailKeys:[`node`,`nodeId`,`duration`,`durationMs`,`fps`,`screenIndex`]}}},cron:{emoji:`⏰`,title:`Cron`,actions:{status:{label:`status`},list:{label:`list`},add:{label:`add`,detailKeys:[`job.name`,`job.id`,`job.schedule`,`job.cron`]},update:{label:`update`,detailKeys:[`id`]},remove:{label:`remove`,detailKeys:[`id`]},run:{label:`run`,detailKeys:[`id`]},runs:{label:`runs`,detailKeys:[`id`]},wake:{label:`wake`,detailKeys:[`text`,`mode`]}}},gateway:{emoji:`🔌`,title:`Gateway`,actions:{restart:{label:`restart`,detailKeys:[`reason`,`delayMs`]}}},whatsapp_login:{emoji:`🟢`,title:`WhatsApp Login`,actions:{start:{label:`start`},wait:{label:`wait`}}},discord:{emoji:`💬`,title:`Discord`,actions:{react:{label:`react`,detailKeys:[`channelId`,`messageId`,`emoji`]},reactions:{label:`reactions`,detailKeys:[`channelId`,`messageId`]},sticker:{label:`sticker`,detailKeys:[`to`,`stickerIds`]},poll:{label:`poll`,detailKeys:[`question`,`to`]},permissions:{label:`permissions`,detailKeys:[`channelId`]},readMessages:{label:`read messages`,detailKeys:[`channelId`,`limit`]},sendMessage:{label:`send`,detailKeys:[`to`,`content`]},editMessage:{label:`edit`,detailKeys:[`channelId`,`messageId`]},deleteMessage:{label:`delete`,detailKeys:[`channelId`,`messageId`]},threadCreate:{label:`thread create`,detailKeys:[`channelId`,`name`]},threadList:{label:`thread list`,detailKeys:[`guildId`,`channelId`]},threadReply:{label:`thread reply`,detailKeys:[`channelId`,`content`]},pinMessage:{label:`pin`,detailKeys:[`channelId`,`messageId`]},unpinMessage:{label:`unpin`,detailKeys:[`channelId`,`messageId`]},listPins:{label:`list pins`,detailKeys:[`channelId`]},searchMessages:{label:`search`,detailKeys:[`guildId`,`content`]},memberInfo:{label:`member`,detailKeys:[`guildId`,`userId`]},roleInfo:{label:`roles`,detailKeys:[`guildId`]},emojiList:{label:`emoji list`,detailKeys:[`guildId`]},roleAdd:{label:`role add`,detailKeys:[`guildId`,`userId`,`roleId`]},roleRemove:{label:`role remove`,detailKeys:[`guildId`,`userId`,`roleId`]},channelInfo:{label:`channel`,detailKeys:[`channelId`]},channelList:{label:`channels`,detailKeys:[`guildId`]},voiceStatus:{label:`voice`,detailKeys:[`guildId`,`userId`]},eventList:{label:`events`,detailKeys:[`guildId`]},eventCreate:{label:`event create`,detailKeys:[`guildId`,`name`]},timeout:{label:`timeout`,detailKeys:[`guildId`,`userId`]},kick:{label:`kick`,detailKeys:[`guildId`,`userId`]},ban:{label:`ban`,detailKeys:[`guildId`,`userId`]}}}}};function Xy(e){if(!e)return e;let t=e.trim();return t.length>=2&&(t.startsWith(`"`)&&t.endsWith(`"`)||t.startsWith(`'`)&&t.endsWith(`'`))?t.slice(1,-1).trim():t}function Zy(e,t=48){if(!e)return[];let n=[],r=``,i,a=!1;for(let o=0;o<e.length;o+=1){let s=e[o];if(a){r+=s,a=!1;continue}if(s===`\\`){a=!0;continue}if(i){s===i?i=void 0:r+=s;continue}if(s===`"`||s===`'`){i=s;continue}if(/\s/.test(s)){if(!r)continue;if(n.push(r),n.length>=t)return n;r=``;continue}r+=s}return r&&n.push(r),n}function Qy(e){if(!e)return;let t=Xy(e)??e;return(t.split(/[/]/).at(-1)??t).trim().toLowerCase()}function $y(e,t){let n=new Set(t);for(let r=0;r<e.length;r+=1){let i=e[r];if(i){if(n.has(i)){let t=e[r+1];if(t&&!t.startsWith(`-`))return t;continue}for(let e of t)if(e.startsWith(`--`)&&i.startsWith(`${e}=`))return i.slice(e.length+1)}}}function eb(e,t=1,n=[]){let r=[],i=new Set(n);for(let n=t;n<e.length;n+=1){let t=e[n];if(t){if(t===`--`){for(let t=n+1;t<e.length;t+=1){let n=e[t];n&&r.push(n)}break}if(t.startsWith(`--`)){if(t.includes(`=`))continue;i.has(t)&&(n+=1);continue}if(t.startsWith(`-`)){i.has(t)&&(n+=1);continue}r.push(t)}}return r}function tb(e,t=1,n=[]){return eb(e,t,n)[0]}function nb(e){if(e.length===0)return e;let t=0;if(Qy(e[0])===`env`){for(t=1;t<e.length;){let n=e[t];if(!n)break;if(n.startsWith(`-`)){t+=1;continue}if(/^[A-Za-z_][A-Za-z0-9_]*=/.test(n)){t+=1;continue}break}return e.slice(t)}for(;t<e.length&&/^[A-Za-z_][A-Za-z0-9_]*=/.test(e[t]);)t+=1;return e.slice(t)}function rb(e){let t=Zy(e,10);if(t.length<3)return e;let n=Qy(t[0]);if(!(n===`bash`||n===`sh`||n===`zsh`||n===`fish`))return e;let r=t.findIndex((e,t)=>t>0&&(e===`-c`||e===`-lc`||e===`-ic`));if(r===-1)return e;let i=t.slice(r+1).join(` `).trim();return i?Xy(i)??e:e}function ib(e,t){let n,r=!1;for(let i=0;i<e.length;i+=1){let a=e[i];if(r){r=!1;continue}if(a===`\\`){r=!0;continue}if(n){a===n&&(n=void 0);continue}if(a===`"`||a===`'`){n=a;continue}if(t(a,i)===!1)return}}function ab(e){let t=[],n=0;return ib(e,(r,i)=>r===`;`?(t.push(e.slice(n,i)),n=i+1,!0):(r===`&`||r===`|`)&&e[i+1]===r?(t.push(e.slice(n,i)),n=i+2,!0):!0),t.push(e.slice(n)),t.map(e=>e.trim()).filter(e=>e.length>0)}function ob(e){let t=[],n=0;return ib(e,(r,i)=>(r===`|`&&e[i-1]!==`|`&&e[i+1]!==`|`&&(t.push(e.slice(n,i)),n=i+1),!0)),t.push(e.slice(n)),t.map(e=>e.trim()).filter(e=>e.length>0)}function sb(e){let t=Zy(e,3),n=Qy(t[0]);if(n===`cd`||n===`pushd`)return t[1]||void 0}function cb(e){let t=Qy(Zy(e,2)[0]);return t===`cd`||t===`pushd`||t===`popd`}function lb(e){return Qy(Zy(e,2)[0])===`popd`}function ub(e){let t=e.trim(),n;for(let e=0;e<4;e+=1){let r;ib(t,(e,n)=>{if(e===`&`&&t[n+1]===`&`)return r={index:n,length:2},!1;if(e===`|`&&t[n+1]===`|`)return r={index:n,length:2,isOr:!0},!1;if(e===`;`||e===`
`)return r={index:n,length:1},!1});let i=(r?t.slice(0,r.index):t).trim(),a=(r?!r.isOr:e>0)&&cb(i);if(!(i.startsWith(`set `)||i.startsWith(`export `)||i.startsWith(`unset `)||a)||(a&&(n=lb(i)?void 0:sb(i)??n),t=r?t.slice(r.index+r.length).trimStart():``,!t))break}return{command:t.trim(),chdirPath:n}}function db(e){return e&&typeof e==`object`?e:void 0}function fb(e){if(e.length===0)return`run command`;let t=Qy(e[0])??`command`;if(t===`git`){let t=new Set([`-C`,`-c`,`--git-dir`,`--work-tree`,`--namespace`,`--config-env`]),n=$y(e,[`-C`]),r;for(let n=1;n<e.length;n+=1){let i=e[n];if(i){if(i===`--`){r=tb(e,n+1);break}if(i.startsWith(`--`)){if(i.includes(`=`))continue;t.has(i)&&(n+=1);continue}if(i.startsWith(`-`)){t.has(i)&&(n+=1);continue}r=i;break}}let i={status:`check git status`,diff:`check git diff`,log:`view git history`,show:`show git object`,branch:`list git branches`,checkout:`switch git branch`,switch:`switch git branch`,commit:`create git commit`,pull:`pull git changes`,push:`push git changes`,fetch:`fetch git changes`,merge:`merge git changes`,rebase:`rebase git branch`,add:`stage git changes`,restore:`restore git files`,reset:`reset git state`,stash:`stash git changes`};return r&&i[r]?i[r]:!r||r.startsWith(`/`)||r.startsWith(`~`)||r.includes(`/`)?n?`run git command in ${n}`:`run git command`:`run git ${r}`}if(t===`grep`||t===`rg`||t===`ripgrep`){let t=eb(e,1,[`-e`,`--regexp`,`-f`,`--file`,`-m`,`--max-count`,`-A`,`--after-context`,`-B`,`--before-context`,`-C`,`--context`]),n=$y(e,[`-e`,`--regexp`])??t[0],r=t.length>1?t.at(-1):void 0;return n?r?`search "${n}" in ${r}`:`search "${n}"`:`search text`}if(t===`find`){let t=e[1]&&!e[1].startsWith(`-`)?e[1]:`.`,n=$y(e,[`-name`,`-iname`]);return n?`find files named "${n}" in ${t}`:`find files in ${t}`}if(t===`ls`){let t=tb(e,1);return t?`list files in ${t}`:`list files`}if(t===`head`||t===`tail`){let n=$y(e,[`-n`,`--lines`])??e.slice(1).find(e=>/^-\d+$/.test(e))?.slice(1),r=eb(e,1,[`-n`,`--lines`]),i=r.at(-1);i&&/^\d+$/.test(i)&&r.length===1&&(i=void 0);let a=t===`head`?`first`:`last`,o=n===`1`?`line`:`lines`;return n&&i?`show ${a} ${n} ${o} of ${i}`:n?`show ${a} ${n} ${o}`:i?`show ${i}`:`show ${t} output`}if(t===`cat`){let t=tb(e,1);return t?`show ${t}`:`show output`}if(t===`sed`){let t=$y(e,[`-e`,`--expression`]),n=eb(e,1,[`-e`,`--expression`,`-f`,`--file`]),r=t??n[0],i=t?n[0]:n[1];if(r){let e=(Xy(r)??r).replace(/\s+/g,``),t=e.match(/^([0-9]+),([0-9]+)p$/);if(t)return i?`print lines ${t[1]}-${t[2]} from ${i}`:`print lines ${t[1]}-${t[2]}`;let n=e.match(/^([0-9]+)p$/);if(n)return i?`print line ${n[1]} from ${i}`:`print line ${n[1]}`}return i?`run sed on ${i}`:`run sed transform`}if(t===`printf`||t===`echo`)return`print text`;if(t===`cp`||t===`mv`){let n=eb(e,1,[`-t`,`--target-directory`,`-S`,`--suffix`]),r=n[0],i=n[1],a=t===`cp`?`copy`:`move`;return r&&i?`${a} ${r} to ${i}`:r?`${a} ${r}`:`${a} files`}if(t===`rm`){let t=tb(e,1);return t?`remove ${t}`:`remove files`}if(t===`mkdir`){let t=tb(e,1);return t?`create folder ${t}`:`create folder`}if(t===`touch`){let t=tb(e,1);return t?`create file ${t}`:`create file`}if(t===`curl`||t===`wget`){let t=e.find(e=>/^https?:\/\//i.test(e));return t?`fetch ${t}`:`fetch url`}if(t===`npm`||t===`pnpm`||t===`yarn`||t===`bun`){let n=eb(e,1,[`--prefix`,`-C`,`--cwd`,`--config`]),r=n[0]??`command`;return{install:`install dependencies`,test:`run tests`,build:`run build`,start:`start app`,lint:`run lint`,run:n[1]?`run ${n[1]}`:`run script`}[r]??`run ${t} ${r}`}if(t===`node`||t===`python`||t===`python3`||t===`ruby`||t===`php`){if(e.slice(1).find(e=>e.startsWith(`<<`)))return`run ${t} inline script (heredoc)`;if((t===`node`?$y(e,[`-e`,`--eval`]):t===`python`||t===`python3`?$y(e,[`-c`]):void 0)!==void 0)return`run ${t} inline script`;let n=tb(e,1,t===`node`?[`-e`,`--eval`,`-m`]:[`-c`,`-e`,`--eval`,`-m`]);return n?t===`node`?`${e.includes(`--check`)||e.includes(`-c`)?`check js syntax for`:`run node script`} ${n}`:`run ${t} ${n}`:`run ${t}`}if(t===`openclaw`){let t=tb(e,1);return t?`run openclaw ${t}`:`run openclaw`}let n=tb(e,1);return!n||n.length>48?`run ${t}`:/^[A-Za-z0-9._/-]+$/.test(n)?`run ${t} ${n}`:`run ${t}`}function pb(e){let t=ob(e);return t.length>1?`${fb(nb(Zy(t[0])))} -> ${fb(nb(Zy(t[t.length-1])))}${t.length>2?` (+${t.length-2} steps)`:``}`:fb(nb(Zy(e)))}function mb(e){let{command:t,chdirPath:n}=ub(e);if(!t)return n?{text:``,chdirPath:n}:void 0;let r=ab(t);if(r.length===0)return;let i=r.map(e=>pb(e));return{text:i.length===1?i[0]:i.join(` → `),chdirPath:n,allGeneric:i.every(e=>gb(e))}}var hb=`check git.view git.show git.list git.switch git.create git.pull git.push git.fetch git.merge git.rebase git.stage git.restore git.reset git.stash git.search .find files.list files.show first.show last.print line.print text.copy .move .remove .create folder.create file.fetch http.install dependencies.run tests.run build.start app.run lint.run openclaw.run node script.run node .run python.run ruby.run php.run sed.run git .run npm .run pnpm .run yarn .run bun .check js syntax`.split(`.`);function gb(e){return e===`run command`?!0:e.startsWith(`run `)?!hb.some(t=>e.startsWith(t)):!1}function _b(e,t=120){let n=e.replace(/\s*\n\s*/g,` `).replace(/\s{2,}/g,` `).trim();return n.length<=t?n:`${n.slice(0,Math.max(0,t-1))}…`}function vb(e){let t=db(e);if(!t)return;let n=typeof t.command==`string`?t.command.trim():void 0;if(!n)return;let r=rb(n),i=mb(r)??mb(n),a=i?.text||`run command`,o=(typeof t.workdir==`string`?t.workdir:typeof t.cwd==`string`?t.cwd:void 0)?.trim()||i?.chdirPath||void 0,s=_b(r);if(i?.allGeneric!==!1&&gb(a))return o?`${s} (in ${o})`:s;let c=o?`${a} (in ${o})`:a;return s&&s!==c&&s!==a?`${c} · \`${s}\``:c}function yb(e){return e&&typeof e==`object`?e:void 0}function bb(e){return(e??`tool`).trim()}function xb(e){let t=e.replace(/_/g,` `).trim();return t?t.split(/\s+/).map(e=>e.length<=2&&e.toUpperCase()===e?e:`${e.at(0)?.toUpperCase()??``}${e.slice(1)}`).join(` `):`Tool`}function Sb(e){let t=e?.trim();if(t)return t.replace(/_/g,` `)}function Cb(e){if(!e||typeof e!=`object`)return;let t=e.action;if(typeof t==`string`)return t.trim()||void 0}function wb(e){return Pb({toolKey:e.toolKey,args:e.args,meta:e.meta,action:Cb(e.args),spec:e.spec,fallbackDetailKeys:e.fallbackDetailKeys,detailMode:e.detailMode,detailCoerce:e.detailCoerce,detailMaxEntries:e.detailMaxEntries,detailFormatKey:e.detailFormatKey})}function Tb(e,t={}){let n=t.maxStringChars??160,r=t.maxArrayEntries??3;if(e!=null){if(typeof e==`string`){let t=e.trim();if(!t)return;let r=t.split(/\r?\n/)[0]?.trim()??``;return r?r.length>n?`${r.slice(0,Math.max(0,n-3))}…`:r:void 0}if(typeof e==`boolean`)return!e&&!t.includeFalse?void 0:e?`true`:`false`;if(typeof e==`number`)return Number.isFinite(e)?e===0&&!t.includeZero?void 0:String(e):t.includeNonFinite?String(e):void 0;if(Array.isArray(e)){let n=e.map(e=>Tb(e,t)).filter(e=>!!e);if(n.length===0)return;let i=n.slice(0,r).join(`, `);return n.length>r?`${i}…`:i}}}function Eb(e,t){if(!e||typeof e!=`object`)return;let n=e;for(let e of t.split(`.`)){if(!e||!n||typeof n!=`object`)return;n=n[e]}return n}function Db(e){let t=yb(e);if(t)for(let e of[t.path,t.file_path,t.filePath]){if(typeof e!=`string`)continue;let t=e.trim();if(t)return t}}function Ob(e){let t=yb(e);if(!t)return;let n=Db(t);if(!n)return;let r=typeof t.offset==`number`&&Number.isFinite(t.offset)?Math.floor(t.offset):void 0,i=typeof t.limit==`number`&&Number.isFinite(t.limit)?Math.floor(t.limit):void 0,a=r===void 0?void 0:Math.max(1,r),o=i===void 0?void 0:Math.max(1,i);return a!==void 0&&o!==void 0?`${o===1?`line`:`lines`} ${a}-${a+o-1} from ${n}`:a===void 0?o===void 0?`from ${n}`:`first ${o} ${o===1?`line`:`lines`} of ${n}`:`from line ${a} in ${n}`}function kb(e,t){let n=yb(t);if(!n)return;let r=Db(n)??(typeof n.url==`string`?n.url.trim():void 0);if(!r)return;if(e===`attach`)return`from ${r}`;let i=e===`edit`?`in`:`to`,a=typeof n.content==`string`?n.content:typeof n.newText==`string`?n.newText:typeof n.new_string==`string`?n.new_string:void 0;return a&&a.length>0?`${i} ${r} (${a.length} chars)`:`${i} ${r}`}function Ab(e){let t=yb(e);if(!t)return;let n=typeof t.query==`string`?t.query.trim():void 0,r=typeof t.count==`number`&&Number.isFinite(t.count)&&t.count>0?Math.floor(t.count):void 0;if(n)return r===void 0?`for "${n}"`:`for "${n}" (top ${r})`}function jb(e){let t=yb(e);if(!t)return;let n=typeof t.url==`string`?t.url.trim():void 0;if(!n)return;let r=typeof t.extractMode==`string`?t.extractMode.trim():void 0,i=typeof t.maxChars==`number`&&Number.isFinite(t.maxChars)&&t.maxChars>0?Math.floor(t.maxChars):void 0,a=[r?`mode ${r}`:void 0,i===void 0?void 0:`max ${i} chars`].filter(e=>!!e).join(`, `);return a?`from ${n} (${a})`:`from ${n}`}function Mb(e,t){if(!(!e||!t))return e.actions?.[t]??void 0}function Nb(e,t,n){if(n.mode===`first`){for(let r of t){let t=Tb(Eb(e,r),n.coerce);if(t)return t}return}let r=[];for(let i of t){let t=Tb(Eb(e,i),n.coerce);t&&r.push({label:n.formatKey?n.formatKey(i):i,value:t})}if(r.length===0)return;if(r.length===1)return r[0].value;let i=new Set,a=[];for(let e of r){let t=`${e.label}:${e.value}`;i.has(t)||(i.add(t),a.push(e))}if(a.length!==0)return a.slice(0,n.maxEntries??8).map(e=>`${e.label} ${e.value}`).join(` · `)}function Pb(e){let t=Mb(e.spec,e.action),n=e.toolKey===`web_search`?`search`:e.toolKey===`web_fetch`?`fetch`:e.toolKey.replace(/_/g,` `).replace(/\./g,` `),r=Sb(t?.label??e.action??n),i;e.toolKey===`exec`&&(i=vb(e.args)),!i&&e.toolKey===`read`&&(i=Ob(e.args)),!i&&(e.toolKey===`write`||e.toolKey===`edit`||e.toolKey===`attach`)&&(i=kb(e.toolKey,e.args)),!i&&e.toolKey===`web_search`&&(i=Ab(e.args)),!i&&e.toolKey===`web_fetch`&&(i=jb(e.args));let a=t?.detailKeys??e.spec?.detailKeys??e.fallbackDetailKeys??[];return!i&&a.length>0&&(i=Nb(e.args,a,{mode:e.detailMode,coerce:e.detailCoerce,maxEntries:e.detailMaxEntries,formatKey:e.detailFormatKey})),!i&&e.meta&&(i=e.meta),{verb:r,detail:i}}function Fb(e,t={}){if(!e)return;let n=e.includes(` · `)?e.split(` · `).map(e=>e.trim()).filter(e=>e.length>0).join(`, `):e;if(n)return t.prefixWithWith?`with ${n}`:n}var Ib={"🧩":`puzzle`,"🛠️":`wrench`,"🧰":`wrench`,"📖":`fileText`,"✍️":`edit`,"📝":`penLine`,"📎":`paperclip`,"🌐":`globe`,"📺":`monitor`,"🧾":`fileText`,"🔐":`settings`,"💻":`monitor`,"🔌":`plug`,"💬":`messageSquare`},Lb={icon:`messageSquare`,title:`Slack`,actions:{react:{label:`react`,detailKeys:[`channelId`,`messageId`,`emoji`]},reactions:{label:`reactions`,detailKeys:[`channelId`,`messageId`]},sendMessage:{label:`send`,detailKeys:[`to`,`content`]},editMessage:{label:`edit`,detailKeys:[`channelId`,`messageId`]},deleteMessage:{label:`delete`,detailKeys:[`channelId`,`messageId`]},readMessages:{label:`read messages`,detailKeys:[`channelId`,`limit`]},pinMessage:{label:`pin`,detailKeys:[`channelId`,`messageId`]},unpinMessage:{label:`unpin`,detailKeys:[`channelId`,`messageId`]},listPins:{label:`list pins`,detailKeys:[`channelId`]},memberInfo:{label:`member`,detailKeys:[`userId`]},emojiList:{label:`emoji list`}}};function Rb(e){return e?Ib[e]??`puzzle`:`puzzle`}function zb(e){return{icon:Rb(e?.emoji),title:e?.title,label:e?.label,detailKeys:e?.detailKeys,actions:e?.actions}}var Bb=Yy,Vb=zb(Bb.fallback??{emoji:`🧩`}),Hb=Object.fromEntries(Object.entries(Bb.tools??{}).map(([e,t])=>[e,zb(t)]));Hb.slack=Lb;function Ub(e){if(!e)return e;for(let t of[{re:/^\/Users\/[^/]+(\/|$)/,replacement:`~$1`},{re:/^\/home\/[^/]+(\/|$)/,replacement:`~$1`},{re:/^C:\\Users\\[^\\]+(\\|$)/i,replacement:`~$1`}])if(t.re.test(e))return e.replace(t.re,t.replacement);return e}function Wb(e){let t=bb(e.name),n=t.toLowerCase(),r=Hb[n],i=r?.icon??Vb.icon??`puzzle`,a=r?.title??xb(t),o=r?.label??a,{verb:s,detail:c}=wb({toolKey:n,args:e.args,meta:e.meta,spec:r,fallbackDetailKeys:Vb.detailKeys,detailMode:`first`,detailCoerce:{includeFalse:!0,includeZero:!0}});return c&&=Ub(c),{name:t,icon:i,title:a,label:o,verb:s,detail:c}}function Gb(e){return Fb(e.detail,{prefixWithWith:!0})}function Kb(e){let t=e.trim();if(t.startsWith(`{`)||t.startsWith(`[`))try{let e=JSON.parse(t);return"```json\n"+JSON.stringify(e,null,2)+"\n```"}catch{}return e}function qb(e){let t=e.split(`
`),n=t.slice(0,2),r=n.join(`
`);return r.length>100?r.slice(0,100)+`…`:n.length<t.length?r+`…`:r}function Jb(e){let t=e,n=Xb(t.content),r=[];for(let e of n)(My(e.type)||typeof e.name==`string`&&Py(e)!=null)&&r.push({kind:`call`,name:e.name??`tool`,args:Zb(Py(e))});for(let e of n){if(!Ny(e.type))continue;let t=Qb(e),n=typeof e.name==`string`?e.name:`tool`;r.push({kind:`result`,name:n,text:t})}if(Ly(e)&&!r.some(e=>e.kind===`result`)){let n=typeof t.toolName==`string`&&t.toolName||typeof t.tool_name==`string`&&t.tool_name||`tool`,i=Sh(e)??void 0;r.push({kind:`result`,name:n,text:i})}return r}function Yb(e,t){let n=Wb({name:e.name,args:e.args}),r=Gb(n),i=!!e.text?.trim(),a=!!t,o=a?()=>{if(i){t(Kb(e.text));return}t(`## ${n.label}\n\n${r?`**Command:** \`${r}\`\n\n`:``}*No output — tool completed successfully.*`)}:void 0,s=i&&(e.text?.length??0)<=80,l=i&&!s,d=i&&s,f=!i;return c`
    <div
      class="chat-tool-card ${a?`chat-tool-card--clickable`:``}"
      @click=${o}
      role=${a?`button`:u}
      tabindex=${a?`0`:u}
      @keydown=${a?e=>{e.key!==`Enter`&&e.key!==` `||(e.preventDefault(),o?.())}:u}
    >
      <div class="chat-tool-card__header">
        <div class="chat-tool-card__title">
          <span class="chat-tool-card__icon">${H[n.icon]}</span>
          <span>${n.label}</span>
        </div>
        ${a?c`<span class="chat-tool-card__action"
              >${i?`View`:``} ${H.check}</span
            >`:u}
        ${f&&!a?c`<span class="chat-tool-card__status">${H.check}</span>`:u}
      </div>
      ${r?c`<div class="chat-tool-card__detail">${r}</div>`:u}
      ${f?c` <div class="chat-tool-card__status-text muted">Completed</div> `:u}
      ${l?c`<div class="chat-tool-card__preview mono">${qb(e.text)}</div>`:u}
      ${d?c`<div class="chat-tool-card__inline mono">${e.text}</div>`:u}
    </div>
  `}function Xb(e){return Array.isArray(e)?e.filter(Boolean):[]}function Zb(e){if(typeof e!=`string`)return e;let t=e.trim();if(!t||!t.startsWith(`{`)&&!t.startsWith(`[`))return e;try{return JSON.parse(t)}catch{return e}}function Qb(e){if(typeof e.text==`string`)return e.text;if(typeof e.content==`string`)return e.content}function $b(e){let t=e.content,n=[];if(Array.isArray(t))for(let e of t){if(typeof e!=`object`||!e)continue;let t=e;if(t.type===`image`){let e=t.source;if(e?.type===`base64`&&typeof e.data==`string`){let t=e.data,r=e.media_type||`image/png`,i=t.startsWith(`data:`)?t:`data:${r};base64,${t}`;n.push({url:i})}else typeof t.url==`string`&&n.push({url:t.url})}else if(t.type===`image_url`){let e=t.image_url;typeof e?.url==`string`&&n.push({url:e.url})}}return n}function ex(e,t){return c`
    <div class="chat-group assistant">
      ${fx(`assistant`,e,t)}
      <div class="chat-group-messages">
        <div class="chat-bubble chat-reading-indicator" aria-hidden="true">
          <span class="chat-reading-indicator__dots">
            <span></span><span></span><span></span>
          </span>
        </div>
      </div>
    </div>
  `}function tx(e,t,n,r,i){let a=new Date(t).toLocaleTimeString([],{hour:`numeric`,minute:`2-digit`}),o=r?.name??`Assistant`;return c`
    <div class="chat-group assistant">
      ${fx(`assistant`,r,i)}
      <div class="chat-group-messages">
        ${bx({role:`assistant`,content:[{type:`text`,text:e}],timestamp:t},{isStreaming:!0,showReasoning:!1},n)}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${o}</span>
          <span class="chat-group-timestamp">${a}</span>
        </div>
      </div>
    </div>
  `}function nx(e,t){let n=Iy(e.role),r=t.assistantName??`Assistant`,i=e.senderLabel?.trim(),a=n===`user`?i??`You`:n===`assistant`?r:n===`tool`?`Tool`:n,o=n===`user`?`user`:n===`assistant`?`assistant`:n===`tool`?`tool`:`other`,s=new Date(e.timestamp).toLocaleTimeString([],{hour:`numeric`,minute:`2-digit`}),l=rx(e,t.contextWindow??null);return c`
    <div class="chat-group ${o}">
      ${fx(e.role,{name:r,avatar:t.assistantAvatar??null},t.basePath)}
      <div class="chat-group-messages">
        ${e.messages.map((n,r)=>bx(n.message,{isStreaming:e.isStreaming&&r===e.messages.length-1,showReasoning:t.showReasoning,showToolCalls:t.showToolCalls??!0},t.onOpenSidebar))}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${a}</span>
          <span class="chat-group-timestamp">${s}</span>
          ${ax(l)}
          ${n===`assistant`&&Uy()?dx(e):u}
          ${t.onDelete?ux(t.onDelete,n===`user`?`left`:`right`):u}
        </div>
      </div>
    </div>
  `}function rx(e,t){let n=0,r=0,i=0,a=0,o=0,s=null,c=!1;for(let{message:t}of e.messages){let e=t;if(e.role!==`assistant`)continue;let l=e.usage;l&&(c=!0,n+=l.input??l.inputTokens??0,r+=l.output??l.outputTokens??0,i+=l.cacheRead??l.cache_read_input_tokens??0,a+=l.cacheWrite??l.cache_creation_input_tokens??0);let u=e.cost;u?.total&&(o+=u.total),typeof e.model==`string`&&e.model!==`gateway-injected`&&(s=e.model)}if(!c&&!s)return null;let l=t&&n>0?Math.min(Math.round(n/t*100),100):null;return{input:n,output:r,cacheRead:i,cacheWrite:a,cost:o,model:s,contextPercent:l}}function ix(e){return e>=1e6?`${(e/1e6).toFixed(1).replace(/\.0$/,``)}M`:e>=1e3?`${(e/1e3).toFixed(1).replace(/\.0$/,``)}k`:String(e)}function ax(e){if(!e)return u;let t=[];if(e.input&&t.push(c`<span class="msg-meta__tokens">↑${ix(e.input)}</span>`),e.output&&t.push(c`<span class="msg-meta__tokens">↓${ix(e.output)}</span>`),e.cacheRead&&t.push(c`<span class="msg-meta__cache">R${ix(e.cacheRead)}</span>`),e.cacheWrite&&t.push(c`<span class="msg-meta__cache">W${ix(e.cacheWrite)}</span>`),e.cost>0&&t.push(c`<span class="msg-meta__cost">$${e.cost.toFixed(4)}</span>`),e.contextPercent!==null){let n=e.contextPercent,r=n>=90?`msg-meta__ctx msg-meta__ctx--danger`:n>=75?`msg-meta__ctx msg-meta__ctx--warn`:`msg-meta__ctx`;t.push(c`<span class="${r}">${n}% ctx</span>`)}if(e.model){let n=e.model.includes(`/`)?e.model.split(`/`).pop():e.model;t.push(c`<span class="msg-meta__model">${n}</span>`)}return t.length===0?u:c`<span class="msg-meta">${t}</span>`}function ox(e){let t=[];for(let{message:n}of e.messages){let e=Sh(n);e?.trim()&&t.push(e.trim())}return t.join(`

`)}var sx=`openclaw:skipDeleteConfirm`;function cx(){try{return g()?.getItem(sx)===`1`}catch{return!1}}function lx(e){let t=document.createElement(`div`);t.className=`chat-delete-confirm chat-delete-confirm--${e}`;let n=document.createElement(`p`);n.className=`chat-delete-confirm__text`,n.textContent=`Delete this message?`;let r=document.createElement(`label`);r.className=`chat-delete-confirm__remember`;let i=document.createElement(`input`);i.className=`chat-delete-confirm__check`,i.type=`checkbox`;let a=document.createElement(`span`);a.textContent=`Don't ask again`,r.append(i,a);let o=document.createElement(`div`);o.className=`chat-delete-confirm__actions`;let s=document.createElement(`button`);s.className=`chat-delete-confirm__cancel`,s.type=`button`,s.textContent=`Cancel`;let c=document.createElement(`button`);return c.className=`chat-delete-confirm__yes`,c.type=`button`,c.textContent=`Delete`,o.append(s,c),t.append(n,r,o),{popover:t,cancel:s,yes:c,check:i}}function ux(e,t){return c`
    <span class="chat-delete-wrap">
      <button
        class="chat-group-delete"
        title="Delete"
        aria-label="Delete message"
        @click=${n=>{if(cx()){e();return}let r=n.currentTarget,i=r.closest(`.chat-delete-wrap`),a=i?.querySelector(`.chat-delete-confirm`);if(a){a.remove();return}let{popover:o,cancel:s,yes:c,check:l}=lx(t);i.appendChild(o);let u=()=>{o.remove(),document.removeEventListener(`click`,d,!0)},d=e=>{!o.contains(e.target)&&e.target!==r&&u()};s.addEventListener(`click`,u),c.addEventListener(`click`,()=>{if(l.checked)try{g()?.setItem(sx,`1`)}catch{}u(),e()}),requestAnimationFrame(()=>document.addEventListener(`click`,d,!0))}}
      >
        ${H.trash??H.x}
      </button>
    </span>
  `}function dx(e){return c`
    <button
      class="btn btn--xs chat-tts-btn"
      type="button"
      title=${qy()?`Stop speaking`:`Read aloud`}
      aria-label=${qy()?`Stop speaking`:`Read aloud`}
      @click=${t=>{let n=t.currentTarget;if(qy()){Ky(),n.classList.remove(`chat-tts-btn--active`),n.title=`Read aloud`;return}let r=ox(e);r&&(n.classList.add(`chat-tts-btn--active`),n.title=`Stop speaking`,Gy(r,{onEnd:()=>{n.isConnected&&(n.classList.remove(`chat-tts-btn--active`),n.title=`Read aloud`)},onError:()=>{n.isConnected&&(n.classList.remove(`chat-tts-btn--active`),n.title=`Read aloud`)}}))}}
    >
      ${H.volume2}
    </button>
  `}function fx(e,t,n){let r=Iy(e),i=t?.name?.trim()||`Assistant`,a=t?.avatar?.trim()||``,o=r===`user`?c`
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <circle cx="12" cy="8" r="4" />
            <path d="M20 21a8 8 0 1 0-16 0" />
          </svg>
        `:r===`assistant`?c`
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16l-6.4 5.2L8 14 2 9.2h7.6z" />
            </svg>
          `:r===`tool`?c`
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path
                  d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53a7.76 7.76 0 0 0 .07-1 7.76 7.76 0 0 0-.07-.97l2.11-1.63a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1a7.15 7.15 0 0 0-1.69-.98l-.38-2.65A.49.49 0 0 0 14 2h-4a.49.49 0 0 0-.49.42l-.38 2.65a7.15 7.15 0 0 0-1.69.98l-2.49-1a.5.5 0 0 0-.61.22l-2 3.46a.49.49 0 0 0 .12.64L4.57 11a7.9 7.9 0 0 0 0 1.94l-2.11 1.69a.49.49 0 0 0-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1c.52.4 1.08.72 1.69.98l.38 2.65c.05.24.26.42.49.42h4c.23 0 .44-.18.49-.42l.38-2.65a7.15 7.15 0 0 0 1.69-.98l2.49 1a.5.5 0 0 0 .61-.22l2-3.46a.49.49 0 0 0-.12-.64z"
                />
              </svg>
            `:c`
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <circle cx="12" cy="12" r="10" />
                <text
                  x="12"
                  y="16.5"
                  text-anchor="middle"
                  font-size="14"
                  font-weight="600"
                  fill="var(--bg, #fff)"
                >
                  ?
                </text>
              </svg>
            `,s=r===`user`?`user`:r===`assistant`?`assistant`:r===`tool`?`tool`:`other`;return a&&r===`assistant`?px(a)?c`<img
        class="chat-avatar ${s}"
        src="${a}"
        alt="${i}"
      />`:c`<img
      class="chat-avatar ${s} chat-avatar--logo"
      src="${$v(n??``)}"
      alt="${i}"
    />`:r===`assistant`&&n?c`<img
      class="chat-avatar ${s} chat-avatar--logo"
      src="${$v(n)}"
      alt="${i}"
    />`:c`<div class="chat-avatar ${s}">${o}</div>`}function px(e){return/^https?:\/\//i.test(e)||/^data:image\//i.test(e)||e.startsWith(`/`)}function mx(e){if(e.length===0)return u;let t=e=>{jv(e,{allowDataImage:!0})};return c`
    <div class="chat-message-images">
      ${e.map(e=>c`
          <img
            src=${e.url}
            alt=${e.alt??`Attached image`}
            class="chat-message-image"
            @click=${()=>t(e.url)}
          />
        `)}
    </div>
  `}function hx(e,t){let n=e.filter(e=>e.kind===`call`),r=e.filter(e=>e.kind===`result`),i=Math.max(n.length,r.length)||e.length,a=[...new Set(e.map(e=>e.name))],o=a.length<=3?a.join(`, `):`${a.slice(0,2).join(`, `)} +${a.length-2} more`;return c`
    <details class="chat-tools-collapse">
      <summary class="chat-tools-summary">
        <span class="chat-tools-summary__icon">${H.zap}</span>
        <span class="chat-tools-summary__count"
          >${i} tool${i===1?``:`s`}</span
        >
        <span class="chat-tools-summary__names">${o}</span>
      </summary>
      <div class="chat-tools-collapse__body">
        ${e.map(e=>Yb(e,t))}
      </div>
    </details>
  `}var gx=2e4;function _x(e){let t=e.trim();if(t.length>gx)return null;if(t.startsWith(`{`)&&t.endsWith(`}`)||t.startsWith(`[`)&&t.endsWith(`]`))try{let e=JSON.parse(t);return{parsed:e,pretty:JSON.stringify(e,null,2)}}catch{return null}return null}function vx(e){if(Array.isArray(e))return`Array (${e.length} item${e.length===1?``:`s`})`;if(e&&typeof e==`object`){let t=Object.keys(e);return t.length<=4?`{ ${t.join(`, `)} }`:`Object (${t.length} keys)`}return`JSON`}function yx(e,t){return c`
    <button
      class="btn btn--xs chat-expand-btn"
      type="button"
      title="Open in canvas"
      aria-label="Open in canvas"
      @click=${()=>t(e)}
    >
      <span class="chat-expand-btn__icon" aria-hidden="true">${H.panelRightOpen}</span>
    </button>
  `}function bx(e,t,n){let r=e,i=typeof r.role==`string`?r.role:`unknown`,a=Iy(i),o=Ly(e)||i.toLowerCase()===`toolresult`||i.toLowerCase()===`tool_result`||typeof r.toolCallId==`string`||typeof r.tool_call_id==`string`,s=t.showToolCalls??!0?Jb(e):[],l=s.length>0,d=$b(e),f=d.length>0,p=Sh(e),m=t.showReasoning&&i===`assistant`?wh(e):null,h=p?.trim()?p:null,g=m?Eh(m):null,_=h,v=i===`assistant`&&!!_?.trim(),y=i===`assistant`&&!!(n&&_?.trim()),b=_&&!t.isStreaming?_x(_):null,x=[`chat-bubble`,t.isStreaming?`streaming`:``,`fade-in`].filter(Boolean).join(` `);if(!_&&l&&o)return hx(s,n);let S=l&&(t.showToolCalls??!0);if(!_&&!S&&!f)return u;let C=a===`tool`||o,w=[...new Set(s.map(e=>e.name))],T=w.length<=3?w.join(`, `):`${w.slice(0,2).join(`, `)} +${w.length-2} more`,ee=_&&!T?_.trim().replace(/\s+/g,` `).slice(0,120):``;return c`
    <div class="${x}">
      ${v||y?c`<div class="chat-bubble-actions">
            ${y?yx(_,n):u}
            ${v?Ay(_):u}
          </div>`:u}
      ${C?c`
            <details class="chat-tool-msg-collapse">
              <summary class="chat-tool-msg-summary">
                <span class="chat-tool-msg-summary__icon">${H.zap}</span>
                <span class="chat-tool-msg-summary__label">Tool output</span>
                ${T?c`<span class="chat-tool-msg-summary__names">${T}</span>`:ee?c`<span class="chat-tool-msg-summary__preview">${ee}</span>`:u}
              </summary>
              <div class="chat-tool-msg-body">
                ${mx(d)}
                ${g?c`<div class="chat-thinking">
                      ${Ah(xv(g))}
                    </div>`:u}
                ${b?c`<details class="chat-json-collapse">
                      <summary class="chat-json-summary">
                        <span class="chat-json-badge">JSON</span>
                        <span class="chat-json-label">${vx(b.parsed)}</span>
                      </summary>
                      <pre class="chat-json-content"><code>${b.pretty}</code></pre>
                    </details>`:_?c`<div class="chat-text" dir="${Nv(_)}">
                        ${Ah(xv(_))}
                      </div>`:u}
                ${l?hx(s,n):u}
              </div>
            </details>
          `:c`
            ${mx(d)}
            ${g?c`<div class="chat-thinking">
                  ${Ah(xv(g))}
                </div>`:u}
            ${b?c`<details class="chat-json-collapse">
                  <summary class="chat-json-summary">
                    <span class="chat-json-badge">JSON</span>
                    <span class="chat-json-label">${vx(b.parsed)}</span>
                  </summary>
                  <pre class="chat-json-content"><code>${b.pretty}</code></pre>
                </details>`:_?c`<div class="chat-text" dir="${Nv(_)}">
                    ${Ah(xv(_))}
                  </div>`:u}
            ${l?hx(s,n):u}
          `}
    </div>
  `}var xx=50,Sx=class{constructor(){this.items=[],this.cursor=-1}push(e){let t=e.trim();t&&this.items[this.items.length-1]!==t&&(this.items.push(t),this.items.length>xx&&this.items.shift(),this.cursor=-1)}up(){return this.items.length===0?null:(this.cursor<0?this.cursor=this.items.length-1:this.cursor>0&&this.cursor--,this.items[this.cursor]??null)}down(){return this.cursor<0?null:(this.cursor++,this.cursor>=this.items.length?(this.cursor=-1,null):this.items[this.cursor]??null)}reset(){this.cursor=-1}},Cx=`openclaw:pinned:`,wx=class{constructor(e){this._indices=new Set,this.key=Cx+e,this.load()}get indices(){return this._indices}has(e){return this._indices.has(e)}pin(e){this._indices.add(e),this.save()}unpin(e){this._indices.delete(e),this.save()}toggle(e){this._indices.has(e)?this.unpin(e):this.pin(e)}clear(){this._indices.clear(),this.save()}load(){try{let e=g()?.getItem(this.key);if(!e)return;let t=JSON.parse(e);Array.isArray(t)&&(this._indices=new Set(t.filter(e=>typeof e==`number`)))}catch{}}save(){try{g()?.setItem(this.key,JSON.stringify([...this._indices]))}catch{}}};function Tx(e){return Sh(e)??``}function Ex(e,t){let n=t.trim().toLowerCase();return n?(Sh(e)??``).toLowerCase().includes(n):!0}function Dx(e,t,n){if(e.has(t)){let n=e.get(t);return e.delete(t),e.set(t,n),n}let r=n();for(e.set(t,r);e.size>20;){let t=e.keys().next().value;if(typeof t!=`string`)break;e.delete(t)}return r}function Ox(e){if(e==null)return;let t;return t=typeof e==`string`?e.trim():typeof e==`number`||typeof e==`boolean`||typeof e==`bigint`?String(e).trim():typeof e==`symbol`||typeof e==`function`?e.toString().trim():JSON.stringify(e),t||void 0}function kx(e,t){let n=Ox(e.action)?.toLowerCase(),r=Ox(e.path),i=Ox(e.value);return n?t.formatKnownAction(n,r)||Px(n,{path:r,value:i}):void 0}var Ax=e=>kx(e,{formatKnownAction:(e,t)=>{if(e===`show`||e===`get`)return t?`${e} ${t}`:e}}),jx=e=>kx(e,{formatKnownAction:(e,t)=>{if(e===`show`||e===`get`)return t?`${e} ${t}`:e}}),Mx=e=>kx(e,{formatKnownAction:(e,t)=>{if(e===`list`)return`list`;if(e===`show`||e===`get`||e===`enable`||e===`disable`)return t?`${e} ${t}`:e}}),Nx=e=>kx(e,{formatKnownAction:e=>{if(e===`show`||e===`reset`)return e}});function Px(e,t){return e===`unset`?t.path?`${e} ${t.path}`:e:e===`set`&&t.path?t.value?`${e} ${t.path}=${t.value}`:`${e} ${t.path}`:e}var Fx={config:Ax,mcp:jx,plugins:Mx,debug:Nx,queue:e=>{let t=Ox(e.mode),n=Ox(e.debounce),r=Ox(e.cap),i=Ox(e.drop),a=[];return t&&a.push(t),n&&a.push(`debounce:${n}`),r&&a.push(`cap:${r}`),i&&a.push(`drop:${i}`),a.length>0?a.join(` `):void 0},exec:e=>{let t=Ox(e.host),n=Ox(e.security),r=Ox(e.ask),i=Ox(e.node),a=[];return t&&a.push(`host=${t}`),n&&a.push(`security=${n}`),r&&a.push(`ask=${r}`),i&&a.push(`node=${i}`),a.length>0?a.join(` `):void 0}};function Ix(e){let t=e.trim().toLowerCase();return t===`z.ai`||t===`z-ai`?`zai`:t===`opencode-zen`?`opencode`:t===`opencode-go-auth`?`opencode-go`:t===`kimi`||t===`kimi-code`||t===`kimi-coding`?`kimi`:t===`bedrock`||t===`aws-bedrock`?`amazon-bedrock`:t===`bytedance`||t===`doubao`?`volcengine`:t}var Lx=new Map;function Rx(e,t){return(n,r,i)=>{if(n.api!==e)throw Error(`Mismatched api: ${n.api} expected ${e}`);return t(n,r,i)}}function zx(e,t){return(n,r,i)=>{if(n.api!==e)throw Error(`Mismatched api: ${n.api} expected ${e}`);return t(n,r,i)}}function Bx(e,t){Lx.set(e.api,{provider:{api:e.api,stream:Rx(e.api,e.stream),streamSimple:zx(e.api,e.streamSimple)},sourceId:t})}var Vx=null,Hx=null,Ux=null,Wx=e=>_(()=>import(e),[],import.meta.url);typeof process<`u`&&(process.versions?.node||process.versions?.bun)&&(Wx(`node:fs`).then(e=>{Vx=e.existsSync}),Wx(`node:os`).then(e=>{Hx=e.homedir}),Wx(`node:path`).then(e=>{Ux=e.join}));var Gx=null;function Kx(){if(Gx===null){if(!Vx||!Hx||!Ux)return typeof process<`u`&&(process.versions?.node||process.versions?.bun)||(Gx=!1),!1;let e={}.GOOGLE_APPLICATION_CREDENTIALS;Gx=Vx(e||Ux(Hx(),`.config`,`gcloud`,`application_default_credentials.json`))}return Gx}function qx(e){if(e===`github-copilot`)return{}.COPILOT_GITHUB_TOKEN||{}.GH_TOKEN||{}.GITHUB_TOKEN;if(e===`anthropic`)return{}.ANTHROPIC_OAUTH_TOKEN||{}.ANTHROPIC_API_KEY;if(e===`google-vertex`){if({}.GOOGLE_CLOUD_API_KEY)return{}.GOOGLE_CLOUD_API_KEY;let e=Kx(),t=!!({}.GOOGLE_CLOUD_PROJECT||{}.GCLOUD_PROJECT),n=!!{}.GOOGLE_CLOUD_LOCATION;if(e&&t&&n)return`<authenticated>`}if(e===`amazon-bedrock`&&({}.AWS_PROFILE||{}.AWS_ACCESS_KEY_ID&&{}.AWS_SECRET_ACCESS_KEY||{}.AWS_BEARER_TOKEN_BEDROCK||{}.AWS_CONTAINER_CREDENTIALS_RELATIVE_URI||{}.AWS_CONTAINER_CREDENTIALS_FULL_URI||{}.AWS_WEB_IDENTITY_TOKEN_FILE))return`<authenticated>`;let t={openai:`OPENAI_API_KEY`,"azure-openai-responses":`AZURE_OPENAI_API_KEY`,google:`GEMINI_API_KEY`,groq:`GROQ_API_KEY`,cerebras:`CEREBRAS_API_KEY`,xai:`XAI_API_KEY`,openrouter:`OPENROUTER_API_KEY`,"vercel-ai-gateway":`AI_GATEWAY_API_KEY`,zai:`ZAI_API_KEY`,mistral:`MISTRAL_API_KEY`,minimax:`MINIMAX_API_KEY`,"minimax-cn":`MINIMAX_CN_API_KEY`,huggingface:`HF_TOKEN`,opencode:`OPENCODE_API_KEY`,"opencode-go":`OPENCODE_API_KEY`,"kimi-coding":`KIMI_API_KEY`}[e];return t?{}[t]:void 0}var Jx=e=>_(()=>import(e),[],import.meta.url),Yx,Xx,Zx,Qx,$x,eS,tS,nS,rS,iS,aS;function oS(e,t){(async()=>{for await(let n of t)e.push(n);e.end()})()}function sS(e,t){return{role:`assistant`,content:[],api:e.api,provider:e.provider,model:e.id,usage:{input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,cost:{input:0,output:0,cacheRead:0,cacheWrite:0,total:0}},stopReason:`error`,errorMessage:t instanceof Error?t.message:String(t),timestamp:Date.now()}}function cS(e){return(t,n,r)=>{let i=new a;return e().then(e=>{oS(i,e.stream(t,n,r))}).catch(e=>{let n=sS(t,e);i.push({type:`error`,reason:`error`,error:n}),i.end(n)}),i}}function lS(e){return(t,n,r)=>{let i=new a;return e().then(e=>{oS(i,e.streamSimple(t,n,r))}).catch(e=>{let n=sS(t,e);i.push({type:`error`,reason:`error`,error:n}),i.end(n)}),i}}function uS(){return Yx||=_(()=>import(`./anthropic-CFEPAL-v.js`).then(e=>{let t=e;return{stream:t.streamAnthropic,streamSimple:t.streamSimpleAnthropic}}),__vite__mapDeps([0,1,2,3]),import.meta.url),Yx}function dS(){return Xx||=_(()=>import(`./azure-openai-responses-CxiWQLmZ.js`).then(e=>{let t=e;return{stream:t.streamAzureOpenAIResponses,streamSimple:t.streamSimpleAzureOpenAIResponses}}),__vite__mapDeps([4,1,5,3,6,7]),import.meta.url),Xx}function fS(){return Zx||=_(()=>import(`./google-BT0bmsh5.js`).then(e=>{let t=e;return{stream:t.streamGoogle,streamSimple:t.streamSimpleGoogle}}),__vite__mapDeps([8,1,9,3]),import.meta.url),Zx}function pS(){return Qx||=_(()=>import(`./google-gemini-cli-BpxbH95Q.js`).then(e=>{let t=e;return{stream:t.streamGoogleGeminiCli,streamSimple:t.streamSimpleGoogleGeminiCli}}),__vite__mapDeps([10,1,9,3]),import.meta.url),Qx}function mS(){return $x||=_(()=>import(`./google-vertex-lQwbjEII.js`).then(e=>{let t=e;return{stream:t.streamGoogleVertex,streamSimple:t.streamSimpleGoogleVertex}}),__vite__mapDeps([11,1,9,3]),import.meta.url),$x}function hS(){return eS||=_(()=>import(`./mistral-CBrDC_Gv.js`).then(e=>{let t=e;return{stream:t.streamMistral,streamSimple:t.streamSimpleMistral}}),__vite__mapDeps([12,1,3,6]),import.meta.url),eS}function gS(){return tS||=_(()=>import(`./openai-codex-responses-DuhESMYF.js`).then(e=>{let t=e;return{stream:t.streamOpenAICodexResponses,streamSimple:t.streamSimpleOpenAICodexResponses}}),__vite__mapDeps([13,1,14,5,3,6]),import.meta.url),tS}function _S(){return nS||=_(()=>import(`./openai-completions-Bv33lqKL.js`).then(e=>{let t=e;return{stream:t.streamOpenAICompletions,streamSimple:t.streamSimpleOpenAICompletions}}),__vite__mapDeps([15,1,2,3,7]),import.meta.url),nS}function vS(){return rS||=_(()=>import(`./openai-responses-BPxpapOg.js`).then(e=>{let t=e;return{stream:t.streamOpenAIResponses,streamSimple:t.streamSimpleOpenAIResponses}}),__vite__mapDeps([16,1,2,5,3,6,7]),import.meta.url),rS}function yS(){return iS?Promise.resolve(iS):(aS||=Jx(`./amazon-bedrock.js`).then(e=>{let t=e;return{stream:t.streamBedrock,streamSimple:t.streamSimpleBedrock}}),aS)}var bS=cS(uS),xS=lS(uS),SS=cS(dS),CS=lS(dS),wS=cS(fS),TS=lS(fS),ES=cS(pS),DS=lS(pS),OS=cS(mS),kS=lS(mS),AS=cS(hS),jS=lS(hS),MS=cS(gS),NS=lS(gS),PS=cS(_S),FS=lS(_S),IS=cS(vS),LS=lS(vS),RS=cS(yS),zS=lS(yS);function BS(){Bx({api:`anthropic-messages`,stream:bS,streamSimple:xS}),Bx({api:`openai-completions`,stream:PS,streamSimple:FS}),Bx({api:`mistral-conversations`,stream:AS,streamSimple:jS}),Bx({api:`openai-responses`,stream:IS,streamSimple:LS}),Bx({api:`azure-openai-responses`,stream:SS,streamSimple:CS}),Bx({api:`openai-codex-responses`,stream:MS,streamSimple:NS}),Bx({api:`google-generative-ai`,stream:wS,streamSimple:TS}),Bx({api:`google-gemini-cli`,stream:ES,streamSimple:DS}),Bx({api:`google-vertex`,stream:OS,streamSimple:kS}),Bx({api:`bedrock-converse-stream`,stream:RS,streamSimple:zS})}BS();var VS=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.Allow=e.ALL=e.COLLECTION=e.ATOM=e.SPECIAL=e.INF=e._INFINITY=e.INFINITY=e.NAN=e.BOOL=e.NULL=e.OBJ=e.ARR=e.NUM=e.STR=void 0,e.STR=1,e.NUM=2,e.ARR=4,e.OBJ=8,e.NULL=16,e.BOOL=32,e.NAN=64,e.INFINITY=128,e._INFINITY=256,e.INF=e.INFINITY|e._INFINITY,e.SPECIAL=e.NULL|e.BOOL|e.INF|e.NAN,e.ATOM=e.STR|e.NUM|e.SPECIAL,e.COLLECTION=e.ARR|e.OBJ,e.ALL=e.ATOM|e.COLLECTION,e.Allow={STR:e.STR,NUM:e.NUM,ARR:e.ARR,OBJ:e.OBJ,NULL:e.NULL,BOOL:e.BOOL,NAN:e.NAN,INFINITY:e.INFINITY,_INFINITY:e._INFINITY,INF:e.INF,SPECIAL:e.SPECIAL,ATOM:e.ATOM,COLLECTION:e.COLLECTION,ALL:e.ALL},e.default=e.Allow})),HS=n((e=>{var t=e&&e.__createBinding||(Object.create?(function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}):(function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]})),n=e&&e.__exportStar||function(e,n){for(var r in e)r!==`default`&&!Object.prototype.hasOwnProperty.call(n,r)&&t(n,e,r)};Object.defineProperty(e,`__esModule`,{value:!0}),e.Allow=e.MalformedJSON=e.PartialJSON=e.parseJSON=e.parse=void 0;var r=VS();Object.defineProperty(e,`Allow`,{enumerable:!0,get:function(){return r.Allow}}),n(VS(),e);var i=class extends Error{};e.PartialJSON=i;var a=class extends Error{};e.MalformedJSON=a;function o(e,t=r.Allow.ALL){if(typeof e!=`string`)throw TypeError(`expecting str, got ${typeof e}`);if(!e.trim())throw Error(`${e} is empty`);return s(e.trim(),t)}e.parseJSON=o;var s=(e,t)=>{let n=e.length,o=0,s=e=>{throw new i(`${e} at position ${o}`)},c=e=>{throw new a(`${e} at position ${o}`)},l=()=>(m(),o>=n&&s(`Unexpected end of input`),e[o]===`"`?u():e[o]===`{`?d():e[o]===`[`?f():e.substring(o,o+4)===`null`||r.Allow.NULL&t&&n-o<4&&`null`.startsWith(e.substring(o))?(o+=4,null):e.substring(o,o+4)===`true`||r.Allow.BOOL&t&&n-o<4&&`true`.startsWith(e.substring(o))?(o+=4,!0):e.substring(o,o+5)===`false`||r.Allow.BOOL&t&&n-o<5&&`false`.startsWith(e.substring(o))?(o+=5,!1):e.substring(o,o+8)===`Infinity`||r.Allow.INFINITY&t&&n-o<8&&`Infinity`.startsWith(e.substring(o))?(o+=8,1/0):e.substring(o,o+9)===`-Infinity`||r.Allow._INFINITY&t&&1<n-o&&n-o<9&&`-Infinity`.startsWith(e.substring(o))?(o+=9,-1/0):e.substring(o,o+3)===`NaN`||r.Allow.NAN&t&&n-o<3&&`NaN`.startsWith(e.substring(o))?(o+=3,NaN):p()),u=()=>{let i=o,a=!1;for(o++;o<n&&(e[o]!==`"`||a&&e[o-1]===`\\`);)a=e[o]===`\\`?!a:!1,o++;if(e.charAt(o)==`"`)try{return JSON.parse(e.substring(i,++o-Number(a)))}catch(e){c(String(e))}else if(r.Allow.STR&t)try{return JSON.parse(e.substring(i,o-Number(a))+`"`)}catch{return JSON.parse(e.substring(i,e.lastIndexOf(`\\`))+`"`)}s(`Unterminated string literal`)},d=()=>{o++,m();let i={};try{for(;e[o]!==`}`;){if(m(),o>=n&&r.Allow.OBJ&t)return i;let a=u();m(),o++;try{i[a]=l()}catch(e){if(r.Allow.OBJ&t)return i;throw e}m(),e[o]===`,`&&o++}}catch{if(r.Allow.OBJ&t)return i;s(`Expected '}' at end of object`)}return o++,i},f=()=>{o++;let n=[];try{for(;e[o]!==`]`;)n.push(l()),m(),e[o]===`,`&&o++}catch{if(r.Allow.ARR&t)return n;s(`Expected ']' at end of array`)}return o++,n},p=()=>{if(o===0){e===`-`&&c(`Not sure what '-' is`);try{return JSON.parse(e)}catch(n){if(r.Allow.NUM&t)try{return JSON.parse(e.substring(0,e.lastIndexOf(`e`)))}catch{}c(String(n))}}let i=o;for(e[o]===`-`&&o++;e[o]&&`,]}`.indexOf(e[o])===-1;)o++;o==n&&!(r.Allow.NUM&t)&&s(`Unterminated number literal`);try{return JSON.parse(e.substring(i,o))}catch{e.substring(i,o)===`-`&&s(`Not sure what '-' is`);try{return JSON.parse(e.substring(i,e.lastIndexOf(`e`)))}catch(e){c(String(e))}}},m=()=>{for(;o<n&&` 
\r	`.includes(e[o]);)o++};return l()};e.parse=o}))();function US(e){if(!e||e.trim()===``)return{};try{return JSON.parse(e)}catch{try{return(0,HS.parse)(e)??{}}catch{return{}}}}var WS=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.regexpCode=e.getEsmExportName=e.getProperty=e.safeStringify=e.stringify=e.strConcat=e.addCodeArg=e.str=e._=e.nil=e._Code=e.Name=e.IDENTIFIER=e._CodeOrName=void 0;var t=class{};e._CodeOrName=t,e.IDENTIFIER=/^[a-z$_][a-z$_0-9]*$/i;var n=class extends t{constructor(t){if(super(),!e.IDENTIFIER.test(t))throw Error(`CodeGen: name must be a valid identifier`);this.str=t}toString(){return this.str}emptyStr(){return!1}get names(){return{[this.str]:1}}};e.Name=n;var r=class extends t{constructor(e){super(),this._items=typeof e==`string`?[e]:e}toString(){return this.str}emptyStr(){if(this._items.length>1)return!1;let e=this._items[0];return e===``||e===`""`}get str(){return this._str??=this._items.reduce((e,t)=>`${e}${t}`,``)}get names(){return this._names??=this._items.reduce((e,t)=>(t instanceof n&&(e[t.str]=(e[t.str]||0)+1),e),{})}};e._Code=r,e.nil=new r(``);function i(e,...t){let n=[e[0]],i=0;for(;i<t.length;)s(n,t[i]),n.push(e[++i]);return new r(n)}e._=i;var a=new r(`+`);function o(e,...t){let n=[p(e[0])],i=0;for(;i<t.length;)n.push(a),s(n,t[i]),n.push(a,p(e[++i]));return c(n),new r(n)}e.str=o;function s(e,t){t instanceof r?e.push(...t._items):t instanceof n?e.push(t):e.push(d(t))}e.addCodeArg=s;function c(e){let t=1;for(;t<e.length-1;){if(e[t]===a){let n=l(e[t-1],e[t+1]);if(n!==void 0){e.splice(t-1,3,n);continue}e[t++]=`+`}t++}}function l(e,t){if(t===`""`)return e;if(e===`""`)return t;if(typeof e==`string`)return t instanceof n||e[e.length-1]!==`"`?void 0:typeof t==`string`?t[0]===`"`?e.slice(0,-1)+t.slice(1):void 0:`${e.slice(0,-1)}${t}"`;if(typeof t==`string`&&t[0]===`"`&&!(e instanceof n))return`"${e}${t.slice(1)}`}function u(e,t){return t.emptyStr()?e:e.emptyStr()?t:o`${e}${t}`}e.strConcat=u;function d(e){return typeof e==`number`||typeof e==`boolean`||e===null?e:p(Array.isArray(e)?e.join(`,`):e)}function f(e){return new r(p(e))}e.stringify=f;function p(e){return JSON.stringify(e).replace(/\u2028/g,`\\u2028`).replace(/\u2029/g,`\\u2029`)}e.safeStringify=p;function m(t){return typeof t==`string`&&e.IDENTIFIER.test(t)?new r(`.${t}`):i`[${t}]`}e.getProperty=m;function h(t){if(typeof t==`string`&&e.IDENTIFIER.test(t))return new r(`${t}`);throw Error(`CodeGen: invalid export name: ${t}, use explicit $id name mapping`)}e.getEsmExportName=h;function g(e){return new r(e.toString())}e.regexpCode=g})),GS=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.ValueScope=e.ValueScopeName=e.Scope=e.varKinds=e.UsedValueState=void 0;var t=WS(),n=class extends Error{constructor(e){super(`CodeGen: "code" for ${e} not defined`),this.value=e.value}},r;(function(e){e[e.Started=0]=`Started`,e[e.Completed=1]=`Completed`})(r||(e.UsedValueState=r={})),e.varKinds={const:new t.Name(`const`),let:new t.Name(`let`),var:new t.Name(`var`)};var i=class{constructor({prefixes:e,parent:t}={}){this._names={},this._prefixes=e,this._parent=t}toName(e){return e instanceof t.Name?e:this.name(e)}name(e){return new t.Name(this._newName(e))}_newName(e){let t=this._names[e]||this._nameGroup(e);return`${e}${t.index++}`}_nameGroup(e){if((this._parent?._prefixes)?.has(e)||this._prefixes&&!this._prefixes.has(e))throw Error(`CodeGen: prefix "${e}" is not allowed in this scope`);return this._names[e]={prefix:e,index:0}}};e.Scope=i;var a=class extends t.Name{constructor(e,t){super(t),this.prefix=e}setValue(e,{property:n,itemIndex:r}){this.value=e,this.scopePath=(0,t._)`.${new t.Name(n)}[${r}]`}};e.ValueScopeName=a;var o=(0,t._)`\n`;e.ValueScope=class extends i{constructor(e){super(e),this._values={},this._scope=e.scope,this.opts={...e,_n:e.lines?o:t.nil}}get(){return this._scope}name(e){return new a(e,this._newName(e))}value(e,t){if(t.ref===void 0)throw Error(`CodeGen: ref must be passed in value`);let n=this.toName(e),{prefix:r}=n,i=t.key??t.ref,a=this._values[r];if(a){let e=a.get(i);if(e)return e}else a=this._values[r]=new Map;a.set(i,n);let o=this._scope[r]||(this._scope[r]=[]),s=o.length;return o[s]=t.ref,n.setValue(t,{property:r,itemIndex:s}),n}getValue(e,t){let n=this._values[e];if(n)return n.get(t)}scopeRefs(e,n=this._values){return this._reduceValues(n,n=>{if(n.scopePath===void 0)throw Error(`CodeGen: name "${n}" has no value`);return(0,t._)`${e}${n.scopePath}`})}scopeCode(e=this._values,t,n){return this._reduceValues(e,e=>{if(e.value===void 0)throw Error(`CodeGen: name "${e}" has no value`);return e.value.code},t,n)}_reduceValues(i,a,o={},s){let c=t.nil;for(let l in i){let u=i[l];if(!u)continue;let d=o[l]=o[l]||new Map;u.forEach(i=>{if(d.has(i))return;d.set(i,r.Started);let o=a(i);if(o){let n=this.opts.es5?e.varKinds.var:e.varKinds.const;c=(0,t._)`${c}${n} ${i} = ${o};${this.opts._n}`}else if(o=s?.(i))c=(0,t._)`${c}${o}${this.opts._n}`;else throw new n(i);d.set(i,r.Completed)})}return c}}})),K=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.or=e.and=e.not=e.CodeGen=e.operators=e.varKinds=e.ValueScopeName=e.ValueScope=e.Scope=e.Name=e.regexpCode=e.stringify=e.getProperty=e.nil=e.strConcat=e.str=e._=void 0;var t=WS(),n=GS(),r=WS();Object.defineProperty(e,`_`,{enumerable:!0,get:function(){return r._}}),Object.defineProperty(e,`str`,{enumerable:!0,get:function(){return r.str}}),Object.defineProperty(e,`strConcat`,{enumerable:!0,get:function(){return r.strConcat}}),Object.defineProperty(e,`nil`,{enumerable:!0,get:function(){return r.nil}}),Object.defineProperty(e,`getProperty`,{enumerable:!0,get:function(){return r.getProperty}}),Object.defineProperty(e,`stringify`,{enumerable:!0,get:function(){return r.stringify}}),Object.defineProperty(e,`regexpCode`,{enumerable:!0,get:function(){return r.regexpCode}}),Object.defineProperty(e,`Name`,{enumerable:!0,get:function(){return r.Name}});var i=GS();Object.defineProperty(e,`Scope`,{enumerable:!0,get:function(){return i.Scope}}),Object.defineProperty(e,`ValueScope`,{enumerable:!0,get:function(){return i.ValueScope}}),Object.defineProperty(e,`ValueScopeName`,{enumerable:!0,get:function(){return i.ValueScopeName}}),Object.defineProperty(e,`varKinds`,{enumerable:!0,get:function(){return i.varKinds}}),e.operators={GT:new t._Code(`>`),GTE:new t._Code(`>=`),LT:new t._Code(`<`),LTE:new t._Code(`<=`),EQ:new t._Code(`===`),NEQ:new t._Code(`!==`),NOT:new t._Code(`!`),OR:new t._Code(`||`),AND:new t._Code(`&&`),ADD:new t._Code(`+`)};var a=class{optimizeNodes(){return this}optimizeNames(e,t){return this}},o=class extends a{constructor(e,t,n){super(),this.varKind=e,this.name=t,this.rhs=n}render({es5:e,_n:t}){let r=e?n.varKinds.var:this.varKind,i=this.rhs===void 0?``:` = ${this.rhs}`;return`${r} ${this.name}${i};`+t}optimizeNames(e,t){if(e[this.name.str])return this.rhs&&=D(this.rhs,e,t),this}get names(){return this.rhs instanceof t._CodeOrName?this.rhs.names:{}}},s=class extends a{constructor(e,t,n){super(),this.lhs=e,this.rhs=t,this.sideEffects=n}render({_n:e}){return`${this.lhs} = ${this.rhs};`+e}optimizeNames(e,n){if(!(this.lhs instanceof t.Name&&!e[this.lhs.str]&&!this.sideEffects))return this.rhs=D(this.rhs,e,n),this}get names(){return te(this.lhs instanceof t.Name?{}:{...this.lhs.names},this.rhs)}},c=class extends s{constructor(e,t,n,r){super(e,n,r),this.op=t}render({_n:e}){return`${this.lhs} ${this.op}= ${this.rhs};`+e}},l=class extends a{constructor(e){super(),this.label=e,this.names={}}render({_n:e}){return`${this.label}:`+e}},u=class extends a{constructor(e){super(),this.label=e,this.names={}}render({_n:e}){return`break${this.label?` ${this.label}`:``};`+e}},d=class extends a{constructor(e){super(),this.error=e}render({_n:e}){return`throw ${this.error};`+e}get names(){return this.error.names}},f=class extends a{constructor(e){super(),this.code=e}render({_n:e}){return`${this.code};`+e}optimizeNodes(){return`${this.code}`?this:void 0}optimizeNames(e,t){return this.code=D(this.code,e,t),this}get names(){return this.code instanceof t._CodeOrName?this.code.names:{}}},p=class extends a{constructor(e=[]){super(),this.nodes=e}render(e){return this.nodes.reduce((t,n)=>t+n.render(e),``)}optimizeNodes(){let{nodes:e}=this,t=e.length;for(;t--;){let n=e[t].optimizeNodes();Array.isArray(n)?e.splice(t,1,...n):n?e[t]=n:e.splice(t,1)}return e.length>0?this:void 0}optimizeNames(e,t){let{nodes:n}=this,r=n.length;for(;r--;){let i=n[r];i.optimizeNames(e,t)||(O(e,i.names),n.splice(r,1))}return n.length>0?this:void 0}get names(){return this.nodes.reduce((e,t)=>E(e,t.names),{})}},m=class extends p{render(e){return`{`+e._n+super.render(e)+`}`+e._n}},h=class extends p{},g=class extends m{};g.kind=`else`;var _=class e extends m{constructor(e,t){super(t),this.condition=e}render(e){let t=`if(${this.condition})`+super.render(e);return this.else&&(t+=`else `+this.else.render(e)),t}optimizeNodes(){super.optimizeNodes();let t=this.condition;if(t===!0)return this.nodes;let n=this.else;if(n){let e=n.optimizeNodes();n=this.else=Array.isArray(e)?new g(e):e}if(n)return t===!1?n instanceof e?n:n.nodes:this.nodes.length?this:new e(k(t),n instanceof e?[n]:n.nodes);if(!(t===!1||!this.nodes.length))return this}optimizeNames(e,t){if(this.else=this.else?.optimizeNames(e,t),super.optimizeNames(e,t)||this.else)return this.condition=D(this.condition,e,t),this}get names(){let e=super.names;return te(e,this.condition),this.else&&E(e,this.else.names),e}};_.kind=`if`;var v=class extends m{};v.kind=`for`;var y=class extends v{constructor(e){super(),this.iteration=e}render(e){return`for(${this.iteration})`+super.render(e)}optimizeNames(e,t){if(super.optimizeNames(e,t))return this.iteration=D(this.iteration,e,t),this}get names(){return E(super.names,this.iteration.names)}},b=class extends v{constructor(e,t,n,r){super(),this.varKind=e,this.name=t,this.from=n,this.to=r}render(e){let t=e.es5?n.varKinds.var:this.varKind,{name:r,from:i,to:a}=this;return`for(${t} ${r}=${i}; ${r}<${a}; ${r}++)`+super.render(e)}get names(){return te(te(super.names,this.from),this.to)}},x=class extends v{constructor(e,t,n,r){super(),this.loop=e,this.varKind=t,this.name=n,this.iterable=r}render(e){return`for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})`+super.render(e)}optimizeNames(e,t){if(super.optimizeNames(e,t))return this.iterable=D(this.iterable,e,t),this}get names(){return E(super.names,this.iterable.names)}},S=class extends m{constructor(e,t,n){super(),this.name=e,this.args=t,this.async=n}render(e){return`${this.async?`async `:``}function ${this.name}(${this.args})`+super.render(e)}};S.kind=`func`;var C=class extends p{render(e){return`return `+super.render(e)}};C.kind=`return`;var w=class extends m{render(e){let t=`try`+super.render(e);return this.catch&&(t+=this.catch.render(e)),this.finally&&(t+=this.finally.render(e)),t}optimizeNodes(){var e,t;return super.optimizeNodes(),(e=this.catch)==null||e.optimizeNodes(),(t=this.finally)==null||t.optimizeNodes(),this}optimizeNames(e,t){var n,r;return super.optimizeNames(e,t),(n=this.catch)==null||n.optimizeNames(e,t),(r=this.finally)==null||r.optimizeNames(e,t),this}get names(){let e=super.names;return this.catch&&E(e,this.catch.names),this.finally&&E(e,this.finally.names),e}},T=class extends m{constructor(e){super(),this.error=e}render(e){return`catch(${this.error})`+super.render(e)}};T.kind=`catch`;var ee=class extends m{render(e){return`finally`+super.render(e)}};ee.kind=`finally`,e.CodeGen=class{constructor(e,t={}){this._values={},this._blockStarts=[],this._constants={},this.opts={...t,_n:t.lines?`
`:``},this._extScope=e,this._scope=new n.Scope({parent:e}),this._nodes=[new h]}toString(){return this._root.render(this.opts)}name(e){return this._scope.name(e)}scopeName(e){return this._extScope.name(e)}scopeValue(e,t){let n=this._extScope.value(e,t);return(this._values[n.prefix]||(this._values[n.prefix]=new Set)).add(n),n}getScopeValue(e,t){return this._extScope.getValue(e,t)}scopeRefs(e){return this._extScope.scopeRefs(e,this._values)}scopeCode(){return this._extScope.scopeCode(this._values)}_def(e,t,n,r){let i=this._scope.toName(t);return n!==void 0&&r&&(this._constants[i.str]=n),this._leafNode(new o(e,i,n)),i}const(e,t,r){return this._def(n.varKinds.const,e,t,r)}let(e,t,r){return this._def(n.varKinds.let,e,t,r)}var(e,t,r){return this._def(n.varKinds.var,e,t,r)}assign(e,t,n){return this._leafNode(new s(e,t,n))}add(t,n){return this._leafNode(new c(t,e.operators.ADD,n))}code(e){return typeof e==`function`?e():e!==t.nil&&this._leafNode(new f(e)),this}object(...e){let n=[`{`];for(let[r,i]of e)n.length>1&&n.push(`,`),n.push(r),(r!==i||this.opts.es5)&&(n.push(`:`),(0,t.addCodeArg)(n,i));return n.push(`}`),new t._Code(n)}if(e,t,n){if(this._blockNode(new _(e)),t&&n)this.code(t).else().code(n).endIf();else if(t)this.code(t).endIf();else if(n)throw Error(`CodeGen: "else" body without "then" body`);return this}elseIf(e){return this._elseNode(new _(e))}else(){return this._elseNode(new g)}endIf(){return this._endBlockNode(_,g)}_for(e,t){return this._blockNode(e),t&&this.code(t).endFor(),this}for(e,t){return this._for(new y(e),t)}forRange(e,t,r,i,a=this.opts.es5?n.varKinds.var:n.varKinds.let){let o=this._scope.toName(e);return this._for(new b(a,o,t,r),()=>i(o))}forOf(e,r,i,a=n.varKinds.const){let o=this._scope.toName(e);if(this.opts.es5){let e=r instanceof t.Name?r:this.var(`_arr`,r);return this.forRange(`_i`,0,(0,t._)`${e}.length`,n=>{this.var(o,(0,t._)`${e}[${n}]`),i(o)})}return this._for(new x(`of`,a,o,r),()=>i(o))}forIn(e,r,i,a=this.opts.es5?n.varKinds.var:n.varKinds.const){if(this.opts.ownProperties)return this.forOf(e,(0,t._)`Object.keys(${r})`,i);let o=this._scope.toName(e);return this._for(new x(`in`,a,o,r),()=>i(o))}endFor(){return this._endBlockNode(v)}label(e){return this._leafNode(new l(e))}break(e){return this._leafNode(new u(e))}return(e){let t=new C;if(this._blockNode(t),this.code(e),t.nodes.length!==1)throw Error(`CodeGen: "return" should have one node`);return this._endBlockNode(C)}try(e,t,n){if(!t&&!n)throw Error(`CodeGen: "try" without "catch" and "finally"`);let r=new w;if(this._blockNode(r),this.code(e),t){let e=this.name(`e`);this._currNode=r.catch=new T(e),t(e)}return n&&(this._currNode=r.finally=new ee,this.code(n)),this._endBlockNode(T,ee)}throw(e){return this._leafNode(new d(e))}block(e,t){return this._blockStarts.push(this._nodes.length),e&&this.code(e).endBlock(t),this}endBlock(e){let t=this._blockStarts.pop();if(t===void 0)throw Error(`CodeGen: not in self-balancing block`);let n=this._nodes.length-t;if(n<0||e!==void 0&&n!==e)throw Error(`CodeGen: wrong number of nodes: ${n} vs ${e} expected`);return this._nodes.length=t,this}func(e,n=t.nil,r,i){return this._blockNode(new S(e,n,r)),i&&this.code(i).endFunc(),this}endFunc(){return this._endBlockNode(S)}optimize(e=1){for(;e-- >0;)this._root.optimizeNodes(),this._root.optimizeNames(this._root.names,this._constants)}_leafNode(e){return this._currNode.nodes.push(e),this}_blockNode(e){this._currNode.nodes.push(e),this._nodes.push(e)}_endBlockNode(e,t){let n=this._currNode;if(n instanceof e||t&&n instanceof t)return this._nodes.pop(),this;throw Error(`CodeGen: not in block "${t?`${e.kind}/${t.kind}`:e.kind}"`)}_elseNode(e){let t=this._currNode;if(!(t instanceof _))throw Error(`CodeGen: "else" without "if"`);return this._currNode=t.else=e,this}get _root(){return this._nodes[0]}get _currNode(){let e=this._nodes;return e[e.length-1]}set _currNode(e){let t=this._nodes;t[t.length-1]=e}};function E(e,t){for(let n in t)e[n]=(e[n]||0)+(t[n]||0);return e}function te(e,n){return n instanceof t._CodeOrName?E(e,n.names):e}function D(e,n,r){if(e instanceof t.Name)return i(e);if(!a(e))return e;return new t._Code(e._items.reduce((e,n)=>(n instanceof t.Name&&(n=i(n)),n instanceof t._Code?e.push(...n._items):e.push(n),e),[]));function i(e){let t=r[e.str];return t===void 0||n[e.str]!==1?e:(delete n[e.str],t)}function a(e){return e instanceof t._Code&&e._items.some(e=>e instanceof t.Name&&n[e.str]===1&&r[e.str]!==void 0)}}function O(e,t){for(let n in t)e[n]=(e[n]||0)-(t[n]||0)}function k(e){return typeof e==`boolean`||typeof e==`number`||e===null?!e:(0,t._)`!${M(e)}`}e.not=k;var A=ie(e.operators.AND);function ne(...e){return e.reduce(A)}e.and=ne;var j=ie(e.operators.OR);function re(...e){return e.reduce(j)}e.or=re;function ie(e){return(n,r)=>n===t.nil?r:r===t.nil?n:(0,t._)`${M(n)} ${e} ${M(r)}`}function M(e){return e instanceof t.Name?e:(0,t._)`(${e})`}})),q=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.checkStrictMode=e.getErrorPath=e.Type=e.useFunc=e.setEvaluated=e.evaluatedPropsToName=e.mergeEvaluated=e.eachItem=e.unescapeJsonPointer=e.escapeJsonPointer=e.escapeFragment=e.unescapeFragment=e.schemaRefOrVal=e.schemaHasRulesButRef=e.schemaHasRules=e.checkUnknownRules=e.alwaysValidSchema=e.toHash=void 0;var t=K(),n=WS();function r(e){let t={};for(let n of e)t[n]=!0;return t}e.toHash=r;function i(e,t){return typeof t==`boolean`?t:Object.keys(t).length===0?!0:(a(e,t),!o(t,e.self.RULES.all))}e.alwaysValidSchema=i;function a(e,t=e.schema){let{opts:n,self:r}=e;if(!n.strictSchema||typeof t==`boolean`)return;let i=r.RULES.keywords;for(let n in t)i[n]||x(e,`unknown keyword: "${n}"`)}e.checkUnknownRules=a;function o(e,t){if(typeof e==`boolean`)return!e;for(let n in e)if(t[n])return!0;return!1}e.schemaHasRules=o;function s(e,t){if(typeof e==`boolean`)return!e;for(let n in e)if(n!==`$ref`&&t.all[n])return!0;return!1}e.schemaHasRulesButRef=s;function c({topSchemaRef:e,schemaPath:n},r,i,a){if(!a){if(typeof r==`number`||typeof r==`boolean`)return r;if(typeof r==`string`)return(0,t._)`${r}`}return(0,t._)`${e}${n}${(0,t.getProperty)(i)}`}e.schemaRefOrVal=c;function l(e){return f(decodeURIComponent(e))}e.unescapeFragment=l;function u(e){return encodeURIComponent(d(e))}e.escapeFragment=u;function d(e){return typeof e==`number`?`${e}`:e.replace(/~/g,`~0`).replace(/\//g,`~1`)}e.escapeJsonPointer=d;function f(e){return e.replace(/~1/g,`/`).replace(/~0/g,`~`)}e.unescapeJsonPointer=f;function p(e,t){if(Array.isArray(e))for(let n of e)t(n);else t(e)}e.eachItem=p;function m({mergeNames:e,mergeToName:n,mergeValues:r,resultToName:i}){return(a,o,s,c)=>{let l=s===void 0?o:s instanceof t.Name?(o instanceof t.Name?e(a,o,s):n(a,o,s),s):o instanceof t.Name?(n(a,s,o),o):r(o,s);return c===t.Name&&!(l instanceof t.Name)?i(a,l):l}}e.mergeEvaluated={props:m({mergeNames:(e,n,r)=>e.if((0,t._)`${r} !== true && ${n} !== undefined`,()=>{e.if((0,t._)`${n} === true`,()=>e.assign(r,!0),()=>e.assign(r,(0,t._)`${r} || {}`).code((0,t._)`Object.assign(${r}, ${n})`))}),mergeToName:(e,n,r)=>e.if((0,t._)`${r} !== true`,()=>{n===!0?e.assign(r,!0):(e.assign(r,(0,t._)`${r} || {}`),g(e,r,n))}),mergeValues:(e,t)=>e===!0?!0:{...e,...t},resultToName:h}),items:m({mergeNames:(e,n,r)=>e.if((0,t._)`${r} !== true && ${n} !== undefined`,()=>e.assign(r,(0,t._)`${n} === true ? true : ${r} > ${n} ? ${r} : ${n}`)),mergeToName:(e,n,r)=>e.if((0,t._)`${r} !== true`,()=>e.assign(r,n===!0?!0:(0,t._)`${r} > ${n} ? ${r} : ${n}`)),mergeValues:(e,t)=>e===!0?!0:Math.max(e,t),resultToName:(e,t)=>e.var(`items`,t)})};function h(e,n){if(n===!0)return e.var(`props`,!0);let r=e.var(`props`,(0,t._)`{}`);return n!==void 0&&g(e,r,n),r}e.evaluatedPropsToName=h;function g(e,n,r){Object.keys(r).forEach(r=>e.assign((0,t._)`${n}${(0,t.getProperty)(r)}`,!0))}e.setEvaluated=g;var _={};function v(e,t){return e.scopeValue(`func`,{ref:t,code:_[t.code]||(_[t.code]=new n._Code(t.code))})}e.useFunc=v;var y;(function(e){e[e.Num=0]=`Num`,e[e.Str=1]=`Str`})(y||(e.Type=y={}));function b(e,n,r){if(e instanceof t.Name){let i=n===y.Num;return r?i?(0,t._)`"[" + ${e} + "]"`:(0,t._)`"['" + ${e} + "']"`:i?(0,t._)`"/" + ${e}`:(0,t._)`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`}return r?(0,t.getProperty)(e).toString():`/`+d(e)}e.getErrorPath=b;function x(e,t,n=e.opts.strictSchema){if(n){if(t=`strict mode: ${t}`,n===!0)throw Error(t);e.self.logger.warn(t)}}e.checkStrictMode=x})),KS=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K();e.default={data:new t.Name(`data`),valCxt:new t.Name(`valCxt`),instancePath:new t.Name(`instancePath`),parentData:new t.Name(`parentData`),parentDataProperty:new t.Name(`parentDataProperty`),rootData:new t.Name(`rootData`),dynamicAnchors:new t.Name(`dynamicAnchors`),vErrors:new t.Name(`vErrors`),errors:new t.Name(`errors`),this:new t.Name(`this`),self:new t.Name(`self`),scope:new t.Name(`scope`),json:new t.Name(`json`),jsonPos:new t.Name(`jsonPos`),jsonLen:new t.Name(`jsonLen`),jsonPart:new t.Name(`jsonPart`)}})),qS=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.extendErrors=e.resetErrorsCount=e.reportExtraError=e.reportError=e.keyword$DataError=e.keywordError=void 0;var t=K(),n=q(),r=KS();e.keywordError={message:({keyword:e})=>(0,t.str)`must pass "${e}" keyword validation`},e.keyword$DataError={message:({keyword:e,schemaType:n})=>n?(0,t.str)`"${e}" keyword must be ${n} ($data)`:(0,t.str)`"${e}" keyword is invalid ($data)`};function i(n,r=e.keywordError,i,a){let{it:o}=n,{gen:s,compositeRule:u,allErrors:f}=o,p=d(n,r,i);a??(u||f)?c(s,p):l(o,(0,t._)`[${p}]`)}e.reportError=i;function a(t,n=e.keywordError,i){let{it:a}=t,{gen:o,compositeRule:s,allErrors:u}=a;c(o,d(t,n,i)),s||u||l(a,r.default.vErrors)}e.reportExtraError=a;function o(e,n){e.assign(r.default.errors,n),e.if((0,t._)`${r.default.vErrors} !== null`,()=>e.if(n,()=>e.assign((0,t._)`${r.default.vErrors}.length`,n),()=>e.assign(r.default.vErrors,null)))}e.resetErrorsCount=o;function s({gen:e,keyword:n,schemaValue:i,data:a,errsCount:o,it:s}){if(o===void 0)throw Error(`ajv implementation error`);let c=e.name(`err`);e.forRange(`i`,o,r.default.errors,o=>{e.const(c,(0,t._)`${r.default.vErrors}[${o}]`),e.if((0,t._)`${c}.instancePath === undefined`,()=>e.assign((0,t._)`${c}.instancePath`,(0,t.strConcat)(r.default.instancePath,s.errorPath))),e.assign((0,t._)`${c}.schemaPath`,(0,t.str)`${s.errSchemaPath}/${n}`),s.opts.verbose&&(e.assign((0,t._)`${c}.schema`,i),e.assign((0,t._)`${c}.data`,a))})}e.extendErrors=s;function c(e,n){let i=e.const(`err`,n);e.if((0,t._)`${r.default.vErrors} === null`,()=>e.assign(r.default.vErrors,(0,t._)`[${i}]`),(0,t._)`${r.default.vErrors}.push(${i})`),e.code((0,t._)`${r.default.errors}++`)}function l(e,n){let{gen:r,validateName:i,schemaEnv:a}=e;a.$async?r.throw((0,t._)`new ${e.ValidationError}(${n})`):(r.assign((0,t._)`${i}.errors`,n),r.return(!1))}var u={keyword:new t.Name(`keyword`),schemaPath:new t.Name(`schemaPath`),params:new t.Name(`params`),propertyName:new t.Name(`propertyName`),message:new t.Name(`message`),schema:new t.Name(`schema`),parentSchema:new t.Name(`parentSchema`)};function d(e,n,r){let{createErrors:i}=e.it;return i===!1?(0,t._)`{}`:f(e,n,r)}function f(e,t,n={}){let{gen:r,it:i}=e,a=[p(i,n),m(e,n)];return h(e,t,a),r.object(...a)}function p({errorPath:e},{instancePath:i}){let a=i?(0,t.str)`${e}${(0,n.getErrorPath)(i,n.Type.Str)}`:e;return[r.default.instancePath,(0,t.strConcat)(r.default.instancePath,a)]}function m({keyword:e,it:{errSchemaPath:r}},{schemaPath:i,parentSchema:a}){let o=a?r:(0,t.str)`${r}/${e}`;return i&&(o=(0,t.str)`${o}${(0,n.getErrorPath)(i,n.Type.Str)}`),[u.schemaPath,o]}function h(e,{params:n,message:i},a){let{keyword:o,data:s,schemaValue:c,it:l}=e,{opts:d,propertyName:f,topSchemaRef:p,schemaPath:m}=l;a.push([u.keyword,o],[u.params,typeof n==`function`?n(e):n||(0,t._)`{}`]),d.messages&&a.push([u.message,typeof i==`function`?i(e):i]),d.verbose&&a.push([u.schema,c],[u.parentSchema,(0,t._)`${p}${m}`],[r.default.data,s]),f&&a.push([u.propertyName,f])}})),JS=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.boolOrEmptySchema=e.topBoolOrEmptySchema=void 0;var t=qS(),n=K(),r=KS(),i={message:`boolean schema is false`};function a(e){let{gen:t,schema:i,validateName:a}=e;i===!1?s(e,!1):typeof i==`object`&&i.$async===!0?t.return(r.default.data):(t.assign((0,n._)`${a}.errors`,null),t.return(!0))}e.topBoolOrEmptySchema=a;function o(e,t){let{gen:n,schema:r}=e;r===!1?(n.var(t,!1),s(e)):n.var(t,!0)}e.boolOrEmptySchema=o;function s(e,n){let{gen:r,data:a}=e,o={gen:r,keyword:`false schema`,data:a,schema:!1,schemaCode:!1,schemaValue:!1,params:{},it:e};(0,t.reportError)(o,i,void 0,n)}})),YS=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.getRules=e.isJSONType=void 0;var t=new Set([`string`,`number`,`integer`,`boolean`,`null`,`object`,`array`]);function n(e){return typeof e==`string`&&t.has(e)}e.isJSONType=n;function r(){let e={number:{type:`number`,rules:[]},string:{type:`string`,rules:[]},array:{type:`array`,rules:[]},object:{type:`object`,rules:[]}};return{types:{...e,integer:!0,boolean:!0,null:!0},rules:[{rules:[]},e.number,e.string,e.array,e.object],post:{rules:[]},all:{},keywords:{}}}e.getRules=r})),XS=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.shouldUseRule=e.shouldUseGroup=e.schemaHasRulesForType=void 0;function t({schema:e,self:t},r){let i=t.RULES.types[r];return i&&i!==!0&&n(e,i)}e.schemaHasRulesForType=t;function n(e,t){return t.rules.some(t=>r(e,t))}e.shouldUseGroup=n;function r(e,t){return e[t.keyword]!==void 0||t.definition.implements?.some(t=>e[t]!==void 0)}e.shouldUseRule=r})),ZS=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.reportTypeError=e.checkDataTypes=e.checkDataType=e.coerceAndCheckDataType=e.getJSONTypes=e.getSchemaTypes=e.DataType=void 0;var t=YS(),n=XS(),r=qS(),i=K(),a=q(),o;(function(e){e[e.Correct=0]=`Correct`,e[e.Wrong=1]=`Wrong`})(o||(e.DataType=o={}));function s(e){let t=c(e.type);if(t.includes(`null`)){if(e.nullable===!1)throw Error(`type: null contradicts nullable: false`)}else{if(!t.length&&e.nullable!==void 0)throw Error(`"nullable" cannot be used without "type"`);e.nullable===!0&&t.push(`null`)}return t}e.getSchemaTypes=s;function c(e){let n=Array.isArray(e)?e:e?[e]:[];if(n.every(t.isJSONType))return n;throw Error(`type must be JSONType or JSONType[]: `+n.join(`,`))}e.getJSONTypes=c;function l(e,t){let{gen:r,data:i,opts:a}=e,s=d(t,a.coerceTypes),c=t.length>0&&!(s.length===0&&t.length===1&&(0,n.schemaHasRulesForType)(e,t[0]));if(c){let n=h(t,i,a.strictNumbers,o.Wrong);r.if(n,()=>{s.length?f(e,t,s):_(e)})}return c}e.coerceAndCheckDataType=l;var u=new Set([`string`,`number`,`integer`,`boolean`,`null`]);function d(e,t){return t?e.filter(e=>u.has(e)||t===`array`&&e===`array`):[]}function f(e,t,n){let{gen:r,data:a,opts:o}=e,s=r.let(`dataType`,(0,i._)`typeof ${a}`),c=r.let(`coerced`,(0,i._)`undefined`);o.coerceTypes===`array`&&r.if((0,i._)`${s} == 'object' && Array.isArray(${a}) && ${a}.length == 1`,()=>r.assign(a,(0,i._)`${a}[0]`).assign(s,(0,i._)`typeof ${a}`).if(h(t,a,o.strictNumbers),()=>r.assign(c,a))),r.if((0,i._)`${c} !== undefined`);for(let e of n)(u.has(e)||e===`array`&&o.coerceTypes===`array`)&&l(e);r.else(),_(e),r.endIf(),r.if((0,i._)`${c} !== undefined`,()=>{r.assign(a,c),p(e,c)});function l(e){switch(e){case`string`:r.elseIf((0,i._)`${s} == "number" || ${s} == "boolean"`).assign(c,(0,i._)`"" + ${a}`).elseIf((0,i._)`${a} === null`).assign(c,(0,i._)`""`);return;case`number`:r.elseIf((0,i._)`${s} == "boolean" || ${a} === null
              || (${s} == "string" && ${a} && ${a} == +${a})`).assign(c,(0,i._)`+${a}`);return;case`integer`:r.elseIf((0,i._)`${s} === "boolean" || ${a} === null
              || (${s} === "string" && ${a} && ${a} == +${a} && !(${a} % 1))`).assign(c,(0,i._)`+${a}`);return;case`boolean`:r.elseIf((0,i._)`${a} === "false" || ${a} === 0 || ${a} === null`).assign(c,!1).elseIf((0,i._)`${a} === "true" || ${a} === 1`).assign(c,!0);return;case`null`:r.elseIf((0,i._)`${a} === "" || ${a} === 0 || ${a} === false`),r.assign(c,null);return;case`array`:r.elseIf((0,i._)`${s} === "string" || ${s} === "number"
              || ${s} === "boolean" || ${a} === null`).assign(c,(0,i._)`[${a}]`)}}}function p({gen:e,parentData:t,parentDataProperty:n},r){e.if((0,i._)`${t} !== undefined`,()=>e.assign((0,i._)`${t}[${n}]`,r))}function m(e,t,n,r=o.Correct){let a=r===o.Correct?i.operators.EQ:i.operators.NEQ,s;switch(e){case`null`:return(0,i._)`${t} ${a} null`;case`array`:s=(0,i._)`Array.isArray(${t})`;break;case`object`:s=(0,i._)`${t} && typeof ${t} == "object" && !Array.isArray(${t})`;break;case`integer`:s=c((0,i._)`!(${t} % 1) && !isNaN(${t})`);break;case`number`:s=c();break;default:return(0,i._)`typeof ${t} ${a} ${e}`}return r===o.Correct?s:(0,i.not)(s);function c(e=i.nil){return(0,i.and)((0,i._)`typeof ${t} == "number"`,e,n?(0,i._)`isFinite(${t})`:i.nil)}}e.checkDataType=m;function h(e,t,n,r){if(e.length===1)return m(e[0],t,n,r);let o,s=(0,a.toHash)(e);if(s.array&&s.object){let e=(0,i._)`typeof ${t} != "object"`;o=s.null?e:(0,i._)`!${t} || ${e}`,delete s.null,delete s.array,delete s.object}else o=i.nil;s.number&&delete s.integer;for(let e in s)o=(0,i.and)(o,m(e,t,n,r));return o}e.checkDataTypes=h;var g={message:({schema:e})=>`must be ${e}`,params:({schema:e,schemaValue:t})=>typeof e==`string`?(0,i._)`{type: ${e}}`:(0,i._)`{type: ${t}}`};function _(e){let t=v(e);(0,r.reportError)(t,g)}e.reportTypeError=_;function v(e){let{gen:t,data:n,schema:r}=e,i=(0,a.schemaRefOrVal)(e,r,`type`);return{gen:t,keyword:`type`,data:n,schema:r.type,schemaCode:i,schemaValue:i,parentSchema:r,params:{},it:e}}})),QS=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.assignDefaults=void 0;var t=K(),n=q();function r(e,t){let{properties:n,items:r}=e.schema;if(t===`object`&&n)for(let t in n)i(e,t,n[t].default);else t===`array`&&Array.isArray(r)&&r.forEach((t,n)=>i(e,n,t.default))}e.assignDefaults=r;function i(e,r,i){let{gen:a,compositeRule:o,data:s,opts:c}=e;if(i===void 0)return;let l=(0,t._)`${s}${(0,t.getProperty)(r)}`;if(o){(0,n.checkStrictMode)(e,`default is ignored for: ${l}`);return}let u=(0,t._)`${l} === undefined`;c.useDefaults===`empty`&&(u=(0,t._)`${u} || ${l} === null || ${l} === ""`),a.if(u,(0,t._)`${l} = ${(0,t.stringify)(i)}`)}})),$S=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.validateUnion=e.validateArray=e.usePattern=e.callValidateCode=e.schemaProperties=e.allSchemaProperties=e.noPropertyInData=e.propertyInData=e.isOwnProperty=e.hasPropFunc=e.reportMissingProp=e.checkMissingProp=e.checkReportMissingProp=void 0;var t=K(),n=q(),r=KS(),i=q();function a(e,n){let{gen:r,data:i,it:a}=e;r.if(d(r,i,n,a.opts.ownProperties),()=>{e.setParams({missingProperty:(0,t._)`${n}`},!0),e.error()})}e.checkReportMissingProp=a;function o({gen:e,data:n,it:{opts:r}},i,a){return(0,t.or)(...i.map(i=>(0,t.and)(d(e,n,i,r.ownProperties),(0,t._)`${a} = ${i}`)))}e.checkMissingProp=o;function s(e,t){e.setParams({missingProperty:t},!0),e.error()}e.reportMissingProp=s;function c(e){return e.scopeValue(`func`,{ref:Object.prototype.hasOwnProperty,code:(0,t._)`Object.prototype.hasOwnProperty`})}e.hasPropFunc=c;function l(e,n,r){return(0,t._)`${c(e)}.call(${n}, ${r})`}e.isOwnProperty=l;function u(e,n,r,i){let a=(0,t._)`${n}${(0,t.getProperty)(r)} !== undefined`;return i?(0,t._)`${a} && ${l(e,n,r)}`:a}e.propertyInData=u;function d(e,n,r,i){let a=(0,t._)`${n}${(0,t.getProperty)(r)} === undefined`;return i?(0,t.or)(a,(0,t.not)(l(e,n,r))):a}e.noPropertyInData=d;function f(e){return e?Object.keys(e).filter(e=>e!==`__proto__`):[]}e.allSchemaProperties=f;function p(e,t){return f(t).filter(r=>!(0,n.alwaysValidSchema)(e,t[r]))}e.schemaProperties=p;function m({schemaCode:e,data:n,it:{gen:i,topSchemaRef:a,schemaPath:o,errorPath:s},it:c},l,u,d){let f=d?(0,t._)`${e}, ${n}, ${a}${o}`:n,p=[[r.default.instancePath,(0,t.strConcat)(r.default.instancePath,s)],[r.default.parentData,c.parentData],[r.default.parentDataProperty,c.parentDataProperty],[r.default.rootData,r.default.rootData]];c.opts.dynamicRef&&p.push([r.default.dynamicAnchors,r.default.dynamicAnchors]);let m=(0,t._)`${f}, ${i.object(...p)}`;return u===t.nil?(0,t._)`${l}(${m})`:(0,t._)`${l}.call(${u}, ${m})`}e.callValidateCode=m;var h=(0,t._)`new RegExp`;function g({gen:e,it:{opts:n}},r){let a=n.unicodeRegExp?`u`:``,{regExp:o}=n.code,s=o(r,a);return e.scopeValue(`pattern`,{key:s.toString(),ref:s,code:(0,t._)`${o.code===`new RegExp`?h:(0,i.useFunc)(e,o)}(${r}, ${a})`})}e.usePattern=g;function _(e){let{gen:r,data:i,keyword:a,it:o}=e,s=r.name(`valid`);if(o.allErrors){let e=r.let(`valid`,!0);return c(()=>r.assign(e,!1)),e}return r.var(s,!0),c(()=>r.break()),s;function c(o){let c=r.const(`len`,(0,t._)`${i}.length`);r.forRange(`i`,0,c,i=>{e.subschema({keyword:a,dataProp:i,dataPropType:n.Type.Num},s),r.if((0,t.not)(s),o)})}}e.validateArray=_;function v(e){let{gen:r,schema:i,keyword:a,it:o}=e;if(!Array.isArray(i))throw Error(`ajv implementation error`);if(i.some(e=>(0,n.alwaysValidSchema)(o,e))&&!o.opts.unevaluated)return;let s=r.let(`valid`,!1),c=r.name(`_valid`);r.block(()=>i.forEach((n,i)=>{let o=e.subschema({keyword:a,schemaProp:i,compositeRule:!0},c);r.assign(s,(0,t._)`${s} || ${c}`),e.mergeValidEvaluated(o,c)||r.if((0,t.not)(s))})),e.result(s,()=>e.reset(),()=>e.error(!0))}e.validateUnion=v})),eC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.validateKeywordUsage=e.validSchemaType=e.funcKeywordCode=e.macroKeywordCode=void 0;var t=K(),n=KS(),r=$S(),i=qS();function a(e,n){let{gen:r,keyword:i,schema:a,parentSchema:o,it:s}=e,c=n.macro.call(s.self,a,o,s),l=u(r,i,c);s.opts.validateSchema!==!1&&s.self.validateSchema(c,!0);let d=r.name(`valid`);e.subschema({schema:c,schemaPath:t.nil,errSchemaPath:`${s.errSchemaPath}/${i}`,topSchemaRef:l,compositeRule:!0},d),e.pass(d,()=>e.error(!0))}e.macroKeywordCode=a;function o(e,i){let{gen:a,keyword:o,schema:d,parentSchema:f,$data:p,it:m}=e;l(m,i);let h=u(a,o,!p&&i.compile?i.compile.call(m.self,d,f,m):i.validate),g=a.let(`valid`);e.block$data(g,_),e.ok(i.valid??g);function _(){if(i.errors===!1)b(),i.modifying&&s(e),x(()=>e.error());else{let t=i.async?v():y();i.modifying&&s(e),x(()=>c(e,t))}}function v(){let e=a.let(`ruleErrs`,null);return a.try(()=>b((0,t._)`await `),n=>a.assign(g,!1).if((0,t._)`${n} instanceof ${m.ValidationError}`,()=>a.assign(e,(0,t._)`${n}.errors`),()=>a.throw(n))),e}function y(){let e=(0,t._)`${h}.errors`;return a.assign(e,null),b(t.nil),e}function b(o=i.async?(0,t._)`await `:t.nil){let s=m.opts.passContext?n.default.this:n.default.self,c=!(`compile`in i&&!p||i.schema===!1);a.assign(g,(0,t._)`${o}${(0,r.callValidateCode)(e,h,s,c)}`,i.modifying)}function x(e){a.if((0,t.not)(i.valid??g),e)}}e.funcKeywordCode=o;function s(e){let{gen:n,data:r,it:i}=e;n.if(i.parentData,()=>n.assign(r,(0,t._)`${i.parentData}[${i.parentDataProperty}]`))}function c(e,r){let{gen:a}=e;a.if((0,t._)`Array.isArray(${r})`,()=>{a.assign(n.default.vErrors,(0,t._)`${n.default.vErrors} === null ? ${r} : ${n.default.vErrors}.concat(${r})`).assign(n.default.errors,(0,t._)`${n.default.vErrors}.length`),(0,i.extendErrors)(e)},()=>e.error())}function l({schemaEnv:e},t){if(t.async&&!e.$async)throw Error(`async keyword in sync schema`)}function u(e,n,r){if(r===void 0)throw Error(`keyword "${n}" failed to compile`);return e.scopeValue(`keyword`,typeof r==`function`?{ref:r}:{ref:r,code:(0,t.stringify)(r)})}function d(e,t,n=!1){return!t.length||t.some(t=>t===`array`?Array.isArray(e):t===`object`?e&&typeof e==`object`&&!Array.isArray(e):typeof e==t||n&&e===void 0)}e.validSchemaType=d;function f({schema:e,opts:t,self:n,errSchemaPath:r},i,a){if(Array.isArray(i.keyword)?!i.keyword.includes(a):i.keyword!==a)throw Error(`ajv implementation error`);let o=i.dependencies;if(o?.some(t=>!Object.prototype.hasOwnProperty.call(e,t)))throw Error(`parent schema must have dependencies of ${a}: ${o.join(`,`)}`);if(i.validateSchema&&!i.validateSchema(e[a])){let e=`keyword "${a}" value is invalid at path "${r}": `+n.errorsText(i.validateSchema.errors);if(t.validateSchema===`log`)n.logger.error(e);else throw Error(e)}}e.validateKeywordUsage=f})),tC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.extendSubschemaMode=e.extendSubschemaData=e.getSubschema=void 0;var t=K(),n=q();function r(e,{keyword:r,schemaProp:i,schema:a,schemaPath:o,errSchemaPath:s,topSchemaRef:c}){if(r!==void 0&&a!==void 0)throw Error(`both "keyword" and "schema" passed, only one allowed`);if(r!==void 0){let a=e.schema[r];return i===void 0?{schema:a,schemaPath:(0,t._)`${e.schemaPath}${(0,t.getProperty)(r)}`,errSchemaPath:`${e.errSchemaPath}/${r}`}:{schema:a[i],schemaPath:(0,t._)`${e.schemaPath}${(0,t.getProperty)(r)}${(0,t.getProperty)(i)}`,errSchemaPath:`${e.errSchemaPath}/${r}/${(0,n.escapeFragment)(i)}`}}if(a!==void 0){if(o===void 0||s===void 0||c===void 0)throw Error(`"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"`);return{schema:a,schemaPath:o,topSchemaRef:c,errSchemaPath:s}}throw Error(`either "keyword" or "schema" must be passed`)}e.getSubschema=r;function i(e,r,{dataProp:i,dataPropType:a,data:o,dataTypes:s,propertyName:c}){if(o!==void 0&&i!==void 0)throw Error(`both "data" and "dataProp" passed, only one allowed`);let{gen:l}=r;if(i!==void 0){let{errorPath:o,dataPathArr:s,opts:c}=r;u(l.let(`data`,(0,t._)`${r.data}${(0,t.getProperty)(i)}`,!0)),e.errorPath=(0,t.str)`${o}${(0,n.getErrorPath)(i,a,c.jsPropertySyntax)}`,e.parentDataProperty=(0,t._)`${i}`,e.dataPathArr=[...s,e.parentDataProperty]}o!==void 0&&(u(o instanceof t.Name?o:l.let(`data`,o,!0)),c!==void 0&&(e.propertyName=c)),s&&(e.dataTypes=s);function u(t){e.data=t,e.dataLevel=r.dataLevel+1,e.dataTypes=[],r.definedProperties=new Set,e.parentData=r.data,e.dataNames=[...r.dataNames,t]}}e.extendSubschemaData=i;function a(e,{jtdDiscriminator:t,jtdMetadata:n,compositeRule:r,createErrors:i,allErrors:a}){r!==void 0&&(e.compositeRule=r),i!==void 0&&(e.createErrors=i),a!==void 0&&(e.allErrors=a),e.jtdDiscriminator=t,e.jtdMetadata=n}e.extendSubschemaMode=a})),nC=n(((e,t)=>{t.exports=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t==`object`&&typeof n==`object`){if(t.constructor!==n.constructor)return!1;var r,i,a;if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(i=r;i--!==0;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if(a=Object.keys(t),r=a.length,r!==Object.keys(n).length)return!1;for(i=r;i--!==0;)if(!Object.prototype.hasOwnProperty.call(n,a[i]))return!1;for(i=r;i--!==0;){var o=a[i];if(!e(t[o],n[o]))return!1}return!0}return t!==t&&n!==n}})),rC=n(((e,t)=>{var n=t.exports=function(e,t,n){typeof t==`function`&&(n=t,t={}),n=t.cb||n;var i=typeof n==`function`?n:n.pre||function(){},a=n.post||function(){};r(t,i,a,e,``,e)};n.keywords={additionalItems:!0,items:!0,contains:!0,additionalProperties:!0,propertyNames:!0,not:!0,if:!0,then:!0,else:!0},n.arrayKeywords={items:!0,allOf:!0,anyOf:!0,oneOf:!0},n.propsKeywords={$defs:!0,definitions:!0,properties:!0,patternProperties:!0,dependencies:!0},n.skipKeywords={default:!0,enum:!0,const:!0,required:!0,maximum:!0,minimum:!0,exclusiveMaximum:!0,exclusiveMinimum:!0,multipleOf:!0,maxLength:!0,minLength:!0,pattern:!0,format:!0,maxItems:!0,minItems:!0,uniqueItems:!0,maxProperties:!0,minProperties:!0};function r(e,t,a,o,s,c,l,u,d,f){if(o&&typeof o==`object`&&!Array.isArray(o)){for(var p in t(o,s,c,l,u,d,f),o){var m=o[p];if(Array.isArray(m)){if(p in n.arrayKeywords)for(var h=0;h<m.length;h++)r(e,t,a,m[h],s+`/`+p+`/`+h,c,s,p,o,h)}else if(p in n.propsKeywords){if(m&&typeof m==`object`)for(var g in m)r(e,t,a,m[g],s+`/`+p+`/`+i(g),c,s,p,o,g)}else (p in n.keywords||e.allKeys&&!(p in n.skipKeywords))&&r(e,t,a,m,s+`/`+p,c,s,p,o)}a(o,s,c,l,u,d,f)}}function i(e){return e.replace(/~/g,`~0`).replace(/\//g,`~1`)}})),iC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.getSchemaRefs=e.resolveUrl=e.normalizeId=e._getFullPath=e.getFullPath=e.inlineRef=void 0;var t=q(),n=nC(),r=rC(),i=new Set([`type`,`format`,`pattern`,`maxLength`,`minLength`,`maxProperties`,`minProperties`,`maxItems`,`minItems`,`maximum`,`minimum`,`uniqueItems`,`multipleOf`,`required`,`enum`,`const`]);function a(e,t=!0){return typeof e==`boolean`?!0:t===!0?!s(e):t?c(e)<=t:!1}e.inlineRef=a;var o=new Set([`$ref`,`$recursiveRef`,`$recursiveAnchor`,`$dynamicRef`,`$dynamicAnchor`]);function s(e){for(let t in e){if(o.has(t))return!0;let n=e[t];if(Array.isArray(n)&&n.some(s)||typeof n==`object`&&s(n))return!0}return!1}function c(e){let n=0;for(let r in e)if(r===`$ref`||(n++,!i.has(r)&&(typeof e[r]==`object`&&(0,t.eachItem)(e[r],e=>n+=c(e)),n===1/0)))return 1/0;return n}function l(e,t=``,n){return n!==!1&&(t=f(t)),u(e,e.parse(t))}e.getFullPath=l;function u(e,t){return e.serialize(t).split(`#`)[0]+`#`}e._getFullPath=u;var d=/#\/?$/;function f(e){return e?e.replace(d,``):``}e.normalizeId=f;function p(e,t,n){return n=f(n),e.resolve(t,n)}e.resolveUrl=p;var m=/^[a-z_][-a-z0-9._]*$/i;function h(e,t){if(typeof e==`boolean`)return{};let{schemaId:i,uriResolver:a}=this.opts,o=f(e[i]||t),s={"":o},c=l(a,o,!1),u={},d=new Set;return r(e,{allKeys:!0},(e,t,n,r)=>{if(r===void 0)return;let a=c+t,o=s[r];typeof e[i]==`string`&&(o=l.call(this,e[i])),g.call(this,e.$anchor),g.call(this,e.$dynamicAnchor),s[t]=o;function l(t){let n=this.opts.uriResolver.resolve;if(t=f(o?n(o,t):t),d.has(t))throw h(t);d.add(t);let r=this.refs[t];return typeof r==`string`&&(r=this.refs[r]),typeof r==`object`?p(e,r.schema,t):t!==f(a)&&(t[0]===`#`?(p(e,u[t],t),u[t]=e):this.refs[t]=a),t}function g(e){if(typeof e==`string`){if(!m.test(e))throw Error(`invalid anchor "${e}"`);l.call(this,`#${e}`)}}}),u;function p(e,t,r){if(t!==void 0&&!n(e,t))throw h(r)}function h(e){return Error(`reference "${e}" resolves to more than one schema`)}}e.getSchemaRefs=h})),aC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.getData=e.KeywordCxt=e.validateFunctionCode=void 0;var t=JS(),n=ZS(),r=XS(),i=ZS(),a=QS(),o=eC(),s=tC(),c=K(),l=KS(),u=iC(),d=q(),f=qS();function p(e){if(S(e)&&(w(e),x(e))){_(e);return}m(e,()=>(0,t.topBoolOrEmptySchema)(e))}e.validateFunctionCode=p;function m({gen:e,validateName:t,schema:n,schemaEnv:r,opts:i},a){i.code.es5?e.func(t,(0,c._)`${l.default.data}, ${l.default.valCxt}`,r.$async,()=>{e.code((0,c._)`"use strict"; ${y(n,i)}`),g(e,i),e.code(a)}):e.func(t,(0,c._)`${l.default.data}, ${h(i)}`,r.$async,()=>e.code(y(n,i)).code(a))}function h(e){return(0,c._)`{${l.default.instancePath}="", ${l.default.parentData}, ${l.default.parentDataProperty}, ${l.default.rootData}=${l.default.data}${e.dynamicRef?(0,c._)`, ${l.default.dynamicAnchors}={}`:c.nil}}={}`}function g(e,t){e.if(l.default.valCxt,()=>{e.var(l.default.instancePath,(0,c._)`${l.default.valCxt}.${l.default.instancePath}`),e.var(l.default.parentData,(0,c._)`${l.default.valCxt}.${l.default.parentData}`),e.var(l.default.parentDataProperty,(0,c._)`${l.default.valCxt}.${l.default.parentDataProperty}`),e.var(l.default.rootData,(0,c._)`${l.default.valCxt}.${l.default.rootData}`),t.dynamicRef&&e.var(l.default.dynamicAnchors,(0,c._)`${l.default.valCxt}.${l.default.dynamicAnchors}`)},()=>{e.var(l.default.instancePath,(0,c._)`""`),e.var(l.default.parentData,(0,c._)`undefined`),e.var(l.default.parentDataProperty,(0,c._)`undefined`),e.var(l.default.rootData,l.default.data),t.dynamicRef&&e.var(l.default.dynamicAnchors,(0,c._)`{}`)})}function _(e){let{schema:t,opts:n,gen:r}=e;m(e,()=>{n.$comment&&t.$comment&&O(e),E(e),r.let(l.default.vErrors,null),r.let(l.default.errors,0),n.unevaluated&&v(e),T(e),k(e)})}function v(e){let{gen:t,validateName:n}=e;e.evaluated=t.const(`evaluated`,(0,c._)`${n}.evaluated`),t.if((0,c._)`${e.evaluated}.dynamicProps`,()=>t.assign((0,c._)`${e.evaluated}.props`,(0,c._)`undefined`)),t.if((0,c._)`${e.evaluated}.dynamicItems`,()=>t.assign((0,c._)`${e.evaluated}.items`,(0,c._)`undefined`))}function y(e,t){let n=typeof e==`object`&&e[t.schemaId];return n&&(t.code.source||t.code.process)?(0,c._)`/*# sourceURL=${n} */`:c.nil}function b(e,n){if(S(e)&&(w(e),x(e))){C(e,n);return}(0,t.boolOrEmptySchema)(e,n)}function x({schema:e,self:t}){if(typeof e==`boolean`)return!e;for(let n in e)if(t.RULES.all[n])return!0;return!1}function S(e){return typeof e.schema!=`boolean`}function C(e,t){let{schema:n,gen:r,opts:i}=e;i.$comment&&n.$comment&&O(e),te(e),D(e);let a=r.const(`_errs`,l.default.errors);T(e,a),r.var(t,(0,c._)`${a} === ${l.default.errors}`)}function w(e){(0,d.checkUnknownRules)(e),ee(e)}function T(e,t){if(e.opts.jtd)return ne(e,[],!1,t);let r=(0,n.getSchemaTypes)(e.schema);ne(e,r,!(0,n.coerceAndCheckDataType)(e,r),t)}function ee(e){let{schema:t,errSchemaPath:n,opts:r,self:i}=e;t.$ref&&r.ignoreKeywordsWithRef&&(0,d.schemaHasRulesButRef)(t,i.RULES)&&i.logger.warn(`$ref: keywords ignored in schema at path "${n}"`)}function E(e){let{schema:t,opts:n}=e;t.default!==void 0&&n.useDefaults&&n.strictSchema&&(0,d.checkStrictMode)(e,`default is ignored in the schema root`)}function te(e){let t=e.schema[e.opts.schemaId];t&&(e.baseId=(0,u.resolveUrl)(e.opts.uriResolver,e.baseId,t))}function D(e){if(e.schema.$async&&!e.schemaEnv.$async)throw Error(`async schema in sync schema`)}function O({gen:e,schemaEnv:t,schema:n,errSchemaPath:r,opts:i}){let a=n.$comment;if(i.$comment===!0)e.code((0,c._)`${l.default.self}.logger.log(${a})`);else if(typeof i.$comment==`function`){let n=(0,c.str)`${r}/$comment`,i=e.scopeValue(`root`,{ref:t.root});e.code((0,c._)`${l.default.self}.opts.$comment(${a}, ${n}, ${i}.schema)`)}}function k(e){let{gen:t,schemaEnv:n,validateName:r,ValidationError:i,opts:a}=e;n.$async?t.if((0,c._)`${l.default.errors} === 0`,()=>t.return(l.default.data),()=>t.throw((0,c._)`new ${i}(${l.default.vErrors})`)):(t.assign((0,c._)`${r}.errors`,l.default.vErrors),a.unevaluated&&A(e),t.return((0,c._)`${l.default.errors} === 0`))}function A({gen:e,evaluated:t,props:n,items:r}){n instanceof c.Name&&e.assign((0,c._)`${t}.props`,n),r instanceof c.Name&&e.assign((0,c._)`${t}.items`,r)}function ne(e,t,n,a){let{gen:o,schema:s,data:u,allErrors:f,opts:p,self:m}=e,{RULES:h}=m;if(s.$ref&&(p.ignoreKeywordsWithRef||!(0,d.schemaHasRulesButRef)(s,h))){o.block(()=>ue(e,`$ref`,h.all.$ref.definition));return}p.jtd||re(e,t),o.block(()=>{for(let e of h.rules)g(e);g(h.post)});function g(d){(0,r.shouldUseGroup)(s,d)&&(d.type?(o.if((0,i.checkDataType)(d.type,u,p.strictNumbers)),j(e,d),t.length===1&&t[0]===d.type&&n&&(o.else(),(0,i.reportTypeError)(e)),o.endIf()):j(e,d),f||o.if((0,c._)`${l.default.errors} === ${a||0}`))}}function j(e,t){let{gen:n,schema:i,opts:{useDefaults:o}}=e;o&&(0,a.assignDefaults)(e,t.type),n.block(()=>{for(let n of t.rules)(0,r.shouldUseRule)(i,n)&&ue(e,n.keyword,n.definition,t.type)})}function re(e,t){e.schemaEnv.meta||!e.opts.strictTypes||(ie(e,t),e.opts.allowUnionTypes||M(e,t),ae(e,e.dataTypes))}function ie(e,t){if(t.length){if(!e.dataTypes.length){e.dataTypes=t;return}t.forEach(t=>{se(e.dataTypes,t)||ce(e,`type "${t}" not allowed by context "${e.dataTypes.join(`,`)}"`)}),N(e,t)}}function M(e,t){t.length>1&&!(t.length===2&&t.includes(`null`))&&ce(e,`use allowUnionTypes to allow union type keyword`)}function ae(e,t){let n=e.self.RULES.all;for(let i in n){let a=n[i];if(typeof a==`object`&&(0,r.shouldUseRule)(e.schema,a)){let{type:n}=a.definition;n.length&&!n.some(e=>oe(t,e))&&ce(e,`missing type "${n.join(`,`)}" for keyword "${i}"`)}}}function oe(e,t){return e.includes(t)||t===`number`&&e.includes(`integer`)}function se(e,t){return e.includes(t)||t===`integer`&&e.includes(`number`)}function N(e,t){let n=[];for(let r of e.dataTypes)se(t,r)?n.push(r):t.includes(`integer`)&&r===`number`&&n.push(`integer`);e.dataTypes=n}function ce(e,t){let n=e.schemaEnv.baseId+e.errSchemaPath;t+=` at "${n}" (strictTypes)`,(0,d.checkStrictMode)(e,t,e.opts.strictTypes)}var le=class{constructor(e,t,n){if((0,o.validateKeywordUsage)(e,t,n),this.gen=e.gen,this.allErrors=e.allErrors,this.keyword=n,this.data=e.data,this.schema=e.schema[n],this.$data=t.$data&&e.opts.$data&&this.schema&&this.schema.$data,this.schemaValue=(0,d.schemaRefOrVal)(e,this.schema,n,this.$data),this.schemaType=t.schemaType,this.parentSchema=e.schema,this.params={},this.it=e,this.def=t,this.$data)this.schemaCode=e.gen.const(`vSchema`,pe(this.$data,e));else if(this.schemaCode=this.schemaValue,!(0,o.validSchemaType)(this.schema,t.schemaType,t.allowUndefined))throw Error(`${n} value must be ${JSON.stringify(t.schemaType)}`);(`code`in t?t.trackErrors:t.errors!==!1)&&(this.errsCount=e.gen.const(`_errs`,l.default.errors))}result(e,t,n){this.failResult((0,c.not)(e),t,n)}failResult(e,t,n){this.gen.if(e),n?n():this.error(),t?(this.gen.else(),t(),this.allErrors&&this.gen.endIf()):this.allErrors?this.gen.endIf():this.gen.else()}pass(e,t){this.failResult((0,c.not)(e),void 0,t)}fail(e){if(e===void 0){this.error(),this.allErrors||this.gen.if(!1);return}this.gen.if(e),this.error(),this.allErrors?this.gen.endIf():this.gen.else()}fail$data(e){if(!this.$data)return this.fail(e);let{schemaCode:t}=this;this.fail((0,c._)`${t} !== undefined && (${(0,c.or)(this.invalid$data(),e)})`)}error(e,t,n){if(t){this.setParams(t),this._error(e,n),this.setParams({});return}this._error(e,n)}_error(e,t){(e?f.reportExtraError:f.reportError)(this,this.def.error,t)}$dataError(){(0,f.reportError)(this,this.def.$dataError||f.keyword$DataError)}reset(){if(this.errsCount===void 0)throw Error(`add "trackErrors" to keyword definition`);(0,f.resetErrorsCount)(this.gen,this.errsCount)}ok(e){this.allErrors||this.gen.if(e)}setParams(e,t){t?Object.assign(this.params,e):this.params=e}block$data(e,t,n=c.nil){this.gen.block(()=>{this.check$data(e,n),t()})}check$data(e=c.nil,t=c.nil){if(!this.$data)return;let{gen:n,schemaCode:r,schemaType:i,def:a}=this;n.if((0,c.or)((0,c._)`${r} === undefined`,t)),e!==c.nil&&n.assign(e,!0),(i.length||a.validateSchema)&&(n.elseIf(this.invalid$data()),this.$dataError(),e!==c.nil&&n.assign(e,!1)),n.else()}invalid$data(){let{gen:e,schemaCode:t,schemaType:n,def:r,it:a}=this;return(0,c.or)(o(),s());function o(){if(n.length){if(!(t instanceof c.Name))throw Error(`ajv implementation error`);let e=Array.isArray(n)?n:[n];return(0,c._)`${(0,i.checkDataTypes)(e,t,a.opts.strictNumbers,i.DataType.Wrong)}`}return c.nil}function s(){if(r.validateSchema){let n=e.scopeValue(`validate$data`,{ref:r.validateSchema});return(0,c._)`!${n}(${t})`}return c.nil}}subschema(e,t){let n=(0,s.getSubschema)(this.it,e);(0,s.extendSubschemaData)(n,this.it,e),(0,s.extendSubschemaMode)(n,e);let r={...this.it,...n,items:void 0,props:void 0};return b(r,t),r}mergeEvaluated(e,t){let{it:n,gen:r}=this;n.opts.unevaluated&&(n.props!==!0&&e.props!==void 0&&(n.props=d.mergeEvaluated.props(r,e.props,n.props,t)),n.items!==!0&&e.items!==void 0&&(n.items=d.mergeEvaluated.items(r,e.items,n.items,t)))}mergeValidEvaluated(e,t){let{it:n,gen:r}=this;if(n.opts.unevaluated&&(n.props!==!0||n.items!==!0))return r.if(t,()=>this.mergeEvaluated(e,c.Name)),!0}};e.KeywordCxt=le;function ue(e,t,n,r){let i=new le(e,n,t);`code`in n?n.code(i,r):i.$data&&n.validate?(0,o.funcKeywordCode)(i,n):`macro`in n?(0,o.macroKeywordCode)(i,n):(n.compile||n.validate)&&(0,o.funcKeywordCode)(i,n)}var de=/^\/(?:[^~]|~0|~1)*$/,fe=/^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;function pe(e,{dataLevel:t,dataNames:n,dataPathArr:r}){let i,a;if(e===``)return l.default.rootData;if(e[0]===`/`){if(!de.test(e))throw Error(`Invalid JSON-pointer: ${e}`);i=e,a=l.default.rootData}else{let o=fe.exec(e);if(!o)throw Error(`Invalid JSON-pointer: ${e}`);let s=+o[1];if(i=o[2],i===`#`){if(s>=t)throw Error(u(`property/index`,s));return r[t-s]}if(s>t)throw Error(u(`data`,s));if(a=n[t-s],!i)return a}let o=a,s=i.split(`/`);for(let e of s)e&&(a=(0,c._)`${a}${(0,c.getProperty)((0,d.unescapeJsonPointer)(e))}`,o=(0,c._)`${o} && ${a}`);return o;function u(e,n){return`Cannot access ${e} ${n} levels up, current level is ${t}`}}e.getData=pe})),oC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.default=class extends Error{constructor(e){super(`validation failed`),this.errors=e,this.ajv=this.validation=!0}}})),sC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=iC();e.default=class extends Error{constructor(e,n,r,i){super(i||`can't resolve reference ${r} from id ${n}`),this.missingRef=(0,t.resolveUrl)(e,n,r),this.missingSchema=(0,t.normalizeId)((0,t.getFullPath)(e,this.missingRef))}}})),cC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.resolveSchema=e.getCompilingSchema=e.resolveRef=e.compileSchema=e.SchemaEnv=void 0;var t=K(),n=oC(),r=KS(),i=iC(),a=q(),o=aC(),s=class{constructor(e){this.refs={},this.dynamicAnchors={};let t;typeof e.schema==`object`&&(t=e.schema),this.schema=e.schema,this.schemaId=e.schemaId,this.root=e.root||this,this.baseId=e.baseId??(0,i.normalizeId)(t?.[e.schemaId||`$id`]),this.schemaPath=e.schemaPath,this.localRefs=e.localRefs,this.meta=e.meta,this.$async=t?.$async,this.refs={}}};e.SchemaEnv=s;function c(e){let a=d.call(this,e);if(a)return a;let s=(0,i.getFullPath)(this.opts.uriResolver,e.root.baseId),{es5:c,lines:l}=this.opts.code,{ownProperties:u}=this.opts,f=new t.CodeGen(this.scope,{es5:c,lines:l,ownProperties:u}),p;e.$async&&(p=f.scopeValue(`Error`,{ref:n.default,code:(0,t._)`require("ajv/dist/runtime/validation_error").default`}));let m=f.scopeName(`validate`);e.validateName=m;let h={gen:f,allErrors:this.opts.allErrors,data:r.default.data,parentData:r.default.parentData,parentDataProperty:r.default.parentDataProperty,dataNames:[r.default.data],dataPathArr:[t.nil],dataLevel:0,dataTypes:[],definedProperties:new Set,topSchemaRef:f.scopeValue(`schema`,this.opts.code.source===!0?{ref:e.schema,code:(0,t.stringify)(e.schema)}:{ref:e.schema}),validateName:m,ValidationError:p,schema:e.schema,schemaEnv:e,rootId:s,baseId:e.baseId||s,schemaPath:t.nil,errSchemaPath:e.schemaPath||(this.opts.jtd?``:`#`),errorPath:(0,t._)`""`,opts:this.opts,self:this},g;try{this._compilations.add(e),(0,o.validateFunctionCode)(h),f.optimize(this.opts.code.optimize);let n=f.toString();g=`${f.scopeRefs(r.default.scope)}return ${n}`,this.opts.code.process&&(g=this.opts.code.process(g,e));let i=Function(`${r.default.self}`,`${r.default.scope}`,g)(this,this.scope.get());if(this.scope.value(m,{ref:i}),i.errors=null,i.schema=e.schema,i.schemaEnv=e,e.$async&&(i.$async=!0),this.opts.code.source===!0&&(i.source={validateName:m,validateCode:n,scopeValues:f._values}),this.opts.unevaluated){let{props:e,items:n}=h;i.evaluated={props:e instanceof t.Name?void 0:e,items:n instanceof t.Name?void 0:n,dynamicProps:e instanceof t.Name,dynamicItems:n instanceof t.Name},i.source&&(i.source.evaluated=(0,t.stringify)(i.evaluated))}return e.validate=i,e}catch(t){throw delete e.validate,delete e.validateName,g&&this.logger.error(`Error compiling schema, function code:`,g),t}finally{this._compilations.delete(e)}}e.compileSchema=c;function l(e,t,n){n=(0,i.resolveUrl)(this.opts.uriResolver,t,n);let r=e.refs[n];if(r)return r;let a=p.call(this,e,n);if(a===void 0){let r=e.localRefs?.[n],{schemaId:i}=this.opts;r&&(a=new s({schema:r,schemaId:i,root:e,baseId:t}))}if(a!==void 0)return e.refs[n]=u.call(this,a)}e.resolveRef=l;function u(e){return(0,i.inlineRef)(e.schema,this.opts.inlineRefs)?e.schema:e.validate?e:c.call(this,e)}function d(e){for(let t of this._compilations)if(f(t,e))return t}e.getCompilingSchema=d;function f(e,t){return e.schema===t.schema&&e.root===t.root&&e.baseId===t.baseId}function p(e,t){let n;for(;typeof(n=this.refs[t])==`string`;)t=n;return n||this.schemas[t]||m.call(this,e,t)}function m(e,t){let n=this.opts.uriResolver.parse(t),r=(0,i._getFullPath)(this.opts.uriResolver,n),a=(0,i.getFullPath)(this.opts.uriResolver,e.baseId,void 0);if(Object.keys(e.schema).length>0&&r===a)return g.call(this,n,e);let o=(0,i.normalizeId)(r),l=this.refs[o]||this.schemas[o];if(typeof l==`string`){let t=m.call(this,e,l);return typeof t?.schema==`object`?g.call(this,n,t):void 0}if(typeof l?.schema==`object`){if(l.validate||c.call(this,l),o===(0,i.normalizeId)(t)){let{schema:t}=l,{schemaId:n}=this.opts,r=t[n];return r&&(a=(0,i.resolveUrl)(this.opts.uriResolver,a,r)),new s({schema:t,schemaId:n,root:e,baseId:a})}return g.call(this,n,l)}}e.resolveSchema=m;var h=new Set([`properties`,`patternProperties`,`enum`,`dependencies`,`definitions`]);function g(e,{baseId:t,schema:n,root:r}){if(e.fragment?.[0]!==`/`)return;for(let r of e.fragment.slice(1).split(`/`)){if(typeof n==`boolean`)return;let e=n[(0,a.unescapeFragment)(r)];if(e===void 0)return;n=e;let o=typeof n==`object`&&n[this.opts.schemaId];!h.has(r)&&o&&(t=(0,i.resolveUrl)(this.opts.uriResolver,t,o))}let o;if(typeof n!=`boolean`&&n.$ref&&!(0,a.schemaHasRulesButRef)(n,this.RULES)){let e=(0,i.resolveUrl)(this.opts.uriResolver,t,n.$ref);o=m.call(this,r,e)}let{schemaId:c}=this.opts;if(o||=new s({schema:n,schemaId:c,root:r,baseId:t}),o.schema!==o.root.schema)return o}})),lC=r({$id:()=>uC,additionalProperties:()=>!1,default:()=>hC,description:()=>dC,properties:()=>mC,required:()=>pC,type:()=>fC}),uC,dC,fC,pC,mC,hC,gC=e((()=>{uC=`https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#`,dC=`Meta-schema for $data reference (JSON AnySchema extension proposal)`,fC=`object`,pC=[`$data`],mC={$data:{type:`string`,anyOf:[{format:`relative-json-pointer`},{format:`json-pointer`}]}},hC={$id:uC,description:dC,type:fC,required:pC,properties:mC,additionalProperties:!1}})),_C=n(((e,t)=>{var n=RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu),r=RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);function i(e){let t=``,n=0,r=0;for(r=0;r<e.length;r++)if(n=e[r].charCodeAt(0),n!==48){if(!(n>=48&&n<=57||n>=65&&n<=70||n>=97&&n<=102))return``;t+=e[r];break}for(r+=1;r<e.length;r++){if(n=e[r].charCodeAt(0),!(n>=48&&n<=57||n>=65&&n<=70||n>=97&&n<=102))return``;t+=e[r]}return t}var a=RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);function o(e){return e.length=0,!0}function s(e,t,n){if(e.length){let r=i(e);if(r!==``)t.push(r);else return n.error=!0,!1;e.length=0}return!0}function c(e){let t=0,n={error:!1,address:``,zone:``},r=[],a=[],c=!1,l=!1,u=s;for(let i=0;i<e.length;i++){let s=e[i];if(!(s===`[`||s===`]`))if(s===`:`){if(c===!0&&(l=!0),!u(a,r,n))break;if(++t>7){n.error=!0;break}i>0&&e[i-1]===`:`&&(c=!0),r.push(`:`);continue}else if(s===`%`){if(!u(a,r,n))break;u=o}else{a.push(s);continue}}return a.length&&(u===o?n.zone=a.join(``):l?r.push(a.join(``)):r.push(i(a))),n.address=r.join(``),n}function l(e){if(u(e,`:`)<2)return{host:e,isIPV6:!1};let t=c(e);if(t.error)return{host:e,isIPV6:!1};{let e=t.address,n=t.address;return t.zone&&(e+=`%`+t.zone,n+=`%25`+t.zone),{host:e,isIPV6:!0,escapedHost:n}}}function u(e,t){let n=0;for(let r=0;r<e.length;r++)e[r]===t&&n++;return n}function d(e){let t=e,n=[],r=-1,i=0;for(;i=t.length;){if(i===1){if(t===`.`)break;if(t===`/`){n.push(`/`);break}else{n.push(t);break}}else if(i===2){if(t[0]===`.`){if(t[1]===`.`)break;if(t[1]===`/`){t=t.slice(2);continue}}else if(t[0]===`/`&&(t[1]===`.`||t[1]===`/`)){n.push(`/`);break}}else if(i===3&&t===`/..`){n.length!==0&&n.pop(),n.push(`/`);break}if(t[0]===`.`){if(t[1]===`.`){if(t[2]===`/`){t=t.slice(3);continue}}else if(t[1]===`/`){t=t.slice(2);continue}}else if(t[0]===`/`&&t[1]===`.`){if(t[2]===`/`){t=t.slice(2);continue}else if(t[2]===`.`&&t[3]===`/`){t=t.slice(3),n.length!==0&&n.pop();continue}}if((r=t.indexOf(`/`,1))===-1){n.push(t);break}else n.push(t.slice(0,r)),t=t.slice(r)}return n.join(``)}function f(e,t){let n=t===!0?unescape:escape;return e.scheme!==void 0&&(e.scheme=n(e.scheme)),e.userinfo!==void 0&&(e.userinfo=n(e.userinfo)),e.host!==void 0&&(e.host=n(e.host)),e.path!==void 0&&(e.path=n(e.path)),e.query!==void 0&&(e.query=n(e.query)),e.fragment!==void 0&&(e.fragment=n(e.fragment)),e}function p(e){let t=[];if(e.userinfo!==void 0&&(t.push(e.userinfo),t.push(`@`)),e.host!==void 0){let n=unescape(e.host);if(!r(n)){let t=l(n);n=t.isIPV6===!0?`[${t.escapedHost}]`:e.host}t.push(n)}return(typeof e.port==`number`||typeof e.port==`string`)&&(t.push(`:`),t.push(String(e.port))),t.length?t.join(``):void 0}t.exports={nonSimpleDomain:a,recomposeAuthority:p,normalizeComponentEncoding:f,removeDotSegments:d,isIPv4:r,isUUID:n,normalizeIPv6:l,stringArrayToHexStripped:i}})),vC=n(((e,t)=>{var{isUUID:n}=_C(),r=/([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu,i=[`http`,`https`,`ws`,`wss`,`urn`,`urn:uuid`];function a(e){return i.indexOf(e)!==-1}function o(e){return e.secure===!0?!0:e.secure===!1?!1:e.scheme?e.scheme.length===3&&(e.scheme[0]===`w`||e.scheme[0]===`W`)&&(e.scheme[1]===`s`||e.scheme[1]===`S`)&&(e.scheme[2]===`s`||e.scheme[2]===`S`):!1}function s(e){return e.host||(e.error=e.error||`HTTP URIs must have a host.`),e}function c(e){let t=String(e.scheme).toLowerCase()===`https`;return(e.port===(t?443:80)||e.port===``)&&(e.port=void 0),e.path||=`/`,e}function l(e){return e.secure=o(e),e.resourceName=(e.path||`/`)+(e.query?`?`+e.query:``),e.path=void 0,e.query=void 0,e}function u(e){if((e.port===(o(e)?443:80)||e.port===``)&&(e.port=void 0),typeof e.secure==`boolean`&&(e.scheme=e.secure?`wss`:`ws`,e.secure=void 0),e.resourceName){let[t,n]=e.resourceName.split(`?`);e.path=t&&t!==`/`?t:void 0,e.query=n,e.resourceName=void 0}return e.fragment=void 0,e}function d(e,t){if(!e.path)return e.error=`URN can not be parsed`,e;let n=e.path.match(r);if(n){let r=t.scheme||e.scheme||`urn`;e.nid=n[1].toLowerCase(),e.nss=n[2];let i=S(`${r}:${t.nid||e.nid}`);e.path=void 0,i&&(e=i.parse(e,t))}else e.error=e.error||`URN can not be parsed.`;return e}function f(e,t){if(e.nid===void 0)throw Error(`URN without nid cannot be serialized`);let n=t.scheme||e.scheme||`urn`,r=e.nid.toLowerCase(),i=S(`${n}:${t.nid||r}`);i&&(e=i.serialize(e,t));let a=e,o=e.nss;return a.path=`${r||t.nid}:${o}`,t.skipEscape=!0,a}function p(e,t){let r=e;return r.uuid=r.nss,r.nss=void 0,!t.tolerant&&(!r.uuid||!n(r.uuid))&&(r.error=r.error||`UUID is not valid.`),r}function m(e){let t=e;return t.nss=(e.uuid||``).toLowerCase(),t}var h={scheme:`http`,domainHost:!0,parse:s,serialize:c},g={scheme:`https`,domainHost:h.domainHost,parse:s,serialize:c},_={scheme:`ws`,domainHost:!0,parse:l,serialize:u},v={scheme:`wss`,domainHost:_.domainHost,parse:_.parse,serialize:_.serialize},y={scheme:`urn`,parse:d,serialize:f,skipNormalize:!0},b={scheme:`urn:uuid`,parse:p,serialize:m,skipNormalize:!0},x={http:h,https:g,ws:_,wss:v,urn:y,"urn:uuid":b};Object.setPrototypeOf(x,null);function S(e){return e&&(x[e]||x[e.toLowerCase()])||void 0}t.exports={wsIsSecure:o,SCHEMES:x,isValidSchemeName:a,getSchemeHandler:S}})),yC=n(((e,t)=>{var{normalizeIPv6:n,removeDotSegments:r,recomposeAuthority:i,normalizeComponentEncoding:a,isIPv4:o,nonSimpleDomain:s}=_C(),{SCHEMES:c,getSchemeHandler:l}=vC();function u(e,t){return typeof e==`string`?e=m(g(e,t),t):typeof e==`object`&&(e=g(m(e,t),t)),e}function d(e,t,n){let r=n?Object.assign({scheme:`null`},n):{scheme:`null`},i=f(g(e,r),g(t,r),r,!0);return r.skipEscape=!0,m(i,r)}function f(e,t,n,i){let a={};return i||(e=g(m(e,n),n),t=g(m(t,n),n)),n||={},!n.tolerant&&t.scheme?(a.scheme=t.scheme,a.userinfo=t.userinfo,a.host=t.host,a.port=t.port,a.path=r(t.path||``),a.query=t.query):(t.userinfo!==void 0||t.host!==void 0||t.port!==void 0?(a.userinfo=t.userinfo,a.host=t.host,a.port=t.port,a.path=r(t.path||``),a.query=t.query):(t.path?(t.path[0]===`/`?a.path=r(t.path):((e.userinfo!==void 0||e.host!==void 0||e.port!==void 0)&&!e.path?a.path=`/`+t.path:e.path?a.path=e.path.slice(0,e.path.lastIndexOf(`/`)+1)+t.path:a.path=t.path,a.path=r(a.path)),a.query=t.query):(a.path=e.path,t.query===void 0?a.query=e.query:a.query=t.query),a.userinfo=e.userinfo,a.host=e.host,a.port=e.port),a.scheme=e.scheme),a.fragment=t.fragment,a}function p(e,t,n){return typeof e==`string`?(e=unescape(e),e=m(a(g(e,n),!0),{...n,skipEscape:!0})):typeof e==`object`&&(e=m(a(e,!0),{...n,skipEscape:!0})),typeof t==`string`?(t=unescape(t),t=m(a(g(t,n),!0),{...n,skipEscape:!0})):typeof t==`object`&&(t=m(a(t,!0),{...n,skipEscape:!0})),e.toLowerCase()===t.toLowerCase()}function m(e,t){let n={host:e.host,scheme:e.scheme,userinfo:e.userinfo,port:e.port,path:e.path,query:e.query,nid:e.nid,nss:e.nss,uuid:e.uuid,fragment:e.fragment,reference:e.reference,resourceName:e.resourceName,secure:e.secure,error:``},a=Object.assign({},t),o=[],s=l(a.scheme||n.scheme);s&&s.serialize&&s.serialize(n,a),n.path!==void 0&&(a.skipEscape?n.path=unescape(n.path):(n.path=escape(n.path),n.scheme!==void 0&&(n.path=n.path.split(`%3A`).join(`:`)))),a.reference!==`suffix`&&n.scheme&&o.push(n.scheme,`:`);let c=i(n);if(c!==void 0&&(a.reference!==`suffix`&&o.push(`//`),o.push(c),n.path&&n.path[0]!==`/`&&o.push(`/`)),n.path!==void 0){let e=n.path;!a.absolutePath&&(!s||!s.absolutePath)&&(e=r(e)),c===void 0&&e[0]===`/`&&e[1]===`/`&&(e=`/%2F`+e.slice(2)),o.push(e)}return n.query!==void 0&&o.push(`?`,n.query),n.fragment!==void 0&&o.push(`#`,n.fragment),o.join(``)}var h=/^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;function g(e,t){let r=Object.assign({},t),i={scheme:void 0,userinfo:void 0,host:``,port:void 0,path:``,query:void 0,fragment:void 0},a=!1;r.reference===`suffix`&&(e=r.scheme?r.scheme+`:`+e:`//`+e);let c=e.match(h);if(c){if(i.scheme=c[1],i.userinfo=c[3],i.host=c[4],i.port=parseInt(c[5],10),i.path=c[6]||``,i.query=c[7],i.fragment=c[8],isNaN(i.port)&&(i.port=c[5]),i.host)if(o(i.host)===!1){let e=n(i.host);i.host=e.host.toLowerCase(),a=e.isIPV6}else a=!0;i.scheme===void 0&&i.userinfo===void 0&&i.host===void 0&&i.port===void 0&&i.query===void 0&&!i.path?i.reference=`same-document`:i.scheme===void 0?i.reference=`relative`:i.fragment===void 0?i.reference=`absolute`:i.reference=`uri`,r.reference&&r.reference!==`suffix`&&r.reference!==i.reference&&(i.error=i.error||`URI is not a `+r.reference+` reference.`);let t=l(r.scheme||i.scheme);if(!r.unicodeSupport&&(!t||!t.unicodeSupport)&&i.host&&(r.domainHost||t&&t.domainHost)&&a===!1&&s(i.host))try{i.host=URL.domainToASCII(i.host.toLowerCase())}catch(e){i.error=i.error||`Host's domain name can not be converted to ASCII: `+e}(!t||t&&!t.skipNormalize)&&(e.indexOf(`%`)!==-1&&(i.scheme!==void 0&&(i.scheme=unescape(i.scheme)),i.host!==void 0&&(i.host=unescape(i.host))),i.path&&=escape(unescape(i.path)),i.fragment&&=encodeURI(decodeURIComponent(i.fragment))),t&&t.parse&&t.parse(i,r)}else i.error=i.error||`URI can not be parsed.`;return i}var _={SCHEMES:c,normalize:u,resolve:d,resolveComponent:f,equal:p,serialize:m,parse:g};t.exports=_,t.exports.default=_,t.exports.fastUri=_})),bC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=yC();t.code=`require("ajv/dist/runtime/uri").default`,e.default=t})),xC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.CodeGen=e.Name=e.nil=e.stringify=e.str=e._=e.KeywordCxt=void 0;var t=aC();Object.defineProperty(e,`KeywordCxt`,{enumerable:!0,get:function(){return t.KeywordCxt}});var n=K();Object.defineProperty(e,`_`,{enumerable:!0,get:function(){return n._}}),Object.defineProperty(e,`str`,{enumerable:!0,get:function(){return n.str}}),Object.defineProperty(e,`stringify`,{enumerable:!0,get:function(){return n.stringify}}),Object.defineProperty(e,`nil`,{enumerable:!0,get:function(){return n.nil}}),Object.defineProperty(e,`Name`,{enumerable:!0,get:function(){return n.Name}}),Object.defineProperty(e,`CodeGen`,{enumerable:!0,get:function(){return n.CodeGen}});var r=oC(),a=sC(),o=YS(),s=cC(),c=K(),l=iC(),u=ZS(),d=q(),f=(gC(),i(lC).default),p=bC(),m=(e,t)=>new RegExp(e,t);m.code=`new RegExp`;var h=[`removeAdditional`,`useDefaults`,`coerceTypes`],g=new Set([`validate`,`serialize`,`parse`,`wrapper`,`root`,`schema`,`keyword`,`pattern`,`formats`,`validate$data`,`func`,`obj`,`Error`]),_={errorDataPath:``,format:"`validateFormats: false` can be used instead.",nullable:`"nullable" keyword is supported by default.`,jsonPointers:`Deprecated jsPropertySyntax can be used instead.`,extendRefs:`Deprecated ignoreKeywordsWithRef can be used instead.`,missingRefs:`Pass empty schema with $id that should be ignored to ajv.addSchema.`,processCode:"Use option `code: {process: (code, schemaEnv: object) => string}`",sourceCode:"Use option `code: {source: true}`",strictDefaults:"It is default now, see option `strict`.",strictKeywords:"It is default now, see option `strict`.",uniqueItems:`"uniqueItems" keyword is always validated.`,unknownFormats:"Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",cache:`Map is used as cache, schema object as key.`,serialize:`Map is used as cache, schema object as key.`,ajvErrors:`It is default now.`},v={ignoreKeywordsWithRef:``,jsPropertySyntax:``,unicode:`"minLength"/"maxLength" account for unicode characters by default.`},y=200;function b(e){let t=e.strict,n=e.code?.optimize,r=n===!0||n===void 0?1:n||0,i=e.code?.regExp??m,a=e.uriResolver??p.default;return{strictSchema:e.strictSchema??t??!0,strictNumbers:e.strictNumbers??t??!0,strictTypes:e.strictTypes??t??`log`,strictTuples:e.strictTuples??t??`log`,strictRequired:e.strictRequired??t??!1,code:e.code?{...e.code,optimize:r,regExp:i}:{optimize:r,regExp:i},loopRequired:e.loopRequired??y,loopEnum:e.loopEnum??y,meta:e.meta??!0,messages:e.messages??!0,inlineRefs:e.inlineRefs??!0,schemaId:e.schemaId??`$id`,addUsedSchema:e.addUsedSchema??!0,validateSchema:e.validateSchema??!0,validateFormats:e.validateFormats??!0,unicodeRegExp:e.unicodeRegExp??!0,int32range:e.int32range??!0,uriResolver:a}}var x=class{constructor(e={}){this.schemas={},this.refs={},this.formats={},this._compilations=new Set,this._loading={},this._cache=new Map,e=this.opts={...e,...b(e)};let{es5:t,lines:n}=this.opts.code;this.scope=new c.ValueScope({scope:{},prefixes:g,es5:t,lines:n}),this.logger=D(e.logger);let r=e.validateFormats;e.validateFormats=!1,this.RULES=(0,o.getRules)(),S.call(this,_,e,`NOT SUPPORTED`),S.call(this,v,e,`DEPRECATED`,`warn`),this._metaOpts=E.call(this),e.formats&&T.call(this),this._addVocabularies(),this._addDefaultMetaSchema(),e.keywords&&ee.call(this,e.keywords),typeof e.meta==`object`&&this.addMetaSchema(e.meta),w.call(this),e.validateFormats=r}_addVocabularies(){this.addKeyword(`$async`)}_addDefaultMetaSchema(){let{$data:e,meta:t,schemaId:n}=this.opts,r=f;n===`id`&&(r={...f},r.id=r.$id,delete r.$id),t&&e&&this.addMetaSchema(r,r[n],!1)}defaultMeta(){let{meta:e,schemaId:t}=this.opts;return this.opts.defaultMeta=typeof e==`object`?e[t]||e:void 0}validate(e,t){let n;if(typeof e==`string`){if(n=this.getSchema(e),!n)throw Error(`no schema with key or ref "${e}"`)}else n=this.compile(e);let r=n(t);return`$async`in n||(this.errors=n.errors),r}compile(e,t){let n=this._addSchema(e,t);return n.validate||this._compileSchemaEnv(n)}compileAsync(e,t){if(typeof this.opts.loadSchema!=`function`)throw Error(`options.loadSchema should be a function`);let{loadSchema:n}=this.opts;return r.call(this,e,t);async function r(e,t){await i.call(this,e.$schema);let n=this._addSchema(e,t);return n.validate||o.call(this,n)}async function i(e){e&&!this.getSchema(e)&&await r.call(this,{$ref:e},!0)}async function o(e){try{return this._compileSchemaEnv(e)}catch(t){if(!(t instanceof a.default))throw t;return s.call(this,t),await c.call(this,t.missingSchema),o.call(this,e)}}function s({missingSchema:e,missingRef:t}){if(this.refs[e])throw Error(`AnySchema ${e} is loaded but ${t} cannot be resolved`)}async function c(e){let n=await l.call(this,e);this.refs[e]||await i.call(this,n.$schema),this.refs[e]||this.addSchema(n,e,t)}async function l(e){let t=this._loading[e];if(t)return t;try{return await(this._loading[e]=n(e))}finally{delete this._loading[e]}}}addSchema(e,t,n,r=this.opts.validateSchema){if(Array.isArray(e)){for(let t of e)this.addSchema(t,void 0,n,r);return this}let i;if(typeof e==`object`){let{schemaId:t}=this.opts;if(i=e[t],i!==void 0&&typeof i!=`string`)throw Error(`schema ${t} must be string`)}return t=(0,l.normalizeId)(t||i),this._checkUnique(t),this.schemas[t]=this._addSchema(e,n,t,r,!0),this}addMetaSchema(e,t,n=this.opts.validateSchema){return this.addSchema(e,t,!0,n),this}validateSchema(e,t){if(typeof e==`boolean`)return!0;let n;if(n=e.$schema,n!==void 0&&typeof n!=`string`)throw Error(`$schema must be a string`);if(n=n||this.opts.defaultMeta||this.defaultMeta(),!n)return this.logger.warn(`meta-schema not available`),this.errors=null,!0;let r=this.validate(n,e);if(!r&&t){let e=`schema is invalid: `+this.errorsText();if(this.opts.validateSchema===`log`)this.logger.error(e);else throw Error(e)}return r}getSchema(e){let t;for(;typeof(t=C.call(this,e))==`string`;)e=t;if(t===void 0){let{schemaId:n}=this.opts,r=new s.SchemaEnv({schema:{},schemaId:n});if(t=s.resolveSchema.call(this,r,e),!t)return;this.refs[e]=t}return t.validate||this._compileSchemaEnv(t)}removeSchema(e){if(e instanceof RegExp)return this._removeAllSchemas(this.schemas,e),this._removeAllSchemas(this.refs,e),this;switch(typeof e){case`undefined`:return this._removeAllSchemas(this.schemas),this._removeAllSchemas(this.refs),this._cache.clear(),this;case`string`:{let t=C.call(this,e);return typeof t==`object`&&this._cache.delete(t.schema),delete this.schemas[e],delete this.refs[e],this}case`object`:{let t=e;this._cache.delete(t);let n=e[this.opts.schemaId];return n&&(n=(0,l.normalizeId)(n),delete this.schemas[n],delete this.refs[n]),this}default:throw Error(`ajv.removeSchema: invalid parameter`)}}addVocabulary(e){for(let t of e)this.addKeyword(t);return this}addKeyword(e,t){let n;if(typeof e==`string`)n=e,typeof t==`object`&&(this.logger.warn(`these parameters are deprecated, see docs for addKeyword`),t.keyword=n);else if(typeof e==`object`&&t===void 0){if(t=e,n=t.keyword,Array.isArray(n)&&!n.length)throw Error(`addKeywords: keyword must be string or non-empty array`)}else throw Error(`invalid addKeywords parameters`);if(k.call(this,n,t),!t)return(0,d.eachItem)(n,e=>A.call(this,e)),this;j.call(this,t);let r={...t,type:(0,u.getJSONTypes)(t.type),schemaType:(0,u.getJSONTypes)(t.schemaType)};return(0,d.eachItem)(n,r.type.length===0?e=>A.call(this,e,r):e=>r.type.forEach(t=>A.call(this,e,r,t))),this}getKeyword(e){let t=this.RULES.all[e];return typeof t==`object`?t.definition:!!t}removeKeyword(e){let{RULES:t}=this;delete t.keywords[e],delete t.all[e];for(let n of t.rules){let t=n.rules.findIndex(t=>t.keyword===e);t>=0&&n.rules.splice(t,1)}return this}addFormat(e,t){return typeof t==`string`&&(t=new RegExp(t)),this.formats[e]=t,this}errorsText(e=this.errors,{separator:t=`, `,dataVar:n=`data`}={}){return!e||e.length===0?`No errors`:e.map(e=>`${n}${e.instancePath} ${e.message}`).reduce((e,n)=>e+t+n)}$dataMetaSchema(e,t){let n=this.RULES.all;e=JSON.parse(JSON.stringify(e));for(let r of t){let t=r.split(`/`).slice(1),i=e;for(let e of t)i=i[e];for(let e in n){let t=n[e];if(typeof t!=`object`)continue;let{$data:r}=t.definition,a=i[e];r&&a&&(i[e]=ie(a))}}return e}_removeAllSchemas(e,t){for(let n in e){let r=e[n];(!t||t.test(n))&&(typeof r==`string`?delete e[n]:r&&!r.meta&&(this._cache.delete(r.schema),delete e[n]))}}_addSchema(e,t,n,r=this.opts.validateSchema,i=this.opts.addUsedSchema){let a,{schemaId:o}=this.opts;if(typeof e==`object`)a=e[o];else if(this.opts.jtd)throw Error(`schema must be object`);else if(typeof e!=`boolean`)throw Error(`schema must be object or boolean`);let c=this._cache.get(e);if(c!==void 0)return c;n=(0,l.normalizeId)(a||n);let u=l.getSchemaRefs.call(this,e,n);return c=new s.SchemaEnv({schema:e,schemaId:o,meta:t,baseId:n,localRefs:u}),this._cache.set(c.schema,c),i&&!n.startsWith(`#`)&&(n&&this._checkUnique(n),this.refs[n]=c),r&&this.validateSchema(e,!0),c}_checkUnique(e){if(this.schemas[e]||this.refs[e])throw Error(`schema with key or id "${e}" already exists`)}_compileSchemaEnv(e){if(e.meta?this._compileMetaSchema(e):s.compileSchema.call(this,e),!e.validate)throw Error(`ajv implementation error`);return e.validate}_compileMetaSchema(e){let t=this.opts;this.opts=this._metaOpts;try{s.compileSchema.call(this,e)}finally{this.opts=t}}};x.ValidationError=r.default,x.MissingRefError=a.default,e.default=x;function S(e,t,n,r=`error`){for(let i in e){let a=i;a in t&&this.logger[r](`${n}: option ${i}. ${e[a]}`)}}function C(e){return e=(0,l.normalizeId)(e),this.schemas[e]||this.refs[e]}function w(){let e=this.opts.schemas;if(e)if(Array.isArray(e))this.addSchema(e);else for(let t in e)this.addSchema(e[t],t)}function T(){for(let e in this.opts.formats){let t=this.opts.formats[e];t&&this.addFormat(e,t)}}function ee(e){if(Array.isArray(e)){this.addVocabulary(e);return}this.logger.warn(`keywords option as map is deprecated, pass array`);for(let t in e){let n=e[t];n.keyword||=t,this.addKeyword(n)}}function E(){let e={...this.opts};for(let t of h)delete e[t];return e}var te={log(){},warn(){},error(){}};function D(e){if(e===!1)return te;if(e===void 0)return console;if(e.log&&e.warn&&e.error)return e;throw Error(`logger must implement log, warn and error methods`)}var O=/^[a-z_$][a-z0-9_$:-]*$/i;function k(e,t){let{RULES:n}=this;if((0,d.eachItem)(e,e=>{if(n.keywords[e])throw Error(`Keyword ${e} is already defined`);if(!O.test(e))throw Error(`Keyword ${e} has invalid name`)}),t&&t.$data&&!(`code`in t||`validate`in t))throw Error(`$data keyword must have "code" or "validate" function`)}function A(e,t,n){var r;let i=t?.post;if(n&&i)throw Error(`keyword with "post" flag cannot have "type"`);let{RULES:a}=this,o=i?a.post:a.rules.find(({type:e})=>e===n);if(o||(o={type:n,rules:[]},a.rules.push(o)),a.keywords[e]=!0,!t)return;let s={keyword:e,definition:{...t,type:(0,u.getJSONTypes)(t.type),schemaType:(0,u.getJSONTypes)(t.schemaType)}};t.before?ne.call(this,o,s,t.before):o.rules.push(s),a.all[e]=s,(r=t.implements)==null||r.forEach(e=>this.addKeyword(e))}function ne(e,t,n){let r=e.rules.findIndex(e=>e.keyword===n);r>=0?e.rules.splice(r,0,t):(e.rules.push(t),this.logger.warn(`rule ${n} is not defined`))}function j(e){let{metaSchema:t}=e;t!==void 0&&(e.$data&&this.opts.$data&&(t=ie(t)),e.validateSchema=this.compile(t,!0))}var re={$ref:`https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#`};function ie(e){return{anyOf:[e,re]}}})),SC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.default={keyword:`id`,code(){throw Error(`NOT SUPPORTED: keyword "id", use "$id" for schema ID`)}}})),CC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.callRef=e.getValidate=void 0;var t=sC(),n=$S(),r=K(),i=KS(),a=cC(),o=q(),s={keyword:`$ref`,schemaType:`string`,code(e){let{gen:n,schema:i,it:o}=e,{baseId:s,schemaEnv:u,validateName:d,opts:f,self:p}=o,{root:m}=u;if((i===`#`||i===`#/`)&&s===m.baseId)return g();let h=a.resolveRef.call(p,m,s,i);if(h===void 0)throw new t.default(o.opts.uriResolver,s,i);if(h instanceof a.SchemaEnv)return _(h);return v(h);function g(){if(u===m)return l(e,d,u,u.$async);let t=n.scopeValue(`root`,{ref:m});return l(e,(0,r._)`${t}.validate`,m,m.$async)}function _(t){l(e,c(e,t),t,t.$async)}function v(t){let a=n.scopeValue(`schema`,f.code.source===!0?{ref:t,code:(0,r.stringify)(t)}:{ref:t}),o=n.name(`valid`),s=e.subschema({schema:t,dataTypes:[],schemaPath:r.nil,topSchemaRef:a,errSchemaPath:i},o);e.mergeEvaluated(s),e.ok(o)}}};function c(e,t){let{gen:n}=e;return t.validate?n.scopeValue(`validate`,{ref:t.validate}):(0,r._)`${n.scopeValue(`wrapper`,{ref:t})}.validate`}e.getValidate=c;function l(e,t,a,s){let{gen:c,it:l}=e,{allErrors:u,schemaEnv:d,opts:f}=l,p=f.passContext?i.default.this:r.nil;s?m():h();function m(){if(!d.$async)throw Error(`async schema referenced by sync schema`);let i=c.let(`valid`);c.try(()=>{c.code((0,r._)`await ${(0,n.callValidateCode)(e,t,p)}`),_(t),u||c.assign(i,!0)},e=>{c.if((0,r._)`!(${e} instanceof ${l.ValidationError})`,()=>c.throw(e)),g(e),u||c.assign(i,!1)}),e.ok(i)}function h(){e.result((0,n.callValidateCode)(e,t,p),()=>_(t),()=>g(t))}function g(e){let t=(0,r._)`${e}.errors`;c.assign(i.default.vErrors,(0,r._)`${i.default.vErrors} === null ? ${t} : ${i.default.vErrors}.concat(${t})`),c.assign(i.default.errors,(0,r._)`${i.default.vErrors}.length`)}function _(e){if(!l.opts.unevaluated)return;let t=a?.validate?.evaluated;if(l.props!==!0)if(t&&!t.dynamicProps)t.props!==void 0&&(l.props=o.mergeEvaluated.props(c,t.props,l.props));else{let t=c.var(`props`,(0,r._)`${e}.evaluated.props`);l.props=o.mergeEvaluated.props(c,t,l.props,r.Name)}if(l.items!==!0)if(t&&!t.dynamicItems)t.items!==void 0&&(l.items=o.mergeEvaluated.items(c,t.items,l.items));else{let t=c.var(`items`,(0,r._)`${e}.evaluated.items`);l.items=o.mergeEvaluated.items(c,t,l.items,r.Name)}}}e.callRef=l,e.default=s})),wC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=SC(),n=CC();e.default=[`$schema`,`$id`,`$defs`,`$vocabulary`,{keyword:`$comment`},`definitions`,t.default,n.default]})),TC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K(),n=t.operators,r={maximum:{okStr:`<=`,ok:n.LTE,fail:n.GT},minimum:{okStr:`>=`,ok:n.GTE,fail:n.LT},exclusiveMaximum:{okStr:`<`,ok:n.LT,fail:n.GTE},exclusiveMinimum:{okStr:`>`,ok:n.GT,fail:n.LTE}};e.default={keyword:Object.keys(r),type:`number`,schemaType:`number`,$data:!0,error:{message:({keyword:e,schemaCode:n})=>(0,t.str)`must be ${r[e].okStr} ${n}`,params:({keyword:e,schemaCode:n})=>(0,t._)`{comparison: ${r[e].okStr}, limit: ${n}}`},code(e){let{keyword:n,data:i,schemaCode:a}=e;e.fail$data((0,t._)`${i} ${r[n].fail} ${a} || isNaN(${i})`)}}})),EC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K();e.default={keyword:`multipleOf`,type:`number`,schemaType:`number`,$data:!0,error:{message:({schemaCode:e})=>(0,t.str)`must be multiple of ${e}`,params:({schemaCode:e})=>(0,t._)`{multipleOf: ${e}}`},code(e){let{gen:n,data:r,schemaCode:i,it:a}=e,o=a.opts.multipleOfPrecision,s=n.let(`res`),c=o?(0,t._)`Math.abs(Math.round(${s}) - ${s}) > 1e-${o}`:(0,t._)`${s} !== parseInt(${s})`;e.fail$data((0,t._)`(${i} === 0 || (${s} = ${r}/${i}, ${c}))`)}}})),DC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});function t(e){let t=e.length,n=0,r=0,i;for(;r<t;)n++,i=e.charCodeAt(r++),i>=55296&&i<=56319&&r<t&&(i=e.charCodeAt(r),(i&64512)==56320&&r++);return n}e.default=t,t.code=`require("ajv/dist/runtime/ucs2length").default`})),OC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K(),n=q(),r=DC();e.default={keyword:[`maxLength`,`minLength`],type:`string`,schemaType:`number`,$data:!0,error:{message({keyword:e,schemaCode:n}){let r=e===`maxLength`?`more`:`fewer`;return(0,t.str)`must NOT have ${r} than ${n} characters`},params:({schemaCode:e})=>(0,t._)`{limit: ${e}}`},code(e){let{keyword:i,data:a,schemaCode:o,it:s}=e,c=i===`maxLength`?t.operators.GT:t.operators.LT,l=s.opts.unicode===!1?(0,t._)`${a}.length`:(0,t._)`${(0,n.useFunc)(e.gen,r.default)}(${a})`;e.fail$data((0,t._)`${l} ${c} ${o}`)}}})),kC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=$S(),n=q(),r=K();e.default={keyword:`pattern`,type:`string`,schemaType:`string`,$data:!0,error:{message:({schemaCode:e})=>(0,r.str)`must match pattern "${e}"`,params:({schemaCode:e})=>(0,r._)`{pattern: ${e}}`},code(e){let{gen:i,data:a,$data:o,schema:s,schemaCode:c,it:l}=e,u=l.opts.unicodeRegExp?`u`:``;if(o){let{regExp:t}=l.opts.code,o=t.code===`new RegExp`?(0,r._)`new RegExp`:(0,n.useFunc)(i,t),s=i.let(`valid`);i.try(()=>i.assign(s,(0,r._)`${o}(${c}, ${u}).test(${a})`),()=>i.assign(s,!1)),e.fail$data((0,r._)`!${s}`)}else{let n=(0,t.usePattern)(e,s);e.fail$data((0,r._)`!${n}.test(${a})`)}}}})),AC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K();e.default={keyword:[`maxProperties`,`minProperties`],type:`object`,schemaType:`number`,$data:!0,error:{message({keyword:e,schemaCode:n}){let r=e===`maxProperties`?`more`:`fewer`;return(0,t.str)`must NOT have ${r} than ${n} properties`},params:({schemaCode:e})=>(0,t._)`{limit: ${e}}`},code(e){let{keyword:n,data:r,schemaCode:i}=e,a=n===`maxProperties`?t.operators.GT:t.operators.LT;e.fail$data((0,t._)`Object.keys(${r}).length ${a} ${i}`)}}})),jC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=$S(),n=K(),r=q();e.default={keyword:`required`,type:`object`,schemaType:`array`,$data:!0,error:{message:({params:{missingProperty:e}})=>(0,n.str)`must have required property '${e}'`,params:({params:{missingProperty:e}})=>(0,n._)`{missingProperty: ${e}}`},code(e){let{gen:i,schema:a,schemaCode:o,data:s,$data:c,it:l}=e,{opts:u}=l;if(!c&&a.length===0)return;let d=a.length>=u.loopRequired;if(l.allErrors?f():p(),u.strictRequired){let t=e.parentSchema.properties,{definedProperties:n}=e.it;for(let e of a)if(t?.[e]===void 0&&!n.has(e)){let t=`required property "${e}" is not defined at "${l.schemaEnv.baseId+l.errSchemaPath}" (strictRequired)`;(0,r.checkStrictMode)(l,t,l.opts.strictRequired)}}function f(){if(d||c)e.block$data(n.nil,m);else for(let n of a)(0,t.checkReportMissingProp)(e,n)}function p(){let n=i.let(`missing`);if(d||c){let t=i.let(`valid`,!0);e.block$data(t,()=>h(n,t)),e.ok(t)}else i.if((0,t.checkMissingProp)(e,a,n)),(0,t.reportMissingProp)(e,n),i.else()}function m(){i.forOf(`prop`,o,n=>{e.setParams({missingProperty:n}),i.if((0,t.noPropertyInData)(i,s,n,u.ownProperties),()=>e.error())})}function h(r,a){e.setParams({missingProperty:r}),i.forOf(r,o,()=>{i.assign(a,(0,t.propertyInData)(i,s,r,u.ownProperties)),i.if((0,n.not)(a),()=>{e.error(),i.break()})},n.nil)}}}})),MC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K();e.default={keyword:[`maxItems`,`minItems`],type:`array`,schemaType:`number`,$data:!0,error:{message({keyword:e,schemaCode:n}){let r=e===`maxItems`?`more`:`fewer`;return(0,t.str)`must NOT have ${r} than ${n} items`},params:({schemaCode:e})=>(0,t._)`{limit: ${e}}`},code(e){let{keyword:n,data:r,schemaCode:i}=e,a=n===`maxItems`?t.operators.GT:t.operators.LT;e.fail$data((0,t._)`${r}.length ${a} ${i}`)}}})),NC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=nC();t.code=`require("ajv/dist/runtime/equal").default`,e.default=t})),PC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=ZS(),n=K(),r=q(),i=NC();e.default={keyword:`uniqueItems`,type:`array`,schemaType:`boolean`,$data:!0,error:{message:({params:{i:e,j:t}})=>(0,n.str)`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,params:({params:{i:e,j:t}})=>(0,n._)`{i: ${e}, j: ${t}}`},code(e){let{gen:a,data:o,$data:s,schema:c,parentSchema:l,schemaCode:u,it:d}=e;if(!s&&!c)return;let f=a.let(`valid`),p=l.items?(0,t.getSchemaTypes)(l.items):[];e.block$data(f,m,(0,n._)`${u} === false`),e.ok(f);function m(){let t=a.let(`i`,(0,n._)`${o}.length`),r=a.let(`j`);e.setParams({i:t,j:r}),a.assign(f,!0),a.if((0,n._)`${t} > 1`,()=>(h()?g:_)(t,r))}function h(){return p.length>0&&!p.some(e=>e===`object`||e===`array`)}function g(r,i){let s=a.name(`item`),c=(0,t.checkDataTypes)(p,s,d.opts.strictNumbers,t.DataType.Wrong),l=a.const(`indices`,(0,n._)`{}`);a.for((0,n._)`;${r}--;`,()=>{a.let(s,(0,n._)`${o}[${r}]`),a.if(c,(0,n._)`continue`),p.length>1&&a.if((0,n._)`typeof ${s} == "string"`,(0,n._)`${s} += "_"`),a.if((0,n._)`typeof ${l}[${s}] == "number"`,()=>{a.assign(i,(0,n._)`${l}[${s}]`),e.error(),a.assign(f,!1).break()}).code((0,n._)`${l}[${s}] = ${r}`)})}function _(t,s){let c=(0,r.useFunc)(a,i.default),l=a.name(`outer`);a.label(l).for((0,n._)`;${t}--;`,()=>a.for((0,n._)`${s} = ${t}; ${s}--;`,()=>a.if((0,n._)`${c}(${o}[${t}], ${o}[${s}])`,()=>{e.error(),a.assign(f,!1).break(l)})))}}}})),FC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K(),n=q(),r=NC();e.default={keyword:`const`,$data:!0,error:{message:`must be equal to constant`,params:({schemaCode:e})=>(0,t._)`{allowedValue: ${e}}`},code(e){let{gen:i,data:a,$data:o,schemaCode:s,schema:c}=e;o||c&&typeof c==`object`?e.fail$data((0,t._)`!${(0,n.useFunc)(i,r.default)}(${a}, ${s})`):e.fail((0,t._)`${c} !== ${a}`)}}})),IC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K(),n=q(),r=NC();e.default={keyword:`enum`,schemaType:`array`,$data:!0,error:{message:`must be equal to one of the allowed values`,params:({schemaCode:e})=>(0,t._)`{allowedValues: ${e}}`},code(e){let{gen:i,data:a,$data:o,schema:s,schemaCode:c,it:l}=e;if(!o&&s.length===0)throw Error(`enum must have non-empty array`);let u=s.length>=l.opts.loopEnum,d,f=()=>d??=(0,n.useFunc)(i,r.default),p;if(u||o)p=i.let(`valid`),e.block$data(p,m);else{if(!Array.isArray(s))throw Error(`ajv implementation error`);let e=i.const(`vSchema`,c);p=(0,t.or)(...s.map((t,n)=>h(e,n)))}e.pass(p);function m(){i.assign(p,!1),i.forOf(`v`,c,e=>i.if((0,t._)`${f()}(${a}, ${e})`,()=>i.assign(p,!0).break()))}function h(e,n){let r=s[n];return typeof r==`object`&&r?(0,t._)`${f()}(${a}, ${e}[${n}])`:(0,t._)`${a} === ${r}`}}}})),LC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=TC(),n=EC(),r=OC(),i=kC(),a=AC(),o=jC(),s=MC(),c=PC(),l=FC(),u=IC();e.default=[t.default,n.default,r.default,i.default,a.default,o.default,s.default,c.default,{keyword:`type`,schemaType:[`string`,`array`]},{keyword:`nullable`,schemaType:`boolean`},l.default,u.default]})),RC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.validateAdditionalItems=void 0;var t=K(),n=q(),r={keyword:`additionalItems`,type:`array`,schemaType:[`boolean`,`object`],before:`uniqueItems`,error:{message:({params:{len:e}})=>(0,t.str)`must NOT have more than ${e} items`,params:({params:{len:e}})=>(0,t._)`{limit: ${e}}`},code(e){let{parentSchema:t,it:r}=e,{items:a}=t;if(!Array.isArray(a)){(0,n.checkStrictMode)(r,`"additionalItems" is ignored when "items" is not an array of schemas`);return}i(e,a)}};function i(e,r){let{gen:i,schema:a,data:o,keyword:s,it:c}=e;c.items=!0;let l=i.const(`len`,(0,t._)`${o}.length`);if(a===!1)e.setParams({len:r.length}),e.pass((0,t._)`${l} <= ${r.length}`);else if(typeof a==`object`&&!(0,n.alwaysValidSchema)(c,a)){let n=i.var(`valid`,(0,t._)`${l} <= ${r.length}`);i.if((0,t.not)(n),()=>u(n)),e.ok(n)}function u(a){i.forRange(`i`,r.length,l,r=>{e.subschema({keyword:s,dataProp:r,dataPropType:n.Type.Num},a),c.allErrors||i.if((0,t.not)(a),()=>i.break())})}}e.validateAdditionalItems=i,e.default=r})),zC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.validateTuple=void 0;var t=K(),n=q(),r=$S(),i={keyword:`items`,type:`array`,schemaType:[`object`,`array`,`boolean`],before:`uniqueItems`,code(e){let{schema:t,it:i}=e;if(Array.isArray(t))return a(e,`additionalItems`,t);i.items=!0,!(0,n.alwaysValidSchema)(i,t)&&e.ok((0,r.validateArray)(e))}};function a(e,r,i=e.schema){let{gen:a,parentSchema:o,data:s,keyword:c,it:l}=e;f(o),l.opts.unevaluated&&i.length&&l.items!==!0&&(l.items=n.mergeEvaluated.items(a,i.length,l.items));let u=a.name(`valid`),d=a.const(`len`,(0,t._)`${s}.length`);i.forEach((r,i)=>{(0,n.alwaysValidSchema)(l,r)||(a.if((0,t._)`${d} > ${i}`,()=>e.subschema({keyword:c,schemaProp:i,dataProp:i},u)),e.ok(u))});function f(e){let{opts:t,errSchemaPath:a}=l,o=i.length,s=o===e.minItems&&(o===e.maxItems||e[r]===!1);if(t.strictTuples&&!s){let e=`"${c}" is ${o}-tuple, but minItems or maxItems/${r} are not specified or different at path "${a}"`;(0,n.checkStrictMode)(l,e,t.strictTuples)}}}e.validateTuple=a,e.default=i})),BC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=zC();e.default={keyword:`prefixItems`,type:`array`,schemaType:[`array`],before:`uniqueItems`,code:e=>(0,t.validateTuple)(e,`items`)}})),VC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K(),n=q(),r=$S(),i=RC();e.default={keyword:`items`,type:`array`,schemaType:[`object`,`boolean`],before:`uniqueItems`,error:{message:({params:{len:e}})=>(0,t.str)`must NOT have more than ${e} items`,params:({params:{len:e}})=>(0,t._)`{limit: ${e}}`},code(e){let{schema:t,parentSchema:a,it:o}=e,{prefixItems:s}=a;o.items=!0,!(0,n.alwaysValidSchema)(o,t)&&(s?(0,i.validateAdditionalItems)(e,s):e.ok((0,r.validateArray)(e)))}}})),HC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K(),n=q();e.default={keyword:`contains`,type:`array`,schemaType:[`object`,`boolean`],before:`uniqueItems`,trackErrors:!0,error:{message:({params:{min:e,max:n}})=>n===void 0?(0,t.str)`must contain at least ${e} valid item(s)`:(0,t.str)`must contain at least ${e} and no more than ${n} valid item(s)`,params:({params:{min:e,max:n}})=>n===void 0?(0,t._)`{minContains: ${e}}`:(0,t._)`{minContains: ${e}, maxContains: ${n}}`},code(e){let{gen:r,schema:i,parentSchema:a,data:o,it:s}=e,c,l,{minContains:u,maxContains:d}=a;s.opts.next?(c=u===void 0?1:u,l=d):c=1;let f=r.const(`len`,(0,t._)`${o}.length`);if(e.setParams({min:c,max:l}),l===void 0&&c===0){(0,n.checkStrictMode)(s,`"minContains" == 0 without "maxContains": "contains" keyword ignored`);return}if(l!==void 0&&c>l){(0,n.checkStrictMode)(s,`"minContains" > "maxContains" is always invalid`),e.fail();return}if((0,n.alwaysValidSchema)(s,i)){let n=(0,t._)`${f} >= ${c}`;l!==void 0&&(n=(0,t._)`${n} && ${f} <= ${l}`),e.pass(n);return}s.items=!0;let p=r.name(`valid`);l===void 0&&c===1?h(p,()=>r.if(p,()=>r.break())):c===0?(r.let(p,!0),l!==void 0&&r.if((0,t._)`${o}.length > 0`,m)):(r.let(p,!1),m()),e.result(p,()=>e.reset());function m(){let e=r.name(`_valid`),t=r.let(`count`,0);h(e,()=>r.if(e,()=>g(t)))}function h(t,i){r.forRange(`i`,0,f,r=>{e.subschema({keyword:`contains`,dataProp:r,dataPropType:n.Type.Num,compositeRule:!0},t),i()})}function g(e){r.code((0,t._)`${e}++`),l===void 0?r.if((0,t._)`${e} >= ${c}`,()=>r.assign(p,!0).break()):(r.if((0,t._)`${e} > ${l}`,()=>r.assign(p,!1).break()),c===1?r.assign(p,!0):r.if((0,t._)`${e} >= ${c}`,()=>r.assign(p,!0)))}}}})),UC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.validateSchemaDeps=e.validatePropertyDeps=e.error=void 0;var t=K(),n=q(),r=$S();e.error={message:({params:{property:e,depsCount:n,deps:r}})=>{let i=n===1?`property`:`properties`;return(0,t.str)`must have ${i} ${r} when property ${e} is present`},params:({params:{property:e,depsCount:n,deps:r,missingProperty:i}})=>(0,t._)`{property: ${e},
    missingProperty: ${i},
    depsCount: ${n},
    deps: ${r}}`};var i={keyword:`dependencies`,type:`object`,schemaType:`object`,error:e.error,code(e){let[t,n]=a(e);o(e,t),s(e,n)}};function a({schema:e}){let t={},n={};for(let r in e){if(r===`__proto__`)continue;let i=Array.isArray(e[r])?t:n;i[r]=e[r]}return[t,n]}function o(e,n=e.schema){let{gen:i,data:a,it:o}=e;if(Object.keys(n).length===0)return;let s=i.let(`missing`);for(let c in n){let l=n[c];if(l.length===0)continue;let u=(0,r.propertyInData)(i,a,c,o.opts.ownProperties);e.setParams({property:c,depsCount:l.length,deps:l.join(`, `)}),o.allErrors?i.if(u,()=>{for(let t of l)(0,r.checkReportMissingProp)(e,t)}):(i.if((0,t._)`${u} && (${(0,r.checkMissingProp)(e,l,s)})`),(0,r.reportMissingProp)(e,s),i.else())}}e.validatePropertyDeps=o;function s(e,t=e.schema){let{gen:i,data:a,keyword:o,it:s}=e,c=i.name(`valid`);for(let l in t)(0,n.alwaysValidSchema)(s,t[l])||(i.if((0,r.propertyInData)(i,a,l,s.opts.ownProperties),()=>{let t=e.subschema({keyword:o,schemaProp:l},c);e.mergeValidEvaluated(t,c)},()=>i.var(c,!0)),e.ok(c))}e.validateSchemaDeps=s,e.default=i})),WC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K(),n=q();e.default={keyword:`propertyNames`,type:`object`,schemaType:[`object`,`boolean`],error:{message:`property name must be valid`,params:({params:e})=>(0,t._)`{propertyName: ${e.propertyName}}`},code(e){let{gen:r,schema:i,data:a,it:o}=e;if((0,n.alwaysValidSchema)(o,i))return;let s=r.name(`valid`);r.forIn(`key`,a,n=>{e.setParams({propertyName:n}),e.subschema({keyword:`propertyNames`,data:n,dataTypes:[`string`],propertyName:n,compositeRule:!0},s),r.if((0,t.not)(s),()=>{e.error(!0),o.allErrors||r.break()})}),e.ok(s)}}})),GC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=$S(),n=K(),r=KS(),i=q();e.default={keyword:`additionalProperties`,type:[`object`],schemaType:[`boolean`,`object`],allowUndefined:!0,trackErrors:!0,error:{message:`must NOT have additional properties`,params:({params:e})=>(0,n._)`{additionalProperty: ${e.additionalProperty}}`},code(e){let{gen:a,schema:o,parentSchema:s,data:c,errsCount:l,it:u}=e;if(!l)throw Error(`ajv implementation error`);let{allErrors:d,opts:f}=u;if(u.props=!0,f.removeAdditional!==`all`&&(0,i.alwaysValidSchema)(u,o))return;let p=(0,t.allSchemaProperties)(s.properties),m=(0,t.allSchemaProperties)(s.patternProperties);h(),e.ok((0,n._)`${l} === ${r.default.errors}`);function h(){a.forIn(`key`,c,e=>{!p.length&&!m.length?v(e):a.if(g(e),()=>v(e))})}function g(r){let o;if(p.length>8){let e=(0,i.schemaRefOrVal)(u,s.properties,`properties`);o=(0,t.isOwnProperty)(a,e,r)}else o=p.length?(0,n.or)(...p.map(e=>(0,n._)`${r} === ${e}`)):n.nil;return m.length&&(o=(0,n.or)(o,...m.map(i=>(0,n._)`${(0,t.usePattern)(e,i)}.test(${r})`))),(0,n.not)(o)}function _(e){a.code((0,n._)`delete ${c}[${e}]`)}function v(t){if(f.removeAdditional===`all`||f.removeAdditional&&o===!1){_(t);return}if(o===!1){e.setParams({additionalProperty:t}),e.error(),d||a.break();return}if(typeof o==`object`&&!(0,i.alwaysValidSchema)(u,o)){let r=a.name(`valid`);f.removeAdditional===`failing`?(y(t,r,!1),a.if((0,n.not)(r),()=>{e.reset(),_(t)})):(y(t,r),d||a.if((0,n.not)(r),()=>a.break()))}}function y(t,n,r){let a={keyword:`additionalProperties`,dataProp:t,dataPropType:i.Type.Str};r===!1&&Object.assign(a,{compositeRule:!0,createErrors:!1,allErrors:!1}),e.subschema(a,n)}}}})),KC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=aC(),n=$S(),r=q(),i=GC();e.default={keyword:`properties`,type:`object`,schemaType:`object`,code(e){let{gen:a,schema:o,parentSchema:s,data:c,it:l}=e;l.opts.removeAdditional===`all`&&s.additionalProperties===void 0&&i.default.code(new t.KeywordCxt(l,i.default,`additionalProperties`));let u=(0,n.allSchemaProperties)(o);for(let e of u)l.definedProperties.add(e);l.opts.unevaluated&&u.length&&l.props!==!0&&(l.props=r.mergeEvaluated.props(a,(0,r.toHash)(u),l.props));let d=u.filter(e=>!(0,r.alwaysValidSchema)(l,o[e]));if(d.length===0)return;let f=a.name(`valid`);for(let t of d)p(t)?m(t):(a.if((0,n.propertyInData)(a,c,t,l.opts.ownProperties)),m(t),l.allErrors||a.else().var(f,!0),a.endIf()),e.it.definedProperties.add(t),e.ok(f);function p(e){return l.opts.useDefaults&&!l.compositeRule&&o[e].default!==void 0}function m(t){e.subschema({keyword:`properties`,schemaProp:t,dataProp:t},f)}}}})),qC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=$S(),n=K(),r=q(),i=q();e.default={keyword:`patternProperties`,type:`object`,schemaType:`object`,code(e){let{gen:a,schema:o,data:s,parentSchema:c,it:l}=e,{opts:u}=l,d=(0,t.allSchemaProperties)(o),f=d.filter(e=>(0,r.alwaysValidSchema)(l,o[e]));if(d.length===0||f.length===d.length&&(!l.opts.unevaluated||l.props===!0))return;let p=u.strictSchema&&!u.allowMatchingProperties&&c.properties,m=a.name(`valid`);l.props!==!0&&!(l.props instanceof n.Name)&&(l.props=(0,i.evaluatedPropsToName)(a,l.props));let{props:h}=l;g();function g(){for(let e of d)p&&_(e),l.allErrors?v(e):(a.var(m,!0),v(e),a.if(m))}function _(e){for(let t in p)new RegExp(e).test(t)&&(0,r.checkStrictMode)(l,`property ${t} matches pattern ${e} (use allowMatchingProperties)`)}function v(r){a.forIn(`key`,s,o=>{a.if((0,n._)`${(0,t.usePattern)(e,r)}.test(${o})`,()=>{let t=f.includes(r);t||e.subschema({keyword:`patternProperties`,schemaProp:r,dataProp:o,dataPropType:i.Type.Str},m),l.opts.unevaluated&&h!==!0?a.assign((0,n._)`${h}[${o}]`,!0):!t&&!l.allErrors&&a.if((0,n.not)(m),()=>a.break())})})}}}})),JC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=q();e.default={keyword:`not`,schemaType:[`object`,`boolean`],trackErrors:!0,code(e){let{gen:n,schema:r,it:i}=e;if((0,t.alwaysValidSchema)(i,r)){e.fail();return}let a=n.name(`valid`);e.subschema({keyword:`not`,compositeRule:!0,createErrors:!1,allErrors:!1},a),e.failResult(a,()=>e.reset(),()=>e.error())},error:{message:`must NOT be valid`}}})),YC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.default={keyword:`anyOf`,schemaType:`array`,trackErrors:!0,code:$S().validateUnion,error:{message:`must match a schema in anyOf`}}})),XC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K(),n=q();e.default={keyword:`oneOf`,schemaType:`array`,trackErrors:!0,error:{message:`must match exactly one schema in oneOf`,params:({params:e})=>(0,t._)`{passingSchemas: ${e.passing}}`},code(e){let{gen:r,schema:i,parentSchema:a,it:o}=e;if(!Array.isArray(i))throw Error(`ajv implementation error`);if(o.opts.discriminator&&a.discriminator)return;let s=i,c=r.let(`valid`,!1),l=r.let(`passing`,null),u=r.name(`_valid`);e.setParams({passing:l}),r.block(d),e.result(c,()=>e.reset(),()=>e.error(!0));function d(){s.forEach((i,a)=>{let s;(0,n.alwaysValidSchema)(o,i)?r.var(u,!0):s=e.subschema({keyword:`oneOf`,schemaProp:a,compositeRule:!0},u),a>0&&r.if((0,t._)`${u} && ${c}`).assign(c,!1).assign(l,(0,t._)`[${l}, ${a}]`).else(),r.if(u,()=>{r.assign(c,!0),r.assign(l,a),s&&e.mergeEvaluated(s,t.Name)})})}}}})),ZC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=q();e.default={keyword:`allOf`,schemaType:`array`,code(e){let{gen:n,schema:r,it:i}=e;if(!Array.isArray(r))throw Error(`ajv implementation error`);let a=n.name(`valid`);r.forEach((n,r)=>{if((0,t.alwaysValidSchema)(i,n))return;let o=e.subschema({keyword:`allOf`,schemaProp:r},a);e.ok(a),e.mergeEvaluated(o)})}}})),QC=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K(),n=q(),r={keyword:`if`,schemaType:[`object`,`boolean`],trackErrors:!0,error:{message:({params:e})=>(0,t.str)`must match "${e.ifClause}" schema`,params:({params:e})=>(0,t._)`{failingKeyword: ${e.ifClause}}`},code(e){let{gen:r,parentSchema:a,it:o}=e;a.then===void 0&&a.else===void 0&&(0,n.checkStrictMode)(o,`"if" without "then" and "else" is ignored`);let s=i(o,`then`),c=i(o,`else`);if(!s&&!c)return;let l=r.let(`valid`,!0),u=r.name(`_valid`);if(d(),e.reset(),s&&c){let t=r.let(`ifClause`);e.setParams({ifClause:t}),r.if(u,f(`then`,t),f(`else`,t))}else s?r.if(u,f(`then`)):r.if((0,t.not)(u),f(`else`));e.pass(l,()=>e.error(!0));function d(){let t=e.subschema({keyword:`if`,compositeRule:!0,createErrors:!1,allErrors:!1},u);e.mergeEvaluated(t)}function f(n,i){return()=>{let a=e.subschema({keyword:n},u);r.assign(l,u),e.mergeValidEvaluated(a,l),i?r.assign(i,(0,t._)`${n}`):e.setParams({ifClause:n})}}}};function i(e,t){let r=e.schema[t];return r!==void 0&&!(0,n.alwaysValidSchema)(e,r)}e.default=r})),$C=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=q();e.default={keyword:[`then`,`else`],schemaType:[`object`,`boolean`],code({keyword:e,parentSchema:n,it:r}){n.if===void 0&&(0,t.checkStrictMode)(r,`"${e}" without "if" is ignored`)}}})),ew=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=RC(),n=BC(),r=zC(),i=VC(),a=HC(),o=UC(),s=WC(),c=GC(),l=KC(),u=qC(),d=JC(),f=YC(),p=XC(),m=ZC(),h=QC(),g=$C();function _(e=!1){let _=[d.default,f.default,p.default,m.default,h.default,g.default,s.default,c.default,o.default,l.default,u.default];return e?_.push(n.default,i.default):_.push(t.default,r.default),_.push(a.default),_}e.default=_})),tw=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K();e.default={keyword:`format`,type:[`number`,`string`],schemaType:`string`,$data:!0,error:{message:({schemaCode:e})=>(0,t.str)`must match format "${e}"`,params:({schemaCode:e})=>(0,t._)`{format: ${e}}`},code(e,n){let{gen:r,data:i,$data:a,schema:o,schemaCode:s,it:c}=e,{opts:l,errSchemaPath:u,schemaEnv:d,self:f}=c;if(!l.validateFormats)return;a?p():m();function p(){let a=r.scopeValue(`formats`,{ref:f.formats,code:l.code.formats}),o=r.const(`fDef`,(0,t._)`${a}[${s}]`),c=r.let(`fType`),u=r.let(`format`);r.if((0,t._)`typeof ${o} == "object" && !(${o} instanceof RegExp)`,()=>r.assign(c,(0,t._)`${o}.type || "string"`).assign(u,(0,t._)`${o}.validate`),()=>r.assign(c,(0,t._)`"string"`).assign(u,o)),e.fail$data((0,t.or)(p(),m()));function p(){return l.strictSchema===!1?t.nil:(0,t._)`${s} && !${u}`}function m(){let e=d.$async?(0,t._)`(${o}.async ? await ${u}(${i}) : ${u}(${i}))`:(0,t._)`${u}(${i})`,r=(0,t._)`(typeof ${u} == "function" ? ${e} : ${u}.test(${i}))`;return(0,t._)`${u} && ${u} !== true && ${c} === ${n} && !${r}`}}function m(){let a=f.formats[o];if(!a){m();return}if(a===!0)return;let[s,c,p]=h(a);s===n&&e.pass(g());function m(){if(l.strictSchema===!1){f.logger.warn(e());return}throw Error(e());function e(){return`unknown format "${o}" ignored in schema at path "${u}"`}}function h(e){let n=e instanceof RegExp?(0,t.regexpCode)(e):l.code.formats?(0,t._)`${l.code.formats}${(0,t.getProperty)(o)}`:void 0,i=r.scopeValue(`formats`,{key:o,ref:e,code:n});return typeof e==`object`&&!(e instanceof RegExp)?[e.type||`string`,e.validate,(0,t._)`${i}.validate`]:[`string`,e,i]}function g(){if(typeof a==`object`&&!(a instanceof RegExp)&&a.async){if(!d.$async)throw Error(`async format in sync schema`);return(0,t._)`await ${p}(${i})`}return typeof c==`function`?(0,t._)`${p}(${i})`:(0,t._)`${p}.test(${i})`}}}}})),nw=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.default=[tw().default]})),rw=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.contentVocabulary=e.metadataVocabulary=void 0,e.metadataVocabulary=[`title`,`description`,`default`,`deprecated`,`readOnly`,`writeOnly`,`examples`],e.contentVocabulary=[`contentMediaType`,`contentEncoding`,`contentSchema`]})),iw=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=wC(),n=LC(),r=ew(),i=nw(),a=rw();e.default=[t.default,n.default,(0,r.default)(),i.default,a.metadataVocabulary,a.contentVocabulary]})),aw=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.DiscrError=void 0;var t;(function(e){e.Tag=`tag`,e.Mapping=`mapping`})(t||(e.DiscrError=t={}))})),ow=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K(),n=aw(),r=cC(),i=sC(),a=q();e.default={keyword:`discriminator`,type:`object`,schemaType:`object`,error:{message:({params:{discrError:e,tagName:t}})=>e===n.DiscrError.Tag?`tag "${t}" must be string`:`value of tag "${t}" must be in oneOf`,params:({params:{discrError:e,tag:n,tagName:r}})=>(0,t._)`{error: ${e}, tag: ${r}, tagValue: ${n}}`},code(e){let{gen:o,data:s,schema:c,parentSchema:l,it:u}=e,{oneOf:d}=l;if(!u.opts.discriminator)throw Error(`discriminator: requires discriminator option`);let f=c.propertyName;if(typeof f!=`string`)throw Error(`discriminator: requires propertyName`);if(c.mapping)throw Error(`discriminator: mapping is not supported`);if(!d)throw Error(`discriminator: requires oneOf keyword`);let p=o.let(`valid`,!1),m=o.const(`tag`,(0,t._)`${s}${(0,t.getProperty)(f)}`);o.if((0,t._)`typeof ${m} == "string"`,()=>h(),()=>e.error(!1,{discrError:n.DiscrError.Tag,tag:m,tagName:f})),e.ok(p);function h(){let r=_();o.if(!1);for(let e in r)o.elseIf((0,t._)`${m} === ${e}`),o.assign(p,g(r[e]));o.else(),e.error(!1,{discrError:n.DiscrError.Mapping,tag:m,tagName:f}),o.endIf()}function g(n){let r=o.name(`valid`),i=e.subschema({keyword:`oneOf`,schemaProp:n},r);return e.mergeEvaluated(i,t.Name),r}function _(){let e={},t=o(l),n=!0;for(let e=0;e<d.length;e++){let c=d[e];if(c?.$ref&&!(0,a.schemaHasRulesButRef)(c,u.self.RULES)){let e=c.$ref;if(c=r.resolveRef.call(u.self,u.schemaEnv.root,u.baseId,e),c instanceof r.SchemaEnv&&(c=c.schema),c===void 0)throw new i.default(u.opts.uriResolver,u.baseId,e)}let l=c?.properties?.[f];if(typeof l!=`object`)throw Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${f}"`);n&&=t||o(c),s(l,e)}if(!n)throw Error(`discriminator: "${f}" must be required`);return e;function o({required:e}){return Array.isArray(e)&&e.includes(f)}function s(e,t){if(e.const)c(e.const,t);else if(e.enum)for(let n of e.enum)c(n,t);else throw Error(`discriminator: "properties/${f}" must have "const" or "enum"`)}function c(t,n){if(typeof t!=`string`||t in e)throw Error(`discriminator: "${f}" values must be unique strings`);e[t]=n}}}}})),sw=r({$id:()=>lw,$schema:()=>cw,default:()=>mw,definitions:()=>dw,properties:()=>pw,title:()=>uw,type:()=>fw}),cw,lw,uw,dw,fw,pw,mw,hw=e((()=>{cw=`http://json-schema.org/draft-07/schema#`,lw=`http://json-schema.org/draft-07/schema#`,uw=`Core schema meta-schema`,dw={schemaArray:{type:`array`,minItems:1,items:{$ref:`#`}},nonNegativeInteger:{type:`integer`,minimum:0},nonNegativeIntegerDefault0:{allOf:[{$ref:`#/definitions/nonNegativeInteger`},{default:0}]},simpleTypes:{enum:[`array`,`boolean`,`integer`,`null`,`number`,`object`,`string`]},stringArray:{type:`array`,items:{type:`string`},uniqueItems:!0,default:[]}},fw=[`object`,`boolean`],pw={$id:{type:`string`,format:`uri-reference`},$schema:{type:`string`,format:`uri`},$ref:{type:`string`,format:`uri-reference`},$comment:{type:`string`},title:{type:`string`},description:{type:`string`},default:!0,readOnly:{type:`boolean`,default:!1},examples:{type:`array`,items:!0},multipleOf:{type:`number`,exclusiveMinimum:0},maximum:{type:`number`},exclusiveMaximum:{type:`number`},minimum:{type:`number`},exclusiveMinimum:{type:`number`},maxLength:{$ref:`#/definitions/nonNegativeInteger`},minLength:{$ref:`#/definitions/nonNegativeIntegerDefault0`},pattern:{type:`string`,format:`regex`},additionalItems:{$ref:`#`},items:{anyOf:[{$ref:`#`},{$ref:`#/definitions/schemaArray`}],default:!0},maxItems:{$ref:`#/definitions/nonNegativeInteger`},minItems:{$ref:`#/definitions/nonNegativeIntegerDefault0`},uniqueItems:{type:`boolean`,default:!1},contains:{$ref:`#`},maxProperties:{$ref:`#/definitions/nonNegativeInteger`},minProperties:{$ref:`#/definitions/nonNegativeIntegerDefault0`},required:{$ref:`#/definitions/stringArray`},additionalProperties:{$ref:`#`},definitions:{type:`object`,additionalProperties:{$ref:`#`},default:{}},properties:{type:`object`,additionalProperties:{$ref:`#`},default:{}},patternProperties:{type:`object`,additionalProperties:{$ref:`#`},propertyNames:{format:`regex`},default:{}},dependencies:{type:`object`,additionalProperties:{anyOf:[{$ref:`#`},{$ref:`#/definitions/stringArray`}]}},propertyNames:{$ref:`#`},const:!0,enum:{type:`array`,items:!0,minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:`#/definitions/simpleTypes`},{type:`array`,items:{$ref:`#/definitions/simpleTypes`},minItems:1,uniqueItems:!0}]},format:{type:`string`},contentMediaType:{type:`string`},contentEncoding:{type:`string`},if:{$ref:`#`},then:{$ref:`#`},else:{$ref:`#`},allOf:{$ref:`#/definitions/schemaArray`},anyOf:{$ref:`#/definitions/schemaArray`},oneOf:{$ref:`#/definitions/schemaArray`},not:{$ref:`#`}},mw={$schema:cw,$id:lw,title:uw,definitions:dw,type:fw,properties:pw,default:!0}})),gw=n(((e,t)=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.MissingRefError=e.ValidationError=e.CodeGen=e.Name=e.nil=e.stringify=e.str=e._=e.KeywordCxt=e.Ajv=void 0;var n=xC(),r=iw(),a=ow(),o=(hw(),i(sw).default),s=[`/properties`],c=`http://json-schema.org/draft-07/schema`,l=class extends n.default{_addVocabularies(){super._addVocabularies(),r.default.forEach(e=>this.addVocabulary(e)),this.opts.discriminator&&this.addKeyword(a.default)}_addDefaultMetaSchema(){if(super._addDefaultMetaSchema(),!this.opts.meta)return;let e=this.opts.$data?this.$dataMetaSchema(o,s):o;this.addMetaSchema(e,c,!1),this.refs[`http://json-schema.org/schema`]=c}defaultMeta(){return this.opts.defaultMeta=super.defaultMeta()||(this.getSchema(c)?c:void 0)}};e.Ajv=l,t.exports=e=l,t.exports.Ajv=l,Object.defineProperty(e,`__esModule`,{value:!0}),e.default=l;var u=aC();Object.defineProperty(e,`KeywordCxt`,{enumerable:!0,get:function(){return u.KeywordCxt}});var d=K();Object.defineProperty(e,`_`,{enumerable:!0,get:function(){return d._}}),Object.defineProperty(e,`str`,{enumerable:!0,get:function(){return d.str}}),Object.defineProperty(e,`stringify`,{enumerable:!0,get:function(){return d.stringify}}),Object.defineProperty(e,`nil`,{enumerable:!0,get:function(){return d.nil}}),Object.defineProperty(e,`Name`,{enumerable:!0,get:function(){return d.Name}}),Object.defineProperty(e,`CodeGen`,{enumerable:!0,get:function(){return d.CodeGen}});var f=oC();Object.defineProperty(e,`ValidationError`,{enumerable:!0,get:function(){return f.default}});var p=sC();Object.defineProperty(e,`MissingRefError`,{enumerable:!0,get:function(){return p.default}})})),_w=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.formatNames=e.fastFormats=e.fullFormats=void 0;function t(e,t){return{validate:e,compare:t}}e.fullFormats={date:t(a,o),time:t(c(!0),l),"date-time":t(f(!0),p),"iso-time":t(c(),u),"iso-date-time":t(f(),m),duration:/^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,uri:_,"uri-reference":/^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,"uri-template":/^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,url:/^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,email:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,hostname:/^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,ipv4:/^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,ipv6:/^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,regex:ee,uuid:/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,"json-pointer":/^(?:\/(?:[^~/]|~0|~1)*)*$/,"json-pointer-uri-fragment":/^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,"relative-json-pointer":/^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,byte:y,int32:{type:`number`,validate:S},int64:{type:`number`,validate:C},float:{type:`number`,validate:w},double:{type:`number`,validate:w},password:!0,binary:!0},e.fastFormats={...e.fullFormats,date:t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/,o),time:t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,l),"date-time":t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,p),"iso-time":t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,u),"iso-date-time":t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,m),uri:/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,"uri-reference":/^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,email:/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i},e.formatNames=Object.keys(e.fullFormats);function n(e){return e%4==0&&(e%100!=0||e%400==0)}var r=/^(\d\d\d\d)-(\d\d)-(\d\d)$/,i=[0,31,28,31,30,31,30,31,31,30,31,30,31];function a(e){let t=r.exec(e);if(!t)return!1;let a=+t[1],o=+t[2],s=+t[3];return o>=1&&o<=12&&s>=1&&s<=(o===2&&n(a)?29:i[o])}function o(e,t){if(e&&t)return e>t?1:e<t?-1:0}var s=/^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;function c(e){return function(t){let n=s.exec(t);if(!n)return!1;let r=+n[1],i=+n[2],a=+n[3],o=n[4],c=n[5]===`-`?-1:1,l=+(n[6]||0),u=+(n[7]||0);if(l>23||u>59||e&&!o)return!1;if(r<=23&&i<=59&&a<60)return!0;let d=i-u*c,f=r-l*c-(d<0?1:0);return(f===23||f===-1)&&(d===59||d===-1)&&a<61}}function l(e,t){if(!(e&&t))return;let n=new Date(`2020-01-01T`+e).valueOf(),r=new Date(`2020-01-01T`+t).valueOf();if(n&&r)return n-r}function u(e,t){if(!(e&&t))return;let n=s.exec(e),r=s.exec(t);if(n&&r)return e=n[1]+n[2]+n[3],t=r[1]+r[2]+r[3],e>t?1:e<t?-1:0}var d=/t|\s/i;function f(e){let t=c(e);return function(e){let n=e.split(d);return n.length===2&&a(n[0])&&t(n[1])}}function p(e,t){if(!(e&&t))return;let n=new Date(e).valueOf(),r=new Date(t).valueOf();if(n&&r)return n-r}function m(e,t){if(!(e&&t))return;let[n,r]=e.split(d),[i,a]=t.split(d),s=o(n,i);if(s!==void 0)return s||l(r,a)}var h=/\/|:/,g=/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;function _(e){return h.test(e)&&g.test(e)}var v=/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;function y(e){return v.lastIndex=0,v.test(e)}var b=-(2**31),x=2**31-1;function S(e){return Number.isInteger(e)&&e<=x&&e>=b}function C(e){return Number.isInteger(e)}function w(){return!0}var T=/[^\\]\\Z/;function ee(e){if(T.test(e))return!1;try{return new RegExp(e),!0}catch{return!1}}})),vw=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.formatLimitDefinition=void 0;var t=gw(),n=K(),r=n.operators,i={formatMaximum:{okStr:`<=`,ok:r.LTE,fail:r.GT},formatMinimum:{okStr:`>=`,ok:r.GTE,fail:r.LT},formatExclusiveMaximum:{okStr:`<`,ok:r.LT,fail:r.GTE},formatExclusiveMinimum:{okStr:`>`,ok:r.GT,fail:r.LTE}};e.formatLimitDefinition={keyword:Object.keys(i),type:`string`,schemaType:`string`,$data:!0,error:{message:({keyword:e,schemaCode:t})=>(0,n.str)`should be ${i[e].okStr} ${t}`,params:({keyword:e,schemaCode:t})=>(0,n._)`{comparison: ${i[e].okStr}, limit: ${t}}`},code(e){let{gen:r,data:a,schemaCode:o,keyword:s,it:c}=e,{opts:l,self:u}=c;if(!l.validateFormats)return;let d=new t.KeywordCxt(c,u.RULES.all.format.definition,`format`);d.$data?f():p();function f(){let t=r.scopeValue(`formats`,{ref:u.formats,code:l.code.formats}),i=r.const(`fmt`,(0,n._)`${t}[${d.schemaCode}]`);e.fail$data((0,n.or)((0,n._)`typeof ${i} != "object"`,(0,n._)`${i} instanceof RegExp`,(0,n._)`typeof ${i}.compare != "function"`,m(i)))}function p(){let t=d.schema,i=u.formats[t];if(!i||i===!0)return;if(typeof i!=`object`||i instanceof RegExp||typeof i.compare!=`function`)throw Error(`"${s}": format "${t}" does not define "compare" function`);let a=r.scopeValue(`formats`,{key:t,ref:i,code:l.code.formats?(0,n._)`${l.code.formats}${(0,n.getProperty)(t)}`:void 0});e.fail$data(m(a))}function m(e){return(0,n._)`${e}.compare(${a}, ${o}) ${i[s].fail} 0`}},dependencies:[`format`]},e.default=t=>(t.addKeyword(e.formatLimitDefinition),t)})),yw=n(((e,t)=>{Object.defineProperty(e,`__esModule`,{value:!0});var n=_w(),r=vw(),i=K(),a=new i.Name(`fullFormats`),o=new i.Name(`fastFormats`),s=(e,t={keywords:!0})=>{if(Array.isArray(t))return c(e,t,n.fullFormats,a),e;let[i,s]=t.mode===`fast`?[n.fastFormats,o]:[n.fullFormats,a];return c(e,t.formats||n.formatNames,i,s),t.keywords&&(0,r.default)(e),e};s.get=(e,t=`full`)=>{let r=(t===`fast`?n.fastFormats:n.fullFormats)[e];if(!r)throw Error(`Unknown format "${e}"`);return r};function c(e,t,n,r){var a;(a=e.opts.code).formats??(a.formats=(0,i._)`require("ajv-formats/dist/formats").${r}`);for(let r of t)e.addFormat(r,n[r])}t.exports=e=s,Object.defineProperty(e,`__esModule`,{value:!0}),e.default=s})),bw=t(gw(),1),xw=t(yw(),1),Sw=bw.default.default||bw.default,Cw=xw.default.default||xw.default,ww=typeof globalThis<`u`&&globalThis.chrome?.runtime?.id!==void 0;function Tw(){if(ww)return!1;try{return Function(`return true;`),!0}catch{return!1}}var Ew=null;if(Tw())try{Ew=new Sw({allErrors:!0,strict:!1,coerceTypes:!0}),Cw(Ew)}catch{console.warn(`AJV validation disabled due to CSP restrictions`)}function Dw(e,t){let n=e.trim().toLowerCase();return t.some(e=>{let t=e.trim().toLowerCase();return n===t||n.startsWith(t)})}var Ow=[`off`,`minimal`,`low`,`medium`,`high`,`adaptive`],kw=/^claude-(?:opus|sonnet)-4(?:\.|-)6(?:$|[-.])/i,Aw=/claude-(?:opus|sonnet)-4(?:\.|-)6(?:$|[-.])/i,jw=[`gpt-5.4`,`gpt-5.4-pro`,`gpt-5.4-mini`,`gpt-5.4-nano`,`gpt-5.2`],Mw=[`gpt-5.4`,`gpt-5.3-codex-spark`,`gpt-5.2-codex`,`gpt-5.1-codex`],Nw=[`gpt-5.2`,`gpt-5.2-codex`];function Pw(e){if(!e)return``;let t=e.trim().toLowerCase();return t===`z.ai`||t===`z-ai`?`zai`:t===`bedrock`||t===`aws-bedrock`?`amazon-bedrock`:t}function Fw(e){return Pw(e)===`zai`}function Iw(e,t){let n=Pw(e),r=t?.trim().toLowerCase();return!n||!r?!1:n===`openai`?Dw(r,jw):n===`openai-codex`?Dw(r,Mw):n===`github-copilot`?Nw.includes(r):!1}function Lw(e){if(!e)return;let t=e.trim().toLowerCase(),n=t.replace(/[\s_-]+/g,``);if(n===`adaptive`||n===`auto`)return`adaptive`;if(n===`xhigh`||n===`extrahigh`)return`xhigh`;if([`off`].includes(t))return`off`;if([`on`,`enable`,`enabled`].includes(t))return`low`;if([`min`,`minimal`].includes(t))return`minimal`;if([`low`,`thinkhard`,`think-hard`,`think_hard`].includes(t))return`low`;if([`mid`,`med`,`medium`,`thinkharder`,`think-harder`,`harder`].includes(t))return`medium`;if([`high`,`ultra`,`ultrathink`,`think-hard`,`thinkhardest`,`highest`,`max`].includes(t))return`high`;if([`think`].includes(t))return`minimal`}function Rw(e,t){return[...Ow]}function zw(e,t){return Fw(e)?[`off`,`on`]:Rw(e,t)}function Bw(e,t,n=`, `){return zw(e,t).join(n)}function Vw(e){let t=Pw(e.provider),n=e.model.trim();return t===`anthropic`&&kw.test(n)||t===`amazon-bedrock`&&Aw.test(n)?`adaptive`:e.catalog?.find(t=>t.provider===e.provider&&t.id===e.model)?.reasoning?`low`:`off`}function Hw(e){if(!e)return;let t=e.toLowerCase();if([`off`,`false`,`no`,`0`].includes(t))return`off`;if([`full`,`all`,`everything`].includes(t))return`full`;if([`on`,`minimal`,`true`,`yes`,`1`].includes(t))return`on`}function Uw(e){return Hw(e)}var Ww=Symbol.for(`openclaw.pluginRegistryState`),Gw=(()=>{let e=globalThis;return e[Ww]||(e[Ww]={activeRegistry:null,activeVersion:0,httpRoute:{registry:null,pinned:!1,version:0},channel:{registry:null,pinned:!1,version:0},key:null,runtimeSubagentMode:`default`}),e[Ww]})();function Kw(){return Gw.activeRegistry}function qw(e,t){let n=Ix(t);return n?Ix(e.id)===n?!0:(e.aliases??[]).some(e=>Ix(e)===n):!1}function Jw(e){return Kw()?.providers.find(t=>qw(t.provider,e))?.provider}function Yw(e){return Jw(e.provider)?.supportsXHighThinking?.(e.context)}function Xw(e,t){let n=t?.trim().toLowerCase();if(!n)return!1;if(Iw(e,n))return!0;let r=Pw(e);if(r){let e=Yw({provider:r,context:{provider:r,modelId:n}});if(typeof e==`boolean`)return e}return!1}function Zw(e,t){let n=Rw(e,t);return Xw(e,t)&&n.splice(n.length-1,0,`xhigh`),n}function J(e){let t=(e.textAliases??(e.textAlias?[e.textAlias]:[])).map(e=>e.trim()).filter(Boolean),n=e.scope??(e.nativeName?t.length?`both`:`native`:`text`),r=e.acceptsArgs??!!e.args?.length,i=e.argsParsing??(e.args?.length?`positional`:`none`);return{key:e.key,nativeName:e.nativeName,description:e.description,acceptsArgs:r,args:e.args,argsParsing:i,formatArgs:e.formatArgs,argsMenu:e.argsMenu,textAliases:t,scope:n,category:e.category}}function Qw(e,t,...n){let r=e.find(e=>e.key===t);if(!r)throw Error(`registerAlias: unknown command key: ${t}`);let i=new Set(r.textAliases.map(e=>e.trim().toLowerCase()));for(let e of n){let t=e.trim();if(!t)continue;let n=t.toLowerCase();i.has(n)||(i.add(n),r.textAliases.push(t))}}function $w(e){let t=new Set,n=new Set,r=new Set;for(let i of e){if(t.has(i.key))throw Error(`Duplicate command key: ${i.key}`);t.add(i.key);let e=i.nativeName?.trim();if(i.scope===`text`){if(e)throw Error(`Text-only command has native name: ${i.key}`);if(i.textAliases.length===0)throw Error(`Text-only command missing text alias: ${i.key}`)}else if(e){let t=e.toLowerCase();if(n.has(t))throw Error(`Duplicate native command: ${e}`);n.add(t)}else throw Error(`Native command missing native name: ${i.key}`);if(i.scope===`native`&&i.textAliases.length>0)throw Error(`Native-only command has text aliases: ${i.key}`);for(let e of i.textAliases){if(!e.startsWith(`/`))throw Error(`Command alias missing leading '/': ${e}`);let t=e.toLowerCase();if(r.has(t))throw Error(`Duplicate command alias: ${e}`);r.add(t)}}}function eT(){let e=[J({key:`help`,nativeName:`help`,description:`Show available commands.`,textAlias:`/help`,category:`status`}),J({key:`commands`,nativeName:`commands`,description:`List all slash commands.`,textAlias:`/commands`,category:`status`}),J({key:`tools`,nativeName:`tools`,description:`List available runtime tools.`,textAlias:`/tools`,category:`status`,args:[{name:`mode`,description:`compact or verbose`,type:`string`,choices:[`compact`,`verbose`]}],argsMenu:`auto`}),J({key:`skill`,nativeName:`skill`,description:`Run a skill by name.`,textAlias:`/skill`,category:`tools`,args:[{name:`name`,description:`Skill name`,type:`string`,required:!0},{name:`input`,description:`Skill input`,type:`string`,captureRemaining:!0}]}),J({key:`status`,nativeName:`status`,description:`Show current status.`,textAlias:`/status`,category:`status`}),J({key:`tasks`,nativeName:`tasks`,description:`List background tasks for this session.`,textAlias:`/tasks`,category:`status`}),J({key:`allowlist`,description:`List/add/remove allowlist entries.`,textAlias:`/allowlist`,acceptsArgs:!0,scope:`text`,category:`management`}),J({key:`approve`,nativeName:`approve`,description:`Approve or deny exec requests.`,textAlias:`/approve`,acceptsArgs:!0,category:`management`}),J({key:`context`,nativeName:`context`,description:`Explain how context is built and used.`,textAlias:`/context`,acceptsArgs:!0,category:`status`}),J({key:`btw`,nativeName:`btw`,description:`Ask a side question without changing future session context.`,textAlias:`/btw`,acceptsArgs:!0,category:`tools`}),J({key:`export-session`,nativeName:`export-session`,description:`Export current session to HTML file with full system prompt.`,textAliases:[`/export-session`,`/export`],acceptsArgs:!0,category:`status`,args:[{name:`path`,description:`Output path (default: workspace)`,type:`string`,required:!1}]}),J({key:`tts`,nativeName:`tts`,description:`Control text-to-speech (TTS).`,textAlias:`/tts`,category:`media`,args:[{name:`action`,description:`TTS action`,type:`string`,choices:[{value:`on`,label:`On`},{value:`off`,label:`Off`},{value:`status`,label:`Status`},{value:`provider`,label:`Provider`},{value:`limit`,label:`Limit`},{value:`summary`,label:`Summary`},{value:`audio`,label:`Audio`},{value:`help`,label:`Help`}]},{name:`value`,description:`Provider, limit, or text`,type:`string`,captureRemaining:!0}],argsMenu:{arg:`action`,title:`TTS Actions:
• On – Enable TTS for responses
• Off – Disable TTS
• Status – Show current settings
• Provider – Show or set the voice provider
• Limit – Set max characters for TTS
• Summary – Toggle AI summary for long texts
• Audio – Generate TTS from custom text
• Help – Show usage guide`}}),J({key:`whoami`,nativeName:`whoami`,description:`Show your sender id.`,textAlias:`/whoami`,category:`status`}),J({key:`session`,nativeName:`session`,description:`Manage session-level settings (for example /session idle).`,textAlias:`/session`,category:`session`,args:[{name:`action`,description:`idle | max-age`,type:`string`,choices:[`idle`,`max-age`]},{name:`value`,description:`Duration (24h, 90m) or off`,type:`string`,captureRemaining:!0}],argsMenu:`auto`}),J({key:`subagents`,nativeName:`subagents`,description:`List, kill, log, spawn, or steer subagent runs for this session.`,textAlias:`/subagents`,category:`management`,args:[{name:`action`,description:`list | kill | log | info | send | steer | spawn`,type:`string`,choices:[`list`,`kill`,`log`,`info`,`send`,`steer`,`spawn`]},{name:`target`,description:`Run id, index, or session key`,type:`string`},{name:`value`,description:`Additional input (limit/message)`,type:`string`,captureRemaining:!0}],argsMenu:`auto`}),J({key:`acp`,nativeName:`acp`,description:`Manage ACP sessions and runtime options.`,textAlias:`/acp`,category:`management`,args:[{name:`action`,description:`Action to run`,type:`string`,preferAutocomplete:!0,choices:[`spawn`,`cancel`,`steer`,`close`,`sessions`,`status`,`set-mode`,`set`,`cwd`,`permissions`,`timeout`,`model`,`reset-options`,`doctor`,`install`,`help`]},{name:`value`,description:`Action arguments`,type:`string`,captureRemaining:!0}],argsMenu:`auto`}),J({key:`focus`,nativeName:`focus`,description:`Bind this thread (Discord) or topic/conversation (Telegram) to a session target.`,textAlias:`/focus`,category:`management`,args:[{name:`target`,description:`Subagent label/index or session key/id/label`,type:`string`,captureRemaining:!0}]}),J({key:`unfocus`,nativeName:`unfocus`,description:`Remove the current thread (Discord) or topic/conversation (Telegram) binding.`,textAlias:`/unfocus`,category:`management`}),J({key:`agents`,nativeName:`agents`,description:`List thread-bound agents for this session.`,textAlias:`/agents`,category:`management`}),J({key:`kill`,nativeName:`kill`,description:`Kill a running subagent (or all).`,textAlias:`/kill`,category:`management`,args:[{name:`target`,description:`Label, run id, index, or all`,type:`string`}],argsMenu:`auto`}),J({key:`steer`,nativeName:`steer`,description:`Send guidance to a running subagent.`,textAlias:`/steer`,category:`management`,args:[{name:`target`,description:`Label, run id, or index`,type:`string`},{name:`message`,description:`Steering message`,type:`string`,captureRemaining:!0}]}),J({key:`config`,nativeName:`config`,description:`Show or set config values.`,textAlias:`/config`,category:`management`,args:[{name:`action`,description:`show | get | set | unset`,type:`string`,choices:[`show`,`get`,`set`,`unset`]},{name:`path`,description:`Config path`,type:`string`},{name:`value`,description:`Value for set`,type:`string`,captureRemaining:!0}],argsParsing:`none`,formatArgs:Fx.config}),J({key:`mcp`,nativeName:`mcp`,description:`Show or set OpenClaw MCP servers.`,textAlias:`/mcp`,category:`management`,args:[{name:`action`,description:`show | get | set | unset`,type:`string`,choices:[`show`,`get`,`set`,`unset`]},{name:`path`,description:`MCP server name`,type:`string`},{name:`value`,description:`JSON config for set`,type:`string`,captureRemaining:!0}],argsParsing:`none`,formatArgs:Fx.mcp}),J({key:`plugins`,nativeName:`plugins`,description:`List, show, enable, or disable plugins.`,textAliases:[`/plugins`,`/plugin`],category:`management`,args:[{name:`action`,description:`list | show | get | enable | disable`,type:`string`,choices:[`list`,`show`,`get`,`enable`,`disable`]},{name:`path`,description:`Plugin id or name`,type:`string`}],argsParsing:`none`,formatArgs:Fx.plugins}),J({key:`debug`,nativeName:`debug`,description:`Set runtime debug overrides.`,textAlias:`/debug`,category:`management`,args:[{name:`action`,description:`show | reset | set | unset`,type:`string`,choices:[`show`,`reset`,`set`,`unset`]},{name:`path`,description:`Debug path`,type:`string`},{name:`value`,description:`Value for set`,type:`string`,captureRemaining:!0}],argsParsing:`none`,formatArgs:Fx.debug}),J({key:`usage`,nativeName:`usage`,description:`Usage footer or cost summary.`,textAlias:`/usage`,category:`options`,args:[{name:`mode`,description:`off, tokens, full, or cost`,type:`string`,choices:[`off`,`tokens`,`full`,`cost`]}],argsMenu:`auto`}),J({key:`stop`,nativeName:`stop`,description:`Stop the current run.`,textAlias:`/stop`,category:`session`}),J({key:`restart`,nativeName:`restart`,description:`Restart OpenClaw.`,textAlias:`/restart`,category:`tools`}),J({key:`activation`,nativeName:`activation`,description:`Set group activation mode.`,textAlias:`/activation`,category:`management`,args:[{name:`mode`,description:`mention or always`,type:`string`,choices:[`mention`,`always`]}],argsMenu:`auto`}),J({key:`send`,nativeName:`send`,description:`Set send policy.`,textAlias:`/send`,category:`management`,args:[{name:`mode`,description:`on, off, or inherit`,type:`string`,choices:[`on`,`off`,`inherit`]}],argsMenu:`auto`}),J({key:`reset`,nativeName:`reset`,description:`Reset the current session.`,textAlias:`/reset`,acceptsArgs:!0,category:`session`}),J({key:`new`,nativeName:`new`,description:`Start a new session.`,textAlias:`/new`,acceptsArgs:!0,category:`session`}),J({key:`compact`,nativeName:`compact`,description:`Compact the session context.`,textAlias:`/compact`,category:`session`,args:[{name:`instructions`,description:`Extra compaction instructions`,type:`string`,captureRemaining:!0}]}),J({key:`think`,nativeName:`think`,description:`Set thinking level.`,textAlias:`/think`,category:`options`,args:[{name:`level`,description:`off, minimal, low, medium, high, xhigh`,type:`string`,choices:({provider:e,model:t})=>Zw(e,t)}],argsMenu:`auto`}),J({key:`verbose`,nativeName:`verbose`,description:`Toggle verbose mode.`,textAlias:`/verbose`,category:`options`,args:[{name:`mode`,description:`on or off`,type:`string`,choices:[`on`,`off`]}],argsMenu:`auto`}),J({key:`fast`,nativeName:`fast`,description:`Toggle fast mode.`,textAlias:`/fast`,category:`options`,args:[{name:`mode`,description:`status, on, or off`,type:`string`,choices:[`status`,`on`,`off`]}],argsMenu:`auto`}),J({key:`reasoning`,nativeName:`reasoning`,description:`Toggle reasoning visibility.`,textAlias:`/reasoning`,category:`options`,args:[{name:`mode`,description:`on, off, or stream`,type:`string`,choices:[`on`,`off`,`stream`]}],argsMenu:`auto`}),J({key:`elevated`,nativeName:`elevated`,description:`Toggle elevated mode.`,textAlias:`/elevated`,category:`options`,args:[{name:`mode`,description:`on, off, ask, or full`,type:`string`,choices:[`on`,`off`,`ask`,`full`]}],argsMenu:`auto`}),J({key:`exec`,nativeName:`exec`,description:`Set exec defaults for this session.`,textAlias:`/exec`,category:`options`,args:[{name:`host`,description:`sandbox, gateway, or node`,type:`string`,choices:[`sandbox`,`gateway`,`node`]},{name:`security`,description:`deny, allowlist, or full`,type:`string`,choices:[`deny`,`allowlist`,`full`]},{name:`ask`,description:`off, on-miss, or always`,type:`string`,choices:[`off`,`on-miss`,`always`]},{name:`node`,description:`Node id or name`,type:`string`}],argsParsing:`none`,formatArgs:Fx.exec}),J({key:`model`,nativeName:`model`,description:`Show or set the model.`,textAlias:`/model`,category:`options`,args:[{name:`model`,description:`Model id (provider/model or id)`,type:`string`}]}),J({key:`models`,nativeName:`models`,description:`List model providers or provider models.`,textAlias:`/models`,argsParsing:`none`,acceptsArgs:!0,category:`options`}),J({key:`queue`,nativeName:`queue`,description:`Adjust queue settings.`,textAlias:`/queue`,category:`options`,args:[{name:`mode`,description:`queue mode`,type:`string`,choices:[`steer`,`interrupt`,`followup`,`collect`,`steer-backlog`]},{name:`debounce`,description:`debounce duration (e.g. 500ms, 2s)`,type:`string`},{name:`cap`,description:`queue cap`,type:`number`},{name:`drop`,description:`drop policy`,type:`string`,choices:[`old`,`new`,`summarize`]}],argsParsing:`none`,formatArgs:Fx.queue}),J({key:`bash`,description:`Run host shell commands (host-only).`,textAlias:`/bash`,scope:`text`,category:`tools`,args:[{name:`command`,description:`Shell command`,type:`string`,captureRemaining:!0}]})];return Qw(e,`whoami`,`/id`),Qw(e,`think`,`/thinking`,`/t`),Qw(e,`verbose`,`/v`),Qw(e,`reasoning`,`/reason`),Qw(e,`elevated`,`/elev`),Qw(e,`steer`,`/tell`),$w(e),e}var tT={help:`book`,status:`barChart`,usage:`barChart`,export:`download`,export_session:`download`,tools:`terminal`,skill:`zap`,commands:`book`,new:`plus`,reset:`refresh`,compact:`loader`,stop:`stop`,clear:`trash`,focus:`eye`,unfocus:`eye`,model:`brain`,models:`brain`,think:`brain`,verbose:`terminal`,fast:`zap`,agents:`monitor`,subagents:`folder`,kill:`x`,steer:`send`,tts:`volume2`},nT=new Set([`help`,`new`,`reset`,`stop`,`compact`,`focus`,`model`,`think`,`fast`,`verbose`,`export-session`,`usage`,`agents`,`kill`,`steer`,`redirect`]),rT=[{key:`clear`,name:`clear`,description:`Clear chat history`,icon:`trash`,category:`session`,executeLocal:!0},{key:`redirect`,name:`redirect`,description:`Abort and restart with a new message`,args:`[id] <message>`,icon:`refresh`,category:`agents`,executeLocal:!0}],iT={help:`tools`,commands:`tools`,tools:`tools`,skill:`tools`,status:`tools`,export_session:`tools`,usage:`tools`,tts:`tools`,agents:`agents`,subagents:`agents`,kill:`agents`,steer:`agents`,redirect:`agents`,session:`session`,stop:`session`,reset:`session`,new:`session`,compact:`session`,focus:`session`,unfocus:`session`,model:`model`,models:`model`,think:`model`,verbose:`model`,fast:`model`,reasoning:`model`,elevated:`model`,queue:`model`},aT={steer:`Inject a message into the active run`},oT={steer:`[id] <message>`};function sT(e){return e.key.replace(/[:.-]/g,`_`)}function cT(e){return e.textAliases.map(e=>e.trim()).filter(e=>e.startsWith(`/`)).map(e=>e.slice(1))}function lT(e){let t=cT(e);return t.length===0?null:t[0]??null}function uT(e){if(e.args?.length)return e.args.map(e=>{let t=`<${e.name}>`;return e.required?t:`[${e.name}]`}).join(` `)}function dT(e){return typeof e==`string`?e:e.value}function fT(e){let t=e.args?.[0];if(!t||typeof t.choices==`function`)return;let n=t.choices?.map(dT).filter(Boolean);return n?.length?n:void 0}function pT(e){return iT[sT(e)]??`tools`}function mT(e){return tT[sT(e)]??`terminal`}function hT(e){let t=lT(e);return t?{key:e.key,name:t,aliases:cT(e).filter(e=>e!==t),description:aT[e.key]??e.description,args:oT[e.key]??uT(e),icon:mT(e),category:pT(e),executeLocal:nT.has(e.key),argOptions:fT(e)}:null}var gT=[...eT().map(hT).filter(e=>e!==null),...rT],_T=[`session`,`model`,`tools`,`agents`],vT={session:`Session`,model:`Model`,agents:`Agents`,tools:`Tools`};function yT(e){let t=e.toLowerCase();return(t?gT.filter(e=>e.name.startsWith(t)||e.aliases?.some(e=>e.toLowerCase().startsWith(t))||e.description.toLowerCase().includes(t)):gT).toSorted((e,n)=>{let r=_T.indexOf(e.category??`session`),i=_T.indexOf(n.category??`session`);if(r!==i)return r-i;if(t){let r=e.name.startsWith(t)?0:1,i=n.name.startsWith(t)?0:1;if(r!==i)return r-i}return 0})}function bT(e){let t=e.trim();if(!t.startsWith(`/`))return null;let n=t.slice(1),r=n.search(/[\s:]/u),i=r===-1?n:n.slice(0,r),a=r===-1?``:n.slice(r).trimStart();a.startsWith(`:`)&&(a=a.slice(1).trimStart());let o=a.trim();if(!i)return null;let s=i.toLowerCase(),c=gT.find(e=>e.name===s||e.aliases?.some(e=>e.toLowerCase()===s));return c?{command:c,args:o}:null}function xT(e){return c`
    <div class="sidebar-panel">
      <div class="sidebar-header">
        <div class="sidebar-title">Tool Output</div>
        <button @click=${e.onClose} class="btn" title="Close sidebar">${H.x}</button>
      </div>
      <div class="sidebar-content">
        ${e.error?c`
              <div class="callout danger">${e.error}</div>
              <button @click=${e.onViewRawText} class="btn" style="margin-top: 12px;">
                View Raw Text
              </button>
            `:e.content?c`<div class="sidebar-markdown">
                ${Ah(xv(e.content))}
              </div>`:c` <div class="muted">No content available</div> `}
      </div>
    </div>
  `}function Y(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var ST=class extends m{constructor(...e){super(...e),this.splitRatio=.6,this.minRatio=.4,this.maxRatio=.7,this.isDragging=!1,this.startX=0,this.startRatio=0,this.handleMouseDown=e=>{this.isDragging=!0,this.startX=e.clientX,this.startRatio=this.splitRatio,this.classList.add(`dragging`),document.addEventListener(`mousemove`,this.handleMouseMove),document.addEventListener(`mouseup`,this.handleMouseUp),e.preventDefault()},this.handleMouseMove=e=>{if(!this.isDragging)return;let t=this.parentElement;if(!t)return;let n=t.getBoundingClientRect().width,r=(e.clientX-this.startX)/n,i=this.startRatio+r;i=Math.max(this.minRatio,Math.min(this.maxRatio,i)),this.dispatchEvent(new CustomEvent(`resize`,{detail:{splitRatio:i},bubbles:!0,composed:!0}))},this.handleMouseUp=()=>{this.isDragging=!1,this.classList.remove(`dragging`),document.removeEventListener(`mousemove`,this.handleMouseMove),document.removeEventListener(`mouseup`,this.handleMouseUp)}}static{this.styles=l`
    :host {
      width: 4px;
      cursor: col-resize;
      background: var(--border, #333);
      transition: background 150ms ease-out;
      flex-shrink: 0;
      position: relative;
    }
    :host::before {
      content: "";
      position: absolute;
      top: 0;
      left: -4px;
      right: -4px;
      bottom: 0;
    }
    :host(:hover) {
      background: var(--accent, #007bff);
    }
    :host(.dragging) {
      background: var(--accent, #007bff);
    }
  `}render(){return u}connectedCallback(){super.connectedCallback(),this.addEventListener(`mousedown`,this.handleMouseDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`mousedown`,this.handleMouseDown),document.removeEventListener(`mousemove`,this.handleMouseMove),document.removeEventListener(`mouseup`,this.handleMouseUp)}};Y([O({type:Number})],ST.prototype,`splitRatio`,void 0),Y([O({type:Number})],ST.prototype,`minRatio`,void 0),Y([O({type:Number})],ST.prototype,`maxRatio`,void 0),ST=Y([E(`resizable-divider`)],ST);var CT=5e3,wT=8e3,TT=new Map,ET=new Map,DT=new Map;function OT(e){return Dx(TT,e,()=>new Sx)}function kT(e){return Dx(ET,e,()=>new wx(e))}function AT(e){return Dx(DT,e,()=>new zl(e))}function jT(){return{sttRecording:!1,sttInterimText:``,slashMenuOpen:!1,slashMenuItems:[],slashMenuIndex:0,slashMenuMode:`command`,slashMenuCommand:null,slashMenuArgItems:[],searchOpen:!1,searchQuery:``,pinnedExpanded:!1}}var X=jT();function MT(){X.sttRecording&&Hy(),Object.assign(X,jT())}function NT(e){e.style.height=`auto`,e.style.height=`${Math.min(e.scrollHeight,150)}px`}function PT(e){return e?e.phase===`active`?c`
      <div
        class="compaction-indicator compaction-indicator--active"
        role="status"
        aria-live="polite"
      >
        ${H.loader} Compacting context...
      </div>
    `:e.phase===`retrying`?c`
      <div
        class="compaction-indicator compaction-indicator--active"
        role="status"
        aria-live="polite"
      >
        ${H.loader} Retrying after compaction...
      </div>
    `:e.phase===`complete`&&e.completedAt&&Date.now()-e.completedAt<CT?c`
        <div
          class="compaction-indicator compaction-indicator--complete"
          role="status"
          aria-live="polite"
        >
          ${H.check} Context compacted
        </div>
      `:u:u}function FT(e){if(!e)return u;let t=e.phase??`active`;if(Date.now()-e.occurredAt>=wT)return u;let n=[`Selected: ${e.selected}`,t===`cleared`?`Active: ${e.selected}`:`Active: ${e.active}`,t===`cleared`&&e.previous?`Previous fallback: ${e.previous}`:null,e.reason?`Reason: ${e.reason}`:null,e.attempts.length>0?`Attempts: ${e.attempts.slice(0,3).join(` | `)}`:null].filter(Boolean).join(` • `),r=t===`cleared`?`Fallback cleared: ${e.selected}`:`Fallback active: ${e.active}`;return c`
    <div class=${t===`cleared`?`compaction-indicator compaction-indicator--fallback-cleared`:`compaction-indicator compaction-indicator--fallback`} role="status" aria-live="polite" title=${n}>
      ${t===`cleared`?H.check:H.brain} ${r}
    </div>
  `}function IT(e){let t=e.trim().replace(/^#/,``);return/^[0-9a-fA-F]{6}$/.test(t)?[parseInt(t.slice(0,2),16),parseInt(t.slice(2,4),16),parseInt(t.slice(4,6),16)]:null}var LT=null;function RT(){if(LT)return LT;let e=getComputedStyle(document.documentElement),t=e.getPropertyValue(`--warn`).trim()||`#f59e0b`,n=e.getPropertyValue(`--danger`).trim()||`#ef4444`;return LT={warnHex:t,dangerHex:n,warnRgb:IT(t)??[245,158,11],dangerRgb:IT(n)??[239,68,68]},LT}function zT(e,t){if(e?.totalTokensFresh===!1)return u;let n=e?.totalTokens??0,r=e?.contextTokens??t??0;if(!n||!r)return u;let i=n/r;if(i<.85)return u;let a=Math.min(Math.round(i*100),100),{warnRgb:o,dangerRgb:s}=RT(),[l,d,f]=o,[p,m,h]=s,g=Math.min(Math.max((i-.85)/.1,0),1),_=Math.round(l+(p-l)*g),v=Math.round(d+(m-d)*g),y=Math.round(f+(h-f)*g);return c`
    <div class="context-notice" role="status" style="--ctx-color:${`rgb(${_}, ${v}, ${y})`};--ctx-bg:${`rgba(${_}, ${v}, ${y}, ${.08+.08*g})`}">
      <svg
        class="context-notice__icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
      <span>${a}% context used</span>
      <span class="context-notice__detail"
        >${BT(n)} / ${BT(r)}</span
      >
    </div>
  `}function BT(e){return e>=1e6?`${(e/1e6).toFixed(1).replace(/\.0$/,``)}M`:e>=1e3?`${(e/1e3).toFixed(1).replace(/\.0$/,``)}k`:String(e)}function VT(){return`att-${Date.now()}-${Math.random().toString(36).slice(2,9)}`}function HT(e,t){let n=e.clipboardData?.items;if(!n||!t.onAttachmentsChange)return;let r=[];for(let e=0;e<n.length;e++){let t=n[e];t.type.startsWith(`image/`)&&r.push(t)}if(r.length!==0){e.preventDefault();for(let e of r){let n=e.getAsFile();if(!n)continue;let r=new FileReader;r.addEventListener(`load`,()=>{let e=r.result,i={id:VT(),dataUrl:e,mimeType:n.type},a=t.attachments??[];t.onAttachmentsChange?.([...a,i])}),r.readAsDataURL(n)}}}function UT(e,t){let n=e.target;if(!n.files||!t.onAttachmentsChange)return;let r=t.attachments??[],i=[],a=0;for(let e of n.files){if(!Ll(e.type))continue;a++;let n=new FileReader;n.addEventListener(`load`,()=>{i.push({id:VT(),dataUrl:n.result,mimeType:e.type}),a--,a===0&&t.onAttachmentsChange?.([...r,...i])}),n.readAsDataURL(e)}n.value=``}function WT(e,t){e.preventDefault();let n=e.dataTransfer?.files;if(!n||!t.onAttachmentsChange)return;let r=t.attachments??[],i=[],a=0;for(let e of n){if(!Ll(e.type))continue;a++;let n=new FileReader;n.addEventListener(`load`,()=>{i.push({id:VT(),dataUrl:n.result,mimeType:e.type}),a--,a===0&&t.onAttachmentsChange?.([...r,...i])}),n.readAsDataURL(e)}}function GT(e){let t=e.attachments??[];return t.length===0?u:c`
    <div class="chat-attachments-preview">
      ${t.map(t=>c`
          <div class="chat-attachment-thumb">
            <img src=${t.dataUrl} alt="Attachment preview" />
            <button
              class="chat-attachment-remove"
              type="button"
              aria-label="Remove attachment"
              @click=${()=>{let n=(e.attachments??[]).filter(e=>e.id!==t.id);e.onAttachmentsChange?.(n)}}
            >
              &times;
            </button>
          </div>
        `)}
    </div>
  `}function KT(){X.slashMenuMode=`command`,X.slashMenuCommand=null,X.slashMenuArgItems=[],X.slashMenuItems=[]}function qT(e,t){let n=e.match(/^\/(\S+)\s(.*)$/);if(n){let e=n[1].toLowerCase(),r=n[2].toLowerCase(),i=gT.find(t=>t.name===e);if(i?.argOptions?.length){let e=r?i.argOptions.filter(e=>e.toLowerCase().startsWith(r)):i.argOptions;if(e.length>0){X.slashMenuMode=`args`,X.slashMenuCommand=i,X.slashMenuArgItems=e,X.slashMenuOpen=!0,X.slashMenuIndex=0,X.slashMenuItems=[],t();return}}X.slashMenuOpen=!1,KT(),t();return}let r=e.match(/^\/(\S*)$/);if(r){let e=yT(r[1]);X.slashMenuItems=e,X.slashMenuOpen=e.length>0,X.slashMenuIndex=0,X.slashMenuMode=`command`,X.slashMenuCommand=null,X.slashMenuArgItems=[]}else X.slashMenuOpen=!1,KT();t()}function JT(e,t,n){if(e.argOptions?.length){t.onDraftChange(`/${e.name} `),X.slashMenuMode=`args`,X.slashMenuCommand=e,X.slashMenuArgItems=e.argOptions,X.slashMenuOpen=!0,X.slashMenuIndex=0,X.slashMenuItems=[],n();return}X.slashMenuOpen=!1,KT(),e.executeLocal&&!e.args?(t.onDraftChange(`/${e.name}`),n(),t.onSend()):(t.onDraftChange(`/${e.name} `),n())}function YT(e,t,n){if(e.argOptions?.length){t.onDraftChange(`/${e.name} `),X.slashMenuMode=`args`,X.slashMenuCommand=e,X.slashMenuArgItems=e.argOptions,X.slashMenuOpen=!0,X.slashMenuIndex=0,X.slashMenuItems=[],n();return}X.slashMenuOpen=!1,KT(),t.onDraftChange(e.args?`/${e.name} `:`/${e.name}`),n()}function XT(e,t,n,r){let i=X.slashMenuCommand?.name??``;X.slashMenuOpen=!1,KT(),t.onDraftChange(`/${i} ${e}`),n(),r&&t.onSend()}function ZT(e){return e.length<100?null:`~${Math.ceil(e.length/4)} tokens`}function QT(e){Dh(e.messages,sa(e.assistantName)||e.assistantName)}var $T=[`What can you do?`,`Summarize my recent sessions`,`Help me configure a channel`,`Check system health`];function eE(e){let t=sa(e.assistantName)||`Assistant`,n=Qv({identity:{avatar:e.assistantAvatar??void 0,avatarUrl:e.assistantAvatarUrl??void 0}}),r=$v(e.basePath??``);return c`
    <div class="agent-chat__welcome" style="--agent-color: var(--accent)">
      <div class="agent-chat__welcome-glow"></div>
      ${n?c`<img
            src=${n}
            alt=${t}
            style="width:56px; height:56px; border-radius:50%; object-fit:cover;"
          />`:c`<div class="agent-chat__avatar agent-chat__avatar--logo">
            <img src=${r} alt=${na} />
          </div>`}
      <h2>${t}</h2>
      <div class="agent-chat__badges">
        <span class="agent-chat__badge"><img src=${r} alt="" /> Ready to chat</span>
      </div>
      <p class="agent-chat__hint">Type a message below &middot; <kbd>/</kbd> for commands</p>
      <div class="agent-chat__suggestions">
        ${$T.map(t=>c`
            <button
              type="button"
              class="agent-chat__suggestion"
              @click=${()=>{e.onDraftChange(t),e.onSend()}}
            >
              ${t}
            </button>
          `)}
      </div>
    </div>
  `}function tE(e){return X.searchOpen?c`
    <div class="agent-chat__search-bar">
      ${H.search}
      <input
        type="text"
        placeholder="Search messages..."
        aria-label="Search messages"
        .value=${X.searchQuery}
        @input=${t=>{X.searchQuery=t.target.value,e()}}
      />
      <button
        class="btn btn--ghost"
        aria-label="Close search"
        @click=${()=>{X.searchOpen=!1,X.searchQuery=``,e()}}
      >
        ${H.x}
      </button>
    </div>
  `:u}function nE(e,t,n){let r=Array.isArray(e.messages)?e.messages:[],i=[];for(let e of t.indices){let t=r[e];if(!t)continue;let n=Tx(t),a=typeof t.role==`string`?t.role:`unknown`;i.push({index:e,text:n,role:a})}return i.length===0?u:c`
    <div class="agent-chat__pinned">
      <button
        class="agent-chat__pinned-toggle"
        @click=${()=>{X.pinnedExpanded=!X.pinnedExpanded,n()}}
      >
        ${H.bookmark} ${i.length} pinned
        <span class="collapse-chevron ${X.pinnedExpanded?``:`collapse-chevron--collapsed`}"
          >${H.chevronDown}</span
        >
      </button>
      ${X.pinnedExpanded?c`
            <div class="agent-chat__pinned-list">
              ${i.map(({index:e,text:r,role:i})=>c`
                  <div class="agent-chat__pinned-item">
                    <span class="agent-chat__pinned-role"
                      >${i===`user`?`You`:`Assistant`}</span
                    >
                    <span class="agent-chat__pinned-text"
                      >${r.slice(0,100)}${r.length>100?`...`:``}</span
                    >
                    <button
                      class="btn btn--ghost"
                      @click=${()=>{t.unpin(e),n()}}
                      title="Unpin"
                    >
                      ${H.x}
                    </button>
                  </div>
                `)}
            </div>
          `:u}
    </div>
  `}function rE(e,t){if(!X.slashMenuOpen)return u;if(X.slashMenuMode===`args`&&X.slashMenuCommand&&X.slashMenuArgItems.length>0)return c`
      <div class="slash-menu" role="listbox" aria-label="Command arguments">
        <div class="slash-menu-group">
          <div class="slash-menu-group__label">
            /${X.slashMenuCommand.name} ${X.slashMenuCommand.description}
          </div>
          ${X.slashMenuArgItems.map((n,r)=>c`
              <div
                class="slash-menu-item ${r===X.slashMenuIndex?`slash-menu-item--active`:``}"
                role="option"
                aria-selected=${r===X.slashMenuIndex}
                @click=${()=>XT(n,t,e,!0)}
                @mouseenter=${()=>{X.slashMenuIndex=r,e()}}
              >
                ${X.slashMenuCommand?.icon?c`<span class="slash-menu-icon">${H[X.slashMenuCommand.icon]}</span>`:u}
                <span class="slash-menu-name">${n}</span>
                <span class="slash-menu-desc">/${X.slashMenuCommand?.name} ${n}</span>
              </div>
            `)}
        </div>
        <div class="slash-menu-footer">
          <kbd>↑↓</kbd> navigate <kbd>Tab</kbd> fill <kbd>Enter</kbd> run <kbd>Esc</kbd> close
        </div>
      </div>
    `;if(X.slashMenuItems.length===0)return u;let n=new Map;for(let e=0;e<X.slashMenuItems.length;e++){let t=X.slashMenuItems[e],r=t.category??`session`,i=n.get(r);i||(i=[],n.set(r,i)),i.push({cmd:t,globalIdx:e})}let r=[];for(let[i,a]of n)r.push(c`
      <div class="slash-menu-group">
        <div class="slash-menu-group__label">${vT[i]}</div>
        ${a.map(({cmd:n,globalIdx:r})=>c`
            <div
              class="slash-menu-item ${r===X.slashMenuIndex?`slash-menu-item--active`:``}"
              role="option"
              aria-selected=${r===X.slashMenuIndex}
              @click=${()=>JT(n,t,e)}
              @mouseenter=${()=>{X.slashMenuIndex=r,e()}}
            >
              ${n.icon?c`<span class="slash-menu-icon">${H[n.icon]}</span>`:u}
              <span class="slash-menu-name">/${n.name}</span>
              ${n.args?c`<span class="slash-menu-args">${n.args}</span>`:u}
              <span class="slash-menu-desc">${n.description}</span>
              ${n.argOptions?.length?c`<span class="slash-menu-badge">${n.argOptions.length} options</span>`:n.executeLocal&&!n.args?c`
                        <span class="slash-menu-badge">instant</span>
                      `:u}
            </div>
          `)}
      </div>
    `);return c`
    <div class="slash-menu" role="listbox" aria-label="Slash commands">
      ${r}
      <div class="slash-menu-footer">
        <kbd>↑↓</kbd> navigate <kbd>Tab</kbd> fill <kbd>Enter</kbd> select <kbd>Esc</kbd> close
      </div>
    </div>
  `}function iE(e){let t=new Set,n=[],r=(e,r)=>{let i=e.trim();!i||t.has(i)||(t.add(i),n.push({id:i,label:r}))};r(`main`,`Main agent`);for(let t of e.agentsList?.agents??[])r(t.id,sa(t.identity?.name?.trim()||t.name?.trim()||t.id));return t.has(e.currentAgentId)||r(e.currentAgentId,sa(e.assistantName)||e.currentAgentId),n}function aE(e){return e.voiceMessage?c`
    <div class="callout ${e.voiceMessage.kind===`error`?`danger`:`success`}">
      <div
        style="display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;"
      >
        <span>${e.voiceMessage.text}</span>
        ${e.voiceMessage.kind===`error`&&e.onOpenApiKeys?c`
                <button class="btn btn--ghost" type="button" @click=${e.onOpenApiKeys}>
                  API Keys
                </button>
              `:u}
      </div>
    </div>
  `:u}function oE(e){let t=e.connected,n=e.sending||e.stream!==null,r=!!(e.canAbort&&e.onAbort),i=sa(e.assistantName)||e.assistantName||`Assistant`,a=e.sessions?.sessions?.find(t=>t.key===e.sessionKey),o=a?.reasoningLevel??`off`,s=e.showThinking&&o!==`off`,l={name:i,avatar:Qv({identity:{avatar:e.assistantAvatar??void 0,avatarUrl:e.assistantAvatarUrl??void 0}})??null},d=kT(e.sessionKey),f=AT(e.sessionKey),p=OT(e.sessionKey),m=(e.attachments?.length??0)>0,h=ZT(e.draft),g=e.connected?m?`Add a message or paste more images...`:`Message ${i||`agent`} (Enter to send)`:`Connect to the gateway to start chatting...`,_=e.onRequestUpdate??(()=>{}),v=e.getDraft??(()=>e.draft),y=e.splitRatio??.6,b=!!(e.sidebarOpen&&e.onCloseSidebar),x=iE(e),S=e=>{let t=e.target.closest(`.code-block-copy`);if(!t)return;let n=t.dataset.code??``;navigator.clipboard.writeText(n).then(()=>{t.classList.add(`copied`),setTimeout(()=>t.classList.remove(`copied`),1500)},()=>{})},C=lE(e),w=C.length===0&&!e.loading,T=c`
    <div
      class="chat-thread"
      role="log"
      aria-live="polite"
      @scroll=${e.onChatScroll}
      @click=${S}
    >
      <div class="chat-thread-inner">
        ${e.loading?c`
                <div class="chat-loading-skeleton" aria-label="Loading chat">
                  <div class="chat-line assistant">
                    <div class="chat-msg">
                      <div class="chat-bubble">
                        <div class="skeleton skeleton-line skeleton-line--long" style="margin-bottom: 8px"></div>
                        <div class="skeleton skeleton-line skeleton-line--medium" style="margin-bottom: 8px"></div>
                        <div class="skeleton skeleton-line skeleton-line--short"></div>
                      </div>
                    </div>
                  </div>
                  <div class="chat-line user" style="margin-top: 12px">
                    <div class="chat-msg">
                      <div class="chat-bubble">
                        <div class="skeleton skeleton-line skeleton-line--medium"></div>
                      </div>
                    </div>
                  </div>
                  <div class="chat-line assistant" style="margin-top: 12px">
                    <div class="chat-msg">
                      <div class="chat-bubble">
                        <div class="skeleton skeleton-line skeleton-line--long" style="margin-bottom: 8px"></div>
                        <div class="skeleton skeleton-line skeleton-line--short"></div>
                      </div>
                    </div>
                  </div>
                </div>
              `:u}
        ${w&&!X.searchOpen?eE(e):u}
        ${w&&X.searchOpen?c`
                <div class="agent-chat__empty">No matching messages</div>
              `:u}
        ${Fl(C,e=>e.key,t=>t.kind===`divider`?c`
                <div class="chat-divider" role="separator" data-ts=${String(t.timestamp)}>
                  <span class="chat-divider__line"></span>
                  <span class="chat-divider__label">${t.label}</span>
                  <span class="chat-divider__line"></span>
                </div>
              `:t.kind===`reading-indicator`?ex(l,e.basePath):t.kind===`stream`?tx(t.text,t.startedAt,e.onOpenSidebar,l,e.basePath):t.kind===`group`?f.has(t.key)?u:nx(t,{onOpenSidebar:e.onOpenSidebar,showReasoning:s,showToolCalls:e.showToolCalls,assistantName:i,assistantAvatar:l.avatar,basePath:e.basePath,contextWindow:a?.contextTokens??e.sessions?.defaults?.contextTokens??null,onDelete:()=>{f.delete(t.key),_()}}):u)}
      </div>
    </div>
  `;return c`
    <section
      class="card chat"
      @drop=${t=>WT(t,e)}
      @dragover=${e=>e.preventDefault()}
    >
      <div
        class="agent-chat__header"
        style="display: flex; justify-content: space-between; align-items: end; gap: 16px; flex-wrap: wrap; margin-bottom: 16px;"
      >
        <div style="display: grid; gap: 4px;">
          <div class="card-title">${i}</div>
          <div class="card-sub">Choose who replies here and whether that employee speaks their responses aloud.</div>
        </div>
        <div style="display: flex; align-items: end; gap: 12px; flex-wrap: wrap;">
          <label class="field" style="margin: 0; min-width: 220px;">
            <span>Employee</span>
            <select
              .value=${e.currentAgentId}
              @change=${t=>e.onAgentChange(t.target.value)}
            >
              ${x.map(e=>c`<option value=${e.id}>${e.label}</option>`)}
            </select>
          </label>
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <button
              class="btn btn--ghost ${e.voiceEnabled?`agent-chat__input-btn--active`:``}"
              type="button"
              @click=${e.onToggleVoice}
              ?disabled=${!e.voiceSupported}
              title=${e.voiceSupported?e.voiceEnabled?`Disable voice mode`:`Enable voice mode`:`Voice mode is available for Kova employees`}
              aria-label=${e.voiceEnabled?`Disable voice mode`:`Enable voice mode`}
            >
              ${e.voiceEnabled?H.volume2:H.volumeOff}
            </button>
            ${e.voiceSpeaking?c`
                    <span class="agent-chat__voice-status">
                      <span class="agent-chat__voice-dot" aria-hidden="true"></span>
                      Speaking
                    </span>
                    <button class="btn btn--ghost" type="button" @click=${e.onStopVoice}>
                      Stop
                    </button>
                  `:u}
            ${e.onNavigateToAgent?c`
                    <button class="btn btn--ghost" type="button" @click=${e.onNavigateToAgent}>
                      Open Agent
                    </button>
                  `:u}
          </div>
        </div>
      </div>
      ${e.disabledReason?c`<div class="callout">${e.disabledReason}</div>`:u}
      ${e.error?c`<div class="callout danger">${e.error}</div>`:u}
      ${aE(e)}
      ${e.focusMode?c`
            <button
              class="chat-focus-exit"
              type="button"
              @click=${e.onToggleFocusMode}
              aria-label="Exit focus mode"
              title="Exit focus mode"
            >
              ${H.x}
            </button>
          `:u}
      ${tE(_)} ${nE(e,d,_)}

      <div class="chat-split-container ${b?`chat-split-container--open`:``}">
        <div
          class="chat-main"
          style="flex: ${b?`0 0 ${y*100}%`:`1 1 100%`}"
        >
          ${T}
        </div>

        ${b?c`
              <resizable-divider
                .splitRatio=${y}
                @resize=${t=>e.onSplitRatioChange?.(t.detail.splitRatio)}
              ></resizable-divider>
              <div class="chat-sidebar">
                ${xT({content:e.sidebarContent??null,error:e.sidebarError??null,onClose:e.onCloseSidebar,onViewRawText:()=>{!e.sidebarContent||!e.onOpenSidebar||e.onOpenSidebar(`\`\`\`\n${e.sidebarContent}\n\`\`\``)}})}
              </div>
            `:u}
      </div>

      ${e.queue.length?c`
            <div class="chat-queue" role="status" aria-live="polite">
              <div class="chat-queue__title">Queued (${e.queue.length})</div>
              <div class="chat-queue__list">
                ${e.queue.map(t=>c`
                    <div class="chat-queue__item">
                      <div class="chat-queue__text">
                        ${t.text||(t.attachments?.length?`Image (${t.attachments.length})`:``)}
                      </div>
                      <button
                        class="btn chat-queue__remove"
                        type="button"
                        aria-label="Remove queued message"
                        @click=${()=>e.onQueueRemove(t.id)}
                      >
                        ${H.x}
                      </button>
                    </div>
                  `)}
              </div>
            </div>
          `:u}
      ${FT(e.fallbackStatus)}
      ${PT(e.compactionStatus)}
      ${zT(a,e.sessions?.defaults?.contextTokens??null)}
      ${e.showNewMessages?c`
            <button class="chat-new-messages" type="button" @click=${e.onScrollToBottom}>
              ${H.arrowDown} New messages
            </button>
          `:u}

      <!-- Input bar -->
      <div class="agent-chat__input">
        ${rE(_,e)} ${GT(e)}

        <input
          type="file"
          accept=${Il}
          multiple
          class="agent-chat__file-input"
          @change=${t=>UT(t,e)}
        />

        ${X.sttRecording&&X.sttInterimText?c`<div class="agent-chat__stt-interim">${X.sttInterimText}</div>`:u}

        <textarea
          ${Nl(e=>e&&NT(e))}
          .value=${e.draft}
          dir=${Nv(e.draft)}
          ?disabled=${!e.connected}
          @keydown=${n=>{if(X.slashMenuOpen&&X.slashMenuMode===`args`&&X.slashMenuArgItems.length>0){let t=X.slashMenuArgItems.length;switch(n.key){case`ArrowDown`:n.preventDefault(),X.slashMenuIndex=(X.slashMenuIndex+1)%t,_();return;case`ArrowUp`:n.preventDefault(),X.slashMenuIndex=(X.slashMenuIndex-1+t)%t,_();return;case`Tab`:n.preventDefault(),XT(X.slashMenuArgItems[X.slashMenuIndex],e,_,!1);return;case`Enter`:n.preventDefault(),XT(X.slashMenuArgItems[X.slashMenuIndex],e,_,!0);return;case`Escape`:n.preventDefault(),X.slashMenuOpen=!1,KT(),_();return}}if(X.slashMenuOpen&&X.slashMenuItems.length>0){let t=X.slashMenuItems.length;switch(n.key){case`ArrowDown`:n.preventDefault(),X.slashMenuIndex=(X.slashMenuIndex+1)%t,_();return;case`ArrowUp`:n.preventDefault(),X.slashMenuIndex=(X.slashMenuIndex-1+t)%t,_();return;case`Tab`:n.preventDefault(),YT(X.slashMenuItems[X.slashMenuIndex],e,_);return;case`Enter`:n.preventDefault(),JT(X.slashMenuItems[X.slashMenuIndex],e,_);return;case`Escape`:n.preventDefault(),X.slashMenuOpen=!1,KT(),_();return}}if(!e.draft.trim()){if(n.key===`ArrowUp`){let t=p.up();t!==null&&(n.preventDefault(),e.onDraftChange(t));return}if(n.key===`ArrowDown`){let t=p.down();n.preventDefault(),e.onDraftChange(t??``);return}}if((n.metaKey||n.ctrlKey)&&!n.shiftKey&&n.key===`f`){n.preventDefault(),X.searchOpen=!X.searchOpen,X.searchOpen||(X.searchQuery=``),_();return}if(n.key===`Enter`&&!n.shiftKey){if(n.isComposing||n.keyCode===229||!e.connected)return;n.preventDefault(),t&&(e.draft.trim()&&p.push(e.draft),e.onSend())}}}
          @input=${t=>{let n=t.target;NT(n),qT(n.value,_),p.reset(),e.onDraftChange(n.value)}}
          @paste=${t=>HT(t,e)}
          placeholder=${X.sttRecording?`Listening...`:g}
          rows="1"
        ></textarea>

        <div class="agent-chat__toolbar">
          <div class="agent-chat__toolbar-left">
            <button
              class="agent-chat__input-btn"
              @click=${()=>{document.querySelector(`.agent-chat__file-input`)?.click()}}
              title="Attach file"
              aria-label="Attach file"
              ?disabled=${!e.connected}
            >
              ${H.paperclip}
            </button>

            ${zy()?c`
                  <button
                    class="agent-chat__input-btn ${X.sttRecording?`agent-chat__input-btn--recording`:``}"
                    @click=${()=>{X.sttRecording?(Hy(),X.sttRecording=!1,X.sttInterimText=``,_()):Vy({onTranscript:(t,n)=>{if(n){let n=v(),r=n&&!n.endsWith(` `)?` `:``;e.onDraftChange(n+r+t),X.sttInterimText=``}else X.sttInterimText=t;_()},onStart:()=>{X.sttRecording=!0,_()},onEnd:()=>{X.sttRecording=!1,X.sttInterimText=``,_()},onError:()=>{X.sttRecording=!1,X.sttInterimText=``,_()}})&&(X.sttRecording=!0,_())}}
                    title=${X.sttRecording?`Stop recording`:`Voice input`}
                    ?disabled=${!e.connected}
                  >
                    ${X.sttRecording?H.micOff:H.mic}
                  </button>
                `:u}
            ${h?c`<span class="agent-chat__token-count">${h}</span>`:u}
          </div>

          <div class="agent-chat__toolbar-right">
            ${u}
            ${r?u:c`
                  <button
                    class="btn btn--ghost"
                    @click=${e.onNewSession}
                    title="New session"
                    aria-label="New session"
                  >
                    ${H.plus}
                  </button>
                `}
            <button
              class="btn btn--ghost"
              @click=${()=>QT(e)}
              title="Export"
              aria-label="Export chat"
              ?disabled=${e.messages.length===0}
            >
              ${H.download}
            </button>

            ${r&&(n||e.sending)?c`
                  <button
                    class="chat-send-btn chat-send-btn--stop"
                    @click=${e.onAbort}
                    title="Stop"
                    aria-label="Stop generating"
                  >
                    ${H.stop}
                  </button>
                `:c`
                  <button
                    class="chat-send-btn"
                    @click=${()=>{e.draft.trim()&&p.push(e.draft),e.onSend()}}
                    ?disabled=${!e.connected||e.sending}
                    title=${n?`Queue`:`Send`}
                    aria-label=${n?`Queue message`:`Send message`}
                  >
                    ${H.send}
                  </button>
                `}
          </div>
        </div>
      </div>
    </section>
  `}var sE=200;function cE(e){let t=[],n=null;for(let r of e){if(r.kind!==`message`){n&&=(t.push(n),null),t.push(r);continue}let e=Fy(r.message),i=Iy(e.role),a=i.toLowerCase()===`user`?e.senderLabel??null:null,o=e.timestamp||Date.now();!n||n.role!==i||i.toLowerCase()===`user`&&n.senderLabel!==a?(n&&t.push(n),n={kind:`group`,key:`group:${i}:${r.key}`,role:i,senderLabel:a,messages:[{message:r.message,key:r.key}],timestamp:o,isStreaming:!1}):n.messages.push({message:r.message,key:r.key})}return n&&t.push(n),t}function lE(e){let t=[],n=Array.isArray(e.messages)?e.messages:[],r=Array.isArray(e.toolMessages)?e.toolMessages:[],i=Math.max(0,n.length-sE);i>0&&t.push({kind:`message`,key:`chat:history:notice`,message:{role:`system`,content:`Showing last ${sE} messages (${i} hidden).`,timestamp:Date.now()}});for(let r=i;r<n.length;r++){let i=n[r],a=Fy(i),o=i.__openclaw;if(o&&o.kind===`compaction`){t.push({kind:`divider`,key:typeof o.id==`string`?`divider:compaction:${o.id}`:`divider:compaction:${a.timestamp}:${r}`,label:`Compaction`,timestamp:a.timestamp??Date.now()});continue}!e.showToolCalls&&a.role.toLowerCase()===`toolresult`||X.searchOpen&&X.searchQuery.trim()&&!Ex(i,X.searchQuery)||t.push({kind:`message`,key:uE(i,r),message:i})}let a=e.streamSegments??[],o=Math.max(a.length,r.length);for(let i=0;i<o;i++)i<a.length&&a[i].text.trim().length>0&&t.push({kind:`stream`,key:`stream-seg:${e.sessionKey}:${i}`,text:a[i].text,startedAt:a[i].ts}),i<r.length&&e.showToolCalls&&t.push({kind:`message`,key:uE(r[i],i+n.length),message:r[i]});if(e.stream!==null){let n=`stream:${e.sessionKey}:${e.streamStartedAt??`live`}`;e.stream.trim().length>0?t.push({kind:`stream`,key:n,text:e.stream,startedAt:e.streamStartedAt??Date.now()}):t.push({kind:`reading-indicator`,key:n})}return cE(t)}function uE(e,t){let n=e,r=typeof n.toolCallId==`string`?n.toolCallId:``;if(r)return`tool:${r}`;let i=typeof n.id==`string`?n.id:``;if(i)return`msg:${i}`;let a=typeof n.messageId==`string`?n.messageId:``;if(a)return`msg:${a}`;let o=typeof n.timestamp==`number`?n.timestamp:null,s=typeof n.role==`string`?n.role:`unknown`;return o==null?`msg:${s}:${t}`:`msg:${s}:${o}:${t}`}function dE(e,t){let n={...t,lastActiveSessionKey:t.lastActiveSessionKey?.trim()||t.sessionKey.trim()||`main`};e.settings=n,cl(n),(t.theme!==e.theme||t.themeMode!==e.themeMode)&&(e.theme=t.theme,e.themeMode=t.themeMode,wE(e,Uc(t.theme,t.themeMode))),CE(t.borderRadius),e.applySessionKey=e.settings.lastActiveSessionKey}function fE(e,t){let n=t.trim();n&&e.settings.lastActiveSessionKey!==n&&dE(e,{...e.settings,lastActiveSessionKey:n})}function pE(e){if(!window.location.search&&!window.location.hash)return;let t=new URL(window.location.href),n=new URLSearchParams(t.search),r=new URLSearchParams(t.hash.startsWith(`#`)?t.hash.slice(1):t.hash),i=n.get(`gatewayUrl`)??r.get(`gatewayUrl`),a=i?.trim()??``,o=!!(a&&a!==e.settings.gatewayUrl),s=r.get(`token`)??n.get(`token`),c=n.get(`password`)??r.get(`password`),l=n.get(`session`)??r.get(`session`),u=!!(s?.trim()&&!l?.trim()&&!o),d=!1;if(n.has(`token`)&&(n.delete(`token`),d=!0),s!=null){let t=s.trim();t&&o?e.pendingGatewayToken=t:t&&t!==e.settings.token&&dE(e,{...e.settings,token:t}),r.delete(`token`),d=!0}if(u&&(e.sessionKey=`main`,dE(e,{...e.settings,sessionKey:`main`,lastActiveSessionKey:`main`})),c!=null&&(n.delete(`password`),r.delete(`password`),d=!0),l!=null){let t=l.trim();t&&(e.sessionKey=t,dE(e,{...e.settings,sessionKey:t,lastActiveSessionKey:t}))}if(i!=null&&(o?(e.pendingGatewayUrl=a,s?.trim()||(e.pendingGatewayToken=null)):(e.pendingGatewayUrl=null,e.pendingGatewayToken=null),n.delete(`gatewayUrl`),r.delete(`gatewayUrl`),d=!0),!d)return;t.search=n.toString();let f=r.toString();t.hash=f?`#${f}`:``,window.history.replaceState({},``,t.toString())}function mE(e,t){kE(e,t,{refreshPolicy:`always`,syncUrl:!0})}function hE(e,t,n){dl({nextTheme:Uc(t,e.themeMode),applyTheme:()=>{dE(e,{...e.settings,theme:t})},context:n,currentTheme:e.themeResolved}),TE(e)}function gE(e,t,n){dl({nextTheme:Uc(e.theme,t),applyTheme:()=>{dE(e,{...e.settings,themeMode:t})},context:n,currentTheme:e.themeResolved}),TE(e)}async function _E(e){if(e.tab===`onboarding`&&(await F(e),await Ao(e),await cr(e,!1)),e.tab===`overview`&&await ME(e),e.tab===`channels`&&await LE(e),e.tab===`instances`&&await Ms(e),e.tab===`usage`&&await Cc(e),e.tab===`sessions`&&await Ps(e),e.tab===`cron`&&await zE(e),e.tab===`briefing`&&await Promise.all([cr(e,!1),zE(e)]),e.tab===`canvas`&&await Ea(e),e.tab===`routing`&&await RE(e),e.tab===`inbox`&&await Bi(e),e.tab===`employees`&&await Ei(e),e.tab===`skills`&&await $s(e),e.tab===`agents`){await Ea(e),await F(e);let t=e.agentsList?.agents?.map(e=>e.id)??[];t.length>0&&(pa(e,t),ga(e,t));let n=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id;n&&(fa(e,n),e.agentsPanel===`files`&&la(e,n),e.agentsPanel===`skills`&&ma(e,n),e.agentsPanel===`channels`&&cr(e,!1),e.agentsPanel===`cron`&&zE(e))}e.tab===`nodes`&&(await qi(e),await bs(e),await F(e),await Ds(e)),e.tab===`chat`&&(await gO(e),oi(e,!e.chatHasAutoScrolled)),e.tab===`apiKeys`&&await Ao(e),(e.tab===`config`||e.tab===`communications`||e.tab===`appearance`||e.tab===`automation`||e.tab===`infrastructure`||e.tab===`aiAgents`)&&(await Ge(e),await F(e)),e.tab===`debug`&&(await xi(e),e.eventLog=e.eventLogBuffer),e.tab===`logs`&&(e.logsAtBottom=!0,await Ki(e,{reset:!0}),si(e,!0))}function vE(){if(typeof window>`u`)return``;let e=window.__OPENCLAW_CONTROL_UI_BASE_PATH__;return typeof e==`string`&&e.trim()?kc(e):Nc(window.location.pathname)}function yE(e){e.theme=e.settings.theme??`claw`,e.themeMode=e.settings.themeMode??`system`,wE(e,Uc(e.theme,e.themeMode)),CE(e.settings.borderRadius??50),TE(e)}function bE(e){TE(e)}function xE(e){e.systemThemeCleanup?.(),e.systemThemeCleanup=null}var SE={sm:6,md:10,lg:14,xl:20,full:9999,default:10};function CE(e){if(typeof document>`u`)return;let t=document.documentElement,n=e/50;t.style.setProperty(`--radius-sm`,`${Math.round(SE.sm*n)}px`),t.style.setProperty(`--radius-md`,`${Math.round(SE.md*n)}px`),t.style.setProperty(`--radius-lg`,`${Math.round(SE.lg*n)}px`),t.style.setProperty(`--radius-xl`,`${Math.round(SE.xl*n)}px`),t.style.setProperty(`--radius-full`,`${Math.round(SE.full*n)}px`),t.style.setProperty(`--radius`,`${Math.round(SE.default*n)}px`)}function wE(e,t){if(e.themeResolved=t,typeof document>`u`)return;let n=document.documentElement,r=t.endsWith(`light`)?`light`:`dark`;n.dataset.theme=t,n.dataset.themeMode=r,n.style.colorScheme=r}function TE(e){if(e.themeMode!==`system`){e.systemThemeCleanup?.(),e.systemThemeCleanup=null;return}if(e.systemThemeCleanup||typeof globalThis.matchMedia!=`function`)return;let t=globalThis.matchMedia(`(prefers-color-scheme: light)`),n=()=>{e.themeMode===`system`&&wE(e,Uc(e.theme,`system`))};if(typeof t.addEventListener==`function`){t.addEventListener(`change`,n),e.systemThemeCleanup=()=>t.removeEventListener(`change`,n);return}typeof t.addListener==`function`&&(t.addListener(n),e.systemThemeCleanup=()=>t.removeListener(n))}function EE(e,t){if(typeof window>`u`)return;let n=Mc(window.location.pathname,e.basePath)??`chat`;OE(e,n),AE(e,n,t)}function DE(e){if(typeof window>`u`)return;let t=Mc(window.location.pathname,e.basePath);if(!t)return;let n=new URL(window.location.href).searchParams.get(`session`)?.trim();n&&(e.sessionKey=n,dE(e,{...e.settings,sessionKey:n,lastActiveSessionKey:n})),OE(e,t)}function OE(e,t){kE(e,t,{refreshPolicy:`connected`})}function kE(e,t,n){let r=e.tab;e.tab!==t&&(e.tab=t),r===`chat`&&t!==`chat`&&MT(),t===`chat`&&(e.chatHasAutoScrolled=!1),t===`logs`?Xi(e):Zi(e),t===`debug`?Qi(e):$i(e),t===`inbox`?ea(e):ta(e),(n.refreshPolicy===`always`||e.connected)&&_E(e),n.syncUrl&&AE(e,t,!1)}function AE(e,t,n){if(typeof window>`u`)return;let r=Ac(jc(t,e.basePath)),i=Ac(window.location.pathname),a=new URL(window.location.href);t===`chat`&&e.sessionKey?a.searchParams.set(`session`,e.sessionKey):a.searchParams.delete(`session`),i!==r&&(a.pathname=r),n?window.history.replaceState({},``,a.toString()):window.history.pushState({},``,a.toString())}function jE(e,t,n){if(typeof window>`u`)return;let r=new URL(window.location.href);r.searchParams.set(`session`,t),n?window.history.replaceState({},``,r.toString()):window.history.pushState({},``,r.toString())}async function ME(e){let t=e;await Promise.allSettled([cr(t,!1),Ms(t),Ps(t),Ko(t),qo(t),xi(t),$s(t),Cc(t),FE(t)]),IE(t)}function NE(e){return e?.scopes?bi({role:e.role??`operator`,requestedScopes:[`operator.read`],allowedScopes:e.scopes}):!1}function PE(e){return e?Object.values(e).some(e=>Array.isArray(e)&&e.length>0):!1}async function FE(e){if(!(!e.client||!e.connected))try{let t=await e.client.request(`logs.tail`,{cursor:e.overviewLogCursor||void 0,limit:100,maxBytes:5e4}),n=Array.isArray(t.lines)?t.lines.filter(e=>typeof e==`string`):[];e.overviewLogLines=[...e.overviewLogLines,...n].slice(-500),typeof t.cursor==`number`&&(e.overviewLogCursor=t.cursor)}catch{}}function IE(e){let t=[];e.lastError&&t.push({severity:`error`,icon:`x`,title:`Gateway Error`,description:oa(e.lastError)});let n=e.hello?.auth??null;n?.scopes&&!NE(n)&&t.push({severity:`warning`,icon:`key`,title:`Missing operator.read scope`,description:`This connection does not have the operator.read scope. Some features may be unavailable.`,href:`https://docs.kova.ai/web/dashboard`,external:!0});let r=e.skillsReport?.skills??[],i=r.filter(e=>!e.disabled&&PE(e.missing));if(i.length>0){let e=i.slice(0,3).map(e=>e.name),n=i.length>3?` +${i.length-3} more`:``;t.push({severity:`warning`,icon:`zap`,title:`Skills with missing dependencies`,description:`${e.join(`, `)}${n}`})}let a=r.filter(e=>e.blockedByAllowlist);a.length>0&&t.push({severity:`warning`,icon:`shield`,title:`${a.length} skill${a.length>1?`s`:``} blocked`,description:a.map(e=>e.name).join(`, `)});let o=e.cronJobs??[],s=o.filter(e=>e.state?.lastStatus===`error`);s.length>0&&t.push({severity:`error`,icon:`clock`,title:`${s.length} cron job${s.length>1?`s`:``} failed`,description:s.map(e=>e.name).join(`, `)});let c=Date.now(),l=o.filter(e=>e.enabled&&e.state?.nextRunAtMs!=null&&c-e.state.nextRunAtMs>3e5);l.length>0&&t.push({severity:`warning`,icon:`clock`,title:`${l.length} overdue job${l.length>1?`s`:``}`,description:l.map(e=>e.name).join(`, `)}),e.attentionItems=t}async function LE(e){await Promise.all([cr(e,!0),lr(e),Ge(e),F(e)])}async function RE(e){let t=e;await Promise.all([Ea(t),cr(t,!1),F(t)])}async function zE(e){let t=e,n=t.cronRunsScope===`job`?t.cronRunsJobId:null;await Promise.all([cr(t,!1),Ko(t),qo(t),ps(t,n)])}var BE=50,VE=80,HE=12e4;function UE(e){return typeof e==`string`&&e.trim()||null}function WE(e,t){let n=UE(t);if(!n)return null;let r=UE(e);if(r){let e=`${r}/`;if(n.toLowerCase().startsWith(e.toLowerCase())){let t=n.slice(e.length).trim();if(t)return`${r}/${t}`}return`${r}/${n}`}let i=n.indexOf(`/`);if(i>0){let e=n.slice(0,i).trim(),t=n.slice(i+1).trim();if(e&&t)return`${e}/${t}`}return n}function GE(e){return Array.isArray(e)?e.map(e=>UE(e)).filter(e=>!!e):[]}function KE(e){if(!Array.isArray(e))return[];let t=[];for(let n of e){if(!n||typeof n!=`object`)continue;let e=n,r=UE(e.provider),i=UE(e.model);if(!r||!i)continue;let a=UE(e.reason)?.replace(/_/g,` `)??UE(e.code)??(typeof e.status==`number`?`HTTP ${e.status}`:null)??UE(e.error)??`error`;t.push({provider:r,model:i,reason:a})}return t}function qE(e){if(!e||typeof e!=`object`)return null;let t=e;if(typeof t.text==`string`)return t.text;let n=t.content;if(!Array.isArray(n))return null;let r=n.map(e=>{if(!e||typeof e!=`object`)return null;let t=e;return t.type===`text`&&typeof t.text==`string`?t.text:null}).filter(e=>!!e);return r.length===0?null:r.join(`
`)}function JE(e){if(e==null)return null;if(typeof e==`number`||typeof e==`boolean`)return String(e);let t=qE(e),n;if(typeof e==`string`)n=e;else if(t)n=t;else try{n=JSON.stringify(e,null,2)}catch{n=String(e)}let r=y(n,HE);return r.truncated?`${r.text}\n\n… truncated (${r.total} chars, showing first ${r.text.length}).`:r.text}function YE(e){let t=[];return t.push({type:`toolcall`,name:e.name,arguments:e.args??{}}),e.output&&t.push({type:`toolresult`,name:e.name,text:e.output}),{role:`assistant`,toolCallId:e.toolCallId,runId:e.runId,content:t,timestamp:e.startedAt}}function XE(e){if(e.toolStreamOrder.length<=BE)return;let t=e.toolStreamOrder.length-BE,n=e.toolStreamOrder.splice(0,t);for(let t of n)e.toolStreamById.delete(t)}function ZE(e){e.chatToolMessages=e.toolStreamOrder.map(t=>e.toolStreamById.get(t)?.message).filter(e=>!!e)}function QE(e){e.toolStreamSyncTimer!=null&&(clearTimeout(e.toolStreamSyncTimer),e.toolStreamSyncTimer=null),ZE(e)}function $E(e,t=!1){if(t){QE(e);return}e.toolStreamSyncTimer??=window.setTimeout(()=>QE(e),VE)}function eD(e){e.toolStreamSyncTimer!=null&&(clearTimeout(e.toolStreamSyncTimer),e.toolStreamSyncTimer=null),e.toolStreamById.clear(),e.toolStreamOrder=[],e.chatToolMessages=[],e.chatStreamSegments=[]}var tD=5e3,nD=8e3;function rD(e){e.compactionClearTimer!=null&&(window.clearTimeout(e.compactionClearTimer),e.compactionClearTimer=null)}function iD(e){e.compactionClearTimer=window.setTimeout(()=>{e.compactionStatus=null,e.compactionClearTimer=null},tD)}function aD(e,t){e.compactionStatus={phase:`complete`,runId:t,startedAt:e.compactionStatus?.startedAt??null,completedAt:Date.now()},iD(e)}function oD(e,t){let n=t.data??{},r=typeof n.phase==`string`?n.phase:``,i=n.completed===!0;if(rD(e),r===`start`){e.compactionStatus={phase:`active`,runId:t.runId,startedAt:Date.now(),completedAt:null};return}if(r===`end`){if(n.willRetry===!0&&i){e.compactionStatus={phase:`retrying`,runId:t.runId,startedAt:e.compactionStatus?.startedAt??Date.now(),completedAt:null};return}if(i){aD(e,t.runId);return}e.compactionStatus=null}}function sD(e,t){let n=UE((t.data??{}).phase);n!==`end`&&n!==`error`||cD(e,t,{allowSessionScopedWhenIdle:!0}).accepted&&e.compactionStatus?.phase===`retrying`&&(e.compactionStatus.runId&&e.compactionStatus.runId!==t.runId||aD(e,t.runId))}function cD(e,t,n){let r=typeof t.sessionKey==`string`?t.sessionKey:void 0;return r&&r!==e.sessionKey?{accepted:!1}:!e.chatRunId&&n?.allowSessionScopedWhenIdle&&r?{accepted:!0,sessionKey:r}:!r&&e.chatRunId&&t.runId!==e.chatRunId||e.chatRunId&&t.runId!==e.chatRunId||!e.chatRunId?{accepted:!1}:{accepted:!0,sessionKey:r}}function lD(e,t){let n=t.data??{},r=t.stream===`fallback`?`fallback`:UE(n.phase);if(t.stream===`lifecycle`&&r!==`fallback`&&r!==`fallback_cleared`||!cD(e,t,{allowSessionScopedWhenIdle:!0}).accepted)return;let i=WE(n.selectedProvider,n.selectedModel)??WE(n.fromProvider,n.fromModel),a=WE(n.activeProvider,n.activeModel)??WE(n.toProvider,n.toModel),o=WE(n.previousActiveProvider,n.previousActiveModel)??UE(n.previousActiveModel);if(!i||!a||r===`fallback`&&i===a)return;let s=UE(n.reasonSummary)??UE(n.reason),c=(()=>{let e=GE(n.attemptSummaries);return e.length>0?e:KE(n.attempts).map(e=>`${WE(e.provider,e.model)??`${e.provider}/${e.model}`}: ${e.reason}`)})();e.fallbackClearTimer!=null&&(window.clearTimeout(e.fallbackClearTimer),e.fallbackClearTimer=null),e.fallbackStatus={phase:r===`fallback_cleared`?`cleared`:`active`,selected:i,active:r===`fallback_cleared`?i:a,previous:r===`fallback_cleared`?o??(a===i?void 0:a):void 0,reason:s??void 0,attempts:c,occurredAt:Date.now()},e.fallbackClearTimer=window.setTimeout(()=>{e.fallbackStatus=null,e.fallbackClearTimer=null},nD)}function uD(e,t){if(!t)return;if(t.stream===`compaction`){oD(e,t);return}if(t.stream===`lifecycle`){sD(e,t),lD(e,t);return}if(t.stream===`fallback`){lD(e,t);return}if(t.stream!==`tool`)return;let n=typeof t.sessionKey==`string`?t.sessionKey:void 0;if(n&&n!==e.sessionKey)return;let r=t.data??{},i=typeof r.toolCallId==`string`?r.toolCallId:``;if(!i)return;let a=typeof r.name==`string`?r.name:`tool`,o=typeof r.phase==`string`?r.phase:``,s=o===`start`?r.args:void 0,c=o===`update`?JE(r.partialResult):o===`result`?JE(r.result):void 0,l=Date.now(),u=e.toolStreamById.get(i);u?(u.name=a,s!==void 0&&(u.args=s),c!==void 0&&(u.output=c||void 0),u.updatedAt=l):(e.chatStream&&e.chatStream.trim().length>0&&(e.chatStreamSegments=[...e.chatStreamSegments,{text:e.chatStream,ts:l}],e.chatStream=null,e.chatStreamStartedAt=null),u={toolCallId:i,runId:t.runId,sessionKey:n,name:a,args:s,output:c||void 0,startedAt:typeof t.ts==`number`?t.ts:l,updatedAt:l,message:{}},e.toolStreamById.set(i,u),e.toolStreamOrder.push(i)),u.message=YE(u),XE(e),$E(e,o===`result`)}async function dD(e,t,n,r,i={}){switch(n){case`help`:return fD();case`new`:return{content:`Starting new session...`,action:`new-session`};case`reset`:return{content:`Resetting session...`,action:`reset`};case`stop`:return{content:`Stopping current run...`,action:`stop`};case`clear`:return{content:`Chat history cleared.`,action:`clear`};case`focus`:return{content:`Toggled focus mode.`,action:`toggle-focus`};case`compact`:return await pD(e,t);case`model`:return await mD(e,t,r,i);case`think`:return await hD(e,t,r);case`fast`:return await _D(e,t,r);case`verbose`:return await gD(e,t,r);case`export-session`:return{content:`Exporting session...`,action:`export`};case`usage`:return await vD(e,t);case`agents`:return await yD(e);case`kill`:return await bD(e,t,r);case`steer`:return await ID(e,t,r,i);case`redirect`:return await LD(e,t,r,i);default:return{content:`Unknown command: \`/${n}\``}}}function fD(){let e=[`**Available Commands**
`],t=``;for(let n of gT){let r=n.category??`session`;r!==t&&(t=r,e.push(`**${r.charAt(0).toUpperCase()+r.slice(1)}**`));let i=n.args?` ${n.args}`:``,a=n.executeLocal?``:` *(agent)*`;e.push(`\`/${n.name}${i}\` — ${n.description}${a}`)}return e.push("\nType `/` to open the command menu."),{content:e.join(`
`)}}async function pD(e,t){try{return await e.request(`sessions.compact`,{key:t}),{content:`Context compacted successfully.`,action:`refresh`}}catch(e){return{content:`Compaction failed: ${String(e)}`}}}async function mD(e,t,n,r){let i=r.chatModelCatalog??r.modelCatalog;if(!n)try{let[n,r]=await Promise.all([e.request(`sessions.list`,{}),i?Promise.resolve(i):AD(e)]),a=OD(n,t)?.model||n?.defaults?.model||`default`,o=r.map(e=>e.id),s=[`**Current model:** \`${a}\``];return o.length>0&&s.push(`**Available:** ${o.slice(0,10).map(e=>`\`${e}\``).join(`, `)}${o.length>10?` +${o.length-10} more`:``}`),{content:s.join(`
`)}}catch(e){return{content:`Failed to get model info: ${String(e)}`}}try{let[r,a]=await Promise.all([e.request(`sessions.patch`,{key:t,model:n.trim()}),i?Promise.resolve(i):AD(e,{allowFailure:!0})]),o=Sa(r.resolved?.model??n.trim(),r.resolved?.modelProvider,a).value;return{content:`Model set to \`${n.trim()}\`.`,action:`refresh`,sessionPatch:{modelOverride:va(o)}}}catch(e){return{content:`Failed to set model: ${String(e)}`}}}async function hD(e,t,n){let r=n.trim();if(!r)try{let{session:n,models:r}=await kD(e,t);return{content:ED(`Current thinking level: ${jD(n,r)}.`,Bw(n?.modelProvider,n?.model))}}catch(e){return{content:`Failed to get thinking level: ${String(e)}`}}let i=Lw(r);if(!i)try{let n=await DD(e,t);return{content:`Unrecognized thinking level "${r}". Valid levels: ${Bw(n?.modelProvider,n?.model)}.`}}catch(e){return{content:`Failed to validate thinking level: ${String(e)}`}}try{return await e.request(`sessions.patch`,{key:t,thinkingLevel:i}),{content:`Thinking level set to **${i}**.`,action:`refresh`}}catch(e){return{content:`Failed to set thinking level: ${String(e)}`}}}async function gD(e,t,n){let r=n.trim();if(!r)try{return{content:ED(`Current verbose level: ${Uw((await DD(e,t))?.verboseLevel)??`off`}.`,`on, full, off`)}}catch(e){return{content:`Failed to get verbose level: ${String(e)}`}}let i=Uw(r);if(!i)return{content:`Unrecognized verbose level "${r}". Valid levels: off, on, full.`};try{return await e.request(`sessions.patch`,{key:t,verboseLevel:i}),{content:`Verbose mode set to **${i}**.`,action:`refresh`}}catch(e){return{content:`Failed to set verbose mode: ${String(e)}`}}}async function _D(e,t,n){let r=n.trim().toLowerCase();if(!r||r===`status`)try{return{content:ED(`Current fast mode: ${MD(await DD(e,t))}.`,`status, on, off`)}}catch(e){return{content:`Failed to get fast mode: ${String(e)}`}}if(r!==`on`&&r!==`off`)return{content:`Unrecognized fast mode "${n.trim()}". Valid levels: status, on, off.`};try{return await e.request(`sessions.patch`,{key:t,fastMode:r===`on`}),{content:`Fast mode ${r===`on`?`enabled`:`disabled`}.`,action:`refresh`}}catch(e){return{content:`Failed to set fast mode: ${String(e)}`}}}async function vD(e,t){try{let n=OD(await e.request(`sessions.list`,{}),t);if(!n)return{content:`No active session.`};let r=n.inputTokens??0,i=n.outputTokens??0,a=n.totalTokens??r+i,o=n.contextTokens??0,s=o>0?Math.round(r/o*100):null,c=[`**Session Usage**`,`Input: **${RD(r)}** tokens`,`Output: **${RD(i)}** tokens`,`Total: **${RD(a)}** tokens`];return s!==null&&c.push(`Context: **${s}%** of ${RD(o)}`),n.model&&c.push(`Model: \`${n.model}\``),{content:c.join(`
`)}}catch(e){return{content:`Failed to get usage: ${String(e)}`}}}async function yD(e){try{let t=await e.request(`agents.list`,{}),n=t?.agents??[];if(n.length===0)return{content:`No agents configured.`};let r=[`**Agents** (${n.length})\n`];for(let e of n){let n=e.id===t?.defaultId,i=e.identity?.name||e.name||e.id,a=n?` *(default)*`:``;r.push(`- \`${e.id}\` — ${i}${a}`)}return{content:r.join(`
`)}}catch(e){return{content:`Failed to list agents: ${String(e)}`}}}async function bD(e,t,n){let r=n.trim();if(!r)return{content:"Usage: `/kill <id|all>`"};try{let n=xD((await e.request(`sessions.list`,{}))?.sessions??[],t,r);if(n.length===0)return{content:r.toLowerCase()===`all`?`No active sub-agent sessions found.`:`No matching sub-agent sessions found for \`${r}\`.`};let i=await Promise.allSettled(n.map(t=>e.request(`chat.abort`,{sessionKey:t}))),a=i.filter(e=>e.status===`rejected`),o=i.filter(e=>e.status===`fulfilled`&&e.value?.aborted!==!1).length;if(o===0){if(a.length===0)return{content:r.toLowerCase()===`all`?`No active sub-agent runs to abort.`:`No active runs matched \`${r}\`.`};throw a[0]?.reason??Error(`abort failed`)}return r.toLowerCase()===`all`?{content:o===n.length?`Aborted ${o} sub-agent session${o===1?``:`s`}.`:`Aborted ${o} of ${n.length} sub-agent sessions.`}:{content:o===n.length?`Aborted ${o} matching sub-agent session${o===1?``:`s`} for \`${r}\`.`:`Aborted ${o} of ${n.length} matching sub-agent sessions for \`${r}\`.`}}catch(e){return{content:`Failed to abort: ${String(e)}`}}}function xD(e,t,n){let r=n.trim().toLowerCase();if(!r)return[];let i=new Set,a=t.trim().toLowerCase(),o=A(a)?.agentId??(a===`main`?`main`:void 0),s=CD(e);for(let t of e){let e=t?.key?.trim();if(!e||!ne(e))continue;let n=e.toLowerCase(),c=A(n),l=SD(n,a,s,o,c?.agentId);(r===`all`&&l||l&&n===r||l&&((c?.agentId??``)===r||n.endsWith(`:subagent:${r}`)||n===`subagent:${r}`))&&i.add(e)}return[...i]}function SD(e,t,n,r,i){if(!r||i!==r)return!1;let a=TD(t,r),o=new Set,s=wD(n.get(e)?.spawnedBy);for(;s&&!o.has(s);){if(a.has(s))return!0;o.add(s),s=wD(n.get(s)?.spawnedBy)}return ne(t)?e.startsWith(`${t}:subagent:`):!1}function CD(e){let t=new Map;for(let n of e){let e=wD(n?.key);e&&t.set(e,n)}return t}function wD(e){return e?.trim().toLowerCase()||void 0}function TD(e,t){let n=new Set([e]);if(t===`main`){let t=`agent:${j}:main`;e===`main`?n.add(t):e===t&&n.add(re)}return n}function ED(e,t){return`${e}\nOptions: ${t}.`}async function DD(e,t){return OD(await e.request(`sessions.list`,{}),t)}function OD(e,t){let n=wD(t),r=A(n??``)?.agentId??(n===`main`?`main`:void 0),i=n?TD(n,r):new Set;return e?.sessions?.find(e=>{let t=wD(e.key);return t?i.has(t):!1})}async function kD(e,t){let[n,r]=await Promise.all([e.request(`sessions.list`,{}),AD(e)]);return{session:OD(n,t),models:r}}async function AD(e,t){try{return(await e.request(`models.list`,{}))?.models??[]}catch(e){if(t?.allowFailure)return[];throw e}}function jD(e,t){return Lw(e?.thinkingLevel)||(!e?.modelProvider||!e.model?`off`:Vw({provider:e.modelProvider,model:e.model,catalog:t}))}function MD(e){return e?.fastMode===!0?`on`:`off`}function ND(e,t,n){let r=n.trim().toLowerCase();if(!r)return[];let i=t.trim().toLowerCase(),a=A(i)?.agentId??(i===`main`?`main`:void 0),o=CD(e),s=new Set;for(let t of e){let e=t?.key?.trim();if(!e||!ne(e))continue;let n=e.toLowerCase();SD(n,i,o,a,A(n)?.agentId)&&(n===r||n.endsWith(`:subagent:${r}`)||n===`subagent:${r}`||(t.label??``).toLowerCase()===r)&&s.add(e)}return[...s]}async function PD(e,t,n,r){let i=n.trim();if(!i)return{error:`empty`};let a=i.indexOf(` `);if(a>0){let n=i.slice(0,a),o=i.slice(a+1).trim();if(o&&n.toLowerCase()!==`all`){let i=r.sessionsResult??await e.request(`sessions.list`,{}),a=ND(i?.sessions??[],t,n);if(a.length===1)return{key:a[0],message:o,label:n,sessions:i};if(a.length>1)return{error:`Multiple sub-agents match \`${n}\`. Be more specific.`}}}return{key:t,message:i}}function FD(e){return e?.status===`running`&&e.endedAt==null}async function ID(e,t,n,r){try{let i=await PD(e,t,n,r);return`error`in i?{content:i.error===`empty`?"Usage: `/steer [id] <message>`":i.error}:FD(OD(i.sessions??await e.request(`sessions.list`,{}),i.key))?(await e.request(`chat.send`,{sessionKey:i.key,message:i.message,deliver:!1,idempotencyKey:Hn()}),{content:i.label?`Steered \`${i.label}\`.`:`Steered.`,pendingCurrentRun:i.key===t}):{content:i.label?`No active run matched \`${i.label}\`. Use \`/redirect\` instead.`:"No active run. Use the chat input or `/redirect` instead."}}catch(e){return{content:`Failed to steer: ${String(e)}`}}}async function LD(e,t,n,r){try{let i=await PD(e,t,n,r);if(`error`in i)return{content:i.error===`empty`?"Usage: `/redirect [id] <message>`":i.error};let a=await e.request(`sessions.steer`,{key:i.key,message:i.message}),o=typeof a?.runId==`string`?a.runId:void 0,s=i.key===t?o:void 0;return{content:i.label?`Redirected \`${i.label}\`.`:`Redirected.`,trackRunId:s}}catch(e){return{content:`Failed to redirect: ${String(e)}`}}}function RD(e){return e>=1e6?`${(e/1e6).toFixed(1).replace(/\.0$/,``)}M`:e>=1e3?`${(e/1e3).toFixed(1).replace(/\.0$/,``)}k`:String(e)}function zD(e){return typeof e==`string`?e:e instanceof Error&&typeof e.message==`string`?e.message:`unknown error`}function BD(e){let t=zD(e.message);switch(Wn(e)){case L.AUTH_TOKEN_MISMATCH:return`gateway token mismatch`;case L.AUTH_UNAUTHORIZED:return`gateway auth failed`;case L.AUTH_RATE_LIMITED:return`too many failed authentication attempts`;case L.PAIRING_REQUIRED:return`gateway pairing required`;case L.CONTROL_UI_DEVICE_IDENTITY_REQUIRED:return`device identity required (use HTTPS/localhost or allow insecure auth explicitly)`;case L.CONTROL_UI_ORIGIN_NOT_ALLOWED:return`origin not allowed (open the Control UI from the gateway host or allow it in gateway.controlUi.allowedOrigins)`;case L.AUTH_TOKEN_MISSING:return`gateway token missing`;default:break}let n=t.trim().toLowerCase();return n===`fetch failed`||n===`failed to fetch`||n===`connect failed`?`gateway connect failed`:t}function VD(e){return e&&typeof e==`object`?BD(e):zD(e)}var HD=/^\s*NO_REPLY\s*$/;function UD(e){return HD.test(e)}function WD(e){if(!e||typeof e!=`object`)return!1;let t=e;if((typeof t.role==`string`?t.role.toLowerCase():``)!==`assistant`)return!1;if(typeof t.text==`string`)return UD(t.text);let n=xh(e);return typeof n==`string`&&UD(n)}function GD(e){let t=e;t.toolStreamById instanceof Map&&Array.isArray(t.toolStreamOrder)&&Array.isArray(t.chatToolMessages)&&Array.isArray(t.chatStreamSegments)&&eD(t)}async function KD(e){if(!(!e.client||!e.connected)){e.chatLoading=!0,e.lastError=null;try{let t=await e.client.request(`chat.history`,{sessionKey:e.sessionKey,limit:200});e.chatMessages=(Array.isArray(t.messages)?t.messages:[]).filter(e=>!WD(e)),e.chatThinkingLevel=t.thinkingLevel??null,GD(e),e.chatStream=null,e.chatStreamStartedAt=null}catch(t){er(t)?(e.chatMessages=[],e.chatThinkingLevel=null,e.lastError=tr(`existing chat history`)):e.lastError=String(t)}finally{e.chatLoading=!1}}}function qD(e){let t=/^data:([^;]+);base64,(.+)$/.exec(e);return t?{mimeType:t[1],content:t[2]}:null}function JD(e,t){if(!e||typeof e!=`object`)return null;let n=e,r=n.role;if(typeof r==`string`){if((t.roleCaseSensitive?r:r.toLowerCase())!==`assistant`)return null}else if(t.roleRequirement===`required`)return null;return t.requireContentArray?Array.isArray(n.content)?n:null:!(`content`in n)&&!(t.allowTextField&&`text`in n)?null:n}function YD(e){return JD(e,{roleRequirement:`required`,roleCaseSensitive:!0,requireContentArray:!0})}function XD(e){return JD(e,{roleRequirement:`optional`,allowTextField:!0})}async function ZD(e,t,n){if(!e.client||!e.connected)return null;let r=t.trim(),i=n&&n.length>0;if(!r&&!i)return null;let a=Date.now(),o=[];if(r&&o.push({type:`text`,text:r}),i)for(let e of n)o.push({type:`image`,source:{type:`base64`,media_type:e.mimeType,data:e.dataUrl}});e.chatMessages=[...e.chatMessages,{role:`user`,content:o,timestamp:a}],e.chatSending=!0,e.lastError=null;let s=Hn();e.chatRunId=s,e.chatStream=``,e.chatStreamStartedAt=a;let c=i?n.map(e=>{let t=qD(e.dataUrl);return t?{type:`image`,mimeType:t.mimeType,content:t.content}:null}).filter(e=>e!==null):void 0;try{return await e.client.request(`chat.send`,{sessionKey:e.sessionKey,message:r,deliver:!1,idempotencyKey:s,attachments:c}),s}catch(t){let n=VD(t);return e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,e.lastError=n,e.chatMessages=[...e.chatMessages,{role:`assistant`,content:[{type:`text`,text:`Error: `+n}],timestamp:Date.now()}],null}finally{e.chatSending=!1}}async function QD(e){if(!e.client||!e.connected)return!1;let t=e.chatRunId;try{return await e.client.request(`chat.abort`,t?{sessionKey:e.sessionKey,runId:t}:{sessionKey:e.sessionKey}),!0}catch(t){return e.lastError=VD(t),!1}}function $D(e,t){if(!t||t.sessionKey!==e.sessionKey)return null;if(t.runId&&e.chatRunId&&t.runId!==e.chatRunId){if(t.state===`final`){let n=XD(t.message);return n&&!WD(n)?(e.chatMessages=[...e.chatMessages,n],null):`final`}return null}if(t.state===`delta`){let n=xh(t.message);typeof n==`string`&&!UD(n)&&(e.chatStream=n)}else if(t.state===`final`){let n=XD(t.message);n&&!WD(n)?e.chatMessages=[...e.chatMessages,n]:e.chatStream?.trim()&&!UD(e.chatStream)&&(e.chatMessages=[...e.chatMessages,{role:`assistant`,content:[{type:`text`,text:e.chatStream}],timestamp:Date.now()}]),e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null}else if(t.state===`aborted`){let n=YD(t.message);if(n&&!WD(n))e.chatMessages=[...e.chatMessages,n];else{let t=e.chatStream??``;t.trim()&&!UD(t)&&(e.chatMessages=[...e.chatMessages,{role:`assistant`,content:[{type:`text`,text:t}],timestamp:Date.now()}])}e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null}else t.state===`error`&&(e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null,e.lastError=t.errorMessage??`chat error`);return t.state}async function eO(e){try{return(await e.request(`models.list`,{}))?.models??[]}catch{return[]}}function tO(e){return e.chatSending||!!e.chatRunId}function nO(e){let t=e.trim();if(!t)return!1;let n=t.toLowerCase();return n===`/stop`?!0:n===`stop`||n===`esc`||n===`abort`||n===`wait`||n===`exit`}function rO(e){let t=e.trim();if(!t)return!1;let n=t.toLowerCase();return n===`/new`||n===`/reset`?!0:n.startsWith(`/new `)||n.startsWith(`/reset `)}async function iO(e){e.connected&&(e.chatMessage=``,await QD(e))}function aO(e,t,n,r,i){let a=t.trim(),o=!!(n&&n.length>0);!a&&!o||(e.chatQueue=[...e.chatQueue,{id:Hn(),text:a,createdAt:Date.now(),attachments:o?n?.map(e=>({...e})):void 0,refreshSessions:r,localCommandArgs:i?.args,localCommandName:i?.name}])}function oO(e,t,n){let r=t.trim();r&&(e.chatQueue=[...e.chatQueue,{id:Hn(),text:r,createdAt:Date.now(),pendingRunId:n}])}async function sO(e,t,n){eD(e),ui(e);let r=await ZD(e,t,n?.attachments),i=!!r;return!i&&n?.previousDraft!=null&&(e.chatMessage=n.previousDraft),!i&&n?.previousAttachments&&(e.chatAttachments=n.previousAttachments),i&&fE(e,e.sessionKey),i&&n?.restoreDraft&&n.previousDraft?.trim()&&(e.chatMessage=n.previousDraft),i&&n?.restoreAttachments&&n.previousAttachments?.length&&(e.chatAttachments=n.previousAttachments),oi(e,!0),i&&!e.chatRunId&&cO(e),i&&n?.refreshSessions&&r&&e.refreshSessionsAfterChat.add(r),i}async function cO(e){if(!e.connected||tO(e))return;let t=e.chatQueue.findIndex(e=>!e.pendingRunId);if(t<0)return;let n=e.chatQueue[t];e.chatQueue=e.chatQueue.filter((e,n)=>n!==t);let r=!1;try{n.localCommandName?(await pO(e,n.localCommandName,n.localCommandArgs??``),r=!0):r=await sO(e,n.text,{attachments:n.attachments,refreshSessions:n.refreshSessions})}catch(t){e.lastError=String(t)}r?e.chatQueue.length>0&&cO(e):e.chatQueue=[n,...e.chatQueue]}function lO(e,t){e.chatQueue=e.chatQueue.filter(e=>e.id!==t)}function uO(e,t){t&&(e.chatQueue=e.chatQueue.filter(e=>e.pendingRunId!==t))}async function dO(e,t,n){if(!e.connected)return;let r=e.chatMessage,i=(t??e.chatMessage).trim(),a=e.chatAttachments??[],o=t==null?a:[],s=o.length>0;if(!i&&!s)return;if(nO(i)){await iO(e);return}let c=bT(i);if(c?.command.executeLocal){if(tO(e)&&fO(c.command.key)){t??(e.chatMessage=``,e.chatAttachments=[]),aO(e,i,void 0,rO(i),{args:c.args,name:c.command.key});return}let a=t==null?r:void 0;t??(e.chatMessage=``,e.chatAttachments=[]),await pO(e,c.command.key,c.args,{previousDraft:a,restoreDraft:!!(t&&n?.restoreDraft)});return}let l=rO(i);if(t??(e.chatMessage=``,e.chatAttachments=[]),tO(e)){aO(e,i,o,l);return}await sO(e,i,{previousDraft:t==null?r:void 0,restoreDraft:!!(t&&n?.restoreDraft),attachments:s?o:void 0,previousAttachments:t==null?a:void 0,restoreAttachments:!!(t&&n?.restoreDraft),refreshSessions:l})}function fO(e){return![`stop`,`focus`,`export-session`,`steer`,`redirect`].includes(e)}async function pO(e,t,n,r){switch(t){case`stop`:await iO(e);return;case`new`:await sO(e,`/new`,{refreshSessions:!0,previousDraft:r?.previousDraft,restoreDraft:r?.restoreDraft});return;case`reset`:await sO(e,`/reset`,{refreshSessions:!0,previousDraft:r?.previousDraft,restoreDraft:r?.restoreDraft});return;case`clear`:await mO(e);return;case`focus`:e.onSlashAction?.(`toggle-focus`);return;case`export-session`:e.onSlashAction?.(`export`);return}if(!e.client)return;let i=e.sessionKey,a=await dD(e.client,i,t,n,{chatModelCatalog:e.chatModelCatalog,sessionsResult:e.sessionsResult});a.content&&hO(e,a.content),a.trackRunId&&(e.chatRunId=a.trackRunId,e.chatStream=``,e.chatSending=!1),a.pendingCurrentRun&&e.chatRunId&&oO(e,`/${t} ${n}`.trim(),e.chatRunId),a.sessionPatch&&`modelOverride`in a.sessionPatch&&(e.chatModelOverrides={...e.chatModelOverrides,[i]:a.sessionPatch.modelOverride??null},e.onSlashAction?.(`refresh-tools-effective`)),a.action===`refresh`&&await gO(e),oi(e)}async function mO(e){if(!(!e.client||!e.connected)){try{await e.client.request(`sessions.reset`,{key:e.sessionKey}),e.chatMessages=[],e.chatStream=null,e.chatRunId=null,await KD(e)}catch(t){e.lastError=String(t)}oi(e)}}function hO(e,t){e.chatMessages=[...e.chatMessages,{role:`system`,content:t,timestamp:Date.now()}]}async function gO(e,t){await Promise.all([KD(e),Ps(e,{activeMinutes:0,limit:0,includeGlobal:!0,includeUnknown:!0}),xO(e),_O(e)]),t?.scheduleScroll!==!1&&oi(e)}async function _O(e){if(!e.client||!e.connected){e.chatModelsLoading=!1,e.chatModelCatalog=[];return}e.chatModelsLoading=!0;try{e.chatModelCatalog=await eO(e.client)}finally{e.chatModelsLoading=!1}}var vO=cO;function yO(e){let t=A(e.sessionKey);return t?.agentId?t.agentId:(e.hello?.snapshot)?.sessionDefaults?.defaultAgentId?.trim()||`main`}function bO(e,t){let n=kc(e),r=encodeURIComponent(t);return n?`${n}/avatar/${r}?meta=1`:`avatar/${r}?meta=1`}async function xO(e){if(!e.connected){e.chatAvatarUrl=null;return}let t=yO(e);if(!t){e.chatAvatarUrl=null;return}e.chatAvatarUrl=null;let n=bO(e.basePath,t);try{let t=await fetch(n,{method:`GET`});if(!t.ok){e.chatAvatarUrl=null;return}let r=await t.json();e.chatAvatarUrl=(typeof r.avatarUrl==`string`?r.avatarUrl.trim():``)||null}catch{e.chatAvatarUrl=null}}function SO(e){if(!e||e.state!==`final`)return!1;if(!e.message||typeof e.message!=`object`)return!0;let t=e.message,n=typeof t.role==`string`?t.role.toLowerCase():``;return!!(n&&n!==`assistant`)}function CO(e,t){if(typeof e!=`string`)return;let n=e.trim();if(n)return n.length<=t?n:n.slice(0,t)}var wO=50,TO=200;function EO(e){let t=sa(CO(e?.name,wO)??`Assistant`)||`Assistant`,n=CO(e?.avatar??void 0,TO)??null;return{agentId:typeof e?.agentId==`string`&&e.agentId.trim()?e.agentId.trim():null,name:t,avatar:n}}async function DO(e,t){if(!e.client||!e.connected)return;let n=t?.sessionKey?.trim()||e.sessionKey.trim(),r=n?{sessionKey:n}:{};try{let t=await e.client.request(`agent.identity.get`,r);if(!t)return;let n=EO(t);e.assistantName=n.name,e.assistantAvatar=n.avatar,e.assistantAgentId=n.agentId??null}catch{}}function OO(e){return typeof e==`object`&&!!e}function kO(e){if(!OO(e))return null;let t=typeof e.id==`string`?e.id.trim():``,n=e.request;if(!t||!OO(n))return null;let r=typeof n.command==`string`?n.command.trim():``;if(!r)return null;let i=typeof e.createdAtMs==`number`?e.createdAtMs:0,a=typeof e.expiresAtMs==`number`?e.expiresAtMs:0;return!i||!a?null:{id:t,kind:`exec`,request:{command:r,cwd:typeof n.cwd==`string`?n.cwd:null,host:typeof n.host==`string`?n.host:null,security:typeof n.security==`string`?n.security:null,ask:typeof n.ask==`string`?n.ask:null,agentId:typeof n.agentId==`string`?n.agentId:null,resolvedPath:typeof n.resolvedPath==`string`?n.resolvedPath:null,sessionKey:typeof n.sessionKey==`string`?n.sessionKey:null},createdAtMs:i,expiresAtMs:a}}function AO(e){if(!OO(e))return null;let t=typeof e.id==`string`?e.id.trim():``;return t?{id:t,decision:typeof e.decision==`string`?e.decision:null,resolvedBy:typeof e.resolvedBy==`string`?e.resolvedBy:null,ts:typeof e.ts==`number`?e.ts:null}:null}function jO(e){if(!OO(e))return null;let t=typeof e.id==`string`?e.id.trim():``;if(!t)return null;let n=typeof e.createdAtMs==`number`?e.createdAtMs:0,r=typeof e.expiresAtMs==`number`?e.expiresAtMs:0;if(!n||!r)return null;let i=OO(e.request)?e.request:{},a=typeof i.title==`string`?i.title.trim():``;if(!a)return null;let o=typeof i.description==`string`?i.description:null,s=typeof i.severity==`string`?i.severity:null,c=typeof i.pluginId==`string`?i.pluginId:null;return{id:t,kind:`plugin`,request:{command:a,agentId:typeof i.agentId==`string`?i.agentId:null,sessionKey:typeof i.sessionKey==`string`?i.sessionKey:null},pluginTitle:a,pluginDescription:o,pluginSeverity:s,pluginId:c,createdAtMs:n,expiresAtMs:r}}function MO(e){let t=Date.now();return e.filter(e=>e.expiresAtMs>t)}function NO(e,t){let n=MO(e).filter(e=>e.id!==t.id);return n.unshift(t),n}function PO(e,t){return MO(e).filter(e=>e.id!==t)}var FO={ok:!1,ts:0,durationMs:0,heartbeatSeconds:0,defaultAgentId:``,agents:[],sessions:{path:``,count:0,recent:[]}};async function IO(e){try{return await e.request(`health`,{})??FO}catch{return FO}}async function LO(e){if(!(!e.client||!e.connected)&&!e.healthLoading){e.healthLoading=!0,e.healthError=null;try{e.healthResult=await IO(e.client)}catch(t){e.healthError=String(t)}finally{e.healthLoading=!1}}}function RO(e){return/^(?:typeerror:\s*)?(?:fetch failed|failed to fetch)$/i.test(e.trim())}function zO(e){let t=e.serverVersion?.trim();if(!t)return;let n=e.pageUrl??(typeof window>`u`?void 0:window.location.href);if(n)try{let r=new URL(n),i=new URL(e.gatewayUrl,r);return!new Set([`ws:`,`wss:`,`http:`,`https:`]).has(i.protocol)||i.host!==r.host?void 0:t}catch{return}}function BO(e,t){let n=(e??``).trim(),r=t.mainSessionKey?.trim();if(!r)return n;if(!n)return r;let i=t.mainKey?.trim()||`main`,a=t.defaultAgentId?.trim();return n===`main`||n===i||a&&(n===`agent:${a}:main`||n===`agent:${a}:${i}`)?r:n}function VO(e,t){if(!t?.mainSessionKey)return;let n=BO(e.sessionKey,t),r=BO(e.settings.sessionKey,t),i=BO(e.settings.lastActiveSessionKey,t),a=n||r||e.sessionKey,o={...e.settings,sessionKey:r||a,lastActiveSessionKey:i||a},s=o.sessionKey!==e.settings.sessionKey||o.lastActiveSessionKey!==e.settings.lastActiveSessionKey;a!==e.sessionKey&&(e.sessionKey=a),s&&dE(e,o)}function HO(e,t){let n=t.auth?.sharedToken?.trim();!n||e.settings.token.trim()===n||dE(e,{...e.settings,token:n})}function UO(e,t){let n=e,r=t?.reason??`initial`;n.pendingShutdownMessage=null,n.resumeChatQueueAfterReconnect=!1,e.lastError=null,e.lastErrorCode=null,e.hello=null,e.connected=!1,r===`seq-gap`?(e.execApprovalQueue=MO(e.execApprovalQueue),uO(e,e.chatRunId??void 0),n.resumeChatQueueAfterReconnect=!0):e.execApprovalQueue=[],e.execApprovalError=null;let i=e.client,a=zO({gatewayUrl:e.settings.gatewayUrl,serverVersion:e.serverVersion}),o=new $n({url:e.settings.gatewayUrl,token:e.settings.token.trim()?e.settings.token:void 0,password:e.password.trim()?e.password:void 0,clientName:`openclaw-control-ui`,clientVersion:a,mode:`webchat`,instanceId:e.clientInstanceId,onHello:t=>{e.client===o&&(n.pendingShutdownMessage=null,e.connected=!0,e.lastError=null,e.lastErrorCode=null,e.hello=t,HO(e,t),JO(e,t),e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,eD(e),n.resumeChatQueueAfterReconnect&&(n.resumeChatQueueAfterReconnect=!1,vO(e)),Ns(e),DO(e),Ea(e),LO(e),qi(e,{quiet:!0}),bs(e,{quiet:!0}),Ao(e),F(e),_E(e))},onClose:({code:t,reason:r,error:i})=>{if(e.client===o)if(e.connected=!1,e.lastErrorCode=Wn(i)??(typeof i?.code==`string`?i.code:null),t!==1012){if(i?.message){e.lastError=e.lastErrorCode&&RO(i.message)?VD({message:i.message,details:i.details,code:i.code}):i.message;return}e.lastError=n.pendingShutdownMessage??`disconnected (${t}): ${r||`no reason`}`}else e.lastError=n.pendingShutdownMessage??null,e.lastErrorCode=null},onEvent:t=>{e.client===o&&WO(e,t)},onGap:({expected:t,received:n})=>{e.client===o&&(e.lastError=`event gap detected (expected seq ${t}, got ${n}); reconnecting`,e.lastErrorCode=null,UO(e,{reason:`seq-gap`}))}});e.client=o,i?.stop(),o.start()}function WO(e,t){try{qO(e,t)}catch(e){console.error(`[gateway] handleGatewayEvent error:`,t.event,e)}}function GO(e,t,n){if(n!==`final`&&n!==`error`&&n!==`aborted`)return!1;let r=e,i=r.toolStreamOrder.length>0;eD(r),uO(e,t?.runId),vO(e);let a=t?.runId;return a&&e.refreshSessionsAfterChat.has(a)&&(e.refreshSessionsAfterChat.delete(a),n===`final`&&Ps(e,{activeMinutes:120})),i&&n===`final`?(KD(e),!0):!1}function KO(e,t){t?.sessionKey&&fE(e,t.sessionKey);let n=$D(e,t),r=GO(e,t,n);n===`final`&&!r&&SO(t)&&KD(e)}function qO(e,t){if(e.eventLogBuffer=[{ts:Date.now(),event:t.event,payload:t.payload},...e.eventLogBuffer].slice(0,250),(e.tab===`debug`||e.tab===`overview`)&&(e.eventLog=e.eventLogBuffer),t.event===`agent`){if(e.onboarding)return;uD(e,t.payload);return}if(t.event===`chat`){KO(e,t.payload);return}if(t.event===`presence`){let n=t.payload;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence,e.presenceError=null,e.presenceStatus=null);return}if(t.event===`shutdown`){let n=t.payload,r=n&&typeof n.reason==`string`&&n.reason.trim()?n.reason.trim():`gateway stopping`,i=typeof n?.restartExpectedMs==`number`?`Restarting: ${r}`:`Disconnected: ${r}`;e.pendingShutdownMessage=i,e.lastError=i,e.lastErrorCode=null;return}if(t.event===`qr_code`){let n=t.payload;n?.channel===`whatsapp`&&typeof n.qrDataUrl==`string`&&(e.whatsappLoginQrDataUrl=n.qrDataUrl,e.whatsappLoginMessage=typeof n.message==`string`&&n.message.trim()?n.message:null,e.whatsappLoginConnected=!1,Vr(e));return}if(t.event===`sessions.changed`){Ps(e),e.tab===`employees`&&Ei(e);return}if(t.event===`cron`&&e.tab===`cron`&&zE(e),(t.event===`device.pair.requested`||t.event===`device.pair.resolved`)&&bs(e,{quiet:!0}),t.event===`exec.approval.requested`){let n=kO(t.payload);if(n){e.execApprovalQueue=NO(e.execApprovalQueue,n),e.execApprovalError=null;let t=Math.max(0,n.expiresAtMs-Date.now()+500);window.setTimeout(()=>{e.execApprovalQueue=PO(e.execApprovalQueue,n.id)},t)}return}if(t.event===`exec.approval.resolved`){let n=AO(t.payload);n&&(e.execApprovalQueue=PO(e.execApprovalQueue,n.id));return}if(t.event===`plugin.approval.requested`){let n=jO(t.payload);if(n){e.execApprovalQueue=NO(e.execApprovalQueue,n),e.execApprovalError=null;let t=Math.max(0,n.expiresAtMs-Date.now()+500);window.setTimeout(()=>{e.execApprovalQueue=PO(e.execApprovalQueue,n.id)},t)}return}if(t.event===`plugin.approval.resolved`){let n=AO(t.payload);n&&(e.execApprovalQueue=PO(e.execApprovalQueue,n.id));return}t.event===`update.available`&&(e.updateAvailable=t.payload?.updateAvailable??null)}function JO(e,t){let n=t.snapshot;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence),n?.health&&(e.debugHealth=n.health,e.healthResult=n.health),n?.sessionDefaults&&VO(e,n.sessionDefaults),e.updateAvailable=n?.updateAvailable??null}var YO=`/__openclaw/control-ui-config.json`;async function XO(e){if(typeof window>`u`||typeof fetch!=`function`)return;let t=kc(e.basePath??``),n=t?`${t}${YO}`:YO;try{let t=await fetch(n,{method:`GET`,headers:{Accept:`application/json`},credentials:`same-origin`});if(!t.ok)return;let r=await t.json(),i=EO({name:r.assistantName,avatar:r.assistantAvatar??null});e.assistantName=i.name,e.assistantAvatar=i.avatar}catch{}}function ZO(e){let t=++e.connectGeneration;e.basePath=vE(),pE(e);let n=XO(e);EE(e,!0),yE(e),bE(e),window.addEventListener(`popstate`,e.popStateHandler),n.finally(()=>{e.connectGeneration===t&&UO(e)}),Ji(e),e.tab===`logs`&&Xi(e),e.tab===`debug`&&Qi(e),e.tab===`inbox`&&ea(e)}function QO(e){fi(e)}function $O(e){e.connectGeneration+=1,window.removeEventListener(`popstate`,e.popStateHandler),Yi(e),Zi(e),$i(e),ta(e),e.client?.stop(),e.client=null,e.connected=!1,xE(e),e.topbarObserver?.disconnect(),e.topbarObserver=null}function ek(e,t){if(!(e.tab===`chat`&&e.chatManualRefreshInFlight)){if(e.tab===`chat`&&(t.has(`chatMessages`)||t.has(`chatToolMessages`)||t.has(`chatStream`)||t.has(`chatLoading`)||t.has(`tab`))){let n=t.has(`tab`),r=t.has(`chatLoading`)&&t.get(`chatLoading`)===!0&&!e.chatLoading,i=t.get(`chatStream`),a=t.has(`chatStream`)&&i==null&&typeof e.chatStream==`string`;oi(e,n||r||a||!e.chatHasAutoScrolled)}e.tab===`logs`&&(t.has(`logsEntries`)||t.has(`logsAutoFollow`)||t.has(`tab`))&&e.logsAutoFollow&&e.logsAtBottom&&si(e,t.has(`tab`)||t.has(`logsAutoFollow`))}}var tk=new Set([`agent`,`channel`,`chat`,`provider`,`model`,`tool`,`label`,`key`,`session`,`id`,`has`,`mintokens`,`maxtokens`,`mincost`,`maxcost`,`minmessages`,`maxmessages`]),nk=e=>e.trim().toLowerCase(),rk=e=>{let t=e.replace(/[.+^${}()|[\]\\]/g,`\\$&`).replace(/\*/g,`.*`).replace(/\?/g,`.`);return RegExp(`^${t}$`,`i`)},ik=e=>{let t=e.trim().toLowerCase();if(!t)return null;t.startsWith(`$`)&&(t=t.slice(1));let n=1;t.endsWith(`k`)?(n=1e3,t=t.slice(0,-1)):t.endsWith(`m`)&&(n=1e6,t=t.slice(0,-1));let r=Number(t);return Number.isFinite(r)?r*n:null},ak=e=>(e.match(/"[^"]+"|\S+/g)??[]).map(e=>{let t=e.replace(/^"|"$/g,``),n=t.indexOf(`:`);return n>0?{key:t.slice(0,n),value:t.slice(n+1),raw:t}:{value:t,raw:t}}),ok=e=>[e.label,e.key,e.sessionId].filter(e=>!!e).map(e=>e.toLowerCase()),sk=e=>{let t=new Set;e.modelProvider&&t.add(e.modelProvider.toLowerCase()),e.providerOverride&&t.add(e.providerOverride.toLowerCase()),e.origin?.provider&&t.add(e.origin.provider.toLowerCase());for(let n of e.usage?.modelUsage??[])n.provider&&t.add(n.provider.toLowerCase());return Array.from(t)},ck=e=>{let t=new Set;e.model&&t.add(e.model.toLowerCase());for(let n of e.usage?.modelUsage??[])n.model&&t.add(n.model.toLowerCase());return Array.from(t)},lk=e=>(e.usage?.toolUsage?.tools??[]).map(e=>e.name.toLowerCase()),uk=(e,t)=>{let n=nk(t.value??``);if(!n)return!0;if(!t.key)return ok(e).some(e=>e.includes(n));switch(nk(t.key)){case`agent`:return e.agentId?.toLowerCase().includes(n)??!1;case`channel`:return e.channel?.toLowerCase().includes(n)??!1;case`chat`:return e.chatType?.toLowerCase().includes(n)??!1;case`provider`:return sk(e).some(e=>e.includes(n));case`model`:return ck(e).some(e=>e.includes(n));case`tool`:return lk(e).some(e=>e.includes(n));case`label`:return e.label?.toLowerCase().includes(n)??!1;case`key`:case`session`:case`id`:if(n.includes(`*`)||n.includes(`?`)){let t=rk(n);return t.test(e.key)||(e.sessionId?t.test(e.sessionId):!1)}return e.key.toLowerCase().includes(n)||(e.sessionId?.toLowerCase().includes(n)??!1);case`has`:switch(n){case`tools`:return(e.usage?.toolUsage?.totalCalls??0)>0;case`errors`:return(e.usage?.messageCounts?.errors??0)>0;case`context`:return!!e.contextWeight;case`usage`:return!!e.usage;case`model`:return ck(e).length>0;case`provider`:return sk(e).length>0;default:return!0}case`mintokens`:{let t=ik(n);return t===null?!0:(e.usage?.totalTokens??0)>=t}case`maxtokens`:{let t=ik(n);return t===null?!0:(e.usage?.totalTokens??0)<=t}case`mincost`:{let t=ik(n);return t===null?!0:(e.usage?.totalCost??0)>=t}case`maxcost`:{let t=ik(n);return t===null?!0:(e.usage?.totalCost??0)<=t}case`minmessages`:{let t=ik(n);return t===null?!0:(e.usage?.messageCounts?.total??0)>=t}case`maxmessages`:{let t=ik(n);return t===null?!0:(e.usage?.messageCounts?.total??0)<=t}default:return!0}},dk=(e,t)=>{let n=ak(t);if(n.length===0)return{sessions:e,warnings:[]};let r=[];for(let e of n){if(!e.key)continue;let t=nk(e.key);if(!tk.has(t)){r.push(`Unknown filter: ${e.key}`);continue}if(e.value===``&&r.push(`Missing value for ${e.key}`),t===`has`){let t=new Set([`tools`,`errors`,`context`,`usage`,`model`,`provider`]);e.value&&!t.has(nk(e.value))&&r.push(`Unknown has:${e.value}`)}[`mintokens`,`maxtokens`,`mincost`,`maxcost`,`minmessages`,`maxmessages`].includes(t)&&e.value&&ik(e.value)===null&&r.push(`Invalid number for ${e.key}`)}return{sessions:e.filter(e=>n.every(t=>uk(e,t))),warnings:r}};function fk(e){let t=e.split(`
`),n=new Map,r=[];for(let e of t){let t=/^\[Tool:\s*([^\]]+)\]/.exec(e.trim());if(t){let e=t[1];n.set(e,(n.get(e)??0)+1);continue}e.trim().startsWith(`[Tool Result]`)||r.push(e)}let i=Array.from(n.entries()).toSorted((e,t)=>t[1]-e[1]),a=i.reduce((e,[,t])=>e+t,0);return{tools:i,summary:i.length>0?`Tools: ${i.map(([e,t])=>`${e}×${t}`).join(`, `)} (${a} calls)`:``,cleanContent:r.join(`
`).trim()}}function pk(e,t){!t||t.count<=0||(e.count+=t.count,e.sum+=t.avgMs*t.count,e.min=Math.min(e.min,t.minMs),e.max=Math.max(e.max,t.maxMs),e.p95Max=Math.max(e.p95Max,t.p95Ms))}function mk(e,t){for(let n of t??[]){let t=e.get(n.date)??{date:n.date,count:0,sum:0,min:1/0,max:0,p95Max:0};t.count+=n.count,t.sum+=n.avgMs*n.count,t.min=Math.min(t.min,n.minMs),t.max=Math.max(t.max,n.maxMs),t.p95Max=Math.max(t.p95Max,n.p95Ms),e.set(n.date,t)}}function hk(e){return{byChannel:Array.from(e.byChannelMap.entries()).map(([e,t])=>({channel:e,totals:t})).toSorted((e,t)=>t.totals.totalCost-e.totals.totalCost),latency:e.latencyTotals.count>0?{count:e.latencyTotals.count,avgMs:e.latencyTotals.sum/e.latencyTotals.count,minMs:e.latencyTotals.min===1/0?0:e.latencyTotals.min,maxMs:e.latencyTotals.max,p95Ms:e.latencyTotals.p95Max}:void 0,dailyLatency:Array.from(e.dailyLatencyMap.values()).map(e=>({date:e.date,count:e.count,avgMs:e.count?e.sum/e.count:0,minMs:e.min===1/0?0:e.min,maxMs:e.max,p95Ms:e.p95Max})).toSorted((e,t)=>e.date.localeCompare(t.date)),modelDaily:Array.from(e.modelDailyMap.values()).toSorted((e,t)=>e.date.localeCompare(t.date)||t.cost-e.cost),daily:Array.from(e.dailyMap.values()).toSorted((e,t)=>e.date.localeCompare(t.date))}}var gk=4;function _k(e){return Math.round(e/gk)}function Z(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e)}function vk(e){let t=new Date;return t.setHours(e,0,0,0),t.toLocaleTimeString(void 0,{hour:`numeric`})}function yk(e,t,n){let r=e.usage;if(!r)return!1;let i=r.firstActivity??e.updatedAt,a=r.lastActivity??e.updatedAt;if(!i||!a)return!1;let o=Math.min(i,a),s=Math.max(i,a),c=Math.max(s-o,1)/6e4,l=o;for(;l<s;){let e=new Date(l),i=Ck(e,t),a=Math.min(i.getTime(),s),o=Math.max((a-l)/6e4,0);n({usage:r,hour:xk(e,t),weekday:Sk(e,t),share:o/c}),l=a+1}return!0}function bk(e,t){let n=Array.from({length:24},()=>0),r=Array.from({length:24},()=>0);for(let i of e){let e=i.usage?.messageCounts;!e||e.total===0||yk(i,t,({hour:t,share:i})=>{n[t]+=e.errors*i,r[t]+=e.total*i})}return r.map((e,t)=>{let r=n[t];return{hour:t,rate:e>0?r/e:0,errors:r,msgs:e}}).filter(e=>e.msgs>0&&e.errors>0).toSorted((e,t)=>t.rate-e.rate).slice(0,5).map(e=>({label:vk(e.hour),value:`${(e.rate*100).toFixed(2)}%`,sub:`${Math.round(e.errors)} ${P(`usage.overview.errors`).toLowerCase()} · ${Math.round(e.msgs)} ${P(`usage.overview.messagesAbbrev`)}`}))}function xk(e,t){return t===`utc`?e.getUTCHours():e.getHours()}function Sk(e,t){return t===`utc`?e.getUTCDay():e.getDay()}function Ck(e,t){let n=new Date(e);return t===`utc`?n.setUTCMinutes(59,59,999):n.setMinutes(59,59,999),n}function wk(e,t){let n=Array.from({length:24},()=>0),r=Array.from({length:7},()=>0),i=0,a=!1;for(let o of e){let e=o.usage;!e||!e.totalTokens||e.totalTokens<=0||(i+=e.totalTokens,yk(o,t,({usage:e,hour:t,weekday:i,share:a})=>{n[t]+=e.totalTokens*a,r[i]+=e.totalTokens*a})&&(a=!0))}let o=[P(`usage.mosaic.sun`),P(`usage.mosaic.mon`),P(`usage.mosaic.tue`),P(`usage.mosaic.wed`),P(`usage.mosaic.thu`),P(`usage.mosaic.fri`),P(`usage.mosaic.sat`)].map((e,t)=>({label:e,tokens:r[t]}));return{hasData:a,totalTokens:i,hourTotals:n,weekdayTotals:o}}function Tk(e,t,n,r){let i=wk(e,t);if(!i.hasData)return c`
      <div class="card usage-mosaic">
        <div class="usage-mosaic-header">
          <div>
            <div class="usage-mosaic-title">${P(`usage.mosaic.title`)}</div>
            <div class="usage-mosaic-sub">${P(`usage.mosaic.subtitleEmpty`)}</div>
          </div>
          <div class="usage-mosaic-total">
            ${Z(0)} ${P(`usage.metrics.tokens`).toLowerCase()}
          </div>
        </div>
        <div class="usage-empty-block usage-empty-block--compact">
          ${P(`usage.mosaic.noTimelineData`)}
        </div>
      </div>
    `;let a=Math.max(...i.hourTotals,1),o=Math.max(...i.weekdayTotals.map(e=>e.tokens),1);return c`
    <div class="card usage-mosaic">
      <div class="usage-mosaic-header">
        <div>
          <div class="usage-mosaic-title">${P(`usage.mosaic.title`)}</div>
          <div class="usage-mosaic-sub">
            ${P(`usage.mosaic.subtitle`,{zone:P(t===`utc`?`usage.filters.timeZoneUtc`:`usage.filters.timeZoneLocal`)})}
          </div>
        </div>
        <div class="usage-mosaic-total">
          ${Z(i.totalTokens)} ${P(`usage.metrics.tokens`).toLowerCase()}
        </div>
      </div>
      <div class="usage-mosaic-grid">
        <div class="usage-mosaic-section">
          <div class="usage-mosaic-section-title">${P(`usage.mosaic.dayOfWeek`)}</div>
          <div class="usage-daypart-grid">
            ${i.weekdayTotals.map(e=>{let t=Math.min(e.tokens/o,1);return c`
                <div class="usage-daypart-cell" style="background: ${e.tokens>0?`color-mix(in srgb, var(--accent) ${(12+t*60).toFixed(1)}%, transparent)`:`transparent`};">
                  <div class="usage-daypart-label">${e.label}</div>
                  <div class="usage-daypart-value">${Z(e.tokens)}</div>
                </div>
              `})}
          </div>
        </div>
        <div class="usage-mosaic-section">
          <div class="usage-mosaic-section-title">
            <span>${P(`usage.filters.hours`)}</span>
            <span class="usage-mosaic-sub">0 → 23</span>
          </div>
          <div class="usage-hour-grid">
            ${i.hourTotals.map((e,t)=>{let i=Math.min(e/a,1),o=e>0?`color-mix(in srgb, var(--accent) ${(8+i*70).toFixed(1)}%, transparent)`:`transparent`,s=`${t}:00 · ${Z(e)} ${P(`usage.metrics.tokens`).toLowerCase()}`,l=i>.7?`color-mix(in srgb, var(--accent) 60%, transparent)`:`color-mix(in srgb, var(--accent) 24%, transparent)`;return c`
                <div
                  class="usage-hour-cell ${n.includes(t)?`selected`:``}"
                  style="background: ${o}; border-color: ${l};"
                  title="${s}"
                  @click=${e=>r(t,e.shiftKey)}
                ></div>
              `})}
          </div>
          <div class="usage-hour-labels">
            <span>${P(`usage.mosaic.midnight`)}</span>
            <span>${P(`usage.mosaic.fourAm`)}</span>
            <span>${P(`usage.mosaic.eightAm`)}</span>
            <span>${P(`usage.mosaic.noon`)}</span>
            <span>${P(`usage.mosaic.fourPm`)}</span>
            <span>${P(`usage.mosaic.eightPm`)}</span>
          </div>
          <div class="usage-hour-legend">
            <span></span>
            ${P(`usage.mosaic.legend`)}
          </div>
        </div>
      </div>
    </div>
  `}function Q(e,t=2){return`$${e.toFixed(t)}`}function Ek(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function Dk(e){let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!t)return null;let[,n,r,i]=t,a=new Date(Date.UTC(Number(n),Number(r)-1,Number(i)));return Number.isNaN(a.valueOf())?null:a}function Ok(e){let t=Dk(e);return t?t.toLocaleDateString(void 0,{month:`short`,day:`numeric`}):e}function kk(e){let t=Dk(e);return t?t.toLocaleDateString(void 0,{month:`long`,day:`numeric`,year:`numeric`}):e}var Ak=()=>({input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0}),jk=(e,t)=>{e.input+=t.input??0,e.output+=t.output??0,e.cacheRead+=t.cacheRead??0,e.cacheWrite+=t.cacheWrite??0,e.totalTokens+=t.totalTokens??0,e.totalCost+=t.totalCost??0,e.inputCost+=t.inputCost??0,e.outputCost+=t.outputCost??0,e.cacheReadCost+=t.cacheReadCost??0,e.cacheWriteCost+=t.cacheWriteCost??0,e.missingCostEntries+=t.missingCostEntries??0},Mk=(e,t)=>{if(e.length===0)return t??{messages:{total:0,user:0,assistant:0,toolCalls:0,toolResults:0,errors:0},tools:{totalCalls:0,uniqueTools:0,tools:[]},byModel:[],byProvider:[],byAgent:[],byChannel:[],daily:[]};let n={total:0,user:0,assistant:0,toolCalls:0,toolResults:0,errors:0},r=new Map,i=new Map,a=new Map,o=new Map,s=new Map,c=new Map,l=new Map,u=new Map,d={count:0,sum:0,min:1/0,max:0,p95Max:0};for(let t of e){let e=t.usage;if(e){if(e.messageCounts&&(n.total+=e.messageCounts.total,n.user+=e.messageCounts.user,n.assistant+=e.messageCounts.assistant,n.toolCalls+=e.messageCounts.toolCalls,n.toolResults+=e.messageCounts.toolResults,n.errors+=e.messageCounts.errors),e.toolUsage)for(let t of e.toolUsage.tools)r.set(t.name,(r.get(t.name)??0)+t.count);if(e.modelUsage)for(let t of e.modelUsage){let e=`${t.provider??`unknown`}::${t.model??`unknown`}`,n=i.get(e)??{provider:t.provider,model:t.model,count:0,totals:Ak()};n.count+=t.count,jk(n.totals,t.totals),i.set(e,n);let r=t.provider??`unknown`,o=a.get(r)??{provider:t.provider,model:void 0,count:0,totals:Ak()};o.count+=t.count,jk(o.totals,t.totals),a.set(r,o)}if(pk(d,e.latency),t.agentId){let n=o.get(t.agentId)??Ak();jk(n,e),o.set(t.agentId,n)}if(t.channel){let n=s.get(t.channel)??Ak();jk(n,e),s.set(t.channel,n)}for(let t of e.dailyBreakdown??[]){let e=c.get(t.date)??{date:t.date,tokens:0,cost:0,messages:0,toolCalls:0,errors:0};e.tokens+=t.tokens,e.cost+=t.cost,c.set(t.date,e)}for(let t of e.dailyMessageCounts??[]){let e=c.get(t.date)??{date:t.date,tokens:0,cost:0,messages:0,toolCalls:0,errors:0};e.messages+=t.total,e.toolCalls+=t.toolCalls,e.errors+=t.errors,c.set(t.date,e)}mk(l,e.dailyLatency);for(let t of e.dailyModelUsage??[]){let e=`${t.date}::${t.provider??`unknown`}::${t.model??`unknown`}`,n=u.get(e)??{date:t.date,provider:t.provider,model:t.model,tokens:0,cost:0,count:0};n.tokens+=t.tokens,n.cost+=t.cost,n.count+=t.count,u.set(e,n)}}}let f=hk({byChannelMap:s,latencyTotals:d,dailyLatencyMap:l,modelDailyMap:u,dailyMap:c});return{messages:n,tools:{totalCalls:Array.from(r.values()).reduce((e,t)=>e+t,0),uniqueTools:r.size,tools:Array.from(r.entries()).map(([e,t])=>({name:e,count:t})).toSorted((e,t)=>t.count-e.count)},byModel:Array.from(i.values()).toSorted((e,t)=>t.totals.totalCost-e.totals.totalCost),byProvider:Array.from(a.values()).toSorted((e,t)=>t.totals.totalCost-e.totals.totalCost),byAgent:Array.from(o.entries()).map(([e,t])=>({agentId:e,totals:t})).toSorted((e,t)=>t.totals.totalCost-e.totals.totalCost),...f}},Nk=(e,t,n)=>{let r=0,i=0;for(let t of e){let e=t.usage?.durationMs??0;e>0&&(r+=e,i+=1)}let a=i?r/i:0,o=t&&r>0?t.totalTokens/(r/6e4):void 0,s=t&&r>0?t.totalCost/(r/6e4):void 0,c=n.messages.total?n.messages.errors/n.messages.total:0,l=n.daily.filter(e=>e.messages>0&&e.errors>0).map(e=>({date:e.date,errors:e.errors,messages:e.messages,rate:e.errors/e.messages})).toSorted((e,t)=>t.rate-e.rate||t.errors-e.errors)[0];return{durationSumMs:r,durationCount:i,avgDurationMs:a,throughputTokensPerMin:o,throughputCostPerMin:s,errorRate:c,peakErrorDay:l}};function Pk(e,t,n=`text/plain`){let r=new Blob([t],{type:`${n};charset=utf-8`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=e,a.click(),URL.revokeObjectURL(i)}function Fk(e){return/[",\n]/.test(e)?`"${e.replaceAll(`"`,`""`)}"`:e}function Ik(e){return e.map(e=>e==null?``:Fk(String(e))).join(`,`)}var Lk=e=>{let t=[Ik([`key`,`label`,`agentId`,`channel`,`provider`,`model`,`updatedAt`,`durationMs`,`messages`,`errors`,`toolCalls`,`inputTokens`,`outputTokens`,`cacheReadTokens`,`cacheWriteTokens`,`totalTokens`,`totalCost`])];for(let n of e){let e=n.usage;t.push(Ik([n.key,n.label??``,n.agentId??``,n.channel??``,n.modelProvider??n.providerOverride??``,n.model??n.modelOverride??``,n.updatedAt?new Date(n.updatedAt).toISOString():``,e?.durationMs??``,e?.messageCounts?.total??``,e?.messageCounts?.errors??``,e?.messageCounts?.toolCalls??``,e?.input??``,e?.output??``,e?.cacheRead??``,e?.cacheWrite??``,e?.totalTokens??``,e?.totalCost??``]))}return t.join(`
`)},Rk=e=>{let t=[Ik([`date`,`inputTokens`,`outputTokens`,`cacheReadTokens`,`cacheWriteTokens`,`totalTokens`,`inputCost`,`outputCost`,`cacheReadCost`,`cacheWriteCost`,`totalCost`])];for(let n of e)t.push(Ik([n.date,n.input,n.output,n.cacheRead,n.cacheWrite,n.totalTokens,n.inputCost??``,n.outputCost??``,n.cacheReadCost??``,n.cacheWriteCost??``,n.totalCost]));return t.join(`
`)},zk=(e,t,n)=>{let r=e.trim();if(!r)return[];let i=r.length?r.split(/\s+/):[],a=i.length?i[i.length-1]:``,[o,s]=a.includes(`:`)?[a.slice(0,a.indexOf(`:`)),a.slice(a.indexOf(`:`)+1)]:[``,``],c=o.toLowerCase(),l=s.toLowerCase(),u=e=>{let t=new Set;for(let n of e)n&&t.add(n);return Array.from(t)},d=u(t.map(e=>e.agentId)).slice(0,6),f=u(t.map(e=>e.channel)).slice(0,6),p=u([...t.map(e=>e.modelProvider),...t.map(e=>e.providerOverride),...n?.byProvider.map(e=>e.provider)??[]]).slice(0,6),m=u([...t.map(e=>e.model),...n?.byModel.map(e=>e.model)??[]]).slice(0,6),h=u(n?.tools.tools.map(e=>e.name)??[]).slice(0,6);if(!c)return[{label:`agent:`,value:`agent:`},{label:`channel:`,value:`channel:`},{label:`provider:`,value:`provider:`},{label:`model:`,value:`model:`},{label:`tool:`,value:`tool:`},{label:`has:errors`,value:`has:errors`},{label:`has:tools`,value:`has:tools`},{label:`minTokens:`,value:`minTokens:`},{label:`maxCost:`,value:`maxCost:`}];let g=[],_=(e,t)=>{for(let n of t)(!l||n.toLowerCase().includes(l))&&g.push({label:`${e}:${n}`,value:`${e}:${n}`})};switch(c){case`agent`:_(`agent`,d);break;case`channel`:_(`channel`,f);break;case`provider`:_(`provider`,p);break;case`model`:_(`model`,m);break;case`tool`:_(`tool`,h);break;case`has`:[`errors`,`tools`,`context`,`usage`,`model`,`provider`].forEach(e=>{(!l||e.includes(l))&&g.push({label:`has:${e}`,value:`has:${e}`})});break;default:break}return g},Bk=(e,t)=>{let n=e.trim();if(!n)return`${t} `;let r=n.split(/\s+/);return r[r.length-1]=t,`${r.join(` `)} `},Vk=e=>e.trim().toLowerCase(),Hk=(e,t)=>{let n=e.trim();if(!n)return`${t} `;let r=n.split(/\s+/),i=r[r.length-1]??``,a=t.includes(`:`)?t.split(`:`)[0]:null,o=i.includes(`:`)?i.split(`:`)[0]:null;return i.endsWith(`:`)&&a&&o===a?(r[r.length-1]=t,`${r.join(` `)} `):r.includes(t)?`${r.join(` `)} `:`${r.join(` `)} ${t} `},Uk=(e,t)=>{let n=e.trim().split(/\s+/).filter(Boolean).filter(e=>e!==t);return n.length?`${n.join(` `)} `:``},Wk=(e,t,n)=>{let r=Vk(t),i=[...ak(e).filter(e=>Vk(e.key??``)!==r).map(e=>e.raw),...n.map(e=>`${t}:${e}`)];return i.length?`${i.join(` `)} `:``};function Gk(e,t){return t===0?0:e/t*100}function Kk(e){let t=e.totalCost||0;return{input:{tokens:e.input,cost:e.inputCost||0,pct:Gk(e.inputCost||0,t)},output:{tokens:e.output,cost:e.outputCost||0,pct:Gk(e.outputCost||0,t)},cacheRead:{tokens:e.cacheRead,cost:e.cacheReadCost||0,pct:Gk(e.cacheReadCost||0,t)},cacheWrite:{tokens:e.cacheWrite,cost:e.cacheWriteCost||0,pct:Gk(e.cacheWriteCost||0,t)},totalCost:t}}function qk(e,t,n,r,i,a,o,s){if(!(e.length>0||t.length>0||n.length>0))return u;let l=n.length===1?r.find(e=>e.key===n[0]):null,d=l?(l.label||l.key).slice(0,20)+((l.label||l.key).length>20?`…`:``):n.length===1?n[0].slice(0,8)+`…`:P(`usage.filters.sessionsCount`,{count:String(n.length)}),f=l?l.label||l.key:n.length===1?n[0]:n.join(`, `),p=e.length===1?e[0]:P(`usage.filters.daysCount`,{count:String(e.length)}),m=t.length===1?`${t[0]}:00`:P(`usage.filters.hoursCount`,{count:String(t.length)});return c`
    <div class="active-filters">
      ${e.length>0?c`
            <div class="filter-chip">
              <span class="filter-chip-label">${P(`usage.filters.days`)}: ${p}</span>
              <button
                class="filter-chip-remove"
                @click=${i}
                title=${P(`usage.filters.remove`)}
                aria-label="Remove days filter"
              >
                ×
              </button>
            </div>
          `:u}
      ${t.length>0?c`
            <div class="filter-chip">
              <span class="filter-chip-label">${P(`usage.filters.hours`)}: ${m}</span>
              <button
                class="filter-chip-remove"
                @click=${a}
                title=${P(`usage.filters.remove`)}
                aria-label="Remove hours filter"
              >
                ×
              </button>
            </div>
          `:u}
      ${n.length>0?c`
            <div class="filter-chip" title="${f}">
              <span class="filter-chip-label">${P(`usage.filters.session`)}: ${d}</span>
              <button
                class="filter-chip-remove"
                @click=${o}
                title=${P(`usage.filters.remove`)}
                aria-label="Remove session filter"
              >
                ×
              </button>
            </div>
          `:u}
      ${(e.length>0||t.length>0)&&n.length>0?c`
            <button class="btn btn--sm" @click=${s}>
              ${P(`usage.filters.clearAll`)}
            </button>
          `:u}
    </div>
  `}function Jk(e,t,n,r,i,a){if(!e.length)return c`
      <div class="daily-chart-compact">
        <div class="card-title usage-section-title">${P(`usage.daily.title`)}</div>
        <div class="usage-empty-block">${P(`usage.empty.noData`)}</div>
      </div>
    `;let o=n===`tokens`,s=e.map(e=>o?e.totalTokens:e.totalCost),l=Math.max(...s,o?1:1e-4),d=s.filter(e=>e>0),f=l/(d.length>0?Math.min(...d):l),p=s.map(e=>{if(e<=0)return 0;let t=f>50?Math.sqrt(e/l):e/l;return Math.max(6,t*200)}),m=e.length>30?12:e.length>20?18:e.length>14?24:32,h=e.length<=14;return c`
    <div class="daily-chart-compact">
      <div class="daily-chart-header">
        <div class="chart-toggle small sessions-toggle">
          <button
            class="btn btn--sm toggle-btn ${r===`total`?`active`:``}"
            @click=${()=>i(`total`)}
          >
            ${P(`usage.daily.total`)}
          </button>
          <button
            class="btn btn--sm toggle-btn ${r===`by-type`?`active`:``}"
            @click=${()=>i(`by-type`)}
          >
            ${P(`usage.daily.byType`)}
          </button>
        </div>
        <div class="card-title">
          ${P(o?`usage.daily.tokensTitle`:`usage.daily.costTitle`)}
        </div>
      </div>
      <div class="daily-chart">
        <div class="daily-chart-bars" style="--bar-max-width: ${m}px">
          ${e.map((n,i)=>{let s=p[i],l=t.includes(n.date),d=Ok(n.date),f=e.length>20?String(parseInt(n.date.slice(8),10)):d,m=e.length>20?`daily-bar-label daily-bar-label--compact`:`daily-bar-label`,g=r===`by-type`?o?[{value:n.output,class:`output`},{value:n.input,class:`input`},{value:n.cacheWrite,class:`cache-write`},{value:n.cacheRead,class:`cache-read`}]:[{value:n.outputCost??0,class:`output`},{value:n.inputCost??0,class:`input`},{value:n.cacheWriteCost??0,class:`cache-write`},{value:n.cacheReadCost??0,class:`cache-read`}]:[],_=r===`by-type`?o?[`${P(`usage.breakdown.output`)} ${Z(n.output)}`,`${P(`usage.breakdown.input`)} ${Z(n.input)}`,`${P(`usage.breakdown.cacheWrite`)} ${Z(n.cacheWrite)}`,`${P(`usage.breakdown.cacheRead`)} ${Z(n.cacheRead)}`]:[`${P(`usage.breakdown.output`)} ${Q(n.outputCost??0)}`,`${P(`usage.breakdown.input`)} ${Q(n.inputCost??0)}`,`${P(`usage.breakdown.cacheWrite`)} ${Q(n.cacheWriteCost??0)}`,`${P(`usage.breakdown.cacheRead`)} ${Q(n.cacheReadCost??0)}`]:[],v=o?Z(n.totalTokens):Q(n.totalCost);return c`
              <div
                class="daily-bar-wrapper ${l?`selected`:``}"
                @click=${e=>a(n.date,e.shiftKey)}
              >
                ${r===`by-type`?c`
                      <div
                        class="daily-bar daily-bar--stacked"
                        style="height: ${s.toFixed(0)}px;"
                      >
                        ${(()=>{let e=g.reduce((e,t)=>e+t.value,0)||1;return g.map(t=>c`
                              <div
                                class="cost-segment ${t.class}"
                                style="height: ${t.value/e*100}%"
                              ></div>
                            `)})()}
                      </div>
                    `:c` <div class="daily-bar" style="height: ${s.toFixed(0)}px"></div> `}
                ${h?c`<div class="daily-bar-total">${v}</div>`:u}
                <div class="${m}">${f}</div>
                <div class="daily-bar-tooltip">
                  <strong>${kk(n.date)}</strong><br />
                  ${Z(n.totalTokens)} ${P(`usage.metrics.tokens`).toLowerCase()}<br />
                  ${Q(n.totalCost)}
                  ${_.length?c`${_.map(e=>c`<div>${e}</div>`)}`:u}
                </div>
              </div>
            `})}
        </div>
      </div>
    </div>
  `}function Yk(e,t){let n=Kk(e),r=t===`tokens`,i=e.totalTokens||1,a={output:Gk(e.output,i),input:Gk(e.input,i),cacheWrite:Gk(e.cacheWrite,i),cacheRead:Gk(e.cacheRead,i)};return c`
    <div class="cost-breakdown cost-breakdown-compact">
      <div class="cost-breakdown-header">
        ${P(r?`usage.breakdown.tokensByType`:`usage.breakdown.costByType`)}
      </div>
      <div class="cost-breakdown-bar">
        <div
          class="cost-segment output"
          style="width: ${(r?a.output:n.output.pct).toFixed(1)}%"
          title="${P(`usage.breakdown.output`)}: ${r?Z(e.output):Q(n.output.cost)}"
        ></div>
        <div
          class="cost-segment input"
          style="width: ${(r?a.input:n.input.pct).toFixed(1)}%"
          title="${P(`usage.breakdown.input`)}: ${r?Z(e.input):Q(n.input.cost)}"
        ></div>
        <div
          class="cost-segment cache-write"
          style="width: ${(r?a.cacheWrite:n.cacheWrite.pct).toFixed(1)}%"
          title="${P(`usage.breakdown.cacheWrite`)}: ${r?Z(e.cacheWrite):Q(n.cacheWrite.cost)}"
        ></div>
        <div
          class="cost-segment cache-read"
          style="width: ${(r?a.cacheRead:n.cacheRead.pct).toFixed(1)}%"
          title="${P(`usage.breakdown.cacheRead`)}: ${r?Z(e.cacheRead):Q(n.cacheRead.cost)}"
        ></div>
      </div>
      <div class="cost-breakdown-legend">
        <span class="legend-item"
          ><span class="legend-dot output"></span>${P(`usage.breakdown.output`)}
          ${r?Z(e.output):Q(n.output.cost)}</span
        >
        <span class="legend-item"
          ><span class="legend-dot input"></span>${P(`usage.breakdown.input`)}
          ${r?Z(e.input):Q(n.input.cost)}</span
        >
        <span class="legend-item"
          ><span class="legend-dot cache-write"></span>${P(`usage.breakdown.cacheWrite`)}
          ${r?Z(e.cacheWrite):Q(n.cacheWrite.cost)}</span
        >
        <span class="legend-item"
          ><span class="legend-dot cache-read"></span>${P(`usage.breakdown.cacheRead`)}
          ${r?Z(e.cacheRead):Q(n.cacheRead.cost)}</span
        >
      </div>
      <div class="cost-breakdown-total">
        ${P(`usage.breakdown.total`)}:
        ${r?Z(e.totalTokens):Q(e.totalCost)}
      </div>
    </div>
  `}function Xk(e,t,n){return c`
    <div class="usage-insight-card">
      <div class="usage-insight-title">${e}</div>
      ${t.length===0?c`<div class="muted">${n}</div>`:c`
            <div class="usage-list">
              ${t.map(e=>c`
                  <div class="usage-list-item">
                    <span>${e.label}</span>
                    <span class="usage-list-value">
                      <span>${e.value}</span>
                      ${e.sub?c`<span class="usage-list-sub">${e.sub}</span>`:u}
                    </span>
                  </div>
                `)}
            </div>
          `}
    </div>
  `}function Zk(e,t,n,r){let i=[`usage-insight-card`,r?.className].filter(Boolean).join(` `),a=[`usage-error-list`,r?.listClassName].filter(Boolean).join(` `);return c`
    <div class=${i}>
      <div class="usage-insight-title">${e}</div>
      ${t.length===0?c`<div class="muted">${n}</div>`:c`
            <div class=${a}>
              ${t.map(e=>c`
                  <div class="usage-error-row">
                    <div class="usage-error-date">${e.label}</div>
                    <div class="usage-error-rate">${e.value}</div>
                    ${e.sub?c`<div class="usage-error-sub">${e.sub}</div>`:u}
                  </div>
                `)}
            </div>
          `}
    </div>
  `}function Qk(e){let t=[`stat`,`usage-summary-card`,e.className,e.tone?`usage-summary-card--${e.tone}`:``].filter(Boolean).join(` `),n=[`stat-value`,`usage-summary-value`,e.tone??``,e.compactValue?`usage-summary-value--compact`:``].filter(Boolean).join(` `);return c`
    <div class=${t}>
      <div class="usage-summary-title">
        ${e.title}
        <span class="usage-summary-hint" title=${e.hint}>?</span>
      </div>
      <div class=${n}>${e.value}</div>
      <div class="usage-summary-sub">${e.sub}</div>
    </div>
  `}function $k(e,t,n,r,i,a,o){if(!e)return u;let s=t.messages.total?Math.round(e.totalTokens/t.messages.total):0,l=t.messages.total?e.totalCost/t.messages.total:0,d=e.input+e.cacheRead,f=d>0?e.cacheRead/d:0,p=d>0?`${(f*100).toFixed(1)}%`:P(`usage.common.emptyValue`),m=n.errorRate*100,h=n.throughputTokensPerMin===void 0?P(`usage.common.emptyValue`):`${Z(Math.round(n.throughputTokensPerMin))} ${P(`usage.overview.tokensPerMinute`)}`,g=n.throughputCostPerMin===void 0?P(`usage.common.emptyValue`):`${Q(n.throughputCostPerMin,4)} ${P(`usage.overview.perMinute`)}`,_=n.durationCount>0?ee(n.avgDurationMs,{spaced:!0})??P(`usage.common.emptyValue`):P(`usage.common.emptyValue`),v=P(`usage.overview.cacheHint`),y=P(`usage.overview.errorHint`),b=P(`usage.overview.throughputHint`),x=P(`usage.overview.avgTokensHint`),S=P(r?`usage.overview.avgCostHintMissing`:`usage.overview.avgCostHint`),C=t.daily.filter(e=>e.messages>0&&e.errors>0).map(e=>{let t=e.errors/e.messages;return{label:Ok(e.date),value:`${(t*100).toFixed(2)}%`,sub:`${e.errors} ${P(`usage.overview.errors`).toLowerCase()} · ${e.messages} ${P(`usage.overview.messagesAbbrev`)} · ${Z(e.tokens)}`,rate:t}}).toSorted((e,t)=>t.rate-e.rate).slice(0,5).map(({rate:e,...t})=>t),w=t.byModel.slice(0,5).map(e=>({label:e.model??P(`usage.common.unknown`),value:Q(e.totals.totalCost),sub:`${Z(e.totals.totalTokens)} · ${e.count} ${P(`usage.overview.messagesAbbrev`)}`})),T=t.byProvider.slice(0,5).map(e=>({label:e.provider??P(`usage.common.unknown`),value:Q(e.totals.totalCost),sub:`${Z(e.totals.totalTokens)} · ${e.count} ${P(`usage.overview.messagesAbbrev`)}`})),E=t.tools.tools.slice(0,6).map(e=>({label:e.name,value:`${e.count}`,sub:P(`usage.overview.calls`)})),te=t.byAgent.slice(0,5).map(e=>({label:e.agentId,value:Q(e.totals.totalCost),sub:Z(e.totals.totalTokens)})),D=t.byChannel.slice(0,5).map(e=>({label:e.channel,value:Q(e.totals.totalCost),sub:Z(e.totals.totalTokens)}));return c`
    <section class="card usage-overview-card">
      <div class="card-title">${P(`usage.overview.title`)}</div>
      <div class="usage-overview-layout">
        <div class="usage-summary-grid">
          ${Qk({title:P(`usage.overview.messages`),hint:P(`usage.overview.messagesHint`),value:t.messages.total,sub:`${t.messages.user} ${P(`usage.overview.user`).toLowerCase()} · ${t.messages.assistant} ${P(`usage.overview.assistant`).toLowerCase()}`,className:`usage-summary-card--hero`})}
          ${Qk({title:P(`usage.overview.throughput`),hint:b,value:h,sub:g,className:`usage-summary-card--hero usage-summary-card--throughput`,compactValue:!0})}
          ${Qk({title:P(`usage.overview.toolCalls`),hint:P(`usage.overview.toolCallsHint`),value:t.tools.totalCalls,sub:`${t.tools.uniqueTools} ${P(`usage.overview.toolsUsed`)}`,className:`usage-summary-card--half`})}
          ${Qk({title:P(`usage.overview.avgTokens`),hint:x,value:Z(s),sub:P(`usage.overview.acrossMessages`,{count:String(t.messages.total||0)}),className:`usage-summary-card--half`})}
          ${Qk({title:P(`usage.overview.cacheHitRate`),hint:v,value:p,sub:`${Z(e.cacheRead)} ${P(`usage.overview.cached`)} · ${Z(d)} ${P(`usage.overview.prompt`)}`,tone:f>.6?`good`:f>.3?`warn`:`bad`,className:`usage-summary-card--medium`})}
          ${Qk({title:P(`usage.overview.errorRate`),hint:y,value:`${m.toFixed(2)}%`,sub:`${t.messages.errors} ${P(`usage.overview.errors`).toLowerCase()} · ${_} ${P(`usage.overview.avgSession`)}`,tone:m>5?`bad`:m>1?`warn`:`good`,className:`usage-summary-card--medium`})}
          ${Qk({title:P(`usage.overview.avgCost`),hint:S,value:Q(l,4),sub:`${Q(e.totalCost)} ${P(`usage.breakdown.total`).toLowerCase()}`,className:`usage-summary-card--compact`})}
          ${Qk({title:P(`usage.overview.sessions`),hint:P(`usage.overview.sessionsHint`),value:a,sub:P(`usage.overview.sessionsInRange`,{count:String(o)}),className:`usage-summary-card--compact`})}
          ${Qk({title:P(`usage.overview.errors`),hint:P(`usage.overview.errorsHint`),value:t.messages.errors,sub:`${t.messages.toolResults} ${P(`usage.overview.toolResults`)}`,className:`usage-summary-card--compact`})}
        </div>
        <div class="usage-insights-grid">
          ${Xk(P(`usage.overview.topModels`),w,P(`usage.overview.noModelData`))}
          ${Xk(P(`usage.overview.topProviders`),T,P(`usage.overview.noProviderData`))}
          ${Xk(P(`usage.overview.topTools`),E,P(`usage.overview.noToolCalls`))}
          ${Xk(P(`usage.overview.topAgents`),te,P(`usage.overview.noAgentData`))}
          ${Xk(P(`usage.overview.topChannels`),D,P(`usage.overview.noChannelData`))}
          ${Zk(P(`usage.overview.peakErrorDays`),C,P(`usage.overview.noErrorData`))}
          ${Zk(P(`usage.overview.peakErrorHours`),i,P(`usage.overview.noErrorData`),{className:`usage-insight-card--wide`,listClassName:`usage-error-list--hours`})}
        </div>
      </div>
    </section>
  `}function eA(e,t,n,r,i,a,o,s,l,d,f,p,m,h,g){let _=e=>m.includes(e),v=e=>{let t=e.label||e.key;return t.startsWith(`agent:`)&&t.includes(`?token=`)?t.slice(0,t.indexOf(`?token=`)):t},y=async e=>{let t=v(e);try{await navigator.clipboard.writeText(t)}catch{}},b=e=>{let t=[];return _(`channel`)&&e.channel&&t.push(`channel:${e.channel}`),_(`agent`)&&e.agentId&&t.push(`agent:${e.agentId}`),_(`provider`)&&(e.modelProvider||e.providerOverride)&&t.push(`provider:${e.modelProvider??e.providerOverride}`),_(`model`)&&e.model&&t.push(`model:${e.model}`),_(`messages`)&&e.usage?.messageCounts&&t.push(`msgs:${e.usage.messageCounts.total}`),_(`tools`)&&e.usage?.toolUsage&&t.push(`tools:${e.usage.toolUsage.totalCalls}`),_(`errors`)&&e.usage?.messageCounts&&t.push(`errors:${e.usage.messageCounts.errors}`),_(`duration`)&&e.usage?.durationMs&&t.push(`dur:${ee(e.usage.durationMs,{spaced:!0})??`—`}`),t},x=e=>{let t=e.usage;if(!t)return 0;if(n.length>0&&t.dailyBreakdown&&t.dailyBreakdown.length>0){let e=t.dailyBreakdown.filter(e=>n.includes(e.date));return r?e.reduce((e,t)=>e+t.tokens,0):e.reduce((e,t)=>e+t.cost,0)}return r?t.totalTokens??0:t.totalCost??0},S=[...e].toSorted((e,t)=>{switch(i){case`recent`:return(t.updatedAt??0)-(e.updatedAt??0);case`messages`:return(t.usage?.messageCounts?.total??0)-(e.usage?.messageCounts?.total??0);case`errors`:return(t.usage?.messageCounts?.errors??0)-(e.usage?.messageCounts?.errors??0);case`cost`:return x(t)-x(e);default:return x(t)-x(e)}}),C=a===`asc`?S.toReversed():S,w=C.reduce((e,t)=>e+x(t),0),T=C.length?w/C.length:0,E=C.reduce((e,t)=>e+(t.usage?.messageCounts?.errors??0),0),te=(e,t)=>{let n=x(e),i=v(e),a=b(e);return c`
      <div
        class="session-bar-row ${t?`selected`:``}"
        @click=${t=>l(e.key,t.shiftKey)}
        title="${e.key}"
      >
        <div class="session-bar-label">
          <div class="session-bar-title">${i}</div>
          ${a.length>0?c`<div class="session-bar-meta">${a.join(` · `)}</div>`:u}
        </div>
        <div class="session-bar-actions">
          <button
            class="btn btn--sm btn--ghost"
            title=${P(`usage.sessions.copyName`)}
            @click=${t=>{t.stopPropagation(),y(e)}}
          >
            ${P(`usage.sessions.copy`)}
          </button>
          <div class="session-bar-value">
            ${r?Z(n):Q(n)}
          </div>
        </div>
      </div>
    `},D=new Set(t),O=C.filter(e=>D.has(e.key)),k=O.length,A=new Map(C.map(e=>[e.key,e])),ne=o.map(e=>A.get(e)).filter(e=>!!e);return c`
    <div class="card sessions-card">
      <div class="sessions-card-header">
        <div class="card-title">${P(`usage.sessions.title`)}</div>
        <div class="sessions-card-count">
          ${P(`usage.sessions.shown`,{count:String(e.length)})}
          ${h===e.length?``:` · ${P(`usage.sessions.total`,{count:String(h)})}`}
        </div>
      </div>
      <div class="sessions-card-meta">
        <div class="sessions-card-stats">
          <span>
            ${r?Z(T):Q(T)}
            ${P(`usage.sessions.avg`)}
          </span>
          <span>${E} ${P(`usage.overview.errors`).toLowerCase()}</span>
        </div>
        <div class="chart-toggle small">
          <button
            class="btn btn--sm toggle-btn ${s===`all`?`active`:``}"
            @click=${()=>p(`all`)}
          >
            ${P(`usage.sessions.all`)}
          </button>
          <button
            class="btn btn--sm toggle-btn ${s===`recent`?`active`:``}"
            @click=${()=>p(`recent`)}
          >
            ${P(`usage.sessions.recent`)}
          </button>
        </div>
        <label class="sessions-sort">
          <span>${P(`usage.sessions.sort`)}</span>
          <select
            @change=${e=>d(e.target.value)}
          >
            <option value="cost" ?selected=${i===`cost`}>
              ${P(`usage.metrics.cost`)}
            </option>
            <option value="errors" ?selected=${i===`errors`}>
              ${P(`usage.overview.errors`)}
            </option>
            <option value="messages" ?selected=${i===`messages`}>
              ${P(`usage.overview.messages`)}
            </option>
            <option value="recent" ?selected=${i===`recent`}>
              ${P(`usage.sessions.recentShort`)}
            </option>
            <option value="tokens" ?selected=${i===`tokens`}>
              ${P(`usage.metrics.tokens`)}
            </option>
          </select>
        </label>
        <button
          class="btn btn--sm"
          @click=${()=>f(a===`desc`?`asc`:`desc`)}
          title=${P(a===`desc`?`usage.sessions.descending`:`usage.sessions.ascending`)}
        >
          ${a===`desc`?`↓`:`↑`}
        </button>
        ${k>0?c`
              <button class="btn btn--sm" @click=${g}>
                ${P(`usage.sessions.clearSelection`)}
              </button>
            `:u}
      </div>
      ${s===`recent`?ne.length===0?c` <div class="usage-empty-block">${P(`usage.sessions.noRecent`)}</div> `:c`
              <div class="session-bars session-bars--recent">
                ${ne.map(e=>te(e,D.has(e.key)))}
              </div>
            `:e.length===0?c` <div class="usage-empty-block">${P(`usage.sessions.noneInRange`)}</div> `:c`
              <div class="session-bars">
                ${C.slice(0,50).map(e=>te(e,D.has(e.key)))}
                ${e.length>50?c`
                      <div class="usage-more-sessions">
                        ${P(`usage.sessions.more`,{count:String(e.length-50)})}
                      </div>
                    `:u}
              </div>
            `}
      ${k>1?c`
            <div class="sessions-selected-group">
              <div class="sessions-card-count">
                ${P(`usage.sessions.selected`,{count:String(k)})}
              </div>
              <div class="session-bars session-bars--selected">
                ${O.map(e=>te(e,!0))}
              </div>
            </div>
          `:u}
    </div>
  `}var tA=.75,nA=.06,rA=5,iA=12,aA=.7;function oA(e,t){return!t||t<=0?0:e/t*100}function sA(e){return e<0xe8d4a51000?e*1e3:e}function cA(e,t,n){let r=Math.min(t,n),i=Math.max(t,n);return e.filter(e=>{if(e.timestamp<=0)return!0;let t=sA(e.timestamp);return t>=r&&t<=i})}function lA(e,t,n){let r=t||e.usage;if(!r)return c` <div class="usage-empty-block">${P(`usage.details.noUsageData`)}</div> `;let i=e=>e?new Date(e).toLocaleString():P(`usage.common.emptyValue`),a=[];e.channel&&a.push(`channel:${e.channel}`),e.agentId&&a.push(`agent:${e.agentId}`),(e.modelProvider||e.providerOverride)&&a.push(`provider:${e.modelProvider??e.providerOverride}`),e.model&&a.push(`model:${e.model}`);let o=r.toolUsage?.tools.slice(0,6)??[],s,l,d;if(n){let e=new Map;for(let t of n){let{tools:n}=fk(t.content);for(let[t]of n)e.set(t,(e.get(t)||0)+1)}d=o.map(t=>({label:t.name,value:`${e.get(t.name)??0}`,sub:P(`usage.overview.calls`)})),s=[...e.values()].reduce((e,t)=>e+t,0),l=e.size}else d=o.map(e=>({label:e.name,value:`${e.count}`,sub:P(`usage.overview.calls`)})),s=r.toolUsage?.totalCalls??0,l=r.toolUsage?.uniqueTools??0;let f=r.modelUsage?.slice(0,6).map(e=>({label:e.model??P(`usage.common.unknown`),value:Q(e.totals.totalCost),sub:Z(e.totals.totalTokens)}))??[];return c`
    ${a.length>0?c`<div class="usage-badges">
          ${a.map(e=>c`<span class="usage-badge">${e}</span>`)}
        </div>`:u}
    <div class="session-summary-grid">
      <div class="stat session-summary-card">
        <div class="session-summary-title">${P(`usage.overview.messages`)}</div>
        <div class="stat-value session-summary-value">${r.messageCounts?.total??0}</div>
        <div class="session-summary-meta">
          ${r.messageCounts?.user??0} ${P(`usage.overview.user`).toLowerCase()} ·
          ${r.messageCounts?.assistant??0} ${P(`usage.overview.assistant`).toLowerCase()}
        </div>
      </div>
      <div class="stat session-summary-card">
        <div class="session-summary-title">${P(`usage.overview.toolCalls`)}</div>
        <div class="stat-value session-summary-value">${s}</div>
        <div class="session-summary-meta">${l} ${P(`usage.overview.toolsUsed`)}</div>
      </div>
      <div class="stat session-summary-card">
        <div class="session-summary-title">${P(`usage.overview.errors`)}</div>
        <div class="stat-value session-summary-value">${r.messageCounts?.errors??0}</div>
        <div class="session-summary-meta">
          ${r.messageCounts?.toolResults??0} ${P(`usage.overview.toolResults`)}
        </div>
      </div>
      <div class="stat session-summary-card">
        <div class="session-summary-title">${P(`usage.details.duration`)}</div>
        <div class="stat-value session-summary-value">
          ${ee(r.durationMs,{spaced:!0})??P(`usage.common.emptyValue`)}
        </div>
        <div class="session-summary-meta">
          ${i(r.firstActivity)} → ${i(r.lastActivity)}
        </div>
      </div>
    </div>
    <div class="usage-insights-grid usage-insights-grid--tight">
      ${Xk(P(`usage.overview.topTools`),d,P(`usage.overview.noToolCalls`))}
      ${Xk(P(`usage.details.modelMix`),f,P(`usage.overview.noModelData`))}
    </div>
  `}function uA(e,t,n,r){let i=Math.min(n,r),a=Math.max(n,r),o=t.filter(e=>e.timestamp>=i&&e.timestamp<=a);if(o.length===0)return;let s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0;for(let e of o)s+=e.totalTokens||0,c+=e.cost||0,d+=e.input||0,f+=e.output||0,p+=e.cacheRead||0,m+=e.cacheWrite||0,e.output>0&&u++,e.input>0&&l++;return{...e,totalTokens:s,totalCost:c,input:d,output:f,cacheRead:p,cacheWrite:m,durationMs:o[o.length-1].timestamp-o[0].timestamp,firstActivity:o[0].timestamp,lastActivity:o[o.length-1].timestamp,messageCounts:{total:o.length,user:l,assistant:u,toolCalls:0,toolResults:0,errors:0}}}function dA(e,t,n,r,i,a,o,s,l,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,ee,E){let te=e.label||e.key,D=te.length>50?te.slice(0,50)+`…`:te,O=e.usage,k=s!==null&&l!==null,A=s!==null&&l!==null&&t?.points&&O?uA(O,t.points,s,l):void 0,ne=A?{totalTokens:A.totalTokens,totalCost:A.totalCost}:{totalTokens:O?.totalTokens??0,totalCost:O?.totalCost??0},j=A?P(`usage.details.filtered`):``;return c`
    <div class="card session-detail-panel">
      <div class="session-detail-header">
        <div class="session-detail-header-left">
          <div class="session-detail-title">
            ${D}
            ${j?c`<span class="session-detail-indicator">${j}</span>`:u}
          </div>
        </div>
        <div class="session-detail-stats">
          ${O?c`
                <span
                  ><strong>${Z(ne.totalTokens)}</strong> ${P(`usage.metrics.tokens`).toLowerCase()}${j}</span
                >
                <span><strong>${Q(ne.totalCost)}</strong>${j}</span>
              `:u}
        </div>
        <button
          class="btn btn--sm btn--ghost"
          @click=${E}
          title=${P(`usage.details.close`)}
          aria-label=${P(`usage.details.close`)}
        >
          ×
        </button>
      </div>
      <div class="session-detail-content">
        ${lA(e,A,s!=null&&l!=null&&h?cA(h,s,l):void 0)}
        <div class="session-detail-row">
          ${fA(t,n,r,i,a,o,f,p,m,s,l,d)}
        </div>
        <div class="session-detail-bottom">
          ${mA(h,g,_,v,y,b,x,S,C,w,k?s:null,k?l:null)}
          ${pA(e.contextWeight,O,T,ee)}
        </div>
      </div>
    </div>
  `}function fA(e,t,n,r,i,a,o,s,l,f,p,m){if(t)return c`
      <div class="session-timeseries-compact">
        <div class="usage-empty-block">${P(`usage.loading.badge`)}</div>
      </div>
    `;if(!e||e.points.length<2)return c`
      <div class="session-timeseries-compact">
        <div class="usage-empty-block">${P(`usage.details.noTimeline`)}</div>
      </div>
    `;let h=e.points;if(o||s||l&&l.length>0){let t=o?new Date(o+`T00:00:00`).getTime():0,n=s?new Date(s+`T23:59:59`).getTime():1/0;h=e.points.filter(e=>{if(e.timestamp<t||e.timestamp>n)return!1;if(l&&l.length>0){let t=new Date(e.timestamp),n=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}`;return l.includes(n)}return!0})}if(h.length<2)return c`
      <div class="session-timeseries-compact">
        <div class="usage-empty-block">${P(`usage.details.noDataInRange`)}</div>
      </div>
    `;let g=0,_=0,v=0,y=0,b=0,x=0;h=h.map(e=>(g+=e.totalTokens,_+=e.cost,v+=e.output,y+=e.input,b+=e.cacheRead,x+=e.cacheWrite,{...e,cumulativeTokens:g,cumulativeCost:_}));let S=f!=null&&p!=null,C=S?Math.min(f,p):0,w=S?Math.max(f,p):1/0,T=0,ee=h.length;if(S){T=h.findIndex(e=>e.timestamp>=C),T===-1&&(T=h.length);let e=h.findIndex(e=>e.timestamp>w);ee=e===-1?h.length:e}let E=S?h.slice(T,ee):h,te=0,D=0,O=0,k=0;for(let e of E)te+=e.output,D+=e.input,O+=e.cacheRead,k+=e.cacheWrite;let A={top:8,right:4,bottom:14,left:30},ne=400-A.left-A.right,j=100-A.top-A.bottom,re=n===`cumulative`,ie=n===`per-turn`&&i===`by-type`,M=te+D+O+k,ae=h.map(e=>re?e.cumulativeTokens:ie?e.input+e.output+e.cacheRead+e.cacheWrite:e.totalTokens),oe=Math.max(...ae,1),se=ne/h.length,N=Math.min(8,Math.max(1,se*tA)),ce=se-N,le=A.left+T*(N+ce),ue=ee>=h.length?A.left+(h.length-1)*(N+ce)+N:A.left+(ee-1)*(N+ce)+N;return c`
    <div class="session-timeseries-compact">
      <div class="timeseries-header-row">
        <div class="card-title usage-section-title">${P(`usage.details.usageOverTime`)}</div>
        <div class="timeseries-controls">
          ${S?c`
                <div class="chart-toggle small">
                  <button
                    class="btn btn--sm toggle-btn active"
                    @click=${()=>m?.(null,null)}
                  >
                    ${P(`usage.details.reset`)}
                  </button>
                </div>
              `:u}
          <div class="chart-toggle small">
            <button
              class="btn btn--sm toggle-btn ${re?``:`active`}"
              @click=${()=>r(`per-turn`)}
            >
              ${P(`usage.details.perTurn`)}
            </button>
            <button
              class="btn btn--sm toggle-btn ${re?`active`:``}"
              @click=${()=>r(`cumulative`)}
            >
              ${P(`usage.details.cumulative`)}
            </button>
          </div>
          ${re?u:c`
                <div class="chart-toggle small">
                  <button
                    class="btn btn--sm toggle-btn ${i===`total`?`active`:``}"
                    @click=${()=>a(`total`)}
                  >
                    ${P(`usage.daily.total`)}
                  </button>
                  <button
                    class="btn btn--sm toggle-btn ${i===`by-type`?`active`:``}"
                    @click=${()=>a(`by-type`)}
                  >
                    ${P(`usage.daily.byType`)}
                  </button>
                </div>
              `}
        </div>
      </div>
      <div class="timeseries-chart-wrapper">
        <svg viewBox="0 0 ${400} ${118}" class="timeseries-svg">
          <!-- Y axis -->
          <line
            x1="${A.left}"
            y1="${A.top}"
            x2="${A.left}"
            y2="${A.top+j}"
            stroke="var(--border)"
          />
          <!-- X axis -->
          <line
            x1="${A.left}"
            y1="${A.top+j}"
            x2="${400-A.right}"
            y2="${A.top+j}"
            stroke="var(--border)"
          />
          <!-- Y axis labels -->
          <text
            x="${A.left-4}"
            y="${A.top+5}"
            text-anchor="end"
            class="ts-axis-label"
          >
            ${Z(oe)}
          </text>
          <text
            x="${A.left-4}"
            y="${A.top+j}"
            text-anchor="end"
            class="ts-axis-label"
          >
            0
          </text>
          <!-- X axis labels (first and last) -->
          ${h.length>0?d`
            <text x="${A.left}" y="${A.top+j+10}" text-anchor="start" class="ts-axis-label">${new Date(h[0].timestamp).toLocaleTimeString(void 0,{hour:`2-digit`,minute:`2-digit`})}</text>
            <text x="${400-A.right}" y="${A.top+j+10}" text-anchor="end" class="ts-axis-label">${new Date(h[h.length-1].timestamp).toLocaleTimeString(void 0,{hour:`2-digit`,minute:`2-digit`})}</text>
          `:u}
          <!-- Bars -->
          ${h.map((e,t)=>{let n=ae[t],r=A.left+t*(N+ce),i=n/oe*j,a=A.top+j-i,o=[new Date(e.timestamp).toLocaleDateString(void 0,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}),`${Z(n)} ${P(`usage.metrics.tokens`).toLowerCase()}`];ie&&(o.push(`Out ${Z(e.output)}`),o.push(`In ${Z(e.input)}`),o.push(`CW ${Z(e.cacheWrite)}`),o.push(`CR ${Z(e.cacheRead)}`));let s=o.join(` · `),c=S&&(t<T||t>=ee);if(!ie)return d`<rect x="${r}" y="${a}" width="${N}" height="${i}" class="ts-bar${c?` dimmed`:``}" rx="1"><title>${s}</title></rect>`;let l=[{value:e.output,cls:`output`},{value:e.input,cls:`input`},{value:e.cacheWrite,cls:`cache-write`},{value:e.cacheRead,cls:`cache-read`}],f=A.top+j,p=c?` dimmed`:``;return d`
              ${l.map(e=>{if(e.value<=0||n<=0)return u;let t=i*(e.value/n);return f-=t,d`<rect x="${r}" y="${f}" width="${N}" height="${t}" class="ts-bar ${e.cls}${p}" rx="1"><title>${s}</title></rect>`})}
            `})}
          <!-- Selection highlight overlay (always visible between handles) -->
          ${d`
            <rect 
              x="${le}" 
              y="${A.top}" 
              width="${Math.max(1,ue-le)}" 
              height="${j}" 
              fill="var(--accent)" 
              opacity="${nA}" 
              pointer-events="none"
            />
          `}
          <!-- Left cursor line + handle -->
          ${d`
            <line x1="${le}" y1="${A.top}" x2="${le}" y2="${A.top+j}" stroke="var(--accent)" stroke-width="0.8" opacity="0.7" />
            <rect x="${le-rA/2}" y="${A.top+j/2-iA/2}" width="${rA}" height="${iA}" rx="1.5" fill="var(--accent)" class="cursor-handle" />
            <line x1="${le-aA}" y1="${A.top+j/2-iA/5}" x2="${le-aA}" y2="${A.top+j/2+iA/5}" stroke="var(--bg)" stroke-width="0.4" pointer-events="none" />
            <line x1="${le+aA}" y1="${A.top+j/2-iA/5}" x2="${le+aA}" y2="${A.top+j/2+iA/5}" stroke="var(--bg)" stroke-width="0.4" pointer-events="none" />
          `}
          <!-- Right cursor line + handle -->
          ${d`
            <line x1="${ue}" y1="${A.top}" x2="${ue}" y2="${A.top+j}" stroke="var(--accent)" stroke-width="0.8" opacity="0.7" />
            <rect x="${ue-rA/2}" y="${A.top+j/2-iA/2}" width="${rA}" height="${iA}" rx="1.5" fill="var(--accent)" class="cursor-handle" />
            <line x1="${ue-aA}" y1="${A.top+j/2-iA/5}" x2="${ue-aA}" y2="${A.top+j/2+iA/5}" stroke="var(--bg)" stroke-width="0.4" pointer-events="none" />
            <line x1="${ue+aA}" y1="${A.top+j/2-iA/5}" x2="${ue+aA}" y2="${A.top+j/2+iA/5}" stroke="var(--bg)" stroke-width="0.4" pointer-events="none" />
          `}
        </svg>
        <!-- Handle drag zones (only on handles, not full chart) -->
        ${(()=>{let e=`${(le/400*100).toFixed(1)}%`,t=`${(ue/400*100).toFixed(1)}%`,n=e=>t=>{if(!m)return;t.preventDefault(),t.stopPropagation();let n=t.currentTarget.closest(`.timeseries-chart-wrapper`)?.querySelector(`svg`);if(!n)return;let r=n.getBoundingClientRect(),i=r.width,a=A.left/400*i,o=(400-A.right)/400*i-a,s=e=>{let t=Math.max(0,Math.min(1,(e-r.left-a)/o));return Math.min(Math.floor(t*h.length),h.length-1)},c=e===`left`?le:ue,l=r.left+c/400*i,u=t.clientX-l;document.body.style.cursor=`col-resize`;let d=t=>{let n=s(t.clientX-u),r=h[n];if(r)if(e===`left`){let e=p??h[h.length-1].timestamp;m(Math.min(r.timestamp,e),e)}else{let e=f??h[0].timestamp;m(e,Math.max(r.timestamp,e))}},g=()=>{document.body.style.cursor=``,document.removeEventListener(`mousemove`,d),document.removeEventListener(`mouseup`,g)};document.addEventListener(`mousemove`,d),document.addEventListener(`mouseup`,g)};return c`
            <div
              class="chart-handle-zone chart-handle-left"
              style="left: ${e};"
              @mousedown=${n(`left`)}
            ></div>
            <div
              class="chart-handle-zone chart-handle-right"
              style="left: ${t};"
              @mousedown=${n(`right`)}
            ></div>
          `})()}
      </div>
      <div class="timeseries-summary">
        ${S?c`
              <span class="timeseries-summary__range">
                ${P(`usage.details.turnRange`,{start:String(T+1),end:String(ee),total:String(h.length)})}
              </span>
              ·
              ${new Date(C).toLocaleTimeString(void 0,{hour:`2-digit`,minute:`2-digit`})}–${new Date(w).toLocaleTimeString(void 0,{hour:`2-digit`,minute:`2-digit`})}
              ·
              ${Z(te+D+O+k)}
              · ${Q(E.reduce((e,t)=>e+(t.cost||0),0))}
            `:c`${h.length} ${P(`usage.overview.messagesAbbrev`)} · ${Z(g)}
            · ${Q(_)}`}
      </div>
      ${ie?c`
            <div class="timeseries-breakdown">
              <div class="card-title usage-section-title">${P(`usage.breakdown.tokensByType`)}</div>
              <div class="cost-breakdown-bar cost-breakdown-bar--compact">
                <div
                  class="cost-segment output"
                  style="width: ${oA(te,M).toFixed(1)}%"
                ></div>
                <div
                  class="cost-segment input"
                  style="width: ${oA(D,M).toFixed(1)}%"
                ></div>
                <div
                  class="cost-segment cache-write"
                  style="width: ${oA(k,M).toFixed(1)}%"
                ></div>
                <div
                  class="cost-segment cache-read"
                  style="width: ${oA(O,M).toFixed(1)}%"
                ></div>
              </div>
              <div class="cost-breakdown-legend">
                <div class="legend-item" title=${P(`usage.details.assistantOutputTokens`)}>
                  <span class="legend-dot output"></span>${P(`usage.breakdown.output`)}
                  ${Z(te)}
                </div>
                <div class="legend-item" title=${P(`usage.details.userToolInputTokens`)}>
                  <span class="legend-dot input"></span>${P(`usage.breakdown.input`)}
                  ${Z(D)}
                </div>
                <div class="legend-item" title=${P(`usage.details.tokensWrittenToCache`)}>
                  <span class="legend-dot cache-write"></span>${P(`usage.breakdown.cacheWrite`)}
                  ${Z(k)}
                </div>
                <div class="legend-item" title=${P(`usage.details.tokensReadFromCache`)}>
                  <span class="legend-dot cache-read"></span>${P(`usage.breakdown.cacheRead`)}
                  ${Z(O)}
                </div>
              </div>
              <div class="cost-breakdown-total">
                ${P(`usage.breakdown.total`)}: ${Z(M)}
              </div>
            </div>
          `:u}
    </div>
  `}function pA(e,t,n,r){if(!e)return c`
      <div class="context-details-panel">
        <div class="usage-empty-block">${P(`usage.details.noContextData`)}</div>
      </div>
    `;let i=_k(e.systemPrompt.chars),a=_k(e.skills.promptChars),o=_k(e.tools.listChars+e.tools.schemaChars),s=_k(e.injectedWorkspaceFiles.reduce((e,t)=>e+t.injectedChars,0)),l=i+a+o+s,d=``;if(t&&t.totalTokens>0){let e=t.input+t.cacheRead;e>0&&(d=`~${Math.min(l/e*100,100).toFixed(0)}% ${P(`usage.details.ofInput`)}`)}let f=e.skills.entries.toSorted((e,t)=>t.blockChars-e.blockChars),p=e.tools.entries.toSorted((e,t)=>t.summaryChars+t.schemaChars-(e.summaryChars+e.schemaChars)),m=e.injectedWorkspaceFiles.toSorted((e,t)=>t.injectedChars-e.injectedChars),h=n,g=h?f:f.slice(0,4),_=h?p:p.slice(0,4),v=h?m:m.slice(0,4),y=f.length>4||p.length>4||m.length>4;return c`
    <div class="context-details-panel">
      <div class="context-breakdown-header">
        <div class="card-title usage-section-title">
          ${P(`usage.details.systemPromptBreakdown`)}
        </div>
        ${y?c`<button class="btn btn--sm" @click=${r}>
              ${P(h?`usage.details.collapse`:`usage.details.expandAll`)}
            </button>`:u}
      </div>
      <p class="context-weight-desc">${d||P(`usage.details.baseContextPerMessage`)}</p>
      <div class="context-stacked-bar">
        <div
          class="context-segment system"
          style="width: ${oA(i,l).toFixed(1)}%"
          title="${P(`usage.details.system`)}: ~${Z(i)}"
        ></div>
        <div
          class="context-segment skills"
          style="width: ${oA(a,l).toFixed(1)}%"
          title="${P(`usage.details.skills`)}: ~${Z(a)}"
        ></div>
        <div
          class="context-segment tools"
          style="width: ${oA(o,l).toFixed(1)}%"
          title="${P(`usage.details.tools`)}: ~${Z(o)}"
        ></div>
        <div
          class="context-segment files"
          style="width: ${oA(s,l).toFixed(1)}%"
          title="${P(`usage.details.files`)}: ~${Z(s)}"
        ></div>
      </div>
      <div class="context-legend">
        <span class="legend-item"
          ><span class="legend-dot system"></span>${P(`usage.details.systemShort`)}
          ~${Z(i)}</span
        >
        <span class="legend-item"
          ><span class="legend-dot skills"></span>${P(`usage.details.skills`)}
          ~${Z(a)}</span
        >
        <span class="legend-item"
          ><span class="legend-dot tools"></span>${P(`usage.details.tools`)}
          ~${Z(o)}</span
        >
        <span class="legend-item"
          ><span class="legend-dot files"></span>${P(`usage.details.files`)}
          ~${Z(s)}</span
        >
      </div>
      <div class="context-total">
        ${P(`usage.breakdown.total`)}: ~${Z(l)}
      </div>
      <div class="context-breakdown-grid">
        ${f.length>0?(()=>{let e=f.length-g.length;return c`
                <div class="context-breakdown-card">
                  <div class="context-breakdown-title">
                    ${P(`usage.details.skills`)} (${f.length})
                  </div>
                  <div class="context-breakdown-list">
                    ${g.map(e=>c`
                        <div class="context-breakdown-item">
                          <span class="mono">${e.name}</span>
                          <span class="muted">~${Z(_k(e.blockChars))}</span>
                        </div>
                      `)}
                  </div>
                  ${e>0?c`
                        <div class="context-breakdown-more">
                          ${P(`usage.sessions.more`,{count:String(e)})}
                        </div>
                      `:u}
                </div>
              `})():u}
        ${p.length>0?(()=>{let e=p.length-_.length;return c`
                <div class="context-breakdown-card">
                  <div class="context-breakdown-title">
                    ${P(`usage.details.tools`)} (${p.length})
                  </div>
                  <div class="context-breakdown-list">
                    ${_.map(e=>c`
                        <div class="context-breakdown-item">
                          <span class="mono">${e.name}</span>
                          <span class="muted"
                            >~${Z(_k(e.summaryChars+e.schemaChars))}</span
                          >
                        </div>
                      `)}
                  </div>
                  ${e>0?c`
                        <div class="context-breakdown-more">
                          ${P(`usage.sessions.more`,{count:String(e)})}
                        </div>
                      `:u}
                </div>
              `})():u}
        ${m.length>0?(()=>{let e=m.length-v.length;return c`
                <div class="context-breakdown-card">
                  <div class="context-breakdown-title">
                    ${P(`usage.details.files`)} (${m.length})
                  </div>
                  <div class="context-breakdown-list">
                    ${v.map(e=>c`
                        <div class="context-breakdown-item">
                          <span class="mono">${e.name}</span>
                          <span class="muted"
                            >~${Z(_k(e.injectedChars))}</span
                          >
                        </div>
                      `)}
                  </div>
                  ${e>0?c`
                        <div class="context-breakdown-more">
                          ${P(`usage.sessions.more`,{count:String(e)})}
                        </div>
                      `:u}
                </div>
              `})():u}
      </div>
    </div>
  `}function mA(e,t,n,r,i,a,o,s,l,d,f,p){if(t)return c`
      <div class="session-logs-compact">
        <div class="session-logs-header">${P(`usage.details.conversation`)}</div>
        <div class="usage-empty-block">${P(`usage.loading.badge`)}</div>
      </div>
    `;if(!e||e.length===0)return c`
      <div class="session-logs-compact">
        <div class="session-logs-header">${P(`usage.details.conversation`)}</div>
        <div class="usage-empty-block">${P(`usage.details.noMessages`)}</div>
      </div>
    `;let m=i.query.trim().toLowerCase(),h=e.map(e=>{let t=fk(e.content);return{log:e,toolInfo:t,cleanContent:t.cleanContent||e.content}}),g=Array.from(new Set(h.flatMap(e=>e.toolInfo.tools.map(([e])=>e)))).toSorted((e,t)=>e.localeCompare(t)),_=h.filter(e=>{if(f!=null&&p!=null){let t=e.log.timestamp;if(t>0){let e=Math.min(f,p),n=Math.max(f,p),r=sA(t);if(r<e||r>n)return!1}}return!(i.roles.length>0&&!i.roles.includes(e.log.role)||i.hasTools&&e.toolInfo.tools.length===0||i.tools.length>0&&!e.toolInfo.tools.some(([e])=>i.tools.includes(e))||m&&!e.cleanContent.toLowerCase().includes(m))}),v=i.roles.length>0||i.tools.length>0||i.hasTools||m,y=f!=null&&p!=null,b=v||y?`${_.length} ${P(`usage.details.of`)} ${e.length}${y?` (${P(`usage.details.timelineFiltered`)})`:``}`:`${e.length}`,x=new Set(i.roles),S=new Set(i.tools);return c`
    <div class="session-logs-compact">
      <div class="session-logs-header">
        <span>
          ${P(`usage.details.conversation`)}
          <span class="session-logs-header-count">
            (${b} ${P(`usage.overview.messages`).toLowerCase()})
          </span>
        </span>
        <button class="btn btn--sm" @click=${r}>
          ${P(n?`usage.details.collapseAll`:`usage.details.expandAll`)}
        </button>
      </div>
      <div class="usage-filters-inline session-log-filters">
        <select
          multiple
          size="4"
          aria-label="Filter by role"
          @change=${e=>a(Array.from(e.target.selectedOptions).map(e=>e.value))}
        >
          <option value="user" ?selected=${x.has(`user`)}>
            ${P(`usage.overview.user`)}
          </option>
          <option value="assistant" ?selected=${x.has(`assistant`)}>
            ${P(`usage.overview.assistant`)}
          </option>
          <option value="tool" ?selected=${x.has(`tool`)}>
            ${P(`usage.details.tool`)}
          </option>
          <option value="toolResult" ?selected=${x.has(`toolResult`)}>
            ${P(`usage.details.toolResult`)}
          </option>
        </select>
        <select
          multiple
          size="4"
          aria-label="Filter by tool"
          @change=${e=>o(Array.from(e.target.selectedOptions).map(e=>e.value))}
        >
          ${g.map(e=>c`<option value=${e} ?selected=${S.has(e)}>${e}</option>`)}
        </select>
        <label class="usage-filters-inline session-log-has-tools">
          <input
            type="checkbox"
            .checked=${i.hasTools}
            @change=${e=>s(e.target.checked)}
          />
          ${P(`usage.details.hasTools`)}
        </label>
        <input
          type="text"
          placeholder=${P(`usage.details.searchConversation`)}
          aria-label=${P(`usage.details.searchConversation`)}
          .value=${i.query}
          @input=${e=>l(e.target.value)}
        />
        <button class="btn btn--sm" @click=${d}>${P(`usage.filters.clear`)}</button>
      </div>
      <div class="session-logs-list">
        ${_.map(e=>{let{log:t,toolInfo:r,cleanContent:i}=e;return c`
            <div class="session-log-entry ${t.role===`user`?`user`:`assistant`}">
              <div class="session-log-meta">
                <span class="session-log-role">${t.role===`user`?P(`usage.details.you`):t.role===`assistant`?P(`usage.overview.assistant`):P(`usage.details.tool`)}</span>
                <span>${new Date(t.timestamp).toLocaleString()}</span>
                ${t.tokens?c`<span>${Z(t.tokens)}</span>`:u}
              </div>
              <div class="session-log-content">${i}</div>
              ${r.tools.length>0?c`
                    <details class="session-log-tools" ?open=${n}>
                      <summary>${r.summary}</summary>
                      <div class="session-log-tools-list">
                        ${r.tools.map(([e,t])=>c`
                            <span class="session-log-tools-pill">${e} × ${t}</span>
                          `)}
                      </div>
                    </details>
                  `:u}
            </div>
          `})}
        ${_.length===0?c`
              <div class="usage-empty-block usage-empty-block--compact">
                ${P(`usage.details.noMessagesMatch`)}
              </div>
            `:u}
      </div>
    </div>
  `}function hA(){return{input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0}}function gA(e,t){return e.input+=t.input,e.output+=t.output,e.cacheRead+=t.cacheRead,e.cacheWrite+=t.cacheWrite,e.totalTokens+=t.totalTokens,e.totalCost+=t.totalCost,e.inputCost+=t.inputCost??0,e.outputCost+=t.outputCost??0,e.cacheReadCost+=t.cacheReadCost??0,e.cacheWriteCost+=t.cacheWriteCost??0,e.missingCostEntries+=t.missingCostEntries??0,e}function _A(e){return c`
    <section class="card usage-loading-card">
      <div class="usage-loading-header">
        <div class="usage-loading-title-group">
          <div class="card-title usage-section-title">${P(`usage.loading.title`)}</div>
          <span class="usage-loading-badge">
            <span class="usage-loading-spinner" aria-hidden="true"></span>
            ${P(`usage.loading.badge`)}
          </span>
        </div>
        <div class="usage-loading-controls">
          <div class="usage-date-range usage-date-range--loading">
            <input class="usage-date-input" type="date" .value=${e.startDate} disabled />
            <span class="usage-separator">${P(`usage.filters.to`)}</span>
            <input class="usage-date-input" type="date" .value=${e.endDate} disabled />
          </div>
        </div>
      </div>
      <div class="usage-loading-grid">
        <div class="usage-skeleton-block usage-skeleton-block--tall"></div>
        <div class="usage-skeleton-block"></div>
        <div class="usage-skeleton-block"></div>
      </div>
    </section>
  `}function vA(e){return c`
    <section class="card usage-empty-state">
      <div class="usage-empty-state__title">${P(`usage.empty.title`)}</div>
      <div class="card-sub usage-empty-state__subtitle">${P(`usage.empty.subtitle`)}</div>
      <div class="usage-empty-state__features">
        <span class="usage-empty-state__feature">${P(`usage.empty.featureOverview`)}</span>
        <span class="usage-empty-state__feature">${P(`usage.empty.featureSessions`)}</span>
        <span class="usage-empty-state__feature">${P(`usage.empty.featureTimeline`)}</span>
      </div>
      <div class="usage-empty-state__actions">
        <button class="btn primary" @click=${e}>${P(`common.refresh`)}</button>
      </div>
    </section>
  `}function yA(e){let{data:t,filters:n,display:r,detail:i,callbacks:a}=e,o=a.filters,s=a.display,l=a.details;if(t.loading&&!t.totals)return c`<div class="usage-page">${_A(n)}</div>`;let d=r.chartMode===`tokens`,f=n.query.trim().length>0,p=n.queryDraft.trim().length>0,m=[...t.sessions].toSorted((e,t)=>{let n=d?e.usage?.totalTokens??0:e.usage?.totalCost??0;return(d?t.usage?.totalTokens??0:t.usage?.totalCost??0)-n}),h=n.selectedDays.length>0?m.filter(e=>{if(e.usage?.activityDates?.length)return e.usage.activityDates.some(e=>n.selectedDays.includes(e));if(!e.updatedAt)return!1;let t=new Date(e.updatedAt),r=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}`;return n.selectedDays.includes(r)}):m,g=(e,t)=>{if(t.length===0)return!0;let r=e.usage,i=r?.firstActivity??e.updatedAt,a=r?.lastActivity??e.updatedAt;if(!i||!a)return!1;let o=Math.min(i,a),s=Math.max(i,a),c=o;for(;c<=s;){let e=new Date(c),r=xk(e,n.timeZone);if(t.includes(r))return!0;let i=Ck(e,n.timeZone);c=Math.min(i.getTime(),s)+1}return!1},_=dk(n.selectedHours.length>0?h.filter(e=>g(e,n.selectedHours)):h,n.query),v=_.sessions,y=_.warnings,b=zk(n.queryDraft,m,t.aggregates),x=ak(n.query),S=e=>{let t=Vk(e);return x.filter(e=>Vk(e.key??``)===t).map(e=>e.value).filter(Boolean)},C=e=>{let t=new Set;for(let n of e)n&&t.add(n);return Array.from(t)},w=C(m.map(e=>e.agentId)).slice(0,12),T=C(m.map(e=>e.channel)).slice(0,12),ee=C([...m.map(e=>e.modelProvider),...m.map(e=>e.providerOverride),...t.aggregates?.byProvider.map(e=>e.provider)??[]]).slice(0,12),E=C([...m.map(e=>e.model),...t.aggregates?.byModel.map(e=>e.model)??[]]).slice(0,12),te=C(t.aggregates?.tools.tools.map(e=>e.name)??[]).slice(0,12),D=n.selectedSessions.length===1?t.sessions.find(e=>e.key===n.selectedSessions[0])??v.find(e=>e.key===n.selectedSessions[0]):null,O=e=>e.reduce((e,t)=>t.usage?gA(e,t.usage):e,hA()),k=e=>t.costDaily.filter(t=>e.includes(t.date)).reduce((e,t)=>gA(e,t),hA()),A,ne,j=m.length;if(n.selectedSessions.length>0){let e=v.filter(e=>n.selectedSessions.includes(e.key));A=O(e),ne=e.length}else n.selectedDays.length>0&&n.selectedHours.length===0?(A=k(n.selectedDays),ne=v.length):n.selectedHours.length>0||f?(A=O(v),ne=v.length):(A=t.totals,ne=j);let re=n.selectedSessions.length>0?v.filter(e=>n.selectedSessions.includes(e.key)):f||n.selectedHours.length>0?v:n.selectedDays.length>0?h:m,ie=Mk(re,t.aggregates),M=n.selectedSessions.length>0?(()=>{let e=v.filter(e=>n.selectedSessions.includes(e.key)),r=new Set;for(let t of e)for(let e of t.usage?.activityDates??[])r.add(e);return r.size>0?t.costDaily.filter(e=>r.has(e.date)):t.costDaily})():t.costDaily,ae=Nk(re,A,ie),oe=!t.loading&&!t.totals&&t.sessions.length===0,se=(A?.missingCostEntries??0)>0||(A?A.totalTokens>0&&A.totalCost===0&&A.input+A.output+A.cacheRead+A.cacheWrite>0:!1),N=[{label:P(`usage.presets.today`),days:1},{label:P(`usage.presets.last7d`),days:7},{label:P(`usage.presets.last30d`),days:30}],ce=e=>{let t=new Date,n=new Date;n.setDate(n.getDate()-(e-1)),o.onStartDateChange(Ek(n)),o.onEndDateChange(Ek(t))},le=(e,t,r)=>{if(r.length===0)return u;let i=S(e),a=new Set(i.map(e=>Vk(e))),s=r.length>0&&r.every(e=>a.has(Vk(e))),l=i.length;return c`
      <details
        class="usage-filter-select"
        @toggle=${e=>{let t=e.currentTarget;if(!t.open)return;let n=e=>{e.composedPath().includes(t)||(t.open=!1,window.removeEventListener(`click`,n,!0))};window.addEventListener(`click`,n,!0)}}
      >
        <summary>
          <span>${t}</span>
          ${l>0?c`<span class="usage-filter-badge">${l}</span>`:c` <span class="usage-filter-badge">${P(`usage.filters.all`)}</span> `}
        </summary>
        <div class="usage-filter-popover">
          <div class="usage-filter-actions">
            <button
              class="btn btn--sm"
              @click=${t=>{t.preventDefault(),t.stopPropagation(),o.onQueryDraftChange(Wk(n.queryDraft,e,r))}}
              ?disabled=${s}
            >
              ${P(`usage.filters.selectAll`)}
            </button>
            <button
              class="btn btn--sm"
              @click=${t=>{t.preventDefault(),t.stopPropagation(),o.onQueryDraftChange(Wk(n.queryDraft,e,[]))}}
              ?disabled=${l===0}
            >
              ${P(`usage.filters.clear`)}
            </button>
          </div>
          <div class="usage-filter-options">
            ${r.map(t=>c`
                <label class="usage-filter-option">
                  <input
                    type="checkbox"
                    .checked=${a.has(Vk(t))}
                    @change=${r=>{let i=r.target,a=`${e}:${t}`;o.onQueryDraftChange(i.checked?Hk(n.queryDraft,a):Uk(n.queryDraft,a))}}
                  />
                  <span>${t}</span>
                </label>
              `)}
          </div>
        </div>
      </details>
    `},ue=Ek(new Date);return c`
    <div class="usage-page">
      <section class="usage-page-header">
        <div class="usage-page-title">${P(`tabs.usage`)}</div>
        <div class="usage-page-subtitle">${P(`usage.page.subtitle`)}</div>
      </section>

      <section class="card usage-header ${r.headerPinned?`pinned`:``}">
        <div class="usage-header-row">
          <div class="usage-header-title">
            <div class="card-title usage-section-title">${P(`usage.filters.title`)}</div>
            ${t.loading?c`<span class="usage-refresh-indicator">${P(`usage.loading.badge`)}</span>`:u}
            ${oe?c`<span class="usage-query-hint">${P(`usage.empty.hint`)}</span>`:u}
          </div>
          <div class="usage-header-metrics">
            ${A?c`
                  <span class="usage-metric-badge">
                    <strong>${Z(A.totalTokens)}</strong>
                    ${P(`usage.metrics.tokens`)}
                  </span>
                  <span class="usage-metric-badge">
                    <strong>${Q(A.totalCost)}</strong>
                    ${P(`usage.metrics.cost`)}
                  </span>
                  <span class="usage-metric-badge">
                    <strong>${ne}</strong>
                    ${P(ne===1?`usage.metrics.session`:`usage.metrics.sessions`)}
                  </span>
                `:u}
            <button
              class="btn btn--sm usage-pin-btn ${r.headerPinned?`active`:``}"
              title=${r.headerPinned?P(`usage.filters.unpin`):P(`usage.filters.pin`)}
              @click=${o.onToggleHeaderPinned}
            >
              ${r.headerPinned?P(`usage.filters.pinned`):P(`usage.filters.pin`)}
            </button>
            <details
              class="usage-export-menu"
              @toggle=${e=>{let t=e.currentTarget;if(!t.open)return;let n=e=>{e.composedPath().includes(t)||(t.open=!1,window.removeEventListener(`click`,n,!0))};window.addEventListener(`click`,n,!0)}}
            >
              <summary class="btn btn--sm">${P(`usage.export.label`)} ▾</summary>
              <div class="usage-export-popover">
                <div class="usage-export-list">
                  <button
                    class="usage-export-item"
                    @click=${()=>Pk(`kova-usage-sessions-${ue}.csv`,Lk(v),`text/csv`)}
                    ?disabled=${v.length===0}
                  >
                    ${P(`usage.export.sessionsCsv`)}
                  </button>
                  <button
                    class="usage-export-item"
                    @click=${()=>Pk(`kova-usage-daily-${ue}.csv`,Rk(M),`text/csv`)}
                    ?disabled=${M.length===0}
                  >
                    ${P(`usage.export.dailyCsv`)}
                  </button>
                  <button
                    class="usage-export-item"
                    @click=${()=>Pk(`kova-usage-${ue}.json`,JSON.stringify({totals:A,sessions:v,daily:M,aggregates:ie},null,2),`application/json`)}
                    ?disabled=${v.length===0&&M.length===0}
                  >
                    ${P(`usage.export.json`)}
                  </button>
                </div>
              </div>
            </details>
          </div>
        </div>

        <div class="usage-header-row">
          <div class="usage-controls">
            ${qk(n.selectedDays,n.selectedHours,n.selectedSessions,t.sessions,o.onClearDays,o.onClearHours,o.onClearSessions,o.onClearFilters)}
            <div class="usage-presets">
              ${N.map(e=>c`
                  <button class="btn btn--sm" @click=${()=>ce(e.days)}>
                    ${e.label}
                  </button>
                `)}
            </div>
            <div class="usage-date-range">
              <input
                class="usage-date-input"
                type="date"
                .value=${n.startDate}
                title=${P(`usage.filters.startDate`)}
                aria-label=${P(`usage.filters.startDate`)}
                @change=${e=>o.onStartDateChange(e.target.value)}
              />
              <span class="usage-separator">${P(`usage.filters.to`)}</span>
              <input
                class="usage-date-input"
                type="date"
                .value=${n.endDate}
                title=${P(`usage.filters.endDate`)}
                aria-label=${P(`usage.filters.endDate`)}
                @change=${e=>o.onEndDateChange(e.target.value)}
              />
            </div>
            <select
              class="usage-select"
              title=${P(`usage.filters.timeZone`)}
              aria-label=${P(`usage.filters.timeZone`)}
              .value=${n.timeZone}
              @change=${e=>o.onTimeZoneChange(e.target.value)}
            >
              <option value="local">${P(`usage.filters.timeZoneLocal`)}</option>
              <option value="utc">${P(`usage.filters.timeZoneUtc`)}</option>
            </select>
            <div class="chart-toggle">
              <button
                class="btn btn--sm toggle-btn ${d?`active`:``}"
                @click=${()=>s.onChartModeChange(`tokens`)}
              >
                ${P(`usage.metrics.tokens`)}
              </button>
              <button
                class="btn btn--sm toggle-btn ${d?``:`active`}"
                @click=${()=>s.onChartModeChange(`cost`)}
              >
                ${P(`usage.metrics.cost`)}
              </button>
            </div>
            <button
              class="btn btn--sm primary"
              @click=${o.onRefresh}
              ?disabled=${t.loading}
            >
              ${P(`common.refresh`)}
            </button>
          </div>
        </div>

        <div class="usage-query-section">
          <div class="usage-query-bar">
            <input
              class="usage-query-input"
              type="text"
              .value=${n.queryDraft}
              placeholder=${P(`usage.query.placeholder`)}
              @input=${e=>o.onQueryDraftChange(e.target.value)}
              @keydown=${e=>{e.key===`Enter`&&(e.preventDefault(),o.onApplyQuery())}}
            />
            <div class="usage-query-actions">
              <button
                class="btn btn--sm"
                @click=${o.onApplyQuery}
                ?disabled=${t.loading||!p&&!f}
              >
                ${P(`usage.query.apply`)}
              </button>
              ${p||f?c`
                    <button class="btn btn--sm" @click=${o.onClearQuery}>
                      ${P(`usage.filters.clear`)}
                    </button>
                  `:u}
              <span class="usage-query-hint">
                ${f?P(`usage.query.matching`,{shown:String(v.length),total:String(j)}):P(`usage.query.inRange`,{total:String(j)})}
              </span>
            </div>
          </div>
          <div class="usage-filter-row">
            ${le(`agent`,P(`usage.filters.agent`),w)}
            ${le(`channel`,P(`usage.filters.channel`),T)}
            ${le(`provider`,P(`usage.filters.provider`),ee)}
            ${le(`model`,P(`usage.filters.model`),E)}
            ${le(`tool`,P(`usage.filters.tool`),te)}
            <span class="usage-query-hint">${P(`usage.query.tip`)}</span>
          </div>
          ${x.length>0?c`
                <div class="usage-query-chips">
                  ${x.map(e=>{let t=e.raw;return c`
                      <span class="usage-query-chip">
                        ${t}
                        <button
                          title=${P(`usage.filters.remove`)}
                          @click=${()=>o.onQueryDraftChange(Uk(n.queryDraft,t))}
                        >
                          ×
                        </button>
                      </span>
                    `})}
                </div>
              `:u}
          ${b.length>0?c`
                <div class="usage-query-suggestions">
                  ${b.map(e=>c`
                      <button
                        class="usage-query-suggestion"
                        @click=${()=>o.onQueryDraftChange(Bk(n.queryDraft,e.value))}
                      >
                        ${e.label}
                      </button>
                    `)}
                </div>
              `:u}
          ${y.length>0?c`
                <div class="callout warning usage-callout usage-callout--tight">
                  ${y.join(` · `)}
                </div>
              `:u}
        </div>

        ${t.error?c`<div class="callout danger usage-callout">${t.error}</div>`:u}
        ${t.sessionsLimitReached?c`
              <div class="callout warning usage-callout">${P(`usage.sessions.limitReached`)}</div>
            `:u}
      </section>

      ${oe?vA(o.onRefresh):c`
            ${$k(A,ie,ae,se,bk(re,n.timeZone),ne,j)}
            ${Tk(re,n.timeZone,n.selectedHours,o.onSelectHour)}

            <div class="usage-grid">
              <div class="usage-grid-column">
                <div class="card usage-left-card">
                  ${Jk(M,n.selectedDays,r.chartMode,r.dailyChartMode,s.onDailyChartModeChange,o.onSelectDay)}
                  ${A?Yk(A,r.chartMode):u}
                </div>
                ${eA(v,n.selectedSessions,n.selectedDays,d,r.sessionSort,r.sessionSortDir,r.recentSessions,r.sessionsTab,l.onSelectSession,s.onSessionSortChange,s.onSessionSortDirChange,s.onSessionsTabChange,r.visibleColumns,j,o.onClearSessions)}
              </div>
              ${D?c`<div class="usage-grid-column">
                    ${dA(D,i.timeSeries,i.timeSeriesLoading,i.timeSeriesMode,l.onTimeSeriesModeChange,i.timeSeriesBreakdownMode,l.onTimeSeriesBreakdownChange,i.timeSeriesCursorStart,i.timeSeriesCursorEnd,l.onTimeSeriesCursorRangeChange,n.startDate,n.endDate,n.selectedDays,i.sessionLogs,i.sessionLogsLoading,i.sessionLogsExpanded,l.onToggleSessionLogsExpanded,i.logFilters,l.onLogFilterRolesChange,l.onLogFilterToolsChange,l.onLogFilterHasToolsChange,l.onLogFilterQueryChange,l.onLogFilterClear,r.contextExpanded,l.onToggleContextExpanded,o.onClearSessions)}
                  </div>`:u}
            </div>
          `}
    </div>
  `}var bA=null,xA=e=>{bA&&clearTimeout(bA),bA=window.setTimeout(()=>void Cc(e),400)};function SA(e){return e.tab===`usage`?yA({data:{loading:e.usageLoading,error:e.usageError,sessions:e.usageResult?.sessions??[],sessionsLimitReached:(e.usageResult?.sessions?.length??0)>=1e3,totals:e.usageResult?.totals??null,aggregates:e.usageResult?.aggregates??null,costDaily:e.usageCostSummary?.daily??[]},filters:{startDate:e.usageStartDate,endDate:e.usageEndDate,selectedSessions:e.usageSelectedSessions,selectedDays:e.usageSelectedDays,selectedHours:e.usageSelectedHours,query:e.usageQuery,queryDraft:e.usageQueryDraft,timeZone:e.usageTimeZone},display:{chartMode:e.usageChartMode,dailyChartMode:e.usageDailyChartMode,sessionSort:e.usageSessionSort,sessionSortDir:e.usageSessionSortDir,recentSessions:e.usageRecentSessions,sessionsTab:e.usageSessionsTab,visibleColumns:e.usageVisibleColumns,contextExpanded:e.usageContextExpanded,headerPinned:e.usageHeaderPinned},detail:{timeSeriesMode:e.usageTimeSeriesMode,timeSeriesBreakdownMode:e.usageTimeSeriesBreakdownMode,timeSeries:e.usageTimeSeries,timeSeriesLoading:e.usageTimeSeriesLoading,timeSeriesCursorStart:e.usageTimeSeriesCursorStart,timeSeriesCursorEnd:e.usageTimeSeriesCursorEnd,sessionLogs:e.usageSessionLogs,sessionLogsLoading:e.usageSessionLogsLoading,sessionLogsExpanded:e.usageSessionLogsExpanded,logFilters:{roles:e.usageLogFilterRoles,tools:e.usageLogFilterTools,hasTools:e.usageLogFilterHasTools,query:e.usageLogFilterQuery}},callbacks:{filters:{onStartDateChange:t=>{e.usageStartDate=t,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],xA(e)},onEndDateChange:t=>{e.usageEndDate=t,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],xA(e)},onRefresh:()=>Cc(e),onTimeZoneChange:t=>{e.usageTimeZone=t,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],Cc(e)},onToggleHeaderPinned:()=>{e.usageHeaderPinned=!e.usageHeaderPinned},onSelectHour:(t,n)=>{if(n&&e.usageSelectedHours.length>0){let n=Array.from({length:24},(e,t)=>t),r=e.usageSelectedHours[e.usageSelectedHours.length-1],i=n.indexOf(r),a=n.indexOf(t);if(i!==-1&&a!==-1){let[t,r]=i<a?[i,a]:[a,i],o=n.slice(t,r+1);e.usageSelectedHours=[...new Set([...e.usageSelectedHours,...o])]}}else e.usageSelectedHours.includes(t)?e.usageSelectedHours=e.usageSelectedHours.filter(e=>e!==t):e.usageSelectedHours=[...e.usageSelectedHours,t]},onQueryDraftChange:t=>{e.usageQueryDraft=t,e.usageQueryDebounceTimer&&window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=window.setTimeout(()=>{e.usageQuery=e.usageQueryDraft,e.usageQueryDebounceTimer=null},250)},onApplyQuery:()=>{e.usageQueryDebounceTimer&&=(window.clearTimeout(e.usageQueryDebounceTimer),null),e.usageQuery=e.usageQueryDraft},onClearQuery:()=>{e.usageQueryDebounceTimer&&=(window.clearTimeout(e.usageQueryDebounceTimer),null),e.usageQueryDraft=``,e.usageQuery=``},onSelectDay:(t,n)=>{if(n&&e.usageSelectedDays.length>0){let n=(e.usageCostSummary?.daily??[]).map(e=>e.date),r=e.usageSelectedDays[e.usageSelectedDays.length-1],i=n.indexOf(r),a=n.indexOf(t);if(i!==-1&&a!==-1){let[t,r]=i<a?[i,a]:[a,i],o=n.slice(t,r+1);e.usageSelectedDays=[...new Set([...e.usageSelectedDays,...o])]}}else e.usageSelectedDays.includes(t)?e.usageSelectedDays=e.usageSelectedDays.filter(e=>e!==t):e.usageSelectedDays=[t]},onClearDays:()=>{e.usageSelectedDays=[]},onClearHours:()=>{e.usageSelectedHours=[]},onClearSessions:()=>{e.usageSelectedSessions=[],e.usageTimeSeries=null,e.usageSessionLogs=null},onClearFilters:()=>{e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],e.usageTimeSeries=null,e.usageSessionLogs=null}},display:{onChartModeChange:t=>{e.usageChartMode=t},onDailyChartModeChange:t=>{e.usageDailyChartMode=t},onSessionSortChange:t=>{e.usageSessionSort=t},onSessionSortDirChange:t=>{e.usageSessionSortDir=t},onSessionsTabChange:t=>{e.usageSessionsTab=t},onToggleColumn:t=>{e.usageVisibleColumns.includes(t)?e.usageVisibleColumns=e.usageVisibleColumns.filter(e=>e!==t):e.usageVisibleColumns=[...e.usageVisibleColumns,t]}},details:{onToggleContextExpanded:()=>{e.usageContextExpanded=!e.usageContextExpanded},onToggleSessionLogsExpanded:()=>{e.usageSessionLogsExpanded=!e.usageSessionLogsExpanded},onLogFilterRolesChange:t=>{e.usageLogFilterRoles=t},onLogFilterToolsChange:t=>{e.usageLogFilterTools=t},onLogFilterHasToolsChange:t=>{e.usageLogFilterHasTools=t},onLogFilterQueryChange:t=>{e.usageLogFilterQuery=t},onLogFilterClear:()=>{e.usageLogFilterRoles=[],e.usageLogFilterTools=[],e.usageLogFilterHasTools=!1,e.usageLogFilterQuery=``},onSelectSession:(t,n)=>{if(e.usageTimeSeries=null,e.usageSessionLogs=null,e.usageRecentSessions=[t,...e.usageRecentSessions.filter(e=>e!==t)].slice(0,8),n&&e.usageSelectedSessions.length>0){let n=e.usageChartMode===`tokens`,r=[...e.usageResult?.sessions??[]].toSorted((e,t)=>{let r=n?e.usage?.totalTokens??0:e.usage?.totalCost??0;return(n?t.usage?.totalTokens??0:t.usage?.totalCost??0)-r}).map(e=>e.key),i=e.usageSelectedSessions[e.usageSelectedSessions.length-1],a=r.indexOf(i),o=r.indexOf(t);if(a!==-1&&o!==-1){let[t,n]=a<o?[a,o]:[o,a],i=r.slice(t,n+1);e.usageSelectedSessions=[...new Set([...e.usageSelectedSessions,...i])]}}else e.usageSelectedSessions.length===1&&e.usageSelectedSessions[0]===t?e.usageSelectedSessions=[]:e.usageSelectedSessions=[t];e.usageTimeSeriesCursorStart=null,e.usageTimeSeriesCursorEnd=null,e.usageSelectedSessions.length===1&&(wc(e,e.usageSelectedSessions[0]),Tc(e,e.usageSelectedSessions[0]))},onTimeSeriesModeChange:t=>{e.usageTimeSeriesMode=t},onTimeSeriesBreakdownChange:t=>{e.usageTimeSeriesBreakdownMode=t},onTimeSeriesCursorRangeChange:(t,n)=>{e.usageTimeSeriesCursorStart=t,e.usageTimeSeriesCursorEnd=n}}}}):u}function CA(e){return e.sessionsResult?.sessions?.find(t=>t.key===e.sessionKey)}function wA(e){let t=e.chatModelCatalog??[],n=e.chatModelOverrides[e.sessionKey];if(n)return ya(n,t);if(n===null)return``;let r=CA(e);return Ca(r?.model,r?.modelProvider,t)}function TA(e){return Ca(e.sessionsResult?.defaults?.model,e.sessionsResult?.defaults?.modelProvider,e.chatModelCatalog??[])}function EA(e,t,n){let r=new Set,i=[],a=(e,t)=>{let n=e.trim();if(!n)return;let a=n.toLowerCase();r.has(a)||(r.add(a),i.push({value:n,label:t??n}))};for(let t of e){let e=Ta(t);a(e.value,e.label)}return t&&a(t),n&&a(n),i}function DA(e){let t=wA(e),n=TA(e),r=wa(n);return{currentOverride:t,defaultModel:n,defaultDisplay:r,defaultLabel:n?`Default (${r})`:`Default model`,options:EA(e.chatModelCatalog??[],t,n)}}function OA(e){let t=e.hello?.snapshot;return t?.sessionDefaults?.mainSessionKey?.trim()||t?.sessionDefaults?.mainKey?.trim()||`main`}function kA(e,t){e.sessionKey=t,e.chatMessage=``,e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:t,lastActiveSessionKey:t})}function AA(e,t,n){let r=jc(t,e.basePath),i=e.tab===t,a=n?.collapsed??e.settings.navCollapsed;return c`
    <a
      href=${r}
      class="nav-item nav-item--tab-${t} ${i?`nav-item--active`:``}"
      @click=${n=>{if(!(n.defaultPrevented||n.button!==0||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey)){if(n.preventDefault(),t===`chat`){let t=OA(e);e.sessionKey!==t&&(kA(e,t),e.loadAssistantIdentity())}e.setTab(t)}}}
      title=${Fc(t)}
    >
      <span class="nav-item__icon" aria-hidden="true">${H[Pc(t)]}</span>
      ${a?u:c`<span class="nav-item__text">${Fc(t)}</span>`}
    </a>
  `}function jA(e){return c`
    <span style="position: relative; display: inline-flex; align-items: center;">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
      ${e>0?c`<span
            style="
              position: absolute;
              top: -5px;
              right: -6px;
              background: var(--color-accent, #6366f1);
              color: #fff;
              border-radius: var(--radius-full);
              font-size: 9px;
              line-height: 1;
              padding: 1px 3px;
              pointer-events: none;
            "
            >${e}</span
          >`:``}
    </span>
  `}function MA(e){let t=GA(e,e.sessionKey,e.sessionsResult),n=LA(e);return c`
    <div class="chat-controls__session-row">
      <label class="field chat-controls__session">
        <select
          .value=${e.sessionKey}
          ?disabled=${!e.connected||t.length===0}
          @change=${t=>{let n=t.target.value;e.sessionKey!==n&&FA(e,n)}}
        >
          ${Fl(t,e=>e.id,e=>c`<optgroup label=${e.label}>
                ${Fl(e.options,e=>e.key,e=>c`<option value=${e.key} title=${e.title}>${e.label}</option>`)}
              </optgroup>`)}
        </select>
      </label>
      ${n}
    </div>
  `}function NA(e){let t=e.sessionsHideCron??!0,n=t?KA(e.sessionKey,e.sessionsResult):0,r=e.onboarding,i=e.onboarding,a=e.onboarding?!1:e.settings.chatShowThinking,o=e.onboarding?!0:e.settings.chatShowToolCalls,s=e.onboarding?!0:e.settings.chatFocusMode,l=c`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,u=c`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
      <path d="M21 3v5h-5"></path>
    </svg>
  `,d=c`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M4 7V4h3"></path>
      <path d="M20 7V4h-3"></path>
      <path d="M4 17v3h3"></path>
      <path d="M20 17v3h-3"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  `;return c`
    <div class="chat-controls">
      <button
        class="btn btn--sm btn--icon"
        ?disabled=${e.chatLoading||!e.connected}
        @click=${async()=>{let t=e;t.chatManualRefreshInFlight=!0,t.chatNewMessagesBelow=!1,await t.updateComplete,t.resetToolStream();try{await gO(e,{scheduleScroll:!1}),t.scrollToBottom({smooth:!0})}finally{requestAnimationFrame(()=>{t.chatManualRefreshInFlight=!1,t.chatNewMessagesBelow=!1})}}}
        title=${P(`chat.refreshTitle`)}
      >
        ${u}
      </button>
      <span class="chat-controls__separator">|</span>
      <button
        class="btn btn--sm btn--icon ${a?`active`:``}"
        ?disabled=${r}
        @click=${()=>{r||e.applySettings({...e.settings,chatShowThinking:!e.settings.chatShowThinking})}}
        aria-pressed=${a}
        title=${P(r?`chat.onboardingDisabled`:`chat.thinkingToggle`)}
      >
        ${H.brain}
      </button>
      <button
        class="btn btn--sm btn--icon ${o?`active`:``}"
        ?disabled=${r}
        @click=${()=>{r||e.applySettings({...e.settings,chatShowToolCalls:!e.settings.chatShowToolCalls})}}
        aria-pressed=${o}
        title=${P(r?`chat.onboardingDisabled`:`chat.toolCallsToggle`)}
      >
        ${l}
      </button>
      <button
        class="btn btn--sm btn--icon ${s?`active`:``}"
        ?disabled=${i}
        @click=${()=>{i||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})}}
        aria-pressed=${s}
        title=${P(i?`chat.onboardingDisabled`:`chat.focusToggle`)}
      >
        ${d}
      </button>
      <button
        class="btn btn--sm btn--icon ${t?`active`:``}"
        @click=${()=>{e.sessionsHideCron=!t}}
        aria-pressed=${t}
        title=${t?n>0?P(`chat.showCronSessionsHidden`,{count:String(n)}):P(`chat.showCronSessions`):P(`chat.hideCronSessions`)}
      >
        ${jA(n)}
      </button>
    </div>
  `}function PA(e){let t=GA(e,e.sessionKey,e.sessionsResult),n=e.onboarding,r=e.onboarding,i=e.onboarding?!1:e.settings.chatShowThinking,a=e.onboarding?!0:e.settings.chatShowToolCalls,o=e.onboarding?!0:e.settings.chatFocusMode,s=c`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,l=c`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M4 7V4h3"></path>
      <path d="M20 7V4h-3"></path>
      <path d="M4 17v3h3"></path>
      <path d="M20 17v3h-3"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  `;return c`
    <div class="chat-mobile-controls-wrapper">
      <button
        class="btn btn--sm btn--icon chat-controls-mobile-toggle"
        @click=${e=>{e.stopPropagation();let t=e.currentTarget.nextElementSibling;if(t&&t.classList.toggle(`open`)){let e=()=>{t.classList.remove(`open`),document.removeEventListener(`click`,e)};setTimeout(()=>document.addEventListener(`click`,e,{once:!0}),0)}}}
        title="Chat settings"
        aria-label="Chat settings"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path
            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
          ></path>
        </svg>
      </button>
      <div
        class="chat-controls-dropdown"
        @click=${e=>{e.stopPropagation()}}
      >
        <div class="chat-controls">
          <label class="field chat-controls__session">
            <select
              .value=${e.sessionKey}
              @change=${t=>{let n=t.target.value;FA(e,n)}}
            >
              ${t.map(e=>c`
                  <optgroup label=${e.label}>
                    ${e.options.map(e=>c`
                        <option value=${e.key} title=${e.title}>${e.label}</option>
                      `)}
                  </optgroup>
                `)}
            </select>
          </label>
          <div class="chat-controls__thinking">
            <button
              class="btn btn--sm btn--icon ${i?`active`:``}"
              ?disabled=${n}
              @click=${()=>{n||e.applySettings({...e.settings,chatShowThinking:!e.settings.chatShowThinking})}}
              aria-pressed=${i}
              title=${P(`chat.thinkingToggle`)}
            >
              ${H.brain}
            </button>
            <button
              class="btn btn--sm btn--icon ${a?`active`:``}"
              ?disabled=${n}
              @click=${()=>{n||e.applySettings({...e.settings,chatShowToolCalls:!e.settings.chatShowToolCalls})}}
              aria-pressed=${a}
              title=${P(`chat.toolCallsToggle`)}
            >
              ${s}
            </button>
            <button
              class="btn btn--sm btn--icon ${o?`active`:``}"
              ?disabled=${r}
              @click=${()=>{r||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})}}
              aria-pressed=${o}
              title=${P(`chat.focusToggle`)}
            >
              ${l}
            </button>
          </div>
        </div>
      </div>
    </div>
  `}function FA(e,t){e.sessionKey=t,e.chatMessage=``,e.chatStream=null,e.chatQueue=[],e.chatStreamStartedAt=null,e.chatRunId=null,e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:t,lastActiveSessionKey:t}),e.loadAssistantIdentity(),jE(e,t,!0),KD(e),IA(e)}async function IA(e){await Ps(e,{activeMinutes:0,limit:0,includeGlobal:!0,includeUnknown:!0})}function LA(e){let{currentOverride:t,defaultLabel:n,options:r}=DA(e),i=e.chatLoading||e.chatSending||!!e.chatRunId||e.chatStream!==null;return c`
    <label class="field chat-controls__session chat-controls__model">
      <select
        data-chat-model-select="true"
        aria-label="Chat model"
        ?disabled=${!e.connected||i||e.chatModelsLoading&&r.length===0||!e.client}
        @change=${async t=>{await RA(e,t.target.value.trim())}}
      >
        <option value="" ?selected=${t===``}>${n}</option>
        ${Fl(r,e=>e.value,e=>c`<option value=${e.value} ?selected=${e.value===t}>
              ${e.label}
            </option>`)}
      </select>
    </label>
  `}async function RA(e,t){if(!e.client||!e.connected||wA(e)===t)return;let n=e.sessionKey,r=e.chatModelOverrides[n];e.lastError=null,e.chatModelOverrides={...e.chatModelOverrides,[n]:va(t)};try{await e.client.request(`sessions.patch`,{key:n,model:t||null}),Aa(e),await IA(e)}catch(t){e.chatModelOverrides={...e.chatModelOverrides,[n]:r},e.lastError=`Failed to set model: ${String(t)}`}}var zA={bluebubbles:`iMessage`,telegram:`Telegram`,discord:`Discord`,signal:`Signal`,slack:`Slack`,whatsapp:`WhatsApp`,matrix:`Matrix`,email:`Email`,sms:`SMS`},BA=Object.keys(zA);function VA(e){return e.charAt(0).toUpperCase()+e.slice(1)}function HA(e){let t=e.toLowerCase();if(e===`main`||e===`agent:main:main`)return{prefix:``,fallbackName:`Main Session`};if(e.includes(`:subagent:`))return{prefix:`Subagent:`,fallbackName:`Subagent:`};if(t.startsWith(`cron:`)||e.includes(`:cron:`))return{prefix:`Cron:`,fallbackName:`Cron Job:`};let n=e.match(/^agent:[^:]+:([^:]+):direct:(.+)$/);if(n){let e=n[1],t=n[2];return{prefix:``,fallbackName:`${zA[e]??VA(e)} · ${t}`}}let r=e.match(/^agent:[^:]+:([^:]+):group:(.+)$/);if(r){let e=r[1];return{prefix:``,fallbackName:`${zA[e]??VA(e)} Group`}}for(let t of BA)if(e===t||e.startsWith(`${t}:`))return{prefix:``,fallbackName:`${zA[t]} Session`};return{prefix:``,fallbackName:e}}function UA(e,t){let n=t?.label?.trim()||``,r=t?.displayName?.trim()||``,{prefix:i,fallbackName:a}=HA(e),o=e=>i?RegExp(`^${i.replace(/[.*+?^${}()|[\\]\\]/g,`\\$&`)}\\s*`,`i`).test(e)?e:`${i} ${e}`:e;return n&&n!==e?o(n):r&&r!==e?o(r):a}function WA(e){let t=e.trim().toLowerCase();if(!t)return!1;if(t.startsWith(`cron:`))return!0;if(!t.startsWith(`agent:`))return!1;let n=t.split(`:`).filter(Boolean);return n.length<3?!1:n.slice(2).join(`:`).startsWith(`cron:`)}function GA(e,t,n){let r=n?.sessions??[],i=e.sessionsHideCron??!0,a=new Map;for(let e of r)a.set(e.key,e);let o=new Set,s=new Map,c=(e,t)=>{let n=s.get(e);if(n)return n;let r={id:e,label:t,options:[]};return s.set(e,r),r},l=t=>{if(!t||o.has(t))return;o.add(t);let n=a.get(t),r=A(t),i=r?c(`agent:${r.agentId.toLowerCase()}`,qA(e,r.agentId)):c(`other`,`Other Sessions`),s=r?.rest?.trim()||t,l=JA(t,n,r?.rest);i.options.push({key:t,label:l,scopeLabel:s,title:t})};for(let e of r)e.key!==t&&(e.kind===`global`||e.kind===`unknown`)||i&&e.key!==t&&WA(e.key)||l(e.key);l(t);for(let e of s.values()){let t=new Map;for(let n of e.options)t.set(n.label,(t.get(n.label)??0)+1);for(let n of e.options)(t.get(n.label)??0)>1&&n.scopeLabel!==n.label&&(n.label=`${n.label} · ${n.scopeLabel}`)}let u=Array.from(s.values()).flatMap(e=>e.options.map(t=>({groupLabel:e.label,option:t}))),d=new Map(u.map(({option:e})=>[e,e.label])),f=()=>{let e=new Map;for(let{option:t}of u){let n=d.get(t)??t.label;e.set(n,(e.get(n)??0)+1)}return e},p=(e,t)=>{let n=t.trim();return n?e===n||e.endsWith(` · ${n}`)||e.endsWith(` / ${n}`):!1},m=f();for(let{groupLabel:e,option:t}of u){let n=d.get(t)??t.label;if((m.get(n)??0)<=1)continue;let r=`${e} / `;n.startsWith(r)||d.set(t,`${e} / ${n}`)}let h=f();for(let{option:e}of u){let t=d.get(e)??e.label;(h.get(t)??0)<=1||p(t,e.scopeLabel)||d.set(e,`${t} · ${e.scopeLabel}`)}let g=f();for(let{option:e}of u){let t=d.get(e)??e.label;(g.get(t)??0)<=1||d.set(e,`${t} · ${e.key}`)}for(let{option:e}of u)e.label=d.get(e)??e.label;return Array.from(s.values())}function KA(e,t){return t?.sessions?t.sessions.filter(t=>WA(t.key)&&t.key!==e).length:0}function qA(e,t){let n=t.trim().toLowerCase(),r=(e.agentsList?.agents??[]).find(e=>e.id.trim().toLowerCase()===n),i=r?.identity?.name?.trim()||r?.name?.trim()||``;return i&&i!==t?`${i} (${t})`:t}function JA(e,t,n){let r=n?.trim()||e;if(!t)return r;let i=t.label?.trim()||``,a=t.displayName?.trim()||``;return i&&i!==e||a&&a!==e?UA(e,t):r}var YA=[{id:`system`,label:`System`,short:`SYS`},{id:`light`,label:`Light`,short:`LIGHT`},{id:`dark`,label:`Dark`,short:`DARK`}];function XA(e){let t=e=>e===`system`?H.monitor:e===`light`?H.sun:H.moon,n=(t,n)=>{t!==e.themeMode&&e.setThemeMode(t,{element:n.currentTarget})};return c`
    <div class="topbar-theme-mode" role="group" aria-label="Color mode">
      ${YA.map(r=>c`
          <button
            type="button"
            class="topbar-theme-mode__btn ${r.id===e.themeMode?`topbar-theme-mode__btn--active`:``}"
            title=${r.label}
            aria-label="Color mode: ${r.label}"
            aria-pressed=${r.id===e.themeMode}
            @click=${e=>n(r.id,e)}
          >
            ${t(r.id)}
          </button>
        `)}
    </div>
  `}var ZA=`kova-daily-briefing`,QA=`Mumbai`,$A=`08:00`,ej={news:!0,weather:!0,markets:!0,tasks:!1,quote:!1};function tj(e,t){let n=e?.channels?.[t];return!n||typeof n!=`object`||Array.isArray(n)?null:n}function nj(e){if(!e)return null;let t=e.match(/\[briefing:([^\]]+)\]/i);if(!t)return null;let n=new URLSearchParams(t[1].replaceAll(`;`,`&`)),r=n.get(`channel`),i=n.get(`time`),a=n.get(`sections`),o=ij(),s=!1;if(a){for(let e of a.split(`,`)){let t=e.trim().toLowerCase();t in o&&(o[t]=!0,s=!0)}if(s){for(let e of Object.keys(o))o[e]=!1;for(let e of a.split(`,`)){let t=e.trim().toLowerCase();t in o&&(o[t]=!0)}}}return{channel:r===`telegram`||r===`whatsapp`?r:``,time:fj(i)?i:void 0,sections:s?o:void 0}}function rj(e){let t=e?.toLowerCase()??``,n={news:t.includes(`top 5 news`)||t.includes(`top news`),weather:t.includes(`weather`),markets:t.includes(`nifty50`)||t.includes(`sensex`)||t.includes(`bitcoin`),tasks:t.includes(`heartbeat.md`)||t.includes(`pending tasks`),quote:t.includes(`motivational quote`)||t.includes(`quote of the day`)};return Object.values(n).some(Boolean)?n:ij()}function ij(){return{...ej}}function aj(){return{enabled:!0,time:$A,channel:``,sections:ij()}}function oj(e){return e.find(e=>e.name===`kova-daily-briefing`)??null}function sj(){return Intl.DateTimeFormat().resolvedOptions().timeZone?.trim()||`UTC`}function cj(e,t=null){let n=[];return(tj(e,`telegram`)?.running===!0||(e?.channelAccounts?.telegram??[]).some(e=>e.running===!0))&&n.push(`telegram`),(tj(e,`whatsapp`)?.connected===!0||t===!0||(e?.channelAccounts?.whatsapp??[]).some(e=>e.connected===!0))&&n.push(`whatsapp`),n}function lj(e){return e===`whatsapp`?`WhatsApp`:e===`telegram`?`Telegram`:`channel`}function uj(e,t){let n=aj();if(n.channel=t[0]??``,!e)return n;let r=nj(e.description),i=r?.channel??(e.delivery?.channel===`telegram`||e.delivery?.channel===`whatsapp`?e.delivery.channel:``);return{enabled:e.enabled,time:r?.time??(e.schedule.kind===`cron`?dj(e.schedule.expr):null)??`08:00`,channel:t.includes(i)?i:t[0]??``,sections:r?.sections??(e.payload.kind===`agentTurn`?rj(e.payload.message):ij())}}function dj(e){let t=e.trim().split(/\s+/);if(t.length<5)return null;let[n,r,i,a,o]=t;if(i!==`*`||a!==`*`||o!==`*`)return null;let s=Number.parseInt(n,10),c=Number.parseInt(r,10);return!Number.isInteger(s)||!Number.isInteger(c)||c<0||c>23||s<0||s>59?null:`${String(c).padStart(2,`0`)}:${String(s).padStart(2,`0`)}`}function fj(e){return typeof e==`string`&&/^\d{2}:\d{2}$/.test(e)}function pj(e){if(!fj(e))return`0 8 * * *`;let[t,n]=e.split(`:`),r=Number.parseInt(t,10),i=Number.parseInt(n,10);return!Number.isInteger(r)||!Number.isInteger(i)?`0 8 * * *`:`${i} ${r} * * *`}function mj(e,t){let n=Object.entries(e.sections).filter(([,e])=>e).map(([e])=>e).join(`,`);return`Daily morning briefing to ${lj(e.channel)}. [briefing:channel=${e.channel};time=${e.time};tz=${t};sections=${n};city=${QA}]`}function hj(e,t){let n=[];return e.sections.news&&n.push(`1. Top News: Find today's top 5 news headlines relevant to the user's interests and summarize each in one line.`),e.sections.weather&&n.push(`2. Weather: Give today's weather forecast for ${QA}. Include temperature and conditions in one concise line.`),e.sections.markets&&n.push(`3. Markets: Give today's opening prices for Nifty50, Sensex, and Bitcoin in one line each.`),e.sections.tasks&&n.push(`4. Tasks Reminder: Check HEARTBEAT.md and list any pending tasks.`),e.sections.quote&&n.push(`5. Quote of the Day: Give one short motivational quote for today.`),[`Prepare a daily briefing message for ${lj(e.channel)} delivery.`,`The user's local timezone is ${t}, and the user is based in ${QA}.`,`Start with "☀️ Good morning! Here's your Kova briefing for [date]" and end with "— Sent by your Kova team".`,`Use section headers with emojis and keep the message concise, readable, and phone-friendly.`,`Return only the final briefing message text with no extra commentary.`,`Include only these sections:`,...n].join(`
`)}var gj=`openclaw-canvas-auth-sw.js`,_j=`openclaw-canvas-auth:set-token`,vj=`/__openclaw__/canvas/`,yj=1500;function bj(e){return e.replace(/^kova-/,``).split(`-`).filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `)}function xj(e){let t=new Set,n=[{id:`main`,name:`Main`,role:`Kova Core Agent`},...Ti.map(e=>({id:e.id,name:e.name,role:e.role}))];for(let e of n)t.add(e.id);for(let r of e?.agents??[])!r.id.startsWith(`kova-`)||t.has(r.id)||(n.push({id:r.id,name:r.name?.trim()||bj(r.id),role:`Custom Kova employee`}),t.add(r.id));return n}function Sj(e){let t=e.trim();if(!t)return null;try{let e=new URL(t,window.location.href);return e.protocol=e.protocol===`wss:`?`https:`:e.protocol===`ws:`?`http:`:e.protocol,e.pathname=`/`,e.search=``,e.hash=``,e.toString().replace(/\/$/,``)}catch{return null}}function Cj(e){let t=e.hello?.canvasHostUrl?.trim();if(t)try{return new URL(t,window.location.href).toString().replace(/\/$/,``)}catch{}return Sj(e.settings.gatewayUrl)}function wj(e){return e.hello?.auth?.sharedToken?.trim()||e.settings.token.trim()||e.password?.trim()||(e.hello?.auth?.deviceToken?.trim()??``)}function Tj(e){let t=new URL(e.baseUrl,window.location.href);return t.pathname=`${t.pathname.replace(/\/+$/,``)}${vj}`,t.search=``,t.hash=``,e.agentId?.trim()&&t.searchParams.set(`agent`,e.agentId.trim()),e.refreshKey?.trim()&&t.searchParams.set(`_ui_refresh`,e.refreshKey.trim()),e.token?.trim()&&t.searchParams.set(`token`,e.token.trim()),t.toString()}function Ej(e){let t=kc(e);return t?`${t}/${gj}`:`/${gj}`}async function Dj(e){if(typeof window>`u`||!(`serviceWorker`in navigator))return!1;try{let t=await navigator.serviceWorker.register(Ej(e.basePath),{scope:`/`}),n=await navigator.serviceWorker.ready,r={type:_j,token:e.token.trim()},i=[t.active,n.active,navigator.serviceWorker.controller,t.waiting,n.waiting,t.installing,n.installing].filter((e,t,n)=>!!e&&n.indexOf(e)===t);for(let e of i)if(await Oj(e,r))return!0;return!1}catch{return!1}}async function Oj(e,t){if(typeof MessageChannel>`u`)try{return e.postMessage(t),!0}catch{return!1}return await new Promise(n=>{let r=new MessageChannel,i=window.setTimeout(()=>n(!1),yj);r.port1.onmessage=()=>{clearTimeout(i),n(!0)};try{e.postMessage(t,[r.port2])}catch{clearTimeout(i),n(!1)}})}async function kj(e){try{let t=new Headers,n=e.token.trim();n&&t.set(`Authorization`,`Bearer ${n}`);let r=await fetch(e.url,{method:`HEAD`,headers:t,cache:`no-store`});return r.ok?{ok:!0}:{ok:!1,status:r.status}}catch{return{ok:!1,status:null}}}var Aj=[`telegram`,`whatsapp`],jj={telegram:`main`,whatsapp:`main`},Mj=new Map(Ti.map(e=>[e.id,e]));function Nj(e){return e===`telegram`||e===`whatsapp`?e:null}function Pj(e){return typeof e==`string`&&e.trim()?e.trim():`main`}function Fj(e){let t=e.replace(/^kova-/,``).trim();return t?t.split(`-`).filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `):e}function Ij(e){if(!e||typeof e!=`object`||Array.isArray(e))return!1;let t=e;return!(t.type!=null&&t.type!==`route`||!Nj(t.match?.channel)||typeof t.match?.accountId==`string`&&t.match.accountId.trim()||t.match?.peer||t.match?.guildId||t.match?.teamId||Array.isArray(t.match?.roles)&&t.match.roles.length>0)}function Lj(e){let t=Array.isArray(e?.agents)?e.agents:[],n=new Map(t.map(e=>[e.id,typeof e.name==`string`?e.name.trim():``])),r=Ti.map(e=>({id:e.id,name:n.get(e.id)||e.name,role:e.role,isCustom:!1})),i=t.filter(e=>typeof e.id==`string`&&e.id.startsWith(`kova-`)).filter(e=>!Mj.has(e.id)).map(e=>({id:e.id,name:typeof e.name==`string`&&e.name.trim()||Fj(e.id),role:`Custom Kova employee`,isCustom:!0})).toSorted((e,t)=>e.name.localeCompare(t.name));return[...r,...i]}function Rj(e){let t=e?.config,n=t&&typeof t==`object`?t.bindings:null;return Array.isArray(n)?n:[]}function zj(e){let t={...jj},n=new Set;for(let r of Rj(e)){if(!Ij(r))continue;let e=r.match?.channel;!e||n.has(e)||(t[e]=Pj(r.agentId),n.add(e))}return t}function Bj(e,t){let n=Re(e?.config??{}),r=Rj(e).filter(e=>!Ij(e)),i=Aj.flatMap(e=>{let n=Pj(t[e]);return n===`main`?[]:[{type:`route`,agentId:n,match:{channel:e}}]});return r.length>0||i.length>0?n.bindings=[...r,...i]:delete n.bindings,ze(n)}function Vj(e,t){let n=e?.channels?.[t];return!n||typeof n!=`object`||Array.isArray(n)?null:n}function Hj(e,t,n){return n===`telegram`?Vj(e,`telegram`)?.running===!0||(e?.channelAccounts?.telegram??[]).some(e=>e.running===!0):Vj(e,`whatsapp`)?.connected===!0||t===!0||(e?.channelAccounts?.whatsapp??[]).some(e=>e.connected===!0)}function Uj(e){return e===`telegram`?`Telegram`:`WhatsApp`}var Wj=class extends m{constructor(...e){super(...e),this.tab=`overview`}createRenderRoot(){return this}render(){return c`
      <div class="dashboard-header">
        <div class="dashboard-header__breadcrumb">
          <span
            class="dashboard-header__breadcrumb-link"
            @click=${()=>this.dispatchEvent(new CustomEvent(`navigate`,{detail:`overview`,bubbles:!0,composed:!0}))}
          >
            ${na}
          </span>
          <span class="dashboard-header__breadcrumb-sep">›</span>
          <span class="dashboard-header__breadcrumb-current">${Fc(this.tab)}</span>
        </div>
        <div class="dashboard-header__actions">
          <slot></slot>
        </div>
      </div>
    `}};Y([O()],Wj.prototype,`tab`,void 0),Wj=Y([E(`dashboard-header`)],Wj);var Gj=[`👩‍💼`,`👨‍💼`,`🧑‍💻`,`👩‍🔬`,`👨‍🏫`,`🧑‍🎨`,`👩‍⚕️`,`👨‍🍳`,`🧑‍🚀`,`👩‍⚖️`,`🤖`,`🦊`,`🐺`,`🦁`,`🐯`,`🦅`,`🌟`,`⚡`,`🔥`,`💎`],Kj=[{id:1,label:`Identity`},{id:2,label:`Personality`},{id:3,label:`Review`}];function qj(e){return e.name.trim().length>0&&e.role.trim().length>0}function Jj(e){return c`
    <div style="display: grid; gap: 16px;">
      <div style="display: grid; gap: 12px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
        <label class="field">
          <span>Name</span>
          <input
            .value=${e.value.name}
            @input=${t=>e.onChange({name:t.target.value})}
            placeholder="Alex"
            autocomplete="off"
          />
        </label>
        <label class="field">
          <span>Role / Title</span>
          <input
            .value=${e.value.role}
            @input=${t=>e.onChange({role:t.target.value})}
            placeholder="Research Lead"
            autocomplete="off"
          />
        </label>
      </div>

      <div class="field">
        <span>Emoji</span>
        <div
          style="display: grid; grid-template-columns: repeat(auto-fit, minmax(48px, 1fr)); gap: 8px;"
        >
          ${Gj.map(t=>c`
              <button
                type="button"
                class="btn btn--sm ${e.value.emoji===t?`primary`:``}"
                style="padding: 10px 0; font-size: 20px;"
                title=${`Select ${t}`}
                @click=${()=>e.onChange({emoji:t})}
              >
                ${t}
              </button>
            `)}
        </div>
      </div>

      <label class="field">
        <span>Autonomy</span>
        <select
          .value=${e.value.autonomy}
          @change=${t=>e.onChange({autonomy:t.target.value})}
        >
          <option value="Supervised">Supervised</option>
          <option value="Act + Notify">Act + Notify</option>
          <option value="Autonomous">Autonomous</option>
        </select>
      </label>
    </div>
  `}function Yj(e){return c`
    <div style="display: grid; gap: 16px;">
      <label class="field">
        <span>How should this employee communicate?</span>
        <textarea
          rows="4"
          .value=${e.value.personality}
          @input=${t=>e.onChange({personality:t.target.value})}
          placeholder="Calm, concise, and direct with clear next steps."
        ></textarea>
      </label>

      <label class="field">
        <span>What is this employee's main focus?</span>
        <textarea
          rows="4"
          .value=${e.value.focus}
          @input=${t=>e.onChange({focus:t.target.value})}
          placeholder="Owns customer research, synthesizes findings, and flags product risks early."
        ></textarea>
      </label>

      <label class="field">
        <span>Any specific instructions?</span>
        <textarea
          rows="4"
          .value=${e.value.instructions}
          @input=${t=>e.onChange({instructions:t.target.value})}
          placeholder="Escalate anything that could affect launch quality or customer trust."
        ></textarea>
      </label>
    </div>
  `}function Xj(e){return c`
    <div style="display: grid; gap: 16px;">
      <div class="card" style="border: 1px solid var(--border); background: var(--surface-elevated);">
        <div style="display: flex; align-items: flex-start; gap: 16px;">
          <div
            style="width: 64px; height: 64px; border-radius: 18px; display: grid; place-items: center; font-size: 34px; background: var(--surface); border: 1px solid var(--border);"
          >
            ${e.value.emoji}
          </div>
          <div style="display: grid; gap: 8px; min-width: 0;">
            <div>
              <div class="card-title" style="font-size: 20px;">${e.value.name||`New employee`}</div>
              <div class="card-sub">${e.value.role||`Role coming next`}</div>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <span class="chip">${e.value.autonomy}</span>
              <span class="chip">Model: openrouter/auto</span>
            </div>
          </div>
        </div>
      </div>

      <div style="display: grid; gap: 12px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
        <div class="card" style="border: 1px solid var(--border);">
          <div class="card-title" style="font-size: 14px;">Communication</div>
          <div class="card-sub">${e.value.personality||`No communication guidance added yet.`}</div>
        </div>
        <div class="card" style="border: 1px solid var(--border);">
          <div class="card-title" style="font-size: 14px;">Focus</div>
          <div class="card-sub">${e.value.focus||`No focus statement added yet.`}</div>
        </div>
      </div>

      ${e.value.instructions.trim()?c`<div class="card" style="border: 1px solid var(--border);">
            <div class="card-title" style="font-size: 14px;">Instructions</div>
            <div class="card-sub">${e.value.instructions}</div>
          </div>`:u}
    </div>
  `}function Zj(e){let t=e.step===1?qj(e.value):!0,n=qj(e.value)&&!e.creating;return c`
    <dialog
      class="md-preview-dialog"
      ?open=${!0}
      @click=${e=>{let t=e.currentTarget;e.target===t&&t.close()}}
      @close=${e.onClose}
    >
      <div class="md-preview-dialog__panel" style="max-width: 760px;">
        <div class="md-preview-dialog__header">
          <div class="md-preview-dialog__title">Employee Creator</div>
          <button
            type="button"
            class="btn btn--sm"
            ?disabled=${e.creating}
            @click=${e=>{e.currentTarget.closest(`dialog`)?.close()}}
          >
            Close
          </button>
        </div>

        <div class="md-preview-dialog__body" style="display: grid; gap: 20px;">
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            ${Kj.map(t=>c`<span class="chip ${e.step===t.id?`chip-ok`:``}">
                ${t.id}. ${t.label}
              </span>`)}
          </div>

          ${e.error?c`<div class="callout danger">${e.error}</div>`:u}

          ${e.step===1?Jj(e):e.step===2?Yj(e):Xj(e)}

          <div style="display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap;">
            <div class="muted" style="font-size: 13px;">
              ${e.step===1?`Choose identity basics first, then shape how this employee works.`:e.step===2?`These notes will be written into SOUL.md for the employee workspace.`:`Creating the employee provisions the agent, writes SOUL.md, and sets the default model.`}
            </div>
            <div style="display: flex; gap: 8px; margin-left: auto;">
              ${e.step===1?c`<button type="button" class="btn" ?disabled=${e.creating} @click=${e.onClose}>
                    Cancel
                  </button>`:c`<button
                    type="button"
                    class="btn"
                    ?disabled=${e.creating}
                    @click=${()=>e.onStepChange(e.step-1)}
                  >
                    Back
                  </button>`}
              ${e.step<3?c`<button
                    type="button"
                    class="btn primary"
                    ?disabled=${e.creating||!t}
                    @click=${()=>e.onStepChange(e.step+1)}
                  >
                    Next
                  </button>`:c`<button
                    type="button"
                    class="btn primary"
                    ?disabled=${!n}
                    @click=${()=>e.onCreate(e.value)}
                  >
                    ${e.creating?`Creating...`:`Create Employee`}
                  </button>`}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  `}var Qj=[`noopener`,`noreferrer`],$j=`_blank`;function eM(e){let t=[],n=new Set(Qj);for(let r of(e??``).split(/\s+/)){let e=r.trim().toLowerCase();!e||n.has(e)||(n.add(e),t.push(e))}return[...Qj,...t].join(` `)}function tM(e){return e?c`
    <div class="callout ${e.kind===`error`?`danger`:`success`}">${e.text}</div>
  `:u}function nM(e){let t=e.currentModel.trim().split(`/`,1)[0]?.trim().toLowerCase();return to.find(n=>n.id===t&&e.providerStatuses[n.id]?.hasKey)}function rM(e){return e.modelOption===`__custom__`?e.customModelInput.trim():e.modelOption.trim()}function iM(e,t){return e?.hasKey?c`
    <div class="muted" style="font-size: 13px;">
      Current saved key: <span style="font-family: var(--font-mono, monospace);">${e.maskedKey}</span>
    </div>
  `:c`<div class="muted" style="font-size: 13px;">No saved ${t} key yet.</div>`}function aM(e){let t=nM(e),n=rM(e),r=!e.connected||e.loading||e.modelSaving;return c`
    <section class="page page--settings" style="display: grid; gap: 20px;">
      <div class="card" style="display: grid; gap: 16px; max-width: 860px;">
        <div class="row" style="justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap;">
          <div style="display: grid; gap: 4px;">
            <div class="card-title">API Keys</div>
            <div class="card-sub">Manage provider API keys and default models without editing config files.</div>
          </div>
          <span class="chip ${t?`chip-ok`:``}">
            ${t?`${t.emoji} ${t.label} active`:`No active provider`}
          </span>
        </div>

        <div class="muted" style="font-size: 13px;">
          Current model:
          <span style="font-family: var(--font-mono, monospace);">${e.currentModel}</span>
        </div>
        ${n&&n!==e.currentModel?c`
              <div class="muted" style="font-size: 13px;">
                Draft model:
                <span style="font-family: var(--font-mono, monospace);">${n}</span>
              </div>
            `:u}

        <label class="field">
          <span>Model</span>
          <select
            .value=${e.modelOption}
            @change=${t=>e.onModelOptionChange(t.target.value)}
            ?disabled=${r}
          >
            ${to.filter(e=>e.popularModels.length>0).map(e=>c`
                <optgroup label=${e.label}>
                  ${e.popularModels.map(e=>c`<option value=${e}>${e}</option>`)}
                </optgroup>
              `)}
            <option value=${eo}>Custom model...</option>
          </select>
        </label>

        ${e.modelOption===`__custom__`?c`
              <label class="field">
                <span>Custom model</span>
                <input
                  type="text"
                  .value=${e.customModelInput}
                  @input=${t=>e.onCustomModelInput(t.target.value)}
                  placeholder="provider/model"
                  autocomplete="off"
                  ?disabled=${r}
                />
              </label>
            `:u}

        <div class="muted" style="font-size: 13px;">
          Leave this on <span style="font-family: var(--font-mono, monospace);">openrouter/auto</span>
          to let OpenRouter pick the best model, or switch to Custom model... to paste any provider/model ref.
        </div>

        <div class="row" style="gap: 8px; flex-wrap: wrap; align-items: center;">
          <button class="btn" ?disabled=${!e.connected||e.loading} @click=${()=>e.onRefresh()}>
            ${e.loading?`Refreshing...`:`Refresh`}
          </button>
          <button
            class="btn primary"
            ?disabled=${r||!n}
            @click=${()=>e.onSaveModel()}
          >
            ${e.modelSaving?`Saving model...`:`Save model`}
          </button>
        </div>

        ${tM(e.pageMessage)}
      </div>

      <div style="display: grid; gap: 16px;">
        <div class="card" style="display: grid; gap: 16px; max-width: 860px;">
          <div class="row" style="justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap;">
            <div style="display: grid; gap: 4px;">
              <div class="card-title">Voice Settings (ElevenLabs)</div>
              <div class="card-sub">Let Kova employees speak their replies with ElevenLabs TTS.</div>
            </div>
            <span class="chip ${e.elevenLabsConfigured?`chip-ok`:``}">
              ${e.elevenLabsConfigured?`Configured`:`Not configured`}
            </span>
          </div>

          <label class="field">
            <span>ElevenLabs API key</span>
            <input
              type="password"
              .value=${e.elevenLabsInput}
              @input=${t=>e.onElevenLabsInput(t.target.value)}
              placeholder="sk_..."
              autocomplete="off"
              ?disabled=${!e.connected||e.loading||e.elevenLabsSaving||e.elevenLabsTesting}
            />
          </label>

          <div class="muted" style="font-size: 13px;">
            Get your key at
            <a
              href="https://elevenlabs.io"
              target=${$j}
              rel=${eM()}
            >elevenlabs.io</a>
          </div>

          <div class="muted" style="font-size: 13px;">
            Voice mode is available for Kova employees in chat. Changes take effect immediately.
          </div>

          <div class="row" style="gap: 8px; flex-wrap: wrap; align-items: center;">
            <button
              class="btn primary"
              ?disabled=${!e.connected||e.loading||e.elevenLabsSaving||!e.elevenLabsInput.trim()}
              @click=${()=>e.onSaveElevenLabs()}
            >
              ${e.elevenLabsSaving?`Saving...`:`Save`}
            </button>
            <button
              class="btn"
              ?disabled=${!e.connected||e.loading||e.elevenLabsSaving||e.elevenLabsTesting}
              @click=${()=>e.onTestElevenLabs()}
            >
              ${e.elevenLabsTesting?`Speaking...`:`Test voice`}
            </button>
          </div>

          ${tM(e.elevenLabsMessage)}
        </div>

        ${to.map(n=>{let r=e.providerStatuses[n.id],i=r?.hasKey===!0,a=t?.id===n.id,o=e.savingProviderId===n.id,s=e.testingProviderId===n.id,l=e.providerInputs[n.id],d=e.connected&&!e.loading&&!e.modelSaving&&!o&&!!l.trim(),f=e.connected&&!e.loading&&!e.modelSaving&&!s&&(i||!!l.trim()),p=e.connected&&!e.loading&&!e.modelSaving&&i&&!a;return c`
            <div class="card" style="display: grid; gap: 16px; max-width: 860px;">
              <div class="row" style="justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap;">
                <div style="display: grid; gap: 4px;">
                  <div class="card-title">${n.emoji} ${n.label}</div>
                  <div class="card-sub">
                    Recommended model:
                    <span style="font-family: var(--font-mono, monospace);">${n.recommendedModel}</span>
                  </div>
                </div>
                <div class="row" style="gap: 8px; flex-wrap: wrap; align-items: center;">
                  ${a?c`<span class="chip chip-ok">Active</span>`:u}
                  <span class="chip ${i?`chip-ok`:``}">
                    ${i?`Configured`:`Not configured`}
                  </span>
                </div>
              </div>

              <label class="field">
                <span>${n.label} API key</span>
                <input
                  type="password"
                  .value=${l}
                  @input=${t=>e.onProviderInput(n.id,t.target.value)}
                  placeholder=${n.keyPlaceholder}
                  autocomplete="off"
                  ?disabled=${!e.connected||e.loading||e.modelSaving||o||s}
                />
              </label>

              <div class="muted" style="font-size: 13px;">
                Get your key at
                <a
                  href=${n.keyUrl}
                  target=${$j}
                  rel=${eM()}
                >${n.keyUrl.replace(/^https?:\/\//,``)}</a>
              </div>

              ${iM(r,n.label)}

              <div class="row" style="gap: 8px; flex-wrap: wrap; align-items: center;">
                <button class="btn primary" ?disabled=${!d} @click=${()=>e.onSaveProvider(n.id)}>
                  ${o?`Saving...`:`Save`}
                </button>
                <button class="btn" ?disabled=${!f} @click=${()=>e.onTestProvider(n.id)}>
                  ${s?`Testing...`:`Test connection`}
                </button>
                <button class="btn" ?disabled=${!p} @click=${()=>e.onSetActive(n.id)}>
                  ${a?`Active`:`Set as active`}
                </button>
              </div>

              ${tM(e.providerMessages[n.id])}
            </div>
          `})}
      </div>
    </section>
  `}var oM=[...gT.map(e=>({id:`slash:${e.name}`,label:`/${e.name}`,icon:e.icon??`terminal`,category:`search`,action:`/${e.name}`,description:e.description})),{id:`nav-overview`,label:`Overview`,icon:`barChart`,category:`navigation`,action:`nav:overview`},{id:`nav-sessions`,label:`Sessions`,icon:`fileText`,category:`navigation`,action:`nav:sessions`},{id:`nav-cron`,label:`Scheduled`,icon:`scrollText`,category:`navigation`,action:`nav:cron`},{id:`nav-skills`,label:`Skills`,icon:`zap`,category:`navigation`,action:`nav:skills`},{id:`nav-config`,label:`Settings`,icon:`settings`,category:`navigation`,action:`nav:config`},{id:`nav-agents`,label:`Agents`,icon:`folder`,category:`navigation`,action:`nav:agents`},{id:`skill-shell`,label:`Shell Command`,icon:`monitor`,category:`skills`,action:`/skill shell`,description:`Run shell`},{id:`skill-debug`,label:`Debug Mode`,icon:`bug`,category:`skills`,action:`/verbose full`,description:`Toggle debug`}];function sM(e){if(!e)return oM;let t=e.toLowerCase();return oM.filter(e=>e.label.toLowerCase().includes(t)||(e.description?.toLowerCase().includes(t)??!1))}function cM(e){let t=new Map;for(let n of e){let e=t.get(n.category)??[];e.push(n),t.set(n.category,e)}return[...t.entries()]}var lM=null;function uM(){lM=document.activeElement}function dM(){lM&&lM instanceof HTMLElement&&requestAnimationFrame(()=>lM&&lM.focus()),lM=null}function fM(e,t){e.action.startsWith(`nav:`)?t.onNavigate(e.action.slice(4)):t.onSlashCommand(e.action),t.onToggle(),dM()}function pM(){requestAnimationFrame(()=>{document.querySelector(`.cmd-palette__item--active`)?.scrollIntoView({block:`nearest`})})}function mM(e,t){let n=sM(t.query);if(!(n.length===0&&(e.key===`ArrowDown`||e.key===`ArrowUp`||e.key===`Enter`)))switch(e.key){case`ArrowDown`:e.preventDefault(),t.onActiveIndexChange((t.activeIndex+1)%n.length),pM();break;case`ArrowUp`:e.preventDefault(),t.onActiveIndexChange((t.activeIndex-1+n.length)%n.length),pM();break;case`Enter`:e.preventDefault(),n[t.activeIndex]&&fM(n[t.activeIndex],t);break;case`Escape`:e.preventDefault(),t.onToggle(),dM();break}}var hM={search:`Search`,navigation:`Navigation`,skills:`Skills`};function gM(e){e&&(uM(),requestAnimationFrame(()=>e.focus()))}function _M(e){if(!e.open)return u;let t=sM(e.query),n=cM(t);return c`
    <div
      class="cmd-palette-overlay"
      @click=${()=>{e.onToggle(),dM()}}
    >
      <div
        class="cmd-palette"
        @click=${e=>e.stopPropagation()}
        @keydown=${t=>mM(t,e)}
      >
        <input
          ${Nl(gM)}
          class="cmd-palette__input"
          placeholder="${P(`overview.palette.placeholder`)}"
          .value=${e.query}
          @input=${t=>{e.onQueryChange(t.target.value),e.onActiveIndexChange(0)}}
        />
        <div class="cmd-palette__results">
          ${n.length===0?c`<div class="cmd-palette__empty">
                <span class="nav-item__icon" style="opacity:0.3;width:20px;height:20px"
                  >${H.search}</span
                >
                <span>${P(`overview.palette.noResults`)}</span>
              </div>`:n.map(([n,r])=>c`
                  <div class="cmd-palette__group-label">
                    ${hM[n]??n}
                  </div>
                  ${r.map(n=>{let r=t.indexOf(n);return c`
                      <div
                        class="cmd-palette__item ${r===e.activeIndex?`cmd-palette__item--active`:``}"
                        @click=${t=>{t.stopPropagation(),fM(n,e)}}
                        @mouseenter=${()=>e.onActiveIndexChange(r)}
                      >
                        <span class="nav-item__icon">${H[n.icon]}</span>
                        <span>${n.label}</span>
                        ${n.description?c`<span class="cmd-palette__item-desc muted"
                              >${n.description}</span
                            >`:u}
                      </div>
                    `})}
                `)}
        </div>
        <div class="cmd-palette__footer">
          <span><kbd>↑↓</kbd> navigate</span>
          <span><kbd>↵</kbd> select</span>
          <span><kbd>esc</kbd> close</span>
        </div>
      </div>
    </div>
  `}var vM=new Set([`title`,`description`,`default`,`nullable`,`tags`,`x-tags`]);function yM(e){return Object.keys(e??{}).filter(e=>!vM.has(e)).length===0}function bM(e){if(e===void 0)return``;try{return JSON.stringify(e,null,2)??``}catch{return``}}var xM={chevronDown:c`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,plus:c`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  `,minus:c`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  `,trash:c`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="3 6 5 6 21 6"></polyline>
      <path
        d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
      ></path>
    </svg>
  `,edit:c`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  `};function SM(e){if(!e||typeof e!=`object`||Array.isArray(e))return!1;let t=e;return typeof t.source!=`string`||typeof t.id!=`string`?!1:t.provider===void 0||typeof t.provider==`string`}function CM(e){let t=Ne(e.value,e.path,e.hints),n=t&&(e.revealSensitive||(e.isSensitivePathRevealed?.(e.path)??!1));return{isSensitive:t,isRedacted:t&&!n,isRevealed:n,canReveal:t}}function wM(e){let{state:t}=e;return!t.isSensitive||!e.onToggleSensitivePath?u:c`
    <button
      type="button"
      class="btn btn--icon ${t.isRevealed?`active`:``}"
      style="width:28px;height:28px;padding:0;"
      title=${t.canReveal?t.isRevealed?`Hide value`:`Reveal value`:`Disable stream mode to reveal value`}
      aria-label=${t.canReveal?t.isRevealed?`Hide value`:`Reveal value`:`Disable stream mode to reveal value`}
      aria-pressed=${t.isRevealed}
      ?disabled=${e.disabled||!t.canReveal}
      @click=${()=>e.onToggleSensitivePath?.(e.path)}
    >
      ${t.isRevealed?H.eye:H.eyeOff}
    </button>
  `}function TM(e){return!!(e&&(e.text.length>0||e.tags.length>0))}function EM(e){let t=[],n=new Set;return{text:e.trim().replace(/(^|\s)tag:([^\s]+)/gi,(e,r,i)=>{let a=i.trim().toLowerCase();return a&&!n.has(a)&&(n.add(a),t.push(a)),r}).trim().toLowerCase(),tags:t}}function DM(e){if(!Array.isArray(e))return[];let t=new Set,n=[];for(let r of e){if(typeof r!=`string`)continue;let e=r.trim();if(!e)continue;let i=e.toLowerCase();t.has(i)||(t.add(i),n.push(e))}return n}function OM(e,t,n){let r=Ce(e,n),i=r?.label??t.title??we(String(e.at(-1))),a=r?.help??t.description,o=DM(t[`x-tags`]??t.tags),s=DM(r?.tags);return{label:i,help:a,tags:s.length>0?s:o}}function kM(e,t){if(!e)return!0;for(let n of t)if(n&&n.toLowerCase().includes(e))return!0;return!1}function AM(e,t){if(e.length===0)return!0;let n=new Set(t.map(e=>e.toLowerCase()));return e.every(e=>n.has(e))}function jM(e){let{schema:t,path:n,hints:r,criteria:i}=e;if(!TM(i))return!0;let{label:a,help:o,tags:s}=OM(n,t,r);if(!AM(i.tags,s))return!1;if(!i.text)return!0;let c=n.filter(e=>typeof e==`string`).join(`.`),l=t.enum&&t.enum.length>0?t.enum.map(e=>String(e)).join(` `):``;return kM(i.text,[a,o,t.title,t.description,c,l])}function MM(e){let{schema:t,value:n,path:r,hints:i,criteria:a}=e;if(!TM(a)||jM({schema:t,path:r,hints:i,criteria:a}))return!0;let o=be(t);if(o===`object`){let e=n??t.default,o=e&&typeof e==`object`&&!Array.isArray(e)?e:{},s=t.properties??{};for(let[e,t]of Object.entries(s))if(MM({schema:t,value:o[e],path:[...r,e],hints:i,criteria:a}))return!0;let c=t.additionalProperties;if(c&&typeof c==`object`){let e=new Set(Object.keys(s));for(let[t,n]of Object.entries(o))if(!e.has(t)&&MM({schema:c,value:n,path:[...r,t],hints:i,criteria:a}))return!0}return!1}if(o===`array`){let e=Array.isArray(t.items)?t.items[0]:t.items;if(!e)return!1;let o=Array.isArray(n)?n:Array.isArray(t.default)?t.default:[];if(o.length===0)return!1;for(let t=0;t<o.length;t+=1)if(MM({schema:e,value:o[t],path:[...r,t],hints:i,criteria:a}))return!0}return!1}function NM(e){return e.length===0?u:c`
    <div class="cfg-tags">${e.map(e=>c`<span class="cfg-tag">${e}</span>`)}</div>
  `}function PM(e){let{schema:t,value:n,path:r,hints:i,unsupported:a,disabled:o,onPatch:s}=e,l=e.showLabel??!0,d=be(t),{label:f,help:p,tags:m}=OM(r,t,i),h=Se(r),g=e.searchCriteria;if(a.has(h))return c`<div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${f}</div>
      <div class="cfg-field__error">Unsupported schema node. Use Raw mode.</div>
    </div>`;if(g&&TM(g)&&!MM({schema:t,value:n,path:r,hints:i,criteria:g}))return u;if(t.anyOf||t.oneOf){let a=(t.anyOf??t.oneOf??[]).filter(e=>!(e.type===`null`||Array.isArray(e.type)&&e.type.includes(`null`)));if(a.length===1)return PM({...e,schema:a[0]});let d=a.map(e=>{if(e.const!==void 0)return e.const;if(e.enum&&e.enum.length===1)return e.enum[0]}),h=d.every(e=>e!==void 0);if(h&&d.length>0&&d.length<=5){let e=n??t.default;return c`
        <div class="cfg-field">
          ${l?c`<label class="cfg-field__label">${f}</label>`:u}
          ${p?c`<div class="cfg-field__help">${p}</div>`:u} ${NM(m)}
          <div class="cfg-segmented">
            ${d.map(t=>c`
                <button
                  type="button"
                  class="cfg-segmented__btn ${t===e||String(t)===String(e)?`active`:``}"
                  ?disabled=${o}
                  @click=${()=>s(r,t)}
                >
                  ${String(t)}
                </button>
              `)}
          </div>
        </div>
      `}if(h&&d.length>5)return LM({...e,options:d,value:n??t.default});let g=new Set(a.map(e=>be(e)).filter(Boolean)),_=new Set([...g].map(e=>e===`integer`?`number`:e));if([..._].every(e=>[`string`,`number`,`boolean`].includes(e))){let n=_.has(`string`),r=_.has(`number`);if(_.has(`boolean`)&&_.size===1)return PM({...e,schema:{...t,type:`boolean`,anyOf:void 0,oneOf:void 0}});if(n||r)return FM({...e,inputType:r&&!n?`number`:`text`})}return RM({schema:t,value:n,path:r,hints:i,disabled:o,showLabel:l,revealSensitive:e.revealSensitive??!1,isSensitivePathRevealed:e.isSensitivePathRevealed,onToggleSensitivePath:e.onToggleSensitivePath,onPatch:s})}if(t.enum){let i=t.enum;if(i.length<=5){let e=n??t.default;return c`
        <div class="cfg-field">
          ${l?c`<label class="cfg-field__label">${f}</label>`:u}
          ${p?c`<div class="cfg-field__help">${p}</div>`:u} ${NM(m)}
          <div class="cfg-segmented">
            ${i.map(t=>c`
                <button
                  type="button"
                  class="cfg-segmented__btn ${t===e||String(t)===String(e)?`active`:``}"
                  ?disabled=${o}
                  @click=${()=>s(r,t)}
                >
                  ${String(t)}
                </button>
              `)}
          </div>
        </div>
      `}return LM({...e,options:i,value:n??t.default})}if(d===`object`)return zM(e);if(d===`array`)return BM(e);if(d===`boolean`){let e=typeof n==`boolean`?n:typeof t.default==`boolean`?t.default:!1;return c`
      <label class="cfg-toggle-row ${o?`disabled`:``}">
        <div class="cfg-toggle-row__content">
          <span class="cfg-toggle-row__label">${f}</span>
          ${p?c`<span class="cfg-toggle-row__help">${p}</span>`:u}
          ${NM(m)}
        </div>
        <div class="cfg-toggle">
          <input
            type="checkbox"
            .checked=${e}
            ?disabled=${o}
            @change=${e=>s(r,e.target.checked)}
          />
          <span class="cfg-toggle__track"></span>
        </div>
      </label>
    `}return d===`number`||d===`integer`?IM(e):d===`string`?FM({...e,inputType:`text`}):c`
    <div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${f}</div>
      <div class="cfg-field__error">Unsupported type: ${d}. Use Raw mode.</div>
    </div>
  `}function FM(e){let{schema:t,value:n,path:r,hints:i,disabled:a,onPatch:o,inputType:s}=e,l=e.showLabel??!0,d=Ce(r,i),{label:f,help:p,tags:m}=OM(r,t,i),h=CM({path:r,value:n,hints:i,revealSensitive:e.revealSensitive??!1,isSensitivePathRevealed:e.isSensitivePathRevealed}),g=typeof n==`object`&&!!n&&!Array.isArray(n),_=SM(n),v=e.rawAvailable??!0,y=h.isRedacted||_,b=y?_?v?`Structured value (SecretRef) - use Raw mode to edit`:`Structured value (SecretRef) - edit the config file directly`:Oe:d?.placeholder??(t.default===void 0?``:`Default: ${String(t.default)}`),x=y?``:g?bM(n):n??``,S=h.isSensitive&&!y?`text`:s;return c`
    <div class="cfg-field">
      ${l?c`<label class="cfg-field__label">${f}</label>`:u}
      ${p?c`<div class="cfg-field__help">${p}</div>`:u} ${NM(m)}
      <div class="cfg-input-wrap">
        <input
          type=${S}
          class="cfg-input${y?` cfg-input--redacted`:``}"
          placeholder=${b}
          .value=${x==null?``:String(x)}
          ?disabled=${a}
          ?readonly=${y}
          @click=${()=>{h.isRedacted&&!_&&e.onToggleSensitivePath&&e.onToggleSensitivePath(r)}}
          @input=${e=>{if(y)return;let t=e.target.value;if(s===`number`){if(t.trim()===``){o(r,void 0);return}let e=Number(t);o(r,Number.isNaN(e)?t:e);return}o(r,t)}}
          @change=${e=>{if(s===`number`||y)return;let t=e.target.value;o(r,t.trim())}}
        />
        ${_?u:wM({path:r,state:h,disabled:a,onToggleSensitivePath:e.onToggleSensitivePath})}
        ${t.default===void 0?u:c`
              <button
                type="button"
                class="cfg-input__reset"
                title="Reset to default"
                ?disabled=${a||y}
                @click=${()=>o(r,t.default)}
              >
                ↺
              </button>
            `}
      </div>
    </div>
  `}function IM(e){let{schema:t,value:n,path:r,hints:i,disabled:a,onPatch:o}=e,s=e.showLabel??!0,{label:l,help:d,tags:f}=OM(r,t,i),p=n??t.default??``,m=typeof p==`number`?p:0;return c`
    <div class="cfg-field">
      ${s?c`<label class="cfg-field__label">${l}</label>`:u}
      ${d?c`<div class="cfg-field__help">${d}</div>`:u} ${NM(f)}
      <div class="cfg-number">
        <button
          type="button"
          class="cfg-number__btn"
          ?disabled=${a}
          @click=${()=>o(r,m-1)}
        >
          −
        </button>
        <input
          type="number"
          class="cfg-number__input"
          .value=${p==null?``:String(p)}
          ?disabled=${a}
          @input=${e=>{let t=e.target.value;o(r,t===``?void 0:Number(t))}}
        />
        <button
          type="button"
          class="cfg-number__btn"
          ?disabled=${a}
          @click=${()=>o(r,m+1)}
        >
          +
        </button>
      </div>
    </div>
  `}function LM(e){let{schema:t,value:n,path:r,hints:i,disabled:a,options:o,onPatch:s}=e,l=e.showLabel??!0,{label:d,help:f,tags:p}=OM(r,t,i),m=n??t.default,h=o.findIndex(e=>e===m||String(e)===String(m)),g=`__unset__`;return c`
    <div class="cfg-field">
      ${l?c`<label class="cfg-field__label">${d}</label>`:u}
      ${f?c`<div class="cfg-field__help">${f}</div>`:u} ${NM(p)}
      <select
        class="cfg-select"
        ?disabled=${a}
        .value=${h>=0?String(h):g}
        @change=${e=>{let t=e.target.value;s(r,t===g?void 0:o[Number(t)])}}
      >
        <option value=${g}>Select...</option>
        ${o.map((e,t)=>c` <option value=${String(t)}>${String(e)}</option> `)}
      </select>
    </div>
  `}function RM(e){let{schema:t,value:n,path:r,hints:i,disabled:a,onPatch:o}=e,s=e.showLabel??!0,{label:l,help:d,tags:f}=OM(r,t,i),p=bM(n),m=CM({path:r,value:n,hints:i,revealSensitive:e.revealSensitive??!1,isSensitivePathRevealed:e.isSensitivePathRevealed}),h=m.isRedacted?``:p;return c`
    <div class="cfg-field">
      ${s?c`<label class="cfg-field__label">${l}</label>`:u}
      ${d?c`<div class="cfg-field__help">${d}</div>`:u} ${NM(f)}
      <div class="cfg-input-wrap">
        <textarea
          class="cfg-textarea${m.isRedacted?` cfg-textarea--redacted`:``}"
          placeholder=${m.isRedacted?Oe:`JSON value`}
          rows="3"
          .value=${h}
          ?disabled=${a}
          ?readonly=${m.isRedacted}
          @click=${()=>{m.isRedacted&&e.onToggleSensitivePath&&e.onToggleSensitivePath(r)}}
          @change=${e=>{if(m.isRedacted)return;let t=e.target,n=t.value.trim();if(!n){o(r,void 0);return}try{o(r,JSON.parse(n))}catch{t.value=p}}}
        ></textarea>
        ${wM({path:r,state:m,disabled:a,onToggleSensitivePath:e.onToggleSensitivePath})}
      </div>
    </div>
  `}function zM(e){let{schema:t,value:n,path:r,hints:i,unsupported:a,disabled:o,onPatch:s,searchCriteria:l,rawAvailable:d,revealSensitive:f,isSensitivePathRevealed:p,onToggleSensitivePath:m}=e,h=e.showLabel??!0,{label:g,help:_,tags:v}=OM(r,t,i),y=l&&TM(l)&&jM({schema:t,path:r,hints:i,criteria:l})?void 0:l,b=n??t.default,x=b&&typeof b==`object`&&!Array.isArray(b)?b:{},S=t.properties??{},C=Object.entries(S).toSorted((e,t)=>{let n=Ce([...r,e[0]],i)?.order??0,a=Ce([...r,t[0]],i)?.order??0;return n===a?e[0].localeCompare(t[0]):n-a}),w=new Set(Object.keys(S)),T=t.additionalProperties,ee=!!T&&typeof T==`object`,E=c`
    ${C.map(([e,t])=>PM({schema:t,value:x[e],path:[...r,e],hints:i,rawAvailable:d,unsupported:a,disabled:o,searchCriteria:y,revealSensitive:f,isSensitivePathRevealed:p,onToggleSensitivePath:m,onPatch:s}))}
    ${ee?VM({schema:T,value:x,path:r,hints:i,rawAvailable:d,unsupported:a,disabled:o,reservedKeys:w,searchCriteria:y,revealSensitive:f,isSensitivePathRevealed:p,onToggleSensitivePath:m,onPatch:s}):u}
  `;return r.length===1?c` <div class="cfg-fields">${E}</div> `:h?c`
    <details class="cfg-object" ?open=${r.length<=2}>
      <summary class="cfg-object__header">
        <span class="cfg-object__title-wrap">
          <span class="cfg-object__title">${g}</span>
          ${NM(v)}
        </span>
        <span class="cfg-object__chevron">${xM.chevronDown}</span>
      </summary>
      ${_?c`<div class="cfg-object__help">${_}</div>`:u}
      <div class="cfg-object__content">${E}</div>
    </details>
  `:c` <div class="cfg-fields cfg-fields--inline">${E}</div> `}function BM(e){let{schema:t,value:n,path:r,hints:i,unsupported:a,disabled:o,onPatch:s,searchCriteria:l,rawAvailable:d,revealSensitive:f,isSensitivePathRevealed:p,onToggleSensitivePath:m}=e,h=e.showLabel??!0,{label:g,help:_,tags:v}=OM(r,t,i),y=l&&TM(l)&&jM({schema:t,path:r,hints:i,criteria:l})?void 0:l,b=Array.isArray(t.items)?t.items[0]:t.items;if(!b)return c`
      <div class="cfg-field cfg-field--error">
        <div class="cfg-field__label">${g}</div>
        <div class="cfg-field__error">Unsupported array schema. Use Raw mode.</div>
      </div>
    `;let x=Array.isArray(n)?n:Array.isArray(t.default)?t.default:[];return c`
    <div class="cfg-array">
      <div class="cfg-array__header">
        <div class="cfg-array__title">
          ${h?c`<span class="cfg-array__label">${g}</span>`:u}
          ${NM(v)}
        </div>
        <span class="cfg-array__count">${x.length} item${x.length===1?``:`s`}</span>
        <button
          type="button"
          class="cfg-array__add"
          ?disabled=${o}
          @click=${()=>{s(r,[...x,xe(b)])}}
        >
          <span class="cfg-array__add-icon">${xM.plus}</span>
          Add
        </button>
      </div>
      ${_?c`<div class="cfg-array__help">${_}</div>`:u}
      ${x.length===0?c` <div class="cfg-array__empty">No items yet. Click "Add" to create one.</div> `:c`
            <div class="cfg-array__items">
              ${x.map((e,t)=>c`
                  <div class="cfg-array__item">
                    <div class="cfg-array__item-header">
                      <span class="cfg-array__item-index">#${t+1}</span>
                      <button
                        type="button"
                        class="cfg-array__item-remove"
                        title="Remove item"
                        ?disabled=${o}
                        @click=${()=>{let e=[...x];e.splice(t,1),s(r,e)}}
                      >
                        ${xM.trash}
                      </button>
                    </div>
                    <div class="cfg-array__item-content">
                      ${PM({schema:b,value:e,path:[...r,t],hints:i,rawAvailable:d,unsupported:a,disabled:o,searchCriteria:y,showLabel:!1,revealSensitive:f,isSensitivePathRevealed:p,onToggleSensitivePath:m,onPatch:s})}
                    </div>
                  </div>
                `)}
            </div>
          `}
    </div>
  `}function VM(e){let{schema:t,value:n,path:r,hints:i,rawAvailable:a,unsupported:o,disabled:s,reservedKeys:l,onPatch:u,searchCriteria:d,revealSensitive:f,isSensitivePathRevealed:p,onToggleSensitivePath:m}=e,h=yM(t),g=Object.entries(n??{}).filter(([e])=>!l.has(e)),_=d&&TM(d)?g.filter(([e,n])=>MM({schema:t,value:n,path:[...r,e],hints:i,criteria:d})):g;return c`
    <div class="cfg-map">
      <div class="cfg-map__header">
        <span class="cfg-map__label">Custom entries</span>
        <button
          type="button"
          class="cfg-map__add"
          ?disabled=${s}
          @click=${()=>{let e={...n},i=1,a=`custom-${i}`;for(;a in e;)i+=1,a=`custom-${i}`;e[a]=h?{}:xe(t),u(r,e)}}
        >
          <span class="cfg-map__add-icon">${xM.plus}</span>
          Add Entry
        </button>
      </div>

      ${_.length===0?c` <div class="cfg-map__empty">No custom entries.</div> `:c`
            <div class="cfg-map__items">
              ${_.map(([e,l])=>{let g=[...r,e],_=bM(l),v=CM({path:g,value:l,hints:i,revealSensitive:f??!1,isSensitivePathRevealed:p});return c`
                  <div class="cfg-map__item">
                    <div class="cfg-map__item-header">
                      <div class="cfg-map__item-key">
                        <input
                          type="text"
                          class="cfg-input cfg-input--sm"
                          placeholder="Key"
                          .value=${e}
                          ?disabled=${s}
                          @change=${t=>{let i=t.target.value.trim();if(!i||i===e)return;let a={...n};i in a||(a[i]=a[e],delete a[e],u(r,a))}}
                        />
                      </div>
                      <button
                        type="button"
                        class="cfg-map__item-remove"
                        title="Remove entry"
                        ?disabled=${s}
                        @click=${()=>{let t={...n};delete t[e],u(r,t)}}
                      >
                        ${xM.trash}
                      </button>
                    </div>
                    <div class="cfg-map__item-value">
                      ${h?c`
                            <div class="cfg-input-wrap">
                              <textarea
                                class="cfg-textarea cfg-textarea--sm${v.isRedacted?` cfg-textarea--redacted`:``}"
                                placeholder=${v.isRedacted?Oe:`JSON value`}
                                rows="2"
                                .value=${v.isRedacted?``:_}
                                ?disabled=${s}
                                ?readonly=${v.isRedacted}
                                @click=${()=>{v.isRedacted&&m&&m(g)}}
                                @change=${e=>{if(v.isRedacted)return;let t=e.target,n=t.value.trim();if(!n){u(g,void 0);return}try{u(g,JSON.parse(n))}catch{t.value=_}}}
                              ></textarea>
                              ${wM({path:g,state:v,disabled:s,onToggleSensitivePath:m})}
                            </div>
                          `:PM({schema:t,value:l,path:g,hints:i,rawAvailable:a,unsupported:o,disabled:s,searchCriteria:d,showLabel:!1,revealSensitive:f,isSensitivePathRevealed:p,onToggleSensitivePath:m,onPatch:u})}
                    </div>
                  </div>
                `})}
            </div>
          `}
    </div>
  `}var HM={env:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="3"></circle>
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      ></path>
    </svg>
  `,update:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  `,agents:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
      ></path>
      <circle cx="8" cy="14" r="1"></circle>
      <circle cx="16" cy="14" r="1"></circle>
    </svg>
  `,auth:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `,channels:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,messages:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,commands:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,hooks:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  `,skills:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  `,tools:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,gateway:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,wizard:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M15 4V2"></path>
      <path d="M15 16v-2"></path>
      <path d="M8 9h2"></path>
      <path d="M20 9h2"></path>
      <path d="M17.8 11.8 19 13"></path>
      <path d="M15 9h0"></path>
      <path d="M17.8 6.2 19 5"></path>
      <path d="m3 21 9-9"></path>
      <path d="M12.2 6.2 11 5"></path>
    </svg>
  `,meta:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
  `,logging:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,browser:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="21.17" y1="8" x2="12" y2="8"></line>
      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
    </svg>
  `,ui:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  `,models:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      ></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  `,bindings:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,broadcast:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
    </svg>
  `,audio:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `,session:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,cron:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `,web:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,discovery:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `,canvasHost:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  `,talk:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,plugins:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 2v6"></path>
      <path d="m4.93 10.93 4.24 4.24"></path>
      <path d="M2 12h6"></path>
      <path d="m4.93 13.07 4.24-4.24"></path>
      <path d="M12 22v-6"></path>
      <path d="m19.07 13.07-4.24-4.24"></path>
      <path d="M22 12h-6"></path>
      <path d="m19.07 10.93-4.24 4.24"></path>
    </svg>
  `,diagnostics:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
  `,cli:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,secrets:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"
      ></path>
    </svg>
  `,acp:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,mcp:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,default:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  `},UM={env:{label:`Environment Variables`,description:`Environment variables passed to the gateway process`},update:{label:`Updates`,description:`Auto-update settings and release channel`},agents:{label:`Agents`,description:`Agent configurations, models, and identities`},auth:{label:`Authentication`,description:`API keys and authentication profiles`},channels:{label:`Channels`,description:`Messaging channels (Telegram, Discord, Slack, etc.)`},messages:{label:`Messages`,description:`Message handling and routing settings`},commands:{label:`Commands`,description:`Custom slash commands`},hooks:{label:`Hooks`,description:`Webhooks and event hooks`},skills:{label:`Skills`,description:`Skill packs and capabilities`},tools:{label:`Tools`,description:`Tool configurations (browser, search, etc.)`},gateway:{label:`Gateway`,description:`Gateway server settings (port, auth, binding)`},wizard:{label:`Setup Wizard`,description:`Setup wizard state and history`},meta:{label:`Metadata`,description:`Gateway metadata and version information`},logging:{label:`Logging`,description:`Log levels and output configuration`},browser:{label:`Browser`,description:`Browser automation settings`},ui:{label:`UI`,description:`User interface preferences`},models:{label:`Models`,description:`AI model configurations and providers`},bindings:{label:`Bindings`,description:`Key bindings and shortcuts`},broadcast:{label:`Broadcast`,description:`Broadcast and notification settings`},audio:{label:`Audio`,description:`Audio input/output settings`},session:{label:`Session`,description:`Session management and persistence`},cron:{label:`Cron`,description:`Scheduled tasks and automation`},web:{label:`Web`,description:`Web server and API settings`},discovery:{label:`Discovery`,description:`Service discovery and networking`},canvasHost:{label:`Canvas Host`,description:`Canvas rendering and display`},talk:{label:`Talk`,description:`Voice and speech settings`},plugins:{label:`Plugins`,description:`Plugin management and extensions`},diagnostics:{label:`Diagnostics`,description:`Instrumentation, OpenTelemetry, and cache-trace settings`},cli:{label:`CLI`,description:`CLI banner and startup behavior`},secrets:{label:`Secrets`,description:`Secret provider configuration`},acp:{label:`ACP`,description:`Agent Communication Protocol runtime and streaming settings`},mcp:{label:`MCP`,description:`Model Context Protocol server definitions`}};function WM(e){return HM[e]??HM.default}function GM(e){if(!e.query)return!0;let t=EM(e.query),n=t.text,r=UM[e.key];return n&&(e.key.toLowerCase().includes(n)||r?.label&&r.label.toLowerCase().includes(n)||r?.description&&r.description.toLowerCase().includes(n))&&t.tags.length===0?!0:MM({schema:e.schema,value:e.sectionValue,path:[e.key],hints:e.uiHints,criteria:t})}function KM(e){if(!e.schema)return c` <div class="muted">Schema unavailable.</div> `;let t=e.schema,n=e.value??{};if(be(t)!==`object`||!t.properties)return c` <div class="callout danger">Unsupported schema. Use Raw.</div> `;let r=new Set(e.unsupportedPaths??[]),i=t.properties,a=e.searchQuery??``,o=EM(a),s=e.activeSection,l=e.activeSubsection??null,d=Object.entries(i).toSorted((t,n)=>{let r=Ce([t[0]],e.uiHints)?.order??50,i=Ce([n[0]],e.uiHints)?.order??50;return r===i?t[0].localeCompare(n[0]):r-i}).filter(([t,r])=>!(s&&t!==s||a&&!GM({key:t,schema:r,sectionValue:n[t],uiHints:e.uiHints,query:a}))),f=null;if(s&&l&&d.length===1){let e=d[0]?.[1];e&&be(e)===`object`&&e.properties&&e.properties[l]&&(f={sectionKey:s,subsectionKey:l,schema:e.properties[l]})}if(d.length===0)return c`
      <div class="config-empty">
        <div class="config-empty__icon">${H.search}</div>
        <div class="config-empty__text">
          ${a?`No settings match "${a}"`:`No settings in this section`}
        </div>
      </div>
    `;let p=t=>c`
    <section class="config-section-card" id=${t.id}>
      <div class="config-section-card__header">
        <span class="config-section-card__icon">${WM(t.sectionKey)}</span>
        <div class="config-section-card__titles">
          <h3 class="config-section-card__title">${t.label}</h3>
          ${t.description?c`<p class="config-section-card__desc">${t.description}</p>`:u}
        </div>
      </div>
      <div class="config-section-card__content">
        ${PM({schema:t.node,value:t.nodeValue,path:t.path,hints:e.uiHints,rawAvailable:e.rawAvailable??!0,unsupported:r,disabled:e.disabled??!1,showLabel:!1,searchCriteria:o,revealSensitive:e.revealSensitive??!1,isSensitivePathRevealed:e.isSensitivePathRevealed,onToggleSensitivePath:e.onToggleSensitivePath,onPatch:e.onPatch})}
      </div>
    </section>
  `;return c`
    <div class="config-form config-form--modern">
      ${f?(()=>{let{sectionKey:t,subsectionKey:r,schema:i}=f,a=Ce([t,r],e.uiHints),o=a?.label??i.title??we(r),s=a?.help??i.description??``,c=n[t],l=c&&typeof c==`object`?c[r]:void 0;return p({id:`config-section-${t}-${r}`,sectionKey:t,label:o,description:s,node:i,nodeValue:l,path:[t,r]})})():d.map(([e,t])=>{let r=UM[e]??{label:e.charAt(0).toUpperCase()+e.slice(1),description:t.description??``};return p({id:`config-section-${e}`,sectionKey:e,label:r.label,description:r.description,node:t,nodeValue:n[e],path:[e]})})}
    </div>
  `}var qM=new Set([`title`,`description`,`default`,`nullable`]);function JM(e){return Object.keys(e??{}).filter(e=>!qM.has(e)).length===0}function YM(e){let t=e.filter(e=>e!=null),n=t.length!==e.length,r=[];for(let e of t)r.some(t=>Object.is(t,e))||r.push(e);return{enumValues:r,nullable:n}}function XM(e){return!e||typeof e!=`object`?{schema:null,unsupportedPaths:[`<root>`]}:ZM(e,[])}function ZM(e,t){let n=new Set,r={...e},i=Se(t)||`<root>`;if(e.anyOf||e.oneOf||e.allOf)return tN(e,t)||{schema:e,unsupportedPaths:[i]};let a=Array.isArray(e.type)&&e.type.includes(`null`),o=be(e)??(e.properties||e.additionalProperties?`object`:void 0);if(r.type=o??e.type,r.nullable=a||e.nullable,r.enum){let{enumValues:e,nullable:t}=YM(r.enum);r.enum=e,t&&(r.nullable=!0),e.length===0&&n.add(i)}if(o===`object`){let a=e.properties??{},o={};for(let[e,r]of Object.entries(a)){let i=ZM(r,[...t,e]);i.schema&&(o[e]=i.schema);for(let e of i.unsupportedPaths)n.add(e)}if(r.properties=o,e.additionalProperties===!0)r.additionalProperties={};else if(e.additionalProperties===!1)r.additionalProperties=!1;else if(e.additionalProperties&&typeof e.additionalProperties==`object`&&!JM(e.additionalProperties)){let a=ZM(e.additionalProperties,[...t,`*`]);r.additionalProperties=a.schema??e.additionalProperties,a.unsupportedPaths.length>0&&n.add(i)}}else if(o===`array`){let a=Array.isArray(e.items)?e.items[0]:e.items;if(!a)n.add(i);else{let e=ZM(a,[...t,`*`]);r.items=e.schema??a,e.unsupportedPaths.length>0&&n.add(i)}}else o!==`string`&&o!==`number`&&o!==`integer`&&o!==`boolean`&&!r.enum&&n.add(i);return{schema:r,unsupportedPaths:Array.from(n)}}function QM(e){if(be(e)!==`object`)return!1;let t=e.properties?.source,n=e.properties?.provider,r=e.properties?.id;return!t||!n||!r?!1:typeof t.const==`string`&&be(n)===`string`&&be(r)===`string`}function $M(e){let t=e.oneOf??e.anyOf;return!t||t.length===0?!1:t.every(e=>QM(e))}function eN(e,t,n,r){let i=n.findIndex(e=>be(e)===`string`);if(i<0)return null;let a=n.filter((e,t)=>t!==i);return a.length!==1||!$M(a[0])?null:ZM({...e,...n[i],nullable:r,anyOf:void 0,oneOf:void 0,allOf:void 0},t)}function tN(e,t){if(e.allOf)return null;let n=e.anyOf??e.oneOf;if(!n)return null;let r=[],i=[],a=!1;for(let e of n){if(!e||typeof e!=`object`)return null;if(Array.isArray(e.enum)){let{enumValues:t,nullable:n}=YM(e.enum);r.push(...t),n&&(a=!0);continue}if(`const`in e){if(e.const==null){a=!0;continue}r.push(e.const);continue}if(be(e)===`null`){a=!0;continue}i.push(e)}let o=eN(e,t,i,a);if(o)return o;if(r.length>0&&i.length===0){let t=[];for(let e of r)t.some(t=>Object.is(t,e))||t.push(e);return{schema:{...e,enum:t,nullable:a,anyOf:void 0,oneOf:void 0,allOf:void 0},unsupportedPaths:[]}}if(i.length===1){let e=ZM(i[0],t);return e.schema&&(e.schema.nullable=a||e.schema.nullable),e}let s=new Set([`string`,`number`,`integer`,`boolean`,`object`,`array`]);return i.length>0&&r.length===0&&i.every(e=>{let t=be(e);return!!t&&s.has(String(t))})?{schema:{...e,nullable:a},unsupportedPaths:[]}:null}var nN={0:`None`,25:`Slight`,50:`Default`,75:`Round`,100:`Full`},rN={all:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  `,env:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="3"></circle>
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      ></path>
    </svg>
  `,update:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  `,agents:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
      ></path>
      <circle cx="8" cy="14" r="1"></circle>
      <circle cx="16" cy="14" r="1"></circle>
    </svg>
  `,auth:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `,channels:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,messages:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,commands:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,hooks:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  `,skills:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  `,tools:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,gateway:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,wizard:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M15 4V2"></path>
      <path d="M15 16v-2"></path>
      <path d="M8 9h2"></path>
      <path d="M20 9h2"></path>
      <path d="M17.8 11.8 19 13"></path>
      <path d="M15 9h0"></path>
      <path d="M17.8 6.2 19 5"></path>
      <path d="m3 21 9-9"></path>
      <path d="M12.2 6.2 11 5"></path>
    </svg>
  `,meta:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
  `,logging:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,browser:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="21.17" y1="8" x2="12" y2="8"></line>
      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
    </svg>
  `,ui:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  `,models:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      ></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  `,bindings:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,broadcast:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
    </svg>
  `,audio:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `,session:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,cron:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `,web:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,discovery:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `,canvasHost:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  `,talk:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,plugins:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2v6"></path>
      <path d="m4.93 10.93 4.24 4.24"></path>
      <path d="M2 12h6"></path>
      <path d="m4.93 13.07 4.24-4.24"></path>
      <path d="M12 22v-6"></path>
      <path d="m19.07 13.07-4.24-4.24"></path>
      <path d="M22 12h-6"></path>
      <path d="m19.07 10.93-4.24 4.24"></path>
    </svg>
  `,diagnostics:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
  `,cli:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,secrets:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"
      ></path>
    </svg>
  `,acp:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,mcp:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,__appearance__:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  `,default:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  `},iN=[{id:`core`,label:`Core`,sections:[{key:`env`,label:`Environment`},{key:`auth`,label:`Authentication`},{key:`update`,label:`Updates`},{key:`meta`,label:`Meta`},{key:`logging`,label:`Logging`},{key:`diagnostics`,label:`Diagnostics`},{key:`cli`,label:`Cli`},{key:`secrets`,label:`Secrets`}]},{id:`ai`,label:`AI & Agents`,sections:[{key:`agents`,label:`Agents`},{key:`models`,label:`Models`},{key:`skills`,label:`Skills`},{key:`tools`,label:`Tools`},{key:`memory`,label:`Memory`},{key:`session`,label:`Session`}]},{id:`communication`,label:`Communication`,sections:[{key:`channels`,label:`Channels`},{key:`messages`,label:`Messages`},{key:`broadcast`,label:`Broadcast`},{key:`talk`,label:`Talk`},{key:`audio`,label:`Audio`}]},{id:`automation`,label:`Automation`,sections:[{key:`commands`,label:`Commands`},{key:`hooks`,label:`Hooks`},{key:`bindings`,label:`Bindings`},{key:`cron`,label:`Cron`},{key:`approvals`,label:`Approvals`},{key:`plugins`,label:`Plugins`}]},{id:`infrastructure`,label:`Infrastructure`,sections:[{key:`gateway`,label:`Gateway`},{key:`web`,label:`Web`},{key:`browser`,label:`Browser`},{key:`nodeHost`,label:`NodeHost`},{key:`canvasHost`,label:`CanvasHost`},{key:`discovery`,label:`Discovery`},{key:`media`,label:`Media`},{key:`acp`,label:`Acp`},{key:`mcp`,label:`Mcp`}]},{id:`appearance`,label:`Appearance`,sections:[{key:`__appearance__`,label:`Theme`},{key:`ui`,label:`UI`},{key:`wizard`,label:`Setup Wizard`}]}],aN=new Set(iN.flatMap(e=>e.sections.map(e=>e.key)));function oN(e){return rN[e]??rN.default}function sN(e,t){if(!e||be(e)!==`object`||!e.properties)return e;let n=t.include,r=t.exclude,i={};for(let[t,a]of Object.entries(e.properties))n&&n.size>0&&!n.has(t)||r&&r.size>0&&r.has(t)||(i[t]=a);return{...e,properties:i}}function cN(e,t){let n=t.include,r=t.exclude;return(!n||n.size===0)&&(!r||r.size===0)?e:e.filter(e=>{if(e===`<root>`)return!0;let[t]=e.split(`.`);return n&&n.size>0?n.has(t):r&&r.size>0?!r.has(t):!0})}function lN(e,t){return UM[e]||{label:t?.title??we(e),description:t?.description??``}}function uN(e,t){if(!e||!t)return[];let n=[];function r(e,t,i){if(e===t)return;if(typeof e!=typeof t){n.push({path:i,from:e,to:t});return}if(typeof e!=`object`||!e||t===null){e!==t&&n.push({path:i,from:e,to:t});return}if(Array.isArray(e)&&Array.isArray(t)){JSON.stringify(e)!==JSON.stringify(t)&&n.push({path:i,from:e,to:t});return}let a=e,o=t,s=new Set([...Object.keys(a),...Object.keys(o)]);for(let e of s)r(a[e],o[e],i?`${i}.${e}`:e)}return r(e,t,``),n}function dN(e,t=40){let n;try{n=JSON.stringify(e)??String(e)}catch{n=String(e)}return n.length<=t?n:n.slice(0,t-3)+`...`}function fN(e,t,n){return Ae(e)&&t!=null&&dN(t).trim()!==``?Oe:dN(t)}var pN=[{id:`claw`,label:`Claw`,description:`Chroma family`,icon:H.zap},{id:`knot`,label:`Knot`,description:`Black & red`,icon:H.link},{id:`dash`,label:`Dash`,description:`Chocolate blueprint`,icon:H.barChart}];function mN(e){return c`
    <div class="settings-appearance">
      <div class="settings-appearance__section">
        <h3 class="settings-appearance__heading">Theme</h3>
        <p class="settings-appearance__hint">Choose a theme family.</p>
        <div class="settings-theme-grid">
          ${pN.map(t=>c`
              <button
                class="settings-theme-card ${t.id===e.theme?`settings-theme-card--active`:``}"
                title=${t.description}
                @click=${n=>{if(t.id!==e.theme){let r={element:n.currentTarget??void 0};e.setTheme(t.id,r)}}}
              >
                <span class="settings-theme-card__icon" aria-hidden="true">${t.icon}</span>
                <span class="settings-theme-card__label">${t.label}</span>
                ${t.id===e.theme?c`<span class="settings-theme-card__check" aria-hidden="true"
                      >${H.check}</span
                    >`:u}
              </button>
            `)}
        </div>
      </div>

      <div class="settings-appearance__section">
        <h3 class="settings-appearance__heading">Roundness</h3>
        <p class="settings-appearance__hint">Adjust corner radius across the UI.</p>
        <div class="settings-roundness">
          <div class="settings-roundness__options">
            ${Xc.map(t=>c`
                <button
                  type="button"
                  class="settings-roundness__btn ${t===e.borderRadius?`active`:``}"
                  @click=${()=>e.setBorderRadius(t)}
                >
                  <span
                    class="settings-roundness__swatch"
                    style="border-radius: ${Math.round(t/50*10)}px"
                  ></span>
                  <span class="settings-roundness__label">${nN[t]}</span>
                </button>
              `)}
          </div>
        </div>
      </div>

      <div class="settings-appearance__section">
        <h3 class="settings-appearance__heading">Connection</h3>
        <div class="settings-info-grid">
          <div class="settings-info-row">
            <span class="settings-info-row__label">Gateway</span>
            <span class="settings-info-row__value mono">${e.gatewayUrl||`-`}</span>
          </div>
          <div class="settings-info-row">
            <span class="settings-info-row__label">Status</span>
            <span class="settings-info-row__value">
              <span
                class="settings-status-dot ${e.connected?`settings-status-dot--ok`:``}"
              ></span>
              ${e.connected?`Connected`:`Offline`}
            </span>
          </div>
          ${e.assistantName?c`
                <div class="settings-info-row">
                  <span class="settings-info-row__label">Assistant</span>
                  <span class="settings-info-row__value">${sa(e.assistantName)}</span>
                </div>
              `:u}
        </div>
      </div>
    </div>
  `}function hN(){return{rawRevealed:!1,envRevealed:!1,validityDismissed:!1,revealedSensitivePaths:new Set}}var gN=hN();function _N(e){let t=Se(e);return t?gN.revealedSensitivePaths.has(t):!1}function vN(e){let t=Se(e);t&&(gN.revealedSensitivePaths.has(t)?gN.revealedSensitivePaths.delete(t):gN.revealedSensitivePaths.add(t))}function yN(e){let t=e.showModeToggle??!1,n=e.valid==null?`unknown`:e.valid?`valid`:`invalid`,r=e.includeVirtualSections??!0,i=e.includeSections?.length?new Set(e.includeSections):null,a=e.excludeSections?.length?new Set(e.excludeSections):null,o=XM(e.schema),s={schema:sN(o.schema,{include:i,exclude:a}),unsupportedPaths:cN(o.unsupportedPaths,{include:i,exclude:a})},l=s.schema?s.unsupportedPaths.length>0:!1,d=e.rawAvailable??!0,f=t&&d?e.formMode:`form`,p=gN.envRevealed,m=e.onRequestUpdate??(()=>e.onRawChange(e.raw)),h=s.schema?.properties??{},g=new Set([`__appearance__`]),_=iN.map(e=>({...e,sections:e.sections.filter(e=>r&&g.has(e.key)||e.key in h)})).filter(e=>e.sections.length>0),v=Object.keys(h).filter(e=>!aN.has(e)).map(e=>({key:e,label:e.charAt(0).toUpperCase()+e.slice(1)})),y=v.length>0?{id:`other`,label:`Other`,sections:v}:null,b=r&&e.activeSection!=null&&g.has(e.activeSection),x=e.activeSection&&!b&&s.schema&&be(s.schema)===`object`?s.schema.properties?.[e.activeSection]:void 0,S=e.activeSection&&!b?lN(e.activeSection,x):null,C=[{key:null,label:e.navRootLabel??`Settings`},...[..._,...y?[y]:[]].flatMap(e=>e.sections.map(e=>({key:e.key,label:e.label})))],w=f===`form`?uN(e.originalValue,e.formValue):[],T=f===`raw`&&e.raw!==e.originalRaw,ee=f===`form`?w.length>0:T,E=!!e.formValue&&!e.loading&&!!s.schema,te=e.connected&&!e.saving&&ee&&(f===`raw`?!0:E),D=e.connected&&!e.applying&&!e.updating&&ee&&(f===`raw`?!0:E),O=e.connected&&!e.applying&&!e.updating,k=r&&f===`form`&&e.activeSection===null&&!!i?.has(`__appearance__`);return c`
    <div class="config-layout">
      <main class="config-main">
        <div class="config-actions">
          <div class="config-actions__left">
            ${t?c`
                  <div class="config-mode-toggle">
                    <button
                      class="config-mode-toggle__btn ${f===`form`?`active`:``}"
                      ?disabled=${e.schemaLoading||!e.schema}
                      title=${l?`Form view can't safely edit some fields`:``}
                      @click=${()=>e.onFormModeChange(`form`)}
                    >
                      Form
                    </button>
                    <button
                      class="config-mode-toggle__btn ${f===`raw`?`active`:``}"
                      ?disabled=${!d}
                      title=${d?`Edit raw JSON/JSON5 config`:`Raw mode unavailable for this snapshot`}
                      @click=${()=>e.onFormModeChange(`raw`)}
                    >
                      Raw
                    </button>
                  </div>
                `:u}
            ${ee?c`
                  <span class="config-changes-badge"
                    >${f===`raw`?`Unsaved changes`:`${w.length} unsaved change${w.length===1?``:`s`}`}</span
                  >
                `:c` <span class="config-status muted">No changes</span> `}
          </div>
          <div class="config-actions__right">
            ${d?u:c`
                  <span class="config-status muted"
                    >Raw mode disabled (snapshot cannot safely round-trip raw text).</span
                  >
                `}
            ${e.onOpenFile?c`
                  <button
                    class="btn btn--sm"
                    title=${e.configPath?`Open ${e.configPath}`:`Open config file`}
                    @click=${e.onOpenFile}
                  >
                    ${H.fileText} Open
                  </button>
                `:u}
            <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onReload}>
              ${e.loading?`Loading…`:`Reload`}
            </button>
            <button class="btn btn--sm primary" ?disabled=${!te} @click=${e.onSave}>
              ${e.saving?`Saving…`:`Save`}
            </button>
            <button class="btn btn--sm" ?disabled=${!D} @click=${e.onApply}>
              ${e.applying?`Applying…`:`Apply`}
            </button>
            <button class="btn btn--sm" ?disabled=${!O} @click=${e.onUpdate}>
              ${e.updating?`Updating…`:`Update`}
            </button>
          </div>
        </div>

        <div class="config-top-tabs">
          ${f===`form`?c`
                <div class="config-search config-search--top">
                  <div class="config-search__input-row">
                    <svg
                      class="config-search__icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="M21 21l-4.35-4.35"></path>
                    </svg>
                    <input
                      type="text"
                      class="config-search__input"
                      placeholder="Search settings..."
                      aria-label="Search settings"
                      .value=${e.searchQuery}
                      @input=${t=>e.onSearchChange(t.target.value)}
                    />
                    ${e.searchQuery?c`
                          <button
                            class="config-search__clear"
                            aria-label="Clear search"
                            @click=${()=>e.onSearchChange(``)}
                          >
                            ×
                          </button>
                        `:u}
                  </div>
                </div>
              `:u}

          <div class="config-top-tabs__scroller" role="tablist" aria-label="Settings sections">
            ${C.map(t=>c`
                <button
                  class="config-top-tabs__tab ${e.activeSection===t.key?`active`:``}"
                  role="tab"
                  aria-selected=${e.activeSection===t.key}
                  @click=${()=>e.onSectionChange(t.key)}
                  title=${t.label}
                >
                  ${t.label}
                </button>
              `)}
          </div>
        </div>

        ${n===`invalid`&&!gN.validityDismissed?c`
              <div class="config-validity-warning">
                <svg
                  class="config-validity-warning__icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  width="16"
                  height="16"
                >
                  <path
                    d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                  ></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <span class="config-validity-warning__text"
                  >Your configuration is invalid. Some settings may not work as expected.</span
                >
                <button
                  class="btn btn--sm"
                  @click=${()=>{gN.validityDismissed=!0,m()}}
                >
                  Don't remind again
                </button>
              </div>
            `:u}

        <!-- Diff panel (form mode only - raw mode doesn't have granular diff) -->
        ${ee&&f===`form`?c`
              <details class="config-diff">
                <summary class="config-diff__summary">
                  <span>View ${w.length} pending change${w.length===1?``:`s`}</span>
                  <svg
                    class="config-diff__chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div class="config-diff__content">
                  ${w.map(t=>c`
                      <div class="config-diff__item">
                        <div class="config-diff__path">${t.path}</div>
                        <div class="config-diff__values">
                          <span class="config-diff__from"
                            >${fN(t.path,t.from,e.uiHints)}</span
                          >
                          <span class="config-diff__arrow">→</span>
                          <span class="config-diff__to"
                            >${fN(t.path,t.to,e.uiHints)}</span
                          >
                        </div>
                      </div>
                    `)}
                </div>
              </details>
            `:u}
        ${S&&f===`form`?c`
              <div class="config-section-hero">
                <div class="config-section-hero__icon">
                  ${oN(e.activeSection??``)}
                </div>
                <div class="config-section-hero__text">
                  <div class="config-section-hero__title">${S.label}</div>
                  ${S.description?c`<div class="config-section-hero__desc">
                        ${S.description}
                      </div>`:u}
                </div>
                ${e.activeSection===`env`?c`
                      <button
                        class="config-env-peek-btn ${p?`config-env-peek-btn--active`:``}"
                        title=${p?`Hide env values`:`Reveal env values`}
                        @click=${()=>{gN.envRevealed=!gN.envRevealed,m()}}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          width="16"
                          height="16"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        Peek
                      </button>
                    `:u}
              </div>
            `:u}
        <!-- Form content -->
        <div class="config-content">
          ${e.activeSection===`__appearance__`?r?mN(e):u:f===`form`?c`
                  ${k?mN(e):u}
                  ${e.schemaLoading?c`
                        <div class="config-loading">
                          <div class="config-loading__spinner"></div>
                          <span>Loading schema…</span>
                        </div>
                      `:KM({schema:s.schema,uiHints:e.uiHints,value:e.formValue,rawAvailable:d,disabled:e.loading||!e.formValue,unsupportedPaths:s.unsupportedPaths,onPatch:e.onFormPatch,searchQuery:e.searchQuery,activeSection:e.activeSection,activeSubsection:null,revealSensitive:e.activeSection===`env`?p:!1,isSensitivePathRevealed:_N,onToggleSensitivePath:e=>{vN(e),m()}})}
                `:(()=>{let t=Pe(e.formValue,[],e.uiHints),n=t>0&&!gN.rawRevealed;return c`
                    ${l?c`
                          <div class="callout info" style="margin-bottom: 12px">
                            Your config contains fields the form editor can't safely represent. Use
                            Raw mode to edit those entries.
                          </div>
                        `:u}
                    <div class="field config-raw-field">
                      <span style="display:flex;align-items:center;gap:8px;">
                        Raw config (JSON/JSON5)
                        ${t>0?c`
                              <span class="pill pill--sm"
                                >${t} secret${t===1?``:`s`}
                                ${n?`redacted`:`visible`}</span
                              >
                              <button
                                class="btn btn--icon config-raw-toggle ${n?``:`active`}"
                                title=${n?`Reveal sensitive values`:`Hide sensitive values`}
                                aria-label="Toggle raw config redaction"
                                aria-pressed=${!n}
                                @click=${()=>{gN.rawRevealed=!gN.rawRevealed,m()}}
                              >
                                ${n?H.eyeOff:H.eye}
                              </button>
                            `:u}
                      </span>
                      ${n?c`
                            <div class="callout info" style="margin-top: 12px">
                              ${t} sensitive value${t===1?``:`s`}
                              hidden. Use the reveal button above to edit the raw config.
                            </div>
                          `:c`
                            <textarea
                              placeholder="Raw config (JSON/JSON5)"
                              .value=${e.raw}
                              @input=${t=>{e.onRawChange(t.target.value)}}
                            ></textarea>
                          `}
                    </div>
                  `})()}
        </div>

        ${e.issues.length>0?c`<div class="callout danger" style="margin-top: 12px;">
              <pre class="code-block">${JSON.stringify(e.issues,null,2)}</pre>
            </div>`:u}
      </main>
    </div>
  `}function bN(e){let t=Math.floor(Math.max(0,e)/1e3);if(t<60)return`${t}s`;let n=Math.floor(t/60);return n<60?`${n}m`:`${Math.floor(n/60)}h`}function xN(e,t){return t?c`<div class="exec-approval-meta-row"><span>${e}</span><span>${t}</span></div>`:u}function SN(e){return c`
    <div class="exec-approval-command mono">${e.command}</div>
    <div class="exec-approval-meta">
      ${xN(`Host`,e.host)} ${xN(`Agent`,e.agentId)}
      ${xN(`Session`,e.sessionKey)} ${xN(`CWD`,e.cwd)}
      ${xN(`Resolved`,e.resolvedPath)}
      ${xN(`Security`,e.security)} ${xN(`Ask`,e.ask)}
    </div>
  `}function CN(e){return c`
    ${e.pluginDescription?c`<pre class="exec-approval-command mono" style="white-space:pre-wrap">
${e.pluginDescription}</pre
        >`:u}
    <div class="exec-approval-meta">
      ${xN(`Severity`,e.pluginSeverity)}
      ${xN(`Plugin`,e.pluginId)} ${xN(`Agent`,e.request.agentId)}
      ${xN(`Session`,e.request.sessionKey)}
    </div>
  `}function wN(e){let t=e.execApprovalQueue[0];if(!t)return u;let n=t.request,r=t.expiresAtMs-Date.now(),i=r>0?`expires in ${bN(r)}`:`expired`,a=e.execApprovalQueue.length,o=t.kind===`plugin`;return c`
    <div class="exec-approval-overlay" role="dialog" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">${o?t.pluginTitle??`Plugin approval needed`:`Exec approval needed`}</div>
            <div class="exec-approval-sub">${i}</div>
          </div>
          ${a>1?c`<div class="exec-approval-queue">${a} pending</div>`:u}
        </div>
        ${o?CN(t):SN(n)}
        ${e.execApprovalError?c`<div class="exec-approval-error">${e.execApprovalError}</div>`:u}
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision(`allow-once`)}
          >
            Allow once
          </button>
          <button
            class="btn"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision(`allow-always`)}
          >
            Always allow
          </button>
          <button
            class="btn danger"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision(`deny`)}
          >
            Deny
          </button>
        </div>
      </div>
    </div>
  `}function TN(e){let{pendingGatewayUrl:t}=e;return t?c`
    <div class="exec-approval-overlay" role="dialog" aria-modal="true" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">Change Gateway URL</div>
            <div class="exec-approval-sub">This will reconnect to a different gateway server</div>
          </div>
        </div>
        <div class="exec-approval-command mono">${t}</div>
        <div class="callout danger" style="margin-top: 12px;">
          Only confirm if you trust this URL. Malicious URLs can compromise your system.
        </div>
        <div class="exec-approval-actions">
          <button class="btn primary" @click=${()=>e.handleGatewayUrlConfirm()}>
            Confirm
          </button>
          <button class="btn" @click=${()=>e.handleGatewayUrlCancel()}>Cancel</button>
        </div>
      </div>
    </div>
  `:u}async function EN(e){try{await navigator.clipboard.writeText(e)}catch{}}function DN(e){return c`
    <div
      class="login-gate__command"
      role="button"
      tabindex="0"
      title="Copy command"
      aria-label=${`Copy command: ${e}`}
      @click=${async t=>{t.target?.closest(`.chat-copy-btn`)||await EN(e)}}
      @keydown=${async t=>{t.key!==`Enter`&&t.key!==` `||(t.preventDefault(),await EN(e))}}
    >
      <code>${e}</code>
      ${ky(e,`Copy command`)}
    </div>
  `}function ON(e){return c`
    <div class="login-gate">
      <div class="login-gate__card">
        <div class="login-gate__header">
          <img class="login-gate__logo" src=${$v(kc(e.basePath??``))} alt=${na} />
          <div class="login-gate__title">${na}</div>
          <div class="login-gate__sub">${P(`login.subtitle`)}</div>
        </div>
        <div class="login-gate__form">
          <label class="field">
            <span>${P(`overview.access.wsUrl`)}</span>
            <input
              .value=${e.settings.gatewayUrl}
              @input=${t=>{let n=t.target.value;e.applySettings({...e.settings,gatewayUrl:n})}}
              placeholder="ws://127.0.0.1:18789"
            />
          </label>
          <label class="field">
            <span>${P(`overview.access.token`)}</span>
            <div class="login-gate__secret-row">
              <input
                type=${e.loginShowGatewayToken?`text`:`password`}
                autocomplete="off"
                spellcheck="false"
                .value=${e.settings.token}
                @input=${t=>{let n=t.target.value;e.applySettings({...e.settings,token:n})}}
                placeholder="OPENCLAW_GATEWAY_TOKEN (${P(`login.passwordPlaceholder`)})"
                @keydown=${t=>{t.key===`Enter`&&e.connect()}}
              />
              <button
                type="button"
                class="btn btn--icon ${e.loginShowGatewayToken?`active`:``}"
                title=${e.loginShowGatewayToken?`Hide token`:`Show token`}
                aria-label="Toggle token visibility"
                aria-pressed=${e.loginShowGatewayToken}
                @click=${()=>{e.loginShowGatewayToken=!e.loginShowGatewayToken}}
              >
                ${e.loginShowGatewayToken?H.eye:H.eyeOff}
              </button>
            </div>
          </label>
          <label class="field">
            <span>${P(`overview.access.password`)}</span>
            <div class="login-gate__secret-row">
              <input
                type=${e.loginShowGatewayPassword?`text`:`password`}
                autocomplete="off"
                spellcheck="false"
                .value=${e.password}
                @input=${t=>{e.password=t.target.value}}
                placeholder="${P(`login.passwordPlaceholder`)}"
                @keydown=${t=>{t.key===`Enter`&&e.connect()}}
              />
              <button
                type="button"
                class="btn btn--icon ${e.loginShowGatewayPassword?`active`:``}"
                title=${e.loginShowGatewayPassword?`Hide password`:`Show password`}
                aria-label="Toggle password visibility"
                aria-pressed=${e.loginShowGatewayPassword}
                @click=${()=>{e.loginShowGatewayPassword=!e.loginShowGatewayPassword}}
              >
                ${e.loginShowGatewayPassword?H.eye:H.eyeOff}
              </button>
            </div>
          </label>
          <button class="btn primary login-gate__connect" @click=${()=>e.connect()}>
            ${P(`common.connect`)}
          </button>
        </div>
        ${e.lastError?c`<div class="callout danger" style="margin-top: 14px;">
              <div>${oa(e.lastError)}</div>
            </div>`:``}
        <div class="login-gate__help">
          <div class="login-gate__help-title">${P(`overview.connection.title`)}</div>
          <ol class="login-gate__steps">
            <li>${P(`overview.connection.step1`)}${DN(`kova gateway run`)}</li>
            <li>${P(`overview.connection.step2`)} ${DN(`kova dashboard`)}</li>
            <li>${P(`overview.connection.step3`)}</li>
          </ol>
        </div>
      </div>
    </div>
  `}var kN=[{id:`openrouter`,emoji:`🔀`,label:`OpenRouter`,description:`Access 100+ models with one key. Best for most users.`,keyPlaceholder:`sk-or-v1-...`,keyUrl:`https://openrouter.ai/keys`,recommended:!0},{id:`anthropic`,emoji:`🧠`,label:`Anthropic`,description:`Claude models. Smartest reasoning.`,keyPlaceholder:`sk-ant-...`,keyUrl:`https://console.anthropic.com/keys`},{id:`openai`,emoji:`⚡`,label:`OpenAI`,description:`GPT models. Fast and reliable.`,keyPlaceholder:`sk-...`,keyUrl:`https://platform.openai.com/api-keys`}];function AN(e){return e?c`
    <div class="callout ${e.kind===`error`?`danger`:`success`}">${e.text}</div>
  `:u}function jN(e,t){let n=e?.channels?.[t];if(!(!n||typeof n!=`object`||Array.isArray(n)))return n}function MN(e,t){let n=e?.channelAccounts?.[t];return Array.isArray(n)?n:[]}function NN(e){let t=jN(e,`telegram`);return t?.configured||t?.running?!0:MN(e,`telegram`).some(e=>e.configured||e.running)}function PN(e){let t=jN(e,`telegram`),n=MN(e,`telegram`)[0],r=(t?.probe)?.bot?.username?.trim();return r?`Connected as @${r}`:n?.name?.trim()?`Connected as ${n.name.trim()}`:null}function FN(e){return e?.self?.e164?.trim()||e?.self?.jid?.trim()||null}function IN(e){return c`
    <div class="row" style="gap: 8px; flex-wrap: wrap;">
      ${[`Welcome`,`Provider`,`Channel`].map((t,n)=>{let r=e===n+1,i=e>n+1;return c`
          <span class="chip ${r||i?`chip-ok`:``}">
            ${n+1}. ${t}
          </span>
        `})}
    </div>
  `}function LN(e){return c`
    <div style="display: grid; gap: 20px; text-align: center;">
      <div
        style="
          width: 92px;
          height: 92px;
          margin: 0 auto;
          border-radius: 28px;
          display: grid;
          place-items: center;
          background:
            radial-gradient(circle at top, rgba(255,255,255,0.28), transparent 55%),
            linear-gradient(135deg, rgba(25,118,210,0.95), rgba(3,169,244,0.82));
          color: white;
          font-size: 34px;
          font-weight: 700;
          letter-spacing: 0.08em;
        "
      >
        K
      </div>
      <div style="display: grid; gap: 8px;">
        <div style="font-size: 16px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted);">
          Kova
        </div>
        <h1 style="margin: 0; font-size: clamp(32px, 6vw, 52px); line-height: 1.04;">
          Meet your AI team
        </h1>
        <p class="muted" style="margin: 0; font-size: 16px;">
          Set up Kova in 2 minutes. No terminal needed.
        </p>
      </div>
      <div class="row" style="justify-content: center;">
        <button class="btn primary" style="min-width: 220px;" @click=${()=>e.onStart()}>
          Get Started ->
        </button>
      </div>
    </div>
  `}function RN(e){let t=kN.find(t=>t.id===e.selectedProvider)??kN[0],n=e.providerStatuses[t.id]?.hasKey===!0,r=e.savingProviderId===t.id,i=e.providerInputs[t.id],a=e.providerStatuses[t.id]?.maskedKey??null;return c`
    <div style="display: grid; gap: 20px;">
      ${IN(e.step)}
      <div style="display: grid; gap: 8px;">
        <h1 style="margin: 0; font-size: clamp(28px, 4vw, 40px);">Connect your AI provider</h1>
        <p class="muted" style="margin: 0;">
          Pick the provider you want Kova to use, save the key, then continue to channel setup.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px;">
        ${kN.map(n=>c`
            <button
              class="card"
              style="
                text-align: left;
                display: grid;
                gap: 10px;
                cursor: pointer;
                border-width: 2px;
                border-color: ${n.id===t.id?`var(--accent, #1976d2)`:`var(--border)`};
                box-shadow: ${n.id===t.id?`0 0 0 2px rgba(25,118,210,0.12)`:`none`};
              "
              @click=${()=>e.onSelectProvider(n.id)}
            >
              <div class="row" style="justify-content: space-between; align-items: center;">
                <span style="font-size: 22px;">${n.emoji}</span>
                ${n.recommended?c`<span class="chip chip-ok">Recommended</span>`:u}
              </div>
              <div style="display: grid; gap: 4px;">
                <div style="font-weight: 700;">${n.label}</div>
                <div class="muted" style="font-size: 13px;">${n.description}</div>
              </div>
            </button>
          `)}
      </div>

      <div class="card" style="display: grid; gap: 14px;">
        <div class="row" style="justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap;">
          <div style="display: grid; gap: 4px;">
            <div class="card-title">${t.emoji} ${t.label}</div>
            <div class="card-sub">${t.description}</div>
          </div>
          <span class="chip ${n?`chip-ok`:``}">${n?`Key saved`:`Needs key`}</span>
        </div>

        <label class="field">
          <span>${t.label} API key</span>
          <input
            type="password"
            .value=${i}
            @input=${n=>e.onProviderInput(t.id,n.target.value)}
            placeholder=${t.keyPlaceholder}
            autocomplete="off"
            ?disabled=${r||!e.connected}
          />
        </label>

        <div class="row" style="justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap;">
          <a
            href=${t.keyUrl}
            target=${$j}
            rel=${eM()}
            style="font-size: 14px; font-weight: 600;"
          >
            Get a free key ->
          </a>
          ${a?c`
                <div class="muted" style="font-size: 13px;">
                  Saved key:
                  <span style="font-family: var(--font-mono, monospace);">${a}</span>
                </div>
              `:u}
        </div>

        ${AN(e.providerMessages[t.id])}

        <div style="display: grid; gap: 10px; justify-items: start;">
          <button
            class="btn"
            ?disabled=${r||!e.connected||!i.trim()}
            @click=${()=>e.onSaveProvider(t.id)}
          >
            ${r?`Saving...`:`Save key`}
          </button>
          <button
            class="btn primary"
            style="min-width: 200px;"
            ?disabled=${!n||r}
            @click=${()=>e.onContinueFromProvider()}
          >
            Continue ->
          </button>
          <button
            class="btn-link"
            style="padding: 0; border: 0; background: none; color: var(--muted);"
            @click=${()=>e.onSkip()}
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  `}function zN(e){let t=NN(e.snapshot),n=PN(e.snapshot),r=jN(e.snapshot,`whatsapp`),i=r?.connected===!0||e.whatsappConnected===!0,a=FN(r);return c`
    <div style="display: grid; gap: 20px;">
      ${IN(e.step)}
      <div style="display: grid; gap: 8px;">
        <h1 style="margin: 0; font-size: clamp(28px, 4vw, 40px);">
          Connect a channel to chat with your team
        </h1>
        <p class="muted" style="margin: 0;">
          Start with Telegram or WhatsApp now. You can always add the other channels later.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
        <div class="card" style="display: grid; gap: 14px;">
          <div class="row" style="justify-content: space-between; align-items: center; gap: 12px;">
            <div style="display: grid; gap: 4px;">
              <div class="card-title">Telegram</div>
              <div class="card-sub">Recommended for the fastest first chat loop.</div>
            </div>
            <span class="chip ${t?`chip-ok`:``}">
              ${t?`Connected`:`Recommended`}
            </span>
          </div>

          <label class="field">
            <span>Bot token</span>
            <input
              type="password"
              .value=${e.telegramSetupToken}
              @input=${t=>e.onTelegramTokenInput(t.target.value)}
              placeholder="123456:ABCDEF..."
              autocomplete="off"
              ?disabled=${e.telegramSetupBusy}
            />
          </label>

          ${n?c`<div class="muted" style="font-size: 13px;">${n}</div>`:u}
          ${AN(e.telegramSetupMessage)}

          <button
            class="btn primary"
            ?disabled=${e.telegramSetupBusy||!e.connected}
            @click=${()=>e.onTelegramConnect()}
          >
            ${e.telegramSetupBusy?`Saving...`:`Connect Telegram`}
          </button>
        </div>

        <div class="card" style="display: grid; gap: 14px;">
          <div class="row" style="justify-content: space-between; align-items: center; gap: 12px;">
            <div style="display: grid; gap: 4px;">
              <div class="card-title">WhatsApp</div>
              <div class="card-sub">Link from your phone with a QR code.</div>
            </div>
            <span class="chip ${i?`chip-ok`:``}">
              ${i?`Connected`:`QR setup`}
            </span>
          </div>

          ${a?c`<div class="muted" style="font-size: 13px;">Phone: ${a}</div>`:u}
          ${e.whatsappMessage?c`<div class="callout">${e.whatsappMessage}</div>`:c`
                <div class="muted" style="font-size: 13px;">
                  Open WhatsApp, go to Linked Devices, then scan the QR code here.
                </div>
              `}

          ${e.whatsappQrDataUrl?c`
                <div class="qr-wrap" style="margin: 0; justify-self: start;">
                  <img src=${e.whatsappQrDataUrl} alt="WhatsApp QR" />
                </div>
              `:u}

          <div class="row" style="gap: 8px; flex-wrap: wrap;">
            ${i?c`
                  <button
                    class="btn"
                    ?disabled=${e.whatsappBusy}
                    @click=${()=>e.onWhatsAppLogout()}
                  >
                    ${e.whatsappBusy?`Working...`:`Disconnect`}
                  </button>
                `:c`
                  <button
                    class="btn primary"
                    ?disabled=${e.whatsappBusy||!e.connected}
                    @click=${()=>e.onWhatsAppStart()}
                  >
                    ${e.whatsappBusy?`Starting...`:e.whatsappQrDataUrl?`Refresh QR`:`Connect via QR`}
                  </button>
                `}
          </div>
        </div>
      </div>

      <div class="row" style="justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap;">
        <button
          class="btn-link"
          style="padding: 0; border: 0; background: none; color: var(--muted);"
          @click=${()=>e.onSkip()}
        >
          Skip for now
        </button>
        <button class="btn primary" style="min-width: 220px;" @click=${()=>e.onFinish()}>
          Finish Setup ->
        </button>
      </div>
    </div>
  `}function BN(e){return c`
    <section
      class="page"
      style="
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 32px 20px;
        background:
          radial-gradient(circle at top left, rgba(25,118,210,0.16), transparent 26%),
          radial-gradient(circle at top right, rgba(3,169,244,0.14), transparent 24%),
          linear-gradient(180deg, rgba(255,255,255,0.02), transparent 40%);
      "
    >
      <div
        class="card"
        style="
          width: min(960px, 100%);
          display: grid;
          gap: 22px;
          padding: clamp(24px, 4vw, 40px);
          border-radius: 28px;
          box-shadow: 0 24px 80px rgba(15, 23, 42, 0.16);
        "
      >
        ${e.step===1?LN(e):e.step===2?RN(e):zN(e)}
      </div>
    </section>
  `}function VN(e){return e===`error`?`danger`:e===`warning`?`warn`:``}function HN(e){return e in H?H[e]:H.radio}function UN(e){return e.items.length===0?u:c`
    <section class="card ov-attention">
      <div class="card-title">${P(`overview.attention.title`)}</div>
      <div class="ov-attention-list">
        ${e.items.map(e=>c`
            <div class="ov-attention-item ${VN(e.severity)}">
              <span class="ov-attention-icon">${HN(e.icon)}</span>
              <div class="ov-attention-body">
                <div class="ov-attention-title">${e.title}</div>
                <div class="muted">${e.description}</div>
              </div>
              ${e.href?c`<a
                    class="ov-attention-link"
                    href=${e.href}
                    target=${e.external?$j:u}
                    rel=${e.external?eM():u}
                    >${P(`common.docs`)}</a
                  >`:u}
            </div>
          `)}
      </div>
    </section>
  `}function WN(e){let t=e.ts??null;return t?S(t):`n/a`}function GN(e){return e?`${new Date(e).toLocaleDateString(void 0,{weekday:`short`})}, ${x(e)} (${S(e)})`:`n/a`}function KN(e){if(e.totalTokens==null)return`n/a`;let t=e.totalTokens??0,n=e.contextTokens??0;return n?`${t} / ${n}`:String(t)}function qN(e){if(e==null)return``;try{return JSON.stringify(e,null,2)}catch{return String(e)}}function JN(e){let t=e.state??{},n=t.nextRunAtMs?x(t.nextRunAtMs):`n/a`,r=t.lastRunAtMs?x(t.lastRunAtMs):`n/a`;return`${t.lastStatus??`n/a`} · next ${n} · last ${r}`}function YN(e){let t=e.schedule;if(t.kind===`at`){let e=Date.parse(t.at);return Number.isFinite(e)?`At ${x(e)}`:`At ${t.at}`}return t.kind===`every`?`Every ${b(t.everyMs)}`:`Cron ${t.expr}${t.tz?` (${t.tz})`:``}`}function XN(e){let t=e.payload;if(t.kind===`systemEvent`)return`System: ${t.text}`;let n=`Agent: ${t.message}`,r=e.delivery;if(r&&r.mode!==`none`){let e=r.mode===`webhook`?r.to?` (${r.to})`:``:r.channel||r.to?` (${r.channel??`last`}${r.to?` -> ${r.to}`:``})`:``;return`${n} · ${r.mode}${e}`}return n}var ZN=/\d{3,}/g;function QN(e){return c`${Ah(e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(ZN,e=>`<span class="blur-digits">${e}</span>`))}`}function $N(e,t){return c`
    <button class="ov-card" data-kind=${e.kind} @click=${()=>t(e.tab)}>
      <span class="ov-card__label">${e.label}</span>
      <span class="ov-card__value">${e.value}</span>
      <span class="ov-card__hint">${e.hint}</span>
    </button>
  `}function eP(){return c`
    <section class="ov-cards">
      ${[0,1,2,3].map(e=>c`
          <div class="ov-card" style="cursor:default;animation-delay:${e*50}ms">
            <span class="skeleton skeleton-line" style="width:60px;height:10px"></span>
            <span class="skeleton skeleton-stat"></span>
            <span class="skeleton skeleton-line skeleton-line--medium" style="height:12px"></span>
          </div>
        `)}
    </section>
  `}function tP(e){if(!(e.usageResult!=null||e.sessionsResult!=null||e.skillsReport!=null))return eP();let t=e.usageResult?.totals,n=C(t?.totalCost),r=v(t?.totalTokens),i=t?String(e.usageResult?.aggregates?.messages?.total??0):`0`,a=e.sessionsResult?.count??null,o=e.skillsReport?.skills??[],s=o.filter(e=>!e.disabled).length,l=o.filter(e=>e.blockedByAllowlist).length,d=o.length,f=e.cronStatus?.enabled??null,p=e.cronStatus?.nextWakeAtMs??null,m=e.cronJobs.length,h=e.cronJobs.filter(e=>e.state?.lastStatus===`error`).length,g=f==null?P(`common.na`):f?`${m} jobs`:P(`common.disabled`),_=h>0?c`<span class="danger">${h} failed</span>`:p?P(`overview.stats.cronNext`,{time:GN(p)}):``,y=[{kind:`cost`,tab:`usage`,label:P(`overview.cards.cost`),value:n,hint:`${r} tokens · ${i} msgs`},{kind:`sessions`,tab:`sessions`,label:P(`overview.stats.sessions`),value:String(a??P(`common.na`)),hint:P(`overview.stats.sessionsHint`)},{kind:`skills`,tab:`skills`,label:P(`overview.cards.skills`),value:`${s}/${d}`,hint:l>0?`${l} blocked`:`${s} active`},{kind:`cron`,tab:`cron`,label:P(`overview.stats.cron`),value:g,hint:_}],b=e.sessionsResult?.sessions.slice(0,5)??[];return c`
    <section class="ov-cards">${y.map(t=>$N(t,e.onNavigate))}</section>

    ${b.length>0?c`
          <section class="ov-recent">
            <h3 class="ov-recent__title">${P(`overview.cards.recentSessions`)}</h3>
            <ul class="ov-recent__list">
              ${b.map(e=>c`
                  <li class="ov-recent__row">
                    <span class="ov-recent__key"
                      >${QN(e.displayName||e.label||e.key)}</span
                    >
                    <span class="ov-recent__model">${e.model??``}</span>
                    <span class="ov-recent__time"
                      >${e.updatedAt?S(e.updatedAt):``}</span
                    >
                  </li>
                `)}
            </ul>
          </section>
        `:u}
  `}function nP(e){if(e.events.length===0)return u;let t=e.events.slice(0,20);return c`
    <details class="card ov-event-log" open>
      <summary class="ov-expandable-toggle">
        <span class="nav-item__icon">${H.radio}</span>
        ${P(`overview.eventLog.title`)}
        <span class="ov-count-badge">${e.events.length}</span>
      </summary>
      <div class="ov-event-log-list">
        ${t.map(e=>c`
            <div class="ov-event-log-entry">
              <span class="ov-event-log-ts">${new Date(e.ts).toLocaleTimeString()}</span>
              <span class="ov-event-log-name">${e.event}</span>
              ${e.payload?c`<span class="ov-event-log-payload muted"
                    >${qN(e.payload).slice(0,120)}</span
                  >`:u}
            </div>
          `)}
      </div>
    </details>
  `}var rP=new Set([L.AUTH_REQUIRED,L.AUTH_TOKEN_MISSING,L.AUTH_PASSWORD_MISSING,L.AUTH_TOKEN_NOT_CONFIGURED,L.AUTH_PASSWORD_NOT_CONFIGURED]),iP=new Set([...rP,L.AUTH_UNAUTHORIZED,L.AUTH_TOKEN_MISMATCH,L.AUTH_PASSWORD_MISMATCH,L.AUTH_DEVICE_TOKEN_MISMATCH,L.AUTH_RATE_LIMITED,L.AUTH_TAILSCALE_IDENTITY_MISSING,L.AUTH_TAILSCALE_PROXY_MISSING,L.AUTH_TAILSCALE_WHOIS_FAILED,L.AUTH_TAILSCALE_IDENTITY_MISMATCH]),aP=new Set([L.CONTROL_UI_DEVICE_IDENTITY_REQUIRED,L.DEVICE_IDENTITY_REQUIRED]);function oP(e,t,n){return e||!t?!1:n===L.PAIRING_REQUIRED?!0:t.toLowerCase().includes(`pairing required`)}function sP(e){return e.connected||!e.lastError?null:e.lastErrorCode?iP.has(e.lastErrorCode)?rP.has(e.lastErrorCode)?`required`:`failed`:null:e.lastError.toLowerCase().includes(`unauthorized`)?!e.hasToken&&!e.hasPassword?`required`:`failed`:null}function cP(e,t,n){if(e||!t)return!1;if(n)return aP.has(n);let r=t.toLowerCase();return r.includes(`secure context`)||r.includes(`device identity required`)}function lP(e){return e.replace(/\x1b\]8;;.*?\x1b\\|\x1b\]8;;\x1b\\/g,``).replace(/\x1b\[[0-9;]*m/g,``)}function uP(e){if(e.lines.length===0)return u;let t=e.lines.slice(-50).map(e=>lP(e)).join(`
`);return c`
    <details class="card ov-log-tail" open>
      <summary class="ov-expandable-toggle">
        <span class="nav-item__icon">${H.scrollText}</span>
        ${P(`overview.logTail.title`)}
        <span class="ov-count-badge">${e.lines.length}</span>
        <span
          class="ov-log-refresh"
          @click=${t=>{t.preventDefault(),t.stopPropagation(),e.onRefreshLogs()}}
          >${H.loader}</span
        >
      </summary>
      <pre class="ov-log-tail-content">${t}</pre>
    </details>
  `}function dP(e){let t=e.hello?.snapshot,n=t?.uptimeMs?b(t.uptimeMs):P(`common.na`),r=e.hello?.policy?.tickIntervalMs,i=r?`${(r/1e3).toFixed(r%1e3==0?0:1)}s`:P(`common.na`),a=t?.authMode===`trusted-proxy`,o=oP(e.connected,e.lastError,e.lastErrorCode)?c`
      <div class="muted" style="margin-top: 8px">
        ${P(`overview.pairing.hint`)}
        <div style="margin-top: 6px">
          <span class="mono">kova devices list</span><br />
          <span class="mono">kova devices approve &lt;requestId&gt;</span>
        </div>
        <div style="margin-top: 6px; font-size: 12px;">${P(`overview.pairing.mobileHint`)}</div>
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.kova.ai/web/control-ui#device-pairing-first-connection"
            target=${$j}
            rel=${eM()}
            title="Device pairing docs (opens in new tab)"
            >Docs: Device pairing</a
          >
        </div>
      </div>
    `:null,s=(()=>{let t=sP({connected:e.connected,lastError:e.lastError,lastErrorCode:e.lastErrorCode,hasToken:!!e.settings.token.trim(),hasPassword:!!e.password.trim()});return t==null?null:t===`required`?c`
        <div class="muted" style="margin-top: 8px">
          ${P(`overview.auth.required`)}
          <div style="margin-top: 6px">
            <span class="mono">kova dashboard --no-open</span> → tokenized URL<br />
            <span class="mono">kova doctor --generate-gateway-token</span> → set token
          </div>
          <div style="margin-top: 6px">
            <a
              class="session-link"
              href="https://docs.kova.ai/web/dashboard"
              target=${$j}
              rel=${eM()}
              title="Control UI auth docs (opens in new tab)"
              >Docs: Control UI auth</a
            >
          </div>
        </div>
      `:c`
      <div class="muted" style="margin-top: 8px">
        ${P(`overview.auth.failed`,{command:`kova dashboard --no-open`})}
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.kova.ai/web/dashboard"
            target=${$j}
            rel=${eM()}
            title="Control UI auth docs (opens in new tab)"
            >Docs: Control UI auth</a
          >
        </div>
      </div>
    `})(),l=e.connected||!e.lastError||!(typeof window<`u`)||window.isSecureContext||!cP(e.connected,e.lastError,e.lastErrorCode)?null:c`
      <div class="muted" style="margin-top: 8px">
        ${P(`overview.insecure.hint`,{url:`http://127.0.0.1:18789`})}
        <div style="margin-top: 6px">
          ${P(`overview.insecure.stayHttp`,{config:`gateway.controlUi.allowInsecureAuth: true`})}
        </div>
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.kova.ai/gateway/tailscale"
            target=${$j}
            rel=${eM()}
            title="Tailscale Serve docs (opens in new tab)"
            >Docs: Tailscale Serve</a
          >
          <span class="muted"> · </span>
          <a
            class="session-link"
            href="https://docs.kova.ai/web/control-ui#insecure-http"
            target=${$j}
            rel=${eM()}
            title="Insecure HTTP docs (opens in new tab)"
            >Docs: Insecure HTTP</a
          >
        </div>
      </div>
    `,d=me(e.settings.locale)?e.settings.locale:ve.getLocale();return c`
    <section class="grid">
      <div class="card">
        <div class="card-title">${P(`overview.access.title`)}</div>
        <div class="card-sub">${P(`overview.access.subtitle`)}</div>
        <div class="ov-access-grid" style="margin-top: 16px;">
          <label class="field ov-access-grid__full">
            <span>${P(`overview.access.wsUrl`)}</span>
            <input
              .value=${e.settings.gatewayUrl}
              @input=${t=>{let n=t.target.value;e.onSettingsChange({...e.settings,gatewayUrl:n,token:n.trim()===e.settings.gatewayUrl.trim()?e.settings.token:``})}}
              placeholder="ws://100.x.y.z:18789"
            />
          </label>
          ${a?``:c`
                <label class="field">
                  <span>${P(`overview.access.token`)}</span>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <input
                      type=${e.showGatewayToken?`text`:`password`}
                      autocomplete="off"
                      style="flex: 1;"
                      .value=${e.settings.token}
                      @input=${t=>{let n=t.target.value;e.onSettingsChange({...e.settings,token:n})}}
                      placeholder="OPENCLAW_GATEWAY_TOKEN"
                    />
                    <button
                      type="button"
                      class="btn btn--icon ${e.showGatewayToken?`active`:``}"
                      style="width: 36px; height: 36px;"
                      title=${e.showGatewayToken?`Hide token`:`Show token`}
                      aria-label="Toggle token visibility"
                      aria-pressed=${e.showGatewayToken}
                      @click=${e.onToggleGatewayTokenVisibility}
                    >
                      ${e.showGatewayToken?H.eye:H.eyeOff}
                    </button>
                  </div>
                </label>
                <label class="field">
                  <span>${P(`overview.access.password`)}</span>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <input
                      type=${e.showGatewayPassword?`text`:`password`}
                      autocomplete="off"
                      style="flex: 1;"
                      .value=${e.password}
                      @input=${t=>{let n=t.target.value;e.onPasswordChange(n)}}
                      placeholder="system or shared password"
                    />
                    <button
                      type="button"
                      class="btn btn--icon ${e.showGatewayPassword?`active`:``}"
                      style="width: 36px; height: 36px;"
                      title=${e.showGatewayPassword?`Hide password`:`Show password`}
                      aria-label="Toggle password visibility"
                      aria-pressed=${e.showGatewayPassword}
                      @click=${e.onToggleGatewayPasswordVisibility}
                    >
                      ${e.showGatewayPassword?H.eye:H.eyeOff}
                    </button>
                  </div>
                </label>
              `}
          <label class="field">
            <span>${P(`overview.access.sessionKey`)}</span>
            <input
              .value=${e.settings.sessionKey}
              @input=${t=>{let n=t.target.value;e.onSessionKeyChange(n)}}
            />
          </label>
          <label class="field">
            <span>${P(`overview.access.language`)}</span>
            <select
              .value=${d}
              @change=${t=>{let n=t.target.value;ve.setLocale(n),e.onSettingsChange({...e.settings,locale:n})}}
            >
              ${pe.map(e=>{let t=e.replace(/-([a-zA-Z])/g,(e,t)=>t.toUpperCase());return c`<option value=${e} ?selected=${d===e}>
                  ${P(`languages.${t}`)}
                </option>`})}
            </select>
          </label>
        </div>
        <div class="row" style="margin-top: 14px;">
          <button class="btn" @click=${()=>e.onConnect()}>${P(`common.connect`)}</button>
          <button class="btn" @click=${()=>e.onRefresh()}>${P(`common.refresh`)}</button>
          <span class="muted"
            >${P(a?`overview.access.trustedProxy`:`overview.access.connectHint`)}</span
          >
        </div>
        ${e.connected?u:c`
              <div class="login-gate__help" style="margin-top: 16px;">
                <div class="login-gate__help-title">${P(`overview.connection.title`)}</div>
                <ol class="login-gate__steps">
                  <li>
                    ${P(`overview.connection.step1`)} ${DN(`kova gateway run`)}
                  </li>
                  <li>
                    ${P(`overview.connection.step2`)} ${DN(`kova dashboard`)}
                  </li>
                  <li>${P(`overview.connection.step3`)}</li>
                  <li>
                    ${P(`overview.connection.step4`)}<code
                      >kova doctor --generate-gateway-token</code
                    >
                  </li>
                </ol>
                <div class="login-gate__docs">
                  ${P(`overview.connection.docsHint`)}
                  <a
                    class="session-link"
                    href="https://docs.kova.ai/web/dashboard"
                    target="_blank"
                    rel="noreferrer"
                    >${P(`overview.connection.docsLink`)}</a
                  >
                </div>
              </div>
            `}
      </div>

      <div class="card">
        <div class="card-title">${P(`overview.snapshot.title`)}</div>
        <div class="card-sub">${P(`overview.snapshot.subtitle`)}</div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">${P(`overview.snapshot.status`)}</div>
            <div class="stat-value ${e.connected?`ok`:`warn`}">
              ${e.connected?P(`common.ok`):P(`common.offline`)}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">${P(`overview.snapshot.uptime`)}</div>
            <div class="stat-value">${n}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${P(`overview.snapshot.tickInterval`)}</div>
            <div class="stat-value">${i}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${P(`overview.snapshot.lastChannelsRefresh`)}</div>
            <div class="stat-value">
              ${e.lastChannelsRefresh?S(e.lastChannelsRefresh):P(`common.na`)}
            </div>
          </div>
        </div>
        ${e.lastError?c`<div class="callout danger" style="margin-top: 14px;">
              <div>${oa(e.lastError)}</div>
              ${o??``} ${s??``} ${l??``}
            </div>`:c`
              <div class="callout" style="margin-top: 14px">
                ${P(`overview.snapshot.channelsHint`)}
              </div>
            `}
      </div>
    </section>

    <div class="ov-section-divider"></div>

    ${tP({usageResult:e.usageResult,sessionsResult:e.sessionsResult,skillsReport:e.skillsReport,cronJobs:e.cronJobs,cronStatus:e.cronStatus,presenceCount:e.presenceCount,onNavigate:e.onNavigate})}
    ${UN({items:e.attentionItems})}

    <div class="ov-section-divider"></div>

    <div class="ov-bottom-grid">
      ${nP({events:e.eventLog})}
      ${uP({lines:e.overviewLogLines,onRefreshLogs:e.onRefreshLogs})}
    </div>
  `}var fP;function pP(e){let t={mod:null,promise:null};return()=>t.mod?t.mod:(t.promise||=e().then(e=>(t.mod=e,fP?.(),e)),null)}var mP=pP(()=>_(()=>import(`./agents-CLtFQRXd.js`),__vite__mapDeps([17,14,18,19,20,21]),import.meta.url)),hP=pP(()=>_(()=>import(`./briefing-DS4VWpUL.js`),__vite__mapDeps([22,18]),import.meta.url)),gP=pP(()=>_(()=>import(`./channels-BKdM7i5r.js`),__vite__mapDeps([23,18,19,20]),import.meta.url)),_P=pP(()=>_(()=>import(`./cron-C11m3yJi.js`),__vite__mapDeps([24,18,19]),import.meta.url)),vP=pP(()=>_(()=>import(`./debug-DFf2qCcM.js`),__vite__mapDeps([25,18]),import.meta.url)),yP=pP(()=>_(()=>import(`./employees-DV-5FV4K.js`),__vite__mapDeps([26,18,19]),import.meta.url)),bP=pP(()=>_(()=>import(`./inbox-C4tOnlJr.js`),__vite__mapDeps([27,18,19]),import.meta.url)),xP=pP(()=>_(()=>import(`./instances-Cyr-tbN6.js`),__vite__mapDeps([28,18]),import.meta.url)),SP=pP(()=>_(()=>import(`./logs-B7--7dYP.js`),__vite__mapDeps([29,18]),import.meta.url)),CP=pP(()=>_(()=>import(`./canvas-BfC_2Nqy.js`),__vite__mapDeps([30,18]),import.meta.url)),wP=pP(()=>_(()=>import(`./meetings-DSqn6s7n.js`),__vite__mapDeps([31,18,19]),import.meta.url)),TP=pP(()=>_(()=>import(`./nodes-Cvq_sAqT.js`),__vite__mapDeps([32,18,19]),import.meta.url)),EP=pP(()=>_(()=>import(`./routing-DizI_FiJ.js`),__vite__mapDeps([33,18]),import.meta.url)),DP=pP(()=>_(()=>import(`./sessions-N9rgJP2R.js`),__vite__mapDeps([34,18,19]),import.meta.url)),OP=pP(()=>_(()=>import(`./skills-D1vP4MkL.js`),__vite__mapDeps([35,18,19,21]),import.meta.url));function kP(e,t){let n=e();return n?t(n):u}var AP=`openclaw:control-ui:update-banner-dismissed:v1`,jP=[`off`,`minimal`,`low`,`medium`,`high`];function MP(e,t){let n=e?.channels?.[t];return!n||typeof n!=`object`||Array.isArray(n)?null:n}function NP(e){let t=MP(e.channelsSnapshot,`telegram`),n=MP(e.channelsSnapshot,`whatsapp`),r=0;return t?.running===!0&&(r+=1),(n?.connected===!0||e.whatsappLoginConnected===!0)&&(r+=1),r}function PP(e){let t=e.employeesDashboard?.employees.filter(e=>e.id.startsWith(`kova-`)).length??0;return t>0?t:e.agentsList?.agents.filter(e=>e.id.startsWith(`kova-`)).length??0}function FP(e){let t=NP(e),n=PP(e);return c`
    <div class="health-bar" aria-label="Gateway health">
      <div
        class="health-item"
        title=${e.connected?`Gateway is connected`:`Gateway is disconnected`}
      >
        <span
          class="health-dot ${e.connected?`health-dot--online`:`health-dot--offline`}"
          aria-hidden="true"
        ></span>
        <span>${e.connected?`Online`:`Offline`}</span>
      </div>
      <button
        type="button"
        class="health-item health-item--action"
        title="Open channels"
        @click=${()=>e.setTab(`channels`)}
      >
        <span class="health-icon" aria-hidden="true">${H.zap}</span>
        <span>${t} ${t===1?`channel`:`channels`}</span>
      </button>
      <button
        type="button"
        class="health-item health-item--action"
        title="Open employees"
        @click=${()=>e.setTab(`employees`)}
      >
        <span class="health-icon" aria-hidden="true">${H.brain}</span>
        <span>${n} employees</span>
      </button>
    </div>
  `}var IP=[`UTC`,`America/Los_Angeles`,`America/Denver`,`America/Chicago`,`America/New_York`,`Europe/London`,`Europe/Berlin`,`Asia/Tokyo`];function LP(e){return/^https?:\/\//i.test(e.trim())}function RP(e){return typeof e==`string`?e.trim():``}function zP(e){let t=new Set,n=[];for(let r of e){let e=r.trim();if(!e)continue;let i=e.toLowerCase();t.has(i)||(t.add(i),n.push(e))}return n}function BP(){try{let e=g()?.getItem(AP);if(!e)return null;let t=JSON.parse(e);return!t||typeof t.latestVersion!=`string`?null:{latestVersion:t.latestVersion,channel:typeof t.channel==`string`?t.channel:null,dismissedAtMs:typeof t.dismissedAtMs==`number`?t.dismissedAtMs:Date.now()}}catch{return null}}function VP(e){let t=BP();if(!t)return!1;let n=e,r=n&&typeof n.latestVersion==`string`?n.latestVersion:null,i=n&&typeof n.channel==`string`?n.channel:null;return!!(r&&t.latestVersion===r&&t.channel===i)}function HP(e){let t=e,n=t&&typeof t.latestVersion==`string`?t.latestVersion:null;if(!n)return;let r={latestVersion:n,channel:t&&typeof t.channel==`string`?t.channel:null,dismissedAtMs:Date.now()};try{g()?.setItem(AP,JSON.stringify(r))}catch{}}var UP=/^data:/i,WP=/^https?:\/\//i,GP=[`channels`,`messages`,`broadcast`,`talk`,`audio`],KP=[`__appearance__`,`ui`,`wizard`],qP=[`commands`,`hooks`,`bindings`,`cron`,`approvals`,`plugins`],JP=[`gateway`,`web`,`browser`,`nodeHost`,`canvasHost`,`discovery`,`media`,`acp`,`mcp`],YP=[`agents`,`models`,`skills`,`tools`,`memory`,`session`];function XP(e){let t=e.agentsList?.agents??[],n=A(e.sessionKey)?.agentId??e.agentsList?.defaultId??`main`,r=t.find(e=>e.id===n)?.identity,i=r?.avatarUrl??r?.avatar;if(i)return UP.test(i)||WP.test(i)?i:r?.avatarUrl}function ZP(e){let t=e,n=typeof t.requestUpdate==`function`?()=>t.requestUpdate?.():void 0;if(fP=n,!e.connected)return c` ${ON(e)} ${TN(e)} `;if(e.tab===`onboarding`)return c`
      ${BN({step:e.onboardingStep,selectedProvider:e.onboardingProvider,connected:e.connected,savingProviderId:e.apiKeysSavingProviderId,providerStatuses:e.apiKeyProviderStatuses,providerInputs:e.apiKeyProviderInputs,providerMessages:e.apiKeyProviderMessages,snapshot:e.channelsSnapshot,whatsappMessage:e.whatsappLoginMessage,whatsappQrDataUrl:e.whatsappLoginQrDataUrl,whatsappConnected:e.whatsappLoginConnected,whatsappBusy:e.whatsappBusy,telegramSetupToken:e.telegramSetupToken,telegramSetupBusy:e.telegramSetupBusy,telegramSetupMessage:e.telegramSetupMessage,onStart:()=>e.setOnboardingStep(2),onSelectProvider:t=>e.selectOnboardingProvider(t),onProviderInput:(t,n)=>Do(e,t,n),onSaveProvider:async t=>{await jo(e,t),e.apiKeyProviderStatuses[t]?.hasKey&&(await No(e,t),await F(e))},onContinueFromProvider:()=>{e.setOnboardingStep(3),cr(e,!1)},onSkip:()=>e.skipOnboarding(),onTelegramTokenInput:t=>ur(e,t),onTelegramConnect:()=>dr(e),onWhatsAppStart:()=>e.handleWhatsAppStart(!1),onWhatsAppLogout:()=>e.handleWhatsAppLogout(),onFinish:()=>e.completeOnboarding()})}
      ${TN(e)}
    `;let r=e.presenceEntries.length,i=e.sessionsResult?.count??null,a=e.cronStatus?.nextWakeAtMs??null,o=e.connected?null:P(`chat.disconnected`),s=e.tab===`chat`,l=s&&(e.settings.chatFocusMode||e.onboarding),d=!!(e.navDrawerOpen&&!l&&!e.onboarding),f=!!(e.settings.navCollapsed&&!d),p=e.onboarding?!1:e.settings.chatShowThinking,m=e.onboarding?!0:e.settings.chatShowToolCalls,h=sa(e.assistantName)||e.assistantName,g=XP(e),_=e.chatAvatarUrl??g??null,v=e.configForm??e.configSnapshot?.config,y=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id??null,b=N(e.sessionKey),x=!!(y&&b&&y===b),S=()=>e.configForm??e.configSnapshot?.config,C=e=>et(S(),e),w=t=>tt(e,t),T=uy(new Set([...e.agentsList?.agents?.map(e=>e.id.trim())??[],...e.cronJobs.map(e=>typeof e.agentId==`string`?e.agentId.trim():``).filter(Boolean)].filter(Boolean))),ee=uy(new Set([...e.cronModelSuggestions,...dy(v),...e.cronJobs.map(e=>e.payload.kind!==`agentTurn`||typeof e.payload.model!=`string`?``:e.payload.model.trim()).filter(Boolean)].filter(Boolean))),E=$o(e),te=cj(e.channelsSnapshot,e.whatsappLoginConnected),D=e.cronForm.deliveryChannel&&e.cronForm.deliveryChannel.trim()?e.cronForm.deliveryChannel.trim():`last`,O=e.cronJobs.map(e=>RP(e.delivery?.to)).filter(Boolean),k=(D===`last`?Object.values(e.channelsSnapshot?.channelAccounts??{}).flat():e.channelsSnapshot?.channelAccounts?.[D]??[]).flatMap(e=>[RP(e.accountId),RP(e.name)]).filter(Boolean),A=zP([...O,...k]),ne=zP(k),j=e.cronForm.deliveryMode===`webhook`?A.filter(e=>LP(e)):A,re=$v(e.basePath??``);return c`
    ${_M({open:e.paletteOpen,query:e.paletteQuery,activeIndex:e.paletteActiveIndex,onToggle:()=>{e.paletteOpen=!e.paletteOpen},onQueryChange:t=>{e.paletteQuery=t},onActiveIndexChange:t=>{e.paletteActiveIndex=t},onNavigate:t=>{e.setTab(t)},onSlashCommand:t=>{e.setTab(`chat`),e.chatMessage=t.endsWith(` `)?t:`${t} `}})}
    <div
      class="shell ${s?`shell--chat`:``} ${l?`shell--chat-focus`:``} ${f?`shell--nav-collapsed`:``} ${d?`shell--nav-drawer-open`:``} ${e.onboarding?`shell--onboarding`:``}"
    >
      <button
        type="button"
        class="shell-nav-backdrop"
        aria-label="${P(`nav.collapse`)}"
        @click=${()=>{e.navDrawerOpen=!1}}
      ></button>
      <header class="topbar">
        <div class="topnav-shell">
          <button
            type="button"
            class="topbar-nav-toggle"
            @click=${()=>{e.navDrawerOpen=!d}}
            title="${P(d?`nav.collapse`:`nav.expand`)}"
            aria-label="${P(d?`nav.collapse`:`nav.expand`)}"
            aria-expanded=${d}
          >
            <span class="nav-collapse-toggle__icon" aria-hidden="true">${H.menu}</span>
          </button>
          <div class="topnav-shell__content">
            <dashboard-header .tab=${e.tab}></dashboard-header>
          </div>
          <div class="topnav-shell__actions">
            <button
              class="topbar-search"
              @click=${()=>{e.paletteOpen=!e.paletteOpen}}
              title="Search or jump to... (Ctrl/Cmd+K)"
              aria-label="Open command palette"
            >
              <span class="topbar-search__label">${P(`common.search`)}</span>
              <kbd class="topbar-search__kbd">Ctrl/Cmd+K</kbd>
            </button>
            <div class="topbar-status">
              ${s?PA(e):u} ${FP(e)}
              ${XA(e)}
            </div>
          </div>
        </div>
      </header>
      <div class="shell-nav">
        <aside class="sidebar ${f?`sidebar--collapsed`:``}">
          <div class="sidebar-shell">
            <div class="sidebar-shell__header">
              <div class="sidebar-brand">
                <img
                  src=${re}
                  alt="Kova"
                  class="sidebar-brand__logo"
                  style="width:48px;height:48px;object-fit:contain;"
                />
                ${f?u:c`
                      <span class="sidebar-brand__copy">
                        <span class="sidebar-brand__title">${ra}</span>
                        <span class="sidebar-brand__tagline">${ia}</span>
                      </span>
                    `}
              </div>
              <button
                type="button"
                class="nav-collapse-toggle"
                @click=${()=>e.applySettings({...e.settings,navCollapsed:!e.settings.navCollapsed})}
                title="${P(f?`nav.expand`:`nav.collapse`)}"
                aria-label="${P(f?`nav.expand`:`nav.collapse`)}"
              >
                <span class="nav-collapse-toggle__icon" aria-hidden="true"
                  >${f?H.panelLeftOpen:H.panelLeftClose}</span
                >
              </button>
            </div>
            <div class="sidebar-shell__body">
              <nav class="sidebar-nav">
                ${Ec.map(t=>{let n=e.settings.navGroupsCollapsed[t.label]??!1,r=t.tabs.some(t=>t===e.tab),i=f||r||!n;return c`
                    <section class="nav-section ${i?``:`nav-section--collapsed`}">
                      ${f?u:c`
                            <button
                              class="nav-section__label"
                              @click=${()=>{let r={...e.settings.navGroupsCollapsed};r[t.label]=!n,e.applySettings({...e.settings,navGroupsCollapsed:r})}}
                              aria-expanded=${i}
                            >
                              <span class="nav-section__label-text"
                                >${P(`nav.${t.label}`)}</span
                              >
                              <span class="nav-section__chevron"> ${H.chevronDown} </span>
                            </button>
                          `}
                      <div class="nav-section__items">
                        ${t.tabs.map(t=>AA(e,t,{collapsed:f}))}
                      </div>
                    </section>
                  `})}
              </nav>
            </div>
            <div class="sidebar-shell__footer">
              <div class="sidebar-utility-group">
                <div class="sidebar-mode-switch">${XA(e)}</div>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <main class="content ${s?`content--chat`:``}">
        ${e.updateAvailable&&e.updateAvailable.latestVersion!==e.updateAvailable.currentVersion&&!VP(e.updateAvailable)?c`<div class="update-banner callout danger" role="alert">
              <strong>Update available:</strong> v${e.updateAvailable.latestVersion} (running
              v${e.updateAvailable.currentVersion}).
              <button
                class="btn btn--sm update-banner__btn"
                ?disabled=${e.updateRunning||!e.connected}
                @click=${()=>Qe(e)}
              >
                ${e.updateRunning?`Updating...`:`Update now`}
              </button>
              <button
                class="update-banner__close"
                type="button"
                title="Dismiss"
                aria-label="Dismiss update banner"
                @click=${()=>{HP(e.updateAvailable),e.updateAvailable=null}}
              >
                ${H.x}
              </button>
            </div>`:u}
        ${e.tab===`config`?u:c`<section class="content-header">
              <div>
                ${s?MA(e):c`<div class="page-title">${Fc(e.tab)}</div>`}
                ${s?u:c`<div class="page-sub">${Ic(e.tab)}</div>`}
              </div>
              <div class="page-meta">
                ${e.lastError?c`<div class="pill danger">${oa(e.lastError)}</div>`:u}
                ${s?NA(e):u}
              </div>
            </section>`}
        ${e.tab===`overview`?dP({connected:e.connected,hello:e.hello,settings:e.settings,password:e.password,lastError:e.lastError,lastErrorCode:e.lastErrorCode,presenceCount:r,sessionsCount:i,cronEnabled:e.cronStatus?.enabled??null,cronNext:a,lastChannelsRefresh:e.channelsLastSuccess,usageResult:e.usageResult,sessionsResult:e.sessionsResult,skillsReport:e.skillsReport,cronJobs:e.cronJobs,cronStatus:e.cronStatus,attentionItems:e.attentionItems,eventLog:e.eventLog,overviewLogLines:e.overviewLogLines,showGatewayToken:e.overviewShowGatewayToken,showGatewayPassword:e.overviewShowGatewayPassword,onSettingsChange:t=>e.applySettings(t),onPasswordChange:t=>e.password=t,onSessionKeyChange:t=>{e.sessionKey=t,e.chatMessage=``,e.resetToolStream(),e.applySettings({...e.settings,sessionKey:t,lastActiveSessionKey:t}),e.loadAssistantIdentity()},onToggleGatewayTokenVisibility:()=>{e.overviewShowGatewayToken=!e.overviewShowGatewayToken},onToggleGatewayPasswordVisibility:()=>{e.overviewShowGatewayPassword=!e.overviewShowGatewayPassword},onConnect:()=>e.connect(),onRefresh:()=>e.loadOverview(),onNavigate:t=>e.setTab(t),onRefreshLogs:()=>e.loadOverview()}):u}
        ${e.tab===`channels`?kP(gP,t=>t.renderChannels({connected:e.connected,loading:e.channelsLoading,snapshot:e.channelsSnapshot,lastError:e.channelsError,lastSuccessAt:e.channelsLastSuccess,whatsappMessage:e.whatsappLoginMessage,whatsappQrDataUrl:e.whatsappLoginQrDataUrl,whatsappConnected:e.whatsappLoginConnected,whatsappBusy:e.whatsappBusy,telegramSetupToken:e.telegramSetupToken,telegramSetupBusy:e.telegramSetupBusy,telegramSetupMessage:e.telegramSetupMessage,telegramApprovalsLoading:e.telegramApprovalsLoading,telegramApprovalsBusyCode:e.telegramApprovalsBusyCode,telegramApprovalsMessage:e.telegramApprovalsMessage,telegramPendingApprovals:e.telegramPendingApprovals,configSchema:e.configSchema,configSchemaLoading:e.configSchemaLoading,configForm:e.configForm,configUiHints:e.configUiHints,configSaving:e.configSaving,configFormDirty:e.configFormDirty,nostrProfileFormState:e.nostrProfileFormState,nostrProfileAccountId:e.nostrProfileAccountId,onRefresh:t=>cr(e,t),onWhatsAppStart:t=>e.handleWhatsAppStart(t),onWhatsAppRelink:()=>e.handleWhatsAppRelink(),onWhatsAppWait:()=>e.handleWhatsAppWait(),onWhatsAppLogout:()=>e.handleWhatsAppLogout(),onTelegramTokenInput:t=>ur(e,t),onTelegramConnect:()=>dr(e),onTelegramDisconnect:()=>fr(e),onTelegramApprovalsRefresh:()=>lr(e),onTelegramApprove:t=>pr(e,t),onTelegramReject:t=>mr(e,t),onConfigPatch:(t,n)=>I(e,t,n),onConfigSave:()=>e.handleChannelConfigSave(),onConfigReload:()=>e.handleChannelConfigReload(),onNostrProfileEdit:(t,n)=>e.handleNostrProfileEdit(t,n),onNostrProfileCancel:()=>e.handleNostrProfileCancel(),onNostrProfileFieldChange:(t,n)=>e.handleNostrProfileFieldChange(t,n),onNostrProfileSave:()=>e.handleNostrProfileSave(),onNostrProfileImport:()=>e.handleNostrProfileImport(),onNostrProfileToggleAdvanced:()=>e.handleNostrProfileToggleAdvanced()})):u}
        ${e.tab===`instances`?kP(xP,t=>t.renderInstances({loading:e.presenceLoading,entries:e.presenceEntries,lastError:e.presenceError,statusMessage:e.presenceStatus,onRefresh:()=>Ms(e)})):u}
        ${e.tab===`sessions`?kP(DP,t=>t.renderSessions({loading:e.sessionsLoading,result:e.sessionsResult,error:e.sessionsError,activeMinutes:e.sessionsFilterActive,limit:e.sessionsFilterLimit,includeGlobal:e.sessionsIncludeGlobal,includeUnknown:e.sessionsIncludeUnknown,basePath:e.basePath,searchQuery:e.sessionsSearchQuery,sortColumn:e.sessionsSortColumn,sortDir:e.sessionsSortDir,page:e.sessionsPage,pageSize:e.sessionsPageSize,selectedKeys:e.sessionsSelectedKeys,onFiltersChange:t=>{e.sessionsFilterActive=t.activeMinutes,e.sessionsFilterLimit=t.limit,e.sessionsIncludeGlobal=t.includeGlobal,e.sessionsIncludeUnknown=t.includeUnknown},onSearchChange:t=>{e.sessionsSearchQuery=t,e.sessionsPage=0},onSortChange:(t,n)=>{e.sessionsSortColumn=t,e.sessionsSortDir=n,e.sessionsPage=0},onPageChange:t=>{e.sessionsPage=t},onPageSizeChange:t=>{e.sessionsPageSize=t,e.sessionsPage=0},onRefresh:()=>Ps(e),onPatch:(t,n)=>Fs(e,t,n),onToggleSelect:t=>{let n=new Set(e.sessionsSelectedKeys);n.has(t)?n.delete(t):n.add(t),e.sessionsSelectedKeys=n},onSelectPage:t=>{let n=new Set(e.sessionsSelectedKeys);for(let e of t)n.add(e);e.sessionsSelectedKeys=n},onDeselectPage:t=>{let n=new Set(e.sessionsSelectedKeys);for(let e of t)n.delete(e);e.sessionsSelectedKeys=n},onDeselectAll:()=>{e.sessionsSelectedKeys=new Set},onDeleteSelected:async()=>{let t=await Is(e,[...e.sessionsSelectedKeys]);if(t.length>0){let n=new Set(e.sessionsSelectedKeys);for(let e of t)n.delete(e);e.sessionsSelectedKeys=n}},onNavigateToChat:t=>{FA(e,t),e.setTab(`chat`)}})):u}
        ${SA(e)}
        ${e.tab===`cron`?kP(_P,t=>t.renderCron({basePath:e.basePath,loading:e.cronLoading,status:e.cronStatus,jobs:E,jobsLoadingMore:e.cronJobsLoadingMore,jobsTotal:e.cronJobsTotal,jobsHasMore:e.cronJobsHasMore,jobsQuery:e.cronJobsQuery,jobsEnabledFilter:e.cronJobsEnabledFilter,jobsScheduleKindFilter:e.cronJobsScheduleKindFilter,jobsLastStatusFilter:e.cronJobsLastStatusFilter,jobsSortBy:e.cronJobsSortBy,jobsSortDir:e.cronJobsSortDir,editingJobId:e.cronEditingJobId,error:e.cronError,busy:e.cronBusy,form:e.cronForm,channels:e.channelsSnapshot?.channelMeta?.length?e.channelsSnapshot.channelMeta.map(e=>e.id):e.channelsSnapshot?.channelOrder??[],channelLabels:e.channelsSnapshot?.channelLabels??{},channelMeta:e.channelsSnapshot?.channelMeta??[],runsJobId:e.cronRunsJobId,runs:e.cronRuns,runsTotal:e.cronRunsTotal,runsHasMore:e.cronRunsHasMore,runsLoadingMore:e.cronRunsLoadingMore,runsScope:e.cronRunsScope,runsStatuses:e.cronRunsStatuses,runsDeliveryStatuses:e.cronRunsDeliveryStatuses,runsStatusFilter:e.cronRunsStatusFilter,runsQuery:e.cronRunsQuery,runsSortDir:e.cronRunsSortDir,fieldErrors:e.cronFieldErrors,canSubmit:!Go(e.cronFieldErrors),agentSuggestions:T,modelSuggestions:ee,thinkingSuggestions:jP,timezoneSuggestions:IP,deliveryToSuggestions:j,accountSuggestions:ne,onFormChange:t=>{e.cronForm=Uo({...e.cronForm,...t}),e.cronFieldErrors=Wo(e.cronForm)},onRefresh:()=>e.loadCron(),onAdd:()=>ls(e),onEdit:t=>gs(e,t),onClone:t=>vs(e,t),onCancelEdit:()=>ys(e),onToggle:(t,n)=>us(e,t,n),onRun:(t,n)=>ds(e,t,n??`force`),onRemove:t=>fs(e,t),onLoadRuns:async t=>{hs(e,{cronRunsScope:`job`}),await ps(e,t)},onLoadMoreJobs:()=>Xo(e),onJobsFiltersChange:async t=>{Qo(e,t),(typeof t.cronJobsQuery==`string`||t.cronJobsEnabledFilter||t.cronJobsSortBy||t.cronJobsSortDir)&&await Zo(e)},onJobsFiltersReset:async()=>{Qo(e,{cronJobsQuery:``,cronJobsEnabledFilter:`all`,cronJobsScheduleKindFilter:`all`,cronJobsLastStatusFilter:`all`,cronJobsSortBy:`nextRunAtMs`,cronJobsSortDir:`asc`}),await Zo(e)},onLoadMoreRuns:()=>ms(e),onRunsFiltersChange:async t=>{if(hs(e,t),e.cronRunsScope===`all`){await ps(e,null);return}await ps(e,e.cronRunsJobId)},onNavigateToChat:t=>{FA(e,t),e.setTab(`chat`)}})):u}
        ${e.tab===`employees`?kP(yP,t=>t.renderEmployees({loading:e.employeesLoading,error:e.employeesError,dashboard:e.employeesDashboard,filterAgentId:e.employeesFilterAgentId,onClearFilter:()=>{e.employeesFilterAgentId=null},onRefresh:()=>Ei(e),onOpenChat:t=>{FA(e,le({agentId:t})),e.setTab(`chat`)},onViewSessions:t=>{e.sessionsSearchQuery=t,e.sessionsPage=0,e.sessionsSelectedKeys=new Set,e.setTab(`sessions`)}})):u}
        ${e.tab===`inbox`?kP(bP,t=>t.renderInbox({loading:e.inboxLoading,error:e.inboxError,sessions:e.inboxSessions,filter:e.inboxChannelFilter,basePath:e.basePath,onFilterChange:t=>e.setInboxFilter(t),onRefresh:()=>e.loadInbox(),onNavigateToChat:t=>{FA(e,t),e.setTab(`chat`)}})):u}
        ${e.tab===`briefing`?kP(hP,t=>t.renderBriefing({connected:e.connected,loading:e.briefingLoading||e.channelsLoading||e.cronLoading,saving:e.briefingSaving,timezone:sj(),availableChannels:te,form:e.briefingForm,message:e.briefingMessage,previewDate:new Intl.DateTimeFormat(void 0,{month:`short`,day:`numeric`,year:`numeric`}).format(new Date),onEnabledChange:t=>{e.briefingForm={...e.briefingForm,enabled:t},e.briefingDirty=!0,e.briefingMessage=null},onTimeChange:t=>{e.briefingForm={...e.briefingForm,time:t},e.briefingDirty=!0,e.briefingMessage=null},onChannelChange:t=>{e.briefingForm={...e.briefingForm,channel:t},e.briefingDirty=!0,e.briefingMessage=null},onSectionChange:(t,n)=>{e.briefingForm={...e.briefingForm,sections:{...e.briefingForm.sections,[t]:n}},e.briefingDirty=!0,e.briefingMessage=null},onSave:()=>e.saveBriefing(),onOpenChannels:()=>e.setTab(`channels`)})):u}
        ${e.tab===`meetings`?kP(wP,t=>t.renderMeetings({connected:e.connected,title:e.meetingsTitle,transcript:e.meetingsTranscript,sourceName:e.meetingsSourceName,analyzing:e.meetingsAnalyzing,sendingTelegram:e.meetingsSendingTelegram,error:e.meetingsError,notice:e.meetingsNotice,result:e.meetingsResult,history:e.meetingsHistory,onTitleChange:t=>e.handleMeetingsTitleChange(t),onTranscriptChange:t=>e.handleMeetingsTranscriptChange(t),onFileSelect:t=>e.handleMeetingsFileSelect(t),onAnalyze:()=>e.analyzeMeeting(),onCopy:(t,n)=>e.copyMeetingSection(t,n),onSave:()=>e.saveMeetingResult(),onLoadHistory:t=>e.loadMeetingHistoryEntry(t),onClearHistory:()=>e.clearMeetingHistory(),onSendTelegram:()=>e.sendMeetingFollowUpViaTelegram()})):u}
        ${e.tab===`canvas`?kP(CP,t=>t.renderCanvas({connected:e.connected,loading:e.canvasRefreshing||e.agentsLoading,status:e.canvasStatus,frameUrl:e.canvasFrameUrl,selectedAgentId:e.canvasSelectedAgentId,employees:xj(e.agentsList),onAgentChange:t=>e.handleCanvasAgentChange(t),onRefresh:()=>e.refreshCanvas(),onOpenInNewTab:()=>e.openCanvasInNewTab()})):u}
        ${e.tab===`routing`?kP(EP,t=>t.renderRouting({connected:e.connected,loading:e.configLoading||e.channelsLoading||e.agentsLoading,saving:e.routingSaving,message:e.routingMessage,assignments:e.routingAssignments,employees:Lj(e.agentsList),telegramConnected:Hj(e.channelsSnapshot,e.whatsappLoginConnected,`telegram`),whatsappConnected:Hj(e.channelsSnapshot,e.whatsappLoginConnected,`whatsapp`),onAssignmentChange:(t,n)=>e.handleRoutingAssignmentChange(t,n),onPreset:t=>e.applyRoutingPreset(t),onSave:()=>e.saveRouting()})):u}
        ${e.tab===`agents`?kP(mP,t=>t.renderAgents({basePath:e.basePath??``,loading:e.agentsLoading,error:e.agentsError,agentsList:e.agentsList,selectedAgentId:y,activePanel:e.agentsPanel,config:{form:v,loading:e.configLoading,saving:e.configSaving,dirty:e.configFormDirty},channels:{snapshot:e.channelsSnapshot,loading:e.channelsLoading,error:e.channelsError,lastSuccess:e.channelsLastSuccess},cron:{status:e.cronStatus,jobs:e.cronJobs,loading:e.cronLoading,error:e.cronError},agentFiles:{list:e.agentFilesList,loading:e.agentFilesLoading,error:e.agentFilesError,active:e.agentFileActive,contents:e.agentFileContents,drafts:e.agentFileDrafts,saving:e.agentFileSaving},agentIdentityLoading:e.agentIdentityLoading,agentIdentityError:e.agentIdentityError,agentIdentityById:e.agentIdentityById,agentSoulContentById:e.agentSoulContentById,agentSkills:{report:e.agentSkillsReport,loading:e.agentSkillsLoading,error:e.agentSkillsError,agentId:e.agentSkillsAgentId,filter:e.skillsFilter},toolsCatalog:{loading:e.toolsCatalogLoading,error:e.toolsCatalogError,result:e.toolsCatalogResult},toolsEffective:{loading:e.toolsEffectiveLoading,error:e.toolsEffectiveError,result:e.toolsEffectiveResult},runtimeSessionKey:e.sessionKey,runtimeSessionMatchesSelectedAgent:x,modelCatalog:e.chatModelCatalog??[],agentCreatorSuccess:e.agentCreatorSuccess,onOpenAgentCreator:()=>e.openAgentCreator(),onRefresh:async()=>{await Ea(e);let t=e.agentsList?.agents?.map(e=>e.id)??[];t.length>0&&(pa(e,t),ga(e,t));let n=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id??null;e.agentsPanel===`files`&&n&&la(e,n),e.agentsPanel===`skills`&&n&&ma(e,n),e.agentsPanel===`tools`&&n&&(Da(e,n),n===N(e.sessionKey)&&Oa(e,{agentId:n,sessionKey:e.sessionKey})),e.agentsPanel===`channels`&&cr(e,!1),e.agentsPanel===`cron`&&e.loadCron()},onSelectAgent:t=>{e.agentsSelectedId!==t&&(e.agentsSelectedId=t,e.agentFilesList=null,e.agentFilesError=null,e.agentFilesLoading=!1,e.agentFileActive=null,e.agentFileContents={},e.agentFileDrafts={},e.agentSkillsReport=null,e.agentSkillsError=null,e.agentSkillsAgentId=null,e.toolsCatalogResult=null,e.toolsCatalogError=null,e.toolsCatalogLoading=!1,e.toolsEffectiveResult=null,e.toolsEffectiveResultKey=null,e.toolsEffectiveError=null,e.toolsEffectiveLoading=!1,e.toolsEffectiveLoadingKey=null,fa(e,t),e.agentsPanel===`files`&&la(e,t),e.agentsPanel===`tools`&&(Da(e,t),t===N(e.sessionKey)&&Oa(e,{agentId:t,sessionKey:e.sessionKey})),e.agentsPanel===`skills`&&ma(e,t))},onSelectPanel:t=>{if(e.agentsPanel=t,t===`files`&&y&&e.agentFilesList?.agentId!==y&&(e.agentFilesList=null,e.agentFilesError=null,e.agentFileActive=null,e.agentFileContents={},e.agentFileDrafts={},la(e,y)),t===`skills`&&y&&ma(e,y),t===`tools`&&y)if((e.toolsCatalogResult?.agentId!==y||e.toolsCatalogError)&&Da(e,y),y===N(e.sessionKey)){let t=ka(e,{agentId:y,sessionKey:e.sessionKey});(e.toolsEffectiveResultKey!==t||e.toolsEffectiveError)&&Oa(e,{agentId:y,sessionKey:e.sessionKey})}else e.toolsEffectiveResult=null,e.toolsEffectiveResultKey=null,e.toolsEffectiveError=null,e.toolsEffectiveLoading=!1,e.toolsEffectiveLoadingKey=null;t===`channels`&&cr(e,!1),t===`cron`&&e.loadCron()},onLoadFiles:t=>la(e,t),onSelectFile:t=>{e.agentFileActive=t,y&&ua(e,y,t)},onFileDraftChange:(t,n)=>{e.agentFileDrafts={...e.agentFileDrafts,[t]:n}},onFileReset:t=>{let n=e.agentFileContents[t]??``;e.agentFileDrafts={...e.agentFileDrafts,[t]:n}},onFileSave:t=>{y&&da(e,y,t,e.agentFileDrafts[t]??e.agentFileContents[t]??``)},onToolsProfileChange:(t,n,r)=>{let i=n||r?w(t):C(t);if(i<0)return;let a=[`agents`,`list`,i,`tools`];n?I(e,[...a,`profile`],n):$e(e,[...a,`profile`]),r&&$e(e,[...a,`allow`])},onToolsOverridesChange:(t,n,r)=>{let i=n.length>0||r.length>0?w(t):C(t);if(i<0)return;let a=[`agents`,`list`,i,`tools`];n.length>0?I(e,[...a,`alsoAllow`],n):$e(e,[...a,`alsoAllow`]),r.length>0?I(e,[...a,`deny`],r):$e(e,[...a,`deny`])},onConfigReload:()=>F(e),onConfigSave:()=>Ma(e),onChannelsRefresh:()=>cr(e,!1),onCronRefresh:()=>e.loadCron(),onCronRunNow:t=>{let n=e.cronJobs.find(e=>e.id===t);n&&ds(e,n,`force`)},onSkillsFilterChange:t=>e.skillsFilter=t,onSkillsRefresh:()=>{y&&ma(e,y)},onAgentSkillToggle:(t,n,r)=>{let i=w(t);if(i<0)return;let a=S()?.agents?.list,o=Array.isArray(a)?a[i]:void 0,s=n.trim();if(!s)return;let c=e.agentSkillsReport?.skills?.map(e=>e.name).filter(Boolean)??[],l=(Array.isArray(o?.skills)?o.skills.map(e=>String(e).trim()).filter(Boolean):void 0)??c,u=new Set(l);r?u.add(s):u.delete(s),I(e,[`agents`,`list`,i,`skills`],[...u])},onAgentSkillsClear:t=>{let n=C(t);n<0||$e(e,[`agents`,`list`,n,`skills`])},onAgentSkillsDisableAll:t=>{let n=w(t);n<0||I(e,[`agents`,`list`,n,`skills`],[])},onModelChange:(t,n)=>{let r=n?w(t):C(t);if(r<0)return;let i=S()?.agents?.list,a=[`agents`,`list`,r,`model`];if(!n)$e(e,a);else{let t=(Array.isArray(i)?i[r]:void 0)?.model;if(t&&typeof t==`object`&&!Array.isArray(t)){let r=t.fallbacks;I(e,a,{primary:n,...Array.isArray(r)?{fallbacks:r}:{}})}else I(e,a,n)}Aa(e)},onModelFallbacksChange:(t,n)=>{let r=n.map(e=>e.trim()).filter(Boolean),i=ty(S(),t),a=ay(i.entry?.model)??ay(i.defaults?.model),o=sy(i.entry?.model,i.defaults?.model),s=r.length>0?a?w(t):-1:(o?.length??0)>0||C(t)>=0?w(t):-1;if(s<0)return;let c=S()?.agents?.list,l=[`agents`,`list`,s,`model`],u=(Array.isArray(c)?c[s]:void 0)?.model,d=(()=>{if(typeof u==`string`)return u.trim()||null;if(u&&typeof u==`object`&&!Array.isArray(u)){let e=u.primary;if(typeof e==`string`)return e.trim()||null}return null})()??a;if(r.length===0){d?I(e,l,d):$e(e,l);return}d&&I(e,l,{primary:d,fallbacks:r})},onSetDefault:t=>{v&&I(e,[`agents`,`defaultId`],t)},onNavigateToChat:t=>{FA(e,le({agentId:t})),e.setTab(`chat`)},onNavigateToActivity:t=>{e.employeesFilterAgentId=t.startsWith(`kova-`)?t:null,e.setTab(`employees`)}})):u}
        ${e.tab===`skills`?kP(OP,t=>t.renderSkills({connected:e.connected,loading:e.skillsLoading||e.kova_marketplaceLoading||e.kova_installedLoading,report:e.skillsReport,error:e.skillsError,filter:e.skillsFilter,statusFilter:e.skillsStatusFilter,edits:e.skillEdits,messages:e.skillMessages,busyKey:e.skillsBusyKey,detailKey:e.skillsDetailKey,kova_marketplaceLoading:e.kova_marketplaceLoading,kova_marketplaceSkills:e.kova_marketplaceSkills,kova_marketplaceError:e.kova_marketplaceError??e.kova_installedError,kova_marketplaceCategory:e.kova_marketplaceCategory,kova_marketplaceInstalledIds:e.kova_installedSkillIds,kova_marketplaceBusyId:e.kova_marketplaceBusyId,onFilterChange:t=>e.skillsFilter=t,onStatusFilterChange:t=>e.skillsStatusFilter=t,onRefresh:()=>$s(e,{clearMessages:!0}),onToggle:(t,n)=>tc(e,t,n),onEdit:(t,n)=>ec(e,t,n),onSaveKey:t=>nc(e,t),onInstall:(t,n,r)=>rc(e,t,n,r),onDetailOpen:t=>e.skillsDetailKey=t,onDetailClose:()=>e.skillsDetailKey=null,onKovaMarketplaceCategoryChange:t=>e.kova_marketplaceCategory=t,onKovaMarketplaceInstall:t=>ic(e,t)})):u}
        ${e.tab===`nodes`?kP(TP,t=>t.renderNodes({loading:e.nodesLoading,nodes:e.nodes,devicesLoading:e.devicesLoading,devicesError:e.devicesError,devicesList:e.devicesList,configForm:e.configForm??e.configSnapshot?.config,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configFormDirty,configFormMode:e.configFormMode,execApprovalsLoading:e.execApprovalsLoading,execApprovalsSaving:e.execApprovalsSaving,execApprovalsDirty:e.execApprovalsDirty,execApprovalsSnapshot:e.execApprovalsSnapshot,execApprovalsForm:e.execApprovalsForm,execApprovalsSelectedAgent:e.execApprovalsSelectedAgent,execApprovalsTarget:e.execApprovalsTarget,execApprovalsTargetNodeId:e.execApprovalsTargetNodeId,onRefresh:()=>qi(e),onDevicesRefresh:()=>bs(e),onDeviceApprove:t=>xs(e,t),onDeviceReject:t=>Ss(e,t),onDeviceRotate:(t,n,r)=>Cs(e,{deviceId:t,role:n,scopes:r}),onDeviceRevoke:(t,n)=>ws(e,{deviceId:t,role:n}),onLoadConfig:()=>F(e),onLoadExecApprovals:()=>Ds(e,e.execApprovalsTarget===`node`&&e.execApprovalsTargetNodeId?{kind:`node`,nodeId:e.execApprovalsTargetNodeId}:{kind:`gateway`}),onBindDefault:t=>{t?I(e,[`tools`,`exec`,`node`],t):$e(e,[`tools`,`exec`,`node`])},onBindAgent:(t,n)=>{let r=[`agents`,`list`,t,`tools`,`exec`,`node`];n?I(e,r,n):$e(e,r)},onSaveBindings:()=>Xe(e),onExecApprovalsTargetChange:(t,n)=>{e.execApprovalsTarget=t,e.execApprovalsTargetNodeId=n,e.execApprovalsSnapshot=null,e.execApprovalsForm=null,e.execApprovalsDirty=!1,e.execApprovalsSelectedAgent=null},onExecApprovalsSelectAgent:t=>{e.execApprovalsSelectedAgent=t},onExecApprovalsPatch:(t,n)=>As(e,t,n),onExecApprovalsRemove:t=>js(e,t),onSaveExecApprovals:()=>ks(e,e.execApprovalsTarget===`node`&&e.execApprovalsTargetNodeId?{kind:`node`,nodeId:e.execApprovalsTargetNodeId}:{kind:`gateway`})})):u}
        ${e.tab===`chat`?oE({sessionKey:e.sessionKey,onSessionKeyChange:t=>{e.sessionKey=t,e.chatMessage=``,e.chatAttachments=[],e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.chatQueue=[],e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:t,lastActiveSessionKey:t}),e.loadAssistantIdentity(),KD(e),xO(e)},thinkingLevel:e.chatThinkingLevel,showThinking:p,showToolCalls:m,loading:e.chatLoading,sending:e.chatSending,compactionStatus:e.compactionStatus,fallbackStatus:e.fallbackStatus,assistantAvatarUrl:_,messages:e.chatMessages,toolMessages:e.chatToolMessages,streamSegments:e.chatStreamSegments,stream:e.chatStream,streamStartedAt:e.chatStreamStartedAt,draft:e.chatMessage,queue:e.chatQueue,connected:e.connected,canSend:e.connected,disabledReason:o,error:e.lastError,sessions:e.sessionsResult,focusMode:l,onRefresh:()=>(e.resetToolStream(),Promise.all([KD(e),xO(e)])),onToggleFocusMode:()=>{e.onboarding||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})},onChatScroll:t=>e.handleChatScroll(t),getDraft:()=>e.chatMessage,onDraftChange:t=>e.chatMessage=t,onRequestUpdate:n,attachments:e.chatAttachments,onAttachmentsChange:t=>e.chatAttachments=t,onSend:()=>e.handleSendChat(),canAbort:!!e.chatRunId,onAbort:()=>void e.handleAbortChat(),onQueueRemove:t=>e.removeQueuedMessage(t),onNewSession:()=>e.handleSendChat(`/new`,{restoreDraft:!0}),onClearHistory:async()=>{if(!(!e.client||!e.connected))try{await e.client.request(`sessions.reset`,{key:e.sessionKey}),e.chatMessages=[],e.chatStream=null,e.chatRunId=null,await KD(e)}catch(t){e.lastError=String(t)}},agentsList:e.agentsList,currentAgentId:y??`main`,voiceEnabled:!!e.settings.voiceEnabledByAgent[(y??`main`).trim()],voiceSupported:(y??`main`).startsWith(`kova-`),voiceSpeaking:e.voiceSpeaking,voiceMessage:e.voiceMessage,onAgentChange:t=>{e.sessionKey=le({agentId:t}),e.chatMessages=[],e.chatStream=null,e.chatRunId=null,e.applySettings({...e.settings,sessionKey:e.sessionKey,lastActiveSessionKey:e.sessionKey}),KD(e),e.loadAssistantIdentity()},onNavigateToAgent:()=>{e.agentsSelectedId=y,e.setTab(`agents`)},onToggleVoice:()=>e.toggleVoiceForCurrentAgent(),onStopVoice:()=>e.stopVoicePlayback(),onOpenApiKeys:()=>e.setTab(`apiKeys`),onSessionSelect:t=>{FA(e,t)},showNewMessages:e.chatNewMessagesBelow&&!e.chatManualRefreshInFlight,onScrollToBottom:()=>e.scrollToBottom(),sidebarOpen:e.sidebarOpen,sidebarContent:e.sidebarContent,sidebarError:e.sidebarError,splitRatio:e.splitRatio,onOpenSidebar:t=>e.handleOpenSidebar(t),onCloseSidebar:()=>e.handleCloseSidebar(),onSplitRatioChange:t=>e.handleSplitRatioChange(t),assistantName:h,assistantAvatar:e.assistantAvatar,basePath:e.basePath??``}):u}
        ${e.tab===`config`?yN({raw:e.configRaw,originalRaw:e.configRawOriginal,valid:e.configValid,issues:e.configIssues,loading:e.configLoading,saving:e.configSaving,applying:e.configApplying,updating:e.updateRunning,connected:e.connected,schema:e.configSchema,schemaLoading:e.configSchemaLoading,uiHints:e.configUiHints,formMode:e.configFormMode,showModeToggle:!0,formValue:e.configForm,originalValue:e.configFormOriginal,searchQuery:e.configSearchQuery,activeSection:e.configActiveSection&&(GP.includes(e.configActiveSection)||KP.includes(e.configActiveSection)||qP.includes(e.configActiveSection)||JP.includes(e.configActiveSection)||YP.includes(e.configActiveSection))?null:e.configActiveSection,activeSubsection:e.configActiveSection&&(GP.includes(e.configActiveSection)||KP.includes(e.configActiveSection)||qP.includes(e.configActiveSection)||JP.includes(e.configActiveSection)||YP.includes(e.configActiveSection))?null:e.configActiveSubsection,onRawChange:t=>{e.configRaw=t},onRequestUpdate:n,onFormModeChange:t=>e.configFormMode=t,onFormPatch:(t,n)=>I(e,t,n),onSearchChange:t=>e.configSearchQuery=t,onSectionChange:t=>{e.configActiveSection=t,e.configActiveSubsection=null},onSubsectionChange:t=>e.configActiveSubsection=t,onReload:()=>F(e),onSave:()=>Xe(e),onApply:()=>Ze(e),onUpdate:()=>Qe(e),onOpenFile:()=>nt(e),version:e.hello?.server?.version??``,theme:e.theme,themeMode:e.themeMode,setTheme:(t,n)=>e.setTheme(t,n),setThemeMode:(t,n)=>e.setThemeMode(t,n),borderRadius:e.settings.borderRadius,setBorderRadius:t=>e.setBorderRadius(t),gatewayUrl:e.settings.gatewayUrl,assistantName:h,configPath:e.configSnapshot?.path??null,rawAvailable:typeof e.configSnapshot?.raw==`string`,excludeSections:[...GP,...qP,...JP,...YP,`ui`,`wizard`],includeVirtualSections:!1}):u}
        ${e.tab===`apiKeys`?aM({loading:e.apiKeysLoading,connected:e.connected,savingProviderId:e.apiKeysSavingProviderId,testingProviderId:e.apiKeysTestingProviderId,modelSaving:e.apiKeysModelSaving,currentModel:e.apiKeysCurrentModel,modelOption:e.apiKeysModelOption,customModelInput:e.apiKeysCustomModelInput,pageMessage:e.apiKeysPageMessage,elevenLabsInput:e.apiKeysElevenLabsInput,elevenLabsConfigured:e.apiKeysElevenLabsConfigured,elevenLabsSaving:e.apiKeysElevenLabsSaving,elevenLabsTesting:e.apiKeysElevenLabsTesting,elevenLabsMessage:e.apiKeysElevenLabsMessage,providerStatuses:e.apiKeyProviderStatuses,providerInputs:e.apiKeyProviderInputs,providerMessages:e.apiKeyProviderMessages,onProviderInput:(t,n)=>Do(e,t,n),onElevenLabsInput:t=>Fo(e,t),onModelOptionChange:t=>Oo(e,t),onCustomModelInput:t=>ko(e,t),onRefresh:()=>Ao(e),onSaveElevenLabs:()=>Lo(e),onTestElevenLabs:()=>Ro(e),onSaveProvider:t=>jo(e,t),onSaveModel:()=>Mo(e),onTestProvider:t=>Po(e,t),onSetActive:t=>No(e,t)}):u}
        ${e.tab===`communications`?yN({raw:e.configRaw,originalRaw:e.configRawOriginal,valid:e.configValid,issues:e.configIssues,loading:e.configLoading,saving:e.configSaving,applying:e.configApplying,updating:e.updateRunning,connected:e.connected,schema:e.configSchema,schemaLoading:e.configSchemaLoading,uiHints:e.configUiHints,formMode:e.communicationsFormMode,formValue:e.configForm,originalValue:e.configFormOriginal,searchQuery:e.communicationsSearchQuery,activeSection:e.communicationsActiveSection&&!GP.includes(e.communicationsActiveSection)?null:e.communicationsActiveSection,activeSubsection:e.communicationsActiveSection&&!GP.includes(e.communicationsActiveSection)?null:e.communicationsActiveSubsection,onRawChange:t=>{e.configRaw=t},onRequestUpdate:n,onFormModeChange:t=>e.communicationsFormMode=t,onFormPatch:(t,n)=>I(e,t,n),onSearchChange:t=>e.communicationsSearchQuery=t,onSectionChange:t=>{e.communicationsActiveSection=t,e.communicationsActiveSubsection=null},onSubsectionChange:t=>e.communicationsActiveSubsection=t,onReload:()=>F(e),onSave:()=>Xe(e),onApply:()=>Ze(e),onUpdate:()=>Qe(e),onOpenFile:()=>nt(e),version:e.hello?.server?.version??``,theme:e.theme,themeMode:e.themeMode,setTheme:(t,n)=>e.setTheme(t,n),setThemeMode:(t,n)=>e.setThemeMode(t,n),borderRadius:e.settings.borderRadius,setBorderRadius:t=>e.setBorderRadius(t),gatewayUrl:e.settings.gatewayUrl,assistantName:h,configPath:e.configSnapshot?.path??null,rawAvailable:typeof e.configSnapshot?.raw==`string`,navRootLabel:`Communication`,includeSections:[...GP],includeVirtualSections:!1}):u}
        ${e.tab===`appearance`?yN({raw:e.configRaw,originalRaw:e.configRawOriginal,valid:e.configValid,issues:e.configIssues,loading:e.configLoading,saving:e.configSaving,applying:e.configApplying,updating:e.updateRunning,connected:e.connected,schema:e.configSchema,schemaLoading:e.configSchemaLoading,uiHints:e.configUiHints,formMode:e.appearanceFormMode,formValue:e.configForm,originalValue:e.configFormOriginal,searchQuery:e.appearanceSearchQuery,activeSection:e.appearanceActiveSection&&!KP.includes(e.appearanceActiveSection)?null:e.appearanceActiveSection,activeSubsection:e.appearanceActiveSection&&!KP.includes(e.appearanceActiveSection)?null:e.appearanceActiveSubsection,onRawChange:t=>{e.configRaw=t},onRequestUpdate:n,onFormModeChange:t=>e.appearanceFormMode=t,onFormPatch:(t,n)=>I(e,t,n),onSearchChange:t=>e.appearanceSearchQuery=t,onSectionChange:t=>{e.appearanceActiveSection=t,e.appearanceActiveSubsection=null},onSubsectionChange:t=>e.appearanceActiveSubsection=t,onReload:()=>F(e),onSave:()=>Xe(e),onApply:()=>Ze(e),onUpdate:()=>Qe(e),onOpenFile:()=>nt(e),version:e.hello?.server?.version??``,theme:e.theme,themeMode:e.themeMode,setTheme:(t,n)=>e.setTheme(t,n),setThemeMode:(t,n)=>e.setThemeMode(t,n),borderRadius:e.settings.borderRadius,setBorderRadius:t=>e.setBorderRadius(t),gatewayUrl:e.settings.gatewayUrl,assistantName:h,configPath:e.configSnapshot?.path??null,rawAvailable:typeof e.configSnapshot?.raw==`string`,navRootLabel:`Appearance`,includeSections:[...KP],includeVirtualSections:!0}):u}
        ${e.tab===`automation`?yN({raw:e.configRaw,originalRaw:e.configRawOriginal,valid:e.configValid,issues:e.configIssues,loading:e.configLoading,saving:e.configSaving,applying:e.configApplying,updating:e.updateRunning,connected:e.connected,schema:e.configSchema,schemaLoading:e.configSchemaLoading,uiHints:e.configUiHints,formMode:e.automationFormMode,formValue:e.configForm,originalValue:e.configFormOriginal,searchQuery:e.automationSearchQuery,activeSection:e.automationActiveSection&&!qP.includes(e.automationActiveSection)?null:e.automationActiveSection,activeSubsection:e.automationActiveSection&&!qP.includes(e.automationActiveSection)?null:e.automationActiveSubsection,onRawChange:t=>{e.configRaw=t},onRequestUpdate:n,onFormModeChange:t=>e.automationFormMode=t,onFormPatch:(t,n)=>I(e,t,n),onSearchChange:t=>e.automationSearchQuery=t,onSectionChange:t=>{e.automationActiveSection=t,e.automationActiveSubsection=null},onSubsectionChange:t=>e.automationActiveSubsection=t,onReload:()=>F(e),onSave:()=>Xe(e),onApply:()=>Ze(e),onUpdate:()=>Qe(e),onOpenFile:()=>nt(e),version:e.hello?.server?.version??``,theme:e.theme,themeMode:e.themeMode,setTheme:(t,n)=>e.setTheme(t,n),setThemeMode:(t,n)=>e.setThemeMode(t,n),borderRadius:e.settings.borderRadius,setBorderRadius:t=>e.setBorderRadius(t),gatewayUrl:e.settings.gatewayUrl,assistantName:h,configPath:e.configSnapshot?.path??null,rawAvailable:typeof e.configSnapshot?.raw==`string`,navRootLabel:`Automation`,includeSections:[...qP],includeVirtualSections:!1}):u}
        ${e.tab===`infrastructure`?yN({raw:e.configRaw,originalRaw:e.configRawOriginal,valid:e.configValid,issues:e.configIssues,loading:e.configLoading,saving:e.configSaving,applying:e.configApplying,updating:e.updateRunning,connected:e.connected,schema:e.configSchema,schemaLoading:e.configSchemaLoading,uiHints:e.configUiHints,formMode:e.infrastructureFormMode,formValue:e.configForm,originalValue:e.configFormOriginal,searchQuery:e.infrastructureSearchQuery,activeSection:e.infrastructureActiveSection&&!JP.includes(e.infrastructureActiveSection)?null:e.infrastructureActiveSection,activeSubsection:e.infrastructureActiveSection&&!JP.includes(e.infrastructureActiveSection)?null:e.infrastructureActiveSubsection,onRawChange:t=>{e.configRaw=t},onRequestUpdate:n,onFormModeChange:t=>e.infrastructureFormMode=t,onFormPatch:(t,n)=>I(e,t,n),onSearchChange:t=>e.infrastructureSearchQuery=t,onSectionChange:t=>{e.infrastructureActiveSection=t,e.infrastructureActiveSubsection=null},onSubsectionChange:t=>e.infrastructureActiveSubsection=t,onReload:()=>F(e),onSave:()=>Xe(e),onApply:()=>Ze(e),onUpdate:()=>Qe(e),onOpenFile:()=>nt(e),version:e.hello?.server?.version??``,theme:e.theme,themeMode:e.themeMode,setTheme:(t,n)=>e.setTheme(t,n),setThemeMode:(t,n)=>e.setThemeMode(t,n),borderRadius:e.settings.borderRadius,setBorderRadius:t=>e.setBorderRadius(t),gatewayUrl:e.settings.gatewayUrl,assistantName:h,configPath:e.configSnapshot?.path??null,rawAvailable:typeof e.configSnapshot?.raw==`string`,navRootLabel:`Infrastructure`,includeSections:[...JP],includeVirtualSections:!1}):u}
        ${e.tab===`aiAgents`?yN({raw:e.configRaw,originalRaw:e.configRawOriginal,valid:e.configValid,issues:e.configIssues,loading:e.configLoading,saving:e.configSaving,applying:e.configApplying,updating:e.updateRunning,connected:e.connected,schema:e.configSchema,schemaLoading:e.configSchemaLoading,uiHints:e.configUiHints,formMode:e.aiAgentsFormMode,formValue:e.configForm,originalValue:e.configFormOriginal,searchQuery:e.aiAgentsSearchQuery,activeSection:e.aiAgentsActiveSection&&!YP.includes(e.aiAgentsActiveSection)?null:e.aiAgentsActiveSection,activeSubsection:e.aiAgentsActiveSection&&!YP.includes(e.aiAgentsActiveSection)?null:e.aiAgentsActiveSubsection,onRawChange:t=>{e.configRaw=t},onRequestUpdate:n,onFormModeChange:t=>e.aiAgentsFormMode=t,onFormPatch:(t,n)=>I(e,t,n),onSearchChange:t=>e.aiAgentsSearchQuery=t,onSectionChange:t=>{e.aiAgentsActiveSection=t,e.aiAgentsActiveSubsection=null},onSubsectionChange:t=>e.aiAgentsActiveSubsection=t,onReload:()=>F(e),onSave:()=>Xe(e),onApply:()=>Ze(e),onUpdate:()=>Qe(e),onOpenFile:()=>nt(e),version:e.hello?.server?.version??``,theme:e.theme,themeMode:e.themeMode,setTheme:(t,n)=>e.setTheme(t,n),setThemeMode:(t,n)=>e.setThemeMode(t,n),borderRadius:e.settings.borderRadius,setBorderRadius:t=>e.setBorderRadius(t),gatewayUrl:e.settings.gatewayUrl,assistantName:h,configPath:e.configSnapshot?.path??null,rawAvailable:typeof e.configSnapshot?.raw==`string`,navRootLabel:`AI & Agents`,includeSections:[...YP],includeVirtualSections:!1}):u}
        ${e.tab===`debug`?kP(vP,t=>t.renderDebug({loading:e.debugLoading,status:e.debugStatus,health:e.debugHealth,models:e.debugModels,heartbeat:e.debugHeartbeat,eventLog:e.eventLog,methods:(e.hello?.features?.methods??[]).toSorted(),callMethod:e.debugCallMethod,callParams:e.debugCallParams,callResult:e.debugCallResult,callError:e.debugCallError,onCallMethodChange:t=>e.debugCallMethod=t,onCallParamsChange:t=>e.debugCallParams=t,onRefresh:()=>xi(e),onCall:()=>Si(e)})):u}
        ${e.tab===`logs`?kP(SP,t=>t.renderLogs({loading:e.logsLoading,error:e.logsError,file:e.logsFile,entries:e.logsEntries,filterText:e.logsFilterText,levelFilters:e.logsLevelFilters,autoFollow:e.logsAutoFollow,truncated:e.logsTruncated,onFilterTextChange:t=>e.logsFilterText=t,onLevelToggle:(t,n)=>{e.logsLevelFilters={...e.logsLevelFilters,[t]:n}},onToggleAutoFollow:t=>e.logsAutoFollow=t,onRefresh:()=>Ki(e,{reset:!0}),onExport:(t,n)=>e.exportLogs(t,n),onScroll:t=>e.handleLogsScroll(t)})):u}
      </main>
      ${e.showAgentCreator?Zj({step:e.agentCreatorStep,value:e.agentCreatorDraft,creating:e.agentCreatorCreating,error:e.agentCreatorError,onClose:()=>e.closeAgentCreator(),onStepChange:t=>{e.agentCreatorStep=t,e.agentCreatorError=null},onChange:t=>{e.agentCreatorDraft={...e.agentCreatorDraft,...t},e.agentCreatorError=null},onCreate:t=>{e.createEmployee(t)}}):u}
      ${wN(e)} ${TN(e)} ${u}
    </div>
  `}var QP=`openclaw.control.meetings.v1`,$P=5,eF=`kova-morgan`,tF=`None identified`,nF="You are analysing a meeting transcript. Reply with markdown only. Start with `## Summary` and use exactly these headers in this exact order: `## Summary`, `## Action Items`, `## Key Decisions`, `## Follow-up Email`. Do not include any text before `## Summary`. Do not merge sections. Put every item under the correct header. If a section has nothing concrete, write `None identified`.",rF=[{key:`summary`,header:`Summary`},{key:`actionItems`,header:`Action Items`},{key:`decisions`,header:`Key Decisions`},{key:`followUpEmail`,header:`Follow-up Email`}];function iF(e){return e.replace(/\r\n/g,`
`)}function aF(e){return typeof e==`string`?e.trim():``}function oF(e){if(!e||typeof e!=`object`)return!1;let t=e;return typeof t.id==`string`&&typeof t.title==`string`&&typeof t.transcript==`string`&&(typeof t.sourceName==`string`||t.sourceName===null)&&typeof t.createdAt==`number`&&typeof t.summary==`string`&&typeof t.actionItems==`string`&&typeof t.decisions==`string`&&typeof t.followUpEmail==`string`&&typeof t.rawResponse==`string`}function sF(e){return e.trim()||`None identified`}function cF(e){let t=e.trim().toLowerCase();return rF.find(e=>e.header.toLowerCase()===t)?.key??null}function lF(e){let t=aF(e.title),n=iF(e.transcript).trim(),r=t?`Meeting title: ${t}`:`Meeting title: Untitled meeting`;return[nF,``,`Use exactly these markdown headers, each on its own line:`,`## Summary`,`## Action Items`,`## Key Decisions`,`## Follow-up Email`,``,`If a section has no concrete items, write exactly: ${tF}`,"Do not include any introduction before `## Summary`.",``,r,``,`Transcript:`,n].join(`
`)}function uF(e){let t=iF(e).trim();if(!t)return{summary:tF,actionItems:tF,decisions:tF,followUpEmail:tF,rawResponse:``};let n=t.search(/^## /m),r=n>=0?t.slice(n).trim():t;if(n<0)return{summary:sF(t),actionItems:tF,decisions:tF,followUpEmail:tF,rawResponse:t};let i=new Map,a=r.split(/^## /gm).map(e=>e.trim()).filter(Boolean);for(let e of a){let t=e.indexOf(`
`),n=cF((t===-1?e:e.slice(0,t)).trim());if(!n||i.has(n))continue;let r=t===-1?``:e.slice(t+1);i.set(n,sF(r))}return{summary:i.get(`summary`)??`None identified`,actionItems:i.get(`actionItems`)??`None identified`,decisions:i.get(`decisions`)??`None identified`,followUpEmail:i.get(`followUpEmail`)??`None identified`,rawResponse:t}}function dF(e){return e.channel===`telegram`||e.lastChannel===`telegram`||e.key===`telegram`||e.key.startsWith(`telegram:`)||e.key.includes(`:telegram:`)}function fF(e){let t=e.trim();return t?t.replace(/^telegram:/i,``):``}function pF(e){let t=[...e].filter(e=>dF(e)).sort((e,t)=>(t.updatedAt??0)-(e.updatedAt??0)).find(e=>typeof e.lastTo==`string`&&fF(e.lastTo));if(!t||typeof t.lastTo!=`string`)return null;let n=fF(t.lastTo);return n?{sessionKey:t.key,chatId:n,label:t.displayName?.trim()||n}:null}async function mF(e){let[{getDocument:t,GlobalWorkerOptions:n},r]=await Promise.all([_(()=>import(`./pdf-BwYFZMZM.js`),__vite__mapDeps([36,14]),import.meta.url),_(()=>import(`./pdf.worker.min-BmpgcBpm.js`),[],import.meta.url)]);n.workerSrc=r.default;let i=await t({data:new Uint8Array(await e.arrayBuffer())}).promise;try{let e=[];for(let t=1;t<=i.numPages;t+=1){let n=(await(await i.getPage(t)).getTextContent()).items.map(e=>`str`in e?e.str:``).join(` `).replace(/\s+/g,` `).trim();n&&e.push(n)}return e.join(`

`)}finally{i.destroy()}}async function hF(e){let t=aF(e.name)||`meeting`,n=t.toLowerCase(),r=``;r=n.endsWith(`.pdf`)?await mF(e):await e.text();let i=iF(r).trim();if(!i)throw Error(`No readable text was found in ${t}.`);return{transcript:i,sourceName:t}}function gF(){try{let e=g()?.getItem(QP);if(!e)return[];let t=JSON.parse(e);return Array.isArray(t)?t.filter(oF).sort((e,t)=>t.createdAt-e.createdAt).slice(0,$P):[]}catch{return[]}}function _F(e){let t=e.filter(oF).sort((e,t)=>t.createdAt-e.createdAt).slice(0,$P);try{g()?.setItem(QP,JSON.stringify(t))}catch{}return t}function vF(e,t){return _F([t,...e.filter(e=>e.id!==t.id)])}function yF(){try{g()?.removeItem(QP)}catch{}}var bF=EO({}),xF=`openrouter/auto`,SF=`agent:${eF}:meetings`,CF={name:``,role:``,emoji:`👩‍💼`,autonomy:`Supervised`,personality:``,focus:``,instructions:``};function wF(e){switch(e){case`Supervised`:return 1;case`Autonomous`:return 3;default:return 2}}function TF(e){return{...e,name:e.name.trim(),role:e.role.trim(),personality:e.personality.trim(),focus:e.focus.trim(),instructions:e.instructions.trim()}}function EF(e){return`kova-${e.toLowerCase().replace(/\s+/g,`-`)}`}function DF(e){let t=e?.agents??[];for(let e of t){let t=typeof e.workspace==`string`?e.workspace.trim():``,n=`workspace-${e.id}`;if(t&&t.endsWith(n))return t.slice(0,-n.length)}let n=t.find(e=>e.id===`main`)?.workspace?.trim();if(n){let e=n.replace(/[\\/]+$/g,``),t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));if(t>=0)return e.slice(0,t+1)}return`~/.openclaw/`}function OF(e,t){return`${DF(e)}workspace-${t}`}function kF(e){let t=TF(e);return[`---`,`kova: true`,`name: ${JSON.stringify(t.name)}`,`role: ${JSON.stringify(t.role)}`,`autonomy: ${wF(t.autonomy)}`,`emoji: ${JSON.stringify(t.emoji)}`,`---`,``,`# ${t.emoji} ${t.name} \u2014 ${t.role}`,``,`## Identity`,`You are ${t.name}, Kova's ${t.role}.`,``,`## Personality`,t.personality,``,`## Focus`,t.focus,``,`## Instructions`,t.instructions,``,`## Autonomy`,`Level: ${t.autonomy}`].join(`
`)}function AF(e){return e instanceof Error?e.message:String(e)}function jF(e){return e instanceof Error?e.message:String(e)}function MF(e){let t=xh(e);return typeof t==`string`?t.trim():``}function NF(e){for(let t=e.length-1;t>=0;--t){let n=e[t];if(!n||n.role!==`assistant`)continue;let r=MF(n);if(r)return{signature:`${typeof n.id==`string`?n.id:typeof n.messageId==`string`?n.messageId:typeof n.timestamp==`number`?String(n.timestamp):`assistant-${t}`}:${r}`,text:r}}return null}function PF(e){return new Promise(t=>window.setTimeout(t,e))}function FF(e,t){return e.find(e=>e.id===t)??null}function IF(e){let t=uF(e.rawResponse);return{id:e.id,title:e.title.trim(),transcript:e.transcript.trim(),sourceName:e.sourceName,createdAt:Date.now(),summary:t.summary,actionItems:t.actionItems,decisions:t.decisions,followUpEmail:t.followUpEmail,rawResponse:t.rawResponse}}function LF(){if(!window.location.search)return!1;let e=new URLSearchParams(window.location.search).get(`onboarding`);if(!e)return!1;let t=e.trim().toLowerCase();return t===`1`||t===`true`||t===`yes`||t===`on`}var $=class extends m{constructor(){super(),this.i18nController=new ye(this),this.voiceSeenBySession=new Map,this.voicePlaybackGeneration=0,this.clientInstanceId=Hn(),this.connectGeneration=0,this.settings=sl(),this.password=``,this.loginShowGatewayToken=!1,this.loginShowGatewayPassword=!1,this.tab=`chat`,this.onboarding=LF(),this.onboardingStep=1,this.onboardingProvider=`openrouter`,this.onboardingInteracted=!1,this.briefingForm=aj(),this.briefingDirty=!1,this.briefingLoading=!1,this.briefingSaving=!1,this.briefingMessage=null,this.connected=!1,this.theme=this.settings.theme??`claw`,this.themeMode=this.settings.themeMode??`system`,this.themeResolved=`dark`,this.themeOrder=this.buildThemeOrder(this.theme),this.hello=null,this.lastError=null,this.lastErrorCode=null,this.eventLog=[],this.eventLogBuffer=[],this.toolStreamSyncTimer=null,this.sidebarCloseTimer=null,this.assistantName=bF.name,this.assistantAvatar=bF.avatar,this.assistantAgentId=bF.agentId??null,this.serverVersion=null,this.sessionKey=this.settings.sessionKey,this.chatLoading=!1,this.chatSending=!1,this.chatMessage=``,this.chatMessages=[],this.chatToolMessages=[],this.chatStreamSegments=[],this.chatStream=null,this.chatStreamStartedAt=null,this.chatRunId=null,this.compactionStatus=null,this.fallbackStatus=null,this.chatAvatarUrl=null,this.chatThinkingLevel=null,this.chatModelOverrides={},this.chatModelsLoading=!1,this.chatModelCatalog=[],this.chatQueue=[],this.chatAttachments=[],this.chatManualRefreshInFlight=!1,this.navDrawerOpen=!1,this.sidebarOpen=!1,this.sidebarContent=null,this.sidebarError=null,this.splitRatio=this.settings.splitRatio,this.nodesLoading=!1,this.nodes=[],this.devicesLoading=!1,this.devicesError=null,this.devicesList=null,this.execApprovalsLoading=!1,this.execApprovalsSaving=!1,this.execApprovalsDirty=!1,this.execApprovalsSnapshot=null,this.execApprovalsForm=null,this.execApprovalsSelectedAgent=null,this.execApprovalsTarget=`gateway`,this.execApprovalsTargetNodeId=null,this.execApprovalQueue=[],this.execApprovalBusy=!1,this.execApprovalError=null,this.pendingGatewayUrl=null,this.pendingGatewayToken=null,this.configLoading=!1,this.configRaw=`{
}
`,this.configRawOriginal=``,this.configValid=null,this.configIssues=[],this.configSaving=!1,this.configApplying=!1,this.updateRunning=!1,this.applySessionKey=this.settings.lastActiveSessionKey,this.configSnapshot=null,this.configSchema=null,this.configSchemaVersion=null,this.configSchemaLoading=!1,this.configUiHints={},this.configForm=null,this.configFormOriginal=null,this.configFormDirty=!1,this.configFormMode=`form`,this.configSearchQuery=``,this.configActiveSection=null,this.configActiveSubsection=null,this.communicationsFormMode=`form`,this.communicationsSearchQuery=``,this.communicationsActiveSection=null,this.communicationsActiveSubsection=null,this.appearanceFormMode=`form`,this.appearanceSearchQuery=``,this.appearanceActiveSection=null,this.appearanceActiveSubsection=null,this.automationFormMode=`form`,this.automationSearchQuery=``,this.automationActiveSection=null,this.automationActiveSubsection=null,this.infrastructureFormMode=`form`,this.infrastructureSearchQuery=``,this.infrastructureActiveSection=null,this.infrastructureActiveSubsection=null,this.aiAgentsFormMode=`form`,this.aiAgentsSearchQuery=``,this.aiAgentsActiveSection=null,this.aiAgentsActiveSubsection=null,this.apiKeysLoading=!1,this.apiKeysLoaded=!1,this.apiKeysSavingProviderId=null,this.apiKeysTestingProviderId=null,this.apiKeysModelSaving=!1,this.apiKeysCurrentModel=`openrouter/auto`,this.apiKeysModelOption=`openrouter/auto`,this.apiKeysCustomModelInput=``,this.apiKeysConfigHash=null,this.apiKeysPageMessage=null,this.apiKeysElevenLabsInput=``,this.apiKeysElevenLabsConfigured=!1,this.apiKeysElevenLabsSaving=!1,this.apiKeysElevenLabsTesting=!1,this.apiKeysElevenLabsConfigHash=null,this.apiKeysElevenLabsMessage=null,this.apiKeyProviderInputs=co(),this.apiKeyProviderStatuses=lo(),this.apiKeyProviderMessages=uo(),this.channelsLoading=!1,this.channelsSnapshot=null,this.channelsError=null,this.channelsLastSuccess=null,this.whatsappLoginMessage=null,this.whatsappLoginQrDataUrl=null,this.whatsappLoginConnected=null,this.whatsappBusy=!1,this.telegramSetupToken=``,this.telegramSetupBusy=!1,this.telegramSetupMessage=null,this.telegramApprovalsLoading=!1,this.telegramApprovalsBusyCode=null,this.telegramApprovalsMessage=null,this.telegramPendingApprovals=[],this.nostrProfileFormState=null,this.nostrProfileAccountId=null,this.presenceLoading=!1,this.presenceEntries=[],this.presenceError=null,this.presenceStatus=null,this.agentsLoading=!1,this.agentsList=null,this.agentsError=null,this.agentsSelectedId=null,this.toolsCatalogLoading=!1,this.toolsCatalogError=null,this.toolsCatalogResult=null,this.toolsEffectiveLoading=!1,this.toolsEffectiveLoadingKey=null,this.toolsEffectiveResultKey=null,this.toolsEffectiveError=null,this.toolsEffectiveResult=null,this.agentsPanel=`files`,this.agentFilesLoading=!1,this.agentFilesError=null,this.agentFilesList=null,this.agentFileContents={},this.agentFileDrafts={},this.agentFileActive=null,this.agentFileSaving=!1,this.agentIdentityLoading=!1,this.agentIdentityError=null,this.agentIdentityById={},this.agentSoulLoading=!1,this.agentSoulContentById={},this.agentSkillsLoading=!1,this.agentSkillsError=null,this.agentSkillsReport=null,this.agentSkillsAgentId=null,this.employeesLoading=!1,this.employeesError=null,this.employeesDashboard=null,this.employeesFilterAgentId=null,this.canvasRefreshing=!1,this.canvasStatus=`idle`,this.canvasFrameUrl=null,this.canvasSelectedAgentId=`main`,this.voiceSpeaking=!1,this.voiceMessage=null,this.routingSaving=!1,this.routingDirty=!1,this.routingAssignments={telegram:`main`,whatsapp:`main`},this.routingMessage=null,this.meetingsTitle=``,this.meetingsTranscript=``,this.meetingsSourceName=null,this.meetingsAnalyzing=!1,this.meetingsSendingTelegram=!1,this.meetingsError=null,this.meetingsNotice=null,this.meetingsResult=null,this.meetingsHistory=gF(),this.showAgentCreator=!1,this.agentCreatorStep=1,this.agentCreatorCreating=!1,this.agentCreatorDraft={...CF},this.agentCreatorSuccess=null,this.agentCreatorError=null,this.inboxSessions=null,this.inboxLoading=!1,this.inboxError=null,this.inboxChannelFilter=`all`,this.sessionsLoading=!1,this.sessionsResult=null,this.sessionsError=null,this.sessionsFilterActive=``,this.sessionsFilterLimit=`120`,this.sessionsIncludeGlobal=!0,this.sessionsIncludeUnknown=!1,this.sessionsHideCron=!0,this.sessionsSearchQuery=``,this.sessionsSortColumn=`updated`,this.sessionsSortDir=`desc`,this.sessionsPage=0,this.sessionsPageSize=25,this.sessionsSelectedKeys=new Set,this.usageLoading=!1,this.usageResult=null,this.usageCostSummary=null,this.usageError=null,this.usageStartDate=(()=>{let e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`})(),this.usageEndDate=(()=>{let e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`})(),this.usageSelectedSessions=[],this.usageSelectedDays=[],this.usageSelectedHours=[],this.usageChartMode=`tokens`,this.usageDailyChartMode=`by-type`,this.usageTimeSeriesMode=`per-tun`,this.usageTimeSeriesBreakdownMode=`by-type`,this.usageTimeSeries=null,this.usageTimeSeriesLoading=!1,this.usageTimeSeriesCursorStart=null,this.usageTimeSeriesCursorEnd=null,this.usageSessionLogs=null,this.usageSessionLogsLoading=!1,this.usageSessionLogsExpanded=!1,this.usageQuery=``,this.usageQueryDraft=``,this.usageSessionSort=`recent`,this.usageSessionSortDir=`desc`,this.usageRecentSessions=[],this.usageTimeZone=`local`,this.usageContextExpanded=!1,this.usageHeaderPinned=!1,this.usageSessionsTab=`all`,this.usageVisibleColumns=[`channel`,`agent`,`provider`,`model`,`messages`,`tools`,`errors`,`duration`],this.usageLogFilterRoles=[],this.usageLogFilterTools=[],this.usageLogFilterHasTools=!1,this.usageLogFilterQuery=``,this.usageQueryDebounceTimer=null,this.cronLoading=!1,this.cronJobsLoadingMore=!1,this.cronJobs=[],this.cronJobsTotal=0,this.cronJobsHasMore=!1,this.cronJobsNextOffset=null,this.cronJobsLimit=50,this.cronJobsQuery=``,this.cronJobsEnabledFilter=`all`,this.cronJobsScheduleKindFilter=`all`,this.cronJobsLastStatusFilter=`all`,this.cronJobsSortBy=`nextRunAtMs`,this.cronJobsSortDir=`asc`,this.cronStatus=null,this.cronError=null,this.cronForm={...Bo},this.cronFieldErrors={},this.cronEditingJobId=null,this.cronRunsJobId=null,this.cronRunsLoadingMore=!1,this.cronRuns=[],this.cronRunsTotal=0,this.cronRunsHasMore=!1,this.cronRunsNextOffset=null,this.cronRunsLimit=50,this.cronRunsScope=`all`,this.cronRunsStatuses=[],this.cronRunsDeliveryStatuses=[],this.cronRunsStatusFilter=`all`,this.cronRunsQuery=``,this.cronRunsSortDir=`desc`,this.cronModelSuggestions=[],this.cronBusy=!1,this.updateAvailable=null,this.attentionItems=[],this.paletteOpen=!1,this.paletteQuery=``,this.paletteActiveIndex=0,this.overviewShowGatewayToken=!1,this.overviewShowGatewayPassword=!1,this.overviewLogLines=[],this.overviewLogCursor=0,this.skillsLoading=!1,this.skillsReport=null,this.skillsError=null,this.skillsFilter=``,this.skillsStatusFilter=`all`,this.skillEdits={},this.skillsBusyKey=null,this.skillMessages={},this.skillsDetailKey=null,this.kova_marketplaceLoading=!1,this.kova_marketplaceSkills=[],this.kova_marketplaceError=null,this.kova_marketplaceCategory=`all`,this.kova_installedLoading=!1,this.kova_installedError=null,this.kova_installedSkillIds=[],this.kova_marketplaceBusyId=null,this.healthLoading=!1,this.healthResult=null,this.healthError=null,this.debugLoading=!1,this.debugStatus=null,this.debugHealth=null,this.debugModels=[],this.debugHeartbeat=null,this.debugCallMethod=``,this.debugCallParams=`{}`,this.debugCallResult=null,this.debugCallError=null,this.logsLoading=!1,this.logsError=null,this.logsFile=null,this.logsEntries=[],this.logsFilterText=``,this.logsLevelFilters={...zo},this.logsAutoFollow=!0,this.logsTruncated=!1,this.logsCursor=null,this.logsLastFetchAt=null,this.logsLimit=500,this.logsMaxBytes=25e4,this.logsAtBottom=!0,this.client=null,this.chatScrollFrame=null,this.chatScrollTimeout=null,this.chatHasAutoScrolled=!1,this.chatUserNearBottom=!0,this.briefingHydrationKey=null,this.chatNewMessagesBelow=!1,this.nodesPollInterval=null,this.logsPollInterval=null,this.debugPollInterval=null,this.inboxPollInterval=null,this.logsScrollFrame=null,this.toolStreamById=new Map,this.toolStreamOrder=[],this.refreshSessionsAfterChat=new Set,this.basePath=``,this.popStateHandler=()=>DE(this),this.topbarObserver=null,this.globalKeydownHandler=e=>{(e.metaKey||e.ctrlKey)&&!e.shiftKey&&e.key===`k`&&(e.preventDefault(),this.paletteOpen=!this.paletteOpen,this.paletteOpen&&(this.paletteQuery=``,this.paletteActiveIndex=0))},me(this.settings.locale)&&ve.setLocale(this.settings.locale)}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.onSlashAction=e=>{switch(e){case`toggle-focus`:this.applySettings({...this.settings,chatFocusMode:!this.settings.chatFocusMode});break;case`export`:Dh(this.chatMessages,this.assistantName);break;case`refresh-tools-effective`:Aa(this);break}},document.addEventListener(`keydown`,this.globalKeydownHandler),ZO(this)}firstUpdated(){QO(this)}disconnectedCallback(){document.removeEventListener(`keydown`,this.globalKeydownHandler),this.stopVoicePlayback({silent:!0}),$O(this),super.disconnectedCallback()}updated(e){if(ek(this,e),this.syncOnboardingRouteState()||((e.has(`connected`)&&this.connected||e.has(`tab`)&&(this.tab===`chat`||this.tab===`apiKeys`))&&Io(this),e.has(`sessionKey`)&&(this.stopVoicePlayback({silent:!0}),this.voiceMessage=null,this.markCurrentAssistantMessageAsSeen(this.sessionKey)),e.has(`chatMessages`)&&this.maybeSpeakLatestAssistantMessage(),this.tab===`briefing`&&(e.has(`tab`)||e.has(`cronJobs`)||e.has(`channelsSnapshot`)||e.has(`whatsappLoginConnected`))&&this.syncBriefingFormFromState(e.has(`tab`)),this.tab===`canvas`&&(e.has(`tab`)||e.has(`connected`)||e.has(`hello`))&&this.refreshCanvas(),(e.has(`tab`)||e.has(`configSnapshot`))&&this.tab===`routing`&&this.syncRoutingAssignmentsFromState(e.has(`tab`)),!e.has(`sessionKey`)||this.agentsPanel!==`tools`))return;let t=N(this.sessionKey);if(this.agentsSelectedId&&this.agentsSelectedId===t){Oa(this,{agentId:this.agentsSelectedId,sessionKey:this.sessionKey});return}this.toolsEffectiveResult=null,this.toolsEffectiveResultKey=null,this.toolsEffectiveError=null,this.toolsEffectiveLoading=!1,this.toolsEffectiveLoadingKey=null}connect(){UO(this)}handleChatScroll(e){ci(this,e)}handleLogsScroll(e){li(this,e)}exportLogs(e,t){di(e,t)}resetToolStream(){eD(this)}resetChatScroll(){ui(this)}scrollToBottom(e){ui(this),oi(this,!0,!!e?.smooth)}async loadAssistantIdentity(){await DO(this)}applySettings(e){dE(this,e)}setTab(e){mE(this,e),this.onboarding=e===`onboarding`,this.navDrawerOpen=!1}setOnboardingStep(e){this.onboardingInteracted=!0,this.onboardingStep=e}selectOnboardingProvider(e){this.onboardingInteracted=!0,this.onboardingProvider=e}completeOnboarding(){this.persistOnboardingFlag(),this.onboardingInteracted=!1,this.onboardingStep=1,this.setTab(`employees`)}skipOnboarding(){this.completeOnboarding()}setTheme(e,t){hE(this,e,t),this.themeOrder=this.buildThemeOrder(e)}setThemeMode(e,t){gE(this,e,t)}setBorderRadius(e){dE(this,{...this.settings,borderRadius:e}),this.requestUpdate()}buildThemeOrder(e){return[e,...[...Lc].filter(t=>t!==e)]}async loadOverview(){await ME(this)}async loadCron(){await zE(this)}async loadInbox(){await Bi(this)}setInboxFilter(e){this.inboxChannelFilter=e}resolveCurrentChatAgentId(){return N(this.sessionKey)||`main`}resolveCurrentVoiceApiKey(){return this.apiKeysElevenLabsInput.trim()||Za(this.settings.gatewayUrl)}isVoiceEnabledForAgent(e){return!!this.settings.voiceEnabledByAgent[e]}markCurrentAssistantMessageAsSeen(e){let t=NF(this.chatMessages);t&&this.voiceSeenBySession.set(e,t.signature)}stopVoicePlayback(e){this.voicePlaybackGeneration+=1,Ya(),this.voiceSpeaking=!1,e?.silent||(this.voiceMessage=null)}toggleVoiceForCurrentAgent(){let e=this.resolveCurrentChatAgentId();if(!Qa(e)){this.voiceMessage={kind:`error`,text:`Voice mode is available for Kova employees only.`};return}if(!this.resolveCurrentVoiceApiKey()){this.voiceMessage={kind:`error`,text:`Add your ElevenLabs key in API Keys settings.`};return}let t=!this.isVoiceEnabledForAgent(e);if(this.applySettings({...this.settings,voiceEnabledByAgent:{...this.settings.voiceEnabledByAgent,[e]:t}}),!t){this.stopVoicePlayback({silent:!0}),this.voiceMessage=null;return}this.markCurrentAssistantMessageAsSeen(this.sessionKey),this.voiceMessage={kind:`success`,text:`Voice mode is on for this employee.`}}async maybeSpeakLatestAssistantMessage(){if(this.tab!==`chat`)return;let e=this.resolveCurrentChatAgentId();if(!Qa(e)||!this.isVoiceEnabledForAgent(e))return;let t=NF(this.chatMessages);if(!t)return;let n=this.voiceSeenBySession.get(this.sessionKey);if(!n){this.voiceSeenBySession.set(this.sessionKey,t.signature);return}if(n===t.signature)return;this.voiceSeenBySession.set(this.sessionKey,t.signature);let r=this.resolveCurrentVoiceApiKey();if(!r){this.voiceMessage={kind:`error`,text:`Add your ElevenLabs key in API Keys settings.`};return}let i=++this.voicePlaybackGeneration;this.voiceSpeaking=!0,this.voiceMessage=null;try{await $a(t.text,e,r),i===this.voicePlaybackGeneration&&(this.voiceSpeaking=!1)}catch(e){if(i!==this.voicePlaybackGeneration||(this.voiceSpeaking=!1,Ja(e)))return;this.voiceMessage={kind:`error`,text:`Could not play voice: ${e instanceof Error?e.message:String(e)}`}}}handleCanvasAgentChange(e){this.canvasSelectedAgentId=e,this.tab===`canvas`&&this.refreshCanvas()}async refreshCanvas(){if(this.canvasRefreshing)return;let e=Cj({hello:this.hello,settings:this.settings});if(!e){this.canvasStatus=`error`,this.canvasFrameUrl=null;return}let t=String(Date.now()),n=wj({hello:this.hello,settings:this.settings,password:this.password}),r=Tj({baseUrl:e,agentId:this.canvasSelectedAgentId,refreshKey:t,token:n});this.canvasRefreshing=!0,this.canvasStatus=`checking`;try{if(await Dj({basePath:this.basePath,token:n}),!(await kj({url:r,token:n})).ok){this.canvasStatus=`error`,this.canvasFrameUrl=null;return}this.canvasFrameUrl=r,this.canvasStatus=`ready`}finally{this.canvasRefreshing=!1}}async openCanvasInNewTab(){let e=Cj({hello:this.hello,settings:this.settings});if(!e)return;let t=wj({hello:this.hello,settings:this.settings,password:this.password});await Dj({basePath:this.basePath,token:t});let n=Tj({baseUrl:e,agentId:this.canvasSelectedAgentId,refreshKey:null,token:t});window.open(n,`_blank`,`noopener,noreferrer`)}handleRoutingAssignmentChange(e,t){this.routingAssignments={...this.routingAssignments,[e]:t},this.routingDirty=!0,this.routingMessage=null}applyRoutingPreset(e){this.routingAssignments={telegram:e,whatsapp:e},this.routingDirty=!0,this.routingMessage=null}async saveRouting(){if(!this.client||!this.connected||this.routingSaving)return;let e=this.configSnapshot?.hash;if(!e){this.routingMessage={kind:`error`,text:`Config is not loaded yet. Reload and try again.`};return}this.routingSaving=!0,this.routingMessage=null;try{let t=Bj(this.configSnapshot,this.routingAssignments);await this.client.request(`config.set`,{raw:t,baseHash:e}),this.routingDirty=!1,await Promise.allSettled([F(this),cr(this,!1),Ea(this)]),this.routingMessage={kind:`success`,text:`Routing saved. Changes take effect immediately - no restart needed.`}}catch(e){this.routingMessage={kind:`error`,text:`Could not save routing: ${e instanceof Error?e.message:String(e)}`}}finally{this.routingSaving=!1}}handleMeetingsTitleChange(e){this.meetingsTitle=e,this.meetingsNotice=null}handleMeetingsTranscriptChange(e){this.meetingsTranscript=e,this.meetingsNotice=null}async handleMeetingsFileSelect(e){if(e){this.meetingsError=null,this.meetingsNotice=null;try{let{transcript:t,sourceName:n}=await hF(e);this.meetingsTranscript=t,this.meetingsSourceName=n,this.meetingsTitle.trim()||(this.meetingsTitle=n.replace(/\.[^.]+$/,``)),this.meetingsNotice=`Loaded transcript from ${n}.`}catch(e){this.meetingsError=`Could not read transcript: ${jF(e)}`}}}async analyzeMeeting(){if(!this.client||!this.connected||this.meetingsAnalyzing)return;let e=this.meetingsTranscript.trim();if(!e){this.meetingsError=`Paste a transcript or upload a file before running the analysis.`;return}let t=this.meetingsTitle.trim();this.meetingsAnalyzing=!0,this.meetingsError=null,this.meetingsNotice=null;try{let n=((await this.client.request(`chat.history`,{sessionKey:SF,limit:200})).messages??[]).filter(e=>MF(e).length>0).length;await this.client.request(`chat.send`,{sessionKey:SF,message:lF({title:t,transcript:e}),deliver:!1,idempotencyKey:Hn()});let r=``;for(let e=0;e<40;e+=1){await PF(e===0?400:800);let t=((await this.client.request(`chat.history`,{sessionKey:SF,limit:200})).messages??[]).map(e=>MF(e)).filter(Boolean);if(t.length>n){r=t.at(-1)??``;break}}if(!r.trim())throw Error(`Morgan did not return a completed analysis yet. Please try again.`);this.meetingsResult=IF({id:Hn(),title:t,transcript:e,sourceName:this.meetingsSourceName,rawResponse:r}),this.meetingsNotice=`Meeting analysis is ready.`}catch(e){this.meetingsError=`Could not analyse the meeting: ${jF(e)}`}finally{this.meetingsAnalyzing=!1}}saveMeetingResult(){if(!this.meetingsResult)return;let e={...this.meetingsResult,title:this.meetingsTitle.trim(),transcript:this.meetingsTranscript.trim(),sourceName:this.meetingsSourceName};this.meetingsResult=e,this.meetingsHistory=vF(this.meetingsHistory,e),this.meetingsError=null,this.meetingsNotice=`Saved ${e.title||`meeting analysis`} to history.`}loadMeetingHistoryEntry(e){let t=FF(this.meetingsHistory,e);if(!t){this.meetingsError=`That meeting is no longer available in local history.`;return}this.meetingsTitle=t.title,this.meetingsTranscript=t.transcript,this.meetingsSourceName=t.sourceName,this.meetingsResult=t,this.meetingsError=null,this.meetingsNotice=`Loaded ${t.title||`saved meeting`} from history.`}clearMeetingHistory(){yF(),this.meetingsHistory=[],this.meetingsError=null,this.meetingsNotice=`Meeting history cleared.`}async copyMeetingSection(e,t){let n=t.trim();if(!n){this.meetingsError=`There is no ${e} text to copy yet.`;return}try{await navigator.clipboard.writeText(n),this.meetingsError=null,this.meetingsNotice=`Copied ${e}.`}catch(t){this.meetingsError=`Could not copy ${e}: ${jF(t)}`}}async sendMeetingFollowUpViaTelegram(){if(!this.client||!this.connected||!this.meetingsResult||this.meetingsSendingTelegram)return;let e=this.meetingsResult.followUpEmail.trim();if(!e){this.meetingsError=`Generate a follow-up email before sending it to Telegram.`;return}this.meetingsSendingTelegram=!0,this.meetingsError=null,this.meetingsNotice=null;try{let t=pF((await this.client.request(`sessions.list`,{limit:100,includeGlobal:!0,includeUnknown:!0})).sessions??[]);if(!t)throw Error(`Send a message to your Telegram bot first to enable this.`);await this.client.request(`chat.send`,{sessionKey:t.sessionKey,message:e,deliver:!0,idempotencyKey:Hn()}),this.meetingsNotice=`Follow-up email sent to Telegram via ${t.label}.`}catch(e){this.meetingsError=`Could not send via Telegram: ${jF(e)}`}finally{this.meetingsSendingTelegram=!1}}openAgentCreator(){this.showAgentCreator=!0,this.agentCreatorStep=1,this.agentCreatorCreating=!1,this.agentCreatorDraft={...CF},this.agentCreatorSuccess=null,this.agentCreatorError=null}closeAgentCreator(){this.showAgentCreator=!1,this.agentCreatorStep=1,this.agentCreatorCreating=!1,this.agentCreatorDraft={...CF},this.agentCreatorSuccess=null,this.agentCreatorError=null}async createEmployee(e){if(!this.client||!this.connected||this.agentCreatorCreating)return;let t=TF(e);if(!t.name||!t.role){this.agentCreatorStep=1,this.agentCreatorError=`Add a name and role before creating the employee.`;return}let n=EF(t.name),r=OF(this.agentsList,n),i=null;this.agentCreatorCreating=!0,this.agentCreatorDraft={...t},this.agentCreatorSuccess=null,this.agentCreatorError=null;try{let e=await this.client.request(`agents.create`,{id:n,name:t.name,emoji:t.emoji,workspace:r});i=e.agentId,await this.client.request(`agents.files.set`,{agentId:e.agentId,name:`SOUL.md`,content:kF(t)}),await this.client.request(`agents.update`,{agentId:e.agentId,model:xF}),this.showAgentCreator=!1,this.agentCreatorStep=1,this.agentCreatorDraft={...CF},this.agentCreatorError=null,this.agentCreatorSuccess=`Created ${e.name} (${e.agentId}).`,await Ea(this),this.agentSoulContentById={...this.agentSoulContentById,[e.agentId]:kF(t)},await ga(this,[e.agentId])}catch(e){let t=AF(e);this.agentCreatorError=i?`Employee ${i} was created, but setup did not finish: ${t}`:`Could not create employee: ${t}`}finally{this.agentCreatorCreating=!1}}async saveBriefing(){if(!this.client||!this.connected||this.briefingSaving)return;let e=cj(this.channelsSnapshot,this.whatsappLoginConnected);if(e.length===0){this.briefingMessage={kind:`error`,text:`Connect Telegram or WhatsApp before saving a daily briefing.`};return}if(!Object.values(this.briefingForm.sections).some(Boolean)){this.briefingMessage={kind:`error`,text:`Select at least one briefing section before saving.`};return}let t=e.includes(this.briefingForm.channel)?this.briefingForm.channel:e[0],n=sj(),r={name:ZA,description:mj({...this.briefingForm,channel:t},n),agentId:`kova-alex`,enabled:this.briefingForm.enabled,deleteAfterRun:!1,schedule:{kind:`cron`,expr:pj(this.briefingForm.time),tz:n},sessionTarget:`isolated`,wakeMode:`next-heartbeat`,payload:{kind:`agentTurn`,message:hj({...this.briefingForm,channel:t},n),lightContext:!0},delivery:{mode:`announce`,channel:t,bestEffort:!0},failureAlert:!1},i=oj(this.cronJobs);this.briefingSaving=!0,this.briefingLoading=!0,this.briefingMessage=null;try{i?await this.client.request(`cron.update`,{id:i.id,patch:r}):await this.client.request(`cron.add`,r),this.briefingForm={...this.briefingForm,channel:t},this.briefingDirty=!1,this.briefingMessage={kind:`success`,text:`Daily briefing saved for ${lj(t)} at ${this.briefingForm.time}.`},await this.loadCron()}catch(e){this.briefingMessage={kind:`error`,text:`Could not save the daily briefing: ${String(e)}`}}finally{this.briefingLoading=!1,this.briefingSaving=!1}}async handleAbortChat(){await iO(this)}removeQueuedMessage(e){lO(this,e)}async handleSendChat(e,t){await dO(this,e,t)}async handleWhatsAppStart(e){await Br(this,e)}async handleWhatsAppRelink(){await Hr(this)}async handleWhatsAppWait(){await Ur(this)}async handleWhatsAppLogout(){await Wr(this)}async handleChannelConfigSave(){await Gr(this)}async handleChannelConfigReload(){await Kr(this)}handleNostrProfileEdit(e,t){Qr(this,e,t)}handleNostrProfileCancel(){$r(this)}handleNostrProfileFieldChange(e,t){ei(this,e,t)}async handleNostrProfileSave(){await ni(this)}async handleNostrProfileImport(){await ri(this)}handleNostrProfileToggleAdvanced(){ti(this)}async handleExecApprovalDecision(e){let t=this.execApprovalQueue[0];if(!(!t||!this.client||this.execApprovalBusy)){this.execApprovalBusy=!0,this.execApprovalError=null;try{let n=t.kind===`plugin`?`plugin.approval.resolve`:`exec.approval.resolve`;await this.client.request(n,{id:t.id,decision:e}),this.execApprovalQueue=this.execApprovalQueue.filter(e=>e.id!==t.id)}catch(e){this.execApprovalError=`Approval failed: ${String(e)}`}finally{this.execApprovalBusy=!1}}}handleGatewayUrlConfirm(){let e=this.pendingGatewayUrl;if(!e)return;let t=this.pendingGatewayToken?.trim()||``;this.pendingGatewayUrl=null,this.pendingGatewayToken=null,dE(this,{...this.settings,gatewayUrl:e,token:t}),this.connect()}handleGatewayUrlCancel(){this.pendingGatewayUrl=null,this.pendingGatewayToken=null}handleOpenSidebar(e){this.sidebarCloseTimer!=null&&(window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=null),this.sidebarContent=e,this.sidebarError=null,this.sidebarOpen=!0}handleCloseSidebar(){this.sidebarOpen=!1,this.sidebarCloseTimer!=null&&window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=window.setTimeout(()=>{this.sidebarOpen||(this.sidebarContent=null,this.sidebarError=null,this.sidebarCloseTimer=null)},200)}handleSplitRatioChange(e){let t=Math.max(.4,Math.min(.7,e));this.splitRatio=t,this.applySettings({...this.settings,splitRatio:t})}render(){return ZP(this)}hasSavedProviderKey(){return Object.values(this.apiKeyProviderStatuses).some(e=>e?.hasKey===!0)}hasCompletedOnboarding(){return g()?.getItem(`kova_onboarded`)===`1`}persistOnboardingFlag(){g()?.setItem(`kova_onboarded`,`1`)}syncBriefingFormFromState(e=!1){let t=cj(this.channelsSnapshot,this.whatsappLoginConnected),n=oj(this.cronJobs),r=JSON.stringify({jobId:n?.id??null,updatedAtMs:n?.updatedAtMs??null,description:n?.description??null,enabled:n?.enabled??null,schedule:n?.schedule.kind===`cron`?`${n.schedule.expr}|${n.schedule.tz??``}`:n?.schedule.kind??null,deliveryChannel:n?.delivery?.channel??null,availableChannels:t});!e&&this.briefingDirty||!e&&this.briefingHydrationKey===r||(this.briefingForm=uj(n,t),this.briefingDirty=!1,this.briefingHydrationKey=r)}syncRoutingAssignmentsFromState(e=!1){if(!e&&this.routingDirty)return;let t=zj(this.configSnapshot),n=JSON.stringify(this.routingAssignments),r=JSON.stringify(t);!e&&n===r||(this.routingAssignments=t,this.routingDirty=!1,e&&(this.routingMessage=null))}syncOnboardingRouteState(){return this.onboarding!==(this.tab===`onboarding`)&&(this.onboarding=this.tab===`onboarding`),!this.connected||!this.apiKeysLoaded?!1:this.tab===`onboarding`?this.hasCompletedOnboarding()||this.hasSavedProviderKey()&&!this.onboardingInteracted?(this.setTab(`employees`),!0):!1:!this.hasCompletedOnboarding()&&!this.hasSavedProviderKey()?(this.onboardingStep=1,this.onboardingInteracted=!1,this.setTab(`onboarding`),!0):!1}};Y([k()],$.prototype,`settings`,void 0),Y([k()],$.prototype,`password`,void 0),Y([k()],$.prototype,`loginShowGatewayToken`,void 0),Y([k()],$.prototype,`loginShowGatewayPassword`,void 0),Y([k()],$.prototype,`tab`,void 0),Y([k()],$.prototype,`onboarding`,void 0),Y([k()],$.prototype,`onboardingStep`,void 0),Y([k()],$.prototype,`onboardingProvider`,void 0),Y([k()],$.prototype,`onboardingInteracted`,void 0),Y([k()],$.prototype,`briefingForm`,void 0),Y([k()],$.prototype,`briefingDirty`,void 0),Y([k()],$.prototype,`briefingLoading`,void 0),Y([k()],$.prototype,`briefingSaving`,void 0),Y([k()],$.prototype,`briefingMessage`,void 0),Y([k()],$.prototype,`connected`,void 0),Y([k()],$.prototype,`theme`,void 0),Y([k()],$.prototype,`themeMode`,void 0),Y([k()],$.prototype,`themeResolved`,void 0),Y([k()],$.prototype,`themeOrder`,void 0),Y([k()],$.prototype,`hello`,void 0),Y([k()],$.prototype,`lastError`,void 0),Y([k()],$.prototype,`lastErrorCode`,void 0),Y([k()],$.prototype,`eventLog`,void 0),Y([k()],$.prototype,`assistantName`,void 0),Y([k()],$.prototype,`assistantAvatar`,void 0),Y([k()],$.prototype,`assistantAgentId`,void 0),Y([k()],$.prototype,`serverVersion`,void 0),Y([k()],$.prototype,`sessionKey`,void 0),Y([k()],$.prototype,`chatLoading`,void 0),Y([k()],$.prototype,`chatSending`,void 0),Y([k()],$.prototype,`chatMessage`,void 0),Y([k()],$.prototype,`chatMessages`,void 0),Y([k()],$.prototype,`chatToolMessages`,void 0),Y([k()],$.prototype,`chatStreamSegments`,void 0),Y([k()],$.prototype,`chatStream`,void 0),Y([k()],$.prototype,`chatStreamStartedAt`,void 0),Y([k()],$.prototype,`chatRunId`,void 0),Y([k()],$.prototype,`compactionStatus`,void 0),Y([k()],$.prototype,`fallbackStatus`,void 0),Y([k()],$.prototype,`chatAvatarUrl`,void 0),Y([k()],$.prototype,`chatThinkingLevel`,void 0),Y([k()],$.prototype,`chatModelOverrides`,void 0),Y([k()],$.prototype,`chatModelsLoading`,void 0),Y([k()],$.prototype,`chatModelCatalog`,void 0),Y([k()],$.prototype,`chatQueue`,void 0),Y([k()],$.prototype,`chatAttachments`,void 0),Y([k()],$.prototype,`chatManualRefreshInFlight`,void 0),Y([k()],$.prototype,`navDrawerOpen`,void 0),Y([k()],$.prototype,`sidebarOpen`,void 0),Y([k()],$.prototype,`sidebarContent`,void 0),Y([k()],$.prototype,`sidebarError`,void 0),Y([k()],$.prototype,`splitRatio`,void 0),Y([k()],$.prototype,`nodesLoading`,void 0),Y([k()],$.prototype,`nodes`,void 0),Y([k()],$.prototype,`devicesLoading`,void 0),Y([k()],$.prototype,`devicesError`,void 0),Y([k()],$.prototype,`devicesList`,void 0),Y([k()],$.prototype,`execApprovalsLoading`,void 0),Y([k()],$.prototype,`execApprovalsSaving`,void 0),Y([k()],$.prototype,`execApprovalsDirty`,void 0),Y([k()],$.prototype,`execApprovalsSnapshot`,void 0),Y([k()],$.prototype,`execApprovalsForm`,void 0),Y([k()],$.prototype,`execApprovalsSelectedAgent`,void 0),Y([k()],$.prototype,`execApprovalsTarget`,void 0),Y([k()],$.prototype,`execApprovalsTargetNodeId`,void 0),Y([k()],$.prototype,`execApprovalQueue`,void 0),Y([k()],$.prototype,`execApprovalBusy`,void 0),Y([k()],$.prototype,`execApprovalError`,void 0),Y([k()],$.prototype,`pendingGatewayUrl`,void 0),Y([k()],$.prototype,`configLoading`,void 0),Y([k()],$.prototype,`configRaw`,void 0),Y([k()],$.prototype,`configRawOriginal`,void 0),Y([k()],$.prototype,`configValid`,void 0),Y([k()],$.prototype,`configIssues`,void 0),Y([k()],$.prototype,`configSaving`,void 0),Y([k()],$.prototype,`configApplying`,void 0),Y([k()],$.prototype,`updateRunning`,void 0),Y([k()],$.prototype,`applySessionKey`,void 0),Y([k()],$.prototype,`configSnapshot`,void 0),Y([k()],$.prototype,`configSchema`,void 0),Y([k()],$.prototype,`configSchemaVersion`,void 0),Y([k()],$.prototype,`configSchemaLoading`,void 0),Y([k()],$.prototype,`configUiHints`,void 0),Y([k()],$.prototype,`configForm`,void 0),Y([k()],$.prototype,`configFormOriginal`,void 0),Y([k()],$.prototype,`configFormDirty`,void 0),Y([k()],$.prototype,`configFormMode`,void 0),Y([k()],$.prototype,`configSearchQuery`,void 0),Y([k()],$.prototype,`configActiveSection`,void 0),Y([k()],$.prototype,`configActiveSubsection`,void 0),Y([k()],$.prototype,`communicationsFormMode`,void 0),Y([k()],$.prototype,`communicationsSearchQuery`,void 0),Y([k()],$.prototype,`communicationsActiveSection`,void 0),Y([k()],$.prototype,`communicationsActiveSubsection`,void 0),Y([k()],$.prototype,`appearanceFormMode`,void 0),Y([k()],$.prototype,`appearanceSearchQuery`,void 0),Y([k()],$.prototype,`appearanceActiveSection`,void 0),Y([k()],$.prototype,`appearanceActiveSubsection`,void 0),Y([k()],$.prototype,`automationFormMode`,void 0),Y([k()],$.prototype,`automationSearchQuery`,void 0),Y([k()],$.prototype,`automationActiveSection`,void 0),Y([k()],$.prototype,`automationActiveSubsection`,void 0),Y([k()],$.prototype,`infrastructureFormMode`,void 0),Y([k()],$.prototype,`infrastructureSearchQuery`,void 0),Y([k()],$.prototype,`infrastructureActiveSection`,void 0),Y([k()],$.prototype,`infrastructureActiveSubsection`,void 0),Y([k()],$.prototype,`aiAgentsFormMode`,void 0),Y([k()],$.prototype,`aiAgentsSearchQuery`,void 0),Y([k()],$.prototype,`aiAgentsActiveSection`,void 0),Y([k()],$.prototype,`aiAgentsActiveSubsection`,void 0),Y([k()],$.prototype,`apiKeysLoading`,void 0),Y([k()],$.prototype,`apiKeysLoaded`,void 0),Y([k()],$.prototype,`apiKeysSavingProviderId`,void 0),Y([k()],$.prototype,`apiKeysTestingProviderId`,void 0),Y([k()],$.prototype,`apiKeysModelSaving`,void 0),Y([k()],$.prototype,`apiKeysCurrentModel`,void 0),Y([k()],$.prototype,`apiKeysModelOption`,void 0),Y([k()],$.prototype,`apiKeysCustomModelInput`,void 0),Y([k()],$.prototype,`apiKeysConfigHash`,void 0),Y([k()],$.prototype,`apiKeysPageMessage`,void 0),Y([k()],$.prototype,`apiKeysElevenLabsInput`,void 0),Y([k()],$.prototype,`apiKeysElevenLabsConfigured`,void 0),Y([k()],$.prototype,`apiKeysElevenLabsSaving`,void 0),Y([k()],$.prototype,`apiKeysElevenLabsTesting`,void 0),Y([k()],$.prototype,`apiKeysElevenLabsConfigHash`,void 0),Y([k()],$.prototype,`apiKeysElevenLabsMessage`,void 0),Y([k()],$.prototype,`apiKeyProviderInputs`,void 0),Y([k()],$.prototype,`apiKeyProviderStatuses`,void 0),Y([k()],$.prototype,`apiKeyProviderMessages`,void 0),Y([k()],$.prototype,`channelsLoading`,void 0),Y([k()],$.prototype,`channelsSnapshot`,void 0),Y([k()],$.prototype,`channelsError`,void 0),Y([k()],$.prototype,`channelsLastSuccess`,void 0),Y([k()],$.prototype,`whatsappLoginMessage`,void 0),Y([k()],$.prototype,`whatsappLoginQrDataUrl`,void 0),Y([k()],$.prototype,`whatsappLoginConnected`,void 0),Y([k()],$.prototype,`whatsappBusy`,void 0),Y([k()],$.prototype,`telegramSetupToken`,void 0),Y([k()],$.prototype,`telegramSetupBusy`,void 0),Y([k()],$.prototype,`telegramSetupMessage`,void 0),Y([k()],$.prototype,`telegramApprovalsLoading`,void 0),Y([k()],$.prototype,`telegramApprovalsBusyCode`,void 0),Y([k()],$.prototype,`telegramApprovalsMessage`,void 0),Y([k()],$.prototype,`telegramPendingApprovals`,void 0),Y([k()],$.prototype,`nostrProfileFormState`,void 0),Y([k()],$.prototype,`nostrProfileAccountId`,void 0),Y([k()],$.prototype,`presenceLoading`,void 0),Y([k()],$.prototype,`presenceEntries`,void 0),Y([k()],$.prototype,`presenceError`,void 0),Y([k()],$.prototype,`presenceStatus`,void 0),Y([k()],$.prototype,`agentsLoading`,void 0),Y([k()],$.prototype,`agentsList`,void 0),Y([k()],$.prototype,`agentsError`,void 0),Y([k()],$.prototype,`agentsSelectedId`,void 0),Y([k()],$.prototype,`toolsCatalogLoading`,void 0),Y([k()],$.prototype,`toolsCatalogError`,void 0),Y([k()],$.prototype,`toolsCatalogResult`,void 0),Y([k()],$.prototype,`toolsEffectiveLoading`,void 0),Y([k()],$.prototype,`toolsEffectiveLoadingKey`,void 0),Y([k()],$.prototype,`toolsEffectiveResultKey`,void 0),Y([k()],$.prototype,`toolsEffectiveError`,void 0),Y([k()],$.prototype,`toolsEffectiveResult`,void 0),Y([k()],$.prototype,`agentsPanel`,void 0),Y([k()],$.prototype,`agentFilesLoading`,void 0),Y([k()],$.prototype,`agentFilesError`,void 0),Y([k()],$.prototype,`agentFilesList`,void 0),Y([k()],$.prototype,`agentFileContents`,void 0),Y([k()],$.prototype,`agentFileDrafts`,void 0),Y([k()],$.prototype,`agentFileActive`,void 0),Y([k()],$.prototype,`agentFileSaving`,void 0),Y([k()],$.prototype,`agentIdentityLoading`,void 0),Y([k()],$.prototype,`agentIdentityError`,void 0),Y([k()],$.prototype,`agentIdentityById`,void 0),Y([k()],$.prototype,`agentSoulLoading`,void 0),Y([k()],$.prototype,`agentSoulContentById`,void 0),Y([k()],$.prototype,`agentSkillsLoading`,void 0),Y([k()],$.prototype,`agentSkillsError`,void 0),Y([k()],$.prototype,`agentSkillsReport`,void 0),Y([k()],$.prototype,`agentSkillsAgentId`,void 0),Y([k()],$.prototype,`employeesLoading`,void 0),Y([k()],$.prototype,`employeesError`,void 0),Y([k()],$.prototype,`employeesDashboard`,void 0),Y([k()],$.prototype,`employeesFilterAgentId`,void 0),Y([k()],$.prototype,`canvasRefreshing`,void 0),Y([k()],$.prototype,`canvasStatus`,void 0),Y([k()],$.prototype,`canvasFrameUrl`,void 0),Y([k()],$.prototype,`canvasSelectedAgentId`,void 0),Y([k()],$.prototype,`voiceSpeaking`,void 0),Y([k()],$.prototype,`voiceMessage`,void 0),Y([k()],$.prototype,`routingSaving`,void 0),Y([k()],$.prototype,`routingDirty`,void 0),Y([k()],$.prototype,`routingAssignments`,void 0),Y([k()],$.prototype,`routingMessage`,void 0),Y([k()],$.prototype,`meetingsTitle`,void 0),Y([k()],$.prototype,`meetingsTranscript`,void 0),Y([k()],$.prototype,`meetingsSourceName`,void 0),Y([k()],$.prototype,`meetingsAnalyzing`,void 0),Y([k()],$.prototype,`meetingsSendingTelegram`,void 0),Y([k()],$.prototype,`meetingsError`,void 0),Y([k()],$.prototype,`meetingsNotice`,void 0),Y([k()],$.prototype,`meetingsResult`,void 0),Y([k()],$.prototype,`meetingsHistory`,void 0),Y([k()],$.prototype,`showAgentCreator`,void 0),Y([k()],$.prototype,`agentCreatorStep`,void 0),Y([k()],$.prototype,`agentCreatorCreating`,void 0),Y([k()],$.prototype,`agentCreatorDraft`,void 0),Y([k()],$.prototype,`agentCreatorSuccess`,void 0),Y([k()],$.prototype,`agentCreatorError`,void 0),Y([k()],$.prototype,`inboxSessions`,void 0),Y([k()],$.prototype,`inboxLoading`,void 0),Y([k()],$.prototype,`inboxError`,void 0),Y([k()],$.prototype,`inboxChannelFilter`,void 0),Y([k()],$.prototype,`sessionsLoading`,void 0),Y([k()],$.prototype,`sessionsResult`,void 0),Y([k()],$.prototype,`sessionsError`,void 0),Y([k()],$.prototype,`sessionsFilterActive`,void 0),Y([k()],$.prototype,`sessionsFilterLimit`,void 0),Y([k()],$.prototype,`sessionsIncludeGlobal`,void 0),Y([k()],$.prototype,`sessionsIncludeUnknown`,void 0),Y([k()],$.prototype,`sessionsHideCron`,void 0),Y([k()],$.prototype,`sessionsSearchQuery`,void 0),Y([k()],$.prototype,`sessionsSortColumn`,void 0),Y([k()],$.prototype,`sessionsSortDir`,void 0),Y([k()],$.prototype,`sessionsPage`,void 0),Y([k()],$.prototype,`sessionsPageSize`,void 0),Y([k()],$.prototype,`sessionsSelectedKeys`,void 0),Y([k()],$.prototype,`usageLoading`,void 0),Y([k()],$.prototype,`usageResult`,void 0),Y([k()],$.prototype,`usageCostSummary`,void 0),Y([k()],$.prototype,`usageError`,void 0),Y([k()],$.prototype,`usageStartDate`,void 0),Y([k()],$.prototype,`usageEndDate`,void 0),Y([k()],$.prototype,`usageSelectedSessions`,void 0),Y([k()],$.prototype,`usageSelectedDays`,void 0),Y([k()],$.prototype,`usageSelectedHours`,void 0),Y([k()],$.prototype,`usageChartMode`,void 0),Y([k()],$.prototype,`usageDailyChartMode`,void 0),Y([k()],$.prototype,`usageTimeSeriesMode`,void 0),Y([k()],$.prototype,`usageTimeSeriesBreakdownMode`,void 0),Y([k()],$.prototype,`usageTimeSeries`,void 0),Y([k()],$.prototype,`usageTimeSeriesLoading`,void 0),Y([k()],$.prototype,`usageTimeSeriesCursorStart`,void 0),Y([k()],$.prototype,`usageTimeSeriesCursorEnd`,void 0),Y([k()],$.prototype,`usageSessionLogs`,void 0),Y([k()],$.prototype,`usageSessionLogsLoading`,void 0),Y([k()],$.prototype,`usageSessionLogsExpanded`,void 0),Y([k()],$.prototype,`usageQuery`,void 0),Y([k()],$.prototype,`usageQueryDraft`,void 0),Y([k()],$.prototype,`usageSessionSort`,void 0),Y([k()],$.prototype,`usageSessionSortDir`,void 0),Y([k()],$.prototype,`usageRecentSessions`,void 0),Y([k()],$.prototype,`usageTimeZone`,void 0),Y([k()],$.prototype,`usageContextExpanded`,void 0),Y([k()],$.prototype,`usageHeaderPinned`,void 0),Y([k()],$.prototype,`usageSessionsTab`,void 0),Y([k()],$.prototype,`usageVisibleColumns`,void 0),Y([k()],$.prototype,`usageLogFilterRoles`,void 0),Y([k()],$.prototype,`usageLogFilterTools`,void 0),Y([k()],$.prototype,`usageLogFilterHasTools`,void 0),Y([k()],$.prototype,`usageLogFilterQuery`,void 0),Y([k()],$.prototype,`cronLoading`,void 0),Y([k()],$.prototype,`cronJobsLoadingMore`,void 0),Y([k()],$.prototype,`cronJobs`,void 0),Y([k()],$.prototype,`cronJobsTotal`,void 0),Y([k()],$.prototype,`cronJobsHasMore`,void 0),Y([k()],$.prototype,`cronJobsNextOffset`,void 0),Y([k()],$.prototype,`cronJobsLimit`,void 0),Y([k()],$.prototype,`cronJobsQuery`,void 0),Y([k()],$.prototype,`cronJobsEnabledFilter`,void 0),Y([k()],$.prototype,`cronJobsScheduleKindFilter`,void 0),Y([k()],$.prototype,`cronJobsLastStatusFilter`,void 0),Y([k()],$.prototype,`cronJobsSortBy`,void 0),Y([k()],$.prototype,`cronJobsSortDir`,void 0),Y([k()],$.prototype,`cronStatus`,void 0),Y([k()],$.prototype,`cronError`,void 0),Y([k()],$.prototype,`cronForm`,void 0),Y([k()],$.prototype,`cronFieldErrors`,void 0),Y([k()],$.prototype,`cronEditingJobId`,void 0),Y([k()],$.prototype,`cronRunsJobId`,void 0),Y([k()],$.prototype,`cronRunsLoadingMore`,void 0),Y([k()],$.prototype,`cronRuns`,void 0),Y([k()],$.prototype,`cronRunsTotal`,void 0),Y([k()],$.prototype,`cronRunsHasMore`,void 0),Y([k()],$.prototype,`cronRunsNextOffset`,void 0),Y([k()],$.prototype,`cronRunsLimit`,void 0),Y([k()],$.prototype,`cronRunsScope`,void 0),Y([k()],$.prototype,`cronRunsStatuses`,void 0),Y([k()],$.prototype,`cronRunsDeliveryStatuses`,void 0),Y([k()],$.prototype,`cronRunsStatusFilter`,void 0),Y([k()],$.prototype,`cronRunsQuery`,void 0),Y([k()],$.prototype,`cronRunsSortDir`,void 0),Y([k()],$.prototype,`cronModelSuggestions`,void 0),Y([k()],$.prototype,`cronBusy`,void 0),Y([k()],$.prototype,`updateAvailable`,void 0),Y([k()],$.prototype,`attentionItems`,void 0),Y([k()],$.prototype,`paletteOpen`,void 0),Y([k()],$.prototype,`paletteQuery`,void 0),Y([k()],$.prototype,`paletteActiveIndex`,void 0),Y([k()],$.prototype,`overviewShowGatewayToken`,void 0),Y([k()],$.prototype,`overviewShowGatewayPassword`,void 0),Y([k()],$.prototype,`overviewLogLines`,void 0),Y([k()],$.prototype,`overviewLogCursor`,void 0),Y([k()],$.prototype,`skillsLoading`,void 0),Y([k()],$.prototype,`skillsReport`,void 0),Y([k()],$.prototype,`skillsError`,void 0),Y([k()],$.prototype,`skillsFilter`,void 0),Y([k()],$.prototype,`skillsStatusFilter`,void 0),Y([k()],$.prototype,`skillEdits`,void 0),Y([k()],$.prototype,`skillsBusyKey`,void 0),Y([k()],$.prototype,`skillMessages`,void 0),Y([k()],$.prototype,`skillsDetailKey`,void 0),Y([k()],$.prototype,`kova_marketplaceLoading`,void 0),Y([k()],$.prototype,`kova_marketplaceSkills`,void 0),Y([k()],$.prototype,`kova_marketplaceError`,void 0),Y([k()],$.prototype,`kova_marketplaceCategory`,void 0),Y([k()],$.prototype,`kova_installedLoading`,void 0),Y([k()],$.prototype,`kova_installedError`,void 0),Y([k()],$.prototype,`kova_installedSkillIds`,void 0),Y([k()],$.prototype,`kova_marketplaceBusyId`,void 0),Y([k()],$.prototype,`healthLoading`,void 0),Y([k()],$.prototype,`healthResult`,void 0),Y([k()],$.prototype,`healthError`,void 0),Y([k()],$.prototype,`debugLoading`,void 0),Y([k()],$.prototype,`debugStatus`,void 0),Y([k()],$.prototype,`debugHealth`,void 0),Y([k()],$.prototype,`debugModels`,void 0),Y([k()],$.prototype,`debugHeartbeat`,void 0),Y([k()],$.prototype,`debugCallMethod`,void 0),Y([k()],$.prototype,`debugCallParams`,void 0),Y([k()],$.prototype,`debugCallResult`,void 0),Y([k()],$.prototype,`debugCallError`,void 0),Y([k()],$.prototype,`logsLoading`,void 0),Y([k()],$.prototype,`logsError`,void 0),Y([k()],$.prototype,`logsFile`,void 0),Y([k()],$.prototype,`logsEntries`,void 0),Y([k()],$.prototype,`logsFilterText`,void 0),Y([k()],$.prototype,`logsLevelFilters`,void 0),Y([k()],$.prototype,`logsAutoFollow`,void 0),Y([k()],$.prototype,`logsTruncated`,void 0),Y([k()],$.prototype,`logsCursor`,void 0),Y([k()],$.prototype,`logsLastFetchAt`,void 0),Y([k()],$.prototype,`logsLimit`,void 0),Y([k()],$.prototype,`logsMaxBytes`,void 0),Y([k()],$.prototype,`logsAtBottom`,void 0),Y([k()],$.prototype,`chatNewMessagesBelow`,void 0),$=Y([E(`openclaw-app`)],$);export{Yv as A,zi as B,iy as C,ry as D,oy as E,Ng as F,Ti as G,Ri as H,H as I,P as J,yr as K,Ah as L,Hv as M,Av as N,ay as O,G as P,Nl as R,Xv as S,ty as T,Fi as U,Ii as V,Li as W,ey as _,qN as a,vy as b,KN as c,Aj as d,Uj as f,qx as g,US as h,JN as i,Jv as j,by as k,XM as l,lj as m,XN as n,GN as o,QA as p,be as q,YN as r,WN as s,tF as t,PM as u,ny as v,fy as w,yy as x,my as y,jc as z};
//# sourceMappingURL=index-XGDpaFxG.js.map