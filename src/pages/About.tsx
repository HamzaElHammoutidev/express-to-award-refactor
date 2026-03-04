import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const events = [
  {
    date: "11 et 13 juillet 2024",
    title: "Transpro - Forum du transport touristique et du personnel",
    location: "Hôtel Hilton Garden",
    image: "https://parebriseexpress.ma/images/events/Transpro.jpg",
  },
  {
    date: "1er au 7 juillet 2024",
    title: "Avito Expo : 2ème édition du salon de la voiture d'occasion",
    location: "Casablanca",
    image: "https://parebriseexpress.ma/images/events/AvitoEvent.jpg",
    videoLink: "https://youtu.be/oaOrvs_LkEE",
  },
  {
    date: "17 et 18 avril 2024",
    title: "La 10ème édition du rendez-vous de Casablanca de l'assurance",
    location: "Hôtel Hyatt Regency, Casablanca",
    image: "https://parebriseexpress.ma/images/events/HyattEvent.jpg",
  },
];

const EventsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 500, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-32 bg-surface overflow-hidden">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Nos évènements
              </p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.05]">
                Toujours <span className="italic text-gradient-gold">présents</span>
              </h2>
            </motion.div>
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => scroll(-1)}
                disabled={!canScrollLeft}
                className="w-12 h-12 rounded-full border border-border/60 flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-primary/40 disabled:opacity-30 transition-all duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll(1)}
                disabled={!canScrollRight}
                className="w-12 h-12 rounded-full border border-border/60 flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-primary/40 disabled:opacity-30 transition-all duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal scroll carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-6 md:px-12 lg:px-20 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {events.map((event, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[38vw] snap-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="group relative rounded-2xl overflow-hidden bg-card border border-border/30 hover:border-primary/20 transition-all duration-500">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Date badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block px-4 py-2 rounded-full bg-foreground/80 backdrop-blur-sm text-background text-xs font-sans font-medium tracking-wide">
                    {event.date}
                  </span>
                </div>
                {/* Video play button */}
                {event.videoLink && (
                  <a
                    href={event.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center z-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-foreground ml-1">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                  </a>
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
              </div>

              {/* Text */}
              <div className="p-6">
                <p className="text-xs font-sans text-muted-foreground mb-2 tracking-wide">
                  {event.location}
                </p>
                <h3 className="text-lg md:text-xl font-serif leading-snug text-foreground group-hover:text-primary transition-colors duration-300">
                  {event.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <PageHeader breadcrumb="Qui sommes nous?" title="L'histoire derrière notre réussite !" />

      {/* Video Section */}
      <section className="section-padding py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="relative rounded-2xl overflow-hidden aspect-video border border-border/30"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <video
              autoPlay muted loop playsInline
              className="w-full h-full object-cover"
              poster="https://parebriseexpress.ma/images/assets/bpe-rca.jpg"
            >
              <source src="https://parebriseexpress.ma//storage/theme-videos/March2025/wRZK8aB8oLsXQUO0nwC9.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding py-20 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">
              À propos de nous
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.05] mb-8">
              Des dizaines de milliers de clients{" "}
              <span className="italic text-gradient-gold">nous font confiance.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-base font-sans text-secondary-foreground leading-[1.9] font-light mb-6">
                Votre sécurité est notre priorité. En tant que spécialistes de la réparation et du remplacement de vitrages automobiles, nous mettons notre expertise au service de tous types de véhicules. Nos interventions respectent les standards internationaux du vitrage et de la réparation, garantissant une qualité optimale et une durabilité accrue.
              </p>
              <p className="text-base font-sans text-secondary-foreground leading-[1.9] font-light">
                Grâce à des technologies de pointe et des solutions innovantes, nous assurons des prestations conformes aux normes les plus exigeantes, offrant ainsi protection, performance et visibilité optimale sur la route.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-serif mb-6">
                Expertise et <span className="italic text-gradient-gold">Présence</span>
              </h3>
              <p className="text-base font-sans text-secondary-foreground leading-[1.9] font-light mb-6">
                Pare-Brise Express, une success story en plein essor depuis plus d'une décennie. Fondée en 2010, l'entreprise s'impose aujourd'hui comme le leader incontesté des solutions de vitrage automobile au Maroc.
              </p>
              <p className="text-base font-sans text-secondary-foreground leading-[1.9] font-light">
                Grâce à une expertise avérée dans la réparation et le remplacement de vitres pour véhicules légers et poids lourds, elle répond aux exigences d'une clientèle variée. Depuis ses locaux modernes à Casablanca, Pare-Brise Express a investi dans des équipements de pointe. Plus de 250 professionnels accompagnent les clients à travers un réseau de plus de 80 centres techniques et ateliers mobiles, couvrant l'ensemble du territoire.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="section-padding py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-5xl font-serif leading-[1.05] mb-8">
              Chez Pare-Brise Express,{" "}
              <span className="italic text-gradient-gold">l'excellence avant tout</span>
            </h2>
            <p className="text-base font-sans text-secondary-foreground leading-[1.9] font-light mb-6">
              Nous nous engageons à offrir des prestations de haute qualité guidées par la quête de l'excellence. Certifiée ISO 9001 par IMANOR, nous appliquons des standards internationaux rigoureux pour garantir précision, fiabilité et amélioration continue dans chacune de nos interventions.
            </p>
            <p className="text-base font-sans text-secondary-foreground leading-[1.9] font-light">
              De plus, nous sommes fiers d'être le premier réparateur de vitrage automobile au Maroc à obtenir le label SALAMATOUNA, une reconnaissance de notre engagement pour la sécurité, la conformité et la performance des vitrages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Carousel Section */}
      <EventsCarousel />

      <Footer />
    </div>
  );
};

export default About;
