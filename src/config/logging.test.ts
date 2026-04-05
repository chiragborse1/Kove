import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  createConfigIO: vi.fn().mockReturnValue({
    configPath: "/tmp/openclaw-dev/openclaw.json",
  }),
}));

vi.mock("./io.js", () => ({
  createConfigIO: mocks.createConfigIO,
}));

let formatConfigPath: typeof import("./logging.js").formatConfigPath;
let logConfigUpdated: typeof import("./logging.js").logConfigUpdated;

beforeAll(async () => {
  ({ formatConfigPath, logConfigUpdated } = await import("./logging.js"));
});

beforeEach(() => {
  mocks.createConfigIO.mockClear();
});

describe("config logging", () => {
  it("formats the live config path when no explicit path is provided", () => {
    expect(formatConfigPath()).toBe("/tmp/openclaw-dev/openclaw.json");
  });

  it("shows ~/.kova/kova.json for displayed home-state config paths", () => {
    vi.stubEnv("HOME", "/Users/test");
    expect(formatConfigPath("/Users/test/.openclaw/openclaw.json")).toBe("~/.kova/kova.json");
    vi.unstubAllEnvs();
  });

  it("logs the live config path when no explicit path is provided", () => {
    const runtime = { log: vi.fn() };
    logConfigUpdated(runtime as never);
    expect(runtime.log).toHaveBeenCalledWith("Updated /tmp/openclaw-dev/openclaw.json");
  });
});
