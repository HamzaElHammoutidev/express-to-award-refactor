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

const TrophySvg = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M8 21h8M12 17v4M7 4h10v3a5 5 0 0 1-10 0V4Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 6H3a2 2 0 0 0 2 2M19 6h2a2 2 0 0 1-2 2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MapPinSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ShieldSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M12 21s7-3.8 7-10V5l-7-2-7 2v6c0 6.2 7 10 7 10Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="m9.5 12 1.7 1.7 3.3-3.7" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
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

  // Parallax for orbs
  const orb1Y = useTransform(centered, (v) => v * 22 * 0.12);
  const orb2Y = useTransform(centered, (v) => v * 22 * 0.18);
  const smoothOrb1Y = useSpring(orb1Y, { stiffness: 80, damping: 30 });
  const smoothOrb2Y = useSpring(orb2Y, { stiffness: 80, damping: 30 });

  // Parallax for cert card
  const certY = useTransform(centered, (v) => v * 16 * 0.8);
  const smoothCertY = useSpring(certY, { stiffness: 80, damping: 30 });

  // Parallax for heading
  const headY = useTransform(centered, (v) => v * 16 * 0.5);
  const smoothHeadY = useSpring(headY, { stiffness: 80, damping: 30 });

  // Mouse parallax
  const certMoveX = useTransform(mouseX, [-1, 1], [-8, 8]);
  const smoothCertMoveX = useSpring(certMoveX, { stiffness: 60, damping: 20 });

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
      Icon: TrophySvg,
      target: 10,
      suffix: "+",
      label: t("Ans", "سنة"),
      desc: t("D'expérience couronnée de succès", "من الخبرة المتوجة بالنجاح"),
    },
    {
      Icon: MapPinSvg,
      target: 80,
      suffix: "+",
      label: t("Centres", "مركز"),
      desc: t("Centres techniques et ateliers mobiles", "مراكز تقنية وورشات متنقلة"),
    },
    {
      Icon: ShieldSvg,
      target: 7,
      suffix: "+",
      label: t("Partenaires", "شريك"),
      desc: t("Partenaires assurances qui nous font confiance", "شركاء تأمين يثقون بنا"),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        padding: "70px 20px 90px",
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

      <div className="max-w-[1240px] mx-auto relative z-[2]">
        {/* Certification Card */}
        <motion.div
          style={{ y: smoothCertY, x: smoothCertMoveX }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-7 items-center bg-gradient-to-br from-primary to-primary/90 text-foreground rounded-[28px] p-5 md:p-6 md:px-7 mx-auto mb-14 shadow-[0_18px_40px_rgba(0,0,0,0.16)]">
            {/* Logo */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-card flex items-center justify-center shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)] mx-auto md:mx-0">
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

            {/* Content */}
            <div className="text-center md:text-start">
              <span className="inline-block mb-2.5 px-3 py-1.5 rounded-full bg-white/[0.28] text-xs font-extrabold uppercase tracking-[0.08em]">
                {t("Certification", "شهادة")}
              </span>
              <p className="text-sm md:text-lg leading-[1.75] font-medium">
                {t(
                  "Certifié par IMANOR, Pare-Brise Express met plus de dix ans d'expertise à votre service pour la réparation et le remplacement des vitrages de vos véhicules. Des interventions conformes aux standards les plus exigeants, pour une tranquillité d'esprit totale.",
                  "حاصلة على شهادة IMANOR، تضع بار بريز إكسبرس أكثر من عشر سنوات من الخبرة في خدمتكم لإصلاح واستبدال زجاج سياراتكم. تدخلات مطابقة لأعلى المعايير في القطاع، لراحة بال تامة."
                )}
              </p>
            </div>
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
          <h2 className="text-[clamp(48px,7vw,94px)] leading-[0.98] tracking-[-0.05em] font-extrabold mb-[18px]">
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

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-[26px]">
          {stats.map((stat, i) => (
            <motion.article
              key={stat.label}
              className="relative rounded-[28px] border border-white/[0.08] p-8 md:p-[34px_28px_30px] text-center shadow-[0_16px_38px_rgba(0,0,0,0.16)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1.5 hover:border-primary/[0.24] hover:shadow-[0_22px_46px_rgba(0,0,0,0.22)]"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03))",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="w-[34px] h-[34px] text-primary mx-auto mb-4">
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
              {/* Bottom accent bar */}
              <div className="w-[82px] h-1 rounded-full bg-primary/[0.68] mx-auto" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalamatounaSection;
