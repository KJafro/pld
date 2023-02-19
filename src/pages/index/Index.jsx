import "./index.css"
import BgVideo from "./../index/index.mp4"
import {Link} from "react-router-dom";

export default function Index() {
  
  return (<>
        <div className="container">
        <div className="video-bg">
          <div
          dangerouslySetInnerHTML={{
            __html: `<video className="app__backgroundVideo" autoplay loop muted playsinline>
      <source src=${BgVideo} type="video/mp4" />
      Your browser does not support the video tag.
</video>`,
          }}
        />
        <div className="caption">
              <h1>Everyday Being</h1>
              <p>We live our lives in a continuous now. You cannot go even two seconds into the past
                or even two seconds into the future. Our being is always now.
              </p>
              <Link to="/blog"><button className="blogbtn" type="submit">Blog</button></Link>
              <Link to="/construct"><button className="podcastbtn" type="submit">Podcast</button></Link>
        </div>
        </div>
        </div>
        </>
  )
}
