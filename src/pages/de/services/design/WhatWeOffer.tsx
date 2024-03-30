import React from "react";

const WhatWeOffer = () => {
  return (
    <div className="pt-10 lg:h-[35rem] px-12 flex flex-col items-center justify-center lg:gap-10 lg:space-x-10 lg:flex-row">
      <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start space-y-5">
        <h1 className="text-3xl font-playfair font-semibold pb-4">
          Was bieten wir?
        </h1>
        <p className="font-thin">
          Die Anwendung eines strategischen Designansatzes bei all unseren
          Projekten gewährleistet, dass ein echter Mehrwert geschaffen wird. Das
          bedeutet, dass wir die Verantwortung für den gesamten Prozess von der
          Idee bis zur Realisierung übernehmen. Dies ist ein wichtiger Teil
          unseres Ansatzes, um sicherzustellen, dass die Lösung die richtige für
          Sie ist.
        </p>
      </div>
      <div className="flex flex-col  md:flex-row gap-8 md:space-x-10">
        <div className="flex flex-col justify-end items-end">
          <div className="flex flex-col justify-end items-end">
            <div className="pt-8 flex flex-col space-y-11">
              <div className="ml-16 bg-white shadow-custom-blue font-playfair rounded-3xl p-4 transition-all duration-300 ease-in-out transform hover:scale-125">
                <h1>◉ Benutzerfreundliches Design (UX)</h1>
              </div>
              <div className="mr-8 bg-white shadow-custom-blue font-playfair rounded-3xl p-4 transition-all duration-300 ease-in-out transform hover:scale-125">
                <h1>◉ Gestaltung der Benutzeroberfläche (UI)</h1>
              </div>
              <div className="ml-16 bg-white shadow-custom-blue font-playfair rounded-3xl p-4 w-[11rem] transition-all duration-300 ease-in-out transform hover:scale-125">
                <h1>◉ Kreisförmiges Design</h1>
              </div>
              <div className="bg-white shadow-custom-blue font-playfair rounded-3xl p-4 transition-all duration-300 ease-in-out transform hover:scale-125">
                <h1>◉ Spekulativer Entwurf</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end">
          <div className="flex flex-col space-y-11">
            <div className="ml-16 bg-white shadow-custom-blue font-playfair rounded-3xl p-4 w-[11rem] transition-all duration-300 ease-in-out transform hover:scale-125">
              <h1>◉ Dienstleistungsdesign</h1>
            </div>
            <div className="mr-12 md:mb-4 bg-white shadow-custom-blue font-playfair rounded-3xl p-4 w-[11rem] transition-all duration-300 ease-in-out transform hover:scale-125">
              <h1>◉ Entwurf von Systemen</h1>
            </div>
            <div className="ml-16 bg-white shadow-custom-blue rounded-3xl font-playfair p-4 w-[11rem] transition-all duration-300 ease-in-out transform hover:scale-125">
              <h1>◉ Zukünftiges Design</h1>
            </div>
            <div className="bg-white shadow-custom-blue font-playfair rounded-3xl p-4 transition-all duration-300 ease-in-out transform hover:scale-125">
              <h1>◉ Kundenerlebnis-Design (CX)</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
