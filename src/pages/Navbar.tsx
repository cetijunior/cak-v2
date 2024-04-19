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
  const navigateHome = () => router.push("/");

  const serviceLinks = [
    {
      href: "/WebsiteDevelopment",
      img: "/computer.png",
      title: "Website Development",
      alt: "Illustration of a single computer monitor displaying website code and design interface.",
      description:
        "Specializing in custom web solutions to enhance your online presence.",
    },
    {
      href: "/MobileDevelopment",
      img: "/smartphone.png",
      title: "Mobile App Development",
      alt: "Illustration of a smartphone displaying an app interface for mobile development.",
      description:
        "Creating mobile applications that offer seamless user experiences.",
    },
    {
      href: "/Smma",
      img: "/smma.png",
      title: "Social Media Marketing",
      alt: "Illustration of a megaphone amplifying towards three user icons, symbolizing social media outreach.",
      description:
        "Strategies to grow your brand’s presence on various social platforms.",
    },
    {
      href: "/Design",
      img: "/web-design.png",
      title: "Design",
      alt: "Illustration of a website template on a computer screen, showcasing web design layout.",
      description:
        "Innovative design solutions tailored to your business’s needs.",
    },
  ];

  const languageLinks = [
    { href: "/al/FaqjaKryesore", title: "AL" },
    { href: "/de/Start", title: "DE" },
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
    router.push("/#" + sectionId); // Navigate to section with smooth scroll
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
      <div onClick={navigateHome} className="p-4">
        <h1 className="cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 text-2xl font-extrabold text-[#446AF2]">
          CAK Web Solutions
        </h1>
      </div>

      {/* Toggle button for small screens */}
      <div className="absolute pr-4 pt-2 z-40 right-0 sm:block md:block lg:hidden">
        <button onClick={handleMenuToggle}>
          {isMenuOpen ? (
            <img
              src="/close.png"
              alt="Close Icon illustration"
              className="w-10 h-10"
            />
          ) : (
            <img
              src="/menu.png"
              alt="Burger Menu Icon illustration"
              className="w-10 h-10"
            />
          )}
        </button>
      </div>

      {/* Fullscreen Menu for small screens */}
      <div
        onDoubleClick={handleClickScreen}
        className={`fixed inset-0 bg-[#446AF2] z-30 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex h-full flex-col w-[350px]  z-30 pl-5 space-y-8 items-start justify-center text-white overflow-y-auto">
          <li
            className="cursor-pointer text-2xl md:text-3xl font-thin hover:opacity-70"
            onClick={() => navigateToSection("/")}
          >
            Home
          </li>

          <li
            className="cursor-pointer text-2xl md:text-3xl font-thin hover:opacity-70"
            onClick={() => navigateToSection("about")}
          >
            About Us
          </li>
          {/* Services Dropdown Toggle */}
          <div
            onClick={handleServicesDropdownToggle}
            className="flex flex-row items-center space-x-8 justify-between cursor-pointer"
          >
            <span className="text-2xl md:text-3xl mb-[-25px] font-thin">
              Web Development <br /> Services
            </span>
            <img
              src="/arrow.png"
              alt="Arrow Icon illustration"
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
          >
            <ul className="bg-[#37457a67] mt-[20px] w-full p-2 rounded-2xl">
              {serviceLinks.map((link, index) => (
                <li
                  key={index}
                  className="hover:bg-gray-100 hover:text-black font-thin rounded-md p-2"
                >
                  <Link legacyBehavior href={link.href}>
                    <a className="flex items-center space-x-2">
                      <img src={link.img} alt={link.alt} className="w-4 h-4" />
                      <span className="text-sm">{link.title}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <li
            className="cursor-pointer text-2xl md:text-3xl font-thin hover:opacity-70"
            onClick={() => navigateToSection("projects")}
          >
            Projects
          </li>
          <li
            className="cursor-pointer text-2xl md:text-3xl font-thin hover:opacity-70"
            onClick={() => navigateToSection("contact")}
          >
            Contact
          </li>

          {/* Languages Dropdown Toggle */}
          <div
            onClick={handleLanguageDropdownToggle}
            className="flex flex-col cursor-pointer mt-4"
          >
            <div className="flex flex-row justify-between space-x-12 items-center">
              <span className="text-2xl md:text-3xl font-thin">EN</span>
              <img
                src="/arrow.png"
                alt="Arrow Icon illustration"
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
          <Link legacyBehavior href="/#about">
            <h3 className="cursor-pointer transition-all duration-300 ease-in-out font-light text-[#131B23] transform hover:scale-105 hover:text-[#446AF2] text-xl z-20">
              About Us
            </h3>
          </Link>
          <Link legacyBehavior href="/#services">
            <h3
              onMouseEnter={() => setIsDropdownOpenServices(true)}
              onMouseLeave={() => setIsDropdownOpenServices(false)}
              className="cursor-pointer hover:text-[#446AF2] transition-all duration-600 font-light text-[#131B23] ease-in-out transform hover:scale-105 text-xl z-20 h-100p relative"
            >
              Web Development Services
              <div
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
                          alt={link.alt}
                          className="w-10 h-10"
                        />
                        <div>
                          <div className="font-semibold font-playfair text-gray-900">
                            {link.title}
                          </div>
                          <div className="text-sm font-light text-[#131B23]">
                            {link.description}
                          </div>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </h3>
          </Link>

          <Link legacyBehavior href="/#projects">
            <h3 className="cursor-pointer transition-all duration-300 ease-in-out font-light text-[#131B23] transform hover:scale-105 hover:text-[#446AF2] text-xl z-20">
              Projects
            </h3>
          </Link>
          <Link legacyBehavior href="/#contact">
            <h3 className="cursor-pointer transition-all duration-300 ease-in-out font-light text-[#131B23] transform hover:scale-105 hover:text-[#446AF2] text-xl z-20">
              Contact
            </h3>
          </Link>
          <Link legacyBehavior href="/#services">
            <h1
              onMouseEnter={() => setIsDropdownOpenLanguages(true)}
              onMouseLeave={() => setIsDropdownOpenLanguages(false)}
              className="cursor-pointer hover:text-[#446AF2] transition-all font-light text-[#131B23] duration-600 ease-in-out transform hover:scale-105 text-xl z-20 h-100p relative"
            >
              EN
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 bg-[#ffffff] hover:mt-4 hover:shadow-custom-bluerounded-md transition-max-height duration-500 ease-in-out ${
                  isDropdownOpenLanguages ? "max-h-96" : "max-h-0"
                } overflow-hidden`}
                style={{ width: "50px" }} // Adjust width as needed
              >
                <div className="flex flex-col items-center w-full ">
                  {languageLinks.map((link, index) => (
                    <Link legacyBehavior key={index} href={link.href}>
                      <a className="flex p-2 items-center transition-all duration-300 ease-in-out transform hover:scale-105 space-x-3 bg-white  rounded-lg">
                        <div className="text-sm hover:font-semibold font-light text-[#131B23] text-md">
                          {link.title}
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
