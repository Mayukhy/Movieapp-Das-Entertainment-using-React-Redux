import { useRef,useState } from "react"
import React from 'react'
import { useSelector } from "react-redux"
import Img from "../../lazyloadimage/Img";
import { useNavigate ,useParams} from "react-router-dom";
import dayjs from "dayjs";
import './style.scss'
import StockImg from '../img/img5.png'
export default function SimilarMvies({data,loading,mediaType,id}) {
const title = mediaType === 'tv'?"Semilar Tv Shows": "Similar Movies"
    // const {mediaType,id} = useParams()
  const carouselContainer = useRef()
  const {url} = useSelector((state)=>state.home)
  const navigate = useNavigate();
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
    <h4 className="titlesim">{title}</h4>
    <div className="carousel" ref={carouselContainer}>

    {!loading?(
    <div className="carouselItems">
     {data?.map((items)=>{
const posterUrl =  items.poster_path? url?.poster + items?.poster_path :StockImg  ;
      return(
        //here this onclick method is worked because of the trending page .
        // this page will show in the trending section then the api is called
        // and from the api the media_type and id will come and
        // navigated to the specific movie of tv show page
        <div onClick={()=>navigate(
          `/${items.media_type || mediaType}/${items.id}`
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
