import Link from "next/link";
import React from "react";

const mobDevSection = () => {
  return (
    <section id="services">
      <div className="bg-blue-100">
        <div className="flex justify-center items-center py-10">
          <h1 className="text-4xl text-center">
            Mobile app development services
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 p-6">
          {Array.from({ length: 3 }, (_, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 max-w-sm p-4"
            >
              <img className="h-24 w-24" alt="phone" src="/smartphone.png" />
              <h1 className="font-bold text-xl text-center">
                Mobile app development
              </h1>
              <p className="text-center">
                We gather and analyze all the business and technology
                requirements and evaluate and document them.
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 p-6">
          {Array.from({ length: 2 }, (_, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 max-w-sm p-4"
            >
              <img className="h-24 w-24" alt="phone" src="/smartphone.png" />
              <h1 className="font-bold text-xl text-center">
                Mobile app development
              </h1>
              <p className="text-center">
                We gather and analyze all the business and technology
                requirements and evaluate and document them.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default mobDevSection;
