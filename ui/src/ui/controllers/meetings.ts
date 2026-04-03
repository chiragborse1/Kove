import { getSafeLocalStorage } from "../../local-storage.ts";

const MEETING_HISTORY_STORAGE_KEY = "openclaw.control.meetings.v1";
const MAX_MEETING_HISTORY = 5;

export const MEETING_ANALYSIS_AGENT_ID = "kova-morgan";
export const MEETING_EMPTY_SECTION_TEXT = "None identified";
export const MEETING_ANALYSIS_INSTRUCTION =
  "You are analysing a meeting transcript. Return only markdown using these exact headers in this exact order: `## Summary`, `## Action Items`, `## Key Decisions`, `## Follow-up Email`. Do not merge sections. Put every item under the correct header. If a section has nothing concrete, write `None identified`.";

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

type SectionKey = keyof Pick<
  MeetingAnalysisResult,
  "summary" | "actionItems" | "decisions" | "followUpEmail"
>;

type SectionDefinition = {
  key: SectionKey;
  header: string;
};

const SECTION_DEFINITIONS: SectionDefinition[] = [
  { key: "summary", header: "Summary" },
  { key: "actionItems", header: "Action Items" },
  { key: "decisions", header: "Key Decisions" },
  { key: "followUpEmail", header: "Follow-up Email" },
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

function normalizeMeetingSectionText(value: string): string {
  const trimmed = value.trim();
  return trimmed || MEETING_EMPTY_SECTION_TEXT;
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
    `If a section has no concrete items, write exactly: ${MEETING_EMPTY_SECTION_TEXT}`,
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
      summary: MEETING_EMPTY_SECTION_TEXT,
      actionItems: MEETING_EMPTY_SECTION_TEXT,
      decisions: MEETING_EMPTY_SECTION_TEXT,
      followUpEmail: MEETING_EMPTY_SECTION_TEXT,
      rawResponse: "",
    };
  }

  const sectionByHeader = new Map(
    SECTION_DEFINITIONS.map((section) => [section.header.toLowerCase(), section] as const),
  );
  const headerRegex = /^##\s+(Summary|Action Items|Key Decisions|Follow-up Email)\s*$/gim;
  const matches: Array<{ key: SectionKey; start: number; end: number }> = [];
  let match: RegExpExecArray | null = headerRegex.exec(rawResponse);
  while (match) {
    const header = match[1]?.trim().toLowerCase();
    const section = header ? sectionByHeader.get(header) : undefined;
    if (section) {
      matches.push({
        key: section.key,
        start: match.index,
        end: headerRegex.lastIndex,
      });
    }
    match = headerRegex.exec(rawResponse);
  }

  if (matches.length === 0) {
    return {
      summary: normalizeMeetingSectionText(rawResponse),
      actionItems: MEETING_EMPTY_SECTION_TEXT,
      decisions: MEETING_EMPTY_SECTION_TEXT,
      followUpEmail: MEETING_EMPTY_SECTION_TEXT,
      rawResponse,
    };
  }

  const sections = new Map<SectionKey, string>();
  for (let index = 0; index < matches.length; index += 1) {
    const current = matches[index];
    if (sections.has(current.key)) {
      continue;
    }
    const next = matches[index + 1];
    const content = rawResponse
      .slice(current.end, next?.start ?? rawResponse.length)
      .trim();
    sections.set(current.key, normalizeMeetingSectionText(content));
  }

  return {
    summary: sections.get("summary") ?? MEETING_EMPTY_SECTION_TEXT,
    actionItems: sections.get("actionItems") ?? MEETING_EMPTY_SECTION_TEXT,
    decisions: sections.get("decisions") ?? MEETING_EMPTY_SECTION_TEXT,
    followUpEmail: sections.get("followUpEmail") ?? MEETING_EMPTY_SECTION_TEXT,
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
