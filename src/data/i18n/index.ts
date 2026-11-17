import type { DatasetTr } from "@/lib/i18n/overlay";
import type { Locale } from "@/lib/i18n/locale";

import argentinaAr from "./argentina.ar.json";
import argentinaEn from "./argentina.en.json";
import argentinaIt from "./argentina.it.json";
import campaniaAr from "./campania.ar.json";
import campaniaEn from "./campania.en.json";
import campaniaEs from "./campania.es.json";
import italyAr from "./italy.ar.json";
import italyEn from "./italy.en.json";
import italyEs from "./italy.es.json";
import sicilyEn from "./sicily.en.json";
import sicilyAr from "./sicily.ar.json";
import sicilyEs from "./sicily.es.json";

/** Traducciones de fichas por conjunto de datos; el idioma original no se traduce. */
export const TRANSLATIONS = {
  argentina: { en: argentinaEn, it: argentinaIt, ar: argentinaAr },
  campania: { es: campaniaEs, en: campaniaEn, ar: campaniaAr },
  sicily: { es: sicilyEs, en: sicilyEn, ar: sicilyAr },
  italy: { es: italyEs, en: italyEn, ar: italyAr },
} as const satisfies Record<string, Partial<Record<Locale, DatasetTr>>>;

export type DatasetKey = keyof typeof TRANSLATIONS;
