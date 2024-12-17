import React from 'react'
import { Link } from 'react-router-dom'

const Joinnow = () => {
  return (
    <div className='bg-[#FFF3DA]'>
    <div className='container mx-auto lg:px-20 '>
     <div className='flex justify-center py-16 md:py-24'>
       <form action="">
        <div className='flex flex-col gap-5 w-80 md:w-[420px]  p-5 shadow-lg bg-white py-8 rounded-xl'>
        <h2 className='text-3xl font-bold text-center pb-5'>Join now</h2>
        <input placeholder='Username@gmail.com' className='outline-none bg-gray-200 px-5 py-2 ' type="text" />
        <input placeholder='Enter Password' className='outline-none bg-gray-200 px-5 py-2' type="password" />
        <input placeholder='Re-EnterPassword' className='outline-none bg-gray-200 px-5 py-2' type="password" />         
        <button className='bg-[#FF7132] text-white font-semibold px-6 py-2 mt-5'>JOIN NOW</button>
        <Link to={'/signin'} className='underline text-center'>Sign in</Link>
        </div>
       </form>
     </div>
   </div>
  </div>
  )
}

export default Joinnow