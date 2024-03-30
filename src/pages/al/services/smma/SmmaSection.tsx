"use client";

import React, { useEffect, useRef, useState } from "react";

const services = [
  {
    id: 1,
    image: "/icons/strat.png",
    title: "Konsultimi i Strategjisë",
    description:
      "Ne krijojmë një strategji të përshtatur të mediave sociale në përputhje me qëllimet tuaja duke kuptuar thellësisht markën, audiencën dhe tregun tuaj.",
  },
  {
    id: 2,
    image: "/icons/design.png",
    title: "Krijimi i Contentit dhe dizajni",
    description:
      "Ne prodhojmë përmbajtje tërheqëse të mediave sociale bazuar në tendencat më të fundit dixhitale dhe njohuritë e UX, të krijuara për të rezonuar me audiencën tuaj dhe për të nxitur veprime.",
  },
  {
    id: 3,
    image: "/icons/smplanning.png",
    title: "Planifikimi i Rrjeteve Sociale",
    description:
      "Ne hartojmë fushata fleksibël dhe të qëndrueshme të mediave sociale me angazhim të lartë, bazuar në një bazë solide dhe strategjike.",
  },
  {
    id: 4,
    image: "/icons/smgrowth.png",
    title: "Menaxhimi dhe Rritja e Rrjeteve Sociale",
    description:
      "Ne menaxhojmë me mjeshtëri fushatat tuaja të mediave sociale nëpër platforma me mjetet më të fundit, duke siguruar performancë optimale dhe shtrirje të gjerë të audiencës.",
  },
  {
    id: 5,
    image: "/icons/analytics.png",
    title: "Analiza dhe optimizim i vazhdueshëm",
    description:
      "Mbështetja jonë vazhdon edhe pas lançimit, me monitorim të vazhdueshëm dhe optimizime për të maksimizuar ROI dhe vlerën tuaj të mediave sociale.",
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
            Sherbimi i Menaxhimit te Rrjeteve tuaja Sociale
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
    </section>
  );
};

export default SmmaSection;
