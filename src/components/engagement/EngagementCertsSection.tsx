import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const EngagementCertsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="pb-20 md:pb-[92px] relative" id="certifications">
      <div className="absolute w-[360px] h-[360px] bottom-10 left-[8%] rounded-full bg-[radial-gradient(circle,rgba(228,181,44,0.08),transparent_70%)] blur-[18px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 relative z-[2]">
        <motion.div
          className="text-center max-w-[940px] mx-auto mb-11"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-card/60 border border-border text-muted-foreground text-xs font-extrabold uppercase tracking-[0.1em] mb-4">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(228,181,44,0.10)]" />
            {t("Certifications & confiance", "شهادات وثقة")}
          </div>
          <h2 className="text-[clamp(34px,4.6vw,68px)] leading-[1.02] tracking-[-0.05em] mb-4">
            {t("Des engagements ", "التزامات ")}
            <span className="text-primary italic font-bold">{t("mesurables et visibles", "واضحة وملموسة")}</span>
          </h2>
          <p className="text-muted-foreground text-[clamp(17px,1.7vw,21px)] leading-[1.8]">
            {t(
              "Nos certifications et notre démarche qualité traduisent une volonté claire : offrir à chaque client une intervention fiable, sécurisée et conforme aux standards les plus exigeants du vitrage automobile.",
              "تم تطوير هذه الصفحة لتمنح صورة أوضح عن التزامات العلامة، مع الحفاظ على نفس الهوية البصرية الراقية والمنسجمة مع الصفحة الرئيسية."
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-6 items-stretch">
          <motion.article
            className="bg-card/70 border border-border rounded-[34px] shadow-[0_16px_40px_rgba(0,0,0,0.08)] p-8 grid content-center justify-items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-[180px] h-[180px] rounded-full bg-background grid place-items-center shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)] mb-5">
              <img
                src="https://parebriseexpress.ma/images/assets/imanor-orig.png"
                alt={t("Certification IMANOR", "شهادة إيمانور")}
                className="max-w-[130px] max-h-[130px] object-contain"
              />
            </div>
            <h3 className="text-[28px] leading-[1.1] mb-2.5">{t("Certification IMANOR", "شهادة IMANOR")}</h3>
            <p className="text-muted-foreground text-base leading-[1.8] max-w-[420px]">
              {t(
                "Une reconnaissance qui reflète notre volonté de structurer nos procédures et d'assurer une qualité constante sur l'ensemble de nos interventions.",
                "اعتراف يعكس رغبتنا في تنظيم الإجراءات وضمان جودة ثابتة في مختلف تدخلاتنا."
              )}
            </p>
          </motion.article>

          <motion.article
            className="bg-card/70 border border-border rounded-[34px] shadow-[0_16px_40px_rgba(0,0,0,0.08)] p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-[32px] leading-[1.08] mb-3.5">
              {t("L'excellence opérationnelle comme ", "التميز التشغيلي باعتباره ")}
              <span className="text-primary">{t("standard", "معياراً دائماً")}</span>
            </h3>
            <p className="text-muted-foreground text-[17px] leading-[1.9]">
              {t(
                "Certifiée ISO 9001 par IMANOR, Pare-Brise Express applique des standards internationaux rigoureux pour garantir précision, fiabilité et amélioration continue. Cette démarche qualité traduit notre engagement à fournir des prestations maîtrisées sur la réparation d'impact, le remplacement de pare-brise et les interventions sur vitrages automobiles.",
                "بفضل شهادة ISO 9001 من IMANOR، تطبق باري بريز إكسبريس معايير دولية دقيقة لضمان الجودة، الاعتمادية، والتحسين المستمر في إصلاح الصدمات، استبدال الزجاج الأمامي، وخدمات زجاج السيارات بشكل عام."
              )}
            </p>
            <p className="text-muted-foreground text-[17px] leading-[1.9] mt-3.5">
              {t(
                "Nous mettons également l'accent sur la sécurité et la conformité. Le label SALAMATOUNA vient renforcer cette promesse en reconnaissant notre implication pour la sécurité routière, la performance des vitrages et le respect des exigences les plus élevées du secteur.",
                "كما نولي أهمية كبيرة للسلامة والمطابقة. ويعزز ذلك حصولنا على علامة SALAMATOUNA التي تؤكد التزامنا بسلامة الطريق، مطابقة الزجاج، وأداء التدخلات وفق أعلى المتطلبات المهنية."
              )}
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default EngagementCertsSection;
