import React, { useEffect, useState } from 'react'
import  {AiOutlineEyeInvisible}  from 'react-icons/ai'
import Footer from './Footer'
import NavBar from './NavBar'
import { query, collection, getDocs, where } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Deposit from './Deposit';
import Send from './Send';

const Home = () => {
  const [email, setEmail]=useState([])
  const [hide, setHide]=useState(false)
  const [user, loading, error] = useAuthState(auth);
    const navigate=useNavigate()
    const fetchEmail = async () => {
        try {
          const q = query(collection(db, "users"), where("uid", "==", user?.uid));
          const doc = await getDocs(q);
          const data = doc.docs[0].data();
          setEmail(data.email);
        } catch (err) {
          console.error(err);
          alert("An error occured while fetching user data");
        }
      };

      useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchEmail();
      }, [user, loading]);

      const handleDeposit = () => {
        if (hide) {
          setHide("");
        } else {
          setHide(<Deposit />);
        }
      };

      const handleSend = () => {
        if (hide) {
          setHide("");
        } else {
          setHide(<Send />);
        }
      };

  return (
    <div className='relative h-full'>
        <NavBar/>
        <div className='home'>
            <div className=' flex justify-center items-center flex-col mr-8'>
                <h1 className='text-red-900'>{email}</h1>
                <div className='flex items-center mt-8  mb-5'>
                <h5 className='mr-3 font-bold'>Account Balance</h5>
                <p><AiOutlineEyeInvisible/></p>
                </div>
                <p className='font-bold'>Ksh. 10000</p>
            </div>


            <div className='flex justify-center items-center  mt-6'>
           <div>
                <button className='btn text-white lg:text-3xl p-3 rounded lg:mr-4' onClick={handleDeposit}>Deposit</button>
                <div >
                {true ? [hide] : null}
                </div>

           </div>
            <div>
                <button className=' btn text-white lg:text-3xl p-3 rounded lg:ml-12' onClick={handleSend}>Send Money</button>
                <div >
                {true ? [hide] : null}
                </div>
            </div>
        </div>


        </div>

        <Footer/>
    </div>
  )
}

export default Home