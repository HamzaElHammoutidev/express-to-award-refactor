import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const VideoSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-16 section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">
            {t("En action", "في الميدان")}
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.05]">
            {t("Découvrez", "اكتشفوا")}{" "}
            <span className="italic text-gradient-gold">{t("notre expertise", "خبرتنا")}</span>
          </h2>
        </motion.div>

        <motion.div
          className="relative rounded-2xl overflow-hidden aspect-video border border-border/30"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <video
            controls
            playsInline
            className="w-full h-full object-cover"
            poster="https://parebriseexpress.ma/images/assets/bpe-rca.jpg"
          >
            <source
              src="/videos/hero-video.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
