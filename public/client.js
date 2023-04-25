// const publicVapidKey =
//   "BJGjGQ-Cs8cIN7s-I87gIRt8K_oA-90iz4uQT7g0XoIWSq0gOhiCN0l8WwMi-rwWU8JtrpZXZ591ujl1G0nORss";

// if ("serviceWorker" in navigator) {
//   send().catch(err => console.error(err));
// }

// async function send() {
//   console.log("Registering Worker!");
//   const register = await navigator.serviceWorker.register("/worker.js", {
//     scope: "/"
//   });
//   console.log("Service Worker Registered!ZZ");

//   console.log("Registering Push!ZZ");
//   const subscription = await register.pushManager.subscribe({
//     userVisibleOnly: true,
//     applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
//   });
//   console.log("Push Registered!ZZ");

//   console.log("Sending Push!ZZ");
//   await fetch("/subscribe", {
//     method: "POST",
//     body: JSON.stringify(subscription),
//     headers: {
//       "content-type": "application/json"
//     }
//   });
//   console.log("Push Sent!ZZ");
// }

// function urlBase64ToUint8Array(base64String) {
//   const padding = "=".repeat((4 - base64String.length % 4) % 4);
//   const base64 = (base64String + padding)
//     .replace(/\-/g, "+")
//     .replace(/_/g, "/");

//   const rawData = window.atob(base64);
//   const outputArray = new Uint8Array(rawData.length);

//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// }
