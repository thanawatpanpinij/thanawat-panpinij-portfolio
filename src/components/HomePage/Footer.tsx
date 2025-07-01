import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { FaCodepen } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center p-8 text-secondary bg-white">
      <div className="flex gap-6">
        <Link
          href="https://github.com/thanawatpanpinij"
          target="_blank"
          aria-label="Go to GitHub"
          rel="noopener noreferrer"
          className="transition-all duration-200 hover:-translate-y-1 hover:text-accent"
        >
          <FiGithub size={25} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/thanawat-panpinij-a44848212/"
          target="_blank"
          aria-label="Go to Linkedin"
          rel="noopener noreferrer"
          className="transition-all duration-200 hover:-translate-y-1 hover:text-accent"
        >
          <LuLinkedin size={25} />
        </Link>
        <Link
          href="https://codepen.io/thanawatpanpinij"
          target="_blank"
          aria-label="Go to Codepen"
          rel="noopener noreferrer"
          className="transition-all duration-200 hover:-translate-y-1 hover:text-accent"
        >
          <FaCodepen size={25} />
        </Link>
      </div>
      <p className="text-xs">@2025 Thanawat Panpinij. All rights reserved.</p>
    </footer>
  );
}
