// console.log("Service Worker Successfully Loaded!YE");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved!!! it has");
  self.registration.showNotification(data.title, {
    body: "Click here to visit us again!",
    icon: "https://images.unsplash.com/photo-1580250642511-1660fe42ad58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80"
  });
});
