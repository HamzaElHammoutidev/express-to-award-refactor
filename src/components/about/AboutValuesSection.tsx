import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, MapPin, Lock, Trophy } from "lucide-react";

const AboutValuesSection = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: t("Excellence certifiée", "جودة معتمدة"),
      desc: t(
        "Une exigence constante sur la qualité de pose, la conformité des process et la satisfaction client.",
        "التزام دائم بجودة التركيب، مطابقة الإجراءات، ورضا العملاء."
      ),
    },
    {
      icon: MapPin,
      title: t("Présence nationale", "حضور وطني"),
      desc: t(
        "Des centres techniques et des ateliers mobiles pour répondre aux besoins de proximité et de rapidité.",
        "مراكز تقنية وورش متنقلة لتلبية متطلبات القرب والسرعة في مختلف المدن."
      ),
    },
    {
      icon: Lock,
      title: t("Sécurité avant tout", "السلامة أولاً"),
      desc: t(
        "Chaque intervention vise à préserver la visibilité, la structure et les performances du vitrage automobile.",
        "كل تدخل يهدف إلى الحفاظ على الرؤية، البنية، وأداء زجاج السيارة."
      ),
    },
    {
      icon: Trophy,
      title: t("Réputation construite dans le temps", "سمعة بُنيت مع الوقت"),
      desc: t(
        "Une croissance portée par la confiance des clients particuliers, entreprises et partenaires assurances.",
        "نمو متواصل مبني على ثقة الأفراد والشركات وشركاء التأمين."
      ),
    },
  ];

  return (
    <section className="py-0 pb-20 md:pb-24">
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
            {t("Pourquoi nous choisir", "لماذا نحن")}
          </div>
          <h2 className="text-[clamp(34px,4.6vw,68px)] leading-[1.02] tracking-[-0.05em] mb-4">
            {t("Ce qui fait la différence chez ", "ما الذي يصنع الفرق لدى ")}
            <span className="text-primary italic font-bold">Pare-Brise Express</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <motion.article
              key={v.title}
              className="bg-card/70 border border-border rounded-[28px] p-7 shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 hover:border-primary/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="w-12 h-12 rounded-[14px] grid place-items-center bg-primary/10 text-primary mb-4">
                <v.icon size={24} strokeWidth={1.9} />
              </div>
              <h3 className="text-[22px] leading-[1.2] font-bold mb-2.5">{v.title}</h3>
              <p className="text-muted-foreground text-base leading-[1.75]">{v.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValuesSection;
