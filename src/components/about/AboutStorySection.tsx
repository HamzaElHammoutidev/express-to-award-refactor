import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutStorySection = () => {
  const { t } = useLanguage();

  const points = [
    {
      title: t("Expertise terrain", "خبرة ميدانية"),
      desc: t(
        "Des équipes formées pour intervenir rapidement avec précision, méthode et exigence qualité.",
        "فرق مدربة على التدخل السريع والدقيق وفق منهجية واضحة ومتطلبات جودة عالية."
      ),
    },
    {
      title: t("Couverture nationale", "تغطية وطنية"),
      desc: t(
        "Un réseau de centres techniques et d'ateliers mobiles pour servir les clients dans tout le Maroc.",
        "شبكة من المراكز التقنية والورش المتنقلة لخدمة العملاء في جميع أنحاء المغرب."
      ),
    },
    {
      title: t("Prise en charge simplifiée", "مواكبة مبسطة"),
      desc: t(
        "Un accompagnement clair pour la déclaration, le rendez-vous et la restitution du véhicule.",
        "مسار واضح من التصريح إلى الموعد ثم استلام المركبة في أفضل الظروف."
      ),
    },
    {
      title: t("Standards certifiés", "معايير معتمدة"),
      desc: t(
        "Des interventions encadrées par une démarche qualité structurée et tournée vers la conformité.",
        "تدخلات مؤطرة بمنهجية جودة منظمة وموجهة نحو المطابقة والاعتمادية."
      ),
    },
  ];

  return (
    <section className="relative py-3 md:py-24 overflow-hidden" id="about-story">
      <div className="absolute rounded-full pointer-events-none w-[360px] h-[360px] bottom-16 left-[10%] bg-[radial-gradient(circle,rgba(228,181,44,0.08),transparent_70%)] blur-[18px]" />

      <div className="max-w-[1320px] mx-auto px-6 relative z-[2]">
        {/* Section head */}
        <motion.div
          className="text-center max-w-[940px] mx-auto mb-11"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-card/60 border border-border text-muted-foreground text-xs font-extrabold uppercase tracking-[0.1em] mb-4">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(228,181,44,0.10)]" />
            {t("À propos de nous", "من نحن")}
          </div>
          <h2 className="text-[clamp(34px,4.6vw,68px)] leading-[1.02] tracking-[-0.05em] mb-4">
            {t("Une marque pensée pour durer, ", "علامة تجارية بُنيت للاستمرار، ")}
            <span className="text-primary italic font-bold">
              {t("pas seulement pour réparer", "وليس فقط للإصلاح")}
            </span>
          </h2>
        </motion.div>

        {/* About layout */}
        <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-7 items-stretch">
          <motion.article
            className="bg-card/60 border border-border rounded-[34px] shadow-[0_16px_40px_rgba(0,0,0,0.08)] backdrop-blur-sm p-8 md:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-[clamp(30px,3vw,48px)] leading-[1.04] tracking-[-0.05em] mb-4">
              {t("Des dizaines de milliers de clients nous font ", "عشرات الآلاف من العملاء ")}
              <span className="text-primary">{t("confiance", "يثقون بنا")}</span>
            </h3>
            <p className="text-muted-foreground text-[17px] leading-[1.85] mb-3.5">
              {t(
                "Votre sécurité reste notre priorité absolue. En tant que spécialiste marocain de la réparation d'impact, du remplacement de pare-brise et de l'atelier mobile, Pare-Brise Express intervient sur tous types de véhicules : voitures particulières, utilitaires, flottes professionnelles, poids lourds et transport touristique.",
                "سلامتكم هي أولويتنا المطلقة. بصفتنا متخصصين في إصلاح آثار الصدمات، واستبدال الزجاج الأمامي، وخدمة الورش المتنقلة، نتدخل على مختلف أنواع المركبات: السيارات الخاصة، العربات النفعية، الأساطيل المهنية، الشاحنات والحافلات."
              )}
            </p>
            <p className="text-muted-foreground text-[17px] leading-[1.85]">
              {t(
                "Notre approche combine expertise technique, équipements adaptés, procédures conformes aux standards du vitrage automobile et qualité de service constante. Chaque intervention est conçue pour protéger la visibilité, l'étanchéité, la résistance et la performance globale du vitrage.",
                "تجمع مقاربتنا بين الخبرة التقنية، التجهيزات المناسبة، احترام معايير زجاج السيارات، وجودة خدمة ثابتة. كل تدخل يهدف إلى الحفاظ على الرؤية، الإحكام، الصلابة، والأداء العام للزجاج."
              )}
            </p>

            {/* 4 points */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {points.map((p) => (
                <div key={p.title} className="p-4 rounded-[22px] bg-card/70 border border-border">
                  <strong className="block text-foreground text-base mb-2">{p.title}</strong>
                  <span className="text-muted-foreground text-[15px] leading-[1.7]">{p.desc}</span>
                </div>
              ))}
            </div>
          </motion.article>

          {/* Side image */}
          <motion.aside
            className="rounded-[34px] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.08)] border border-border bg-foreground min-h-[400px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src="https://parebriseexpress.ma/images/assets/bpe-rca.jpg"
              alt={t("Bureaux et équipe Pare-Brise Express", "مكاتب وفريق باري بريز إكسبريس")}
              className="w-full h-full object-cover"
            />
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default AboutStorySection;
