import { motion } from "framer-motion";
import { Shield, Trophy, AlignLeft, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const pillars = [
  {
    icon: Shield,
    title: { fr: "Qualité certifiée", ar: "جودة معتمدة" },
    desc: {
      fr: "Des méthodes encadrées, des standards précis et une exigence constante pour chaque intervention vitrage.",
      ar: "طرق تدخل مضبوطة، معايير دقيقة، ومتابعة مستمرة لضمان جودة خدمات زجاج السيارات.",
    },
  },
  {
    icon: Trophy,
    title: { fr: "Garantie à vie", ar: "ضمان مدى الحياة" },
    desc: {
      fr: "Une preuve de confiance dans la qualité de nos réparations et de nos remplacements de vitrage automobile.",
      ar: "دليل على ثقتنا في جودة الإصلاحات وعمليات الاستبدال التي نقوم بها.",
    },
  },
  {
    icon: AlignLeft,
    title: { fr: "Procédures simplifiées", ar: "إجراءات مبسطة" },
    desc: {
      fr: "Un parcours fluide du premier contact jusqu'à la prise en charge, avec des délais optimisés et une communication claire.",
      ar: "مسار واضح من أول اتصال إلى غاية استلام السيارة، مع سرعة في التنفيذ وتواصل واضح.",
    },
  },
  {
    icon: MapPin,
    title: { fr: "Proximité terrain", ar: "قرب ميداني" },
    desc: {
      fr: "Des centres techniques et un atelier mobile pour rapprocher l'intervention du client partout au Maroc.",
      ar: "مراكز تقنية وورش متنقلة تجعل الخدمة أقرب للعميل في مختلف مناطق المغرب.",
    },
  },
];

const EngagementPillarsSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="pb-20 md:pb-[92px]">
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
            {t("Nos piliers", "مرتكزاتنا")}
          </div>
          <h2 className="text-[clamp(34px,4.6vw,68px)] leading-[1.02] tracking-[-0.05em] mb-4">
            {t("Une promesse client fondée sur ", "وعد العميل قائم على ")}
            <span className="text-primary italic font-bold">{t("4 engagements forts", "4 التزامات أساسية")}</span>
          </h2>
          <p className="text-muted-foreground text-[clamp(17px,1.7vw,21px)] leading-[1.8]">
            {t(
              "Nos engagements se traduisent par des actions concrètes : qualité certifiée, accompagnement clair, proximité terrain et amélioration continue de l'expérience client.",
              "هذه البنية تعطي الصفحة قيمة أكبر للمستخدم، وتزيد من قوتها التحريرية والتسويقية."
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => (
            <motion.article
              key={i}
              className="bg-card/70 border border-border rounded-[28px] p-7 shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 hover:border-primary/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="w-12 h-12 rounded-[14px] grid place-items-center bg-primary/10 text-primary mb-4">
                <pillar.icon size={24} strokeWidth={1.9} />
              </div>
              <h3 className="text-[22px] leading-[1.2] mb-2.5">{lang === "ar" ? pillar.title.ar : pillar.title.fr}</h3>
              <p className="text-muted-foreground text-base leading-[1.75]">{lang === "ar" ? pillar.desc.ar : pillar.desc.fr}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementPillarsSection;
