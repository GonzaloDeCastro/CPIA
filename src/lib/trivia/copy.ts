export type TriviaCopy = {
  title: string;
  subtitle: string;
  lobbyTitle: string;
  lobbyHint: string;
  playerCount: string;
  playerLabel: (n: number) => string;
  playerPlaceholder: (n: number) => string;
  questionsPerPlayer: string;
  questionsOption: (n: number) => string;
  errorNames: string;
  errorDuplicates: string;
  start: string;
  handoff: (name: string) => string;
  turn: (n: number, total: number) => string;
  time: (seconds: string) => string;
  turnOf: (name: string) => string;
  correct: (seconds: string) => string;
  wrong: string;
  scores: string;
  points: (n: number) => string;
  tie: string;
  winner: string;
  prize: (label: string) => string;
  download: (name: string) => string;
  playAgain: string;
  back: string;
  certificate: {
    headline: string;
    points: (n: number) => string;
    footer: string;
  };
};

export const TRIVIA_COPY_ES: TriviaCopy = {
  title: "Trivia de provincias",
  subtitle: "Preguntas al azar sobre flora, fauna, comidas, turismo e historia.",
  lobbyTitle: "¿Quiénes juegan?",
  lobbyHint: "De 1 a 4 jugadores en el mismo monitor. Cada turno, una pregunta nueva.",
  playerCount: "Cantidad de jugadores",
  playerLabel: (n) => `Jugador ${n}`,
  playerPlaceholder: (n) => `Nombre del jugador ${n}`,
  questionsPerPlayer: "Preguntas por jugador",
  questionsOption: (n) => `${n} preguntas`,
  errorNames: "Escribí el nombre de cada jugador.",
  errorDuplicates: "Los nombres tienen que ser distintos.",
  start: "¡Empezar trivia!",
  handoff: (name) => `¡Le toca a ${name}!`,
  turn: (n, total) => `Turno ${n} de ${total}`,
  time: (s) => `Tiempo: ${s} s`,
  turnOf: (name) => `Turno de ${name}`,
  correct: (s) => `¡Correcto! +1 punto (${s} s)`,
  wrong: "¡Casi! La respuesta correcta era:",
  scores: "Puntajes",
  points: (n) => `${n} pt${n === 1 ? "" : "s"}`,
  tie: "¡Empate! Ganadores",
  winner: "¡Ganador!",
  prize: (label) => `Premio: ${label}. Descargá tu certificado con la ilustración.`,
  download: (name) => `Descargar ficha de ${name}`,
  playAgain: "Jugar de nuevo",
  back: "Volver al mapa",
  certificate: {
    headline: "¡Ganaste!",
    points: (n) => `${n} punto${n === 1 ? "" : "s"} en Mapa Jugar`,
    footer: "Explorá Argentina con Mapa Jugar",
  },
};

export const TRIVIA_COPY_IT: TriviaCopy = {
  title: "Quiz delle regioni",
  subtitle: "Domande a sorpresa su piante, animali, cucina, luoghi e storia.",
  lobbyTitle: "Chi gioca?",
  lobbyHint: "Da 1 a 4 giocatori sullo stesso schermo. A ogni turno, una domanda nuova.",
  playerCount: "Numero di giocatori",
  playerLabel: (n) => `Giocatore ${n}`,
  playerPlaceholder: (n) => `Nome del giocatore ${n}`,
  questionsPerPlayer: "Domande per giocatore",
  questionsOption: (n) => `${n} domande`,
  errorNames: "Scrivi il nome di ogni giocatore.",
  errorDuplicates: "I nomi devono essere diversi.",
  start: "Inizia il quiz!",
  handoff: (name) => `Tocca a ${name}!`,
  turn: (n, total) => `Turno ${n} di ${total}`,
  time: (s) => `Tempo: ${s} s`,
  turnOf: (name) => `Turno di ${name}`,
  correct: (s) => `Corretto! +1 punto (${s} s)`,
  wrong: "Quasi! La risposta giusta era:",
  scores: "Punteggi",
  points: (n) => `${n} pt`,
  tie: "Pareggio! Vincitori",
  winner: "Vincitore!",
  prize: (label) => `Premio: ${label}. Scarica il tuo certificato con l'illustrazione.`,
  download: (name) => `Scarica la scheda di ${name}`,
  playAgain: "Gioca ancora",
  back: "Torna alla mappa",
  certificate: {
    headline: "Hai vinto!",
    points: (n) => `${n} punt${n === 1 ? "o" : "i"} su Mapa Jugar`,
    footer: "Esplora il mondo con Mapa Jugar",
  },
};

export const TRIVIA_COPY_EN: TriviaCopy = {
  title: "Region quiz",
  subtitle: "Random questions about plants, animals, food, places and history.",
  lobbyTitle: "Who's playing?",
  lobbyHint: "1 to 4 players on the same screen. A new question every turn.",
  playerCount: "Number of players",
  playerLabel: (n) => `Player ${n}`,
  playerPlaceholder: (n) => `Player ${n} name`,
  questionsPerPlayer: "Questions per player",
  questionsOption: (n) => `${n} questions`,
  errorNames: "Write each player's name.",
  errorDuplicates: "Names must be different.",
  start: "Start the quiz!",
  handoff: (name) => `${name}, it's your turn!`,
  turn: (n, total) => `Turn ${n} of ${total}`,
  time: (s) => `Time: ${s} s`,
  turnOf: (name) => `${name}'s turn`,
  correct: (s) => `Correct! +1 point (${s} s)`,
  wrong: "Almost! The right answer was:",
  scores: "Scores",
  points: (n) => `${n} pt${n === 1 ? "" : "s"}`,
  tie: "It's a tie! Winners",
  winner: "Winner!",
  prize: (label) => `Prize: ${label}. Download your certificate with the illustration.`,
  download: (name) => `Download the ${name} card`,
  playAgain: "Play again",
  back: "Back to the map",
  certificate: {
    headline: "You won!",
    points: (n) => `${n} point${n === 1 ? "" : "s"} on Mapa Jugar`,
    footer: "Explore the world with Mapa Jugar",
  },
};

export const TRIVIA_COPY: Record<"es" | "en" | "it", TriviaCopy> = {
  es: TRIVIA_COPY_ES,
  en: TRIVIA_COPY_EN,
  it: TRIVIA_COPY_IT,
};
