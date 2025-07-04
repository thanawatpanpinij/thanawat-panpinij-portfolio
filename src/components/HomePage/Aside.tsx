"use client";

import {
  getCurrentSectionId,
  highlightCurrentNavItem,
} from "@/lib/getCurrentSectionId";
import { NavItem } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const asideItems: NavItem[] = [
  { key: uuidv4(), label: "Home", href: "#home" },
  { key: uuidv4(), label: "About", href: "#about" },
  { key: uuidv4(), label: "Works", href: "#works" },
  { key: uuidv4(), label: "Contact", href: "#contact" },
];

export default function Aside() {
  const [currentAside, setCurrentAside] = useState<string>("");
  const [hoverAside, setHoverAside] = useState<string>("");

  useEffect(() => {
    const section = getCurrentSectionId();
    highlightCurrentNavItem(section);
    setCurrentAside(`#${section}`);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const section = getCurrentSectionId();
      highlightCurrentNavItem(section);
      setCurrentAside(`#${section}`);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside className="fixed right-0 top-[50%] grid grid-rows-4 gap-4 mr-8 translate-y-[-50%]">
      {asideItems.map(({ key, label, href }) => (
        <div key={key} className="flex justify-end items-center gap-4 h-[24px]">
          <p
            className={`text-accent transition-opacity duration-320 ${
              hoverAside && hoverAside === label
                ? "visible opacity-100"
                : "invisible opacity-0"
            }`}
          >
            {label}
          </p>
          <Link
            href={href}
            aria-label={`Go to ${label} section`}
            onMouseEnter={() => setHoverAside(label)}
            onMouseLeave={() => setHoverAside("")}
            className={`w-[13px] h-[13px] border-2 border-accent rounded-full transition-color duration-200 hover:bg-accent ${
              currentAside === href ? "bg-accent" : ""
            }`}
          ></Link>
        </div>
      ))}
    </aside>
  );
}
