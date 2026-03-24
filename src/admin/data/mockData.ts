// ============================
// Types
// ============================

export interface Claim {
  id: string;
  date: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  plate: string;
  brand: string;
  model: string;
  glassType: string;
  glassSide: string;
  insurance: string;
  description: string;
  photos: string[];
  center: string;
  source: string;
  status: ClaimStatus;
  notes: string;
  assignee: string;
}

export type ClaimStatus = "nouveau" | "à qualifier" | "en cours" | "relancé" | "traité" | "clôturé" | "archivé";

export interface ContactMessage {
  id: string;
  date: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  source: string;
  status: ContactStatus;
  notes: string;
  assignee: string;
}

export type ContactStatus = "non lu" | "lu" | "en cours" | "répondu" | "archivé";

export interface Center {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  lat: number;
  lng: number;
  image: string;
  active: boolean;
  order: number;
  region: string;
  services: string[];
}

export interface JobOffer {
  id: string;
  title: string;
  slug: string;
  image: string;
  department: string;
  location: string;
  contractType: string;
  workMode: string;
  experience: string;
  publishDate: string;
  deadline: string;
  summary: string;
  description: string;
  missions: string[];
  profile: string[];
  skills: string[];
  advantages: string[];
  status: "brouillon" | "publié" | "expiré" | "archivé";
  seoTitle: string;
  metaDescription: string;
}

export interface JobApplication {
  id: string;
  offerId: string;
  offerTitle: string;
  date: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  cv: string;
  coverLetter: string;
  message: string;
  linkedin: string;
  status: AppStatus;
  notes: string;
}

export type AppStatus = "nouvelle" | "en revue" | "présélectionnée" | "entretien" | "rejetée" | "retenue" | "archivée";

export interface SpontaneousApp {
  id: string;
  date: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  position: string;
  message: string;
  cv: string;
  coverLetter: string;
  linkedin: string;
  status: AppStatus;
  notes: string;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  order: number;
  active: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  photo: string;
  rating: number;
  order: number;
  active: boolean;
}

export interface SitePage {
  id: string;
  title: string;
  slug: string;
  status: "publié" | "brouillon";
  seoTitle: string;
  metaDescription: string;
  shareImage: string;
  updatedAt: string;
  author: string;
  sectionsCount: number;
}

export interface MediaItem {
  id: string;
  name: string;
  type: "image" | "video" | "logo" | "icon" | "banner" | "document";
  url: string;
  alt: string;
  description: string;
  usage: string;
  size: string;
  uploadedAt: string;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
  lastLogin: string;
  active: boolean;
}

export interface ActivityEntry {
  id: string;
  date: string;
  user: string;
  action: string;
  target: string;
  module: string;
}

// ============================
// Mock Data
// ============================

