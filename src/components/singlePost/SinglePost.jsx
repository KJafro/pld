import "./singlePost.css"
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
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [updateMode, setUpdateMode] = useState(false)
  let moment = require ('moment');

  useEffect(() => {
    const getPost = async () => {
      const res = await axiosInstance.get("/posts/" + path)
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
    };
    getPost()
  },[path])
  useEffect(() => {
    document.title = `Everyday Being | ${post.title}`
  }, []);

  const handleDelete = async() => {
    try {
      await axiosInstance.delete(`/posts/${post._id}`, {
      data: { username: user.username },});
      window.location.replace("/#/blog");
    } catch (err) {

    }
  };

  const handleUpdate = async () => {
    try {
      await axiosInstance.put(`/posts/${post._id}`, {
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
    <div className="singlePost">
        <div className="singlePostWrapper">
          {post.photo && (
            // <img src={PF + post.photo} alt="" className="singlePostImg" />
            <img src={post.photo} alt="" className="singlePostImg" />
          )}
          
            {updateMode ? (<input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e)=>setTitle(e.target.value)}/>) : (
              
           
            <h1 className="singlePostTitle">
              {title}
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
                <Link to={`/${post.username}`} className="link">
                   <b> {post.username}</b>
                  </Link>
                </span>
                
                
                <span className="singlePostDate">{moment(post.createdAt).format('MMMM Do YYYY | h:mm a')}</span>
            </div>
            {updateMode ? (<textarea className="singlePostDescInput" value={desc} onChange={(e)=>setDesc(e.target.value)}/>) : 
            (<p className="singlePostDesc">
              {desc}
            </p>)}

         
            
            {updateMode && (
            <button className="singlePostButton" onClick={handleUpdate}>Update</button>
            )}
        </div>
    </div>
  )
}
