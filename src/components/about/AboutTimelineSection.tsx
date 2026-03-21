import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutTimelineSection = () => {
  const { t } = useLanguage();

  const milestones = [
    {
      year: "2010",
      title: t("Création de la marque", "انطلاق العلامة"),
      desc: t(
        "Pare-Brise Express se lance avec une ambition claire : structurer une offre spécialisée dans la réparation et le remplacement de vitrages automobiles au Maroc.",
        "بدأت باري بريز إكسبريس بهدف واضح: تقديم عرض متخصص في إصلاح واستبدال زجاج السيارات داخل المغرب."
      ),
    },
    {
      year: "2015",
      title: t("Montée en puissance du réseau", "توسيع الشبكة"),
      desc: t(
        "Déploiement progressif des centres techniques, amélioration des équipements et professionnalisation des méthodes d'intervention.",
        "تم توسيع المراكز التقنية، تطوير التجهيزات، وتعزيز احترافية طرق التدخل الميداني."
      ),
    },
    {
      year: "2020",
      title: t("Consolidation de l'offre mobile", "تعزيز الورش المتنقلة"),
      desc: t(
        "Renforcement du service atelier mobile pour rapprocher l'intervention du client, à domicile, sur site ou sur le lieu de travail.",
        "تطوير خدمة الورش المتنقلة لتقريب التدخل من العميل في المنزل أو مقر العمل أو أي موقع مناسب."
      ),
    },
    {
      year: t("Aujourd'hui", "اليوم"),
      title: t("Une référence nationale", "مرجع وطني"),
      desc: t(
        "Un acteur reconnu pour la qualité de service, la rapidité d'exécution, la conformité des interventions et la satisfaction client.",
        "فاعل معروف بجودة الخدمة، سرعة الإنجاز، مطابقة التدخلات، ورضا العملاء."
      ),
    },
  ];

  return (
    <section className="pb-20 md:pb-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          className="text-center max-w-[940px] mx-auto mb-11"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-card/60 border border-border text-muted-foreground text-xs font-extrabold uppercase tracking-[0.1em] mb-4">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(228,181,44,0.10)]" />
            {t("Notre évolution", "مسارنا")}
          </div>
          <h2 className="text-[clamp(34px,4.6vw,68px)] leading-[1.02] tracking-[-0.05em] mb-4">
            {t("Les étapes clés de notre ", "المحطات الأساسية في ")}
            <span className="text-primary italic font-bold">{t("développement", "تطورنا")}</span>
          </h2>
        </motion.div>

        <div className="grid gap-4">
          {milestones.map((m, i) => (
            <motion.article
              key={m.year}
              className="grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] gap-4 items-start bg-card/70 border border-border rounded-[28px] p-5 md:p-6 shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="inline-flex items-center justify-center min-h-[64px] rounded-[20px] bg-gradient-to-br from-primary to-[hsl(var(--gold-light))] text-primary-foreground text-[22px] md:text-[26px] font-black tracking-[-0.04em]">
                {m.year}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">{m.title}</h3>
                <p className="text-muted-foreground text-base leading-[1.75]">{m.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTimelineSection;
