/**
 * Genera preguntas de trivia (es / en / it) para Argentina desde el contenido por provincia.
 * Las preguntas son las mismas en los tres idiomas (mismos ids y orden de opciones);
 * los nombres salen de src/data/i18n/argentina.<idioma>.json y zone-names.json.
 * Uso: node scripts/generate-trivia-questions.mjs
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";

import { resolveArgentinaZones } from "./lib/argentina-content.mjs";
import { loadTsNamedExport } from "./lib/load-ts-export.mjs";

const ALL_LOCALES = ["es", "en", "it", "fr", "ar"];
// Solo los idiomas con traducción de fichas (si falta, la trivia cae al inglés en vez de mezclar idiomas).
const LOCALES = ALL_LOCALES.filter((l) => l === "es" || existsSync(`src/data/i18n/argentina.${l}.json`));
const SOURCE = "es";

const D = "src/data/provinces/content/";
const [animals, plants, foods, tourism, curiosities] = await Promise.all([
  loadTsNamedExport(`${D}animals.defaults.ts`, "DEFAULT_ANIMALS_BY_PROVINCE"),
  loadTsNamedExport(`${D}plants.defaults.ts`, "DEFAULT_PLANTS_BY_PROVINCE"),
  loadTsNamedExport(`${D}foods.defaults.ts`, "DEFAULT_FOODS_BY_PROVINCE"),
  loadTsNamedExport(`${D}tourism.defaults.ts`, "DEFAULT_TOURISM_BY_PROVINCE"),
  loadTsNamedExport(`${D}curiosities.defaults.ts`, "DEFAULT_CURIOSITIES_BY_PROVINCE"),
]);
const DEFAULTS = { animals, plants, foods, tourism, curiosities };

const PROVINCE_NAMES = {
  "buenos-aires": "Buenos Aires",
  catamarca: "Catamarca",
  chaco: "Chaco",
  chubut: "Chubut",
  cordoba: "Córdoba",
  corrientes: "Corrientes",
  "entre-rios": "Entre Ríos",
  formosa: "Formosa",
  jujuy: "Jujuy",
  "la-pampa": "La Pampa",
  "la-rioja": "La Rioja",
  mendoza: "Mendoza",
  misiones: "Misiones",
  neuquen: "Neuquén",
  "rio-negro": "Río Negro",
  salta: "Salta",
  "san-juan": "San Juan",
  "san-luis": "San Luis",
  "santa-cruz": "Santa Cruz",
  "santa-fe": "Santa Fe",
  "santiago-del-estero": "Santiago del Estero",
  "tierra-del-fuego": "Tierra del Fuego",
  tucuman: "Tucumán",
  "ciudad-autonoma-buenos-aires": "Ciudad Autónoma de Buenos Aires",
  "islas-malvinas": "Islas Malvinas",
};

const ZONE_NAMES = JSON.parse(readFileSync("src/data/i18n/zone-names.json", "utf8"));
const zoneLabel = (locale, slug) => ZONE_NAMES[locale]?.[slug] ?? PROVINCE_NAMES[slug];

const { zones: resolved } = await resolveArgentinaZones();
const trs = Object.fromEntries(
  LOCALES.map((l) => {
    const file = `src/data/i18n/argentina.${l}.json`;
    return [l, l === SOURCE || !existsSync(file) ? { zones: {} } : JSON.parse(readFileSync(file, "utf8"))];
  }),
);

/** Nombre del ítem en el idioma pedido (si no está traducido, queda el original). */
function itemName(locale, slug, cat, name) {
  if (locale === SOURCE) return name;
  const list = resolved[slug]?.[cat] ?? [];
  const idx = list.findIndex((i) => i.name.trim().toLowerCase() === name.trim().toLowerCase());
  const tr = trs[locale];
  return tr.zones[slug]?.[cat]?.[idx]?.name || tr.byName?.[`${cat}|${name}`]?.name || name;
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

const T = {
  faunaProv: {
    es: (n) => `¿En qué provincia vive el ${n}?`,
    en: (n) => `In which province does this animal live: “${n}”?`,
    it: (n) => `In quale provincia vive questo animale: «${n}»?`,
    fr: (n) => `Dans quelle province vit cet animal : « ${n} » ?`,
    ar: (n) => `في أي مقاطعة يعيش هذا الحيوان: «${n}»؟`,
  },
  faunaProvExp: {
    es: (n, z) => `El ${n} es parte de la fauna de ${z}.`,
    en: (n, z) => `“${n}” is part of the wildlife of ${z}.`,
    it: (n, z) => `«${n}» fa parte della fauna di ${z}.`,
    fr: (n, z) => `« ${n} » fait partie de la faune de ${z}.`,
    ar: (n, z) => `«${n}» جزء من حيوانات ${z}.`,
  },
  floraProv: {
    es: (n) => `¿En qué provincia crece el ${n}?`,
    en: (n) => `In which province does this plant grow: “${n}”?`,
    it: (n) => `In quale provincia cresce questa pianta: «${n}»?`,
    fr: (n) => `Dans quelle province pousse cette plante : « ${n} » ?`,
    ar: (n) => `في أي مقاطعة ينمو هذا النبات: «${n}»؟`,
  },
  floraProvExp: {
    es: (n, z) => `El ${n} es flora representativa de ${z}.`,
    en: (n, z) => `“${n}” is a typical plant of ${z}.`,
    it: (n, z) => `«${n}» è una pianta tipica di ${z}.`,
    fr: (n, z) => `« ${n} » est une plante typique de ${z}.`,
    ar: (n, z) => `«${n}» نبات مشهور في ${z}.`,
  },
  faunaWhich: {
    es: (z) => `¿Cuál de estos animales es de ${z}?`,
    en: (z) => `Which of these animals is from ${z}?`,
    it: (z) => `Quale di questi animali è di ${z}?`,
    fr: (z) => `Lequel de ces animaux vit dans la province de ${z} ?`,
    ar: (z) => `أيّ هذه الحيوانات يعيش في ${z}؟`,
  },
  foodProv: {
    es: (n) => `¿En qué provincia es típico el plato "${n}"?`,
    en: (n) => `Which province is the dish “${n}” typical of?`,
    it: (n) => `Di quale provincia è tipico il piatto «${n}»?`,
    fr: (n) => `De quelle province ce plat est-il typique : « ${n} » ?`,
    ar: (n) => `طبق «${n}» مشهور في أي مقاطعة؟`,
  },
  tourismProv: {
    es: (n) => `¿En qué provincia está ${n}?`,
    en: (n) => `In which province is ${n}?`,
    it: (n) => `In quale provincia si trova ${n}?`,
    fr: (n) => `Dans quelle province se trouve « ${n} » ?`,
    ar: (n) => `في أي مقاطعة يقع «${n}»؟`,
  },
  historyProv: {
    es: (s) => `¿A qué provincia corresponde este hecho histórico: "${s}"?`,
    en: (s) => `Which province does this historical fact belong to: “${s}”?`,
    it: (s) => `A quale provincia appartiene questo fatto storico: «${s}»?`,
    fr: (s) => `À quelle province appartient ce fait historique : « ${s} » ?`,
    ar: (s) => `إلى أي مقاطعة تنتمي هذه الحقيقة التاريخية: «${s}»؟`,
  },
};

const short = (text) => (text.length > 60 ? `${text.slice(0, 57)}…` : text);
const slugs = Object.keys(PROVINCE_NAMES);

/** Plan único (orden de opciones y distractores) que luego se "viste" en cada idioma. */
const plan = [];
function addProvQuestion(slug, kind, category, itemKey, cat, withExplanation) {
  const distractors = shuffle(slugs.filter((s) => s !== slug)).slice(0, 3);
  const order = shuffle([slug, ...distractors]);
  plan.push({ id: id([kind, slug, itemKey]), slug, category, kind, cat, item: itemKey, order, withExplanation });
}

for (const slug of slugs) {
  for (const a of DEFAULTS.animals[slug] ?? []) addProvQuestion(slug, "faunaProv", "fauna", a.name, "animals", true);
  for (const p of DEFAULTS.plants[slug] ?? []) addProvQuestion(slug, "floraProv", "flora", p.name, "plants", true);

  const local = (DEFAULTS.animals[slug] ?? []).map((a) => a.name);
  if (local.length >= 4) {
    for (const animal of local) {
      const others = shuffle(local.filter((x) => x !== animal)).slice(0, 3);
      const order = shuffle([animal, ...others]);
      plan.push({ id: id(["fauna-which", slug, animal]), slug, category: "fauna", kind: "faunaWhich", cat: "animals", item: animal, order, which: true });
    }
  }

  for (const f of DEFAULTS.foods[slug] ?? []) addProvQuestion(slug, "foodProv", "food", f.name, "foods");
  for (const s of DEFAULTS.tourism[slug] ?? []) addProvQuestion(slug, "tourismProv", "tourism", s.name, "tourism");
  for (const h of DEFAULTS.curiosities[slug] ?? []) addProvQuestion(slug, "historyProv", "history", h.name, "curiosities");
}

const uniquePlan = [...new Map(plan.map((q) => [q.id, q])).values()];

const out = {};
for (const locale of LOCALES) {
  out[locale] = uniquePlan.map((q) => {
    const zone = zoneLabel(locale, q.slug);
    if (q.which) {
      const choices = q.order.map((n) => itemName(locale, q.slug, "animals", n));
      return {
        id: q.id,
        provinceSlug: q.slug,
        category: q.category,
        prompt: T.faunaWhich[locale](zone),
        choices,
        correctIndex: q.order.indexOf(q.item),
      };
    }
    const name = itemName(locale, q.slug, q.cat, q.item);
    const prompt = q.kind === "historyProv" ? T.historyProv[locale](short(name)) : T[q.kind][locale](name);
    const question = {
      id: q.id,
      provinceSlug: q.slug,
      category: q.category,
      prompt,
      choices: q.order.map((s) => zoneLabel(locale, s)),
      correctIndex: q.order.indexOf(q.slug),
    };
    if (q.withExplanation) question.explanation = T[`${q.kind}Exp`][locale](name, zone);
    return question;
  });
}

const file = `/** Generado por scripts/generate-trivia-questions.mjs — no editar a mano. */
import type { Locale } from "@/lib/i18n/locale";
import type { TriviaQuestion } from "@/lib/trivia/types";

export const TRIVIA_QUESTIONS: Partial<Record<Locale, TriviaQuestion[]>> = ${JSON.stringify(out, null, 2)};
`;
writeFileSync("src/data/trivia/trivia-questions.generated.ts", file, "utf8");
console.log(`OK: ${uniquePlan.length} preguntas x ${LOCALES.length} idiomas → src/data/trivia/trivia-questions.generated.ts`);
