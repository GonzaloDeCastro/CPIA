import type { Metadata } from "next";

import { CountryPickerContent } from "@/components/map/CountryPickerContent";
import { WorldMapPicker } from "@/components/map/WorldMapPicker";

export const metadata: Metadata = {
  title: "Elegí un país",
  description:
    "Elegí Argentina o Italia en el mapamundi, o las provincias de Sicilia, y explorá naturaleza, comidas, lugares e historia.",
};

export default function CountryPickerPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-sky-deep text-white">
      <CountryPickerContent map={<WorldMapPicker />} />
    </div>
  );
}
