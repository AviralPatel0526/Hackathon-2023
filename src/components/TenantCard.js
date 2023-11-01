
import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import {doc, getDoc } from 'firebase/firestore';
import PanoramaViewer from './PanoramaViewer';


function TenantCard(prop) {
  const [showReport, setShowReport] = useState(false);
  const [filteredData, setFilteredData] = useState(null);

  const openReport = async (id) => {
    const docRef = doc(db, 'Tenants', id);

    try {
      const data = await getDoc(docRef);
      const filteredData = data.data();
      setFilteredData(filteredData);
      setShowReport(true);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className='w-[80vw] h-[60vh] flex bg-slate-400'>
        <div className='w-[40vw] h-[60vh]'> 
            <img src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT49PBpnFBJNlDx_73B0CguaQy9vmF09quzI4ZKlBgWtAV1fSemOlKiHYXyS-O3HTw1aDWrf-dc-omXddw" alt="" className='h-[60vh]'/>
        </div>
        <div className='w-[40vw] h-[60vh] flex flex-col justify-evenly items-center'>
            <div>{prop.address}</div>
            <div>{prop.size}</div>
            <div>{prop.rent}</div>
            <div>{prop.facility}</div>         
            <div><button onClick={() => openReport(prop.id)}>watch in vr</button></div>
        </div>
    </div>

      {showReport && (
        <PanoramaViewer
        image={filteredData.ImageURL}
        />
      )}
    </>
  )
}

export default TenantCard;
