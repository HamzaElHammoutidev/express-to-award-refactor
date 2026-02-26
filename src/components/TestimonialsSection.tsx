import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-24 md:py-40 section-padding bg-dark-surface">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-center">
            <span className="italic text-gradient-gold">Témoignages</span>
          </h2>
        </motion.div>

        <div className="relative min-h-[280px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="text-center w-full"
            >
              <Quote className="mx-auto mb-6 text-primary opacity-40" size={40} />
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed mb-8 italic text-foreground/90">
                {testimonials[current].text}
              </blockquote>
              <div>
                <p className="text-base font-sans font-semibold text-foreground">
                  {testimonials[current].name}
                </p>
                <p className="text-sm font-sans text-muted-foreground mt-1">
                  {testimonials[current].city}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-primary w-6" : "bg-muted"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
