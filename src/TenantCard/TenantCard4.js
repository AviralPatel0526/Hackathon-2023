
import React, { useEffect, useState } from 'react';
import house from "../assets/NITRaipur.png";
import PanoramaViewer4 from '../PanoramaViewer/PanoramaViewer4';
import TextToSpeech from '../components/TextToSpeech'

function TenantCard4() {
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
  const Text =" Established in 1956, NIT Raipur is a premier engineering institute in India, known for excellence in technical education and research."

  return (
    <div className="w-full h-full flex justify-center my-10">
      <div className=' bg-slate-400 w-[55%] h-[60vh] flex rounded-2xl shadow-2xl tcard' >
      <div className="w-[48%] h-full rounded-2xl flex justify-center items-center"> 
        <img src={house} className='w-[80%] h-[80%] rounded-2xl'/>
      </div>
      <div className="w-[48%] h-full flex flex-col  items-start justify-evenly pl-5 rounded-2xl">
        <div><p className='text-3xl font-bold'>Price : $600</p></div>
        <div className='flex gap-4 items-center '>
         <div><h1  className='text-3xl font-bold'>2BHK</h1></div>
         <div>for rent</div>
         </div>
         <div className='flex gap-4'>
         <div className='flex gap-3'>
          <p>Owner Name:</p>
          <p>Satya</p>
         </div>
         <div className='flex gap-3'>
          <p>Carpet Area:</p>
          <p>400 x 400</p>
         </div>
         </div>
        
        <div>Address: Amanaka Raipur</div>
        <div><TextToSpeech text={Text}/></div>

        <div></div>
        <div className='flex gap-4' >
          
          <button className='px-8 py-4 bg-green-800 rounded-3xl text-white font-bold text-xl hover:scale-95' onClick={openReport}>Watch in AR</button>
        </div>
      </div>
      </div>
      {showViewer && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70">
          <div className="relative w-full h-full">
            <PanoramaViewer4 />
            <button className="absolute top-4 right-4 p-2 bg-black rounded-2xl px-3 hover:scale-105 text-white" onClick={closeViewer}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TenantCard4;
