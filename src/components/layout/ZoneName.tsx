"use client";

import { zoneName } from "@/data/i18n/zone-names";
import { useLocale } from "@/lib/i18n/locale";

/** Nombre de una región/provincia en el idioma elegido. */
export function ZoneName({ slug, fallback }: { slug: string; fallback: string }) {
  const { locale } = useLocale();
  return <>{zoneName(locale, slug, fallback)}</>;
}
