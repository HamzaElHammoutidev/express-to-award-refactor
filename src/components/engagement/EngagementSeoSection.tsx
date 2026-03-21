import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const EngagementSeoSection = () => {
  const { t } = useLanguage();

  return (
    <section className="pb-20 md:pb-[92px]">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-6 bg-gradient-to-br from-card/70 to-card/50 border border-border rounded-[34px] p-8 shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <h3 className="text-[28px] leading-[1.15] mb-3.5">
              {t("Une exigence de qualité à chaque étape", "صفحة التزام محسنة بشكل أفضل لمحركات البحث")}
            </h3>
            <p className="text-muted-foreground text-base leading-[1.85]">
              {t(
                "Notre engagement s'exprime à travers une exigence de qualité constante, une sécurité renforcée sur chaque intervention et une expérience client pensée pour être simple, fluide et rassurante.",
                "تمت إعادة صياغة المحتوى اعتماداً على عبارات مرتبطة مباشرة بنية البحث الخاصة بهذه الصفحة: الجودة، الاعتماد، الورشة المتنقلة، الضمان، سلامة الزجاج، وسهولة المواكبة. الهدف هو تحسين الظهور العضوي دون الإخلال بجمالية الصفحة أو وضوحها."
              )}
            </p>
          </div>
          <div>
            <h3 className="text-[28px] leading-[1.15] mb-3.5">
              {t("Nos priorités au quotidien", "عبارات استراتيجية مدمجة بشكل طبيعي")}
            </h3>
            <ul className="grid gap-2.5 ps-5 text-muted-foreground text-base leading-[1.85] list-disc">
              <li>{t("Des standards de qualité appliqués sur chaque intervention", "التزام الجودة في زجاج السيارات بالمغرب")}</li>
              <li>{t("Des certifications qui renforcent la confiance et la conformité", "شهادة IMANOR ومعايير الإصلاح")}</li>
              <li>{t("Une garantie à vie pour plus de sérénité", "ضمان مدى الحياة على الإصلاح والاستبدال")}</li>
              <li>{t("Un atelier mobile pour plus de proximité et de flexibilité", "ورشة متنقلة لزجاج السيارات")}</li>
              <li>{t("Un accompagnement simple, clair et professionnel", "إجراءات مبسطة ومواكبة العميل")}</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EngagementSeoSection;
