import "./singlepodcast.css"
import TopBar from "../../components/topbar/TopBar";
import { useEffect } from 'react';
import SinglePodcast from '../../components/singlePodcast/SinglePodcast';

export default function SinglePodcasts() {
  useEffect(() => {
    document.title = "Everyday Being | Podcast"
  }, []);
  return (
    <>
    <div className="single">
      <TopBar/>
    </div>
    <div className="podcast">
      <SinglePodcast/>
    </div></>
  )
}
