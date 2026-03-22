import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const jobsData: Record<string, {
  title: string; type: string; city: string; date: string; phone: string;
  desc: string; profile: string[]; missions: string[]; why: string; whyPoints: string[];
  overview: { label: string; value: string }[];
}> = {
  "15": {
    title: "Superviseur à Marrakech", type: "CDI", city: "Marrakech", date: "17 août 2025", phone: "+212 5 22 66 31 66",
    desc: "Rejoignez Pare-Brise Express pour piloter l'activité d'un centre, accompagner les équipes terrain et contribuer à une expérience client premium dans un environnement dynamique et structuré.",
    overview: [
      { label: "Fonction", value: "Superviseur de centre" },
      { label: "Ville", value: "Marrakech" },
      { label: "Contrat", value: "CDI" },
      { label: "Disponibilité", value: "Immédiate selon le profil" },
    ],
    profile: [
      "Bac +3 à Bac +5 en gestion, commerce ou management opérationnel",
      "Expérience réussie en encadrement d'équipe, animation commerciale et gestion de centre",
      "Maîtrise des outils CRM, ERP et des indicateurs de performance",
      "Une formation en excellence opérationnelle ou en relation client premium constitue un atout supplémentaire",
    ],
    missions: [
      "Gérer et piloter l'ensemble des activités du centre : accueil, planification, production, logistique et caisse",
      "Développer la performance commerciale et garantir une expérience client premium",
      "Manager, former et motiver une équipe pluridisciplinaire",
      "Assurer la conformité qualité, sécurité et environnement, notamment dans le cadre ISO 9001 et HSE",
      "Suivre les indicateurs clés : satisfaction client, chiffre d'affaires, rentabilité et conformité",
      "Veiller à l'excellence de l'accueil et du parcours client",
    ],
    why: "Chez Pare-Brise Express, chaque collaborateur joue un rôle essentiel dans la réussite du réseau. Nous valorisons l'initiative, l'esprit d'équipe et la volonté de progresser dans un environnement stimulant, structuré et tourné vers l'excellence de service.",
    whyPoints: [
      "Rejoindre une entreprise innovante et en pleine croissance",
      "Évoluer dans un environnement de travail collaboratif et stimulant",
      "Contribuer directement à la qualité de service et à la satisfaction client",
    ],
  },
  "17": {
    title: "Commercial B2B Grands Comptes", type: "CDI", city: "Casablanca", date: "18 août 2025", phone: "+212 5 22 66 31 66",
    desc: "Développer le portefeuille grands comptes, construire des relations durables et accompagner les partenariats à fort potentiel.",
    overview: [
      { label: "Fonction", value: "Commercial B2B" },
      { label: "Ville", value: "Casablanca" },
      { label: "Contrat", value: "CDI" },
      { label: "Disponibilité", value: "Immédiate" },
    ],
    profile: [
      "Bac +3 à Bac +5 en commerce, marketing ou gestion",
      "Expérience confirmée en développement commercial B2B",
      "Excellentes capacités de négociation et de communication",
      "Maîtrise des outils CRM et reporting commercial",
    ],
    missions: [
      "Prospecter et développer un portefeuille de grands comptes",
      "Négocier et conclure des partenariats stratégiques",
      "Assurer le suivi et la fidélisation des comptes existants",
      "Atteindre les objectifs commerciaux fixés",
    ],
    why: "Intégrez une équipe commerciale dynamique au sein d'une entreprise leader dans le vitrage automobile au Maroc.",
    whyPoints: [
      "Un environnement stimulant et orienté résultats",
      "Des perspectives d'évolution réelles",
      "Une rémunération attractive et motivante",
    ],
  },
  "19": {
    title: "Responsable Achats & Approvisionnements Réseau", type: "CDI", city: "Casablanca", date: "18 août 2025", phone: "+212 5 22 66 31 66",
    desc: "Structurer les achats, sécuriser les approvisionnements et optimiser la disponibilité des ressources pour le réseau.",
    overview: [
      { label: "Fonction", value: "Responsable Achats" },
      { label: "Ville", value: "Casablanca" },
      { label: "Contrat", value: "CDI" },
      { label: "Disponibilité", value: "Immédiate" },
    ],
    profile: [
      "Bac +5 en supply chain, achats ou logistique",
      "Expérience significative en gestion des achats",
      "Maîtrise des outils ERP et de la gestion des stocks",
    ],
    missions: [
      "Piloter la politique achats du réseau",
      "Négocier avec les fournisseurs et optimiser les coûts",
      "Garantir la disponibilité des produits sur l'ensemble du réseau",
    ],
    why: "Contribuez au développement d'un réseau en pleine expansion.",
    whyPoints: [
      "Un rôle stratégique au cœur des opérations",
      "Un réseau en croissance continue",
    ],
  },
  "20": {
    title: "Standardiste stagiaire", type: "Anapec", city: "Casablanca", date: "22 août 2025", phone: "+212 5 22 66 31 66",
    desc: "Participer à l'accueil téléphonique, à l'orientation des demandes et à la fluidité du premier contact avec les clients.",
    overview: [
      { label: "Fonction", value: "Standardiste" },
      { label: "Ville", value: "Casablanca" },
      { label: "Contrat", value: "Anapec" },
      { label: "Disponibilité", value: "Immédiate" },
    ],
    profile: [
      "Bac ou Bac +2 en communication ou secrétariat",
      "Bonne élocution et sens de l'accueil",
      "Maîtrise du français et de l'arabe",
    ],
    missions: [
      "Assurer l'accueil téléphonique et orienter les appels",
      "Gérer les demandes et transmettre les messages",
      "Contribuer à la qualité du premier contact client",
    ],
    why: "Une première expérience enrichissante dans un environnement professionnel structuré.",
    whyPoints: [
      "Encadrement et accompagnement terrain",
      "Découverte d'un réseau national",
    ],
  },
};

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const job = jobsData[id || "15"] || jobsData["15"];
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <div className="h-20" />
      <PageHeader
        breadcrumbs={[
          { label: "Carrières", href: "/carrieres" },
          { label: "Détail de l'offre" },
        ]}
        title={job.title}
      />

      {/* Hero */}
      <section className="relative py-14 md:py-[72px]">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-card/65 border border-border text-muted-foreground text-xs font-black uppercase tracking-[0.1em] mb-4">
                <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(228,181,44,0.10)]" />
                {job.type} • {job.city}
              </div>
              <h1 className="text-[clamp(32px,6.8vw,92px)] leading-[0.95] tracking-[-0.06em] font-black mb-5">
                {job.title.replace(` à ${job.city}`, " à ")}{job.title.includes(" à ") && <span className="text-primary italic font-bold">{job.city}</span>}
                {!job.title.includes(" à ") && ""}
              </h1>
              <p className="text-muted-foreground text-[clamp(18px,1.9vw,22px)] leading-[1.8] max-w-[720px] mb-7">{job.desc}</p>
              <div className="flex gap-3.5 flex-wrap">
                <a href="#postuler" className="inline-flex items-center justify-center min-h-[58px] px-7 rounded-full bg-primary text-primary-foreground font-extrabold tracking-[0.05em] shadow-[0_14px_32px_rgba(228,181,44,0.24)] hover:-translate-y-0.5 transition-all">
                  Postuler maintenant
                </a>
                <a href="#details" className="inline-flex items-center justify-center min-h-[58px] px-7 rounded-full bg-card/70 border border-border text-foreground font-extrabold tracking-[0.05em] hover:-translate-y-0.5 transition-all">
                  Voir les détails
                </a>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-[34px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.12)] min-h-[420px] md:min-h-[560px] bg-foreground/5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="https://parebriseexpress.ma/images/assets/bpe-rca.jpg" alt={job.title} className="w-full h-full object-cover absolute inset-0" />
              <div className="absolute left-3 right-3 bottom-3 md:left-6 md:right-6 md:bottom-6 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                {[
                  { value: job.type, label: "type de contrat" },
                  { value: job.city, label: "lieu du poste" },
                  { value: job.date, label: "date d'expiration" },
                  { value: job.phone, label: "contact" },
                ].map((s, i) => (
                  <div key={i} className="bg-foreground/70 border border-border/10 backdrop-blur-xl rounded-[14px] md:rounded-[20px] p-2.5 md:p-4 text-background">
                    <strong className="block text-sm md:text-[22px] leading-[1.1] text-primary mb-1 md:mb-1.5 truncate">{s.value}</strong>
                    <span className="block text-[10px] md:text-[12px] leading-[1.55] text-background/70 uppercase tracking-[0.08em]">{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Summary cards */}
      <section className="pb-20 md:pb-[92px]">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Type", value: job.type },
              { label: "Lieu", value: job.city },
              { label: "Date d'expiration", value: job.date },
              { label: "Téléphone", value: job.phone },
            ].map((c, i) => (
              <motion.div key={i} className="bg-card/70 border border-border rounded-[28px] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <span className="block text-muted-foreground text-xs font-extrabold uppercase tracking-[0.08em] mb-2.5">{c.label}</span>
                <div className="text-2xl leading-[1.18] font-black">{c.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content: sidebar + main */}
      <section className="pb-20 md:pb-[92px]" id="details">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid md:grid-cols-[0.95fr_1.05fr] gap-6 items-start">
            <motion.aside
              className="bg-card/70 border border-border rounded-[34px] shadow-[0_16px_40px_rgba(0,0,0,0.08)] p-[30px] md:sticky md:top-[92px]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[30px] leading-[1.1] tracking-[-0.04em] mb-4">
                Aperçu du <span className="text-primary italic">poste</span>
              </h2>
              <div className="grid gap-3">
                {job.overview.map((item, i) => (
                  <div key={i} className="p-4 rounded-[22px] bg-card/70 border border-border">
                    <strong className="block text-[13px] uppercase tracking-[0.08em] text-muted-foreground mb-2">{item.label}</strong>
                    <span className="block text-lg font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 p-5 rounded-[24px] bg-gradient-to-br from-foreground to-foreground/90 text-background">
                <h3 className="text-2xl leading-[1.1] mb-2.5">Intéressé par cette opportunité ?</h3>
                <p className="text-background/70 text-[15px] leading-[1.8] mb-4">Soumettez votre CV et vos coordonnées pour être contacté rapidement par notre équipe recrutement.</p>
                <a href="#postuler" className="inline-flex items-center justify-center min-h-[50px] px-6 rounded-full bg-primary text-primary-foreground font-extrabold tracking-[0.05em] shadow-[0_14px_32px_rgba(228,181,44,0.24)] hover:-translate-y-0.5 transition-all">
                  Postuler à cette offre
                </a>
              </div>
            </motion.aside>

            <motion.article
              className="bg-card/70 border border-border rounded-[34px] shadow-[0_16px_40px_rgba(0,0,0,0.08)] p-[30px]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-7">
                <h2 className="text-[30px] leading-[1.1] tracking-[-0.04em] mb-3.5">Profil <span className="text-primary italic">recherché</span></h2>
                <p className="text-muted-foreground/70 text-[17px] leading-[1.9] mb-4">Nous recherchons un profil capable de piloter un centre avec rigueur, sens du service et culture de la performance.</p>
                <ul className="grid gap-3">
                  {job.profile.map((item, i) => (
                    <li key={i} className="relative ps-[26px] text-muted-foreground/70 text-base leading-[1.8] before:content-[''] before:absolute before:start-0 before:top-[0.78em] before:w-2.5 before:h-2.5 before:rounded-full before:bg-primary before:shadow-[0_0_0_6px_rgba(228,181,44,0.08)] before:-translate-y-1/2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-7">
                <h2 className="text-[30px] leading-[1.1] tracking-[-0.04em] mb-3.5">Missions <span className="text-primary italic">principales</span></h2>
                <ul className="grid gap-3">
                  {job.missions.map((item, i) => (
                    <li key={i} className="relative ps-[26px] text-muted-foreground/70 text-base leading-[1.8] before:content-[''] before:absolute before:start-0 before:top-[0.78em] before:w-2.5 before:h-2.5 before:rounded-full before:bg-primary before:shadow-[0_0_0_6px_rgba(228,181,44,0.08)] before:-translate-y-1/2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-[30px] leading-[1.1] tracking-[-0.04em] mb-3.5">Pourquoi nous <span className="text-primary italic">rejoindre</span> ?</h2>
                <p className="text-muted-foreground/70 text-[17px] leading-[1.9] mb-4">{job.why}</p>
                <ul className="grid gap-3">
                  {job.whyPoints.map((item, i) => (
                    <li key={i} className="relative ps-[26px] text-muted-foreground/70 text-base leading-[1.8] before:content-[''] before:absolute before:start-0 before:top-[0.78em] before:w-2.5 before:h-2.5 before:rounded-full before:bg-primary before:shadow-[0_0_0_6px_rgba(228,181,44,0.08)] before:-translate-y-1/2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="pb-20 md:pb-[92px]" id="postuler">
        <div className="max-w-[1320px] mx-auto px-6">
          <motion.div
            className="bg-gradient-to-br from-card/70 to-card/55 border border-border rounded-[34px] p-[30px] shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-6 items-stretch">
              <article className="bg-gradient-to-br from-foreground to-foreground/90 text-background rounded-[28px] p-7 shadow-[0_24px_60px_rgba(0,0,0,0.12)] relative overflow-hidden">
                <div className="absolute w-[300px] h-[300px] -right-[120px] -top-[120px] rounded-full bg-[radial-gradient(circle,rgba(228,181,44,0.20),transparent_70%)]" />
                <h3 className="relative z-10 text-[clamp(28px,3vw,42px)] leading-[1.08] mb-3.5">
                  Postulez à cette <span className="text-primary">opportunité</span>
                </h3>
                <p className="relative z-10 text-background/70 text-base leading-[1.9]">
                  Merci de soumettre votre CV en veillant à inclure vos informations de contact. Notre équipe pourra ainsi revenir vers vous rapidement concernant votre candidature.
                </p>
                <ul className="relative z-10 grid gap-3 mt-5">
                  {[
                    "Le CV doit contenir vos coordonnées complètes",
                    "La taille maximale du fichier est de 10 MB",
                    "Les candidatures pertinentes sont étudiées avec attention",
                  ].map((item, i) => (
                    <li key={i} className="p-3.5 rounded-[20px] bg-background/5 border border-background/10 text-background/75 text-[15px] leading-[1.7]">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <form className="bg-card/70 border border-border rounded-[28px] p-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4">
                  <div>
                    <label className="block text-sm font-extrabold tracking-[0.04em] mb-2.5">Nom complet</label>
                    <input type="text" placeholder="Votre nom complet" className="w-full min-h-[56px] rounded-[18px] border border-border bg-card/80 px-4 text-foreground placeholder:text-muted-foreground focus:border-primary/35 focus:shadow-[0_0_0_4px_rgba(228,181,44,0.08)] outline-none transition-all" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-extrabold tracking-[0.04em] mb-2.5">Email</label>
                    <input type="email" placeholder="votre@email.com" className="w-full min-h-[56px] rounded-[18px] border border-border bg-card/80 px-4 text-foreground placeholder:text-muted-foreground focus:border-primary/35 focus:shadow-[0_0_0_4px_rgba(228,181,44,0.08)] outline-none transition-all" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-extrabold tracking-[0.04em] mb-2.5">Message</label>
                    <textarea placeholder="Présentez brièvement votre profil et votre motivation" className="w-full min-h-[140px] rounded-[18px] border border-border bg-card/80 p-4 text-foreground placeholder:text-muted-foreground focus:border-primary/35 focus:shadow-[0_0_0_4px_rgba(228,181,44,0.08)] outline-none transition-all resize-y" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-extrabold tracking-[0.04em] mb-2.5">Soumettre le CV</label>
                    <div className="grid gap-2.5 p-[18px] rounded-[22px] border border-dashed border-foreground/15 bg-card/70">
                      <input type="file" accept=".pdf,.doc,.docx" />
                      <small className="text-muted-foreground leading-[1.6]">La taille maximale du fichier est de 10 MB.</small>
                    </div>
                  </div>
                  <button type="submit" className="inline-flex items-center justify-center min-h-[58px] px-7 rounded-full bg-primary text-primary-foreground font-extrabold tracking-[0.05em] shadow-[0_14px_32px_rgba(228,181,44,0.24)] hover:-translate-y-0.5 transition-all">
                    Envoyer ma candidature
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-[110px]">
        <div className="max-w-[1320px] mx-auto px-6">
          <motion.div
            className="relative overflow-hidden bg-gradient-to-br from-foreground to-foreground/90 text-background rounded-[36px] p-10 md:p-[42px] shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute w-[360px] h-[360px] -right-[120px] -top-[120px] rounded-full bg-[radial-gradient(circle,rgba(228,181,44,0.24),transparent_70%)]" />
            <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <h2 className="text-[clamp(34px,4vw,60px)] leading-[1.02] tracking-[-0.05em] mb-2.5">
                  Découvrez aussi nos autres <span className="text-primary italic">offres</span>
                </h2>
                <p className="text-background/70 text-lg leading-[1.8] max-w-[720px]">
                  Consultez l'ensemble des opportunités disponibles au sein de Pare-Brise Express et trouvez le poste qui correspond à votre profil.
                </p>
              </div>
              <div className="flex gap-3.5 flex-wrap">
                <Link to="/carrieres" className="inline-flex items-center justify-center min-h-[58px] px-7 rounded-full bg-primary text-primary-foreground font-extrabold tracking-[0.05em] shadow-[0_14px_32px_rgba(228,181,44,0.24)] hover:-translate-y-0.5 transition-all">
                  Voir toutes les offres
                </Link>
                <a href="#postuler" className="inline-flex items-center justify-center min-h-[58px] px-7 rounded-full bg-background/10 border border-background/10 text-background font-extrabold tracking-[0.05em] hover:-translate-y-0.5 transition-all">
                  Postuler
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobDetail;