export const claims: Claim[] = [
  { id: "SIN-2025-001", date: "2025-03-20 09:14", firstName: "Ahmed", lastName: "Bennani", phone: "0661234567", email: "ahmed.b@gmail.com", city: "Casablanca", plate: "12345-A-67", brand: "Dacia", model: "Logan", glassType: "Pare-brise avant", glassSide: "Avant", insurance: "Saham Assurance", description: "Impact de caillou sur autoroute A3, fissure horizontale de 20 cm.", photos: ["/placeholder.svg"], center: "Casablanca Ain Sebaâ", source: "Site web", status: "nouveau", notes: "", assignee: "" },
  { id: "SIN-2025-002", date: "2025-03-19 14:32", firstName: "Fatima", lastName: "El Amrani", phone: "0677654321", email: "fatima.ea@yahoo.fr", city: "Rabat", plate: "54321-B-89", brand: "Renault", model: "Clio 5", glassType: "Vitre latérale", glassSide: "Avant gauche", insurance: "Wafa Assurance", description: "Bris de glace lors d'une tentative d'effraction.", photos: ["/placeholder.svg", "/placeholder.svg"], center: "Rabat Agdal", source: "Site web", status: "en cours", notes: "Client rappelé, RDV le 22/03", assignee: "Karim M." },
  { id: "SIN-2025-003", date: "2025-03-18 11:05", firstName: "Youssef", lastName: "Tazi", phone: "0655112233", email: "y.tazi@hotmail.com", city: "Marrakech", plate: "98765-C-12", brand: "Volkswagen", model: "Golf 8", glassType: "Lunette arrière", glassSide: "Arrière", insurance: "AXA Assurance Maroc", description: "Choc thermique, fissure complète de la lunette arrière.", photos: [], center: "Marrakech Guéliz", source: "Téléphone", status: "traité", notes: "Remplacement effectué", assignee: "Sara L." },
  { id: "SIN-2025-004", date: "2025-03-17 16:45", firstName: "Nadia", lastName: "Chraibi", phone: "0699887766", email: "nadia.c@gmail.com", city: "Tanger", plate: "11223-D-44", brand: "Hyundai", model: "Tucson", glassType: "Pare-brise avant", glassSide: "Avant", insurance: "Atlanta Assurance", description: "Fissure après passage nid de poule.", photos: ["/placeholder.svg"], center: "Tanger Centre", source: "Site web", status: "à qualifier", notes: "", assignee: "" },
  { id: "SIN-2025-005", date: "2025-03-15 08:22", firstName: "Omar", lastName: "Fassi", phone: "0622334455", email: "omar.f@outlook.com", city: "Fès", plate: "77889-E-55", brand: "Peugeot", model: "3008", glassType: "Toit panoramique", glassSide: "Toit", insurance: "MAMDA", description: "Éclat suite à chute de grêle.", photos: ["/placeholder.svg"], center: "Fès Saïss", source: "WhatsApp", status: "clôturé", notes: "Intervention réalisée sous garantie", assignee: "Karim M." },
  { id: "SIN-2025-006", date: "2025-03-14 13:10", firstName: "Laila", lastName: "Bouazza", phone: "0688776655", email: "laila.b@gmail.com", city: "Agadir", plate: "33445-F-66", brand: "Toyota", model: "Yaris", glassType: "Pare-brise avant", glassSide: "Avant", insurance: "RMA Assurance", description: "Impact pierre projetée par camion.", photos: [], center: "Agadir Centre", source: "Site web", status: "relancé", notes: "En attente de réponse du client", assignee: "Sara L." },
];

export const contactMessages: ContactMessage[] = [
  { id: "MSG-001", date: "2025-03-20 10:30", firstName: "Rachid", lastName: "Moussaoui", email: "rachid.m@gmail.com", phone: "0661223344", subject: "Demande de devis", message: "Bonjour, je souhaiterais obtenir un devis pour le remplacement du pare-brise de ma Peugeot 308. Merci.", source: "Page contact", status: "non lu", notes: "", assignee: "" },
  { id: "MSG-002", date: "2025-03-19 15:45", firstName: "Samira", lastName: "Idrissi", email: "samira.i@yahoo.fr", phone: "0677889900", subject: "Horaires centre Casablanca", message: "Quels sont vos horaires d'ouverture pour le centre de Casablanca Ain Sebaâ ? Merci.", source: "Page contact", status: "répondu", notes: "Réponse envoyée par email", assignee: "Admin" },
  { id: "MSG-003", date: "2025-03-18 09:15", firstName: "Mehdi", lastName: "Alaoui", email: "mehdi.a@hotmail.com", phone: "0655443322", subject: "Réclamation intervention", message: "Suite à mon intervention du 15/03, j'ai constaté un bruit de vent. Merci de me recontacter.", source: "Page contact", status: "en cours", notes: "Transferé au responsable qualité", assignee: "Karim M." },
  { id: "MSG-004", date: "2025-03-17 11:00", firstName: "Kenza", lastName: "Benali", email: "kenza.b@gmail.com", phone: "0644332211", subject: "Partenariat assurance", message: "Notre compagnie souhaite explorer un partenariat. Pouvez-vous nous contacter ?", source: "Page contact", status: "lu", notes: "", assignee: "" },
  { id: "MSG-005", date: "2025-03-16 14:22", firstName: "Amine", lastName: "Ouazzani", email: "amine.o@gmail.com", phone: "0633221100", subject: "Disponibilité pare-brise BMW X3", message: "Avez-vous en stock le pare-brise pour BMW X3 2022 ? Merci de votre retour.", source: "Page contact", status: "non lu", notes: "", assignee: "" },
];

