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


const frPoints = (n: number) => `${n} ${n === 1 ? "point" : "points"}`;

export const TRIVIA_COPY_FR: TriviaCopy = {
  title: "Quiz des régions",
  subtitle: "Des questions au hasard sur les plantes, les animaux, la cuisine, les lieux et l'histoire.",
  lobbyTitle: "Qui joue ?",
  lobbyHint: "De 1 à 4 joueurs sur le même écran. À chaque tour, une nouvelle question.",
  playerCount: "Nombre de joueurs",
  playerLabel: (n) => `Joueur ${n}`,
  playerPlaceholder: (n) => `Nom du joueur ${n}`,
  questionsPerPlayer: "Questions par joueur",
  questionsOption: (n) => `${n} ${n === 1 ? "question" : "questions"}`,
  errorNames: "Écris le nom de chaque joueur.",
  errorDuplicates: "Les noms doivent être différents.",
  start: "Commencer le quiz !",
  handoff: (name) => `C'est au tour de ${name} !`,
  turn: (n, total) => `Tour ${n} sur ${total}`,
  time: (s) => `Temps : ${s} s`,
  turnOf: (name) => `Tour de ${name}`,
  correct: (s) => `Bonne réponse ! +1 point (${s} s)`,
  wrong: "Presque ! La bonne réponse était :",
  scores: "Points",
  points: frPoints,
  tie: "Égalité ! Les gagnants",
  winner: "Le gagnant !",
  prize: (label) => `Prix : ${label}. Télécharge ton diplôme avec l'illustration.`,
  download: (name) => `Télécharger la fiche de ${name}`,
  playAgain: "Rejouer",
  back: "Retour à la carte",
  certificate: {
    headline: "Tu as gagné !",
    points: (n) => `${frPoints(n)} sur Mapa Jugar`,
    footer: "Explore le monde avec Mapa Jugar",
  },
};

export const TRIVIA_COPY_AR: TriviaCopy = {
  title: "مسابقة المناطق",
  subtitle: "أسئلة عشوائية عن النباتات والحيوانات والطعام والأماكن والتاريخ.",
  lobbyTitle: "من سيلعب؟",
  lobbyHint: "من لاعب إلى 4 لاعبين على الشاشة نفسها. في كل دور سؤال جديد.",
  playerCount: "عدد اللاعبين",
  playerLabel: (n) => `اللاعب ${n}`,
  playerPlaceholder: (n) => `اسم اللاعب ${n}`,
  questionsPerPlayer: "عدد الأسئلة لكل لاعب",
  questionsOption: (n) => `${n} أسئلة`,
  errorNames: "اكتب اسم كل لاعب.",
  errorDuplicates: "يجب أن تكون الأسماء مختلفة.",
  start: "ابدأ المسابقة!",
  handoff: (name) => `حان دور ${name}!`,
  turn: (n, total) => `الدور ${n} من ${total}`,
  time: (s) => `الوقت: ${s} ث`,
  turnOf: (name) => `دور ${name}`,
  correct: (s) => `إجابة صحيحة! +1 نقطة (${s} ث)`,
  wrong: "تقريبًا! الإجابة الصحيحة كانت:",
  scores: "النقاط",
  points: (n) => `${n} نقطة`,
  tie: "تعادل! الفائزون",
  winner: "الفائز!",
  prize: (label) => `الجائزة: ${label}. حمّل شهادتك مع الرسم التوضيحي.`,
  download: (name) => `تحميل بطاقة ${name}`,
  playAgain: "العب مرة أخرى",
  back: "العودة إلى الخريطة",
  certificate: {
    headline: "لقد فزت!",
    points: (n) => `${n} نقطة في Mapa Jugar`,
    footer: "استكشف العالم مع Mapa Jugar",
  },
};

const roPoints = (n: number) => `${n} ${n === 1 ? "punct" : "puncte"}`;

export const TRIVIA_COPY_RO: TriviaCopy = {
  title: "Cvizul regiunilor",
  subtitle: "Întrebări la întâmplare despre plante, animale, mâncare, locuri și istorie.",
  lobbyTitle: "Cine joacă?",
  lobbyHint: "De la 1 la 4 jucători pe același ecran. La fiecare tură, o întrebare nouă.",
  playerCount: "Numărul de jucători",
  playerLabel: (n) => `Jucătorul ${n}`,
  playerPlaceholder: (n) => `Numele jucătorului ${n}`,
  questionsPerPlayer: "Întrebări pe jucător",
  questionsOption: (n) => `${n} ${n === 1 ? "întrebare" : "întrebări"}`,
  errorNames: "Scrie numele fiecărui jucător.",
  errorDuplicates: "Numele trebuie să fie diferite.",
  start: "Începe cvizul!",
  handoff: (name) => `Este rândul lui ${name}!`,
  turn: (n, total) => `Tura ${n} din ${total}`,
  time: (s) => `Timp: ${s} s`,
  turnOf: (name) => `Rândul lui ${name}`,
  correct: (s) => `Corect! +1 punct (${s} s)`,
  wrong: "Aproape! Răspunsul corect era:",
  scores: "Punctaj",
  points: roPoints,
  tie: "Egalitate! Câștigătorii",
  winner: "Câștigătorul!",
  prize: (label) => `Premiu: ${label}. Descarcă diploma cu ilustrația.`,
  download: (name) => `Descarcă fișa ${name}`,
  playAgain: "Joacă din nou",
  back: "Înapoi la hartă",
  certificate: {
    headline: "Ai câștigat!",
    points: (n) => `${roPoints(n)} pe Mapa Jugar`,
    footer: "Explorează lumea cu Mapa Jugar",
  },
};

export const TRIVIA_COPY: Record<"es" | "en" | "it" | "fr" | "ar" | "ro", TriviaCopy> = {
  es: TRIVIA_COPY_ES,
  en: TRIVIA_COPY_EN,
  it: TRIVIA_COPY_IT,
  fr: TRIVIA_COPY_FR,
  ar: TRIVIA_COPY_AR,
  ro: TRIVIA_COPY_RO,
};
