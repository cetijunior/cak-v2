/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

function Relationship() {
  const [show, setShow] = useState(false); // Simplified state to manage visibility
  const sectionRef = useRef(null); // Use ref to reference the section for observing

  // Intersection Observer to watch the section and trigger the animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setShow(entry.isIntersecting);
      },
      { threshold: 0.2 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, [sectionRef]);

  return (
    <div className="pb-20 p-4 sm:p-10" id="services" ref={sectionRef}>
      <div className="flex flex-col justify-center w-full items-center mt-10 pt-10 space-y-5">
        <h1 className="text-bold text-4xl text-center text-black">
          How the relationship begins?
        </h1>
        <p className="text-center text-lg">
          We use the{" "}
          <Link legacyBehavior href="/#contact">
            <a className="text-blue-400">Quick Start model</a>
          </Link>{" "}
          for onboarding new projects. In order to gain a holistic
          understanding, we conduct a thorough analysis of your business`s IT
          infrastructure.
        </p>
      </div>
      <div
        className={`flex flex-col items-center justify-center md:flex-col lg:flex-row sm:space-x-3 sm:space-y-0 pt-20 space-y-8  ${
          show ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        {/* Simplified steps with mapping if there are multiple, similar steps */}
        {[1, 2, 3].map((step) => (
          <React.Fragment key={step}>
            <div
              className="flex flex-col items-start md:p-8 lg:p-6 md:justify-start lg:justify-center lg:w-[450px] lg:h-[300px] md:w-[400px] md:h-[300px] space-y-8 
                        w-[350px] h-[300px] justify-center p-8
                        transition-all duration-300 ease-in-out transform hover:scale-105 rounded-3xl shadow-custom-blue"
            >
              <h1 className="flex items-start font-bold text-3xl">
                Step {step}: Fact check, test
                <br /> assumptions
              </h1>
              <p className="text-lg">
                Plan the work, work the plan. Proper<br></br> formulation and
                planning of the project<br></br> ensures success.
              </p>
            </div>
            {step < 3 && ( // Only add arrows between the steps
              <img
                className="h-30 w-30 hover:animate-pulse transition-all duration-300 ease-in-out transform hover:scale-110 -rotate-90 md:-rotate-90 lg:rotate-180"
                src="/arrowLeft.png"
                alt="Arrow"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Relationship;
