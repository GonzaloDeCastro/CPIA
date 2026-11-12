/**
 * Lee public/inputs/assets/world.svg (MapSVG) y genera
 * src/data/map/world-paths.generated.ts
 * (paths absolutos con 1 decimal, más centro de Argentina e Italia).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const svgPath = path.join(root, "public/inputs/assets/world.svg");
const outPath = path.join(root, "src/data/map/world-paths.generated.ts");

const svg = fs.readFileSync(svgPath, "utf8");
const width = svg.match(/width="([\d.]+)"/)[1];
const height = svg.match(/height="([\d.]+)"/)[1];

const r = (n) => Math.round(n * 10) / 10;

/** Convierte un path con solo `m` relativos y `z` a absoluto + bbox. */
function convert(d) {
  const tokens = d.match(/[mz]|-?[\d.]+(?:e-?\d+)?/gi) ?? [];
  let out = "";
  let cx = 0;
  let cy = 0;
  let sx = 0;
  let sy = 0;
  let i = 0;
  let first = true;
  let lastX = NaN, lastY = NaN;
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  const track = () => {
    minX = Math.min(minX, cx); maxX = Math.max(maxX, cx);
    minY = Math.min(minY, cy); maxY = Math.max(maxY, cy);
  };
  while (i < tokens.length) {
    const t = tokens[i];
    if (t === "m" || t === "M") {
      i++;
      let firstPair = true;
      while (i < tokens.length && tokens[i] !== "z" && tokens[i] !== "m") {
        const dx = parseFloat(tokens[i++]);
        const dy = parseFloat(tokens[i++]);
        if (firstPair && first && t === "m") {
          cx = dx; cy = dy;
        } else {
          cx += dx; cy += dy;
        }
        if (firstPair) {
          sx = cx; sy = cy;
          out += `M${r(cx)} ${r(cy)}`;
        } else if (r(cx) !== lastX || r(cy) !== lastY) {
          out += `L${r(cx)} ${r(cy)}`;
        }
        lastX = r(cx); lastY = r(cy);
        track();
        firstPair = false;
        first = false;
      }
    } else if (t === "z" || t === "Z") {
      out += "Z";
      cx = sx; cy = sy;
      i++;
    } else {
      i++;
    }
  }
  return { d: out, bbox: [minX, minY, maxX, maxY] };
}

const countries = [];
const re = /<path\s+d="([^"]+)"\s+title="([^"]*)"\s+id="([^"]+)"/g;
let m;
while ((m = re.exec(svg))) {
  const { d, bbox } = convert(m[1].replace(/\s+/g, " "));
  countries.push({ id: m[3], name: m[2], d, bbox });
}

const center = (id) => {
  const c = countries.find((x) => x.id === id);
  if (!c) throw new Error(`Falta ${id}`);
  const [a, b, c2, d2] = c.bbox;
  return [r((a + c2) / 2), r((b + d2) / 2)];
};

const body = countries
  .map((c) => `  { id: ${JSON.stringify(c.id)}, name: ${JSON.stringify(c.name)}, d: ${JSON.stringify(c.d)} },`)
  .join("\n");

fs.writeFileSync(
  outPath,
  `// Generado por scripts/extract-world-map.mjs — no editar a mano.
export const WORLD_MAP_VIEW_BOX = "0 0 ${width} ${height}";

export const WORLD_MAP_CENTERS = {
  AR: ${JSON.stringify(center("AR"))},
  IT: ${JSON.stringify(center("IT"))},
} as const;

export const WORLD_COUNTRIES: ReadonlyArray<{ id: string; name: string; d: string }> = [
${body}
];
`,
);
console.log(`world-paths.generated.ts: ${countries.length} países`);
