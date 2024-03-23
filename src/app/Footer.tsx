'use client'
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const handleScrollToSection = (event, selector) => {
    event.preventDefault(); // Prevent the default anchor link behavior
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
            <h5 className="text-xl font-bold mb-2">Our Company</h5>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#about-us" onClick={(e) => handleScrollToSection(e, '#about-us')}>About us</a>
              </li>
              <li className="mb-2">
                <a href="#services" onClick={(e) => handleScrollToSection(e, '#services')}>Website Development Services</a>
              </li>
              <li className="mb-2">
                <a href="#contact" onClick={(e) => handleScrollToSection(e, '#contact')}>Contact</a>
              </li>
              <li className="mb-2">
                <a href="#projects" onClick={(e) => handleScrollToSection(e, '#projects')}>Projects</a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
            <h5 className="text-xl font-bold mb-2">Socials</h5>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link legacyBehavior href="/facebook">
                  <a>Facebook</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link legacyBehavior href="/instagram">
                  <a>Instagram</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link  legacyBehavior href="/linkedin">
                  <a>Linkedin</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
            <h5 className="text-xl font-bold mb-2">Legal</h5>
            <p className="text-gray-400">Privacy Policy</p>
            <p className="text-gray-400">Terms of Use</p>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm mt-4">
          © {new Date().getFullYear()} CAK Web Solutions. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
