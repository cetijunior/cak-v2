import React from "react";

const WhatWeOffer = () => {
  return (
    <div className="pt-10 sm:h-[35rem] flex flex-col items-center justify-center sm:gap-10 sm:space-x-10 sm:flex-row ">
      <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start space-y-5">
        <h1 className="text-3xl font-playfair font-semibold px-5 pb-4">
          What we offer?
        </h1>
        <p className="px-5 font-thin">
          Using a strategic design approach in all our projects ensures{" "}
          <br></br>
          that real value is created. This means that we take responsibility
          <br></br>
          for the entire process from ideation to realization. It`s is an{" "}
          <br></br>
          important part of our approach to ensure the solution is right for
          you.<br></br>
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:space-x-10">
        <div className="flex flex-col justify-end items-end">
          <div className="flex flex-col justify-end items-end">
            <div className="pt-8 flex flex-col space-y-11">
              <div className="ml-16 bg-white shadow-custom-blue font-playfair rounded-3xl p-4 transition-all duration-300 ease-in-out transform hover:scale-125">
                <h1>◉ User Experience Design (UX)</h1>
              </div>
              <div className="mr-8 bg-white shadow-custom-blue font-playfair rounded-3xl p-4 transition-all duration-300 ease-in-out transform hover:scale-125">
                <h1>◉ User Interface Design (UI)</h1>
              </div>
              <div className="ml-16 bg-white shadow-custom-blue font-playfair rounded-3xl p-4 w-[11rem] transition-all duration-300 ease-in-out transform hover:scale-125">
                <h1>◉ Circular Design</h1>
              </div>
              <div className="bg-white shadow-custom-blue font-playfair rounded-3xl p-4 transition-all duration-300 ease-in-out transform hover:scale-125">
                <h1>◉ Speculative Design</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end">
          <div className="flex flex-col space-y-11">
            <div className="ml-16 bg-white shadow-custom-blue font-playfair rounded-3xl p-4 w-[11rem] transition-all duration-300 ease-in-out transform hover:scale-125">
              <h1>◉ Service Design</h1>
            </div>
            <div className="mr-12 md:mb-4 bg-white shadow-custom-blue font-playfair rounded-3xl p-4 w-[11rem] transition-all duration-300 ease-in-out transform hover:scale-125">
              <h1>◉ Systems Design</h1>
            </div>
            <div className="ml-16 bg-white shadow-custom-blue rounded-3xl font-playfair p-4 w-[11rem] transition-all duration-300 ease-in-out transform hover:scale-125">
              <h1>◉ Future Design</h1>
            </div>
            <div className="bg-white shadow-custom-blue font-playfair rounded-3xl p-4 transition-all duration-300 ease-in-out transform hover:scale-125">
              <h1>◉ Customer Experience Design (CX)</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
