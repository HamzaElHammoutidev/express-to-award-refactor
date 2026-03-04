import { motion } from "framer-motion";
import { Shield, Clock, Wrench, FileCheck, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const engagements = [
  { icon: Shield, title: "Qualité du vitrage." },
  { icon: Award, title: "Respect des normes de sécurité." },
  { icon: Clock, title: "Rapidité d'exécution." },
  { icon: FileCheck, title: "Des procédures simplifiées." },
  { icon: Wrench, title: "Qualité du service." },
];

const Engagement = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <PageHeader breadcrumb="Engagement" title="L'engagement qui fait la différence !" />

      {/* Engagements Grid */}
      <section className="section-padding py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Nos engagements
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.05]">
              Ce qui nous <span className="italic text-gradient-gold">distingue</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {engagements.map((item, i) => (
              <motion.div
                key={i}
                className="text-center p-6 rounded-2xl border border-border/30 bg-surface hover:border-primary/30 transition-all duration-500 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" />
                <p className="text-sm font-sans font-medium text-foreground leading-tight">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="section-padding py-20 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-6xl font-serif text-gradient-gold opacity-40">1</span>
              <h2 className="text-3xl md:text-4xl font-serif">Certification</h2>
            </div>
            <p className="text-base font-sans text-secondary-foreground leading-[1.9] font-light mb-6">
              Nous nous engageons à offrir des prestations de haute qualité guidées par la quête de l'excellence. Certifiée ISO 9001 par IMANOR, nous appliquons des standards internationaux rigoureux pour garantir précision, fiabilité et amélioration continue dans chacune de nos interventions.
            </p>
            <p className="text-base font-sans text-secondary-foreground leading-[1.9] font-light">
              De plus, nous sommes fiers d'être le premier réparateur de vitrage automobile au Maroc à obtenir le label SALAMATOUNA, une reconnaissance de notre engagement pour la sécurité, la conformité et la performance des vitrages. Ces certifications témoignent de notre volonté d'offrir à nos clients des solutions durables et conformes aux exigences les plus strictes.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-8"
          >
            <img src="https://parebriseexpress.ma/images/assets/imanor-orig.png" alt="IMANOR" className="h-24 md:h-32 object-contain" />
          </motion.div>
        </div>
      </section>

      {/* Procédures simplifiées */}
      <section className="section-padding py-20 md:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="aspect-video rounded-2xl overflow-hidden border border-border/30">
              <img
                src="https://parebriseexpress.ma/images/assets/bpe-rca.jpg"
                alt="Procédures"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-6xl font-serif text-gradient-gold opacity-40">2</span>
              <h2 className="text-3xl md:text-4xl font-serif">Des procédures simplifiées</h2>
            </div>
            <p className="text-base font-sans text-secondary-foreground leading-[1.9] font-light">
              Chez Pare-Brise Express, nous optimisons chaque étape pour vous faire gagner du temps. Toutes nos réparations sont réalisées dans les plus brefs délais et bénéficient d'une garantie à vie. En cas de fissure, le pare-brise est remplacé intégralement, sans frais supplémentaires. Nous respectons des normes strictes pour chaque intervention, avec un souci constant de sécurité et de durabilité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Atelier Mobile */}
      <section className="section-padding py-20 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-6xl font-serif text-gradient-gold opacity-40">3</span>
              <h2 className="text-3xl md:text-4xl font-serif">Atelier mobile</h2>
            </div>
            <h3 className="text-xl md:text-2xl font-serif text-foreground/80 mb-10">
              Pourquoi choisir l'intervention à domicile avec Pare-Brise Express ?
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Service entièrement gratuit", desc: "Que ce soit pour une réparation ou un remplacement, notre intervention à domicile ou sur votre lieu de travail est totalement gratuite, quel que soit le type de véhicule." },
              { title: "Rapide et pratique", desc: "Un bris de glace ? Prenez rendez-vous dès maintenant et sélectionnez le créneau qui vous convient le mieux !" },
              { title: "Adapté à tous les vitrages", desc: "Nos experts interviennent sur tous types de vitrages, à l'exception des optiques de phares et des toits panoramiques." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-2xl border border-border/30 bg-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <h4 className="text-lg font-serif mb-4 text-primary">{item.title}</h4>
                <p className="text-sm font-sans text-muted-foreground leading-[1.8] font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Engagement;
