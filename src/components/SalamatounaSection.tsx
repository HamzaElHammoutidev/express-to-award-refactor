import { motion } from "framer-motion";

const SalamatounaSection = () => {
  return (
    <section className="relative bg-background py-12 md:py-20">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto flex items-center bg-primary rounded-xl overflow-hidden shadow-lg"
        >
          {/* IMANOR Logo */}
          <div className="flex-shrink-0 -ml-2 md:ml-0">
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-full bg-white flex items-center justify-center shadow-lg -translate-x-2 md:-translate-x-4">
              <img
                src="https://parebriseexpress.ma/images/assets/imanor-orig.png"
                alt="IMANOR - Certification Salamatouna"
                className="h-20 md:h-28 object-contain"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 px-6 md:px-10 py-6 md:py-8">
            <p className="text-sm md:text-base font-sans text-primary-foreground leading-[1.8] font-normal">
              Certifié par IMANOR, Pare-Brise Express met plus de dix ans d'expertise
              à votre service pour la réparation et le remplacement des vitrages
              de vos véhicules. Que vous ayez un impact, une fissure ou un bris de glace,
              nous vous offrons des solutions certifiées, adaptées à tous types de véhicules,
              qu'il s'agisse de voitures légères ou de poids lourds. Nos certifications
              vous garantissent des interventions conformes aux standards les plus exigeants
              du secteur, pour une tranquillité d'esprit totale.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SalamatounaSection;
