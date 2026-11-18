import type { GuidaCategory } from "@/data/guida/places";
import type { Locale } from "@/lib/i18n/locale";

export type GuidaCopy = {
  title: string;
  subtitle: string;
  all: string;
  categories: Record<GuidaCategory, string>;
  tabs: { simple: string; mine: string; info: string };
  listen: string;
  stop: string;
  example: string;
  noAudio: string;
  pickPlace: string;
  places: (n: number) => string;
  nav: string;
};

export const GUIDA_COPY: Record<Locale, GuidaCopy> = {
  it: {
    title: "Tra zagare e merendine",
    subtitle: "Un viaggio mediterraneo tra luoghi, lingue e benessere: Giarre, Paternò e l'Etna.",
    all: "Tutti",
    categories: { sport: "Sport", arte: "Arte", benessere: "Benessere" },
    tabs: { simple: "Italiano facile", mine: "La mia lingua", info: "Info pratiche" },
    listen: "Ascolta",
    stop: "Ferma",
    example: "Luogo di esempio: dati da verificare",
    noAudio: "L'audio non è disponibile su questo dispositivo.",
    pickPlace: "Tocca un punto sulla mappa per leggere la scheda.",
    places: (n) => `${n} luoghi`,
    nav: "Guida",
  },
  es: {
    title: "Entre azahares y meriendas",
    subtitle: "Un viaje mediterráneo entre lugares, lenguas y bienestar: Giarre, Paternò y el Etna.",
    all: "Todos",
    categories: { sport: "Deporte", arte: "Arte", benessere: "Bienestar" },
    tabs: { simple: "Italiano fácil", mine: "Mi idioma", info: "Info práctica" },
    listen: "Escuchar",
    stop: "Parar",
    example: "Lugar de ejemplo: datos a verificar",
    noAudio: "El audio no está disponible en este dispositivo.",
    pickPlace: "Tocá un punto del mapa para leer la ficha.",
    places: (n) => `${n} lugares`,
    nav: "Guía",
  },
  en: {
    title: "Between orange blossoms and snacks",
    subtitle: "A Mediterranean journey through places, languages and wellbeing: Giarre, Paternò and Etna.",
    all: "All",
    categories: { sport: "Sport", arte: "Art", benessere: "Wellbeing" },
    tabs: { simple: "Easy Italian", mine: "My language", info: "Practical info" },
    listen: "Listen",
    stop: "Stop",
    example: "Example place: data to be checked",
    noAudio: "Audio is not available on this device.",
    pickPlace: "Tap a point on the map to read its card.",
    places: (n) => `${n} places`,
    nav: "Guide",
  },
  fr: {
    title: "Entre fleurs d'oranger et goûters",
    subtitle: "Un voyage méditerranéen entre lieux, langues et bien-être : Giarre, Paternò et l'Etna.",
    all: "Tous",
    categories: { sport: "Sport", arte: "Art", benessere: "Bien-être" },
    tabs: { simple: "Italien facile", mine: "Ma langue", info: "Infos pratiques" },
    listen: "Écouter",
    stop: "Arrêter",
    example: "Lieu d'exemple : données à vérifier",
    noAudio: "L'audio n'est pas disponible sur cet appareil.",
    pickPlace: "Touchez un point sur la carte pour lire la fiche.",
    places: (n) => `${n} ${n === 1 ? "lieu" : "lieux"}`,
    nav: "Guide",
  },
  ar: {
    title: "بين زهر البرتقال والوجبات الخفيفة",
    subtitle: "رحلة متوسطية بين الأماكن واللغات والعافية: جاري وباتيرنو وإتنا.",
    all: "الكل",
    categories: { sport: "رياضة", arte: "فن", benessere: "عافية" },
    tabs: { simple: "إيطالية مبسطة", mine: "لغتي", info: "معلومات عملية" },
    listen: "استمع",
    stop: "إيقاف",
    example: "مكان تجريبي: البيانات تحتاج إلى تحقق",
    noAudio: "الصوت غير متاح على هذا الجهاز.",
    pickPlace: "اضغط على نقطة في الخريطة لقراءة البطاقة.",
    places: (n) => `${n} أماكن`,
    nav: "الدليل",
  },
  ro: {
    title: "Între flori de portocal și gustări",
    subtitle: "O călătorie mediteraneană între locuri, limbi și bunăstare: Giarre, Paternò și Etna.",
    all: "Toate",
    categories: { sport: "Sport", arte: "Artă", benessere: "Bunăstare" },
    tabs: { simple: "Italiană simplă", mine: "Limba mea", info: "Informații practice" },
    listen: "Ascultă",
    stop: "Oprește",
    example: "Loc de exemplu: date de verificat",
    noAudio: "Sunetul nu este disponibil pe acest dispozitiv.",
    pickPlace: "Atinge un punct de pe hartă pentru a citi fișa.",
    places: (n) => `${n} ${n === 1 ? "loc" : "locuri"}`,
    nav: "Ghid",
  },
};

export const SPEECH_LANG: Record<Locale, string> = {
  it: "it-IT",
  es: "es-AR",
  en: "en-GB",
  fr: "fr-FR",
  ar: "ar-SA",
  ro: "ro-RO",
};
