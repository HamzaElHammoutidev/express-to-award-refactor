import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRef, useEffect, useCallback } from "react";

const services = [
  {
    id: "reparation",
    image: "https://parebriseexpress.ma/images/tech_serv.jpg",
    icon: "https://parebriseexpress.ma/images/motif.png",
    titleFr: "Réparation d'impact",
    titleAccentFr: "(s)",
    titleAr: "إصلاح التأثيرات",
    titleAccentAr: "",
    descFr: "Chez Pare-Brise Express, nous savons que chaque impact doit être traité rapidement. C'est pourquoi nous vous proposons une intervention rapide, fiable et éco-responsable.",
    descAr: "في بار بريز إكسبرس، نعلم أن كل تأثير يجب معالجته بسرعة. لذلك نقدم لكم تدخلاً سريعاً وموثوقاً وصديقاً للبيئة.",
    reverse: false,
    listFr: null,
    listAr: null,
  },
  {
    id: "remplacement",
    image: "https://parebriseexpress.ma/images/jouj_serv.jpg",
    icon: "https://parebriseexpress.ma/images/voiture.png",
    titleFr: "Remplacement de votre",
    titleAccentFr: " pare-brise",
    titleAr: "استبدال",
    titleAccentAr: " الزجاج الأمامي",
    descFr: "Pare-brise endommagé ? Détendez-vous, nous nous chargeons de tout. De la prise de contact à la réception de votre véhicule, en passant par le remplacement et le recalibrage de votre caméra ADAS.",
    descAr: "زجاج أمامي متضرر؟ استرخوا، نحن نتكفل بكل شيء. من الاتصال الأول إلى استلام سيارتكم مع إعادة معايرة كاميرا ADAS.",
    reverse: true,
    listFr: null,
    listAr: null,
  },
  {
    id: "mobile",
    image: "https://parebriseexpress.ma/images/van_serv.jpg",
    icon: "https://parebriseexpress.ma/images/test.png",
    titleFr: "Atelier",
    titleAccentFr: " mobile",
    titleAr: "ورشة",
    titleAccentAr: " متنقلة",
    descFr: null,
    descAr: null,
    reverse: false,
    listFr: ["Service 100% gratuit", "Sur tout type de vitrage*", "Chez vous, sur votre lieu de travail ou ailleurs"],
    listAr: ["خدمة مجانية 100%", "على جميع أنواع الزجاج*", "في منزلكم أو مكان عملكم أو أي مكان آخر"],
  },
];

