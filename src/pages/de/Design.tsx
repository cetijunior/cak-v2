import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "/styles/globals.css";
import ContactSection from "./services/webDev/ContactSection";
import Relationship from "./services/webDev/Relationship";
import OurCompetence from "./services/design/OurCompetence";
import WhatWeOffer from "./services/design/WhatWeOffer";
import Link from "next/link";

const design = () => {
  function scrollToSection(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <Navbar />
      <div className="w-screen">
        <div className="flex mt-[-40px] md:mt-[-200px] lg:mt-[-350px] items-center justify-center">
          <video autoPlay loop muted playsInline className="rounded-lg w-screen">
            <source
              src="https://www.helmes.com/wp-content/uploads/2022/07/costom-software-development_600.mp4"
              type="video/mp4"
            />
            Your Browser does not support the video tag.
          </video>
        </div>
        <div className="flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 justify-center w-screen ">
          <div className="w-[380px] md:w-[650px] lg:w-[850px] p-10 md:p-10 lg:p-20 z-10 md:h-[410px] lg:h-[450px] bg-[#F8F9FB] shadow-custom-blue mt-[-110px] md:mt-[-200px] lg:mt-[-370px] rounded-xl space-y-4 md:space-y-8 lg:space-y-12">
            <h1 className="text-start md:text-start lg:text-center mt-[-10px] lg:mt-[-25px] text-3xl md:text-5xl lg:text-6xl text-[#131B23] playfair-display">
              World-Class Designs
            </h1>
            <h3 className="text-start md:text-start lg:text-center lg:text-xl md:text-xl text-[#131B23] text-sm font-extralight font-sans-serif ">
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
          <Link legacyBehavior href="/de/Start#contact">
            <button
              className="bg-[#446AF2] hover:font-semibold font-sans-serif lg:text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-custom-blue2 z-10 
            text-white mt-[-20px] md:mt-[-25px] lg:mt-[-30px] py-1 md:py-3 lg:py-3 px-8 md:px-20 lg:px-20 rounded-3xl md:text-xl text-md"
            >
              Contact Us
            </button>
          </Link>
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
