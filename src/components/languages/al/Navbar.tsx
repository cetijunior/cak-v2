/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpenServices, setIsDropdownOpenServices] = useState(false);
  const [isDropdownOpenLanguages, setIsDropdownOpenLanguages] = useState(false);
  const [rotateArrowLang, setRotateArrowLang] = useState(false);
  const [rotateArrowServ, setRotateArrowServ] = useState(false);
  const router = useRouter();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navigateHome = () => router.push("/al/FaqjaKryesore");

  const serviceLinks = [
    {
      href: "/al/WebsiteDevelopment",
      img: "/computer.png",
      title: "Krijimi i Uebsajteve",
      description:
        "Specializuar në zgjidhje të personalizuara në ueb për të përmirësuar praninë tuaj në internet.",
    },
    {
      href: "/al/MobileDevelopment",
      img: "/smartphone.png",
      title: "Zhvillimi i aplikacioneve celulare",
      description:
        "Krijimi i aplikacioneve celulare që ofrojnë përvoja pa probleme të përdoruesit.",
    },
    {
      href: "/al/Smma",
      img: "/smma.png",
      title: "Marketimi i Rrjeteve Sociale",
      description:
        "Strategji për të rritur praninë e markës suaj në platforma të ndryshme sociale.",
    },
    {
      href: "/al/Design",
      img: "/web-design.png",
      title: "Dizajni",
      description:
        "Zgjidhje inovative të projektimit të përshtatura për nevojat e biznesit tuaj.",
    },
  ];

  const languageLinks = [
    { href: "/de/Start", title: "DE" },
    { href: "/", title: "EN" },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev); // Toggle menu open/close state
  };

  const navigateToSection = (sectionId: string) => {
    setIsMenuOpen(false); // Close the menu
    router.push("/al" + sectionId); // Navigate to section with smooth scroll
  };

  const handleLanguageDropdownToggle = () => {
    setIsDropdownOpenLanguages(!isDropdownOpenLanguages);
    setRotateArrowLang(!rotateArrowLang); // Toggle the rotation state as well
  };

  const handleServicesDropdownToggle = () => {
    setIsDropdownOpenServices(!isDropdownOpenServices);
    setRotateArrowServ(!rotateArrowServ); // Toggle the rotation state as well
  };

  const handleClickScreen = () => {
    setIsDropdownOpenLanguages(false);
    setIsDropdownOpenServices(false);
  };

  return (
    <div className="sticky top-0 z-50  px-0 md:px-2 lg:px-14 shadow-custom-blue flex items-center justify-between bg-[#F8F9FB] sm:w-screen w-full">
      <div
        className="p-4"
      <div
        className="p-4"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <h1 className="cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 text-2xl font-extrabold text-[#446AF2]">
          CAK Web Solutions
        </h1>
      </div>

      {/* Toggle button for small screens */}
      <div className="absolute pr-4 pt-2 z-40 right-0 sm:block md:block lg:hidden">
        <button onClick={handleMenuToggle}>
          {isMenuOpen ? (
            <img src="/close.png" alt="Close" className="w-10 h-10" />
          ) : (
            <img src="/menu.png" alt="Menu" className="w-10 h-10" />
          )}
        </button>
      </div>

      {/* Fullscreen Menu for small screens */}
      <div
        onDoubleClick={handleClickScreen}
        className={`fixed inset-0 bg-[#446AF2] z-30 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        className={`fixed inset-0 bg-[#446AF2] z-30 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex h-full flex-col w-[350px]  z-30 pl-5 space-y-8 items-start justify-center text-white overflow-y-auto">
          <li
            className="cursor-pointer text-2xl md:text-3xl font-thin hover:opacity-70"
            onClick={() => navigateToSection("/FaqjaKryesore")}
          >
            Faqja Kryesore
          </li>

          <li
            className="cursor-pointer text-2xl md:text-3xl font-thin hover:opacity-70"
            onClick={() => navigateToSection("/FaqjaKryesore#about")}
          >
            Rreth nesh
          </li>
          {/* Services Dropdown Toggle */}
          <div
            onClick={handleServicesDropdownToggle}
            className="flex flex-row items-center space-x-8 justify-between cursor-pointer"
          >
            <span className="text-2xl md:text-3xl mb-[-25px] font-thin">
              Shërbimet e ofruara
            </span>
            <img
              src="/arrow.png"
              alt="next"
              className={`w-8 h-8 transform ${
                rotateArrowServ ? "rotate-0" : "-rotate-180"
              }`} // Apply rotation based on state
              className={`w-8 h-8 transform ${
                rotateArrowServ ? "rotate-0" : "-rotate-180"
              }`} // Apply rotation based on state
              style={{ transition: "transform 0.4s ease" }} // Smooth transition for rotation
            />
          </div>

          {/* Services Dropdown */}
          <div
            className={`transition-all ease-in-out duration-500 ${
              isDropdownOpenServices ? "max-h-[60vh]" : "max-h-0"
            } overflow-auto`}
            className={`transition-all ease-in-out duration-500 ${
              isDropdownOpenServices ? "max-h-[60vh]" : "max-h-0"
            } overflow-auto`}
          >
            <ul className="bg-[#37457a67] mt-[20px] w-full p-2 rounded-2xl">
              {serviceLinks.map((link, index) => (
                <li
                  key={index}
                  className="hover:bg-gray-100 hover:text-black font-thin rounded-md p-2"
                >
                  <Link legacyBehavior href={link.href}>
                    <a className="flex items-center space-x-2">
                      <img
                        src={link.img}
                        alt={link.title}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">{link.title}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <li
            className="cursor-pointer text-2xl md:text-3xl font-thin hover:opacity-70"
            onClick={() => navigateToSection("/FaqjaKryesore#projects")}
          >
            Projekte
          </li>
          <li
            className="cursor-pointer text-2xl md:text-3xl font-thin hover:opacity-70"
            onClick={() => navigateToSection("/FaqjaKryesore#contact")}
          >
            Kontakti
          </li>

          {/* Languages Dropdown Toggle */}
          <div
            onClick={handleLanguageDropdownToggle}
            className="flex flex-col cursor-pointer mt-4"
          >
            <div className="flex flex-row justify-between space-x-12 items-center">
              <span className="text-2xl md:text-3xl font-thin">AL</span>
              <img
                src="/arrow.png"
                alt="next"
                className={`w-8 h-8 transform ${
                  rotateArrowLang ? "rotate-0" : "-rotate-180"
                }`} // Apply rotation based on state
                className={`w-8 h-8 transform ${
                  rotateArrowLang ? "rotate-0" : "-rotate-180"
                }`} // Apply rotation based on state
                style={{ transition: "transform 0.4s ease" }} // Smooth transition for rotation
              />
            </div>
            {/* Languages Dropdown */}
            <div
              className={`transition-all ease-in-out duration-500 ${
                isDropdownOpenLanguages ? "max-h-[20vh]" : "max-h-0"
              } overflow-auto`}
              className={`transition-all ease-in-out duration-500 ${
                isDropdownOpenLanguages ? "max-h-[20vh]" : "max-h-0"
              } overflow-auto`}
            >
              <ul className="bg-[#37457a67] mt-[30px]  w-full p-2 rounded-2xl">
                {languageLinks.map((link, index) => (
                  <li
                    key={index}
                    className="hover:bg-gray-100 hover:text-black font-thin rounded-md p-2"
                  >
                    <Link legacyBehavior href={link.href}>
                      <a className="flex justify-center items-center space-x-2">
                        <span className="text-sm">{link.title}</span>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ul>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:hidden lg:flex flex-row items-center md:px-8 space-x-8">
        <div className="hidden md:hidden lg:flex flex-row items-center space-x-16">
          <h1
            className="cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 font-extralight text-[#131B23] hover:text-[#446AF2] text-xl z-20"
            onClick={() => scrollToSection("about")}
          >
            Rreth nesh
          </h1>
          <h1
            onClick={() => scrollToSection("services")}
            onMouseEnter={() => setIsDropdownOpenServices(true)}
            onMouseLeave={() => setIsDropdownOpenServices(false)}
            className="cursor-pointer hover:text-[#446AF2] transition-all duration-600 ease-in-out transform hover:scale-105 text-[#131B23] font-extralight text-xl z-20 h-100p relative"
          >
            Shërbimet e ofruara
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 bg-[#ffffff] hover:mt-4 hover:p-2 shadow-custom-blue rounded-md transition-max-height duration-500 ease-in-out ${
                isDropdownOpenServices ? "max-h-96" : "max-h-0"
              } overflow-hidden`}
              className={`absolute top-full left-1/2 -translate-x-1/2 bg-[#ffffff] hover:mt-4 hover:p-2 shadow-custom-blue rounded-md transition-max-height duration-500 ease-in-out ${
                isDropdownOpenServices ? "max-h-96" : "max-h-0"
              } overflow-hidden`}
              style={{ width: "700px" }} // Adjust width as needed
            >
              <div className="grid grid-cols-2 ">
                {serviceLinks.map((link, index) => (
                  <Link legacyBehavior key={index} href={link.href}>
                    <a className="flex p-4 items-center transition-all duration-300 ease-in-out transform hover:scale-105 space-x-3 bg-white rounded-lg">
                      <img
                        src={link.img}
                        alt={link.title}
                        className="w-10 h-10"
                      />
                      <div>
                        <div className="font-semibold font-playfair text-[#131B23]">
                          {link.title}
                        </div>
                        <div className="text-sm font-extralight text-[#131B23]">
                          {link.description}
                        </div>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </h1>

          <h1
            className="cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 font-extralight text-[#131B23] hover:text-[#446AF2] text-xl z-20"
            onClick={() => scrollToSection("projects")}
          >
            Projekte
          </h1>

          <h1
            className="cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 font-extralight text-[#131B23] hover:text-[#446AF2] text-xl z-20"
            onClick={() => scrollToSection("contact")}
          >
            Kontakti
          </h1>

          <h1
            onClick={() => scrollToSection("")}
            onMouseEnter={() => setIsDropdownOpenLanguages(true)}
            onMouseLeave={() => setIsDropdownOpenLanguages(false)}
            className="cursor-pointer hover:text-[#446AF2] transition-all duration-600 ease-in-out transform text-[#131B23] font-extralight hover:scale-105 text-xl z-20 h-100p relative"
          >
            AL
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 bg-[#ffffff] hover:mt-4 hover:shadow-custom-bluerounded-md transition-max-height duration-500 ease-in-out ${
                isDropdownOpenLanguages ? "max-h-96" : "max-h-0"
              } overflow-hidden`}
              className={`absolute top-full left-1/2 -translate-x-1/2 bg-[#ffffff] hover:mt-4 hover:shadow-custom-bluerounded-md transition-max-height duration-500 ease-in-out ${
                isDropdownOpenLanguages ? "max-h-96" : "max-h-0"
              } overflow-hidden`}
              style={{ width: "50px" }} // Adjust width as needed
            >
              <div className="flex flex-col items-center w-full ">
                {languageLinks.map((link, index) => (
                  <Link legacyBehavior key={index} href={link.href}>
                    <a className="flex p-2 items-center transition-all duration-300 ease-in-out transform hover:scale-105 space-x-3 bg-white  rounded-lg">
                      <div className="text-sm hover:font-semibold font-extralight text-md text-[#131B23]">
                        {link.title}
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
