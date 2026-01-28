"use client";

import { createContext, useContext, useState } from "react";
import { texts } from "@/lib/text";

type Language = "FR" | "EN";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: typeof texts.FR;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("FR");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "FR" ? "EN" : "FR"));
  };

  const value = {
    language,
    toggleLanguage,
    t: texts[language], // ✅ LE POINT CLÉ
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
