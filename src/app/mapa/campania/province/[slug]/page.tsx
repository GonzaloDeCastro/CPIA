import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { UiLink } from "@/components/layout/UiLink";
import { ProvinceSections } from "@/components/province/ProvinceSections";
import { CampaniaProvinceSpotlightMap } from "@/components/campania/CampaniaProvinceSpotlightMap";
import { getCampaniaProvinceContent } from "@/data/campania/content";
import {
  getCampaniaProvinceBySlug,
  isCampaniaProvinceSlug,
  listCampaniaProvinces,
} from "@/data/campania/provinces";
import { campaniaProvincePath } from "@/lib/routing/paths";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return listCampaniaProvinces().map((province) => ({ slug: province.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const province = getCampaniaProvinceBySlug(slug);
  if (!province) return { title: "Provincia non trovata" };
  const url = campaniaProvincePath(province.slug);
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

export default async function CampaniaProvincePage({ params }: Props) {
  const { slug } = await params;
  if (!isCampaniaProvinceSlug(slug)) notFound();
  const province = getCampaniaProvinceBySlug(slug);
  if (!province) notFound();
  const content = getCampaniaProvinceContent(slug);

  return (
    <div className="min-h-dvh text-foreground">
      <SiteHeader />
      <main className="mx-auto min-w-0 max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
        <nav className="mb-8 w-full" aria-label="Percorso">
          <ol className="flex w-full flex-wrap items-center justify-start gap-2 text-left text-sm font-bold sm:text-base">
            <li>
              <UiLink
                href="/mapa/campania"
                className="rounded-full bg-water/15 px-3 py-1.5 text-water underline-offset-4 transition hover:bg-water/25 hover:underline"
                text="map"
              />
            </li>
            <li aria-hidden="true" className="text-foreground-muted">
              /
            </li>
            <li className="font-display text-heading">{province.name}</li>
          </ol>
        </nav>
        <div className="flex min-w-0 flex-col-reverse gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(18rem,40%)] lg:items-start">
          <ProvinceSections
            localContent={{
              slug: province.slug,
              plants: content.plants,
              animals: content.animals,
              foods: content.foods,
              tourism: content.tourism,
              curiosities: content.curiosities,
            }}
          />
          <CampaniaProvinceSpotlightMap
            slug={province.slug}
            name={province.name}
            spotlightOverview={`${province.spotlightOverview}\n${province.curiosity}`}
          />
        </div>
      </main>
    </div>
  );
}
