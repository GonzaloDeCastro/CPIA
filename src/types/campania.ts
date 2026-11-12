import type { ProvinceContentItem } from "@/types/province";

export type CampaniaProvinceSlug =
  | "avellino"
  | "benevento"
  | "caserta"
  | "napoli"
  | "salerno";

export type CampaniaProvince = {
  slug: CampaniaProvinceSlug;
  name: string;
  shortName: string;
  description: string;
  spotlightOverview: string;
  curiosity: string;
  flora: string;
  fauna: string;
  foods: string;
  tourism: string[];
};

export type CampaniaProvinceContent = {
  plants: ProvinceContentItem[];
  animals: ProvinceContentItem[];
  foods: ProvinceContentItem[];
  tourism: ProvinceContentItem[];
  curiosities: ProvinceContentItem[];
};
