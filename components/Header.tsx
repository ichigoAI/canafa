"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

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
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "FR" ? "EN" : "FR"));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full flex justify-center py-3 bg-red-700 relative z-50">
      <div className="w-[90%] lg:w-[80%] flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center transition-transform duration-300 hover:scale-105 active:scale-95 bg-white rounded-full"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={20}
            priority
            className="drop-shadow-md transition-shadow duration-200"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8">
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

        {/* Desktop Language Switch */}
        <button
          onClick={toggleLanguage}
          className="
            hidden lg:block px-4 py-1.5 border border-white text-white rounded-md text-sm font-semibold
            hover:bg-white hover:text-red-700
            active:scale-95 active:shadow-[0_0_12px_rgba(255,255,255,0.7)]
            transition-all duration-200
          "
        >
          {language}
        </button>

        {/* Mobile Burger */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-white p-2 rounded-md hover:bg-red-600 transition"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-red-900 bg-opacity-95 backdrop-blur-md z-40 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button (mobile) */}
<button
  onClick={() => setMobileMenuOpen(false)}
  className="absolute top-6 right-6 text-white p-2 rounded-md hover:bg-red-700 transition"
>
  <X size={28} />
</button>
        <div className="flex flex-col h-full justify-center items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="
                text-white text-2xl font-bold hover:text-red-300 transition-colors
                active:scale-95 active:shadow-[0_0_12px_rgba(255,255,255,0.7)]
              "
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Language Switch */}
          <button
            onClick={toggleLanguage}
            className="
              px-6 py-2 border border-white text-white rounded-md text-lg font-semibold
              hover:bg-white hover:text-red-700
              active:scale-95 active:shadow-[0_0_12px_rgba(255,255,255,0.7)]
              transition-all duration-200
            "
          >
            {language}
          </button>
        </div>
      </div>
    </header>
  );
}
