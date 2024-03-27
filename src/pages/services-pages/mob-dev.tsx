import React, { useEffect, useRef, useState } from "react";
import "/styles/globals.css";
import Navbar from "@/components/Navbar";
import Hero from "../Hero";
import Footer from "@/components/Footer";
import MobDevSection from "./components/mobDev/MobDevSection";
import MobDevSection2 from "./components/mobDev/MobDevSection2";
import Link from "next/link";

const mobdev = () => {
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
    <>
      <Navbar />
      <div className="w-screen">
        <div className="flex mt-[-40px] md:mt-[-200px] lg:mt-[-350px] items-center justify-center">
          <video autoPlay loop muted className="rounded-lg w-screen">
            <source
              src="https://www.helmes.com/wp-content/uploads/2022/07/costom-software-development_600.mp4"
              type="video/mp4"
            />
            Your Browser does not support the video tag.
          </video>
        </div>
        <div className="flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 justify-center w-screen ">
          <div className="w-[380px] md:w-[650px] lg:w-[800px] p-10 md:p-10 lg:p-20 z-10 md:h-[400px] lg:h-[450px] bg-[#F8F9FB] shadow-custom-blue mt-[-100px] md:mt-[-200px] lg:mt-[-300px] rounded-xl space-y-8">
            <h1 className="text-start md:text-start lg:text-center text-4xl md:text-5xl lg:text-6xl font-bold">
              World-Class Mobile Development
            </h1>
            <h3 className="text-start md:text-start lg:text-center">
              Welcome to CAK, where your project takes center stage. Dive into
              our services to discover how we can lift your vision higher. From
              seamless web development to intuitive UI/UX design, we are here to
              turn your ideas into reality. Partner with us for a journey marked
              by precision, innovation, and transformative outcomes.
            </h3>
          </div>
          <div className="bg-[#446AF2] hover:font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-custom-blue2 z-10 text-white mt-[-20px] py-3 px-20 rounded-3xl">
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
        <div className="flex flex-col sm:flex-row bg-white sm:h-[50rem] w-full justify-around items-center px-4 sm:px-14 lg:px-24 py-20">
          <div className="transition-all duration-300 ease-in-out transform hover:scale-105 p-7 rounded-xl shadow-custom-blue mb-10 sm:mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-10 text-center">
              We speak your language
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
                    className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
                    alt={`${tech.name} logo`}
                  />
                  <span className="mt-2 text-sm md:text-md lg:text-lg font-semibold">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-md lg:max-w-lg space-y-4 px-4">
            <h1 className="font-bold text-3xl">
              We bring mobile<br></br> apps to life
            </h1>
            <p className="flex flex-row items-center w-full group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:text-black text-gray-600">
              <span className="text-black group-hover:text-blue-500 pr-5">
                ◉{" "}
              </span>
              We elevate the art of mobile app development with our unique
              methodology, ensuring a seamless fusion of innovation and
              efficiency.
            </p>
            <p className="flex flex-row items-center group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:text-black text-gray-600">
              <span className="text-black group-hover:text-blue-500 pr-5">
                ◉{" "}
              </span>
              Harnessing the power of cutting-edge technology and agile
              methodologies, we transform your ideas into reality with
              unparalleled speed and precision.
            </p>
            <p className="flex flex-row items-center group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:text-black text-gray-600">
              <span className="text-black group-hover:text-blue-500 pr-5">
                ◉{" "}
              </span>
              With a focus on user-centric design and robust backend
              engineering, our team crafts mobile solutions that not only meet
              but exceed expectations.
            </p>
            <p className="flex flex-row items-center group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:text-black text-gray-600">
              <span className="text-black group-hover:text-blue-500 pr-5">
                ◉{" "}
              </span>
              At the heart of our operation is a dedication to understanding and
              solving your unique challenges.
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

export default mobdev;
