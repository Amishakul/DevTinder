import React, { useRef, useState } from 'react'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  
  const name = useRef(null);
  const email = useRef(null);
  const pass = useRef(null);

  const handleLogin =  () => {


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
