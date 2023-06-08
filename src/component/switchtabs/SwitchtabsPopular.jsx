import React from 'react'
import './style.scss'
import { useState } from "react";
export default function SwitchtabsPopular({data,onTabchange}) {
    const [selected,setselected] = useState('Movies')
    return (
    <div style={{
      marginTop:'50px'
    }} className='tabitem'>
      {
        data.map((tab,idx) =>(
            <span key={idx} className={selected===tab?'items bgchange':'items'} onClick={()=>{
                setselected(tab)
                onTabchange(tab,idx)
            }}>{tab}</span>
        ))
      }
    </div>
  )
}