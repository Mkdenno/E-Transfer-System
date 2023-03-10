import React from 'react'

const Send = () => {
  return (
    <div className=' back-g absolute w-1/2 lg:w-1/3 max-w-full shadow-2xl lg:top-64 lg:left-96 left-20 bg-white rounded-2xl lg:h-64'>
        <h2 className='depheader flex justify-center items-center lg:text-3xl mt-3 mb-3 '>Send Money</h2>

        <form className='w-full flex justify-center items-center   flex-col'>
        <input type='text' className="w-full rounded-3xl p-4 mb-3" placeholder='Enter the recipient email' />
        <input type='text' className="w-full rounded-3xl p-4" placeholder='Enter the Amount to send' />
            <button className='btn flex justify-center items-center p-3 mt-4 mb-4 rounded-2xl text-white'>Send</button>
        </form>
        
    </div>  )
}

export default Send