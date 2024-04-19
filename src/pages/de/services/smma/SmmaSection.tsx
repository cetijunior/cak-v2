"use client";

import React, { useEffect, useRef, useState } from "react";

const services = [
  {
    id: 1,
    image: "/icons/strat.png",
    alt: "Strategy Consultation illustration",
    title: "Strategie-Beratung",
    description:
      "Wir entwickeln eine maßgeschneiderte Social-Media-Strategie, die auf Ihre Ziele abgestimmt ist, indem wir Ihre Marke, Ihr Publikum und Ihren Markt genau verstehen.",
  },
  {
    id: 2,
    image: "/icons/design.png",
    alt: "Content Creation and Design illustration",
    title: "Erstellung und Gestaltung von Inhalten",
    description:
      "Wir produzieren ansprechende Social-Media-Inhalte, die auf den neuesten digitalen Trends und UX-Erkenntnissen basieren und so konzipiert sind, dass sie Ihr Publikum ansprechen und zum Handeln anregen.",
  },
  {
    id: 3,
    image: "/icons/smplanning.png",
    alt: "Social Media Campaign Planning illustration",
    title: "Planung von Social Media-Kampagnen",
    description:
      "Wir konzipieren flexible, nachhaltige Social-Media-Kampagnen mit hohem Engagement, die auf einer soliden, strategischen Grundlage basieren.",
  },
  {
    id: 4,
    image: "/icons/smgrowth.png",
    alt: "Social Media Management and Growth illustration",
    title: "Social Media Management und Wachstum",
    description:
      "Wir verwalten Ihre Social-Media-Kampagnen auf allen Plattformen mit den neuesten Tools, um eine optimale Leistung und eine große Reichweite zu gewährleisten.",
  },
  {
    id: 5,
    image: "/icons/analytics.png",
    alt: "Ongoing Analytics and Optimization illustration",
    title: "Fortlaufende Analyse und Optimierung",
    description:
      "Unser Support geht auch nach der Einführung weiter, mit kontinuierlicher Überwachung und Optimierung, um den ROI und den Wert Ihrer sozialen Medien zu maximieren.",
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
        }, index * 500); // Sequential delay
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
      <div className="bg-[#AECBEB]">
        <div className="flex justify-center items-center py-10">
          <h1 className="sm:text-4xl text-3xl font-playfair font-semibold text-center">
            Social Media Marketing Dienstleistungen
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 p-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col items-center space-y-4 max-w-sm p-4 transition-all duration-300 ease-in-out transform hover:scale-105 ${
                show2[index] ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                className="h-24 w-24 transition-all duration-300 ease-in-out transform hover:scale-125"
                alt={service.alt}
                src={service.image}
              />
              <h1 className="font-bold text-xl font-playfair text-center">
                {service.title}
              </h1>
              <p className="text-center font-thin">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmmaSection;
