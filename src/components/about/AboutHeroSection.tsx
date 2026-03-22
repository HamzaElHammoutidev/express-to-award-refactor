import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutHeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-14 md:py-20 overflow-hidden">
      {/* Orbs */}
      <div className="absolute rounded-full pointer-events-none w-80 h-80 top-20 -left-24 bg-[radial-gradient(circle,rgba(228,181,44,0.14),transparent_72%)] blur-[18px]" />
      <div className="absolute rounded-full pointer-events-none w-64 h-64 -right-16 top-56 bg-[radial-gradient(circle,rgba(255,255,255,0.95),transparent_72%)] blur-[18px]" />

      <div className="max-w-[1320px] mx-auto px-6 relative z-[2]">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-[clamp(44px,7vw,96px)] leading-[0.95] tracking-[-0.06em] font-black mb-5">
              {t("L'histoire d'une ", "قصة ")}
              <span className="text-primary italic font-bold">{t("expertise", "خبرة")}</span>
              {t(" au service de votre sécurité", " في خدمة سلامتكم")}
            </h1>
            <p className="max-w-[720px] text-[clamp(18px,1.9vw,22px)] leading-[1.8] text-muted-foreground mb-7">
              {t(
                "Depuis plus de dix ans, Pare-Brise Express accompagne les automobilistes, les entreprises et les professionnels du transport avec une promesse claire : offrir une réparation de vitrage automobile rapide, fiable, certifiée et accessible partout au Maroc.",
                "منذ أكثر من عشر سنوات، ترافق باري بريز إكسبريس السائقين والشركات ومهنيي النقل بحل واضح: إصلاح زجاج السيارات واستبدال الزجاج الأمامي بسرعة، جودة، واعتمادية في مختلف مناطق المغرب."
              )}
            </p>
            <div className="flex gap-3.5 flex-wrap">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center min-h-[58px] px-7 rounded-full font-extrabold tracking-[0.05em] bg-primary text-primary-foreground shadow-[0_14px_32px_rgba(228,181,44,0.24)] hover:-translate-y-0.5 transition-transform"
              >
                {t("Contacter notre équipe", "تواصل مع فريقنا")}
              </Link>
              <a
                href="#about-story"
                className="inline-flex items-center justify-center min-h-[58px] px-7 rounded-full font-extrabold tracking-[0.05em] bg-card/70 border border-border text-foreground hover:-translate-y-0.5 transition-transform"
              >
                {t("Découvrir notre histoire", "اكتشف قصتنا")}
              </a>
            </div>
          </motion.div>

          {/* Hero Media */}
          <motion.div
            className="relative rounded-[34px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.12)] min-h-[400px] md:min-h-[560px] bg-foreground"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <img
              src="https://parebriseexpress.ma/images/assets/bpe-rca.jpg"
              alt={t("Équipe Pare-Brise Express dans un centre technique", "فريق باري بريز إكسبريس داخل مركز تقني")}
              className="w-full h-full object-cover absolute inset-0"
            />
            {/* Stat cards overlay */}
            <div className="absolute left-3 right-3 bottom-3 md:left-5 md:right-5 md:bottom-5 grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3">
              {[
                { value: "+10", label: t("ans d'expertise terrain", "سنوات من الخبرة الميدانية") },
                { value: "+80", label: t("centres et ateliers mobiles", "مراكز وورش متنقلة") },
                { value: t("Maroc", "المغرب"), label: t("couverture nationale", "تغطية وطنية") },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="bg-foreground/70 border border-white/[0.08] backdrop-blur-xl rounded-[20px] p-4 text-background"
                >
                  <strong className="block text-xl md:text-[clamp(22px,3vw,34px)] leading-none text-primary tracking-[-0.05em] mb-1 md:mb-2">
                    {stat.value}
                  </strong>
                  <span className="block text-[11px] md:text-[13px] leading-snug text-background/70 uppercase tracking-[0.08em]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
