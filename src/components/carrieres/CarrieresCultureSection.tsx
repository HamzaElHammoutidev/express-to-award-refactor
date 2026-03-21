import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const points = [
  {
    title: { fr: "Évolution", ar: "التطور" },
    desc: { fr: "Des opportunités pour grandir avec une entreprise en expansion continue sur le marché marocain.", ar: "فرص للنمو داخل شركة في توسع مستمر على مستوى السوق المغربي." },
  },
  {
    title: { fr: "Impact concret", ar: "أثر ملموس" },
    desc: { fr: "Une contribution directe à l'expérience client, à la qualité de service et à la performance opérationnelle.", ar: "مساهمة مباشرة في تجربة العميل، جودة الخدمة، والأداء التشغيلي للشبكة." },
  },
  {
    title: { fr: "Esprit collectif", ar: "روح جماعية" },
    desc: { fr: "Une culture fondée sur la confiance, l'implication et la volonté commune d'atteindre l'excellence.", ar: "ثقافة قائمة على الثقة، الانخراط، والرغبة المشتركة في بلوغ أعلى مستويات الجودة." },
  },
];

const CarrieresCultureSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="pb-20 md:pb-[92px]">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <motion.div
            className="rounded-[34px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.12)] min-h-[420px] md:min-h-[520px] bg-foreground/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src="https://parebriseexpress.ma/images/assets/bpe-rca.jpg" alt={t("Culture d'équipe", "ثقافة الفريق")} className="w-full h-full object-cover" />
          </motion.div>

          <motion.article
            className="bg-card/70 border border-border rounded-[34px] shadow-[0_16px_40px_rgba(0,0,0,0.08)] p-8 md:p-[34px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-[clamp(30px,3vw,48px)] leading-[1.04] mb-4">
              {t("Construire une carrière dans un environnement ", "ابنِ مسارك المهني داخل بيئة ")}
              <span className="text-primary">{t("stimulant", "محفزة")}</span>
            </h3>
            <p className="text-muted-foreground text-[17px] leading-[1.9] mb-3.5">
              {t(
                "Pare-Brise Express évolue dans un secteur exigeant où la qualité, la réactivité et le sens du service font la différence. Nous recherchons des profils capables de progresser dans un environnement structuré, dynamique et orienté terrain.",
                "تنشط باري بريز إكسبريس في قطاع يتطلب الجودة، السرعة، وحس الخدمة. لذلك نبحث عن أشخاص قادرين على التطور داخل بيئة منظمة، ديناميكية، وموجهة نحو الميدان والنتائج."
              )}
            </p>
            <p className="text-muted-foreground text-[17px] leading-[1.9]">
              {t(
                "Que vous soyez débutant, expérimenté ou en recherche de stage, nous accordons une grande importance à l'état d'esprit, à la motivation et à la capacité à contribuer positivement au développement de la marque.",
                "سواء كنت في بداية المسار، صاحب تجربة، أو تبحث عن تدريب، فإننا نولي أهمية كبيرة للعقلية الإيجابية، الدافع، والقدرة على الإضافة الحقيقية داخل المؤسسة."
              )}
            </p>
            <div className="grid gap-3.5 mt-6">
              {points.map((p, i) => (
                <div key={i} className="p-4 rounded-[22px] bg-card/70 border border-border">
                  <strong className="block text-lg mb-1.5">{lang === "ar" ? p.title.ar : p.title.fr}</strong>
                  <span className="text-muted-foreground text-[15px] leading-[1.7]">{lang === "ar" ? p.desc.ar : p.desc.fr}</span>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default CarrieresCultureSection;
