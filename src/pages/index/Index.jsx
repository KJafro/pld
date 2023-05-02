import "./index.css"
// import BgVideo from "./../index/index.mp4"
import {Link} from "react-router-dom";
import { useEffect } from "react";
import Typewriter from 'typewriter-effect'

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: false
});


export default function Index() {
  useEffect(() => {
    document.title = "Everyday Being | Home"
  }, []);

  const publicVapidKey =
  "BJthRQ5myDgc7OSXzPCMftGw-n16F7zQBEN7EUD6XxcfTTvrLGWSIG7y_JxiWtVlCFua0S8MTB5rPziBqNx1qIo";

if ("serviceWorker" in navigator) {
  send().catch(err => console.error(err));
}

async function send() {
  console.log("Registering Worker!");
  const register = await navigator.serviceWorker.register("/worker.js", {
    scope: "/"
  });
  console.log("Service Worker Registered!");

  console.log("Registering Push!");
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
  });
  console.log("Push Registered!");
  console.log(JSON.stringify(subscription))

  console.log("Sending Push!!!");
  await fetch("https://everydaybeing.onrender.com/subscribe", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "content-type": "application/json"
    }
  });
  console.log("Push Sent!");
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
//   const subScribe = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axiosInstance.post("/subscribe", {
//       });
// console.log(res)
//     } catch (err) {
//       console.log(err)
//     }
//   }

  
  return (<>
        <div className="container">
        <div className="video-bg">
          {/* <video src={BgVideo} autoPlay={true} controls={false} muted playsInline class="video-bg" type="video/mp4"/> */}
        <div className="caption">
                            <Typewriter 
              onInit={(typewriter) => {
                typewriter.typeString('<span style="font-size:40px;">Everyday Being')
                // .pauseFor(200)
                .callFunction(function(state) {
                  state.elements.cursor.style.display = 'none';
                })
                .start();
              }}/>
              <p>We live our lives in a continuous now. You cannot go even two seconds into the past
                or even two seconds into the future.</p>
                <p>Our being is always now.</p>
              <Link to="/blog"><button className="blogbtn" type="submit">Blog</button></Link>
              <Link to="/podcast"><button className="podcastbtn" type="submit">Podcast</button></Link>
              <div className="typewriter">
              </div>
        </div>
        </div>
        </div>
        </>
  )
}
