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
      text: "Die Wellness-Klinik",
      image: "/wellnessTemplate.png",
      alt: "Die Wellness-Klinik Website Vorlage 3D Mockup",
      className:
        "mt-[-30px]  w-[400px] h-[250px] md:mt-[-40px] md:w-[300px] md:h-[280px] lg:mt-[-10px] lg:w-[350px] lg:h-[250px] transition-all duration-300 ease-in-out transform hover:scale-105 rounded-2xl'",
      description:
        "Die Website der Wellness Kliniek, ein Beispiel für die Kompetenz von CAK Web Solutions bei der Gestaltung digitaler Räume für ganzheitliche Gesundheitsunternehmen. Unsere Arbeit legt Wert auf intuitives Design und Funktionalität und präsentiert die Therapien, Kurse und Ressourcen der Klinik auf einer benutzerfreundlichen Plattform. Dieses Projekt spiegelt unser Engagement für die Verschmelzung von Design mit den Anforderungen der Wellnessbranche wider.",
      tech: "UI/UX  Front- und Back-End Website",
    },
    {
      id: 2,
      text: "Das Bauunternehmen",
      image: "/constructionTemplate.png",
      alt: "Die Website des Bauunternehmens Vorlage 3D Mockup",
      className:
        "mt-[-10px]  w-[400px] h-[250px] md:mt-[-40px] md:w-[300px] md:h-[280px] lg:mt-[15px] lg:ml-[-20px] lg:w-[350px] lg:h-[250px] transition-all duration-300 ease-in-out transform hover:scale-105 rounded-2xl'",
      description:
        "Die Website des Bauunternehmens von CAK Web Solutions, die unser Fachwissen in Bezug auf maßgeschneiderte digitale Lösungen für die Baubranche unter Beweis stellt. Unser Design vereint Funktionalität und Ästhetik und hebt die Projekte und Dienstleistungen des Unternehmens in einem leicht navigierbaren Format hervor, das unser Engagement für innovatives, auf die Bedürfnisse der Baubranche zugeschnittenes Design widerspiegelt.",
      tech: "UI/UX  Front- und Back-End Website",
    },
    {
      id: 3,
      text: "E-Commerce-Shop",
      image: "/ecommerceTemplate.png",
      alt: "E-Commerce-Shop Website Vorlage 3D Mockup",
      className:
        "mt-[-30px] w-[400px] h-[280px] md:mt-[-40px] md:w-[300px] md:h-[280px] lg:mt-[0px] lg:ml-[-10px] lg:w-[350px] lg:h-[250px] transition-all duration-300 ease-in-out transform hover:scale-105 rounded-2xl'",
      description:
        "Die von CAK Web Solutions gestaltete ECommerce Shop-Website, bei der elegantes Design auf nahtlose Funktionalität trifft. Dieses Beispiel für die Entwicklung unserer Online-Einzelhandelsplattform zeigt ein intuitives Einkaufserlebnis, das darauf ausgelegt ist, Marken aufzuwerten und den Umsatz zu steigern, und spiegelt unser Engagement für innovative, nutzerzentrierte Lösungen im E-Commerce-Sektor wider.",
      tech: "UI/UX  Front- and Back-End Website",
    },
    {
      id: 4,
      text: "Restaurant Webseite",
      image: "/restaurantTemplate.png",
      alt: "Restaurant Webseite Vorlage 3D Mockup",
      className:
        "mt-[-30px]  w-[400px] h-[280px] md:mt-[-40px] md:w-[300px] md:h-[280px] lg:ml-[10px] lg:mt-[30px] lg:w-[350px] lg:h-[250px] transition-all duration-300 ease-in-out transform hover:scale-105 rounded-2xl'",
      description:
        "Die von CAK Web Solutions gestaltete Restaurant-Website zeigt, dass wir in der Lage sind, ansprechende digitale Erlebnisse für gastronomische Marken zu schaffen und dabei Ästhetik mit Funktionalität zu verbinden. Sie hebt die Speisekarte und das Ambiente hervor und unterstreicht unser Engagement für die Verbesserung der Online-Präsenz und der Kundenbindung, ohne dass ein direkter Besuch erforderlich ist.",
      tech: "UI/UX  Front- und Back-End Website",
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
            <img src={card.image} alt={card.alt} className={card.className} />

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
