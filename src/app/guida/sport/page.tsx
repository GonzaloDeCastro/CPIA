import type { Metadata } from "next";

import { SportView } from "@/components/guida/SportView";

export const metadata: Metadata = {
  title: { absolute: "Sport – Tra Zagare e Merendine" },
  description: "Calcio, pallavolo, basket e tennis: unisciti a una squadra. CPIA Catania 2 – EPALE Edu Hack 2026.",
  alternates: { canonical: "/guida/sport/" },
};

export default function SportPage() {
  return <SportView />;
}
