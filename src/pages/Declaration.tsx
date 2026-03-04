import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, PhoneCall } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const assurances = ["ALLIANZ MAROC", "ATLANTA", "SANAD", "AXA ASSURANCE MAROC", "CAT", "RMA", "SANLAM MAROC", "WAFA ASSURANCE"];
const villes = ["Casablanca", "El Jadida", "Mohammedia", "Settat", "Rabat", "Salé", "Kénitra", "Témara", "Marrakech", "Safi", "Essaouira", "Fès", "Meknès", "Taza", "Ifrane", "Tanger", "Tétouan", "Al Hoceïma", "Agadir", "Taroudant", "Tiznit", "Oujda", "Errachidia", "Ouarzazate", "Zagora", "Guelmim", "Tan-Tan", "Sidi Ifni", "Laâyoune", "Boujdour", "Es-Smara", "Dakhla", "Nador", "Berkane", "Béni Mellal", "Khénifra", "Khouribga"];

const Declaration = () => {
  const [isInsured, setIsInsured] = useState<boolean | null>(null);
  const [assurance, setAssurance] = useState("");
  const [ville, setVille] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", immatriculation: "" });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <PageHeader breadcrumb="Déclaration" title="Déclarez un sinistre !" />

      {/* Intro */}
      <section className="section-padding py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif leading-[1.05] mb-8">
              Un service d'assistance qui fait{" "}
              <span className="italic text-gradient-gold">toute la différence !</span>
            </h2>
            <div className="max-w-2xl mx-auto p-8 rounded-2xl border border-border/30 bg-surface">
              <p className="text-base font-sans text-secondary-foreground leading-[1.9] font-light mb-4">
                Déclarer un sinistre n'a jamais été aussi facile : notre service dédié vous guide à chaque étape, rendant vos démarches simples et rapides !
              </p>
              <p className="text-base font-sans text-secondary-foreground leading-[1.9] font-light">
                Profitez d'une expérience simplifiée et sereine avec notre équipe dédiée. Grâce à la qualité de notre service, nos clients nous font confiance et nous recommandent à leur entourage.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Insurance */}
            <div>
              <label className="text-sm font-sans font-medium text-foreground mb-3 block">
                Êtes-vous assuré ?
              </label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setIsInsured(true)}
                  className={`px-8 py-3 rounded-full text-sm font-sans font-medium transition-all duration-300 ${
                    isInsured === true
                      ? "bg-primary text-primary-foreground"
                      : "border border-border/60 text-muted-foreground hover:border-primary/60"
                  }`}
                >
                  Oui
                </button>
                <button
                  type="button"
                  onClick={() => setIsInsured(false)}
                  className={`px-8 py-3 rounded-full text-sm font-sans font-medium transition-all duration-300 ${
                    isInsured === false
                      ? "bg-primary text-primary-foreground"
                      : "border border-border/60 text-muted-foreground hover:border-primary/60"
                  }`}
                >
                  Non
                </button>
              </div>
            </div>

            {isInsured && (
              <div>
                <label className="text-sm font-sans font-medium text-foreground mb-3 block">
                  Sélectionnez votre assurance
                </label>
                <select
                  value={assurance}
                  onChange={(e) => setAssurance(e.target.value)}
                  className="w-full bg-surface border border-border/60 rounded-xl px-6 py-4 text-sm font-sans text-foreground focus:outline-none focus:border-primary/60 transition-colors appearance-none"
                >
                  <option value="">Sélectionnez votre assurance...</option>
                  {assurances.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label className="text-sm font-sans font-medium text-foreground mb-3 block">
                Sélectionnez votre ville
              </label>
              <select
                value={ville}
                onChange={(e) => setVille(e.target.value)}
                className="w-full bg-surface border border-border/60 rounded-xl px-6 py-4 text-sm font-sans text-foreground focus:outline-none focus:border-primary/60 transition-colors appearance-none"
              >
                <option value="">Sélectionnez votre ville...</option>
                {villes.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>

            {/* Documents */}
            <div>
              <label className="text-sm font-sans font-medium text-foreground mb-3 block">
                Documents requis
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Carte Grise", "Constat", "Assurance", "Permis"].map((doc) => (
                  <div key={doc} className="border-2 border-dashed border-border/60 rounded-xl p-6 text-center hover:border-primary/40 transition-colors duration-300 cursor-pointer">
                    <p className="text-xs font-sans font-medium text-foreground mb-2">{doc}</p>
                    <label className="text-[11px] font-sans text-primary cursor-pointer">
                      Télécharger
                      <input type="file" className="hidden" accept="image/*,.pdf" />
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Car vitrage selection */}
            <div>
              <label className="text-sm font-sans font-medium text-foreground mb-3 block">
                Zone vitrée endommagée
              </label>
              <div className="rounded-2xl border border-border/30 bg-surface p-6 text-center">
                <img
                  src="https://parebriseexpress.ma/images/car-declaration.png"
                  alt="Sélection du vitrage"
                  className="max-w-md mx-auto w-full h-auto opacity-80"
                />
                <p className="text-xs font-sans text-muted-foreground mt-4">
                  Veuillez sélectionner la section vitrée endommagée en cliquant sur l'un des cercles jaunes mis en évidence sur l'image de la voiture.
                </p>
              </div>
            </div>

            {/* Client Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-serif">Informations client</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Nom Complet"
                  className="w-full bg-surface border border-border/60 rounded-xl px-6 py-4 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="tel"
                  placeholder="Numéro de téléphone"
                  className="w-full bg-surface border border-border/60 rounded-xl px-6 py-4 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-surface border border-border/60 rounded-xl px-6 py-4 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="text"
                placeholder="Immatriculation"
                className="w-full bg-surface border border-border/60 rounded-xl px-6 py-4 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                value={formData.immatriculation}
                onChange={(e) => setFormData({ ...formData, immatriculation: e.target.value })}
              />
            </div>

            {/* Contact direct */}
            <div className="rounded-2xl border border-border/30 bg-surface p-8">
              <h3 className="text-lg font-serif mb-6">Échangez directement avec nos conseillers</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+212522663166"
                  className="flex items-center gap-3 px-6 py-3 rounded-full border border-primary text-primary text-sm font-sans font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <Phone size={16} />
                  +212 5 22 66 31 66
                </a>
                <a
                  href="tel:+212661247009"
                  className="flex items-center gap-3 px-6 py-3 rounded-full border border-primary text-primary text-sm font-sans font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <PhoneCall size={16} />
                  +212 6 61 24 70 09
                </a>
              </div>
              <p className="text-xs font-sans text-muted-foreground mt-4">
                De 8:30 à 18:30 du lundi au vendredi et de 09h à 13h le samedi
              </p>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-[13px] uppercase tracking-[0.15em] hover:bg-gold-dark transition-colors duration-300"
            >
              Soumettre la déclaration
            </button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Declaration;
