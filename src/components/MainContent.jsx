import React from "react";
import Mainimage from "../assets/Group.png";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import StatsBar from "./StatsBar";
import { Link } from "react-router-dom";


const MainContent = () => {
  return (
    <div className="bg-[#FFF3DA] pt-10 relative z-10 flex flex-col justify-between items-center">
      <div className="container mx-auto lg:px-20 flex justify-center items-center ">
        <div className="flex flex-col justify-center items-start gap-8 p-5">
          <h4 className="text-gray-400 bg-white px-4 py-1 rounded-3xl font-semibold text-nowrap">
            <span className="text-green-600">&#x2022;</span> Welcome to Learn Tech
          </h4>
          <h2 className="text-4xl font-bold leading-[50px] max-w-80 md:max-w-none">
            A Virtual Academy for Lifelong <br />
            <span className="text-[#9359c0] font-black">Learning</span>
          </h2>
          <h3 className="text-[#9359c0] text-xl  font-semibold">
            ____What We Do
          </h3>
          <p className="text-slate-600 max-w-[700px]">
            A Virtual Academy for Lifelong Learning Welcome to Academix, the
            premier virtual academy designed to empower individuals on their
            journey of lifelong learning
          </p>
          <div className="flex gap-2 md:gap-8 lg:gap-10">
            <Link to={'/joinnow'}><button className="bg-[#9359c0] px-5 py-2 rounded-full text-white font-semibold">
              Get Started
            </button></Link>
            <button className=" px-7 py-2 rounded-full font-semibold border-[#9359c0] border text-[#9359c0] ">
              Read more
            </button>
          </div>
          <div className="flex items-center gap-4 md:gap-8">
              <FaSquareYoutube className="fill-[#FF7132] size-8" />
              <FaFacebook className="fill-[#FF7132] size-8"/>
              <FaXTwitter className="fill-[#FF7132] size-8"/>
          </div>
        </div>
        <div className="hidden lg:flex">
          <img src={Mainimage} alt="mainImg" />
        </div>
      </div>
        <div className="mt-8 shadow-lg w-full">
        <StatsBar />
        </div>
    </div>
  );
};

export default MainContent;
