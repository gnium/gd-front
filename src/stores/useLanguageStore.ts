import { create } from "zustand";
import { persist } from "zustand/middleware";
import i18n from "../i18n";

interface LanguageState {
  language: string;
  setLanguage: (lang: string) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: i18n.language || "en", // Usa el idioma actual o inglés por defecto
      setLanguage: (lang) => {
        i18n.changeLanguage(lang); // Cambia el idioma en i18next
        set({ language: lang }); // Guarda en el estado global
      },
    }),
    {
      name: "language-store", // Persistencia en localStorage
    }
  )
);
