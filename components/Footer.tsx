"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { href: "/about", label: "À Propos" },
    { href: "/program", label: "Programme" },
    { href: "/contest", label: "Concours" },
    { href: "/exhibitors", label: "Exposants" },
    { href: "/contact", label: "Contact" },
    { href: "/supporters", label: "Partenaires" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-red-900 via-red-800 to-black text-white">
      {/* Overlay léger */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Logo + description */}
        <div className="lg:col-span-2">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg">
            <Image
              src="/logoblanc.png"
              alt="Logo"
              width={140}
              height={20}
              priority
              className="drop-shadow-md transition-shadow duration-200"
            />            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">CANAFA 2026</h2>
              <p className="text-red-300">Sommet Canada–Afrique</p>
            </div>
          </div>

          <p className="text-red-200 mb-6 max-w-md">
            Bâtir des ponts durables entre l'innovation canadienne et le dynamisme africain pour une croissance économique mutuelle.
          </p>

          {/* Réseaux sociaux */}
          <div className="flex space-x-4 mt-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-700 flex items-center justify-center transition-all shadow-md hover:shadow-red-500/50"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-white group-hover:text-red-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Liens rapides */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Navigation</h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-red-200 hover:text-white transition-colors flex items-center group relative"
                >
                  <span className="w-2 h-2 rounded-full bg-red-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {link.label}
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-red-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + newsletter */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-red-200">Montréal, Canada</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
              <span className="text-red-200">contact@canafa2026.ca</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
              <span className="text-red-200">+1 (514) 123-4567</span>
            </li>
          </ul>

          {/* Newsletter */}
          <div className="mt-8">
            <h4 className="text-white font-bold mb-4">Restez informé</h4>
            <div className="flex shadow-lg rounded-lg overflow-hidden backdrop-blur-sm bg-white/10 border border-white/20">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 bg-transparent text-white placeholder-red-300 focus:outline-none"
              />
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold transition-all">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Barre inférieure */}
      <div className="border-t border-white/20 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-red-200 text-sm mb-4 md:mb-0">
            © 2026 CANAFA - Sommet Économique Canada–Afrique. Tous droits réservés.
          </div>

          <div className="flex items-center space-x-6">
            <Link href="#" className="text-red-200 hover:text-white text-sm transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="#" className="text-red-200 hover:text-white text-sm transition-colors">
              Conditions d'utilisation
            </Link>
            <Link href="#" className="text-red-200 hover:text-white text-sm transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>

        {/* Logo fusion */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center space-x-8 opacity-80">
            <div className="text-center">
              <div className="text-2xl">🇨🇦</div>
              <span className="text-red-200 text-sm">Canada</span>
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            <div className="text-center">
              <div className="text-2xl">🌍</div>
              <span className="text-red-200 text-sm">Afrique</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
