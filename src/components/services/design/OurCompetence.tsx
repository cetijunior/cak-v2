import React from "react";

const OurCompetence = () => {
  return (
    <>
      <div className="pt-12 h-[40rem] items-center lg:px-4 md:px-6 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-8 space-x-6">
        <div className="flex lg:w-[300px] w-[300px] flex-col space-y-5 items-center">
          <h1 className="text-3xl font-playfair font-semibold">
            Our competence
          </h1>
          <p className="lg:text-center text-wrap font-thin">
            CAK Design has developed essential solutions for businesses of all
            sizes, from small enterprises to large corporations, both locally
            and around the globe.
          </p>
        </div>
        <div className="h-[20rem] w-[20rem] md:h-[600px] md:w-[600px] lg:h-[27rem] lg:w-[54rem] flex flex-col justify-center lg:items-end lg:justify-end transition-all duration-300 ease-in-out transform hover:scale-105">
          <img src="/people.svg" alt="Three People illustration"></img>
        </div>
      </div>
    </>
  );
};

export default OurCompetence;
