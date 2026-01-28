"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function PourquoiPartenaire() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-white py-28 overflow-hidden">
      {/* Accent background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100" />
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Colonne gauche */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Ligne rouge */}
          <span className="absolute -left-6 top-2 h-32 w-1 bg-red-600 rounded-full" />

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t.partnerBenefits.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-red-600">
              {t.partnerBenefits.title.split(" ").slice(-1)}
            </span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
            {t.partnerBenefits.intro}
          </p>
        </motion.div>

        {/* Colonne droite */}
        <div className="flex flex-col gap-8">
          {t.partnerBenefits.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Accent */}
                <span className="mt-1 h-3 w-3 bg-red-600 rounded-full group-hover:scale-125 transition-transform" />

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
