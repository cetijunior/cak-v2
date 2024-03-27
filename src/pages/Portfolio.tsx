import React from "react";
import ProjectCard from "../components/ProjectCard";

function Portfolio() {
  return (
    <section id="projects" className="bg-white mx-auto min-h-[600px]">
      <div className="flex flex-col sm:space-y-16 sm:mb-10 items-center">
        <div className="flex flex-col mt-10 sm:mt-32 ">
          <h2 className=" text-center text-4xl sm:text-7xl font-playfair font-semibold">
            What We Do :
          </h2>
        </div>
        <ProjectCard />
      </div>
    </section>
  );
}

export default Portfolio;
