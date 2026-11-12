import type { ProvinceContentItem } from "@/types/province";

import type { Locale } from "./locale";

export type ExploreContent = {
  slug: string;
  animals: ProvinceContentItem[];
  plants: ProvinceContentItem[];
  foods: ProvinceContentItem[];
  curiosities: ProvinceContentItem[];
  tourism: ProvinceContentItem[];
};

export type ItemTr = { name: string; description: string };

/** Traducción de una zona: mismos órdenes y cantidades que el contenido original. */
export type ZoneTr = {
  /** Texto de la ficha lateral (párrafos separados por salto de línea). */
  spotlight?: string;
  plants?: ItemTr[];
  animals?: ItemTr[];
  foods?: ItemTr[];
  tourism?: ItemTr[];
  curiosities?: ItemTr[];
};

export type DatasetTr = { zones: Record<string, ZoneTr> };

export type LocalizedZone = {
  content: Record<Locale, ExploreContent>;
  spotlight: Record<Locale, string>;
};

const CATEGORIES = ["plants", "animals", "foods", "tourism", "curiosities"] as const;

function overlayItems(
  items: ProvinceContentItem[],
  tr: ItemTr[] | undefined,
): ProvinceContentItem[] {
  if (!tr) return items;
  return items.map((item, i) => {
    const t = tr[i];
    return t ? { ...item, name: t.name || item.name, description: t.description || item.description } : item;
  });
}

/**
 * Arma el contenido de una zona en los tres idiomas.
 * `sourceLocale` es el idioma en que está escrito el contenido original.
 * Lo que no tenga traducción queda en el idioma original.
 */
export function localizeZone(
  sourceLocale: Locale,
  slug: string,
  content: ExploreContent,
  spotlight: string,
  translations: Partial<Record<Locale, DatasetTr>>,
): LocalizedZone {
  const locales: Locale[] = ["es", "en", "it"];
  const outContent = {} as Record<Locale, ExploreContent>;
  const outSpot = {} as Record<Locale, string>;
  for (const locale of locales) {
    const tr = locale === sourceLocale ? undefined : translations[locale]?.zones[slug];
    const c: ExploreContent = { ...content };
    for (const cat of CATEGORIES) c[cat] = overlayItems(content[cat], tr?.[cat]);
    outContent[locale] = c;
    outSpot[locale] = tr?.spotlight || spotlight;
  }
  return { content: outContent, spotlight: outSpot };
}
