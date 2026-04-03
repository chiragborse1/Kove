import { describe, expect, it } from "vitest";
import {
  MEETING_EMPTY_SECTION_TEXT,
  buildMeetingAnalysisPrompt,
  parseMeetingAnalysisResponse,
} from "../../../ui/src/ui/controllers/meetings.ts";

describe("buildMeetingAnalysisPrompt", () => {
  it("requires the exact markdown headers", () => {
    const prompt = buildMeetingAnalysisPrompt({
      title: "Weekly sync",
      transcript: "Alice: hello",
    });

    expect(prompt).toContain("## Summary");
    expect(prompt).toContain("## Action Items");
    expect(prompt).toContain("## Key Decisions");
    expect(prompt).toContain("## Follow-up Email");
    expect(prompt).toContain(`write exactly: ${MEETING_EMPTY_SECTION_TEXT}`);
  });
});

describe("parseMeetingAnalysisResponse", () => {
  it("splits markdown sections by exact ## headers", () => {
    const parsed = parseMeetingAnalysisResponse([
      "## Summary",
      "Short recap",
      "",
      "## Action Items",
      "1. Alex - ship it",
      "",
      "## Key Decisions",
      "Use the new API",
      "",
      "## Follow-up Email",
      "Thanks everyone",
    ].join("\n"));

    expect(parsed.summary).toBe("Short recap");
    expect(parsed.actionItems).toBe("1. Alex - ship it");
    expect(parsed.decisions).toBe("Use the new API");
    expect(parsed.followUpEmail).toBe("Thanks everyone");
  });

  it("fills missing sections with the empty-section marker", () => {
    const parsed = parseMeetingAnalysisResponse([
      "## Summary",
      "Short recap",
      "",
      "## Follow-up Email",
      "Thanks everyone",
    ].join("\n"));

    expect(parsed.summary).toBe("Short recap");
    expect(parsed.actionItems).toBe(MEETING_EMPTY_SECTION_TEXT);
    expect(parsed.decisions).toBe(MEETING_EMPTY_SECTION_TEXT);
    expect(parsed.followUpEmail).toBe("Thanks everyone");
  });

  it("falls back to summary when the model returns one unsectioned block", () => {
    const parsed = parseMeetingAnalysisResponse("Everything came back in one block.");

    expect(parsed.summary).toBe("Everything came back in one block.");
    expect(parsed.actionItems).toBe(MEETING_EMPTY_SECTION_TEXT);
    expect(parsed.decisions).toBe(MEETING_EMPTY_SECTION_TEXT);
    expect(parsed.followUpEmail).toBe(MEETING_EMPTY_SECTION_TEXT);
  });
});
