"use client";

import Link from "next/link";

import { commonsImage, tx, type CataniaDetail } from "@/data/sicily/catania-details";
import { zoneName } from "@/data/i18n/zone-names";
import { useLocale, useUi } from "@/lib/i18n/locale";
import { sicilyProvincePath } from "@/lib/routing/paths";

import { TopicImage } from "../province/TopicImage";

export function CataniaDetailView({ detail }: { detail: CataniaDetail }) {
  const ui = useUi();
  const { locale } = useLocale();
  const province = zoneName(locale, "catania", "Catania");
  const provinceHref = `${sicilyProvincePath("catania")}/`;

  return (
    <>
      <nav className="mb-8 w-full" aria-label="Percorso">
        <ol className="flex w-full flex-wrap items-center justify-start gap-2 text-left text-sm font-bold sm:text-base">
          <li>
            <Link
              href="/mapa/sicilia/"
              className="rounded-full bg-water/15 px-3 py-1.5 text-water underline-offset-4 transition hover:bg-water/25 hover:underline"
            >
              {ui.page.map}
            </Link>
          </li>
          <li aria-hidden="true" className="text-foreground-muted">
            /
          </li>
          <li>
            <Link
              href={provinceHref}
              className="rounded-full bg-water/15 px-3 py-1.5 text-water underline-offset-4 transition hover:bg-water/25 hover:underline"
            >
              {province}
            </Link>
          </li>
          <li aria-hidden="true" className="text-foreground-muted">
            /
          </li>
          <li className="font-display text-heading">{tx(detail.title, locale)}</li>
        </ol>
      </nav>

      <article className="mx-auto max-w-3xl text-left">
        <h1 className="font-display text-3xl font-bold tracking-tight text-heading sm:text-4xl">
          <span aria-hidden className="me-2">
            {detail.emoji}
          </span>
          {tx(detail.title, locale)}
        </h1>
        <p className="mt-3 text-base font-semibold leading-relaxed text-foreground-muted sm:text-lg">
          {tx(detail.intro, locale)}
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border-2 border-heading/15 bg-surface-elevated shadow-[var(--shadow-card)]">
          <TopicImage
            src={commonsImage(detail.heroFile)}
            alt={tx(detail.heroAlt, locale)}
            placeholderEmoji={detail.emoji}
          />
        </div>

        <dl className="mt-6 grid gap-3 sm:grid-cols-2">
          {detail.facts.map((fact) => (
            <div
              key={fact.label.it}
              className="rounded-2xl border-2 border-sun/35 bg-background-warm/80 p-4 shadow-[var(--shadow-card)]"
            >
              <dt className="text-xs font-extrabold uppercase tracking-wide text-water">
                {tx(fact.label, locale)}
              </dt>
              <dd className="mt-1 text-sm font-semibold leading-relaxed text-heading sm:text-base">
                {tx(fact.value, locale)}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 space-y-6">
          {detail.sections.map((section) => (
            <section
              key={section.heading.it}
              className="overflow-hidden rounded-2xl border-2 border-heading/15 bg-surface-elevated shadow-[var(--shadow-card)]"
            >
              {section.file ? (
                <TopicImage
                  src={commonsImage(section.file)}
                  alt={section.alt ? tx(section.alt, locale) : tx(section.heading, locale)}
                  placeholderEmoji={detail.emoji}
                />
              ) : null}
              <div className="p-4 sm:p-5">
                <h2 className="font-display text-xl font-bold text-heading">
                  {tx(section.heading, locale)}
                </h2>
                <p className="mt-2 text-sm font-medium leading-relaxed text-foreground-muted sm:text-base">
                  {tx(section.body, locale)}
                </p>
              </div>
            </section>
          ))}
        </div>

        <Link
          href={provinceHref}
          className="mt-8 inline-flex min-h-12 items-center justify-center gap-1 rounded-full bg-terracotta px-6 text-base font-extrabold text-white shadow-[var(--shadow-card)] transition-[filter,transform] hover:brightness-110 active:scale-[0.98]"
        >
          <span aria-hidden className="inline-block rtl:-scale-x-100">←</span>
          {ui.page.backTo(province)}
        </Link>
      </article>
    </>
  );
}
