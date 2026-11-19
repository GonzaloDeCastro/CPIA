import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FrasiSituation } from "@/components/guida/FrasiSituation";
import { PHRASE_GROUPS } from "@/lib/guida/phrases";

export const dynamicParams = false;

export function generateStaticParams() {
  return PHRASE_GROUPS.map((g) => ({ id: g.id }));
}

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const g = PHRASE_GROUPS.find((x) => x.id === id);
  return { title: { absolute: `${g?.title.it ?? "Frasi utili"} – Tra Zagare e Merendine` } };
}

export default async function FrasiSituationPage({ params }: Props) {
  const { id } = await params;
  if (!PHRASE_GROUPS.some((g) => g.id === id)) notFound();
  return <FrasiSituation id={id} />;
}
