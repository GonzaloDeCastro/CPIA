/**
 * Schede delle cinque province della Campania. Il campo `wiki` è il titolo
 * della voce (it.wikipedia, e se manca en.wikipedia o Commons).
 * `file` = foto scelta a mano su Wikimedia Commons (ha la precedenza).
 * Gli item senza foto vengono omessi da build-campania-content.mjs.
 */
export const CAMPANIA_CATALOG = [
  {
    slug: "avellino",
    name: "Avellino",
    shortName: "AV",
    description:
      "L'Irpinia: montagne coperte di faggi, boschi di noccioli e castagni, abbazie sui monti e vigne antiche. Il nome della provincia ricorda perfino la nocciola.",
    flora:
      "Noccioleti sulle colline, faggete sul Laceno e sui Monti Picentini, querce cerro nei boschi più bassi.",
    fauna:
      "Il lupo appenninico nei boschi alti, il gatto selvatico tra le faggete e il nibbio reale che volteggia sopra i campi.",
    foodsText: "Castagne di Montella, tartufo nero di Bagnoli Irpino e torrone di nocciole.",
    curiosity:
      "Il nome scientifico del nocciolo, Corylus avellana, deriva proprio da Avella, vicino ad Avellino: da qui le nocciole partivano già in epoca romana.",
    spotlight:
      "Avellino ha circa quattrocentomila abitanti. Il capoluogo sta in una conca circondata dai monti, e la provincia, l'Irpinia, è la più montuosa della Campania.\nÈ la terra dei boschi, delle abbazie e delle sorgenti: a Caposele nascono le sorgenti del fiume Sele, le cui acque finiscono in un grande acquedotto fino in Puglia.",
    plants: [
      {
        name: "Nocciolo",
        wiki: "Corylus avellana",
        file: "Hazelnuts (Corylus avellana).jpg",
        description:
          "Gli arbusti di nocciolo riempiono le colline dell'Irpinia. Dalle nocciole si fanno torroni e creme, e il suo nome latino viene da Avella.",
      },
      {
        name: "Faggio",
        wiki: "Fagus sylvatica",
        description:
          "Sui Monti Picentini e intorno al lago Laceno forma boschi alti e fitti. In autunno le foglie diventano rosse e dorate.",
      },
      {
        name: "Cerro",
        wiki: "Quercus cerris",
        description:
          "Quercia robusta dei boschi più bassi. Si riconosce dalle ghiande con la cupola 'riccia' e dal tronco scuro e screpolato.",
      },
    ],
    animals: [
      {
        name: "Lupo appenninico",
        wiki: "Canis lupus italicus",
        description:
          "Vive nei boschi alti dei Monti Picentini. Caccia di notte e vive in branco; di solito evita le persone.",
      },
      {
        name: "Gatto selvatico",
        wiki: "Felis silvestris",
        description:
          "Più grosso e robusto di un gatto di casa, con la coda ad anelli e la punta nera. Vive nascosto tra le faggete e di giorno si vede quasi mai.",
      },
      {
        name: "Nibbio reale",
        wiki: "Milvus milvus",
        description:
          "Rapace dalla coda a forchetta rossiccia. Plana sopra i campi dell'Irpinia in cerca di piccoli animali e di carogne.",
      },
    ],
    foods: [
      {
        name: "Castagna di Montella",
        wiki: "Castagna di Montella",
        description:
          "Castagna dolce e con la buccia sottile, raccolta nei boschi di Montella. Si mangia arrostita in autunno o trasformata in marroni e farina.",
      },
      {
        name: "Tartufo nero di Bagnoli Irpino",
        wiki: "Tuber aestivum",
        file: "Black.summer.truffle.arp.jpg",
        description:
          "Il fungo che cresce sottoterra vicino alle radici di certi alberi. Cani addestrati lo trovano dall'odore, e poche fettine bastano a profumare un piatto.",
      },
      {
        name: "Torrone di nocciole",
        wiki: "Torrone",
        description:
          "Dolce di nocciole, miele e zucchero, tipico delle feste. In Irpinia si prepara con le nocciole locali e si taglia a pezzi.",
      },
    ],
    tourism: [
      {
        name: "Abbazia del Goleto",
        wiki: "Abbazia del Goleto",
        description:
          "Monastero medievale a Sant'Angelo dei Lombardi, con una chiesa su due piani e una torre. Fu fondato da San Guglielmo da Vercelli.",
      },
      {
        name: "Santuario di Montevergine",
        wiki: "Santuario di Montevergine",
        description:
          "Sta in cima al monte Partenio, a oltre mille metri. Si può salire a piedi o in funivia, e dentro c'è una Madonna molto venerata.",
      },
      {
        name: "Lago Laceno",
        wiki: "Laceno",
        description:
          "Lago di montagna tra le faggete dei Picentini. D'estate ci si passeggia e ci si pedala, d'inverno c'è la neve per sciare e slittare.",
      },
    ],
    history: [
      {
        name: "Il terremoto dell'Irpinia del 1980",
        wiki: "Terremoto dell'Irpinia del 1980",
        file: "Destruction à Conza della Campania suite au Séisme d'Irpinia du 23 novembre 1980.png",
        description:
          "Il 23 novembre 1980 una scossa fortissima colpì decine di paesi dell'Irpinia. La ricostruzione durò molti anni e cambiò il modo di costruire in Italia.",
      },
      {
        name: "Guglielmo da Vercelli",
        wiki: "Guglielmo da Vercelli",
        description:
          "Un monaco che all'inizio del 1100 salì su un monte dell'Irpinia e vi fondò l'abbazia di Montevergine e poi quella del Goleto.",
      },
      {
        name: "Francesco De Sanctis",
        wiki: "Francesco De Sanctis",
        description:
          "Nato a Morra Irpina nel 1817, fu uno dei grandi studiosi della letteratura italiana e ministro dell'istruzione dopo l'Unità d'Italia.",
      },
    ],
  },
  {
    slug: "benevento",
    name: "Benevento",
    shortName: "BN",
    description:
      "Il Sannio: colline di vigne e uliveti, una città romana con il suo arco e le leggende delle streghe che ballano sotto il noce.",
    flora:
      "Roverelle sui pendii, noci attorno alla città e filari di vite aglianico sulle colline del Taburno.",
    fauna:
      "Cinghiali nei boschi, la lepre italica tra i campi e il tasso che esce solo al buio.",
    foodsText: "Cavatelli, liquore Strega e soppressata sannita.",
    curiosity:
      "Secondo la leggenda le streghe di Benevento si riunivano di notte sotto un grande noce, e da lì il liquore Strega ha preso il nome.",
    spotlight:
      "Benevento ha circa duecentosessantamila abitanti ed è la provincia più piccola della Campania. La città fu romana, poi longobarda, poi dello Stato della Chiesa.\nQui ci sono monumenti che hanno duemila anni, come l'Arco di Traiano e il Teatro romano, e il massiccio del Taburno-Camposauro con i suoi boschi.",
    plants: [
      {
        name: "Noce",
        wiki: "Juglans regia",
        file: "Juglans regia 2009 G2.jpg",
        description:
          "Albero grande dalla chioma larga, citato nelle leggende delle streghe. Le noci si raccolgono in autunno e si usano nei dolci.",
      },
      {
        name: "Roverella",
        wiki: "Quercus pubescens",
        description:
          "Quercia delle colline del Sannio. Resiste bene alla siccità e in inverno tiene molte foglie secche sui rami.",
      },
      {
        name: "Ulivo",
        wiki: "Olea europaea",
        description:
          "Gli ulivi disegnano le colline del Sannio. Dalle olive si spreme l'olio, che accompagna il pane e le zuppe di legumi.",
      },
    ],
    animals: [
      {
        name: "Cinghiale",
        wiki: "Sus scrofa",
        description:
          "Vive nei boschi di roverella e di faggio. Con il muso scava il terreno per trovare radici e ghiande.",
      },
      {
        name: "Lepre italica",
        wiki: "Lepus corsicanus",
        description:
          "Una lepre che vive solo in Italia centro-meridionale e in Sicilia. È rara e si distingue dalla lepre europea per la pelliccia più chiara sul ventre.",
      },
      {
        name: "Tasso",
        wiki: "Meles meles",
        description:
          "Esce di notte dalla tana e cerca vermi, frutti e radici. Ha il muso bianco con due strisce nere.",
      },
    ],
    foods: [
      {
        name: "Cavatelli",
        wiki: "Cavatelli",
        description:
          "Pasta fatta a mano con farina e acqua, a forma di piccole conchiglie allungate. Nel Sannio si condisce con broccoli, fagioli o un semplice sugo.",
      },
      {
        name: "Liquore Strega",
        wiki: "Strega (liquore)",
        description:
          "Liquore giallo allo zafferano e alle erbe, nato a Benevento nel 1860. È per i grandi: ai bambini resta la leggenda delle streghe disegnate sull'etichetta.",
      },
      {
        name: "Soppressata sannita",
        wiki: "Soppressata",
        description:
          "Salume di carne di maiale, aglio e pepe, stagionato per mesi. Si affetta sottile e si mangia con il pane.",
      },
    ],
    tourism: [
      {
        name: "Arco di Traiano",
        wiki: "Arco di Traiano (Benevento)",
        description:
          "Arco di trionfo romano alto più di quindici metri, costruito nel 114 d.C. Racconta in marmo le imprese dell'imperatore Traiano.",
      },
      {
        name: "Teatro romano di Benevento",
        wiki: "Teatro romano di Benevento",
        description:
          "Costruito nel II secolo d.C. poteva ospitare oltre diecimila spettatori. Ancora oggi vi si tengono spettacoli all'aperto.",
      },
      {
        name: "Chiesa di Santa Sofia",
        wiki: "Chiesa di Santa Sofia (Benevento)",
        description:
          "Chiesa longobarda del 760 con una pianta a stella. Fa parte dei luoghi dei Longobardi in Italia, patrimonio UNESCO.",
      },
    ],
    history: [
      {
        name: "Le Forche Caudine",
        wiki: "Battaglia delle Forche Caudine",
        file: "Veduta delle Forche Caudine dalla parte del Sannio (acquaforte).jpg",
        description:
          "Nel 321 a.C. i Sanniti chiusero un esercito romano in una stretta valle e lo costrinsero a passare sotto un giogo di lance: per i Romani fu una grande umiliazione.",
      },
      {
        name: "Il Ducato longobardo",
        wiki: "Ducato di Benevento",
        description:
          "Dopo i Romani, i Longobardi fecero di Benevento un ducato potente nel Sud Italia, che durò per secoli.",
      },
      {
        name: "La battaglia di Benevento",
        wiki: "Battaglia di Benevento",
        description:
          "Nel 1266 Carlo d'Angiò sconfisse il re Manfredi presso la città. Fu una battaglia che cambiò chi governava il Sud Italia.",
      },
    ],
  },
  {
    slug: "caserta",
    name: "Caserta",
    shortName: "CE",
    description:
      "Una reggia grandissima, pianure dove pascolano le bufale e il Volturno che scende al mare. A Caserta si fa la mozzarella e si racconta Spartaco.",
    flora:
      "Castagni attorno al vulcano spento di Roccamonfina, pinete lungo la costa e vigne di asprinio che salgono sui pioppi.",
    fauna:
      "Le bufale mediterranee nei pascoli, gli aironi cenerini alle foci del Volturno e l'aquila reale sul Matese.",
    foodsText: "Mozzarella di bufala, mela annurca e vino Falerno.",
    curiosity:
      "La Reggia di Caserta ha 1.200 stanze e un parco con una cascata artificiale lunga più di settanta metri: è uno dei palazzi più grandi del mondo.",
    spotlight:
      "Caserta ha circa novecentomila abitanti. La provincia comprende la pianura del Volturno, la costa del Litorale Domizio e le montagne del Matese.\nUn tempo si chiamava Terra di Lavoro, per la fertilità dei campi. Qui si allevano le bufale mediterranee, da cui si ricava la mozzarella.",
    plants: [
      {
        name: "Castagno",
        wiki: "Castanea sativa",
        description:
          "Cresce nei boschi attorno al vulcano spento di Roccamonfina. Le castagne maturano in autunno dentro i ricci spinosi.",
      },
      {
        name: "Pino domestico",
        wiki: "Pinus pinea",
        description:
          "Il pino dalla chioma a ombrello. Le pinete del Litorale Domizio fanno ombra alla sabbia e producono i pinoli.",
      },
      {
        name: "Leccio",
        wiki: "Quercus ilex",
        description:
          "Quercia sempreverde delle colline calde. Le sue foglie dure e scure restano sul ramo anche d'inverno.",
      },
    ],
    animals: [
      {
        name: "Bufala mediterranea",
        wiki: "Bubalus bubalis",
        description:
          "Grande bovino scuro con le corna a mezzaluna. Gli allevamenti di Caserta producono il latte per la mozzarella.",
      },
      {
        name: "Airone cenerino",
        wiki: "Ardea cinerea",
        description:
          "Uccello alto e grigio con il lungo collo. Aspetta immobile nell'acqua bassa delle zone umide del Volturno per pescare.",
      },
      {
        name: "Aquila reale",
        wiki: "Aquila chrysaetos",
        description:
          "Il re del cielo sulle cime del Matese. Con le sue ali larghe oltre due metri vola alta e cerca lepri e altri piccoli animali.",
      },
    ],
    foods: [
      {
        name: "Mozzarella di bufala campana",
        wiki: "Mozzarella di bufala campana",
        description:
          "Formaggio fresco fatto con il latte di bufala. È bianco, morbido e delicato, e si mangia da solo o sulla pizza.",
      },
      {
        name: "Mela annurca",
        wiki: "Mela annurca",
        file: "Annurca apple.JPG",
        description:
          "Piccola mela rossa croccante e profumata. Si lascia maturare sul letto di paglia, dove prende il suo colore.",
      },
      {
        name: "Falerno del Massico",
        wiki: "Falerno del Massico",
        description:
          "Vino dei colli del Massico che i Romani adoravano già duemila anni fa e che nelle poesie antiche era detto il migliore.",
      },
    ],
    tourism: [
      {
        name: "Reggia di Caserta",
        wiki: "Reggia di Caserta",
        description:
          "Palazzo reale dei Borbone con scaloni enormi, giardini e fontane. Oggi è patrimonio UNESCO e ci hanno girato film famosi.",
      },
      {
        name: "Anfiteatro Campano",
        wiki: "Anfiteatro campano",
        description:
          "A Santa Maria Capua Vetere, uno dei più grandi anfiteatri romani, secondo solo al Colosseo. Qui si allenavano i gladiatori.",
      },
      {
        name: "San Leucio",
        wiki: "Belvedere di San Leucio",
        description:
          "Un villaggio reale fondato dai Borbone per fabbricare la seta. Gli operai vivevano in case con scuola e giardino.",
      },
    ],
    history: [
      {
        name: "Luigi Vanvitelli e la Reggia",
        wiki: "Luigi Vanvitelli",
        description:
          "Il re Carlo di Borbone nel 1752 affidò all'architetto Luigi Vanvitelli la costruzione di una reggia capace di rivaleggiare con Versailles.",
      },
      {
        name: "Spartaco a Capua",
        wiki: "Spartaco",
        description:
          "Nella scuola per gladiatori di Capua, nel 73 a.C., Spartaco guidò una ribellione di schiavi contro Roma.",
      },
      {
        name: "La battaglia del Volturno",
        wiki: "Battaglia del Volturno (1860)",
        description:
          "Nel 1860 Garibaldi e i suoi Mille sconfissero l'esercito borbonico sulle rive del Volturno, una tappa dell'Unità d'Italia.",
      },
    ],
  },
  {
    slug: "napoli",
    name: "Napoli",
    shortName: "NA",
    description:
      "Un golfo, un vulcano e tre isole. La provincia di Napoli è la più affollata d'Italia e vive tra pizza, sole, Vesuvio e città sepolte.",
    flora:
      "Limoni grandi come palloni a Sorrento, ginestre sulle pendici del Vesuvio e macchia mediterranea sulle isole.",
    fauna:
      "La lucertola azzurra dei faraglioni di Capri, gabbiani reali sui moli e falchi pellegrini sulle scogliere.",
    foodsText: "Pizza napoletana, sfogliatella e babà.",
    curiosity:
      "Il Vesuvio è l'unico vulcano attivo dell'Europa continentale: l'ultima eruzione risale al 1944, ed è tenuto sempre sotto controllo.",
    spotlight:
      "La provincia di Napoli ha circa tre milioni di abitanti ed è la più densamente popolata d'Italia. Comprende anche le isole di Capri, Ischia e Procida.\nÈ una terra di vulcani: il Vesuvio, i Campi Flegrei e le isole stesse sono nati dal fuoco della terra.",
    plants: [
      {
        name: "Limone di Sorrento",
        wiki: "Limone di Sorrento",
        description:
          "Limone grosso e profumato che cresce sulla costiera sorrentina, protetto con reti e pali di legno. Con la sua buccia si fa il limoncello.",
      },
      {
        name: "Ginestra",
        wiki: "Spartium junceum",
        description:
          "Arbusto dai fiori gialli che cresce anche sul terreno lavico del Vesuvio. Leopardi le dedicò una famosa poesia.",
      },
      {
        name: "Lentisco",
        wiki: "Pistacia lentiscus",
        description:
          "Cespuglio sempreverde della macchia mediterranea su Capri, Ischia e Procida. Le foglie lucide e profumate di resina resistono al sole e alla salsedine.",
      },
    ],
    animals: [
      {
        name: "Lucertola azzurra",
        wiki: "Podarcis siculus coeruleus",
        description:
          "Vive solo su un faraglione di Capri. Ha il corpo di un blu intenso, nato per mimetizzarsi con il cielo e il mare.",
      },
      {
        name: "Gabbiano reale",
        wiki: "Larus michahellis",
        description:
          "Il gabbiano grande che vedi sul porto di Napoli. Ha il becco giallo con una macchia rossa e mangia pesci e avanzi.",
      },
      {
        name: "Falco pellegrino",
        wiki: "Falco peregrinus",
        description:
          "È il più veloce di tutti gli animali: in picchiata supera i trecento chilometri all'ora. Nidifica sulle scogliere di Capri.",
      },
    ],
    foods: [
      {
        name: "Pizza napoletana",
        wiki: "Pizza napoletana",
        description:
          "Impasto morbido con pomodoro e mozzarella, cotta in pochi secondi in un forno a legna. L'arte dei pizzaioli napoletani è patrimonio UNESCO.",
      },
      {
        name: "Sfogliatella",
        wiki: "Sfogliatella",
        description:
          "Dolce a conchiglia fatto di tante sfoglie sottili e ripieno di ricotta e semolino. Può essere riccia o frolla.",
      },
      {
        name: "Babà",
        wiki: "Babà",
        description:
          "Dolce soffice a forma di fungo, bagnato con sciroppo al rum. Arrivò a Napoli dalla Francia e divenne un simbolo della città.",
      },
    ],
    tourism: [
      {
        name: "Vesuvio",
        wiki: "Vesuvio",
        description:
          "Il vulcano che domina il golfo. Si può salire fino al cratere con un sentiero e dall'alto vedere tutta la baia di Napoli.",
      },
      {
        name: "Scavi di Pompei",
        wiki: "Pompei",
        description:
          "La città romana sepolta dalla cenere del Vesuvio nel 79 d.C. Camminando tra le sue strade si vedono case, botteghe e affreschi ancora intatti.",
      },
      {
        name: "Isola di Capri",
        wiki: "Capri",
        description:
          "Isola di scogliere altissime, grotte azzurre e i faraglioni, tre grandi rocce che escono dal mare davanti alla costa.",
      },
    ],
    history: [
      {
        name: "L'eruzione del Vesuvio del 79",
        wiki: "Eruzione del Vesuvio del 79",
        description:
          "Nel 79 d.C. il vulcano coprì Pompei ed Ercolano di cenere e lapilli. Le città rimasero nascoste per quasi diciassette secoli.",
      },
      {
        name: "Neapolis, la città nuova",
        wiki: "Neapolis (Napoli)",
        description:
          "Napoli nacque come colonia greca e fu chiamata 'città nuova' (Neapolis). Il cuore antico, con le sue strade dritte, esiste ancora.",
      },
      {
        name: "Le Quattro giornate di Napoli",
        wiki: "Quattro giornate di Napoli",
        description:
          "Nel settembre 1943 il popolo di Napoli si ribellò all'esercito tedesco e liberò la città pochi giorni prima dell'arrivo degli Alleati.",
      },
    ],
  },
  {
    slug: "salerno",
    name: "Salerno",
    shortName: "SA",
    description:
      "La più grande provincia della Campania: scogliere a picco sulla Costiera Amalfitana, i templi greci di Paestum e il Cilento, tra boschi e spiagge.",
    flora:
      "Limoni sfusati ad Amalfi, la rara primula di Palinuro sulle rupi e carrubi nel Cilento.",
    fauna:
      "La lontra nei fiumi del Cilento, le tartarughe marine che nidificano sulle spiagge e la salamandrina nei boschi umidi.",
    foodsText: "Colatura di alici, delizia al limone e pomodoro San Marzano.",
    curiosity:
      "La Scuola Medica Salernitana, nata nel Medioevo, è considerata la prima università di medicina d'Europa e ammetteva anche le donne.",
    spotlight:
      "Salerno ha circa un milione di abitanti ed è la provincia più estesa della Campania. Arriva fino al Parco Nazionale del Cilento, patrimonio UNESCO.\nHa due volti: la Costiera Amalfitana, con paesi a picco sul mare, e il Cilento, fatto di montagne, spiagge e antiche città greche.",
    plants: [
      {
        name: "Limone sfusato amalfitano",
        wiki: "Limone Costa d'Amalfi",
        description:
          "Limone lungo e profumatissimo che cresce sui terrazzamenti della Costiera. Si fa anche il limoncello e il dolce delizia al limone.",
      },
      {
        name: "Primula di Palinuro",
        wiki: "Primula palinuri",
        description:
          "Fiorellino giallo che cresce solo su poche scogliere del Sud Italia, come quelle di Capo Palinuro. È una pianta rarissima, protetta.",
      },
      {
        name: "Carrubo",
        wiki: "Ceratonia siliqua",
        description:
          "Albero sempreverde dai baccelli scuri e dolci, chiamati carrube. Cresce bene sul terreno secco e caldo del Cilento.",
      },
    ],
    animals: [
      {
        name: "Lontra europea",
        wiki: "Lutra lutra",
        description:
          "Mammifero nuotatore dai fiumi puliti del Cilento. Mangia pesci e rane, ed è un segno che l'acqua è sana.",
      },
      {
        name: "Tartaruga marina",
        wiki: "Caretta caretta",
        description:
          "A fine primavera depone le uova sulle spiagge del Cilento. Volontari proteggono i nidi finché i piccoli non raggiungono il mare.",
      },
      {
        name: "Salamandrina dagli occhiali",
        wiki: "Salamandrina terdigitata",
        description:
          "Piccola salamandra nera con due macchie chiare sul capo e il ventre rosso. Vive vicino ai ruscelli freschi e ombrosi.",
      },
    ],
    foods: [
      {
        name: "Colatura di alici di Cetara",
        wiki: "Colatura di alici",
        description:
          "Liquido dorato che si ottiene dalle alici sotto sale, erede dell'antico garum romano. Condisce spaghetti e verdure.",
      },
      {
        name: "Delizia al limone",
        wiki: "Delizia al limone",
        description:
          "Dolce a cupola con pan di spagna, crema e glassa al limone della Costiera. È un dolce tipico della Costiera.",
      },
      {
        name: "Pomodoro San Marzano",
        wiki: "San Marzano (pomodoro)",
        description:
          "Pomodoro lungo e rosso cresciuto vicino al Vesuvio, nelle terre di Sarno. È il più amato per fare il sugo e la pizza.",
      },
    ],
    tourism: [
      {
        name: "Costiera Amalfitana",
        wiki: "Costiera amalfitana",
        description:
          "Costa con paesi colorati appesi alle rocce, come Positano e Amalfi. La strada panoramica sale e scende tra mare e limoneti.",
      },
      {
        name: "Templi di Paestum",
        wiki: "Paestum",
        description:
          "Tre grandi templi greci di più di duemilacinquecento anni fa, in mezzo alla campagna. Sono tra i meglio conservati al mondo.",
      },
      {
        name: "Certosa di Padula",
        wiki: "Certosa di San Lorenzo (Padula)",
        description:
          "Uno dei più grandi monasteri d'Italia, con un chiostro enorme e una scala a chiocciola. Ci vivevano i monaci certosini.",
      },
    ],
    history: [
      {
        name: "La Scuola Medica Salernitana",
        wiki: "Scuola medica salernitana",
        description:
          "Fu la prima scuola di medicina d'Europa. I suoi maestri scrissero libri di consigli per stare bene con piante, cibi sani e riposo.",
      },
      {
        name: "La Repubblica di Amalfi",
        wiki: "Repubblica di Amalfi",
        file: "Arsenale medievale di Amalfi.jpg",
        description:
          "Per secoli Amalfi fu una potente repubblica di marinai. Le sue regole sul commercio per mare, le Tavole Amalfitane, furono usate in tutto il Mediterraneo.",
      },
      {
        name: "La spedizione di Sapri",
        wiki: "Spedizione di Sapri",
        description:
          "Nel 1857 Carlo Pisacane sbarcò a Sapri con pochi compagni per liberare il Sud dal re. Fu sconfitto, ma il suo gesto ispirò l'Unità d'Italia.",
      },
    ],
  },
];
