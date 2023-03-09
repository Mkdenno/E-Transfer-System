import React from 'react'
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import {  useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate=useNavigate()

    const handleLogOut=()=>{
      logout();
    //   navigate('/')
    }
  return (
    <div>
        <nav className='nav flex justify-around items-center text-white  h-16'>
        <div>
            <h1 className='logo'>E-TS</h1>
        </div>
        <div>
            <button className='logout' onClick={handleLogOut}>Logout</button>
        </div>

        </nav>
        
    </div>
  )
}

export default NavBar