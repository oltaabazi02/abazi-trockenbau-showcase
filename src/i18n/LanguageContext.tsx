import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Lang } from "./translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (obj: Record<string, string> | { al: string; de: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("abazi-lang");
    return (saved === "de" || saved === "al") ? saved : "de";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("abazi-lang", l);
  };

  useEffect(() => {
    document.documentElement.lang = lang === "al" ? "sq" : "de";
  }, [lang]);

  const t = (obj: Record<string, string>) => obj[lang] || obj["de"] || "";

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
