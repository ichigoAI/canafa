'use client';

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t.header.about, href: "#about" },
    { label: t.header.contest, href: "#concours" },
    { label: t.header.program, href: "#program" },
    { label: t.header.contact, href: "#contact" },
  ];

  return (
    <header className="w-full flex justify-center py-3 h-20 bg-red-700 relative z-50">
      <div className="w-[90%] lg:w-[80%] flex items-center justify-between py-4 px-6">
        <Link href="/" className="bg-white rounded-full p-1">
          <Image src="/logo.png" alt="Logo" width={100} height={20} />
        </Link>

        <nav className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={toggleLanguage}
          className="hidden lg:block px-4 py-1.5 border border-white text-white rounded-md"
        >
          {language}
        </button>

        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden text-white"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-red-900 z-40 flex flex-col items-center justify-center gap-8">
          <button onClick={() => setMobileMenuOpen(false)}>
            <X className="text-white" />
          </button>

          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-white text-2xl">
              {link.label}
            </Link>
          ))}

          <button
            onClick={toggleLanguage}
            className="border border-white text-white px-6 py-2 rounded-md"
          >
            {language}
          </button>
        </div>
      )}
    </header>
  );
}
