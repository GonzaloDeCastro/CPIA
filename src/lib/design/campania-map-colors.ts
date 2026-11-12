import type { CampaniaProvinceSlug } from "@/types/campania";

import type { ProvinceMapFill } from "./province-map-colors";

const f = (base: string, hover: string, pressed: string): ProvinceMapFill => ({
  base,
  hover,
  pressed,
});

/** Colores distintos entre provincias que comparten frontera. */
export const CAMPANIA_PROVINCE_FILLS: Record<CampaniaProvinceSlug, ProvinceMapFill> = {
  caserta: f("#1e88e5", "#42a5f5", "#1565c0"),
  benevento: f("#ffb300", "#ffca28", "#ff8f00"),
  avellino: f("#43a047", "#66bb6a", "#2e7d32"),
  napoli: f("#e53935", "#ef5350", "#c62828"),
  salerno: f("#8e24aa", "#ab47bc", "#6a1b9a"),
};
