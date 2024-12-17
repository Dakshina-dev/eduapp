import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
   <div className='bg-[#FFF3DA]'>
     <div className='container mx-auto lg:px-20 '>
      <div className='flex justify-center py-10 md:py-24'>
        <form action="/">
         <div className='flex flex-col gap-5 w-80 md:w-[420px]  p-5 shadow-lg bg-white py-8 rounded-xl'>
         <h2 className='text-3xl font-bold text-center pb-5'>Sign In</h2>
         <input placeholder='Username@gmail.com' className='outline-none bg-gray-200 px-5 py-2 ' type="text" />
         <input placeholder='Password' className='outline-none bg-gray-200 px-5 py-2' type="password" />
          <div className='flex justify-start items-center gap-5'>
          <input className='' type="checkbox" name="" id="" />
          <p className='text-gray-400'>Keep me signed in</p>
          </div>         
         <button className='bg-[#FF7132] text-white font-semibold px-6 py-2 mt-5'>SIGN IN</button>
         <Link  className='underline text-center' href="">Forgot your password ?</Link>
         <Link to={'/joinnow'} className='underline text-center text-blue-600' href="">Join now</Link>
         </div>
        </form>
      </div>

    </div>
   </div>
  )
}

export default Signin