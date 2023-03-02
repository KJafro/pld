import "./singlePodcast.css"
import { axiosInstance } from "../../config"
import { useLocation } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import { Context } from "../../context/Context";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({})
  // const PF = "https://localhost:5000/images/";
  const { user } = useContext(Context);
  const [titlePodcast, settitlePodcast] = useState("")
  const [descPodcast, setdescPodcast] = useState("")
  const [updateMode, setUpdateMode] = useState(false)
  let moment = require ('moment');

  useEffect(() => {
    const getPodcast = async () => {
      const res = await axiosInstance.get("/podcasts/" + path)
      setPodcast(res.data)
      settitlePodcast(res.data.titlePodcast)
      setdescPodcast(res.data.descPodcast)
    };
    getPost()
  },[path])
  useEffect(() => {
    document.title = `Everyday Being | ${podcast.titlePodcast}`
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
       titlePodcast:titlePodcast,
       descPodcast
      });
      //IF WANT TO RELOAD PAGE
      // window.location.reload();
      setUpdateMode(false)
    } catch (err) {
    }
  }

  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
          {post.photo && (
            // <img src={PF + post.photo} alt="" className="singlePostImg" />
            <img src={post.photo} alt="" className="singlePostImg" />
          )}
          
            {updateMode ? (<input type="text" value={titlePodcast} className="singlePostTitleInput" autoFocus onChange={(e)=>settitlePodcast(e.target.value)}/>) : (
              
           
            <h1 className="singlePostTitle">
              {titlePodcast}
              {post.username === user?.username && (
            <div className="singlePostEdit">
            <FontAwesomeIcon icon={faEdit} className="singlePostIcon" onClick={() => setUpdateMode(true)}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTrash} className="singlePostIcon" onClick={handleDelete}></FontAwesomeIcon>
            </div>
)}
            </h1>
             )
            }
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: 
                <Link to={`/${podcast.username}`} className="link">
                   <b> {podcast.username}</b>
                  </Link>
                </span>
                
                
                <span className="singlePostDate">{moment(post.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
            </div>
            {updateMode ? (<textarea className="singlePostDescInput" value={descPodcast} onChange={(e)=>setdescPodcast(e.target.value)}/>) : 
            (<p className="singlePostDesc">
              {descPodcast}
            </p>)}

         
            
            {updateMode && (
            <button className="singlePostButton" onClick={handleUpdate}>Update</button>
            )}
        </div>
    </div>
  )
}
