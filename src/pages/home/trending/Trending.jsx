import React, { useEffect, useState } from 'react'
import SwitchTabs from '../../../component/switchtabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../component/carousel/Carousel';
import { fetchFromApi } from '../../../utls/Api';
export default function Trending() {
    const [Endpoint,setEndpoint] = useState('day')
    const{data,loading} = useFetch(`/trending/all/${Endpoint}`);

    const onTabchange =(tab)=>{
    if(tab === 'Day'){
        setEndpoint('day')
    }
    else if (tab === 'Week') {
        setEndpoint('week')
    }
    else{
        setEndpoint('day')
    }
    }
  return (
    <>
    <div className='carouselSection'>
      <span className="carouselTitle">Trending</span>
      <SwitchTabs data={['Day','Week']}
       onTabchange={onTabchange} />
    </div>
    <Carousel data={data?.results}
    Endpoint={Endpoint} loading={loading}/>
    </>
  )
}
