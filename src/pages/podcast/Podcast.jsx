import { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import Podcasts from "../../components/podcasts/Podcasts"
import "./home.css"
import { axiosInstance } from "../../config"
import { useLocation } from "react-router"
import TopBar from "../../components/topbar/TopBar"

export default function Home() {
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
    <TopBar/>
      <Header />
      <div className="home">
        <Podcasts podcasts={podcasts}/>
      </div>
    </>
  );
}
