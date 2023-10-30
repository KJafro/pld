import "./podcast.css";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { SpotifyEmbed } from "spotify-embed";
import LazyLoad from "react-lazy-load";
import TopBarPodcast from "../../components/topbar/TopBarPodcast";

export default function Podcast({ podcast }) {
  let moment = require("moment");
  const cleanedTitle = podcast.title.replace(/%/g, "").replace(/\s+/g, "-");

  return (
    <div className="podcastFront">
      {podcast.photo && (
        <Link to={`/podcast/${cleanedTitle}`} className="links">
          <SpotifyEmbed class="podcastImg" src={podcast.photo} />
        </Link>
      )}
      <div className="podcastInfo">
        <Link to={`/podcast/${cleanedTitle}`} className="link">
          <p className="podcastTitle">{podcast.title}</p>
          <p className="podcastDate">
            {moment(podcast.createdAt).format("Do MMMM YYYY | h:mm a")}
          </p>
          <p className="podcastDesc">{podcast.desc}</p>
        </Link>
      </div>
    </div>
  );
}
