/**
 * Verifica que cada traducción en src/data/i18n tenga la misma forma que el original
 * (mismas zonas, misma cantidad de ítems por categoría, sin textos vacíos).
 * Uso: node scripts/i18n-check.mjs
 */
import { existsSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

const CHECKS = [
  ["argentina", ["en", "it"]],
  ["campania", ["es", "en"]],
  ["sicily", ["es", "en"]],
  ["italy", ["es", "en"]],
];
const CATS = ["plants", "animals", "foods", "tourism", "curiosities"];
let errors = 0;
const fail = (msg) => {
  errors++;
  console.error("✗", msg);
};

for (const [key, locales] of CHECKS) {
  const src = JSON.parse(
    execFileSync("node", [key === "argentina" ? "scripts/i18n-export-argentina.mjs" : "scripts/i18n-export.mjs", ...(key === "argentina" ? [] : [key])], { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }),
  );
  for (const locale of locales) {
    const file = `src/data/i18n/${key}.${locale}.json`;
    if (!existsSync(file)) continue;
    const tr = JSON.parse(readFileSync(file, "utf8"));
    const done = Object.keys(tr.zones);
    for (const slug of done) {
      const s = src.zones[slug];
      const t = tr.zones[slug];
      if (!s) {
        fail(`${file}: zona desconocida ${slug}`);
        continue;
      }
      if (!t.spotlight?.trim()) fail(`${file} ${slug}: falta spotlight`);
      else if (t.spotlight.split("\n").length !== s.spotlight.split("\n").length)
        fail(`${file} ${slug}: distinta cantidad de párrafos en spotlight`);
      for (const cat of CATS) {
        if (key === "argentina" && cat === "animals" && !t[cat]) {
          for (const it of s[cat]) if (!tr.byName?.[`${cat}|${it.name}`]) fail(`${file} ${slug}.animals: falta byName de "${it.name}"`);
          continue;
        }
        const covered = s[cat].every((it) => tr.byName?.[`${cat}|${it.name}`]);
        if (!t[cat] && covered) continue;
        if ((t[cat]?.length ?? 0) !== s[cat].length) {
          fail(`${file} ${slug}.${cat}: ${t[cat]?.length ?? 0} ítems, el original tiene ${s[cat].length}`);
          continue;
        }
        t[cat].forEach((it, i) => {
          if (!it.name?.trim() || !it.description?.trim()) fail(`${file} ${slug}.${cat}[${i}]: vacío`);
        });
      }
    }
    const missing = Object.keys(src.zones).filter((z) => !done.includes(z));
    console.log(`${file}: ${done.length}/${Object.keys(src.zones).length} zonas${missing.length ? ` (faltan: ${missing.join(", ")})` : ""}`);
  }
}
if (errors) {
  console.error(`${errors} errores`);
  process.exit(1);
}
