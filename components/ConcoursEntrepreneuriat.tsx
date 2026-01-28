"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ConcoursEntrepreneuriat() {
  const { t } = useLanguage();

  // sécurité anti-crash
  if (!t?.concours) return null;

  return (
    <section className="relative py-28 bg-gray-50 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100" />
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Colonne gauche */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t.concours.title.split(" ")[0]}{" "}
            <span className="text-red-600">
              {t.concours.title.split(" ").slice(1).join(" ")}
            </span>
          </h2>

          <h3 className="text-xl font-semibold text-gray-700 mb-6">
            {t.concours.subtitle}
          </h3>

          <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">
            {t.concours.description}
          </p>

          {/* Date limite */}
          <div className="inline-block border-l-4 border-red-600 bg-white px-6 py-4 rounded-md shadow-sm">
            <p className="text-gray-700 font-medium">
              {t.concours.deadlineLabel} :
              <span className="text-red-600 font-bold ml-2">
                ........
              </span>
            </p>
          </div>
        </motion.div>

        {/* Colonne droite */}
        <div className="flex flex-col gap-8">
          {t.concours.benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="mt-2 h-3 w-3 bg-red-600 rounded-full" />

                <p className="text-gray-700 text-lg leading-relaxed">
                  <span className="font-semibold text-gray-900">
                    {item.verb}
                  </span>{" "}
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
