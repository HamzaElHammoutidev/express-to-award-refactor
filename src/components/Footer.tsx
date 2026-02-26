import { motion } from "framer-motion";
import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-darker-surface border-t border-border">
      {/* CTA Banner */}
      <div className="section-padding py-20 md:py-32">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight mb-8">
              Ensemble, prenons soin
              <br />
              <span className="italic text-gradient-gold">de votre véhicule</span>
            </h2>
            <a
              href="https://parebriseexpress.ma/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-sm uppercase tracking-widest hover:bg-gold-dark transition-colors"
            >
              Contactez-nous
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="section-padding py-16 border-t border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <img
              src="https://parebriseexpress.ma/images/logo-bl-mr.png"
              alt="Pare-Brise Express"
              className="h-12 mb-6"
            />
            <ul className="space-y-2 text-sm font-sans text-muted-foreground">
              <li>Marque certifiée</li>
              <li>Réseau d'experts national</li>
              <li>Agréé toutes assurances</li>
              <li>Garantie à vie</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-sans font-semibold text-foreground uppercase tracking-widest mb-6">
              Liens Utiles
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Accueil", href: "#" },
                { label: "Qui Sommes Nous?", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Centres", href: "#centres" },
                { label: "Carrières", href: "#carrieres" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-sans text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="inline-block w-0 h-px bg-primary group-hover:w-4 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-sans font-semibold text-foreground uppercase tracking-widest mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+212522663166"
                className="flex items-center gap-3 text-sm font-sans text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} />
                +212 5 22 66 31 66
              </a>
              <a
                href="tel:+212661247009"
                className="flex items-center gap-3 text-sm font-sans text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} />
                +212 6 61 24 70 09
              </a>
              <div className="flex items-start gap-3 text-sm font-sans text-muted-foreground">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                Quartier Les Camps, rue Émile Brunet, immeuble Fajr. Ain borja Casablanca
              </div>
              <a
                href="mailto:serviceclient@parebriseexpress.ma"
                className="flex items-center gap-3 text-sm font-sans text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} />
                serviceclient@parebriseexpress.ma
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="section-padding py-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-sans text-muted-foreground">
            © Copyright PARE-BRISE EXPRESS 2025. All Rights Reserved.
          </p>
          <a
            href="https://wa.me/+212661247009"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <img
              src="https://parebriseexpress.ma/images/whatsapp-40.png"
              alt="WhatsApp"
              className="w-8 h-8"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
