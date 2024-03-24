"use client";

import React from 'react'
import CarouselAbout from './carousel-about/CarouselAbout'
import { useState, useEffect, useRef } from 'react';

function About() {
  const [visible, setVisible] = useState(false); // Track if the section is visible
  const [show, setShow] = useState([false, false, false]); // Individual visibility for links

  const aboutRef = useRef(null); // Use ref to reference the about section

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, { threshold: 0.4 });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (visible) {
      // Trigger fade-in effect for each part of the section with a delay
      show.forEach((_, index) => {
        setTimeout(() => {
          setShow((s) => {
            const newShow = [...s];
            newShow[index] = true;
            return newShow;
          });
        }, index * 1000); // Sequential delay
      });
    }
  }, [visible]);

    return (
        <section ref={aboutRef} id='about' className='bg-white mx-auto min-h-[600px]'>
            <div className='flex flex-col space-x-8 sm:ml-[-80px] ml-0 justify-center items-center' style={{ opacity: show[0] ? 1 : 0, transition: 'opacity 1s ease' }}>
                <div className='flex flex-col sm:mt-32 sm:gap-10 gap-7'>
                    <h2 className=' text-center lg:text-3xl text-2xl font-semibold z-10'>Who are we?</h2>
                    <p className='lg:text-left text-sm lg:text-base text-center w-[300px] md:text-center lg:w-[400px] z-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit architecto modi dolor, atque laborum qui ea dolorem cupiditate fugit harum corrupti veniam. Blanditiis repudiandae earum id laboriosam omnis quas voluptate!</p>
                </div>
                <CarouselAbout />
            </div>
        </section>
    )
}

export default About