'use client'
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const handleScrollToSection = (e, selector) => {
    e.preventDefault();
    const targetSection = document.querySelector(selector);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-white text-black p-4">
      <div className="flex justify-center items-start">
        <div className="flex flex-col lg:flex-row justify-around items-start max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="mb-4">
            <h5 className="text-xl font-bold mb-2">Our Company</h5>
            <ul className="text-gray-600">
              <li className="mb-2 cursor-pointer" onClick={(e) => handleScrollToSection(e, '#about-us')}>About us</li>
              <li className="mb-2 cursor-pointer" onClick={(e) => handleScrollToSection(e, '#services')}>Website Development Services</li>
              <li className="mb-2 cursor-pointer" onClick={(e) => handleScrollToSection(e, '#contact')}>Contact</li>
              <li className="mb-2 cursor-pointer" onClick={(e) => handleScrollToSection(e, '#projects')}>Projects</li>
            </ul>
          </div>
          <div className="mb-4">
            <h5 className="text-xl font-bold mb-2">Socials</h5>
            <ul className="text-gray-600">
              <li className="mb-2">
                <Link legacyBehavior href="/facebook"><a>Facebook</a></Link>
              </li>
              <li className="mb-2">
                <Link legacyBehavior href="/instagram"><a>Instagram</a></Link>
              </li>
              <li className="mb-2">
                <Link legacyBehavior href="/linkedin"><a>Linkedin</a></Link>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h5 className="text-xl font-bold mb-2">Legal</h5>
            <p className="text-gray-600">Privacy Policy</p>
            <p className="text-gray-600">Terms of Use</p>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-600 text-sm mt-4">
        © {new Date().getFullYear()} CAK Web Solutions. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
