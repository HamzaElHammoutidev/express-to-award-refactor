import { motion } from "framer-motion";
import { Phone, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Accueil", href: "/" },
  { label: "Qui Sommes Nous?", href: "/institution" },
  { label: "Engagement", href: "/engag" },
  { label: "Centres", href: "/centres" },
  { label: "Carrières", href: "/carrieres" },
  { label: "Contactez-Nous", href: "/contact" },
];

const Footer = () => {
  return (
    <footer id="contact">
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
              Ensemble, prenons soin
              <br />
              <span className="italic text-gradient-gold">de votre véhicule</span>
            </h2>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-[13px] uppercase tracking-[0.15em] hover:bg-gold-dark transition-colors duration-300"
            >
              Contactez-nous
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Footer Grid - dark background */}
      <div className="section-padding py-16 md:py-20 bg-[hsl(0,0%,15%)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Logo & Brand */}
          <div>
            <img
              src="https://parebriseexpress.ma/images/logo-bl-mr.png"
              alt="Pare-Brise Express"
              className="h-10 mb-6"
            />
            <ul className="space-y-2.5">
              {["Marque certifiée", "Réseau d'experts national", "Agréé toutes assurances", "Garantie à vie"].map(
                (item) => (
                  <li key={item} className="text-[13px] font-sans text-gray-400 font-light">
                    {item}
                  </li>
                )
              )}
            </ul>
            <Link
              to="/centres"
              className="inline-block mt-6 text-[13px] font-sans text-primary hover:underline font-medium"
            >
              Trouver un centre →
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-sans font-semibold text-white uppercase tracking-[0.25em] mb-6">
              Liens Utiles
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-[13px] font-sans text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2 group font-light"
                  >
                    <span className="inline-block w-0 h-px bg-primary group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-sans font-semibold text-white uppercase tracking-[0.25em] mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+212522663166"
                className="flex items-center gap-3 text-[13px] font-sans text-gray-400 hover:text-primary transition-colors duration-300 font-light"
              >
                <Phone size={14} className="flex-shrink-0 opacity-60" />
                +212 5 22 66 31 66
              </a>
              <a
                href="tel:+212661247009"
                className="flex items-center gap-3 text-[13px] font-sans text-gray-400 hover:text-primary transition-colors duration-300 font-light"
              >
                <Phone size={14} className="flex-shrink-0 opacity-60" />
                +212 6 61 24 70 09
              </a>
              <div className="flex items-start gap-3 text-[13px] font-sans text-gray-400 font-light">
                <MapPin size={14} className="flex-shrink-0 mt-0.5 opacity-60" />
                Quartier Les Camps, rue Émile Brunet, immeuble Fajr. Ain borja Casablanca
              </div>
              <a
                href="mailto:serviceclient@parebriseexpress.ma"
                className="flex items-center gap-3 text-[13px] font-sans text-gray-400 hover:text-primary transition-colors duration-300 font-light"
              >
                <Mail size={14} className="flex-shrink-0 opacity-60" />
                serviceclient@parebriseexpress.ma
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright - darker */}
      <div className="section-padding py-6 bg-[hsl(0,0%,10%)] border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-sans text-gray-500 tracking-wide">
            © Copyright PARE-BRISE EXPRESS 2025. All Rights Reserved.
          </p>
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
