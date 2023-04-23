import React from 'react'
import { axiosInstance } from "../../config"
import TopBar from '../../components/topbar/TopBar'

export default function Subscribe() {

//   const publicVapidKey =
//   "BJthRQ5myDgc7OSXzPCMftGw-n16F7zQBEN7EUD6XxcfTTvrLGWSIG7y_JxiWtVlCFua0S8MTB5rPziBqNx1qIo";

// if ("serviceWorker" in navigator) {
//   send().catch(err => console.error(err));
// }

// async function send() {
//   console.log("Registering Worker!");
//   const register = await navigator.serviceWorker.register("/worker.js", {
//     scope: "/"
//   });
//   console.log("Service Worker Registered!");

//   console.log("Registering Push!");
//   const subscription = await register.pushManager.subscribe({
//     userVisibleOnly: true,
//     applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
//   });
//   console.log("Push Registered!");

//   console.log("Sending Push!!!");
//   await fetch("https://everydaybeing.onrender.com/subscribe", {
//     method: "POST",
//     body: JSON.stringify(subscription),
//     headers: {
//       "content-type": "application/json"
//     }
//   });
//   console.log("Push Sent!");
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


//   const subScribe = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axiosInstance.post("/subscribe", {
//       });
// console.log('res')
//     } catch (err) {
//       console.log(err)
//     }
//   }

addEventListener('load', async () => {
  let sw = await navigator.serviceWorker.register('./sw.js')
  console.log(sw)
})


async function subscribe() {
  let sw = await navigator.serviceWorker.ready;
  let push = await sw.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: 'BLQGq3C889qOEdVcZnGaur0qq3yO5U3fycxvVpKjqTKIj2dhb4nPSpOcVJmcPKnAfovGs0mKi0Igb0Vu5GIdJcs'
  })
  console.log(JSON.stringify(push))
}

subscribe()



  return (
    <>
    <TopBar/>
    <div>Subscribe</div>
    <form className="registerForm">
    <button className="registerButton" type="submit">Sub</button>
    <div id='result'>ss</div>
    </form>
    </>
  )
}
