import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, PhoneCall, ChevronRight, ChevronLeft, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const assurances = ["ALLIANZ MAROC", "ATLANTA", "SANAD", "AXA ASSURANCE MAROC", "CAT", "RMA", "SANLAM MAROC", "WAFA ASSURANCE"];
const villes = ["Casablanca", "El Jadida", "Mohammedia", "Settat", "Rabat", "Salé", "Kénitra", "Témara", "Marrakech", "Safi", "Essaouira", "Fès", "Meknès", "Taza", "Ifrane", "Tanger", "Tétouan", "Al Hoceïma", "Agadir", "Taroudant", "Tiznit", "Oujda", "Errachidia", "Ouarzazate", "Zagora", "Guelmim", "Tan-Tan", "Sidi Ifni", "Laâyoune", "Boujdour", "Es-Smara", "Dakhla", "Nador", "Berkane", "Béni Mellal", "Khénifra", "Khouribga"];

const TOTAL_STEPS = 5;

const stepLabels = [
  "Assurance",
  "Localisation",
  "Documents",
  "Vitrage",
  "Informations",
];

const Declaration = () => {
  const [step, setStep] = useState(1);
  const [isInsured, setIsInsured] = useState<boolean | null>(null);
  const [assurance, setAssurance] = useState("");
  const [ville, setVille] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", immatriculation: "" });

  const nextStep = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <PageHeader breadcrumb="Déclaration" title="Déclarez un sinistre !" />

      <section className="section-padding py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-serif leading-[1.05] mb-6">
              Un service d'assistance qui fait{" "}
              <span className="italic text-gradient-gold">toute la différence !</span>
            </h2>
            <p className="text-base font-sans text-secondary-foreground leading-[1.9] font-light max-w-2xl mx-auto">
              Déclarer un sinistre n'a jamais été aussi facile : notre service dédié vous guide à chaque étape.
            </p>
          </motion.div>

          {/* Step Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {stepLabels.map((label, i) => {
                const stepNum = i + 1;
                const isActive = step === stepNum;
                const isDone = step > stepNum;
                return (
                  <div key={i} className="flex flex-col items-center flex-1">
                    <div className="flex items-center w-full">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-sans font-semibold transition-all duration-300 mx-auto ${
                          isDone
                            ? "bg-primary text-primary-foreground"
                            : isActive
                            ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {isDone ? <Check size={16} /> : stepNum}
                      </div>
                    </div>
                    <span
                      className={`text-[11px] font-sans mt-2 text-center transition-colors ${
                        isActive || isDone ? "text-primary font-medium" : "text-muted-foreground"
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
            {/* Progress line */}
            <div className="max-w-2xl mx-auto mt-2 px-8">
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${((step - 1) / (TOTAL_STEPS - 1)) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Step Content */}
          <div className="rounded-2xl border border-border/30 bg-surface p-8 md:p-12 min-h-[300px]">
            <AnimatePresence mode="wait">
              {/* Step 1: Assurance */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-serif mb-6">Êtes-vous assuré ?</h3>
                  <div className="flex gap-4 mb-8">
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

                  {isInsured && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <label className="text-sm font-sans font-medium text-foreground mb-3 block">
                        Sélectionnez votre assurance
                      </label>
                      <select
                        value={assurance}
                        onChange={(e) => setAssurance(e.target.value)}
                        className="w-full bg-background border border-border/60 rounded-xl px-6 py-4 text-sm font-sans text-foreground focus:outline-none focus:border-primary/60 transition-colors appearance-none"
                      >
                        <option value="">Sélectionnez votre assurance...</option>
                        {assurances.map((a) => (
                          <option key={a} value={a}>{a}</option>
                        ))}
                      </select>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* Step 2: Ville */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-serif mb-6">Sélectionnez votre ville</h3>
                  <select
                    value={ville}
                    onChange={(e) => setVille(e.target.value)}
                    className="w-full bg-background border border-border/60 rounded-xl px-6 py-4 text-sm font-sans text-foreground focus:outline-none focus:border-primary/60 transition-colors appearance-none"
                  >
                    <option value="">Sélectionnez votre ville...</option>
                    {villes.map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </motion.div>
              )}

              {/* Step 3: Documents */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-serif mb-6">Documents requis</h3>
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
                </motion.div>
              )}

              {/* Step 4: Vitrage */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-serif mb-6">Zone vitrée endommagée</h3>
                  <div className="text-center">
                    <img
                      src="https://parebriseexpress.ma/images/car-declaration.png"
                      alt="Sélection du vitrage"
                      className="max-w-md mx-auto w-full h-auto"
                    />
                    <p className="text-xs font-sans text-muted-foreground mt-4">
                      Veuillez sélectionner la section vitrée endommagée en cliquant sur l'un des cercles jaunes.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Step 5: Client Info */}
              {step === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-serif mb-6">Informations client</h3>
                  <div className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <input
                        type="text"
                        placeholder="Nom Complet"
                        className="w-full bg-background border border-border/60 rounded-xl px-6 py-4 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      <input
                        type="tel"
                        placeholder="Numéro de téléphone"
                        className="w-full bg-background border border-border/60 rounded-xl px-6 py-4 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full bg-background border border-border/60 rounded-xl px-6 py-4 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder="Immatriculation"
                      className="w-full bg-background border border-border/60 rounded-xl px-6 py-4 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                      value={formData.immatriculation}
                      onChange={(e) => setFormData({ ...formData, immatriculation: e.target.value })}
                    />
                  </div>

                  {/* Contact direct */}
                  <div className="mt-8 rounded-xl border border-border/30 bg-background p-6">
                    <h4 className="text-base font-serif mb-4">Échangez directement avec nos conseillers</h4>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="tel:+212522663166"
                        className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary text-primary text-sm font-sans font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        <Phone size={16} />
                        +212 5 22 66 31 66
                      </a>
                      <a
                        href="tel:+212661247009"
                        className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary text-primary text-sm font-sans font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        <PhoneCall size={16} />
                        +212 6 61 24 70 09
                      </a>
                    </div>
                    <p className="text-xs font-sans text-muted-foreground mt-3">
                      De 8:30 à 18:30 du lundi au vendredi et de 09h à 13h le samedi
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-border/20">
              <button
                type="button"
                onClick={prevStep}
                disabled={step === 1}
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-sans font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={16} />
                Précédent
              </button>

              {step < TOTAL_STEPS ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-sans font-semibold hover:bg-primary/90 transition-colors"
                >
                  Suivant
                  <ChevronRight size={16} />
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-sm uppercase tracking-[0.1em] hover:bg-primary/90 transition-colors duration-300"
                >
                  Soumettre la déclaration
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Declaration;
