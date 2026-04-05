import { l as hasHelpOrVersion, o as getPrimaryCommand } from "./argv-CrD4Uaj1.js";
import { t as isKovaCli } from "./kova-aliases-D1ECR5dN.js";
import { n as removeCommandByName, t as registerLazyCommand } from "./register-lazy-command-Cgrg_n70.js";
import { t as getCoreCliCommandDescriptors } from "./core-command-descriptors-DInmo6zP.js";
import { i as registerSubCliCommands } from "./register.subclis-4X5EEzmY.js";
//#region src/cli/program/command-registry.ts
const shouldRegisterCorePrimaryOnly = (argv) => {
	if (hasHelpOrVersion(argv)) return false;
	return true;
};
const coreEntries = [
	{
		commands: [{
			name: "start",
			description: "Start Kova locally and open the Control UI",
			hasSubcommands: false
		}],
		register: async ({ program }) => {
			(await import("./register.start-DSFrpoQ0.js")).registerStartCommand(program);
		}
	},
	{
		commands: [{
			name: "setup",
			description: "Initialize local config and agent workspace",
			hasSubcommands: false
		}],
		register: async ({ program }) => {
			(await import("./register.setup-CtaAMPVN.js")).registerSetupCommand(program);
		}
	},
	{
		commands: [{
			name: "onboard",
			description: "Interactive onboarding for gateway, workspace, and skills",
			hasSubcommands: false
		}],
		register: async ({ program }) => {
			(await import("./register.onboard-CMBqJK54.js")).registerOnboardCommand(program);
		}
	},
	{
		commands: [{
			name: "configure",
			description: "Interactive configuration for credentials, channels, gateway, and agent defaults",
			hasSubcommands: false
		}],
		register: async ({ program }) => {
			(await import("./register.configure-De6Y32mO.js")).registerConfigureCommand(program);
		}
	},
	{
		commands: [{
			name: "config",
			description: "Non-interactive config helpers (get/set/unset/file/validate). Default: starts guided setup.",
			hasSubcommands: true
		}],
		register: async ({ program }) => {
			(await import("./config-cli-DnF_MgmE.js")).registerConfigCli(program);
		}
	},
	{
		commands: [{
			name: "backup",
			description: "Create and verify local backup archives for Kova state",
			hasSubcommands: true
		}],
		register: async ({ program }) => {
			(await import("./register.backup-G3IA6IjW.js")).registerBackupCommand(program);
		}
	},
	{
		commands: [
			{
				name: "doctor",
				description: "Health checks + quick fixes for the gateway and channels",
				hasSubcommands: false
			},
			{
				name: "dashboard",
				description: "Open the Control UI with your current token",
				hasSubcommands: false
			},
			{
				name: "reset",
				description: "Reset local config/state (keeps the CLI installed)",
				hasSubcommands: false
			},
			{
				name: "uninstall",
				description: "Uninstall the gateway service + local data (CLI remains)",
				hasSubcommands: false
			}
		],
		register: async ({ program }) => {
			(await import("./register.maintenance-dAFryJ6R.js")).registerMaintenanceCommands(program);
		}
	},
	{
		commands: [{
			name: "message",
			description: "Send, read, and manage messages",
			hasSubcommands: true
		}],
		register: async ({ program, ctx }) => {
			(await import("./register.message-D8cyaAf0.js")).registerMessageCommands(program, ctx);
		}
	},
	{
		commands: [{
			name: "mcp",
			description: "Manage Kova MCP config and channel bridge",
			hasSubcommands: true
		}],
		register: async ({ program }) => {
			(await import("./mcp-cli-qBuIuKNb.js")).registerMcpCli(program);
		}
	},
	{
		commands: [{
			name: "agent",
			description: "Run one agent turn via the Gateway",
			hasSubcommands: false
		}, {
			name: "agents",
			description: "Manage isolated agents (workspaces, auth, routing)",
			hasSubcommands: true
		}],
		register: async ({ program, ctx }) => {
			(await import("./register.agent-8jCx9Eyz.js")).registerAgentCommands(program, { agentChannelOptions: ctx.agentChannelOptions });
		}
	},
	{
		commands: [
			{
				name: "status",
				description: "Show channel health and recent session recipients",
				hasSubcommands: false
			},
			{
				name: "health",
				description: "Fetch health from the running gateway",
				hasSubcommands: false
			},
			{
				name: "sessions",
				description: "List stored conversation sessions",
				hasSubcommands: true
			},
			{
				name: "tasks",
				description: "Inspect durable background task state",
				hasSubcommands: true
			}
		],
		register: async ({ program }) => {
			(await import("./register.status-health-sessions-CSpo0ilQ.js")).registerStatusHealthSessionsCommands(program);
		}
	}
];
const kovaOnlyEntries = [
	{
		commands: [{
			name: "stop",
			description: "Stop the Kova gateway service",
			hasSubcommands: false
		}],
		register: async ({ program }) => {
			(await import("./register.kova-stop-Du4Y_mCa.js")).registerKovaStopCommand(program);
		}
	},
	{
		commands: [{
			name: "logs",
			description: "Print the last 50 lines from the latest Kova gateway log",
			hasSubcommands: false
		}],
		register: async ({ program }) => {
			(await import("./register.kova-logs-C5jPF_dD.js")).registerKovaLogsCommand(program);
		}
	},
	{
		commands: [{
			name: "update",
			description: "Update Kova via your global package manager",
			hasSubcommands: false
		}],
		register: async ({ program }) => {
			(await import("./register.kova-update-CxqWUjFO.js")).registerKovaUpdateCommand(program);
		}
	},
	{
		commands: [{
			name: "api-key",
			description: "Manage Kova API keys",
			hasSubcommands: false
		}],
		register: async ({ program }) => {
			(await import("./register.kova-api-key-CT1XgB-B.js")).registerKovaApiKeyCommand(program);
		}
	}
];
function getActiveCoreEntries() {
	if (!isKovaCli()) return coreEntries;
	const statusGroup = coreEntries.find((entry) => entry.commands.some((command) => command.name === "status"));
	const baseEntries = coreEntries.filter((entry) => entry !== statusGroup);
	const kovaStatusEntry = {
		commands: [{
			name: "status",
			description: "Show Kova gateway status + probe reachability",
			hasSubcommands: false
		}],
		register: async ({ program }) => {
			(await import("./register.kova-status-Dv8MgXZ6.js")).registerKovaStatusCommand(program);
		}
	};
	const kovaHealthSessionsEntry = statusGroup === void 0 ? [] : [{
		commands: statusGroup.commands.filter((command) => command.name !== "status"),
		register: statusGroup.register
	}];
	return [
		...baseEntries,
		...kovaHealthSessionsEntry,
		kovaStatusEntry,
		...kovaOnlyEntries
	];
}
function getCoreCliCommandNames() {
	return getCoreCliCommandDescriptors().map((command) => command.name);
}
function removeEntryCommands(program, entry) {
	for (const cmd of entry.commands) removeCommandByName(program, cmd.name);
}
function registerLazyCoreCommand(program, ctx, entry, command) {
	registerLazyCommand({
		program,
		name: command.name,
		description: command.description,
		removeNames: entry.commands.map((cmd) => cmd.name),
		register: async () => {
			await entry.register({
				program,
				ctx,
				argv: process.argv
			});
		}
	});
}
async function registerCoreCliByName(program, ctx, name, argv = process.argv) {
	const entry = getActiveCoreEntries().find((candidate) => candidate.commands.some((cmd) => cmd.name === name));
	if (!entry) return false;
	removeEntryCommands(program, entry);
	await entry.register({
		program,
		ctx,
		argv
	});
	return true;
}
function registerCoreCliCommands(program, ctx, argv) {
	const entries = getActiveCoreEntries();
	const primary = getPrimaryCommand(argv);
	if (primary && shouldRegisterCorePrimaryOnly(argv)) {
		const entry = entries.find((candidate) => candidate.commands.some((cmd) => cmd.name === primary));
		if (entry) {
			const cmd = entry.commands.find((c) => c.name === primary);
			if (cmd) registerLazyCoreCommand(program, ctx, entry, cmd);
			return;
		}
	}
	for (const entry of entries) for (const cmd of entry.commands) registerLazyCoreCommand(program, ctx, entry, cmd);
}
function registerProgramCommands(program, ctx, argv = process.argv) {
	registerCoreCliCommands(program, ctx, argv);
	registerSubCliCommands(program, argv);
}
//#endregion
export { registerProgramCommands as i, registerCoreCliByName as n, registerCoreCliCommands as r, getCoreCliCommandNames as t };
