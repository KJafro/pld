import { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import "./home.css"
import { axiosInstance } from "../../config"
import { useLocation } from "react-router"
import TopBar from "../../components/topbar/TopBar"

export default function Home() {
  useEffect(() => {
    document.title = "Everyday Being | Blog"
  }, []);
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get("/posts" + search)
      setPosts(res.data.reverse())
    }
    fetchPosts()
  },[search])
  return (
    <>
    <TopBar/>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
      </div>
    </>
  );
}
