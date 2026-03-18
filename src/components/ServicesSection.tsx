import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  {
    id: "reparation",
    tab: "Réparation",
    number: "01",
    title: "Réparation d'impact(s)",
    heroImage: "https://parebriseexpress.ma/images/tech_serv.jpg",
    cards: [
      {
        image: "https://parebriseexpress.ma/images/motif.png",
        title: "Intervention rapide",
        description:
          "Chaque impact doit être traité rapidement. Nous vous proposons une intervention fiable et éco-responsable.",
      },
      {
        image: "https://parebriseexpress.ma/images/van_serv.jpg",
        title: "Sécurité garantie",
        description:
          "Ne laissez pas un petit choc compromettre votre sécurité : contactez-nous sans attendre pour une solution sur mesure.",
      },
    ],
  },
  {
    id: "remplacement",
    tab: "Remplacement",
    number: "02",
    title: "Remplacement de votre pare-brise",
    heroImage: "https://parebriseexpress.ma/images/jouj_serv.jpg",
    cards: [
      {
        image: "https://parebriseexpress.ma/images/voiture.png",
        title: "Prise en charge complète",
        description:
          "De la prise de contact à la réception de votre véhicule, nous vous accompagnons à chaque étape.",
      },
      {
        image: "https://parebriseexpress.ma/images/tech_serv.jpg",
        title: "Recalibrage ADAS",
        description:
          "Remplacement et recalibrage de votre caméra ADAS pour garantir un service de qualité optimale.",
      },
    ],
  },
  {
    id: "mobile",
    tab: "Atelier mobile",
    number: "03",
    title: "Atelier mobile",
    heroImage: "https://parebriseexpress.ma/images/van_serv.jpg",
    cards: [
      {
        image: "https://parebriseexpress.ma/images/test.png",
        title: "Service 100% gratuit",
        description:
          "Sur tout type de vitrage — Chez vous, sur votre lieu de travail ou ailleurs.",
      },
      {
        image: "https://parebriseexpress.ma/images/jouj_serv.jpg",
        title: "Qualité en déplacement",
        description:
          "Notre atelier mobile se déplace pour vous offrir le même niveau de qualité qu'en centre technique.",
      },
    ],
  },
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const active = services[activeTab];

  return (
    <section id="services" className="py-24 md:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-background/50 mb-4">
            Ce que nous faisons
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.05]">
            Nos <span className="italic text-primary">services</span>
          </h2>
          <p className="text-base font-sans text-background/60 mt-5 max-w-xl mx-auto font-light leading-relaxed">
            Découvrez dès maintenant tous nos services de réparation et de remplacement.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-background/10 rounded-full p-1.5 backdrop-blur-sm border border-background/10">
            {services.map((service, i) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(i)}
                className={`relative px-6 md:px-8 py-3 text-sm md:text-base font-sans font-medium rounded-full transition-all duration-500 ${
                  activeTab === i
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-background/60 hover:text-background"
                }`}
              >
                {service.tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Hero Image */}
            <div className="relative rounded-3xl overflow-hidden mb-12 aspect-[16/7]">
              <img
                src={active.heroImage}
                alt={active.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                <span className="text-8xl md:text-9xl font-serif text-background/10 leading-none absolute -top-16 -left-2">
                  {active.number}
                </span>
              </div>
            </div>

            {/* Feature title */}
            <h3 className="text-2xl md:text-4xl font-serif mb-10 text-center">
              {active.title}
            </h3>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {active.cards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="group rounded-2xl overflow-hidden bg-background/5 border border-background/10 hover:border-primary/30 transition-all duration-500"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h4 className="text-lg md:text-xl font-serif mb-3 group-hover:text-primary transition-colors duration-300">
                      {card.title}
                    </h4>
                    <p className="text-sm font-sans text-background/60 leading-[1.8] font-light">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSection;
