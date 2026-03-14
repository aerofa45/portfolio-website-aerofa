"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `px-3 py-1 rounded-md text-sm ${
      pathname === path
        ? "bg-slate-900 text-white"
        : "text-slate-700 hover:bg-slate-200"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Name / Logo */}
        <Link href="/" className="text-lg font-semibold">
          Aman Chaudhary
        </Link>

        {/* Menu */}
        <nav className="flex gap-2">

          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>

          <Link href="/research" className={linkClass("/research")}>
            Research
          </Link>

          <Link href="/projects" className={linkClass("/projects")}>
            Projects
          </Link>

          <Link href="/collab" className={linkClass("/collab")}>
            Collaborate
          </Link>

          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>

        </nav>
      </div>
    </header>
  );
}