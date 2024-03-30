/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const HowWeWork = () => {
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
    <div
      ref={stackRef}
      style={{ opacity: show[0] ? 1 : 0, transition: "opacity 1s ease" }}
    >
      <div className="flex flex-col justify-center w-screen space-y-8 lg:space-y-0 md:space-y-8 lg:space-x-16 items-center lg:flex-row ">
        <div className="flex flex-col space-y-5 items-center justify-center md:items-center md:justify-center lg:items-start lg:justify-between ">
          <div className="lg:w-[450px] md:w-[600px] w-[350px] space-y-5 md:space-y-8 lg:space-y-3 items-center justify-center">
            <h1 className="lg:text-start md:text-center text-center text-4xl font-playfair font-semibold  md:text-5xl lg:text-6xl text-[#131B23] ">
              Si funksionojm ne?
            </h1>

            <h3 className="lg:text-start md:text-center text-center text-lg md:text-3xl font-semibold font-playfair lg:text-xl text-[#131B23]">
              Ne e quajmë rruga e CAK-Shpk.
            </h3>

            <p className="flex flex-row  items-center w-full font-thin group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:font-light text-[#131B23]">
              <span className="text-black group-hover:text-blue-500 pr-5">
                ◉{" "}
              </span>
              Ne e nisim procesin tonë duke u zhytur në vizionin tuaj dhe
              objektivat, duke nxitur një kuptim të thellë të audiencës tuaj të
              synuar dhe identitetin e markës për të krijuar një faqe interneti
              që mishëron vërtet thelbin tuaj.
            </p>
            <p className="flex flex-row items-center group font-thin duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:font-light text-[#131B23]">
              <span className="text-black group-hover:text-blue-500 pr-5">
                ◉{" "}
              </span>
              Nëpërmjet një qasjeje bashkëpunuese dhe të shkathët të
              projektimit, ne angazhohemi me ju për të përmirësuar udhëtimin e
              përdoruesit dhe estetikën, duke siguruar rezultatin.
            </p>
            <p className="flex flex-row items-center group font-thin duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:font-light text-[#131B23]">
              <span className="text-black group-hover:text-blue-500 pr-5">
                ◉{" "}
              </span>
              Duke përdorur teknologjitë më të avancuara, ne ndërtojmë faqen
              tuaj të internetit duke pasur parasysh shkallëzueshmërinë dhe
              rritjen e ardhshme, duke siguruar që ajo të qëndrojë elastike dhe
              e adaptueshme ndaj mjedisit të internetit gjithnjë në zhvillim.
            </p>
            <p className="flex flex-row items-center group font-thin duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:font-light text-[#131B23]">
              <span className="text-black group-hover:text-blue-500 pr-5">
                ◉{" "}
              </span>
              Përtej nisjes, ne ofrojmë mbështetje dhe njohuri të vazhdueshme,
              duke ndihmuar ju të përshtateni dhe të lulëzoni në sferën
              dixhitale, duke siguruar faqen tuaj, mbetet në linjë me rritjen
              dhe evolucionin e biznesit tuaj.
            </p>
          </div>

          <div className="flex items-center justify-center font-thin sm:items-start sm:justify-center w-full rounded-2xl ">
            <Link legacyBehavior href="/al/FaqjaKryesore/#contact">
              <button className="bg-[#446AF2] w-fit sm:w-fit px-24 p-2 rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:font-semibold shadow-custom-blue text-white">
                Na kontaktoni
              </button>
            </Link>
          </div>
        </div>

        <img
          className="h-[22rem] w-[22rem] lg:h-[30rem] lg:w-[45rem] md:h-[30rem] md:w-[45rem] sm:rounded-xl rounded-lg duration-300 ease-in-out transform hover:scale-105"
          src="/howwework.png"
          alt="pic"
        ></img>
      </div>
    </div>
  );
};

export default HowWeWork;
