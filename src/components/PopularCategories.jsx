import React from "react";
import { FiPenTool } from "react-icons/fi";
import image1 from '../assets/Rectangle131.png'
import image2 from '../assets/Rectangle130.png'
import image3 from '../assets/Rectangle129.png'

const PopularCategories = () => {
  const button = [
    "Design",
    "Devolopment",
    "Data Science",
    "Architecture",
    "Embedded System"
  ];

  return (
    <div className="bg-white py-10">
      <div className="container mx-auto lg:px-20 flex flex-col gap-5">
        <h2 className="text-center font-bold text-3xl">Popular Categories</h2>
        <div className="flex flex-wrap justify-center gap-2 md:gap-6 lg:gap-10 mt-5 px-1 ">
          {button.map((data,index) => {
            return (
              <button key={index} className="bg-[#FFE5DA] px-6 py-3 rounded-xl flex items-center gap-3 text-lg font-semibold hover:text-white   hover:bg-[#FF7132]/50">
                <FiPenTool className="text-[#FF7132] size-5 " /> {data}
              </button>
            )
          })}
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 m-2 gap-5">
            <div className="flex flex-col justify-between p-5 gap-4 shadow-lg rounded-md">
              <img src={image1} alt="image1" />
              <div className="flex justify-between items-center">
                <h2 className="bg-[#ffe6da] px-4 py-1 rounded-full"> <span className="text-green-600">&#x2022;</span> Web Design</h2>
                <h2 className="text-[#9359c0] font-semibold">$99</h2>
              </div>
              <h2 className="font-bold">
              Advanced WordPress & Elementor 2023
              </h2>
              <button className="text-white font-semibold bg-[#FF7132] p-3">Enroll now</button>
            </div>
            <div className="flex flex-col justify-between p-5 gap-4 shadow-lg rounded-md">
              <img src={image2} alt="image1" />
              <div className="flex justify-between items-center">
                <h2 className="bg-[#ffe6da] px-4 py-1 rounded-full"> <span className="text-green-600">&#x2022;</span> Developer</h2>
                <h2 className="text-[#9359c0] font-semibold">$75</h2>
              </div>
              <h2 className="font-bold">
              Advanced WordPress & Elementor 2023
              </h2>
              <button className="text-white font-semibold bg-[#FF7132] p-3">Enroll now</button>
            </div>
            <div className="flex flex-col justify-between  p-5 gap-4 shadow-lg rounded-md md:hidden lg:flex">
              <img src={image3} alt="image1" />
              <div className="flex justify-between items-center">
                <h2 className="bg-[#ffe6da] px-4 py-1 rounded-full"> <span className="text-green-600">&#x2022;</span> Web Design</h2>
                <h2 className="text-[#9359c0] font-semibold">$85</h2>
              </div>
              <h2 className="font-bold">
              Advanced WordPress & Elementor 2023
              </h2>
              <button className="text-white font-semibold bg-[#FF7132] p-3">Enroll now</button>
            </div>
          </div>
          
      </div>
    </div>
  );
};

export default PopularCategories;
