import { m as consumeRootOptionToken } from "./argv-CrD4Uaj1.js";
import { n as resolveCliName } from "./cli-name-BMCbfW7p.js";
//#region src/cli/kova-aliases.ts
const KOVA_ALIAS_PATHS = new Map([
	["status", ["gateway", "status"]],
	["stop", ["gateway", "stop"]],
	["api-key", ["api-keys"]]
]);
function isKovaCli(argv = process.argv) {
	return resolveCliName(argv) === "kova";
}
function resolveEffectiveCliCommandPath(path, argv = process.argv) {
	if (!isKovaCli(argv)) return path;
	const primary = path[0];
	if (!primary) return path;
	return KOVA_ALIAS_PATHS.get(primary) ?? path;
}
function rewritePrimaryCliCommand(argv, targetPath) {
	if (argv.length < 3 || targetPath.length === 0) return argv;
	const next = argv.slice(0, 2);
	const args = argv.slice(2);
	let replaced = false;
	for (let i = 0; i < args.length; i += 1) {
		const arg = args[i];
		if (!arg) continue;
		if (arg === "--") {
			next.push(arg, ...args.slice(i + 1));
			break;
		}
		const consumedRoot = consumeRootOptionToken(args, i);
		if (!replaced && consumedRoot > 0) {
			next.push(...args.slice(i, i + consumedRoot));
			i += consumedRoot - 1;
			continue;
		}
		if (!replaced && !arg.startsWith("-")) {
			next.push(...targetPath);
			replaced = true;
			continue;
		}
		next.push(arg);
	}
	return replaced ? next : argv;
}
//#endregion
export { resolveEffectiveCliCommandPath as n, rewritePrimaryCliCommand as r, isKovaCli as t };
