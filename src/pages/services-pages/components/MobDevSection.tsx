import Link from "next/link";
import React from "react";

const mobDevSection = () => {
  return (
    <section id="services">
      <div className="h-auto md:h-[53rem] bg-blue-100">
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left">
          <h1 className="pt-10 text-3xl md:text-4xl px-4">
            Mobile app development services
          </h1>
        </div>
        <div className="pt-10 md:pt-20 flex flex-wrap justify-center items-center gap-10 md:gap-20">
          <div className="flex flex-col justify-center items-center space-y-4 md:space-y-8">
            <img
              className="h-16 w-16 md:h-[6rem] md:w-[6rem]"
              alt="phone"
              src="/smartphone.png"
            />
            <h1 className="font-bold text-lg md:text-xl">
              Mobile app development
            </h1>
            <p className="px-4">
              We gather and analyze all the business and technology requirements
              and evaluate and document them.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-4 md:space-y-8">
            <img
              className="h-16 w-16 md:h-[6rem] md:w-[6rem]"
              alt="phone"
              src="/smartphone.png"
            />
            <h1 className="font-bold text-lg md:text-xl">
              Mobile app development
            </h1>
            <p className="px-4">
              We gather and analyze all the business and technology requirements
              and evaluate and document them.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-4 md:space-y-8">
            <img
              className="h-16 w-16 md:h-[6rem] md:w-[6rem]"
              alt="phone"
              src="/smartphone.png"
            />
            <h1 className="font-bold text-lg md:text-xl">
              Mobile app development
            </h1>
            <p className="px-4">
              We gather and analyze all the business and technology requirements
              and evaluate and document them.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 pt-14">
          <div className="flex flex-col justify-center items-center space-y-4 md:space-y-8">
            <img
              className="h-16 w-16 md:h-[6rem] md:w-[6rem]"
              alt="phone"
              src="/smartphone.png"
            />
            <h1 className="font-bold text-lg md:text-xl">
              Mobile app development
            </h1>
            <p className="px-4">
              We gather and analyze all the business and technology requirements
              and evaluate and document them.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-4 md:space-y-8">
            <img
              className="h-16 w-16 md:h-[6rem] md:w-[6rem]"
              alt="phone"
              src="/smartphone.png"
            />
            <h1 className="font-bold text-lg md:text-xl">
              Mobile app development
            </h1>
            <p className="px-4">
              We gather and analyze all the business and technology requirements
              and evaluate and document them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default mobDevSection;
