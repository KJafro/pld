import "./singlepodcast.css"
import TopBarPodcast from "../../components/topbar/TopBarPodcast"
import { useEffect } from 'react';
import SinglePodcast from '../../components/singlePodcasts/SinglePodcast';

export default function SinglePodcasts() {
  useEffect(() => {
    document.title = "Everyday Being | Podcast"
  }, []);
  return (
    <>
    <div className="single">
      <TopBarPodcast/>
    </div>
    <div className="podcast">
      <SinglePodcast/>
    </div></>
  )
}
