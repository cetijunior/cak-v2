import React from "react";

const OurCompetence = () => {
  return (
    <>
      <div className="pt-12 h-[40rem] flex flex-col sm:flex-row sm:items-center sm:justify-center gap-8 space-x-6">
        <div className="flex flex-col justify-center space-y-5 items-center">
          <h1 className="text-3xl font-playfair font-semibold">
            Our competence
          </h1>
          <p className="text-center font-thin">
            CAK Design has developed essential solutions for businesses of all{" "}
            <br />
            sizes, from small enterprises to large corporations, both locally
            <br />
            and around the globe.
          </p>
        </div>
        <div className=" h-[23rem] w-[23rem] sm:h-[27rem] sm:w-[54rem] pl-8 flex flex-col items-center justify-center sm:items-end sm:justify-end transition-all duration-300 ease-in-out transform hover:scale-105 ">
          <img src="/people.svg"></img>
        </div>
      </div>
    </>
  );
};

export default OurCompetence;
