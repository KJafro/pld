console.log("Service Worker Successfully Loaded!YE");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved! PublicFolderrrrr");
  self.registration.showNotification(data.title, {
  });
});
