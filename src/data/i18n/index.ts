import type { DatasetTr } from "@/lib/i18n/overlay";
import type { Locale } from "@/lib/i18n/locale";

import argentinaEn from "./argentina.en.json";
import argentinaIt from "./argentina.it.json";
import campaniaEn from "./campania.en.json";
import campaniaEs from "./campania.es.json";
import italyEn from "./italy.en.json";
import italyEs from "./italy.es.json";
import sicilyEn from "./sicily.en.json";
import sicilyEs from "./sicily.es.json";

/** Traducciones de fichas por conjunto de datos; el idioma original no se traduce. */
export const TRANSLATIONS = {
  argentina: { en: argentinaEn, it: argentinaIt },
  campania: { es: campaniaEs, en: campaniaEn },
  sicily: { es: sicilyEs, en: sicilyEn },
  italy: { es: italyEs, en: italyEn },
} as const satisfies Record<string, Partial<Record<Locale, DatasetTr>>>;

export type DatasetKey = keyof typeof TRANSLATIONS;
