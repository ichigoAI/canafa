"use client";

import React, { useRef } from "react";
import { ExternalLink, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Type partenaire
export type Partner = {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
  email: string;
  category?: "premium" | "gold" | "bronze";
};

// Données par défaut (restent en FR ou EN selon ton choix business)
const defaultPartners: Partner[] = [
  {
    id: 1,
    name: "TechInnovate Inc.",
    logo: "🚀",
    description: "Leader mondial en solutions technologiques innovantes",
    website: "https://techinnovate.example.com",
    email: "contact@techinnovate.example.com",
    category: "premium",
  },
  {
    id: 2,
    name: "Nova Finance",
    logo: "💎",
    description: "Services financiers de nouvelle génération",
    website: "https://novafinance.example.com",
    email: "contact@novafinance.example.com",
    category: "gold",
  },
  {
    id: 3,
    name: "Urban Dynamics",
    logo: "🏙️",
    description: "Solutions urbaines intelligentes et durables",
    website: "https://urbandynamics.example.com",
    email: "contact@urbandynamics.example.com",
    category: "bronze",
  },
  {
    id: 4,
    name: "PixelCraft Studios",
    logo: "🎨",
    description: "Design et expériences digitales premium",
    website: "https://pixelcraft.example.com",
    email: "contact@pixelcraft.example.com",
    category: "gold",
  },
];

// Couleurs des badges
const categoryColors: Record<string, string> = {
  premium: "bg-red-500 text-white",
  gold: "bg-amber-400 text-black",
  bronze: "bg-orange-600 text-white",
};

// Card partenaire
function PartnerCard({ partner }: { partner: Partner }) {
  const { t } = useLanguage();

  return (
    <div className="relative min-w-[280px] rounded-2xl bg-white/30 backdrop-blur-lg border border-white/40 shadow-2xl p-6 flex items-center gap-6 hover:scale-105 transition-transform duration-300 flex-shrink-0">
      
      {/* Badge catégorie */}
      {partner.category && (
        <span
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
            categoryColors[partner.category]
          }`}
        >
          {t.partners.categories[partner.category]}
        </span>
      )}

      {/* Logo */}
      <div className="text-6xl">{partner.logo}</div>

      {/* Infos */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-2 text-gray-900">
          {partner.name}
        </h3>

        <p className="text-gray-700 mb-3">
          {partner.description}
        </p>

        <div className="flex flex-col gap-1 text-sm">
          <a
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-red-600 hover:text-red-800"
          >
            <ExternalLink className="w-4 h-4" />
            {partner.website}
          </a>

          <a
            href={`mailto:${partner.email}`}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
          >
            <Mail className="w-4 h-4" />
            {partner.email}
          </a>
        </div>
      </div>
    </div>
  );
}

// Showcase avec scroll horizontal
export default function PartnerShowcase({
  partners = defaultPartners,
}: {
  partners?: Partner[];
}) {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-pink-100 via-red-200 to-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">
          {t.partners.title}
        </h2>
      </div>

      <div className="relative">
        {/* Flèche gauche */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/60 backdrop-blur-md p-2 rounded-full shadow hover:bg-white transition"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        {/* Flèche droite */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/60 backdrop-blur-md p-2 rounded-full shadow hover:bg-white transition"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Scroll */}
        <div
          ref={scrollRef}
          className="flex rounded-3xl gap-6 p-4 overflow-x-auto [&::-webkit-scrollbar]:[width:2px] px-8"
        >
          {partners.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
