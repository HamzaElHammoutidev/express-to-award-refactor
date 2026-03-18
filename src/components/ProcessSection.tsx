import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const ProcessSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: "1",
      icon: "https://parebriseexpress.ma/images/shape/comp.svg",
      title: t("Déclarez votre sinistre", "صرّحوا بالحادث"),
      desc: t(
        "Fissure, bris de glace, nous vous aidons à remplir votre déclaration pour la soumettre à votre assureur.",
        "شق أو كسر في الزجاج، نساعدكم في ملء التصريح لتقديمه لشركة التأمين."
      ),
    },
    {
      number: "2",
      icon: "https://parebriseexpress.ma/images/shape/check.svg",
      title: t("Prenez rendez-vous", "حددوا موعداً"),
      desc: t(
        "Choisissez le centre technique et le créneau qui vous convient le mieux.",
        "اختاروا المركز التقني والوقت المناسب لكم."
      ),
    },
    {
      number: "3",
      icon: "https://ubermensch-staging.com//storage/acceuil-icons/Mediamodifier-Design-Template.png",
      title: t("Confiez-nous votre voiture", "سلّمونا سيارتكم"),
      desc: t(
        "Nos experts confirmés prendront grand soin de votre véhicule.",
        "خبراؤنا المعتمدون سيعتنون بسيارتكم."
      ),
    },
  ];

  return (
    <section id="declaration" className="py-16 md:py-24 section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif">
            {t("Comment", "كيف")} <span className="italic text-gradient-gold">{t("ça marche", "يعمل ذلك")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8 text-center">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center"
            >
              <div className="mb-6 h-36 flex items-end justify-center">
                <img src={step.icon} alt={step.title} className="h-28 md:h-32 object-contain" />
              </div>
              <div className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center mb-4">
                <span className="text-sm font-sans font-medium text-foreground">{step.number}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-serif mb-3 text-foreground">{step.title}</h3>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed font-light max-w-xs mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 flex flex-col items-center"
        >
          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-8" />
          <Link
            to="/declaration"
            className="px-10 py-4 rounded-md bg-primary text-primary-foreground font-sans font-semibold text-sm uppercase tracking-[0.15em] hover:bg-primary/90 transition-colors duration-300"
          >
            {t("Faire une déclaration", "قدّم تصريحاً")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
