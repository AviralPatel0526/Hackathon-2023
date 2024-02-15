import React from 'react'

import Navbar from '../components/Navbar'
import video from '../assets/video2.mov'
// import Spline from '@splinetool/react-spline';

function Homesection1() {
  return (
    <div className='' >
      
      <div className='absolute px-1 top-2   z-10 ' >
          <Navbar/>
      </div>
      <div className=' top-0 z-[-1]  ' >
        <video autoPlay loop id="expert-video" muted playsInline poster="https://storagecdn.propvr.ai/WebsiteAssets%2Fhero_video_thumbnail.webp?alt=media">
          <source src={video} type="video/mp4" />
          {/* <track kind="captions" /> */}
        </video>
        <div className=' absolute lg:top-[27vh] md:top-[20vh] top-[8vh]   flex a justify-center items-start md:pt-36 pt-20 w-full h-[90vh] '>
            <div className='md:w-[60%] w-[90vw] text-center   font-bold'>
            <h1 className='font-bold md:text-4xl sm:text-2xl text-xl mb-8  text-white '>Find a home you will love!</h1>
            <p className='lg:text-[20px]  text-xl text-[15px] font-semibold lg:block hidden  text-white '>"Welcome to Jadoo, where your dream home is just a click away. Discover a curated collection of properties, each tailored to fit your unique lifestyle. From cozy apartments to spacious family houses, we have options to suit every taste. Start your journey towards the perfect space with us today."</p>
            <a className='w-[100%] flex justify-center pt-5 ' href="/SignUP"  >
            <h1 className='bg-blue-800 md:px-10 md:py-5 px-6 py-3 rounded-2xl  font-bold md:text-xl sm:text-2xl text-md   text-white '>GET STARTED!</h1>
            </a>
            
            </div>
          </div>
      </div>
     



    </div>
  )
}

export default Homesection1
