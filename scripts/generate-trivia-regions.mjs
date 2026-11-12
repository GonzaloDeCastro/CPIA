/**
 * Genera preguntas de trivia en es / en / it para Italia, Sicilia y Campania.
 * Las preguntas son las mismas en los tres idiomas (mismos ids y orden de opciones);
 * los nombres salen de src/data/i18n/*.json y zone-names.json.
 * Uso: node scripts/generate-trivia-regions.mjs
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";

import { loadTsNamedExport } from "./lib/load-ts-export.mjs";

const LOCALES = ["es", "en", "it"];
const SOURCE = "it";

const DATASETS = [
  {
    key: "italy",
    unit: { es: "región", en: "region", it: "regione" },
    regionsFile: "src/data/italy/regions.generated.ts",
    regionsExport: "ITALY_REGIONS",
    contentFile: "src/data/italy/content.generated.ts",
    contentExport: "ITALY_CONTENT",
    out: "src/data/trivia/trivia-italy.generated.ts",
    constName: "TRIVIA_QUESTIONS_ITALY",
  },
  {
    key: "sicily",
    unit: { es: "provincia", en: "province", it: "provincia" },
    regionsFile: "src/data/sicily/provinces.generated.ts",
    regionsExport: "SICILY_PROVINCES",
    contentFile: "src/data/sicily/content.generated.ts",
    contentExport: "SICILY_CONTENT",
    out: "src/data/trivia/trivia-sicily.generated.ts",
    constName: "TRIVIA_QUESTIONS_SICILY",
  },
  {
    key: "campania",
    unit: { es: "provincia", en: "province", it: "provincia" },
    regionsFile: "src/data/campania/provinces.generated.ts",
    regionsExport: "CAMPANIA_PROVINCES",
    contentFile: "src/data/campania/content.generated.ts",
    contentExport: "CAMPANIA_CONTENT",
    out: "src/data/trivia/trivia-campania.generated.ts",
    constName: "TRIVIA_QUESTIONS_CAMPANIA",
  },
];

const ZONE_NAMES = JSON.parse(readFileSync("src/data/i18n/zone-names.json", "utf8"));

function loadTr(key, locale) {
  const file = `src/data/i18n/${key}.${locale}.json`;
  return existsSync(file) ? JSON.parse(readFileSync(file, "utf8")) : { zones: {} };
}

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

/** Plantillas por idioma: [pregunta, explicación]. */
const SPECS = [
  ["animals", "fauna", {
    es: [(n, u) => `¿En qué ${u} vive este animal: «${n}»?`, (n, z) => `«${n}» forma parte de la fauna de ${z}.`],
    en: [(n, u) => `In which ${u} does this animal live: “${n}”?`, (n, z) => `“${n}” is part of the wildlife of ${z}.`],
    it: [(n, u) => `In quale ${u} vive questo animale: «${n}»?`, (n, z) => `«${n}» fa parte della fauna di ${z}.`],
  }],
  ["plants", "flora", {
    es: [(n, u) => `¿En qué ${u} crece esta planta: «${n}»?`, (n, z) => `«${n}» es una planta típica de ${z}.`],
    en: [(n, u) => `In which ${u} does this plant grow: “${n}”?`, (n, z) => `“${n}” is a typical plant of ${z}.`],
    it: [(n, u) => `In quale ${u} cresce questa pianta: «${n}»?`, (n, z) => `«${n}» è una pianta tipica di ${z}.`],
  }],
  ["foods", "food", {
    es: [(n, u) => `¿De qué ${u} es típico este plato: «${n}»?`, (n, z) => `«${n}» es un plato típico de ${z}.`],
    en: [(n, u) => `Which ${u} is this dish typical of: “${n}”?`, (n, z) => `“${n}” is a typical dish of ${z}.`],
    it: [(n, u) => `Di quale ${u} è tipico questo piatto: «${n}»?`, (n, z) => `«${n}» è un piatto tipico di ${z}.`],
  }],
  ["tourism", "tourism", {
    es: [(n, u) => `¿En qué ${u} se encuentra «${n}»?`, (n, z) => `«${n}» se encuentra en ${z}.`],
    en: [(n, u) => `In which ${u} is “${n}”?`, (n, z) => `“${n}” is in ${z}.`],
    it: [(n, u) => `In quale ${u} si trova «${n}»?`, (n, z) => `«${n}» si trova in ${z}.`],
  }],
  ["curiosities", "history", {
    es: [(n, u) => `¿A qué ${u} pertenece este hecho histórico: «${shorten(n)}»?`, (n, z) => `Este hecho tiene que ver con ${z}.`],
    en: [(n, u) => `Which ${u} does this historical fact belong to: “${shorten(n)}”?`, (n, z) => `This fact is about ${z}.`],
    it: [(n, u) => `A quale ${u} appartiene questo fatto storico: «${shorten(n)}»?`, (n, z) => `Questo fatto riguarda ${z}.`],
  }],
];

