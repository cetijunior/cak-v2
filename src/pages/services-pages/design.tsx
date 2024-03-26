import Navbar from "@/components/Navbar";
import React from "react";
import Hero from "../Hero";
import Footer from "@/components/Footer";
import "/styles/globals.css";
import ContactSection from "./components/webDev/ContactSection";
import Relationship from "./components/webDev/Relationship";
import OurCompetence from "./components/design/OurCompetence";
import WhatWeOffer from "./components/design/WhatWeOffer";

const design = () => {
  function scrollToSection(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <Navbar />
      <div className="w-screen">
        <div className="flex bg-[#1E1919 mt-[-50px] sm:mt-[-350px] items-center justify-center">
          <video autoPlay loop muted className="rounded-lg w-screen">
            <source
              src="https://www.helmes.com/wp-content/uploads/2022/07/costom-software-development_600.mp4"
              type="video/mp4"
            />
            Your Browser does not support the video tag.
          </video>
        </div>
        <div className="flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 justify-center w-screen ">
          <div className="w-[400px] sm:w-[650px] p-20 z-10 sm:h-[400px] bg-[#F8F9FB] shadow-custom-blue mt-[-40px] sm:mt-[-350px] rounded-xl space-y-4">
            <h1 className="text-center text-2xl sm:text-4xl font-bold">
              World-Class Designs
            </h1>
            <h3 className="text-center">
              Welcome to CAK, where your project takes center stage. Dive into
              our services to discover how we can lift your vision higher. From
              seamless web development to intuitive UI/UX design, we`re here to
              turn your ideas into reality. Partner with us for a journey marked
              by precision, innovation, and transformative outcomes.
            </h3>
          </div>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-[#446AF2] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-custom-blue2 z-10 text-white mt-[-20px] py-3 px-20 rounded-3xl"
          >
            Contact Us
          </button>
        </div>
      </div>
      <OurCompetence />
      <ContactSection />
      <div className="h-20"></div>
      <WhatWeOffer />
      <Relationship />
      <div className="h-40"></div>
      <Footer />
    </>
  );
};

export default design;
