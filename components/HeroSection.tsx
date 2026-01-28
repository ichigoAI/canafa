"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const EVENT_DATE = new Date("2026-07-08T09:00:00");

export default function HeroSection() {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = EVENT_DATE.getTime() - now;

      if (distance <= 0) return;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        ),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/bghero.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative w-full px-6 lg:px-24 flex justify-between items-start">
        <div className="max-w-2xl flex gap-6">
          <div className="w-1 bg-white rounded-full" />

          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              {t.hero.title}
            </h1>

            <h2 className="mt-4 text-2xl font-semibold text-red-300">
              {t.hero.subtitle}
            </h2>

            <p className="mt-4 text-gray-200">{t.hero.date}</p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <button className="px-6 py-3 bg-red-600 rounded-md font-semibold hover:bg-red-700 transition">
                {t.hero.partnerBtn}
              </button>
              <button className="px-6 py-3 border border-white rounded-md font-semibold hover:bg-white hover:text-red-700 transition">
                {t.hero.exhibitorBtn}
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <GlassCounter timeLeft={timeLeft} />
        </div>
      </div>

      <div className="lg:hidden absolute bottom-6 left-1/2 -translate-x-1/2">
        <GlassCounter timeLeft={timeLeft} />
      </div>
    </section>
  );
}


/* ------------------------------------------------ */
/* Glasmorphic Counter */
/* ------------------------------------------------ */

function GlassCounter({ timeLeft }: { timeLeft: TimeLeft }) {
  const { t } = useLanguage();

  return (
    <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-xl px-6 py-4 text-white shadow-2xl">
      <p className="text-xs uppercase tracking-wide text-gray-200 text-center">
        {t.hero.counterLabel}
      </p>

      <div className="mt-4 flex gap-5 justify-center">
        <AnimatedUnit value={timeLeft.days} label={t.hero.days} />
        <AnimatedUnit value={timeLeft.hours} label={t.hero.hours} />
        <AnimatedUnit value={timeLeft.minutes} label={t.hero.minutes} />
        <AnimatedUnit value={timeLeft.seconds} label={t.hero.seconds} />
      </div>
    </div>
  );
}


/* ------------------------------------------------ */
/* Animated Counter Unit */
/* ------------------------------------------------ */

function AnimatedUnit({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center min-w-[48px]">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: -15, opacity: 0, scale: 0.8 }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
            textShadow: "0 0 12px rgba(239,68,68,0.9)", // 🔥 glow rouge
          }}
          exit={{ y: 15, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-3xl font-extrabold"
        >
          {value}
        </motion.span>
      </AnimatePresence>

      <span className="text-[10px] uppercase text-gray-200 mt-1">
        {label}
      </span>
    </div>
  );
}
