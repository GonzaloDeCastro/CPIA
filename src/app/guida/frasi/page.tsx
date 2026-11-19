import type { Metadata } from "next";

import { FrasiIndex } from "@/components/guida/FrasiIndex";

export const metadata: Metadata = {
  title: { absolute: "Frasi utili – Tra Zagare e Merendine" },
  description: "Frasi utili in italiano con audio e immagini, per situazione: questura, ASP, banca, casa. CPIA Catania 2 – EPALE Edu Hack 2026.",
  alternates: { canonical: "/guida/frasi/" },
};

export default function FrasiPage() {
  return <FrasiIndex />;
}
