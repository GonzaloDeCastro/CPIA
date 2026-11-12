import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { TriviaGame } from "@/components/trivia/TriviaGame";
import { TRIVIA_QUESTIONS_ITALY } from "@/data/trivia/trivia-italy.generated";

export const metadata: Metadata = {
  title: "Quiz dell'Italia",
  description:
    "Quiz sulle regioni italiane: fino a 4 giocatori, punti e premio da scaricare.",
  openGraph: { locale: "it_IT" },
};

export default function TriviaItalyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-dvh bg-background">
        <TriviaGame
          questions={TRIVIA_QUESTIONS_ITALY}
          prizeSet="italia"
          backHref="/mapa/italia"
        />
      </main>
    </>
  );
}
