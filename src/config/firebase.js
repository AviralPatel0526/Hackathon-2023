// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB-7caUV_BlDWmsV2-3zCGLBB4yXjgu2M",
  authDomain: "jadoo-c1418.firebaseapp.com",
  projectId: "jadoo-c1418",
  storageBucket: "jadoo-c1418.appspot.com",
  messagingSenderId: "433976783473",
  appId: "1:433976783473:web:d091ff85338f16050461d0",
  measurementId: "G-J51V4Y1GL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);