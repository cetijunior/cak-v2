import Navbar from "@/components/Navbar";
import React from "react";
import Hero from "../Hero";
import Footer from "@/components/Footer";
import "/styles/globals.css";

const design = () => {
  function scrollToSection(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <Navbar />
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
            <h1 className="text-center text-2xl sm:text-4xl font-bold">
              World-Class Website Development
            </h1>
            <h3 className="text-center">
              Welcome to CAK, where your project takes center stage. Dive into
              our services to discover how we can lift your vision higher. From
              seamless web development to intuitive UI/UX design, we're here to
              turn your ideas into reality. Partner with us for a journey marked
              by precision, innovation, and transformative outcomes.
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
      <div className="pt-12 h-[40rem] flex flex-col sm:flex-row sm:items-center sm:justify-center gap-8 space-x-6">
        <div className="flex flex-col justify-center space-y-5 items-center">
          <h1 className="text-3xl">Our competence</h1>
          <p className="text-center">
            Helmes Design has created business-critical solutions <br></br>
            for both small and large companies, both locally and <br></br>
            internationally. Clients like CERN, Telia, Piletilevi, and <br></br>
            Statistics Estonia are our partners, with whom we <br></br>
            create innovative solutions for end-users.<br></br>
          </p>
        </div>
        <div className=" h-[23rem] w-[23rem] sm:h-[27rem] sm:w-[54rem] pl-8 flex flex-col items-center justify-center sm:items-end sm:justify-end ">
          <img src="/people.svg"></img>
        </div>
      </div>
      <div className="pt-10 h-[40rem] flex flex-col items-center justify-center sm:gap-10 sm:space-x-10 sm:flex-row ">
        <div className="flex flex-col justify-start items-start space-y-5">
          <h1 className="text-3xl">What we offer?</h1>
          <p className="">
            Using a strategic design approach in all our projects ensures{" "}
            <br></br>
            that real value is created. This means that we take responsibility
            <br></br>
            for the entire process from ideation to realization. It’s is an{" "}
            <br></br>
            important part of our approach to ensure the solution is right for
            you.<br></br>
          </p>
        </div>
        <div className="flex gap-8 space-x-10 flex-row">
          <div className="flex flex-col justify-end items-end ">
            <div className="flex flex-col space-y-8 ">
              <h1 className=" bg-white shadow-custom-blue rounded-3xl p-4 w-[9rem]">
                Service Design
              </h1>
              <h1 className="bg-white shadow-custom-blue rounded-3xl p-4 w-[9rem]">
                Systems Design
              </h1>
              <h1 className="bg-white shadow-custom-blue rounded-3xl p-4 w-[9rem]">
                Future Design
              </h1>
              <h1 className="bg-white shadow-custom-blue rounded-3xl p-4">
                Customer Experience Design (CX)
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-end items-end ">
            <div className="flex flex-col space-y-8 ">
              <h1 className="bg-white shadow-custom-blue rounded-3xl p-4 w-[9rem]">
                Service Design
              </h1>
              <h1 className="bg-white shadow-custom-blue rounded-3xl p-4 w-[9rem]">
                Systems Design
              </h1>
              <h1 className="bg-white shadow-custom-blue rounded-3xl p-4 w-[9rem]">
                Future Design
              </h1>
              <h1 className="bg-white shadow-custom-blue rounded-3xl p-4">
                Customer Experience Design (CX)
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default design;
