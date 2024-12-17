import React from 'react'
import { IoDesktopOutline } from "react-icons/io5";
import { FaFire } from "react-icons/fa";
import { FiPenTool } from "react-icons/fi";




const StatsBar = () => {
  return (
    <div className='bg-white'>
      <div className='py-5 px-8 flex justify-center items-center'>
      <div className='flex  justify-between gap-5 md:gap-16 lg:gap-28'>

        <div className='flex justify-between items-center gap-2 md:gap-4 lg:gap-6'>
        <div className='bg-green-600 p-3 rounded-full'>
          <IoDesktopOutline className='size-4 md:size-6 lg:size-8 text-white' />
        </div>
        <div>
          <p className='font-bold'>25+</p>
          <p className='font-semibold text-nowrap'>Courses</p>
        </div>
        </div>
        <div className='flex justify-between items-center gap-2 md:gap-4 lg:gap-6'>
        <div className='bg-[#ff7132] p-3 rounded-full'>
          <FaFire className='size-4 md:size-6 lg:size-8 text-white' />
        </div>
        <div>
          <p className='font-bold'>10K+</p>
          <p className='font-semibold'>Students</p>
        </div>
        </div>
        <div className='flex justify-between items-center gap-2 md:gap-4 lg:gap-6'>
        <div className='bg-[#ef516e] p-3 rounded-full'>
          <FiPenTool className='size-4 md:size-6 lg:size-8 text-white' />
        </div>
        <div>
          <p className='font-bold'>250+</p>
          <p className='font-semibold'>Awards</p>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default StatsBar