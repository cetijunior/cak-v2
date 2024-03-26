/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const HowWeWork = () => {
  return (
    <div>
      <div className="flex flex-col justify-center space-y-8 sm:space-y-0 sm:space-x-16 items-center sm:flex-row ">
        <div className="flex flex-col space-y-5 items-center justify-center sm:items-start sm:justify-between ">

          <div className="w-[450px] space-y-3 items-center justify-center">

            <h1 className="sm:text-start text-center text-4xl text-black ">How we Work ?</h1>

            <h3 className="sm:text-start text-center text-xl text-gray-800">We call it the CAK way.</h3>

            <p className="flex flex-row items-center w-full group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:text-black text-gray-600">
              <span className='text-black group-hover:text-blue-500 pr-5'>◉ </span>
              Our proprietary working model
              guarantees world-class service at least
              150% more efficient than alternative
              software development models.
            </p>
            <p className="flex flex-row items-center group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:text-black text-gray-600">
              <span className='text-black group-hover:text-blue-500 pr-5'>◉ </span>
              Our proprietary working model
              guarantees world-class service at least
              150% more efficient than alternative
              software development models.
            </p>
            <p className="flex flex-row items-center group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:text-black text-gray-600">
              <span className='text-black group-hover:text-blue-500 pr-5'>◉ </span>
              Our proprietary working model
              guarantees world-class service at least
              150% more efficient than alternative
              software development models.
            </p>
            <p className="flex flex-row items-center group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:text-black text-gray-600">
              <span className='text-black group-hover:text-blue-500 pr-5'>◉ </span>
              Our proprietary working model
              guarantees world-class service at least
              150% more efficient than alternative
              software development models.
            </p>
          </div>

          <div className="flex items-center justify-center sm:items-start sm:justify-center w-full rounded-2xl ">
            <button className='bg-[#446AF2] w-fit sm:w-fit px-24 p-2 rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:font-semibold shadow-custom-blue text-white'>
              Contact us
            </button>
          </div>

        </div>

        <img
          className="h-[20rem] w-[20rem] rounded-lg sm:h-[33rem] sm:w-[50rem] sm:rounded-xl duration-300 ease-in-out transform hover:scale-105"
          src="https://www.helmes.com/wp-content/uploads/2021/09/MG_9332-1024x683.jpg"
          alt="pic">
        </img>


      </div>
    </div >
  );
};

export default HowWeWork;
