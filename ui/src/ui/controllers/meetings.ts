import { getSafeLocalStorage } from "../../local-storage.ts";

const MEETING_HISTORY_STORAGE_KEY = "openclaw.control.meetings.v1";
const MAX_MEETING_HISTORY = 5;

export const MEETING_ANALYSIS_AGENT_ID = "kova-morgan";
export const MEETING_ANALYSIS_INSTRUCTION =
  "You are analysing a meeting transcript. Produce: 1) A 3-paragraph summary, 2) Action items as a numbered list with owner and deadline if mentioned, 3) Key decisions made, 4) A follow-up email draft addressed to meeting participants. Format clearly with headers.";

export type MeetingAnalysisResult = {
  id: string;
  title: string;
  transcript: string;
  sourceName: string | null;
  createdAt: number;
  summary: string;
  actionItems: string;
  decisions: string;
  followUpEmail: string;
  rawResponse: string;
};

type SectionDefinition = {
  key: keyof Pick<
    MeetingAnalysisResult,
    "summary" | "actionItems" | "decisions" | "followUpEmail"
  >;
  label: string;
  patterns: string[];
};

const SECTION_DEFINITIONS: SectionDefinition[] = [
  { key: "summary", label: "Summary", patterns: ["summary"] },
  {
    key: "actionItems",
    label: "Action Items",
    patterns: ["action items", "actions", "next steps"],
  },
  {
    key: "decisions",
    label: "Key Decisions",
    patterns: ["key decisions", "decisions", "decisions made"],
  },
  {
    key: "followUpEmail",
    label: "Follow-up Email",
    patterns: ["follow-up email", "follow up email", "email draft", "draft email"],
  },
];

type ParsedMeetingHistory = Partial<MeetingAnalysisResult>[];

function normalizeLineEndings(value: string): string {
  return value.replace(/\r\n/g, "\n");
}

function trimStoredText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isMeetingAnalysisResult(value: unknown): value is MeetingAnalysisResult {
  if (!value || typeof value !== "object") {
    return false;
  }
  const candidate = value as Partial<MeetingAnalysisResult>;
  return (
    typeof candidate.id === "string" &&
    typeof candidate.title === "string" &&
    typeof candidate.transcript === "string" &&
    (typeof candidate.sourceName === "string" || candidate.sourceName === null) &&
    typeof candidate.createdAt === "number" &&
    typeof candidate.summary === "string" &&
    typeof candidate.actionItems === "string" &&
    typeof candidate.decisions === "string" &&
    typeof candidate.followUpEmail === "string" &&
    typeof candidate.rawResponse === "string"
  );
}

function buildHeaderRegex(patterns: string[]): RegExp {
  return new RegExp(`^(?:#{1,6}\\s*)?(?:${patterns.join("|")})\\s*:?\\s*$`, "gim");
}

function pickSectionText(params: {
  key: SectionDefinition["key"];
  sections: Map<SectionDefinition["key"], string>;
  rawResponse: string;
}): string {
  const exact = params.sections.get(params.key)?.trim();
  if (exact) {
    return exact;
  }
  if (params.key === "summary") {
    return params.rawResponse.trim();
  }
  return "";
}

export function buildMeetingAnalysisPrompt(params: {
  title: string;
  transcript: string;
}): string {
  const title = trimStoredText(params.title);
  const transcript = normalizeLineEndings(params.transcript).trim();
  const titleLine = title ? `Meeting title: ${title}` : "Meeting title: Untitled meeting";
  return [
    MEETING_ANALYSIS_INSTRUCTION,
    "",
    "Return the result using these exact markdown headers:",
    "## Summary",
    "## Action Items",
    "## Key Decisions",
    "## Follow-up Email",
    "",
    titleLine,
    "",
    "Transcript:",
    transcript,
  ].join("\n");
}

export function parseMeetingAnalysisResponse(response: string): Pick<
  MeetingAnalysisResult,
  "summary" | "actionItems" | "decisions" | "followUpEmail" | "rawResponse"
