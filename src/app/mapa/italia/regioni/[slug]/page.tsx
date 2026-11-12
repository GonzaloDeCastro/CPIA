import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { ZoneName } from "@/components/layout/ZoneName";
import { TRANSLATIONS } from "@/data/i18n";
import { localizeZone } from "@/lib/i18n/overlay";
import { UiLink } from "@/components/layout/UiLink";
import { ProvinceSections } from "@/components/province/ProvinceSections";
import { RegionSpotlightMap } from "@/components/region/RegionSpotlightMap";
import { getItalyRegionContent } from "@/data/italy/content";
import {
  getItalyRegionBySlug,
  isItalyRegionSlug,
  listItalyRegions,
} from "@/data/italy/regions";
import { italyRegionPath } from "@/lib/routing/paths";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return listItalyRegions().map((region) => ({ slug: region.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const region = getItalyRegionBySlug(slug);
  if (!region) return { title: "Regione non trovata" };
  const url = italyRegionPath(region.slug);
  return {
    title: region.name,
    description: region.description.slice(0, 155),
    alternates: { canonical: url },
    openGraph: {
      title: `${region.name} — Mapa Jugar`,
      description: region.description.slice(0, 200),
      url,
      locale: "it_IT",
      type: "article",
    },
  };
}

export default async function ItalyRegionPage({ params }: Props) {
  const { slug } = await params;
  if (!isItalyRegionSlug(slug)) notFound();
  const region = getItalyRegionBySlug(slug);
  if (!region) notFound();
  const content = getItalyRegionContent(slug);
  const localized = localizeZone(
    "it",
    region.slug,
    { slug: region.slug, ...content },
    `${region.spotlightOverview}\n${region.curiosity}`,
    TRANSLATIONS.italy,
  );

  return (
    <div className="min-h-dvh text-foreground">
      <SiteHeader />
      <main className="mx-auto min-w-0 max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
        <nav className="mb-8 w-full" aria-label="Percorso">
          <ol className="flex w-full flex-wrap items-center justify-start gap-2 text-left text-sm font-bold sm:text-base">
            <li>
              <UiLink
                href="/mapa/italia"
                className="rounded-full bg-water/15 px-3 py-1.5 text-water underline-offset-4 transition hover:bg-water/25 hover:underline"
                text="map"
              />
            </li>
            <li aria-hidden="true" className="text-foreground-muted">
              /
            </li>
            <li className="font-display text-heading">
              <ZoneName slug={region.slug} fallback={region.name} />
            </li>
          </ol>
        </nav>
        {region.slug === "sicilia" ? (
          <p className="mb-6">
            <UiLink
              href="/mapa/sicilia"
              className="inline-flex min-h-12 items-center rounded-full bg-water px-5 text-sm font-extrabold text-white shadow-[var(--shadow-card)] transition-[filter,transform] hover:brightness-110 active:scale-[0.98]"
              text="exploreProvinces"
            />
          </p>
        ) : null}
        {region.slug === "campania" ? (
          <p className="mb-6">
            <UiLink
              href="/mapa/campania"
              className="inline-flex min-h-12 items-center rounded-full bg-water px-5 text-sm font-extrabold text-white shadow-[var(--shadow-card)] transition-[filter,transform] hover:brightness-110 active:scale-[0.98]"
              text="exploreProvincesCampania"
            />
          </p>
        ) : null}
        <div className="flex min-w-0 flex-col-reverse gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(18rem,40%)] lg:items-start">
          <ProvinceSections contentByLocale={localized.content} />
          <RegionSpotlightMap
            slug={region.slug}
            name={region.name}
            spotlightOverview={localized.spotlight}
          />
        </div>
      </main>
    </div>
  );
}
