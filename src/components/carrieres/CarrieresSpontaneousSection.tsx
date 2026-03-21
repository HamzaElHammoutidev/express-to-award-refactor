import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const points = [
  {
    title: { fr: "Profils opérationnels et support", ar: "مهن تشغيلية وداعمة" },
    desc: { fr: "Centres techniques, accueil, commerce, achats, logistique, support et fonctions transverses.", ar: "المراكز التقنية، الاستقبال، التجاري، المشتريات، اللوجستيك، والدعم والوظائف الأفقية." },
  },
  {
    title: { fr: "Analyse attentive des candidatures", ar: "دراسة دقيقة للملفات" },
    desc: { fr: "Chaque dossier peut être reconsidéré selon l'évolution des besoins et des ouvertures futures.", ar: "يمكن إعادة النظر في كل ملف حسب تطور الاحتياجات وفرص التوظيف المستقبلية." },
  },
  {
    title: { fr: "Un réseau en mouvement", ar: "شبكة في تطور مستمر" },
    desc: { fr: "La croissance de la marque crée régulièrement de nouvelles opportunités sur différents métiers.", ar: "نمو العلامة يخلق بشكل منتظم فرصاً جديدة في عدة تخصصات ومناطق." },
  },
];

const CarrieresSpontaneousSection = () => {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", job: "", message: "" });

  return (
    <section className="pb-20 md:pb-[92px]" id="candidature">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <motion.article
            className="bg-gradient-to-br from-foreground to-foreground/90 text-background rounded-[34px] p-8 md:p-[34px] shadow-[0_24px_60px_rgba(0,0,0,0.12)] relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute w-[320px] h-[320px] -right-[120px] -top-[120px] rounded-full bg-[radial-gradient(circle,rgba(228,181,44,0.20),transparent_70%)]" />
            <h3 className="relative z-10 text-[clamp(30px,3vw,48px)] leading-[1.04] mb-4">
              {t("Candidature ", "ترشيح ")}
              <span className="text-primary">{t("spontanée", "تلقائي")}</span>
            </h3>
            <p className="relative z-10 text-background/70 text-[17px] leading-[1.9]">
              {t(
                "Vous ne trouvez pas encore l'offre qui vous correspond ? Envoyez-nous votre candidature. Nous sommes toujours attentifs aux profils motivés, engagés et capables d'apporter de la valeur à notre réseau.",
                "إذا لم تجد العرض المناسب حالياً، يمكنك إرسال ترشيحك التلقائي. نحن نهتم دائماً بالملفات الجادة والمرشحين القادرين على إضافة قيمة حقيقية إلى شبكتنا."
              )}
            </p>
            <div className="relative z-10 grid gap-3.5 mt-6">
              {points.map((p, i) => (
                <div key={i} className="p-4 rounded-[22px] bg-background/5 border border-background/10">
                  <strong className="block text-lg mb-1.5">{lang === "ar" ? p.title.ar : p.title.fr}</strong>
                  <span className="text-background/70 text-[15px] leading-[1.7]">{lang === "ar" ? p.desc.ar : p.desc.fr}</span>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.form
            className="bg-card/70 border border-border rounded-[34px] shadow-[0_16px_40px_rgba(0,0,0,0.08)] p-[30px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-extrabold tracking-[0.04em] mb-2.5">{t("Nom complet", "الاسم الكامل")}</label>
                <input type="text" placeholder={t("Votre nom complet", "الاسم الكامل")} className="w-full min-h-[56px] rounded-[18px] border border-border bg-card/80 px-4 text-foreground placeholder:text-muted-foreground focus:border-primary/35 focus:shadow-[0_0_0_4px_rgba(228,181,44,0.08)] outline-none transition-all" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-extrabold tracking-[0.04em] mb-2.5">{t("Email", "البريد الإلكتروني")}</label>
                <input type="email" placeholder={t("votre@email.com", "you@email.com")} className="w-full min-h-[56px] rounded-[18px] border border-border bg-card/80 px-4 text-foreground placeholder:text-muted-foreground focus:border-primary/35 focus:shadow-[0_0_0_4px_rgba(228,181,44,0.08)] outline-none transition-all" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-extrabold tracking-[0.04em] mb-2.5">{t("Emploi", "المجال")}</label>
                <select className="w-full min-h-[56px] rounded-[18px] border border-border bg-card/80 px-4 text-foreground focus:border-primary/35 focus:shadow-[0_0_0_4px_rgba(228,181,44,0.08)] outline-none transition-all" value={formData.job} onChange={(e) => setFormData({ ...formData, job: e.target.value })}>
                  <option value="">{t("Choisissez un domaine", "اختر المجال")}</option>
                  <option value="technique">{t("Technique", "تقني")}</option>
                  <option value="commercial">{t("Commercial", "تجاري")}</option>
                  <option value="support">{t("Support", "دعم")}</option>
                  <option value="stage">{t("Stage", "تدريب")}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-extrabold tracking-[0.04em] mb-2.5">{t("Message", "رسالتك")}</label>
                <textarea placeholder={t("Présentez brièvement votre profil, votre motivation et le poste recherché", "قدّم نبذة مختصرة عن ملفك، دوافعك، والمنصب الذي تبحث عنه")} className="w-full min-h-[140px] rounded-[18px] border border-border bg-card/80 p-4 text-foreground placeholder:text-muted-foreground focus:border-primary/35 focus:shadow-[0_0_0_4px_rgba(228,181,44,0.08)] outline-none transition-all resize-y" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-extrabold tracking-[0.04em] mb-2.5">{t("Soumettre le CV", "إرسال السيرة الذاتية")}</label>
                <div className="grid gap-2.5 p-[18px] rounded-[22px] border border-dashed border-foreground/15 bg-card/70">
                  <input type="file" accept=".pdf,.doc,.docx" />
                  <small className="text-muted-foreground leading-[1.6]">{t("La taille maximale du fichier est de 10 MB.", "الحجم الأقصى للملف هو 10 MB.")}</small>
                </div>
              </div>
              <button type="submit" className="inline-flex items-center justify-center min-h-[58px] px-7 rounded-full bg-primary text-primary-foreground font-extrabold tracking-[0.05em] shadow-[0_14px_32px_rgba(228,181,44,0.24)] hover:-translate-y-0.5 transition-all">
                {t("Envoyer ma candidature", "إرسال الترشيح")}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default CarrieresSpontaneousSection;
