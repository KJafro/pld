import React from 'react'
import './push.css'
import TopBar from '../../components/topbar/TopBarPodcast'

export default function Push() {

    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState(null);
  
    const handleClick = () => {
      setIsLoading(true);
      fetch('/run-script')
        .then(response => response.json())
        .then(data => {
          setResult(data);
          setIsLoading(false);
        })
        .catch(error => {
          console.error(error);
          setIsLoading(false);
        });
    };

    return (
        <>
        <TopBar/>
        <div>
          <button onClick={handleClick} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Run Script'}
          </button>
          {result && (
            <p>{result.success ? 'Script executed successfully' : 'An error occurred'}</p>
          )}
        </div>
        </>
      );
    }
