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
      fr: "Le château est une grande tour en pierre de lave noire. Il se trouve en hauteur, au centre de Paternò. D'en haut, on voit la ville et le volcan Etna.",
      ar: "القلعة برج كبير من حجر الحمم البركانية السوداء. تقع في مكان مرتفع وسط باتيرنو. من القمة ترى المدينة وبركان إتنا.",
      ro: "Castelul este un turn mare din piatră neagră de lavă. Se află în vârf, în centrul orașului Paternò. De sus se văd orașul și vulcanul Etna.",
    },
    practical: {
      it: "Vicino alla piazza centrale. Si va a piedi. Meglio la mattina.",
      es: "Cerca de la plaza central. Se va a pie. Mejor por la mañana.",
      en: "Near the main square. You can walk there. Best in the morning.",
      fr: "Près de la place centrale. On y va à pied. C'est mieux le matin.",
      ar: "بالقرب من الساحة المركزية. يمكن الذهاب سيرًا على الأقدام. الأفضل في الصباح.",
      ro: "Lângă piața centrală. Se poate merge pe jos. Cel mai bine dimineața.",
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
      fr: "Les Salinelle sont de petits volcans de boue. De l'eau, du gaz et de la boue froide sortent du sol. C'est un lieu spécial pour découvrir la nature.",
      ar: "السالينيلّي براكين طينية صغيرة. يخرج من الأرض ماء وغاز وطين بارد. إنه مكان مميز للتعرف على الطبيعة.",
      ro: "Salinelle sunt vulcani mici de noroi. Din pământ ies apă, gaze și noroi rece. Este un loc special pentru a cunoaște natura.",
    },
    practical: {
      it: "Fuori città. Serve l'auto o un accompagnatore. Non toccare il fango.",
      es: "Fuera de la ciudad. Hace falta auto o un acompañante. No toques el barro.",
      en: "Outside the town. You need a car or a guide. Do not touch the mud.",
      fr: "Hors de la ville. Il faut une voiture ou un accompagnateur. Ne touchez pas la boue.",
      ar: "خارج المدينة. تحتاج إلى سيارة أو مرافق. لا تلمس الطين.",
      ro: "În afara orașului. Ai nevoie de mașină sau de un însoțitor. Nu atinge noroiul.",
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
      fr: "C'est l'église principale de Giarre. Elle a une façade haute et claire. À l'intérieur, il y a des tableaux et des statues.",
      ar: "هذه هي الكنيسة الرئيسية في جاري. لها واجهة عالية وفاتحة. في الداخل لوحات وتماثيل.",
      ro: "Este biserica principală din Giarre. Are o fațadă înaltă și luminoasă. În interior sunt tablouri și statui.",
    },
    practical: {
      it: "In centro, vicino alla piazza. Si entra gratis. Rispetta gli orari della messa.",
      es: "En el centro, cerca de la plaza. La entrada es gratis. Respetá los horarios de misa.",
      en: "In the centre, near the square. Entry is free. Respect the times of Mass.",
      fr: "Au centre, près de la place. L'entrée est gratuite. Respectez les horaires de la messe.",
      ar: "في الوسط، قرب الساحة. الدخول مجاني. احترم مواعيد القدّاس.",
      ro: "În centru, lângă piață. Intrarea este gratuită. Respectă programul slujbelor.",
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
      fr: "Le bord de mer est une rue près de la mer. On peut marcher, courir ou faire du vélo. L'air est bon et il y a beaucoup de soleil.",
      ar: "الكورنيش شارع بجانب البحر. يمكنك المشي أو الجري أو ركوب الدراجة. الهواء جيد والشمس كثيرة.",
      ro: "Faleza este o stradă lângă mare. Poți merge pe jos, alerga sau pedala. Aerul e curat și este mult soare.",
    },
    practical: {
      it: "Si arriva in autobus da Giarre. Porta acqua e un cappello d'estate.",
      es: "Se llega en colectivo desde Giarre. En verano llevá agua y sombrero.",
      en: "Take the bus from Giarre. In summer bring water and a hat.",
      fr: "On y arrive en bus depuis Giarre. En été, prenez de l'eau et un chapeau.",
      ar: "يمكن الوصول بالحافلة من جاري. في الصيف خذ ماءً وقبعة.",
      ro: "Se ajunge cu autobuzul din Giarre. Vara, ia apă și o pălărie.",
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
      fr: "C'est un châtaignier très ancien, l'un des plus grands d'Europe. Il se trouve sur l'Etna, près de Sant'Alfio. S'asseoir sous ses branches aide à se détendre.",
      ar: "إنها شجرة كستناء قديمة جدًا، من أكبر الأشجار في أوروبا. تقع على إتنا قرب سانت ألفيو. الجلوس تحت أغصانها يريح النفس.",
      ro: "Este un castan foarte vechi, unul dintre cei mai mari din Europa. Se află pe Etna, lângă Sant'Alfio. Să stai sub crengile lui te ajută să te relaxezi.",
    },
    practical: {
      it: "Serve l'auto. La strada è di montagna: porta una giacca anche d'estate.",
      es: "Hace falta auto. El camino es de montaña: llevá una campera aun en verano.",
      en: "You need a car. It is a mountain road: bring a jacket even in summer.",
      fr: "Il faut une voiture. C'est une route de montagne : prenez une veste, même en été.",
      ar: "تحتاج إلى سيارة. الطريق جبلي: خذ سترة حتى في الصيف.",
      ro: "Ai nevoie de mașină. Drumul este de munte: ia o jachetă, chiar și vara.",
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
      fr: "C'est un sentier facile à travers les bois et d'anciennes coulées de lave. La promenade dure environ une heure. Idéal pour le sport en plein air.",
      ar: "إنه مسار سهل بين الغابات وتدفقات الحمم القديمة. المشي يستغرق نحو ساعة. مناسب لممارسة الرياضة في الهواء الطلق.",
      ro: "Este o potecă ușoară prin păduri și vechi curgeri de lavă. Plimbarea durează aproximativ o oră. Ideală pentru sport în aer liber.",
    },
    practical: {
      it: "Scarpe da trekking e acqua. Non andare da solo se c'è maltempo.",
      es: "Zapatillas de trekking y agua. No vayas solo si hay mal tiempo.",
      en: "Wear hiking shoes and bring water. Do not go alone in bad weather.",
      fr: "Mettez des chaussures de randonnée et prenez de l'eau. N'y allez pas seul par mauvais temps.",
      ar: "ارتدِ حذاء المشي وخذ ماءً. لا تذهب وحدك في الطقس السيئ.",
      ro: "Poartă încălțăminte de drumeție și ia apă. Nu merge singur pe vreme rea.",
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
    text: { it: "Bozza.", es: "Borrador.", en: "Draft.", fr: "Brouillon.", ar: "مسودة.", ro: "Ciornă." },
    practical: { it: "—", es: "—", en: "—", fr: "—", ar: "—", ro: "—" },
  },
];

export function approvedPlaces(): GuidaPlace[] {
  return GUIDA_PLACES.filter((p) => p.status === "approvato");
}
