import Footer from "@/components/Footer";
import React from "react";
import "/styles/globals.css";
import Navbar from "./components/smma/Navbar";
import MarketingStack from "./components/smma/MarketingStack";
import SmmaSection from "./components/smma/SmmaSection";
import SmmaSection2 from "./components/smma/SmmaSection2";
import ContactSection from "./components/webDev/ContactSection";

const smma = () => {
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
        <div className="flex flex-col items-center justify-center w-screen transition-all duration-300 ease-in-out transform hover:scale-105">
          <div className="w-[400px] sm:w-[650px] p-20 z-10 sm:h-[400px] bg-[#F8F9FB] shadow-custom-blue mt-[-40px] sm:mt-[-350px] rounded-xl space-y-4 transition-all duration-300 ease-in-out transform hover:scale-105">
            <h1 className="text-center text-2xl sm:text-4xl font-playfair font-bold">
              Engaging Social Media Marketing Solutions
            </h1>
            <h3 className="text-center font-thin">
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
          <button className="bg-[#446AF2] z-10 text-white mt-[-20px] py-3 px-20 rounded-3xl hover:font-bold transition-all duration-300 ease-in-out transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
      <MarketingStack />
      <SmmaSection />
      <SmmaSection2 />
      <ContactSection />
      <Footer />
      
    </>
  );
};

export default smma;
