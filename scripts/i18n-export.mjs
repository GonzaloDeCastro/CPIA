/**
 * Vuelca los textos originales de un conjunto de datos (sin imágenes) para traducirlos.
 * Uso: node scripts/i18n-export.mjs <campania|sicily|italy> [slug,slug…]
 * Salida: JSON con la misma forma que src/data/i18n/<dataset>.<idioma>.json
 */
import { loadTsNamedExport } from "./lib/load-ts-export.mjs";

const SETS = {
  campania: ["CAMPANIA_PROVINCES", "src/data/campania/provinces.generated.ts", "CAMPANIA_CONTENT", "src/data/campania/content.generated.ts"],
  sicily: ["SICILY_PROVINCES", "src/data/sicily/provinces.generated.ts", "SICILY_CONTENT", "src/data/sicily/content.generated.ts"],
  italy: ["ITALY_REGIONS", "src/data/italy/regions.generated.ts", "ITALY_CONTENT", "src/data/italy/content.generated.ts"],
};

const [key, only] = process.argv.slice(2);
const [rExp, rFile, cExp, cFile] = SETS[key] ?? [];
if (!rExp) {
  console.error("Dataset desconocido:", key);
  process.exit(1);
}
const regions = await loadTsNamedExport(rFile, rExp);
const content = await loadTsNamedExport(cFile, cExp);
const wanted = only ? new Set(only.split(",")) : null;

const zones = {};
for (const r of regions) {
  if (wanted && !wanted.has(r.slug)) continue;
  const c = content[r.slug];
  const pick = (list) => list.map((i) => ({ name: i.name, description: i.description }));
  zones[r.slug] = {
    spotlight: `${r.spotlightOverview}\n${r.curiosity}`,
    plants: pick(c.plants),
    animals: pick(c.animals),
    foods: pick(c.foods),
    tourism: pick(c.tourism),
    curiosities: pick(c.curiosities),
  };
}
console.log(JSON.stringify({ zones }, null, 1));
