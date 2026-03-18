import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRef } from "react";

const services = [
  {
    id: "reparation",
    image: "https://parebriseexpress.ma/images/tech_serv.jpg",
    titleFr: "Réparation d'impact(s)",
    titleAr: "إصلاح التأثيرات",
    descFr: "Chez Pare-Brise Express, nous savons que chaque impact doit être traité rapidement. C'est pourquoi nous vous proposons une intervention rapide, fiable et éco-responsable.",
    descAr: "في بار بريز إكسبرس، نعلم أن كل تأثير يجب معالجته بسرعة. لذلك نقدم لكم تدخلاً سريعاً وموثوقاً وصديقاً للبيئة.",
    imagePosition: "left" as const,
  },
  {
    id: "remplacement",
    image: "https://parebriseexpress.ma/images/jouj_serv.jpg",
    titleFr: "Remplacement de votre pare-brise",
    titleAr: "استبدال الزجاج الأمامي",
    descFr: "Pare-brise endommagé ? Détendez-vous, nous nous chargeons de tout. De la prise de contact à la réception de votre véhicule avec le recalibrage de votre caméra ADAS.",
    descAr: "زجاج أمامي متضرر؟ استرخوا، نحن نتكفل بكل شيء. من الاتصال الأول إلى استلام سيارتكم مع إعادة معايرة كاميرا ADAS.",
    imagePosition: "right" as const,
  },
  {
    id: "mobile",
    image: "https://parebriseexpress.ma/images/van_serv.jpg",
    titleFr: "Atelier mobile",
    titleAr: "ورشة متنقلة",
    descFr: "Notre atelier mobile se déplace chez vous, sur votre lieu de travail ou ailleurs. Service 100% gratuit sur tout type de vitrage, avec le même niveau de qualité qu'en centre technique.",
    descAr: "ورشتنا المتنقلة تأتي إليكم، في مكان عملكم أو في أي مكان آخر. خدمة مجانية 100% على جميع أنواع الزجاج.",
    imagePosition: "left" as const,
  },
];

const FloatingImage = ({ src, alt, position }: { src: string; alt: string; position: "left" | "right" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.98]);
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    position === "left" ? [-2, 1] : [2, -1]
  );

  return (
    <div ref={ref} className="w-full md:w-[48%] flex-shrink-0">
      <motion.div
        style={{ y, scale, rotate }}
        className="rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] will-change-transform"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-16 md:py-24 bg-foreground text-background">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-background/50 mb-4">
            {t("Ce que nous faisons", "ما نقوم به")}
          </p>
          <h2 className="text-4xl md:text-6xl font-serif leading-[1.05]">
            {t("Nos", "خدماتنا")} <span className="italic text-primary">{t("services", "المتميزة")}</span>
          </h2>
        </motion.div>

        {/* Services list */}
        <div className="space-y-0">
          {services.map((service, i) => (
            <div key={service.id}>
              <div
                className={`flex flex-col ${
                  service.imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 md:gap-16 py-12 md:py-20`}
              >
                {/* Floating Image */}
                <FloatingImage
                  src={service.image}
                  alt={t(service.titleFr, service.titleAr)}
                  position={service.imagePosition}
                />

                {/* Text */}
                <motion.div
                  className="w-full md:w-[52%] text-center md:text-start"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <span className="text-[80px] md:text-[120px] font-serif font-bold leading-none text-background/[0.04] block -mb-6 md:-mb-10">
                    0{i + 1}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-serif mb-4">
                    {t(service.titleFr, service.titleAr)}
                  </h3>
                  <p className="text-sm md:text-base text-background/60 leading-[1.8] font-light max-w-lg">
                    {t(service.descFr, service.descAr)}
                  </p>
                </motion.div>
              </div>

              {/* Yellow vertical separator */}
              {i < services.length - 1 && (
                <div className="flex justify-center">
                  <div className="w-[2px] h-12 bg-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
