/**
 * Fotos de la sección "Benessere" (Catania), enviadas por Cristina el 16/11/2026.
 * Archivos en `public/guida/benessere/NN.webp` (1280 px) y `NN-sm.webp` (560 px), sin EXIF.
 * Leyendas en italiano fácil: revisarlas con el equipo si algún lugar es otro.
 */
export type GalleryPhoto = { file: string; caption: string; wide?: boolean };

export const BENESSERE_PHOTOS: GalleryPhoto[] = [
  { file: "06", caption: "La zagara: il fiore dell'arancio", wide: true },
  { file: "01", caption: "Grandi alberi in città" },
  { file: "02", caption: "Un grande albero in piazza" },
  { file: "03", caption: "Ombra sotto gli alberi" },
  { file: "04", caption: "Un albero vicino alla strada" },
  { file: "05", caption: "Alberi alti in città" },
  { file: "07", caption: "Guardare in alto, tra i rami" },
  { file: "08", caption: "Luce nel bosco" },
  { file: "09", caption: "Un vecchio albero nel bosco" },
  { file: "10", caption: "Il bosco verde" },
  { file: "11", caption: "Foglie d'autunno sul sentiero" },
  { file: "12", caption: "Fiori rosa" },
  { file: "13", caption: "Un albero al tramonto" },
  { file: "14", caption: "Il rosmarino" },
  { file: "15", caption: "Una pianta con fiori rossi" },
  { file: "16", caption: "Arance sull'albero" },
  { file: "17", caption: "Un sentiero tra gli agrumi" },
  { file: "18", caption: "Agrumi sull'albero" },
  { file: "19", caption: "Al lavoro nell'agrumeto" },
  { file: "20", caption: "L'Etna e il bosco" },
  { file: "21", caption: "Arcobaleno sull'Etna" },
  { file: "22", caption: "Un rifugio nel bosco" },
  { file: "23", caption: "L'Etna di notte: la lava" },
  { file: "24", caption: "I colori dell'autunno" },
  { file: "25", caption: "Le betulle dell'Etna" },
  { file: "26", caption: "L'acqua scorre tra le rocce" },
  { file: "27", caption: "Un sentiero con la neve" },
  { file: "28", caption: "Il bosco d'autunno sull'Etna" },
];
