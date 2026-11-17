import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { LanguageSelector } from "@/components/layout/LanguageSelector";
import { LocaleProvider } from "@/lib/i18n/locale";

import "./globals.css";

/**
 * Fuentes servidas desde el repo (src/app/fonts, archivos variables de Google Fonts, licencia OFL).
 * No se usa next/font/google porque Google empezó a devolver URLs que Next 15 no sabe leer
 * y rompía el build ("next/font/google queries have exactly one entry").
 */
const nunito = localFont({
  variable: "--font-nunito",
  src: [{ path: "./fonts/nunito-latin.woff2", weight: "500 800", style: "normal" }],
  display: "swap",
});

const fredoka = localFont({
  variable: "--font-fredoka",
  src: [{ path: "./fonts/fredoka-latin.woff2", weight: "500 700", style: "normal" }],
  display: "swap",
});

const cairo = localFont({
  variable: "--font-cairo",
  src: [{ path: "./fonts/cairo-arabic.woff2", weight: "500 800", style: "normal" }],
  display: "swap",
  preload: false,
});

/** Tipografía del logo "Tra Zagare e Merendine". */
const brandSerif = localFont({
  variable: "--font-brand-serif",
  src: [
    { path: "./fonts/source-serif-4-latin.woff2", weight: "600 800", style: "normal" },
    { path: "./fonts/source-serif-4-latin-italic.woff2", weight: "600 800", style: "italic" },
  ],
  display: "swap",
});

const siteUrlRaw =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const siteUrl = `${siteUrlRaw.replace(/\/$/, "")}/`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tra Zagare e Merendine – Guida digitale plurilingue",
    template: "%s | Tra Zagare e Merendine",
  },
  description:
    "Guida digitale plurilingue ai luoghi di Giarre, Paternò e dell'Etna: sport, arte e benessere. CPIA Catania 2 – EPALE Edu Hack 2026.",
  applicationName: "Tra Zagare e Merendine",
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Tra Zagare e Merendine",
    title: "Tra Zagare e Merendine – Un viaggio mediterraneo tra luoghi, lingue e benessere",
    description:
      "Guida digitale plurilingue ai luoghi di Giarre, Paternò e dell'Etna: sport, arte e benessere. CPIA Catania 2 – EPALE Edu Hack 2026.",
    // Logo para la vista previa al compartir (WhatsApp, Facebook…). Ruta relativa a metadataBase (incluye /CPIA/).
    images: [{ url: "guida/brand/og.jpg", width: 1200, height: 630, alt: "Tra Zagare e Merendine" }],
  },
  twitter: { card: "summary_large_image", images: ["guida/brand/og.jpg"] },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#14532d" },
    { media: "(prefers-color-scheme: dark)", color: "#0c2438" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${nunito.variable} ${fredoka.variable} ${cairo.variable} ${brandSerif.variable} font-sans antialiased`}
      >
        <LocaleProvider>
          {children}
          <LanguageSelector />
        </LocaleProvider>
      </body>
    </html>
  );
}