export const centers: Center[] = [
  { id: "CTR-001", name: "Casablanca Ain Sebaâ", city: "Casablanca", address: "Lot 45, Zone Industrielle Ain Sebaâ, Casablanca", phone: "0522345678", email: "ainsebaâ@parebriseexpress.ma", hours: "Lun-Sam 8h-18h", lat: 33.5731, lng: -7.5898, image: "/placeholder.svg", active: true, order: 1, region: "Grand Casablanca", services: ["Remplacement", "Réparation", "Calibrage ADAS"] },
  { id: "CTR-002", name: "Rabat Agdal", city: "Rabat", address: "12, Avenue Fal Ould Oumeir, Agdal, Rabat", phone: "0537456789", email: "rabat@parebriseexpress.ma", hours: "Lun-Sam 8h-18h", lat: 33.9716, lng: -6.8498, image: "/placeholder.svg", active: true, order: 2, region: "Rabat-Salé", services: ["Remplacement", "Réparation"] },
  { id: "CTR-003", name: "Marrakech Guéliz", city: "Marrakech", address: "Bd Mohamed V, Guéliz, Marrakech", phone: "0524567890", email: "marrakech@parebriseexpress.ma", hours: "Lun-Sam 8h30-18h30", lat: 31.6295, lng: -7.9811, image: "/placeholder.svg", active: true, order: 3, region: "Marrakech-Safi", services: ["Remplacement", "Réparation", "Calibrage ADAS", "Teintage"] },
  { id: "CTR-004", name: "Tanger Centre", city: "Tanger", address: "Rue Ibn Batouta, Centre-ville, Tanger", phone: "0539678901", email: "tanger@parebriseexpress.ma", hours: "Lun-Sam 9h-18h", lat: 35.7595, lng: -5.8340, image: "/placeholder.svg", active: true, order: 4, region: "Tanger-Tétouan", services: ["Remplacement", "Réparation"] },
  { id: "CTR-005", name: "Fès Saïss", city: "Fès", address: "Route de Sefrou, Fès", phone: "0535789012", email: "fes@parebriseexpress.ma", hours: "Lun-Ven 8h-17h30", lat: 34.0331, lng: -5.0003, image: "/placeholder.svg", active: true, order: 5, region: "Fès-Meknès", services: ["Remplacement", "Réparation"] },
  { id: "CTR-006", name: "Agadir Centre", city: "Agadir", address: "Av. Hassan II, Agadir", phone: "0528890123", email: "agadir@parebriseexpress.ma", hours: "Lun-Sam 8h-18h", lat: 30.4278, lng: -9.5981, image: "/placeholder.svg", active: false, order: 6, region: "Souss-Massa", services: ["Remplacement"] },
];

