import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const slides = [
  {
    type: "image" as const,
    src: "https://parebriseexpress.ma/images/assets/bpe-rca.jpg",
    titleFr: "Partenaire officiel du Raja Club Athletic",
    titleAr: "شريك رسمي لنادي الرجاء الرياضي",
    descFr: "Pare-Brise Express s'associe au RCA pour promouvoir la sécurité routière auprès des supporters à travers tout le Maroc.",
    descAr: "بار بريز إكسبرس تتشارك مع الرجاء لتعزيز السلامة المرورية لدى المشجعين في جميع أنحاء المغرب.",
    link: "https://www.instagram.com/p/DPjfAvUDOYe/?hl=fr",
  },
  {
    type: "image" as const,
    src: "https://parebriseexpress.ma/images/assets/bpe-mas.jpg",
    titleFr: "Partenaire officiel du Moghreb Athletic de Tetouan",
    titleAr: "شريك رسمي للمغرب الرياضي التطواني",
    descFr: "Un engagement sportif fort qui reflète nos valeurs d'excellence, de performance et de proximité avec nos communautés.",
    descAr: "التزام رياضي قوي يعكس قيمنا في التميز والأداء والقرب من مجتمعاتنا.",
    link: "https://www.instagram.com/p/DU9D6i_DDVx/?img_index=1",
  },
  {
    type: "video" as const,
    src: "https://www.instagram.com/reel/DPraKCBlH_S/embed/",
    titleFr: "Pare-Brise Express en action",
    titleAr: "بار بريز إكسبرس في العمل",
    descFr: "Découvrez notre savoir-faire et notre passion pour la qualité à travers cette vidéo exclusive.",
    descAr: "اكتشفوا خبرتنا وشغفنا بالجودة من خلال هذا الفيديو الحصري.",
    link: "https://www.instagram.com/reel/DPraKCBlH_S/",
  },
];

const CarouselSection = () => {
  const [current, setCurrent] = useState(0);
  const { t } = useLanguage();

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  // Calculate positions for 3D perspective effect
  const getSlideStyle = (index: number) => {
    const diff = index - current;
    const absDiff = Math.abs(diff);
    
    if (absDiff === 0) {
      return {
        transform: "translateX(0) scale(1) rotateY(0deg)",
        zIndex: 3,
        opacity: 1,
        filter: "brightness(1)",
      };
    }
    
    const direction = diff > 0 ? 1 : -1;
    // Handle wrap-around
    const wrappedDiff = diff > 1 ? diff - slides.length : diff < -1 ? diff + slides.length : diff;
    const wDirection = wrappedDiff > 0 ? 1 : -1;
    
    return {
      transform: `translateX(${wDirection * 72}%) scale(0.78) rotateY(${wDirection * -12}deg)`,
      zIndex: 1,
      opacity: 0.5,
      filter: "brightness(0.5)",
    };
  };

  return (
    <section className="py-14 md:py-20 overflow-hidden bg-surface">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              {t("Actualités", "الأخبار")}
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.05]">
              {t("À la", "في")} <span className="italic text-gradient-gold">{t("une", "الواجهة")}</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* 3D Perspective Carousel (Glide.js style) */}
      <div className="relative max-w-6xl mx-auto px-4" style={{ perspective: "1200px" }}>
        <div className="relative h-[320px] md:h-[420px] lg:h-[480px]">
          {slides.map((s, i) => {
            const style = getSlideStyle(i);
            return (
              <div
                key={i}
                className="absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out cursor-pointer rounded-2xl overflow-hidden"
                style={{
                  ...style,
                  transformStyle: "preserve-3d",
                  transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onClick={() => i !== current && setCurrent(i)}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  {s.type === "video" ? (
                    <div className="w-full h-full bg-foreground/95 flex items-center justify-center relative">
                      {i === current ? (
                        <iframe
                          src={s.src}
                          className="w-full h-full border-0"
                          allowFullScreen
                          allow="autoplay; encrypted-media"
                          title={t(s.titleFr, s.titleAr)}
                        />
                      ) : (
                        <div className="flex flex-col items-center gap-3 text-background/60">
                          <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-primary ml-1">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                          <span className="text-sm font-medium">{t("Vidéo", "فيديو")}</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <img
                      src={s.src}
                      alt={t(s.titleFr, s.titleAr)}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Nav arrows */}
        <button
          onClick={prev}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-card/60 backdrop-blur-sm border border-border/40 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-card transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-card/60 backdrop-blur-sm border border-border/40 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-card transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Text + CTA */}
      <div className="section-padding">
        <div className="max-w-2xl mx-auto text-center mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl md:text-2xl font-serif mb-3 text-foreground">
                {t(slide.titleFr, slide.titleAr)}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed mb-6">
                {t(slide.descFr, slide.descAr)}
              </p>
              <a
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-wider hover:bg-gold-dark transition-colors duration-300"
              >
                {t("En savoir plus", "اقرأ المزيد")}
              </a>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === current ? "bg-primary w-8" : "bg-border w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
