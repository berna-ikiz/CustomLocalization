import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { useTranslation } from "react-i18next";
import { getLanguage, saveLanguage } from "../storage/storage";

type LanguageContextType = {
  languages: string[];
  saveSelectedLanguage: (lang: string) => void;
  language: string;
};

const LanguageContext = createContext<LanguageContextType>({
  languages: [],
  saveSelectedLanguage: () => {},
  language: "en",
});
export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<string>("en");
  const [languages] = useState<string[]>(
    i18n.options.resources ? Object.keys(i18n.options?.resources) : []
  );

  const saveSelectedLanguage = async (language: string) => {
    await saveLanguage(language);
    setLanguage(language);
    i18n.changeLanguage(language);
  };

  const getSeleactedLanguage = async () => {
    const selectedLanguage = await getLanguage();
    if (selectedLanguage && selectedLanguage !== language) {
      setLanguage(language);
    }
  };

  useEffect(() => {
    getSeleactedLanguage();
  },[]);

  return (
    <LanguageContext.Provider
      value={{ language, languages, saveSelectedLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
