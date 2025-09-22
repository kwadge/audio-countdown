self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("audio-countdown-v1").then(cache => {
      return cache.addAll([
        "./index.html",
        "./manifest.json",
        "./beep.wav", // or "./beep.wav"
        "./silent.mp3",
        "./icon-192.png",
        "./icon-512.png",
        "./service-worker.js"
      ]);
    })
  );
});

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CACHE_FILES))
  );
});
