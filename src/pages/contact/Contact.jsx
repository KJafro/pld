import './contact.css'
import TopBar from "../../components/topbar/TopBar";
import emailjs from '@emailjs/browser'
import React, { useRef } from 'react'

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_7ifte6p', 'template_hu4cn3k', form.current, 'mw2ABdIxQb7KdYwV_')
        .then((result) => {
            console.log(result.text);
            window.location.replace("https://everydaybeingfront.onrender.com/#/contactsuccess/");
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <>
    <TopBar/>
    <div className="write">
      <h1>Contact Us</h1>
        <form ref={form} onSubmit={sendEmail} className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                {/* <i className="writeIcon fa-sharp fa-solid fa-plus"></i> */}
                </label>
                {/* <input type="file" id="fileInput" style={{display: "none"}} onChange={e=> setFile(e.target.files[0])}/> */}
                <input type="text" placeholder="Full Name" name="user_name" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
            <input type="text" className ="writeInput" placeholder="Email" name="user_email"/>
                <textarea placeholder="Write your message..." type="text" name="message" className="writeInput writeText"></textarea>
                <button className="writeSubmit" type="submit" value="Send">Submit</button>
            </div>
            
        </form>
    </div>
    </>
  )
}
