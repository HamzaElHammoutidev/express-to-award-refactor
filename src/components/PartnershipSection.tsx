import { motion } from "framer-motion";

const partners = [
  {
    name: "Raja Club Athletic",
    img: "https://parebriseexpress.ma/images/assets/bpe-rca.jpg",
    link: "https://www.instagram.com/p/DPjfAvUDOYe/?hl=fr",
  },
  {
    name: "Club MAS",
    img: "https://parebriseexpress.ma/images/assets/bpe-mas.jpg",
    link: "https://www.instagram.com/p/DU9D6i_DDVx/?img_index=1",
  },
];

const PartnershipSection = () => {
  return (
    <section className="py-24 md:py-36 section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Nos partenariats sportifs
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {partners.map((partner, i) => (
            <motion.a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl aspect-[16/10]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={partner.img}
                alt={partner.name}
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-[11px] font-sans text-cream-muted/70 uppercase tracking-[0.2em] mb-2">
                  Partenariat
                </p>
                <h3 className="text-xl md:text-2xl font-serif text-foreground">
                  Pare-Brise Express × {partner.name}
                </h3>
              </div>
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-foreground">
                  <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
