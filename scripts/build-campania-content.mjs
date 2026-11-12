/**
 * Risolve le immagini da it.wikipedia (e, se manca, en.wikipedia o Commons)
 * e scrive src/data/campania/provinces.generated.ts e content.generated.ts.
 * Gli item senza foto vengono omessi.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { CAMPANIA_CATALOG } from "./campania-catalog.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "src/data/campania");
const UA =
  "MapaJugar/1.0 (educational kids map; https://mapajugar.figprojects.com; local content build)";

const BAD_FILE =
  /bandiera|stemma|locator|location_map|coat[_ ]of[_ ]arms|flag_of|blank_map|regioni_d|italy_map|italia_mappa|map_of_|_map\.|mappa_|banner|espansione|trebuchet|del_giudice|\.svg$/i;

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchJson(url, attempt = 0) {
  const res = await fetch(url, {
    headers: { "user-agent": UA, accept: "application/json" },
  });
  if ((res.status === 429 || res.status >= 500) && attempt < 6) {
    const wait = 1200 * (attempt + 1);
    console.log(`retry ${res.status} in ${wait}ms`);
    await sleep(wait);
    return fetchJson(url, attempt + 1);
  }
  if (!res.ok) {
    console.log(`HTTP ${res.status} ${url.slice(0, 80)}`);
    return null;
  }
  return res.json();
}

function thumbFromPage(page) {
  if (!page || page.missing != null) return "";
  const file = page.pageimage ?? "";
  if (!file || BAD_FILE.test(file)) return "";
  const url = page.thumbnail?.source;
  if (!url || !/^https?:\/\//i.test(url)) return "";
  return url;
}

function indexQuery(data) {
  const fromTo = new Map();
  for (const row of data?.query?.normalized ?? []) fromTo.set(row.from, row.to);
  for (const row of data?.query?.redirects ?? []) fromTo.set(row.from, row.to);
  const byTitle = new Map();
  for (const page of Object.values(data?.query?.pages ?? {})) {
    if (page.title) byTitle.set(page.title, page);
  }
  function resolve(title) {
    let current = title;
    const seen = new Set();
    while (fromTo.has(current) && !seen.has(current)) {
      seen.add(current);
      current = fromTo.get(current);
    }
    return current;
  }
  return { resolve, byTitle };
}

async function wikiBatch(host, titles) {
  const found = new Map();
  const chunkSize = 40;
  for (let i = 0; i < titles.length; i += chunkSize) {
    const chunk = titles.slice(i, i + chunkSize);
    const params = new URLSearchParams({
      action: "query",
      titles: chunk.join("|"),
      redirects: "1",
      prop: "pageimages",
      piprop: "thumbnail|name",
      pithumbsize: "640",
      format: "json",
    });
    const data = await fetchJson(`https://${host}/w/api.php?${params}`);
    if (!data) continue;
    const { resolve, byTitle } = indexQuery(data);
    for (const title of chunk) {
      const page = byTitle.get(resolve(title));
      const url = thumbFromPage(page);
      if (url) found.set(title, url);
    }
    await sleep(250);
  }
  return found;
}

async function commonsThumb(query) {
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: `${query} filetype:bitmap`,
    gsrnamespace: "6",
    gsrlimit: "6",
    prop: "imageinfo",
    iiprop: "url|mime",
    iiurlwidth: "640",
    format: "json",
  });
  const data = await fetchJson(
    `https://commons.wikimedia.org/w/api.php?${params}`,
  );
  const pages = Object.values(data?.query?.pages ?? {});
  for (const page of pages) {
    const title = page.title ?? "";
    if (BAD_FILE.test(title)) continue;
    const info = page.imageinfo?.[0];
    if (!info) continue;
    if (info.mime && !/^image\/(jpeg|png|webp)$/i.test(info.mime)) continue;
    const url = info.thumburl || info.url;
    if (url) return url;
  }
  return "";
}

/** La foto di testa di queste voci non rappresenta il soggetto. */
const IMAGE_OVERRIDE = {};

