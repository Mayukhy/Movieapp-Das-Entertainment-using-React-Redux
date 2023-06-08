import { useRef } from "react"
import React from 'react'
import { useSelector } from "react-redux"
import Img from "../../lazyloadimage/Img";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './style.scss'
import useFetch from "../../hooks/useFetch";
export default function Carousel({data,loading,Endpoint}) {
  const carouselContainer = useRef()
  const {url} = useSelector((state)=>state.home)
  const navigate = useNavigate();
  const NavigationLeft =()=>{
   carouselContainer.current.scrollLeft -=1570
  }
  const NavigationRight = ()=>{
    carouselContainer.current.scrollLeft +=1570
  }
  const skItem =()=>{
    return(
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="Detail">
          <div className="Title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    )
  }



  return (
    <>
    <ArrowBackIosNewIcon className="carouselLeftNav"
      onClick={NavigationLeft}/>
            <ArrowForwardIosIcon className="carouselRightNav"
      onClick={ NavigationRight}/>
    <div className="carousel" ref={carouselContainer}>
    {!loading?(
    <div className="carouselItems">
     {data?.map((items)=>{
const posterUrl = url.poster + items.poster_path
      return(
        //here this onclick method is worked because of the trending page .
        // this page will show in the trending section then the api is called
        // and from the api the media_type and id will come and
        // navigated to the specific movie of tv show page
        <div onClick={()=>navigate(
          `/${items.media_type}/${items.id}`
        )} key={items.id} className="carouselItems"  >
        <div className="posterBlock">
          <div><Img className='poster' src={posterUrl}/></div>
         <div className="Detail" >
          <div className="details">
          <span><img className='imdb' src="https://cdn.iconscout.com/icon/free/png-256/free-imdb-10-624846.png"/></span>
          <span className="reating"> <h4>{items.vote_average.toFixed(1)}
          </h4></span>
          </div>
          <span className="Title">
            {items.title||items.name}
          </span>
          <span className="date">
            {dayjs(items.release_Date).format("MMM, DD YYYY")}
          </span>
         
         </div>
         
        </div>
         </div>
      )

})}
    </div>
    ):(
      <div className="loadingSkeleton">
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
      </div>
    )}
  </div>
  </>
  )
}
