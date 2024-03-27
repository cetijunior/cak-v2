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
        <video autoPlay loop muted className="rounded-lg w-screen">
          <source
            src="https://www.helmes.com/wp-content/uploads/2022/07/costom-software-development_600.mp4"
            type="video/mp4"
          />
          Your Browser does not support the video tag.
        </video>
      </div>
      <div className="flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 justify-center w-screen ">
        <div className="w-[380px] md:w-[650px] lg:w-[800px] p-10 md:p-10 lg:p-20 z-10 md:h-[400px] lg:h-[450px] bg-[#F8F9FB] shadow-custom-blue mt-[-100px] md:mt-[-200px] lg:mt-[-300px] rounded-xl space-y-8">
          <h1 className="text-center md:text-start lg:text-center text-3xl md:text-5xl lg:text-6xl font-light font-playfair">
            World-Class Website Development
          </h1>
          <h3 className="text-center lg:text-xl md:text-xl text-sm font-light font-mmontserrat">
            Welcome to CAK, where your project takes center stage. Dive into our
            services to discover how we can lift your vision higher. From
            seamless web development to intuitive UI/UX design, we are here to
            turn your ideas into reality. Partner with us for a journey marked
            by precision, innovation, and transformative outcomes.
          </h3>
        </div>
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-[#446AF2] hover:font-semibold font-montserrat text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-custom-blue2 z-10 text-white mt-[-20px] py-3 px-20 rounded-3xl"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Hero;
