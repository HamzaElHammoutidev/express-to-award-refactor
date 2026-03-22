import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const EngagementHeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-14 md:py-[54px] overflow-hidden">
      {/* Orbs */}
      <div className="absolute w-[320px] h-[320px] top-20 -left-[100px] rounded-full bg-[radial-gradient(circle,rgba(228,181,44,0.14),transparent_72%)] blur-[18px] pointer-events-none" />
      <div className="absolute w-[240px] h-[240px] -right-[60px] top-[220px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.96),transparent_72%)] blur-[18px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 relative z-[2]">
        <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-[clamp(42px,6.8vw,92px)] leading-[0.95] tracking-[-0.06em] font-black mb-5">
              {t("L'engagement qui ", "الالتزام الذي ")}
              <span className="text-primary italic font-bold">{t("fait la différence", "يصنع الفرق")}</span>
            </h1>
            <p className="max-w-[720px] text-[clamp(18px,1.9vw,22px)] leading-[1.8] text-muted-foreground mb-7">
              {t(
                "Chez Pare-Brise Express, notre engagement repose sur trois piliers : la qualité d'exécution, la sécurité du vitrage automobile et la simplicité du parcours client. Chaque intervention est pensée pour allier conformité, fiabilité et tranquillité d'esprit.",
                "في باري بريز إكسبريس، يرتكز التزامنا على ثلاثة محاور رئيسية: جودة التنفيذ، سلامة زجاج السيارات، وسهولة تجربة العميل. كل تدخل لدينا مصمم ليجمع بين المطابقة، الاعتمادية وراحة البال."
              )}
            </p>
            <div className="flex gap-3.5 flex-wrap">
              <a href="#certifications" className="inline-flex items-center justify-center min-h-[58px] px-7 rounded-full font-extrabold tracking-[0.05em] bg-primary text-primary-foreground shadow-[0_14px_32px_rgba(228,181,44,0.24)] hover:-translate-y-[3px] transition-transform">
                {t("Découvrir nos engagements", "اكتشف التزاماتنا")}
              </a>
              <a href="#mobile" className="inline-flex items-center justify-center min-h-[58px] px-7 rounded-full font-extrabold tracking-[0.05em] bg-card/70 border border-border text-foreground hover:-translate-y-[3px] hover:bg-card transition-all">
                {t("Voir l'atelier mobile", "اكتشف الورشة المتنقلة")}
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative rounded-[34px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.12)] min-h-[460px] md:min-h-[560px] bg-foreground"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://parebriseexpress.ma/images/assets/bpe-rca.jpg"
              alt={t("Technicien Pare-Brise Express en intervention", "تقني من باري بريز إكسبريس أثناء التدخل")}
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute left-6 right-6 bottom-6 grid grid-cols-3 gap-3">
              {[
                { val: "ISO", label: t("qualité structurée", "جودة منظمة") },
                { val: t("Vie", "مدى الحياة"), label: t("garantie sur l'intervention", "ضمان على التدخل") },
                { val: t("Mobile", "متنقل"), label: t("intervention sur site", "تدخل في موقعكم") },
              ].map((stat, i) => (
                <div key={i} className="bg-foreground/70 border border-white/[0.08] backdrop-blur-sm rounded-[20px] p-4 text-background">
                  <strong className="block text-[34px] leading-none text-primary tracking-[-0.05em] mb-2">{stat.val}</strong>
                  <span className="block text-[13px] leading-[1.5] text-background/70 uppercase tracking-[0.08em]">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngagementHeroSection;
