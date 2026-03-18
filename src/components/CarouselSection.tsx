import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const slides = [
  {
    src: "https://parebriseexpress.ma/images/assets/bpe-rca.jpg",
    titleFr: "Partenaire officiel du Raja Club Athletic",
    titleAr: "شريك رسمي لنادي الرجاء الرياضي",
    descFr: "Pare-Brise Express s'associe au RCA pour promouvoir la sécurité routière auprès des supporters à travers tout le Maroc.",
    descAr: "بار بريز إكسبرس تتشارك مع الرجاء لتعزيز السلامة المرورية لدى المشجعين في جميع أنحاء المغرب.",
    link: "https://www.instagram.com/p/DPjfAvUDOYe/?hl=fr",
  },
  {
    src: "https://parebriseexpress.ma/images/assets/bpe-mas.jpg",
    titleFr: "Partenaire officiel du Moghreb Athletic de Tetouan",
    titleAr: "شريك رسمي للمغرب الرياضي التطواني",
    descFr: "Un engagement sportif fort qui reflète nos valeurs d'excellence, de performance et de proximité avec nos communautés.",
    descAr: "التزام رياضي قوي يعكس قيمنا في التميز والأداء والقرب من مجتمعاتنا.",
    link: "https://www.instagram.com/p/DU9D6i_DDVx/?img_index=1",
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

      {/* Simple image carousel */}
      <div className="relative max-w-5xl mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden aspect-[16/8]">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={slide.src}
              alt={t(slide.titleFr, slide.titleAr)}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
        </div>

        {/* Nav arrows */}
        <button
          onClick={prev}
          className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-card/60 backdrop-blur-sm border border-border/40 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-card transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-card/60 backdrop-blur-sm border border-border/40 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-card transition-all"
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
