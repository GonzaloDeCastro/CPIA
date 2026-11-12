import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { TriviaGame } from "@/components/trivia/TriviaGame";
import { TRIVIA_QUESTIONS_CAMPANIA } from "@/data/trivia/trivia-campania.generated";

export const metadata: Metadata = {
  title: "Quiz della Campania",
  description:
    "Quiz sulle province campaniane: fino a 4 giocatori, punti e premio da scaricare.",
  openGraph: { locale: "it_IT" },
};

export default function TriviaCampaniaPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-dvh bg-background">
        <TriviaGame
          questions={TRIVIA_QUESTIONS_CAMPANIA}
          prizeSet="campania"
          backHref="/mapa/campania"
        />
      </main>
    </>
  );
}
