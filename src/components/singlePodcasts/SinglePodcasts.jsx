import "./singlePodcast.css"
import { axiosInstance } from "../../config"
import { useLocation } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import { Context } from "../../context/Context";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

export default function SinglePodcasts() {
  const location = useLocation()
  const path = location.pathname.split("/")[2];
  const [podcast, setPodcast] = useState({})
  // const PF = "https://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [updateMode, setUpdateMode] = useState(false)
  let moment = require ('moment');

  useEffect(() => {
    const getPodcast = async () => {
      const res = await axiosInstance.get("/podcasts/" + path)
      setPodcast(res.data)
      setTitle(res.data.titlePodcast)
      setDesc(res.data.descPodcast)
    };
    getPodcast()
  },[path])
  useEffect(() => {
    document.title = `Everyday Being | ${podcast.title}`
  }, []);

  const handleDelete = async() => {
    try {
      await axiosInstance.delete(`/podcasts/${podcast._id}`, {
      data: { username: user.username },});
      window.location.replace("/#/podcast");
    } catch (err) {

    }
  };

  const handleUpdate = async () => {
    try {
      await axiosInstance.put(`/podcasts/${podcast._id}`, {
       username: user.username,
       title:title,
       desc
      });
      //IF WANT TO RELOAD PAGE
      // window.location.reload();
      setUpdateMode(false)
    } catch (err) {
    }
  }

  return (
    <div className="singlePodcast">
        <div className="singlePodcastWrapper">
          {podcast.photo && (
            // <img src={PF + post.photo} alt="" className="singlePostImg" />
            <img src={podcast.photo} alt="" className="singlePodcastImg" />
          )}
          
            {updateMode ? (<input type="text" value={title} className="singlePodcastTitleInput" autoFocus onChange={(e)=>setTitle(e.target.value)}/>) : (
              
           
            <h1 className="singlePodcastTitle">
              {titlePodcast}
              {podcast.username === user?.username && (
            <div className="singlePodcastEdit">
            <FontAwesomeIcon icon={faEdit} className="singlePodcastIcon" onClick={() => setUpdateMode(true)}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTrash} className="singlePodcastIcon" onClick={handleDelete}></FontAwesomeIcon>
            </div>
)}
            </h1>
             )
            }
            <div className="singlePodcastInfo">
                <span className="singlePodcastAuthor">Author: 
                <Link to={`/${podcast.username}`} className="link">
                   <b> {podcast.username}</b>
                  </Link>
                </span>
                
                
                <span className="singlePodcastDate">{moment(podcast.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
            </div>
            {updateMode ? (<textarea className="singlePodcastDescInput" value={desc} onChange={(e)=>setDesc(e.target.value)}/>) : 
            (<p className="singlePodcastDesc">
              {desc}
            </p>)}

         
            
            {updateMode && (
            <button className="singlePodcastButton" onClick={handleUpdate}>Update</button>
            )}
        </div>
    </div>
  )
}
