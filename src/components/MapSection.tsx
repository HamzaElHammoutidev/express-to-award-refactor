import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const MapSection = () => {
  const { t } = useLanguage();

  return (
    <section id="centres" className="py-14 md:py-20 section-padding relative overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">
              {t("Notre réseau", "شبكتنا")}
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.05] mb-6">
              {t("Un réseau de centres", "شبكة مراكز")}
              <br />
              <span className="italic text-gradient-gold">
                {t("à travers tout le Maroc", "عبر كل المغرب")}
              </span>
            </h2>
            <p className="text-base font-sans text-secondary-foreground leading-[1.9] font-light mb-8 max-w-lg">
              {t(
                "Avec plus de 80 centres techniques et ateliers mobiles répartis sur l'ensemble du territoire marocain, Pare-Brise Express est toujours à proximité pour intervenir rapidement.",
                "مع أكثر من 80 مركزًا تقنيًا وورشة متنقلة موزعة على كامل التراب المغربي، بار بريز إكسبرس دائمًا بالقرب منكم للتدخل السريع."
              )}
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/centres"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-[13px] uppercase tracking-[0.15em] hover:bg-gold-dark transition-colors duration-300"
              >
                <MapPin size={16} />
                {t("Trouver un centre", "ابحث عن مركز")}
              </Link>
            </div>

            {/* Quick stats */}
            <div className="flex items-center gap-8 mt-10 pt-8 border-t border-border/30">
              <div>
                <span className="text-3xl font-serif text-gradient-gold">80+</span>
                <p className="text-[11px] font-sans text-muted-foreground mt-1 uppercase tracking-wider">
                  {t("Centres", "مراكز")}
                </p>
              </div>
              <div className="w-px h-10 bg-border/40" />
              <div>
                <span className="text-3xl font-serif text-gradient-gold">12</span>
                <p className="text-[11px] font-sans text-muted-foreground mt-1 uppercase tracking-wider">
                  {t("Régions", "جهات")}
                </p>
              </div>
              <div className="w-px h-10 bg-border/40" />
              <div>
                <span className="text-3xl font-serif text-gradient-gold">24/7</span>
                <p className="text-[11px] font-sans text-muted-foreground mt-1 uppercase tracking-wider">
                  {t("Disponible", "متاح")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Dynamic Map */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-3xl overflow-hidden border border-border/30 bg-card aspect-[3/4] lg:aspect-[4/5]">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1mKXMR_VgSsSCfnmMOCKqBCvF6gU&ehbc=2E312F&noprof=1&z=5&ll=31.7917,-7.0926"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t("Carte des centres Pare-Brise Express", "خريطة مراكز بار بريز إكسبرس")}
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
