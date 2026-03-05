import { motion } from "framer-motion";

const SalamatounaSection = () => {
  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Yellow banner - full width */}
        <div className="relative bg-primary">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center">
            {/* IMANOR Logo - large circle overflowing top & bottom */}
            <div className="flex-shrink-0 relative z-10 -my-6 md:-my-8 -mr-2 md:mr-0">
              <div className="w-36 h-36 md:w-52 md:h-52 rounded-full bg-white flex items-center justify-center shadow-xl border-4 border-white">
                <img
                  src="https://parebriseexpress.ma/images/assets/imanor-orig.png"
                  alt="IMANOR - Certification Salamatouna"
                  className="h-22 md:h-36 object-contain"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="flex-1 py-5 md:py-7 px-4 md:px-10">
              <p className="text-xs md:text-base text-primary-foreground leading-[1.7] font-normal">
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
