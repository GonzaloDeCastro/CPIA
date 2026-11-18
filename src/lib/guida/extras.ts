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
      fr: "Parcours de Paternò",
      ar: "مسار باتيرنو",
      ro: "Traseul Paternò",
    },
    placeIds: ["G-001", "G-002"],
  },
  {
    id: "giarre",
    name: {
      it: "Percorso di Giarre",
      es: "Recorrido de Giarre",
      en: "Giarre route",
      fr: "Parcours de Giarre",
      ar: "مسار جاري",
      ro: "Traseul Giarre",
    },
    placeIds: ["G-003", "G-004"],
  },
  {
    id: "etna",
    name: {
      it: "Percorso dell'Etna",
      es: "Recorrido del Etna",
      en: "Etna route",
      fr: "Parcours de l'Etna",
      ar: "مسار إتنا",
      ro: "Traseul Etna",
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
  gallery: { title: string; hint: string; close: string; prev: string; next: string };
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
    gallery: {
      title: "Benessere a Catania",
      hint: "Alberi, boschi, agrumi e l'Etna: luoghi per stare bene all'aria aperta. Tocca una foto per ingrandirla.",
      close: "Chiudi",
      prev: "Foto precedente",
      next: "Foto successiva",
    },
  },
  es: {
    routes: "Recorridos",
    allRoutes: "Todos los lugares",
    directions: "Cómo llegar",
    a11y: { label: "Accesibilidad", bigText: "Texto grande", contrast: "Alto contraste" },
    projectLink: "El proyecto",
    phrasesTitle: "Frases útiles",
    phrasesHint: "Tocá ▶ para escuchar la frase en italiano.",
    gallery: {
      title: "Bienestar en Catania",
      hint: "Árboles, bosques, cítricos y el Etna: lugares para sentirse bien al aire libre. Tocá una foto para agrandarla.",
      close: "Cerrar",
      prev: "Foto anterior",
      next: "Foto siguiente",
    },
  },
  en: {
    routes: "Routes",
    allRoutes: "All places",
    directions: "Get directions",
    a11y: { label: "Accessibility", bigText: "Large text", contrast: "High contrast" },
    projectLink: "The project",
    phrasesTitle: "Useful phrases",
    phrasesHint: "Tap ▶ to hear the phrase in Italian.",
    gallery: {
      title: "Wellbeing in Catania",
      hint: "Trees, woods, citrus groves and Etna: places to feel good outdoors. Tap a photo to enlarge it.",
      close: "Close",
      prev: "Previous photo",
      next: "Next photo",
    },
  },
  fr: {
    routes: "Parcours",
    allRoutes: "Tous les lieux",
    directions: "Comment y aller",
    a11y: { label: "Accessibilité", bigText: "Grand texte", contrast: "Contraste élevé" },
    projectLink: "Le projet",
    phrasesTitle: "Phrases utiles",
    phrasesHint: "Touchez ▶ pour écouter la phrase en italien.",
    gallery: {
      title: "Bien-être à Catane",
      hint: "Arbres, forêts, agrumes et l'Etna : des lieux pour se sentir bien en plein air. Touchez une photo pour l'agrandir.",
      close: "Fermer",
      prev: "Photo précédente",
      next: "Photo suivante",
    },
  },
  ar: {
    routes: "المسارات",
    allRoutes: "كل الأماكن",
    directions: "كيف تصل",
    a11y: { label: "سهولة الوصول", bigText: "نص كبير", contrast: "تباين عالٍ" },
    projectLink: "عن المشروع",
    phrasesTitle: "عبارات مفيدة",
    phrasesHint: "اضغط ▶ لسماع العبارة بالإيطالية.",
    gallery: {
      title: "العافية في كاتانيا",
      hint: "أشجار وغابات وحمضيات وجبل إتنا: أماكن للشعور بالراحة في الهواء الطلق. اضغط على صورة لتكبيرها.",
      close: "إغلاق",
      prev: "الصورة السابقة",
      next: "الصورة التالية",
    },
  },
  ro: {
    routes: "Trasee",
    allRoutes: "Toate locurile",
    directions: "Cum ajungi",
    a11y: { label: "Accesibilitate", bigText: "Text mare", contrast: "Contrast ridicat" },
    projectLink: "Proiectul",
    phrasesTitle: "Fraze utile",
    phrasesHint: "Atinge ▶ pentru a auzi fraza în italiană.",
    gallery: {
      title: "Bunăstare la Catania",
      hint: "Copaci, păduri, citrice și Etna: locuri în care te simți bine în aer liber. Atinge o fotografie pentru a o mări.",
      close: "Închide",
      prev: "Fotografia anterioară",
      next: "Fotografia următoare",
    },
  },
};

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
  fr: {
    title: "Entre fleurs d'oranger et goûters",
    lead: "Un guide numérique multilingue des lieux de Giarre, Paternò et de l'Etna, réalisé par les élèves du CPIA Catania 2 pour les personnes qui viennent d'arriver et parlent encore peu l'italien. Trois thèmes : sport, art et bien-être.",
    back: "Retour à la carte",
    flowTitle: "Comment nous travaillons : IA + personnes",
    flow: [
      { step: "1. Sur le terrain", text: "Les élèves visitent les lieux, prennent des photos et interviewent les personnes de référence." },
      { step: "2. Intelligence artificielle", text: "L'IA transcrit, simplifie le texte en italien facile (A2) et prépare des brouillons dans les autres langues." },
      { step: "3. Relecture humaine", text: "Les enseignants valident l'italien. Des élèves de langue maternelle et des médiateurs vérifient les traductions et les audios." },
      { step: "4. Publication", text: "Seules les fiches marquées « Approuvé » apparaissent dans le guide." },
    ],
    rule: "Règle d'or : l'IA aide, mais c'est toujours une personne qui a le dernier mot.",
    criteriaTitle: "Pourquoi ce projet",
    criteria: [
      { name: "Appartenance", text: "Les contenus naissent des voix et des lieux de la communauté : les élèves sont auteurs, pas spectateurs." },
      { name: "Créativité", text: "Un guide qui parle plusieurs langues, avec voix, carte et parcours, et un titre qui raconte la rencontre méditerranéenne." },
      { name: "Impact", text: "Il aide les nouveaux arrivants à trouver des lieux pour se sentir bien, faire du sport et découvrir l'art, sans barrières de langue." },
      { name: "Durabilité", text: "Des outils gratuits et ouverts, aucun serveur à payer, et de nouveaux lieux ajoutés depuis un simple tableau : le projet peut continuer après le hackathon." },
    ],
    toolsTitle: "Outils",
    tools: "Site statique sur GitHub Pages, carte OpenStreetMap, voix de l'appareil pour l'audio, contraste élevé et grand texte pour l'accessibilité.",
    qrTitle: "Partager le guide",
    qrText: "Scannez le code avec votre téléphone pour ouvrir le guide.",
    credit: "CPIA Catania 2 – Giarre et Paternò · EPALE Edu Hack 2026",
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
  ro: {
    title: "Între flori de portocal și gustări",
    lead: "Un ghid digital plurilingv al locurilor din Giarre, Paternò și de pe Etna, realizat de cursanții CPIA Catania 2 pentru cei care tocmai au sosit și vorbesc încă puțin italiană. Trei teme: sport, artă și bunăstare.",
    back: "Înapoi la hartă",
    flowTitle: "Cum lucrăm: IA + oameni",
    flow: [
      { step: "1. Pe teren", text: "Cursanții vizitează locurile, fac fotografii și intervievează persoanele de referință." },
      { step: "2. Inteligența artificială", text: "IA transcrie, simplifică textul în italiană ușoară (A2) și pregătește ciorne în celelalte limbi." },
      { step: "3. Revizuire umană", text: "Profesorii validează italiana. Cursanți vorbitori nativi și mediatori verifică traducerile și sunetul." },
      { step: "4. Publicare", text: "Apar în ghid doar fișele marcate „Aprobat”." },
    ],
    rule: "Regula de aur: IA ajută, dar ultimul cuvânt îl are întotdeauna o persoană.",
    criteriaTitle: "De ce acest proiect",
    criteria: [
      { name: "Apartenență", text: "Conținutul se naște din vocile și locurile comunității: cursanții sunt autori, nu spectatori." },
      { name: "Creativitate", text: "Un ghid care vorbește mai multe limbi, cu voce, hartă și trasee, și un titlu care spune povestea întâlnirii mediteraneene." },
      { name: "Impact", text: "Îi ajută pe cei nou-veniți să găsească locuri în care să se simtă bine, să facă sport și să descopere arta, fără bariere de limbă." },
      { name: "Sustenabilitate", text: "Instrumente gratuite și deschise, fără server de plătit, iar locurile noi se adaugă dintr-un simplu tabel: poate continua și după hackathon." },
    ],
    toolsTitle: "Instrumente",
    tools: "Site static pe GitHub Pages, hartă OpenStreetMap, vocea dispozitivului pentru sunet, contrast ridicat și text mare pentru accesibilitate.",
    qrTitle: "Distribuie ghidul",
    qrText: "Scanează codul cu telefonul pentru a deschide ghidul.",
    credit: "CPIA Catania 2 – Giarre și Paternò · EPALE Edu Hack 2026",
  },
};
