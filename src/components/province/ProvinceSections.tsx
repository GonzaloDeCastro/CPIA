"use client";

import { useLocale, useUi, type Locale } from "@/lib/i18n/locale";
import type { ExploreContent } from "@/lib/i18n/overlay";

import { ProvinceExploreTabs } from "./ProvinceExploreTabs";

export function ProvinceSections({
  contentByLocale,
}: {
  contentByLocale: Record<Locale, ExploreContent>;
}) {
  const ui = useUi();
  const { locale } = useLocale();
  const localContent = contentByLocale[locale];
  const p = (s: string) => `${localContent.slug}-${s}`;

  return (
    <article className="min-w-0 text-left">
      <section aria-labelledby={p("explore-heading")}>
        <span id={p("explore-heading")} className="sr-only">
          {ui.page.explore}
        </span>
        <ProvinceExploreTabs localContent={localContent} />
      </section>
    </article>
  );
}
