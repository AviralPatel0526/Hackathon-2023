import React from 'react'
import imge from "../assets/back.png"
function Homesection1() {
  return (
    <div className='flex w-full h-[90vh]' >
        <div className='w-[50%] flex justify-center items-center'>
            <div className='w-[30dvw]'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, deleniti, natus accusantium in quae voluptates sunt possimus explicabo ullam odit quis est repellat molestias voluptate molestiae dicta, facilis eligendi! Nemo, aut hic! Molestiae, facilis. Ipsam, ipsum laudantium autem fugit magni facilis? Dolores similique rerum ullam, vitae ex distinctio ea impedit!</p>
        </div>
        </div>
        <div><img src={imge} alt="" className='h-[90vh] w-[50vw]'/></div>
      
    </div>
  )
}

export default Homesection1
