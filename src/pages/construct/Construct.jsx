import './construct.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faSpotify, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Construct() {

    const progress = document.querySelector('.progress');
    const progress_percentage = document.querySelector('.spanprogress');

    let per = 0;
    function progressLoad() {
        if(per >= 80) {
            progress.style.width = '80%';
            progress_percentage.innerHTML = "80%";
        } else {
            progress.style.width = `${per}%`;
            progress_percentage.innerHTML = `${per}%`;
        }
        per++
    }
    setInterval(progressLoad, 50)

  return (
    <>
    {/* <meta http-equiv="refresh" content="3;url=http://localhost:3000/" /> */}
    <div className="backgroundcon">

    </div>
    <div className="containercon">
        
        <h1 className='h1con'>UNDER CONSTRUCTION</h1>
        <h3>PROGRESS</h3>
        <div className="progress-wrapper">
            <div className="progress"><span className='spanprogress'>0%</span></div>
        </div>
        <div className="social-icons">
        <FontAwesomeIcon icon={faFacebook} className="Icon"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faTwitter} className="Icon"></FontAwesomeIcon>
        <Link to="https://open.spotify.com/show/5ZLCIJR0FHZLIREjPoTACy/"><FontAwesomeIcon icon={faSpotify} className="Icon"></FontAwesomeIcon></Link>
        <Link to="https://instagram.com/everyday.being?igshid=YmMyMTA2M2Y="><FontAwesomeIcon icon={faInstagram} className="Icon"></FontAwesomeIcon></Link>
        </div>
    </div></>
  )
}
