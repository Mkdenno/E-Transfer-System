import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  auth, logInWithEmailAndPassword } from '../firebase'
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
    const [email, setEmail]=useState([])
    const [password, setPassword]=useState([])

    const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

    const handleLogin=(e)=>{
        e.preventDefault()
        logInWithEmailAndPassword(email, password)

 
    }
  return (
    <div>
        <div className='  flex justify-center items-center w-full max-w-full flex-col  mt-12 flex-wrap'>
        {/* <div className="lg:w-2/5 ">
        <img src="./images/login.gif" alt="GIF"/>
        </div>         */}
       <div className=' back-g p-5 rounded-3xl flex justify-center shadow-lg  items-center flex-col  '>
    
        <h1 className='text-4xl'>Login</h1>
        <form className=' flex justify-center items-center  flex-col' onSubmit={handleLogin}>
        <input type='text' className='p-4  rounded-3xl mb-4 mt-2' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
        <input type='password' className='p-4  rounded-3xl mb-4 ' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'/>
        <div className='flex justify-center items-center'>
        <button type='submit' className=' btn mt-2 mb-4 p-3 rounded-full w-32 shadow-lg'>Login</button>
        </div>
        <p>Not Registered? <Link className=' text-red-700' to="/register">Register</Link></p>
        </form>
       </div>
        </div>
    </div>
  )
}

export default Login