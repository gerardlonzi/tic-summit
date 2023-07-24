import React from 'react'
import bi1 from './bi_linkedin.png'
import bi2 from './bi_twitter.png'
import ve from './Ve.png'
import ve1 from './Ve1.png'

export default function Footer() {
    const programs =['Tic Summit','Tic Startups Fellowship','Tic Bootcamps','Tech Services']
    const link= ['Home','About','Past Event','Curricullum']
    const contact = ['CMR, Yde Politech','contact@ticsummit.com','(237) 673 364 294','(237) 675 169 170']
    const social = [bi1,bi2,ve,ve1]

    
  return (
    <>
        <div className = 'fo'>
            <div className="foot">
                <div className="b1">
                    <h2>Our Programs</h2>
                    {programs.map((n,index)=>(
                        <ul key={index}><li >{n}</li></ul>
                    ))}
                </div>
                <div className="b2">
                    <h2>Useful Links</h2>
                    {link.map((n,index)=>(
                        <ul key={index}><li >{n}</li></ul>
                        ))}
                </div>
                <div className="b3">
                    <h2>Contact Us</h2>
                    {contact.map((n,index)=>(
                        <ul key={index}><li >{n}</li></ul>
                        ))}
                </div>
                <div className="b4">
                    <h2>Socials</h2>
                    <div className="img">
                        {social.map((n,index)=>(
                            <img src={n} alt="" key={index} />
                            ))}
                    </div>        
                    <p>@ticfoundation</p>    
                </div>
            </div> 
            <p className='pp'>@2023 Tic Foundation- <span>All Right Reserved</span></p>           
        </div>

    
    </>
  )
}
