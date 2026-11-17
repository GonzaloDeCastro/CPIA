import type { Metadata } from "next";

import { ProgettoView } from "@/components/guida/ProgettoView";

export const metadata: Metadata = {
  title: { absolute: "Il progetto – Tra Zagare e Merendine" },
  description:
    "Come nasce la guida: studenti, intelligenza artificiale e revisione umana. CPIA Catania 2 – EPALE Edu Hack 2026.",
};

export default function ProgettoPage() {
  return <ProgettoView />;
}
