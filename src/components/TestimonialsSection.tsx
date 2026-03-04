import { motion } from "framer-motion";
import { Star } from "lucide-react";

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

// Duplicate for infinite marquee - 3 rows with different speeds
const row1 = testimonials.slice(0, 4);
const row2 = testimonials.slice(4, 8);
const row3 = [...testimonials.slice(2, 6)];

const TestimonialCard = ({ name, city, text }: { name: string; city: string; text: string }) => (
  <div className="flex-shrink-0 w-[320px] md:w-[380px] p-6 md:p-8 rounded-2xl border border-border/30 bg-card hover:border-primary/20 transition-all duration-500 group">
    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className="fill-primary text-primary" />
      ))}
    </div>

    {/* Text */}
    <p className="text-sm md:text-base font-sans text-foreground/90 leading-[1.8] font-light mb-6 italic">
      «&nbsp;{text}&nbsp;»
    </p>

    {/* Author */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
        <span className="text-sm font-serif text-primary font-medium">
          {name.charAt(0)}
        </span>
      </div>
      <div>
        <p className="text-sm font-sans font-medium text-foreground">{name}</p>
        <p className="text-xs font-sans text-muted-foreground">{city}</p>
      </div>
    </div>
  </div>
);

const MarqueeRow = ({ items, speed, reverse = false }: { items: typeof testimonials; speed: number; reverse?: boolean }) => {
  const allItems = [...items, ...items, ...items, ...items];
  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex gap-5 flex-shrink-0"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {allItems.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} {...t} />
        ))}
      </motion.div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-40 overflow-hidden bg-surface">
      <div className="section-padding mb-14">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Ils nous font confiance
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.05]">
              Quelques mots de nos{" "}
              <span className="italic text-gradient-gold">clients</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Marquee rows - Thrive-style */}
      <div className="space-y-5">
        <MarqueeRow items={row1} speed={45} />
        <MarqueeRow items={row2} speed={55} reverse />
        <MarqueeRow items={row3} speed={50} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
