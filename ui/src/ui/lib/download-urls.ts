export const DOWNLOAD_VERSION = "1.0.0";
export const GITHUB_REPO = "chiragborse1/Kove";
export const RELEASE_BASE_URL = `https://github.com/${GITHUB_REPO}/releases/latest/download`;

export type DownloadPlatform = "windows" | "mac" | "linux";

const DOWNLOAD_FILENAMES: Record<DownloadPlatform, string> = {
  windows: "Kova_1.0.0_x64-setup.exe",
  mac: "Kova_1.0.0_universal.dmg",
  linux: "Kova_1.0.0_amd64.deb",
};

type NavigatorWithUserAgentData = Navigator & {
  userAgentData?: {
    platform?: string;
  };
};

export function getDownloadUrl(platform: DownloadPlatform): string {
  return `${RELEASE_BASE_URL}/${DOWNLOAD_FILENAMES[platform]}`;
}

export function detectPlatform(): DownloadPlatform {
  if (typeof navigator === "undefined") {
    return "windows";
  }

  const nav = navigator as NavigatorWithUserAgentData;
  const platformHints = [nav.userAgentData?.platform, nav.platform, nav.userAgent]
    .filter((value): value is string => typeof value === "string" && value.trim().length > 0)
    .join(" ")
    .toLowerCase();

  if (
    platformHints.includes("mac") ||
    platformHints.includes("darwin") ||
    platformHints.includes("iphone") ||
    platformHints.includes("ipad")
  ) {
    return "mac";
  }

  if (platformHints.includes("win")) {
    return "windows";
  }

  return "linux";
}
