import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import './style.scss';
import useFetch from '../../../hooks/useFetch';
import Img from '../../../lazyloadimage/Img';
function Herobanner() {
  const navigate = useNavigate();
  const [background,setBackground] = useState('')
  const [query,setQuery] = useState('')
  const {data,loading}=useFetch('/movie/upcoming')
  
  const {url} = useSelector((state) =>state.home);
  useEffect(()=>{
    //To build an image URL, you will need 3 pieces of data. The base_url, size and file_path
  const bg =url.backdrop + data?.results[Math.floor(Math.random()*20)]?.backdrop_path
  setBackground(bg);
  },[data])
  const HandelSubmit =(e)=>{
    if (e.key==='Enter' && query.length>0) {
     navigate(`/search/${query}`) 
    }
  }
  const searchquery =()=>{
    if (query.length >0) {
      navigate(`/search/${query}`) 
    }
  }
  return (
 <div className="heroBanner">
{!loading && <div className="backdrop_img">
    <Img src={background} alt="" />
  </div>}
  <div className="opacity-layer" style={{
    width:'100%'
  }}></div>
  <div className="wrapper">
    <div className="heroBannerContent">
      <span className="title">Welcome</span>
      <span className="subTitle">
        Movies,TV shows & people ,Explor More
      </span>
      <div className="searchInput">
        <input type="text" placeholder='Search Movies Or Tv Shows'
       onChange={(e)=>setQuery(e.target.value)} onKeyUp={HandelSubmit} />
        <button onClick={searchquery} >Search</button>
      </div>
    </div>
  </div>
 </div>
  )
}

export default Herobanner
