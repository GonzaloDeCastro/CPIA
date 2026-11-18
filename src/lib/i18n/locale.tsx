"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { UI, type UiCopy } from "./ui";

export type Locale = "es" | "en" | "it" | "fr" | "ar" | "ro";

export const LOCALES: { id: Locale; label: string; flag: string; name: string }[] = [
  { id: "es", label: "ES", flag: "🇦🇷", name: "Español" },
  { id: "en", label: "EN", flag: "🇬🇧", name: "English" },
  { id: "it", label: "IT", flag: "🇮🇹", name: "Italiano" },
  { id: "fr", label: "FR", flag: "🇫🇷", name: "Français" },
  { id: "ar", label: "AR", flag: "🇸🇦", name: "العربية" },
  { id: "ro", label: "RO", flag: "🇷🇴", name: "Română" },
];

const STORAGE_KEY = "mapajugar-locale";
const HTML_LANG: Record<Locale, string> = { es: "es-AR", en: "en", it: "it", fr: "fr", ar: "ar", ro: "ro" };

type Ctx = { locale: Locale; setLocale: (l: Locale) => void };

const LocaleContext = createContext<Ctx>({ locale: "es", setLocale: () => {} });

function isLocale(v: unknown): v is Locale {
  return v === "es" || v === "en" || v === "it" || v === "fr" || v === "ar" || v === "ro";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (isLocale(saved)) setLocaleState(saved);
    } catch {
      /* sin storage: queda en español */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[locale];
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignorar */
    }
  }, []);

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Ctx {
  return useContext(LocaleContext);
}

/** Textos de la interfaz en el idioma elegido. */
export function useUi(): UiCopy {
  return UI[useLocale().locale];
}
