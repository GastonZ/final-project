import React from 'react'

import './main.css'
import videoBg from "../Main/bugaaa.mp4"

function Main() {
  return (
    <>
    <div className='main'>

    <video src={videoBg} autoPlay loop muted/>
    
    </div>

    </>

  )
}

export default Main