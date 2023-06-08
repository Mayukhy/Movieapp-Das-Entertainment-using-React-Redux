import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import "./style.scss";
import Img from "../../../lazyloadimage/Img";
import useFetch from "../../../hooks/useFetch";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import StockImg from '../../img/img5.png'
import StockImg1 from '../../img/img6.png'
import Movipopup from "../moviepopup/Movipopup";
const DetailsBanner = ({ video, crew , cast }) => {
    const [showpopup, setshowpopup] = useState(false)
    const [vidId,setvidId] = useState(null)
    const openPopup = ()=>{
        setshowpopup(true)
        setvidId(video.key)
    }
    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };
   const director =  crew?.filter((dr)=>(
        dr.job === "Director"
   ))
    const writer =  crew?.filter((wt)=>{
        wt.job === "Screenplay"||wt.job === "Story"||wt.job === "Writer"
    })
    const {url} = useSelector((state) =>state.home);
    const {mediaType,id} = useParams()
    const {data,loading} = useFetch(`/${mediaType}/${id}`)

    const colsepopup =()=>{
        setshowpopup(false)
    
    }

    return (
        <div  className="detailsBanner">
            {!loading ? (
                <>
                <div className="backdrop-img">
                    <Img src={url.backdrop + data?.backdrop_path}/>
                </div>
                <div className="opacity-layer"></div>
                <div className="content">
                    <div className="left">
                    <Img className='posterImg' src={data?.poster_path? url.backdrop + data?.poster_path : StockImg}/>   
                    </div>
                    <div className="right">
                        <div className="title">
                        {
                       `${data?.name||data?.title} (${dayjs(data?.release_data).format("YYYY")})`
}            </div>
         <div className="subtitle">
            {data?.tagline}
         </div>
         <div className="alldetail">
         <div className="reldate">
            <span className="date">Release Date :   
            </span>
            <span>{dayjs(data?.release_data).format('MMM DD YYYY')}</span>
         </div>
         <div className="reldate">
            <span className="date">Runtime:   
            </span>
            <span>{toHoursAndMinutes(data?.runtime)}</span>
         </div>
         </div>
         <div className="details">
          <span><img className='imdb' src="https://cdn.iconscout.com/icon/free/png-256/free-imdb-10-624846.png"/></span>
          <span className="reating"> <h4>{data?.vote_average.toFixed(1)}
          </h4></span>
          <span className="playbtn">
            <PlayCircleOutlineIcon onClick={openPopup}/>
         </span>
          </div>

         {
         director?.length >0 &&
        <div className="info">
         <span className="textbold">Director   : </span>
         <span className="text">
            {director?.map((d,i)=>(
            <span key={i}>
                {d.name}
            </span> 
         ))}
         </span>
         <div className="castdetail">
            <h2>Top Casts</h2>
            <div className="cast">
            {cast?.map((actors,idx)=> {
            let profileUrl = actors?.profile_path? url?.profile + actors?.profile_path : StockImg1;
            return(
               <div key={idx} className="castinfo">
                <div className="castimg">
                    <Img className='poster' src={profileUrl}/>
                </div>
                <div className="names" style={{
                    marginTop:'10px',
                    height:'80px'
                    
                }}>
                <div className="realname">
                {actors?.name}
                </div>
                <div className="ch">
                {actors?.character.slice(0,20)}
                </div>
                </div>

               </div> 
            )})}
            </div>
            </div>
         </div>

         }

         {/* {
         writer?.length >0 &&
        <div className="info">
         <span className="textbold">Writer : </span>
         <span className="text">
            {writer?.map((d,i)=>(
            <span key={i}>
                {d.name}
            </span> 
         ))}
         </span>
         </div>
         } */}
         <Movipopup  showpopup={showpopup} setshowpopup={setshowpopup} video ={video}
         vidId={vidId} setvidId={setvidId}/>
         </div>
    </div>
                </>
            ) : (
                <div className="detailsBannerSkeleton">
                    
                        <div className="left skeleton"></div>
                        <div className="right">
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                        </div>
                </div>
            )}
        </div>
    );
};

export default DetailsBanner;

