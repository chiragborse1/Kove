import { describe, expect, it } from "vitest";
import { buildDefaultControlUiAllowedOrigins } from "./gateway-control-ui-origins.js";

describe("buildDefaultControlUiAllowedOrigins", () => {
  it("includes tauri localhost alongside loopback browser origins", () => {
    expect(buildDefaultControlUiAllowedOrigins({ port: 18789, bind: "loopback" })).toEqual([
      "http://localhost:18789",
      "http://127.0.0.1:18789",
      "tauri://localhost",
    ]);
  });
});
