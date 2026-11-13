import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { CataniaDetailView } from "@/components/sicily/CataniaDetailView";
import { CATANIA_DETAILS, getCataniaDetail } from "@/data/sicily/catania-details";
import { sicilyProvincePath } from "@/lib/routing/paths";

type Props = {
  params: Promise<{ slug: string; detail: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return CATANIA_DETAILS.map((d) => ({ slug: "catania", detail: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, detail } = await params;
  const data = slug === "catania" ? getCataniaDetail(detail) : undefined;
  if (!data) return { title: "Pagina non trovata" };
  const url = `${sicilyProvincePath(slug)}/${data.slug}`;
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${data.metaTitle} — Mapa Jugar`,
      description: data.metaDescription,
      url,
      locale: "it_IT",
      type: "article",
    },
  };
}

export default async function CataniaDetailPage({ params }: Props) {
  const { slug, detail } = await params;
  const data = slug === "catania" ? getCataniaDetail(detail) : undefined;
  if (!data) notFound();

  return (
    <div className="min-h-dvh text-foreground">
      <SiteHeader />
      <main className="mx-auto min-w-0 max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
        <CataniaDetailView detail={data} />
      </main>
    </div>
  );
}
