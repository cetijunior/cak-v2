/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const HowWeWork = () => {
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
      { threshold: 0.4 }
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
    <div
      ref={stackRef}
      style={{ opacity: show[0] ? 1 : 0, transition: "opacity 1s ease" }}
    >
      <div className="flex flex-col justify-center w-screen space-y-8 lg:space-y-0 md:space-y-8 lg:space-x-16 items-center lg:flex-row ">
        <div className="flex flex-col space-y-5 items-center justify-center md:items-center md:justify-center lg:items-start lg:justify-between ">
          <div className="lg:w-[450px] md:w-[600px] w-[350px] space-y-5 md:space-y-8 lg:space-y-3 items-center justify-center">
            <h1 className="lg:text-start md:text-center text-center text-4xl font-playfair font-semibold  md:text-5xl lg:text-6xl text-[#131B23] ">
              How we Work ?
            </h1>

            <h3 className="lg:text-start md:text-center text-center text-lg md:text-3xl font-semibold font-playfair lg:text-xl text-[#131B23]">
              We call it the CAK way.
            </h3>

            <p className="flex flex-row  items-center w-full font-thin group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:font-light text-[#131B23]">
              <span className="text-black group-hover:text-blue-500 pr-5">
                ◉{" "}
              </span>
              We initiate our process by immersing ourselves in your vision and
              objectives, fostering a deep understanding of your target audience
              and brand identity to craft a website that truly embodies your
              essence.
            </p>
            <p className="flex flex-row items-center group font-thin duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:font-light text-[#131B23]">
              <span className="text-black group-hover:text-blue-500 pr-5">
                ◉{" "}
              </span>
              Through a collaborative and agile design approach, we engage with
              you to refine the user journey and aesthetic, ensuring the outcome
              is not only visually compelling but also intuitively navigates
              your audience through your digital space.
            </p>
            <p className="flex flex-row items-center group font-thin duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:font-light text-[#131B23]">
              <span className="text-black group-hover:text-blue-500 pr-5">
                ◉{" "}
              </span>
              Leveraging cutting-edge technologies, we construct your website
              with scalability and future growth in mind, ensuring it stands
              resilient and adaptable to the ever-evolving web environment.
            </p>
            <p className="flex flex-row items-center group font-thin duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:font-light text-[#131B23]">
              <span className="text-black group-hover:text-blue-500 pr-5">
                ◉{" "}
              </span>
              Beyond the launch, we offer ongoing support and insight, helping
              you to adapt and flourish in the digital realm, ensuring your site
              remains aligned with your business’s growth and evolution.
            </p>
          </div>

          <div className="flex items-center justify-center font-thin sm:items-start sm:justify-center w-full rounded-2xl ">
            <button className="bg-[#446AF2] w-fit sm:w-fit px-24 p-2 rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:font-semibold shadow-custom-blue text-white">
              Contact us
            </button>
          </div>
        </div>

        <img
          className="h-[22rem] w-[22rem] lg:h-[30rem] lg:w-[45rem] md:h-[30rem] md:w-[45rem] sm:rounded-xl rounded-lg duration-300 ease-in-out transform hover:scale-105"
          src="/howwework.png"
          alt="pic"
        ></img>
      </div>
    </div>
  );
};

export default HowWeWork;
