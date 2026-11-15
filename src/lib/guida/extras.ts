import type { Locale } from "@/lib/i18n/locale";

type Tr = Record<Locale, string>;

/** Recorridos temáticos: unen varias fichas con una línea en el mapa. */
export type GuidaRoute = { id: string; name: Tr; placeIds: string[] };

export const GUIDA_ROUTES: GuidaRoute[] = [
  {
    id: "paterno",
    name: {
      it: "Percorso di Paternò",
      es: "Recorrido de Paternò",
      en: "Paternò route",
      ru: "Маршрут по Патерно",
      ar: "مسار باتيرنو",
    },
    placeIds: ["G-001", "G-002"],
  },
  {
    id: "giarre",
    name: {
      it: "Percorso di Giarre",
      es: "Recorrido de Giarre",
      en: "Giarre route",
      ru: "Маршрут по Джарре",
      ar: "مسار جاري",
    },
    placeIds: ["G-003", "G-004"],
  },
  {
    id: "etna",
    name: {
      it: "Percorso dell'Etna",
      es: "Recorrido del Etna",
      en: "Etna route",
      ru: "Маршрут по Этне",
      ar: "مسار إتنا",
    },
    placeIds: ["G-005", "G-006"],
  },
];

export type ExtrasCopy = {
  routes: string;
  allRoutes: string;
  directions: string;
  a11y: { label: string; bigText: string; contrast: string };
  projectLink: string;
  phrasesTitle: string;
  phrasesHint: string;
};

export const EXTRAS_COPY: Record<Locale, ExtrasCopy> = {
  it: {
    routes: "Percorsi",
    allRoutes: "Tutti i luoghi",
    directions: "Come arrivare",
    a11y: { label: "Accessibilità", bigText: "Testo grande", contrast: "Alto contrasto" },
    projectLink: "Il progetto",
    phrasesTitle: "Frasi utili",
    phrasesHint: "Tocca ▶ per sentire la frase in italiano.",
  },
  es: {
    routes: "Recorridos",
    allRoutes: "Todos los lugares",
    directions: "Cómo llegar",
    a11y: { label: "Accesibilidad", bigText: "Texto grande", contrast: "Alto contraste" },
    projectLink: "El proyecto",
    phrasesTitle: "Frases útiles",
    phrasesHint: "Tocá ▶ para escuchar la frase en italiano.",
  },
  en: {
    routes: "Routes",
    allRoutes: "All places",
    directions: "Get directions",
    a11y: { label: "Accessibility", bigText: "Large text", contrast: "High contrast" },
    projectLink: "The project",
    phrasesTitle: "Useful phrases",
    phrasesHint: "Tap ▶ to hear the phrase in Italian.",
  },
  ru: {
    routes: "Маршруты",
    allRoutes: "Все места",
    directions: "Как добраться",
    a11y: { label: "Доступность", bigText: "Крупный текст", contrast: "Высокий контраст" },
    projectLink: "О проекте",
    phrasesTitle: "Полезные фразы",
    phrasesHint: "Нажмите ▶, чтобы услышать фразу по-итальянски.",
  },
  ar: {
    routes: "المسارات",
    allRoutes: "كل الأماكن",
    directions: "كيف تصل",
    a11y: { label: "سهولة الوصول", bigText: "نص كبير", contrast: "تباين عالٍ" },
    projectLink: "عن المشروع",
    phrasesTitle: "عبارات مفيدة",
    phrasesHint: "اضغط ▶ لسماع العبارة بالإيطالية.",
  },
};

export type Phrase = { it: string; tr: Tr };

