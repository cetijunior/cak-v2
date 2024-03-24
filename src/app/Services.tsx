'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ServicesSection() {
  const [visible, setVisible] = useState(false); // Track if the section is visible
  const [show, setShow] = useState([false, false, false, false]); // Individual visibility for links

  useEffect(() => {
    const section = document.getElementById('services');
    if (section) { // Check if the element exists
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      }, { threshold: 0.1 });

      observer.observe(section);

      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    if (visible) {
      // Trigger fade-in effect for each card with a delay
      show.forEach((_, index) => {
        setTimeout(() => {
          setShow((s) => {
            const newShow = [...s];
            newShow[index] = true;
            return newShow;
          });
        }, index * 1000); // Sequential delay (1s, 2s, 3s, 4s)
      });
    }
  }, [visible]);

  const links = [
    { href: './web-dev', img: '/computer.png', title: 'Website Development', description: 'Specializing in custom web solutions to enhance your online presence.' },
    { href: './mob-dev', img: '/smartphone.png', title: 'Mobile App Development', description: 'Creating mobile applications that offer seamless user experiences.' },
    { href: '/social-media-marketing', img: '/smma.png', title: 'Social Media Marketing', description: 'Strategies to grow your brand’s presence on various social platforms.' },
    { href: './services-pages/design', img: '/web-design.png', title: 'Design', description: 'Innovative design solutions tailored to your business’s needs.' }
  ];

  return (
    <section id='services' className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Digital Services Provider</h2>
      </div>
      <div className='h-20'></div>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {links.map((link, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 ${show[index] ? 'opacity-100' : 'opacity-0'}`}>
            <Link legacyBehavior href={link.href} passHref>
              <a className="text-center cursor-pointer">
                <img src={link.img} alt={link.title} className="mx-auto mb-4" width={90} />
                <h3 className="text-2xl font-semibold mb-4">{link.title}</h3>
                <p className="text-gray-600 text-xl">{link.description}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

