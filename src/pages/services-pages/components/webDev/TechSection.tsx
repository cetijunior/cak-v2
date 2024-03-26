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
    <section className="flex flex-col sm:flex-row bg-white h-full py-32 w-full justify-center sm:justify-evenly sm:items-start px-4 sm:px-10 lg:px-24">
      <div className="transition-all duration-300 ease-in-out transform cursor-pointer hover:scale-105 p-7 rounded-xl shadow-custom-blue mb-10 sm:mb-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-10 text-center">We speak your language</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {techStack.map((tech, index) => (
            <div key={tech.name} className={`flex flex-col items-center justify-center opacity-0 animate-fadeInUp delay-${index * 100}ms`}>
              <div className='duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center'>
                <img src={tech.icon} className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" alt={`${tech.name} logo`} />
                <span className="mt-2 text-sm md:text-md lg:text-lg font-semibold">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col space-y-8 sm:space-y-4 items-center sm:items-center p-4 rounded-3xl'>
        <div className="sm:w-[900px] lg:max-w-lg space-y-4 px-4 sm:items-start items-center">
          <p className="flex flex-row items-center group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:text-black text-gray-600">
            <span className='text-black group-hover:text-blue-500 pr-5'>◉ </span>
            Empowering your business through diverse technology expertise.
          </p>
          <p className="flex flex-row items-center group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:text-black text-gray-600">
            <span className='text-black group-hover:text-blue-500 pr-5'>◉ </span>
            Innovative solutions crafted with the latest tech stack.
          </p>
          <p className="flex flex-row items-center group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:text-black text-gray-600">
            <span className='text-black group-hover:text-blue-500 pr-5'>◉ </span>
            Bridging the gap between complex problems and user-friendly solutions.
          </p>
          <p className="flex flex-row items-center group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:text-black text-gray-600">
            <span className='text-black group-hover:text-blue-500 pr-5'>◉ </span>
            Our dedication to tech excellence shapes the core of our identity.
          </p>
          <p className="flex flex-row items-center group duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-md sm:text-lg hover:text-black text-gray-600">
            <span className='text-black group-hover:text-blue-500 pr-5'>◉ </span>
            From ideation to execution, technology is our language of choice.
          </p>

        </div>
        <button className='rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:font-semibold shadow-custom-blue w-fit px-16 p-2 bg-blue-600 text-white'>Tell us your Problem</button>
      </div>
    </section>
  );
}

