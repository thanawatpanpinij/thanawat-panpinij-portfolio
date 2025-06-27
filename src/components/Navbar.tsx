import { NavList } from "@/types";
import Link from "next/link";

const navLists: NavList[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 flex justify-center pt-8">
      <nav className="flex gap-8 items-center px-8 py-4 text-dark-gray rounded-full">
        {navLists.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className={`first:px-4 first:py-3 first:text-white first:bg-secondary first:rounded-full`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
