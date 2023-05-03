import React from 'react'
import { useState } from 'react';
import './push.css'
import TopBar from '../../components/topbar/TopBarPodcast'

export default function Push() {

    const [isRunning, setIsRunning] = useState(false);
    const [error, setError] = useState(null);
  
    const handleButtonClick = async () => {
      setIsRunning(true);
      setError(null);
  
      try {
        const response = await fetch('/run-script', { method: 'POST' });
        if (response.ok) {
          console.log('Script ran successfully');
        } else {
          setError('Error running script: ' + response.statusText);
        }
      } catch (err) {
        setError('Error running script: ' + err.message);
      }
  
      setIsRunning(false);
    };
  

    return (
        <div>
        <button onClick={handleButtonClick} disabled={isRunning}>
          {isRunning ? 'Running script...' : 'Run script'}
        </button>
        {error && <p>{error}</p>}
      </div>
    );
    }
