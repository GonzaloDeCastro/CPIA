import type { CampaniaProvince, CampaniaProvinceSlug } from "@/types/campania";

import {
  CAMPANIA_PROVINCE_BY_SLUG,
  CAMPANIA_PROVINCES,
} from "./provinces.generated";

const SLUGS = new Set<string>(CAMPANIA_PROVINCES.map((province) => province.slug));

export function isCampaniaProvinceSlug(slug: string): slug is CampaniaProvinceSlug {
  return SLUGS.has(slug);
}

export function listCampaniaProvinces(): CampaniaProvince[] {
  return CAMPANIA_PROVINCES;
}

export function getCampaniaProvinceBySlug(slug: string): CampaniaProvince | undefined {
  return CAMPANIA_PROVINCE_BY_SLUG[slug];
}
