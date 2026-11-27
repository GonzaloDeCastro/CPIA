import type { Metadata } from "next";

import { GuidaExplorer } from "@/components/guida/GuidaExplorer";

export const metadata: Metadata = {
  title: { absolute: "Mappa dei luoghi – Tra Zagare e Merendine" },
  description:
    "Guida digitale plurilingue ai luoghi di Catania e dell'Etna: sport, arte e benessere. CPIA Catania 2 – EPALE Edu Hack 2026.",
  alternates: { canonical: "/guida/mappa/" },
};

export default function GuidaPage() {
  return <GuidaExplorer />;
}
