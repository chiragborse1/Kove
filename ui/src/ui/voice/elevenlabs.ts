import { getSafeSessionStorage } from "../../local-storage.ts";

export const ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech";

export const EMPLOYEE_VOICES: Record<string, string> = {
  "kova-alex": "21m00Tcm4TlvDq8ikWAM",
  "kova-casey": "AZnzlk1XvdvUeBnXmlld",
  "kova-morgan": "EXAVITQu4vr4xnSDxMaL",
  "kova-jordan": "ErXwobaYiN019PkySvjV",
  "kova-riley": "MF3mGyEYCl7XYWbV9V6O",
};

const DEFAULT_EMPLOYEE_VOICE_ID = EMPLOYEE_VOICES["kova-alex"];
const ELEVENLABS_MODEL_ID = "eleven_multilingual_v2";
const SESSION_KEY_PREFIX = "openclaw.control.voice.elevenlabs.v1:";
const STOPPED_ERROR = "playback-stopped";

let currentAudio: HTMLAudioElement | null = null;
let currentObjectUrl: string | null = null;
let currentAbortController: AbortController | null = null;
let currentReject: ((reason?: unknown) => void) | null = null;

function getScopedSessionKey(gatewayUrl: string): string {
  const normalized = gatewayUrl.trim() || "default";
  return `${SESSION_KEY_PREFIX}${normalized}`;
}

function cleanupPlaybackState() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.src = "";
    currentAudio = null;
  }
  if (currentObjectUrl) {
    URL.revokeObjectURL(currentObjectUrl);
    currentObjectUrl = null;
  }
  currentAbortController = null;
  currentReject = null;
}

function buildPlaybackPromise(audio: HTMLAudioElement): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const finalize = () => {
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
      if (currentAudio === audio) {
        cleanupPlaybackState();
      }
    };
    const handleEnded = () => {
      finalize();
      resolve();
    };
    const handleError = () => {
      const detail =
        typeof audio.error?.message === "string" && audio.error.message.trim()
          ? audio.error.message
          : "Audio playback failed.";
      finalize();
      reject(new Error(detail));
    };
    currentReject = (reason?: unknown) => {
      finalize();
      reject(reason instanceof Error ? reason : new Error(STOPPED_ERROR));
    };
    audio.addEventListener("ended", handleEnded, { once: true });
    audio.addEventListener("error", handleError, { once: true });
    void audio.play().catch((error) => {
      finalize();
      reject(error);
    });
  });
}

function stripMarkdown(text: string): string {
  return text
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]+`/g, "")
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[([^\]]+)\]\(.*?\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/\*{1,3}(.*?)\*{1,3}/g, "$1")
    .replace(/_{1,3}(.*?)_{1,3}/g, "$1")
    .replace(/^>\s?/gm, "")
    .replace(/^[-*_]{3,}\s*$/gm, "")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function resolveVoiceId(agentId: string): string {
  return EMPLOYEE_VOICES[agentId] ?? DEFAULT_EMPLOYEE_VOICE_ID;
}

export function isVoicePlaybackInterrupted(error: unknown): boolean {
  return error instanceof Error && error.message === STOPPED_ERROR;
}

export function stopSpeaking(): void {
  currentAbortController?.abort();
  if (currentReject) {
    currentReject(new Error(STOPPED_ERROR));
    return;
  }
  cleanupPlaybackState();
}

export function cacheElevenLabsApiKey(gatewayUrl: string, apiKey: string): void {
  const storage = getSafeSessionStorage();
  if (!storage) {
    return;
  }
  const trimmed = apiKey.trim();
  const key = getScopedSessionKey(gatewayUrl);
  if (!trimmed) {
    storage.removeItem(key);
    return;
  }
  storage.setItem(key, trimmed);
}

export function getCachedElevenLabsApiKey(gatewayUrl: string): string {
  const storage = getSafeSessionStorage();
  if (!storage) {
    return "";
  }
  return (storage.getItem(getScopedSessionKey(gatewayUrl)) ?? "").trim();
}

export function isKovaEmployeeVoiceAgent(agentId: string): boolean {
  return agentId.trim().startsWith("kova-");
}

export async function speakText(text: string, agentId: string, apiKey: string): Promise<void> {
  const cleanedText = stripMarkdown(text);
  const trimmedApiKey = apiKey.trim();
  if (!cleanedText) {
    throw new Error("There is no text to speak yet.");
  }
  if (!trimmedApiKey) {
    throw new Error("Add your ElevenLabs key before enabling voice mode.");
  }

  stopSpeaking();

  const controller = new AbortController();
  currentAbortController = controller;
  const response = await fetch(`${ELEVENLABS_API_URL}/${resolveVoiceId(agentId)}`, {
    method: "POST",
    signal: controller.signal,
    headers: {
      Accept: "audio/mpeg",
      "Content-Type": "application/json",
      "xi-api-key": trimmedApiKey,
    },
    body: JSON.stringify({
      text: cleanedText,
      model_id: ELEVENLABS_MODEL_ID,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(detail.trim() || `ElevenLabs request failed (${response.status}).`);
  }

  const blob = await response.blob();
  currentObjectUrl = URL.createObjectURL(blob);
  currentAudio = new Audio(currentObjectUrl);
  await buildPlaybackPromise(currentAudio);
}
