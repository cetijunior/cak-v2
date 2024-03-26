"use client";

import React, { useEffect, useRef, useState } from "react";

const services = [
  {
    id: 1,
    image: "/icons/strat.png",
    title: "Strategy Consultation",
    description:
      "We craft a tailored social media strategy aligned with your goals by deeply understanding your brand, audience, and market.",
  },
  {
    id: 2,
    image: "/icons/design.png",
    title: "Content Creation and Design",
    description:
      "We produce engaging social media content based on the latest digital trends and UX insights, designed to resonate with your audience and spur action.",
  },
  {
    id: 3,
    image: "/icons/smplanning.png",
    title: "Social Media Campaign Planning",
    description:
      "We design flexible, sustainable social media campaigns with high engagement, based on a solid, strategic foundation.",
  },
  {
    id: 4,
    image: "/icons/smgrowth.png",
    title: "Social Media Management and Growth",
    description:
      "We expertly manage your social media campaigns across platforms with the latest tools, ensuring optimal performance and broad audience reach.",
  },
  {
    id: 5,
    image: "/icons/analytics.png",
    title: "Ongoing Analytics and Optimization",
    description:
      "Our support continues post-launch, with continuous monitoring and optimizations to maximize your social media ROI and value.",
  },
];

const SmmaSection = () => {
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(Array(services.length).fill(false));
  const [show2, setShow2] = useState([false, false, false]);
  const [visible2, setVisible2] = useState(false);

  const sectionRef = useRef(null); // Use ref to reference the about section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible2(true);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (visible) {
      // Trigger fade-in effect for each part of the section with a delay
      show.forEach((_, index) => {
        setTimeout(() => {
          setShow2((s) => {
            const newShow2 = [...s];
            newShow2[index] = true;
            return newShow2;
          });
        }, index * 1000); // Sequential delay
      });
    }
  }, [visible]);

  useEffect(() => {
    const section = document.getElementById("services");
    if (section) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(true);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(section);

      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    if (visible) {
      // Adjusted to sequentially reveal all services
      services.forEach((_, index) => {
        setTimeout(() => {
          setShow((prevShow) => {
            const newShow = [...prevShow];
            newShow[index] = true;
            return newShow;
          });
        }, index * 500); // Sequential delay for each service
      });
    }
  }, [visible]);

  return (
    <section
      id="services"
      style={{ opacity: show[0] ? 1 : 0, transition: "opacity 1s ease" }}
    >
      <div className="bg-blue-100">
        <div className="flex justify-center items-center py-10">
          <h1 className="sm:text-4xl text-3xl font-semibold text-center">
            Social Media Marketing Services
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 p-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col items-center space-y-4 max-w-sm p-4 transition-all duration-300 ease-in-out transform hover:scale-105 ${
                show[index] ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                className="h-24 w-24 transition-all duration-300 ease-in-out transform hover:scale-125"
                alt="service"
                src={service.image}
              />
              <h1 className="font-bold text-xl text-center">{service.title}</h1>
              <p className="text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmmaSection;
