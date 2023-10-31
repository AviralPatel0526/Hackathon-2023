import React from 'react'
import Keys from "../assets/keys.png"
function Homesection2() {
  return (
   <>
   <div className='text-center pt-20'>
    <p className='text-2xl font-semibold'>CATEGORY</p>
    <h1 className='text-[40px] font-bold'> We Offer Best Services</h1>
   </div>
   <div className='md:h-[45vh] h-auto w-full flex gap-20 items-center md:justify-evenly mt-10 md:flex-row flex-col'>
    <div className='flex flex-col justify-center items-center lg:h-[45vh] lg:w-[18vw] h-[35vh] w-[70vw] rounded-2xl text-center shadow-2xl  bg-white'>
     <div><img src={Keys} alt="" className='h-[10vh] '/></div>
     <div><h1 className='text-[20px] font-semibold'>Lorem ipsum dolor sit.</h1></div>
     <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, placeat similique ullam nemo fugit culpa.</p></div>
    </div>
    <div className='flex flex-col justify-center items-center lg:h-[45vh] lg:w-[18vw] h-[35vh] w-[70vw] rounded-2xl text-center shadow-2xl  bg-white'>
     <div><img src={Keys} alt="" className='h-[10vh] '/></div>
     <div><h1 className='text-[20px] font-semibold'>Lorem ipsum dolor sit.</h1></div>
     <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, placeat similique ullam nemo fugit culpa.</p></div>
    </div>
    <div className='flex flex-col justify-center items-center lg:h-[45vh] lg:w-[18vw] h-[35vh] w-[70vw] rounded-2xl text-center shadow-2xl  bg-white'>
     <div><img src={Keys} alt="" className='h-[10vh] '/></div>
     <div><h1 className='text-[20px] font-semibold'>Lorem ipsum dolor sit.</h1></div>
     <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, placeat similique ullam nemo fugit culpa.</p></div>
    </div>
    <div className='flex flex-col justify-center items-center lg:h-[45vh] lg:w-[18vw] h-[35vh] w-[70vw] rounded-2xl text-center shadow-2xl  bg-white'>
     <div><img src={Keys} alt="" className='h-[10vh] '/></div>
     <div><h1 className='text-[20px] font-semibold'>Lorem ipsum dolor sit.</h1></div>
     <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, placeat similique ullam nemo fugit culpa.</p></div>
    </div>
   </div>
   </>
  )
}

export default Homesection2
