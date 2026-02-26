import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const services = [
  {
    icon: "https://parebriseexpress.ma/images/motif.png",
    title: "Réparation d'impact(s)",
    description:
      "Chez Pare-Brise Express, nous savons que chaque impact doit être traité rapidement. C'est pourquoi nous vous proposons une intervention rapide, fiable et éco-responsable. Ne laissez pas un petit choc compromettre votre sécurité : contactez-nous sans attendre pour une solution sur mesure.",
  },
  {
    icon: "https://parebriseexpress.ma/images/voiture.png",
    title: "Remplacement de votre pare-brise",
    description:
      "Pare-brise endommagé ? Détendez-vous, nous nous chargeons de tout. De la prise de contact à la réception de votre véhicule en passant par le remplacement et le recalibrage de votre caméra ADAS, nous vous accompagnons à chaque étape pour vous garantir un service de qualité.",
  },
  {
    icon: "https://parebriseexpress.ma/images/test.png",
    title: "Atelier mobile",
    description:
      "Service 100% gratuit — Sur tout type de vitrage — Chez vous, sur votre lieu de travail ou ailleurs. Notre atelier mobile se déplace pour vous offrir le même niveau de qualité qu'en centre technique.",
  },
];

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="services" className="py-24 md:py-40 section-padding bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif">
            Nos <span className="italic text-gradient-gold">services</span>
          </h2>
          <p className="text-lg font-sans text-muted-foreground mt-4 max-w-2xl">
            Découvrez dès maintenant tous nos services de réparation et de remplacement.
          </p>
        </motion.div>

        <div className="space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="border-t border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-8 md:py-10 group text-left"
              >
                <div className="flex items-center gap-6">
                  <img
                    src={service.icon}
                    alt=""
                    className="w-10 h-10 md:w-14 md:h-14 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <h3 className="text-xl md:text-3xl font-serif group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors">
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <p className="text-base md:text-lg font-sans text-secondary-foreground leading-relaxed pb-10 pl-16 md:pl-20 max-w-3xl">
                      {service.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
