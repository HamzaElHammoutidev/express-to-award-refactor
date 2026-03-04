import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const MapSection = () => {
  return (
    <section id="centres" className="py-24 md:py-40 section-padding relative overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Notre réseau
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.05] mb-6">
              Un réseau de centres
              <br />
              <span className="italic text-gradient-gold">à travers tout le Maroc</span>
            </h2>
            <p className="text-base font-sans text-secondary-foreground leading-[1.9] font-light mb-8 max-w-lg">
              Avec plus de 80 centres techniques et ateliers mobiles répartis sur l'ensemble du territoire marocain, Pare-Brise Express est toujours à proximité pour intervenir rapidement.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/centres"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-[13px] uppercase tracking-[0.15em] hover:bg-gold-dark transition-colors duration-300"
              >
                <MapPin size={16} />
                Trouver un centre
              </Link>
            </div>

            {/* Quick stats */}
            <div className="flex items-center gap-8 mt-10 pt-8 border-t border-border/30">
              <div>
                <span className="text-3xl font-serif text-gradient-gold">80+</span>
                <p className="text-[11px] font-sans text-muted-foreground mt-1 uppercase tracking-wider">Centres</p>
              </div>
              <div className="w-px h-10 bg-border/40" />
              <div>
                <span className="text-3xl font-serif text-gradient-gold">12</span>
                <p className="text-[11px] font-sans text-muted-foreground mt-1 uppercase tracking-wider">Régions</p>
              </div>
              <div className="w-px h-10 bg-border/40" />
              <div>
                <span className="text-3xl font-serif text-gradient-gold">24/7</span>
                <p className="text-[11px] font-sans text-muted-foreground mt-1 uppercase tracking-wider">Disponible</p>
              </div>
            </div>
          </motion.div>

          {/* Map image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-3xl overflow-hidden border border-border/30 bg-card">
              <img
                src="https://parebriseexpress.ma/images/MAP_WEBSITE_PBE.png"
                alt="Carte des centres Pare-Brise Express au Maroc"
                className="w-full"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-card/30 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
