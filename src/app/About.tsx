"use client";

import React from 'react'
import CarouselAbout from './CarouselAbout'
import { useState, useEffect } from 'react';

function About() {
    const [visible, setVisible] = useState(false); // Track if the section is visible
  const [show, setShow] = useState([false, false, false]); // Control visibility for each part

  useEffect(() => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      }, { threshold: 0.1 });

      observer.observe(aboutSection);

      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    if (visible) {
      // Sequentially trigger visibility for each part
      show.forEach((_, index) => {
        setTimeout(() => {
          setShow((prevShow) => {
            const newShow = [...prevShow];
            newShow[index] = true;
            return newShow;
          });
        }, index * 1000); // Adjust delay as needed
      });
    }
  }, [visible]);

    return (
        <section id='about' className='bg-white h-screen w-screen px-8 sm:px-24'>
            <div className=' sm:flex sm:flex-row flex flex-col gap-4 items-center' style={{ transition: 'opacity 1s ease', opacity: show[0] ? 1 : 0 }}>
                <div className='flex flex-col sm:mt-20 sm:gap-10 gap-7 fadeIn' >
                    <h2 className='sm:text-left text-center sm:text-3xl text-2xl font-semibold fadeIn' >Who are we?</h2>
                    <p className='sm:text-left text-lg sm:text-base text-center w-[400px] fadeIn' >Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. Sit <br /> architecto modi dolor, atque laborum qui <br />ea dolorem cupiditate fugit harum <br />corrupti veniam. Blanditiis repudiandae <br /> earum id laboriosam omnis quas <br />voluptate!</p>
                </div>
                <CarouselAbout/>
            </div>
        </section>
    )
}

export default About