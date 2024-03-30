import Footer from "./Footer";
import React from "react";
import "/styles/globals.css";
import Navbar from "./Navbar";
import MarketingStack from "./services/smma/MarketingStack";
import SmmaSection from "./services/smma/SmmaSection";
import SmmaSection2 from "./services/smma/SmmaSection2";
import ContactSection from "./services/webDev/ContactSection";
import Link from "next/link";

const smma = () => {
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
          <div className="w-[380px] md:w-[650px] lg:w-[850px] p-10 md:p-10 lg:p-20 z-10 md:h-[400px] lg:h-[450px] bg-[#F8F9FB] shadow-custom-blue mt-[-110px] md:mt-[-200px] lg:mt-[-370px] rounded-xl space-y-4 md:space-y-8 lg:space-y-12">
            <h1 className="text-start md:text-start lg:text-center mt-[-10px] lg:mt-[-25px] text-3xl md:text-5xl lg:text-6xl text-[#131B23] playfair-display">
              Engagierte Social Media Marketing Lösungen
            </h1>
            <h3 className="text-start md:text-start lg:text-center lg:text-base md:text-base text-[#131B23] text-sm font-extralight font-sans-serif ">
              Nutzen Sie die Macht der sozialen Medien mit unseren
              maßgeschneiderten Marketing Strategien! Ob Sie ein aufstrebendes
              Unternehmen oder eine etablierte Marke sind, wir sind hier, um
              Ihre Online-Präsenz zu Präsenz. Tauchen Sie ein in unsere
              maßgeschneiderten Lösungen, die Ihre Zielgruppe ansprechen, das
              Engagement steigern und Konversionen fördern. Nehmen Sie Kontakt
              kontaktieren Sie uns für einen maßgeschneiderten Plan, komplett
              mit einer eingehenden Analyse potenzieller Reichweite und ROI.
              Lassen Sie uns gemeinsam etwas Bemerkenswertes online schaffen
              gemeinsam.
            </h3>
          </div>
          <Link legacyBehavior href="/de/Start#contact">
            <button
              className="bg-[#446AF2] hover:font-semibold font-sans-serif lg:text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-custom-blue2 z-10 
          text-white mt-[-20px] md:mt-[-25px] lg:mt-[-30px] py-1 md:py-3 lg:py-3 px-10 md:px-20 lg:px-20 rounded-3xl md:text-xl text-md"
            >
              Kontaktieren Sie uns
            </button>
          </Link>
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
