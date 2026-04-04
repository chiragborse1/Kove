import { consumeRootOptionToken } from "../infra/cli-root-options.js";
import { resolveCliName } from "./cli-name.js";

const KOVA_ALIAS_PATHS = new Map<string, string[]>([
  ["status", ["gateway", "status"]],
  ["stop", ["gateway", "stop"]],
  ["api-key", ["api-keys"]],
]);

export function isKovaCli(argv: string[] = process.argv): boolean {
  return resolveCliName(argv) === "kova";
}

export function resolveEffectiveCliCommandPath(
  path: string[],
  argv: string[] = process.argv,
): string[] {
  if (!isKovaCli(argv)) {
    return path;
  }
  const primary = path[0];
  if (!primary) {
    return path;
  }
  return KOVA_ALIAS_PATHS.get(primary) ?? path;
}

export function rewritePrimaryCliCommand(
  argv: string[],
  targetPath: ReadonlyArray<string>,
): string[] {
  if (argv.length < 3 || targetPath.length === 0) {
    return argv;
  }

  const next = argv.slice(0, 2);
  const args = argv.slice(2);
  let replaced = false;

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (!arg) {
      continue;
    }
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
