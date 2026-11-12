import type { Metadata } from "next";

import { InteractiveCampaniaMap } from "@/components/map/InteractiveCampaniaMap";
import { MapExplorerFrame } from "@/components/map/MapExplorerFrame";

export const metadata: Metadata = {
  title: "Mappa della Campania",
  description:
    "Mappa interattiva della Campania: tocca una provincia per scoprire animali, cucina, luoghi e storia.",
  openGraph: { locale: "it_IT" },
};

export default function CampaniaMapPage() {
  return (
    <MapExplorerFrame
      variant="fullPage"
      map={<InteractiveCampaniaMap className="min-h-0 sm:flex-1 sm:min-h-0" />}
      triviaHref="/trivia/campania"
      chooserHref="/mapa/italia"
      chooserKind="italy"
    />
  );
}
