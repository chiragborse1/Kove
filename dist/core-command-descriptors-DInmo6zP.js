import { t as isKovaCli } from "./kova-aliases-D1ECR5dN.js";
//#region src/cli/program/core-command-descriptors.ts
const CORE_CLI_COMMAND_DESCRIPTORS = [
	{
		name: "start",
		description: "Start Kova locally and open the Control UI",
		hasSubcommands: false
	},
	{
		name: "setup",
		description: "Initialize local config and agent workspace",
		hasSubcommands: false
	},
	{
		name: "onboard",
		description: "Interactive onboarding for gateway, workspace, and skills",
		hasSubcommands: false
	},
	{
		name: "configure",
		description: "Interactive configuration for credentials, channels, gateway, and agent defaults",
		hasSubcommands: false
	},
	{
		name: "config",
		description: "Non-interactive config helpers (get/set/unset/file/validate). Default: starts guided setup.",
		hasSubcommands: true
	},
	{
		name: "backup",
		description: "Create and verify local backup archives for Kova state",
		hasSubcommands: true
	},
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
	},
	{
		name: "message",
		description: "Send, read, and manage messages",
		hasSubcommands: true
	},
	{
		name: "agent",
		description: "Run one agent turn via the Gateway",
		hasSubcommands: false
	},
	{
		name: "agents",
		description: "Manage isolated agents (workspaces, auth, routing)",
		hasSubcommands: true
	},
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
];
const KOVA_DESCRIPTOR_OVERRIDES = new Map([["status", {
	name: "status",
	description: "Show Kova gateway status + probe reachability",
	hasSubcommands: false
}]]);
const KOVA_EXTRA_DESCRIPTORS = [
	{
		name: "stop",
		description: "Stop the Kova gateway service",
		hasSubcommands: false
	},
	{
		name: "logs",
		description: "Print the last 50 lines from the latest Kova gateway log",
		hasSubcommands: false
	},
	{
		name: "update",
		description: "Update Kova via your global package manager",
		hasSubcommands: false
	},
	{
		name: "api-key",
		description: "Manage Kova API keys",
		hasSubcommands: false
	}
];
function getCoreCliCommandDescriptors() {
	if (!isKovaCli()) return CORE_CLI_COMMAND_DESCRIPTORS;
	return [...CORE_CLI_COMMAND_DESCRIPTORS.map((command) => KOVA_DESCRIPTOR_OVERRIDES.get(command.name) ?? command), ...KOVA_EXTRA_DESCRIPTORS];
}
function getCoreCliCommandsWithSubcommands() {
	return CORE_CLI_COMMAND_DESCRIPTORS.filter((command) => command.hasSubcommands).map((command) => command.name);
}
//#endregion
export { getCoreCliCommandsWithSubcommands as n, getCoreCliCommandDescriptors as t };
