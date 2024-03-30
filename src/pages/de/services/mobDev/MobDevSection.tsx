import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const services = [
  {
    id: 1,
    image: "/web-design.png",
    title: "App Design",
    description:
      "Erstellung optisch ansprechender und benutzerfreundlicher Designs für Ihre mobile App.",
  },
  {
    id: 2,
    image: "/smartphone.png",
    title: "App-Entwicklung",
    description:
      "Entwicklung leistungsstarker und skalierbarer mobiler Anwendungen für iOS- und Android-Plattformen.",
  },
  {
    id: 3,
    image: "/smma.png",
    title: "App Marketing",
    description:
      "Strategische Planung und Umsetzung von Marketingplänen zur Steigerung der Sichtbarkeit der App und der Nutzerbindung.",
  },
  {
    id: 4,
    image: "/web-maintenance.png",
    title: "App-Pflege",
    description:
      "Laufende Unterstützung und Wartung, um sicherzustellen, dass Ihre App immer auf dem neuesten Stand und sicher ist.",
  },
  {
    id: 5,
    image: "/analytics.png",
    title: "App-Analytik",
    description:
      "Nutzung von Datenanalysen zur Überwachung der App-Performance und der Benutzerinteraktionen für kontinuierliche Verbesserungen.",
  },
];

const MobDevSection = () => {
  const [visible, setVisible] = useState(false); // Track if the section is visible
  const [show, setShow] = useState(Array(services.length).fill(false)); // Individual visibility for links
  const [show2, setShow2] = useState([false, false, false]);
  const [visible2, setVisible2] = useState(false);

  const stackRef = useRef(null); // Use ref to reference the about section

  useEffect(() => {
    const currentRef = stackRef.current;
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

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (visible2) {
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
  }, [visible2, show2]);

  useEffect(() => {
    const currentRef = stackRef.current;
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

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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
  }, [visible, show]);
  return (
    <section id="services">
      <div
        ref={stackRef}
        style={{ opacity: show[0] ? 1 : 0, transition: "opacity 1s ease" }}
      >
        <div className="bg-blue-100">
          <div className="flex justify-center items-center py-10">
            <h1 className="text-2xl lg:text-4xl md:text- font-playfair font-semibold text-center">
              Entwicklungsdienstleistungen für mobile Anwendungen
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
                  className="transition-all duration-300 ease-in-out transform hover:scale-125 h-24 w-24 "
                  alt="service"
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
      </div>
    </section>
  );
};

export default MobDevSection;
