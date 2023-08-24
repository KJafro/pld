import { useState, useEffect } from "react"
import "./write.css"
import { axiosInstance } from "../../config";
import { Context } from './../../context/Context';
import { useContext } from "react";
import TopBar from "../../components/topbar/TopBar"
import Modal from "../../components/modal/Modal"
import { FaQuestion } from "react-icons/fa"

export default function Write() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [photo, setPhoto] = useState("")
  const [file, setFile] = useState(null)
  const { user } = useContext(Context)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.title = "Everyday Being | Create Post"
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    if(title.length===0||desc.length===0||photo.length===0){
      setError(true)
    }
    const newPost = {
      username: user.username,
      title,
      desc,
      photo
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axiosInstance.post("/upload", data);
      } catch (err) {

      }
    }
    try {
      const res = await axiosInstance.post("/posts", newPost);
      // window.location.replace("https://everydaybeingfront.onrender.com/post/" + res.data._id);
      window.location.replace("/blog");
    } catch (err) {
      setLoading(false)
    }
  };
  return (
    <>
    <TopBar/>
    <div className="writeContainer">
      <div className="leftWriteBlog">
      <div className="leftBackground">
        <div className="leftTitle">
        CREATE POST
      </div>
      </div>
      </div>
      <div className="rightWrite">
    <div className="write">
      <p className="writePContact">Click the link below for instructions</p>
      {file && <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      }
        <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
            <Modal/>
                <label htmlFor="fileInput">
                {/* <i className="writeIcon fa-sharp fa-solid fa-plus"></i> */}
                </label>
                {/* <input type="file" id="fileInput" style={{display: "none"}} onChange={e=> setFile(e.target.files[0])}/> */}
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
            </div>
            <div className="writeFormGroup">
            <input type="text" className ="writeInput" placeholder="Image Link" onChange={e=>setPhoto(e.target.value)}/>
                <textarea placeholder="Write your post..." type="text" className="writeInput writeText" onChange={e=>setDesc(e.target.value)}></textarea>
                <button className="writeSubmit" type="submit">{loading ? ("Adding Post...") : "Submit"}</button>
                {error?
          <label className="errortxt" style={{ color: "red", textAlign: "center", marginTop: "20px", fontSize: "20px" }}>Please fill all available fields</label>:""}
            </div>
        </form>
    </div>
    </div>
    </div>
    </>
  )
}