export const PHRASES: Phrase[] = [
  {
    it: "Buongiorno!",
    tr: { it: "Buongiorno!", es: "¡Buen día!", en: "Good morning!", ru: "Доброе утро!", ar: "صباح الخير!" },
  },
  {
    it: "Grazie mille!",
    tr: { it: "Grazie mille!", es: "¡Muchas gracias!", en: "Thank you very much!", ru: "Большое спасибо!", ar: "شكرًا جزيلًا!" },
  },
  {
    it: "Dove si trova questo posto?",
    tr: {
      it: "Dove si trova questo posto?",
      es: "¿Dónde queda este lugar?",
      en: "Where is this place?",
      ru: "Где находится это место?",
      ar: "أين يقع هذا المكان؟",
    },
  },
  {
    it: "Quanto costa?",
    tr: { it: "Quanto costa?", es: "¿Cuánto cuesta?", en: "How much does it cost?", ru: "Сколько это стоит?", ar: "كم السعر؟" },
  },
  {
    it: "Può parlare più lentamente, per favore?",
    tr: {
      it: "Può parlare più lentamente, per favore?",
      es: "¿Puede hablar más despacio, por favor?",
      en: "Could you speak more slowly, please?",
      ru: "Можете говорить помедленнее, пожалуйста?",
      ar: "هل يمكنك التحدث ببطء أكثر من فضلك؟",
    },
  },
  {
    it: "Ho bisogno di aiuto.",
    tr: { it: "Ho bisogno di aiuto.", es: "Necesito ayuda.", en: "I need help.", ru: "Мне нужна помощь.", ar: "أحتاج إلى مساعدة." },
  },
];

/** Contenido de la página "Il progetto". */
export type ProjectCopy = {
  title: string;
  lead: string;
  back: string;
  flowTitle: string;
  flow: { step: string; text: string }[];
  rule: string;
  criteriaTitle: string;
  criteria: { name: string; text: string }[];
  toolsTitle: string;
  tools: string;
  qrTitle: string;
  qrText: string;
  credit: string;
};

