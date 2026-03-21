import { motion } from "framer-motion";
import { Clock, Lock, Car } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const benefits = [
  {
    icon: Clock,
    title: { fr: "Rapide et pratique", ar: "سريع وعملي" },
    desc: {
      fr: "Choisissez votre créneau et bénéficiez d'une intervention pensée pour s'adapter à votre agenda.",
      ar: "اختر الموعد المناسب لك واستفد من تدخل منظم يتماشى مع وقتك والتزاماتك.",
    },
  },
  {
    icon: Lock,
    title: { fr: "Service entièrement gratuit", ar: "خدمة مجانية بالكامل" },
    desc: {
      fr: "Une intervention mobile sans surcoût, avec le même niveau de rigueur et de sécurité.",
      ar: "تدخل متنقل دون كلفة إضافية، مع نفس مستوى الجودة والسلامة.",
    },
  },
  {
    icon: Car,
    title: { fr: "Adapté à la majorité des vitrages", ar: "ملائم لمعظم أنواع الزجاج" },
    desc: {
      fr: "Intervention sur de nombreux types de vitrage automobile, selon les conditions techniques applicables.",
      ar: "تدخل على عدد كبير من أنواع زجاج السيارات حسب الشروط التقنية المعتمدة.",
    },
  },
];

const EngagementMobileSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="pb-20 md:pb-[92px] relative" id="mobile">
      <div className="absolute w-[340px] h-[340px] -bottom-[90px] right-[8%] rounded-full bg-[radial-gradient(circle,rgba(228,181,44,0.10),transparent_72%)] blur-[18px] pointer-events-none" />

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
            {t("Atelier mobile", "الورشة المتنقلة")}
          </div>
          <h2 className="text-[clamp(34px,4.6vw,68px)] leading-[1.02] tracking-[-0.05em] mb-4">
            {t("L'intervention ", "التدخل ")}
            <span className="text-primary italic font-bold">{t("là où vous en avez besoin", "حيث تحتاجه")}</span>
          </h2>
          <p className="text-muted-foreground text-[clamp(17px,1.7vw,21px)] leading-[1.8]">
            {t(
              "Notre atelier mobile permet de rapprocher le service du client et d'apporter une réponse rapide, flexible et professionnelle, là où le besoin se présente.",
              "الخدمة المتنقلة تُعد من أبرز عناصر تميز العلامة، ولذلك تم إعطاؤها حضوراً أوضح وأكثر إقناعاً داخل الصفحة."
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[0.92fr_1.08fr] gap-6 items-stretch">
          <motion.div
            className="rounded-[34px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.12)] min-h-[440px] md:min-h-[540px] bg-foreground"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://parebriseexpress.ma/images/events/Transpro.jpg"
              alt={t("Atelier mobile Pare-Brise Express", "الورشة المتنقلة باري بريز إكسبريس")}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.article
            className="bg-card/70 border border-border rounded-[34px] shadow-[0_16px_40px_rgba(0,0,0,0.08)] p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-[clamp(30px,3vw,48px)] leading-[1.04] mb-4">
              {t("Pourquoi choisir notre ", "لماذا تختار ")}
              <span className="text-primary">{t("atelier mobile", "الورشة المتنقلة")}</span>
              {t(" ?", " ؟")}
            </h3>
            <p className="text-muted-foreground text-[17px] leading-[1.9]">
              {t(
                "Que ce soit pour une réparation d'impact ou un remplacement de pare-brise, nos équipes peuvent intervenir sur votre lieu de travail, à domicile ou sur site, selon vos contraintes. Cette flexibilité améliore l'expérience client tout en maintenant le même niveau d'exigence qu'en centre technique.",
                "سواء تعلق الأمر بإصلاح أثر صدمة أو استبدال الزجاج الأمامي، يمكن لفرقنا التدخل في مقر العمل، في المنزل أو في الموقع الذي يناسب العميل، مع الحفاظ على نفس مستوى الجودة والصرامة المعمول به في المراكز التقنية."
              )}
            </p>
            <p className="text-muted-foreground text-[17px] leading-[1.9] mt-3.5">
              {t(
                "L'objectif est simple : réduire le temps perdu, simplifier la logistique et maintenir une qualité constante, quel que soit le lieu d'intervention.",
                "الهدف واضح: تقليص الوقت الضائع، تبسيط اللوجستيك، والمحافظة على جودة ثابتة أينما تم التدخل."
              )}
            </p>
            <div className="grid gap-3.5 mt-6">
              {benefits.map((b, i) => (
                <div key={i} className="grid grid-cols-[52px_1fr] gap-3.5 items-start p-4 rounded-[22px] bg-card/70 border border-border">
                  <div className="w-[52px] h-[52px] rounded-2xl grid place-items-center bg-primary/10 text-primary">
                    <b.icon size={24} strokeWidth={1.9} />
                  </div>
                  <div>
                    <strong className="block text-lg mb-1.5">{lang === "ar" ? b.title.ar : b.title.fr}</strong>
                    <span className="text-muted-foreground text-[15px] leading-[1.7]">{lang === "ar" ? b.desc.ar : b.desc.fr}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default EngagementMobileSection;
