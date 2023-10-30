import React, { useState } from 'react';
import './AuthForm.css';

function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
   <div className='flex h-[100vh] w-[100%] items-center justify-center'>
    <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
      <div className="form-container sign-up-container">
        {isSignUp && (
          <form className="sign" action="#">
            <h1 className="font-bold m-0">Create Account</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span className="text-[12px]">or use your email for registration</span>
            <input  className="signInput" type="text" placeholder="Name" />
            <input  className="signInput" type="email" placeholder="Email" />
            <input  className="signInput" type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        )}
      </div>
      <div className="form-container sign-in-container">
        {!isSignUp && (
          <form className="sign" action="#">
            <h1 className="font-bold m-0">Sign in</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span className="text-[12px]">or use your account</span>
            < input className="signInput"  type="email" placeholder="Email" />
            <input className="signInput"  type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
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
