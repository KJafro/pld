import React from 'react'
import './push.css'
import TopBar from '../../components/topbar/TopBarPodcast'

export default function Push() {
  return (
    <>
    <TopBar/>
    <div className="pushContainer">
    <button className='pushBtn'>Push</button>
    </div>
    </>
  )
}
