import "./index.css"
// import BgVideo from "./../index/index.mp4"
import {Link} from "react-router-dom";
import { useEffect } from "react";
import Typewriter from 'typewriter-effect'

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: false
});

export default function Index() {
  useEffect(() => {
    document.title = "Everyday Being | Home"
  }, []);
  return (<>
        <div className="container">
        <div className="video-bg">
          {/* <video src={BgVideo} autoPlay={true} controls={false} muted playsInline class="video-bg" type="video/mp4"/> */}
        <div className="caption">
                            <Typewriter 
              onInit={(typewriter) => {
                typewriter.typeString('<span style="font-size:40px;">Everyday Being')
                // .pauseFor(200)
                .callFunction(function(state) {
                  state.elements.cursor.style.display = 'none';
                })
                .start();
              }}/>
              <p>We live our lives in a continuous now. You cannot go even two seconds into the past
                or even two seconds into the future. Our being is always now.
              </p>
              <Link to="/blog"><button className="blogbtn" type="submit">Blog</button></Link>
              <Link to="/podcast"><button className="podcastbtn" type="submit">Podcast</button></Link>
              <div className="typewriter">
              </div>
        </div>
        </div>
        </div>
        </>
  )
}
