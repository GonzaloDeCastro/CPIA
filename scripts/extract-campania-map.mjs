/**
 * Lee public/inputs/assets/campania.svg (Vonvikken, dominio público,
 * Wikimedia Commons: Map of region of Campania, Italy.svg)
 * y genera src/data/map/campania-paths.generated.ts
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const svgPath = path.join(root, "public/inputs/assets/campania.svg");
const outPath = path.join(root, "src/data/map/campania-paths.generated.ts");

/** Capas del SVG → slugs (identificadas coloreando cada capa). */
const LAYER_TO_SLUG = {
  layer3: "caserta",
  layer5: "benevento",
  layer6: "avellino",
  layer2: "napoli",
  layer7: "salerno",
};

const svg = fs.readFileSync(svgPath, "utf8");
const width = svg.match(/\bwidth="([^"]+)"/)?.[1];
const height = svg.match(/\bheight="([^"]+)"/)?.[1];
if (!width || !height) {
  console.error("El SVG no tiene width/height");
  process.exit(1);
}
const viewBox = `0 0 ${width} ${height}`;

function bakeTranslate(d, tx, ty) {
  return d.replace(
    /^m\s+([-+0-9.eE]+)\s*,?\s*([-+0-9.eE]+)/,
    (_, x, y) => `m ${parseFloat(x) + tx},${parseFloat(y) + ty}`,
  );
}

const groupRe =
  /<g\s+transform="translate\(([^,]+),([^)]+)\)"\s+id="(layer\d+)"[\s\S]*?<\/g>/g;
const bySlug = new Map();
let g;
while ((g = groupRe.exec(svg)) !== null) {
  const slug = LAYER_TO_SLUG[g[3]];
  if (!slug) continue;
  // La capa de Nápoles trae además un trazo mínimo sin relleno: se toma el path más largo.
  const paths = [...g[0].matchAll(/<path\s+d="([^"]+)"/g)].map((m) => m[1]);
  const d = paths.sort((a, b) => b.length - a.length)[0];
  bySlug.set(slug, bakeTranslate(d, parseFloat(g[1]), parseFloat(g[2])));
}

const required = Object.values(LAYER_TO_SLUG);
const missing = required.filter((slug) => !bySlug.has(slug));
if (missing.length) {
  console.error("Faltan paths para:", missing.join(", "));
  process.exit(1);
}

const lines = [
  "/**",
  " * Generado por scripts/extract-campania-map.mjs — no editar a mano.",
  " * Fuente: public/inputs/assets/campania.svg",
  " * Vonvikken, dominio público, Wikimedia Commons (Map of region of Campania, Italy.svg).",
  " */",
  "",
  'import type { CampaniaProvinceSlug } from "@/types/campania";',
  "",
  `export const CAMPANIA_MAP_VIEW_BOX = ${JSON.stringify(viewBox)} as const;`,
  "",
  "export const CAMPANIA_PROVINCE_SVG_PATHS: Record<CampaniaProvinceSlug, string> = {",
];
for (const slug of [...required].sort()) {
  lines.push(`  ${JSON.stringify(slug)}: ${JSON.stringify(bySlug.get(slug))},`);
}
lines.push("};", "");
fs.writeFileSync(outPath, lines.join("\n"), "utf8");
console.log(`OK: ${outPath} (${bySlug.size} province, viewBox ${viewBox})`);
