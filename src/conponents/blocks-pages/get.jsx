import React from 'react'
import aro from './aro.svg'
import peop from './peop.svg'
import solar from './solar.svg'
import icon from './icon.svg'


export default function Get() {
  return (
    <>
     <div className ='gets'>
        <div className="elem1">
            <div className='tern'>
            <h2>What you’ll </h2> <span>Get</span>
            </div>
            <div className="ment">
              <div className='sec'>
                <img src={solar} alt="" />
                <p>1 Million to be shared among the finalists</p>
              </div>
              <div className='sec'>
                <img src={icon} alt="" />
                <p>3 Days deep dive training into product  development at high tech centers</p>
              </div>
            </div>    
        </div>
        <div className="elem2 ment">
              <div className='sec ranh'>
                <img src={peop} alt="" />
                <p>Mentorship from tech industry professionals</p>
              </div>
              <div className='sec'>
                <img src={aro} alt="" />
                <p>Opportunity advance your projects in our Startup  Accelerator Programs</p>
              </div>
        </div>
      </div>
    </>
  )
}
