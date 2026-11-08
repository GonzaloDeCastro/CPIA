/**
 * Genera preguntas de trivia (en italiano) para Italia y Sicilia.
 * Uso: node scripts/generate-trivia-regions.mjs
 */
import { writeFileSync } from "node:fs";
import { createHash } from "node:crypto";

import { loadTsNamedExport } from "./lib/load-ts-export.mjs";

const DATASETS = [
  {
    key: "italy",
    unit: "regione",
    regionsFile: "src/data/italy/regions.generated.ts",
    regionsExport: "ITALY_REGIONS",
    contentFile: "src/data/italy/content.generated.ts",
    contentExport: "ITALY_CONTENT",
    out: "src/data/trivia/trivia-italy.generated.ts",
    constName: "TRIVIA_QUESTIONS_ITALY",
  },
  {
    key: "sicily",
    unit: "provincia",
    regionsFile: "src/data/sicily/provinces.generated.ts",
    regionsExport: "SICILY_PROVINCES",
    contentFile: "src/data/sicily/content.generated.ts",
    contentExport: "SICILY_CONTENT",
    out: "src/data/trivia/trivia-sicily.generated.ts",
    constName: "TRIVIA_QUESTIONS_SICILY",
  },
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function id(parts) {
  return createHash("md5").update(parts.join("|")).digest("hex").slice(0, 12);
}

function shorten(text, max = 90) {
  const t = text.replace(/\s+/g, " ").trim();
  return t.length > max ? `${t.slice(0, max - 1)}…` : t;
}

for (const ds of DATASETS) {
  const regions = await loadTsNamedExport(ds.regionsFile, ds.regionsExport);
  const content = await loadTsNamedExport(ds.contentFile, ds.contentExport);

  const nameBySlug = Object.fromEntries(regions.map((r) => [r.slug, r.name]));
  const norm = (s) => s.trim().toLowerCase();

  // Para no dar respuestas ambiguas: si un elemento aparece en varias zonas,
  // esas zonas no se usan como distractores.
  function zonesWithItem(kind, itemName) {
    return regions
      .filter((r) => (content[r.slug]?.[kind] ?? []).some((i) => norm(i.name) === norm(itemName)))
      .map((r) => r.name);
  }

  function build(slug, kind, itemName) {
    const correct = nameBySlug[slug];
    const forbidden = new Set(zonesWithItem(kind, itemName));
    const pool = regions.map((r) => r.name).filter((n) => !forbidden.has(n));
    const distractors = shuffle(pool).slice(0, 3);
    if (distractors.length < 3) return null;
    const choices = shuffle([correct, ...distractors]);
    return { choices, correctIndex: choices.indexOf(correct) };
  }

  const specs = [
    ["animals", "fauna", (n) => `In quale ${ds.unit} vive questo animale: «${n}»?`, (n, z) => `«${n}» fa parte della fauna di ${z}.`],
    ["plants", "flora", (n) => `In quale ${ds.unit} cresce questa pianta: «${n}»?`, (n, z) => `«${n}» è una pianta tipica di ${z}.`],
    ["foods", "food", (n) => `Di quale ${ds.unit} è tipico questo piatto: «${n}»?`, (n, z) => `«${n}» è un piatto tipico di ${z}.`],
    ["tourism", "tourism", (n) => `In quale ${ds.unit} si trova «${n}»?`, (n, z) => `«${n}» si trova in ${z}.`],
    ["curiosities", "history", (n) => `A quale ${ds.unit} appartiene questo fatto storico: «${shorten(n)}»?`, (n, z) => `Questo fatto riguarda ${z}.`],
  ];

  const questions = [];
  for (const r of regions) {
    for (const [kind, category, prompt, explain] of specs) {
      for (const item of content[r.slug]?.[kind] ?? []) {
        const built = build(r.slug, kind, item.name);
        if (!built) continue;
        questions.push({
          id: id([ds.key, kind, r.slug, item.name]),
          provinceSlug: r.slug,
          category,
          prompt: prompt(item.name),
          choices: built.choices,
          correctIndex: built.correctIndex,
          explanation: explain(item.name, r.name),
        });
      }
    }
  }

  const unique = [...new Map(questions.map((q) => [q.id, q])).values()];
  const out = `/** Generato da scripts/generate-trivia-regions.mjs — non modificare a mano. */
import type { TriviaQuestion } from "@/lib/trivia/types";

export const ${ds.constName}: TriviaQuestion[] = ${JSON.stringify(unique, null, 2)};
`;
  writeFileSync(ds.out, out, "utf8");
  console.log(`OK: ${unique.length} domande → ${ds.out}`);
}
