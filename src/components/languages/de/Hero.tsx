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
          Ihr Browser unterstützt das Video-Tag nicht.
        </video>
      </div>
      <div className="flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 justify-center w-screen ">
        <div className="w-[380px] md:w-[650px] lg:w-[850px] p-10 md:p-10 lg:p-20 z-10 md:h-[400px] lg:h-[450px] bg-[#F8F9FB] shadow-custom-blue mt-[-100px] md:mt-[-200px] lg:mt-[-370px] rounded-xl space-y-4 md:space-y-8 lg:space-y-12">
          <h1 className="text-start md:text-start lg:text-center mt-[-10px] lg:mt-[-25px] text-3xl md:text-5xl lg:text-6xl text-[#131B23] playfair-display">
            Weltklasse Website-Entwicklung
          </h1>
          <h3 className="text-start md:text-start lg:text-center lg:text-xl md:text-xl text-[#131B23] text-sm font-extralight font-sans-serif ">
            Willkommen bei CAK, wo Ihr Projekt im Mittelpunkt steht. Tauchen Sie
            ein in unsere Dienstleistungen und entdecken Sie, wie wir Ihre
            Visionen verwirklichen können. Von nahtloser Webentwicklung bis hin
            zu intuitivem UI/UX Design, wir sind hier, um Ihre Ideen in die
            Realität umzusetzen. Gehen Sie mit uns auf eine Reise, die von
            Präzision von Präzision, Innovation und transformativen Ergebnissen.
          </h3>
        </div>
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-[#446AF2] hover:font-semibold font-sans-serif lg:text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-custom-blue2 z-10 
          text-white mt-[-20px] md:mt-[-25px] lg:mt-[-30px] py-1 md:py-3 lg:py-3 px-8 md:px-20 lg:px-20 rounded-3xl md:text-xl text-md"
        >
          Kontaktieren Sie uns
        </button>
      </div>
    </div>
  );
}

export default Hero;
