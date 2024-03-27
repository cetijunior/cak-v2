import React from "react";

const OurCompetence = () => {
  return (
    <>
      <div className="pt-12 h-[40rem] flex flex-col sm:flex-row sm:items-center sm:justify-center gap-8 space-x-6">
        <div className="flex flex-col justify-center space-y-5 items-center">
          <h1 className="text-3xl">Our competence</h1>
          <p className="text-center">
            CAK Design has created business-critical solutions <br></br>
            for both small and large companies, both locally and <br></br>
            internationally.
          </p>
        </div>
        <div className=" h-[23rem] w-[23rem] sm:h-[27rem] sm:w-[54rem] pl-8 flex flex-col items-center justify-center sm:items-end sm:justify-end ">
          <img src="/people.svg"></img>
        </div>
      </div>
    </>
  );
};

export default OurCompetence;
