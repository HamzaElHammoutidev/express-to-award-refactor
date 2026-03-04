import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const events = [
  { date: "11 et 13 juillet à l'hôtel Hilton Garden", title: "Transpro - Forum du transport touristique et du personnel" },
  { date: "1er au 7 juillet 2024", title: "Avito Expo : 2ème édition du salon de la voiture d'occasion" },
  { date: "17 et 18 avril 2024 à l'hôtel Hyatt Regency de Casablanca", title: "La 10ème édition du rendez-vous de Casablanca de l'assurance" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <PageHeader breadcrumb="Qui sommes nous?" title="L'histoire derrière notre réussite !" />

      {/* Video Section */}
      <section className="section-padding py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="relative rounded-2xl overflow-hidden aspect-video border border-border/30"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <video
              autoPlay muted loop playsInline
              className="w-full h-full object-cover"
              poster="https://parebriseexpress.ma/images/assets/bpe-rca.jpg"
            >
              <source src="https://parebriseexpress.ma/videos/hero-v2.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding py-20 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">
              À propos de nous
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.05] mb-8">
              Des dizaines de milliers de clients{" "}
              <span className="italic text-gradient-gold">nous font confiance.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-base font-sans text-secondary-foreground leading-[1.9] font-light mb-6">
                Votre sécurité est notre priorité. En tant que spécialistes de la réparation et du remplacement de vitrages automobiles, nous mettons notre expertise au service de tous types de véhicules. Nos interventions respectent les standards internationaux du vitrage et de la réparation, garantissant une qualité optimale et une durabilité accrue.
              </p>
              <p className="text-base font-sans text-secondary-foreground leading-[1.9] font-light">
                Grâce à des technologies de pointe et des solutions innovantes, nous assurons des prestations conformes aux normes les plus exigeantes, offrant ainsi protection, performance et visibilité optimale sur la route.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-serif mb-6">
                Expertise et <span className="italic text-gradient-gold">Présence</span>
              </h3>
              <p className="text-base font-sans text-secondary-foreground leading-[1.9] font-light mb-6">
                Pare-Brise Express, une success story en plein essor depuis plus d'une décennie. Fondée en 2010, l'entreprise s'impose aujourd'hui comme le leader incontesté des solutions de vitrage automobile au Maroc.
              </p>
              <p className="text-base font-sans text-secondary-foreground leading-[1.9] font-light">
                Grâce à une expertise avérée dans la réparation et le remplacement de vitres pour véhicules légers et poids lourds, elle répond aux exigences d'une clientèle variée. Depuis ses locaux modernes à Casablanca, Pare-Brise Express a investi dans des équipements de pointe. Plus de 250 professionnels accompagnent les clients à travers un réseau de plus de 80 centres techniques et ateliers mobiles, couvrant l'ensemble du territoire.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="section-padding py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-5xl font-serif leading-[1.05] mb-8">
              Chez Pare-Brise Express,{" "}
              <span className="italic text-gradient-gold">l'excellence avant tout</span>
            </h2>
            <p className="text-base font-sans text-secondary-foreground leading-[1.9] font-light mb-6">
              Nous nous engageons à offrir des prestations de haute qualité guidées par la quête de l'excellence. Certifiée ISO 9001 par IMANOR, nous appliquons des standards internationaux rigoureux pour garantir précision, fiabilité et amélioration continue dans chacune de nos interventions.
            </p>
            <p className="text-base font-sans text-secondary-foreground leading-[1.9] font-light">
              De plus, nous sommes fiers d'être le premier réparateur de vitrage automobile au Maroc à obtenir le label SALAMATOUNA, une reconnaissance de notre engagement pour la sécurité, la conformité et la performance des vitrages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
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
              Nos évènements
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.05]">
              Toujours <span className="italic text-gradient-gold">présents</span>
            </h2>
          </motion.div>

          <div className="space-y-0">
            {events.map((event, i) => (
              <motion.div
                key={i}
                className="border-t border-border/60 py-8 md:py-12 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <p className="text-xs font-sans text-muted-foreground mb-3 tracking-wide">
                  {event.date}
                </p>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-serif group-hover:text-primary transition-colors duration-300">
                  {event.title}
                </h3>
              </motion.div>
            ))}
            <div className="border-t border-border/60" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
