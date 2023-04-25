console.log("Service Worker Successfully LoadedYE");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved! SubFolder");
  self.registration.showNotification(data.title, {
    body: "EDB",
    icon: "https://th.bing.com/th/id/R.f2ff5a5ce46d7cd7621fdf09ee2d4529?rik=Rgzj8LY5sDh%2b8A&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2015%2f07%2flogo-with-transparent-background-gallery_100204.png&ehk=9cRdKRl2FytHnQBYgmag%2fw40lKoDavuJZHu59y%2b6U24%3d&risl=&pid=ImgRaw&r=0"
  });
});
