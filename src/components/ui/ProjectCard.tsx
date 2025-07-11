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
  const { title, frontendRepo, backendRepo, liveDemo, image, stacks } = project;
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <article
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="overflow-hidden text-white bg-black rounded-2xl transition duration-400 hover:-translate-1 hover:shadow-[7px_7px_var(--color-accent)]"
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
            <>
              <Link
                title="Frontend repo"
                href={frontendRepo}
                aria-label="Go to Frontend repo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 flex-col items-center transition-transform duration-200 hover:-translate-y-1"
              >
                <FaGithub size={30} />
                <p className="text-xs text-gray">Frontend Repo</p>
              </Link>
            </>
          )}
          {liveDemo && (
            <>
              <Link
                title="Live demo site"
                href={liveDemo}
                aria-label="Go to live demo site"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 flex-col items-center transition-transform duration-200 hover:-translate-y-1"
              >
                <FaLink size={30} />
                <p className="text-xs text-gray">Live Demo</p>
              </Link>
            </>
          )}
          {backendRepo && (
            <>
              <Link
                title="Backend repo"
                href={backendRepo}
                aria-label="Go to Backend repo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 flex-col items-center transition-transform duration-200 hover:-translate-y-1"
              >
                <FaGithubAlt size={30} />
                <p className="text-xs text-gray">Backend Repo</p>
              </Link>
            </>
          )}
        </div>
        <Image
          width={image.width}
          height={image.height}
          src={image.imageURL}
          alt={title}
          placeholder="blur"
          blurDataURL={image.blurDataURL}
          loading="lazy"
          className={`w-full object-cover`}
        />
      </div>
      <div className="flex gap-4 justify-between p-4">
        <h3>{title}</h3>
        <section className="flex gap-2 items-center">
          {stacks.map(({ key, width, height, src, alt }) => (
            <Image
              key={key}
              title={alt}
              width={width}
              height={height}
              src={src}
              alt={alt}
              className="w-[20px] h-auto object-cover"
            />
          ))}
        </section>
      </div>
    </article>
  );
}
