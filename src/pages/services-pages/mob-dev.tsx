"use client";

import React, { useEffect, useRef, useState } from "react";
import "/styles/globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobDevSection from "./components/mobDev/MobDevSection";
import MobDevSection2 from "./components/mobDev/MobDevSection2";
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
          <video autoPlay loop muted playsInline className="rounded-lg w-screen">
            <source
              src="https://www.helmes.com/wp-content/uploads/2022/07/costom-software-development_600.mp4"
              type="video/mp4"
            />
            Your Browser does not support the video tag.
          </video>
        </div>
        <div className="flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 justify-center w-screen ">
          <div className="w-[380px] md:w-[650px] lg:w-[850px] p-10 md:p-10 lg:p-20 z-10 md:h-[450px] lg:h-[500px] bg-[#F8F9FB] shadow-custom-blue mt-[-150px] md:mt-[-200px] lg:mt-[-370px] rounded-xl space-y-4 md:space-y-8 lg:space-y-12">
            <h1 className="text-start md:text-start lg:text-center mt-[-10px] lg:mt-[-25px] text-3xl md:text-5xl lg:text-6xl text-[#131B23] playfair-display">
              World-Class Mobile Development
            </h1>
            <h3 className="text-start md:text-start lg:text-center lg:text-xl md:text-xl text-[#131B23] text-sm font-extralight font-sans-serif ">
              Elevate your app development process with our customized
              solutions! Whether you`re starting from scratch or refining an
              existing application, we`re here to take your project to the next
              level. Dive into our bespoke development strategies that cater
              directly to your needs, enhancing functionality, user experience,
              and overall app performance. Contact us for a tailored approach,
              complete with a thorough assessment of your project`s
              specifications and potential outcomes. Let`s collaborate to create
              something exceptional in the mobile app landscape.
            </h3>
          </div>
          <div className="bg-[#446AF2] hover:font-semibold font-sans-serif lg:text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-custom-blue2 z-10 
          text-white mt-[-20px] md:mt-[-25px] lg:mt-[-30px] py-1 md:py-3 lg:py-3 px-8 md:px-28 lg:px-20 rounded-3xl md:text-xl text-md"
          >
            <Link href="/#contact" legacyBehavior>
              Contact Us
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
              We speak your language
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`flex flex-col items-center transition-all duration-300 ease-in-out justify-center opacity-0 animate-fadeInUp delay-${index * 1000
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
            <h1 className=" font-bold font-playfair text-[#131B23] text-3xl">
              We animate mobile applications
            </h1>
            <p className="flex flex-row items-center w-full group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg font-extralight hover:font-light text-[#131B23]">
              <span className="text-black group-hover:text-blue-500 pr-5">
                ◉{" "}
              </span>
              We breathe life into mobile apps, elevating mobile app development
              through our distinctive approach that merges innovation with
              efficiency seamlessly.
            </p>
            <p className="flex flex-row items-center group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg font-extralight hover:font-light text-[#131B23]">
              <span className="text-black group-hover:text-blue-500 pr-5">
                ◉{" "}
              </span>
              By leveraging the latest technology and agile practices, we
              swiftly and accurately turn your visions into tangible
              applications.
            </p>
            <p className="flex flex-row items-center group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg font-extralight hover:font-light text-[#131B23]">
              <span className="text-black group-hover:text-blue-500 pr-5">
                ◉{" "}
              </span>
              Our emphasis on intuitive design and solid backend development
              enables us to create mobile experiences that go beyond what&apos;s
              anticipated.
            </p>
            <p className="flex flex-row items-center group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg font-extralight hover:font-light text-[#131B23]">
              <span className="text-black group-hover:text-blue-500 pr-5">
                ◉{" "}
              </span>
              Central to our ethos is a commitment to comprehend and address
              your specific needs, ensuring solutions are perfectly tailored to
              your challenges.
            </p>
            <div className="rounded-xl w-fit shadow-custom-blue p-3 bg-blue-600 text-white">
              <Link href="/#contact">Tell us your Problem</Link>
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
