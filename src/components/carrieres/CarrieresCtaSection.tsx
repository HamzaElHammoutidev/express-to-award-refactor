import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const CarrieresCtaSection = () => {
  const { t } = useLanguage();

  return (
    <section className="pb-20 md:pb-[110px]">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          className="relative overflow-hidden bg-gradient-to-br from-foreground to-foreground/90 text-background rounded-[36px] p-10 md:p-[42px] shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute w-[360px] h-[360px] -right-[120px] -top-[120px] rounded-full bg-[radial-gradient(circle,rgba(228,181,44,0.24),transparent_70%)]" />
          <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <h2 className="text-[clamp(34px,4vw,60px)] leading-[1.02] tracking-[-0.05em] mb-2.5">
                {t("Prêt à faire partie de ", "هل أنت مستعد للانضمام إلى ")}
                <span className="text-primary italic">{t("l'aventure", "المغامرة")}</span> ?
              </h2>
              <p className="text-background/70 text-lg leading-[1.8] max-w-[720px]">
                {t(
                  "Découvrez nos offres actuelles ou envoyez votre candidature spontanée pour rejoindre un réseau en pleine évolution.",
                  "اكتشف عروضنا الحالية أو أرسل ترشيحك التلقائي للانضمام إلى شبكة مهنية في تطور مستمر."
                )}
              </p>
            </div>
            <div className="flex gap-3.5 flex-wrap">
              <a href="#offres" className="inline-flex items-center justify-center min-h-[58px] px-7 rounded-full bg-primary text-primary-foreground font-extrabold tracking-[0.05em] shadow-[0_14px_32px_rgba(228,181,44,0.24)] hover:-translate-y-0.5 transition-all">
                {t("Voir les offres", "العروض")}
              </a>
              <a href="#candidature" className="inline-flex items-center justify-center min-h-[58px] px-7 rounded-full bg-background/10 border border-background/10 text-background font-extrabold tracking-[0.05em] hover:-translate-y-0.5 transition-all">
                {t("Postuler", "ترشيح")}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CarrieresCtaSection;
