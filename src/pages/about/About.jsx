import './about.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faSpotify, faInstagram } from "@fortawesome/free-brands-svg-icons"
import Typewriter from 'typewriter-effect'
import TopBarGeneral from "../../components/topbar/TopBarGeneral";


var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: false
});

export default function About() {



  return (
    <>
    {/* <meta http-equiv="refresh" content="3;url=http://localhost:3000/" /> */}
    <TopBarGeneral/>
    <div className="containerAbout">
    <div className="leftAbout">
      <div className="leftBackgroundAbout">
        <div className="leftTitleAbout">
        
      </div>
      </div>
      </div>
      <div className="rightAbout">
        <h1 className='h1About'>COMING SOON</h1>
        {/* <h3>PROGRESS</h3> */}
    </div>
    </div></>
  )
}
