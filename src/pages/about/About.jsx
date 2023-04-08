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
        <div className="rightAboutText">
          
      

        <h4>In our podcast and blog posts, we are exploring an understanding of
          how our human experience is created and the relationship between who we
          are 'being' and what we are 'doing'.</h4><br></br>

          <h4>We consider the implications of this understanding for the way that
            we live and navigate our everyday experience. We do this through looking
            at different aspects of the human experience from things like mental health,
            relationships, what we do and do not control in life and everything in between.
          </h4><br></br>

          <h4>Our intention is to make this practical and relatable in your own experience</h4>
          </div>
    </div>
    </div></>
  )
}
