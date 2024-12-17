import React from "react";

const Getintouch = () => {
  return (
    <div className="bg-[#7b5896]">
      <div className="container mx-auto lg:px-20 p-5">
        <div className="text-white text-center items-center flex flex-col gap-5 p-5">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="">
            Exciting news! We now offer comprehensive support for advanced
            metrics on our website.
          </p>
          <div className="bg-white rounded-full flex pl-4 justify-between  w-80 md:96">
            <input
              type="text"
              placeholder="Enter your E-mail Id"
              className="p-3 rounded-full bg-transparent outline-none text-black w-full "
            />
            <button className="bg-[#7b5896] text-nowrap px-6 m-1 rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getintouch;
