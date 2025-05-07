import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
  const [emailId, setEmailId] = useState("amishakulkarni@gmail.com");
  const [password, setPassword] = useState("amishabouncy");

  const handleLogin = async () => {


  }

  return (
    <div className='flex justify-center my-10'>
    <div className="card bg-base-300 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title justify-center">Login</h2>
    <div>

    <fieldset className="fieldset my-2">
  <legend className="fieldset-legend">Email ID</legend>
  <input type="text" value={emailId} className="input" placeholder="Enter your email id" onChange={(e) => setEmailId(e.target.value)} />
</fieldset>

<fieldset className="fieldset my-2">
  <legend className="fieldset-legend">Password</legend>
  <input type="text" value={password} className="input" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
</fieldset>

    </div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary m-2" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
</div>
  )
}

export default Login
