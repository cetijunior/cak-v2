"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ServicesSection() {
  const [visible, setVisible] = useState(false); // Track if the section is visible
  const [show, setShow] = useState([false, false, false, false]); // Individual visibility for links

  useEffect(() => {
    const section = document.getElementById("services");
    if (section) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(true);
            }
          });
        },
        { threshold: 0.1 }
      );

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
        }, index * 500); // Sequential delay (1s, 2s, 3s, 4s)
      });
    }
  }, [visible]);

  const links = [
    {
      href: "/services-pages/web-dev",
      img: "/computer.png",
      title: "Website Development",
      description:
        "Focused on crafting tailored web solutions to elevate your digital presence.",
    },
    {
      href: "/services-pages/mob-dev",
      img: "/smartphone.png",
      title: "Mobile App Development",
      description:
        "Developing mobile apps designed for smooth and intuitive user experiences.",
    },
    {
      href: "/services-pages/smma",
      img: "/smma.png",
      title: "Social Media Marketing",
      description:
        "Approaches for expanding your brand's visibility across social media platforms.",
    },
    {
      href: "/services-pages/design",
      img: "/web-design.png",
      title: "Design",
      description:
        "Creative design strategies customized to meet your business requirements.",
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold font-playfair text-[#131B23]">
          Digital Services Provider
        </h2>
      </div>
      <div className="h-20"></div>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {links.map((link, index) => (
          <div
            key={index}
            className={`ease-in-out hover:scale-105 transition-opacity duration-1000 ${
              show[index] ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link legacyBehavior href={link.href} passHref>
              <div className="text-center cursor-pointer">
                <img
                  src={link.img}
                  alt={link.title}
                  className="mx-auto mb-4"
                  width={90}
                />
                <h3 className="text-2xl font-playfair text-[#131B23] font-semibold mb-4">
                  {link.title}
                </h3>
                <p className="text-[#131B23] font-mmontserrat font-light text-xl">
                  {link.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
