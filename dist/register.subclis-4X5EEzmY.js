import { l as hasHelpOrVersion, o as getPrimaryCommand } from "./argv-CrD4Uaj1.js";
import { t as isTruthyEnvValue } from "./env-SmWVaXTv.js";
import { t as isKovaCli } from "./kova-aliases-D1ECR5dN.js";
import { n as removeCommandByName, t as registerLazyCommand$1 } from "./register-lazy-command-Cgrg_n70.js";
import { n as getSubCliEntries$1 } from "./subcli-descriptors-CJ3aIg0Z.js";
//#region src/cli/program/register.subclis.ts
const shouldRegisterPrimaryOnly = (argv) => {
	if (isTruthyEnvValue(process.env.OPENCLAW_DISABLE_LAZY_SUBCOMMANDS)) return false;
	if (hasHelpOrVersion(argv)) return false;
	return true;
};
const shouldEagerRegisterSubcommands = (_argv) => {
	return isTruthyEnvValue(process.env.OPENCLAW_DISABLE_LAZY_SUBCOMMANDS);
};
const loadValidatedConfigForPluginRegistration = async () => {
	const mod = await import("./config-BEyg3lNx.js");
	if (!(await mod.readConfigFileSnapshot()).valid) return null;
	return mod.loadConfig();
};
const entries = [
	{
		name: "acp",
		description: "Agent Control Protocol tools",
		hasSubcommands: true,
		register: async (program) => {
			(await import("./acp-cli-B5q_eYgO.js")).registerAcpCli(program);
		}
	},
	{
		name: "gateway",
		description: "Run, inspect, and query the WebSocket Gateway",
		hasSubcommands: true,
		register: async (program) => {
			(await import("./gateway-cli-DRvLUN1g.js")).registerGatewayCli(program);
		}
	},
	{
		name: "daemon",
		description: "Gateway service (legacy alias)",
		hasSubcommands: true,
		register: async (program) => {
			(await import("./cli/daemon-cli.js")).registerDaemonCli(program);
		}
	},
	{
		name: "logs",
		description: "Tail gateway file logs via RPC",
		hasSubcommands: false,
		register: async (program) => {
			(await import("./logs-cli-D0-QVM7J.js")).registerLogsCli(program);
		}
	},
	{
		name: "system",
		description: "System events, heartbeat, and presence",
		hasSubcommands: true,
		register: async (program) => {
			(await import("./system-cli-D6X0qlPe.js")).registerSystemCli(program);
		}
	},
	{
		name: "models",
		description: "Discover, scan, and configure models",
		hasSubcommands: true,
		register: async (program) => {
			(await import("./models-cli-C8iEBCTW.js")).registerModelsCli(program);
		}
	},
	{
		name: "approvals",
		description: "Manage exec approvals (gateway or node host)",
		hasSubcommands: true,
		register: async (program) => {
			(await import("./exec-approvals-cli-iqFrrUGw.js")).registerExecApprovalsCli(program);
		}
	},
	{
		name: "nodes",
		description: "Manage gateway-owned node pairing and node commands",
		hasSubcommands: true,
		register: async (program) => {
			(await import("./nodes-cli-1HNtmG4Y.js")).registerNodesCli(program);
		}
	},
	{
		name: "devices",
		description: "Device pairing + token management",
		hasSubcommands: true,
		register: async (program) => {
			(await import("./devices-cli-VDdjS7fb.js")).registerDevicesCli(program);
		}
	},
	{
		name: "node",
		description: "Run and manage the headless node host service",
		hasSubcommands: true,
		register: async (program) => {
			(await import("./node-cli-CzKnERT9.js")).registerNodeCli(program);
		}
	},
	{
		name: "sandbox",
		description: "Manage sandbox containers for agent isolation",
		hasSubcommands: true,
		register: async (program) => {
			(await import("./sandbox-cli-B1xitAye.js")).registerSandboxCli(program);
		}
	},
	{
		name: "tui",
		description: "Open a terminal UI connected to the Gateway",
		hasSubcommands: false,
		register: async (program) => {
			(await import("./tui-cli-D3rD68Ek.js")).registerTuiCli(program);
		}
	},
	{
		name: "cron",
		description: "Manage cron jobs via the Gateway scheduler",
		hasSubcommands: true,
		register: async (program) => {
			(await import("./cron-cli-C5jyttjp.js")).registerCronCli(program);
		}
	},
	{
		name: "dns",
		description: "DNS helpers for wide-area discovery (Tailscale + CoreDNS)",
		hasSubcommands: true,
		register: async (program) => {
			(await import("./dns-cli-Cr7gSDuf.js")).registerDnsCli(program);
		}
	},
	{
		name: "docs",
		description: "Search the live Kova docs",
		hasSubcommands: false,
		register: async (program) => {
			(await import("./docs-cli-DaYDTlPV.js")).registerDocsCli(program);
		}
	},
	{
		name: "hooks",
		description: "Manage internal agent hooks",
		hasSubcommands: true,
		register: async (program) => {
			(await import("./hooks-cli-BlvUzdhB.js")).registerHooksCli(program);
		}
	},
	{
		name: "webhooks",
		description: "Webhook helpers and integrations",
		hasSubcommands: true,
		register: async (program) => {
			(await import("./webhooks-cli-CBbbLKA4.js")).registerWebhooksCli(program);
		}
	},
	{
		name: "qr",
		description: "Generate iOS pairing QR/setup code",
		hasSubcommands: false,
		register: async (program) => {
			(await import("./qr-cli-G4d1eii6.js")).registerQrCli(program);
		}
	},
	{
		name: "clawbot",
		description: "Legacy clawbot command aliases",
		hasSubcommands: true,
		register: async (program) => {
			(await import("./clawbot-cli-Cun3bwPv.js")).registerClawbotCli(program);
		}
	},
	{
		name: "pairing",
		description: "Secure DM pairing (approve inbound requests)",
		hasSubcommands: true,
		register: async (program) => {
			const { registerPluginCliCommands } = await import("./cli-DwmOtH4N.js");
			const config = await loadValidatedConfigForPluginRegistration();
			if (config) await registerPluginCliCommands(program, config);
			(await import("./pairing-cli-Cenui9uT.js")).registerPairingCli(program);
		}
	},
	{
		name: "plugins",
		description: "Manage Kova plugins and extensions",
		hasSubcommands: true,
		register: async (program) => {
			(await import("./plugins-cli-CQrh_YgV.js")).registerPluginsCli(program);
			const { registerPluginCliCommands } = await import("./cli-DwmOtH4N.js");
			const config = await loadValidatedConfigForPluginRegistration();
			if (config) await registerPluginCliCommands(program, config);
		}
	},
	{
		name: "channels",
		description: "Manage connected chat channels (Telegram, Discord, etc.)",
		hasSubcommands: true,
		register: async (program) => {
			(await import("./channels-cli-BOoUoTJS.js")).registerChannelsCli(program);
		}
	},
	{
		name: "directory",
		description: "Lookup contact and group IDs (self, peers, groups) for supported chat channels",
		hasSubcommands: true,
		register: async (program) => {
			(await import("./directory-cli-B1vozDrH.js")).registerDirectoryCli(program);
		}
	},
	{
		name: "security",
		description: "Security tools and local config audits",
		hasSubcommands: true,
		register: async (program) => {
			(await import("./security-cli-n63nqXBt.js")).registerSecurityCli(program);
		}
	},
	{
		name: "secrets",
		description: "Secrets runtime reload controls",
		hasSubcommands: true,
		register: async (program) => {
			(await import("./secrets-cli-C8SF1PQ8.js")).registerSecretsCli(program);
		}
	},
	{
		name: "skills",
		description: "List and inspect available skills",
		hasSubcommands: true,
		register: async (program) => {
			(await import("./skills-cli-BbuJJlxh.js")).registerSkillsCli(program);
		}
	},
	{
		name: "update",
		description: "Update Kova and inspect update channel status",
		hasSubcommands: true,
		register: async (program) => {
			(await import("./update-cli-BIlf5hWm.js")).registerUpdateCli(program);
		}
	},
	{
		name: "completion",
		description: "Generate shell completion script",
		hasSubcommands: false,
		register: async (program) => {
			(await import("./completion-cli-CRFxUkyI.js")).registerCompletionCli(program);
		}
	}
];
function getSubCliEntries() {
	return getSubCliEntries$1();
}
function getActiveEntries() {
	return isKovaCli() ? entries.filter((entry) => entry.name !== "logs" && entry.name !== "update") : entries;
}
async function registerSubCliByName(program, name) {
	const entry = getActiveEntries().find((candidate) => candidate.name === name);
	if (!entry) return false;
	removeCommandByName(program, entry.name);
	await entry.register(program);
	return true;
}
function registerLazyCommand(program, entry) {
	registerLazyCommand$1({
		program,
		name: entry.name,
		description: entry.description,
		register: async () => {
			await entry.register(program);
		}
	});
}
function registerSubCliCommands(program, argv = process.argv) {
	const activeEntries = getActiveEntries();
	if (shouldEagerRegisterSubcommands(argv)) {
		for (const entry of activeEntries) entry.register(program);
		return;
	}
	const primary = getPrimaryCommand(argv);
	if (primary && shouldRegisterPrimaryOnly(argv)) {
		const entry = activeEntries.find((candidate) => candidate.name === primary);
		if (entry) {
			registerLazyCommand(program, entry);
			return;
		}
	}
	for (const candidate of activeEntries) registerLazyCommand(program, candidate);
}
//#endregion
export { registerSubCliCommands as i, loadValidatedConfigForPluginRegistration as n, registerSubCliByName as r, getSubCliEntries as t };
