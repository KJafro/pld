import React from 'react'
import './unsubscribe.css'
import TopBar from '../../components/topbar/TopBar'

export default function Unsubscribe() {
  return (
    <>
    <TopBar/>
    <div className='unSubscribeContainer'>
        <div className='unSubscribeMain'><button className='unSubscribeBtn'>Unsubscribe</button></div>
    </div>
    </>
  )
}
