import React from 'react'
import v1 from './V1 (1).png'
import v2 from './V1 (2).png'
import v3 from './V1 (3).png'
import v4 from './V1 (4).png'




export default function Slide() {
  return (
    <>
    <div className="event">
        <p>Past Event</p>
    </div>
    <div className="slides">
        <div className="slide">
            <img src={v1} alt="" />
            <img src={v2} alt="" />
            <img src={v3} alt="" />
            <img src={v4} alt="" />
        </div>
    </div>
    
    
    </>
  )
}
