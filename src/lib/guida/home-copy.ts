import type { Locale } from "@/lib/i18n/locale";

/** Enlaces oficiales de "Info utili". `phraseGroup` apunta a las frases útiles de esa oficina. */
export const INFO_LINKS = [
  { id: "questura", url: "https://questure.poliziadistato.it/it/Catania", phraseGroup: "questura" },
  { id: "asp", url: "https://www.aspct.it", phraseGroup: "asp" },
  { id: "entrate", url: "https://www.agenziaentrate.gov.it", phraseGroup: "entrate" },
] as const;

export const SCHOOL_URL = "https://www.cpiacatania2.edu.it";

/** Ente di formazione che supporta il CPIA: dopo la licenza media si prosegue con SE.F.O.R. */
export const SEFOR_URL = "https://sefor.org";

/**
 * Equipos de la sección Sport. `url: null` = enlace de EJEMPLO (todavía no hay equipo real):
 * el botón muestra un aviso en lugar de abrir algo. Cuando tengan el enlace real, se completa acá.
 */
export const SPORT_TEAMS: { id: "football" | "volley" | "basket" | "tennis"; emoji: string; url: string | null }[] = [
  { id: "football", emoji: "⚽", url: null },
  { id: "volley", emoji: "🏐", url: null },
  { id: "basket", emoji: "🏀", url: null },
  { id: "tennis", emoji: "🎾", url: null },
];

export type NeedId = "docs" | "phrases" | "sport" | "art" | "wellbeing" | "school";
export const NEED_ORDER: Record<number, NeedId[]> = {
  0: ["school", "phrases", "docs", "sport", "wellbeing", "art"],
  1: ["docs", "phrases", "school", "sport", "wellbeing", "art"],
  2: ["art", "wellbeing", "sport", "phrases", "docs", "school"],
};

type Three<T> = [T, T, T];

export type HomeCopy = {
  welcome: string;
  lead: string;
  back: string;
  openMap: string;
  assistant: {
    title: string;
    q1: string;
    profiles: Three<string>;
    greetings: Three<string>;
    q2: string;
    needs: Record<NeedId, string>;
    restart: string;
  };
  wheel: { title: string; info: string; sport: string; art: string };
  school: { title: string; text: string; provisional: string; site: string; next: { question: string; text: string; cta: string } };
  info: {
    title: string;
    intro: string;
    open: string;
    phrases: string;
    cards: Three<{ name: string; desc: string }>;
  };
  sport: {
    title: string;
    intro: string;
    footballQ: string;
    footballCta: string;
    othersTitle: string;
    join: string;
    exampleBadge: string;
    exampleMsg: string;
    desc: Record<"football" | "volley" | "basket" | "tennis", { name: string; desc: string }>;
    gallery: string;
    form: Record<"title" | "name" | "contact" | "sport" | "submit" | "saved" | "listTitle" | "remove" | "note" | "missing", string>;
  };
};

