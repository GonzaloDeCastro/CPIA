"use client";

import type { ProvinceContentItem } from "@/types/province";

import { useUi } from "@/lib/i18n/locale";

import { ProvinceExploreTabs } from "./ProvinceExploreTabs";

type ExploreContent = {
  slug: string;
  animals: ProvinceContentItem[];
  plants: ProvinceContentItem[];
  foods: ProvinceContentItem[];
  curiosities: ProvinceContentItem[];
  tourism: ProvinceContentItem[];
};

export function ProvinceSections({
  localContent,
}: {
  localContent: ExploreContent;
}) {
  const ui = useUi();
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
