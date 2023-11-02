import React from 'react'

function Footer2() {
  return (
   <>
   <div className='flex w-full justify-around md:h-[40vh] items-start
   pt-20 bg-gray-500 text-white'>
    <div>
       <div className='pb-5'><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc57725c-8ab0-43ad-a8c1-24eb43956f47?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8"/></div>
       <div><p>"Browse listings, book your dream home. Your perfect space awaits!"</p></div>
       <div><p>© Copyright 2023, All rights reserved</p></div> 
    </div>
    <div>
        <div><p className='text-xl font-bold pb-5'>Company</p></div>
        <div>Home</div>
        <div>For Tenants</div>
        <div>For Owners</div>
    </div>
    <div>
        <div><p className='text-xl font-bold pb-5'>Contact</p></div>
        <div><a href="">Ayush Bhavsar</a></div>
        <div><a href="">Aviral Patel</a></div>
        <div><a href="">B. Deewakar Rao</a></div>
        <div><a href="">Satya Prakash Jena</a></div>
    </div>
    <div>
        <div><p className='text-xl font-bold pb-5'>More</p></div>
        <div><p>Sign Up</p></div>
        <div><p>For Tenants</p></div>
        <div><p>For Owners</p></div>
    </div>
   </div>
   </>
  )
}

export default Footer2
