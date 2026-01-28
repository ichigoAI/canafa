"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const icons = [
  (
    <svg
      className="w-10 h-10 text-red-600"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a4 4 0 00-4-4h-1m-4 6H1v-2a4 4 0 014-4h1m4-4a4 4 0 110-8 4 4 0 010 8zm6 4a4 4 0 100-8 4 4 0 000 8z"
      />
    </svg>
  ),
  (
    <svg
      className="w-10 h-10 text-red-600"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-10V4m0 14v2m9-8a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  (
    <svg
      className="w-10 h-10 text-red-600"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.663 17h4.673M12 3a7 7 0 00-4 12.906V17a1 1 0 001 1h6a1 1 0 001-1v-1.094A7 7 0 0012 3z"
      />
    </svg>
  ),
];

export default function PourquoiCANAFA() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold text-red-600 mb-16">
          {t.why.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {t.why.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center shadow-lg hover:shadow-red-200 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-white p-4 rounded-full shadow-md">
                  {icons[index]}
                </div>
              </div>

              <h3 className="text-xl font-bold text-red-700 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
