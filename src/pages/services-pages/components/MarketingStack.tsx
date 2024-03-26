"use client";
import React, { useEffect, useState } from "react";
import "/styles/globals.css";
import HowWeWork from "./webDev/HowWeWork";

const techStack = [
  { name: "Meta Ads", icon: "/icons/meta.png" },
  { name: "TikTok Ads", icon: "/icons/tok.png" },
  { name: "Instagram", icon: "/icons/instagram.png" },
  { name: "Google Analytics", icon: "/icons/google.png" },
  { name: "SEO", icon: "/icons/seo.png" },
  { name: "Illustrator", icon: "/icons/ai.png" },
  { name: "Photoshop", icon: "/icons/psp.png" },
  { name: "ROI", icon: "/icons/roi.png" },
];

export default function MarketingStack() {
  return (
    <section className="flex flex-col sm:flex-row bg-white min-h-screen w-full justify-around items-center px-4 sm:px-10 lg:px-24 py-20">
      <div className="transition-all duration-300 ease-in-out transform hover:scale-105 p-7 rounded-xl shadow-custom-blue mb-10 sm:mb-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-10 text-center">
          We Amplify Your Voice
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              className={`flex flex-col items-center justify-center opacity-0 animate-fadeInUp delay-${index * 100
                }ms`}
            >
              <img
                src={tech.icon}
                className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
                alt={`${tech.name} logo`}
              />
              <span className="mt-2 text-sm md:text-md lg:text-lg font-semibold">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-md lg:max-w-lg space-y-4 px-4">
        <p className="text-sm sm:text-md lg:text-lg text-gray-600">
          Elevating your brand with dynamic social media strategies.
        </p>
        <p className="text-sm sm:text-md lg:text-lg text-gray-600">
          Crafting cutting-edge campaigns using the latest digital trends.
        </p>
        <p className="text-sm sm:text-md lg:text-lg text-gray-600">
          Transforming challenges into engaging content that resonates with your
          audience.
        </p>
        <p className="text-sm sm:text-md lg:text-lg text-gray-600">
          Our commitment to digital mastery is at the heart of everything we do.
        </p>
        <p className="text-sm sm:text-md lg:text-lg text-gray-600">
          From concept to viral hit, social media is our canvas of expression.
        </p>
        <button className="rounded-xl shadow-custom-blue p-3 bg-blue-600 text-white ">
          Tell us your Problem
        </button>
      </div>
      <div className="h-20"></div>
    </section>
  );
}
