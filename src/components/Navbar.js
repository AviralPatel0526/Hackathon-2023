import React, { useState } from 'react'
import Logout from './Logout.js';
import Hamburger from "../assets/Hamburger.png"
function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
      setShowMenu(!showMenu);
    }
  //   const logOut = async()=>{
  //     try{
  //         await signOut(auth);
  //     console.log("Sign-Out successful.");
  //     setTimeout(()=>{
  //       alert("Sign-Out successful.");
  //       document.getElementById('signup').style.display = 'block';     
  //       document.getElementById('logout').style.display = 'none';
  //       document.getElementById('data').style.display = 'none';
  //     },1000)
  //     }catch(err){
  //         console.log(err);
  //     }
  // }
  
    return (
    <>
    <div className='h-[10vh] bg-white w-[95vw] flex justify-between items-center p-4 rounded-lg '>
      <div><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc57725c-8ab0-43ad-a8c1-24eb43956f47?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8"/></div>
      <div className='md:flex h-[10vh] justify-center items-center gap-14 hidden'>
        <div className='hover:scale-110'><a href="/">Home</a></div>
        <div className='hover:scale-110'><a href="/TenantsList">For Tenants</a></div>
        <div className='hover:scale-110'><a href="/Owners">For Owners</a></div>
        <div id="signup" className='border-[1px] border-black p-2 rounded-lg hover:scale-110'><button><a href="/SignUp">SignUp</a></button></div>
        {/* <div id="logout" className='border-[1px] border-black p-2 rounded-lg hover:scale-110 hidden'><button>Log Out</button></div>
        */}
        <Logout/>
      </div>
    <div className='md:hidden '><button onClick={handleClick} className='text-white rounded-[50%]'><img className='h-[36px] w-[36px]' src={Hamburger} alt="" /></button></div>
    </div>
    {showMenu && (
    
     <div className='flex justify-center items-center h-[90vh] w-[98vw] md:hidden'>
     <div className='flex flex-col gap-8 text-center'>
     <div><a href="/"  className='font-semibold hover:scale-110'>Home</a></div>
     <div><a href="/TenantsList" className='font-semibold hover:scale-110'>For Tenants</a></div>
     <div><a href="/Owners" className='font-semibold hover:scale-110'>For Owners</a></div>
     <div><button><a href="/SignUP" className='border-[1px] border-black p-2 rounded-lg font-bold'>SignUp</a></button></div>
     </div>
   
   </div>
     )}
   </>
  )
}

export default Navbar
