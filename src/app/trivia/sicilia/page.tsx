import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { TriviaGame } from "@/components/trivia/TriviaGame";
import { TRIVIA_QUESTIONS_SICILY } from "@/data/trivia/trivia-sicily.generated";

export const metadata: Metadata = {
  title: "Quiz della Sicilia",
  description:
    "Quiz sulle province siciliane: fino a 4 giocatori, punti e premio da scaricare.",
  openGraph: { locale: "it_IT" },
};

export default function TriviaSicilyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-dvh bg-background">
        <TriviaGame
          questions={TRIVIA_QUESTIONS_SICILY}
          prizeSet="sicilia"
          backHref="/mapa/sicilia"
        />
      </main>
    </>
  );
}
