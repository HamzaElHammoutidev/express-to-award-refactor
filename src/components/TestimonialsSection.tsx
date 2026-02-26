import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Farid Aos", city: "Marrakech", text: "Bonne réception, service bon et express, merci et bonne continuation." },
  { name: "Omar Elyemlahi", city: "Larache", text: "Merci à l'équipe du Centre Larache. Pour le service et les conseils." },
  { name: "Emma", city: "Agadir", text: "Équipe très efficace et le sourire en plus." },
  { name: "HAMZA ER-RAJI", city: "Rabat", text: "Service très rapide et amical !" },
  { name: "Mehdi Idrissi", city: "Casablanca", text: "Service rapide et comportement aimable !" },
  { name: "Amine Wahbi", city: "Casablanca", text: "Expérience parfaite avec Pare-Brise Express rapide et pro." },
  { name: "Mohammed Ghamri", city: "Fes", text: "Service rapide et de qualité, je le recommande." },
  { name: "Hacheme B", city: "Casablanca", text: "Bravo à Hamza! Son accueil, son professionnalisme et son engagement à vous satisfaire. Excellent !" },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-28 md:py-44 section-padding bg-surface">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4 text-center">
            Ils nous font confiance
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-center leading-[1.05]">
            <span className="italic text-gradient-gold">Témoignages</span>
          </h2>
        </motion.div>

        <div className="relative min-h-[240px] md:min-h-[280px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center w-full"
            >
              <div className="mb-8">
                <svg width="40" height="30" viewBox="0 0 40 30" fill="none" className="mx-auto opacity-20">
                  <path d="M0 30V18C0 12.4 1.2 8 3.6 4.8C6 1.6 9.6 0 14.4 0V6C12 6 10.2 7 9 9C7.8 11 7.2 13.4 7.2 16.2H14V30H0ZM24 30V18C24 12.4 25.2 8 27.6 4.8C30 1.6 33.6 0 38.4 0V6C36 6 34.2 7 33 9C31.8 11 31.2 13.4 31.2 16.2H38V30H24Z" fill="hsl(var(--primary))" />
                </svg>
              </div>
              <blockquote className="text-xl md:text-3xl lg:text-4xl font-serif leading-[1.3] mb-10 text-foreground/90 max-w-3xl mx-auto font-light italic">
                «&nbsp;{testimonials[current].text}&nbsp;»
              </blockquote>
              <div>
                <p className="text-sm font-sans font-medium text-foreground tracking-wide">
                  {testimonials[current].name}
                </p>
                <p className="text-xs font-sans text-muted-foreground mt-1 tracking-wider uppercase">
                  {testimonials[current].city}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-14">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-border/60 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
            aria-label="Précédent"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === current ? "bg-primary w-8" : "bg-border w-1.5"
                }`}
                aria-label={`Témoignage ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full border border-border/60 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
            aria-label="Suivant"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
