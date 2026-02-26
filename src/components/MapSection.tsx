import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <section id="centres" className="py-24 md:py-40 section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight">
            Un réseau de centres
            <br />
            <span className="italic text-gradient-gold">à travers tout le Maroc</span>
          </h2>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div className="relative rounded-3xl overflow-hidden border border-border/50">
            <img
              src="https://parebriseexpress.ma/images/MAP_WEBSITE_PBE.png"
              alt="Carte des centres Pare-Brise Express au Maroc"
              className="w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>

          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="https://parebriseexpress.ma/map"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-sm uppercase tracking-widest hover:bg-gold-dark transition-colors"
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
