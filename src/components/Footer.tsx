import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Phone, MapPin, Mail, Instagram, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef } from "react";

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

const FloatingCol = ({ children, depth }: { children: React.ReactNode; depth: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const tx = useTransform(mouseX, [-1, 1], [-6 * depth, 6 * depth]);
  const ty = useTransform(mouseY, [-1, 1], [-4 * depth, 4 * depth]);
  const sx = useSpring(tx, { stiffness: 60, damping: 20 });
  const sy = useSpring(ty, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    const onLeave = () => { mouseX.set(0); mouseY.set(0); };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [mouseX, mouseY]);

  return <motion.div style={{ x: sx, y: sy }}>{children}</motion.div>;
};

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="relative overflow-hidden isolate">
      {/* Large CTA Section */}
      <div className="section-padding py-28 md:py-40 bg-surface border-b border-border/30">
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

      {/* Footer Grid with texture */}
      <div
        className="section-padding py-16 md:py-20 relative"
        style={{
          background: `
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
            linear-gradient(135deg, hsl(0 0% 14%) 0%, hsl(0 0% 16.5%) 100%)
          `,
        }}
      >
        {/* Parallax blobs */}
        <motion.div
          className="absolute rounded-full pointer-events-none z-0"
          style={{
            width: 340, height: 340, top: -30, left: -80, opacity: 0.24,
            background: "radial-gradient(circle, rgba(228,181,44,0.16), transparent 72%)",
            filter: "blur(14px)",
          }}
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full pointer-events-none z-0"
          style={{
            width: 280, height: 280, bottom: -110, right: -60, opacity: 0.18,
            background: "radial-gradient(circle, rgba(228,181,44,0.12), transparent 72%)",
            filter: "blur(14px)",
          }}
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-[1320px] mx-auto relative z-[2]">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr_1.35fr] gap-12 md:gap-[58px]">
            {/* Brand */}
            <FloatingCol depth={3.5}>
              <div>
                <Link to="/" className="inline-block mb-7">
                  <img
                    src="https://parebriseexpress.ma/images/logo-bl-mr.png"
                    alt="Pare-Brise Express"
                    className="h-10 object-contain"
                  />
                </Link>

                <h4 className="text-sm font-extrabold tracking-[0.2em] uppercase text-white mb-7">
                  {t("À propos", "حول")}
                </h4>
                <ul className="grid gap-4 text-[17px] leading-[1.55] text-background/70">
                  {aboutItems.map((item) => (
                    <li key={item.fr}>{t(item.fr, item.ar)}</li>
                  ))}
                </ul>

                <Link
                  to="/centres"
                  className="inline-flex items-center gap-2 mt-4 text-primary font-bold hover:underline"
                >
                  {t("Trouver un centre", "ابحث عن مركز")}
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </FloatingCol>

            {/* Quick Links */}
            <FloatingCol depth={2.8}>
              <div>
                <h4 className="text-sm font-extrabold tracking-[0.2em] uppercase text-white mb-7">
                  {t("Liens utiles", "روابط مفيدة")}
                </h4>
                <ul className="grid gap-4 text-[17px] leading-[1.55]">
                  {footerLinks.map((link) => (
                    <li key={link.labelFr}>
                      <Link
                        to={link.href}
                        className="inline-flex items-center gap-2.5 text-background/70 hover:text-white transition-all duration-200 hover:translate-x-[3px]"
                      >
                        <ArrowUpRight size={14} className="opacity-75 flex-shrink-0" />
                        {t(link.labelFr, link.labelAr)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </FloatingCol>

            {/* Contact */}
            <FloatingCol depth={3.2}>
              <div>
                <h4 className="text-sm font-extrabold tracking-[0.2em] uppercase text-white mb-7">
                  Contact
                </h4>
                <ul className="grid gap-[18px] text-[17px] leading-[1.6] text-background/70">
                  <li className="grid grid-cols-[26px_1fr] gap-3.5 items-start">
                    <Phone size={22} className="mt-0.5 opacity-60" />
                    <a href="tel:+212522663166" className="hover:text-white transition-colors">+212 5 22 66 31 66</a>
                  </li>
                  <li className="grid grid-cols-[26px_1fr] gap-3.5 items-start">
                    <Phone size={22} className="mt-0.5 opacity-60" />
                    <a href="tel:+212661247009" className="hover:text-white transition-colors">+212 6 61 24 70 09</a>
                  </li>
                  <li className="grid grid-cols-[26px_1fr] gap-3.5 items-start">
                    <MapPin size={22} className="mt-0.5 opacity-60" />
                    <span>{t(
                      "Quartier Les Camps, rue Émile Brunet, immeuble Fajr, Ain Borja, Casablanca",
                      "حي المخيمات، شارع إميل برونيه، عمارة الفجر، عين برجة، الدار البيضاء"
                    )}</span>
                  </li>
                  <li className="grid grid-cols-[26px_1fr] gap-3.5 items-start">
                    <Mail size={22} className="mt-0.5 opacity-60" />
                    <a href="mailto:serviceclient@parebriseexpress.ma" className="hover:text-white transition-colors">
                      serviceclient@parebriseexpress.ma
                    </a>
                  </li>
                </ul>
              </div>
            </FloatingCol>
          </div>

          {/* Bottom bar */}
          <div className="mt-[42px] pt-6 border-t border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-[18px] text-sm text-background/55">
            <span>© 2025 Pare-Brise Express. All Rights Reserved.</span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/parebriseexpress/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[42px] h-[42px] grid place-items-center rounded-full border border-white/[0.08] bg-white/[0.04] hover:-translate-y-[3px] hover:border-primary/35 hover:bg-primary/10 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-white" />
              </a>
            </div>
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
