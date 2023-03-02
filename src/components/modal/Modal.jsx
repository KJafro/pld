import React from 'react'
import { useState } from 'react'
import { FaQuestion } from 'react-icons/fa';
import "./modal.css"

export default function Modal() {
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
        <p>Add image instructions</p></div>
      

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Adding Images (Desktop)</h2>
            <p>1. Goto a picture hosting site such as <a href='https://www.unsplash.com'>Unsplash</a> or <a href='https://www.pexels.com'>Pexels</a></p>
            <p>2. Search for any category of image</p>
            <p>3. Click on chosen image</p>
            <p>4. Right click on the image and select 'copy image link'</p>
            <p>5. Paste the URL into 'Image Link' box</p>
            <hr className='hrModal'/>
            <h2>Adding Images (Mobile)</h2>
            <p>1. Goto a picture hosting site such as <a href='https://www.unsplash.com'>Unsplash</a> or <a href='https://www.pexels.com'>Pexels</a></p>
            <p>2. Search for any category of image</p>
            <p>3. Click on chosen image</p>
            <p>4. Tap and hold on image and select 'copy'</p>
            <p>5. Paste the URL into 'Image Link' box</p>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}
