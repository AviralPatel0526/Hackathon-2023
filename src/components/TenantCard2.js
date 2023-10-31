import React from 'react'
import imge from "../assets/h1.jpg"
function TenantCard2() {
  return (
   <>
   <div className='w-[80vw] h-[60vh] bg-slate-500 flex'>
    <div className='w-[40vw] h-[60vh]' >
        <img src={imge} alt=""  className='w-[40vw] h-[60vh]'/>
    </div>
    <div className='w-[40vw] h-[60vh] flex flex-col justify-evenly items-center'>
        <div><input type="text" /></div>
        <div><input type="text" /></div>
        <div><input type="text" /></div>
        <div><input type="file" />select a file</div>
        <div><button>Watch in vr</button></div>
    </div>
   </div>
   </>
  )
}

export default TenantCard2
