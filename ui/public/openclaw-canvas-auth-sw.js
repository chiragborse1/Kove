let canvasBearerToken = "";

const TOKEN_MESSAGE_TYPE = "openclaw-canvas-auth:set-token";

function shouldIntercept(requestUrl) {
  try {
    const url = new URL(requestUrl);
    if (url.origin !== self.location.origin) {
      return false;
    }
    return url.pathname.includes("/__openclaw__/canvas");
  } catch {
    return false;
  }
}

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("message", (event) => {
  const data = event.data;
  if (!data || data.type !== TOKEN_MESSAGE_TYPE) {
    return;
  }
  canvasBearerToken = typeof data.token === "string" ? data.token.trim() : "";
  event.ports?.[0]?.postMessage({ ok: true });
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (!shouldIntercept(request.url) || !canvasBearerToken || request.mode === "navigate") {
    return;
  }

  const headers = new Headers(request.headers);
  headers.set("Authorization", `Bearer ${canvasBearerToken}`);

  const authorizedRequest = new Request(request, {
    headers,
    mode: request.mode,
    credentials: request.credentials,
    cache: request.cache,
    redirect: request.redirect,
    referrer: request.referrer,
    referrerPolicy: request.referrerPolicy,
    integrity: request.integrity,
    keepalive: request.keepalive,
    signal: request.signal,
  });

  event.respondWith(fetch(authorizedRequest));
});
