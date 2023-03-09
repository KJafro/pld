import { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import Podcasts from "../../components/podcasts/Podcasts"
import "./podcast.css"
import { axiosInstance } from "../../config"
import { useLocation } from "react-router"
import TopBarPodcast from "../../components/topbar/TopBarPodcast"

export default function Podcast() {
  useEffect(() => {
    document.title = "Everyday Being | Podcasts"
  }, []);
  const [podcasts, setPodcasts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPodcasts = async () => {
      const res = await axiosInstance.get("/podcasts" + search)
      setPodcasts(res.data.reverse())
    }
    fetchPodcasts()
  },[search])
  return (
    <>
    <TopBarPodcast/>
      <Header />
      <div className="home">
        <Podcasts podcasts={podcasts}/>
      </div>
    </>
  );
}
