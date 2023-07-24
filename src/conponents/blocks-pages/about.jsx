import React from 'react'
import los from './4TH.png'
import lim from './EDITION.png'

export default function About() {
  return (
   <>
     <div className='about'>
        <h2>About</h2>
        <div className="blocks">
            <div className="bloc">
                <img src={los} alt="" />
                <p><img src={lim} alt="" /></p>
            </div>
            <div className="bloc2">
              <h1>About Summit’24</h1>
              <p>Lorem ipsum dolor sit amet consectetur. Pulvinar augue potenti dolor fames accumsan risus. Cursus faucibus eu enim commodo. Eu risus ac nullam fringilla nisl. Nisi vestibulum sapien phasellus ullamcorper cursus. Nulla vitae feugiat et purus amet tincidunt mattis. Lacus dignissim in vel pharetra magna. Id mollis dui arcu massa rutrum sit tellus morbi. Et molestie lacus a cursus. Aenean pretium non eu diam.</p>
              <button>View fast <svg xmlns="http://www.w3.org/2000/svg" width="33" height="34" viewBox="0 0 33 34" fill="none">
              <path d="M7.1666 18.4167L22.0599 18.4167L15.5533 25.33C15.0333 25.8825 15.0333 26.7892 15.5533 27.3417C15.6766 27.473 15.8231 27.5772 15.9844 27.6483C16.1457 27.7194 16.3186 27.756 16.4933 27.756C16.6679 27.756 16.8408 27.7194 17.0021 27.6483C17.1634 27.5772 17.3099 27.473 17.4333 27.3417L26.2199 18.0059C26.3435 17.8748 26.4416 17.7191 26.5085 17.5477C26.5754 17.3764 26.6099 17.1926 26.6099 17.0071C26.6099 16.8216 26.5754 16.6378 26.5085 16.4665C26.4416 16.2951 26.3435 16.1394 26.2199 16.0084L17.4333 6.67252C17.3098 6.54136 17.1633 6.43732 17.002 6.36634C16.8407 6.29536 16.6678 6.25882 16.4933 6.25882C16.3187 6.25882 16.1458 6.29536 15.9845 6.36634C15.8233 6.43732 15.6767 6.54136 15.5533 6.67252C15.4298 6.80367 15.3319 6.95938 15.2651 7.13075C15.1983 7.30211 15.1639 7.48578 15.1639 7.67127C15.1639 7.85676 15.1983 8.04042 15.2651 8.21179C15.3319 8.38315 15.4298 8.53886 15.5533 8.67002L22.0599 15.5834L7.1666 15.5834C6.43327 15.5834 5.83327 16.2209 5.83327 17C5.83327 17.7792 6.43327 18.4167 7.1666 18.4167Z" fill="white"/>
              </svg> </button>
            </div>
        </div>
      </div>
   
   </>
  )
}
