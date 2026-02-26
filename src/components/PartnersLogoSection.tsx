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
  return (
    <section className="py-20 md:py-28 section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-sans text-muted-foreground uppercase tracking-widest mb-2">
            Agréé toutes assurances
          </p>
          <h3 className="text-3xl md:text-4xl font-serif">
            Nos <span className="italic text-gradient-gold">Partenaires</span>
          </h3>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex overflow-hidden">
          <div className="marquee flex items-center gap-16 px-8">
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <img
                key={`${logo.name}-${i}`}
                src={logo.src}
                alt={logo.name}
                className="h-12 md:h-16 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersLogoSection;
