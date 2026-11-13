import type { Locale } from "./locale";

export type UiCopy = {
  nav: { map: string; trivia: string; menu: string; openMenu: string; closeMenu: string; main: string };
  picker: {
    title: string;
    subtitle: string;
    worldLabel: string;
    hint: string;
    goSicily: string;
    triviaArgentina: string;
    triviaItaly: string;
    triviaSicily: string;
    triviaCampania: string;
    argentina: string;
    italy: string;
  };
  frame: {
    world: string;
    italy: string;
    trivia: string;
    fullscreenEnter: string;
    fullscreenExit: string;
  };
  map: {
    hoverProvince: string;
    tapProvince: string;
    hoverRegion: string;
    tapRegion: string;
    chooseRegion: string;
    chooseProvince: string;
    malvinas: string;
    ariaArgentina: string;
    ariaItaly: string;
    ariaSicily: string;
    ariaCampania: string;
    mapOf: (name: string) => string;
  };
  page: {
    breadcrumb: string;
    map: string;
    sections: string;
    explore: string;
    exploreProvinces: string;
    exploreProvincesCampania: string;
    tabs: { flora: string; fauna: string; foods: string; tourism: string; curiosity: string };
    loadingPhoto: string;
    loadingPhotoHint: string;
    inPreparation: string;
    learnMore: string;
    backTo: (name: string) => string;
    empty: { fauna: string; flora: string; comidas: string; historia: string; turismo: string };
  };
};

const ES: UiCopy = {
  nav: { map: "Mapa", trivia: "Trivia", menu: "Menú", openMenu: "Abrir menú", closeMenu: "Cerrar menú", main: "Principal" },
  picker: {
    title: "Elegí un país",
    subtitle: "Tocá un país en el mapamundi y explorá sus regiones o provincias: naturaleza, comidas, lugares e historia.",
    worldLabel: "Mapamundi: elegí Argentina o Italia",
    hint: "Tocá Argentina o Italia en el mapa.",
    goSicily: "Ir directo a Sicilia",
    triviaArgentina: "Trivia de Argentina",
    triviaItaly: "Trivia de Italia",
    triviaSicily: "Trivia de Sicilia",
    triviaCampania: "Trivia de Campania",
    argentina: "Entrar a Argentina",
    italy: "Entrar a Italia",
  },
  frame: { world: "Mundo", italy: "Italia", trivia: "Trivia", fullscreenEnter: "Pantalla completa", fullscreenExit: "Salir de pantalla completa" },
  map: {
    hoverProvince: "Pasá por una provincia",
    tapProvince: "Tocá una provincia",
    hoverRegion: "Pasá por una región",
    tapRegion: "Tocá una región",
    chooseRegion: "Elegí una región y la vas a ver mucho más grande acá.",
    chooseProvince: "Elegí una provincia y la vas a ver mucho más grande acá.",
    malvinas: "Islas Malvinas",
    ariaArgentina: "Mapa interactivo de Argentina por provincias",
    ariaItaly: "Mapa interactivo de Italia por regiones",
    ariaSicily: "Mapa interactivo de Sicilia por provincias",
    ariaCampania: "Mapa interactivo de Campania por provincias",
    mapOf: (n) => `Mapa de ${n}`,
  },
  page: {
    breadcrumb: "Ruta",
    map: "Mapa",
    sections: "Secciones",
    explore: "Explorar contenido",
    exploreProvinces: "Explorar las nueve provincias",
    exploreProvincesCampania: "Explorar las cinco provincias",
    tabs: { flora: "Flora", fauna: "Fauna", foods: "Comidas", tourism: "Turismo", curiosity: "Historia" },
    loadingPhoto: "Cargando foto…",
    loadingPhotoHint: "Un momentito, estamos buscando la imagen",
    inPreparation: "Contenido en preparación.",
    learnMore: "Conocer más",
    backTo: (n) => `Volver a ${n}`,
    empty: {
      fauna: "Estamos preparando la fauna de esta zona. Mientras tanto, podés seguir explorando otras secciones.",
      flora: "Todavía no hay imágenes de flora cargadas para esta zona. Pronto estarán disponibles.",
      comidas: "Las comidas típicas de esta zona se están cargando. Volvé pronto para descubrirlas.",
      historia: "Estamos preparando más historia de esta zona para que sigas aprendiendo.",
      turismo: "Estamos armando los destinos turísticos de esta zona. ¡Pronto vas a poder verlos!",
    },
  },
};