export const jobOffers: JobOffer[] = [
  { id: "JOB-001", title: "Technicien Vitrage Automobile", slug: "technicien-vitrage", image: "/placeholder.svg", department: "Production", location: "Casablanca", contractType: "CDI", workMode: "Sur site", experience: "2-3 ans", publishDate: "2025-03-01", deadline: "2025-04-30", summary: "Nous recherchons un technicien qualifié pour le remplacement et la réparation de vitrages.", description: "Rattaché(e) au Responsable Centre, vous assurez les interventions de remplacement et réparation de vitrage automobile.", missions: ["Remplacement de pare-brises", "Réparation d'impacts", "Calibrage ADAS", "Contrôle qualité"], profile: ["Formation technique automobile", "Expérience vitrage souhaitée", "Permis B obligatoire"], skills: ["Vitrage automobile", "Calibrage ADAS", "Relation client"], advantages: ["Mutuelle", "Prime de performance", "Formation continue"], status: "publié", seoTitle: "Technicien Vitrage Automobile - CDI Casablanca", metaDescription: "Rejoignez Pare-Brise Express en tant que technicien vitrage automobile." },
  { id: "JOB-002", title: "Responsable Centre", slug: "responsable-centre", image: "/placeholder.svg", department: "Management", location: "Rabat", contractType: "CDI", workMode: "Sur site", experience: "5+ ans", publishDate: "2025-03-10", deadline: "2025-05-15", summary: "Pilotez notre centre de Rabat et encadrez une équipe de techniciens.", description: "Vous gérez l'ensemble des opérations du centre.", missions: ["Gestion de l'équipe", "Suivi des KPIs", "Relation client", "Gestion du stock"], profile: ["Bac+3 minimum", "Expérience en management", "Sens commercial"], skills: ["Leadership", "Gestion", "SAV automobile"], advantages: ["Véhicule de fonction", "Mutuelle", "Bonus annuel"], status: "publié", seoTitle: "Responsable Centre - Rabat", metaDescription: "Devenez Responsable Centre chez Pare-Brise Express." },
  { id: "JOB-003", title: "Chargé(e) Marketing Digital", slug: "charge-marketing-digital", image: "/placeholder.svg", department: "Marketing", location: "Casablanca", contractType: "CDD", workMode: "Hybride", experience: "1-2 ans", publishDate: "2025-02-15", deadline: "2025-03-15", summary: "Développez la stratégie digitale de Pare-Brise Express.", description: "Rattaché(e) à la Direction Marketing, vous pilotez les campagnes digitales.", missions: ["Gestion réseaux sociaux", "SEO/SEA", "Content marketing", "Reporting"], profile: ["Bac+4/5 Marketing digital", "Créatif et autonome"], skills: ["Google Ads", "Meta Ads", "SEO", "Analytics"], advantages: ["Télétravail partiel", "Formation"], status: "expiré", seoTitle: "Chargé Marketing Digital", metaDescription: "Rejoignez l'équipe marketing de PBE." },
];

export const jobApplications: JobApplication[] = [
  { id: "APP-001", offerId: "JOB-001", offerTitle: "Technicien Vitrage Automobile", date: "2025-03-18", firstName: "Hassan", lastName: "Ouahbi", email: "hassan.o@gmail.com", phone: "0666778899", city: "Casablanca", cv: "cv_hassan_ouahbi.pdf", coverLetter: "lm_hassan.pdf", message: "Passionné par l'automobile, je souhaite rejoindre votre équipe.", linkedin: "linkedin.com/in/hassanouahbi", status: "nouvelle", notes: "" },
  { id: "APP-002", offerId: "JOB-001", offerTitle: "Technicien Vitrage Automobile", date: "2025-03-16", firstName: "Yassine", lastName: "El Kadiri", email: "yassine.ek@gmail.com", phone: "0655667788", city: "Mohammedia", cv: "cv_yassine.pdf", coverLetter: "", message: "3 ans d'expérience dans le vitrage automobile.", linkedin: "", status: "en revue", notes: "Profil intéressant" },
  { id: "APP-003", offerId: "JOB-002", offerTitle: "Responsable Centre", date: "2025-03-15", firstName: "Imane", lastName: "Berrada", email: "imane.b@outlook.com", phone: "0644556677", city: "Rabat", cv: "cv_imane_berrada.pdf", coverLetter: "lm_imane.pdf", message: "7 ans d'expérience en gestion de centre automobile.", linkedin: "linkedin.com/in/imaneberrada", status: "présélectionnée", notes: "Entretien prévu le 25/03" },
  { id: "APP-004", offerId: "JOB-002", offerTitle: "Responsable Centre", date: "2025-03-12", firstName: "Kamal", lastName: "Senhaji", email: "kamal.s@yahoo.fr", phone: "0633445566", city: "Salé", cv: "cv_kamal.pdf", coverLetter: "", message: "", linkedin: "", status: "rejetée", notes: "Profil ne correspond pas" },
];

