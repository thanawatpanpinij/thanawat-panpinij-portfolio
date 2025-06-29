"use client";

import {
  getCurrentSectionId,
  highlightCurrentNavItem,
} from "@/lib/getCurrentSectionId";
import { NavList } from "@/types";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";

const navLists: NavList[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [current, setCurrent] = useState<string>("");

  useLayoutEffect(() => {
    const section = getCurrentSectionId();
    highlightCurrentNavItem(section);
    setCurrent(section);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const section = getCurrentSectionId();
      highlightCurrentNavItem(section);
      setCurrent(section);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 flex justify-center pt-8">
      {/* <div className="fixed w-[800px] h-[80px]">
        <svg
          viewBox="0 0 800 80"
          preserveAspectRatio="none"
          className="drop-shadow-[0_3px_3px_rgba(6,17,26,.2)]"
        >
          <path
            fill="white"
            d="M0,0 C140,0 100,80 200,80 L600,80 C700,80 660,0 800,0 L0,0"
          />
        </svg>
      </div> */}
      <nav className="z-100 relative grid gap-4 grid-cols-4 place-items-center px-8 py-4 text-dark-gray bg-[rgba(6,17,26,.5)] backdrop-blur-md rounded-full">
        {navLists.map(({ label, href }) => {
          return (
            <Link
              key={label}
              href={href}
              className={`z-1 px-4 py-3 transition-color duration-450 rounded-full ${
                current === label.toLowerCase() ? "text-white" : ""
              }`}
            >
              {label}
            </Link>
          );
        })}
        <div
          id="current-nav"
          className="absolute h-12 bg-secondary rounded-full transition-all duration-500"
        ></div>
      </nav>
    </header>
  );
}
