import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { target: 10, suffix: "+", label: "Ans", desc: "d'expérience couronnée de succès" },
  { target: 80, suffix: "+", label: "Centres", desc: "techniques et ateliers mobiles" },
  { target: 7, suffix: "+", label: "Partenaires", desc: "qui nous font confiance" },
];

const AnimatedNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

const CertificationSection = () => {
  return (
    <section id="about" className="py-28 md:py-44 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          {/* Left — Text + Certification */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-5 mb-10">
              <img
                src="https://parebriseexpress.ma/images/assets/imanor-orig.png"
                alt="IMANOR Certification"
                className="h-16 md:h-20 object-contain"
              />
              <div className="w-px h-14 bg-border" />
              <span className="text-xs font-sans text-muted-foreground uppercase tracking-[0.2em]">
                Certifié IMANOR
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-serif leading-[1.1] mb-8">
              Votre Pare-brise,{" "}
              <span className="italic text-gradient-gold">notre priorité&nbsp;!</span>
            </h2>

            <p className="text-base md:text-lg font-sans text-secondary-foreground leading-[1.8] font-light">
              Certifié par IMANOR, Pare-Brise Express met plus de dix ans d'expertise
              à votre service pour la réparation et le remplacement des vitrages de vos
              véhicules. Que vous ayez un impact, une fissure ou un bris de glace, nous
              vous offrons des solutions certifiées, adaptées à tous types de véhicules,
              qu'il s'agisse de voitures légères ou de poids lourds.
            </p>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center py-8 md:py-12 rounded-2xl bg-surface border border-border/50"
              >
                <span className="block text-4xl md:text-5xl lg:text-6xl font-serif text-gradient-gold leading-none">
                  <AnimatedNumber target={stat.target} suffix={stat.suffix} />
                </span>
                <span className="block text-[11px] font-sans font-semibold text-foreground mt-3 uppercase tracking-[0.25em]">
                  {stat.label}
                </span>
                <p className="text-[11px] font-sans text-muted-foreground mt-2 leading-relaxed px-3">
                  {stat.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
