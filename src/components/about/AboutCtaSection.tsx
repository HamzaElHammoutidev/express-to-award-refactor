import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutCtaSection = () => {
  const { t } = useLanguage();

  return (
    <section className="pb-20 md:pb-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          className="relative overflow-hidden bg-gradient-to-br from-foreground to-secondary-foreground text-background rounded-[36px] p-10 md:p-12 shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Glow orb */}
          <div className="absolute w-[360px] h-[360px] -right-28 -top-28 rounded-full bg-[radial-gradient(circle,rgba(228,181,44,0.24),transparent_70%)] pointer-events-none" />

          <div className="relative z-[2] grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <h2 className="text-[clamp(34px,4vw,60px)] leading-[1.02] tracking-[-0.05em] mb-2.5">
                {t("Prêt à découvrir ", "جاهز لاكتشاف ")}
                <span className="text-primary italic">{t("notre réseau", "شبكتنا")}</span> ?
              </h2>
              <p className="max-w-[720px] text-background/70 text-lg leading-[1.8]">
                {t(
                  "Contactez nos équipes, trouvez le centre le plus proche ou déclarez votre sinistre pour une prise en charge rapide et professionnelle.",
                  "تواصل مع فرقنا، اعثر على أقرب مركز، أو صرّح بحادثك للاستفادة من مواكبة سريعة واحترافية."
                )}
              </p>
            </div>
            <div className="flex gap-3.5 flex-wrap">
              <Link
                to="/centres"
                className="inline-flex items-center justify-center min-h-[58px] px-7 rounded-full font-extrabold tracking-[0.05em] bg-primary text-primary-foreground shadow-[0_14px_32px_rgba(228,181,44,0.24)] hover:-translate-y-0.5 transition-transform"
              >
                {t("Trouver un centre", "اعثر على مركز")}
              </Link>
              <Link
                to="/declaration"
                className="inline-flex items-center justify-center min-h-[58px] px-7 rounded-full font-extrabold tracking-[0.05em] bg-background/70 border border-border text-foreground hover:-translate-y-0.5 transition-transform"
              >
                {t("Déclarer un sinistre", "صرّح بحادث")}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCtaSection;
