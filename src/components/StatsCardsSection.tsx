import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Calendar, MapPin, Handshake } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    target: 10,
    suffix: "+",
    label: "Ans",
    desc: "d'expérience couronnée de succès",
    img: "https://parebriseexpress.ma/images/calendar.svg",
  },
  {
    icon: MapPin,
    target: 80,
    suffix: "+",
    label: "Centres",
    desc: "techniques et ateliers mobiles à travers le Maroc",
    img: "https://ubermensch-staging.com//storage/acceuil-icons/download%20(2).png",
  },
  {
    icon: Handshake,
    target: 7,
    suffix: "+",
    label: "Partenaires",
    desc: "assureurs qui nous font confiance",
    img: "https://ubermensch-staging.com//storage/acceuil-icons/download%20(1).png",
  },
];

const AnimatedNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const StatsCardsSection = () => {
  return (
    <section className="py-20 md:py-32 section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Réparation rapide, qualité garantie
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.05]">
            Pourquoi nous <span className="italic text-gradient-gold">choisir</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="group relative overflow-hidden rounded-3xl border border-border/30 bg-card p-8 md:p-10 hover:border-primary/30 transition-all duration-700"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Glow effect on hover */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Icon */}
              <div className="relative z-10 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <img src={stat.img} alt="" className="w-7 h-7 object-contain" />
                </div>
              </div>

              {/* Number */}
              <div className="relative z-10">
                <span className="text-5xl md:text-6xl font-serif text-gradient-gold leading-none">
                  <AnimatedNumber target={stat.target} suffix={stat.suffix} />
                </span>
                <h3 className="text-sm font-sans font-semibold text-foreground mt-3 uppercase tracking-[0.2em]">
                  {stat.label}
                </h3>
                <p className="text-sm font-sans text-muted-foreground mt-3 leading-relaxed font-light">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCardsSection;
