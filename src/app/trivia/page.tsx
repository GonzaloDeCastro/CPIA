import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { TRIVIA_QUESTIONS } from "@/data/trivia/trivia-questions.generated";
import { TriviaGame } from "@/components/trivia/TriviaGame";

export const metadata: Metadata = {
  title: "Trivia",
  description:
    "Jugá la trivia de provincias argentinas: hasta 4 jugadores, puntos y premio descargable.",
};

export default function TriviaPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-dvh bg-background">
        <TriviaGame questions={TRIVIA_QUESTIONS} />
      </main>
    </>
  );
}
