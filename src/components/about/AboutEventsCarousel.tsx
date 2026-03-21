import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
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
      fr: "Un rendez-vous sectoriel pour renforcer la visibilité de la marque auprès des acteurs du transport et de la mobilité professionnelle.",
      ar: "موعد مهني مهم يعزز حضور العلامة لدى الفاعلين في قطاع النقل والحركية المهنية.",
    },
    image: "https://parebriseexpress.ma/images/events/Transpro.jpg",
  },
  {
    date: { fr: "1er au 7 juillet 2024", ar: "7 إلى 1 يوليوز 2024" },
    title: {
      fr: "Avito Expo – Présence marque et démonstrations",
      ar: "أفيتو إكسبو – حضور العلامة وعروض ميدانية",
    },
    desc: {
      fr: "Une présence événementielle pour mettre en avant l'expertise vitrage, l'accompagnement client et la proximité opérationnelle.",
      ar: "مشاركة تهدف إلى إبراز خبرة الشركة في الزجاج، جودة المواكبة، والقرب من العملاء.",
    },
    image: "https://parebriseexpress.ma/images/events/AvitoEvent.jpg",
  },
  {
    date: { fr: "17 et 18 avril 2024", ar: "2024" },
    title: {
      fr: "La 10ème édition du rendez-vous de Casablanca de l'assurance",
      ar: "لقاءات مهنية وتفعيل ميداني للعلامة",
    },
    desc: {
      fr: "Des temps forts pensés pour développer les synergies, valoriser l'image de marque et créer une relation durable avec les partenaires.",
      ar: "محطات تواصلية لتعزيز صورة العلامة، خلق علاقات أقوى مع الشركاء، وتقوية الحضور في السوق.",
    },
    image: "https://parebriseexpress.ma/images/events/HyattEvent.jpg",
  },
];

const AboutEventsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { t, lang } = useLanguage();

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 400, behavior: "smooth" });
  };

  return (
    <section className="pb-20 md:pb-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="relative bg-gradient-to-br from-card/70 to-card/50 border border-border rounded-[34px] p-7 md:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.08)] overflow-hidden">
          {/* Header */}
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
                {t("Retour sur nos ", "محطات من ")}
                <span className="text-primary italic font-bold">{t("temps forts", "أبرز مشاركاتنا")}</span>
              </h3>
              <p className="text-muted-foreground text-base leading-[1.75] max-w-[760px]">
                {t(
                  "Un carousel élégant pour mettre en avant les salons, rencontres sectorielles et activations de marque de Pare-Brise Express.",
                  "كاروسيل أنيق لإبراز المعارض واللقاءات المهنية والفعاليات التي تعزز حضور باري بريز إكسبريس في السوق."
                )}
              </p>
            </motion.div>
            <div className="hidden md:inline-flex items-center gap-2.5 flex-shrink-0">
              <button
                onClick={() => scroll(-1)}
                disabled={!canScrollLeft}
                className="w-12 h-12 rounded-full border border-border bg-card/80 text-foreground grid place-items-center shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 hover:border-primary/20 disabled:opacity-30 transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll(1)}
                disabled={!canScrollRight}
                className="w-12 h-12 rounded-full border border-border bg-card/80 text-foreground grid place-items-center shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 hover:border-primary/20 disabled:opacity-30 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", scrollBehavior: "smooth" }}
          >
            <div className="grid grid-flow-col auto-cols-[minmax(300px,32%)] gap-4 md:gap-5">
              {events.map((event, i) => (
                <motion.article
                  key={i}
                  className="relative overflow-hidden min-h-[430px] rounded-[28px] bg-foreground shadow-[0_24px_60px_rgba(0,0,0,0.12)] isolate hover:-translate-y-1.5 transition-transform duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <img
                    src={event.image}
                    alt={lang === "ar" ? event.title.ar : event.title.fr}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-foreground/10 via-foreground/30 to-foreground/90 z-[1]" />
                  {/* Content */}
                  <div className="absolute inset-x-4 bottom-4 z-[2] text-background bg-foreground/50 border border-white/[0.08] backdrop-blur-sm rounded-[22px] p-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/20 text-[#f3d477] text-xs font-extrabold uppercase tracking-[0.08em] mb-3">
                      <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(228,181,44,0.10)]" />
                      {lang === "ar" ? event.date.ar : event.date.fr}
                    </div>
                    <h4 className="text-xl md:text-2xl leading-[1.18] tracking-[-0.03em] mb-2.5 font-bold">
                      {lang === "ar" ? event.title.ar : event.title.fr}
                    </h4>
                    <p className="text-background/75 text-[15px] leading-[1.7]">
                      {lang === "ar" ? event.desc.ar : event.desc.fr}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEventsCarousel;
