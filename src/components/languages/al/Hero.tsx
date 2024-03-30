"use client";

import React from "react";

function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-screen">
      <div className="flex mt-[-40px] md:mt-[-200px] lg:mt-[-350px] items-center justify-center">
        <video autoPlay loop muted playsInline className="rounded-lg w-screen">
          <source
            src="https://www.helmes.com/wp-content/uploads/2022/07/costom-software-development_600.mp4"
            type="video/mp4"
          />
          Browseri juaj nuk e suporton videon.
        </video>
      </div>
      <div className="flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 justify-center w-screen ">
        <div className="w-[380px] md:w-[650px] lg:w-[850px] p-10 md:p-10 lg:p-20 z-10 md:h-[400px] lg:h-[450px] bg-[#F8F9FB] shadow-custom-blue mt-[-100px] md:mt-[-200px] lg:mt-[-370px] rounded-xl space-y-4 md:space-y-8 lg:space-y-12">
          <h1 className="text-start md:text-start lg:text-center mt-[-10px] lg:mt-[-25px] text-3xl md:text-5xl lg:text-6xl text-[#131B23] playfair-display">
            Zhvillimi i Uebsajteve nga kompania CAK
          </h1>
          <h3 className="text-start md:text-start lg:text-center lg:text-xl md:text-xl text-[#131B23] text-sm font-extralight font-sans-serif ">
            Mirë se vini në CAK, ku projekti juaj është në qendër të vëmendjes.
            Filloni me shërbimet tona për të zbuluar se si mund ta ngremë
            vizionin tuaj më lart. Nga zhvillim i pandërprerë i uebit me dizajn
            intuitiv UI/UX, ne jemi këtu për të kthyer idetë tuaja në realitet.
            Bëhu Partner me ne për një udhëtim të shënuar me saktësi, inovacion
            dhe rezultate transformuese.
          </h3>
        </div>
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-[#446AF2] hover:font-semibold font-sans-serif lg:text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-custom-blue2 z-10 
          text-white mt-[-20px] md:mt-[-25px] lg:mt-[-30px] py-1 md:py-3 lg:py-3 px-8 md:px-20 lg:px-20 rounded-3xl md:text-xl text-md"
        >
          Na kontaktoni
        </button>
      </div>
    </div>
  );
}

export default Hero;