export const spontaneousApps: SpontaneousApp[] = [
  { id: "SPON-001", date: "2025-03-19", firstName: "Amal", lastName: "Zahir", email: "amal.z@gmail.com", phone: "0677665544", city: "Casablanca", position: "Assistant(e) commercial(e)", message: "Je suis disponible immédiatement et très motivée.", cv: "cv_amal_zahir.pdf", coverLetter: "lm_amal.pdf", linkedin: "linkedin.com/in/amalzahir", status: "nouvelle", notes: "" },
  { id: "SPON-002", date: "2025-03-14", firstName: "Driss", lastName: "Mansouri", email: "driss.m@hotmail.com", phone: "0666554433", city: "Meknès", position: "Technicien vitrage", message: "Je recherche une opportunité dans le vitrage automobile.", cv: "cv_driss.pdf", coverLetter: "", linkedin: "", status: "en revue", notes: "À contacter si ouverture de poste" },
];

export const faqItems: FaqItem[] = [
  { id: "FAQ-001", category: "Services", question: "Combien de temps dure un remplacement de pare-brise ?", answer: "Le remplacement prend généralement entre 45 minutes et 1h30 selon le véhicule et le type de vitrage.", order: 1, active: true },
  { id: "FAQ-002", category: "Assurance", question: "Mon assurance couvre-t-elle le remplacement ?", answer: "Oui, la plupart des assurances auto au Maroc couvrent le bris de glace. Nous prenons en charge les démarches administratives.", order: 2, active: true },
  { id: "FAQ-003", category: "Services", question: "Proposez-vous un service mobile ?", answer: "Oui, nous pouvons intervenir sur site pour certaines prestations. Contactez votre centre le plus proche.", order: 3, active: true },
  { id: "FAQ-004", category: "Qualité", question: "Quelles marques de vitrage utilisez-vous ?", answer: "Nous utilisons exclusivement des vitrages de qualité OEM certifiés, conformes aux normes européennes.", order: 4, active: true },
  { id: "FAQ-005", category: "Garantie", question: "Quelle est la garantie sur vos interventions ?", answer: "Toutes nos interventions bénéficient d'une garantie de 12 mois pièces et main d'œuvre.", order: 5, active: true },
  { id: "FAQ-006", category: "RDV", question: "Comment prendre rendez-vous ?", answer: "Vous pouvez prendre rendez-vous en ligne, par téléphone ou directement en centre.", order: 6, active: false },
];

export const testimonials: Testimonial[] = [
  { id: "TEM-001", name: "Mohammed El Fassi", role: "Client particulier", text: "Service rapide et professionnel. Mon pare-brise a été remplacé en moins d'une heure.", photo: "/placeholder.svg", rating: 5, order: 1, active: true },
  { id: "TEM-002", name: "Sarah Lahlou", role: "Gestionnaire de flotte", text: "Partenaire fiable pour notre flotte de 50 véhicules. Réactivité et qualité au rendez-vous.", photo: "/placeholder.svg", rating: 5, order: 2, active: true },
  { id: "TEM-003", name: "Khalid Bennani", role: "Client particulier", text: "Excellent rapport qualité-prix. L'équipe est très accueillante et compétente.", photo: "/placeholder.svg", rating: 4, order: 3, active: true },
];

