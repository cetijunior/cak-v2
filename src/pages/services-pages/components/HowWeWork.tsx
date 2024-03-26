import Link from "next/link";
import React from "react";

const HowWeWork = () => {
  const handleScrollToSection = (e, selector) => {
    e.preventDefault();
    const targetSection = document.querySelector(selector);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section>
      <div className="flex flex-col justify-center items-center gap-7 sm:flex-row ">
        <div className="flex flex-col space-y-5 mr-20 ">
          <h1 className="text-4xl text-black pb-10">How we Work ?</h1>
          <h3>We call it the CAK way.</h3>
          <p className="text-black pl-6">
            Our proprietary working model<br></br>
            guarantees world-class service at least <br></br>
            150% more efficient than alternative <br></br>
            software development models.
          </p>
          <p className="text-black pl-6">
            Our proprietary working model<br></br>
            guarantees world-class service at least <br></br>
            150% more efficient than alternative <br></br>
            software development models.
          </p>
          <p className="text-black pl-6">
            Our proprietary working model<br></br>
            guarantees world-class service at least <br></br>
            150% more efficient than alternative <br></br>
            software development models.
          </p>
          <p className="text-black pl-6">
            Our proprietary working model<br></br>
            guarantees world-class service at least <br></br>
            150% more efficient than alternative <br></br>
            software development models.
          </p>
          <div className="flex flex-row items-center gap-2">
            <Link className="text-blue-300 hover:text-blue-600" href={"/"}>
              Contact us
            </Link>
            <img
              className="h-[20px] w-[20px] rotate-180"
              src="/arrow.png"
            ></img>
          </div>
        </div>
        <img
          className="h-[20rem] w-[20rem] rounded-lg sm:h-[33rem] sm:w-[50rem] sm:rounded-xl"
          src="https://www.helmes.com/wp-content/uploads/2021/09/MG_9332-1024x683.jpg"
        ></img>
      </div>
      <div className="flex flex-col justify-center items-center mt-10 pt-10 space-y-5">
        <h1 className="text-bold text-4xl text-black">
          How the realationship begins?
        </h1>
        <p>
          We use the{" "}
          <Link className="text-blue-400" href={"contact"}>
            Quick Start model
          </Link>{" "}
          for onboarding new projects.<br></br>
          In order to gain a holistic understanding, we conduct a <br></br>
          thorough analysis of your business’s IT infrastructure.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center pt-20 space-y-8 sm:flex sm:flex-row sm:space-x-5 sm:space-y-0">
        <div className="flex flex-col items-start p-6 justify-center sm:w-[450px] sm:h-[300px] space-y-7 rounded-3xl shadow-custom-blue">
          <h1 className="flex items-start font-bold text-3xl">
            Step 1: Fact check, test
            <br /> assumptions
          </h1>
          <p className="text-lg">
            Plan the work, work the plan. Proper<br></br> formulation and
            planning of the project<br></br> ensures success.
          </p>
        </div>

        <div className="flex flex-col items-start p-6 justify-center sm:w-[450px] sm:h-[300px] space-y-7 rounded-3xl shadow-custom-blue">
          <h1 className="flex items-start font-bold text-3xl">
            Step 1: Fact check, test
            <br /> assumptions
          </h1>
          <p className="text-lg">
            Plan the work, work the plan. Proper<br></br> formulation and
            planning of the project<br></br> ensures success.
          </p>
        </div>

        <div className="flex flex-col items-start p-6 justify-center sm:w-[450px] sm:h-[300px] space-y-7 rounded-3xl shadow-custom-blue">
          <h1 className="flex items-start font-bold text-3xl">
            Step 1: Fact check, test
            <br /> assumptions
          </h1>
          <p className="text-lg">
            Plan the work, work the plan. Proper<br></br> formulation and
            planning of the project<br></br> ensures success.
          </p>
        </div>
      </div>
      <div className="h-80"></div>
      <div className="bg-blue-200 opacity-70 w-screen h-[330px]">
        <div className="flex flex-col items-center justify-center space-y-5">
          <h1 className="font-bold text-3xl pt-20">Contact us</h1>
          <p className="text-xl">
            For a successful conversation about creating or improving business
            software,<br></br> contact any of our people or drop us a line at{" "}
            <br></br>
            <Link className="text-blue-600" href={"/"}>
              info@cakwebsolutions.com.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
