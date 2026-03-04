import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    type: "video" as const,
    src: "https://parebriseexpress.ma//storage/theme-videos/March2025/Y8X7He7aKX51lU78FPHq.mp4",
    poster: "https://parebriseexpress.ma/images/assets/bpe-rca.jpg",
    title: "L'excellence au service de votre sécurité",
    desc: "Découvrez notre savoir-faire unique à travers nos centres techniques modernes et notre équipe d'experts passionnés.",
  },
  {
    type: "image" as const,
    src: "https://parebriseexpress.ma/images/assets/bpe-rca.jpg",
    title: "Partenaire officiel du Raja Club Athletic",
    desc: "Pare-Brise Express s'associe au RCA pour promouvoir la sécurité routière auprès des supporters à travers tout le Maroc.",
    link: "https://www.instagram.com/p/DPjfAvUDOYe/?hl=fr",
  },
  {
    type: "image" as const,
    src: "https://parebriseexpress.ma/images/assets/bpe-mas.jpg",
    title: "Partenaire officiel du Moghreb Athletic de Tetouan",
    desc: "Un engagement sportif fort qui reflète nos valeurs d'excellence, de performance et de proximité avec nos communautés.",
    link: "https://www.instagram.com/p/DU9D6i_DDVx/?img_index=1",
  },
];

const CarouselSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const getSlideStyle = (index: number) => {
    const diff = index - current;
    const normalizedDiff = ((diff + slides.length) % slides.length);
    const adjustedDiff = normalizedDiff > Math.floor(slides.length / 2) 
      ? normalizedDiff - slides.length 
      : normalizedDiff;

    if (adjustedDiff === 0) {
      return {
        transform: "perspective(1200px) rotateY(0deg) translateX(0%) scale(1)",
        zIndex: 30,
        opacity: 1,
        filter: "brightness(1)",
      };
    } else if (adjustedDiff === 1 || adjustedDiff === -(slides.length - 1)) {
      return {
        transform: "perspective(1200px) rotateY(-25deg) translateX(75%) scale(0.82)",
        zIndex: 20,
        opacity: 0.7,
        filter: "brightness(0.5)",
      };
    } else if (adjustedDiff === -1 || adjustedDiff === (slides.length - 1)) {
      return {
        transform: "perspective(1200px) rotateY(25deg) translateX(-75%) scale(0.82)",
        zIndex: 20,
        opacity: 0.7,
        filter: "brightness(0.5)",
      };
    }
    return {
      transform: "perspective(1200px) rotateY(0deg) translateX(0) scale(0.6)",
      zIndex: 10,
      opacity: 0,
      filter: "brightness(0.3)",
    };
  };

  const slide = slides[current];

  return (
    <section className="py-20 md:py-32 overflow-hidden bg-surface">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Actualités
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.05]">
              À la <span className="italic text-gradient-gold">une</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* 3D Carousel */}
      <div className="relative h-[350px] md:h-[500px] lg:h-[560px] flex items-center justify-center mb-10">
        {slides.map((s, i) => (
          <div
            key={i}
            className="absolute w-[70%] md:w-[55%] lg:w-[48%] aspect-video rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={getSlideStyle(i)}
            onClick={() => {
              if (i !== current) {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }
            }}
          >
            {s.type === "video" ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                poster={s.poster}
              >
                <source src={s.src} type="video/mp4" />
              </video>
            ) : (
              <img src={s.src} alt={s.title} className="w-full h-full object-cover" />
            )}
          </div>
        ))}

        {/* Nav arrows */}
        <button
          onClick={prev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-card/60 backdrop-blur-sm border border-border/40 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-card transition-all duration-300"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-card/60 backdrop-blur-sm border border-border/40 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-card transition-all duration-300"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Text content for active slide */}
      <div className="section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl md:text-2xl font-serif mb-3 text-foreground">
                {slide.title}
              </h3>
              <p className="text-sm md:text-base font-sans text-muted-foreground font-light leading-relaxed">
                {slide.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
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
