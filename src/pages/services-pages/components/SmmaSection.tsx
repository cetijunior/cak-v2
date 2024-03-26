import Link from "next/link";
import React from "react";

const services = [
  {
    id: 1,
    image: "/smartphone.png",
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
    image: "/smartphone.png",
    title: "App Marketing",
    description:
      "Strategizing and executing marketing plans to increase app visibility and user engagement.",
  },
  {
    id: 4,
    image: "/smartphone.png",
    title: "App Maintenance",
    description:
      "Providing ongoing support and maintenance to ensure your app stays updated and secure.",
  },
  {
    id: 5,
    image: "/smartphone.png",
    title: "App Analytics",
    description:
      "Leveraging data analytics to monitor app performance and user interactions for continuous improvement.",
  },
];

const SmmaSection = () => {
  return (
    <section id="services">
      <div className="bg-blue-100">
        <div className="flex justify-center items-center py-10">
          <h1 className="text-4xl text-center">
            Social Media Marketing Services
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 p-6">
          {services.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center space-y-4 max-w-sm p-4"
            >
              <img className="h-24 w-24" alt="service" src={service.image} />
              <h1 className="font-bold text-xl text-center">{service.title}</h1>
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
