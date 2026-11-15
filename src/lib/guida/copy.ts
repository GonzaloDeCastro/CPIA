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
  ru: {
    title: "Между цветами апельсина и перекусами",
    subtitle: "Средиземноморское путешествие по местам, языкам и благополучию: Джарре, Патерно и Этна.",
    all: "Все",
    categories: { sport: "Спорт", arte: "Искусство", benessere: "Здоровье" },
    tabs: { simple: "Простой итальянский", mine: "Мой язык", info: "Практическая информация" },
    listen: "Слушать",
    stop: "Стоп",
    example: "Пример места: данные нужно проверить",
    noAudio: "Аудио недоступно на этом устройстве.",
    pickPlace: "Нажмите на точку на карте, чтобы прочитать карточку.",
    places: (n) => `Мест: ${n}`,
    nav: "Гид",
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
};

export const SPEECH_LANG: Record<Locale, string> = {
  it: "it-IT",
  es: "es-AR",
  en: "en-GB",
  ru: "ru-RU",
  ar: "ar-SA",
};
