import type { Locale } from "@/lib/i18n/locale";

type Tr = Record<Locale, string>;

export type PhraseItem = { it: string; tr: Tr; arLatin: string };
export type PhraseGroup = { id: string; title: Tr; items: PhraseItem[] };

/** Frasi útiles por situación (fuente: "Frasi utili in provincia di Catania"). Árabe a revisar con hablante nativo. */
export const PHRASE_GROUPS: PhraseGroup[] = [
  {
    id: "questura",
    title: { it: "In questura – permesso di soggiorno", fr: "À la préfecture de police – permis de séjour", en: "At the police HQ – residence permit", es: "En la comisaría – permiso de residencia", ar: "في مركز الشرطة – تصريح الإقامة", ro: "La chestură – permis de ședere" },
    items: [
      { it: "Buongiorno. Ho un appuntamento per il permesso di soggiorno.", tr: { it: "Buongiorno. Ho un appuntamento per il permesso di soggiorno.", fr: "Bonjour. J’ai un rendez-vous pour le permis de séjour.", en: "Good morning. I have an appointment for my residence permit.", es: "Buenos días. Tengo una cita para el permiso de residencia.", ar: "صباح الخير. لدي موعد من أجل تصريح الإقامة.", ro: "Bună ziua. Am o programare pentru permisul de ședere." }, arLatin: "Sabāḥ al-khayr. Ladayya maw‘id min ajli taṣrīḥ al-iqāma." },
      { it: "Ecco il mio passaporto e la ricevuta della Posta.", tr: { it: "Ecco il mio passaporto e la ricevuta della Posta.", fr: "Voici mon passeport et le récépissé de la Poste.", en: "Here is my passport and the receipt from the Post Office.", es: "Aquí está mi pasaporte y el recibo de Correos.", ar: "هذا هو جواز سفري وإيصال البريد.", ro: "Iată pașaportul meu și chitanța de la Poștă." }, arLatin: "Hādhā huwa jawāz safarī wa-īṣāl al-barīd." },
      { it: "Scusi, può parlare più lentamente, per favore?", tr: { it: "Scusi, può parlare più lentamente, per favore?", fr: "Excusez-moi, pouvez-vous parler plus lentement, s’il vous plaît ?", en: "Excuse me, could you speak more slowly, please?", es: "Disculpe, ¿puede hablar más despacio, por favor?", ar: "من فضلك، هل يمكنك التحدث ببطء؟", ro: "Scuzați-mă, puteți vorbi mai rar, vă rog?" }, arLatin: "Min faḍlika, hal yumkinuka at-taḥaddut bi-buṭ’?" },
      { it: "Quando posso ritirare il permesso di soggiorno?", tr: { it: "Quando posso ritirare il permesso di soggiorno?", fr: "Quand puis-je retirer mon permis de séjour ?", en: "When can I collect my residence permit?", es: "¿Cuándo puedo recoger el permiso de residencia?", ar: "متى يمكنني استلام تصريح الإقامة؟", ro: "Când pot ridica permisul de ședere?" }, arLatin: "Matā yumkinunī istilām taṣrīḥ al-iqāma?" },
    ],
  },
  {
    id: "entrate",
    title: { it: "Agenzia delle Entrate – codice fiscale e tessera sanitaria", fr: "Agenzia delle Entrate – code fiscal et carte de santé", en: "Revenue Agency – tax code and health card", es: "Agencia Tributaria – código fiscal y tarjeta sanitaria", ar: "وكالة الإيرادات – الرقم الضريبي والبطاقة الصحية", ro: "Agenția Fiscală – cod fiscal și card de sănătate" },
    items: [
      { it: "Buongiorno. Vorrei richiedere il codice fiscale.", tr: { it: "Buongiorno. Vorrei richiedere il codice fiscale.", fr: "Bonjour. Je voudrais demander mon code fiscal.", en: "Good morning. I would like to request my tax code (codice fiscale).", es: "Buenos días. Quisiera solicitar mi código fiscal.", ar: "صباح الخير. أودّ طلب الرقم الضريبي (كودتشي فيسكالي).", ro: "Bună ziua. Aș dori să solicit codul fiscal." }, arLatin: "Sabāḥ al-khayr. Awaddu ṭalab ar-raqm aḍ-ḍarībī." },
      { it: "Ecco il mio passaporto e il permesso di soggiorno.", tr: { it: "Ecco il mio passaporto e il permesso di soggiorno.", fr: "Voici mon passeport et mon permis de séjour.", en: "Here is my passport and my residence permit.", es: "Aquí están mi pasaporte y mi permiso de residencia.", ar: "هذا هو جواز سفري وتصريح إقامتي.", ro: "Iată pașaportul meu și permisul de ședere." }, arLatin: "Hādhā huwa jawāz safarī wa-taṣrīḥ iqāmatī." },
      { it: "Vorrei anche la tessera sanitaria. Cosa devo fare?", tr: { it: "Vorrei anche la tessera sanitaria. Cosa devo fare?", fr: "Je voudrais aussi la carte de santé. Que dois-je faire ?", en: "I would also like the health card. What do I need to do?", es: "También quisiera la tarjeta sanitaria. ¿Qué debo hacer?", ar: "أودّ أيضًا الحصول على البطاقة الصحية. ماذا يجب أن أفعل؟", ro: "Aș dori și cardul de sănătate. Ce trebuie să fac?" }, arLatin: "Awaddu aḍan al-ḥuṣūl ‘alā al-biṭāqa aṣ-ṣiḥḥiyya. Mādhā yajibu an af‘al?" },
      { it: "Scusi, può scrivere il mio codice fiscale su un foglio?", tr: { it: "Scusi, può scrivere il mio codice fiscale su un foglio?", fr: "Excusez-moi, pouvez-vous écrire mon code fiscal sur une feuille ?", en: "Excuse me, could you write my tax code on a piece of paper?", es: "Disculpe, ¿puede escribir mi código fiscal en un papel?", ar: "من فضلك، هل يمكنك كتابة الرقم الضريبي على ورقة؟", ro: "Scuzați-mă, puteți scrie codul meu fiscal pe o foaie?" }, arLatin: "Min faḍlika, hal yumkinuka kitābat ar-raqm aḍ-ḍarībī ‘alā waraqa?" },
    ],
  },
  {
    id: "asp",
    title: { it: "ASP – Servizio sanitario e medico di base", fr: "ASP – service de santé et médecin généraliste", en: "ASP – health service and family doctor", es: "ASP – servicio sanitario y médico de cabecera", ar: "ASP – الخدمة الصحية والطبيب العام", ro: "ASP – serviciul sanitar și medic de familie" },
    items: [
      { it: "Buongiorno. Vorrei iscrivermi al Servizio sanitario.", tr: { it: "Buongiorno. Vorrei iscrivermi al Servizio sanitario.", fr: "Bonjour. Je voudrais m’inscrire au Service de santé.", en: "Good morning. I would like to register with the National Health Service.", es: "Buenos días. Quisiera inscribirme en el Servicio Sanitario.", ar: "صباح الخير. أودّ التسجيل في الخدمة الصحية الوطنية.", ro: "Bună ziua. Aș dori să mă înscriu la Serviciul Sanitar Național." }, arLatin: "Sabāḥ al-khayr. Awaddu at-tasjīl fī al-khidma aṣ-ṣiḥḥiyya al-waṭaniyya." },
      { it: "Vorrei scegliere un medico di base.", tr: { it: "Vorrei scegliere un medico di base.", fr: "Je voudrais choisir un médecin généraliste.", en: "I would like to choose a family doctor (GP).", es: "Quisiera elegir un médico de cabecera.", ar: "أودّ اختيار طبيب عام.", ro: "Aș dori să aleg un medic de familie." }, arLatin: "Awaddu ikhtiyār ṭabīb ‘āmm." },
      { it: "Ho bisogno di un medico. Dove devo andare?", tr: { it: "Ho bisogno di un medico. Dove devo andare?", fr: "J’ai besoin d’un médecin. Où dois-je aller ?", en: "I need a doctor. Where should I go?", es: "Necesito un médico. ¿Adónde debo ir?", ar: "أحتاج إلى طبيب. إلى أين يجب أن أذهب؟", ro: "Am nevoie de un medic. Unde trebuie să merg?" }, arLatin: "Aḥtāju ilā ṭabīb. Ilā ayna yajibu an adhhab?" },
    ],
  },
  {
    id: "banca",
    title: { it: "Banca – conto corrente", fr: "Banque – compte courant", en: "Bank – current account", es: "Banco – cuenta corriente", ar: "البنك – حساب جارٍ", ro: "Bancă – cont curent" },
    items: [
      { it: "Buongiorno. Vorrei aprire un conto corrente.", tr: { it: "Buongiorno. Vorrei aprire un conto corrente.", fr: "Bonjour. Je voudrais ouvrir un compte courant.", en: "Good morning. I would like to open a current account.", es: "Buenos días. Quisiera abrir una cuenta corriente.", ar: "صباح الخير. أودّ فتح حساب جارٍ.", ro: "Bună ziua. Aș dori să deschid un cont curent." }, arLatin: "Sabāḥ al-khayr. Awaddu fatḥ ḥisāb jārin." },
      { it: "Ecco il passaporto, il codice fiscale e il contratto di lavoro.", tr: { it: "Ecco il passaporto, il codice fiscale e il contratto di lavoro.", fr: "Voici mon passeport, mon code fiscal et mon contrat de travail.", en: "Here are my passport, tax code and employment contract.", es: "Aquí están mi pasaporte, mi código fiscal y mi contrato de trabajo.", ar: "هذا جواز سفري ورقمي الضريبي وعقد عملي.", ro: "Iată pașaportul, codul fiscal și contractul de muncă." }, arLatin: "Hādhā jawāz safarī wa-raqmī aḍ-ḍarībī wa-‘aqd ‘amalī." },
      { it: "Quali sono i costi del conto?", tr: { it: "Quali sono i costi del conto?", fr: "Quels sont les frais du compte ?", en: "What are the account fees?", es: "¿Cuáles son los gastos de la cuenta?", ar: "ما هي رسوم الحساب؟", ro: "Care sunt costurile contului?" }, arLatin: "Mā hiya rusūm al-ḥisāb?" },
    ],
  },
  {
    id: "casa",
    title: { it: "Casa – affitto", fr: "Logement – location", en: "Housing – renting", es: "Vivienda – alquiler", ar: "السكن – الإيجار", ro: "Locuință – închiriere" },
    items: [
      { it: "Buongiorno. Cerco un appartamento in affitto.", tr: { it: "Buongiorno. Cerco un appartamento in affitto.", fr: "Bonjour. Je cherche un appartement à louer.", en: "Good morning. I am looking for an apartment to rent.", es: "Buenos días. Busco un apartamento en alquiler.", ar: "صباح الخير. أبحث عن شقة للإيجار.", ro: "Bună ziua. Caut un apartament de închiriat." }, arLatin: "Sabāḥ al-khayr. Abḥath ‘an shaqqa lil-ījār." },
      { it: "Quanto costa al mese, spese incluse?", tr: { it: "Quanto costa al mese, spese incluse?", fr: "Combien coûte le loyer par mois, charges comprises ?", en: "How much is the rent per month, bills included?", es: "¿Cuánto cuesta al mes, gastos incluidos?", ar: "كم الإيجار الشهري مع المصاريف؟", ro: "Cât costă chiria pe lună, cu cheltuieli incluse?" }, arLatin: "Kam al-ījār ash-shahrī ma‘a al-maṣārīf?" },
      { it: "Posso vedere il contratto prima di firmare?", tr: { it: "Posso vedere il contratto prima di firmare?", fr: "Puis-je voir le contrat avant de signer ?", en: "Can I see the contract before signing?", es: "¿Puedo ver el contrato antes de firmar?", ar: "هل يمكنني رؤية العقد قبل التوقيع؟", ro: "Pot vedea contractul înainte să semnez?" }, arLatin: "Hal yumkinunī ru’yat al-‘aqd qabla at-tawqī‘?" },
    ],
  },
];
