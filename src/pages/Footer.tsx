"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const handleScrollToSection = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    selector: string
  ) => {
    e.preventDefault();
    const targetSection = document.querySelector(selector);
    if (targetSection) {
      const top = (targetSection as HTMLElement).offsetTop;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-white text-[#131B23] p-4">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col sm:flex-row justify-evenly sm:items-start sm:text-start px-4 sm:px-10 w-full">
          <div className="flex flex-col w-fit mb-4 mx-4">
            <h5 className="text-xl font-bold font-playfair mb-2">
              Our Company
            </h5>
            <ul className="text-[#131B23] font-thin">
              <Link href="/#about" legacyBehavior>
                <li className="mb-2 hover:text-[#446AF2] cursor-pointer">
                  About us
                </li>
              </Link>
              <Link href="/#services" legacyBehavior>
                <li className="mb-2 hover:text-[#446AF2] cursor-pointer">
                  Website Development Services
                </li>
              </Link>

              <Link href="/#contact" legacyBehavior>
                <li className="mb-2 hover:text-[#446AF2] cursor-pointer">
                  Contact
                </li>
              </Link>

              <Link href="/#projects" legacyBehavior>
                <li className="mb-2 hover:text-[#446AF2] cursor-pointer">
                  Projects
                </li>
              </Link>
            </ul>
          </div>

          <div className="mb-4 mx-4">
            <h5 className="text-xl font-bold font-playfair mb-2">Socials</h5>
            <ul className="text-[#131B23] font-thin">
              <li className="mb-2 hover:text-[#446AF2] ">
                <Link
                  legacyBehavior
                  href="https://www.facebook.com/profile.php?id=61558254502814"
                >
                  <a>Facebook</a>
                </Link>
              </li>
              <li className="mb-2 hover:text-[#446AF2]">
                <Link
                  legacyBehavior
                  href="https://www.instagram.com/cakwebsolutions/"
                >
                  <a>Instagram</a>
                </Link>
              </li>
              <li className="mb-2 hover:text-[#446AF2]">
                <Link
                  legacyBehavior
                  href="https://www.linkedin.com/company/cak-web-solutions/"
                >
                  <a>Linkedin</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-4 mx-4">
            <h5 className="text-xl font-bold font-playfair mb-2">Legal</h5>
            <p className="text-[#131B23] font-thin hover:text-[#446AF2]">
              Privacy Policy
            </p>
            <p className="text-[#131B23] font-thin hover:text-[#446AF2]">
              Terms of Use
            </p>
          </div>
        </div>
      </div>
      <div className="text-center text-[#131B23] font-thin text-sm mt-4">
        © {new Date().getFullYear()} CAK Web Solutions. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
