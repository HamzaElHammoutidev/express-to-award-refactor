import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const services = [
  {
    icon: "https://parebriseexpress.ma/images/motif.png",
    number: "01",
    title: "Réparation d'impact(s)",
    description:
      "Chez Pare-Brise Express, nous savons que chaque impact doit être traité rapidement. C'est pourquoi nous vous proposons une intervention rapide, fiable et éco-responsable. Ne laissez pas un petit choc compromettre votre sécurité : contactez-nous sans attendre pour une solution sur mesure.",
  },
  {
    icon: "https://parebriseexpress.ma/images/voiture.png",
    number: "02",
    title: "Remplacement de votre pare-brise",
    description:
      "Pare-brise endommagé ? Détendez-vous, nous nous chargeons de tout. De la prise de contact à la réception de votre véhicule en passant par le remplacement et le recalibrage de votre caméra ADAS, nous vous accompagnons à chaque étape pour vous garantir un service de qualité.",
  },
  {
    icon: "https://parebriseexpress.ma/images/test.png",
    number: "03",
    title: "Atelier mobile",
    description:
      "Service 100% gratuit — Sur tout type de vitrage — Chez vous, sur votre lieu de travail ou ailleurs. Notre atelier mobile se déplace pour vous offrir le même niveau de qualité qu'en centre technique.",
  },
];

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="services" className="py-28 md:py-44 section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Ce que nous faisons
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.05]">
            Nos <span className="italic text-gradient-gold">services</span>
          </h2>
          <p className="text-base font-sans text-secondary-foreground mt-5 max-w-xl font-light leading-relaxed">
            Découvrez dès maintenant tous nos services de réparation et de remplacement.
          </p>
        </motion.div>

        <div className="space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="border-t border-border/60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-8 md:py-12 group text-left"
              >
                <div className="flex items-center gap-5 md:gap-8">
                  <span className="text-sm font-sans text-muted-foreground font-light min-w-[28px]">
                    {service.number}
                  </span>
                  <img
                    src={service.icon}
                    alt=""
                    className="w-8 h-8 md:w-12 md:h-12 object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-serif group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-border/60 flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-all duration-300">
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-base font-sans text-secondary-foreground leading-[1.8] pb-10 pl-[76px] md:pl-[120px] max-w-2xl font-light">
                      {service.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          <div className="border-t border-border/60" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
