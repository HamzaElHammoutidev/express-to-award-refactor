import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const EngagementCtaSection = () => {
  const { t } = useLanguage();

  return (
    <section className="pb-20 md:pb-[110px]">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          className="relative overflow-hidden bg-gradient-to-br from-foreground to-[hsl(var(--foreground)/0.9)] text-background rounded-[36px] p-10 md:p-[42px] shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute w-[360px] h-[360px] -right-[120px] -top-[120px] rounded-full bg-[radial-gradient(circle,rgba(228,181,44,0.24),transparent_70%)]" />
          <div className="relative z-[2] grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <h2 className="text-[clamp(34px,4vw,60px)] leading-[1.02] tracking-[-0.05em] mb-2.5">
                {t("Besoin d'une intervention ", "هل تحتاج إلى تدخل ")}
                <span className="text-primary italic">{t("fiable et certifiée", "موثوق ومعتمد")}</span>
                {t(" ?", " ؟")}
              </h2>
              <p className="max-w-[720px] text-background/75 text-lg leading-[1.8]">
                {t(
                  "Confiez votre vitrage à une équipe engagée, structurée et proche de vous. Prenez rendez-vous ou trouvez le centre le plus proche.",
                  "أسند زجاج سيارتك إلى فريق ملتزم ومنظم وقريب منك. احجز موعداً أو ابحث عن أقرب مركز الآن."
                )}
              </p>
            </div>
            <div className="flex gap-3.5 flex-wrap">
              <Link to="/centres" className="inline-flex items-center justify-center min-h-[58px] px-7 rounded-full font-extrabold tracking-[0.05em] bg-primary text-primary-foreground shadow-[0_14px_32px_rgba(228,181,44,0.24)] hover:-translate-y-[3px] transition-transform">
                {t("Trouver un centre", "اعثر على مركز")}
              </Link>
              <Link to="/declaration" className="inline-flex items-center justify-center min-h-[58px] px-7 rounded-full font-extrabold tracking-[0.05em] bg-white/10 border border-white/[0.12] text-background hover:-translate-y-[3px] hover:bg-white/15 transition-all">
                {t("Prendre rendez-vous", "احجز موعداً")}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EngagementCtaSection;
