import React, { createContext, useState, useContext, ReactNode } from "react";
import { useTranslation } from "react-i18next";

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  languages: string[];
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  languages: [],
});
export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState<string>("en");
  const [languages] = useState<string[]>(
    i18n.options.resources ? Object.keys(i18n.options?.resources) : []
  );
  return (
    <LanguageContext.Provider value={{ language, setLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};
