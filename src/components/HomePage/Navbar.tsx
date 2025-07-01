"use client";

import {
  getCurrentSectionId,
  highlightCurrentNavItem,
} from "@/lib/getCurrentSectionId";
import { NavItem } from "@/types";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const navLists: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [currentNav, setCurrentNav] = useState<string>("");
  // const pathname = usePathname();

  // useEffect(() => {
  //   setCurrentNav(pathname);
  //   highlightCurrentNavItem(pathname);
  // }, [pathname]);

  useEffect(() => {
    const section = getCurrentSectionId();
    highlightCurrentNavItem(`#${section}`);
    setCurrentNav(`#${section}`);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const section = getCurrentSectionId();
      highlightCurrentNavItem(`#${section}`);
      setCurrentNav(`#${section}`);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="z-100 sticky top-8 w-fit mx-auto">
      <nav className="relative grid gap-4 grid-cols-4 place-items-center px-8 py-4 text-dark-gray bg-[rgba(6,17,26,.5)] backdrop-blur-md rounded-full">
        {navLists.map(({ label, href }) => {
          return (
            <Link
              key={uuidv4()}
              href={href}
              className={`z-1 px-4 py-3 transition-color duration-200 rounded-full ${
                currentNav === href ? "text-white" : ""
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
