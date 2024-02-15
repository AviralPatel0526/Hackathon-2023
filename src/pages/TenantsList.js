import React from 'react'
import TenantCard1 from '../TenantCard/TenantCard1'
import TenantCard2 from '../TenantCard/TenantCard2'
import TenantCard3 from '../TenantCard/TenantCard3'
import TenantCard4 from '../TenantCard/TenantCard4'
import earch from "../assets/search.png"
const TenantsList = () => {
  return (
    <div>
         <div className='w-full h-[9vh] flex justify-between items-center p-4 bg-slate-400'>

{/* <div className='flex items-center'><input  type="text" placeholder='Search Property' className='h-[5vh] w-[35vw] rounded-l-lg'/><button className='bg-white h-[5vh] rounded-r-lg'><img src={earch} alt="" /></button></div> */}
<div></div>
<div><a href="/NewTenantForm"><button className='px-4 py-2 bg-green-800 rounded-3xl text-white font-bold text-xl hover:scale-95'>ADD NEW Tenant</button></a></div>
</div>
        {/* <TenantCard1/> */}
        <TenantCard2/>
        <TenantCard3/>
        <TenantCard4/>
       

   </div>
  )
}

export default TenantsList