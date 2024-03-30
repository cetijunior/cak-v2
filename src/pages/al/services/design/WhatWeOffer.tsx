import React from "react";

const WhatWeOffer = () => {
  return (
    <div className="pt-10 sm:h-[35rem] flex flex-col items-center justify-center sm:gap-10 sm:space-x-10 sm:flex-row ">
      <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start space-y-5">
        <h1 className="text-3xl font-playfair font-semibold px-5 pb-4">
          Cfarë mund t'ju ofrojmë ne?
        </h1>
        <p className="px-5 font-thin">
          Përdorimi i një qasjeje të projektimit strategjik në të gjitha
          projektet tona siguron <br></br>
          se krijohet vlera reale. Kjo do të thotë që ne marrim përgjegjësi
          <br></br>
          për të gjithë procesin nga ideimi deri në realizim. Është një{" "}
          <br></br>
          pjesë e rëndësishme e qasjes sonë për të siguruar që zgjidhja është e
          duhura për ju.<br></br>
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:space-x-10">
        <div className="flex flex-col justify-end items-end">
          <div className="flex flex-col justify-end items-end">
            <div className="pt-8 flex flex-col space-y-11">
              <div className="ml-16 bg-white shadow-custom-blue font-playfair rounded-3xl p-4 transition-all duration-300 ease-in-out transform hover:scale-125">
                <h1>◉ Dizajni i përvojës së përdoruesit (UX)</h1>
              </div>
              <div className="mr-8 bg-white shadow-custom-blue font-playfair rounded-3xl p-4 transition-all duration-300 ease-in-out transform hover:scale-125">
                <h1>◉ Dizajni i ndërfaqes së përdoruesit (UI)</h1>
              </div>
              <div className="ml-16 bg-white shadow-custom-blue font-playfair rounded-3xl p-4 w-[11rem] transition-all duration-300 ease-in-out transform hover:scale-125">
                <h1>◉ Dizajni rrethor</h1>
              </div>
              <div className="bg-white shadow-custom-blue font-playfair rounded-3xl p-4 transition-all duration-300 ease-in-out transform hover:scale-125">
                <h1>◉ Speculative Design</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end">
          <div className="flex flex-col space-y-11">
            <div className="ml-16 bg-white shadow-custom-blue font-playfair rounded-3xl p-4 w-[11rem] transition-all duration-300 ease-in-out transform hover:scale-125">
              <h1>◉ Projektimi i Shërbimit</h1>
            </div>
            <div className="mr-12 md:mb-4 bg-white shadow-custom-blue font-playfair rounded-3xl p-4 w-[11rem] transition-all duration-300 ease-in-out transform hover:scale-125">
              <h1>◉ Dizajni i Sistemeve</h1>
            </div>
            <div className="ml-16 bg-white shadow-custom-blue rounded-3xl font-playfair p-4 w-[11rem] transition-all duration-300 ease-in-out transform hover:scale-125">
              <h1>◉ Dizajni i së ardhmes</h1>
            </div>
            <div className="bg-white shadow-custom-blue font-playfair rounded-3xl p-4 transition-all duration-300 ease-in-out transform hover:scale-125">
              <h1>◉ Dizajni i përvojës së klientit (CX)</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
