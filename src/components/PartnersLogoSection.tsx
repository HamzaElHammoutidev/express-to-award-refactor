import { motion } from "framer-motion";

const logos = [
  { name: "AXA", src: "https://parebriseexpress.ma/images/LOGO_ASSURANCE/LOGO_ASSURANCE/AXA.png" },
  { name: "CAT", src: "https://parebriseexpress.ma/images/LOGO_ASSURANCE/LOGO_ASSURANCE/CAT_.png" },
  { name: "RMA", src: "https://parebriseexpress.ma/images/LOGO_ASSURANCE/LOGO_ASSURANCE/RMA.png" },
  { name: "SANLAM", src: "https://parebriseexpress.ma/images/LOGO_ASSURANCE/LOGO_ASSURANCE/SANLAM.png" },
  { name: "WAFA", src: "https://parebriseexpress.ma/images/LOGO_ASSURANCE/LOGO_ASSURANCE/WAFA.png" },
  { name: "ALLIANZ", src: "https://parebriseexpress.ma/images/LOGO_ASSURANCE/LOGO_ASSURANCE/ALLIANZ.png" },
  { name: "ATLANTA", src: "https://parebriseexpress.ma/images/LOGO_ASSURANCE/LOGO_ASSURANCE/ATLANTA.png" },
];

const PartnersLogoSection = () => {
  const allLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-24 md:py-32 overflow-hidden bg-background">
      <div className="section-padding mb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="text-xs font-sans text-muted-foreground uppercase tracking-[0.3em] mb-3">
              Agréé toutes assurances
            </p>
            <h3 className="text-3xl md:text-5xl font-serif">
              Nos <span className="italic text-gradient-gold">Partenaires</span>
            </h3>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex overflow-hidden">
          <div className="marquee-track flex items-center gap-20 px-10">
            {allLogos.map((logo, i) => (
              <img
                key={`${logo.name}-${i}`}
                src={logo.src}
                alt={logo.name}
                className="h-14 md:h-20 object-contain opacity-40 hover:opacity-90 transition-opacity duration-500 grayscale hover:grayscale-0 flex-shrink-0"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersLogoSection;
