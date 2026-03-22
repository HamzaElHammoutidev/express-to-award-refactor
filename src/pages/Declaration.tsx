import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, PhoneCall, ChevronRight, ChevronLeft, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const assurances = ["ALLIANZ MAROC", "ATLANTASANAD", "AXA ASSURANCE MAROC", "CAT", "RMA", "SANLAM MAROC", "WAFA ASSURANCE"];
const villes = ["Casablanca", "El Jadida", "Mohammedia", "Settat", "Rabat", "Salé", "Kénitra", "Témara", "Marrakech", "Safi", "Essaouira", "Fès", "Meknès", "Taza", "Ifrane", "Tanger", "Tétouan", "Al Hoceïma", "Agadir", "Taroudant", "Tiznit", "Oujda", "Errachidia", "Ouarzazate", "Zagora", "Guelmim", "Tan-Tan", "Sidi Ifni", "Laâyoune", "Boujdour", "Es-Smara", "Dakhla", "Nador", "Berkane", "Béni Mellal", "Khénifra", "Khouribga"];

const vitrageAreas = [
  { id: "pare-brise", label: "Pare-brise", top: "27.5%", left: "45.5%" },
  { id: "vitre-gauche", label: "Vitre latérale gauche", top: "49%", left: "29.25%" },
  { id: "vitre-droite", label: "Vitre latérale droite", top: "49%", left: "61%" },
  { id: "lunette-arriere", label: "Lunette arrière", top: "73.5%", left: "45.5%" },
  { id: "vitre-toit", label: "Vitre Toit", top: "51.25%", left: "45.5%" },
];

const TOTAL_STEPS = 3;

const stepLabels = ["Assurance & Localisation", "Vitrage", "Informations"];

