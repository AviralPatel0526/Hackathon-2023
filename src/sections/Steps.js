import React from 'react'
import inge from "../assets/h1.jpg"
function Steps() {
  return (
  <>
  <div className='w-full h-[70vh] flex mt-40 mb-20'>
    <div className='w-[50%] h-[70vh] flex items-center flex-col justify-center'>
    <h1 className='text-[40px] font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, labore.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatibus. Rem nemo ratione repellat saepe maiores quod enim tempore et praesentium culpa, sapiente ipsam suscipit vero sit necessitatibus odio a maxime! Labore soluta quibusdam nam dolore! Laudantium, illum quisquam provident ipsum maxime natus velit distinctio minus vel nisi assumenda excepturi!</p>
    </div>
    <div className='w-[50%] h-[70vh]'>
      <div><img src={inge} alt="" className='w-[50vw] h-[70vh]' /></div>
    </div>
  </div>
  </>
  )
}

export default Steps
