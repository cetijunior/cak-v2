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
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg w-screen"
          >
            <source
              src="https://www.helmes.com/wp-content/uploads/2022/07/costom-software-development_600.mp4"
              type="video/mp4"
            />
            Ihr Browser unterstützt das Video-Tag nicht.
          </video>
        </div>
        <div className="flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 justify-center w-screen ">
          <div className="w-[380px] md:w-[650px] lg:w-[850px] p-10 md:p-10 lg:p-20 z-10 md:h-[410px] lg:h-[450px] bg-[#F8F9FB] shadow-custom-blue mt-[-110px] md:mt-[-200px] lg:mt-[-370px] rounded-xl space-y-4 md:space-y-8 lg:space-y-12">
            <h1 className="text-start md:text-start lg:text-center mt-[-10px] lg:mt-[-25px] text-3xl md:text-5xl lg:text-6xl text-[#131B23] playfair-display">
              Weltklasse-Designs
            </h1>
            <h3 className="text-start md:text-start lg:text-center lg:text-lg md:text-base text-[#131B23] text-sm font-extralight font-sans-serif ">
              Bei CAK setzen wir uns für Design Thinking als Grundlage für die
              Erarbeitung Lösungen, die die Unternehmensziele erfüllen. Wir
              konzentrieren uns auf die Schaffung von Lösungen zu schaffen, die
              bei den Nutzern ankommen. forschungsbasierte Entwicklung, die auf
              echte Bedürfnisse eingeht und einen echten Wert liefern. Durch die
              Einbeziehung des Feedbacks der Endbenutzer in unseren
              Designprozess einbeziehen, stellen wir sicher, dass unsere
              Lösungen sowohl innovativ als auch von den Nutzern angenommen
              werden. Dieser Ansatz ermöglicht es uns, Erfahrungen zu liefern
              die nicht nur innovativ sind, sondern auch eng mit der
              Zufriedenheit Nutzerzufriedenheit und Geschäftserfolg ausgerichtet
              sind.
            </h3>
          </div>
          <Link legacyBehavior href="/de/Start#contact">
            <button
              className="bg-[#446AF2] hover:font-semibold font-sans-serif lg:text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-custom-blue2 z-10 
            text-white mt-[-20px] md:mt-[-25px] lg:mt-[-30px] py-1 md:py-3 lg:py-3 px-8 md:px-20 lg:px-20 rounded-3xl md:text-xl text-md"
            >
              Kontaktieren Sie uns
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
