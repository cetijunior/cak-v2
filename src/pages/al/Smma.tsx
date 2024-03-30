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
            Browseri juaj nuk e suporton këtë video.
          </video>
        </div>
        <div className="flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 justify-center w-screen ">
          <div className="w-[380px] md:w-[650px] lg:w-[850px] p-10 md:p-10 lg:p-20 z-10 md:h-[450px] lg:h-[550px] bg-[#F8F9FB] shadow-custom-blue mt-[-110px] md:mt-[-200px] lg:mt-[-370px] rounded-xl space-y-4 md:space-y-8 lg:space-y-12">
            <h1 className="text-start md:text-start lg:text-center mt-[-10px] lg:mt-[-25px] text-3xl md:text-5xl lg:text-6xl text-[#131B23] playfair-display">
              Angazhimi i zgjidhjeve të marketingut të mediave sociale
            </h1>
            <h3 className="text-start md:text-start lg:text-center lg:text-xl md:text-lg text-[#131B23] text-sm font-extralight font-sans-serif ">
              Zhbllokoni fuqinë e mediave sociale me marketingun tonë me porosi
              strategjitë! Pavarësisht nëse jeni një ndërmarrje në zhvillim ose
              një markë e mirë-vendosur, ne jemi këtu për të lartësuar tuajin
              online prania. Zhyt në zgjidhjet tona të personalizuara që
              rezonojnë me audiencën tuaj, rritni angazhimin dhe nxisni
              konvertimet. Hyni brenda prekni për një plan të personalizuar, të
              plotësuar me një analizë të thellë të arritja e mundshme dhe ROI.
              Le të krijojmë diçka të jashtëzakonshme në internet së bashku.
            </h3>
          </div>
          <Link legacyBehavior href="/al/FaqjaKryesore/#contact">
            <button
              className="bg-[#446AF2] hover:font-semibold font-sans-serif lg:text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-custom-blue2 z-10 
            text-white mt-[-20px] md:mt-[-25px] lg:mt-[-30px] py-1 md:py-3 lg:py-3 px-8 md:px-20 lg:px-20 rounded-3xl md:text-xl text-md"
            >
              Na kontaktoni
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
