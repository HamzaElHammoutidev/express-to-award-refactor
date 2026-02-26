import { motion } from "framer-motion";

const partners = [
  { name: "Raja Club Athletic", img: "https://parebriseexpress.ma/images/assets/bpe-rca.jpg", link: "https://www.instagram.com/p/DPjfAvUDOYe/?hl=fr" },
  { name: "Club MAS", img: "https://parebriseexpress.ma/images/assets/bpe-mas.jpg", link: "https://www.instagram.com/p/DU9D6i_DDVx/?img_index=1" },
];

const PartnershipSection = () => {
  return (
    <section className="py-20 md:py-32 section-padding bg-dark-surface">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {partners.map((partner, i) => (
            <motion.a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl aspect-[16/9]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <img
                src={partner.img}
                alt={partner.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-sm font-sans text-cream-muted mb-1">Partenariat</p>
                <h3 className="text-xl font-serif text-foreground">
                  Pare-Brise Express × {partner.name}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PartnershipSection;
