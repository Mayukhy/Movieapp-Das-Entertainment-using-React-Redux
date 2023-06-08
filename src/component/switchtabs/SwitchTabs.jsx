import React from 'react'
import './style.scss'
import { useState } from "react";
export default function SwitchTabs({data,onTabchange}) {
    const [selected,setselected] = useState('Day')
    return (
    <div className='tabitem'>
      {
        data.map((tab,idx) =>(
            <span key={idx} className={selected===tab?'items bgchange':'items'} onClick={()=>{
                setselected(tab)
                onTabchange(tab)
            }}>{tab}</span>
        ))
      }
    </div>
  )
}
