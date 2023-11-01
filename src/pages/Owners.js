import React from 'react';
import { db, auth } from '../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/firebase';
import { v4 } from "uuid";

function Owners() {

  const TenantCollectionRef = collection(db, "Tenants");

  const [newAddress, setNewAddress] = useState("");
  const [newSize, setNewSize] = useState("");
  const [newRent, setNewRent] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
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


  const uploadFile = async () => {
    if (imageUpload) {
      try {
        const imageRef = ref(storage, `gs://jadoo-c1418.appspot.com/${v4()}`);
        await uploadBytes(imageRef, imageUpload);
        const downloadURL = await getDownloadURL(imageRef);
        console.log('Image uploaded successfully:', downloadURL);
        // Save the image URL in the database or use it as needed
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    } else {
      console.error('No file selected for upload.');
    }
  };



 const addNewTenant = async()=>{
    try{
        if(validateForm()){
          const imageRef = ref(storage, `gs://jadoo-c1418.appspot.com/${v4()}`);
                await uploadBytes(imageRef, imageUpload);
                const downloadURL = await getDownloadURL(imageRef);
            await addDoc(TenantCollectionRef, {
                Address: newAddress,
                Size: newSize,
                Rent: newRent,
                userId: auth?.currentUser?.uid,
                ImageURL: downloadURL,
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
        <div><input onChange={(e) => setNewRent(e.target.value)} type="text" /></div>
        <div><input onChange={(e) => setNewAddress(e.target.value)} type="text" /></div>
        <div><input onChange={(e) => setNewSize(e.target.value)} type="text" /></div>
        <div><input type="file"   onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }} />select a file</div>
        
        <button onClick={uploadFile} className='p-2 bg-gray-300 text-gray-900  rounded-lg hover:scale-95'> Upload Image</button>
        <div><button onClick={addNewTenant}>ADD</button>{formError && <p className='text-black font-bold'>{formError}</p>}
        </div>
    </div>
   </div>


  </>
  )
}

export default Owners
