import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Headphones, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const contactInfo = [
  {
    icon: MapPin,
    title: "Notre Adresse",
    lines: ["Quartier Les Camps, rue Émile Brunet,", "immeuble Fajr. Ain borja, Casablanca"],
  },
  {
    icon: Phone,
    title: "Informations de Contact",
    lines: ["Appelez-nous", "+212 5 22 66 31 66", "Ouvrez un chat", "+212 6 61 24 70 09"],
    links: [null, "tel:+212522663166", null, "tel:+212661247009"],
  },
  {
    icon: Headphones,
    title: "Support en Direct",
    lines: ["service de chat en direct", "serviceclient@parebriseexpress.ma"],
    links: [null, "mailto:serviceclient@parebriseexpress.ma"],
  },
];

const faqs = [
  { q: "Les délais pour une intervention", a: "Pour les délais d'intervention, la réparation prend entre 1h et 1h30 pour les véhicules de tourisme, et entre 2h et 2h30 maximum pour les camions et les autocars." },
  { q: "La prise en charge par l'assurance", a: "Nous collaborons avec toutes les compagnies d'assurance." },
  { q: "Les zones géographiques couvertes par nos services", a: "Nos services sont disponibles partout au Maroc." },
  { q: "Les frais pour une intervention Atelier mobile", a: "L'intervention via notre service atelier mobile est Gratuite." },
  { q: "Quels documents fournir pour une prise en charge rapide", a: "Que ce soit pour une prise en charge par l'assurance ou pour un particulier, il suffit de préciser le type de traitement et de fournir vos coordonnées afin que nous puissions vous appeler, et éviter de partager des documents confidentiels sur le site." },
  { q: "Offrez-vous une garantie sur vos réparations ou remplacements ?", a: "Oui, nous offrons une garantie à vie (Sur l'étanchéité et le défaut de montage)." },
  { q: "Utilisez-vous des vitrages certifiés ou d'origine constructeur ?", a: "Chez Pare-Brise Express, nous garantissons des vitrages automobiles de qualité, conformes aux spécifications automobiles qui répondent aux standards internationaux et à la norme européenne." },
  { q: "La réparation des impacts", a: "Nous réalisons des réparations rapides des impacts en 30 minutes, grâce à de nouvelles techniques exclusives." },
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <PageHeader breadcrumb="Contact" title="Obtenez toutes nos informations." />

      {/* Contact Cards */}
      <section className="section-padding py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                className="text-center p-10 rounded-2xl border border-border/30 bg-surface"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <info.icon className="w-10 h-10 text-primary mx-auto mb-6" />
                <h3 className="text-lg font-serif mb-4">{info.title}</h3>
                <div className="space-y-1">
                  {info.lines.map((line, j) => (
                    info.links && info.links[j] ? (
                      <a key={j} href={info.links[j]!} className="block text-sm font-sans text-primary hover:underline font-medium">
                        {line}
                      </a>
                    ) : (
                      <p key={j} className="text-sm font-sans text-muted-foreground font-light">{line}</p>
                    )
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section-padding py-20 md:py-32 bg-surface">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-serif leading-[1.05]">
              Des questions? <span className="italic text-gradient-gold">Contactez-nous</span>
            </h2>
          </motion.div>

          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Nom Complet"
              className="w-full bg-card border border-border/60 rounded-xl px-6 py-4 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-card border border-border/60 rounded-xl px-6 py-4 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <textarea
              placeholder="Votre message..."
              rows={5}
              className="w-full bg-card border border-border/60 rounded-xl px-6 py-4 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <button
              type="submit"
              className="w-full px-8 py-4 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-[13px] uppercase tracking-[0.15em] hover:bg-gold-dark transition-colors duration-300"
            >
              Envoyer le message
            </button>
          </motion.form>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Questions fréquentes
            </p>
            <h2 className="text-3xl md:text-5xl font-serif leading-[1.05]">
              <span className="italic text-gradient-gold">FAQ</span>
            </h2>
          </motion.div>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="border-t border-border/60"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 md:py-8 group text-left"
                >
                  <h3 className="text-base md:text-lg font-serif group-hover:text-primary transition-colors duration-300 pr-4">
                    {faq.q}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 ${openFaq === i ? "rotate-180 text-primary" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm font-sans text-secondary-foreground leading-[1.8] pb-8 font-light">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
            <div className="border-t border-border/60" />
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-base font-sans text-muted-foreground mb-4">
              Vous n'avez pas obtenu votre réponse ?
            </p>
            <a
              href="#contact-form"
              className="inline-block px-8 py-4 rounded-full border border-primary text-primary font-sans font-semibold text-[13px] uppercase tracking-[0.15em] hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              Contactez-nous
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
