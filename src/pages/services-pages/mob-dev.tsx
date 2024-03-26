import React from "react";
import "/styles/globals.css";
import Navbar from "@/components/Navbar";
import Hero from "../Hero";
import Footer from "@/components/Footer";
import MobDevSection from "./components/mobDev/MobDevSection";
import MobDevSection2 from "./components/mobDev/MobDevSection2";

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
  function scrollToSection(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="w-screen">
          <div className="flex bg-[#1E1919 mt-[-50px] sm:mt-[-350px] items-center justify-center">
            <video autoPlay loop muted className="rounded-lg w-screen">
              <source
                src="https://www.helmes.com/wp-content/uploads/2022/07/costom-software-development_600.mp4"
                type="video/mp4"
              />
              Your Browser does not support the video tag.
            </video>
          </div>
          <div className="flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 justify-center w-screen ">
            <div className="w-[400px] sm:w-[650px] p-20 z-10 sm:h-[400px] bg-[#F8F9FB] shadow-custom-blue mt-[-40px] sm:mt-[-350px] rounded-xl space-y-4">
              <h1 className="text-center text-2xl sm:text-5xl font-bold">
                Mobile App Development
              </h1>
              <h3 className="text-center">
                Discover our range of services and find out how we can help you
                take your project to the next level. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Officiis, quasi, in cupiditate
                vero dicta eligendi maiores id ut quidem, illo molestiae alias
                quisquam magnam? Minima perferendis consectetur delectus culpa?
                Perspiciatis!
              </h3>
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#446AF2] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-custom-blue2 z-10 text-white mt-[-20px] py-3 px-20 rounded-3xl"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row bg-white min-h-screen w-full justify-around items-center px-4 sm:px-10 lg:px-24 py-20">
        <div className="transition-all duration-300 ease-in-out transform hover:scale-105 p-7 rounded-xl shadow-custom-blue mb-10 sm:mb-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-10 text-center">
            We speak your language
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className={`flex flex-col items-center justify-center opacity-0 animate-fadeInUp delay-${index * 100
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
          <p className="text-sm sm:text-md lg:text-lg text-gray-600">
            Empowering your business through diverse technology expertise.
          </p>
          <p className="text-sm sm:text-md lg:text-lg text-gray-600">
            Innovative solutions crafted with the latest tech stack.
          </p>
          <p className="text-sm sm:text-md lg:text-lg text-gray-600">
            Bridging the gap between complex problems and user-friendly
            solutions.
          </p>
          <p className="text-sm sm:text-md lg:text-lg text-gray-600">
            Our dedication to tech excellence shapes the core of our identity.
          </p>
          <p className="text-sm sm:text-md lg:text-lg text-gray-600">
            From ideation to execution, technology is our language of choice.
          </p>
          <button className="rounded-xl shadow-custom-blue p-3 bg-blue-600 text-white ">
            Tell us your Problem
          </button>
        </div>
      </div>
      <MobDevSection />
      <MobDevSection2 />
      <div className="h-20"></div>
      <Footer />
    </>
  );
};

export default mobdev;
