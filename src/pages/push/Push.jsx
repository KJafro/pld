import React from 'react'
import { useState } from 'react';
import './push.css'
import TopBar from '../../components/topbar/TopBarPodcast'

export default function Push() {

    function unsubscribePush() {
        navigator.serviceWorker.ready
        .then(function(registration) {
          //Get subscription
          registration.pushManager.getSubscription()
          .then(function (subscription) {
            //If no `push subscription`, then return
            if(!subscription) {
              alert('Unable to unregister push notification.');
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
        <button onClick={unsubscribePush}>  
        </button>
      </div>
    );
    }
