"use client";

import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projectData";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const visibleProjects = projects.slice(0, 4);

export default function ProjectSection() {
  const [showAll, setShowAll] = useState<boolean>(false);
  return (
    <section id="works" className="sections grid gap-8">
      <section className="flex gap-8 items-center">
        <hr className="border border-secondary w-[min(100%,731px)] h-[1px]" />
        <h2 className="text-[2rem] text-gray">
          My <span className="text-accent">Works</span>
        </h2>
      </section>
      <section className="grid gap-4 grid-cols-2 mt-8">
        {showAll
          ? projects.map((project) => (
              <ProjectCard key={uuidv4()} project={project} />
            ))
          : visibleProjects.map((project) => (
              <ProjectCard key={uuidv4()} project={project} />
            ))}
      </section>
      <button
        onClick={() => setShowAll(!showAll)}
        className="cursor-pointer flex gap-2 justify-self-end items-center w-fit px-8 py-4 text-accent border-3 border-accent rounded-xl transition-all duration-200 hover:-translate-y-1 hover:text-white hover:bg-accent hover:shadow-[0_0_10px_rgba(0,174,293,.6)]"
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
