import { axiosInstance } from "../../config"
import TopBar from '../../components/topbar/TopBar'
import emailjs from '@emailjs/browser'
import React, { useRef } from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
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

  window.addEventListener('load', async () => {
    let sw = await navigator.serviceWorker.register('./worker.js');
    console.log(sw);
  });

let result = document.getElementById('result')
async function subscribe() {
    let sw = await navigator.serviceWorker.ready;
    let push = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'BGcIvr4sKScLIw84bPGFVC2YdZWFq2QvQlHcqc7aPOhxRGo0bO92zvt5y6V4u85c85o4lTukMT3iDNAIudKwwS8'
    })
    const endpointDiv = document.getElementById('endpointDiv')
    let endpoint = JSON.stringify(push)
    endpointDiv.innerHTML = endpoint
}
subscribe()

function unsubscribePush() {
  navigator.serviceWorker.ready
  .then(function(registration) {
    registration.pushManager.getSubscription()
    .then(function (subscription) {
      if(!subscription) {
        setSuccess(true);
        return;
      }
      subscription.unsubscribe()
        .then(function () {
          console.log(('Unsubscribed'));
        })
        .catch(function (error) {
          console.error(error);
        });
    })
    .catch(function (error) {
      console.error('Failed to unsubscribe push notification!');
    });
  })
}

  return (
    <>
    <TopBar/>
    <div className="subForm">
      {/* <div id="endpointDiv"></div> */}
    <form ref={form} onSubmit={sendEmail} className="writeForm">
      <div className="subTitle">Press the subscribe button to subscribe to push notifications!</div>
    <textarea placeholder="Enter the endpoint here..." type="text" name="message" className="endpointTextarea" id="endpointDiv" required></textarea><br></br>
    <button className="registerButtonSub" type="submit">Subscribe</button>
    {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "10px", fontSize: "20px"}}
            >
              Endpoint Received! Push Notification will be registered soon! Click <Link className="unSubLink" to="/blog" onClick={unsubscribePush}>here</Link> to unsubscribe!
             </span>
          )}
    </form>
    </div>
    </>
  )
}