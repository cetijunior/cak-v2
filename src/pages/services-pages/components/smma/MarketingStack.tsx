"use client";
import React, { useEffect, useRef, useState } from "react";
import "/styles/globals.css";

const techStack = [
  { name: "Meta Ads", icon: "/icons/meta.png" },
  { name: "TikTok Ads", icon: "/icons/tok.png" },
  { name: "Instagram", icon: "/icons/instagram.png" },
  { name: "Google Analytics", icon: "/icons/google.png" },
  { name: "SEO", icon: "/icons/seo.png" },
  { name: "Illustrator", icon: "/icons/ai.png" },
  { name: "Photoshop", icon: "/icons/psp.png" },
  { name: "ROI", icon: "/icons/roi.png" },
];

export default function MarketingStack() {
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
      { threshold: 0.4 }
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
    <section
      ref={stackRef}
      className="flex flex-col lg:flex-row bg-white min-h-screen w-full justify-around items-center md:space-y-12 space-y-0 px-4 md:px-10 lg:px-24 lg:py-0 md:py-12 py-20"
      style={{ opacity: show[0] ? 1 : 0, transition: "opacity 1s ease" }}
    >
      <div className="transition-all duration-300 ease-in-out transform hover:scale-105 p-7 rounded-xl shadow-custom-blue mb-10 sm:mb-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-10 text-center">
          We Amplify Your Voice
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              className={`flex flex-col items-center justify-center opacity-0 animate-fadeInUp delay-${
                index * 100
              }ms`}
            >
              <img
                src={tech.icon}
                className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 transition-all duration-300 ease-in-out transform hover:scale-125"
                alt={`${tech.name} logo`}
              />
              <span className="mt-2 text-sm md:text-md lg:text-lg font-semibold">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-md lg:flex-none flex-none md:flex-col md:flex lg:max-w-lg space-y-4 px-4">
        <p className="text-sm lg:text-md lg:text-lg lg:text-start text-center group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:text-black text-gray-600 text-gray-600">
          <span className="text-black group-hover:text-blue-500 pr-5">◉ </span>
          Elevating your brand with dynamic social media strategies.
        </p>
        <p className="text-sm lg:text-md lg:text-lg lg:text-start text-center group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:text-black text-gray-600 text-gray-600">
          <span className="text-black group-hover:text-blue-500 pr-5">◉ </span>
          Crafting cutting-edge campaigns using the latest digital trends.
        </p>
        <p className="text-sm lg:text-md lg:text-lg lg:text-start text-center group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:text-black text-gray-600 text-gray-600">
          <span className="text-black group-hover:text-blue-500 pr-5">◉ </span>
          Transforming challenges into engaging content that resonates with your
          audience.
        </p>
        <p className="text-sm lg:text-md lg:text-lg lg:text-start text-center group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:text-black text-gray-600 text-gray-600">
          <span className="text-black group-hover:text-blue-500 pr-5">◉ </span>
          Our commitment to digital mastery is at the heart of everything we do.
        </p>
        <p className="text-sm lg:text-md lg:text-lg lg:text-start text-center group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:text-black text-gray-600 text-gray-600">
          <span className="text-black group-hover:text-blue-500 pr-5">◉ </span>
          From concept to viral hit, social media is our canvas of expression.
        </p>
        <button className="rounded-xl sm:ml-0 ml-20 sm:mt-0 mt-12 shadow-custom-blue p-3 bg-blue-600 text-white ">
          Tell us your Problem
        </button>
      </div>
      <div className="h-20"></div>
    </section>
  );
}
