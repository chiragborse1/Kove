import { describe, expect, it } from "vitest";
import { mountApp, registerAppMountHooks } from "./test-helpers/app-mount.ts";

registerAppMountHooks();

describe("sidebar connection status", () => {
  it("does not render the bottom-left version or status widget", async () => {
    const app = mountApp("/chat");
    await app.updateComplete;

    app.hello = {
      ok: true,
      server: { version: "1.2.3" },
    } as never;
    app.requestUpdate();
    await app.updateComplete;

    const version = app.querySelector<HTMLElement>(".sidebar-version");
    const statusDot = app.querySelector<HTMLElement>(".sidebar-version__status");
    expect(version).toBeNull();
    expect(statusDot).toBeNull();
  });
});
