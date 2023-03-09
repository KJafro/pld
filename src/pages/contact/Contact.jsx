import './contact.css'
import TopBarGeneral from "../../components/topbar/TopBarGeneral";
import emailjs from '@emailjs/browser'
import React, { useRef } from 'react'
import { useState } from 'react';

export default function Contact() {
    const form = useRef();
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
      setLoading(true)
      emailjs.sendForm('service_7ifte6p', 'template_hu4cn3k', form.current, 'mw2ABdIxQb7KdYwV_')
        .then((result) => {
            console.log(result.text);
            setLoading(false)
            setSuccess(true);
        }, (error) => {
            console.log(error.text);
            setLoading(false)
            setSuccess(false);
        });
    };
  return (
    <>
    <TopBarGeneral/>
    <div className="contactContainer">
      <div className="leftContact">
      <div className="leftBackground">
        <div className="leftTitle">
        CONTACT US
      </div>
      </div>
      </div>
      <div className="rightContact">
    <div className="write">
      <p className='writePContact'>Please fill out the form below</p>
        <form ref={form} onSubmit={sendEmail} className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                {/* <i className="writeIcon fa-sharp fa-solid fa-plus"></i> */}
                </label>
                {/* <input type="file" id="fileInput" style={{display: "none"}} onChange={e=> setFile(e.target.files[0])}/> */}
                <input type="text" placeholder="Full Name" name="user_name" className="writeInput" autoFocus={true} required/>
            </div>
            <div className="writeFormGroup">
            <input type="text" className ="writeInput" placeholder="Email" name="user_email" required/>
                <textarea placeholder="Write your message..." type="text" name="message" className="writeInput writeText" required></textarea>
                <button className="writeSubmit" type="submit" value="Send">{loading ? ("Submitting...") : "Submit"}</button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px", fontSize: "20px" }}
            >
              Email Received!
             </span>
          )}
            </div>
            
        </form>
    </div>
    </div>
    </div>
    </>
  )
}
