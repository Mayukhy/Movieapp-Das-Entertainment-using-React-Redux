import React, { useEffect, useState } from 'react'
import SwitchTabs from '../../../component/switchtabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import { fetchFromApi } from '../../../utls/Api';
import SwitchtabsPopular from '../../../component/switchtabs/SwitchtabsPopular';
import CarouselPop from '../../../component/carousel/CarouselPop';
import Carousel from '../../../component/carousel/Carousel';
export default function Popular() {
    const [Endpoint,setEndpoint] = useState('movie')
    const{data,loading} = useFetch(`/${Endpoint}/popular`);

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
      <span className="carouselTitle" style={{
        marginTop:'50px'
      }}>Now Popular</span>
      <SwitchtabsPopular data={['Movies','Tv']}
       onTabchange={onTabchange} />
    </div>
    <CarouselPop Endpoint={Endpoint} data={data?.results} loading={loading}/>
    </>
  )
}