const EN: UiCopy = {
  nav: { map: "Map", trivia: "Trivia", menu: "Menu", openMenu: "Open menu", closeMenu: "Close menu", main: "Main" },
  picker: {
    title: "Pick a country",
    subtitle: "Tap a country on the world map and explore its regions or provinces: nature, food, places and history.",
    worldLabel: "World map: pick Argentina or Italy",
    hint: "Tap Argentina or Italy on the map.",
    goSicily: "Go straight to Sicily",
    triviaArgentina: "Argentina trivia",
    triviaItaly: "Italy trivia",
    triviaSicily: "Sicily trivia",
    triviaCampania: "Campania trivia",
    argentina: "Enter Argentina",
    italy: "Enter Italy",
  },
  frame: { world: "World", italy: "Italy", trivia: "Trivia", fullscreenEnter: "Full screen", fullscreenExit: "Exit full screen" },
  map: {
    hoverProvince: "Hover over a province",
    tapProvince: "Tap a province",
    hoverRegion: "Hover over a region",
    tapRegion: "Tap a region",
    chooseRegion: "Pick a region and you'll see it much bigger here.",
    chooseProvince: "Pick a province and you'll see it much bigger here.",
    malvinas: "Falkland Islands (Malvinas)",
    ariaArgentina: "Interactive map of Argentina by province",
    ariaItaly: "Interactive map of Italy by region",
    ariaSicily: "Interactive map of Sicily by province",
    ariaCampania: "Interactive map of Campania by province",
    mapOf: (n) => `Map of ${n}`,
  },
  page: {
    breadcrumb: "Path",
    map: "Map",
    sections: "Sections",
    explore: "Explore content",
    exploreProvinces: "Explore the nine provinces",
    exploreProvincesCampania: "Explore the five provinces",
    tabs: { flora: "Flora", fauna: "Fauna", foods: "Food", tourism: "Tourism", curiosity: "History" },
    loadingPhoto: "Loading photo…",
    loadingPhotoHint: "Just a moment, we're finding the picture",
    inPreparation: "Content coming soon.",
    learnMore: "Learn more",
    backTo: (n) => `Back to ${n}`,
    empty: {
      fauna: "We're preparing the wildlife of this area. Meanwhile, keep exploring the other sections.",
      flora: "There are no plant photos for this area yet. They'll be here soon.",
      comidas: "The typical food of this area is loading. Come back soon to discover it.",
      historia: "We're preparing more history of this area so you can keep learning.",
      turismo: "We're putting together the tourist spots of this area. You'll see them soon!",
    },
  },
};

