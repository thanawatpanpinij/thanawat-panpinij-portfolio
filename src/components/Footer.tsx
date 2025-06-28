import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { FaCodepen } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center p-8 text-secondary bg-white">
      <div className="flex gap-4">
        <Link
          href="https://github.com/thanawatpanpinij"
          target="_blank"
          className="transition-all duration-200 hover:-translate-y-px hover:text-accent"
        >
          <FiGithub size={20} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/thanawat-panpinij-a44848212/"
          target="_blank"
          className="transition-all duration-200 hover:-translate-y-px hover:text-accent"
        >
          <LuLinkedin size={20} />
        </Link>
        <Link
          href="https://codepen.io/thanawatpanpinij"
          target="_blank"
          className="transition-all duration-200 hover:-translate-y-px hover:text-accent"
        >
          <FaCodepen size={20} />
        </Link>
      </div>
      <p className="text-xs">@2025 Thanawat Panpinij. All rights reserved.</p>
    </footer>
  );
}
