import { describe, expect, it } from "vitest";
import { resolveCanvasAuthToken } from "./canvas.ts";

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
