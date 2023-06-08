import React from 'react'
import DetailsBanner from './DetailsBanner/DetailsBanner'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import './style.scss'
import OficialVideos from './DetailsBanner/officialvideos/OficialVideos'
import SimilarMvies from '../similarmovies/SimilarMovies'
function Details() {
  const {mediaType,id} = useParams()
  const {data,loading} = useFetch(`/${mediaType}/${id}/videos`)
  const {data:credits ,loading:creditsloading } = useFetch(`/${mediaType}/${id}/credits`)
  const {data : similar ,loading : similarloaading} = useFetch(`/${mediaType}/${id}/similar`)
  return (
    <div className='detailmain'>
      <DetailsBanner video ={data?.results?.[0]} crew={credits?.crew} cast={credits?.cast}/>
      <OficialVideos data={data} loading={loading}/>
      <SimilarMvies mediaType={mediaType} id={id} data={similar?.results} loading={similarloaading}/>
    </div>
  )
}

export default Details
