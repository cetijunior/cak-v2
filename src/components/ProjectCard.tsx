"use client";

import React, { useEffect, useState } from "react";

function ProjectCard() {
    // Initialize screenWidth state to 0 to safely handle server-side rendering
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
    const [show, setShow] = useState(new Array(4).fill(false));

    // Cards data
    const cards = [
        { id: 1, text: "First card text", tech: "UI/UX  Front- and Back-End Website" },
        { id: 2, text: "Second card text", tech: "UI/UX  Front- and Back-End Website" },
        { id: 3, text: "Third card text", tech: "UI/UX  Front- and Back-End Website" },
        { id: 4, text: "Fourth card text", tech: "UI/UX  Front- and Back-End Website" },
    ];

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // Trigger the transition effect for each card with a delay after component mounts
        show.forEach((_, index) => {
            setTimeout(() => {
                setShow((prevShow) => {
                    const newShow = [...prevShow];
                    newShow[index] = true; // Set individual card visibility to true
                    return newShow;
                });
            }, index * 500); // Sequential delay (500ms, 1000ms, 1500ms, 2000ms)
        });

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    const backgroundClass = screenWidth < 640 ? "split-bg-vertically" : "bgForAbout";


    return (
        <div className="flex flex-col items-center rounded-[39px] mt-20">
            {cards.map((card, index) => (
                <div key={card.id} className={`transition-opacity duration-1000 ${backgroundClass}
                                            ${show[index] ? "opacity-100" : "opacity-0"} my-4 rounded-[39px] 
                                            ${index % 2 === 0 ? 'sm:-ml-60' : 'sm:-mr-60'} w-[350px] sm:w-[700px] shadow-custom-blue`}>

                    <div className={`flex flex-col transition-all duration-300 ease-in-out transform hover:scale-105 
                                    sm:flex-row items-center justify-between h-auto p-4 rounded-[39px] 
                                     sm:h-[300px]bg-white`}>
                        <img
                            src='/computer.png'
                            alt='Project'
                            className="w-40 h-40 transition-all duration-300 ease-in-out transform hover:scale-105 sm:ml-[40px] rounded-2xl" />
                        <div className="px-6 sm:ml-14 items-center pt-8 space-y-4">
                            <p className="font-semibold text-3xl text-center sm:text-center">{card.text}</p>
                            <h1 className="text-sm text-center sm:text-center">
                                Detailed description for {card.text}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis maxime nostrum repellendus repudiandae velit inventore nulla maiores corporis obcaecati, error atque provident, aperiam blanditiis tempora incidunt. Explicabo itaque pariatur a!
                            </h1>
                            <p className="font-semibold text-[15px] text-center sm:text-center">{card.tech}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectCard;
