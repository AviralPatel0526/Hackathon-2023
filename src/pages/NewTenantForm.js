import React from 'react';
import { db, auth } from '../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/firebase';
import { v4 } from "uuid";

function NewTenantForm() {

  const TenantCollectionRef = collection(db, "Tenants");

  const [newAddress, setNewAddress] = useState("");
  const [newSize, setNewSize] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newArea, setNewArea] = useState("");
  const [newOwnerName, setNewOwnerName] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const navigate = useNavigate();

  const [formError, setFormError] = useState("");

  const validateForm = () => {
    if (
      !newAddress ||
      !newSize ||
      !newOwnerName
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
                Area: newArea,
                Price:newPrice,
                OwnerName: newOwnerName,
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
  <div className='text-center flex flex-col gap-2 mt-3'>
    <p className='text-3xl font-bold '>Want to Add Property</p>
    <p>Fill The Given Form</p>
  </div>
  <div className='w-full h-[85vh] flex justify-center items-center'>    
  <div className='w-[80vw] h-[80vh] bg-slate-400 flex rounded-3xl'>
  <div className='w-[40vw] h-[80vh] flex flex-col justify-evenly items-center rounded-l-3xl'>
        <div>
          <p>Name :</p>
          <input onChange={(e) => setNewOwnerName(e.target.value)} type="text" className='w-[35vw] h-10 rounded-3xl' /></div>
        
        <div className='flex gap-6'>
        <div>
          <p>Size</p>
          <input onChange={(e) => setNewSize(e.target.value)} type="text" className='w-[17vw] h-10 rounded-3xl'/></div>
        <div>
          <p>Carpet Area:</p>
          <input onChange={(e) => setNewArea(e.target.value)} type="text" className='w-[17vw] h-10 rounded-3xl'/></div>
          </div>
          <div>
          <p>Price :</p>
          <input onChange={(e) => setNewPrice(e.target.value)} type="text" className='w-[17vw] h-10 rounded-3xl'/></div>
          <div>
          <p>Address :</p>
          <input onChange={(e) => setNewAddress(e.target.value)} type="text" className='w-[35vw] h-20 rounded-3xl'/></div>
        <div><input type="file" onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }} />Upload Image</div>
        
        <button onClick={uploadFile} className='px-14 py-2 bg-white text-gray-900  rounded-3xl hover:scale-95'>Upload</button>
        <div><button onClick={addNewTenant} className='px-16 py-2 bg-white text-gray-900  rounded-3xl hover:scale-95'>ADD</button>{formError && <p className='text-black font-bold'>{formError}</p>}
        </div>
    </div>
    <div className='w-[40vw] h-[80vh] rounded-r-3xl flex justify-center items-center' >
        <div className='w-[30vw] h-[60vh] rounded-3xl'>
        <p>Discription : </p>
         <input type="text" className='h-[90%] w-full rounded-3xl'/>
        </div>
    </div>

   </div>
   </div>


  </>
  )
}

export default NewTenantForm
