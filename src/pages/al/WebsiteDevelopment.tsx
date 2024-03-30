"use client";
import "/styles/globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TechSection from "./services/webDev/TechSection";
import HowWeWork from "./services/webDev/HowWeWork";
import Relationship from "./services/webDev/Relationship";
import ContactSection from "./services/webDev/ContactSection";
import Link from "next/link";

const webdev = () => {
  return (
    <>
      <Navbar />
      <div className="">
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
            Browseri juaj nuk e suporton videon.
          </video>
        </div>
        <div className="flex flex-col transition-all duration-300 ease-in-out transform hover:scale-105 items-center justify-center w-screen">
          <div className="w-[380px] md:w-[650px] lg:w-[850px] p-10 md:p-10 lg:p-20 z-10 md:h-[400px] lg:h-[450px] bg-[#F8F9FB] shadow-custom-blue mt-[-100px] md:mt-[-200px] lg:mt-[-370px] rounded-xl space-y-4 md:space-y-8 lg:space-y-12">
            <h1 className="text-start md:text-start lg:text-center mt-[-10px] lg:mt-[-25px] text-3xl md:text-5xl lg:text-6xl text-[#131B23] playfair-display">
              Krijimi i Uebsajtit tuaj
            </h1>
            <h3 className="text-start md:text-start lg:text-center lg:text-xl md:text-xl text-[#131B23] text-sm font-extralight font-sans-serif ">
              Përdorni potencialin e botës dixhitale me faqen tonë të internetit
              të personalizuar për shërbimet e zhvillimit! Pavarësisht nëse jeni
              një startup në rritje apo biznes i krijuar, ne jemi të përkushtuar
              për të përmirësuar ueb-in tuaj. Eksploroni zgjidhjet tona të
              personalizuara të uebit të krijuara për lidhjen me audiencën tuaj
              të synuar, rrisni angazhimin e përdoruesve dhe stimulojnë shitjet.
              Kërkoni një strategji të personalizuar, duke shfaqur a vlerësimi i
              detajuar i ndikimit dhe kthimit tuaj në internet investimi. Le të
              bashkëpunojmë për të ndërtuar diçka e jashtëzakonshme në internet.
            </h3>
          </div>
          <Link legacyBehavior href="/al/FaqjaKryesore/#contact">
            <button
              className="bg-[#446AF2] hover:font-semibold font-sans-serif lg:text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-custom-blue2 z-10 
            text-white mt-[-20px] md:mt-[-25px] lg:mt-[-30px] py-1 md:py-3 lg:py-3 px-8 md:px-20 lg:px-20 rounded-3xl md:text-xl text-md"
            >
              Na Kontaktoni
            </button>
          </Link>
        </div>
      </div>
      <div className="">
        <TechSection />
        <HowWeWork />
        <Relationship />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default webdev;
