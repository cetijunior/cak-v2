/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const HowWeWork = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center sm:flex-row ">
        <div className="flex flex-col space-y-5 mr-20 ">
          <h1 className="text-4xl text-black ">How we Work ?</h1>
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
              alt="btn"
            ></img>
          </div>

        </div>

        <img
          className="h-[20rem] w-[20rem] rounded-lg sm:h-[33rem] sm:w-[50rem] sm:rounded-xl"
          src="https://www.helmes.com/wp-content/uploads/2021/09/MG_9332-1024x683.jpg"
          alt="pic">
        </img>


      </div>
    </div>
  );
};

export default HowWeWork;
