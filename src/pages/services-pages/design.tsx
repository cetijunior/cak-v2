import React from "react";
import Navbar from "./components/design/Navbar";
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
            <h1 className="text-center md:text-center lg:text-center text-4xl font-playfair md:text-5xl lg:text-6xl font-bold">
              World-Class Designs
            </h1>
            <h3 className="text-center md:text-start text-lg font-thin lg:text-center">
              At CAK, we champion design thinking as the foundation for crafting
              impactful solutions that meet business goals. We focus on creating
              solutions that resonate with users, driven by our commitment to
              research-based development that addresses genuine needs and
              delivers real value. By integrating end-user feedback into our
              design process, we ensure our solutions are both innovative and
              user-approved. This approach enables us to deliver experiences
              that are not only cutting-edge but also closely aligned with both
              user satisfaction and business success.
            </h3>
          </div>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-[#446AF2] hover:font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-custom-blue2 z-10 text-white mt-[-20px] py-3 px-20 rounded-3xl"
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
