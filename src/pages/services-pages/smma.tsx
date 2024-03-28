import Footer from "./Footer";
import React from "react";
import "/styles/globals.css";
import Navbar from "./Navbar";
import MarketingStack from "./components/smma/MarketingStack";
import SmmaSection from "./components/smma/SmmaSection";
import SmmaSection2 from "./components/smma/SmmaSection2";
import ContactSection from "./components/webDev/ContactSection";
import Link from "next/link";

const smma = () => {
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
          <div className="w-[380px] md:w-[650px] lg:w-[850px] p-10 md:p-10 lg:p-20 z-10 md:h-[400px] lg:h-[450px] bg-[#F8F9FB] shadow-custom-blue mt-[-110px] md:mt-[-200px] lg:mt-[-370px] rounded-xl space-y-4 md:space-y-8 lg:space-y-12">
            <h1 className="text-start md:text-start lg:text-center mt-[-10px] lg:mt-[-25px] text-3xl md:text-5xl lg:text-6xl text-[#131B23] playfair-display">
              Engaging Social Media Marketing Solutions
            </h1>
            <h3 className="text-start md:text-start lg:text-center lg:text-xl md:text-xl text-[#131B23] text-sm font-extralight font-sans-serif ">
              Unlock the power of social media with our bespoke marketing
              strategies! Whether you`re a budding enterprise or a
              well-established brand, we`re here to elevate your online
              presence. Dive into our tailor-made solutions that resonate with
              your audience, boost engagement, and drive conversions. Get in
              touch for a customized plan, complete with an in-depth analysis of
              potential reach and ROI. Let`s create something remarkable online
              together.
            </h3>
          </div>
          <Link legacyBehavior href="/#contact">
            <button className="bg-[#446AF2] hover:font-semibold font-sans-serif lg:text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-custom-blue2 z-10 
          text-white mt-[-20px] md:mt-[-25px] lg:mt-[-30px] py-1 md:py-3 lg:py-3 px-10 md:px-20 lg:px-20 rounded-3xl md:text-xl text-md"
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div >
      <MarketingStack />
      <SmmaSection />
      <SmmaSection2 />
      <ContactSection />
      <Footer />
    </>
  );
};

export default smma;
