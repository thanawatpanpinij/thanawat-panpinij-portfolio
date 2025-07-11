"use client";

import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/lib/data/projectData";
import { useState } from "react";

const visibleProjects = projects.slice(0, 4);

export default function Project() {
  const [showAll, setShowAll] = useState<boolean>(false);
  return (
    <section id="works" className="sections grid gap-8">
      <section className="flex gap-8 items-center">
        <hr className="flex-grow border border-secondary w-[40%] lg:w-[min(100%,731px)] h-[1px]" />
        <h2 className="text-[1.75rem] lg:text-[2rem] text-gray whitespace-nowrap">
          My <span className="text-accent">Works</span>
        </h2>
      </section>
      <section className="grid gap-4 576:grid-cols-2 mt-8">
        {showAll
          ? projects.map((project) => (
              <ProjectCard key={project.key} project={project} />
            ))
          : visibleProjects.map((project) => (
              <ProjectCard key={project.key} project={project} />
            ))}
      </section>
      <button
        onClick={() => setShowAll(!showAll)}
        className="cursor-pointer flex gap-2 lg:justify-self-end items-center w-fit mx-auto lg:mx-0 px-8 py-4 text-accent border-3 border-accent rounded-xl transition-all duration-200 hover:-translate-y-1 hover:text-white hover:bg-accent hover:shadow-[0_0_10px_rgba(0,174,293,.6)]"
      >
        {showAll ? (
          <>
            <IoChevronUpOutline size={24} /> Show less
          </>
        ) : (
          <>
            <IoChevronDownOutline size={24} /> Show more
          </>
        )}
      </button>
    </section>
  );
}
