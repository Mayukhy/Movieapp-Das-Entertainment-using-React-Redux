import React, { useState } from 'react'
import ReactPlayer from "react-player";
import './style.scss'

export default function Movipopup({vidId,setvidId,video,showpopup,setshowpopup}) {
  const [background , setbackground] = useState('vidbackground')
    const closepopup =()=>{
    setshowpopup(false)
    setvidId(null)

  }
    return (
        <>
    <div onClick={closepopup} className={  vidId?`vidsection ${background}` : "vidsection defaultbg"}></div>
            <div className={vidId?'popupsection popupvideo': 'popupsection'}>
            <div className='popupitem'>
      <ReactPlayer  url={`https://www.youtube.com/watch?v=${vidId}`} controls 
      playing={true} 
      />
    </div>
    </div>
    </>
    


  )
}
