'use client'
import React, { useEffect, useState } from 'react';
import '/styles/globals.css'


const techStack = [
    { name: 'C++', icon: '/icons/cis.png' }, 
    { name: 'Python', icon: '/icons/python.png' },
    { name: 'Css', icon: '/icons/css-3.png' }, 
    { name: 'Sql', icon: '/icons/datenbank.png' },
    { name: 'Javascript', icon: '/icons/java-skript.png' }, 
    { name: 'Php', icon: '/icons/php.png' },
    { name: 'Java', icon: '/icons/java.png' }, 
    { name: 'React Native', icon: '/icons/codes.png' },
  ];


  
  export default function TechStackSection() {
    return (
      <section
      className={`flex flex-col sm:flex-row bg-white min-h-screen w-full justify-around items-center px-4 sm:px-10 lg:px-24 py-20 `}>
        <div className="transition-all duration-300 ease-in-out transform hover:scale-105 p-7 rounded-xl shadow-custom-blue mb-10 sm:mb-0">
          <h2 className="text-xl text-gray-900 mb-10 text-center">We speak your language</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {techStack.map((tech, index) => (
              <div key={tech.name} className={`flex flex-col items-center justify-center opacity-0 animate-fadeInUp delay-${index * 10000}ms`}>
                <img src={tech.icon} className="h-12 w-12 md:h-10 md:w-10" alt={`${tech.name} logo`} />
                <span className="mt-2 text-sm font-semibold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="min-w-md space-y-4 space-x-4">
          <p className="text-gray-600">Empowering your business through diverse technology expertise.</p>
          <p className="text-gray-600">Innovative solutions crafted with the latest tech stack.</p>
          <p className="text-gray-600">Bridging the gap between complex problems and user-friendly solutions.</p>
          <p className="text-gray-600">Our dedication to tech excellence shapes the core of our identity.</p>
          <p className="text-gray-600">From ideation to execution, technology is our language of choice.</p>
        </div>
      </section>
    );
  }
  
  