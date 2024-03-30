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
            <p>Na kontaktoni!</p>
            <p>
              Mos ngurroni të kontaktoni ekipin tonë ose të na dërgoni një email
              në{" "}
              <Link className="text-blue-600" href="/al/FaqjaKryesore/#contact">
                info@cakwebsolutions.com.
              </Link>
            </p>
            <p>
              Ne jemi këtu, për të diskutuar rreth marketimit të biznesit tuaj.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
