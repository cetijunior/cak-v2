import Link from "next/link";
import React from "react";

function ContactSection() {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center bg-blue-200 opacity-70 sm:h-[330px] w-screen">
        <div className="px-5 py-20 w-[300px] sm:w-full flex flex-col items-center justify-center space-y-5">
          <h1 className="font-bold text-left sm:text-left font-playfair text-3xl">
            Nehmen Sie Kontakt mit uns auf!
          </h1>
          <div className="text-xl text-left font-thin sm:text-center">
            <p>Sprechen Sie uns an!</p>
            <p>
              Kontaktieren Sie unser Team oder schicken Sie uns eine E-Mail an{" "}
              <Link className="text-blue-600" href="/de/Start#contact">
                info@cakwebsolutions.com.
              </Link>
            </p>
            <p>
              Wir freuen uns darauf, über Ihren Bedarf an einer
              Social-Media-Strategie zu sprechen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
