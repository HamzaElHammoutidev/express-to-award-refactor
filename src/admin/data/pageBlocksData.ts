// Page Blocks mock data — defines editable blocks per page

export interface BlockField {
  id: string;
  label: string;
  type: "text" | "textarea" | "richtext" | "image" | "video" | "url" | "button";
  valueFr?: string;
  valueAr?: string;
  placeholder?: string;
}

export interface PageBlock {
  id: string;
  title: string;
  type: string;
  managedExternally?: boolean;
  externalModule?: string;
  fields: BlockField[];
}

export const pageBlocks: Record<string, PageBlock[]> = {
  // ===== ACCUEIL =====
  "PG-001": [
    {
      id: "BLK-ACC-01", title: "Vidéo Hero", type: "hero",
      fields: [
        { id: "f1", label: "Titre principal", type: "text", valueFr: "Pare-Brise Express", valueAr: "باربريز إكسبريس" },
        { id: "f2", label: "Sous-titre", type: "text", valueFr: "Leader marocain du remplacement de vitrage automobile", valueAr: "الرائد المغربي في استبدال زجاج السيارات" },
        { id: "f3", label: "Vidéo de fond", type: "video", valueFr: "/videos/hero-video.mp4", placeholder: "Vidéo hero page accueil" },
        { id: "f4", label: "Bouton principal", type: "button", valueFr: "Déclarer un sinistre", valueAr: "الإبلاغ عن حادث", placeholder: "/declaration" },
      ],
    },
    {
      id: "BLK-ACC-02", title: "Chiffres clés", type: "stats",
      fields: [
        { id: "f1", label: "Titre de section", type: "text", valueFr: "Nos chiffres clés", valueAr: "أرقامنا الرئيسية" },
        { id: "f2", label: "Chiffre 1 — Valeur", type: "text", valueFr: "+50", valueAr: "+50" },
        { id: "f3", label: "Chiffre 1 — Libellé", type: "text", valueFr: "Centres au Maroc", valueAr: "مركز بالمغرب" },
        { id: "f4", label: "Chiffre 2 — Valeur", type: "text", valueFr: "+500 000", valueAr: "+500 000" },
        { id: "f5", label: "Chiffre 2 — Libellé", type: "text", valueFr: "Pare-brises remplacés", valueAr: "زجاج أمامي مُستبدل" },
        { id: "f6", label: "Chiffre 3 — Valeur", type: "text", valueFr: "+20", valueAr: "+20" },
        { id: "f7", label: "Chiffre 3 — Libellé", type: "text", valueFr: "Ans d'expérience", valueAr: "سنة من الخبرة" },
      ],
    },
    {
      id: "BLK-ACC-03", title: "Nos services", type: "services",
      fields: [
        { id: "f1", label: "Titre de section", type: "text", valueFr: "Nos services", valueAr: "خدماتنا" },
        { id: "f2", label: "Sous-titre", type: "textarea", valueFr: "Découvrez notre gamme complète de services de vitrage automobile", valueAr: "اكتشف مجموعتنا الكاملة من خدمات زجاج السيارات" },
        { id: "f3", label: "Image de section", type: "image", valueFr: "/placeholder.svg", placeholder: "Illustration services" },
      ],
    },
    {
      id: "BLK-ACC-04", title: "Section Salamatouna", type: "cta",
      fields: [
        { id: "f1", label: "Titre", type: "text", valueFr: "Salamatouna", valueAr: "سلامتونا" },
        { id: "f2", label: "Description", type: "textarea", valueFr: "L'application mobile au service de votre sécurité routière", valueAr: "التطبيق المحمول لخدمة سلامتك على الطريق" },
        { id: "f3", label: "Image", type: "image", valueFr: "/placeholder.svg", placeholder: "Visuel Salamatouna" },
        { id: "f4", label: "Bouton App Store", type: "button", valueFr: "App Store", valueAr: "App Store", placeholder: "#" },
        { id: "f5", label: "Bouton Google Play", type: "button", valueFr: "Google Play", valueAr: "Google Play", placeholder: "#" },
      ],
    },
    {
      id: "BLK-ACC-05", title: "Parcours client", type: "client_journey",
      fields: [
        { id: "f1", label: "Titre de section", type: "text", valueFr: "Notre parcours client", valueAr: "مسار عميلنا" },
        { id: "f2", label: "Sous-titre", type: "textarea", valueFr: "Un processus simple et transparent en 6 étapes", valueAr: "عملية بسيطة وشفافة في 6 خطوات" },
      ],
    },
    {
      id: "BLK-ACC-06", title: "Carte des centres", type: "map",
      managedExternally: true, externalModule: "Centres / Agences",
      fields: [
        { id: "f1", label: "Titre de section", type: "text", valueFr: "Nos centres", valueAr: "مراكزنا" },
        { id: "f2", label: "Sous-titre", type: "text", valueFr: "Trouvez le centre le plus proche", valueAr: "ابحث عن أقرب مركز" },
      ],
    },
    {
      id: "BLK-ACC-07", title: "Comment ça marche", type: "process",
      fields: [
        { id: "f1", label: "Titre de section", type: "text", valueFr: "Comment ça marche ?", valueAr: "كيف يعمل؟" },
        { id: "f2", label: "Étape 1", type: "text", valueFr: "Déclaration en ligne", valueAr: "الإبلاغ عبر الإنترنت" },
        { id: "f3", label: "Étape 2", type: "text", valueFr: "Prise de rendez-vous", valueAr: "حجز موعد" },
        { id: "f4", label: "Étape 3", type: "text", valueFr: "Intervention rapide", valueAr: "تدخل سريع" },
      ],
    },
    {
      id: "BLK-ACC-08", title: "Témoignages clients", type: "testimonials",
      managedExternally: true, externalModule: "Témoignages",
      fields: [
        { id: "f1", label: "Titre de section", type: "text", valueFr: "Ce que disent nos clients", valueAr: "ماذا يقول عملاؤنا" },
      ],
    },
    {
      id: "BLK-ACC-09", title: "Partenaires & Assurances", type: "partners",
      fields: [
        { id: "f1", label: "Titre de section", type: "text", valueFr: "Nos partenaires", valueAr: "شركاؤنا" },
        { id: "f2", label: "Logo 1", type: "image", valueFr: "/placeholder.svg", placeholder: "Logo partenaire 1" },
        { id: "f3", label: "Logo 2", type: "image", valueFr: "/placeholder.svg", placeholder: "Logo partenaire 2" },
      ],
    },
    {
      id: "BLK-ACC-10", title: "Certifications", type: "certifications",
      fields: [
        { id: "f1", label: "Titre", type: "text", valueFr: "Nos certifications", valueAr: "شهاداتنا" },
        { id: "f2", label: "Description", type: "textarea", valueFr: "Des normes de qualité reconnues internationalement", valueAr: "معايير جودة معترف بها دولياً" },
        { id: "f3", label: "Image certification", type: "image", valueFr: "/placeholder.svg", placeholder: "Image certification" },
      ],
    },
  ],

  // ===== QUI SOMMES-NOUS =====
  "PG-002": [
    {
      id: "BLK-ABT-01", title: "Hero Qui sommes-nous", type: "hero",
      fields: [
        { id: "f1", label: "Titre", type: "text", valueFr: "Qui sommes-nous", valueAr: "من نحن" },
        { id: "f2", label: "Sous-titre", type: "textarea", valueFr: "Depuis plus de 20 ans, Pare-Brise Express s'engage pour votre sécurité", valueAr: "منذ أكثر من 20 عامًا، باربريز إكسبريس ملتزم بسلامتك" },
        { id: "f3", label: "Image d'arrière-plan", type: "image", valueFr: "/placeholder.svg", placeholder: "Image hero institution" },
      ],
    },
    {
      id: "BLK-ABT-02", title: "Notre histoire", type: "text",
      fields: [
        { id: "f1", label: "Titre", type: "text", valueFr: "Notre histoire", valueAr: "تاريخنا" },
        { id: "f2", label: "Contenu", type: "richtext", valueFr: "Fondé en 2003, Pare-Brise Express est devenu le leader marocain du remplacement de vitrage automobile.", valueAr: "تأسست باربريز إكسبريس في 2003، وأصبحت الرائدة المغربية في استبدال زجاج السيارات." },
        { id: "f3", label: "Image", type: "image", valueFr: "/placeholder.svg", placeholder: "Photo équipe" },
      ],
    },
    {
      id: "BLK-ABT-03", title: "Nos valeurs", type: "values",
      fields: [
        { id: "f1", label: "Titre de section", type: "text", valueFr: "Nos valeurs", valueAr: "قيمنا" },
        { id: "f2", label: "Valeur 1 — Titre", type: "text", valueFr: "Excellence", valueAr: "التميز" },
        { id: "f3", label: "Valeur 1 — Description", type: "textarea", valueFr: "Nous visons l'excellence dans chaque intervention", valueAr: "نسعى للتميز في كل تدخل" },
        { id: "f4", label: "Valeur 2 — Titre", type: "text", valueFr: "Innovation", valueAr: "الابتكار" },
        { id: "f5", label: "Valeur 2 — Description", type: "textarea", valueFr: "Des technologies de pointe au service de la qualité", valueAr: "تقنيات متطورة في خدمة الجودة" },
      ],
    },
    {
      id: "BLK-ABT-04", title: "Chronologie", type: "timeline",
      fields: [
        { id: "f1", label: "Titre", type: "text", valueFr: "Notre parcours", valueAr: "مسيرتنا" },
      ],
    },
    {
      id: "BLK-ABT-05", title: "Galerie média", type: "gallery",
      fields: [
        { id: "f1", label: "Titre", type: "text", valueFr: "Nos centres et ateliers", valueAr: "مراكزنا وورشاتنا" },
        { id: "f2", label: "Photo 1", type: "image", valueFr: "/placeholder.svg", placeholder: "Photo centre 1" },
        { id: "f3", label: "Photo 2", type: "image", valueFr: "/placeholder.svg", placeholder: "Photo centre 2" },
      ],
    },
    {
      id: "BLK-ABT-06", title: "Événements", type: "slider",
      fields: [
        { id: "f1", label: "Titre de section", type: "text", valueFr: "Nos événements", valueAr: "فعالياتنا" },
      ],
    },
    {
      id: "BLK-ABT-07", title: "Appel à l'action", type: "cta",
      fields: [
        { id: "f1", label: "Titre", type: "text", valueFr: "Besoin d'un remplacement ?", valueAr: "هل تحتاج إلى استبدال؟" },
        { id: "f2", label: "Bouton", type: "button", valueFr: "Déclarer un sinistre", valueAr: "الإبلاغ عن حادث", placeholder: "/declaration" },
      ],
    },
  ],

  // ===== ENGAGEMENT =====
  "PG-003": [
    {
      id: "BLK-ENG-01", title: "Hero Engagement", type: "hero",
      fields: [
        { id: "f1", label: "Titre", type: "text", valueFr: "Nos engagements", valueAr: "التزاماتنا" },
        { id: "f2", label: "Sous-titre", type: "textarea", valueFr: "Qualité, sécurité et satisfaction client au cœur de notre métier", valueAr: "الجودة والسلامة ورضا العملاء في صميم مهنتنا" },
      ],
    },
    {
      id: "BLK-ENG-02", title: "Piliers d'engagement", type: "values",
      fields: [
        { id: "f1", label: "Titre de section", type: "text", valueFr: "Nos piliers", valueAr: "ركائزنا" },
        { id: "f2", label: "Pilier 1", type: "text", valueFr: "Sécurité", valueAr: "السلامة" },
        { id: "f3", label: "Pilier 2", type: "text", valueFr: "Qualité", valueAr: "الجودة" },
        { id: "f4", label: "Pilier 3", type: "text", valueFr: "Proximité", valueAr: "القرب" },
      ],
    },
    {
      id: "BLK-ENG-03", title: "Processus qualité", type: "process",
      fields: [
        { id: "f1", label: "Titre", type: "text", valueFr: "Notre processus qualité", valueAr: "عملية الجودة لدينا" },
        { id: "f2", label: "Description", type: "textarea", valueFr: "Un processus rigoureux pour garantir votre satisfaction", valueAr: "عملية صارمة لضمان رضاكم" },
      ],
    },
    {
      id: "BLK-ENG-04", title: "Certifications", type: "certifications",
      fields: [
        { id: "f1", label: "Titre", type: "text", valueFr: "Nos certifications", valueAr: "شهاداتنا" },
        { id: "f2", label: "Image", type: "image", valueFr: "/placeholder.svg", placeholder: "Certification" },
      ],
    },
    {
      id: "BLK-ENG-05", title: "Application mobile", type: "cta",
      fields: [
        { id: "f1", label: "Titre", type: "text", valueFr: "Salamatouna", valueAr: "سلامتونا" },
        { id: "f2", label: "Description", type: "textarea", valueFr: "Téléchargez notre application mobile", valueAr: "حمّل تطبيقنا المحمول" },
        { id: "f3", label: "Image", type: "image", valueFr: "/placeholder.svg", placeholder: "App mobile" },
      ],
    },
    {
      id: "BLK-ENG-06", title: "CTA Engagement", type: "cta",
      fields: [
        { id: "f1", label: "Titre", type: "text", valueFr: "Engagés pour votre sécurité", valueAr: "ملتزمون بسلامتكم" },
        { id: "f2", label: "Bouton", type: "button", valueFr: "Nous contacter", valueAr: "اتصل بنا", placeholder: "/contact" },
      ],
    },
  ],

  // ===== NOS CENTRES =====
  "PG-004": [
    {
      id: "BLK-CTR-01", title: "Hero Centres", type: "hero",
      fields: [
        { id: "f1", label: "Titre", type: "text", valueFr: "Nos centres", valueAr: "مراكزنا" },
        { id: "f2", label: "Sous-titre", type: "text", valueFr: "Un réseau national à votre service", valueAr: "شبكة وطنية في خدمتكم" },
      ],
    },
    {
      id: "BLK-CTR-02", title: "Liste des centres", type: "map",
      managedExternally: true, externalModule: "Centres / Agences",
      fields: [
        { id: "f1", label: "Titre de section", type: "text", valueFr: "Trouvez votre centre", valueAr: "ابحث عن مركزك" },
      ],
    },
    {
      id: "BLK-CTR-03", title: "CTA Centres", type: "cta",
      fields: [
        { id: "f1", label: "Titre", type: "text", valueFr: "Besoin d'un rendez-vous ?", valueAr: "هل تحتاج إلى موعد؟" },
        { id: "f2", label: "Bouton", type: "button", valueFr: "Déclarer un sinistre", valueAr: "الإبلاغ عن حادث", placeholder: "/declaration" },
      ],
    },
  ],

  // ===== CARRIÈRES =====
  "PG-005": [
    {
      id: "BLK-CAR-01", title: "Hero Carrières", type: "hero",
      fields: [
        { id: "f1", label: "Titre", type: "text", valueFr: "Rejoignez-nous", valueAr: "انضم إلينا" },
        { id: "f2", label: "Sous-titre", type: "textarea", valueFr: "Construisez votre carrière chez le leader marocain du vitrage automobile", valueAr: "ابنِ مسيرتك المهنية مع الرائد المغربي في زجاج السيارات" },
        { id: "f3", label: "Image", type: "image", valueFr: "/placeholder.svg", placeholder: "Image hero carrières" },
      ],
    },
    {
      id: "BLK-CAR-02", title: "Nos valeurs RH", type: "values",
      fields: [
        { id: "f1", label: "Titre", type: "text", valueFr: "Pourquoi nous rejoindre ?", valueAr: "لماذا تنضم إلينا؟" },
        { id: "f2", label: "Valeur 1", type: "text", valueFr: "Formation continue", valueAr: "تكوين مستمر" },
        { id: "f3", label: "Valeur 2", type: "text", valueFr: "Évolution de carrière", valueAr: "تطور مهني" },
        { id: "f4", label: "Valeur 3", type: "text", valueFr: "Esprit d'équipe", valueAr: "روح الفريق" },
      ],
    },
    {
      id: "BLK-CAR-03", title: "Culture d'entreprise", type: "culture",
      fields: [
        { id: "f1", label: "Titre", type: "text", valueFr: "Notre culture", valueAr: "ثقافتنا" },
        { id: "f2", label: "Description", type: "richtext", valueFr: "Chez Pare-Brise Express, nous cultivons l'excellence et l'innovation.", valueAr: "في باربريز إكسبريس، نزرع التميز والابتكار." },
        { id: "f3", label: "Image", type: "image", valueFr: "/placeholder.svg", placeholder: "Culture entreprise" },
      ],
    },
    {
      id: "BLK-CAR-04", title: "Offres d'emploi", type: "offers",
      managedExternally: true, externalModule: "Offres d'emploi",
      fields: [
        { id: "f1", label: "Titre de section", type: "text", valueFr: "Nos offres", valueAr: "عروضنا" },
        { id: "f2", label: "Sous-titre", type: "text", valueFr: "Découvrez nos opportunités", valueAr: "اكتشف فرصنا" },
      ],
    },
    {
      id: "BLK-CAR-05", title: "Candidature spontanée", type: "cta",
      managedExternally: true, externalModule: "Candidatures spontanées",
      fields: [
        { id: "f1", label: "Titre", type: "text", valueFr: "Candidature spontanée", valueAr: "ترشح تلقائي" },
        { id: "f2", label: "Description", type: "textarea", valueFr: "Aucune offre ne correspond ? Envoyez-nous votre candidature spontanée.", valueAr: "لا يوجد عرض مناسب؟ أرسل لنا ترشحك التلقائي." },
      ],
    },
  ],

  // ===== CONTACT =====
  "PG-006": [
    {
      id: "BLK-CON-01", title: "Hero Contact", type: "hero",
      fields: [
        { id: "f1", label: "Titre", type: "text", valueFr: "Contactez-nous", valueAr: "اتصل بنا" },
        { id: "f2", label: "Sous-titre", type: "text", valueFr: "Nous sommes à votre écoute", valueAr: "نحن في خدمتكم" },
      ],
    },
    {
      id: "BLK-CON-02", title: "Informations de contact", type: "contact_info",
      fields: [
        { id: "f1", label: "Titre", type: "text", valueFr: "Nos coordonnées", valueAr: "معلومات الاتصال" },
        { id: "f2", label: "Adresse", type: "text", valueFr: "Casablanca, Maroc", valueAr: "الدار البيضاء، المغرب" },
        { id: "f3", label: "Téléphone", type: "text", valueFr: "0801 00 44 44", valueAr: "0801 00 44 44" },
        { id: "f4", label: "Email", type: "text", valueFr: "contact@parebriseexpress.ma", valueAr: "contact@parebriseexpress.ma" },
        { id: "f5", label: "Horaires", type: "text", valueFr: "Lun-Sam 8h-18h", valueAr: "الإثنين-السبت 8ص-6م" },
      ],
    },
    {
      id: "BLK-CON-03", title: "Formulaire de contact", type: "contact_form",
      managedExternally: true, externalModule: "Messages contact",
      fields: [
        { id: "f1", label: "Titre du formulaire", type: "text", valueFr: "Envoyez-nous un message", valueAr: "أرسل لنا رسالة" },
      ],
    },
    {
      id: "BLK-CON-04", title: "FAQ", type: "faq",
      managedExternally: true, externalModule: "FAQ",
      fields: [
        { id: "f1", label: "Titre de section", type: "text", valueFr: "Questions fréquentes", valueAr: "الأسئلة الشائعة" },
      ],
    },
  ],

  // ===== DÉCLARATION =====
  "PG-007": [
    {
      id: "BLK-DEC-01", title: "Hero Déclaration", type: "hero",
      fields: [
        { id: "f1", label: "Titre", type: "text", valueFr: "Déclaration de sinistre", valueAr: "الإبلاغ عن حادث" },
        { id: "f2", label: "Sous-titre", type: "textarea", valueFr: "Déclarez votre sinistre en quelques minutes", valueAr: "أبلغ عن حادثك في بضع دقائق" },
      ],
    },
    {
      id: "BLK-DEC-02", title: "Formulaire déclaration", type: "declaration_form",
      managedExternally: true, externalModule: "Déclarations sinistre",
      fields: [
        { id: "f1", label: "Titre du formulaire", type: "text", valueFr: "Remplissez le formulaire", valueAr: "املأ الاستمارة" },
      ],
    },
    {
      id: "BLK-DEC-03", title: "CTA Déclaration", type: "cta",
      fields: [
        { id: "f1", label: "Titre", type: "text", valueFr: "Besoin d'aide ?", valueAr: "هل تحتاج إلى مساعدة؟" },
        { id: "f2", label: "Bouton", type: "button", valueFr: "Appelez-nous", valueAr: "اتصل بنا", placeholder: "tel:0801004444" },
      ],
    },
  ],

  // ===== MENTIONS LÉGALES =====
  "PG-008": [
    {
      id: "BLK-LEG-01", title: "Contenu mentions légales", type: "text",
      fields: [
        { id: "f1", label: "Titre", type: "text", valueFr: "Mentions légales", valueAr: "الإشعارات القانونية" },
        { id: "f2", label: "Contenu", type: "richtext", valueFr: "Éditeur du site : Pare-Brise Express SARL...", valueAr: "الناشر: باربريز إكسبريس ش.ذ.م.م..." },
      ],
    },
  ],
};
