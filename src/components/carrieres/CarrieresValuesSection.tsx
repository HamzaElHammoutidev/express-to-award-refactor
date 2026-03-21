import { motion } from "framer-motion";
import { Shield, Trophy, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const values = [
  {
    icon: Shield,
    title: { fr: "Engagement", ar: "الالتزام" },
    desc: {
      fr: "Nos équipes s'investissent avec sérieux, persévérance et implication dans leurs missions, avec une forte culture du résultat collectif.",
      ar: "تعمل فرقنا بروح المسؤولية والمثابرة والانخراط الكامل في تحقيق النجاح الجماعي وخدمة العملاء بأفضل شكل.",
    },
  },
  {
    icon: Trophy,
    title: { fr: "Excellence", ar: "التميّز" },
    desc: {
      fr: "La performance, l'éthique, la ténacité et l'amélioration continue font partie des fondamentaux qui structurent notre quotidien.",
      ar: "الأداء، الأخلاق، المثابرة، وروح التحدي تشكل أسساً يومية تعزز نجاح العلامة واستمرارية تطورها.",
    },
  },
  {
    icon: Lock,
    title: { fr: "Professionnalisme", ar: "الاحترافية" },
    desc: {
      fr: "Nous valorisons la rigueur, la responsabilité et le respect dans l'exercice des fonctions afin de garantir un haut niveau de qualité.",
      ar: "نثمّن الجدية والانضباط والاحترام بما يضمن مستوى عالياً من الجودة في جميع المهام والمواقف.",
    },
  },
];

const CarrieresValuesSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="pb-20 md:pb-[92px]">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="text-center max-w-[940px] mx-auto mb-11">
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-card/65 border border-border text-muted-foreground text-xs font-extrabold uppercase tracking-[0.1em] mb-4">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(228,181,44,0.10)]" />
            {t("Nos valeurs", "قيمنا")}
          </div>
          <h2 className="text-[clamp(34px,4.6vw,68px)] leading-[1.02] tracking-[-0.05em] mb-4">
            {t("Une culture d'entreprise portée par ", "ثقافة مهنية يقودها ")}
            <span className="text-primary italic font-bold">{t("l'engagement et l'exigence", "الالتزام والتميّز")}</span>
          </h2>
          <p className="text-muted-foreground text-[clamp(17px,1.7vw,21px)] leading-[1.8]">
            {t(
              "Chaque collaborateur contribue à une mission commune : offrir un service d'excellence et accompagner nos clients avec sérieux, proximité et professionnalisme.",
              "يساهم كل فرد داخل باري بريز إكسبريس في مهمة مشتركة: تقديم خدمة عالية الجودة ومرافقة العملاء بجدية وقرب واحترافية."
            )}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <motion.article
              key={i}
              className="bg-card/70 border border-border rounded-[28px] p-[30px_26px] shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 hover:border-primary/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="w-[52px] h-[52px] rounded-2xl bg-primary/10 text-primary grid place-items-center mb-4">
                <v.icon size={25} strokeWidth={1.9} />
              </div>
              <h3 className="text-2xl leading-[1.18] mb-2.5">{lang === "ar" ? v.title.ar : v.title.fr}</h3>
              <p className="text-muted-foreground text-base leading-[1.8]">{lang === "ar" ? v.desc.ar : v.desc.fr}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarrieresValuesSection;
