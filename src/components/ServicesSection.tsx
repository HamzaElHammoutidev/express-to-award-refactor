import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: "https://parebriseexpress.ma/images/motif.png",
    number: "01",
    title: "Réparation d'impact(s)",
    description:
      "Chez Pare-Brise Express, nous savons que chaque impact doit être traité rapidement. C'est pourquoi nous vous proposons une intervention rapide, fiable et éco-responsable. Ne laissez pas un petit choc compromettre votre sécurité : contactez-nous sans attendre pour une solution sur mesure.",
    image: "https://parebriseexpress.ma/images/tech_serv.jpg",
  },
  {
    icon: "https://parebriseexpress.ma/images/voiture.png",
    number: "02",
    title: "Remplacement de votre pare-brise",
    description:
      "Pare-brise endommagé ? Détendez-vous, nous nous chargeons de tout. De la prise de contact à la réception de votre véhicule en passant par le remplacement et le recalibrage de votre caméra ADAS, nous vous accompagnons à chaque étape pour vous garantir un service de qualité.",
    image: "https://parebriseexpress.ma/images/jouj_serv.jpg",
  },
  {
    icon: "https://parebriseexpress.ma/images/test.png",
    number: "03",
    title: "Atelier mobile",
    description:
      "Service 100% gratuit — Sur tout type de vitrage — Chez vous, sur votre lieu de travail ou ailleurs. Notre atelier mobile se déplace pour vous offrir le même niveau de qualité qu'en centre technique.",
    image: "https://parebriseexpress.ma/images/van_serv.jpg",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-40 section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Ce que nous faisons
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.05]">
            Nos <span className="italic text-gradient-gold">services</span>
          </h2>
          <p className="text-base font-sans text-secondary-foreground mt-5 max-w-xl font-light leading-relaxed">
            Découvrez dès maintenant tous nos services de réparation et de remplacement.
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-border/30 bg-card hover:border-primary/20 transition-all duration-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Image side */}
              <div className={`relative aspect-[4/3] md:aspect-auto overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card/30 to-transparent md:bg-none" />
                {/* Number overlay */}
                <div className="absolute top-6 left-6">
                  <span className="text-7xl font-serif text-foreground/10 leading-none">
                    {service.number}
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className={`flex flex-col justify-center p-8 md:p-12 lg:p-16 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <img
                      src={service.icon}
                      alt=""
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span className="text-xs font-sans font-semibold text-primary uppercase tracking-[0.25em]">
                    Service {service.number}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-5 leading-tight group-hover:text-primary transition-colors duration-500">
                  {service.title}
                </h3>

                <p className="text-sm md:text-base font-sans text-secondary-foreground leading-[1.9] font-light">
                  {service.description}
                </p>

                <div className="mt-8">
                  <span className="inline-flex items-center gap-2 text-[13px] font-sans font-medium text-primary group-hover:gap-4 transition-all duration-500">
                    En savoir plus
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
