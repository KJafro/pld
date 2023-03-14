import { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import Podcasts from "../../components/podcasts/Podcasts"
import { Pagination } from "../../components/pagination/Pagination"
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
  const [currentPage, setCurrentPage] = useState(1);
  const [podcastsPerPage, setPodcastsPerPage] = useState(8);

  useEffect(() => {
    const fetchPodcasts = async () => {
      const res = await axiosInstance.get("/podcasts" + search)
      setPodcasts(res.data.reverse())
    }
    fetchPodcasts()
  },[search])

  const indexOfLastPost = currentPage * podcastsPerPage;
  const indexOfFirstPost = indexOfLastPost - podcastsPerPage;
  const currentPodcasts = podcasts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
    <TopBarPodcast/>
      <Header />
      <div className="home">
        <Podcasts podcasts={currentPodcasts}/>
      </div>
      <Pagination podcastsPerPage={podcastsPerPage}
         totalPodcasts={podcasts.length}
          paginate={paginate}/>
    </>
  );
}
