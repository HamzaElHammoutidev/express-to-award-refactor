import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Déclarez votre sinistre",
    desc: "Fissure, bris de glace, nous vous aidons à remplir votre déclaration pour la soumettre à votre assureur.",
  },
  {
    number: "02",
    title: "Prenez rendez-vous",
    desc: "Choisissez le centre technique et le créneau qui vous convient le mieux.",
  },
  {
    number: "03",
    title: "Confiez-nous votre voiture",
    desc: "Nos experts confirmés prendront grand soin de votre véhicule.",
  },
];

const ProcessSection = () => {
  return (
    <section id="declaration" className="py-28 md:py-44 section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Processus simple
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.05]">
            Comment <span className="italic text-gradient-gold">ça marche</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="mb-6">
                <span className="text-7xl md:text-8xl font-serif text-gradient-gold opacity-30 group-hover:opacity-60 transition-opacity duration-500 leading-none">
                  {step.number}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif mb-4 leading-tight">
                {step.title}
              </h3>
              <p className="text-sm font-sans text-muted-foreground leading-[1.8] font-light">
                {step.desc}
              </p>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-6 w-12 h-px bg-border/40" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 flex justify-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            to="/declaration"
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-[13px] uppercase tracking-[0.15em] hover:bg-gold-dark transition-colors duration-300"
          >
            Faire une déclaration
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
