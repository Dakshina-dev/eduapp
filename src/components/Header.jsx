import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Header = () => {

  const[isOpen,setIsOpen]=useState(false)

  function handleMenu(){
    setIsOpen(!isOpen)
  }

  return (
   <div className='bg-[#FFF3DA] '>
     <div className='container mx-auto lg:px-20 relative  text-nowrap'>
      <div className='flex justify-between items-center gap-10 p-5'>
      <Link to={'/'}><h1 className='text-2xl font-bold text-nowrap'>Learn <span className='text-[#FF7132]'>Tech</span></h1>
      </Link>
      <div className='hidden lg:flex '>
        <ul className='flex gap-10 justify-center items-center font-semibold hover:text-w'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/popularcategories'>Popular Categories</Link></li>
          <li><Link to='/pricing'>Pricing</Link></li>
          <li><Link to='/about'>About us</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
         </ul>
      </div>
      <div className='lg:hidden'>
        <button className='' onClick={()=>handleMenu()}>
          {isOpen ? <IoClose className='size-8' /> :<IoMenu className='size-8'/>}
        </button>
      </div>
      <div className='hidden lg:flex justify-center items-center gap-4'>
          <Link to={'/signin'}><button className=' px-7 py-2 rounded-full font-semibold border border-[#FF7132]  '>Sign in</button></Link>
          <Link to={'joinnow'}> <button className='bg-[#FF7132] px-5 py-2 rounded-full text-white font-semibold'>Join Now</button></Link>
      </div>
     </div>
       {isOpen ?  
       <div className='absolute lg:hidden w-full bg-gradient-to-b to-[#f9e1ad] from-[#fef5e0] py-5 z-50'>
        <ul className='flex flex-col gap-10 justify-center items-center font-semibold'>
          <li><a href='/'>Home</a></li>
          <li><a href='/popularcategories'>Popular Categories</a></li>
          <li><a href='/pricing'>Pricing</a></li>
          <li><a href='/about'>About us</a></li>
          <li><a href='/blog'>Blog</a></li>
          <div className='flex gap-5 items-center'>
          <a href={'/signin'}><button className=' px-7 py-2 rounded-full font-semibold border border-[#FF7132]'>Sign in</button></a>
          <a href={'joinnow'}> <button className='bg-[#FF7132] px-5 py-2 rounded-full text-white font-semibold'>Join Now</button></a>
          </div>
         </ul>
        </div> : null}
    </div>
   </div>
  )
}

export default Header


// FF7132