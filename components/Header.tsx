"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "À propos", href: "/about" },
  { label: "Concours", href: "/concours" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [language, setLanguage] = useState<"FR" | "EN">("FR");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "FR" ? "EN" : "FR"));
  };

  return (
    <header className="w-full flex justify-center h-20 py-3">
      <div className="w-[80%] flex items-center justify-between py-4 bg-red-700 px-6 rounded-b-lg shadow-lg">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          <Image
            src="/logoblanc.png"
            alt="Logo"
            width={140}
            height={20}
            priority
            className="drop-shadow-md transition-shadow duration-200"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
                relative text-white font-medium transition
                hover:text-red-200
                hover:border-b-2 hover:border-white
                hover:rounded-tl-md hover:rounded-tr-md
                active:shadow-[0_0_12px_rgba(255,255,255,0.7)]
                active:scale-95
                px-1
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Language Switch */}
        <button
          onClick={toggleLanguage}
          className="
            px-4 py-1.5 border border-white text-white rounded-md text-sm font-semibold
            hover:bg-white hover:text-red-700
            active:scale-95 active:shadow-[0_0_12px_rgba(255,255,255,0.7)]
            transition-all duration-200
          "
        >
          {language}
        </button>
      </div>
    </header>
  );
}
