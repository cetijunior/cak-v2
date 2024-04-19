/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef, useState } from "react";
import "/styles/globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobDevSection from "./services/mobDev/MobDevSection";
import MobDevSection2 from "./services/mobDev/MobDevSection2";
import Link from "next/link";

const Mobdev = () => {
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

  const [visible, setVisible] = useState(false); // Track if the section is visible
  const [show, setShow] = useState([false, false, false]); // Individual visibility for links

  const stackRef = useRef(null); // Use ref to reference the about section

  useEffect(() => {
    const currentRef = stackRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.01 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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
  }, [visible, show]);

  return (
    <>
      <Navbar />
      <div className="w-screen">
        <div className="flex mt-[-40px] md:mt-[-200px] lg:mt-[-350px] items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg w-screen"
          >
            <source
              src="https://www.helmes.com/wp-content/uploads/2022/07/costom-software-development_600.mp4"
              type="video/mp4"
            />
            Ihr Browser unterstützt das Video-Tag nicht.
          </video>
        </div>
        <div className="flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 justify-center w-screen ">
          <div className="w-[380px] md:w-[650px] lg:w-[850px] p-10 md:p-10 lg:p-20 z-10 md:h-[450px] lg:h-[500px] bg-[#F8F9FB] shadow-custom-blue mt-[-150px] md:mt-[-200px] lg:mt-[-370px] rounded-xl space-y-4 md:space-y-8 lg:space-y-12">
            <h1 className="text-start md:text-start lg:text-center mt-[-10px] lg:mt-[-25px] text-3xl md:text-5xl lg:text-6xl text-[#131B23] playfair-display">
              Mobile Entwicklung der Spitzenklasse
            </h1>
            <h3 className="text-start md:text-start lg:text-center lg:text-[17px] md:text-base text-[#131B23] text-sm font-extralight font-sans-serif ">
              Verbessern Sie Ihren App-Entwicklungsprozess mit unseren
              maßgeschneiderten Lösungen! Ob Sie von Grund auf neu beginnen oder
              eine bestehende bestehenden Anwendung, wir sind hier, um Ihr
              Projekt auf die nächste Ebene zu bringen. Tauchen Sie ein in
              unsere maßgeschneiderten Entwicklungsstrategien, die die direkt
              auf Ihre Bedürfnisse zugeschnitten sind und die Funktionalität,
              Benutzerfreundlichkeit und die Gesamtleistung der Anwendung.
              Kontaktieren Sie uns für einen maßgeschneiderten Ansatz, mit einer
              gründlichen Bewertung der Spezifikationen Ihres Projekts
              Spezifikationen und potenziellen Ergebnisse. Lassen Sie uns
              zusammenarbeiten, um etwas Außergewöhnliches in der mobilen
              App-Landschaft.
            </h3>
          </div>
          <div
            className="bg-[#446AF2] hover:font-semibold font-sans-serif lg:text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-custom-blue2 z-10 
          text-white mt-[-20px] md:mt-[-25px] lg:mt-[-30px] py-1 md:py-3 lg:py-3 px-8 md:px-28 lg:px-20 rounded-3xl md:text-xl text-md"
          >
            <Link legacyBehavior href="/de/Start#contact">
              Kontaktieren Sie uns
            </Link>
          </div>
        </div>
      </div>

      <div
        ref={stackRef}
        style={{ opacity: show[0] ? 1 : 0, transition: "opacity 1s ease" }}
      >
        <div className="flex flex-col lg:flex-row bg-white h-full w-full justify-around items-center px-4 sm:px-14 lg:px-24 py-20">
          <div className="transition-all duration-300 ease-in-out transform hover:scale-105 p-7 rounded-xl shadow-custom-blue mb-10 sm:mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair text-gray-900 mb-10 text-center">
              Wir sprechen Ihre Sprache
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`flex flex-col items-center transition-all duration-300 ease-in-out justify-center opacity-0 animate-fadeInUp delay-${
                    index * 1000
                  }ms`}
                >
                  <img
                    src={tech.icon}
                    className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 transition-all duration-300 ease-in-out transform hover:scale-125"
                    alt={`${tech.name} logo`}
                  />
                  <span className="mt-2 font-playfair text-sm md:text-md lg:text-lg font-semibold">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center max-w-md lg:max-w-lg space-y-4 py-10 px-4">
            <h2 className=" font-bold font-playfair text-[#131B23] text-3xl">
              Wir animieren mobile Apps.
            </h2>
            <p className="flex flex-row items-center w-full group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg font-extralight hover:font-light text-[#131B23]">
              <span className="text-black group-hover:text-blue-500 pr-5">
                ◉{" "}
              </span>
              Wir hauchen mobilen Apps Leben ein und verbessern die Entwicklung
              mobiler Apps Ansatz, der Innovation und Effizienz nahtlos
              miteinander verbindet. Effizienz nahtlos verbindet.
            </p>
            <p className="flex flex-row items-center group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg font-extralight hover:font-light text-[#131B23]">
              <span className="text-black group-hover:text-blue-500 pr-5">
                ◉{" "}
              </span>
              Durch den Einsatz modernster Technologie und agiler Praktiken
              können wir setzen wir Ihre Visionen schnell und präzise in
              greifbare Anwendungen.
            </p>
            <p className="flex flex-row items-center group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg font-extralight hover:font-light text-[#131B23]">
              <span className="text-black group-hover:text-blue-500 pr-5">
                ◉{" "}
              </span>
              Unser Schwerpunkt auf intuitivem Design und solider
              Backend-Entwicklung ermöglichen es uns, mobile Erlebnisse zu
              schaffen, die über das hinausgehen, was&apos;s erwartet werden.
            </p>
            <p className="flex flex-row items-center group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg font-extralight hover:font-light text-[#131B23]">
              <span className="text-black group-hover:text-blue-500 pr-5">
                ◉{" "}
              </span>
              Im Mittelpunkt unseres Ethos steht die Verpflichtung, Ihre und auf
              Ihre spezifischen Bedürfnisse einzugehen, damit die Lösungen
              perfekt auf Ihre Herausforderungen.
            </p>
            <div className="rounded-xl w-fit shadow-custom-blue p-3 bg-blue-600 text-white">
              <Link legacyBehavior href="/de/Start#contact">
                Nennen Sie uns Ihr Problem
              </Link>
            </div>
          </div>
        </div>
        <MobDevSection />
        <MobDevSection2 />
        <div className="h-20"></div>
        <Footer />
      </div>
    </>
  );
};

export default Mobdev;
