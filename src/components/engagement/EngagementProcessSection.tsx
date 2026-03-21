import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const steps = [
  {
    num: "01",
    title: { fr: "Diagnostic rapide", ar: "تشخيص سريع" },
    desc: {
      fr: "Analyse immédiate de l'impact, de la fissure ou du vitrage endommagé afin d'orienter la bonne solution.",
      ar: "تحليل فوري للصدمات أو التشققات أو الزجاج المتضرر لتحديد أفضل حل تقني ممكن.",
    },
  },
  {
    num: "02",
    title: { fr: "Intervention maîtrisée", ar: "تدخل مضبوط" },
    desc: {
      fr: "Réparation ou remplacement selon des standards techniques précis et adaptés au type de véhicule.",
      ar: "إصلاح أو استبدال وفق معايير تقنية دقيقة ومتكيفة مع نوع المركبة ومتطلبات السلامة.",
    },
  },
  {
    num: "03",
    title: { fr: "Suivi & garantie", ar: "تتبع وضمان" },
    desc: {
      fr: "Une garantie à vie et un accompagnement de qualité pour offrir une expérience rassurante sur le long terme.",
      ar: "ضمان مدى الحياة ومواكبة مستمرة لتقديم تجربة مطمئنة وموثوقة على المدى الطويل.",
    },
  },
];

const EngagementProcessSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="pb-20 md:pb-[92px]">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-6 items-stretch">
          <motion.article
            className="relative overflow-hidden bg-gradient-to-br from-foreground to-[hsl(var(--foreground)/0.9)] text-background rounded-[34px] p-9 shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Glow orb */}
            <div className="absolute w-[320px] h-[320px] -right-[120px] -top-[120px] rounded-full bg-[radial-gradient(circle,rgba(228,181,44,0.20),transparent_70%)]" />

            <h3 className="relative z-[2] text-[clamp(30px,3vw,48px)] leading-[1.04] mb-4">
              {t("Des procédures ", "إجراءات ")}
              <span className="text-primary">{t("claires, simples et rapides", "واضحة، بسيطة وسريعة")}</span>
            </h3>
            <p className="relative z-[2] text-background/70 text-[17px] leading-[1.9]">
              {t(
                "Chez Pare-Brise Express, nous optimisons chaque étape pour vous faire gagner du temps. Notre engagement ne se limite pas à la qualité technique : il se traduit aussi par une organisation fluide, une prise en charge simplifiée et une restitution maîtrisée.",
                "في باري بريز إكسبريس نعمل على تبسيط كل مرحلة لتوفير الوقت على العميل. فالتزامنا لا يقتصر على الجودة التقنية فقط، بل يشمل كذلك التنظيم الجيد، سهولة المواكبة، وسلاسة التسليم."
              )}
            </p>
            <div className="relative z-[2] grid gap-3.5 mt-6">
              {steps.map((step, i) => (
                <div key={i} className="grid grid-cols-[56px_1fr] gap-3.5 items-start p-4 rounded-[22px] bg-white/5 border border-white/[0.08]">
                  <div className="w-14 h-14 rounded-[18px] grid place-items-center bg-primary/15 text-primary font-black text-xl">
                    {step.num}
                  </div>
                  <div>
                    <strong className="block text-lg mb-1.5">{lang === "ar" ? step.title.ar : step.title.fr}</strong>
                    <span className="text-background/70 text-[15px] leading-[1.7]">{lang === "ar" ? step.desc.ar : step.desc.fr}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.aside
            className="bg-card/70 border border-border rounded-[34px] shadow-[0_16px_40px_rgba(0,0,0,0.08)] overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <img
              src="https://parebriseexpress.ma/images/assets/bpe-rca.jpg"
              alt={t("Technicien en intervention vitrage", "تقني أثناء التدخل على زجاج السيارة")}
              className="w-full h-full object-cover"
            />
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default EngagementProcessSection;
