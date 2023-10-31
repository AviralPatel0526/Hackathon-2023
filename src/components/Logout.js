import React from 'react'
import { auth } from '../config/firebase'
import { signOut } from 'firebase/auth'

const Logout = () => {
  
    const logOut = async()=>{
        try{
            await signOut(auth);
        console.log("Sign-Out successful.");
        alert("Sign-Out successful.");
        document.getElementById('signup').style.display = 'block';     
        document.getElementById('logout').style.display = 'none';
       // document.getElementById('data').style.display = 'none';
        }catch(err){
            console.log(err);
        }
    }
  
  return (
  
    <div id="logout" className='border-[1px] border-black p-2 rounded-lg hover:scale-110 hidden'><button onClick={logOut}>Log Out</button></div>
  )
}

export default Logout