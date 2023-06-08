import React from 'react'
import Herobanner from './herobanner/Herobanner'
import './style.scss';
import Trending from './trending/Trending'
import Popular from './trending/Popular';
import TopRated from './trending/TopRated';
function Home() {
  return (
    <div className='homemain' style={{
    marginBottom:'50px',
    }}>
        <Herobanner/>
        <Trending/>
        <Popular/>
        <TopRated/>
        
    </div>
  )
}

export default Home
