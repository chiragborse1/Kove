export const BRAND_NAME = "Kova";
export const BRAND_WORDMARK = "KOVA";
export const BRAND_TAGLINE = "Your AI Team";
export const BRAND_WORDMARK_COLOR = "#ffffff";
export const BRAND_CORE_NAME = "Kova Core";
export const BRAND_CORE_AGENT_NAME = "Kova Core Agent";

const DISPLAY_REPLACEMENTS: ReadonlyArray<readonly [string, string]> = [
  ["OpenClaw system agent", BRAND_CORE_NAME],
  ["Default OpenClaw agent", BRAND_CORE_AGENT_NAME],
  ["Current OpenClaw default", "Current Kova default"],
  ["OpenClaw", BRAND_NAME],
];

export function brandDisplayText(text: string): string {
  let next = text;
  for (const [from, to] of DISPLAY_REPLACEMENTS) {
    next = next.replaceAll(from, to);
  }
  return next;
}

export function brandDisplayName(name: string | null | undefined): string {
  const trimmed = name?.trim() ?? "";
  if (!trimmed) {
    return "";
  }
  return brandDisplayText(trimmed);
}
