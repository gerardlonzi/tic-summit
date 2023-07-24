import React from 'react'
import AA from './AA.png'

export default function Answer() {
  return (
    <>
        <div className="espace">
            <p className="es">
                Join the Next Generation of Tech Entrepreneurs In Cameroon.
            </p>
            <p className="aq">
                Register Today with the link below

            </p>
            <span className='btn'>
                Apply Now
            </span>
        </div>
        <div className='answer'>
       <p className='answ'> Answers to some  <br />most <span> commonly</span> <br /> <span> asked </span>questions </p>
           <div className="aros">
                <Ans />
                <Ans />
                <Ans />
                <Ans />
            </div>
        </div>
    </>
  )
}

function Ans(){
    return(
        <div className='tiret'>
            <p>I am an art student but I have an idea, can I apply?</p>
            <img src={AA} />
        </div>
    )
}
