/* @vitest-environment jsdom */

import { describe, expect, it } from "vitest";
import { buildCanvasUrl } from "../../../ui/src/ui/controllers/canvas.ts";

describe("buildCanvasUrl", () => {
  it("includes the selected agent and auth token in the iframe URL", () => {
    const url = buildCanvasUrl({
      baseUrl: "https://control.example.com",
      agentId: "main",
      token: "secret-token",
      refreshKey: "123",
    });

    expect(url).toBe(
      "https://control.example.com/__openclaw__/canvas/?agent=main&token=secret-token&_ui_refresh=123",
    );
  });
});
