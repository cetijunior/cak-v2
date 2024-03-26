import Link from "next/link";
import React from "react";

function ContactSection() {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center bg-blue-200 opacity-70 sm:h-[330px] w-auto sm:w-screen">
        <div className="px-5 py-20 w-[300px] sm:w-full flex flex-col items-center justify-center space-y-5">
          <h1 className="font-bold text-left sm:text-left text-3xl">
            Contact us
          </h1>
          <div className="text-xl text-left sm:text-center">
            <p>For a successful conversation about creating or improving business</p>
            <p>software, contact any of our people or drop us a line at</p>
            <Link className="text-blue-600" href={"/"}>
              info@cakwebsolutions.com.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
