import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

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

/* Icons matching the uploaded reference */
const ExperienceIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
    <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="3.5"/>
    <path d="M40 14l7.5 15.5H64L51 40.5l5 15L40 46l-16 9.5 5-15L16 29.5h16.5L40 14Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M40 62v6M36 66h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const CentresIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
    <path d="M10 58c0-2 0-4 2-4h56c2 0 2 2 2 4v6c0 2 0 4-2 4H12c-2 0-2-2-2-4v-6z" stroke="currentColor" strokeWidth="3"/>
    <path d="M14 54V38c0-2 2-4 4-4h44c2 0 4 2 4 4v16" stroke="currentColor" strokeWidth="3"/>
    <path d="M30 34l-4-12h28l-4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="50" cy="20" r="8" stroke="currentColor" strokeWidth="3"/>
    <circle cx="50" cy="20" r="3" fill="currentColor"/>
    <path d="M50 12v-2" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <path d="M20 46h12M48 46h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 4"/>
  </svg>
);

const PartenairesIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
    <path d="M12 44l14-14h6l8 8 8-8h6l14 14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26 44l7 7 7-7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M40 44l7 7 7-7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 20l-4 4M62 20l4 4M40 16v-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const SalamatounaSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const centered = useTransform(scrollYProgress, [0, 1], [-1, 1]);
  const orb1Y = useTransform(centered, (v) => v * 22 * 0.12);
  const orb2Y = useTransform(centered, (v) => v * 22 * 0.18);
  const smoothOrb1Y = useSpring(orb1Y, { stiffness: 80, damping: 30 });
  const smoothOrb2Y = useSpring(orb2Y, { stiffness: 80, damping: 30 });
  const headY = useTransform(centered, (v) => v * 16 * 0.5);
  const smoothHeadY = useSpring(headY, { stiffness: 80, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  const stats = [
    {
      Icon: ExperienceIcon,
      target: 10,
      suffix: "+",
      label: t("Ans", "سنة"),
      desc: t("D'expérience couronnée de succès", "من الخبرة المتوجة بالنجاح"),
    },
    {
      Icon: CentresIcon,
      target: 80,
      suffix: "+",
      label: t("Centres", "مركز"),
      desc: t("Centres techniques et ateliers mobiles", "مراكز تقنية وورشات متنقلة"),
    },
    {
      Icon: PartenairesIcon,
      target: 7,
      suffix: "+",
      label: t("Partenaires", "شريك"),
      desc: t("Partenaires assurances qui nous font confiance", "شركاء تأمين يثقون بنا"),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-visible z-[50] -mt-10 md:-mt-16"
      style={{
        padding: "20px 20px 0px",
        background: `
          radial-gradient(circle at 15% 15%, rgba(228,181,44,0.08), transparent 20%),
          radial-gradient(circle at 85% 80%, rgba(228,181,44,0.06), transparent 18%),
          linear-gradient(180deg, hsl(var(--foreground)) 0%, hsl(0 0% 7%) 100%)
        `,
        color: "hsl(var(--background))",
      }}
    >
      {/* Background orbs */}
      <motion.div
        className="absolute rounded-full pointer-events-none z-0"
        style={{
          width: 280, height: 280, top: 40, left: -80,
          background: "radial-gradient(circle, rgba(228,181,44,0.14), transparent 70%)",
          filter: "blur(18px)",
          y: smoothOrb1Y,
        }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none z-0"
        style={{
          width: 320, height: 320, bottom: 30, right: -90,
          background: "radial-gradient(circle, rgba(228,181,44,0.10), transparent 70%)",
          filter: "blur(18px)",
          y: smoothOrb2Y,
        }}
      />

      <div className="max-w-[1400px] mx-auto relative z-[2]">
        {/* IMANOR Certification Card — logo overflows */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-14"
        >
          {/* The yellow card — full width, compact height */}
          <div className="relative bg-primary rounded-2xl md:rounded-3xl px-6 md:px-12 py-5 md:py-6 shadow-[0_18px_40px_rgba(0,0,0,0.16)]">
            <div className="md:ps-[200px] pt-20 md:pt-0">
              <p className="text-sm md:text-[15px] leading-[1.8] font-medium text-foreground">
                {t(
                  "Certifié par IMANOR, Pare-Brise Express met plus de dix ans d'expertise à votre service pour la réparation et le remplacement des vitrages de vos véhicules. Que vous ayez un impact, une fissure ou un bris de glace, nous vous offrons des solutions certifiées, adaptées à tous types de véhicules, qu'il s'agisse de voitures légères ou de poids lourds. Nos certifications vous garantissent des interventions conformes aux standards les plus exigeants du secteur, pour une tranquillité d'esprit totale.",
                  "حاصلة على شهادة IMANOR، تضع بار بريز إكسبرس أكثر من عشر سنوات من الخبرة في خدمتكم لإصلاح واستبدال زجاج سياراتكم. سواء كان لديكم تأثير أو شق أو كسر في الزجاج، نقدم لكم حلولاً معتمدة ومناسبة لجميع أنواع المركبات، سواء كانت سيارات خفيفة أو ثقيلة. شهاداتنا تضمن لكم تدخلات مطابقة لأعلى معايير القطاع، لراحة بال تامة."
                )}
              </p>
            </div>
          </div>

          {/* Logo circle — overflows the card top & bottom */}
          <div className="absolute left-1/2 md:left-6 -translate-x-1/2 md:translate-x-0 -top-12 md:top-1/2 md:-translate-y-1/2 w-32 h-32 md:w-44 md:h-44 rounded-full bg-card flex items-center justify-center shadow-[0_12px_32px_rgba(0,0,0,0.18)] border-4 border-background/20 z-[60]">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="cursor-pointer"
            >
              <img
                src="https://parebriseexpress.ma/images/assets/imanor-orig.png"
                alt="IMANOR - Certification Salamatouna"
                className="h-20 md:h-28 object-contain"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          style={{ y: smoothHeadY }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center max-w-[900px] mx-auto mb-12"
        >
          <h2 className="text-[clamp(36px,7vw,94px)] leading-[0.98] tracking-[-0.05em] font-extrabold mb-[18px]">
            {t("Votre Pare-brise,", "زجاجكم الأمامي،")}
            <br />
            <span className="text-primary italic font-bold">{t("notre priorité !", "أولويتنا !")}</span>
          </h2>
          <p className="max-w-[760px] mx-auto text-[clamp(17px,1.8vw,22px)] leading-[1.8] text-background/[0.68]">
            {t(
              "Réparation rapide, qualité garantie. Découvrez dès maintenant tous nos services de réparation et de remplacement.",
              "إصلاح سريع، جودة مضمونة. اكتشفوا الآن جميع خدماتنا للإصلاح والاستبدال."
            )}
          </p>
        </motion.div>

        {/* Stats Grid — bigger icons */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-[26px]">
          {stats.map((stat, i) => (
            <motion.article
              key={stat.label}
              className="relative rounded-[28px] border border-white/[0.08] p-8 md:p-[34px_28px_30px] text-center shadow-[0_16px_38px_rgba(0,0,0,0.16)] bg-white/[0.04] transition-transform duration-300 hover:-translate-y-1.5 hover:border-primary/[0.24] hover:shadow-[0_22px_46px_rgba(0,0,0,0.22)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto mb-5">
                <stat.Icon />
              </div>
              <div className="text-[clamp(52px,5vw,78px)] leading-[0.95] font-extrabold tracking-[-0.05em] text-primary mb-2.5">
                <AnimatedNumber target={stat.target} suffix={stat.suffix} />
              </div>
              <h3 className="text-lg font-extrabold uppercase tracking-[0.08em] text-background mb-2.5">
                {stat.label}
              </h3>
              <p className="max-w-[260px] mx-auto text-background/[0.62] text-base leading-[1.7] mb-[18px]">
                {stat.desc}
              </p>
              <div className="w-[82px] h-1 rounded-full bg-primary/[0.68] mx-auto" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalamatounaSection;
