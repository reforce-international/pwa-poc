// This code executes in its own worker or thread
self.addEventListener("install", (event) => {
  console.log("Service worker installed");
});
self.addEventListener("activate", (event) => {
  console.log("Service worker activated");
});

const urlsToCache = ["/", "/src/index.css", "/src/logo.svg"];
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("pwa-assets").then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const networkFetch = fetch(event.request).then((response) => {
        // update the cache with a clone of the network response
        caches.open("pwa-assets").then((cache) => {
          cache.put(event.request, response.clone());
        });
      });
      // prioritize cached response over network
      return cachedResponse || networkFetch;
    })
  );
});
