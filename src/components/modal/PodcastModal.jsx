import React from 'react'
import { useState } from 'react'
import { FaQuestion } from 'react-icons/fa';
import "./modal.css"

export default function PodcastModal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <div onClick={toggleModal} className="btn-modal">
        <p>Add podcast instructions</p></div>
      

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Adding Podcast (Desktop)</h2>
            <p>1. Visit Everyday Being spotify <a href='https://open.spotify.com/show/5ZLCIJR0FHZLIREjPoTACy'>homepage</a></p>
            <p>2. Click 'more options' (3 dots) on the specific episode</p>
            <p>3. Choose 'share' then 'copy episode link'</p>
            <p>4. Right click on the image and select 'copy image link'</p>
            <p>5. Paste the URL into 'Spotify Link' box</p>
            <hr className='hrModal'/>
            <h2>Adding Podcast (Mobile Web)</h2>
            <p>1. Visit Everyday Being spotify <a href='https://open.spotify.com/show/5ZLCIJR0FHZLIREjPoTACy'>homepage</a></p>
            <p>2. Click 'more options' (3 dots) on the specific episode</p>
            <p>3. Click goto episode</p>
            <p>4. Click 'more options' (3 dots) again and choose share then copy</p>
            <p>5. Paste the URL into 'Spotify Link' box</p>
            <hr className='hrModal'/>
            <h2>Adding Podcast (Mobile App)</h2>
            <p>1. Search Everyday Being on the spotify app</p>
            <p>2. Click the share button (next to the 3 dots) on the specific episode</p>
            <p>3. Click copy link</p>
            <p>4. Paste the URL into 'Spotify Link' box</p>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}
