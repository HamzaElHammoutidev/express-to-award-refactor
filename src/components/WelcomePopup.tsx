import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    type: "video" as const,
    src: "https://parebriseexpress.ma/videos/hero-v2.mp4",
    poster: "https://parebriseexpress.ma/images/assets/bpe-rca.jpg",
  },
  {
    type: "image" as const,
    src: "https://parebriseexpress.ma/images/assets/bpe-rca.jpg",
    title: "Pare-Brise Express devient partenaire du Raja Club Athletic !",
    link: "https://www.instagram.com/p/DPjfAvUDOYe/?hl=fr",
  },
  {
    type: "image" as const,
    src: "https://parebriseexpress.ma/images/assets/bpe-mas.jpg",
    title: "Pare-Brise Express devient partenaire du Club MAS !",
    link: "https://www.instagram.com/p/DU9D6i_DDVx/?img_index=1",
  },
];

const WelcomePopup = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  if (!open) return null;

  const slide = slides[current];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-3xl bg-card rounded-3xl overflow-hidden border border-border/40 shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
            initial={{ scale: 0.9, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 40, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm border border-border/40 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-background/80 transition-all duration-300"
              aria-label="Fermer"
            >
              <X size={18} />
            </button>

            {/* Slide Content */}
            <div className="relative aspect-video">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  className="absolute inset-0"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {slide.type === "video" ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                      poster={slide.poster}
                    >
                      <source src={slide.src} type="video/mp4" />
                    </video>
                  ) : (
                    <a
                      href={slide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <img
                        src={slide.src}
                        alt={slide.title || ""}
                        className="w-full h-full object-cover"
                      />
                    </a>
                  )}

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                  {/* Title */}
                  {slide.type !== "video" && slide.title && (
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <h3 className="text-lg md:text-xl font-serif text-foreground leading-tight">
                        {slide.title}
                      </h3>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Nav arrows */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-background/50 backdrop-blur-sm border border-border/30 flex items-center justify-center text-foreground/60 hover:text-foreground transition-all duration-300"
                aria-label="Précédent"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-background/50 backdrop-blur-sm border border-border/30 flex items-center justify-center text-foreground/60 hover:text-foreground transition-all duration-300"
                aria-label="Suivant"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 py-4">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-400 ${
                    i === current ? "bg-primary w-7" : "bg-border w-1.5"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;
