import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRef, useEffect, useState } from "react";
import carShieldImg from "@/assets/car-shield.png";

const steps = [
  {
    number: "01",
    icon: "https://parebriseexpress.ma/images/shape/comp.svg",
    titleFr: "Déclarez votre\nsinistre",
    titleAr: "صرّح بحادثك",
    descFr: "Fissure ou bris de glace ? Nous vous accompagnons dans la déclaration pour faciliter la prise en charge par votre assurance.",
    descAr: "شرخ أو كسر زجاج، نساعدكم في ملء التصريح لتقديمه لشركة التأمين.",
  },
  {
    number: "02",
    icon: "https://parebriseexpress.ma/images/shape/check.svg",
    titleFr: "Prenez rendez-vous",
    titleAr: "حدد موعدك",
    descFr: "Choisissez le centre technique et le créneau qui vous conviennent en quelques clics.",
    descAr: "اختاروا المركز التقني والوقت الذي يناسبكم.",
  },
  {
    number: "03",
    icon: "car-shield",
    titleFr: "Confiez-nous votre\nvéhicule",
    titleAr: "سلّمنا سيارتك",
    descFr: "Nos techniciens interviennent avec soin pour une prise en charge rapide, fiable et professionnelle.",
    descAr: "خبراؤنا المؤهلون سيعتنون بسيارتكم بعناية فائقة.",
  },
];

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const rotateX = useSpring(0, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 });
  const translateY = useSpring(0, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    
    const depth = 8 + index * 2;
    rotateY.set(x * depth);
    rotateX.set(y * -depth);
    translateY.set(-4);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    translateY.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{
        rotateX,
        rotateY,
        y: translateY,
        transformStyle: "preserve-3d",
      }}
      className="relative bg-card/90 backdrop-blur-sm rounded-[26px] shadow-[0_18px_50px_rgba(0,0,0,0.08)] pt-[72px] pb-8 px-8 text-center cursor-default hover:shadow-[0_28px_70px_rgba(0,0,0,0.11)] transition-shadow duration-300"
    >
      {/* Number badge */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-[76px] h-[76px] rounded-full bg-gradient-to-b from-primary to-primary/80 flex items-center justify-center text-primary-foreground text-[27px] font-extrabold border-[3px] border-background/80 shadow-[0_14px_32px_rgba(217,173,52,0.26)] z-10">
        {step.number}
      </div>

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-serif font-bold mb-5 min-h-[80px] flex items-center justify-center whitespace-pre-line text-foreground">
        {t(step.titleFr, step.titleAr)}
      </h3>

      {/* Icon with float effect */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-[170px] flex items-center justify-center mb-5"
      >
        <div className="absolute bottom-3 w-[58%] h-[14px] rounded-full bg-foreground/[0.07] blur-[8px]" />
        <img
          src={step.icon}
          alt={t(step.titleFr, step.titleAr)}
          className="relative z-10 max-w-[180px] max-h-[130px] w-auto h-auto object-contain"
        />
      </motion.div>

      {/* Description */}
      <p className="text-sm md:text-base text-muted-foreground leading-[1.7] max-w-[330px] mx-auto">
        {t(step.descFr, step.descAr)}
      </p>
    </motion.article>
  );
};

const ProcessSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax for background blobs
  const blob1Y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [40, -80]);
  const blob3Y = useTransform(scrollYProgress, [0, 1], [80, -40]);

  return (
    <section
      ref={sectionRef}
      id="declaration"
      className="relative py-20 md:py-28 section-padding overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 12% 18%, hsl(var(--primary) / 0.10), transparent 20%),
          radial-gradient(circle at 88% 22%, hsl(var(--primary) / 0.08), transparent 16%),
          radial-gradient(circle at 50% 100%, hsl(var(--primary) / 0.06), transparent 20%),
          hsl(var(--background))
        `,
      }}
    >
      {/* Parallax background blobs */}
      <motion.div
        style={{ y: blob1Y, background: "radial-gradient(circle, hsl(var(--primary) / 0.16), transparent 68%)" }}
        className="absolute top-10 -left-20 w-[320px] h-[320px] rounded-full blur-[14px] opacity-90 pointer-events-none"
      />
      <motion.div
        style={{ y: blob2Y, background: "radial-gradient(circle, hsl(var(--background) / 0.75), transparent 68%)" }}
        className="absolute top-[220px] -right-12 w-[240px] h-[240px] rounded-full blur-[14px] opacity-90 pointer-events-none"
      />
      <motion.div
        style={{ y: blob3Y, background: "radial-gradient(circle, hsl(var(--primary) / 0.14), transparent 70%)" }}
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full blur-[14px] opacity-90 pointer-events-none"
      />

      {/* Decorative ring */}
      <div className="absolute top-[90px] right-[14%] w-[280px] h-[280px] rounded-full border border-primary/[0.18] pointer-events-none" />

      <div className="relative z-10 max-w-[1320px] mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20 max-w-[1020px] mx-auto"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold tracking-tight mb-5">
            {t("Comment", "كيف")} <span className="italic text-primary">{t("ça marche ?", "يعمل ؟")}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[940px] mx-auto leading-[1.7]">
            {t(
              "Un service simple et fluide pour remplacer ou réparer votre vitrage sans stress.",
              "خدمة بسيطة وسلسة لاستبدال أو إصلاح الزجاج بدون إجهاد."
            )}
          </p>
        </motion.div>

        {/* Steps grid with connector line */}
        <div className="relative pt-4">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute left-[14%] right-[14%] top-[43%] h-[2px] z-[1]"
            style={{
              background: "linear-gradient(90deg, hsl(var(--primary) / 0), hsl(var(--primary) / 0.55), hsl(var(--primary) / 0.55), hsl(var(--primary) / 0))",
            }}
          >
            {/* Arrows */}
            <div className="absolute top-1/2 left-[33.2%] w-4 h-4 border-t-2 border-r-2 border-primary/75 -translate-y-1/2 rotate-45" />
            <div className="absolute top-1/2 right-[33.2%] w-4 h-4 border-t-2 border-r-2 border-primary/75 -translate-y-1/2 rotate-45" />
          </div>

          {/* Cards */}
          <div className="relative z-[2] grid md:grid-cols-3 gap-8 md:gap-9">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <Link
            to="/declaration"
            className="inline-flex items-center justify-center min-w-[300px] md:min-w-[360px] min-h-[72px] md:min-h-[82px] px-10 rounded-full text-background text-lg md:text-2xl font-bold tracking-tight hover:-translate-y-1 hover:scale-[1.015] transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.85) 45%, hsl(var(--foreground)) 100%)",
              boxShadow: "0 20px 46px rgba(0,0,0,0.16), inset 0 -3px 0 hsl(var(--primary) / 0.95)",
            }}
          >
            {t("Prendre rendez-vous", "حجز موعد")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
