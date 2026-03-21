import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutMediaSection = () => {
  const { t } = useLanguage();

  return (
    <section className="pb-20 md:pb-24 overflow-hidden">
      <div className="absolute rounded-full pointer-events-none w-[340px] h-[340px] -bottom-20 right-[8%] bg-[radial-gradient(circle,rgba(228,181,44,0.10),transparent_72%)] blur-[18px]" />

      <div className="max-w-[1320px] mx-auto px-6 relative z-[2]">
        <motion.div
          className="text-center max-w-[940px] mx-auto mb-11"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-card/60 border border-border text-muted-foreground text-xs font-extrabold uppercase tracking-[0.1em] mb-4">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(228,181,44,0.10)]" />
            {t("Vie de l'entreprise", "الحياة داخل الشركة")}
          </div>
          <h2 className="text-[clamp(34px,4.6vw,68px)] leading-[1.02] tracking-[-0.05em] mb-4">
            {t("Une entreprise ", "شركة ")}
            <span className="text-primary italic font-bold">
              {t("visible, active et engagée", "نشطة، مرئية وقريبة")}
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1.12fr_0.88fr] gap-6 items-stretch">
          {/* Large image */}
          <motion.article
            className="relative overflow-hidden rounded-[34px] shadow-[0_24px_60px_rgba(0,0,0,0.12)] bg-foreground min-h-[400px] md:min-h-[620px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://parebriseexpress.ma/images/events/Transpro.jpg"
              alt={t("Événement Pare-Brise Express", "فعالية باري بريز إكسبريس")}
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-x-5 bottom-5 p-4 rounded-[20px] bg-foreground/70 text-background border border-white/[0.08] backdrop-blur-sm">
              <strong className="block text-primary text-sm tracking-[0.08em] uppercase mb-2">
                {t("Événements & terrain", "فعاليات وميدان")}
              </strong>
              <span className="text-lg leading-snug">
                {t(
                  "Présence sur les salons, rencontres professionnelles et activations de marque pour renforcer la proximité client.",
                  "حضور في المعارض واللقاءات المهنية لتعزيز القرب من العملاء والشركاء."
                )}
              </span>
            </div>
          </motion.article>

          {/* Stacked images */}
          <div className="grid gap-6">
            <motion.article
              className="relative overflow-hidden rounded-[34px] shadow-[0_24px_60px_rgba(0,0,0,0.12)] bg-foreground min-h-[280px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <img
                src="https://parebriseexpress.ma/images/events/AvitoEvent.jpg"
                alt={t("Centre technique Pare-Brise Express", "مركز تقني باري بريز إكسبريس")}
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-x-5 bottom-5 p-4 rounded-[20px] bg-foreground/70 text-background border border-white/[0.08] backdrop-blur-sm">
                <strong className="block text-primary text-sm tracking-[0.08em] uppercase mb-2">
                  {t("Centres techniques", "مراكز تقنية")}
                </strong>
                <span className="text-lg leading-snug">
                  {t(
                    "Des espaces équipés pour intervenir dans de bonnes conditions de sécurité et de qualité.",
                    "فضاءات مجهزة للتدخل في أفضل ظروف الجودة والسلامة."
                  )}
                </span>
              </div>
            </motion.article>

            <motion.article
              className="relative overflow-hidden rounded-[34px] shadow-[0_24px_60px_rgba(0,0,0,0.12)] bg-foreground min-h-[280px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img
                src="https://parebriseexpress.ma/images/events/HyattEvent.jpg"
                alt={t("Atelier mobile Pare-Brise Express", "الورشة المتنقلة باري بريز إكسبريس")}
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-x-5 bottom-5 p-4 rounded-[20px] bg-foreground/70 text-background border border-white/[0.08] backdrop-blur-sm">
                <strong className="block text-primary text-sm tracking-[0.08em] uppercase mb-2">
                  {t("Atelier mobile", "الورشة المتنقلة")}
                </strong>
                <span className="text-lg leading-snug">
                  {t(
                    "Une solution flexible pour répondre aux contraintes de temps et de déplacement de nos clients.",
                    "خدمة مرنة تواكب قيود الوقت والتنقل عند العملاء."
                  )}
                </span>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMediaSection;
