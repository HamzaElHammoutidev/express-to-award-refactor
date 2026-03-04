import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "1",
    icon: "https://parebriseexpress.ma/images/shape/comp.svg",
    title: "Déclarez votre sinistre",
    desc: "Fissure, bris de glace, nous vous aidons à remplir votre déclaration pour la soumettre à votre assureur.",
  },
  {
    number: "2",
    icon: "https://parebriseexpress.ma/images/shape/check.svg",
    title: "Prenez rendez-vous",
    desc: "Choisissez le centre technique et le créneau qui vous convient le mieux.",
  },
  {
    number: "3",
    icon: "https://ubermensch-staging.com//storage/acceuil-icons/Mediamodifier-Design-Template.png",
    title: "Confiez-nous votre voiture",
    desc: "Nos experts confirmés prendront grand soin de votre véhicule.",
  },
];

const ProcessSection = () => {
  return (
    <section id="declaration" className="py-24 md:py-36 section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif">
            Comment <span className="italic text-gradient-gold">ça marche</span>
          </h2>
        </motion.div>

        {/* Steps - clean layout matching original */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 text-center">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center"
            >
              {/* Illustration / Icon */}
              <div className="mb-8 h-40 flex items-end justify-center">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="h-32 md:h-36 object-contain"
                />
              </div>

              {/* Number circle */}
              <div className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center mb-5">
                <span className="text-sm font-sans font-medium text-foreground">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-serif mb-3 text-foreground">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm font-sans text-muted-foreground leading-relaxed font-light max-w-xs mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Horizontal line + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-col items-center"
        >
          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-10" />
          <Link
            to="/declaration"
            className="px-10 py-4 rounded-md bg-primary text-primary-foreground font-sans font-semibold text-sm uppercase tracking-[0.15em] hover:bg-primary/90 transition-colors duration-300"
          >
            Faire une déclaration
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
