import { motion } from "framer-motion";

const stats = [
  { number: "+10", label: "Ans", desc: "+ 10 ans d'expérience couronnée de succès." },
  { number: "+80", label: "Centres", desc: "+ 80 centres techniques et ateliers mobiles." },
  { number: "+7", label: "Partenaires", desc: "+ 7 partenaires qui nous font confiance." },
];

const CertificationSection = () => {
  return (
    <section id="about" className="py-24 md:py-40 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <img
                src="https://parebriseexpress.ma/images/assets/imanor-orig.png"
                alt="IMANOR Certification"
                className="h-16 md:h-20"
              />
              <div className="w-px h-12 bg-border" />
              <span className="text-sm font-sans text-cream-muted">
                Certifié IMANOR
              </span>
            </div>

            <p className="text-lg md:text-xl font-sans text-secondary-foreground leading-relaxed">
              Certifié par IMANOR, Pare-Brise Express met plus de dix ans d'expertise 
              à votre service pour la réparation et le remplacement des vitrages de vos 
              véhicules. Que vous ayez un impact, une fissure ou un bris de glace, nous 
              vous offrons des solutions certifiées, adaptées à tous types de véhicules.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <span className="block text-4xl md:text-5xl lg:text-6xl font-serif text-gradient-gold">
                  {stat.number}
                </span>
                <span className="block text-sm font-sans font-semibold text-foreground mt-2 uppercase tracking-widest">
                  {stat.label}
                </span>
                <p className="text-xs font-sans text-muted-foreground mt-3 leading-relaxed">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
