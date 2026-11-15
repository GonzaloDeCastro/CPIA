import type { Locale } from "@/lib/i18n/locale";

export type GuidaCategory = "sport" | "arte" | "benessere";
/** Solo las fichas "approvato" se muestran en la guía. */
export type GuidaStatus = "bozza" | "revisione" | "approvato";

type Tr = Record<Locale, string>;

export type GuidaPlace = {
  id: string;
  name: string;
  category: GuidaCategory;
  town: "Giarre" | "Paternò" | "Etna";
  lat: number;
  lng: number;
  /** Ejemplo de prueba: coordenadas aproximadas, texto a revisar con los estudiantes. */
  isExample: boolean;
  status: GuidaStatus;
  /** Texto en italiano fácil (A2) + traducciones. */
  text: Tr;
  /** Información práctica (cómo llegar, cuándo ir). */
  practical: Tr;
};

export const GUIDA_PLACES: GuidaPlace[] = [
  {
    id: "G-001",
    name: "Castello Normanno",
    category: "arte",
    town: "Paternò",
    lat: 37.5664,
    lng: 14.9009,
    isExample: true,
    status: "approvato",
    text: {
      it: "Il castello è una grande torre di pietra nera di lava. Si trova in alto, nel centro di Paternò. Dalla cima vedi la città e il vulcano Etna.",
      es: "El castillo es una gran torre de piedra negra de lava. Está en lo alto, en el centro de Paternò. Desde arriba se ven la ciudad y el volcán Etna.",
      en: "The castle is a big tower made of black lava stone. It stands high up in the centre of Paternò. From the top you can see the town and Mount Etna.",
      ru: "Замок — это большая башня из чёрного лавового камня. Он стоит на возвышенности в центре Патерно. С вершины видны город и вулкан Этна.",
      ar: "القلعة برج كبير من حجر الحمم البركانية السوداء. تقع في مكان مرتفع وسط باتيرنو. من القمة ترى المدينة وبركان إتنا.",
    },
    practical: {
      it: "Vicino alla piazza centrale. Si va a piedi. Meglio la mattina.",
      es: "Cerca de la plaza central. Se va a pie. Mejor por la mañana.",
      en: "Near the main square. You can walk there. Best in the morning.",
      ru: "Рядом с центральной площадью. Можно дойти пешком. Лучше утром.",
      ar: "بالقرب من الساحة المركزية. يمكن الذهاب سيرًا على الأقدام. الأفضل في الصباح.",
    },
  },
  {
    id: "G-002",
    name: "Salinelle di Paternò",
    category: "benessere",
    town: "Paternò",
    lat: 37.5935,
    lng: 14.916,
    isExample: true,
    status: "approvato",
    text: {
      it: "Le Salinelle sono piccoli vulcani di fango. Dal terreno escono acqua, gas e fango freddo. È un posto speciale per conoscere la natura.",
      es: "Las Salinelle son pequeños volcanes de barro. Del suelo salen agua, gas y barro frío. Es un lugar especial para conocer la naturaleza.",
      en: "The Salinelle are small mud volcanoes. Water, gas and cold mud come out of the ground. It is a special place to learn about nature.",
      ru: "Салинелле — это маленькие грязевые вулканы. Из земли выходят вода, газ и холодная грязь. Это особое место, чтобы узнать природу.",
      ar: "السالينيلّي براكين طينية صغيرة. يخرج من الأرض ماء وغاز وطين بارد. إنه مكان مميز للتعرف على الطبيعة.",
    },
    practical: {
      it: "Fuori città. Serve l'auto o un accompagnatore. Non toccare il fango.",
      es: "Fuera de la ciudad. Hace falta auto o un acompañante. No toques el barro.",
      en: "Outside the town. You need a car or a guide. Do not touch the mud.",
      ru: "За городом. Нужна машина или сопровождающий. Не трогайте грязь.",
      ar: "خارج المدينة. تحتاج إلى سيارة أو مرافق. لا تلمس الطين.",
    },
  },
  {
    id: "G-003",
    name: "Duomo di Sant'Isidoro Agricola",
    category: "arte",
    town: "Giarre",
    lat: 37.7298,
    lng: 15.1854,
    isExample: true,
    status: "approvato",
    text: {
      it: "È la chiesa principale di Giarre. Ha una facciata alta e chiara. Dentro ci sono quadri e statue.",
      es: "Es la iglesia principal de Giarre. Tiene una fachada alta y clara. Adentro hay cuadros y estatuas.",
      en: "This is the main church of Giarre. It has a tall, light front. Inside there are paintings and statues.",
      ru: "Это главная церковь Джарре. У неё высокий светлый фасад. Внутри есть картины и статуи.",
      ar: "هذه هي الكنيسة الرئيسية في جاري. لها واجهة عالية وفاتحة. في الداخل لوحات وتماثيل.",
    },
    practical: {
      it: "In centro, vicino alla piazza. Si entra gratis. Rispetta gli orari della messa.",
      es: "En el centro, cerca de la plaza. La entrada es gratis. Respetá los horarios de misa.",
      en: "In the centre, near the square. Entry is free. Respect the times of Mass.",
      ru: "В центре, рядом с площадью. Вход бесплатный. Уважайте время богослужений.",
      ar: "في الوسط، قرب الساحة. الدخول مجاني. احترم مواعيد القدّاس.",
    },
  },
  {
    id: "G-004",
    name: "Lungomare di Marina di Giarre",
    category: "sport",
    town: "Giarre",
    lat: 37.7156,
    lng: 15.2053,
    isExample: true,
    status: "approvato",
    text: {
      it: "Il lungomare è una strada vicino al mare. Si può camminare, correre o andare in bicicletta. L'aria è buona e c'è tanto sole.",
      es: "La costanera es una calle junto al mar. Se puede caminar, correr o andar en bicicleta. El aire es bueno y hay mucho sol.",
      en: "The seafront is a road next to the sea. You can walk, run or cycle. The air is fresh and it is very sunny.",
      ru: "Набережная — это улица рядом с морем. Можно ходить, бегать или ездить на велосипеде. Воздух хороший, много солнца.",
      ar: "الكورنيش شارع بجانب البحر. يمكنك المشي أو الجري أو ركوب الدراجة. الهواء جيد والشمس كثيرة.",
    },
    practical: {
      it: "Si arriva in autobus da Giarre. Porta acqua e un cappello d'estate.",
      es: "Se llega en colectivo desde Giarre. En verano llevá agua y sombrero.",
      en: "Take the bus from Giarre. In summer bring water and a hat.",
      ru: "Доехать можно на автобусе из Джарре. Летом берите воду и шляпу.",
      ar: "يمكن الوصول بالحافلة من جاري. في الصيف خذ ماءً وقبعة.",
    },
  },
  {
    id: "G-005",
    name: "Castagno dei Cento Cavalli",
    category: "benessere",
    town: "Etna",
    lat: 37.7405,
    lng: 15.1225,
    isExample: true,
    status: "approvato",
    text: {
      it: "È un castagno antichissimo, tra i più grandi d'Europa. Si trova sull'Etna, vicino a Sant'Alfio. Stare sotto i suoi rami fa stare bene.",
      es: "Es un castaño antiquísimo, entre los más grandes de Europa. Está en el Etna, cerca de Sant'Alfio. Estar bajo sus ramas hace bien.",
      en: "It is a very old chestnut tree, one of the biggest in Europe. It is on Etna, near Sant'Alfio. Sitting under its branches helps you relax.",
      ru: "Это очень древний каштан, один из самых больших в Европе. Он растёт на Этне, рядом с Сант-Альфио. Под его ветвями хорошо отдыхать.",
      ar: "إنها شجرة كستناء قديمة جدًا، من أكبر الأشجار في أوروبا. تقع على إتنا قرب سانت ألفيو. الجلوس تحت أغصانها يريح النفس.",
    },
    practical: {
      it: "Serve l'auto. La strada è di montagna: porta una giacca anche d'estate.",
      es: "Hace falta auto. El camino es de montaña: llevá una campera aun en verano.",
      en: "You need a car. It is a mountain road: bring a jacket even in summer.",
      ru: "Нужна машина. Дорога горная: берите куртку даже летом.",
      ar: "تحتاج إلى سيارة. الطريق جبلي: خذ سترة حتى في الصيف.",
    },
  },
  {
    id: "G-006",
    name: "Sentiero dei Monti Sartorius",
    category: "sport",
    town: "Etna",
    lat: 37.7905,
    lng: 15.0405,
    isExample: true,
    status: "approvato",
    text: {
      it: "È un sentiero facile tra boschi e vecchie colate di lava. Si cammina un'ora circa. È bello per fare sport all'aria aperta.",
      es: "Es un sendero fácil entre bosques y antiguas coladas de lava. Se camina más o menos una hora. Es lindo para hacer deporte al aire libre.",
      en: "It is an easy trail through woods and old lava flows. The walk takes about one hour. It is great for outdoor sport.",
      ru: "Это лёгкая тропа через леса и старые лавовые потоки. Идти примерно один час. Отлично для спорта на свежем воздухе.",
      ar: "إنه مسار سهل بين الغابات وتدفقات الحمم القديمة. المشي يستغرق نحو ساعة. مناسب لممارسة الرياضة في الهواء الطلق.",
    },
    practical: {
      it: "Scarpe da trekking e acqua. Non andare da solo se c'è maltempo.",
      es: "Zapatillas de trekking y agua. No vayas solo si hay mal tiempo.",
      en: "Wear hiking shoes and bring water. Do not go alone in bad weather.",
      ru: "Нужны треккинговые ботинки и вода. Не ходите одни в плохую погоду.",
      ar: "ارتدِ حذاء المشي وخذ ماءً. لا تذهب وحدك في الطقس السيئ.",
    },
  },
  {
    id: "G-007",
    name: "Luogo da completare (bozza)",
    category: "arte",
    town: "Giarre",
    lat: 37.73,
    lng: 15.19,
    isExample: true,
    status: "bozza",
    text: { it: "Bozza.", es: "Borrador.", en: "Draft.", ru: "Черновик.", ar: "مسودة." },
    practical: { it: "—", es: "—", en: "—", ru: "—", ar: "—" },
  },
];

export function approvedPlaces(): GuidaPlace[] {
  return GUIDA_PLACES.filter((p) => p.status === "approvato");
}
