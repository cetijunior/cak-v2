/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef, useState } from "react";
import "/styles/globals.css";
import Link from "next/link";

const techStack = [
  { name: "C++", icon: "/icons/cis.png" },
  { name: "Python", icon: "/icons/python.png" },
  { name: "Css", icon: "/icons/css-3.png" },
  { name: "Sql", icon: "/icons/datenbank.png" },
  { name: "Javascript", icon: "/icons/java-skript.png" },
  { name: "Php", icon: "/icons/php.png" },
  { name: "Java", icon: "/icons/java.png" },
  { name: "React Native", icon: "/icons/codes.png" },
];

export default function TechStackSection() {
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
      style={{ opacity: show[0] ? 1 : 0, transition: "opacity 1s ease" }}
      className="flex flex-col md:flex-col lg:flex-row justify-center items-center px-4 sm:px-10 lg:px-24 py-24"
    >
      <div className="transition-all duration-300 ease-in-out transform hover:scale-105 p-7 rounded-xl shadow-custom-blue mb-10 sm:mb-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-10 text-center">
          We speak your language
        </h2>
        <div className="w-[300px] md:w-[500px] lg:w-[600px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              className={`flex flex-col items-center justify-center opacity-0 animate-fadeInUp  delay-${index * 100
                }ms`}
            >
              <div className="duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center">
                <img
                  src={tech.icon}
                  className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 transition-all duration-300 ease-in-out transform hover:scale-110"
                  alt={`${tech.name} logo`}
                />
                <span className="mt-2 text-sm md:text-md lg:text-lg font-semibold">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center md:justify-center lg:justify-center space-y-8 md:space-y-8 items-center md:items-center lg:items-center p-8 md:p-10 rounded-3xl">
        <div className="lg:w-fit md:w-[600px] w-[300px] space-y-4 px-4 justify-center md:justify-center lg:justify-evenly items-center md:items-center lg:items-start">
          <h1 className="font-bold text-center text-3xl">
            We bring Web-Sites to life
          </h1>
          <p className="flex flex-row items-center md:items-center lg:items-start group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:text-black text-gray-600">
            <span className="text-black group-hover:text-blue-500 pr-5">
              ◉{" "}
            </span>
            Empowering your business through diverse technology expertise.
          </p>
          <p className="flex flex-row items-center group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:text-black text-gray-600">
            <span className="text-black group-hover:text-blue-500 pr-5">
              ◉{" "}
            </span>
            Innovative solutions crafted with the latest tech stack.
          </p>
          <p className="flex flex-row items-center group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:text-black text-gray-600">
            <span className="text-black group-hover:text-blue-500 pr-5">
              ◉{" "}
            </span>
            Bridging the gap between complex problems and user-friendly
            solutions.
          </p>
          <p className="flex flex-row items-center group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:text-black text-gray-600">
            <span className="text-black group-hover:text-blue-500 pr-5">
              ◉{" "}
            </span>
            Our dedication to tech excellence shapes the core of our identity.
          </p>
          <p className="flex flex-row items-center group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:text-black text-gray-600">
            <span className="text-black group-hover:text-blue-500 pr-5">
              ◉{" "}
            </span>
            From ideation to execution, technology is our language of choice.
          </p>
        </div>
        <Link legacyBehavior href="/de/Start#contact">
          <button className="rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:font-semibold shadow-custom-blue px-16 p-2 bg-blue-600 text-white">
            Tell us your Problem
          </button>
        </Link>
      </div>
    </section>
  );
}
