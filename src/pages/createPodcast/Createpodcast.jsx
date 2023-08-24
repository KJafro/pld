import { useState, useEffect } from "react"
import "./createpodcast.css"
import { axiosInstance } from "../../config";
import { Context } from './../../context/Context';
import { useContext } from "react";
import TopBarPodcast from "../../components/topbar/TopBarPodcast"
import PodcastModal from "../../components/modal/PodcastModal"
import React from 'react';



export default function Createpodcast() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [photo, setPhoto] = useState("")
  const [file, setFile] = useState(null)
  const { user } = useContext(Context)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [dash, setDash] = useState(false)
  
  const newPodcast = {
    username: user.username,
    title,
    desc,
    photo
  };

  useEffect(() => {
    document.title = "Everyday Being | Create Podcast"
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    if(title.length===0||desc.length===0||photo.length===0){
      setError(true)
      setLoading(false)
    } else if (title.includes('-')) {
      setError(false)
      setDash(true)
      setLoading(false)
    } else {
      const res = await axiosInstance.post("/podcasts", newPodcast);
      window.location.replace("/#/podcast/");
      setDash(false)
      setLoading(true)
      setError(false)
    }
  }


  return (
    <>
    <TopBarPodcast/>
    <div className="writeContainer">
    <div className="leftWrite">
      <div className="leftBackground">
        <div className="leftTitle">
        ADD PODCAST
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
            <PodcastModal/>
                <label htmlFor="fileInput">
                {/* <i className="writeIcon fa-sharp fa-solid fa-plus"></i> */}
                </label>
                {/* <input type="file" id="fileInput" style={{display: "none"}} onChange={e=> setFile(e.target.files[0])}/> */}
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
            </div>
            <div className="writeFormGroup">
            <input type="text" className ="writeInput" placeholder="Spotify Link" onChange={e=>setPhoto(e.target.value)}/>
                <textarea placeholder="Podcast description..." type="text" className="writeInput writeText" id="podcastTxt" onChange={e=>setDesc(e.target.value)}></textarea>
                <button className="writeSubmit" type="submit">{loading ? ("Adding Podcast...") : "Submit"}</button>
                {error?
          <label className="errortxt" style={{ color: "red", textAlign: "center", marginTop: "20px", fontSize: "20px" }}>Please fill all available fields</label>:""}
                {dash?
          <label className="errortxt" style={{ color: "red", textAlign: "center", marginTop: "20px", fontSize: "20px" }}>You can't use a dash/hyphen in the title</label>:""}
          
            </div>
        </form>
    </div>
    </div>
    </div>
    </>
  )
}