export const HOME_COPY: Record<Locale, HomeCopy> = {
  it: {
    welcome: "Benvenuti alle pendici dell’Etna:",
    lead: "Qui trovi tutte le informazioni utili per chi arriva in Sicilia. Senza dimenticare sport e benessere, arte e natura, con parole semplici, audio e traduzioni nella tua lingua.",
    back: "Torna alla home",
    openMap: "Apri la mappa dei luoghi",
    assistant: {
      title: "Ti aiuto io!",
      q1: "Chi sei?",
      profiles: ["Sono uno studente del CPIA", "Sono nuovo in città", "Sono un visitatore"],
      greetings: ["Benvenuto! Studiare insieme è più bello.", "Benvenuto! Ti aiuto a orientarti.", "Benvenuto! Scopri il territorio."],
      q2: "Di cosa hai bisogno?",
      needs: {
        docs: "Documenti e uffici",
        phrases: "Frasi utili con audio",
        sport: "Sport e squadre",
        art: "Arte e natura",
        wellbeing: "Benessere",
        school: "La mia scuola",
      },
      restart: "Ricomincia",
    },
    wheel: { title: "Scegli una categoria", info: "Info utili", sport: "Sport e benessere", art: "Arte e natura" },
    school: {
      title: "Il nostro CPIA",
      text: "Il CPIA Catania 2 è la scuola pubblica per gli adulti della provincia di Catania: si impara l'italiano, si prende il diploma e si incontrano persone da tutto il mondo.",
      provisional: "Testo provvisorio: lo scriveranno i docenti.",
      site: "Sito della scuola",
      next: { question: "E una volta conseguita la licenza media?", text: "Prosegui la tua formazione con SE.F.O.R.", cta: "Vai al sito di SE.F.O.R." },
    },
    info: {
      title: "Info utili",
      intro: "I siti ufficiali degli uffici che servono di più. Per ogni ufficio trovi anche le frasi utili con audio.",
      open: "Vai al sito ufficiale",
      phrases: "Frasi utili per questo ufficio",
      cards: [
        { name: "Questura di Catania", desc: "Permesso di soggiorno e documenti per gli stranieri." },
        { name: "ASP di Catania", desc: "Salute: tessera sanitaria, medico di base, vaccinazioni." },
        { name: "Agenzia delle Entrate", desc: "Codice fiscale, tasse e documenti fiscali." },
      ],
    },
    sport: {
      title: "Sport",
      intro: "Muoversi fa bene al corpo e aiuta a fare amicizia.",
      footballQ: "Ti piace il calcio?",
      footballCta: "Clicca qui e unisciti al team!",
      othersTitle: "Altri sport",
      join: "Unisciti",
      exampleBadge: "Link di esempio",
      exampleMsg: "Questo è un link di esempio: presto ci sarà il contatto della squadra.",
      desc: {
        football: { name: "Calcio", desc: "Una squadra aperta a tutti, ogni settimana." },
        volley: { name: "Pallavolo", desc: "Si gioca in squadra, anche per principianti." },
        basket: { name: "Basket", desc: "Palleggio, tiro e tanto divertimento." },
        tennis: { name: "Tennis", desc: "Uno contro uno, oppure in doppio." },
      },
      gallery: "Guarda le foto e i luoghi sulla mappa",
      form: { title: "Iscriviti a una squadra", name: "Nome", contact: "Telefono o email", sport: "Sport", submit: "Iscrivimi", saved: "Iscrizione salvata! Ti contatteranno presto.", listTitle: "Iscrizioni salvate su questo dispositivo", remove: "Elimina", note: "Prova dimostrativa: i dati restano solo su questo dispositivo.", missing: "Scrivi il tuo nome e un contatto." },
    },
  },
  es: {
    welcome: "Bienvenidos a las laderas del Etna:",
    lead: "Acá encontrás toda la información útil para quien llega a Sicilia. Sin olvidar el deporte y el bienestar, el arte y la naturaleza, con palabras simples, audio y traducciones a tu idioma.",
    back: "Volver al inicio",
    openMap: "Abrir el mapa de lugares",
    assistant: {
      title: "¡Te ayudo yo!",
      q1: "¿Quién sos?",
      profiles: ["Soy estudiante del CPIA", "Soy nuevo en la ciudad", "Soy visitante"],
      greetings: ["¡Bienvenido! Estudiar juntos es más lindo.", "¡Bienvenido! Te ayudo a orientarte.", "¡Bienvenido! Descubrí el territorio."],
      q2: "¿Qué necesitás?",
      needs: {
        docs: "Documentos y oficinas",
        phrases: "Frases útiles con audio",
        sport: "Deporte y equipos",
        art: "Arte y naturaleza",
        wellbeing: "Bienestar",
        school: "Mi escuela",
      },
      restart: "Empezar de nuevo",
    },
    wheel: { title: "Elegí una categoría", info: "Info útil", sport: "Deporte y bienestar", art: "Arte y naturaleza" },
    school: {
      title: "Nuestro CPIA",
      text: "El CPIA Catania 2 es la escuela pública para adultos de la provincia de Catania: se aprende italiano, se obtiene el diploma y se conoce gente de todo el mundo.",
      provisional: "Texto provisorio: lo escribirán los docentes.",
      site: "Sitio de la escuela",
      next: { question: "¿Y una vez que obtengas la licenza media?", text: "Seguí tu formación con SE.F.O.R.", cta: "Ir al sitio de SE.F.O.R." },
    },
    info: {
      title: "Info útil",
      intro: "Los sitios oficiales de las oficinas que más se necesitan. Para cada una también hay frases útiles con audio.",
      open: "Ir al sitio oficial",
      phrases: "Frases útiles para esta oficina",
      cards: [
        { name: "Questura de Catania", desc: "Permiso de residencia y documentos para extranjeros." },
        { name: "ASP de Catania", desc: "Salud: tarjeta sanitaria, médico de cabecera, vacunas." },
        { name: "Agenzia delle Entrate", desc: "Código fiscal, impuestos y documentos fiscales." },
      ],
    },
    sport: {
      title: "Deporte",
      intro: "Moverse hace bien al cuerpo y ayuda a hacer amigos.",
      footballQ: "¿Te gusta el fútbol?",
      footballCta: "¡Hacé clic acá y sumate al equipo!",
      othersTitle: "Otros deportes",
      join: "Sumate",
      exampleBadge: "Enlace de ejemplo",
      exampleMsg: "Este es un enlace de ejemplo: pronto estará el contacto del equipo.",
      desc: {
        football: { name: "Fútbol", desc: "Un equipo abierto a todos, cada semana." },
        volley: { name: "Vóley", desc: "Se juega en equipo, también para principiantes." },
        basket: { name: "Básquet", desc: "Pique, tiro y mucha diversión." },
        tennis: { name: "Tenis", desc: "Uno contra uno, o en dobles." },
      },
      gallery: "Mirá las fotos y los lugares en el mapa",
      form: { title: "Anotate en un equipo", name: "Nombre", contact: "Teléfono o email", sport: "Deporte", submit: "Anotarme", saved: "¡Inscripción guardada! Pronto te van a contactar.", listTitle: "Inscripciones guardadas en este dispositivo", remove: "Borrar", note: "Prueba demostrativa: los datos quedan solo en este dispositivo.", missing: "Escribí tu nombre y un contacto." },
    },
  },
  en: {
    welcome: "Welcome to the slopes of Mount Etna:",
    lead: "Here you will find all the useful information for those arriving in Sicily. Without forgetting sport and wellbeing, art and nature, with simple words, audio and translations in your language.",
    back: "Back to home",
    openMap: "Open the map of places",
    assistant: {
      title: "I can help!",
      q1: "Who are you?",
      profiles: ["I am a CPIA student", "I am new in town", "I am a visitor"],
      greetings: ["Welcome! Studying together is better.", "Welcome! I will help you find your way.", "Welcome! Discover the area."],
      q2: "What do you need?",
      needs: {
        docs: "Documents and offices",
        phrases: "Useful phrases with audio",
        sport: "Sport and teams",
        art: "Art and nature",
        wellbeing: "Wellbeing",
        school: "My school",
      },
      restart: "Start again",
    },
    wheel: { title: "Choose a category", info: "Useful info", sport: "Sport and wellbeing", art: "Art and nature" },
    school: {
      title: "Our CPIA",
      text: "CPIA Catania 2 is the public school for adults in the province of Catania: you learn Italian, get your diploma and meet people from all over the world.",
      provisional: "Provisional text: the teachers will write it.",
      site: "School website",
      next: { question: "And once you have your middle school diploma (licenza media)?", text: "Continue your training with SE.F.O.R.", cta: "Go to the SE.F.O.R. website" },
    },
    info: {
      title: "Useful info",
      intro: "The official websites of the offices you need most. For each office you also find useful phrases with audio.",
      open: "Go to the official website",
      phrases: "Useful phrases for this office",
      cards: [
        { name: "Questura di Catania (police headquarters)", desc: "Residence permit and documents for foreigners." },
        { name: "ASP di Catania (health authority)", desc: "Health: health card, family doctor, vaccinations." },
        { name: "Agenzia delle Entrate (tax office)", desc: "Tax code, taxes and tax documents." },
      ],
    },
    sport: {
      title: "Sport",
      intro: "Moving is good for your body and helps you make friends.",
      footballQ: "Do you like football?",
      footballCta: "Click here and join the team!",
      othersTitle: "Other sports",
      join: "Join",
      exampleBadge: "Example link",
      exampleMsg: "This is an example link: the team contact will be added soon.",
      desc: {
        football: { name: "Football", desc: "A team open to everyone, every week." },
        volley: { name: "Volleyball", desc: "A team game, beginners welcome." },
        basket: { name: "Basketball", desc: "Dribbling, shooting and lots of fun." },
        tennis: { name: "Tennis", desc: "One on one, or doubles." },
      },
      gallery: "See the photos and places on the map",
      form: { title: "Sign up for a team", name: "Name", contact: "Phone or email", sport: "Sport", submit: "Sign me up", saved: "Sign-up saved! They will contact you soon.", listTitle: "Sign-ups saved on this device", remove: "Delete", note: "Demo only: the data stays on this device.", missing: "Write your name and a contact." },
    },
  },
  fr: {
    welcome: "Bienvenue sur les pentes de l'Etna :",
    lead: "Tu trouves ici toutes les informations utiles pour ceux qui arrivent en Sicile. Sans oublier le sport et le bien-être, l'art et la nature, avec des mots simples, de l'audio et des traductions dans ta langue.",
    back: "Retour à l'accueil",
    openMap: "Ouvrir la carte des lieux",
    assistant: {
      title: "Je t'aide !",
      q1: "Qui es-tu ?",
      profiles: ["Je suis élève du CPIA", "Je suis nouveau en ville", "Je suis visiteur"],
      greetings: ["Bienvenue ! Étudier ensemble, c'est mieux.", "Bienvenue ! Je t'aide à t'orienter.", "Bienvenue ! Découvre le territoire."],
      q2: "De quoi as-tu besoin ?",
      needs: {
        docs: "Documents et bureaux",
        phrases: "Phrases utiles avec audio",
        sport: "Sport et équipes",
        art: "Art et nature",
        wellbeing: "Bien-être",
        school: "Mon école",
      },
      restart: "Recommencer",
    },
    wheel: { title: "Choisis une catégorie", info: "Infos utiles", sport: "Sport et bien-être", art: "Art et nature" },
    school: {
      title: "Notre CPIA",
      text: "Le CPIA Catania 2 est l'école publique pour adultes de la province de Catane : on apprend l'italien, on passe le diplôme et on rencontre des personnes du monde entier.",
      provisional: "Texte provisoire : les enseignants l'écriront.",
      site: "Site de l'école",
      next: { question: "Et une fois la licenza media obtenue ?", text: "Poursuivez votre formation avec SE.F.O.R.", cta: "Aller sur le site de SE.F.O.R." },
    },
    info: {
      title: "Infos utiles",
      intro: "Les sites officiels des bureaux les plus utiles. Pour chaque bureau, tu trouves aussi des phrases utiles avec audio.",
      open: "Aller au site officiel",
      phrases: "Phrases utiles pour ce bureau",
      cards: [
        { name: "Questura de Catane (préfecture de police)", desc: "Titre de séjour et documents pour les étrangers." },
        { name: "ASP de Catane (santé)", desc: "Santé : carte vitale, médecin traitant, vaccins." },
        { name: "Agenzia delle Entrate (impôts)", desc: "Code fiscal, impôts et documents fiscaux." },
      ],
    },
    sport: {
      title: "Sport",
      intro: "Bouger fait du bien au corps et aide à se faire des amis.",
      footballQ: "Tu aimes le football ?",
      footballCta: "Clique ici et rejoins l'équipe !",
      othersTitle: "Autres sports",
      join: "Rejoindre",
      exampleBadge: "Lien d'exemple",
      exampleMsg: "Ceci est un lien d'exemple : le contact de l'équipe sera bientôt ajouté.",
      desc: {
        football: { name: "Football", desc: "Une équipe ouverte à tous, chaque semaine." },
        volley: { name: "Volley-ball", desc: "Un jeu d'équipe, débutants bienvenus." },
        basket: { name: "Basket", desc: "Dribbles, tirs et beaucoup de plaisir." },
        tennis: { name: "Tennis", desc: "Un contre un, ou en double." },
      },
      gallery: "Voir les photos et les lieux sur la carte",
      form: { title: "Inscris-toi à une équipe", name: "Nom", contact: "Téléphone ou e-mail", sport: "Sport", submit: "M'inscrire", saved: "Inscription enregistrée ! On te contactera bientôt.", listTitle: "Inscriptions enregistrées sur cet appareil", remove: "Supprimer", note: "Simple démonstration : les données restent sur cet appareil.", missing: "Écris ton nom et un contact." },
    },
  },
  ar: {
    welcome: "أهلًا بكم على سفوح جبل إتنا:",
    lead: "تجد هنا كل المعلومات المفيدة لمن يصل إلى صقلية. دون أن ننسى الرياضة والعافية، والفن والطبيعة، بكلمات بسيطة وصوت وترجمات بلغتك.",
    back: "العودة إلى الرئيسية",
    openMap: "افتح خريطة الأماكن",
    assistant: {
      title: "أنا أساعدك!",
      q1: "من أنت؟",
      profiles: ["أنا طالب في CPIA", "أنا جديد في المدينة", "أنا زائر"],
      greetings: ["أهلاً بك! الدراسة معًا أجمل.", "أهلاً بك! سأساعدك على التعرف على المكان.", "أهلاً بك! اكتشف المنطقة."],
      q2: "ماذا تحتاج؟",
      needs: {
        docs: "الوثائق والمكاتب",
        phrases: "عبارات مفيدة بالصوت",
        sport: "الرياضة والفرق",
        art: "الفن والطبيعة",
        wellbeing: "العافية",
        school: "مدرستي",
      },
      restart: "ابدأ من جديد",
    },
    wheel: { title: "اختر فئة", info: "معلومات مفيدة", sport: "الرياضة والعافية", art: "الفن والطبيعة" },
    school: {
      title: "مدرستنا CPIA",
      text: "CPIA Catania 2 هي المدرسة العامة للكبار في مقاطعة كاتانيا: نتعلم الإيطالية ونحصل على الشهادة ونلتقي بأشخاص من كل العالم.",
      provisional: "نص مؤقت: سيكتبه المعلمون.",
      site: "موقع المدرسة",
      next: { question: "وبعد الحصول على شهادة الإعدادية (licenza media)؟", text: "تابع تكوينك مع SE.F.O.R.", cta: "اذهب إلى موقع SE.F.O.R." },
    },
    info: {
      title: "معلومات مفيدة",
      intro: "المواقع الرسمية للمكاتب الأكثر احتياجًا. لكل مكتب ستجد أيضًا عبارات مفيدة بالصوت.",
      open: "اذهب إلى الموقع الرسمي",
      phrases: "عبارات مفيدة لهذا المكتب",
      cards: [
        { name: "Questura di Catania (مديرية الشرطة)", desc: "تصريح الإقامة ووثائق الأجانب." },
        { name: "ASP di Catania (الصحة)", desc: "الصحة: البطاقة الصحية والطبيب والتطعيمات." },
        { name: "Agenzia delle Entrate (الضرائب)", desc: "الرقم الضريبي والضرائب والوثائق الضريبية." },
      ],
    },
    sport: {
      title: "الرياضة",
      intro: "الحركة مفيدة للجسم وتساعد على تكوين صداقات.",
      footballQ: "هل تحب كرة القدم؟",
      footballCta: "اضغط هنا وانضم إلى الفريق!",
      othersTitle: "رياضات أخرى",
      join: "انضم",
      exampleBadge: "رابط تجريبي",
      exampleMsg: "هذا رابط تجريبي: سيُضاف قريبًا رابط التواصل مع الفريق.",
      desc: {
        football: { name: "كرة القدم", desc: "فريق مفتوح للجميع كل أسبوع." },
        volley: { name: "الكرة الطائرة", desc: "لعبة جماعية، والمبتدئون مرحّب بهم." },
        basket: { name: "كرة السلة", desc: "تمرير وتسديد ومتعة كبيرة." },
        tennis: { name: "التنس", desc: "واحد ضد واحد أو زوجي." },
      },
      gallery: "شاهد الصور والأماكن على الخريطة",
      form: { title: "سجّل في فريق", name: "الاسم", contact: "الهاتف أو البريد الإلكتروني", sport: "الرياضة", submit: "سجّلني", saved: "تم حفظ التسجيل! سيتصلون بك قريبًا.", listTitle: "التسجيلات المحفوظة على هذا الجهاز", remove: "حذف", note: "تجربة فقط: تبقى البيانات على هذا الجهاز.", missing: "اكتب اسمك ووسيلة اتصال." },
    },
  },
  ro: {
    welcome: "Bun venit pe versanții Etnei:",
    lead: "Aici găsești toate informațiile utile pentru cei care ajung în Sicilia. Fără să uităm sportul și bunăstarea, arta și natura, cu cuvinte simple, audio și traduceri în limba ta.",
    back: "Înapoi la pagina principală",
    openMap: "Deschide harta locurilor",
    assistant: {
      title: "Te ajut eu!",
      q1: "Cine ești?",
      profiles: ["Sunt elev la CPIA", "Sunt nou în oraș", "Sunt vizitator"],
      greetings: ["Bine ai venit! Să învățăm împreună e mai frumos.", "Bine ai venit! Te ajut să te orientezi.", "Bine ai venit! Descoperă zona."],
      q2: "De ce ai nevoie?",
      needs: {
        docs: "Documente și birouri",
        phrases: "Fraze utile cu audio",
        sport: "Sport și echipe",
        art: "Artă și natură",
        wellbeing: "Bunăstare",
        school: "Școala mea",
      },
      restart: "De la început",
    },
    wheel: { title: "Alege o categorie", info: "Info utile", sport: "Sport și bunăstare", art: "Artă și natură" },
    school: {
      title: "CPIA-ul nostru",
      text: "CPIA Catania 2 este școala publică pentru adulți din provincia Catania: înveți italiana, iei diploma și cunoști oameni din toată lumea.",
      provisional: "Text provizoriu: îl vor scrie profesorii.",
      site: "Site-ul școlii",
      next: { question: "Și după ce obții diploma de gimnaziu (licenza media)?", text: "Continuă-ți formarea cu SE.F.O.R.", cta: "Mergi la site-ul SE.F.O.R." },
    },
    info: {
      title: "Info utile",
      intro: "Site-urile oficiale ale birourilor de care ai cel mai des nevoie. Pentru fiecare birou găsești și fraze utile cu audio.",
      open: "Mergi la site-ul oficial",
      phrases: "Fraze utile pentru acest birou",
      cards: [
        { name: "Questura di Catania (poliția)", desc: "Permis de ședere și documente pentru străini." },
        { name: "ASP di Catania (sănătate)", desc: "Sănătate: card de sănătate, medic de familie, vaccinuri." },
        { name: "Agenzia delle Entrate (fisc)", desc: "Cod fiscal, taxe și documente fiscale." },
      ],
    },
    sport: {
      title: "Sport",
      intro: "Mișcarea face bine corpului și ajută să-ți faci prieteni.",
      footballQ: "Îți place fotbalul?",
      footballCta: "Apasă aici și alătură-te echipei!",
      othersTitle: "Alte sporturi",
      join: "Alătură-te",
      exampleBadge: "Link de exemplu",
      exampleMsg: "Acesta este un link de exemplu: contactul echipei va fi adăugat în curând.",
      desc: {
        football: { name: "Fotbal", desc: "O echipă deschisă tuturor, în fiecare săptămână." },
        volley: { name: "Volei", desc: "Se joacă în echipă, începătorii sunt bineveniți." },
        basket: { name: "Baschet", desc: "Dribling, aruncări și multă distracție." },
        tennis: { name: "Tenis", desc: "Unul contra unul sau la dublu." },
      },
      gallery: "Vezi pozele și locurile pe hartă",
      form: { title: "Înscrie-te într-o echipă", name: "Nume", contact: "Telefon sau e-mail", sport: "Sport", submit: "Înscrie-mă", saved: "Înscriere salvată! Te vor contacta curând.", listTitle: "Înscrieri salvate pe acest dispozitiv", remove: "Șterge", note: "Doar demonstrativ: datele rămân pe acest dispozitiv.", missing: "Scrie-ți numele și un contact." },
    },
  },
};
