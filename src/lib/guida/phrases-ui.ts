import type { Locale } from "@/lib/i18n/locale";

/** Imagen de cada situación (clave de `Scene`) y de cada frase, en el mismo orden que PHRASE_GROUPS. */
export const GROUP_SCENE: Record<string, string> = {
  questura: "questura",
  entrate: "entrate",
  asp: "asp",
  banca: "banca",
  casa: "casa",
};

export const PHRASE_PICTOS: Record<string, string[]> = {
  questura: ["calendar", "passport", "turtle", "clock"],
  entrate: ["idcard", "passport", "healthcard", "pen"],
  asp: ["clipboard", "doctor", "question"],
  banca: ["bankcard", "passport", "coins"],
  casa: ["search", "coins", "contract"],
};

export type PhrasesUi = {
  allSituations: string;
  pick: string;
  back: string;
  steps: [string, string];
  listenMine: string;
  listenIt: string;
  stop: string;
  noVoice: string;
  count: (n: number) => string;
};

export const PHRASES_UI: Record<Locale, PhrasesUi> = {
  it: {
    allSituations: "Tutte le situazioni",
    pick: "Scegli dove devi andare.",
    back: "Guida",
    steps: ["Tocca 🔊 per ascoltare e capire la frase.", "Poi ascolta in italiano o mostra il telefono alla persona."],
    listenMine: "Ascolta",
    listenIt: "Ascolta in italiano",
    stop: "Stop",
    noVoice: "Il tuo telefono non ha una voce per questa lingua. Puoi ascoltare in italiano.",
    count: (n) => `${n} frasi`,
  },
  es: {
    allSituations: "Todas las situaciones",
    pick: "Elegí adónde tenés que ir.",
    back: "Guía",
    steps: ["Tocá 🔊 para escuchar y entender la frase.", "Después escuchala en italiano o mostrale el celular a la persona."],
    listenMine: "Escuchar en español",
    listenIt: "Escuchar en italiano",
    stop: "Parar",
    noVoice: "Tu celular no tiene una voz para este idioma. Podés escuchar la frase en italiano.",
    count: (n) => `${n} frases`,
  },
  en: {
    allSituations: "All situations",
    pick: "Choose where you need to go.",
    back: "Guide",
    steps: ["Tap 🔊 to hear and understand the phrase.", "Then play it in Italian or show your phone to the person."],
    listenMine: "Listen in English",
    listenIt: "Listen in Italian",
    stop: "Stop",
    noVoice: "Your phone has no voice for this language. You can listen in Italian.",
    count: (n) => `${n} phrases`,
  },
  fr: {
    allSituations: "Toutes les situations",
    pick: "Choisissez où vous devez aller.",
    back: "Guide",
    steps: ["Touchez 🔊 pour écouter et comprendre la phrase.", "Puis écoutez-la en italien ou montrez votre téléphone à la personne."],
    listenMine: "Écouter en français",
    listenIt: "Écouter en italien",
    stop: "Stop",
    noVoice: "Votre téléphone n’a pas de voix pour cette langue. Vous pouvez écouter en italien.",
    count: (n) => `${n} phrases`,
  },
  ar: {
    allSituations: "كل المواقف",
    pick: "اختر المكان الذي تريد الذهاب إليه.",
    back: "الدليل",
    steps: ["اضغط 🔊 لتسمع العبارة وتفهمها.", "ثم استمع إليها بالإيطالية أو أرِ الهاتف للشخص."],
    listenMine: "استمع بالعربية",
    listenIt: "استمع بالإيطالية",
    stop: "إيقاف",
    noVoice: "لا يحتوي هاتفك على صوت لهذه اللغة. يمكنك الاستماع بالإيطالية.",
    count: (n) => `${n} عبارات`,
  },
  ro: {
    allSituations: "Toate situațiile",
    pick: "Alege unde trebuie să mergi.",
    back: "Ghid",
    steps: ["Atinge 🔊 pentru a auzi și a înțelege fraza.", "Apoi ascult-o în italiană sau arată telefonul persoanei."],
    listenMine: "Ascultă în română",
    listenIt: "Ascultă în italiană",
    stop: "Stop",
    noVoice: "Telefonul tău nu are o voce pentru această limbă. Poți asculta în italiană.",
    count: (n) => `${n} fraze`,
  },
};