export const sitePages: SitePage[] = [
  { id: "PG-001", title: "Accueil", slug: "/", status: "publié", seoTitle: "Pare-Brise Express - Remplacement et réparation de vitrage", metaDescription: "Leader marocain du remplacement de pare-brise.", shareImage: "/placeholder.svg", updatedAt: "2025-03-20", author: "Admin", sectionsCount: 10 },
  { id: "PG-002", title: "Qui sommes-nous", slug: "/institution", status: "publié", seoTitle: "À propos de Pare-Brise Express", metaDescription: "Découvrez l'histoire de PBE.", shareImage: "/placeholder.svg", updatedAt: "2025-03-18", author: "Admin", sectionsCount: 7 },
  { id: "PG-003", title: "Engagement", slug: "/engag", status: "publié", seoTitle: "Nos engagements qualité", metaDescription: "Nos engagements envers nos clients.", shareImage: "/placeholder.svg", updatedAt: "2025-03-17", author: "Admin", sectionsCount: 8 },
  { id: "PG-004", title: "Nos centres", slug: "/centres", status: "publié", seoTitle: "Nos centres au Maroc", metaDescription: "Trouvez le centre PBE le plus proche.", shareImage: "/placeholder.svg", updatedAt: "2025-03-15", author: "Admin", sectionsCount: 3 },
  { id: "PG-005", title: "Carrières", slug: "/carrieres", status: "publié", seoTitle: "Rejoignez Pare-Brise Express", metaDescription: "Consultez nos offres d'emploi.", shareImage: "/placeholder.svg", updatedAt: "2025-03-14", author: "Admin", sectionsCount: 6 },
  { id: "PG-006", title: "Contact", slug: "/contact", status: "publié", seoTitle: "Contactez Pare-Brise Express", metaDescription: "Contactez-nous pour vos besoins en vitrage.", shareImage: "/placeholder.svg", updatedAt: "2025-03-13", author: "Admin", sectionsCount: 4 },
  { id: "PG-007", title: "Déclaration de sinistre", slug: "/declaration", status: "publié", seoTitle: "Déclarer un sinistre", metaDescription: "Déclarez votre sinistre vitrage en ligne.", shareImage: "/placeholder.svg", updatedAt: "2025-03-12", author: "Admin", sectionsCount: 3 },
  { id: "PG-008", title: "Mentions légales", slug: "/mentions-legales", status: "brouillon", seoTitle: "Mentions légales", metaDescription: "Mentions légales du site.", shareImage: "", updatedAt: "2025-02-20", author: "Admin", sectionsCount: 1 },
];

export const mediaItems: MediaItem[] = [
  { id: "MED-001", name: "Hero video principale", type: "video", url: "/videos/hero-video.mp4", alt: "Vidéo hero PBE", description: "Vidéo institutionnelle page d'accueil", usage: "Page Accueil - Hero", size: "12.4 MB", uploadedAt: "2025-03-01" },
  { id: "MED-002", name: "Logo PBE", type: "logo", url: "https://parebriseexpress.ma/images/PBE_LOGO_01-2.png", alt: "Logo Pare-Brise Express", description: "Logo principal", usage: "Header, Footer", size: "45 KB", uploadedAt: "2025-01-15" },
  { id: "MED-003", name: "Bannière services", type: "banner", url: "/placeholder.svg", alt: "Bannière services PBE", description: "Bannière de la section services", usage: "Page Accueil - Services", size: "320 KB", uploadedAt: "2025-02-10" },
  { id: "MED-004", name: "Photo centre Casablanca", type: "image", url: "/placeholder.svg", alt: "Centre PBE Casablanca", description: "Photo du centre Ain Sebaâ", usage: "Page Centres", size: "1.2 MB", uploadedAt: "2025-02-20" },
  { id: "MED-005", name: "Icône pare-brise", type: "icon", url: "/placeholder.svg", alt: "Icône pare-brise", description: "Icône de service", usage: "Page Services", size: "12 KB", uploadedAt: "2025-01-20" },
  { id: "MED-006", name: "Certificat IMANOR", type: "image", url: "/placeholder.svg", alt: "Certificat IMANOR", description: "Certificat qualité IMANOR", usage: "Page Accueil - Certification", size: "890 KB", uploadedAt: "2025-03-05" },
];

