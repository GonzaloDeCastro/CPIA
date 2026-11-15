import type { Metadata } from "next";

import { GuidaExplorer } from "@/components/guida/GuidaExplorer";

export const metadata: Metadata = {
  title: "Tra zagare e merendine – Guida digitale plurilingue",
  description:
    "Guida digitale plurilingue ai luoghi di Giarre, Paternò e dell'Etna: sport, arte e benessere. CPIA Catania 2 – EPALE Edu Hack 2026.",
  openGraph: { locale: "it_IT" },
};

export default function GuidaPage() {
  return <GuidaExplorer />;
}