/** Foto elegida a mano de Wikimedia Commons (campo `file` del catálogo). */
function commonsFileUrl(file) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file.replace(/ /g, "_"))}?width=960`;
}

const categories = ["plants", "animals", "foods", "tourism", "history"];

const jobs = [];
for (const region of CAMPANIA_CATALOG) {
  for (const key of categories) {
    for (const item of region[key]) {
      jobs.push({ region, key, item });
    }
  }
}

const uniqueWiki = [...new Set(jobs.map((job) => job.item.wiki))];
console.log(`Titoli unici: ${uniqueWiki.length}`);

const itImages = await wikiBatch("it.wikipedia.org", uniqueWiki);
console.log(`it.wikipedia: ${itImages.size}`);

const missingAfterIt = uniqueWiki.filter((title) => !itImages.has(title));
const enImages = await wikiBatch("en.wikipedia.org", missingAfterIt);
console.log(`en.wikipedia: ${enImages.size}`);

const imageByWiki = new Map([...itImages, ...enImages]);

const stillMissing = uniqueWiki.filter((title) => !imageByWiki.has(title));
console.log(`Commons per ${stillMissing.length} titoli…`);
for (const title of stillMissing) {
  const url = await commonsThumb(title);
  if (url) imageByWiki.set(title, url);
  else console.log(`MISS wiki ${title}`);
  await sleep(180);
}

const resolved = CAMPANIA_CATALOG.map((region) => {
  const content = {};
  for (const key of categories) {
    const items = [];
    for (const item of region[key]) {
      const image = (item.file ? commonsFileUrl(item.file) : IMAGE_OVERRIDE[item.wiki] ?? imageByWiki.get(item.wiki) ?? "");
      const status = image ? "OK" : "MISS";
      console.log(`${status}  ${region.slug} / ${key} / ${item.name}`);
      if (image) {
        items.push({
          name: item.name,
          image,
          description: item.description,
        });
      }
    }
    content[key === "history" ? "curiosities" : key] = items;
  }
  return { region, content };
});

fs.mkdirSync(outDir, { recursive: true });

const regions = resolved.map(({ region, content }) => ({
  slug: region.slug,
  name: region.name,
  shortName: region.shortName,
  description: region.description,
  spotlightOverview: region.spotlight,
  curiosity: region.curiosity,
  flora: region.flora,
  fauna: region.fauna,
  foods: region.foodsText,
  tourism: content.tourism.map((item) => item.name),
}));

const contentBySlug = Object.fromEntries(
  resolved.map(({ region, content }) => [region.slug, content]),
);

const header = `/**
 * Generato da scripts/build-campania-content.mjs — non modificare a mano.
 * Testi in italiano. Immagini: miniature reali di Wikipedia / Wikimedia Commons.
 */
`;

const provincesFile = `${header}
import type { CampaniaProvince } from "@/types/campania";

export const CAMPANIA_PROVINCES: CampaniaProvince[] = ${JSON.stringify(regions, null, 2)};

export const CAMPANIA_PROVINCE_BY_SLUG: Record<string, CampaniaProvince> = Object.fromEntries(
  CAMPANIA_PROVINCES.map((province) => [province.slug, province]),
);
`;

const contentFile = `${header}
import type { CampaniaProvinceContent, CampaniaProvinceSlug } from "@/types/campania";

export const CAMPANIA_CONTENT: Record<CampaniaProvinceSlug, CampaniaProvinceContent> = ${JSON.stringify(contentBySlug, null, 2)};
`;

fs.writeFileSync(path.join(outDir, "provinces.generated.ts"), provincesFile, "utf8");
fs.writeFileSync(path.join(outDir, "content.generated.ts"), contentFile, "utf8");

for (const { region, content } of resolved) {
  const n = Object.values(content).reduce((sum, list) => sum + list.length, 0);
  console.log(`${region.slug}: ${n}`);
}
console.log("Scritti provinces.generated.ts e content.generated.ts");