> {
  const rawResponse = normalizeLineEndings(response).trim();
  if (!rawResponse) {
    return {
      summary: "",
      actionItems: "",
      decisions: "",
      followUpEmail: "",
      rawResponse: "",
    };
  }

  const matches: Array<{ key: SectionDefinition["key"]; start: number; end: number }> = [];
  for (const section of SECTION_DEFINITIONS) {
    const regex = buildHeaderRegex(section.patterns);
    let match: RegExpExecArray | null = regex.exec(rawResponse);
    while (match) {
      matches.push({
        key: section.key,
        start: match.index,
        end: regex.lastIndex,
      });
      match = regex.exec(rawResponse);
    }
  }

  matches.sort((left, right) => left.start - right.start);
  const sections = new Map<SectionDefinition["key"], string>();
  for (let index = 0; index < matches.length; index += 1) {
    const match = matches[index];
    if (sections.has(match.key)) {
      continue;
    }
    const next = matches[index + 1];
    const content = rawResponse
      .slice(match.end, next?.start ?? rawResponse.length)
      .trim();
    sections.set(match.key, content);
  }

  return {
    summary: pickSectionText({ key: "summary", sections, rawResponse }),
    actionItems: pickSectionText({ key: "actionItems", sections, rawResponse }),
    decisions: pickSectionText({ key: "decisions", sections, rawResponse }),
    followUpEmail: pickSectionText({ key: "followUpEmail", sections, rawResponse }),
    rawResponse,
  };
}

async function readPdfTranscript(file: File): Promise<string> {
  const [{ getDocument, GlobalWorkerOptions }, workerModule] = await Promise.all([
    import("pdfjs-dist/legacy/build/pdf.mjs"),
    import("pdfjs-dist/legacy/build/pdf.worker.min.mjs?url"),
  ]);
  GlobalWorkerOptions.workerSrc = workerModule.default;

  const document = await getDocument({
    data: new Uint8Array(await file.arrayBuffer()),
  }).promise;

  try {
    const pages: string[] = [];
    for (let pageNumber = 1; pageNumber <= document.numPages; pageNumber += 1) {
      const page = await document.getPage(pageNumber);
      const textContent = await page.getTextContent();
      const text = textContent.items
        .map((item) => ("str" in item ? item.str : ""))
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();
      if (text) {
        pages.push(text);
      }
    }
    return pages.join("\n\n");
  } finally {
    document.destroy();
  }
}

export async function readMeetingTranscriptFile(file: File): Promise<{
  transcript: string;
  sourceName: string;
}> {
  const fileName = trimStoredText(file.name) || "meeting";
  const lowered = fileName.toLowerCase();

  let transcript = "";
  if (lowered.endsWith(".pdf")) {
    transcript = await readPdfTranscript(file);
  } else {
    transcript = await file.text();
  }

  const normalizedTranscript = normalizeLineEndings(transcript).trim();
  if (!normalizedTranscript) {
    throw new Error(`No readable text was found in ${fileName}.`);
  }

  return {
    transcript: normalizedTranscript,
    sourceName: fileName,
  };
}

export function loadMeetingHistoryFromStorage(): MeetingAnalysisResult[] {
  try {
    const raw = getSafeLocalStorage()?.getItem(MEETING_HISTORY_STORAGE_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw) as ParsedMeetingHistory;
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed
      .filter(isMeetingAnalysisResult)
      .sort((left, right) => right.createdAt - left.createdAt)
      .slice(0, MAX_MEETING_HISTORY);
  } catch {
    return [];
  }
}

export function saveMeetingHistoryToStorage(history: MeetingAnalysisResult[]): MeetingAnalysisResult[] {
  const normalized = history
    .filter(isMeetingAnalysisResult)
    .sort((left, right) => right.createdAt - left.createdAt)
    .slice(0, MAX_MEETING_HISTORY);
  try {
    getSafeLocalStorage()?.setItem(MEETING_HISTORY_STORAGE_KEY, JSON.stringify(normalized));
  } catch {
    // Ignore storage failures so the page still works for the current session.
  }
  return normalized;
}

export function upsertMeetingHistory(
  history: MeetingAnalysisResult[],
  nextEntry: MeetingAnalysisResult,
): MeetingAnalysisResult[] {
  return saveMeetingHistoryToStorage([
    nextEntry,
    ...history.filter((entry) => entry.id !== nextEntry.id),
  ]);
}

export function clearMeetingHistoryStorage(): void {
  try {
    getSafeLocalStorage()?.removeItem(MEETING_HISTORY_STORAGE_KEY);
  } catch {
    // Ignore storage failures so the in-memory state can still clear.
  }
}
