import { useRef, useState } from "react"
import React from 'react'
import { useSelector } from "react-redux"
import Img from "../../lazyloadimage/Img";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './style.scss'
import useFetch from "../../hooks/useFetch";
export default function CarouselTop({data,loading, Endpoint}) {
    const [carouselindex,setcarouselindex] =useState(0);
  const carouselContainer = useRef()
  const {url} = useSelector((state)=>state.home)
  const navigate = useNavigate();
  const NavigationLeft =()=>{
   carouselContainer.current.scrollLeft -=1570
  }
  const NavigationRight = ()=>{ 
    setcarouselindex(data.length)
   if(carouselindex < data.length)
    {
      setcarouselindex(carouselindex + 1)
    carouselContainer.current.scrollLeft +=1570}
    if(carouselindex >= data.length)
    { 
    carouselContainer.current.scrollLeft -=4000 }
    else 
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
    <ArrowBackIosNewIcon className="carouselTopLeftNav"
      onClick={NavigationLeft}/>
            <ArrowForwardIosIcon className="carouselTopRightNav"
      onClick={ NavigationRight}/>
    <div className="carousel" ref={carouselContainer}>
    {!loading?(
    <div className="carouselItems">
     {data?.map((items)=>{
const posterUrl = url.poster + items.poster_path
      return(
        <div onClick={()=>navigate(
          `/${items.media_type || Endpoint}/${items.id}`
        )}  key={items.id} className="carouselItems"  >
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
