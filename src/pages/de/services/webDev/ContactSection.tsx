import Link from "next/link";
import React from "react";

function ContactSection() {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center bg-blue-200 opacity-70 sm:h-[330px] w-screen">
        <div className="px-5 py-20 w-[300px] sm:w-full flex flex-col items-center justify-center space-y-5">
          <h1 className="font-bold text-left sm:text-left font-playfair text-3xl">
            Contact us
          </h1>
          <div className="text-xl text-left font-thin sm:text-center">
            <p>Reach out to us!</p>
            <p>
              Feel free to contact our team or send us an email at{" "}
              <Link className="text-blue-600" href="/de/Start#contact">

                info@cakwebsolutions.com.
              </Link>
            </p>
            <p>
              We&apos;re eager to talk about your social media strategy needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
