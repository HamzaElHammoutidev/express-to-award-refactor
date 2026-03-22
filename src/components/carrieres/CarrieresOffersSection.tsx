import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const jobs = [
  {
    date: { fr: "17 août", ar: "17 غشت" },
    type: "CDI",
    title: { fr: "Superviseur à Marrakech", ar: "مشرف بمراكش" },
    city: { fr: "Marrakech", ar: "مراكش" },
    desc: { fr: "Piloter l'activité, accompagner les équipes terrain et garantir un niveau élevé de qualité de service au quotidien.", ar: "قيادة النشاط ومواكبة الفرق الميدانية وضمان مستوى عالٍ من جودة الخدمة بشكل يومي." },
    tags: { fr: ["Management", "Opérations", "Terrain"], ar: ["تدبير", "عمليات", "ميدان"] },
    id: 15,
  },
  {
    date: { fr: "18 août", ar: "18 غشت" },
    type: "CDI",
    title: { fr: "Commercial B2B Grands Comptes", ar: "مسؤول تجاري B2B للحسابات الكبرى" },
    city: { fr: "Casablanca", ar: "الدار البيضاء" },
    desc: { fr: "Développer le portefeuille grands comptes, construire des relations durables et accompagner les partenariats à fort potentiel.", ar: "تطوير محفظة الحسابات الكبرى وبناء علاقات مهنية قوية ومواكبة الشراكات ذات القيمة العالية." },
    tags: { fr: ["Commercial", "B2B", "Grands comptes"], ar: ["تجاري", "B2B", "حسابات كبرى"] },
    id: 17,
  },
  {
    date: { fr: "18 août", ar: "18 غشت" },
    type: "CDI",
    title: { fr: "Responsable Achats & Approvisionnements Réseau", ar: "مسؤول المشتريات والتزود للشبكة" },
    city: { fr: "Casablanca", ar: "الدار البيضاء" },
    desc: { fr: "Structurer les achats, sécuriser les approvisionnements et optimiser la disponibilité des ressources pour le réseau.", ar: "تنظيم المشتريات وتأمين التزود وتحسين توفر الموارد على مستوى مختلف نقاط الشبكة." },
    tags: { fr: ["Achats", "Supply", "Réseau"], ar: ["مشتريات", "تموين", "شبكة"] },
    id: 19,
  },
  {
    date: { fr: "22 août", ar: "22 غشت" },
    type: "Anapec",
    title: { fr: "Standardiste stagiaire", ar: "متدرب(ة) في الاستقبال الهاتفي" },
    city: { fr: "Casablanca", ar: "الدار البيضاء" },
    desc: { fr: "Participer à l'accueil téléphonique, à l'orientation des demandes et à la fluidité du premier contact avec les clients.", ar: "المساهمة في الاستقبال الهاتفي وتوجيه الطلبات وضمان جودة أول تواصل مع العملاء." },
    tags: { fr: ["Accueil", "Stage", "Support"], ar: ["استقبال", "تدريب", "دعم"] },
    id: 20,
  },
];

const filters = [
  { fr: "Tous", ar: "الكل" },
  { fr: "CDI", ar: "CDI" },
  { fr: "CDD", ar: "CDD" },
  { fr: "Anapec", ar: "Anapec" },
];

const CarrieresOffersSection = () => {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filtered = activeFilter === "Tous" ? jobs : jobs.filter((j) => j.type === activeFilter);

  return (
    <section className="pb-20 md:pb-[92px]" id="offres">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="text-center max-w-[940px] mx-auto mb-11">
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-card/65 border border-border text-muted-foreground text-xs font-extrabold uppercase tracking-[0.1em] mb-4">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(228,181,44,0.10)]" />
            {t("Nos offres", "عروضنا")}
          </div>
          <h2 className="text-[clamp(34px,4.6vw,68px)] leading-[1.02] tracking-[-0.05em] mb-4">
            {t("Des opportunités à saisir sous forme de ", "فرص مهنية معروضة في شكل ")}
            <span className="text-primary italic font-bold">{t("cards claires et lisibles", "بطاقات واضحة")}</span>
          </h2>
          <p className="text-muted-foreground text-[clamp(17px,1.7vw,21px)] leading-[1.8]">
            {t(
              "Retrouvez nos recrutements actuels et découvrez des postes à fort impact dans différents métiers et différentes villes du Maroc.",
              "اكتشف فرص التوظيف الحالية داخل مختلف المهن والمدن، وقدّم على الوظيفة التي تناسب مسارك وطموحك."
            )}
          </p>
        </div>

        <div className="bg-gradient-to-br from-card/70 to-card/55 border border-border rounded-[34px] p-7 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
          <div className="flex flex-wrap gap-3 justify-center mb-7">
            {filters.map((f) => (
              <button
                key={f.fr}
                onClick={() => setActiveFilter(f.fr)}
                className={`px-4 py-2.5 rounded-full text-[13px] font-extrabold uppercase tracking-[0.06em] border transition-all ${
                  activeFilter === f.fr
                    ? "bg-primary text-primary-foreground border-primary/30"
                    : "bg-card/70 border-border text-foreground hover:border-primary/20"
                }`}
              >
                {lang === "ar" ? f.ar : f.fr}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {filtered.map((job, i) => (
              <motion.div
                key={job.id}
                className="bg-card/80 border border-border rounded-[28px] p-[22px] shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 hover:border-primary/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 text-primary text-xs font-extrabold uppercase tracking-[0.08em]">
                    <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(228,181,44,0.10)]" />
                    {lang === "ar" ? job.date.ar : job.date.fr}
                  </div>
                  <span className="inline-flex items-center justify-center min-w-[72px] h-9 px-3 rounded-full bg-foreground/8 text-foreground text-xs font-black uppercase tracking-[0.08em]">
                    {job.type}
                  </span>
                </div>
                <h3 className="text-xl md:text-[28px] leading-[1.1] tracking-[-0.03em] mb-2.5">{lang === "ar" ? job.title.ar : job.title.fr}</h3>
                <p className="text-muted-foreground text-base mb-2.5">{lang === "ar" ? job.city.ar : job.city.fr}</p>
                <p className="text-muted-foreground/70 text-base leading-[1.8] mb-4">{lang === "ar" ? job.desc.ar : job.desc.fr}</p>
                <div className="flex flex-wrap gap-2.5 mb-4">
                  {(lang === "ar" ? job.tags.ar : job.tags.fr).map((tag) => (
                    <span key={tag} className="px-3 py-2 rounded-full bg-card/70 border border-border text-muted-foreground text-xs font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={`/carrieres/${job.id}`} className="inline-flex items-center gap-2.5 text-primary font-extrabold tracking-[0.04em] group">
                  <span>{t("Voir l'offre", "عرض الوظيفة")}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarrieresOffersSection;
