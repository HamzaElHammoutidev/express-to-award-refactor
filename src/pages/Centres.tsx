import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const Centres = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <PageHeader breadcrumb="Centres" title="Trouvez le centre le plus proche" />

      {/* Map Section */}
      <section className="section-padding py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">
              +80 centres techniques
            </p>
            <h2 className="text-3xl md:text-5xl font-serif leading-[1.05]">
              Un réseau <span className="italic text-gradient-gold">national</span>
            </h2>
          </motion.div>

          <motion.div
            className="relative rounded-2xl overflow-hidden border border-border/30"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="relative">
              <img
                src="https://parebriseexpress.ma/images/MAP_WEBSITE_PBE.png"
                alt="Carte des centres Pare-Brise Express au Maroc"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="https://parebriseexpress.ma/map"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-[13px] uppercase tracking-[0.15em] hover:bg-gold-dark transition-colors duration-300"
            >
              <MapPin size={16} />
              Trouver un centre
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Centres;
