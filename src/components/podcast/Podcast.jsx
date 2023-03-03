import "./podcast.css"
import {Link} from "react-router-dom"
import { Fade } from "react-awesome-reveal";

export default function Podcast({podcast}) {
  let moment = require ('moment');

  // const PF = "http://localhost:5000/images/"
  return (
<div className="podcastFront">
      {podcast.photo && (
        // <img class="postImg" src={PF + post.photo/} alt="" />
        <Link to = {`/podcast/${podcast._id}`} className="link"><iframe class="podcastImg" src="https://open.spotify.com/show/5ZLCIJR0FHZLIREjPoTACy?si=ca5f04ec61cb4ba5" alt="" /></Link>
      )}
        <div className="podcastInfo">
            {/* <div className="postCats">{
              post.categories.map(c=> (
                <span className="postCat">ssdasdsa{c.name}</span>
              ))
            }
            // </div> */}
            <Link to = {`/podcast/${podcast._id}`} className="link">
            <span className="podcastTitle">{podcast.title}
            </span>
            </Link>
        <span className="podcastDate">{moment(podcast.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
        </div>
        <p className="podcastDesc">{podcast.desc}</p>
    </div>
  )
}
