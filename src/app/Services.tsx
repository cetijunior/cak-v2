'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ServicesSection() {
  // State to track whether the items are visible
  const [visible, setVisible] = useState(false);

  // Ref for the container of the cards
  const refContainer = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Is the container in view?
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect(); // We can disconnect after the first call
        }
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is in the viewport
      }
    );

    // Start observing the container
    if (refContainer.current) {
      observer.observe(refContainer.current);
    }

    // Clean up
    return () => {
      observer.disconnect();
    };
  }, []);

  // A function to apply the right animation delay to each card
  const getAnimationClass = (index) => {
    return visible ? `fade-in-up-${index}` : '';
  };

  return (
    <section id='services' className="py-16 bg-white" ref={refContainer}>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Digital services provider</h2>
      </div>
      <div className="h-12"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Service Item */}
        <Link href="/website-development" passHref>
          <div className={`text-center cursor-pointer animate ${getAnimationClass(0)}`}>
            <img src={'/computer.png'} alt="Website Development" className="mx-auto mb-4" width={60} />
            <h3 className="text-xl font-semibold mb-4">Website Development</h3>
            <p className="text-gray-600">Specializing in custom web development for businesses.</p>
          </div>
        </Link>
        
        {/* Service Item */}
        <Link href="/mobile-app-development" passHref>
          <div className={`text-center cursor-pointer animate ${getAnimationClass(1)}`}>
            <img src={'/computer.png'} alt="Mobile App Development" className="mx-auto mb-4" width={60} />
            <h3 className="text-xl font-semibold mb-4">Mobile App Development</h3>
            <p className="text-gray-600">Create powerful mobile applications with our expertise.</p>
          </div>
        </Link>
        
        {/* Service Item */}
        <Link href="/social-media-marketing" passHref>
          <div className={`text-center cursor-pointer animate ${getAnimationClass(2)}`}>
            <img src={'/computer.png'} alt="Social Media Marketing" className="mx-auto mb-4" width={60} />
            <h3 className="text-xl font-semibold mb-4">Social Media Marketing</h3>
            <p className="text-gray-600">Grow your brand's presence on social media platforms.</p>
          </div>
        </Link>

        {/* Service Item */}
        <Link href="/design" passHref>
          <div className={`text-center cursor-pointer animate ${getAnimationClass(3)}`}>
            <img src={'/computer.png'} alt="Design Services" className="mx-auto mb-4" width={60} />
            <h3 className="text-xl font-semibold mb-4">Design</h3>
            <p className="text-gray-600">Innovative design solutions that capture your brand's essence.</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
