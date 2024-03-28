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
      text: "First card text",
      description:
        "Detailed description for 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis maxime nostrum repellendus repudiandae velit inventore nulla maiores corporis obcaecati, error atque provident, aperiam blanditiis tempora incidunt. Explicabo itaque pariatur a!",
      tech: "UI/UX  Front- and Back-End Website",
    },
    {
      id: 2,
      text: "Second card text",
      description:
        "Detailed description for 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis maxime nostrum repellendus repudiandae velit inventore nulla maiores corporis obcaecati, error atque provident, aperiam blanditiis tempora incidunt. Explicabo itaque pariatur a!",
      tech: "UI/UX  Front- and Back-End Website",
    },
    {
      id: 3,
      text: "Third card text",
      description:
        "Detailed description for 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis maxime nostrum repellendus repudiandae velit inventore nulla maiores corporis obcaecati, error atque provident, aperiam blanditiis tempora incidunt. Explicabo itaque pariatur a!",
      tech: "UI/UX  Front- and Back-End Website",
    },
    {
      id: 4,
      text: "Fourth card text",
      description:
        "Detailed description for 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis maxime nostrum repellendus repudiandae velit inventore nulla maiores corporis obcaecati, error atque provident, aperiam blanditiis tempora incidunt. Explicabo itaque pariatur a!",
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
    screenWidth < 640 ? "split-bg-vertically" : "bgForAbout";

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
            className={`flex flex-col
                                    sm:flex-row items-center justify-between md:h-auto p-4 rounded-[39px] lg:h-[300px]`}
          >
            <img
              src="/Macbook.png"
              alt="Project"
              className="w-80 h-40 transition-all duration-300 ease-in-out transform hover:scale-105 sm:ml-[40px] rounded-2xl"
            />
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
      ))}
    </div>
  );
}

export default ProjectCard;
