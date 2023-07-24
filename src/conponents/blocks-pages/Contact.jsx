import React from 'react'

export default function Contact() {
  return (
   <>
   <p className="con">Contact Us </p>
   <div className="drop">
        <p>Drop A Line</p>
    
        <div className="input">
                    <input type="text" placeholder='Name' className='name'/>
                    <input type="text"  className='Prename' placeholder='Prename'/>
                    <textarea placeholder='Message'></textarea>
        </div>
        <button className='btn2'>Send</button>

    </div>
   </>
  )
}
