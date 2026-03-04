import { motion } from "framer-motion";

const SalamatounaSection = () => {
  return (
    <section className="relative bg-card">
      {/* Yellow banner that overlaps into the hero above */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative -mt-24 md:-mt-28"
      >
        <div className="section-padding">
          <div className="flex items-center">
            {/* IMANOR Logo - overlapping circle */}
            <div className="flex-shrink-0 relative z-10 -mr-4 md:-mr-2">
              <div className="w-36 h-36 md:w-52 md:h-52 rounded-full bg-card flex items-center justify-center shadow-xl border-4 border-card">
                <img
                  src="https://parebriseexpress.ma/images/assets/imanor-orig.png"
                  alt="IMANOR - Certification Salamatouna"
                  className="h-24 md:h-36 object-contain"
                />
              </div>
            </div>

            {/* Text content on yellow background */}
            <div className="flex-1 bg-primary py-6 md:py-8 px-8 md:px-12 pl-10 md:pl-14">
              <p className="text-sm md:text-lg text-primary-foreground leading-[1.7] font-normal">
                Certifié par IMANOR, Pare-Brise Express met plus de dix ans d'expertise
                à votre service pour la réparation et le remplacement des vitrages
                de vos véhicules. Que vous ayez un impact, une fissure ou un bris de glace,
                nous vous offrons des solutions certifiées, adaptées à tous types de véhicules,
                qu'il s'agisse de voitures légères ou de poids lourds. Nos certifications
                vous garantissent des interventions conformes aux standards les plus exigeants
                du secteur, pour une tranquillité d'esprit totale.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SalamatounaSection;
