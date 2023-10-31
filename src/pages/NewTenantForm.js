import React from 'react';
import { db, auth } from '../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function NewTenantForm() {

  const TenantCollectionRef = collection(db, "Tenants");

  const [newAddress, setNewAddress] = useState("");
  const [newSize, setNewSize] = useState("");
  const [newRent, setNewRent] = useState("");

  const navigate = useNavigate();

  const [formError, setFormError] = useState("");

  const validateForm = () => {
    if (
      !newAddress ||
      !newSize ||
      !newRent
    ) {
      setFormError("! All fields are required !");
      return false;
    }

    // You can add more specific validation checks if needed

    return true;
  };


 const addNewTenant = async()=>{
    try{
        if(validateForm()){
            await addDoc(TenantCollectionRef, {
                Address: newAddress,
                Size: newSize,
                Rent: newRent,
                userId: auth?.currentUser?.uid,
            })
            navigate("/Tenants")
        }
       
    }catch(err){
        console.log(err);
    }
  }

  return (
  <>
  
  <div className='w-[80vw] h-[60vh] bg-slate-500 flex'>
    <div className='w-[40vw] h-[60vh]' >
        <img src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT49PBpnFBJNlDx_73B0CguaQy9vmF09quzI4ZKlBgWtAV1fSemOlKiHYXyS-O3HTw1aDWrf-dc-omXddw" alt=""  className='w-[40vw] h-[60vh]'/>
    </div>
    <div className='w-[40vw] h-[60vh] flex flex-col justify-evenly items-center'>
        <div><input type="text" /></div>
        <div><input onChange={(e) => setNewAddress(e.target.value)} type="text" /></div>
        <div><input onChange={(e) => setNewSize(e.target.value)} type="text" /></div>
        <div><input onChange={(e) => setNewRent(e.target.value)} type="file" />select a file</div>
        <div><button onClick={addNewTenant}>Watch in vr</button>{formError && <p className='text-black font-bold'>{formError}</p>}
        </div>
    </div>
   </div>


  </>
  )
}

export default NewTenantForm
