import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const CarrieresSeoSection = () => {
  const { t } = useLanguage();

  return (
    <section className="pb-20 md:pb-[92px]">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-6 bg-gradient-to-br from-card/70 to-card/55 border border-border rounded-[34px] p-8 md:p-[34px] shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <h3 className="text-[28px] leading-[1.15] mb-3.5">
              {t("Un environnement qui valorise l'implication et le potentiel", "بيئة عمل تقدّر الالتزام والقدرة على التطور")}
            </h3>
            <p className="text-muted-foreground/70 text-base leading-[1.85]">
              {t(
                "Notre ambition est de réunir des collaborateurs capables de porter une culture de qualité, de proximité et d'excellence opérationnelle. Chaque recrutement vise à renforcer l'expérience client, la performance du réseau et le développement durable de la marque.",
                "نبحث عن كفاءات قادرة على حمل ثقافة الجودة، القرب من العميل، والتميّز التشغيلي. كل توظيف يهدف إلى تقوية تجربة العميل، دعم أداء الشبكة، والمساهمة في نمو العلامة بشكل مستدام."
              )}
            </p>
          </div>
          <div>
            <h3 className="text-[28px] leading-[1.15] mb-3.5">
              {t("Ce que nous recherchons", "ما الذي نبحث عنه")}
            </h3>
            <ul className="grid gap-2.5 list-none">
              {[
                { fr: "Des profils rigoureux et orientés qualité", ar: "ملفات دقيقة وموجهة نحو الجودة" },
                { fr: "Des talents capables de travailler en équipe", ar: "مواهب قادرة على العمل الجماعي" },
                { fr: "Des collaborateurs à l'aise avec les environnements terrain et réseau", ar: "أشخاص مرتاحون في البيئات الميدانية والشبكاتية" },
                { fr: "Des personnes engagées dans une logique de progression continue", ar: "مرشحون يؤمنون بالتطور المستمر" },
                { fr: "Des candidats motivés par une expérience client de haut niveau", ar: "طاقات مهتمة بتقديم تجربة عميل عالية المستوى" },
              ].map((item, i) => (
                <li key={i} className="relative ps-[26px] text-muted-foreground/70 text-base leading-[1.8] before:content-[''] before:absolute before:start-0 before:top-[0.78em] before:w-2.5 before:h-2.5 before:rounded-full before:bg-primary before:shadow-[0_0_0_6px_rgba(228,181,44,0.08)] before:-translate-y-1/2">
                  {t(item.fr, item.ar)}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CarrieresSeoSection;
