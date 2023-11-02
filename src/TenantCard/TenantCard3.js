
import React, { useEffect, useState } from 'react';
import house from "../assets/house.jpg";
import PanoramaViewer3 from '../PanoramaViewer/PanoramaViewer3';

function TenantCard3() {
  const [showViewer, setShowViewer] = useState(false);

  const openReport = async () => {
    try {
      setShowViewer(true);
    } catch (err) {
      console.error(err);
    }
  }

  const closeViewer = () => {
    setShowViewer(false);
  }

  return (
    <div className="w-full h-full flex justify-center my-10">
      <div className=' bg-slate-400 w-[55%] h-[60vh] flex rounded-2xl shadow-2xl tcard' >
      <div className="w-[48%] h-full rounded-2xl flex justify-center items-center"> 
        <img src={house} className='w-[80%] h-[80%] rounded-2xl'/>
      </div>
      <div className="w-[48%] h-full flex flex-col  items-start justify-evenly pl-5 rounded-2xl">
        <div><p className='text-3xl font-bold'>82731</p></div>
        <div className='flex gap-4 items-center '>
         <div><h1  className='text-3xl font-bold'>2bhk</h1></div>
         <div>for rent</div>
         </div>
         <div className='flex gap-4'>
         <div className='flex gap-3'>
          <p>Owner Name:</p>
          <p>aviral</p>
         </div>
         <div className='flex gap-3'>
          <p>Carpet Area:</p>
          <p>2341</p>
         </div>
         </div>
        
        <div>Address: akljsdljasjla</div>
        <div></div>
        <div></div>
        <div className='flex gap-4' >
          <button className='px-8 py-4 bg-green-400 border-[2px] border-green-800 rounded-3xl text-xl text-green-900 font-bold hover:scale-95'>Details</button>
          <button className='px-8 py-4 bg-green-800 rounded-3xl text-white font-bold text-xl hover:scale-95' onClick={openReport}>Watch in AR</button>
        </div>
      </div>
      </div>
      {showViewer && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70">
          <div className="relative w-full h-full">
            <PanoramaViewer3/>
            <button className="absolute top-4 right-4 p-2 bg-black rounded-2xl px-3 hover:scale-105 text-white" onClick={closeViewer}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TenantCard3;
