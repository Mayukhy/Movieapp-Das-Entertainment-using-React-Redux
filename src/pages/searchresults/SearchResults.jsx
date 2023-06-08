import React, { useState,useEffect } from 'react'
import { useNavigate,useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import './style.scss';
import Img from '../../lazyloadimage/Img';
import useFetch from '../../hooks/useFetch';
import { fetchFromApi } from '../../utls/Api';
import MovieCard from '../moviecard/MovieCard';
function SearchResults() {
  const [pageNum,setpageNum] = useState(1)
  const {query} = useParams();
  const [loading,setLoading] = useState(false);
  const [data , setdata] = useState();
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
  const fetchData = ()=>{
    setLoading(true)
  fetchFromApi(`/search/multi?query=${query}&page=${pageNum}`)
  .then((res)=>{
      setdata(res)
      setpageNum((prev) => prev +1)
    setLoading(false)
  })
  }
  useEffect(()=>{
  fetchData();
  },[query])
  const fetchpageNum = ()=>{
    fetchFromApi(`/search/multi?query=${query}&page=${pageNum}`)
    .then((res)=>{
      if (data?.results) {
        setdata({
         ...data , results: [...data,res.results]
        })
      }
      else{
        setdata(res)
      }
      setpageNum((prev) => prev +1)
    })
    }
    useEffect(()=>{
      fetchpageNum();
      },[pageNum])
  return (
    <div>
      {!loading? (
      <div className='allitems'>
      {data?.results?.map((item,id)=>(
        <MovieCard key={id} data={item} query={query} loading={loading}/>
      ))}
      </div>) 
      :(
        <div className="sclitems">
        <div className="loadingSkeleton">
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
      </div>
      <div className="loadingSkeleton">
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
      </div>
      <div className="loadingSkeleton">
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
      </div>
      <div className="loadingSkeleton">
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
      </div>
      </div>

      ) }
      
    </div>
  )
}

export default SearchResults
