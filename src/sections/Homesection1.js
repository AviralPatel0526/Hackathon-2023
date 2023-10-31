import React from 'react'
import imge from "../assets/back.png"
function Homesection1() {
  return (
    <div className='flex md:flex-row flex-col w-full md:h-[90vh] h-auto' >
        <div className='md:w-[50%] flex justify-center items-center w-full h-[70vh]'>
            <div className='md:w-[30dvw] w-[70vw] '>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, deleniti, natus accusantium in quae voluptates sunt possimus explicabo ullam odit quis est repellat molestias voluptate molestiae dicta, facilis eligendi! Nemo, aut hic! Molestiae, facilis. Ipsam, ipsum laudantium autem fugit magni facilis? Dolores similique rerum ullam, vitae ex distinctio ea impedit!</p>
        </div>
        </div>
        <div><img src={imge} alt="" className='md:h-[90vh] md:w-[50vw] w-full'/></div>
      
    </div>
  )
}

export default Homesection1
