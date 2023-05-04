import React from 'react'
import { useState } from 'react';
import './push.css'
import TopBar from '../../components/topbar/TopBarPodcast'

export default function Push() {

    const [success, setSuccess] = useState(false);

    function unsubscribePush() {
        navigator.serviceWorker.ready
        .then(function(registration) {
          //Get subscription
          registration.pushManager.getSubscription()
          .then(function (subscription) {
            //If no `push subscription`, then return
            if(!subscription) {
              setSuccess(true);
              return;
            }
    
            //Unsubscribes user
            subscription.unsubscribe()
              .then(function () {
                console.log(('Unsubscribed successfully.'));
                console.info('Push notification unsubscribed.');
              })
              .catch(function (error) {
                console.error(error);
              });
          })
          .catch(function (error) {
            console.error('Failed to unsubscribe push notification.');
          });
        })
      }
  

    return (
        <div>
        <button onClick={unsubscribePush}>UNSUB</button>
        {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "10px", fontSize: "20px"}}
            >
              Successfully unregistered from push notifications!
             </span>
          )}
      </div>
    );
    }
