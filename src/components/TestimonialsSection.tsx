import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin } from "lucide-react";

const testimonials = [
  { name: "Farid Aos", city: "Marrakech", meta: "Remplacement de pare-brise", text: "Bonne réception, service rapide et équipe sérieuse. La prise en charge a été claire du début à la fin.", textAr: "استقبال جيد، خدمة سريعة وفريق جاد. كانت المتابعة واضحة من البداية إلى النهاية.", variant: "light" as const },
  { name: "Omar Elyemlahi", city: "Larache", meta: "Intervention vitrage", text: "Merci à l'équipe du centre pour l'accueil, les conseils et le professionnalisme. Service efficace et rassurant.", textAr: "شكراً لفريق المركز على الاستقبال والنصائح والاحترافية. خدمة فعالة ومطمئنة.", variant: "dark" as const },
  { name: "Emma", city: "Agadir", meta: "Réparation impact", text: "Équipe très efficace et très bon accompagnement. Je recommande vivement pour la qualité du service.", textAr: "فريق فعال جداً ومرافقة ممتازة. أنصح بشدة بجودة الخدمة.", variant: "soft" as const },
  { name: "HAMZA ER-RAJI", city: "Rabat", meta: "Centre Rabat", text: "Service très rapide et amical ! Le personnel était à l'écoute et très professionnel.", textAr: "خدمة سريعة جداً وودية! الموظفون كانوا منتبهين ومحترفين جداً.", variant: "dark" as const },
  { name: "Mehdi Idrissi", city: "Casablanca", meta: "Service express", text: "Service rapide et comportement aimable ! Très satisfait du résultat.", textAr: "خدمة سريعة وسلوك لطيف! راضٍ جداً عن النتيجة.", variant: "light" as const },
  { name: "Amine Wahbi", city: "Casablanca", meta: "Remplacement express", text: "Expérience parfaite avec Pare-Brise Express, rapide et pro. Je ne changerais pour rien au monde.", textAr: "تجربة مثالية مع بار بريز إكسبرس، سريعة واحترافية.", variant: "soft" as const },
  { name: "Mohammed Ghamri", city: "Fes", meta: "Réparation vitrage", text: "Service rapide et de qualité, je le recommande à tous mes proches.", textAr: "خدمة سريعة وذات جودة، أنصح بها جميع أقاربي.", variant: "light" as const },
  { name: "Hacheme B", city: "Casablanca", meta: "Service premium", text: "Bravo à Hamza! Son accueil, son professionnalisme et son engagement à vous satisfaire. Excellent !", textAr: "برافو لحمزة! استقباله واحترافيته والتزامه بإرضائكم. ممتاز!", variant: "dark" as const },
];

