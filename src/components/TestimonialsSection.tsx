import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  { name: "Farid Aos", city: "Marrakech", text: "Bonne réception, service bon et express, merci et bonne continuation.", textAr: "استقبال جيد، خدمة ممتازة وسريعة، شكراً واستمروا." },
  { name: "Omar Elyemlahi", city: "Larache", text: "Merci à l'équipe du Centre Larache. Pour le service et les conseils.", textAr: "شكراً لفريق مركز العرائش على الخدمة والنصائح." },
  { name: "Emma", city: "Agadir", text: "Équipe très efficace et le sourire en plus. Je recommande vivement Pare-Brise Express pour leur professionnalisme.", textAr: "فريق فعال جداً مع ابتسامة. أنصح بشدة بار بريز إكسبرس لاحترافيتهم." },
  { name: "HAMZA ER-RAJI", city: "Rabat", text: "Service très rapide et amical ! Le personnel était à l'écoute et très professionnel.", textAr: "خدمة سريعة جداً وودية! الموظفون كانوا منتبهين ومحترفين جداً." },
  { name: "Mehdi Idrissi", city: "Casablanca", text: "Service rapide et comportement aimable ! Très satisfait du résultat.", textAr: "خدمة سريعة وسلوك لطيف! راضٍ جداً عن النتيجة." },
  { name: "Amine Wahbi", city: "Casablanca", text: "Expérience parfaite avec Pare-Brise Express, rapide et pro. Je ne changerais pour rien au monde.", textAr: "تجربة مثالية مع بار بريز إكسبرس، سريعة واحترافية." },
  { name: "Mohammed Ghamri", city: "Fes", text: "Service rapide et de qualité, je le recommande à tous mes proches.", textAr: "خدمة سريعة وذات جودة، أنصح بها جميع أقاربي." },
  { name: "Hacheme B", city: "Casablanca", text: "Bravo à Hamza! Son accueil, son professionnalisme et son engagement à vous satisfaire. Excellent !", textAr: "برافو لحمزة! استقباله واحترافيته والتزامه بإرضائكم. ممتاز!" },
];

const colors = [
  "bg-foreground",
  "bg-primary",
  "bg-foreground/90",
  "bg-gold-dark",
];

const rotations = [-3, 2, -1, 3, -2, 1, -3, 2];

const TestimonialsSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const { t } = useLanguage();

  const allCards = [...testimonials, ...testimonials];

  return (
    <section className="py-14 md:py-20 overflow-hidden bg-background">
      <div className="section-padding mb-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.05]">
              {t("Témoignages de nos", "شهادات")} {" "}
              <span className="italic text-gradient-gold">{t("clients", "عملائنا")}</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex overflow-hidden py-6">
          <motion.div
            className="flex gap-5 flex-shrink-0"
            animate={{ x: [0, -(300 + 20) * testimonials.length] }}
            transition={{
              duration: isPaused ? 0 : 45,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {allCards.map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className={`flex-shrink-0 w-[270px] md:w-[300px] p-6 md:p-7 rounded-2xl text-card shadow-md ${colors[i % colors.length]}`}
                style={{ transform: `rotate(${rotations[i % rotations.length]}deg)` }}
              >
                {/* Quote */}
                <div className="text-4xl font-serif leading-none text-card/20 mb-2">
                  &#x201C;
                </div>
                <p className="text-[13px] md:text-sm leading-[1.7] font-light mb-5 text-card/90">
                  {t(item.text, item.textAr)}
                </p>
                <div className="w-8 h-px bg-card/20 mb-3" />
                <p className="text-sm font-medium text-card">{item.name}</p>
                <p className="text-xs text-card/50">{item.city}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
