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
    <section id="declaration" className="py-24 md:py-40 section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Processus simple
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.05]">
            Comment <span className="italic text-gradient-gold">ça marche</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-3xl border border-border/30 bg-card p-8 md:p-10 hover:border-primary/20 transition-all duration-700 overflow-hidden"
            >
              {/* Background number */}
              <span className="absolute -top-4 -right-2 text-[120px] font-serif text-foreground/[0.03] leading-none pointer-events-none select-none">
                {step.number}
              </span>

              {/* Icon */}
              <div className="relative z-10 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <img src={step.icon} alt="" className="w-8 h-8 object-contain" />
                </div>
              </div>

              {/* Step label */}
              <span className="text-[11px] font-sans font-semibold text-primary uppercase tracking-[0.3em] mb-3 block">
                Étape {step.number}
              </span>

              <h3 className="text-xl md:text-2xl font-serif mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-sm font-sans text-muted-foreground leading-[1.8] font-light">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 flex justify-center"
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
