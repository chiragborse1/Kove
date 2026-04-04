import type { Tab } from "./navigation.ts";

declare global {
  interface Window {
    __TAURI_INTERNALS__?: unknown;
  }
}

export type DesktopSetupState = {
  complete: boolean;
  userName?: string | null;
  provider?: string | null;
  channel?: string | null;
};

export type DesktopNavigatePayload = {
  tab?: Tab | "chat";
  agentId?: string | null;
};

export function isTauriDesktopEnvironment(): boolean {
  return typeof window !== "undefined" && Boolean(window.__TAURI_INTERNALS__);
}

export async function loadDesktopSetupState(): Promise<DesktopSetupState | null> {
  if (!isTauriDesktopEnvironment()) {
    return null;
  }
  const { invoke } = await import("@tauri-apps/api/core");
  return invoke<DesktopSetupState>("get_setup_state");
}

export async function saveDesktopSetupState(state: DesktopSetupState): Promise<void> {
  if (!isTauriDesktopEnvironment()) {
    return;
  }
  const { invoke } = await import("@tauri-apps/api/core");
  await invoke("set_setup_state", { state });
}

export async function listenForDesktopNavigation(
  handler: (payload: DesktopNavigatePayload) => void,
): Promise<() => void> {
  if (!isTauriDesktopEnvironment()) {
    return () => {};
  }
  const { listen } = await import("@tauri-apps/api/event");
  return listen<DesktopNavigatePayload>("kova:navigate", (event) => {
    if (event.payload) {
      handler(event.payload);
    }
  });
}
