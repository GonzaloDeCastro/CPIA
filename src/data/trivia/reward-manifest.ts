export type TriviaReward = {
  speciesName: string;
  label: string;
  imagePath: string;
};

/** Las 23 fichas de fauna que se pueden ganar en trivia. */
export const TRIVIA_ANIMAL_PRIZES: TriviaReward[] = [
  {
    speciesName: "Yaguareté",
    label: "El yaguareté",
    imagePath: "/images/awareness/animals/yaguarete.png",
  },
  {
    speciesName: "Guanaco",
    label: "El guanaco andino",
    imagePath: "/images/awareness/animals/guanaco.png",
  },
  {
    speciesName: "Carpincho",
    label: "El carpincho",
    imagePath: "/images/awareness/animals/carpincho.png",
  },
  {
    speciesName: "Pingüino de Magallanes",
    label: "El pingüino de Magallanes",
    imagePath: "/images/awareness/animals/pinguino-magallanes.png",
  },
  {
    speciesName: "Cóndor andino",
    label: "El cóndor andino",
    imagePath: "/images/awareness/animals/condor-andino.png",
  },
  {
    speciesName: "Flamenco austral",
    label: "El flamenco austral",
    imagePath: "/images/awareness/animals/flamenco-austral.png",
  },
  {
    speciesName: "Ñandú",
    label: "El ñandú pampeano",
    imagePath: "/images/awareness/animals/nandu.png",
  },
  {
    speciesName: "Zorro pampeano",
    label: "El zorro pampeano",
    imagePath: "/images/awareness/animals/zorro-pampeano.png",
  },
  {
    speciesName: "Tatú carreta",
    label: "El tatú carreta",
    imagePath: "/images/awareness/animals/tatu-carreta.png",
  },
  {
    speciesName: "Mara",
    label: "La mara patagónica",
    imagePath: "/images/awareness/animals/mara.png",
  },
  {
    speciesName: "Tucán grande",
    label: "El tucán grande",
    imagePath: "/images/awareness/animals/tucan-grande.png",
  },
  {
    speciesName: "Lechucita vizcachera",
    label: "La lechucita vizcachera",
    imagePath: "/images/awareness/animals/lechucita-vizcachera.png",
  },
  {
    speciesName: "Paloma araucana",
    label: "La paloma araucana",
    imagePath: "/images/awareness/animals/paloma-araucana.png",
  },
  {
    speciesName: "Yarará",
    label: "La yarará",
    imagePath: "/images/awareness/animals/yarara.png",
  },
  {
    speciesName: "Rana criolla",
    label: "La rana criolla",
    imagePath: "/images/awareness/animals/rana-criolla.png",
  },
  {
    speciesName: "Hornero",
    label: "El hornero, ave nacional",
    imagePath: "/images/awareness/animals/hornero.png",
  },
  {
    speciesName: "Zorrino",
    label: "El zorrino",
    imagePath: "/images/awareness/animals/zorrino.png",
  },
  {
    speciesName: "Comadreja overa",
    label: "La comadreja overa",
    imagePath: "/images/awareness/animals/comadreja-overa.png",
  },
  {
    speciesName: "Vizcacha",
    label: "La vizcacha de montaña",
    imagePath: "/images/awareness/animals/vizcacha.png",
  },
  {
    speciesName: "Coatí",
    label: "El coatí",
    imagePath: "/images/awareness/animals/coati.png",
  },
  {
    speciesName: "Delfín franciscana",
    label: "El delfín franciscana",
    imagePath: "/images/awareness/animals/delfin-franciscana.png",
  },
  {
    speciesName: "Margay",
    label: "El margay",
    imagePath: "/images/awareness/animals/margay.png",
  },
  {
    speciesName: "Pejerrey",
    label: "El pejerrey",
    imagePath: "/images/awareness/animals/pejerrey.png",
  },
];

