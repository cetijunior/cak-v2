"use client";
import React, { useEffect, useRef, useState } from "react";
import ContactSection from "../webDev/ContactSection";

const MobDevSection2 = () => {
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
      <div
        ref={stackRef}
        style={{ opacity: show[0] ? 1 : 0, transition: "opacity 1s ease" }}
      >
        <div className="pt-12 flex justify-center">
          <div className="flex flex-col items-center justify-center bg-gray-100 shadow-lg rounded-2xl w-full max-w-[80rem] p-6">
            <div className="text-center">
              <h1 className="text-3xl">
                A unique work method that guarantees 150% efficiency
              </h1>
              <p className="pt-4">
                We call it The Helmes Way. For the past 20 years, we’ve worked
                to perfect it.
              </p>
              <p>
                Our methods enable at least 150% greater efficiency, in both
                delivery and ownership costs, compared to other outsourcing
                models.
              </p>
            </div>
            <div className="transition-all duration-300 ease-in-out hover:scale pt-8 flex flex-wrap justify-around items-center gap-6">
              <div className="flex flex-col space-y-1 justify-center items-center h-40 w-40 bg-white rounded-3xl shadow-custom-blue">
                <h1>Service</h1>
                <h1 className="text-blue-500 text-3xl">66</h1>
                <h1 className="font-bold">NPS</h1>
              </div>
              <div className="flex flex-col space-y-1 justify-center items-center h-40 w-40 bg-white rounded-3xl shadow-custom-blue">
                <h1>improvement</h1>
                <h1 className="text-blue-500 text-3xl">150%</h1>
                <h1 className="font-bold">efficiency</h1>
              </div>
              <div className="flex flex-col space-y-1 justify-center items-center h-40 w-40 bg-white rounded-3xl shadow-custom-blue">
                <h1>Experience</h1>
                <h1 className="text-blue-500 text-3xl">6+</h1>
                <h1 className="font-bold">years</h1>
              </div>
              <div className="flex flex-col space-y-1 justify-center items-center h-40 w-40 bg-white rounded-3xl shadow-custom-blue">
                <h1>Portfolio</h1>
                <h1 className="text-blue-500 text-3xl">50+</h1>
                <h1 className="font-bold">Customers</h1>
              </div>
              <div className="flex flex-col space-y-1 justify-center items-center h-40 w-40 bg-white rounded-3xl shadow-custom-blue">
                <h1>Offices</h1>
                <h1 className="text-blue-500 text-3xl">3</h1>
                <h1 className="font-bold">locations</h1>
              </div>
              <div className="flex flex-col space-y-1 justify-center items-center h-40 w-40 bg-white rounded-3xl shadow-custom-blue">
                <h1>People</h1>
                <h1 className="text-blue-500 text-3xl">20+</h1>
                <h1 className="font-bold">experts</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="py-12 flex flex-col lg:flex-row justify-center items-center gap-10 p-6">
          <div className="space-y-6 max-w-md lg:max-w-lg">
            <h1 className="text-3xl font-serif text-center lg:text-left">
              Our customers find our services exceptional
            </h1>
            <p>
              We don’t just develop high-end mobile apps, but we also build
              business relationships. Our early insights and final results
              routinely exceed customer expectations.
            </p>
            {/* Additional paragraphs omitted for brevity */}
          </div>
          <img
            className="max-w-full h-auto rounded-2xl lg:w-96 xl:w-[50rem]"
            src="https://www.helmes.com/wp-content/uploads/2021/10/Helmes_Design_Central-1.jpg"
            alt="Helmes Design"
          />
        </div>
        <ContactSection />
      </div>
    </>
  );
};

export default MobDevSection2;