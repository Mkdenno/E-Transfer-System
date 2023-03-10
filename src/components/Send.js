import React from 'react'

const Send = () => {
  return (
    <div className=' back-g absolute w-1/3 shadow-2xl top-64 left-96 bg-white rounded-2xl h-64'>
        <h2 className='depheader flex justify-center items-center text-3xl mt-3 mb-3 '>Send Money</h2>

        <form className='flex justify-center items-center   flex-col'>
        <input type='text' className="rounded-3xl p-4 mb-3" placeholder='Enter the recipient email' />
        <input type='text' className="rounded-3xl p-4" placeholder='Enter the Amount to send' />
            <button className='btn flex justify-center items-center p-3 mt-4 mb-4 rounded-2xl text-white'>Send</button>
        </form>
        
    </div>  )
}

export default Send