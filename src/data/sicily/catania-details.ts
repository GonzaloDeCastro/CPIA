/**
 * Pantallas de detalle de la provincia de Catania (Sicilia).
 * Texto en los tres idiomas de la interfaz; las fotos son de Wikimedia Commons.
 */
import type { Locale } from "@/lib/i18n/locale";

import { CATANIA_DETAILS_TR } from "./catania-details.i18n";

/** es/en/it siempre existen; ar se completa desde catania-details.i18n.ts (ru quedó sin usarse; fr cae al inglés). */
export type L10n = Record<"es" | "en" | "it", string> &
  Partial<Record<"ru" | "fr" | "ar" | "ro", string>>;

/** Texto en el idioma pedido; si falta, cae al inglés. */
export function tx(text: L10n, locale: Locale): string {
  return text[locale] ?? text.en;
}

export type CataniaDetailSection = {
  heading: L10n;
  body: L10n;
  /** Archivo de Wikimedia Commons (opcional). */
  file?: string;
  alt?: L10n;
};

export type CataniaDetail = {
  slug: "citta" | "castagno-dei-cento-cavalli";
  /** Texto del breadcrumb / título corto. */
  title: L10n;
  /** Título para metadata (italiano). */
  metaTitle: string;
  metaDescription: string;
  emoji: string;
  intro: L10n;
  heroFile: string;
  heroAlt: L10n;
  facts: { label: L10n; value: L10n }[];
  sections: CataniaDetailSection[];
};

const l = (es: string, en: string, it: string): L10n => ({ es, en, it });

