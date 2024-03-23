'use client'
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import webDev from './services-pages/web-dev';
import mobDev from './services-pages/mob-dev';
import smma from './services-pages/smma';
import design from './services-pages/design';

export default function ServicesSection() {
  const ref = useRef(null); // Ref for the section
  const [isVisible, setIsVisible] = useState(false); // State to track the visibility of the section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.50 } // Trigger when at least 10% of the element is in the viewport
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  // Dynamically generate the card classes based on visibility
  const cardClass = isVisible ? "fade-in" : "opacity-0";

  return (
    <section id='services' className="py-16 h-[700px] bg-white" ref={ref}>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Digital Services Provider</h2>
      </div>
      <div className='h-20'></div>
      <div className={`max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 transition-opacity duration-1000 ${cardClass}`}>
        
        <Link legacyBehavior href={'webDev'} passHref>
          <a className="text-center cursor-pointer">
            <img src={'/computer.png'} alt="Website Development" className="mx-auto mb-4" width={90} />
            <h3 className="text-2xl font-semibold mb-4">Website Development</h3>
            <p className="text-gray-600 text-xl">Specializing in custom web solutions to enhance your online presence.</p>
          </a>
        </Link>
        <Link legacyBehavior href="/mobile-app-development" passHref>
          <a className="text-center cursor-pointer">
            <img src={'/smartphone.png'} alt="Mobile App Development" className="mx-auto mb-4" width={90} />
            <h3 className="text-2xl font-semibold mb-4">Mobile App Development</h3>
            <p className="text-gray-600 text-xl">Creating mobile applications that offer seamless user experiences.</p>
          </a>
        </Link>
        
        <Link legacyBehavior href="/social-media-marketing" passHref>
          <a className="text-center cursor-pointer">
            <img src={'/smma.png'} alt="Social Media Marketing" className="mx-auto mb-4" width={90} />
            <h3 className="text-2xl font-semibold mb-4">Social Media Marketing</h3>
            <p className="text-gray-600 text-xl">Strategies to grow your brand’s presence on various social platforms.</p>
          </a>
        </Link>
        
        <Link legacyBehavior href="/design" passHref>
          <a className="text-center cursor-pointer">
            <img src={'/web-design.png'} alt="Design Services" className="mx-auto mb-4" width={90} />
            <h3 className="text-2xl font-semibold mb-4">Design</h3>
            <p className="text-gray-600 text-xl">Innovative design solutions tailored to your business’s needs.</p>
          </a>
        </Link>

      </div>
    </section>
  );
}
