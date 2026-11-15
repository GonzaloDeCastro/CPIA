import type { Metadata } from "next";

import { ProgettoView } from "@/components/guida/ProgettoView";

export const metadata: Metadata = {
  title: "Il progetto – Tra zagare e merendine",
  description:
    "Come nasce la guida: studenti, intelligenza artificiale e revisione umana. CPIA Catania 2 – EPALE Edu Hack 2026.",
  openGraph: { locale: "it_IT" },
};

export default function ProgettoPage() {
  return <ProgettoView />;
}
