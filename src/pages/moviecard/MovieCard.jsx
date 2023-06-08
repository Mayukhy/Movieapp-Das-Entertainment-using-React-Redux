import React from 'react'
import { useSelector } from "react-redux"
import Img from "../../lazyloadimage/Img";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { fetchFromApi } from '../../utls/Api';
import StockImg from '../img/img5.png'
export default function MovieCard({data,loading}) {
    const {url} = useSelector((state)=>state.home)
    const navigate = useNavigate();
    const posterurl =  data.poster_path? url?.poster + data?.poster_path :StockImg  ;
    
  return (
    <div className='movieitems'>
<div onClick={()=>navigate(
          `/${data?.media_type}/${data?.id}`
        )}className="searchItems"  >
        <div className="posterBlock">
          <div><Img className='poster' src={posterurl}/></div>
         <div className="Detail" >
          <div className="details">
          <span><img className='imdb' src="https://cdn.iconscout.com/icon/free/png-256/free-imdb-10-624846.png"/></span>
          <span className="reating"> <h4>{data?.vote_average?.toFixed(1)}
          </h4></span>
          </div>
          <span className="Title">
            {data?.title||data?.name}
          </span>
          <span className="date">
            {dayjs(data?.release_Date).format("MMM, DD YYYY")}
          </span>
         
         </div>
         
        </div>
         </div>

    </div>
  )
}
