import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Instagram, Facebook, Linkedin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const footerLinks = [
  { labelFr: "Accueil", labelAr: "الرئيسية", href: "/" },
  { labelFr: "Qui Sommes Nous?", labelAr: "من نحن؟", href: "/institution" },
  { labelFr: "Engagement", labelAr: "التزامنا", href: "/engag" },
  { labelFr: "Centres", labelAr: "المراكز", href: "/centres" },
  { labelFr: "Carrières", labelAr: "وظائف", href: "/carrieres" },
  { labelFr: "Contactez-Nous", labelAr: "اتصل بنا", href: "/contact" },
];

const aboutItems = [
  { fr: "Marque certifiée", ar: "علامة معتمدة" },
  { fr: "Réseau d'experts à l'échelle nationale", ar: "شبكة خبراء وطنية" },
  { fr: "Agréé toutes assurances", ar: "معتمد لدى جميع شركات التأمين" },
  { fr: "Garantie à vie", ar: "ضمان مدى الحياة" },
];

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Large CTA Section */}
      <div className="section-padding py-16 md:py-28 bg-surface border-b border-border/30">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-serif leading-[1.05] mb-10">
              {t("Ensemble, prenons soin", "معًا، لنعتني")}
              <br />
              <span className="italic text-gradient-gold">
                {t("de votre véhicule", "بسيارتكم")}
              </span>
            </h2>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-[13px] uppercase tracking-[0.15em] hover:bg-gold-dark transition-colors duration-300"
            >
              {t("Contactez-nous", "اتصل بنا")}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Footer Grid with dark geometric texture */}
      <div
        className="section-padding py-16 md:py-20 relative"
        style={{
          background: `
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23282828'/%3E%3Cstop offset='100%25' stop-color='%231a1a1a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='400' height='400'/%3E%3Cpolygon fill='%23222' points='200,0 400,150 350,400 50,400 0,150'/%3E%3Cpolygon fill='%23252525' opacity='.7' points='100,20 300,80 350,300 150,380 20,250'/%3E%3Cpolygon fill='%231e1e1e' opacity='.5' points='300,0 400,200 300,400 200,350 250,100'/%3E%3Cpolygon fill='%23232323' opacity='.6' points='0,100 150,50 200,200 100,350 0,300'/%3E%3Cpolygon fill='%232a2a2a' opacity='.4' points='50,0 200,100 150,250 0,200'/%3E%3Cpolygon fill='%23262626' opacity='.3' points='400,0 400,100 300,200 350,50'/%3E%3Cpolygon fill='%23202020' opacity='.35' points='250,300 400,350 400,400 200,400'/%3E%3Cpolygon fill='%23272727' opacity='.25' points='0,350 100,300 200,400 0,400'/%3E%3C/svg%3E"),
            linear-gradient(135deg, hsl(0 0% 13%) 0%, hsl(0 0% 16%) 100%)
          `,
          backgroundSize: "400px 400px, 100% 100%",
        }}
      >
        <div className="max-w-[1320px] mx-auto relative z-[2]">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr_1.35fr] gap-12 md:gap-[58px]">
            {/* Brand */}
            <div>
              <Link to="/" className="inline-block mb-7">
                <img
                  src="https://parebriseexpress.ma/images/logo-bl-mr.png"
                  alt="Pare-Brise Express"
                  className="h-10 object-contain"
                />
              </Link>

              <h4 className="text-primary text-lg font-bold italic mb-5">
                {t("À propos", "حول")}
              </h4>
              <ul className="grid gap-3 text-[17px] leading-[1.55] text-background/70">
                {aboutItems.map((item) => (
                  <li key={item.fr}>{t(item.fr, item.ar)}</li>
                ))}
              </ul>

              <Link
                to="/centres"
                className="inline-flex items-center gap-2 mt-5 px-6 py-2.5 border-2 border-primary text-primary font-extrabold text-xs uppercase tracking-[0.15em] hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                {t("Trouver un centre", "ابحث عن مركز")}
              </Link>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-extrabold text-white mb-7">
                {t("Liens Utiles", "روابط مفيدة")}
              </h4>
              <ul className="grid gap-4 text-[17px] leading-[1.55]">
                {footerLinks.map((link) => (
                  <li key={link.labelFr}>
                    <Link
                      to={link.href}
                      className="inline-flex items-center gap-2.5 text-primary hover:text-white transition-all duration-200 hover:translate-x-[3px] font-semibold"
                    >
                      <ArrowUpRight size={16} className="flex-shrink-0" />
                      {t(link.labelFr, link.labelAr)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <ul className="grid gap-[18px] text-[15px] md:text-[17px] leading-[1.6] text-background/70">
                <li className="grid grid-cols-[26px_1fr] gap-3.5 items-start">
                  <Phone size={22} className="mt-0.5 text-primary" />
                  <div>
                    <span className="text-primary font-bold text-sm">Service Client:</span>
                    <a href="tel:+212522663166" className="block hover:text-white transition-colors">+212 5 22 66 31 66</a>
                  </div>
                </li>
                <li className="grid grid-cols-[26px_1fr] gap-3.5 items-start">
                  <Phone size={22} className="mt-0.5 text-primary" />
                  <div>
                    <span className="text-primary font-bold text-sm">Service Client:</span>
                    <a href="tel:+212661247009" className="block hover:text-white transition-colors">+212 6 61 24 70 09</a>
                  </div>
                </li>
                <li className="grid grid-cols-[26px_1fr] gap-3.5 items-start">
                  <MapPin size={22} className="mt-0.5 text-primary" />
                  <span>{t(
                    "Quartier Les Camps, rue Émile Brunet, immeuble Fajr. Ain borja Casablanca",
                    "حي المخيمات، شارع إميل برونيه، عمارة الفجر، عين برجة، الدار البيضاء"
                  )}</span>
                </li>
                <li className="grid grid-cols-[26px_1fr] gap-3.5 items-start">
                  <Mail size={22} className="mt-0.5 text-primary" />
                  <a href="mailto:serviceclient@parebriseexpress.ma" className="hover:text-white transition-colors">
                    serviceclient@parebriseexpress.ma
                  </a>
                </li>
              </ul>

              {/* Social icons */}
              <div className="flex items-center gap-3 mt-6">
                {[
                  { icon: <Facebook size={18} />, href: "https://www.facebook.com/parebriseexpress", label: "Facebook" },
                  { icon: <Instagram size={18} />, href: "https://www.instagram.com/parebriseexpress/", label: "Instagram" },
                  { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/company/parebriseexpress", label: "LinkedIn" },
                  { icon: <TikTokIcon />, href: "https://www.tiktok.com/@parebriseexpress", label: "TikTok" },
                  { icon: <YoutubeIcon />, href: "https://www.youtube.com/@parebriseexpress", label: "YouTube" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[42px] h-[42px] grid place-items-center rounded-full border border-primary/40 text-primary hover:-translate-y-[3px] hover:bg-primary/10 transition-all duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-[42px] pt-6 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-center gap-[18px] text-xs md:text-sm text-background/55 text-center">
            <span>© Copyright <span className="text-primary font-semibold">PARE-BRISE EXPRESS</span> 2025. All Rights Reserved.</span>
          </div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/+212661247009"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <img
          src="https://parebriseexpress.ma/images/whatsapp-40.png"
          alt="WhatsApp"
          className="w-7 h-7"
        />
      </a>
    </footer>
  );
};

export default Footer;
