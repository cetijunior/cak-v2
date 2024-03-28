/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

function Relationship() {
  const [show, setShow] = useState(false); // Simplified state to manage visibility
  const sectionRef = useRef(null); // Use ref to reference the section for observing

  const steps = [
    {
      id: 1,
      title: "Step 1: Discovery and Analysis",
      description:
        "We start with a deep dive into your business requirements, expectations, and the technological landscape to ensure a solid foundation for the project.",
    },
    {
      id: 2,
      title: "Step 2: Design and Development",
      description:
        "Our team designs and develops your solution using agile methodologies, ensuring flexibility and constant updates on progress.",
    },
    {
      id: 3,
      title: "Step 3: Testing and Deployment",
      description:
        "Rigorous testing is conducted to ensure quality and performance. Following approval, we proceed with deploying your solution.",
    },
  ];

  // Intersection Observer to watch the section and trigger the animation
  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setShow(entry.isIntersecting);
      },
      { threshold: 0.2 } // Trigger when 10% of the section is visible
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="pb-20 p-4 sm:p-10" id="services" ref={sectionRef}>
      <div className="flex flex-col justify-center w-full items-center mt-10 pt-10 space-y-5">
        <h1 className="text-bold text-4xl text-center font-playfair text-[#131B23]">
          How the relationship begins?
        </h1>
        <p className="text-center text-[#131B23] font-thin text-lg">
          Our onboarding for new projects follows the{" "}
          <Link legacyBehavior href="/#contact">
            <a className="text-blue-400">Quick Start approach</a>
          </Link>{" "}
          . To ensure a comprehensive grasp, we perform an in-depth review of
          your business&apos;s IT framework.
        </p>
      </div>
      <div
        className={`flex flex-col items-center justify-center md:flex-col lg:flex-row sm:space-x-3 sm:space-y-0 pt-20 space-y-8  ${
          show ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        {/* Simplified steps with mapping if there are multiple, similar steps */}
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div
              className="flex flex-col items-start md:p-8 lg:p-6 md:justify-start lg:justify-center lg:w-[450px] lg:h-[300px] md:w-[400px] md:h-[300px] space-y-8 
                        w-[350px] h-[300px] justify-center p-8
                        transition-all duration-300 ease-in-out transform hover:scale-105 rounded-3xl shadow-custom-blue"
            >
              <h1 className="flex items-start text-center text-[#131B23] font-playfair font-bold text-3xl">
                {step.title}
              </h1>
              <p className="text-lg text-center text-[#131B23] font-thin">
                {step.description}s
              </p>
            </div>
            {index < steps.length - 1 && ( // Only add arrows between the steps
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
