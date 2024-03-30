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
              Wie arbeiten wir?
            </h1>

            <h3 className="lg:text-start md:text-center text-center text-lg md:text-3xl font-semibold font-playfair lg:text-xl text-[#131B23]">
              Wir nennen es den CAK-Weg.
            </h3>

            <p className="flex flex-row  items-center w-full font-thin group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:font-light text-[#131B23]">
              <span className="text-black group-hover:text-blue-500 pr-5">
                ◉{" "}
              </span>
              Wir beginnen unseren Prozess, indem wir uns in Ihre Vision und
              Ziele eintauchen und ein tiefes Verständnis für Ihr Zielpublikum
              Zielgruppen und Ihrer Markenidentität, um eine Website zu
              gestalten, die Ihr Wesen verkörpert. Essenz verkörpert.
            </p>
            <p className="flex flex-row items-center group font-thin duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:font-light text-[#131B23]">
              <span className="text-black group-hover:text-blue-500 pr-5">
                ◉{" "}
              </span>
              Durch einen kooperativen und agilen Designansatz arbeiten wir mit
              mit Ihnen zusammen, um die Benutzerführung und die Ästhetik zu
              verfeinern, damit das Ergebnis Ergebnis nicht nur visuell
              überzeugend ist, sondern auch intuitiv Ihr Publikum durch Ihren
              digitalen Raum.
            </p>
            <p className="flex flex-row items-center group font-thin duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:font-light text-[#131B23]">
              <span className="text-black group-hover:text-blue-500 pr-5">
                ◉{" "}
              </span>
              Durch den Einsatz modernster Technologien erstellen wir Ihre
              Website mit Blick auf Skalierbarkeit und zukünftiges Wachstum,
              damit sie und an die sich ständig weiterentwickelnde Webumgebung
              anpassbar ist.
            </p>
            <p className="flex flex-row items-center group font-thin duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:font-light text-[#131B23]">
              <span className="text-black group-hover:text-blue-500 pr-5">
                ◉{" "}
              </span>
              Nach der Markteinführung bieten wir fortlaufende Unterstützung und
              Einblicke, die Ihnen helfen Sie dabei, sich anzupassen und in der
              digitalen Welt zu gedeihen, damit Ihre Website mit dem Wachstum
              und der Entwicklung Ihres Unternehmens in Einklang steht.
            </p>
          </div>

          <div className="flex items-center justify-center font-thin sm:items-start sm:justify-center w-full rounded-2xl ">
            <Link legacyBehavior href="/de/Start#contact">
              <button className="bg-[#446AF2] w-fit sm:w-fit px-24 p-2 rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:font-semibold shadow-custom-blue text-white">
                Kontakt aufnehmen
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
