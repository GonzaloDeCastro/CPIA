# Mapa Jugar

Sitio educativo para chicos: mapas interactivos con ficha por zona (flora, fauna, comidas, turismo, historia) y trivia hot-seat (1–4 jugadores) con premio descargable.
Next.js 15 (App Router, `output: "export"`, `trailingSlash`), React 19, Tailwind 4, TypeScript. Deploy: GitHub Pages (base path, ver `src/lib/routing/base-path.ts` / `withBasePath`) y Hostinger por FTP/SFTP (`.github/workflows`).

## Mapas (3 en el mismo sitio)
| Mapa | Ruta | Idioma UI | Datos |
|---|---|---|---|
| Argentina (24 prov. + Malvinas) | `/mapa/argentina`, `/mapa/argentina/provincias/[slug]` | es-AR | `src/data/provinces/**` |
| Italia (20 regiones) | `/mapa/italia`, `/mapa/italia/regioni/[slug]` | it | `src/data/italy/*.generated.ts` |
| Sicilia (9 provincias) | `/mapa/sicilia`, `/mapa/sicilia/province/[slug]` | it | `src/data/sicily/*.generated.ts` |

- `/mapa` es el selector de mapas. `src/lib/routing/paths.ts` arma las rutas.
- Italia/Sicilia: el catálogo editable está en `scripts/italy-catalog.mjs` / `scripts/sicily-catalog.mjs`; `npm run generate:italy` / `generate:sicily` regeneran `*.generated.ts` (no editar a mano). SVG → paths con `generate:italy-paths` / `generate:sicily-paths`.
- Argentina: contenido en `src/data/provinces/content/{animals,plants,foods,tourism,curiosities}.defaults.ts` + `*-images.ts`.
- Cada ítem de contenido es `ProvinceContentItem` (`name`, `image`, `description`).

## Trivia
- Motor compartido: `src/lib/trivia/` (`game-state.ts` reducer puro, `types.ts`, `copy.ts` textos es/it, `download-certificate.ts`) y `src/components/trivia/*`.
- `TriviaGame` recibe `questions`, `locale` (`"es"|"it"`) y `backHref`. **No pasar funciones desde páginas server a client** (usar `locale`, no objetos con funciones).
- Preguntas generadas (no editar a mano; se regeneran en `npm run build`):
  - Argentina → `scripts/generate-trivia-questions.mjs` → `trivia-questions.generated.ts` (ruta `/trivia`)
  - Italia y Sicilia → `scripts/generate-trivia-regions.mjs` → `trivia-italy.generated.ts`, `trivia-sicily.generated.ts` (rutas `/trivia/italia`, `/trivia/sicilia`). Excluye como distractores las zonas que también tienen el mismo ítem.
- Los scripts leen los `.ts` con `scripts/lib/load-ts-export.mjs` (solo datos planos, sin imports de runtime).
- Premios: `src/data/trivia/reward-manifest.ts` (23 fichas de fauna argentina, compartidas por todas las trivias).
- Para sumar una trivia nueva: dataset en el script generador → archivo `.generated.ts` → página en `src/app/trivia/<x>/page.tsx` → botón en el mapa (`MapExplorerFrame` `triviaHref`) → sitemap → agregarlo al script `build` de `package.json`.

## Convenciones
- Textos de UI de Argentina en español rioplatense; Italia/Sicilia en italiano.
- Commits en español, una línea imperativa (ver `git log`).
- Verificar con `npx tsc --noEmit`, `npx eslint`, y `npx next build --turbopack` (exporta a `out/`).
- Forks por país: `docs/FORK_WORKFLOW.md` y `.cursor/skills/map-fork-bootstrap`.