/** Fichas de fauna (animals-italia) que se pueden ganar en la trivia. */
export const TRIVIA_ANIMAL_PRIZES_ITALY: TriviaReward[] = [
  { speciesName: "Stambecco", label: "Stambecco", imagePath: "/images/awareness/animals-italia/stambecco.png" },
  { speciesName: "Camoscio alpino", label: "Camoscio alpino", imagePath: "/images/awareness/animals-italia/camoscio-alpino.png" },
  { speciesName: "Camoscio d'Abruzzo", label: "Camoscio d'Abruzzo", imagePath: "/images/awareness/animals-italia/camoscio-d-abruzzo.png" },
  { speciesName: "Aquila reale", label: "Aquila reale", imagePath: "/images/awareness/animals-italia/aquila-reale.png" },
  { speciesName: "Airone cenerino", label: "Airone cenerino", imagePath: "/images/awareness/animals-italia/airone-cenerino.png" },
  { speciesName: "Lupo", label: "Lupo", imagePath: "/images/awareness/animals-italia/lupo.png" },
  { speciesName: "Lupo appenninico", label: "Lupo appenninico", imagePath: "/images/awareness/animals-italia/lupo-appenninico.png" },
  { speciesName: "Cinghiale", label: "Cinghiale", imagePath: "/images/awareness/animals-italia/cinghiale.png" },
  { speciesName: "Gabbiano reale", label: "Gabbiano reale", imagePath: "/images/awareness/animals-italia/gabbiano-reale.png" },
  { speciesName: "Tursiope", label: "Tursiope", imagePath: "/images/awareness/animals-italia/tursiope.png" },
  { speciesName: "Falco pellegrino", label: "Falco pellegrino", imagePath: "/images/awareness/animals-italia/falco-pellegrino.png" },
  { speciesName: "Cigno reale", label: "Cigno reale", imagePath: "/images/awareness/animals-italia/cigno-reale.png" },
  { speciesName: "Orso bruno", label: "Orso bruno", imagePath: "/images/awareness/animals-italia/orso-bruno.png" },
  { speciesName: "Orso marsicano", label: "Orso marsicano", imagePath: "/images/awareness/animals-italia/orso-marsicano.png" },
  { speciesName: "Cervo nobile", label: "Cervo nobile", imagePath: "/images/awareness/animals-italia/cervo-nobile.png" },
  { speciesName: "Cervo", label: "Cervo", imagePath: "/images/awareness/animals-italia/cervo.png" },
  { speciesName: "Cervo sardo", label: "Cervo sardo", imagePath: "/images/awareness/animals-italia/cervo-sardo.png" },
  { speciesName: "Capriolo", label: "Capriolo", imagePath: "/images/awareness/animals-italia/capriolo.png" },
  { speciesName: "Fenicottero", label: "Fenicottero", imagePath: "/images/awareness/animals-italia/fenicottero.png" },
  { speciesName: "Tartaruga marina", label: "Tartaruga marina", imagePath: "/images/awareness/animals-italia/tartaruga-marina.png" },
  { speciesName: "Grillaio", label: "Grillaio", imagePath: "/images/awareness/animals-italia/grillaio.png" },
  { speciesName: "Grifone", label: "Grifone", imagePath: "/images/awareness/animals-italia/grifone.png" },
  { speciesName: "Muflone", label: "Muflone", imagePath: "/images/awareness/animals-italia/muflone.png" },
];

