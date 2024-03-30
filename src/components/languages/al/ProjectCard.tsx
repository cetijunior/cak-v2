/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";

function ProjectCard() {
  // Initialize screenWidth state to 0 to safely handle server-side rendering
  const [screenWidth, setScreenWidth] = useState(0);
  const [show, setShow] = useState(new Array(4).fill(false));

  // Cards data
  const cards = [
    {
      id: 1,
      text: "Klinika Estetike",
      image: "/wellnessTemplate.png",
      className:
        "mt-[-30px]  w-[400px] h-[250px] md:mt-[-40px] md:w-[300px] md:h-[280px] lg:mt-[-10px] lg:w-[350px] lg:h-[250px] transition-all duration-300 ease-in-out transform hover:scale-105 rounded-2xl'",
      description:
        "Uebfaqja e Wellness Clinic, një vitrinë e ekspertizës së Ueb Solutions të CAK shpk në krijimin e hapësirave dixhitale për bizneset e kujdesit estetik. Puna jonë thekson dizajnin dhe funksionalitetin intuitiv, duke paraqitur terapitë, klasat dhe burimet e klinikës në një platformë miqësore për përdoruesit. Ky projekt pasqyron angazhimin tonë për bashkimin e dizajnit me nevojat e industrisë së mirëqenies.",
      tech: "UI/UX  Front- and Back-End Website",
    },
    {
      id: 2,
      text: "Kompania e Ndërtimit",
      image: "/constructionTemplate.png",
      className:
        "mt-[-10px]  w-[400px] h-[250px] md:mt-[-40px] md:w-[300px] md:h-[280px] lg:mt-[15px] lg:ml-[-20px] lg:w-[350px] lg:h-[250px] transition-all duration-300 ease-in-out transform hover:scale-105 rounded-2xl'",
      description:
        "Faqja e internetit e Kompanisë së Ndërtimit nga CAK Web Solutions, duke shfaqur ekspertizën tonë në zgjidhje digjitale të përshtatura për industrinë e ndërtimit. Dizajni ynë bashkon funksionalitetin dhe estetikën, duke nxjerrë në pah projektet dhe shërbimet e kompanisë në një format lehtësisht të navigueshëm, që reflekton angazhimin tonë për dizajn inovativ të përshtatur me nevojat e ndërtimit.",
      tech: "UI/UX  Front- and Back-End Website",
    },
    {
      id: 3,
      text: "Dyqan Online",
      image: "/ecommerceTemplate.png",
      className:
        "mt-[-30px] w-[400px] h-[280px] md:mt-[-40px] md:w-[300px] md:h-[280px] lg:mt-[0px] lg:ml-[-10px] lg:w-[350px] lg:h-[250px] transition-all duration-300 ease-in-out transform hover:scale-105 rounded-2xl'",
      description:
        " Faqja e internetit të Dyqanit E-Commerce, e krijuar nga CAK Web Solutions, ku dizajni i shkëlqyeshëm takon funksionalitetin pa probleme. Ky shfaqje e zhvillimit të platformës sonë tregtare online nxjerr në pah një përvojë blerjeje intuitive e dizajnuar për të ngritur markat dhe për të shtyrë shitjet, duke reflektuar përkushtimin tonë ndaj zgjidhjeve inovative, të qendruara tek përdoruesi në sektorin e eCommerce.",
      tech: "UI/UX  Front- and Back-End Website",
    },
    {
      id: 4,
      text: "Uebsajt per Restaurant",
      image: "/restaurantTemplate.png",
      className:
        "mt-[-30px]  w-[400px] h-[280px] md:mt-[-40px] md:w-[300px] md:h-[280px] lg:ml-[10px] lg:mt-[30px] lg:w-[350px] lg:h-[250px] transition-all duration-300 ease-in-out transform hover:scale-105 rounded-2xl'",
      description:
        "Faqja e internetit të Restorantit, e krijuar nga CAK Web Solutions, shfaq aftësinë tonë për të krijuar përvoja digjitale të angazhuese për markat e restoranteve, duke përzier apelin estetik me funksionalitetin. Ajo nxjerr në pah menunë dhe atmosferën, duke nënvizuar përkushtimin tonë për të përmirësuar praninë online dhe angazhimin e klientëve pa nevojën për një vizitë të drejtpërdrejtë.",
      tech: "UI/UX  Front- and Back-End Website",
    },
  ];

  useEffect(() => {
    // Handle window resize
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set screenWidth
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Sequential fade-in logic
    const timerIds = show.map(
      (_, index) =>
        setTimeout(() => {
          setShow((prevShow) => {
            const newShow = [...prevShow];
            newShow[index] = true;
            return newShow;
          });
        }, index * 500) // Sequential delay (500ms, 1000ms, ...)
    );
    return () => timerIds.forEach(clearTimeout); // Cleanup timeouts
  }, []);

  const backgroundClass =
    screenWidth < 1024 ? "split-bg-vertically" : "bgForAbout";

  return (
    <div className="flex flex-col items-center rounded-[39px] mt-4 md:mt-10 lg:mt-20">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`w-[350px] sm:w-[700px] my-4 ${backgroundClass}  shadow-custom-blue rounded-[39px]
                                ${
                                  index % 2 === 0
                                    ? "lg:-ml-60 md:-ml-20"
                                    : "lg:-mr-60 md:-mr-20"
                                }
                                transition-opacity duration-1000 ${
                                  show[index] ? "opacity-100" : "opacity-0"
                                }
                                transition-transform transform hover:scale-105 ease-in-out duration-300`}
        >
          <div
            className={`flex flex-col md:flex-col lg:flex-row items-center justify-between md:h-auto p-4 rounded-[39px] lg:h-[300px]`}
          >
            <img src={card.image} alt={card.text} className={card.className} />

            <div>
              <div className="px-6 pt-8 sm:pt-0 space-y-2 sm:space-y-4">
                <p className="font-semibold font-playfair text-3xl text-start sm:text-start">
                  {card.text}
                </p>
                <h1 className="text-sm text-start font-extralight text-[#131B23] sm:text-start">
                  {card.description}
                </h1>
                <p className="font-light font-playfair text-[#131B23] text-[15px] text-start sm:text-start">
                  {card.tech}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
