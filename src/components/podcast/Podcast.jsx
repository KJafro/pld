import "./post.css"
import {Link} from "react-router-dom"
import { Fade } from "react-awesome-reveal";

export default function Podcast({podcast}) {
  let moment = require ('moment');

  // const PF = "http://localhost:5000/images/"
  return (
<div className="postFront">
      {podcast.videoPodcast && (
        // <img class="postImg" src={PF + post.photo/} alt="" />
        <Link to = {`/podcast/${podcast._id}`} className="link"><img class="postImg" src={podcast.videoPodcast} alt="" /></Link>
      )}
        <div className="postInfo">
            {/* <div className="postCats">{
              post.categories.map(c=> (
                <span className="postCat">ssdasdsa{c.name}</span>
              ))
            }
            // </div> */}
            <Link to = {`/podcast/${podcast._id}`} className="link">
            <span className="postTitle">{podcast.titlePodcast}
            </span>
            </Link>
        <span className="postDate">{moment(podcast.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
        </div>
        <p className="postDesc">{podcast.descPodcast}</p>
    </div>
  )
}
