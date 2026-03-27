import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, PhoneCall, Check, ChevronRight, ChevronLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const assuranceOptions = [
  { value: "Avec assurance", label: "Avec assurance", desc: "Je souhaite une prise en charge dans le cadre de mon assurance." },
  { value: "Sans assurance", label: "Sans assurance", desc: "Je souhaite être accompagné hors assurance ou en demande directe." },
  { value: "Je ne sais pas encore", label: "Je ne sais pas encore", desc: "Je préfère être orienté avant la qualification complète du dossier." },
];

const compagnies = ["Wafa Assurance", "RMA", "Saham", "AtlantaSanad", "AXA", "MAMDA", "Autre"];
const villes = ["Casablanca", "Rabat", "Tanger", "Marrakech", "Fès", "Agadir", "Kénitra", "Mohammedia", "El Jadida", "Autre"];

const modelsByBrand: Record<string, string[]> = {
  "Renault": ["Clio", "Mégane", "Kadjar", "Captur", "Express"],
  "Dacia": ["Logan", "Sandero", "Duster", "Dokker", "Lodgy"],
  "Peugeot": ["208", "2008", "308", "3008", "Partner"],
  "Citroën": ["C3", "C4", "Berlingo", "C-Elysée"],
  "Volkswagen": ["Polo", "Golf", "Passat", "Tiguan", "Caddy"],
  "Toyota": ["Yaris", "Corolla", "Hilux", "RAV4", "Land Cruiser"],
  "Hyundai": ["i10", "i20", "Accent", "Tucson", "Santa Fe"],
  "Kia": ["Picanto", "Rio", "Ceed", "Sportage"],
  "Ford": ["Fiesta", "Focus", "Kuga", "Transit"],
  "Mercedes-Benz": ["Classe A", "Classe C", "GLA", "Vito", "Sprinter"],
  "BMW": ["Série 1", "Série 3", "X1", "X3", "X5"],
  "Audi": ["A1", "A3", "A4", "Q3", "Q5"],
  "Nissan": ["Micra", "Qashqai", "Juke", "Navara"],
  "Fiat": ["500", "Panda", "Tipo", "Doblo"],
  "Skoda": ["Fabia", "Octavia", "Rapid", "Kodiaq"],
};

const marques = Object.keys(modelsByBrand);
const carburants = ["Essence", "Diesel", "Hybride", "Électrique"];
const lettres = ["A","B","C","D","E","F","G","H","J","K","L","M","N","P","R","S","T","W"];
const years = Array.from({ length: new Date().getFullYear() + 2 - 1995 }, (_, i) => String(new Date().getFullYear() + 1 - i));
const regions = Array.from({ length: 75 }, (_, i) => String(i + 1));

const contactOptions = [
  { value: "Être appelé", label: "Être appelé", desc: "Je laisse mes coordonnées et je souhaite être rappelé rapidement.", cta: "Choisir cette option" },
  { value: "Appeler maintenant", label: "Appeler maintenant", desc: "Je préfère contacter directement l'équipe pour aller plus vite.", cta: "Appeler directement" },
];

const TOTAL_STEPS = 3;

const stepConfig = [
  { mini: "Étape 1", title: "Votre assurance et votre", highlight: "ville", desc: "Choisissez votre situation assurance puis votre ville." },
  { mini: "Étape 2", title: "Les informations de votre", highlight: "véhicule", desc: "Sélectionnez votre véhicule avec des listes guidées." },
  { mini: "Étape 3", title: "Vos données et votre", highlight: "mode de contact", desc: "Choisissez votre mode de contact puis laissez vos coordonnées." },
];

