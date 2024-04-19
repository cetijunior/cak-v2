import React from "react";

const SmmaSection2 = () => {
  return (
    <div className="pt-12 flex flex-col justify-center">
      <div className="py-12 flex flex-col lg:flex-row justify-center items-center gap-20 p-6">
        <div className="space-y-6 max-w-md lg:max-w-lg">
          <h1 className="text-3xl font-playfair font-semibold text-center">
            Our Clients Love Our Impactful Social Media Strategies
          </h1>
          <p className="text-center font-thin">
            We do more than create dynamic social media campaigns; we forge
            lasting partnerships. Our strategic insights and impactful outcomes
            consistently surpass client expectations.
          </p>
        </div>
        <img
          className="w-[400px] h-auto lg:w-[700px] rounded-2xl md:rounded-[39px] lg:rounded-[39px] shadow-custom-blue2 md:w-[50rem] transition-all duration-300 ease-in-out transform hover:scale-105"
          src="/smmapic.png"
          alt="Social Media Marketing pole of icons"
        />
      </div>
    </div>
  );
};

export default SmmaSection2;
