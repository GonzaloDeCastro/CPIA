"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { useUi } from "@/lib/i18n/locale";

/** Textos disponibles (se pasa la clave, no funciones: viene de páginas server). */
const TEXTS = {
  map: (ui: ReturnType<typeof useUi>) => ui.page.map,
  exploreProvinces: (ui: ReturnType<typeof useUi>) => ui.page.exploreProvinces,
  exploreProvincesCampania: (ui: ReturnType<typeof useUi>) => ui.page.exploreProvincesCampania,
  argentina: (ui: ReturnType<typeof useUi>) => ui.picker.argentina,
  italy: (ui: ReturnType<typeof useUi>) => ui.picker.italy,
} as const;

export type UiLinkText = keyof typeof TEXTS;

type Props = {
  href: string;
  className?: string;
  /** Clave del texto: se muestra como contenido, o como aria-label si hay children. */
  text: UiLinkText;
  children?: ReactNode;
};

/** Link cuyo texto sigue el idioma elegido; con children (ej. el path del mapamundi) solo traduce el aria-label. */
export function UiLink({ href, className, text, children }: Props) {
  const ui = useUi();
  const label = TEXTS[text](ui);
  return (
    <Link href={href} className={className} aria-label={children ? label : undefined}>
      {children ?? label}
    </Link>
  );
}
