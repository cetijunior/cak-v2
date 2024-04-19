import React from "react";

const WhatWeOffer = () => {
  return (
    <div className="pt-10 lg:h-[35rem] px-12 flex flex-col items-center justify-center lg:gap-10 lg:space-x-10 lg:flex-row">
      <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start space-y-5">
        <h1 className="text-3xl font-playfair font-semibold pb-4">
          What we offer?
        </h1>
        <p className="font-thin">
          Using a strategic design approach in all our projects ensures that
          real value is created. This means that we take responsibility for the
          entire process from ideation to realization. It`s is an important part
          of our approach to ensure the solution is right for you.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:space-x-10">
        <div className="flex flex-col justify-end items-end">
          <div className="flex flex-col justify-end items-end">
            <div className="pt-8 flex flex-col space-y-11">
              <div className="ml-16 bg-white shadow-custom-blue font-playfair rounded-3xl p-4 transition-all duration-300 ease-in-out transform hover:scale-125">
                <h3>◉ User Experience Design (UX)</h3>
              </div>
              <div className="mr-8 bg-white shadow-custom-blue font-playfair rounded-3xl p-4 transition-all duration-300 ease-in-out transform hover:scale-125">
                <h3>◉ User Interface Design (UI)</h3>
              </div>
              <div className="ml-16 bg-white shadow-custom-blue font-playfair rounded-3xl p-4 w-[11rem] transition-all duration-300 ease-in-out transform hover:scale-125">
                <h3>◉ Circular Design</h3>
              </div>
              <div className="bg-white shadow-custom-blue font-playfair rounded-3xl p-4 transition-all duration-300 ease-in-out transform hover:scale-125">
                <h3>◉ Speculative Design</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end">
          <div className="flex flex-col space-y-11">
            <div className="ml-16 bg-white shadow-custom-blue font-playfair rounded-3xl p-4 w-[11rem] transition-all duration-300 ease-in-out transform hover:scale-125">
              <h3>◉ Service Design</h3>
            </div>
            <div className="mr-12 md:mb-4 bg-white shadow-custom-blue font-playfair rounded-3xl p-4 w-[11rem] transition-all duration-300 ease-in-out transform hover:scale-125">
              <h3>◉ Systems Design</h3>
            </div>
            <div className="ml-16 bg-white shadow-custom-blue rounded-3xl font-playfair p-4 w-[11rem] transition-all duration-300 ease-in-out transform hover:scale-125">
              <h3>◉ Future Design</h3>
            </div>
            <div className="bg-white shadow-custom-blue font-playfair rounded-3xl p-4 transition-all duration-300 ease-in-out transform hover:scale-125">
              <h3>◉ Customer Experience Design (CX)</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
