import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";


const Footer = () => {
  return (
    <div className='footer  text-white footer-container w-full  flex justify-center items-center flex-col' >
        <div className='flex justify-around flex-wrap w-full'>
        <div className="mt-6">
                <h1 className='text-3xl'><span className='headerpart1'>Dennis</span><span>Tech</span></h1>
                <p className='text-sm mt-5'>Your All times Information Technology provider</p>
                <div className=' flex justify-start items-center mt-5'>
                <i className='border-solid border-2 border-gray-700 rounded-full mr-2 p-2'><AiFillFacebook/></i>
                <i className='border-solid border-2 border-gray-700 rounded-full mr-2 p-2'><AiOutlineTwitter/></i>
                <i className='border-solid border-2 border-gray-700 rounded-full mr-2 p-2'><AiOutlineInstagram/></i>
                <i className='border-solid border-2 border-gray-700 rounded-full mr-2 p-2'><AiFillLinkedin/></i>
                </div>

        </div> 
        <div className="mt-6">
            <h1 className='text-lg'>INFORMATION</h1>
            <p className='text-sm mt-5'>Your All times Information Technology provider</p>

            <div className='mt-5'>
            <div className='flex justify-start items-center text-sm'>
            <label className='headerpart1'>Tel:</label><p>+245 715886876</p>
            </div>

            <div className='flex justify-start items-center mt-2 text-sm'>
            <label className='headerpart1'>Email:</label><p>denniskiprop25@gmail.com</p>
            </div>

            <div className='flex justify-start items-center mt-2 text-sm'>
            <label className='headerpart1'>Email:</label><p>denniskiprop25@gmail.com</p>
            </div>

            <div className='flex justify-start items-center mt-2 text-sm'>
            <label className='headerpart1'>Working Hours:</label><p>8.00am-5.00pm</p>
            </div>
            </div>

         </div>
        </div>

        <div className='footer-last mt-10 h-36'>
        <p>© Copyright 2023 QuickDev. All Rights Reserved</p>
        <p>Designed by <Link to='/dashboard' className='headerpart1'>QuickDev</Link></p>
        </div>




       
    </div>
  )
}

export default Footer