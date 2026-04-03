import { afterEach, describe, expect, it, vi } from "vitest";
import { buildCanvasUrl, resolveCanvasAuthToken } from "./canvas.ts";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("resolveCanvasAuthToken", () => {
  it("prefers the shared gateway token over the device token", () => {
    expect(
      resolveCanvasAuthToken({
        hello: {
          type: "hello-ok",
          protocol: 3,
          snapshot: {},
          auth: {
            deviceToken: "scoped-device-token",
            sharedToken: "shared-gateway-token",
          },
        },
        settings: { token: "" },
        password: "",
      }),
    ).toBe("shared-gateway-token");
  });

  it("falls back to the persisted session token before the device token", () => {
    expect(
      resolveCanvasAuthToken({
        hello: {
          type: "hello-ok",
          protocol: 3,
          snapshot: {},
          auth: {
            deviceToken: "scoped-device-token",
          },
        },
        settings: { token: "persisted-shared-token" },
        password: "",
      }),
    ).toBe("persisted-shared-token");
  });
});

describe("buildCanvasUrl", () => {
  it("appends the shared token for iframe navigation requests", () => {
    vi.stubGlobal("window", {
      location: new URL("http://127.0.0.1:4173/control"),
    });

    expect(
      buildCanvasUrl({
        baseUrl: "http://127.0.0.1:18789",
        agentId: "main",
        refreshKey: "refresh-1",
        token: "shared-gateway-token",
      }),
    ).toBe(
      "http://127.0.0.1:18789/__openclaw__/canvas/?agent=main&_ui_refresh=refresh-1&token=shared-gateway-token",
    );
  });
});
