/**
 * Contenido final de cada provincia argentina, resuelto igual que
 * src/data/provinces/content/index.ts (JSON propio + defaults + descripciones canónicas).
 * Lo usan los scripts de traducción y de trivia.
 */
import { readFileSync } from "node:fs";

import { loadTsNamedExport } from "./load-ts-export.mjs";

const D = "src/data/provinces/content/";
const CATEGORIES = ["plants", "animals", "foods", "tourism", "curiosities"];

function loadJson(slug) {
  try {
    return JSON.parse(readFileSync(`${D}${slug}.json`, "utf8"));
  } catch {
    return null;
  }
}

function merge(defaults, custom) {
  const seen = new Set();
  const out = [];
  for (const item of [...custom, ...defaults]) {
    const key = item.name.trim().toLowerCase();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }
  return out;
}

/** @returns {Promise<{ slugs: string[], zones: Record<string, Record<string, {name: string, description: string}[]> & {spotlight: string}> }>} */
export async function resolveArgentinaZones() {
  const defs = {
    animals: await loadTsNamedExport(`${D}animals.defaults.ts`, "DEFAULT_ANIMALS_BY_PROVINCE"),
    plants: await loadTsNamedExport(`${D}plants.defaults.ts`, "DEFAULT_PLANTS_BY_PROVINCE"),
    foods: await loadTsNamedExport(`${D}foods.defaults.ts`, "DEFAULT_FOODS_BY_PROVINCE"),
    tourism: await loadTsNamedExport(`${D}tourism.defaults.ts`, "DEFAULT_TOURISM_BY_PROVINCE"),
    curiosities: await loadTsNamedExport(`${D}curiosities.defaults.ts`, "DEFAULT_CURIOSITIES_BY_PROVINCE"),
  };
  const spotlight = await loadTsNamedExport("src/data/provinces/province-spotlight.ts", "PROVINCE_SPOTLIGHT");

  // Descripciones canónicas de fauna (const CANONICAL no está exportada: se evalúa su texto).
  const canonSrc = readFileSync(`${D}animal-descriptions.ts`, "utf8");
  const start = canonSrc.indexOf("const CANONICAL");
  const body = canonSrc.slice(canonSrc.indexOf("{", start), canonSrc.indexOf("\n};", start) + 2);
  const CANONICAL = new Function(`return (${body});`)();
  const canonical = (name) => CANONICAL[name.trim().toLowerCase()];

  const slugs = Object.keys(spotlight);
  const zones = {};
  for (const slug of slugs) {
    const raw = loadJson(slug);
    const custom = (k) =>
      raw && Array.isArray(raw[k]) ? raw[k].filter((i) => i && typeof i.name === "string" && i.name) : [];
    const pick = (list) => list.map((i) => ({ name: i.name, description: i.description || "" }));
    const animals = merge(defs.animals[slug] ?? [], custom("animals")).map((i) => {
      const c = canonical(i.name);
      return c ? { ...i, description: c } : i;
    });
    zones[slug] = {
      spotlight: spotlight[slug],
      plants: pick(merge(defs.plants[slug] ?? [], custom("plants"))),
      animals: pick(animals),
      foods: pick(merge(defs.foods[slug] ?? [], custom("foods"))),
      tourism: pick(merge(defs.tourism[slug] ?? [], custom("tourism"))),
      curiosities: pick(merge(defs.curiosities[slug] ?? [], custom("curiosities"))),
    };
  }
  return { slugs, zones, categories: CATEGORIES };
}
