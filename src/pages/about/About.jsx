import './about.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faSpotify, faInstagram } from "@fortawesome/free-brands-svg-icons"
import Typewriter from 'typewriter-effect'
import TopBar from '../.././components/topbar/TopBar'

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: false
});

export default function About() {



  return (
    <>
    {/* <meta http-equiv="refresh" content="3;url=http://localhost:3000/" /> */}
    <div className="backgroundcon">

    </div>
    <TopBar/>
    <div className="containerAbout">
        <h1 className='h1About'>COMING SOON!!!</h1>
        {/* <h3>PROGRESS</h3> */}
    </div></>
  )
}