const FloatingImage = ({ src, alt, depth, dir }: { src: string; alt: string; depth: number; dir: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const centered = useTransform(scrollYProgress, [0, 1], [-1, 1]);
  const moveY = useTransform(centered, (v) => v * 20 * depth);
  const smoothY = useSpring(moveY, { stiffness: 80, damping: 30 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateY = useTransform(mouseX, [-1, 1], [-1 * dir, 1 * dir]);
  const rotateX = useTransform(mouseY, [-1, 1], [0.6, -0.6]);
  const translateX = useTransform(mouseX, [-1, 1], [-6 * depth * dir, 6 * depth * dir]);

  const smoothRotateY = useSpring(rotateY, { stiffness: 60, damping: 20 });
  const smoothRotateX = useSpring(rotateX, { stiffness: 60, damping: 20 });
  const smoothTranslateX = useSpring(translateX, { stiffness: 60, damping: 20 });

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

  return (
    <div ref={ref} className="w-full md:max-w-[500px]" style={{ perspective: 800 }}>
      <motion.div
        style={{
          y: smoothY,
          x: smoothTranslateX,
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
        }}
        className="relative overflow-hidden rounded-[34px] border border-white/[0.06] shadow-[0_24px_70px_rgba(0,0,0,0.32)] bg-foreground/90"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none z-10" />
        <img
          src={src}
          alt={alt}
          className="w-full aspect-[1/0.78] object-cover scale-[1.02]"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

const FloatingDivider = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const centered = useTransform(scrollYProgress, [0, 1], [-1, 1]);
  const moveY = useTransform(centered, (v) => v * 8 * 4.5);
  const smoothY = useSpring(moveY, { stiffness: 80, damping: 30 });

  return (
    <div ref={ref} className="hidden md:flex items-center justify-center relative" style={{ minHeight: 280 }}>
      <motion.div style={{ y: smoothY }} className="relative flex items-center justify-center h-full">
        {/* Line */}
        <div
          className="w-[2px] rounded-full"
          style={{
            minHeight: 260,
            background: "linear-gradient(180deg, rgba(228,181,44,0), rgba(228,181,44,0.98), rgba(228,181,44,0))",
            boxShadow: "0 0 18px rgba(228,181,44,0.18)",
          }}
        />
        {/* Dot */}
        <div
          className="absolute w-3.5 h-3.5 rounded-full bg-primary"
          style={{ boxShadow: "0 0 0 10px rgba(228,181,44,0.08)" }}
        />
      </motion.div>
    </div>
  );
};

const FloatingText = ({ children, depth }: { children: React.ReactNode; depth: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const centered = useTransform(scrollYProgress, [0, 1], [-1, 1]);
  const moveY = useTransform(centered, (v) => v * 18 * depth);
  const smoothY = useSpring(moveY, { stiffness: 80, damping: 30 });

  const mouseX = useMotionValue(0);
  const translateX = useTransform(mouseX, [-1, 1], [-6 * depth, 6 * depth]);
  const smoothX = useSpring(translateX, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
    };
    const handleMouseLeave = () => mouseX.set(0);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX]);

  return (
    <motion.div ref={ref} style={{ y: smoothY, x: smoothX }}>
      {children}
    </motion.div>
  );
};

const ServicesSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden isolate"
      style={{
        background: `
          radial-gradient(circle at 12% 16%, rgba(228,181,44,0.08), transparent 18%),
          radial-gradient(circle at 90% 80%, rgba(228,181,44,0.06), transparent 18%),
          linear-gradient(180deg, hsl(var(--foreground)) 0%, hsl(0 0% 1%) 100%)
        `,
        color: "hsl(var(--background))",
        padding: "120px 0",
      }}
    >
      {/* Parallax blobs */}
      <motion.div
        className="absolute rounded-full pointer-events-none z-0"
        style={{
          width: 340, height: 340, top: 60, left: -90,
          background: "radial-gradient(circle, rgba(228,181,44,0.16), transparent 72%)",
          filter: "blur(14px)",
        }}
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none z-0"
        style={{
          width: 280, height: 280, bottom: 40, right: -70,
          background: "radial-gradient(circle, rgba(228,181,44,0.12), transparent 72%)",
          filter: "blur(14px)",
        }}
        animate={{ y: [0, 25, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none z-0"
        style={{
          width: 220, height: 220, top: 180, right: "10%",
          background: "radial-gradient(circle, rgba(255,255,255,0.08), transparent 72%)",
          filter: "blur(14px)",
        }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-[1320px] mx-auto section-padding relative z-[2]">
        {/* Header */}
        <FloatingText depth={3.5}>
          <div className="text-center max-w-[900px] mx-auto mb-[74px]">
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/70 text-xs font-extrabold uppercase tracking-[0.12em] mb-[18px]">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(228,181,44,0.1)]" />
              {t("Nos services", "خدماتنا")}
            </div>
            <h2 className="text-[clamp(44px,6vw,88px)] leading-[0.98] tracking-[-0.05em] font-extrabold mb-4">
              {t("Des solutions pour ", "حلول لكل ")}<span className="text-primary italic font-bold">{t("chaque besoin", "احتياج")}</span>
            </h2>
            <p className="max-w-[760px] mx-auto text-[clamp(17px,1.8vw,21px)] leading-[1.8] text-background/70">
              {t(
                "Réparation, remplacement et intervention mobile : une prise en charge complète, rapide et professionnelle partout au Maroc.",
                "إصلاح، استبدال وتدخل متنقل: تكفل شامل وسريع واحترافي في جميع أنحاء المغرب."
              )}
            </p>
          </div>
        </FloatingText>

        {/* Services grid */}
        <div className="grid gap-[86px]">
          {services.map((service) => (
            <article
              key={service.id}
              className={`grid grid-cols-1 md:grid-cols-[1fr_90px_1fr] gap-8 md:gap-[34px] items-center min-h-[360px] ${
                service.reverse ? "" : ""
              }`}
            >
              {/* Image */}
              <div className={service.reverse ? "md:order-3 md:justify-self-end" : ""}>
                <FloatingImage
                  src={service.image}
                  alt={t(service.titleFr, service.titleAr)}
                  depth={service.id === "reparation" ? 1.35 : service.id === "remplacement" ? 1.55 : 1.75}
                  dir={service.reverse ? 1 : -1}
                />
              </div>

              {/* Divider */}
              <div className={service.reverse ? "md:order-2" : ""}>
                <FloatingDivider />
              </div>

              {/* Content */}
              <div className={service.reverse ? "md:order-1" : ""}>
                <FloatingText depth={service.id === "reparation" ? 5.5 : service.id === "remplacement" ? 6 : 6.5}>
                  <div className="max-w-[560px] mx-auto text-center">
                    <img
                      src={service.icon}
                      alt=""
                      className="w-[54px] h-[54px] object-contain mx-auto mb-[18px] drop-shadow-[0_6px_12px_rgba(228,181,44,0.12)]"
                    />
                    <h3 className="text-[clamp(34px,4vw,60px)] leading-[1.02] tracking-[-0.05em] font-extrabold mb-[22px]">
                      {t(service.titleFr, service.titleAr)}
                      <span className="text-primary italic font-bold">{t(service.titleAccentFr, service.titleAccentAr)}</span>
                    </h3>

                    {service.descFr && (
                      <p className="text-[clamp(18px,1.5vw,22px)] leading-[1.9] text-background/70 max-w-[520px] mx-auto">
                        {t(service.descFr, service.descAr!)}
                      </p>
                    )}

                    {service.listFr && (
                      <ul className="grid gap-3 max-w-[420px] mx-auto mt-2">
                        {(t("fr", "ar") === "fr" ? service.listFr : service.listAr!).map((item, i) => (
                          <li
                            key={i}
                            className="text-background/70 text-[clamp(17px,1.4vw,20px)] leading-[1.7] relative ps-[26px] text-start"
                          >
                            <span
                              className="absolute start-0 top-[0.72em] -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary"
                              style={{ boxShadow: "0 0 0 6px rgba(228,181,44,0.08)" }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </FloatingText>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
