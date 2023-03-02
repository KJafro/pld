import './construct.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faSpotify, faInstagram } from "@fortawesome/free-brands-svg-icons"
import Typewriter from 'typewriter-effect'

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: false
});

export default function Construct() {



  return (
    <>
    {/* <meta http-equiv="refresh" content="3;url=http://localhost:3000/" /> */}
    <div className="backgroundcon">

    </div>
    <div className="containercon">
        
        <h1 className='h1con'>UNDER CONSTRUCTION</h1>
        {/* <h3>PROGRESS</h3> */}
        <hr className='constructhr'/>
        <div className="social-icons">
        <FontAwesomeIcon icon={faFacebook} className="Icon"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faTwitter} className="Icon"></FontAwesomeIcon>
        <Link to="https://open.spotify.com/show/5ZLCIJR0FHZLIREjPoTACy/"><FontAwesomeIcon icon={faSpotify} className="Icon"></FontAwesomeIcon></Link>
        <Link to="https://instagram.com/everyday.being?igshid=YmMyMTA2M2Y="><FontAwesomeIcon icon={faInstagram} className="Icon"></FontAwesomeIcon></Link>
        </div>
    </div></>
  )
}
