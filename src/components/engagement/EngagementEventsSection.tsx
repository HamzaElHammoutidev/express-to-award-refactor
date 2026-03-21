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
    desc: {
      fr: "Un temps fort qui renforce le lien entre la marque, les professionnels du transport et les besoins réels du terrain.",
      ar: "محطة مهنية مهمة تعزز ارتباط العلامة بالفاعلين في النقل وبالحاجيات الواقعية للميدان.",
    },
    image: "https://parebriseexpress.ma/images/events/Transpro.jpg",
  },
  {
    date: { fr: "1er au 7 juillet 2024", ar: "7 إلى 1 يوليوز 2024" },
    title: {
      fr: "Avito Expo – Salon de la voiture d'occasion",
      ar: "أفيتو إكسبو – معرض السيارة المستعملة",
    },
    desc: {
      fr: "Une occasion de valoriser l'expertise vitrage, le service et la proximité auprès d'un large public.",
      ar: "فرصة لإبراز خبرة الشركة في الزجاج وجودة الخدمة والقرب من مختلف فئات العملاء.",
    },
    image: "https://parebriseexpress.ma/images/events/AvitoEvent.jpg",
  },
  {
    date: { fr: "17 et 18 avril 2024", ar: "18 و17 أبريل 2024" },
    title: {
      fr: "Rendez-vous de Casablanca de l'assurance",
      ar: "لقاء الدار البيضاء للتأمين",
    },
    desc: {
      fr: "Un événement qui met en lumière la confiance des partenaires et l'importance des engagements qualité de la marque.",
      ar: "موعد يعكس ثقة الشركاء ويؤكد أهمية التزام العلامة بالجودة والمطابقة والاعتمادية.",
    },
    image: "https://parebriseexpress.ma/images/events/HyattEvent.jpg",
  },
];

const EngagementEventsSection = () => {
  const [current, setCurrent] = useState(0);
  const { t, lang } = useLanguage();

  const next = useCallback(() => setCurrent((p) => (p + 1) % events.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + events.length) % events.length), []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="pb-20 md:pb-[92px]">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="relative bg-gradient-to-br from-card/70 to-card/50 border border-border rounded-[34px] p-7 md:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.08)] overflow-hidden">
          <div className="flex items-end justify-between gap-5 mb-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-card/60 border border-border text-muted-foreground text-xs font-extrabold uppercase tracking-[0.1em] mb-3">
                <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(228,181,44,0.10)]" />
                {t("Nos événements", "فعالياتنا")}
              </div>
              <h3 className="text-[clamp(28px,3vw,42px)] leading-[1.08] tracking-[-0.04em] mb-2">
                {t("Des engagements aussi visibles ", "التزامنا حاضر أيضاً ")}
                <span className="text-primary italic font-bold">{t("sur le terrain", "على أرض الواقع")}</span>
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

          {/* 3D Carousel */}
          <div className="relative" style={{ perspective: "1200px" }}>
            <div className="flex items-center justify-center h-[380px] md:h-[460px]">
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
                    className="absolute w-[85%] md:w-[55%] rounded-[28px] overflow-hidden shadow-2xl cursor-pointer"
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
                            className="absolute inset-x-5 md:inset-x-8 bottom-5 md:bottom-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                          >
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-extrabold uppercase tracking-[0.08em] mb-3">
                              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_5px_rgba(228,181,44,0.15)]" />
                              {lang === "ar" ? event.date.ar : event.date.fr}
                            </div>
                            <h4 className="text-white text-xl md:text-2xl leading-[1.18] tracking-[-0.03em] mb-2 font-bold">
                              {lang === "ar" ? event.title.ar : event.title.fr}
                            </h4>
                            <p className="text-white/75 text-sm md:text-[15px] leading-[1.7]">
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

          <div className="flex justify-center gap-2.5 mt-6">
            {events.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementEventsSection;
