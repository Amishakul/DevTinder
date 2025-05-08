import React, { useRef, useState } from 'react'
import { checkValidData } from './Utils/ValidData';
import { auth } from "./Utils/Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  
  const name = useRef(null);
  const email = useRef(null);
  const pass = useRef(null);

  const handleLogin =  () => {

    console.log(email.current.value);
    console.log(pass.current.value);

    const message = checkValidData(email.current.value, pass.current.value);
    setErrorMessage(message);

    if(message) return;

    if(!isSignInForm){

  createUserWithEmailAndPassword(auth, email.current.value, pass.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Account created successfully, Login to Continue")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
    // ..
  });
    }




    else{

      


signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate('/profile');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
      
    }



  }



  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className='flex justify-center my-4'>
    <div className="card bg-base-300 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title justify-center">{ isSignInForm ? "Login" : "SignUp"}</h2>
    <div>

    {!isSignInForm && (<fieldset className="fieldset my-2">
  <legend className="fieldset-legend">Name</legend>
  <input type="text" ref={name} className="input" placeholder="Enter your Name"  />
</fieldset>)}

    <fieldset className="fieldset my-2">
  <legend className="fieldset-legend">Email ID</legend>
  <input type="text" ref={email} className="input" placeholder="Enter your email id"  />
</fieldset>

<fieldset className="fieldset my-2">
  <legend className="fieldset-legend">Password</legend>
  <input type="text" ref={pass} className="input" placeholder="Enter your password"  />
</fieldset>

<p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

    </div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary m-2" onClick={handleLogin}>{ isSignInForm ? "Login" : "SignUp"}</button>
      <p className='py-4 cursor-pointer'  onClick={toggleSignInForm}>{isSignInForm ? "New to DevTinder? Sign Up Here" : "Already registered? Sign in Now"}</p>
    </div>
  </div>
</div>
</div>
  )
}

export default Login