export const adminUsers: AdminUser[] = [
  { id: "USR-001", name: "Administrateur Principal", email: "admin@parebriseexpress.ma", role: "Super Admin", avatar: "", lastLogin: "2025-03-20 08:00", active: true },
  { id: "USR-002", name: "Karim Mansouri", email: "karim.m@parebriseexpress.ma", role: "Gestionnaire sinistre", avatar: "", lastLogin: "2025-03-20 09:30", active: true },
  { id: "USR-003", name: "Sara Lahlou", email: "sara.l@parebriseexpress.ma", role: "Gestionnaire sinistre", avatar: "", lastLogin: "2025-03-19 17:00", active: true },
  { id: "USR-004", name: "Nadia Berrada", email: "nadia.b@parebriseexpress.ma", role: "Admin contenu", avatar: "", lastLogin: "2025-03-18 14:00", active: true },
  { id: "USR-005", name: "Youssef Alami", email: "youssef.a@parebriseexpress.ma", role: "Admin RH", avatar: "", lastLogin: "2025-03-17 10:00", active: true },
  { id: "USR-006", name: "Consultant Externe", email: "consultant@externe.ma", role: "Lecture seule", avatar: "", lastLogin: "2025-03-10 11:00", active: false },
];

export const activityLog: ActivityEntry[] = [
  { id: "ACT-001", date: "2025-03-20 10:30", user: "Admin", action: "Création", target: "Déclaration SIN-2025-001", module: "Sinistres" },
  { id: "ACT-002", date: "2025-03-20 09:15", user: "Karim M.", action: "Modification statut", target: "SIN-2025-002 → En cours", module: "Sinistres" },
  { id: "ACT-003", date: "2025-03-19 16:00", user: "Nadia B.", action: "Publication", target: "Page Engagement", module: "Pages" },
  { id: "ACT-004", date: "2025-03-19 14:30", user: "Admin", action: "Ajout média", target: "Hero video principale", module: "Médiathèque" },
  { id: "ACT-005", date: "2025-03-18 11:00", user: "Sara L.", action: "Modification statut", target: "SIN-2025-003 → Traité", module: "Sinistres" },
  { id: "ACT-006", date: "2025-03-18 10:00", user: "Youssef A.", action: "Publication", target: "Offre Technicien Vitrage", module: "Offres d'emploi" },
  { id: "ACT-007", date: "2025-03-17 15:00", user: "Admin", action: "Modification", target: "Paramètres du site", module: "Paramètres" },
  { id: "ACT-008", date: "2025-03-17 09:00", user: "Karim M.", action: "Réponse", target: "MSG-002", module: "Messages" },
  { id: "ACT-009", date: "2025-03-16 14:00", user: "Nadia B.", action: "Création", target: "FAQ - Garantie interventions", module: "FAQ" },
  { id: "ACT-010", date: "2025-03-15 08:30", user: "Admin", action: "Connexion", target: "Session démarrée", module: "Système" },
];

// Status color mapping
export const claimStatusColors: Record<ClaimStatus, string> = {
  "nouveau": "bg-blue-100 text-blue-800",
  "à qualifier": "bg-amber-100 text-amber-800",
  "en cours": "bg-sky-100 text-sky-800",
  "relancé": "bg-orange-100 text-orange-800",
  "traité": "bg-emerald-100 text-emerald-800",
  "clôturé": "bg-gray-100 text-gray-600",
  "archivé": "bg-slate-100 text-slate-500",
};

export const contactStatusColors: Record<ContactStatus, string> = {
  "non lu": "bg-red-100 text-red-800",
  "lu": "bg-blue-100 text-blue-800",
  "en cours": "bg-sky-100 text-sky-800",
  "répondu": "bg-emerald-100 text-emerald-800",
  "archivé": "bg-slate-100 text-slate-500",
};

export const appStatusColors: Record<AppStatus, string> = {
  "nouvelle": "bg-blue-100 text-blue-800",
  "en revue": "bg-amber-100 text-amber-800",
  "présélectionnée": "bg-violet-100 text-violet-800",
  "entretien": "bg-sky-100 text-sky-800",
  "rejetée": "bg-red-100 text-red-700",
  "retenue": "bg-emerald-100 text-emerald-800",
  "archivée": "bg-slate-100 text-slate-500",
};