/** Fichas de fauna (animals-sicilia) que se pueden ganar en la trivia. */
export const TRIVIA_ANIMAL_PRIZES_SICILY: TriviaReward[] = [
  { speciesName: "Grillaio", label: "Grillaio", imagePath: "/images/awareness/animals-sicilia/grillaio.png" },
  { speciesName: "Tartaruga marina", label: "Tartaruga marina", imagePath: "/images/awareness/animals-sicilia/tartaruga-marina.png" },
  { speciesName: "Gabbiano corso", label: "Gabbiano corso", imagePath: "/images/awareness/animals-sicilia/gabbiano-corso.png" },
  { speciesName: "Istrice", label: "Istrice", imagePath: "/images/awareness/animals-sicilia/istrice.png" },
  { speciesName: "Volpe", label: "Volpe", imagePath: "/images/awareness/animals-sicilia/volpe.png" },
  { speciesName: "Poiana", label: "Poiana", imagePath: "/images/awareness/animals-sicilia/poiana.png" },
  { speciesName: "Coturnice siciliana", label: "Coturnice siciliana", imagePath: "/images/awareness/animals-sicilia/coturnice-siciliana.png" },
  { speciesName: "Riccio", label: "Riccio", imagePath: "/images/awareness/animals-sicilia/riccio.png" },
  { speciesName: "Gheppio", label: "Gheppio", imagePath: "/images/awareness/animals-sicilia/gheppio.png" },
  { speciesName: "Pesce spada", label: "Pesce spada", imagePath: "/images/awareness/animals-sicilia/pesce-spada.png" },
  { speciesName: "Falco della regina", label: "Falco della regina", imagePath: "/images/awareness/animals-sicilia/falco-della-regina.png" },
  { speciesName: "Delfino striato", label: "Delfino striato", imagePath: "/images/awareness/animals-sicilia/delfino-striato.png" },
  { speciesName: "Falco pellegrino", label: "Falco pellegrino", imagePath: "/images/awareness/animals-sicilia/falco-pellegrino.png" },
  { speciesName: "Civetta", label: "Civetta", imagePath: "/images/awareness/animals-sicilia/civetta.png" },
  { speciesName: "Lucertola siciliana", label: "Lucertola siciliana", imagePath: "/images/awareness/animals-sicilia/lucertola-siciliana.png" },
  { speciesName: "Ghiandaia marina", label: "Ghiandaia marina", imagePath: "/images/awareness/animals-sicilia/ghiandaia-marina.png" },
  { speciesName: "Averla capirossa", label: "Averla capirossa", imagePath: "/images/awareness/animals-sicilia/averla-capirossa.png" },
  { speciesName: "Fenicottero", label: "Fenicottero", imagePath: "/images/awareness/animals-sicilia/fenicottero.png" },
  { speciesName: "Avocetta", label: "Avocetta", imagePath: "/images/awareness/animals-sicilia/avocetta.png" },
  { speciesName: "Tonno rosso", label: "Tonno rosso", imagePath: "/images/awareness/animals-sicilia/tonno-rosso.png" },
];

/** Fichas de fauna de Campania: las especies de sus provincias que ya tienen ilustración (animals-italia). */
export const TRIVIA_ANIMAL_PRIZES_CAMPANIA: TriviaReward[] = [
  { speciesName: "Lupo appenninico", label: "Lupo appenninico", imagePath: "/images/awareness/animals-italia/lupo-appenninico.png" },
  { speciesName: "Cinghiale", label: "Cinghiale", imagePath: "/images/awareness/animals-italia/cinghiale.png" },
  { speciesName: "Aquila reale", label: "Aquila reale", imagePath: "/images/awareness/animals-italia/aquila-reale.png" },
  { speciesName: "Airone cenerino", label: "Airone cenerino", imagePath: "/images/awareness/animals-italia/airone-cenerino.png" },
  { speciesName: "Falco pellegrino", label: "Falco pellegrino", imagePath: "/images/awareness/animals-italia/falco-pellegrino.png" },
  { speciesName: "Gabbiano reale", label: "Gabbiano reale", imagePath: "/images/awareness/animals-italia/gabbiano-reale.png" },
  { speciesName: "Tartaruga marina", label: "Tartaruga marina", imagePath: "/images/awareness/animals-italia/tartaruga-marina.png" },
];

export type TriviaPrizeSet = "argentina" | "italia" | "sicilia" | "campania";

const PRIZES_BY_SET: Record<TriviaPrizeSet, TriviaReward[]> = {
  argentina: TRIVIA_ANIMAL_PRIZES,
  italia: TRIVIA_ANIMAL_PRIZES_ITALY,
  sicilia: TRIVIA_ANIMAL_PRIZES_SICILY,
  campania: TRIVIA_ANIMAL_PRIZES_CAMPANIA,
};

export function pickRandomTriviaPrize(set: TriviaPrizeSet = "argentina"): TriviaReward {
  const list = PRIZES_BY_SET[set];
  const index = Math.floor(Math.random() * list.length);
  return list[index] ?? list[0];
}
