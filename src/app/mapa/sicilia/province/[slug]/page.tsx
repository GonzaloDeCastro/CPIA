import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { ZoneName } from "@/components/layout/ZoneName";
import { TRANSLATIONS } from "@/data/i18n";
import { localizeZone } from "@/lib/i18n/overlay";
import { UiLink } from "@/components/layout/UiLink";
import { ProvinceSections } from "@/components/province/ProvinceSections";
import { SicilyProvinceSpotlightMap } from "@/components/sicily/SicilyProvinceSpotlightMap";
import { getSicilyProvinceContent } from "@/data/sicily/content";
import {
  getSicilyProvinceBySlug,
  isSicilyProvinceSlug,
  listSicilyProvinces,
} from "@/data/sicily/provinces";
import { sicilyProvincePath } from "@/lib/routing/paths";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return listSicilyProvinces().map((province) => ({ slug: province.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const province = getSicilyProvinceBySlug(slug);
  if (!province) return { title: "Provincia non trovata" };
  const url = sicilyProvincePath(province.slug);
  return {
    title: province.name,
    description: province.description.slice(0, 155),
    alternates: { canonical: url },
    openGraph: {
      title: `${province.name} — Mapa Jugar`,
      description: province.description.slice(0, 200),
      url,
      locale: "it_IT",
      type: "article",
    },
  };
}

export default async function SicilyProvincePage({ params }: Props) {
  const { slug } = await params;
  if (!isSicilyProvinceSlug(slug)) notFound();
  const province = getSicilyProvinceBySlug(slug);
  if (!province) notFound();
  const content = getSicilyProvinceContent(slug);
  const localized = localizeZone(
    "it",
    province.slug,
    { slug: province.slug, ...content },
    `${province.spotlightOverview}\n${province.curiosity}`,
    TRANSLATIONS.sicily,
  );

  return (
    <div className="min-h-dvh text-foreground">
      <SiteHeader />
      <main className="mx-auto min-w-0 max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
        <nav className="mb-8 w-full" aria-label="Percorso">
          <ol className="flex w-full flex-wrap items-center justify-start gap-2 text-left text-sm font-bold sm:text-base">
            <li>
              <UiLink
                href="/mapa/sicilia"
                className="rounded-full bg-water/15 px-3 py-1.5 text-water underline-offset-4 transition hover:bg-water/25 hover:underline"
                text="map"
              />
            </li>
            <li aria-hidden="true" className="text-foreground-muted">
              /
            </li>
            <li className="font-display text-heading">
              <ZoneName slug={province.slug} fallback={province.name} />
            </li>
          </ol>
        </nav>
        <div className="flex min-w-0 flex-col-reverse gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(18rem,40%)] lg:items-start">
          <ProvinceSections contentByLocale={localized.content} />
          <SicilyProvinceSpotlightMap
            slug={province.slug}
            name={province.name}
            spotlightOverview={localized.spotlight}
          />
        </div>
      </main>
    </div>
  );
}
