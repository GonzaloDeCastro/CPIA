import type { Metadata } from "next";

import { GuidaExplorer } from "@/components/guida/GuidaExplorer";

export const metadata: Metadata = {
  title: { absolute: "Tra Zagare e Merendine – Guida digitale plurilingue" },
  description:
    "Guida digitale plurilingue ai luoghi di Giarre, Paternò e dell'Etna: sport, arte e benessere. CPIA Catania 2 – EPALE Edu Hack 2026.",
  alternates: { canonical: "/guida/" },
};

export default function GuidaPage() {
  return <GuidaExplorer />;
}
