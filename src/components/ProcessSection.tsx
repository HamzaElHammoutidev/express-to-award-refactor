import { motion } from "framer-motion";

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
    <section id="declaration" className="py-24 md:py-40 section-padding bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif">
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
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group"
            >
              <span className="text-6xl md:text-7xl font-serif text-gradient-gold opacity-40 group-hover:opacity-100 transition-opacity">
                {step.number}
              </span>
              <h3 className="text-2xl md:text-3xl font-serif mt-4 mb-4">
                {step.title}
              </h3>
              <p className="text-base font-sans text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
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
          <a
            href="https://parebriseexpress.ma/declaration"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-sm uppercase tracking-widest hover:bg-gold-dark transition-colors"
          >
            Faire une déclaration
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
