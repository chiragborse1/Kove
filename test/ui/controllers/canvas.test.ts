/* @vitest-environment jsdom */

import { afterEach, describe, expect, it, vi } from "vitest";
import {
  buildCanvasUrl,
  ensureCanvasAuthWorker,
  resolveCanvasAuthToken,
  resolveCanvasBaseUrl,
} from "../../../ui/src/ui/controllers/canvas.ts";

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe("resolveCanvasBaseUrl", () => {
  it("preserves the scoped canvas host URL from hello", () => {
    expect(
      resolveCanvasBaseUrl({
        hello: {
          type: "hello-ok",
          protocol: 3,
          canvasHostUrl: "http://127.0.0.1:18789/__openclaw__/cap/node-capability",
        },
        settings: { gatewayUrl: "ws://127.0.0.1:18789" },
      }),
    ).toBe("http://127.0.0.1:18789/__openclaw__/cap/node-capability");
  });
});

describe("resolveCanvasAuthToken", () => {
  it("prefers the post-connect device token from hello auth", () => {
    expect(
      resolveCanvasAuthToken({
        hello: {
          type: "hello-ok",
          protocol: 3,
          auth: { deviceToken: "device-token-123" },
        },
        settings: { token: "shared-token-456" },
        password: "password-789",
      }),
    ).toBe("device-token-123");
  });

  it("falls back to the shared token and password when needed", () => {
    expect(
      resolveCanvasAuthToken({
        hello: null,
        settings: { token: "shared-token-456" },
        password: "password-789",
      }),
    ).toBe("shared-token-456");

    expect(
      resolveCanvasAuthToken({
        hello: null,
        settings: { token: "" },
        password: "password-789",
      }),
    ).toBe("password-789");
  });
});

describe("buildCanvasUrl", () => {
  it("includes the selected agent in the iframe URL", () => {
    const url = buildCanvasUrl({
      baseUrl: "https://control.example.com",
      agentId: "main",
      refreshKey: "123",
    });

    expect(url).toBe("https://control.example.com/__openclaw__/canvas/?agent=main&_ui_refresh=123");
  });

  it("keeps the scoped host path when the gateway advertises a capability URL", () => {
    const url = buildCanvasUrl({
      baseUrl: "http://127.0.0.1:18789/__openclaw__/cap/node-capability",
      agentId: "kova-ops",
      refreshKey: "refresh-1",
    });

    expect(url).toBe(
      "http://127.0.0.1:18789/__openclaw__/cap/node-capability/__openclaw__/canvas/?agent=kova-ops&_ui_refresh=refresh-1",
    );
  });
});

describe("ensureCanvasAuthWorker", () => {
  it("waits for the service worker to accept the auth token", async () => {
    const active = {
      postMessage(message: unknown, transfer?: Transferable[]) {
        expect(message).toEqual({
          type: "openclaw-canvas-auth:set-token",
          token: "device-token-123",
        });
        const port = transfer?.[0];
        expect(port).toBeInstanceOf(MessagePort);
        (port as MessagePort).postMessage({ ok: true });
      },
    };
    const register = vi.fn().mockResolvedValue({ active });
    Object.defineProperty(window.navigator, "serviceWorker", {
      configurable: true,
      value: {
        register,
        ready: Promise.resolve({ active }),
        controller: null,
      },
    });

    await expect(
      ensureCanvasAuthWorker({
        basePath: "",
        token: "device-token-123",
      }),
    ).resolves.toBe(true);

    expect(register).toHaveBeenCalledWith("/openclaw-canvas-auth-sw.js", { scope: "/" });
  });
});
