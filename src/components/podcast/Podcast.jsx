import "./podcast.css"
import {Link} from "react-router-dom"
import { Fade } from "react-awesome-reveal";
import { SpotifyEmbed } from 'spotify-embed';
import LazyLoad from 'react-lazy-load';
import TopBarPodcast from "../../components/topbar/TopBarPodcast"

export default function Podcast({podcast}) {
  let moment = require ('moment');

  // const PF = "http://localhost:5000/images/"
  return (
<div className="podcastFront">
      {podcast.photo && (
        // <img class="postImg" src={PF + post.photo/} alt="" /> 
        <Link to = {`/podcast/${podcast._id}`} className="links"><SpotifyEmbed class="podcastImg" src={podcast.photo} /></Link>
      )}
        <div className="podcastInfo">
            {/* <div className="postCats">{
              post.categories.map(c=> (
                <span className="postCat">ssdasdsa{c.name}</span>
              ))
            }
            // </div> */}
            <Link to = {`/podcast/${podcast._id}`} className="link">
            <p className="podcastTitle">{podcast.title}
            </p>
            <p className="podcastDate">{moment(podcast.createdAt).format('MMMM Do YYYY | h:mm a')}</p>
            <p className="podcastDesc">{podcast.desc}</p>
            </Link>
            {/* <p className="podcastUser">{podcast.username}</p> */}
        </div>
        </div>
  )
}