const IT: UiCopy = {
  nav: { map: "Mappa", trivia: "Quiz", menu: "Menu", openMenu: "Apri il menu", closeMenu: "Chiudi il menu", main: "Principale" },
  picker: {
    title: "Scegli un paese",
    subtitle: "Tocca un paese sul planisfero ed esplora le sue regioni o province: natura, cucina, luoghi e storia.",
    worldLabel: "Planisfero: scegli Argentina o Italia",
    hint: "Tocca l'Argentina o l'Italia sulla mappa.",
    goSicily: "Vai direttamente in Sicilia",
    triviaArgentina: "Quiz dell'Argentina",
    triviaItaly: "Quiz dell'Italia",
    triviaSicily: "Quiz della Sicilia",
    triviaCampania: "Quiz della Campania",
    argentina: "Entra in Argentina",
    italy: "Entra in Italia",
  },
  frame: { world: "Mondo", italy: "Italia", trivia: "Quiz", fullscreenEnter: "Schermo intero", fullscreenExit: "Esci da schermo intero" },
  map: {
    hoverProvince: "Passa su una provincia",
    tapProvince: "Tocca una provincia",
    hoverRegion: "Passa su una regione",
    tapRegion: "Tocca una regione",
    chooseRegion: "Scegli una regione e la vedrai molto più grande qui.",
    chooseProvince: "Scegli una provincia e la vedrai molto più grande qui.",
    malvinas: "Isole Falkland (Malvinas)",
    ariaArgentina: "Mappa interattiva dell'Argentina per province",
    ariaItaly: "Mappa interattiva dell'Italia per regioni",
    ariaSicily: "Mappa interattiva della Sicilia per province",
    ariaCampania: "Mappa interattiva della Campania per province",
    mapOf: (n) => `Mappa di ${n}`,
  },
  page: {
    breadcrumb: "Percorso",
    map: "Mappa",
    sections: "Sezioni",
    explore: "Esplora i contenuti",
    exploreProvinces: "Esplora le nove province",
    exploreProvincesCampania: "Esplora le cinque province",
    tabs: { flora: "Flora", fauna: "Fauna", foods: "Cucina", tourism: "Turismo", curiosity: "Storia" },
    loadingPhoto: "Caricamento foto…",
    loadingPhotoHint: "Un attimo, stiamo cercando l'immagine",
    inPreparation: "Contenuto in preparazione.",
    learnMore: "Scopri di più",
    backTo: (n) => `Torna a ${n}`,
    empty: {
      fauna: "Stiamo preparando la fauna di questa zona. Intanto puoi esplorare le altre sezioni.",
      flora: "Le foto della flora di questa zona non sono ancora pronte. Torneranno presto.",
      comidas: "I piatti di questa zona si stanno caricando. Torna presto per scoprirli.",
      historia: "Stiamo preparando altra storia di questa zona, per continuare a imparare.",
      turismo: "Stiamo preparando le mete di questa zona. Presto potrai vederle!",
    },
  },
};

const RU: UiCopy = {
  nav: { map: "Карта", trivia: "Викторина", menu: "Меню", openMenu: "Открыть меню", closeMenu: "Закрыть меню", main: "Главная" },
  picker: {
    title: "Выбери страну",
    subtitle: "Нажми на страну на карте мира и узнай о её областях или провинциях: природа, еда, места и история.",
    worldLabel: "Карта мира: выбери Аргентину или Италию",
    hint: "Нажми на Аргентину или Италию на карте.",
    goSicily: "Сразу на Сицилию",
    triviaArgentina: "Викторина об Аргентине",
    triviaItaly: "Викторина об Италии",
    triviaSicily: "Викторина о Сицилии",
    triviaCampania: "Викторина о Кампании",
    argentina: "Войти в Аргентину",
    italy: "Войти в Италию",
  },
  frame: { world: "Мир", italy: "Италия", trivia: "Викторина", fullscreenEnter: "На весь экран", fullscreenExit: "Выйти из полноэкранного режима" },
  map: {
    hoverProvince: "Наведи на провинцию",
    tapProvince: "Нажми на провинцию",
    hoverRegion: "Наведи на область",
    tapRegion: "Нажми на область",
    chooseRegion: "Выбери область, и ты увидишь её здесь намного крупнее.",
    chooseProvince: "Выбери провинцию, и ты увидишь её здесь намного крупнее.",
    malvinas: "Фолклендские (Мальвинские) острова",
    ariaArgentina: "Интерактивная карта Аргентины по провинциям",
    ariaItaly: "Интерактивная карта Италии по областям",
    ariaSicily: "Интерактивная карта Сицилии по провинциям",
    ariaCampania: "Интерактивная карта Кампании по провинциям",
    mapOf: (n) => `Карта: ${n}`,
  },
  page: {
    breadcrumb: "Путь",
    map: "Карта",
    sections: "Разделы",
    explore: "Исследовать",
    exploreProvinces: "Исследовать все девять провинций",
    exploreProvincesCampania: "Исследовать все пять провинций",
    tabs: { flora: "Флора", fauna: "Фауна", foods: "Еда", tourism: "Туризм", curiosity: "История" },
    loadingPhoto: "Загружаем фото…",
    loadingPhotoHint: "Минутку, ищем картинку",
    inPreparation: "Материал готовится.",
    learnMore: "Узнать больше",
    backTo: (n) => `Назад: ${n}`,
    empty: {
      fauna: "Мы готовим материал о фауне этого места. А пока можно посмотреть другие разделы.",
      flora: "Фотографии флоры этого места ещё не загружены. Скоро они появятся.",
      comidas: "Блюда этого места загружаются. Загляни позже, чтобы их узнать.",
      historia: "Мы готовим ещё больше истории этого места, чтобы ты продолжал узнавать новое.",
      turismo: "Мы собираем туристические места этого края. Скоро ты сможешь их увидеть!",
    },
  },
};

