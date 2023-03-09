import React, { useEffect, useState } from 'react'
import { auth, registerWithEmailAndPassword } from '../firebase'
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const [password, setPassword]=useState([])
    const [confirmpassword, SetConfirmpassword]=useState([])
    const [email, setEmail]=useState([])
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading]);

    const handleSubmit=(e)=>{
        e.preventDefault()
        registerWithEmailAndPassword(email, password)

    }

  return (
    <div>
        <div className='  flex justify-center items-center w-full max-w-full flex-col  mt-12 flex-wrap'>
        {/* <div className="lg:w-2/5 ">
        <img src="./images/login.gif" alt="GIF"/>
        </div>         */}
       <div className=' back-g p-5 rounded-3xl flex justify-center shadow-lg  items-center flex-col  '>
        <h1 className='text-4xl'>Register</h1>
        <form  className=' flex justify-center items-center  flex-col' onSubmit={handleSubmit}>
        <input type='text' className='p-4   rounded-3xl mb-4  mt-2' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
        <input type='password' className='p-4  rounded-3xl mb-4 ' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'/>
        <input type='password' className='p-4  rounded-3xl  mb-4' value={confirmpassword} onChange={(e)=>SetConfirmpassword(e.target.value)} placeholder='Confirm Password'/>
        <div className='flex justify-center items-center'>
        <button type='submit' className='btn mt-2 mb-4 p-3 rounded-full w-32 bg-blue-400 shadow-lg'>Register</button>
        </div>
        <p>Have an Account? <button>Login</button></p>
        </form>
       </div>
        </div>
     </div>
  )
}

export default Register