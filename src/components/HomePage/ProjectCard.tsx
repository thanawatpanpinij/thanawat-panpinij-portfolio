"use client";

import { Project } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { FaGithub, FaGithubAlt, FaLink } from "react-icons/fa";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHover, setIsHover] = useState<boolean>(false);
  const { title, frontendRepo, backendRepo, liveDemo, image, stacks } = project;

  return (
    <article
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="text-white bg-black rounded-2xl transition duration-400 hover:-translate-1 hover:shadow-[7px_7px_var(--color-accent)]"
    >
      <div className="relative">
        <div
          className={`absolute inset-0 flex gap-4 justify-center items-center bg-[rgba(6,17,26,.6)] backdrop-blur-xs transition-opacity duration-400 ${
            isHover ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          {!frontendRepo && !backendRepo && !liveDemo && (
            <p className="text-gray">No links</p>
          )}
          {frontendRepo && (
            <div className="flex gap-2 flex-col items-center">
              <Link
                title="Frontend repo"
                href={frontendRepo}
                aria-label="Go to Frontend repo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </Link>
              <p className="text-xs text-gray">Frontend Repo</p>
            </div>
          )}
          {backendRepo && (
            <div className="flex gap-2 flex-col items-center">
              <Link
                title="Backend repo"
                href={backendRepo}
                aria-label="Go to Backend repo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubAlt size={30} />
              </Link>
              <p className="text-xs text-gray">Backend Repo</p>
            </div>
          )}
          {liveDemo && (
            <div className="flex gap-2 flex-col items-center">
              <Link
                title="Live demo site"
                href={liveDemo}
                aria-label="Go to live demo site"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink size={30} />
              </Link>
              <p className="text-xs text-gray">Live Demo</p>
            </div>
          )}
        </div>
        <Image
          width={image.width}
          height={image.height}
          src={image.imageURL}
          alt={title}
          className="w-full object-cover"
        />
      </div>
      <div className="flex gap-4 justify-between p-4">
        <h3>{title}</h3>
        <section className="flex gap-2 items-center">
          {stacks.map(({ key, width, height, stackURL, alt }) => (
            <Image
              key={key}
              title={alt}
              width={width}
              height={height}
              src={stackURL}
              alt={alt}
              className="w-[20px] h-auto object-cover"
            />
          ))}
        </section>
      </div>
    </article>
  );
}
