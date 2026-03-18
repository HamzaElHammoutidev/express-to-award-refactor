import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Trophy, MapPinCheck, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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

  return <span ref={ref}>{suffix}{count}</span>;
};

const StatsCardsSection = () => {
  const { t } = useLanguage();

  const stats = [
    {
      Icon: Trophy,
      target: 10,
      suffix: "+",
      label: t("ans", "سنة"),
      desc: t("D'expérience couronnée de succès", "من الخبرة المتوجة بالنجاح"),
    },
    {
      Icon: MapPinCheck,
      target: 80,
      suffix: "+",
      label: t("Centres", "مركز"),
      desc: t("Centres techniques et ateliers mobiles", "مراكز تقنية وورشات متنقلة"),
    },
    {
      Icon: Shield,
      target: 7,
      suffix: "+",
      label: t("Partenaires", "شريك"),
      desc: t("Partenaires assurances qui nous font confiance", "شركاء تأمين يثقون بنا"),
    },
  ];

  return (
    <section className="py-14 md:py-20 section-padding bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.1]">
            {t("Votre Pare-brise,", "زجاجكم الأمامي،")}
            <br />
            <span className="italic text-primary">{t("notre priorité !", "أولويتنا !")}</span>
          </h2>
          <p className="text-sm md:text-base text-background/60 mt-4 max-w-xl mx-auto font-light leading-relaxed">
            {t(
              "Réparation rapide, qualité garantie. Découvrez dès maintenant tous nos services de réparation et de remplacement.",
              "إصلاح سريع، جودة مضمونة. اكتشفوا الآن جميع خدماتنا للإصلاح والاستبدال."
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="rounded-2xl border border-background/10 bg-background/5 p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <stat.Icon size={24} className="text-primary" />
                <span className="text-4xl md:text-5xl font-serif text-primary font-bold">
                  <AnimatedNumber target={stat.target} suffix={stat.suffix} />
                </span>
              </div>
              <h3 className="text-sm font-semibold text-background uppercase tracking-wider mb-1">
                {stat.label}
              </h3>
              <p className="text-sm text-background/50 font-light">{stat.desc}</p>

              {/* Bottom accent bar */}
              <div className="mt-6 mx-auto w-16 h-1 rounded-full bg-primary/40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCardsSection;
