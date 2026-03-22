import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const CarrieresHeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-14 md:py-[72px]">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[clamp(42px,6.8vw,92px)] leading-[0.95] tracking-[-0.06em] font-black mb-5">
              {t("Rejoignez une équipe qui fait ", "انضم إلى فريق يصنع ")}
              <span className="text-primary italic font-bold">{t("grandir l'excellence", "التميّز")}</span>
            </h1>
            <p className="text-muted-foreground text-[clamp(18px,1.9vw,22px)] leading-[1.8] max-w-[720px] mb-7">
              {t(
                "Chez Pare-Brise Express, nous recherchons des talents engagés, rigoureux et passionnés par la qualité de service. Rejoindre nos équipes, c'est contribuer à une marque en pleine évolution, présente sur tout le territoire marocain et tournée vers la performance durable.",
                "في باري بريز إكسبريس، نبحث عن كفاءات ملتزمة، دقيقة، وشغوفة بجودة الخدمة. الانضمام إلى فرقنا يعني المساهمة في تطوير علامة قوية، حاضرة على الصعيد الوطني، وموجهة نحو الأداء المستدام."
              )}
            </p>
            <div className="flex gap-3.5 flex-wrap">
              <a href="#offres" className="inline-flex items-center justify-center min-h-[58px] px-7 rounded-full bg-primary text-primary-foreground font-extrabold tracking-[0.05em] shadow-[0_14px_32px_rgba(228,181,44,0.24)] hover:-translate-y-0.5 transition-all">
                {t("Voir les offres", "اكتشف العروض")}
              </a>
              <a href="#candidature" className="inline-flex items-center justify-center min-h-[58px] px-7 rounded-full bg-card/70 border border-border text-foreground font-extrabold tracking-[0.05em] hover:-translate-y-0.5 transition-all">
                {t("Candidature spontanée", "ترشيح تلقائي")}
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative rounded-[34px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.12)] min-h-[420px] md:min-h-[560px] bg-foreground/5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src="https://parebriseexpress.ma/images/assets/bpe-rca.jpg" alt={t("Équipe Pare-Brise Express", "فريق باري بريز إكسبريس")} className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute left-3 right-3 bottom-3 md:left-6 md:right-6 md:bottom-6 grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3">
              {[
                { value: "+80", label: { fr: "centres et ateliers mobiles", ar: "مراكز وورش متنقلة" } },
                { value: t("Maroc", "المغرب"), label: { fr: "présence nationale", ar: "حضور وطني" } },
                { value: t("Talents", "مواهب"), label: { fr: "mobilisés autour de la qualité", ar: "مجندة حول الجودة" } },
              ].map((stat, i) => (
                <div key={i} className="bg-foreground/70 border border-border/10 backdrop-blur-xl rounded-[20px] p-4 text-background">
                  <strong className="block text-[34px] leading-none text-primary tracking-[-0.05em] mb-2">{stat.value}</strong>
                  <span className="block text-[13px] leading-[1.5] text-background/70 uppercase tracking-[0.08em]">{t(stat.label.fr, stat.label.ar)}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CarrieresHeroSection;
