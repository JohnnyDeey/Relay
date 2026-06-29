const CACHE_NAME = "relay-shell-v3";  // ✅ correct
const SHELL_FILES = [
  "/Relay/index.html",
  "/Relay/manifest.json",
  "/Relay/icons/icon-192.png",
  "/Relay/icons/icon-512.png",
  "/Relay/icons/apple-touch-icon.png",
  "/Relay/icons/favicon-32.png"
];

self.addEventListener('install', e => {
  // ... your existing install code
});

self.addEventListener('activate', e => {
  // ... your existing activate code
});

self.addEventListener('fetch', e => {
  // ... your existing fetch code
});

// ✅ this goes at the very bottom
self.addEventListener('message', e => {
  if (e.data?.type === 'SKIP_WAITING') self.skipWaiting();
});
