"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  if (!t?.footer) return null;

  const quickLinks = [
    { href: "#about", label: t.footer.links.about },
    { href: "#program", label: t.footer.links.program },
    { href: "#contest", label: t.footer.links.contest },
    { href: "#exhibitors", label: t.footer.links.exhibitors },
    { href: "#contact", label: t.footer.links.contact },
    { href: "#supporters", label: t.footer.links.partners },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-red-900 via-red-800 to-black text-white">
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Logo + description */}
        <div className="lg:col-span-2">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-white flex items-center justify-center shadow-lg">
              <Image
                src="/logo.png"
                alt="Logo CANAFA"
                width={140}
                height={20}
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold">CANAFA 2026</h2>
              <p className="text-red-300">{t.footer.summit}</p>
            </div>
          </div>

          <p className="text-red-200 mb-6 max-w-md">
            {t.footer.description}
          </p>

          {/* Social */}
          <div className="flex space-x-4 mt-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-700 flex items-center justify-center transition-all shadow-md"
              >
                <social.icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-bold text-lg mb-6">
            {t.footer.navigation}
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-red-200 hover:text-white transition-colors flex items-center group relative"
                >
                  <span className="w-2 h-2 rounded-full bg-red-500 mr-3 opacity-0 group-hover:opacity-100" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + newsletter */}
        <div>
          <h3 className="font-bold text-lg mb-6">
            {t.footer.contactTitle}
          </h3>

          <ul className="space-y-4">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 text-red-500 mr-3 mt-1" />
              <span className="text-red-200">{t.footer.location}</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 text-red-500 mr-3" />
              <span className="text-red-200">contact@canafa2026.ca</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 text-red-500 mr-3" />
              <span className="text-red-200">+1 (514) 123-4567</span>
            </li>
          </ul>

          {/* Newsletter */}
          <div className="mt-8">
            <h4 className="font-bold mb-4">
              {t.footer.newsletterTitle}
            </h4>
            <div className="flex rounded-lg overflow-hidden bg-white/10 border border-white/20">
              <input
                type="email"
                placeholder={t.footer.emailPlaceholder}
                className="flex-1 px-4 py-2 bg-transparent text-white placeholder-red-300 focus:outline-none"
              />
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 font-semibold">
                {t.footer.newsletterButton}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-red-200 text-sm mb-4 md:mb-0">
            {t.footer.legal.copyright}
          </p>

          <div className="flex space-x-6">
            <Link href="#" className="text-red-200 hover:text-white text-sm">
              {t.footer.legal.privacy}
            </Link>
            <Link href="#" className="text-red-200 hover:text-white text-sm">
              {t.footer.legal.terms}
            </Link>
            <Link href="#" className="text-red-200 hover:text-white text-sm">
              {t.footer.legal.legal}
            </Link>
          </div>
        </div>

        {/* Canada / Afrique */}
        <div className="mt-8 flex justify-center opacity-80">
          <div className="flex items-center space-x-8">
            <div className="text-center">
              <div className="text-2xl">🇨🇦</div>
              <span className="text-red-200 text-sm">
                {t.footer.countries.canada}
              </span>
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
            <div className="text-center">
              <div className="text-2xl">🌍</div>
              <span className="text-red-200 text-sm">
                {t.footer.countries.africa}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
