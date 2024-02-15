import React from 'react'

import Navbar from '../components/Navbar'
import video from '../assets/video2.mov'
// import Spline from '@splinetool/react-spline';

function Homesection1() {
   // Media query for smaller screens
   
   


   return (
  <div className=''>
    {/* Navigation Bar */}
    <div className='absolute top-1% z-10 left-2%'>
      <Navbar />
    </div>

    {/* Video Background */}
    <div className='top-0 z-[-1]'>
      <video autoPlay loop id="expert-video" muted playsInline poster="https://storagecdn.propvr.ai/WebsiteAssets%2Fhero_video_thumbnail.webp?alt=media">
        <source src={video} type="video/mp4" />
        {/* <track kind="captions" /> */}
      </video>

      {/* Content */}
      <div className='absolute lg:top-[30vh] md:top-[15vh] top-[10vh] flex justify-center items-start md:pt-36 pt-20 w-full h-[90vh]'>
        <div className='md:w-3/5 w-90vw text-center font-bold'>
          {/* Heading */}
          <h1 className='font-bold md:text-4xl text-3xl  mb-4 text-white '>Find a home you will love!</h1>

          {/* Subheading */}
          <p className='md:text-lg sm:text-base md:block hidden text-sm font-semibold text-white '>Welcome to Jadoo, where your dream home is just a click away. Discover a curated collection of properties, each tailored to fit your unique lifestyle. From cozy apartments to spacious family houses, we have options to suit every taste. Start your journey towards the perfect space with us today.</p>
        </div>
      </div>
    </div>
  </div>
);
   }

export default Homesection1
