/**
 * Vuelca el contenido final de las provincias argentinas (nombres + descripciones) para traducirlo.
 * Uso: node scripts/i18n-export-argentina.mjs [slug,slug…]   → JSON en stdout
 */
import { resolveArgentinaZones } from "./lib/argentina-content.mjs";

const { zones } = await resolveArgentinaZones();
const wanted = process.argv[2] ? new Set(process.argv[2].split(",")) : null;
const out = {};
for (const [slug, z] of Object.entries(zones)) {
  if (!wanted || wanted.has(slug)) out[slug] = z;
}
console.log(JSON.stringify({ zones: out }, null, 1));
