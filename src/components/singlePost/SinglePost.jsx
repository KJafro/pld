import "./singlePost.css"
import { axiosInstance } from "../../config"
import { useLocation } from "react-router-dom"
import Sidebar from "../../components/sidebar/Sidebar"
import { useEffect, useState, useContext } from "react"
import { Context } from "../../context/Context";
import {Link} from "react-router-dom"

export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({})
  const PF = "https://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [updateMode, setUpdateMode] = useState(false)

  useEffect(() => {
    const getPost = async () => {
      const res = await axiosInstance.get("/posts/" + path)
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
    };
    getPost()
  },[path])

  const handleDelete = async() => {
    try {
      await axiosInstance.delete(`/posts/${post._id}`, {
      data: { username: user.username },});
      window.location.replace("/");
    } catch (err) {

    }
  };

  const handleUpdate = async () => {
    try {
      await axiosInstance.put(`/posts/${post._id}`, {
       username: user.username,
       title:title,
       desc,
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
            <i className="singlePostIcon fa-regular fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>
            <i class="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
            </div>
)}
            </h1>
             )
            }
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: 
                <Link to={`/?user=${post.username}`} className="link">
                  <b>{post.username}</b>
                  </Link>
                </span>
                <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
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
