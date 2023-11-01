
import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import PanoramaViewer from './PanoramaViewer';
function TenantCard(prop) {
  const [showViewer, setShowViewer] = useState(false);
  const [filteredData, setFilteredData] = useState(null);

  const openReport = async (id) => {
    const docRef = doc(db, 'Tenants', id);

    try {
      const data = await getDoc(docRef);
      const filteredData = data.data();
      setFilteredData(filteredData);
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
      <div className=' bg-slate-400 w-[60%] h-[60vh] flex rounded-2xl'>
      <div className="w-[37%] h-full rounded-2xl flex justify-center items-center"> 
        <img src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT49PBpnFBJNlDx_73B0CguaQy9vmF09quzI4ZKlBgWtAV1fSemOlKiHYXyS-O3HTw1aDWrf-dc-omXddw" alt="" className="h-[80%] w-[80%] rounded-2xl" />
      </div>
      <div className="w-auto h-full flex flex-col  items-center rounded-2xl">
        <div>Price: 34756</div>
        <div className='flex gap-4'>
         <div><h1>2BHK</h1></div>
         <div>for rent</div>
         </div>
         <div className='flex gap-4'>
         <div >
          <p>Owner:</p>
          <p>{prop.rent}</p>
         </div>
         <div>
          <p>Owner:</p>
          <p>{prop.size}</p>
         </div>
         </div>
        
        <div> adress: Nit raipur</div>
        <div></div>
        <div></div>
        <div  >
          <button className='px-6 py-2 bg-green-400 rounded-3xl'>Details</button>
          <button className='px-6 py-2 bg-green-600 rounded-3xl' onClick={() => openReport(prop.id)}>Watch in AR</button>
        </div>
      </div>
      </div>
      {showViewer && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70">
          <div className="relative w-full h-full">
            <PanoramaViewer image={filteredData?.ImageURL} />
            <button className="absolute top-4 right-4 p-2 bg-black rounded-2xl px-3 hover:scale-105 text-white" onClick={closeViewer}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TenantCard;
