import React, { useEffect, useState } from 'react'
import SwitchTabs from '../../../component/switchtabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import { fetchFromApi } from '../../../utls/Api';
import SwitchtabsPopular from '../../../component/switchtabs/SwitchtabsPopular';
import CarouselTop from '../../../component/carousel/CarouselTop';

export default function TopRated() {
    const [Endpoint,setEndpoint] = useState('movie')
    const{data,loading} = useFetch(`/${Endpoint}/top_rated`);

    const onTabchange =(tab)=>{
    if(tab === 'Movies'){
        setEndpoint('movie')
    }
    else if (tab === 'Tv') {
        setEndpoint('tv')
    }
    else{
        setEndpoint('tv')
    }
    }
  return (
    <>
    <div className='carouselSection'>
      <span className="carouselTitle"  style={{
      marginTop:'50px'
    }}>Top Rated</span>
      <SwitchtabsPopular data={['Movies','Tv']}
       onTabchange={onTabchange} />
    </div>
    <CarouselTop Endpoint={Endpoint} data={data?.results} loading={loading}/>
    </>
  )
}