export const PROJECT_COPY: Record<Locale, ProjectCopy> = {
  it: {
    title: "Tra zagare e merendine",
    lead: "Una guida digitale plurilingue ai luoghi di Giarre, Paternò e dell'Etna, fatta dagli studenti del CPIA Catania 2 per chi arriva e parla ancora poco italiano. Tre temi: sport, arte e benessere.",
    back: "Torna alla mappa",
    flowTitle: "Come lavoriamo: IA + persone",
    flow: [
      { step: "1. Sul campo", text: "Gli studenti visitano i luoghi, scattano foto e intervistano i referenti." },
      { step: "2. Intelligenza artificiale", text: "L'IA trascrive, semplifica il testo in italiano facile (A2) e prepara le bozze nelle altre lingue." },
      { step: "3. Revisione umana", text: "I docenti validano l'italiano. Studenti madrelingua e mediatori controllano traduzioni e audio." },
      { step: "4. Pubblicazione", text: "Solo le schede segnate come «Approvato» compaiono nella guida." },
    ],
    rule: "Regola d'oro: l'IA aiuta, ma l'ultima parola è sempre di una persona.",
    criteriaTitle: "Perché questo progetto",
    criteria: [
      { name: "Appartenenza", text: "I contenuti nascono dalle voci e dai luoghi della comunità: gli studenti sono autori, non spettatori." },
      { name: "Creatività", text: "Una guida che parla tante lingue, con voce, mappa e percorsi, e un titolo che racconta l'incontro mediterraneo." },
      { name: "Impatto", text: "Aiuta chi è appena arrivato a trovare luoghi per stare bene, fare sport e conoscere l'arte, senza barriere linguistiche." },
      { name: "Sostenibilità", text: "Strumenti gratuiti e aperti, nessun server da pagare, nuovi luoghi aggiunti da una semplice tabella: si può continuare anche dopo il progetto." },
    ],
    toolsTitle: "Strumenti",
    tools: "Sito statico su GitHub Pages, mappa OpenStreetMap, voce del dispositivo per l'audio, Alto contrasto e testo grande per l'accessibilità.",
    qrTitle: "Condividi la guida",
    qrText: "Inquadra il codice con il telefono per aprire la guida.",
    credit: "CPIA Catania 2 – Giarre e Paternò · EPALE Edu Hack 2026",
  },
  es: {
    title: "Entre azahares y meriendas",
    lead: "Una guía digital plurilingüe de los lugares de Giarre, Paternò y el Etna, hecha por estudiantes del CPIA Catania 2 para quienes llegan y hablan todavía poco italiano. Tres temas: deporte, arte y bienestar.",
    back: "Volver al mapa",
    flowTitle: "Cómo trabajamos: IA + personas",
    flow: [
      { step: "1. En el territorio", text: "Los estudiantes visitan los lugares, sacan fotos y entrevistan a los referentes." },
      { step: "2. Inteligencia artificial", text: "La IA transcribe, simplifica el texto a italiano fácil (A2) y prepara borradores en otros idiomas." },
      { step: "3. Revisión humana", text: "Los docentes validan el italiano. Estudiantes nativos y mediadores revisan traducciones y audios." },
      { step: "4. Publicación", text: "Solo las fichas marcadas como «Aprobado» aparecen en la guía." },
    ],
    rule: "Regla de oro: la IA ayuda, pero la última palabra siempre la tiene una persona.",
    criteriaTitle: "Por qué este proyecto",
    criteria: [
      { name: "Pertenencia", text: "Los contenidos nacen de las voces y los lugares de la comunidad: los estudiantes son autores, no espectadores." },
      { name: "Creatividad", text: "Una guía que habla muchos idiomas, con voz, mapa y recorridos, y un título que cuenta el encuentro mediterráneo." },
      { name: "Impacto", text: "Ayuda a quien acaba de llegar a encontrar lugares para estar bien, hacer deporte y conocer el arte, sin barreras de idioma." },
      { name: "Sostenibilidad", text: "Herramientas gratuitas y abiertas, sin servidor que pagar, y nuevos lugares agregados desde una simple tabla: se puede seguir después del proyecto." },
    ],
    toolsTitle: "Herramientas",
    tools: "Sitio estático en GitHub Pages, mapa de OpenStreetMap, voz del dispositivo para el audio, alto contraste y texto grande para la accesibilidad.",
    qrTitle: "Compartí la guía",
    qrText: "Escaneá el código con el teléfono para abrir la guía.",
    credit: "CPIA Catania 2 – Giarre y Paternò · EPALE Edu Hack 2026",
  },
  en: {
    title: "Between orange blossoms and snacks",
    lead: "A multilingual digital guide to places in Giarre, Paternò and Etna, made by students of CPIA Catania 2 for people who have just arrived and still speak little Italian. Three themes: sport, art and wellbeing.",
    back: "Back to the map",
    flowTitle: "How we work: AI + people",
    flow: [
      { step: "1. In the field", text: "Students visit the places, take photos and interview local contacts." },
      { step: "2. Artificial intelligence", text: "AI transcribes, simplifies the text into easy Italian (A2) and drafts the other languages." },
      { step: "3. Human review", text: "Teachers validate the Italian. Native-speaker students and mediators check translations and audio." },
      { step: "4. Publishing", text: "Only cards marked “Approved” appear in the guide." },
    ],
    rule: "Golden rule: AI helps, but a person always has the last word.",
    criteriaTitle: "Why this project",
    criteria: [
      { name: "Belonging", text: "The content comes from the voices and places of the community: students are authors, not spectators." },
      { name: "Creativity", text: "A guide that speaks many languages, with voice, map and routes, and a title that tells the story of the Mediterranean meeting." },
      { name: "Impact", text: "It helps newcomers find places to feel well, play sport and discover art, without language barriers." },
      { name: "Sustainability", text: "Free, open tools, no server to pay for, and new places added from a simple table: it can keep going after the project." },
    ],
    toolsTitle: "Tools",
    tools: "Static site on GitHub Pages, OpenStreetMap map, the device voice for audio, high contrast and large text for accessibility.",
    qrTitle: "Share the guide",
    qrText: "Scan the code with your phone to open the guide.",
    credit: "CPIA Catania 2 – Giarre and Paternò · EPALE Edu Hack 2026",
  },
  ru: {
    title: "Между цветами апельсина и перекусами",
    lead: "Многоязычный цифровой путеводитель по местам Джарре, Патерно и Этны, созданный студентами CPIA Catania 2 для тех, кто только приехал и ещё плохо говорит по-итальянски. Три темы: спорт, искусство и здоровье.",
    back: "Назад к карте",
    flowTitle: "Как мы работаем: ИИ + люди",
    flow: [
      { step: "1. На месте", text: "Студенты посещают места, фотографируют и берут интервью у местных представителей." },
      { step: "2. Искусственный интеллект", text: "ИИ расшифровывает записи, упрощает текст до лёгкого итальянского (A2) и готовит черновики на других языках." },
      { step: "3. Проверка людьми", text: "Преподаватели проверяют итальянский. Студенты — носители языка и медиаторы проверяют переводы и аудио." },
      { step: "4. Публикация", text: "В путеводителе появляются только карточки со статусом «Одобрено»." },
    ],
    rule: "Золотое правило: ИИ помогает, но последнее слово всегда за человеком.",
    criteriaTitle: "Почему этот проект",
    criteria: [
      { name: "Принадлежность", text: "Материалы рождаются из голосов и мест сообщества: студенты — авторы, а не зрители." },
      { name: "Креативность", text: "Путеводитель на многих языках с голосом, картой и маршрутами и названием, которое рассказывает о средиземноморской встрече." },
      { name: "Влияние", text: "Помогает новоприбывшим находить места для здоровья, спорта и знакомства с искусством без языковых барьеров." },
      { name: "Устойчивость", text: "Бесплатные открытые инструменты, никаких платных серверов, новые места добавляются из простой таблицы: проект можно продолжать и после хакатона." },
    ],
    toolsTitle: "Инструменты",
    tools: "Статический сайт на GitHub Pages, карта OpenStreetMap, голос устройства для аудио, высокий контраст и крупный текст для доступности.",
    qrTitle: "Поделиться путеводителем",
    qrText: "Наведите камеру телефона на код, чтобы открыть путеводитель.",
    credit: "CPIA Catania 2 – Джарре и Патерно · EPALE Edu Hack 2026",
  },
  ar: {
    title: "بين زهر البرتقال والوجبات الخفيفة",
    lead: "دليل رقمي متعدد اللغات لأماكن جاري وباتيرنو وإتنا، أنجزه طلاب CPIA Catania 2 لمن وصل حديثًا ولا يتحدث الإيطالية جيدًا بعد. ثلاثة محاور: الرياضة والفن والعافية.",
    back: "العودة إلى الخريطة",
    flowTitle: "كيف نعمل: الذكاء الاصطناعي + الناس",
    flow: [
      { step: "١. في الميدان", text: "يزور الطلاب الأماكن ويلتقطون الصور ويجرون مقابلات مع المسؤولين المحليين." },
      { step: "٢. الذكاء الاصطناعي", text: "يفرّغ الذكاء الاصطناعي التسجيلات ويبسّط النص إلى إيطالية سهلة (A2) ويعدّ مسودات باللغات الأخرى." },
      { step: "٣. مراجعة بشرية", text: "يتحقق المعلمون من الإيطالية، ويراجع الطلاب الناطقون بلغاتهم والوسطاء الثقافيون الترجمات والتسجيلات الصوتية." },
      { step: "٤. النشر", text: "تظهر في الدليل فقط البطاقات المصنفة «معتمدة»." },
    ],
    rule: "القاعدة الذهبية: الذكاء الاصطناعي يساعد، لكن الكلمة الأخيرة دائمًا لإنسان.",
    criteriaTitle: "لماذا هذا المشروع",
    criteria: [
      { name: "الانتماء", text: "ينبع المحتوى من أصوات المجتمع وأماكنه: الطلاب مؤلفون وليسوا متفرجين." },
      { name: "الإبداع", text: "دليل يتحدث لغات كثيرة، بالصوت والخريطة والمسارات، وعنوان يحكي لقاء المتوسط." },
      { name: "الأثر", text: "يساعد القادمين الجدد على إيجاد أماكن للعافية والرياضة والتعرف على الفن دون حواجز لغوية." },
      { name: "الاستدامة", text: "أدوات مجانية ومفتوحة، بلا خادم مدفوع، وتُضاف الأماكن الجديدة من جدول بسيط: يمكن الاستمرار بعد المشروع." },
    ],
    toolsTitle: "الأدوات",
    tools: "موقع ثابت على GitHub Pages، وخريطة OpenStreetMap، وصوت الجهاز للتسجيلات، وتباين عالٍ ونص كبير لسهولة الوصول.",
    qrTitle: "شارك الدليل",
    qrText: "امسح الرمز بهاتفك لفتح الدليل.",
    credit: "CPIA Catania 2 – جاري وباتيرنو · EPALE Edu Hack 2026",
  },
};
