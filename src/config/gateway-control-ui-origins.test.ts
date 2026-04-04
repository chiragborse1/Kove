import { describe, expect, it } from "vitest";
import {
  buildDefaultControlUiAllowedOrigins,
  resolveEffectiveControlUiAllowedOrigins,
} from "./gateway-control-ui-origins.js";

describe("buildDefaultControlUiAllowedOrigins", () => {
  it("includes both Tauri desktop origins alongside loopback browser origins", () => {
    expect(buildDefaultControlUiAllowedOrigins({ port: 18789, bind: "loopback" })).toEqual([
      "http://localhost:18789",
      "http://127.0.0.1:18789",
      "http://tauri.localhost",
      "tauri://localhost",
    ]);
  });
});

describe("resolveEffectiveControlUiAllowedOrigins", () => {
  it("falls back to default desktop-safe origins when no allowlist is configured", () => {
    expect(
      resolveEffectiveControlUiAllowedOrigins({
        gateway: {
          port: 18789,
        },
      }),
    ).toEqual([
      "http://localhost:18789",
      "http://127.0.0.1:18789",
      "http://tauri.localhost",
      "tauri://localhost",
    ]);
  });

  it("preserves explicitly configured origins when present", () => {
    expect(
      resolveEffectiveControlUiAllowedOrigins({
        gateway: {
          controlUi: {
            allowedOrigins: [" https://control.example.com ", "https://control.example.com"],
          },
        },
      }),
    ).toEqual(["https://control.example.com"]);
  });
});
