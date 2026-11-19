"use client";

import Link from "next/link";
import QRCode from "qrcode";
import { useEffect, useState } from "react";

import { PROJECT_COPY } from "@/lib/guida/extras";
import { withBasePath } from "@/lib/routing/base-path";
import { useLocale } from "@/lib/i18n/locale";

export function ProgettoView() {
  const { locale } = useLocale();
  const c = PROJECT_COPY[locale];
  const [qr, setQr] = useState<string | null>(null);

  useEffect(() => {
    // La guía vive un nivel arriba de esta página (respeta el base path de GitHub Pages).
    const url = new URL("../", window.location.href).href;
    QRCode.toDataURL(url, { margin: 1, width: 240, color: { dark: "#14532d", light: "#ffffff" } })
      .then(setQr)
      .catch(() => setQr(null));
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-4 pb-28 pt-6 sm:px-6">
      <Link href="/guida" className="inline-flex min-h-11 items-center text-sm font-bold text-heading underline">
        ← {c.back}
      </Link>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={withBasePath("/guida/brand/logo.webp")}
        alt="Tra Zagare e Merendine – Un viaggio mediterraneo tra luoghi, lingue e benessere"
        width={1200}
        height={641}
        className="mt-3 w-full rounded-2xl border border-[#0f4c6e]/20 bg-[#fffdf6] shadow-[var(--shadow-card)]"
      />
      <h1 className="mt-6 font-display text-3xl font-extrabold text-heading sm:text-4xl">{c.title}</h1>
      <p className="mt-3 text-lg leading-relaxed text-foreground">{c.lead}</p>

      <h2 className="mt-8 font-display text-2xl font-extrabold text-heading">{c.flowTitle}</h2>
      <ol className="mt-3 grid gap-3 sm:grid-cols-2">
        {c.flow.map((f) => (
          <li key={f.step} className="rounded-2xl border border-green-700 bg-green-950 tile-card p-4 text-green-50">
            <p className="font-display text-lg font-extrabold text-lime-300">{f.step}</p>
            <p className="mt-1 text-base leading-relaxed">{f.text}</p>
          </li>
        ))}
      </ol>
      <p className="mt-3 rounded-xl bg-lime-300 px-4 py-3 text-base font-extrabold text-green-950">{c.rule}</p>

      <h2 className="mt-8 font-display text-2xl font-extrabold text-heading">{c.criteriaTitle}</h2>
      <ul className="mt-3 grid gap-3 sm:grid-cols-2">
        {c.criteria.map((k) => (
          <li key={k.name} className="rounded-2xl border border-green-700 bg-green-900 p-4 text-green-50">
            <p className="font-display text-lg font-extrabold text-lime-300">{k.name}</p>
            <p className="mt-1 text-base leading-relaxed">{k.text}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-8 font-display text-2xl font-extrabold text-heading">{c.toolsTitle}</h2>
      <p className="mt-2 text-base leading-relaxed text-foreground">{c.tools}</p>

      <div className="mt-8 flex flex-wrap items-center gap-6 rounded-2xl border border-green-700 bg-green-950 tile-card p-5 text-green-50">
        {qr ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={qr} width={160} height={160} alt={c.qrTitle} className="rounded-xl bg-white p-1" />
        ) : null}
        <div>
          <p className="font-display text-xl font-extrabold text-lime-300">{c.qrTitle}</p>
          <p className="mt-1 text-base">{c.qrText}</p>
        </div>
      </div>

      <p className="mt-8 text-sm font-semibold text-foreground-muted">{c.credit}</p>
    </div>
  );
}
