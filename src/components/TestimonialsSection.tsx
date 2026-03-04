import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  { name: "Farid Aos", city: "Marrakech", text: "Bonne réception, service bon et express, merci et bonne continuation.", color: "bg-[hsl(210,55%,45%)]" },
  { name: "Omar Elyemlahi", city: "Larache", text: "Merci à l'équipe du Centre Larache. Pour le service et les conseils.", color: "bg-[hsl(170,30%,35%)]" },
  { name: "Emma", city: "Agadir", text: "Équipe très efficace et le sourire en plus. Je recommande vivement Pare-Brise Express pour leur professionnalisme.", color: "bg-[hsl(15,85%,55%)]" },
  { name: "HAMZA ER-RAJI", city: "Rabat", text: "Service très rapide et amical ! Le personnel était à l'écoute et très professionnel.", color: "bg-[hsl(210,55%,45%)]" },
  { name: "Mehdi Idrissi", city: "Casablanca", text: "Service rapide et comportement aimable ! Très satisfait du résultat.", color: "bg-[hsl(170,30%,35%)]" },
  { name: "Amine Wahbi", city: "Casablanca", text: "Expérience parfaite avec Pare-Brise Express, rapide et pro. Je ne changerais pour rien au monde.", color: "bg-[hsl(15,85%,55%)]" },
  { name: "Mohammed Ghamri", city: "Fes", text: "Service rapide et de qualité, je le recommande à tous mes proches.", color: "bg-[hsl(210,55%,45%)]" },
  { name: "Hacheme B", city: "Casablanca", text: "Bravo à Hamza! Son accueil, son professionnalisme et son engagement à vous satisfaire. Excellent !", color: "bg-[hsl(170,30%,35%)]" },
];

const rotations = [-4, 2, -1, 3, -3, 1, -2, 4];

const TestimonialCard = ({ name, city, text, color, rotation }: { name: string; city: string; text: string; color: string; rotation: number }) => (
  <div
    className={`flex-shrink-0 w-[280px] md:w-[320px] p-7 md:p-8 rounded-3xl text-white/95 ${color} shadow-lg`}
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    {/* Quote mark */}
    <div className="text-5xl font-serif leading-none text-white/30 mb-3">
      &#x201C;&#x201C;
    </div>

    {/* Text */}
    <p className="text-sm md:text-[15px] font-sans leading-[1.7] font-light mb-6">
      {text}
    </p>

    {/* Divider */}
    <div className="w-10 h-px bg-white/30 mb-4" />

    {/* Author */}
    <p className="text-sm font-sans font-medium">{name}</p>
    <p className="text-xs font-sans text-white/60">{city}</p>
  </div>
);

const TestimonialsSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate for seamless loop
  const allCards = [...testimonials, ...testimonials];

  return (
    <section className="py-24 md:py-36 overflow-hidden bg-background">
      <div className="section-padding mb-14">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.05]">
              Quelques mots de nos{" "}
              <span className="italic text-gradient-gold">clients</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Marquee of tilted cards */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex overflow-hidden py-8">
          <motion.div
            className="flex gap-6 flex-shrink-0"
            animate={{ x: [0, -(320 + 24) * testimonials.length] }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
              ...(isPaused ? { duration: 0 } : {}),
            }}
            style={isPaused ? { animationPlayState: "paused" } : {}}
          >
            {allCards.map((t, i) => (
              <TestimonialCard
                key={`${t.name}-${i}`}
                {...t}
                rotation={rotations[i % rotations.length]}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
