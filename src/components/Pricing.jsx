import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";


function Pricing() {
  const[isOpen,setIsOpen]=useState(false)
  
  function handleToggle(){
    setIsOpen(!isOpen)
  }


  return (
    <div className="bg-white">
      <div className="container mx-auto lg:px-20 p-5 mb-5">
      <h2 className="text-center font-bold text-3xl mt-5">Pricing</h2>
      <div className="flex justify-center items-center p-5 gap-5">
        <h3 className="font-semibold">Monthly</h3>
      <button className="" onClick={handleToggle}> {isOpen ? <FaToggleOn className="size-12 text-green-600"/> :<FaToggleOff className="size-12"/>}</button>
        <h3 className="font-semibold">Yearly</h3>
      </div>
        <div className="flex flex-wrap gap-10 justify-evenly">
          <div className="bg-[#ff7132] text-white p-8 rounded-lg flex flex-col gap-4">
            <h2 className="font-semibold">Basic</h2>
            <h2 className="font-bold text-xl">Free</h2>
            <h3>Free plan for all users</h3>
            <div className="flex flex-col gap-2">
            <div className="flex justify-center items-center gap-4">
              <FaCheckCircle className="" />
              <h4>the premier virtual academy</h4>
            </div>
            <div className="flex justify-center items-center gap-4">
              <FaCheckCircle className="" />
              <h4>the premier virtual academy</h4>
            </div>
            <div className="flex justify-center items-center gap-4">
              <FaCheckCircle className="" />
              <h4>the premier virtual academy</h4>
            </div>
            <div className="flex justify-center items-center gap-4">
              <FaCheckCircle className="" />
              <h4>the premier virtual academy</h4>
            </div>
            </div>
            <button className="text-black px-6 py-3 bg-white rounded-lg font-semibold">Get Basic</button>
          </div>
          <div className="bg-[#30b338] text-white p-8 rounded-lg flex flex-col gap-4">
            <h2 className="font-semibold">Standard</h2>
            <h2 className="font-bold text-xl">{isOpen ? "$162/yearly" : "$15/month"}</h2>
            <h3>Free plan for all users</h3>
            <div className="flex flex-col gap-2">
            <div className="flex justify-center items-center gap-4">
              <FaCheckCircle className="" />
              <h4>the premier virtual academy</h4>
            </div>
            <div className="flex justify-center items-center gap-4">
              <FaCheckCircle className="" />
              <h4>the premier virtual academy</h4>
            </div>
            <div className="flex justify-center items-center gap-4">
              <FaCheckCircle className="" />
              <h4>the premier virtual academy</h4>
            </div>
            <div className="flex justify-center items-center gap-4">
              <FaCheckCircle className="" />
              <h4>the premier virtual academy</h4>
            </div>
            </div>
            <button className="text-black px-6 py-3 bg-white rounded-lg font-semibold">Get Standard</button>
          </div>
          <div className="bg-[#ef516c] text-white p-8 rounded-lg flex flex-col gap-4">
            <h2 className="font-semibold">Premium</h2>
            <h2 className="font-bold text-xl">{isOpen ? "$313/yearly" : "$29/month"}</h2>
            <h3>Free plan for all users</h3>
            <div className="flex flex-col gap-2">
            <div className="flex justify-center items-center gap-4">
              <FaCheckCircle className="" />
              <h4>the premier virtual academy</h4>
            </div>
            <div className="flex justify-center items-center gap-4">
              <FaCheckCircle className="" />
              <h4>the premier virtual academy</h4>
            </div>
            <div className="flex justify-center items-center gap-4">
              <FaCheckCircle className="" />
              <h4>the premier virtual academy</h4>
            </div>
            <div className="flex justify-center items-center gap-4">
              <FaCheckCircle className="" />
              <h4>the premier virtual academy</h4>
            </div>
            </div>
            <button className="text-black px-6 py-3  bg-white rounded-lg font-semibold">Get Premium</button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Pricing;
