import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Award, Briefcase, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const values = [
  { icon: CheckCircle, title: "Engagement", desc: "Nos équipes s'investissent pleinement avec sérieux, persévérance et implication dans leurs missions, motivées par la volonté de contribuer au succès collectif et de répondre aux attentes de nos clients et partenaires." },
  { icon: Award, title: "Excellence", desc: "Pilier central de notre culture, l'excellence incarne la quête constante de performance, d'exigence, de talent, de défi, de ténacité et d'éthique, qui fait chaque jour le succès de PBE." },
  { icon: Briefcase, title: "Professionnalisme", desc: "Nos équipes adoptent une attitude responsable, rigoureuse et respectueuse dans l'exercice de leurs fonctions, garantissant une qualité de travail élevée en toute circonstance." },
];

const jobs = [
  { date: "17 Aug", title: "Superviseur à Marrakech", type: "CDI", location: "Marrakech", id: 15 },
  { date: "18 Aug", title: "Commercial B2B Grands Comptes", type: "CDI", location: "Casablanca", id: 17 },
  { date: "18 Aug", title: "Responsable Achats & Approvisionnements Réseau", type: "CDI", location: "Casablanca", id: 19 },
  { date: "22 Aug", title: "Standardiste stagiaire", type: "Anapec", location: "Casablanca", id: 20 },
];

const Carrieres = () => {
  const [formData, setFormData] = useState({ name: "", email: "", emploi: "" });
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <PageHeader breadcrumb="Carrières" title="Rejoignez nos équipes !" />

      {/* NOS VALEURS - Background image with overlay like original */}
      <section className="relative">
        {/* Background image with dark overlay */}
        <div className="relative h-[350px] md:h-[450px] overflow-hidden">
          <img
            src="https://parebriseexpress.ma/images/assets/bpe-rca.jpg"
            alt="Nos valeurs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-sans font-bold text-white text-center"
            >
              NOS <span className="font-black">VALEURS</span>
            </motion.h2>
          </div>
        </div>

        {/* Yellow diagonal band with description text */}
        <div className="relative bg-primary">
          {/* Triangle top decoration */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[40px] border-r-[40px] border-b-[32px] border-l-transparent border-r-transparent border-b-primary" />
          <div className="section-padding py-10 md:py-14">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-sm md:text-base font-sans text-primary-foreground text-center max-w-4xl mx-auto leading-[1.9] font-normal"
            >
              Chez Pare-Brise Express, nos collaborateurs sont unis par une culture d'entreprise forte et s'engagent chaque jour à atteindre les valeurs clés du Groupe : offrir un service d'excellence à nos clients et être à leurs côtés dans toutes les régions du Maroc grâce à l'expansion continue de notre réseau. Dans cette dynamique, PBE recherche en permanence des collaborateurs partageant nos valeurs
            </motion.p>
          </div>
        </div>
      </section>

      {/* Values Cards - yellow circle icons like original */}
      <section className="section-padding py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {/* Yellow circle with icon */}
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-[3px] border-primary flex items-center justify-center mb-6">
                  <value.icon className="w-10 h-10 md:w-12 md:h-12 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg md:text-xl font-sans font-bold mb-3 text-foreground">{value.title}</h3>
                <p className="text-sm font-sans text-muted-foreground leading-[1.8] font-light">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video - clean, no overlay */}
      <section className="bg-surface">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <video
            controls
            playsInline
            className="w-full aspect-video object-cover"
            poster="https://parebriseexpress.ma/images/assets/bpe-rca.jpg"
          >
            <source src="https://parebriseexpress.ma/videos/hero-v2.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </section>

      {/* Job Listings - original style */}
      <section className="section-padding py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-sans font-bold text-center mb-12"
          >
            Nos Offres
          </motion.h2>

          <div className="space-y-0">
            {jobs.map((job, i) => (
              <motion.a
                key={i}
                href={`https://parebriseexpress.ma/job-detail/${job.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 md:gap-6 border-b border-border/40 py-5 md:py-6 group hover:bg-surface/50 transition-colors px-2 md:px-4 rounded-lg"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {/* Date badge */}
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-primary rounded-lg flex flex-col items-center justify-center text-primary-foreground">
                  <span className="text-lg md:text-xl font-sans font-bold leading-none">{job.date.split(" ")[0]}</span>
                  <span className="text-[11px] md:text-xs font-sans font-medium uppercase">{job.date.split(" ")[1]}</span>
                </div>

                {/* Job info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-sans font-bold text-foreground group-hover:text-primary transition-colors truncate">
                    {job.title}
                  </h3>
                  <p className="text-sm font-sans text-muted-foreground mt-1">
                    {job.type} · {job.location}
                  </p>
                </div>

                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
              </motion.a>
            ))}
          </div>

          {/* Pagination like original */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-lg text-sm font-sans font-medium transition-colors ${
                  currentPage === page
                    ? "bg-primary text-primary-foreground"
                    : "bg-surface text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(Math.min(currentPage + 1, 3))}
              className="px-4 h-9 rounded-lg text-sm font-sans font-medium bg-surface text-muted-foreground hover:bg-primary/10 transition-colors"
            >
              Suivant
            </button>
          </div>
        </div>
      </section>

      {/* Candidature Spontanée */}
      <section className="section-padding py-16 md:py-24 bg-surface">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-4xl font-sans font-bold">Candidature Spontanée</h2>
            <p className="text-base font-sans text-muted-foreground mt-3">Des questions? Contactez-nous par message</p>
          </motion.div>

          <motion.form
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Nom Complet"
              className="w-full bg-background border border-border/60 rounded-xl px-5 py-3.5 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-background border border-border/60 rounded-xl px-5 py-3.5 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Emploi"
              className="w-full bg-background border border-border/60 rounded-xl px-5 py-3.5 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
              value={formData.emploi}
              onChange={(e) => setFormData({ ...formData, emploi: e.target.value })}
            />
            <div className="border-2 border-dashed border-border/60 rounded-xl p-6 text-center">
              <p className="text-sm font-sans text-muted-foreground mb-1">Soumettre le CV</p>
              <p className="text-xs font-sans text-muted-foreground/60">La taille maximale du fichier est de 10 MB</p>
              <label className="mt-3 inline-block px-6 py-2.5 rounded-full border border-primary text-primary text-[13px] font-sans font-medium cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                Sélectionner un fichier
                <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
              </label>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-sm uppercase tracking-[0.1em] hover:bg-gold-dark transition-colors duration-300"
            >
              Envoyer
            </button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Carrieres;
