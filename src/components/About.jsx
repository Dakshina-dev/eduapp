import React from 'react'
import image from '../assets/Group1.png'
import { TfiAlarmClock } from "react-icons/tfi";
import { IoDiamond } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";


const About = () => {
  return (
    <div className='bg-gradient-to-r from-[#fff2d8] to-[#fff8eb]'>
      <div className='container mx-auto lg:px-20 py-10 px-5 flex justify-between items-center gap-16'>
      <div className='hidden lg:block'>
        <img src={image} alt="image" />
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-[#FF7132] font-bold text-2xl'>About us</h2>
        <h2 className='font-black text-3xl'>We can make your life easy</h2>
        <div className='flex flex-col gap-8 py-5'>
        <div className='flex items-center gap-5'>
          <div className='bg-[#ef516c] p-4 rounded-2xl text-center'>
            <IoDiamond className='fill-white size-6' />
          </div>
          <div>
            <h2 className='font-semibold text-xl'>Scheduling </h2>
            <p className=''>the premier virtual academy designed to empower individuals</p>
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <div className='bg-[#FF7132] p-4 rounded-2xl text-center'>
            <TfiAlarmClock className='fill-white size-6' />
          </div>
          <div>
            <h2 className='font-semibold text-xl'>Scheduling </h2>
            <p className=''>the premier virtual academy designed to empower individuals</p>
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <div className='bg-[#30b338] p-4 rounded-2xl text-center'>
            <FaBookReader className='fill-white size-6' />
          </div>
          <div>
            <h2 className='font-semibold text-xl'>Scheduling </h2>
            <p className=''>the premier virtual academy designed to empower individuals</p>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About