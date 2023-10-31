import React, { useState,useEffect } from 'react';
import { auth ,googleProvider} from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import {useFormik} from 'formik';
import {signUpSchema} from '../schemas'
import { signInSchema } from '../schemas';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './AuthForm.css';


function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  const initialValues = {
    email: "",
    password: "",
    name: "",
  };

  const initialValuesSignIn = {
    email: "",
    password: "",
  };

  const { values: valuesSignIn, errors: errorsSignIn, touched: touchedSignIn, handleBlur: handleBlurSignIn, handleChange: handleChangeSignIn, handleSubmit: handleSubmitSignIn } = useFormik({
    initialValues: initialValuesSignIn,
    validationSchema: signInSchema,
    onSubmit: async (values) => {
      // ... your existing onSubmit logic for Sign In
      try{
        await signInWithEmailAndPassword(auth,values.email, values.password)
        .then((userCredential)=>{
          const user = userCredential.user;
          console.log(user);
          setTimeout(()=>{
            alert(user.email+" Login Successfully!!");
           // document.getElementById('signup').style.display = 'none'; 
            //document.getElementById('data').style.display= 'block';  
           // document.getElementById('logout').style.display = 'block';
           document.getElementById('signup').style.display = 'none';     
            document.getElementById('logout').style.display='block';
          },1000)
        })
        navigate("/"); 
               
    }
    catch(error){
      console.log(error);
    }
    },
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit }=useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit: async(values) => {
      console.log(
        "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
        values
      );
      try{
        await createUserWithEmailAndPassword(auth,values.email, values.password)
        .then((userCredential)=>{
          const user = userCredential.user;
          console.log(user);
          setTimeout(()=>{
            alert("Registered Successfully!!");
            //document.getElementById('signup').style.display = 'none';     
            //document.getElementById('logout').style.display='block';
            //document.getElementById('data').style.display = 'block';
            document.getElementById('signup').style.display = 'none';     
            document.getElementById('logout').style.display='block';
          },1000)
        })
       navigate("/"); 
    }
    catch(err){
        console.log(err);
    }
    },
  });


 const navigate = useNavigate();
 const handleGoogleSignUp= async()=>{
  try{
      await signInWithPopup(auth, googleProvider)
      .then((userCredential)=>{
        const user = userCredential.user;
        console.log(user);
        setTimeout(()=>{
          alert("Registered Successfully!!");
          document.getElementById('signup').style.display = 'none';     
          document.getElementById('logout').style.display='block';
        },1000)
      })
      navigate("/");
  }catch(err){
      console.log(err);
  }
}
  

  return (
   <div className='flex h-[100vh] w-[100%] items-center justify-center'>
    <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
      <div className="form-container sign-up-container">
        {isSignUp && (
          <form className="sign" onSubmit={handleSubmit}>
            <h1 className="font-bold m-0">Create Account</h1>
            {/* <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div> */}
             <div  className="text-black md:text-xl bg-orange-500 border-rounded mt-1 text-[15px] font-medium tracking-wide  cursor-pointer self-center ">
                 
                 <button onClick={handleGoogleSignUp} className="social">Sign Up With Google</button>
              
                   </div>
            <span className="text-[12px]">or use your email for registration</span>
            <input  className="signInput" type="text" placeholder="Name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
            />{errors.name && touched.name ? (
              <p className="form-error text-red-600">{errors.name}</p>
            ) : null}
            <input  className="signInput" type="email" placeholder="Email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete='off'/>{errors.email && touched.email ? (
                        <p className="form-error text-red-600">{errors.email}</p>
                      ) : null}
            <input  className="signInput" type="password" placeholder="Password"
                     name="password"
                     autoComplete='off'
                       value={values.password}
                       onChange={handleChange}
                     onBlur={handleBlur}
            />{errors.password && touched.password ? (
              <p className="form-error text-red-600">{errors.password}</p>
            ) : null}
            <button>Sign Up</button>
          </form>

          
        )}
      </div>
      <div className="form-container sign-in-container">
        {!isSignUp && (
          <form className="sign" onSubmit={handleSubmitSignIn} >
            <h1 className="font-bold m-0">Sign in</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span className="text-[12px]">or use your account</span>
            < input className="signInput"  type="email" placeholder="Email" 
                name="email"
                value={valuesSignIn.email}
                onChange={handleChangeSignIn}
                onBlur={handleBlurSignIn}
            />{errorsSignIn.email && touchedSignIn.email ? (
              <p className="form-error text-red-600">{errorsSignIn.email}</p>
            ) : null}
            <input className="signInput"  type="password" placeholder="Password"
                  name="password"
                  value={valuesSignIn.password}
                  onChange={handleChangeSignIn}
                  onBlur={handleBlurSignIn}
            />{errorsSignIn.password && touchedSignIn.password ? (
              <p className="form-error text-red-600">{errorsSignIn.password}</p>
            ) : null}
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
            <div  className="text-black md:text-xl bg-orange-500 border-rounded mt-1 text-[15px] font-medium tracking-wide  cursor-pointer self-center ">
                 
                 <button onClick={handleGoogleSignUp} className="social">Sign In With Google</button>
              
                   </div>
          </form>
        )}
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className={`overlay-panel overlay-left ${isSignUp ? 'right-panel-active' : ''}`}>
            <h1 className="font-bold  p-2">Welcome Back!</h1>
            <p className="text-[14px] pb-2">To keep connected with us, please login with your personal info</p>
            <button className="ghost p-2" id="signIn" onClick={toggleMode}>
              Sign In
            </button>
          </div>
          <div className={`overlay-panel overlay-right ${isSignUp ? '' : 'right-panel-active'}`}>
            <h1 className="font-bold  p-2">Hello, Friend!</h1>
            <p className="text-[14px] pb-2">Enter your personal details and start your journey with us</p>
            <button className="ghost p-2" id="signUp" onClick={toggleMode}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AuthForm;
