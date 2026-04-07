import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const events = [
  {
    date: { fr: "11 et 13 juillet 2024", ar: "13 و11 يوليوز 2024" },
    title: {
      fr: "Transpro – Forum du transport touristique et du personnel",
      ar: "ترانسبرو – منتدى النقل السياحي ونقل المستخدمين",
    },
    titleShort: {
      fr: "Transpro – Forum transport",
      ar: "ترانسبرو – منتدى النقل",
    },
    desc: {
      fr: "Un rendez-vous sectoriel pour renforcer la visibilité de la marque auprès des acteurs du transport et de la mobilité professionnelle.",
      ar: "موعد مهني مهم يعزز حضور العلامة لدى الفاعلين في قطاع النقل والحركية المهنية.",
    },
    descShort: {
      fr: "Visibilité auprès des acteurs du transport.",
      ar: "تعزيز الحضور لدى فاعلي النقل.",
    },
    image: "https://parebriseexpress.ma/images/events/Transpro.jpg",
  },
  {
    date: { fr: "1er au 7 juillet 2024", ar: "7 إلى 1 يوليوز 2024" },
    title: {
      fr: "Avito Expo – Présence marque et démonstrations",
      ar: "أفيتو إكسبو – حضور العلامة وعروض ميدانية",
    },
    titleShort: {
      fr: "Avito Expo – Salon auto",
      ar: "أفيتو إكسبو – معرض السيارات",
    },
    desc: {
      fr: "Une présence événementielle pour mettre en avant l'expertise vitrage, l'accompagnement client et la proximité opérationnelle.",
      ar: "مشاركة تهدف إلى إبراز خبرة الشركة في الزجاج، جودة المواكبة، والقرب من العملاء.",
    },
    descShort: {
      fr: "Expertise vitrage et proximité client.",
      ar: "إبراز خبرة الزجاج والقرب من العملاء.",
    },
    image: "https://parebriseexpress.ma/images/events/AvitoEvent.jpg",
  },
  {
    date: { fr: "17 et 18 avril 2024", ar: "17 و18 أبريل 2024" },
    title: {
      fr: "La 10ème édition du rendez-vous de Casablanca de l'assurance",
      ar: "الدورة العاشرة لملتقى الدار البيضاء للتأمين",
    },
    titleShort: {
      fr: "RDV Casablanca Assurance",
      ar: "ملتقى التأمين بالبيضاء",
    },
    desc: {
      fr: "Des temps forts pensés pour développer les synergies, valoriser l'image de marque et créer une relation durable avec les partenaires.",
      ar: "محطات تواصلية لتعزيز صورة العلامة، خلق علاقات أقوى مع الشركاء، وتقوية الحضور في السوق.",
    },
    descShort: {
      fr: "Synergies et relation durable avec les partenaires.",
      ar: "تعزيز صورة العلامة وعلاقات الشركاء.",
    },
    image: "https://parebriseexpress.ma/images/events/HyattEvent.jpg",
  },
];

const AboutEventsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const { t, lang } = useLanguage();

  const next = useCallback(() => setCurrent((p) => (p + 1) % events.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + events.length) % events.length), []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="pb-16 md:pb-24">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex items-end justify-between gap-4 mb-6 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-full bg-card/60 border border-border text-muted-foreground text-[10px] md:text-xs font-extrabold uppercase tracking-[0.1em] mb-2 md:mb-3">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary shadow-[0_0_0_4px_rgba(228,181,44,0.10)]" />
              {t("Nos événements", "فعالياتنا")}
            </div>
            <h3 className="text-xl md:text-[clamp(28px,3vw,42px)] leading-[1.15] tracking-[-0.03em]">
              {t("Retour sur nos ", "محطات من ")}
              <span className="text-primary italic font-bold">{t("temps forts", "أبرز مشاركاتنا")}</span>
            </h3>
          </motion.div>
          <div className="hidden md:inline-flex items-center gap-2.5 flex-shrink-0">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-border bg-card/80 text-foreground grid place-items-center shadow-lg hover:-translate-y-0.5 hover:border-primary/20 transition-all">
              <ChevronLeft size={18} />
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full border border-border bg-card/80 text-foreground grid place-items-center shadow-lg hover:-translate-y-0.5 hover:border-primary/20 transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Mobile: simple slide */}
        <div className="block md:hidden">
          <div className="relative rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative aspect-[4/3]">
                  <img
                    src={events[current].image}
                    alt={lang === "ar" ? events[current].titleShort.ar : events[current].titleShort.fr}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-wider mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {lang === "ar" ? events[current].date.ar : events[current].date.fr}
                    </div>
                    <h4 className="text-white text-base leading-snug font-bold mb-1">
                      {lang === "ar" ? events[current].titleShort.ar : events[current].titleShort.fr}
                    </h4>
                    <p className="text-white/70 text-xs leading-relaxed">
                      {lang === "ar" ? events[current].descShort.ar : events[current].descShort.fr}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop: 3D Carousel */}
        <div className="hidden md:block relative" style={{ perspective: "1200px" }}>
          <div className="flex items-center justify-center h-[460px] md:h-[520px]">
            {events.map((event, i) => {
              const offset = (i - current + events.length) % events.length;
              const isCenter = offset === 0;
              const isRight = offset === 1;
              const isLeft = offset === events.length - 1;

              let translateX = "0%", scale = 1, rotateY = "0deg", zIndex = 1, opacity = 0.5, brightness = 0.6;
              if (isCenter) { translateX = "0%"; scale = 1; rotateY = "0deg"; zIndex = 10; opacity = 1; brightness = 1; }
              else if (isRight) { translateX = "65%"; scale = 0.78; rotateY = "-12deg"; zIndex = 5; opacity = 0.7; brightness = 0.7; }
              else if (isLeft) { translateX = "-65%"; scale = 0.78; rotateY = "12deg"; zIndex = 5; opacity = 0.7; brightness = 0.7; }

              return (
                <motion.div
                  key={i}
                  className="absolute w-[55%] rounded-[28px] overflow-hidden shadow-2xl cursor-pointer"
                  animate={{ x: translateX, scale, rotateY, zIndex, opacity, filter: `brightness(${brightness})` }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  onClick={() => { if (isRight) next(); if (isLeft) prev(); }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="relative aspect-[16/10]">
                    <img src={event.image} alt={lang === "ar" ? event.title.ar : event.title.fr} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <AnimatePresence>
                      {isCenter && (
                        <motion.div
                          className="absolute inset-x-8 bottom-8"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        >
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-extrabold uppercase tracking-[0.08em] mb-3">
                            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_5px_rgba(228,181,44,0.15)]" />
                            {lang === "ar" ? event.date.ar : event.date.fr}
                          </div>
                          <h4 className="text-white text-2xl leading-[1.18] tracking-[-0.03em] mb-2 font-bold">
                            {lang === "ar" ? event.title.ar : event.title.fr}
                          </h4>
                          <p className="text-white/75 text-[15px] leading-[1.7] max-w-[600px]">
                            {lang === "ar" ? event.desc.ar : event.desc.fr}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4 md:mt-8">
          {events.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${i === current ? "w-7 md:w-8 bg-primary" : "w-2 md:w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutEventsCarousel;
