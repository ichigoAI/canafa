"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactInscription() {
  const { t } = useLanguage();

  if (!t?.contact) return null;

  const { form } = t.contact;

  return (
    <section
      id="contact"
      className="relative py-24 text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/40 to-white" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-red-600/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6">
        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold text-red-600 mb-6"
        >
          {t.contact.title}
        </motion.h2>

        {/* Texte */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-200 max-w-2xl mx-auto mb-16"
        >
          {t.contact.introLine1}
          <br />
          {t.contact.introLine2}{" "}
          <span className="text-red-400 font-semibold">
            {t.contact.responseTime}
          </span>.
        </motion.p>

        {/* Formulaire */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/95 backdrop-blur-xl text-black rounded-2xl p-10 shadow-2xl space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">
                {form.name}
              </label>
              <input
                type="text"
                placeholder={form.namePlaceholder}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                {form.organization}
              </label>
              <input
                type="text"
                placeholder={form.organizationPlaceholder}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              {form.email}
            </label>
            <input
              type="email"
              placeholder={form.emailPlaceholder}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              {form.subject}
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition bg-white">
              <option>{form.subjects.partnership}</option>
              <option>{form.subjects.press}</option>
              <option>{form.subjects.contest}</option>
            </select>
          </div>

          {/* Textarea */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              {form.message}
            </label>
            <textarea
              placeholder={form.messagePlaceholder}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition resize-none h-32"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-red-600 text-white font-bold py-4 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-red-500/40"
            >
              {form.submit}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
