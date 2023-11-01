import React from 'react'
import steps from "../assets/steps.jpeg"
import s1 from "../assets/map.svg"
import s2 from "../assets/money.svg"
import s3 from "../assets/car.svg"
function Steps() {
  return (
  <>
  <div className='w-[95vw] h-[60vh] flex justify-around mt-40 mb-20'>
    <div className='w-[46%] h-[60vh] flex  flex-col justify-start gap-5'>
   <div><h1 className='text-[40px] font-bold pb-10'>Book your home in three easy steps</h1></div> 

  <div className='flex gap-4  pb-10'>
    <div><img src={s1} alt="" /></div>
    <div>
      <h1>Choose Destination</h1>
      <p>"Select your ideal locale. Start your property search today!"</p>
      </div>

  </div>
  <div className='flex gap-4 pb-10'>
    <div><img src={s2} alt="" /></div>
    <div>
      <h1>Choose Destination</h1>
      <p>"Select your ideal locale. Start your property search today!"</p>
      </div>

  </div>
  <div className='flex gap-4 pb-10'>
    <div><img src={s3} alt="" /></div>
    <div>
      <h1>Choose Destination</h1>
      <p>"Select your ideal locale. Start your property search today!"</p>
      </div>
      </div>
  </div>
    
    <div className='w-[46%] h-[60vh]'>
      <div><img src={steps} alt="" className='w-[46vw] h-[60vh] rounded-2xl shadow-2xl' /></div>
    </div>
  </div>
  </>
  )
}

export default Steps
