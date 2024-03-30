"use client";
import React, { useEffect, useRef, useState } from "react";
import ContactSection from "../webDev/ContactSection";

const MobDevSection2 = () => {
  const [visible, setVisible] = useState(false); // Track if the section is visible
  const [show, setShow] = useState([false, false, false]); // Individual visibility for links

  const stackRef = useRef(null); // Use ref to reference the about section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.01 }
    );

    if (stackRef.current) {
      observer.observe(stackRef.current);
    }

    return () => {
      if (stackRef.current) {
        observer.unobserve(stackRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (visible) {
      // Trigger fade-in effect for each part of the section with a delay
      show.forEach((_, index) => {
        setTimeout(() => {
          setShow((s) => {
            const newShow = [...s];
            newShow[index] = true;
            return newShow;
          });
        }, index * 1000); // Sequential delay
      });
    }
  }, [visible]);
  return (
    <>
      <div
        ref={stackRef}
        style={{ opacity: show[0] ? 1 : 0, transition: "opacity 1s ease" }}
      >
        <div className="pt-12 flex justify-center">
          <div className="flex flex-col items-center justify-center bg-gray-100 shadow-lg rounded-2xl w-full max-w-[80rem] p-6 transition-all duration-300 ease-in-out hover:scale-105">
            <div className="text-center">
              <h1 className="text-3xl font-playfair">
                Një metodë unike pune që garanton 150% efikasitet
              </h1>
              <p className="pt-4 font-thin">
                Ne e quajmë atë Rruga e CAK. Për 5 vitet e fundit, ne kemi
                punuar për të përsosur atë.
              </p>
              <p className="font-thin">
                Metodat tona mundësojnë të paktën 150% efikasitet më të madh, në
                të dyja kostot e dorëzimit dhe pronësisë, krahasuar me
                kontraktimet e tjera modele.
              </p>
            </div>
            <div className="transition-all duration-300 ease-in-out hover:scale-105 pt-8 flex flex-wrap justify-around items-center gap-6">
              <div className="flex flex-col space-y-1 justify-center items-center h-40 w-40 bg-white rounded-3xl shadow-custom-blue transition-all duration-300 ease-in-out hover:scale-110">
                <h1>Shërbimet</h1>
                <h1 className="text-blue-500 text-3xl">66</h1>
                <h1 className="font-bold">NPS</h1>
              </div>
              <div className="flex flex-col space-y-1 justify-center items-center h-40 w-40 bg-white rounded-3xl shadow-custom-blue transition-all duration-300 ease-in-out hover:scale-110">
                <h1>përmirësim</h1>
                <h1 className="text-blue-500 text-3xl">150%</h1>
                <h1 className="font-bold">eficencs</h1>
              </div>
              <div className="flex flex-col space-y-1 justify-center items-center h-40 w-40 bg-white rounded-3xl shadow-custom-blue transition-all duration-300 ease-in-out hover:scale-110">
                <h1>Eksperienca</h1>
                <h1 className="text-blue-500 text-3xl">6+</h1>
                <h1 className="font-bold">vite</h1>
              </div>
              <div className="flex flex-col space-y-1 justify-center items-center h-40 w-40 bg-white rounded-3xl shadow-custom-blue transition-all duration-300 ease-in-out hover:scale-110">
                <h1>Portofoli</h1>
                <h1 className="text-blue-500 text-3xl">50+</h1>
                <h1 className="font-bold">Klientë</h1>
              </div>
              <div className="flex flex-col space-y-1 justify-center items-center h-40 w-40 bg-white rounded-3xl shadow-custom-blue transition-all duration-300 ease-in-out hover:scale-110">
                <h1>Zyrat</h1>
                <h1 className="text-blue-500 text-3xl">3</h1>
                <h1 className="font-bold">shtete</h1>
              </div>
              <div className="flex flex-col space-y-1 justify-center items-center h-40 w-40 bg-white rounded-3xl shadow-custom-blue transition-all duration-300 ease-in-out hover:scale-110">
                <h1>Njerëz</h1>
                <h1 className="text-blue-500 text-3xl">20+</h1>
                <h1 className="font-bold">ekspertë</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="py-12 flex flex-col lg:flex-row justify-center items-center gap-10 p-6">
          <div className="space-y-6 max-w-md lg:max-w-lg">
            <h1 className="text-3xl font-playfair text-center lg:text-center">
              Klientët tanë i shohin shërbimet tona të jashtëzakonshme
            </h1>
            <p className="text-center font-thin">
              Ne nuk zhvillojmë vetëm aplikacione celulare të nivelit të lartë,
              por gjithashtu ndërtojmë marrëdhëniet e biznesit. Vështrimet tona
              të hershme dhe rezultatet përfundimtare tejkalojnë në mënyrë
              rutinore pritjet e klientëve.
            </p>
            {/* Additional paragraphs omitted for brevity */}
          </div>
          <img
            className="max-w-full h-auto rounded-2xl lg:w-96 xl:w-[50rem] transition-all duration-300 ease-in-out hover:scale-105"
            src="/clients.jpg"
            alt="Clients"
          />
        </div>
        <ContactSection />
      </div>
    </>
  );
};

export default MobDevSection2;
