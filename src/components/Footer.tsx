import { motion } from "framer-motion";
import { Phone, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = [
    { label: t("Accueil", "الرئيسية"), href: "/" },
    { label: t("Qui Sommes Nous?", "من نحن؟"), href: "/institution" },
    { label: t("Engagement", "التزامنا"), href: "/engag" },
    { label: t("Centres", "مراكزنا"), href: "/centres" },
    { label: t("Carrières", "وظائف"), href: "/carrieres" },
    { label: t("Contact", "اتصل بنا"), href: "/contact" },
  ];

  return (
    <footer id="contact">
      {/* CTA */}
      <div className="section-padding py-20 md:py-28 bg-surface border-b border-border/30">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-serif leading-[1.05] mb-8">
              {t("Ensemble, prenons soin", "معاً، لنعتني")}
              <br />
              <span className="italic text-gradient-gold">{t("de votre véhicule", "بسيارتكم")}</span>
            </h2>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-[13px] uppercase tracking-[0.15em] hover:bg-gold-dark transition-colors duration-300"
            >
              {t("Contactez-nous", "اتصلوا بنا")}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="section-padding py-14 md:py-18 bg-foreground">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div>
            <img
              src="https://parebriseexpress.ma/images/logo-bl-mr.png"
              alt="Pare-Brise Express"
              className="h-10 mb-5"
            />
            <ul className="space-y-2">
              {[
                t("Marque certifiée", "علامة معتمدة"),
                t("Réseau d'experts national", "شبكة خبراء وطنية"),
                t("Agréé toutes assurances", "معتمد لدى جميع التأمينات"),
                t("Garantie à vie", "ضمان مدى الحياة"),
              ].map((item) => (
                <li key={item} className="text-[13px] font-sans text-background/40 font-light">{item}</li>
              ))}
            </ul>
            <Link
              to="/centres"
              className="inline-block mt-5 text-[13px] font-sans text-primary hover:underline font-medium"
            >
              {t("Trouver un centre →", "ابحث عن مركز →")}
            </Link>
          </div>

          <div>
            <h4 className="text-[11px] font-sans font-semibold text-background uppercase tracking-[0.25em] mb-5">
              {t("Liens Utiles", "روابط مفيدة")}
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-[13px] font-sans text-background/40 hover:text-primary transition-colors duration-300 flex items-center gap-2 group font-light"
                  >
                    <span className="inline-block w-0 h-px bg-primary group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] font-sans font-semibold text-background uppercase tracking-[0.25em] mb-5">
              Contact
            </h4>
            <div className="space-y-3">
              <a href="tel:+212522663166" className="flex items-center gap-3 text-[13px] font-sans text-background/40 hover:text-primary transition-colors duration-300 font-light">
                <Phone size={14} className="flex-shrink-0 opacity-60" />
                +212 5 22 66 31 66
              </a>
              <a href="tel:+212661247009" className="flex items-center gap-3 text-[13px] font-sans text-background/40 hover:text-primary transition-colors duration-300 font-light">
                <Phone size={14} className="flex-shrink-0 opacity-60" />
                +212 6 61 24 70 09
              </a>
              <div className="flex items-start gap-3 text-[13px] font-sans text-background/40 font-light">
                <MapPin size={14} className="flex-shrink-0 mt-0.5 opacity-60" />
                {t(
                  "Quartier Les Camps, rue Émile Brunet, immeuble Fajr. Ain borja Casablanca",
                  "حي الكامب، شارع إميل برونيه، عمارة الفجر. عين برجة الدار البيضاء"
                )}
              </div>
              <a href="mailto:serviceclient@parebriseexpress.ma" className="flex items-center gap-3 text-[13px] font-sans text-background/40 hover:text-primary transition-colors duration-300 font-light">
                <Mail size={14} className="flex-shrink-0 opacity-60" />
                serviceclient@parebriseexpress.ma
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="section-padding py-5 bg-foreground border-t border-background/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] font-sans text-background/30 tracking-wide">
            © Copyright PARE-BRISE EXPRESS 2025. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/+212661247009"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300"
        aria-label="WhatsApp"
      >
        <img src="https://parebriseexpress.ma/images/whatsapp-40.png" alt="WhatsApp" className="w-7 h-7" />
      </a>
    </footer>
  );
};

export default Footer;
