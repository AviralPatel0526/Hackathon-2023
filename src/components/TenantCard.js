
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
    <div className="w-full h-full flex bg-slate-400">
      <div className="w-1/2 h-full"> 
        <img src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT49PBpnFBJNlDx_73B0CguaQy9vmF09quzI4ZKlBgWtAV1fSemOlKiHYXyS-O3HTw1aDWrf-dc-omXddw" alt="" className="h-full w-full" />
      </div>
      <div className="w-1/2 h-full flex flex-col justify-evenly items-center">
        <div>{prop.address}</div>
        <div>{prop.size}</div>
        <div>{prop.rent}</div>
        <div>
          <button onClick={() => openReport(prop.id)}>watch in vr</button>
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
