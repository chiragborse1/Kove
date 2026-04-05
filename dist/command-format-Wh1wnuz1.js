import { n as normalizeProfileName } from "./profile-utils-C7uzTwgJ.js";
import { n as resolveCliName, t as replaceCliName } from "./cli-name-BMCbfW7p.js";
//#region src/cli/command-format.ts
const CLI_PREFIX_RE = /^(?:pnpm|npm|bunx|npx)\s+(?:openclaw|kova)\b|^(?:openclaw|kova)\b/;
const CONTAINER_FLAG_RE = /(?:^|\s)--container(?:\s|=|$)/;
const PROFILE_FLAG_RE = /(?:^|\s)--profile(?:\s|=|$)/;
const DEV_FLAG_RE = /(?:^|\s)--dev(?:\s|$)/;
const UPDATE_COMMAND_RE = /^(?:pnpm|npm|bunx|npx)\s+(?:openclaw|kova)\b.*(?:^|\s)update(?:\s|$)|^(?:openclaw|kova)\b.*(?:^|\s)update(?:\s|$)/;
const COMMAND_CLI_NAME_RE = /^(?:pnpm|npm|bunx|npx)\s+(openclaw|kova)\b|^(openclaw|kova)\b/;
function resolveCommandCliName(command) {
	const match = command.trim().match(COMMAND_CLI_NAME_RE);
	return match?.[1] ?? match?.[2] ?? resolveCliName();
}
function formatCliCommand(command, env = process.env) {
	const normalizedCommand = replaceCliName(command, resolveCommandCliName(command));
	const container = env.OPENCLAW_CONTAINER_HINT?.trim();
	const profile = normalizeProfileName(env.OPENCLAW_PROFILE);
	if (!container && !profile) return normalizedCommand;
	if (!CLI_PREFIX_RE.test(normalizedCommand)) return normalizedCommand;
	const additions = [];
	if (container && !CONTAINER_FLAG_RE.test(normalizedCommand) && !UPDATE_COMMAND_RE.test(normalizedCommand)) additions.push(`--container ${container}`);
	if (!container && profile && !PROFILE_FLAG_RE.test(normalizedCommand) && !DEV_FLAG_RE.test(normalizedCommand)) additions.push(`--profile ${profile}`);
	if (additions.length === 0) return normalizedCommand;
	return normalizedCommand.replace(CLI_PREFIX_RE, (match) => `${match} ${additions.join(" ")}`);
}
//#endregion
export { formatCliCommand as t };
