import type { Locale } from "@/lib/i18n/locale";

import names from "./zone-names.json";

/**
 * Nombres de regiones/provincias de Italia, Sicilia y Campania según el idioma
 * (Argentina mantiene sus nombres oficiales). Si falta una clave se usa el nombre original.
 */
export const ZONE_NAMES = names as Record<Locale, Record<string, string>>;

export function zoneName(locale: Locale, slug: string, fallback: string): string {
  return ZONE_NAMES[locale]?.[slug] ?? fallback;
}
