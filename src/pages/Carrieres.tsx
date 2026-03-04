import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Award, Briefcase, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const values = [
  { icon: CheckCircle, title: "Engagement", desc: "Nos équipes s'investissent pleinement avec sérieux, persévérance et implication dans leurs missions, motivées par la volonté de contribuer au succès collectif et de répondre aux attentes de nos clients et partenaires." },
  { icon: Award, title: "Excellence", desc: "Pilier central de notre culture, l'excellence incarne la quête constante de performance, d'exigence, de talent, de défi, de ténacité et d'éthique, qui fait chaque jour le succès de PBE." },
  { icon: Briefcase, title: "Professionnalisme", desc: "Nos équipes adoptent une attitude responsable, rigoureuse et respectueuse dans l'exercice de leurs fonctions, garantissant une qualité de travail élevée en toute circonstance." },
];

const jobs = [
  { date: "17 Aug", title: "Superviseur à Marrakech", type: "CDI", location: "Marrakech" },
  { date: "18 Aug", title: "Commercial B2B Grands Comptes", type: "CDI", location: "Casablanca" },
  { date: "18 Aug", title: "Responsable Achats & Approvisionnements Réseau", type: "CDI", location: "Casablanca" },
  { date: "22 Aug", title: "Standardiste stagiaire", type: "Anapec", location: "Casablanca" },
];

const Carrieres = () => {
  const [formData, setFormData] = useState({ name: "", email: "", emploi: "" });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <PageHeader breadcrumb="Carrières" title="Rejoignez nos équipes !" />

      {/* Values Intro */}
      <section className="section-padding py-20 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.05] mb-8">
              Nos <span className="italic text-gradient-gold font-medium">Valeurs</span>
            </h2>
            <p className="text-base font-sans text-secondary-foreground max-w-3xl mx-auto leading-[1.9] font-light">
              Chez Pare-Brise Express, nos collaborateurs sont unis par une culture d'entreprise forte et s'engagent chaque jour à atteindre les valeurs clés du Groupe : offrir un service d'excellence à nos clients et être à leurs côtés dans toutes les régions du Maroc grâce à l'expansion continue de notre réseau. Dans cette dynamique, PBE recherche en permanence des collaborateurs partageant nos valeurs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-2xl border border-border/30 bg-card group hover:border-primary/30 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <value.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-xl font-serif mb-4">{value.title}</h3>
                <p className="text-sm font-sans text-muted-foreground leading-[1.8] font-light">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="section-padding py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="relative rounded-2xl overflow-hidden aspect-video border border-border/30"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <video
              controls playsInline
              className="w-full h-full object-cover"
              poster="https://parebriseexpress.ma/images/assets/bpe-rca.jpg"
            >
              <source src="https://parebriseexpress.ma/videos/hero-v2.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-padding py-20 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Opportunités
            </p>
            <h2 className="text-3xl md:text-5xl font-serif leading-[1.05]">
              Nos <span className="italic text-gradient-gold">offres</span>
            </h2>
          </motion.div>

          <div className="space-y-0">
            {jobs.map((job, i) => (
              <motion.a
                key={i}
                href={`https://parebriseexpress.ma/job-detail/${15 + i * 2}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-t border-border/60 py-8 md:py-10 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <div>
                  <p className="text-xs font-sans text-muted-foreground mb-2">{job.date}</p>
                  <h3 className="text-lg md:text-xl font-serif group-hover:text-primary transition-colors duration-300">
                    {job.title}
                  </h3>
                  <p className="text-xs font-sans text-muted-foreground mt-1">
                    {job.type} · {job.location}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
              </motion.a>
            ))}
            <div className="border-t border-border/60" />
          </div>
        </div>
      </section>

      {/* Candidature Spontanée */}
      <section className="section-padding py-20 md:py-32">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-serif leading-[1.05]">
              Candidature <span className="italic text-gradient-gold">spontanée</span>
            </h2>
          </motion.div>

          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Nom Complet"
              className="w-full bg-surface border border-border/60 rounded-xl px-6 py-4 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-surface border border-border/60 rounded-xl px-6 py-4 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Emploi"
              className="w-full bg-surface border border-border/60 rounded-xl px-6 py-4 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
              value={formData.emploi}
              onChange={(e) => setFormData({ ...formData, emploi: e.target.value })}
            />
            <div className="border-2 border-dashed border-border/60 rounded-xl p-8 text-center">
              <p className="text-sm font-sans text-muted-foreground mb-2">Soumettre le CV</p>
              <p className="text-xs font-sans text-muted-foreground/60">La taille maximale du fichier est de 10 MB</p>
              <label className="mt-4 inline-block px-6 py-2.5 rounded-full border border-primary text-primary text-[13px] font-sans font-medium cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                Sélectionner un fichier
                <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
              </label>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-[13px] uppercase tracking-[0.15em] hover:bg-gold-dark transition-colors duration-300"
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
