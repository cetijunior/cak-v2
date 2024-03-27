"use client";

import React from "react";
import CarouselAbout from "./carousel-about/CarouselAbout";
import { useState, useEffect, useRef } from "react";

function About() {
  const [visible, setVisible] = useState(false); // Track if the section is visible
  const [show, setShow] = useState([false, false, false]); // Individual visibility for links

  const aboutRef = useRef(null); // Use ref to reference the about section

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
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
      ref={aboutRef}
      id="about"
      className="bg-white mx-auto min-h-[600px]"
    >
      <div
        className="flex flex-col space-y-28 lg:ml-[-80px] ml-0 md:ml-[0] items-center"
        style={{ opacity: show[0] ? 1 : 0, transition: "opacity 1s ease" }}
      >
        <div className="flex flex-col sm:mt-32 sm:gap-20 gap-7">
          <h2 className=" text-center lg:text-[64px] text-2xl font-semibold z-10 ">
            Who are we?
          </h2>
          <p className="lg:text-center text-base lg:text-base text-center w-[300px] md:text-center mt-0 md:-mt-8 lg:mt-0 lg:w-[400px] z-10">
            We are CAK, a leading web development agency focused on delivering
            innovative and high-quality digital solutions. Our expertise spans
            technical development, UI/UX design, and strategic innovation,
            ensuring standout digital experiences. Committed to excellence, we
            aim to exceed expectations and make a lasting impact in the digital
            landscape.
          </p>
        </div>
        <CarouselAbout />
      </div>
    </section>
  );
}

export default About;
