import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import engagementCentre from "@/assets/engagement-centre.jpg";
import engagementStock from "@/assets/engagement-stock.jpg";
import engagementAccueil from "@/assets/engagement-accueil.jpg";
import engagementIntervention from "@/assets/engagement-intervention.jpg";

const images = [
  {
    src: engagementCentre,
    labelFr: "Notre centre de stockage & distribution",
    labelAr: "مركز التخزين والتوزيع",
  },
  {
    src: engagementStock,
    labelFr: "Un stock de plus de 15 000 références",
    labelAr: "مخزون يضم أكثر من 15,000 مرجع",
  },
  {
    src: engagementAccueil,
    labelFr: "Un accueil professionnel & personnalisé",
    labelAr: "استقبال احترافي ومخصص",
  },
  {
    src: engagementIntervention,
    labelFr: "Des techniciens certifiés à votre service",
    labelAr: "تقنيون معتمدون في خدمتكم",
  },
];

const EngagementGallerySection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            {t("En images", "بالصور")}
          </span>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight">
            {t("Découvrez nos ", "اكتشفوا ")}
            <span className="text-primary italic">{t("installations", "منشآتنا")}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="group relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[3/4] md:aspect-[3/4] bg-muted"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img
                src={img.src}
                alt={t(img.labelFr, img.labelAr)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
                <p className="text-background text-xs md:text-sm font-semibold leading-snug">
                  {t(img.labelFr, img.labelAr)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementGallerySection;