const Declaration = () => {
  const [step, setStep] = useState(1);
  const [isInsured, setIsInsured] = useState<boolean | null>(null);
  const [assurance, setAssurance] = useState("");
  const [ville, setVille] = useState("");
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [multiSelect, setMultiSelect] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", immatriculation: "" });

  const nextStep = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleAreaClick = (areaId: string) => {
    if (multiSelect) {
      setSelectedAreas((prev) =>
        prev.includes(areaId) ? prev.filter((a) => a !== areaId) : [...prev, areaId]
      );
    } else {
      setSelectedAreas([areaId]);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <PageHeader breadcrumbs={[{ label: "Déclaration" }]} title="Déclarez un sinistre !" />

      <section className="section-padding py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-4xl font-serif leading-[1.05] mb-4">
              Un service d'assistance qui fait{" "}
              <span className="italic text-gradient-gold">toute la différence !</span>
            </h2>
          </motion.div>

          {/* Step Progress Bar */}
          <div className="mb-10">
            <div className="flex items-center justify-between max-w-lg mx-auto">
              {stepLabels.map((label, i) => {
                const stepNum = i + 1;
                const isActive = step === stepNum;
                const isDone = step > stepNum;
                return (
                  <div key={i} className="flex flex-col items-center flex-1">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-sans font-semibold transition-all duration-300 ${
                        isDone
                          ? "bg-primary text-primary-foreground"
                          : isActive
                          ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {isDone ? <Check size={16} /> : stepNum}
                    </div>
                    <span
                      className={`text-[10px] md:text-[11px] font-sans mt-2 text-center transition-colors ${
                        isActive || isDone ? "text-primary font-medium" : "text-muted-foreground"
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="max-w-lg mx-auto mt-2 px-8">
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${((step - 1) / (TOTAL_STEPS - 1)) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Step Content */}
          <div className="rounded-2xl border border-border/30 bg-surface p-6 md:p-10 min-h-[300px]">
            <AnimatePresence mode="wait">
              {/* Step 1: Assurance + Ville */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <p className="text-sm md:text-base font-sans text-secondary-foreground leading-[1.8] font-light">
                    Déclarer un sinistre n'a jamais été aussi facile : notre service dédié vous guide à chaque étape, rendant vos démarches simples et rapides !
                  </p>
                  <p className="text-sm md:text-base font-sans text-secondary-foreground leading-[1.8] font-light">
                    Profitez d'une expérience simplifiée et sereine avec notre équipe dédiée. Grâce à la qualité de notre service, nos clients nous font confiance et nous recommandent à leur entourage.
                  </p>

                  {/* Assuré */}
                  <div>
                    <h3 className="text-base font-sans font-semibold mb-3">Êtes-vous assuré ?</h3>
                    <div className="flex gap-4 mb-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="insured"
                          checked={isInsured === true}
                          onChange={() => setIsInsured(true)}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="text-sm font-sans">Oui</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="insured"
                          checked={isInsured === false}
                          onChange={() => setIsInsured(false)}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="text-sm font-sans">Non</span>
                      </label>
                    </div>
                  </div>

                  {isInsured && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                      <label className="text-sm font-sans font-semibold text-foreground mb-2 block">
                        Sélectionnez votre assurance
                      </label>
                      <select
                        value={assurance}
                        onChange={(e) => setAssurance(e.target.value)}
                        className="w-full bg-background border border-border/60 rounded-xl px-4 py-3 text-sm font-sans text-foreground focus:outline-none focus:border-primary/60 transition-colors"
                      >
                        <option value="">Sélectionnez votre assurance...</option>
                        {assurances.map((a) => (
                          <option key={a} value={a}>{a}</option>
                        ))}
                      </select>
                    </motion.div>
                  )}

                  {/* Ville */}
                  <div>
                    <label className="text-sm font-sans font-semibold text-foreground mb-2 block">
                      Sélectionnez votre ville
                    </label>
                    <select
                      value={ville}
                      onChange={(e) => setVille(e.target.value)}
                      className="w-full bg-background border border-border/60 rounded-xl px-4 py-3 text-sm font-sans text-foreground focus:outline-none focus:border-primary/60 transition-colors"
                    >
                      <option value="">Sélectionnez votre ville...</option>
                      {villes.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Vitrage - exact replica of original */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Left: Car image with clickable areas */}
                    <div className="relative">
                      <img
                        src="https://parebriseexpress.ma/images/car-declaration.png"
                        alt="Sélection du vitrage"
                        className="w-full h-auto"
                      />
                      {/* Clickable circles */}
                      {vitrageAreas.map((area) => (
                        <button
                          key={area.id}
                          type="button"
                          onClick={() => handleAreaClick(area.id)}
                          className={`absolute w-6 h-6 md:w-7 md:h-7 rounded-full border-2 transition-all duration-300 -translate-x-1/2 -translate-y-1/2 ${
                            selectedAreas.includes(area.id)
                              ? "bg-primary border-primary scale-110 shadow-lg shadow-primary/40"
                              : "bg-primary/60 border-primary/80 hover:bg-primary hover:scale-110"
                          }`}
                          style={{ top: area.top, left: area.left }}
                          title={area.label}
                        />
                      ))}
                    </div>

                    {/* Right: Instructions + selection */}
                    <div className="space-y-4">
                      <p className="text-sm font-sans text-secondary-foreground leading-relaxed">
                        Veuillez sélectionner la section vitrée endommagée en cliquant sur l'un des cercles jaunes mis en évidence sur l'image de la voiture.
                      </p>

                      {/* Multi-select checkbox */}
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={multiSelect}
                          onChange={(e) => {
                            setMultiSelect(e.target.checked);
                            if (!e.target.checked && selectedAreas.length > 1) {
                              setSelectedAreas([selectedAreas[0]]);
                            }
                          }}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="text-sm font-sans font-semibold">
                          Activer la sélection multiple des zones endommagées
                        </span>
                      </label>

                      {/* Selected areas display */}
                      {selectedAreas.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 rounded-xl bg-background border border-border/30"
                        >
                          <p className="text-sm font-sans font-semibold mb-2">Zone(s) sélectionnée(s) :</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedAreas.map((areaId) => {
                              const area = vitrageAreas.find((a) => a.id === areaId);
                              return (
                                <span
                                  key={areaId}
                                  className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-sans font-medium"
                                >
                                  {area?.label}
                                </span>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Client Info */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-serif mb-6">Informations client</h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Nom Complet"
                        className="w-full bg-background border border-border/60 rounded-xl px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      <input
                        type="tel"
                        placeholder="Numéro de téléphone"
                        className="w-full bg-background border border-border/60 rounded-xl px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full bg-background border border-border/60 rounded-xl px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder="Immatriculation"
                      className="w-full bg-background border border-border/60 rounded-xl px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                      value={formData.immatriculation}
                      onChange={(e) => setFormData({ ...formData, immatriculation: e.target.value })}
                    />
                  </div>

                  {/* Contact direct */}
                  <div className="mt-8 rounded-xl border border-border/30 bg-background p-5">
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
            <div className="flex items-center justify-between mt-8 pt-5 border-t border-border/20">
              <button
                type="button"
                onClick={prevStep}
                disabled={step === 1}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-sans font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={16} />
                Précédent
              </button>

              {step < TOTAL_STEPS ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center gap-2 px-7 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-sans font-semibold hover:bg-primary/90 transition-colors"
                >
                  Suivant
                  <ChevronRight size={16} />
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-7 py-2.5 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-sm uppercase tracking-[0.1em] hover:bg-primary/90 transition-colors duration-300"
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
