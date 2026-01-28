"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Programme() {
  const { t } = useLanguage();

  return (
    <section
      className="w-full bg-white py-20 overflow-x-hidden"
      id="program"
    >
      <h1 className="text-center text-4xl font-bold text-red-600 mb-16">
        {t.program.title}
      </h1>

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="absolute left-1/2 top-0 h-full w-1 bg-red-500 -translate-x-1/2" />

        <div className="flex flex-col gap-16">
          {t.program.days.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex ${
                item.side === "left" ? "justify-start" : "justify-end"
              }`}
            >
              <span className="absolute left-1/2 top-8 h-5 w-5 bg-white border-4 border-red-500 rounded-full -translate-x-1/2 z-10" />

              <div className="w-[45%] bg-red-50 border border-red-200 rounded-xl p-6 shadow-lg hover:shadow-red-200 transition-shadow duration-300">
                <h3 className="text-red-600 font-semibold text-sm mb-1">
                  {item.day}
                </h3>
                <h2 className="text-xl font-bold text-red-700 mb-2">
                  {item.date}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
