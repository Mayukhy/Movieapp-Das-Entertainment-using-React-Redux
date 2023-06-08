import React, { useState } from 'react'
import Movipopup from '../../moviepopup/Movipopup'
import './style.scss'
import Img from '../../../../lazyloadimage/Img'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
export default function OficialVideos({data,loading}) {
    const [showpopup, setshowpopup] = useState(false)
    const [vidId,setvidId] = useState(null)
   //  const openPopup = ()=>{
   //      setshowpopup(true)
   //      setvidId(video.key)
   //  }
  return (
    
   <div className="contentWraper">

        <h4>Official Videos</h4>
     {!loading?(
        <div className="vidos">
            {data?.results?.map((video,id)=>(
               <div key={id} onClick={()=>{
                setshowpopup(true)
                setvidId(video.key)
               }} className="viditems">
                <div className="vidtumbnails">
                <Img src={`http://img.youtube.com/vi/${video.key}/mqdefault.jpg`}/>
                <span className="playbtn">
               <OndemandVideoIcon/>
               </span>
                </div>
           

               </div> 
            ))}
        </div>
        
     ):(
        <div className="loadingskl">
        
        </div>
     )}
             <Movipopup  showpopup={showpopup} setshowpopup={setshowpopup} 
            vidId={vidId} setvidId={setvidId}/>
   </div>

  )
}