const CARD_WIDTH = 380;
const CARD_WIDTH_MOBILE = 292;
const GAP = 24;
const GAP_MOBILE = 16;
const SPEED = 38;
const SPEED_MOBILE = 24;

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const offsetRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animFrameRef = useRef<number>(0);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const cardW = isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH;
  const gap = isMobile ? GAP_MOBILE : GAP;
  const speed = isMobile ? SPEED_MOBILE : SPEED;
  const setWidth = testimonials.length * (cardW + gap);

  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 30 });
  const blob1Y = useTransform(smoothProgress, [0, 1], [40, -40]);
  const blob2Y = useTransform(smoothProgress, [0, 1], [60, -60]);
  const blob3Y = useTransform(smoothProgress, [0, 1], [80, -80]);
  const headY = useTransform(smoothProgress, [0, 1], [20, -20]);
  const shellY = useTransform(smoothProgress, [0, 1], [14, -14]);

  // Mouse parallax
  const smoothMouseX = useSpring(0, { stiffness: 60, damping: 20 });
  const smoothMouseY = useSpring(0, { stiffness: 60, damping: 20 });

  useEffect(() => {
    smoothMouseX.set(mousePos.x);
    smoothMouseY.set(mousePos.y);
  }, [mousePos, smoothMouseX, smoothMouseY]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: 0, y: 0 });
  }, []);

  // Marquee animation via rAF
  useEffect(() => {
    const animate = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      if (!isPaused && !document.hidden) {
        offsetRef.current += speed * delta;
        if (offsetRef.current >= setWidth) offsetRef.current -= setWidth;
        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
        }
      }
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isPaused, speed, setWidth]);

  const allCards = [...testimonials, ...testimonials];

  const cardVariantClasses = {
    light: "bg-card/95 text-foreground backdrop-blur-[10px] border border-border/60",
    dark: "bg-gradient-to-br from-[hsl(20_8%_11%)] to-[hsl(20_6%_16%)] text-[hsl(36_33%_95%)] border border-white/5",
    soft: "bg-surface-dark/95 text-foreground",
  };

  const badgeClasses = {
    light: "bg-primary/10 text-primary border border-primary/20",
    dark: "bg-white/8 text-[hsl(36_33%_85%)] border border-white/8",
    soft: "bg-primary/10 text-primary border border-primary/20",
  };

  const dividerClasses = {
    light: "bg-foreground/12",
    dark: "bg-white/14",
    soft: "bg-foreground/12",
  };

  const metaClasses = {
    light: "text-muted-foreground",
    dark: "text-[hsl(36_33%_93%)]/70",
    soft: "text-muted-foreground",
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-[82px] md:py-[110px] isolate"
      style={{
        background: `
          radial-gradient(circle at 12% 16%, hsl(var(--gold) / 0.08), transparent 18%),
          radial-gradient(circle at 88% 14%, hsl(var(--gold) / 0.06), transparent 15%),
          radial-gradient(circle at 50% 100%, hsl(var(--gold) / 0.05), transparent 22%),
          linear-gradient(180deg, hsl(var(--surface)) 0%, hsl(var(--cream)) 100%)
        `,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Parallax blobs */}
      <motion.div
        className="absolute pointer-events-none z-[1] w-[280px] h-[280px] rounded-full blur-[14px] top-[80px] -left-[90px]"
        style={{
          background: "radial-gradient(circle, hsl(var(--gold) / 0.16), transparent 70%)",
          y: blob1Y,
          x: useTransform(smoothMouseX, (v) => v * 24 * 0.42),
        }}
      />
      <motion.div
        className="absolute pointer-events-none z-[1] w-[220px] h-[220px] rounded-full blur-[14px] top-[170px] -right-[50px]"
        style={{
          background: "radial-gradient(circle, hsl(var(--background) / 0.95), transparent 70%)",
          y: blob2Y,
          x: useTransform(smoothMouseX, (v) => v * 24 * 0.62),
        }}
      />
      <motion.div
        className="absolute pointer-events-none z-[1] w-[420px] h-[420px] rounded-full blur-[14px] -bottom-[180px] left-[14%]"
        style={{
          background: "radial-gradient(circle, hsl(var(--gold) / 0.10), transparent 72%)",
          y: blob3Y,
          x: useTransform(smoothMouseX, (v) => v * 24 * 0.82),
        }}
      />
      {/* Orb line */}
      <motion.div
        className="absolute pointer-events-none z-[1] w-[560px] h-[560px] rounded-full border border-primary/15 top-[20px] right-[12%]"
        style={{
          y: useTransform(smoothProgress, [0, 1], [30, -30]),
          x: useTransform(smoothMouseX, (v) => v * 24 * 0.34),
        }}
      />

      {/* Header */}
      <motion.div
        className="relative z-[3] text-center max-w-[1020px] mx-auto mb-10 md:mb-14 section-padding"
        style={{ y: headY, x: useTransform(smoothMouseX, (v) => v * 8) }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 mb-4 px-4 py-2.5 rounded-full bg-card/50 border border-border/60 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_6px_hsl(var(--gold)/0.10)]" />
            <span className="text-muted-foreground text-[13px] font-bold tracking-[0.08em] uppercase">
              {t("Avis clients", "آراء العملاء")}
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-[clamp(44px,6vw,80px)] font-bold leading-[0.98] tracking-[-0.05em] mb-4">
            {t("Témoignages de nos", "شهادات")}{" "}
            <span className="italic text-gradient-gold font-bold">{t("clients", "عملائنا")}</span>
          </h2>

          <p className="max-w-[760px] mx-auto text-muted-foreground text-base md:text-lg leading-[1.7]">
            {t(
              "Découvrez ce que nos clients disent de leur expérience avec Pare-Brise Express.",
              "اكتشفوا ما يقوله عملاؤنا عن تجربتهم مع بار بريز إكسبرس."
            )}
          </p>

          {/* Gold line */}
          <div className="w-[200px] h-px mx-auto mt-6 bg-gradient-to-r from-transparent via-primary/90 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Carousel */}
      <motion.div
        className="relative z-[3]"
        style={{ y: shellY, x: useTransform(smoothMouseX, (v) => v * 6) }}
      >
        <div
          className="relative overflow-hidden pt-[18px] pb-2"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div ref={trackRef} className="flex will-change-transform">
            <div className="flex gap-4 md:gap-6 shrink-0 pr-4 md:pr-6">
              {allCards.map((item, i) => (
                <article
                  key={`${item.name}-${i}`}
                  className={`w-[292px] md:w-[380px] min-h-[266px] md:min-h-[292px] rounded-[24px] md:rounded-[30px] p-[22px_20px_20px] md:p-[28px_28px_24px] flex flex-col justify-between shadow-[0_18px_50px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_24px_56px_rgba(0,0,0,0.11)] hover:border-primary/20 ${cardVariantClasses[item.variant]}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[42px] leading-none font-bold text-primary opacity-95">"</span>
                      <span className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-[12px] font-extrabold tracking-[0.04em] uppercase ${badgeClasses[item.variant]}`}>
                        <MapPin className="w-3 h-3" />
                        {item.city}
                      </span>
                    </div>
                    <p className="text-[16px] md:text-[17px] leading-[1.8] tracking-[-0.01em] mb-6">
                      {t(item.text, item.textAr)}
                    </p>
                  </div>
                  <div>
                    <div className={`w-14 h-[2px] rounded-full mb-4 ${dividerClasses[item.variant]}`} />
                    <div className="flex flex-col gap-1">
                      <strong className="text-2xl md:text-[28px] leading-[1.05] font-bold tracking-[-0.03em]">
                        {item.name}
                      </strong>
                      <span className={`text-base ${metaClasses[item.variant]}`}>
                        {t(item.meta, item.meta)}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