for (const ds of DATASETS) {
  const regions = await loadTsNamedExport(ds.regionsFile, ds.regionsExport);
  const content = await loadTsNamedExport(ds.contentFile, ds.contentExport);
  const trs = Object.fromEntries(LOCALES.map((l) => [l, l === SOURCE ? { zones: {} } : loadTr(ds.key, l)]));

  const norm = (s) => s.trim().toLowerCase();
  const zoneLabel = (locale, r) => ZONE_NAMES[locale]?.[r.slug] ?? r.name;
  const itemName = (locale, r, kind, index) =>
    trs[locale].zones[r.slug]?.[kind]?.[index]?.name || content[r.slug][kind][index].name;

  // Si un elemento aparece en varias zonas, esas zonas no se usan como distractores.
  function zonesWithItem(kind, name) {
    return regions
      .filter((r) => (content[r.slug]?.[kind] ?? []).some((i) => norm(i.name) === norm(name)))
      .map((r) => r.slug);
  }

  const plan = [];
  for (const r of regions) {
    for (const [kind, category] of SPECS) {
      (content[r.slug]?.[kind] ?? []).forEach((item, index) => {
        const forbidden = new Set(zonesWithItem(kind, item.name));
        const pool = regions.map((x) => x.slug).filter((s) => !forbidden.has(s));
        const distractors = shuffle(pool).slice(0, 3);
        if (distractors.length < 3) return;
        const order = shuffle([r.slug, ...distractors]);
        plan.push({ id: id([ds.key, kind, r.slug, item.name]), r, kind, category, index, order });
      });
    }
  }
  const uniquePlan = [...new Map(plan.map((q) => [q.id, q])).values()];
  const bySlug = Object.fromEntries(regions.map((r) => [r.slug, r]));

  const out = {};
  for (const locale of LOCALES) {
    out[locale] = uniquePlan.map((q) => {
      const spec = SPECS.find(([kind]) => kind === q.kind)[2][locale];
      const name = itemName(locale, q.r, q.kind, q.index);
      const unit = ds.unit[locale];
      return {
        id: q.id,
        provinceSlug: q.r.slug,
        category: q.category,
        prompt: spec[0](name, unit),
        choices: q.order.map((slug) => zoneLabel(locale, bySlug[slug])),
        correctIndex: q.order.indexOf(q.r.slug),
        explanation: spec[1](name, zoneLabel(locale, q.r)),
      };
    });
  }

  const file = `/** Generado por scripts/generate-trivia-regions.mjs — no editar a mano. */
import type { Locale } from "@/lib/i18n/locale";
import type { TriviaQuestion } from "@/lib/trivia/types";

export const ${ds.constName}: Record<Locale, TriviaQuestion[]> = ${JSON.stringify(out, null, 2)};
`;
  writeFileSync(ds.out, file, "utf8");
  console.log(`OK: ${uniquePlan.length} preguntas x ${LOCALES.length} idiomas → ${ds.out}`);
}