export function commonsImage(file: string, width = 960): string {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(
    file.replace(/ /g, "_"),
  )}?width=${width}`;
}

const TREE: CataniaDetail = {
  slug: "castagno-dei-cento-cavalli",
  title: l("Castaño de los Cien Caballos", "Hundred Horse Chestnut", "Castagno dei Cento Cavalli"),
  metaTitle: "Castagno dei Cento Cavalli — Sant'Alfio, Etna",
  metaDescription:
    "Il Castagno dei Cento Cavalli, a Sant'Alfio sull'Etna: uno degli alberi più grandi e vecchi del mondo, con la sua leggenda dei cento cavalieri.",
  emoji: "🌰",
  intro: l(
    "En la ladera oriental del Etna, en el pueblo de Sant'Alfio, crece uno de los árboles más famosos del mundo: un castaño enorme y antiquísimo que lleva el nombre de una leyenda con cien caballeros.",
    "On the eastern slope of Etna, in the village of Sant'Alfio, grows one of the most famous trees in the world: a huge and ancient chestnut named after a legend of a hundred knights.",
    "Sul versante orientale dell'Etna, nel comune di Sant'Alfio, cresce uno degli alberi più famosi del mondo: un castagno enorme e antichissimo che porta il nome di una leggenda con cento cavalieri.",
  ),
  heroFile: "Castagno dei Cento Cavalli.jpg",
  heroAlt: l(
    "El Castaño de los Cien Caballos en Sant'Alfio",
    "The Hundred Horse Chestnut in Sant'Alfio",
    "Il Castagno dei Cento Cavalli a Sant'Alfio",
  ),
  facts: [
    {
      label: l("Dónde está", "Where it is", "Dove si trova"),
      value: l("Sant'Alfio, ladera este del Etna", "Sant'Alfio, east slope of Etna", "Sant'Alfio, versante est dell'Etna"),
    },
    {
      label: l("Edad estimada", "Estimated age", "Età stimata"),
      value: l(
        "Entre 2000 y 4000 años (un estudio de 2022 habla de unos 2200)",
        "Between 2,000 and 4,000 years (a 2022 study says about 2,200)",
        "Tra 2000 e 4000 anni (uno studio del 2022 parla di circa 2200)",
      ),
    },
    {
      label: l("Tronco hoy", "Trunk today", "Tronco oggi"),
      value: l(
        "Unos 22 metros de alto y unos 23 de contorno",
        "About 22 metres tall and about 23 around",
        "Circa 22 metri di altezza e 23 di circonferenza",
      ),
    },
    {
      label: l("Récord", "Record", "Record"),
      value: l(
        "Figura en el Guinness como el árbol más grande del mundo",
        "Listed in the Guinness book as the largest tree in the world",
        "Inserito nel Guinness come l'albero più grande del mondo",
      ),
    },
  ],
  sections: [
    {
      heading: l("La leyenda de los cien caballeros", "The legend of the hundred knights", "La leggenda dei cento cavalieri"),
      body: l(
        "Cuenta la tradición que una reina viajaba con cien caballeros cuando estalló una tormenta violenta. Todos se refugiaron bajo las ramas de este castaño y entraron, con sus caballos, bajo su copa. De ahí el nombre. Nadie sabe con certeza quién era la reina: según las versiones, Juana de Aragón, Juana I de Anjou o incluso una reina de Inglaterra. Probablemente es una historia popular, pero muestra lo grande que parecía el árbol.",
        "Tradition says a queen was travelling with a hundred knights when a violent storm broke out. They all sheltered under the branches of this chestnut, horses included. That is how it got its name. No one knows for sure who the queen was: depending on the version, Joan of Aragon, Joan I of Anjou or even a queen of England. It is probably a folk tale, but it shows how huge the tree looked.",
        "Secondo la tradizione, una regina viaggiava con cento cavalieri quando scoppiò un temporale violento. Tutti si riparono sotto i rami di questo castagno, cavalli compresi. Da qui il nome. Nessuno sa con certezza chi fosse la regina: a seconda delle versioni, Giovanna d'Aragona, Giovanna I d'Angiò o perfino una regina d'Inghilterra. Probabilmente è un racconto popolare, ma fa capire quanto fosse grande l'albero.",
      ),
    },
    {
      heading: l("¿Cuántos años tiene?", "How old is it?", "Quanti anni ha?"),
      body: l(
        "Es difícil saberlo porque el tronco está hueco y dividido, y no se pueden contar bien los anillos. Los científicos dieron cifras muy distintas: algunos pensaban en 4000 años, otros en 2000. Un estudio reciente de 2022 lo calcula en unos 2200 años: es decir, ya existía en tiempos de la antigua Roma.",
        "It is hard to know because the trunk is hollow and split, so the rings cannot be counted properly. Scientists gave very different figures: some thought 4,000 years, others 2,000. A recent 2022 study estimates about 2,200 years, so it was already a tree in ancient Roman times.",
        "È difficile saperlo perché il tronco è cavo e diviso, e gli anelli non si possono contare bene. Gli scienziati hanno dato cifre molto diverse: alcuni pensavano a 4000 anni, altri a 2000. Uno studio recente del 2022 lo stima in circa 2200 anni: era già un albero ai tempi dell'antica Roma.",
      ),
    },
    {
      heading: l("Un tronco que se partió en tres", "A trunk split in three", "Un tronco diviso in tre"),
      body: l(
        "Hoy el castaño tiene tres troncos separados que crecen del mismo pie. En el siglo XVIII, el pintor francés Jean-Pierre Houël lo dibujó y lo describió en su viaje a Sicilia; en 1780 se midió una circunferencia de casi 58 metros sumando las partes unidas por la base, y por eso el árbol entró en los libros de récords. La división se atribuye a tormentas y también a la acción de las personas: se vieron marcas de hacha.",
        "Today the chestnut has three separate trunks growing from the same base. In the 18th century the French painter Jean-Pierre Houël drew it and described it on his journey to Sicily; in 1780 a circumference of almost 58 metres was measured counting the parts joined at the base, and that is why the tree entered the record books. The split is blamed on storms and also on people: axe marks were seen.",
        "Oggi il castagno ha tre tronchi separati che crescono dalla stessa base. Nel Settecento il pittore francese Jean-Pierre Houël lo disegnò e lo descrisse nel suo viaggio in Sicilia; nel 1780 fu misurata una circonferenza di quasi 58 metri contando le parti unite alla base, ed è per questo che l'albero è entrato nei libri dei record. La divisione si attribuisce ai temporali ma anche all'uomo: si videro segni d'ascia.",
      ),
    },
    {
      heading: l("Por qué creció tanto", "Why it grew so big", "Perché è cresciuto tanto"),
      body: l(
        "El suelo del Etna nace de la lava: es rico en minerales y retiene bien el agua. A esa altura el aire es fresco y llueve y nieva lo suficiente. Para un castaño, que ama los suelos volcánicos, es el lugar ideal. Por eso en el Etna hay bosques enteros de castaños, y este es el abuelo de todos.",
        "Etna's soil comes from lava: it is rich in minerals and holds water well. At that height the air is cool and there is enough rain and snow. For a chestnut, which loves volcanic soil, it is the perfect place. That is why Etna has whole chestnut forests, and this one is the grandfather of them all.",
        "Il suolo dell'Etna nasce dalla lava: è ricco di minerali e trattiene bene l'acqua. A quell'altezza l'aria è fresca e piove e nevica abbastanza. Per un castagno, che ama i terreni vulcanici, è il posto ideale. Per questo sull'Etna ci sono interi boschi di castagni, e questo è il nonno di tutti.",
      ),
    },
    {
      heading: l("Para los más curiosos", "For the curious", "Per i più curiosi"),
      body: l(
        "Las castañas del Etna se recogen en otoño y se comen asadas, hervidas o en dulces. Si algún día vas a Sant'Alfio, el árbol se puede visitar: mirá su corteza retorcida y pensá en cuántas erupciones del Etna vio pasar.",
        "Etna's chestnuts are picked in autumn and eaten roasted, boiled or in sweets. If you ever go to Sant'Alfio, the tree can be visited: look at its twisted bark and think how many Etna eruptions it has seen.",
        "Le castagne dell'Etna si raccolgono in autunno e si mangiano arrostite, bollite o nei dolci. Se un giorno vai a Sant'Alfio, l'albero si può visitare: guarda la corteccia contorta e pensa a quante eruzioni dell'Etna ha visto.",
      ),
    },
  ],
};

const CITY: CataniaDetail = {
  slug: "citta",
  title: l("Catania, la capital", "Catania, the capital", "Catania, il capoluogo"),
  metaTitle: "Catania — il capoluogo della provincia",
  metaDescription:
    "Catania, città di lava e barocco ai piedi dell'Etna: storia, monumenti, Sant'Agata, mercato del pesce e cucina del capoluogo.",
  emoji: "🏛️",
  intro: l(
    "Catania es la capital de la provincia y una de las ciudades más grandes de Sicilia. Está construida a los pies del Etna, frente al mar Jónico, y muchos de sus edificios son de piedra lávica oscura.",
    "Catania is the capital of the province and one of the biggest cities in Sicily. It is built at the foot of Etna, facing the Ionian Sea, and many of its buildings are made of dark lava stone.",
    "Catania è il capoluogo della provincia e una delle città più grandi della Sicilia. Sorge ai piedi dell'Etna, di fronte al mar Ionio, e molti edifici sono di scura pietra lavica.",
  ),
  heroFile: "Catania vista dall'alto e il vulcano Etna a sovrastarla.jpg",
  heroAlt: l(
    "Catania vista desde arriba con el Etna al fondo",
    "Catania seen from above with Etna behind",
    "Catania vista dall'alto con l'Etna alle spalle",
  ),
  facts: [
    {
      label: l("Habitantes", "Population", "Abitanti"),
      value: l("Cerca de 300 000 en la ciudad", "About 300,000 in the city", "Circa 300.000 in città"),
    },
    {
      label: l("Fundación", "Founded", "Fondazione"),
      value: l(
        "Alrededor del 729 a. C., por colonos griegos de Naxos (Katane)",
        "Around 729 BC, by Greek settlers from Naxos (Katane)",
        "Intorno al 729 a.C., da coloni greci di Naxos (Katane)",
      ),
    },
    {
      label: l("Patrona", "Patron saint", "Patrona"),
      value: l("Santa Águeda (fiesta en febrero)", "Saint Agatha (feast in February)", "Sant'Agata (festa a febbraio)"),
    },
    {
      label: l("Universidad", "University", "Università"),
      value: l("Desde 1434, la más antigua de Sicilia", "Since 1434, the oldest in Sicily", "Dal 1434, la più antica della Sicilia"),
    },
    {
      label: l("UNESCO", "UNESCO", "UNESCO"),
      value: l(
        "Su centro barroco es Patrimonio de la Humanidad desde 2002",
        "Its baroque centre has been a World Heritage Site since 2002",
        "Il centro barocco è Patrimonio dell'Umanità dal 2002",
      ),
    },
  ],
  sections: [
    {
      heading: l("Una ciudad de lava y barroco", "A city of lava and baroque", "Una città di lava e di barocco"),
      body: l(
        "Catania fue destruida varias veces: por la lava del Etna (la gran erupción de 1669 llegó hasta el mar) y por el terremoto de 1693. Después del terremoto se reconstruyó con calles anchas y rectas y edificios barrocos. El arquitecto Giovanni Battista Vaccarini fue una de las figuras clave. La piedra negra de lava, mezclada con piedra blanca, da a la ciudad su aspecto único.",
        "Catania was destroyed several times: by Etna's lava (the great 1669 eruption reached the sea) and by the 1693 earthquake. After the earthquake it was rebuilt with wide straight streets and baroque buildings. The architect Giovanni Battista Vaccarini was one of the key figures. The black lava stone, mixed with white stone, gives the city its unique look.",
        "Catania fu distrutta più volte: dalla lava dell'Etna (la grande eruzione del 1669 arrivò fino al mare) e dal terremoto del 1693. Dopo il terremoto fu ricostruita con strade larghe e dritte ed edifici barocchi. L'architetto Giovanni Battista Vaccarini fu una delle figure chiave. La pietra nera di lava, mescolata a quella bianca, dà alla città il suo aspetto unico.",
      ),
      file: "Via Cruciferi view from Chiesa San Giuliano - Catania.jpg",
      alt: l("Via dei Crociferi, calle barroca de Catania", "Via dei Crociferi, a baroque street in Catania", "Via dei Crociferi, strada barocca di Catania"),
    },
    {
      heading: l("Piazza Duomo y el elefante", "Piazza Duomo and the elephant", "Piazza Duomo e l'elefante"),
      body: l(
        "En el corazón de la ciudad está la plaza del Duomo, con la catedral de Santa Águeda y la Fuente del Elefante: un elefante de piedra lávica con un obelisco egipcio en el lomo. Los catanenses lo llaman «u Liotru» y es el símbolo de la ciudad. Junto a la plaza corre la Fuente del Amenano, un río que va bajo la ciudad.",
        "In the heart of the city is Piazza Duomo, with the cathedral of Saint Agatha and the Elephant Fountain: a lava-stone elephant with an Egyptian obelisk on its back. Catanians call it “u Liotru” and it is the symbol of the city. Next to the square is the Amenano fountain, fed by a river that runs under the city.",
        "Nel cuore della città c'è piazza Duomo, con la cattedrale di Sant'Agata e la Fontana dell'Elefante: un elefante di pietra lavica con un obelisco egizio sulla schiena. I catanesi lo chiamano «u Liotru» ed è il simbolo della città. Accanto alla piazza c'è la Fontana dell'Amenano, un fiume che scorre sotto la città.",
      ),
      file: "Catania - Fontana dell'Elefante 03.jpg",
      alt: l("La Fuente del Elefante", "The Elephant Fountain", "La Fontana dell'Elefante"),
    },
    {
      heading: l("Santa Águeda, la patrona", "Saint Agatha, the patron saint", "Sant'Agata, la patrona"),
      body: l(
        "Santa Águeda es la santa protectora de Catania. Cada año, a principios de febrero, la ciudad celebra su fiesta durante tres días: miles de personas con túnica blanca acompañan el carro de la santa por las calles, entre velas gigantes llamadas «candelore» y fuegos artificiales. Es una de las fiestas religiosas más grandes de Europa. Para la ocasión se preparan dulces especiales, las «minne di Sant'Agata».",
        "Saint Agatha is Catania's protector. Every year in early February the city celebrates her feast for three days: thousands of people in white robes follow the saint's carriage through the streets, among giant ornate candles called “candelore” and fireworks. It is one of the biggest religious festivals in Europe. Special sweets are made for the occasion, the “minne di Sant'Agata”.",
        "Sant'Agata è la santa protettrice di Catania. Ogni anno, ai primi di febbraio, la città celebra la sua festa per tre giorni: migliaia di persone in saio bianco accompagnano il fercolo della santa per le strade, tra grandi ceri decorati detti «candelore» e fuochi d'artificio. È una delle feste religiose più grandi d'Europa. Per l'occasione si preparano dolci speciali, le «minne di Sant'Agata».",
      ),
      file: "Catania - Cattedrale di Sant'Agata 02.jpg",
      alt: l("La catedral de Santa Águeda", "The cathedral of Saint Agatha", "La cattedrale di Sant'Agata"),
    },
    {
      heading: l("La Pescheria, el mercado del pescado", "La Pescheria, the fish market", "La Pescheria, il mercato del pesce"),
      body: l(
        "Detrás de la plaza del Duomo está la Pescheria, el mercado del pescado, donde de mañana temprano los vendedores gritan sus ofertas. Hay pescados enormes, pulpos, erizos de mar y puestos de verdura y fruta. Es ruidoso, colorido y muy catanés.",
        "Behind Piazza Duomo is the Pescheria, the fish market, where early in the morning sellers shout their offers. There are huge fish, octopus, sea urchins and fruit and vegetable stalls. It is noisy, colourful and very Catanian.",
        "Dietro piazza Duomo c'è la Pescheria, il mercato del pesce, dove la mattina presto i venditori gridano le offerte. Ci sono pesci enormi, polpi, ricci di mare e banchi di frutta e verdura. È rumoroso, colorato e molto catanese.",
      ),
      file: "Catania - La pescheria 2 - Foto di Giovanni Dall'Orto.JPG",
      alt: l("El mercado del pescado de Catania", "Catania's fish market", "Il mercato del pesce di Catania"),
    },
    {
      heading: l("Castillo Ursino y teatro romano", "Ursino Castle and the Roman theatre", "Castello Ursino e teatro romano"),
      body: l(
        "El Castillo Ursino es una fortaleza de la época de Federico II, hoy museo de la ciudad. Antes estaba junto al mar, pero la lava de 1669 la rodeó y el mar quedó lejos. Cerca del centro está el teatro romano, del siglo II d. C., hecho también con piedra lávica; forma parte de un parque arqueológico greco-romano.",
        "Ursino Castle is a fortress from the time of Frederick II, now the city museum. It used to stand by the sea, but the 1669 lava surrounded it and the sea ended up far away. Near the centre is the Roman theatre, from the 2nd century AD, also made of lava stone; it is part of a Greek-Roman archaeological park.",
        "Il Castello Ursino è una fortezza dell'epoca di Federico II, oggi museo della città. Un tempo stava sul mare, ma la lava del 1669 lo circondò e il mare rimase lontano. Vicino al centro c'è il teatro romano, del II secolo d.C., anch'esso di pietra lavica; fa parte di un parco archeologico greco-romano.",
      ),
      file: "Catania - Castello Ursino - 2023-09-03 01-36-18 001.jpg",
      alt: l("El Castillo Ursino", "Ursino Castle", "Il Castello Ursino"),
    },
    {
      heading: l("Bellini, Verga y la cultura", "Bellini, Verga and culture", "Bellini, Verga e la cultura"),
      body: l(
        "Catania es la ciudad natal del compositor Vincenzo Bellini (autor de la ópera «Norma»): su teatro y un jardín llevan su nombre. También nació aquí el escritor Giovanni Verga. La Universidad, fundada en 1434, es la más antigua de la isla y llena la ciudad de estudiantes.",
        "Catania is the birthplace of composer Vincenzo Bellini (author of the opera “Norma”): its theatre and a garden bear his name. The writer Giovanni Verga was also born here. The University, founded in 1434, is the oldest on the island and fills the city with students.",
        "Catania è la città natale del compositore Vincenzo Bellini (autore dell'opera «Norma»): il suo teatro e un giardino portano il suo nome. Qui è nato anche lo scrittore Giovanni Verga. L'Università, fondata nel 1434, è la più antica dell'isola e riempie la città di studenti.",
      ),
    },
    {
      heading: l("Qué se come en Catania", "What to eat in Catania", "Cosa si mangia a Catania"),
      body: l(
        "La pasta alla Norma (con tomate, berenjena frita y ricota salada), el arancino en forma de punta, la cipollina, la granita con brioche en el desayuno y los cannoli con ricota fresca. Si es febrero, no te pierdas las minne di Sant'Agata.",
        "Pasta alla Norma (with tomato, fried eggplant and salted ricotta), the pointed arancino, the cipollina, granita with brioche for breakfast and cannoli filled with fresh ricotta. If it is February, don't miss the minne di Sant'Agata.",
        "La pasta alla Norma (con pomodoro, melanzane fritte e ricotta salata), l'arancino a punta, la cipollina, la granita con brioche a colazione e i cannoli con ricotta fresca. Se è febbraio, non perdere le minne di Sant'Agata.",
      ),
      file: "Granita brioche.JPG",
      alt: l("Granita con brioche", "Granita with brioche", "Granita con brioche"),
    },
  ],
};

export const CATANIA_DETAILS: CataniaDetail[] = [CITY, TREE];

for (const detail of CATANIA_DETAILS) {
  for (const loc of ["ru", "ar"] as const) {
    const tr = CATANIA_DETAILS_TR[loc][detail.slug];
    detail.title[loc] = tr.title;
    detail.intro[loc] = tr.intro;
    detail.heroAlt[loc] = tr.heroAlt;
    detail.facts.forEach((f, i) => {
      f.label[loc] = tr.facts[i].label;
      f.value[loc] = tr.facts[i].value;
    });
    detail.sections.forEach((sec, i) => {
      sec.heading[loc] = tr.sections[i].heading;
      sec.body[loc] = tr.sections[i].body;
      if (sec.alt && tr.sections[i].alt) sec.alt[loc] = tr.sections[i].alt;
    });
  }
}

export function getCataniaDetail(slug: string): CataniaDetail | undefined {
  return CATANIA_DETAILS.find((d) => d.slug === slug);
}
