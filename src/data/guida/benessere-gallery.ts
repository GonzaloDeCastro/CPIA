/**
 * Fotos de la sección "Benessere" (Catania), enviadas por Cristina el 16/11/2026 (01–28) y el 19/11/2026 (29–43).
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
  { file: "29", caption: "Tramonto tra le foglie d'autunno" },
  { file: "30", caption: "Il sentiero nero dell'Etna" },
  { file: "31", caption: "L'Etna con la neve" },
  { file: "32", caption: "Una casetta nel bosco d'autunno" },
  { file: "33", caption: "Fiori rosa sulla lava" },
  { file: "34", caption: "Il sole tra i pini" },
  { file: "35", caption: "Un rifugio di pietra con la neve" },
  { file: "36", caption: "Il fumo dell'Etna sulla neve" },
  { file: "37", caption: "Il sole tra i pini alti" },
  { file: "38", caption: "Neve, nuvole e il mare in fondo" },
  { file: "39", caption: "Un arco di roccia lavica" },
  { file: "40", caption: "La lava scende dal vulcano" },
  { file: "41", caption: "Un albero giallo d'autunno" },
  { file: "42", caption: "Un sentiero nella neve tra i pini" },
  { file: "43", caption: "L'Etna tra i boschi e la neve" },
];

/**
 * Fotos de la sección "Sport" (calcio), enviadas el 19-20/11/2026. Se publican con autorización del equipo.
 * Archivos en `public/guida/deporte/NN.webp` (1280 px) y `NN-sm.webp` (560 px), sin EXIF.
 * Quedaron afuera el selfie y una copia en baja resolución. Leyendas en italiano fácil.
 */
export const SPORT_PHOTOS: GalleryPhoto[] = [
  { file: "01", caption: "Una squadra in posa prima della partita", wide: true },
  { file: "02", caption: "La squadra con le maglie bianche e azzurre" },
  { file: "03", caption: "Tifosi con la bandiera del Marocco" },
  { file: "04", caption: "La squadra con le maglie nere e rosse" },
  { file: "05", caption: "Una partita di calcio di sera" },
  { file: "06", caption: "Festa con la torta dopo la partita" },
  { file: "07", caption: "La squadra sotto i riflettori" },
  { file: "08", caption: "Il giocatore numero 55 con il pallone" },
  { file: "09", caption: "L'abbraccio della squadra" },
  { file: "10", caption: "Foto di squadra con le maglie bianche" },
  { file: "11", caption: "Allenamento: si corre sul campo" },
  { file: "12", caption: "I giocatori a bordo campo" },
  { file: "13", caption: "L'allenatore e un giocatore con la torta" },
  { file: "14", caption: "Il riscaldamento sul campo" },
  { file: "15", caption: "Allenamento con le luci accese" },
  { file: "16", caption: "I giocatori in fila sul campo" },
];

/**
 * Fotos de la sección "Arte" (Catania, su provincia y el Castello Normanno de Paternò), enviadas el 25/11/2026.
 * Archivos en `public/guida/arte/NN.webp` y `NN-sm.webp` (lado mayor 1280 / 560 px), sin EXIF.
 * Leyendas en italiano fácil: revisarlas con el equipo si algún lugar es otro.
 */
export const ARTE_PHOTOS: GalleryPhoto[] = [
  { file: "01", caption: "Il Duomo di Catania durante la festa di Sant'Agata", wide: true },
  { file: "02", caption: "La processione di Sant'Agata" },
  { file: "03", caption: "Il Teatro Massimo Bellini" },
  { file: "04", caption: "Il Palazzo dell'Università" },
  { file: "05", caption: "La facciata di un palazzo barocco" },
  { file: "06", caption: "Una grande cupola" },
  { file: "07", caption: "La cupola dietro gli alberi" },
  { file: "08", caption: "Una chiesa e la sua piazza di sera" },
  { file: "09", caption: "Una chiesa con il campanile e la cupola" },
  { file: "10", caption: "Il Castello Normanno di Paternò" },
  { file: "11", caption: "Il castello sulla collina" },
  { file: "12", caption: "Il castello e le rocce di lava" },
  { file: "13", caption: "Le finestre del castello" },
  { file: "14", caption: "La torre di pietra" },
  { file: "15", caption: "La strada verso il castello" },
  { file: "16", caption: "La scala per salire al castello" },
  { file: "17", caption: "Il cartello del Castello Normanno" },
  { file: "18", caption: "Una sala con una vetrata colorata e i pianeti" },
];
