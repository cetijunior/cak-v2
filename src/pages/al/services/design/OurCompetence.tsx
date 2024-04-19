import React from "react";

const OurCompetence = () => {
  return (
    <>
      <div className="pt-12 h-[40rem] items-center lg:px-4 md:px-6 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-8 space-x-6">
        <div className="flex lg:w-[300px] w-[300px] flex-col space-y-5 items-center">
          <h1 className="text-3xl font-playfair font-semibold">
            Kompetenca jonë
          </h1>
          <p className="lg:text-center text-wrap font-thin">
            CAK Design ka zhvilluar zgjidhje thelbësore për bizneset e të
            gjithëve madhësive, nga ndërmarrjet e vogla në korporatat e mëdha,
            si në nivel lokal dhe anembanë globit.
          </p>
        </div>
        <div className="h-[20rem] w-[20rem] md:h-[600px] md:w-[600px] lg:h-[27rem] lg:w-[54rem] flex flex-col justify-center lg:items-end lg:justify-end transition-all duration-300 ease-in-out transform hover:scale-105">
          <img src="/people.svg" alt="Three people illustration"></img>
        </div>
      </div>
    </>
  );
};

export default OurCompetence;
