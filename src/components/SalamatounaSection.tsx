import { motion } from "framer-motion";

const SalamatounaSection = () => {
  return (
    <section className="py-24 md:py-36 section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="relative flex flex-col md:flex-row items-center gap-12 md:gap-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-primary/5 blur-2xl" />
              <img
                src="https://parebriseexpress.ma/images/assets/imanor-orig.png"
                alt="IMANOR - Certification Salamatouna"
                className="h-28 md:h-36 object-contain relative z-10"
              />
            </div>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="inline-block text-[10px] font-sans font-semibold uppercase tracking-[0.35em] text-primary mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
                Certifié IMANOR · Label Salamatouna
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] mb-5">
                Votre Pare-brise,{" "}
                <span className="italic text-gradient-gold">notre priorité&nbsp;!</span>
              </h2>
              <p className="text-base font-sans text-secondary-foreground leading-[1.9] font-light max-w-xl">
                Certifié par IMANOR, Pare-Brise Express met plus de dix ans d'expertise
                à votre service pour la réparation et le remplacement des vitrages de vos
                véhicules. Premier réparateur au Maroc labellisé <strong className="text-foreground font-medium">Salamatouna</strong>.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SalamatounaSection;
