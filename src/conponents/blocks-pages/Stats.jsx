import React from 'react'

export default function Stats() {
  return (
    <>
        <p className='ours'>Ours stats</p>
        <div className="stat">
            <div className="txtes">
                <p>What we’ve done over <br /> the last <br />
                <span> 3 Years</span></p>
            </div>
            <div className='Allsqrt'>
                <Squares />
                <Squares />
                <Squares />
                <Squares />
            </div>
        </div>
    
    </>
  )
}

function Squares(){
    return(
        <div className = 'sqrt'> </div>

    )
}

