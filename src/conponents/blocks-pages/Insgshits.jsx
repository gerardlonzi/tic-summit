import React from 'react'
import inno from './innovate.png'
import brein from './brain.png'
import swt from './switch.png'

export default function Insights() {
  return (
   <>
   <div className="insig">
     <h1>More <br /><span>Insights</span></h1>
     <p>Learn Design Thinking from <br />
        Industrial Professionals</p>
   </div>
   <div className="bloctxt">
        <Text img = {inno} title ={'Ideate'} />
        <Text img = {brein} title ={'Actuate'} />
        <Text img = {swt} title ={'innovate'} />
   </div>
   <div className='elig'><p><span> Eligibility</span> Requirements</p></div>
   <div className="space">
        <Space number={'01'} title={'Lorem ipsum'} />
        <Space number={'02'} title={'Lorem ipsum'} />
        <Space number={'03'} title={'Lorem ipsum'} />


   </div>

   </>
  )
}

function Text({img,title}){
    return(
        <>
            <div className="alltxt">
                <img src={img} alt="" />
                <div className="txtwrit">
                    <h2>{title}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Arcu scelerisque mi sit adipiscing nibh ac montes pellentesque. Eget commodo vel consequat et. Id lectus mauris est ultrices sem donec dolor. Nisl ultrices blandit amet urna. Morbi tortor ut interdum cursus. Donec nulla bibendum sit ut phasellus. </p>
                </div>
            </div>
        
        </>

    )
}
function Space({number,title}){
    return(
        <>
        <div className="Allcircle">
                <div className="circle">{number}</div>
                <div className="circlewrit">
                    <h2>{title}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Arcu scelerisque mi sit adipiscing nibh ac montes pellentesque. Eget commodo vel consequat et. Id lectus mauris est ultrices sem donec dolor. Nisl ultrices blandit amet urna. Morbi tortor ut interdum cursus. Donec nulla bibendum sit ut phasellus.  </p>
                </div>
            </div>
        
        </>
    )
}