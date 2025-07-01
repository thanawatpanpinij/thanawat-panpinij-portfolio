"use client";

import { Project } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaGithub, FaGithubAlt, FaLink } from "react-icons/fa";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHover, setIsHover] = useState<boolean>(false);
  const { title, imageURL, stacks } = project;

  return (
    <article
      onMouseEnter={() => {
        if (!project.frontendRepo && !project.backendRepo && !project.liveDemo)
          return;
        setIsHover(true);
      }}
      onMouseLeave={() => setIsHover(false)}
      className="overflow-hidden text-white bg-black rounded-2xl transition duration-400 hover:-translate-1 hover:shadow-[7px_7px_var(--color-accent)]"
    >
      <div className="relative">
        <div
          className={`absolute inset-0 flex gap-4 justify-center items-center bg-[rgba(6,17,26,.6)] backdrop-blur-xs transition-opacity duration-400 ${
            isHover ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          {project.frontendRepo && (
            <>
              <Link
                title="Frontend repo"
                href={project.frontendRepo}
                aria-label="Go to Frontend repo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </Link>
            </>
          )}
          {project.backendRepo && (
            <>
              <Link
                title="Backend repo"
                href={project.backendRepo}
                aria-label="Go to Backend repo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubAlt size={30} />
              </Link>
            </>
          )}
          {project.liveDemo && (
            <>
              <Link
                title="Live demo site"
                href={project.liveDemo}
                aria-label="Go to live demo site"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink size={30} />
              </Link>
            </>
          )}
        </div>
        <Image
          width={449.5}
          height={250}
          src={imageURL}
          alt={title}
          className="w-full object-cover"
        />
      </div>
      <div className="flex gap-4 justify-between p-4">
        <h3>{title}</h3>
        <section className="flex gap-2 items-center">
          {stacks.map((stack) => (
            <Image
              key={uuidv4()}
              title={stack.alt}
              width={20}
              height={20}
              src={stack.stackURL}
              alt={stack.alt}
              className="w-[20px] h-auto object-cover"
            />
          ))}
        </section>
      </div>
    </article>
  );
}
