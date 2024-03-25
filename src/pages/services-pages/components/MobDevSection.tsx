import Link from "next/link";
import React from "react";

const mobDevSection = () => {
  return (
    <section id="services">
      <div className="h-[53rem] bg-blue-100">
        <div className="flex flex-row justify-center items center">
          <h1 className="pt-10 text-4xl">Mobile app development services</h1>
        </div>
        <div className="pt-20 flex flex-row justify-center items-center gap-20 space-x-7">
          <div className="flex flex-col justify-center items-center space-y-8">
            <img
              className="h-[6rem] w-[6rem]"
              alt="phone"
              src="/smartphone.png"
            ></img>
            <h1 className="font-bold text-xl">Mobile app development</h1>
            <p>
              We gather and analyze all the business and<br></br>
              technology requirements and <br></br>
              evaluate and document them.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-8">
            <img
              className="h-[6rem] w-[6rem]"
              alt="phone"
              src="/smartphone.png"
            ></img>
            <h1 className="font-bold text-xl">Mobile app development</h1>
            <p>
              We gather and analyze all the business and<br></br>
              technology requirements and <br></br>
              evaluate and document them.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-8">
            <img
              className="h-[6rem] w-[6rem]"
              alt="phone"
              src="/smartphone.png"
            ></img>
            <h1 className="font-bold text-xl">Mobile app development</h1>
            <p>
              We gather and analyze all the business and<br></br>
              technology requirements and <br></br>
              evaluate and document them.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-10 pt-14">
          <div className="flex flex-col justify-center items-center space-y-8">
            <img
              className="h-[6rem] w-[6rem]"
              alt="phone"
              src="/smartphone.png"
            ></img>
            <h1 className="font-bold text-xl">Mobile app development</h1>
            <p>
              We gather and analyze all the business and<br></br>
              technology requirements and <br></br>
              evaluate and document them.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-8">
            <img
              className="h-[6rem] w-[6rem]"
              alt="phone"
              src="/smartphone.png"
            ></img>
            <h1 className="font-bold text-xl">Mobile app development</h1>
            <p>
              We gather and analyze all the business and<br></br>
              technology requirements and <br></br>
              evaluate and document them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default mobDevSection;
