import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const services = [
  {
    id: 1,
    image: "/design.png",
    title: "App Design",
    description:
      "Creating visually appealing and user-friendly designs for your mobile app.",
  },
  {
    id: 2,
    image: "/smartphone.png",
    title: "App Development",
    description:
      "Developing high-performance and scalable mobile applications for iOS and Android platforms.",
  },
  {
    id: 3,
    image: "/smma.png",
    title: "App Marketing",
    description:
      "Strategizing and executing marketing plans to increase app visibility and user engagement.",
  },
  {
    id: 4,
    image: "/web-maintenance.png",
    title: "App Maintenance",
    description:
      "Providing ongoing support and maintenance to ensure your app stays updated and secure.",
  },
  {
    id: 5,
    image: "/analytics.png",
    title: "App Analytics",
    description:
      "Leveraging data analytics to monitor app performance and user interactions for continuous improvement.",
  },
];

const mobDevSection = () => {
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
    <section id="services">
      <div
        ref={stackRef}
        style={{ opacity: show[0] ? 1 : 0, transition: "opacity 1s ease" }}
      >
        <div className="bg-blue-100">
          <div className="flex justify-center items-center py-10">
            <h1 className="text-4xl text-center">
              Mobile app development services
            </h1>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-10 p-6">
            {services.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-center space-y-4 max-w-sm p-4"
              >
                <img
                  className="transition-all duration-300 ease-in-out hover:scale h-24 w-24"
                  alt="service"
                  src={service.image}
                />
                <h1 className="font-bold text-xl text-center">
                  {service.title}
                </h1>
                <p className="text-center">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-10 p-6">
            {services.slice(3).map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-center space-y-4 max-w-sm p-4"
              >
                <img className="h-24 w-24" alt="phone" src={service.image} />
                <h1 className="font-bold text-xl text-center">
                  {service.title}
                </h1>
                <p className="text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default mobDevSection;
