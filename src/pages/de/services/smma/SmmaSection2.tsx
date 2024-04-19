import React from "react";

const SmmaSection2 = () => {
  return (
    <div className="pt-12 flex flex-col justify-center">
      <div className="py-12 flex flex-col lg:flex-row justify-center items-center gap-20 p-6">
        <div className="space-y-6 max-w-md lg:max-w-lg">
          <h1 className="text-3xl font-playfair font-semibold text-center">
            Unsere Kunden lieben unsere wirkungsvollen Social Media-Strategien
          </h1>
          <p className="text-center font-thin">
            Wir machen mehr als nur dynamische Social-Media-Kampagnen; wir
            schmieden dauerhafte Partnerschaften. Unsere strategischen
            Erkenntnisse und wirkungsvollen Ergebnisse übertreffen stets die
            Erwartungen unserer Kunden.
          </p>
        </div>
        <img
          className="w-[400px] h-auto lg:w-[700px] rounded-2xl md:rounded-[39px] lg:rounded-[39px] shadow-custom-blue2 md:w-[50rem] transition-all duration-300 ease-in-out transform hover:scale-105"
          src="/smmapic.png"
          alt="Social Media Marketing pole of icons"
        />
      </div>
    </div>
  );
};

export default SmmaSection2;
