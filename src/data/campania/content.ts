import type { CampaniaProvinceContent, CampaniaProvinceSlug } from "@/types/campania";

import { CAMPANIA_CONTENT } from "./content.generated";

export function getCampaniaProvinceContent(
  slug: CampaniaProvinceSlug,
): CampaniaProvinceContent {
  return CAMPANIA_CONTENT[slug];
}