const AR: UiCopy = {
  nav: { map: "الخريطة", trivia: "مسابقة", menu: "القائمة", openMenu: "افتح القائمة", closeMenu: "أغلق القائمة", main: "الرئيسية" },
  picker: {
    title: "اختر بلدًا",
    subtitle: "اضغط على بلد في خريطة العالم واستكشف مناطقه أو مقاطعاته: الطبيعة والطعام والأماكن والتاريخ.",
    worldLabel: "خريطة العالم: اختر الأرجنتين أو إيطاليا",
    hint: "اضغط على الأرجنتين أو إيطاليا في الخريطة.",
    goSicily: "اذهب مباشرة إلى صقلية",
    triviaArgentina: "مسابقة الأرجنتين",
    triviaItaly: "مسابقة إيطاليا",
    triviaSicily: "مسابقة صقلية",
    triviaCampania: "مسابقة كامبانيا",
    argentina: "ادخل إلى الأرجنتين",
    italy: "ادخل إلى إيطاليا",
  },
  frame: { world: "العالم", italy: "إيطاليا", trivia: "مسابقة", fullscreenEnter: "ملء الشاشة", fullscreenExit: "الخروج من ملء الشاشة" },
  map: {
    hoverProvince: "مرِّر المؤشر فوق مقاطعة",
    tapProvince: "اضغط على مقاطعة",
    hoverRegion: "مرِّر المؤشر فوق منطقة",
    tapRegion: "اضغط على منطقة",
    chooseRegion: "اختر منطقة وسترى هنا صورة أكبر بكثير لها.",
    chooseProvince: "اختر مقاطعة وسترى هنا صورة أكبر بكثير لها.",
    malvinas: "جزر فوكلاند (مالفيناس)",
    ariaArgentina: "خريطة تفاعلية للأرجنتين حسب المقاطعات",
    ariaItaly: "خريطة تفاعلية لإيطاليا حسب المناطق",
    ariaSicily: "خريطة تفاعلية لصقلية حسب المقاطعات",
    ariaCampania: "خريطة تفاعلية لكامبانيا حسب المقاطعات",
    mapOf: (n) => `خريطة ${n}`,
  },
  page: {
    breadcrumb: "المسار",
    map: "الخريطة",
    sections: "الأقسام",
    explore: "استكشف المحتوى",
    exploreProvinces: "استكشف المقاطعات التسع",
    exploreProvincesCampania: "استكشف المقاطعات الخمس",
    tabs: { flora: "النباتات", fauna: "الحيوانات", foods: "الطعام", tourism: "السياحة", curiosity: "التاريخ" },
    loadingPhoto: "جارٍ تحميل الصورة…",
    loadingPhotoHint: "لحظة من فضلك، نبحث عن الصورة",
    inPreparation: "المحتوى قيد الإعداد.",
    learnMore: "اعرف المزيد",
    backTo: (n) => `العودة إلى ${n}`,
    empty: {
      fauna: "نحن نجهّز حيوانات هذه المنطقة. في الأثناء يمكنك استكشاف الأقسام الأخرى.",
      flora: "لم تُضَف بعد صور نباتات هذه المنطقة. ستكون متاحة قريبًا.",
      comidas: "يجري تحميل الأطباق المشهورة في هذه المنطقة. عُد قريبًا لتكتشفها.",
      historia: "نحن نجهّز المزيد من تاريخ هذه المنطقة لتواصل التعلّم.",
      turismo: "نحن نجهّز الوجهات السياحية في هذه المنطقة. ستتمكن من رؤيتها قريبًا!",
    },
  },
};

export const UI: Record<Locale, UiCopy> = { es: ES, en: EN, it: IT, ru: RU, ar: AR };
