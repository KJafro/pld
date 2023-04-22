const CACHE_NAME = "version-1";
const urlsToCache = ["index.html"];
const self = this;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");

      return cache.addAll(urlsToCache);
    })
  );
});

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((res) => {
//       return fetch(event.request).catch(() => caches.match("offline.html"));
//     })
//   );
// });

self.addEventListener("activate", (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);
    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)){
                    return caches.delete(cacheName);
                }
            })
        ))
    )
});

console.log("Service Worker Successfully Loaded!");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved!");
  self.registration.showNotification(data.title, {
    body: "Everyday Being!",
    icon: "https://th.bing.com/th/id/R.f2ff5a5ce46d7cd7621fdf09ee2d4529?rik=Rgzj8LY5sDh%2b8A&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2015%2f07%2flogo-with-transparent-background-gallery_100204.png&ehk=9cRdKRl2FytHnQBYgmag%2fw40lKoDavuJZHu59y%2b6U24%3d&risl=&pid=ImgRaw&r=0"
  });
});
