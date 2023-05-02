import { axiosInstance } from "../../config"
import TopBar from '../../components/topbar/TopBar'
import emailjs from '@emailjs/browser'
import React, { useRef } from 'react'
import { useState } from 'react';
import './subscribe.css'

export default function Subscribe() {

  const form = useRef();
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.sendForm('service_7ifte6p', 'template_hu4cn3k', form.current, 'mw2ABdIxQb7KdYwV_')
      .then((result) => {
          console.log(result.text);
          setLoading(false)
          setSuccess(true);
      }, (error) => {
          console.log(error.text);
          setLoading(false)
          setSuccess(false);
      });
  };

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
  const endpointDiv = document.getElementById('endpointDiv')
  let endpoint = JSON.stringify(subscription)
  endpointDiv.innerHTML = endpoint

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
  const subScribe = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/subscribe", {
      });
console.log(res)
    } catch (err) {
      console.log(err)
    }
  }



  return (
    <>
    <TopBar/>
    <div className="subForm">
      {/* <div id="endpointDiv"></div> */}
    <form ref={form} onSubmit={sendEmail} className="writeForm">
      <div className="subTitle">Press the subscribe button to subscribe to push notifications!</div>
    <textarea placeholder="Enter the endpoint here..." type="text" name="message" className="writeInput writeText" id="endpointDiv" required></textarea><br></br>
    <button className="registerButtonSub" type="submit">Subscribe</button>
    {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "10px", fontSize: "20px"}}
            >
              Endpoint Received! Push Notification will be registered soon!
             </span>
          )}
    </form>
    </div>
    </>
  )
}