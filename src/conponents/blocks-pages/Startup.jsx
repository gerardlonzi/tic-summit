import React from 'react'
import F1 from './F1.png'
import F2 from './F2.png'

export default function Startup() {
    const element = [
        {
            img: F1,
            link:'https://www.skaleway.com',
            text:'Skaleway is a Digital Product Design and Development Agency that consists of forward thinking developer, dedicated to providing the best digital products and services deliverable. We work with startups and businesses to help them scale up the standards of services provided. Our services range from User and Market research to UI/UX, Graphics and Web Designing to Web Development. We Design and Develop responsive, high standard and efficient cross platform digital products. ',
        },
        {
            img: F2,
            link:'https://www.swimscompany.com',
            text:'SWIMS stands for Smart Waste Intelligent Monitoring System, and we specialize in providing our customers with high-quality hardware and software products designed to make waste disposal and collection easier, more efficient, and more sustainable. Our product line includes a range of innovative solutions, such as smart dustbins, smart dustbin sensors (which are specially designed for commercial use), and DTRACKER (a web platform designed to facilitate waste disposal in Africa). ',
        }
    ]
  return (
    <>
        <p className="star">Somes Our Startups</p>
        <div className="imgStar">
            {element.map((n,index)=>(
                <div className="bloc1" key={index}>
                     <img src={n.img} alt="" /> 
                     <p className='link'>Visit Size <a href=''>{n.link}</a> </p>
                     <p className='tx'>{n.text}</p>
                     <a href="" className="lien">learn more</a>  
                </div>
            ))}
        </div>
    
    </>
  )
}