const Declaration = () => {
  const [step, setStep] = useState(1);
  const [assurance, setAssurance] = useState("Avec assurance");
  const [compagnie, setCompagnie] = useState("");
  const [ville, setVille] = useState("");
  const [marque, setMarque] = useState("");
  const [modele, setModele] = useState("");
  const [annee, setAnnee] = useState("");
  const [carburant, setCarburant] = useState("");
  const [matriculeNum, setMatriculeNum] = useState("");
  const [matriculeLetter, setMatriculeLetter] = useState("");
  const [matriculeRegion, setMatriculeRegion] = useState("");
  const [contactPref, setContactPref] = useState("Être appelé");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => {
    if (step < TOTAL_STEPS) setStep(step + 1);
    else setShowModal(true);
  };
  const prevStep = () => setStep(Math.max(1, step - 1));

  const vehicleText = [marque, modele, annee, [matriculeNum, matriculeLetter, matriculeRegion].filter(Boolean).join("-")].filter(Boolean).join(" • ") || "—";

  const config = stepConfig[step - 1];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <PageHeader breadcrumbs={[{ label: "Déclaration de sinistre" }]} title="Déclarez votre sinistre en" titleHighlight="3 étapes" />

      <section className="section-padding py-2 pb-20">
        <div className="max-w-[1080px] mx-auto">
          {/* Hero grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-4">
            <div className="bg-white/[0.76] border border-border/60 rounded-[34px] p-6 shadow-lg">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-extrabold tracking-[0.08em] uppercase mb-3.5">
                Déclaration simplifiée
              </span>
              <h2 className="text-[clamp(28px,5vw,52px)] font-black leading-[0.96] tracking-[-0.06em] mb-3.5">
                Déclarez votre sinistre en <span className="text-primary italic font-bold">3 étapes</span>
              </h2>
              <p className="text-muted-foreground text-[16px] leading-[1.8]">
                Le formulaire va à l'essentiel pour être plus rapide côté client.
                Le type de vitrage sera qualifié ensuite par notre back-office.
              </p>
            </div>
            <div className="relative rounded-[34px] overflow-hidden min-h-[280px] bg-gradient-to-br from-foreground to-foreground/90 shadow-xl">
              <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=800" alt="Déclaration de sinistre" className="w-full h-full object-cover absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-b from-foreground/10 via-foreground/30 to-foreground/80" />
              <div className="absolute left-4 right-4 bottom-4 bg-foreground/50 border border-white/10 backdrop-blur-sm rounded-[22px] p-4 text-background z-10">
                <strong className="block text-[14px] tracking-[0.05em] uppercase text-primary mb-1.5">Parcours allégé</strong>
                <p className="text-background/80 text-[14px] leading-[1.7]">Assurance, véhicule puis coordonnées. Simple, clair et pensé pour mobile.</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/[0.76] border border-border/60 rounded-[32px] p-5 shadow-lg">
            {/* Workflow steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5 md:gap-3 items-center mb-6">
              {stepConfig.map((s, i) => {
                const stepNum = i + 1;
                const isActive = step === stepNum;
                const isDone = step > stepNum;
                return (
                  <div key={i} className={i % 2 === 1 && i < 4 ? "hidden md:flex items-center justify-center text-primary" : ""}>
                    {i > 0 && i % 2 === 1 ? (
                      <ChevronRight className="h-7 w-7" />
                    ) : i % 2 === 0 ? (
                      <div className={`flex items-center gap-3 p-3.5 rounded-3xl border transition-all ${
                        isActive ? "bg-gradient-to-br from-primary/10 to-white/90 border-primary/20 -translate-y-0.5" :
                        isDone ? "border-primary/20 bg-white/80" : "border-border/60 bg-white/80"
                      }`}>
                        <div className={`w-[46px] h-[46px] rounded-2xl flex items-center justify-center font-black text-[17px] ${
                          isActive || isDone ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                        }`}>
                          {isDone ? <Check className="h-5 w-5" /> : Math.floor(i/2) + 1}
                        </div>
                        <div className="hidden md:block">
                          <strong className="block text-[15px] leading-[1.35]">{["Assurance & ville", "Véhicule", "Vos données"][Math.floor(i/2)]}</strong>
                          <span className="text-[13px] text-muted-foreground leading-[1.5]">{["Le contexte général", "Marque, modèle, plaque", "Coordonnées et contact"][Math.floor(i/2)]}</span>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>

            {/* Step header */}
            <div className="mb-5">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-extrabold tracking-[0.08em] uppercase mb-2.5">
                {config.mini}
              </span>
              <h2 className="text-[clamp(24px,3.4vw,40px)] font-black leading-[1.02] tracking-[-0.05em] mb-2">
                {config.title} <span className="text-primary italic font-bold">{config.highlight}</span>
              </h2>
              <p className="text-muted-foreground text-[15px] leading-[1.75]">{config.desc}</p>
            </div>

            {/* Step panels */}
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.25 }} className="space-y-4">
                  {/* Assurance radio */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                    {assuranceOptions.map((opt) => (
                      <label
                        key={opt.value}
                        className={`relative rounded-3xl p-[18px] border cursor-pointer transition-all min-h-[128px] flex flex-col justify-center gap-1.5 bg-white/[0.76] shadow-lg ${
                          assurance === opt.value ? "bg-gradient-to-br from-primary/10 to-white/90 border-primary/20 -translate-y-0.5" : "border-border/60 hover:border-primary/15"
                        }`}
                      >
                        <input type="radio" className="hidden" checked={assurance === opt.value} onChange={() => setAssurance(opt.value)} />
                        <strong className="text-[18px]">{opt.label}</strong>
                        <span className="text-muted-foreground text-[14px] leading-[1.65]">{opt.desc}</span>
                      </label>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    <div className="space-y-2">
                      <label className="text-[12px] font-extrabold tracking-[0.08em] uppercase text-muted-foreground">Compagnie / précision</label>
                      <select value={compagnie} onChange={(e) => setCompagnie(e.target.value)} className="w-full min-h-[56px] rounded-[18px] border border-border/60 bg-white/90 px-4 text-foreground outline-none focus:border-primary/30 focus:shadow-[0_0_0_4px_rgba(228,181,44,0.08)] transition-all">
                        <option value="">Sélectionnez si applicable</option>
                        {compagnies.map((c) => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-extrabold tracking-[0.08em] uppercase text-muted-foreground">Ville</label>
                      <select value={ville} onChange={(e) => setVille(e.target.value)} className="w-full min-h-[56px] rounded-[18px] border border-border/60 bg-white/90 px-4 text-foreground outline-none focus:border-primary/30 focus:shadow-[0_0_0_4px_rgba(228,181,44,0.08)] transition-all">
                        <option value="">Sélectionnez votre ville</option>
                        {villes.map((v) => <option key={v}>{v}</option>)}
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.25 }} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5">
                    <div className="space-y-2">
                      <label className="text-[12px] font-extrabold tracking-[0.08em] uppercase text-muted-foreground">Marque</label>
                      <select value={marque} onChange={(e) => { setMarque(e.target.value); setModele(""); }} className="w-full min-h-[56px] rounded-[18px] border border-border/60 bg-white/90 px-4 text-foreground outline-none focus:border-primary/30 transition-all">
                        <option value="">Sélectionnez</option>
                        {marques.map((m) => <option key={m}>{m}</option>)}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-extrabold tracking-[0.08em] uppercase text-muted-foreground">Modèle</label>
                      <select value={modele} onChange={(e) => setModele(e.target.value)} className="w-full min-h-[56px] rounded-[18px] border border-border/60 bg-white/90 px-4 text-foreground outline-none focus:border-primary/30 transition-all">
                        <option value="">Sélectionnez un modèle</option>
                        {(modelsByBrand[marque] || []).map((m) => <option key={m}>{m}</option>)}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-extrabold tracking-[0.08em] uppercase text-muted-foreground">Année</label>
                      <select value={annee} onChange={(e) => setAnnee(e.target.value)} className="w-full min-h-[56px] rounded-[18px] border border-border/60 bg-white/90 px-4 text-foreground outline-none focus:border-primary/30 transition-all">
                        <option value="">Sélectionnez</option>
                        {years.map((y) => <option key={y}>{y}</option>)}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-extrabold tracking-[0.08em] uppercase text-muted-foreground">Carburant</label>
                      <select value={carburant} onChange={(e) => setCarburant(e.target.value)} className="w-full min-h-[56px] rounded-[18px] border border-border/60 bg-white/90 px-4 text-foreground outline-none focus:border-primary/30 transition-all">
                        <option value="">Sélectionnez</option>
                        {carburants.map((c) => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Matricule */}
                  <div className="grid grid-cols-3 gap-3.5 mt-3.5">
                    <div className="space-y-2">
                      <label className="text-[12px] font-extrabold tracking-[0.08em] uppercase text-muted-foreground">Matricule</label>
                      <input type="text" inputMode="numeric" value={matriculeNum} onChange={(e) => setMatriculeNum(e.target.value)} placeholder="Numéro" className="w-full min-h-[56px] rounded-[18px] border border-border/60 bg-white/90 px-4 text-foreground outline-none focus:border-primary/30 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-extrabold tracking-[0.08em] uppercase text-muted-foreground">Lettre</label>
                      <select value={matriculeLetter} onChange={(e) => setMatriculeLetter(e.target.value)} className="w-full min-h-[56px] rounded-[18px] border border-border/60 bg-white/90 px-4 text-foreground outline-none focus:border-primary/30 transition-all">
                        <option value="">Lettre</option>
                        {lettres.map((l) => <option key={l}>{l}</option>)}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-extrabold tracking-[0.08em] uppercase text-muted-foreground">Région</label>
                      <select value={matriculeRegion} onChange={(e) => setMatriculeRegion(e.target.value)} className="w-full min-h-[56px] rounded-[18px] border border-border/60 bg-white/90 px-4 text-foreground outline-none focus:border-primary/30 transition-all">
                        <option value="">Région</option>
                        {regions.map((r) => <option key={r}>{r}</option>)}
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.25 }} className="space-y-5">
                  {/* Contact preference */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {contactOptions.map((opt) => (
                      <label
                        key={opt.value}
                        className={`relative rounded-3xl p-[18px] border cursor-pointer transition-all min-h-[132px] flex flex-col justify-between gap-2 bg-white/[0.76] shadow-lg ${
                          contactPref === opt.value ? "bg-gradient-to-br from-primary/10 to-white/90 border-primary/20 -translate-y-0.5" : "border-border/60"
                        }`}
                      >
                        <input type="radio" className="hidden" checked={contactPref === opt.value} onChange={() => setContactPref(opt.value)} />
                        <strong className="text-[22px] leading-[1.12] tracking-[-0.02em]">{opt.label}</strong>
                        <p className="text-[14px] leading-[1.7] text-muted-foreground">{opt.desc}</p>
                        <span className={`inline-flex items-center justify-center min-h-[46px] px-[18px] rounded-full text-[13px] font-extrabold tracking-[0.04em] w-fit ${
                          contactPref === opt.value ? "bg-primary text-primary-foreground shadow-[0_14px_32px_rgba(228,181,44,0.18)]" : "bg-foreground/5 border border-border/60"
                        }`}>{opt.cta}</span>
                      </label>
                    ))}
                  </div>

                  {/* Call direct box */}
                  {contactPref === "Appeler maintenant" && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="relative overflow-hidden rounded-3xl p-[18px] bg-gradient-to-br from-foreground to-foreground/90 text-background shadow-xl">
                      <div className="absolute -top-24 -right-24 w-[220px] h-[220px] rounded-full bg-[radial-gradient(circle,rgba(228,181,44,0.24),transparent_70%)]" />
                      <div className="relative z-10">
                        <strong className="block text-[18px] text-primary mb-2">Contact direct</strong>
                        <p className="text-background/80 text-[14px] leading-[1.75] mb-3">Vous pouvez appeler immédiatement. Le reste sera repris ensuite avec notre équipe.</p>
                        <a href="tel:+212522663166" className="inline-flex items-center justify-center min-h-[52px] px-6 rounded-full bg-primary text-primary-foreground font-extrabold shadow-[0_14px_32px_rgba(228,181,44,0.22)]">
                          +212 5 22 66 31 66
                        </a>
                      </div>
                    </motion.div>
                  )}

                  {/* Contact fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    <div className="space-y-2">
                      <label className="text-[12px] font-extrabold tracking-[0.08em] uppercase text-muted-foreground">Nom</label>
                      <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Votre nom" className="w-full min-h-[56px] rounded-[18px] border border-border/60 bg-white/90 px-4 text-foreground outline-none focus:border-primary/30 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-extrabold tracking-[0.08em] uppercase text-muted-foreground">Prénom</label>
                      <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} placeholder="Votre prénom" className="w-full min-h-[56px] rounded-[18px] border border-border/60 bg-white/90 px-4 text-foreground outline-none focus:border-primary/30 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-extrabold tracking-[0.08em] uppercase text-muted-foreground">Téléphone</label>
                      <input type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} placeholder="+212 ..." className="w-full min-h-[56px] rounded-[18px] border border-border/60 bg-white/90 px-4 text-foreground outline-none focus:border-primary/30 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-extrabold tracking-[0.08em] uppercase text-muted-foreground">E-mail</label>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="votre@email.com" className="w-full min-h-[56px] rounded-[18px] border border-border/60 bg-white/90 px-4 text-foreground outline-none focus:border-primary/30 transition-all" />
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="bg-white/[0.76] border border-border/60 rounded-3xl p-[18px] shadow-lg mt-5">
                    <h3 className="text-[20px] font-bold leading-[1.2] tracking-[-0.02em] mb-3.5">Récapitulatif</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        { label: "Assurance", value: assurance },
                        { label: "Ville", value: ville || "—" },
                        { label: "Véhicule", value: vehicleText },
                        { label: "Contact", value: contactPref },
                      ].map((item, i) => (
                        <div key={i} className="p-3.5 rounded-[18px] bg-white/90 border border-border/60">
                          <span className="block text-[11px] font-extrabold tracking-[0.08em] uppercase text-muted-foreground mb-1.5">{item.label}</span>
                          <strong className="block text-[14px] leading-[1.6] break-words">{item.value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop actions */}
            <div className="hidden md:flex items-center justify-between gap-3 mt-5">
              <button
                onClick={prevStep}
                disabled={step === 1}
                className="inline-flex items-center justify-center min-h-[56px] px-6 rounded-full bg-white/90 border border-border/60 text-foreground font-extrabold tracking-[0.05em] transition-all hover:-translate-y-0.5 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
              >
                <ChevronLeft className="h-4 w-4 mr-2" /> Retour
              </button>
              <button
                onClick={nextStep}
                className="inline-flex items-center justify-center min-h-[56px] px-6 rounded-full bg-primary text-primary-foreground font-extrabold tracking-[0.05em] shadow-[0_14px_32px_rgba(228,181,44,0.24)] transition-all hover:-translate-y-0.5"
              >
                {step === TOTAL_STEPS ? "Valider" : "Continuer"} <ChevronRight className="h-4 w-4 ml-2" />
              </button>
            </div>

            {/* Mobile sticky actions */}
            <div className="md:hidden sticky bottom-2.5 z-20 grid grid-cols-2 gap-2.5 mt-5 p-2.5 bg-white/80 backdrop-blur-sm border border-border/60 rounded-[22px] shadow-lg">
              <button onClick={prevStep} disabled={step === 1} className="w-full min-h-[52px] rounded-full bg-white/90 border border-border/60 text-foreground font-extrabold text-[14px] disabled:opacity-40 disabled:cursor-not-allowed">
                Retour
              </button>
              <button onClick={nextStep} className="w-full min-h-[52px] rounded-full bg-primary text-primary-foreground font-extrabold text-[14px] shadow-[0_14px_32px_rgba(228,181,44,0.24)]">
                {step === TOTAL_STEPS ? "Valider" : "Continuer"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 flex items-center justify-center p-[18px]"
            onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-[640px] bg-white/95 border border-border/60 rounded-[30px] shadow-xl p-6"
            >
              {!submitted ? (
                <>
                  <h3 className="text-[30px] font-black leading-[1.08] tracking-[-0.04em] mb-2.5">Vérifier avant validation</h3>
                  <p className="text-muted-foreground text-[15px] leading-[1.8] mb-5">Confirmez les informations principales avant l'envoi de votre demande.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { label: "Assurance", value: assurance },
                      { label: "Ville", value: ville || "—" },
                      { label: "Véhicule", value: vehicleText },
                      { label: "Contact", value: contactPref },
                    ].map((item, i) => (
                      <div key={i} className="p-3.5 rounded-[18px] bg-white/90 border border-border/60">
                        <span className="block text-[11px] font-extrabold tracking-[0.08em] uppercase text-muted-foreground mb-1.5">{item.label}</span>
                        <strong className="block text-[14px] leading-[1.6]">{item.value}</strong>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col md:flex-row gap-3 justify-end mt-5">
                    <button onClick={() => setShowModal(false)} className="min-h-[56px] px-6 rounded-full bg-white/90 border border-border/60 text-foreground font-extrabold w-full md:w-auto">Modifier</button>
                    <button onClick={() => setSubmitted(true)} className="min-h-[56px] px-6 rounded-full bg-primary text-primary-foreground font-extrabold shadow-[0_14px_32px_rgba(228,181,44,0.24)] w-full md:w-auto">Valider la demande</button>
                  </div>
                </>
              ) : (
                <div className="text-center py-3">
                  <div className="w-[76px] h-[76px] mx-auto mb-4 rounded-3xl bg-gradient-to-br from-primary/15 to-white/85 border border-primary/20 flex items-center justify-center text-primary shadow-lg">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="text-[30px] font-black leading-[1.08] tracking-[-0.04em] mb-2.5">Merci</h3>
                  <p className="text-muted-foreground text-[15px] leading-[1.8] mb-5">Votre déclaration sera traitée sous peu.</p>
                  <button onClick={() => { setShowModal(false); setSubmitted(false); setStep(1); }} className="min-h-[56px] px-6 rounded-full bg-primary text-primary-foreground font-extrabold shadow-[0_14px_32px_rgba(228,181,44,0.24)]">
                    Fermer
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Declaration;
