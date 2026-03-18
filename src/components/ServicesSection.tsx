import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  {
    id: "reparation",
    image: "https://parebriseexpress.ma/images/tech_serv.jpg",
    titleFr: "Réparation d'impact(s)",
    titleAr: "إصلاح التأثيرات",
    descFr: "Chez Pare-Brise Express, nous savons que chaque impact doit être traité rapidement. C'est pourquoi nous vous proposons une intervention rapide, fiable et éco-responsable.",
    descAr: "في بار بريز إكسبرس، نعلم أن كل تأثير يجب معالجته بسرعة. لذلك نقدم لكم تدخلاً سريعاً وموثوقاً وصديقاً للبيئة.",
    imagePosition: "left" as const,
  },
  {
    id: "remplacement",
    image: "https://parebriseexpress.ma/images/jouj_serv.jpg",
    titleFr: "Remplacement de votre pare-brise",
    titleAr: "استبدال الزجاج الأمامي",
    descFr: "Pare-brise endommagé ? Détendez-vous, nous nous chargeons de tout. De la prise de contact à la réception de votre véhicule avec le recalibrage de votre caméra ADAS.",
    descAr: "زجاج أمامي متضرر؟ استرخوا، نحن نتكفل بكل شيء. من الاتصال الأول إلى استلام سيارتكم مع إعادة معايرة كاميرا ADAS.",
    imagePosition: "right" as const,
  },
  {
    id: "mobile",
    image: "https://parebriseexpress.ma/images/van_serv.jpg",
    titleFr: "Atelier mobile",
    titleAr: "ورشة متنقلة",
    descFr: "Notre atelier mobile se déplace chez vous, sur votre lieu de travail ou ailleurs. Service 100% gratuit sur tout type de vitrage, avec le même niveau de qualité qu'en centre technique.",
    descAr: "ورشتنا المتنقلة تأتي إليكم، في مكان عملكم أو في أي مكان آخر. خدمة مجانية 100% على جميع أنواع الزجاج.",
    imagePosition: "left" as const,
  },
];

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-14 md:py-20 bg-foreground text-background">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-background/50 mb-4">
            {t("Ce que nous faisons", "ما نقوم به")}
          </p>
          <h2 className="text-4xl md:text-6xl font-serif leading-[1.05]">
            {t("Nos", "خدماتنا")} <span className="italic text-primary">{t("services", "المتميزة")}</span>
          </h2>
        </motion.div>

        {/* Services list */}
        <div className="space-y-0">
          {services.map((service, i) => (
            <div key={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`flex flex-col ${
                  service.imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 md:gap-14 py-14 md:py-20`}
              >
                {/* Image */}
                <div className="w-full md:w-[45%] flex-shrink-0">
                  <div className="rounded-xl overflow-hidden aspect-[4/3]">
                    <img
                      src={service.image}
                      alt={t(service.titleFr, service.titleAr)}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-[55%] text-center md:text-start">
                  <h3 className="text-2xl md:text-4xl font-serif mb-4">
                    {t(service.titleFr, service.titleAr)}
                  </h3>
                  <p className="text-sm md:text-base text-background/60 leading-[1.8] font-light max-w-lg">
                    {t(service.descFr, service.descAr)}
                  </p>
                </div>
              </motion.div>

              {/* Yellow vertical separator */}
              {i < services.length - 1 && (
                <div className="flex justify-center">
                  <div className="w-[2px] h-16 bg-primary/60" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
