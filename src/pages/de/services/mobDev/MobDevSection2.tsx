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
                Eine einzigartige Arbeitsmethode, die 150% Effizienz garantiert
              </h1>
              <p className="pt-4 font-thin">
                Wir nennen es den CAK-Weg. In den letzten 5 Jahren haben wir
                daran gearbeitet ihn zu perfektionieren.
              </p>
              <p className="font-thin">
                Unsere Methoden ermöglichen eine um mindestens 150 % höhere
                Effizienz, sowohl bei und Betriebskosten, verglichen mit anderen
                Outsourcing-Modellen Modellen.
              </p>
            </div>
            <div className="transition-all duration-300 ease-in-out hover:scale-105 pt-8 flex flex-wrap justify-around items-center gap-6">
              <div className="flex flex-col space-y-1 justify-center items-center h-40 w-40 bg-white rounded-3xl shadow-custom-blue transition-all duration-300 ease-in-out hover:scale-110">
                <h3>Dienst</h3>
                <h3 className="text-blue-500 text-3xl">66</h3>
                <h3 className="font-bold">NPS</h3>
              </div>
              <div className="flex flex-col space-y-1 justify-center items-center h-40 w-40 bg-white rounded-3xl shadow-custom-blue transition-all duration-300 ease-in-out hover:scale-110">
                <h3>Verbesserung</h3>
                <h3 className="text-blue-500 text-3xl">150%</h3>
                <h3 className="font-bold">Effizienz</h3>
              </div>
              <div className="flex flex-col space-y-1 justify-center items-center h-40 w-40 bg-white rounded-3xl shadow-custom-blue transition-all duration-300 ease-in-out hover:scale-110">
                <h3>Erfahrung</h3>
                <h3 className="text-blue-500 text-3xl">6+</h3>
                <h3 className="font-bold">Jahre</h3>
              </div>
              <div className="flex flex-col space-y-1 justify-center items-center h-40 w-40 bg-white rounded-3xl shadow-custom-blue transition-all duration-300 ease-in-out hover:scale-110">
                <h3>Portfolio</h3>
                <h3 className="text-blue-500 text-3xl">50+</h3>
                <h3 className="font-bold">Kunden</h3>
              </div>
              <div className="flex flex-col space-y-1 justify-center items-center h-40 w-40 bg-white rounded-3xl shadow-custom-blue transition-all duration-300 ease-in-out hover:scale-110">
                <h3>Büros</h3>
                <h3 className="text-blue-500 text-3xl">3</h3>
                <h3 className="font-bold">Standorte</h3>
              </div>
              <div className="flex flex-col space-y-1 justify-center items-center h-40 w-40 bg-white rounded-3xl shadow-custom-blue transition-all duration-300 ease-in-out hover:scale-110">
                <h3>Mitarbeiter</h3>
                <h3 className="text-blue-500 text-3xl">20+</h3>
                <h3 className="font-bold">Experten</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="py-12 flex flex-col lg:flex-row justify-center items-center gap-10 p-6">
          <div className="space-y-6 max-w-md lg:max-w-lg">
            <h2 className="text-3xl font-playfair text-center lg:text-center">
              Unsere Kunden finden unsere Dienstleistungen außergewöhnlich
            </h2>
            <p className="text-center font-thin">
              Wir entwickeln nicht nur High-End-Mobile-Apps, sondern wir bauen
              auch Geschäftsbeziehungen auf. Unsere frühen Erkenntnisse und
              Endergebnisse übertreffen regelmäßig die Erwartungen unserer
              Kunden.
            </p>
            {/* Additional paragraphs omitted for brevity */}
          </div>
          <img
            className="max-w-full h-auto rounded-2xl lg:w-96 xl:w-[50rem] transition-all duration-300 ease-in-out hover:scale-105"
            src="https://www.helmes.com/wp-content/uploads/2021/10/Helmes_Design_Central-1.jpg"
            alt="Writing on a clear board with a marker"
          />
        </div>
        <ContactSection />
      </div>
    </>
  );
};

export default MobDevSection2;
