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
      text: "The Wellness Clinic",
      image: "/wellnessTemplate.png",
      className:
        "mt-[-30px]  w-[400px] h-[250px] md:mt-[-40px] md:w-[300px] md:h-[280px] lg:mt-[-10px] lg:w-[350px] lg:h-[250px] transition-all duration-300 ease-in-out transform hover:scale-105 rounded-2xl'",
      description:
        "The Wellness Clinic website, a showcase of CAK Web Solutions' expertise in crafting digital spaces for holistic health businesses. Our work emphasizes intuitive design and functionality, presenting the clinic's therapies, classes, and resources in a user-friendly platform. This project reflects our commitment to merging design with wellness industry needs.",
      tech: "UI/UX  Front- and Back-End Website",
    },
    {
      id: 2,
      text: "The Construction Company",
      image: "/constructionTemplate.png",
      className:
        "mt-[-10px]  w-[400px] h-[250px] md:mt-[-40px] md:w-[300px] md:h-[280px] lg:mt-[15px] lg:ml-[-20px] lg:w-[350px] lg:h-[250px] transition-all duration-300 ease-in-out transform hover:scale-105 rounded-2xl'",
      description:
        "The Construction Company website by CAK Web Solutions, showcasing our expertise in tailored digital solutions for the construction industry. Our design merges functionality and aesthetics, highlighting the company’s projects and services in an easily navigable format, reflecting our commitment to innovative design tailored to construction needs.",
      tech: "UI/UX  Front- and Back-End Website",
    },
    {
      id: 3,
      text: "E-Commerce Store",
      image: "/ecommerceTemplate.png",
      className:
        "mt-[-30px] w-[400px] h-[280px] md:mt-[-40px] md:w-[300px] md:h-[280px] lg:mt-[0px] lg:ml-[-10px] lg:w-[350px] lg:h-[250px] transition-all duration-300 ease-in-out transform hover:scale-105 rounded-2xl'",
      description:
        "The ECommerce Shop website, crafted by CAK Web Solutions, where sleek design meets seamless functionality. This showcase of our online retail platform development highlights an intuitive shopping experience designed to elevate brands and drive sales, reflecting our dedication to innovative, user-centric solutions in the eCommerce sector.",
      tech: "UI/UX  Front- and Back-End Website",
    },
    {
      id: 4,
      text: "Restaurant Website",
      image: "/restaurantTemplate.png",
      className:
        "mt-[-30px]  w-[400px] h-[280px] md:mt-[-40px] md:w-[300px] md:h-[280px] lg:ml-[10px] lg:mt-[30px] lg:w-[350px] lg:h-[250px] transition-all duration-300 ease-in-out transform hover:scale-105 rounded-2xl'",
      description:
        "The Restaurant website, crafted by CAK Web Solutions, showcases our ability to create engaging digital experiences for dining brands, blending aesthetic appeal with functionality. It highlights the menu and ambiance, underlining our dedication to enhancing online presence and customer engagement without needing a direct visit.",
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
