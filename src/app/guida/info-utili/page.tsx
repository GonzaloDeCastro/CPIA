import type { Metadata } from "next";

import { InfoUtiliView } from "@/components/guida/InfoUtiliView";

export const metadata: Metadata = {
  title: { absolute: "Info utili – Tra Zagare e Merendine" },
  description: "Questura, ASP e Agenzia delle Entrate: i siti ufficiali e le frasi utili con audio. CPIA Catania 2 – EPALE Edu Hack 2026.",
  alternates: { canonical: "/guida/info-utili/" },
};

export default function InfoUtiliPage() {
  return <InfoUtiliView />;
}
