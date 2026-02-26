import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <section id="centres" className="py-28 md:py-44 section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Notre réseau
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.05]">
            Un réseau de centres
            <br />
            <span className="italic text-gradient-gold">à travers tout le Maroc</span>
          </h2>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative rounded-3xl overflow-hidden border border-border/30">
            <img
              src="https://parebriseexpress.ma/images/MAP_WEBSITE_PBE.png"
              alt="Carte des centres Pare-Brise Express au Maroc"
              className="w-full"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
          </div>

          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a
              href="https://parebriseexpress.ma/map"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-[13px] uppercase tracking-[0.15em] hover:bg-gold-dark transition-colors duration-300"
            >
              Trouver un centre
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
