import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const stepsFr = [
  { num: "01", title: "Demande & orientation", desc: "Le client contacte Pare-Brise Express par téléphone, web, email, réseaux sociaux ou en agence." },
  { num: "02", title: "Diagnostic & devis", desc: "Le besoin est analysé pour définir l'intervention adaptée et établir une proposition claire." },
  { num: "03", title: "Validation du dossier", desc: "Le devis est confirmé et la commande est enregistrée pour déclencher la prise en charge." },
  { num: "04", title: "Confirmation du rendez-vous", desc: "La date d'intervention est planifiée puis confirmée selon le centre technique ou l'atelier mobile." },
  { num: "05", title: "Intervention vitrage", desc: "Réparation ou remplacement réalisé dans le respect des standards de qualité et de sécurité." },
  { num: "06", title: "Contrôle final & suivi", desc: "Le véhicule est restitué après vérification, puis un suivi client est effectué après livraison." },
];

const stepsAr = [
  { num: "01", title: "الطلب والتوجيه", desc: "يتواصل العميل مع Pare-Brise Express عبر الهاتف أو الموقع أو البريد الإلكتروني أو الشبكات الاجتماعية أو الوكالة." },
  { num: "02", title: "التشخيص وعرض السعر", desc: "يتم تحليل الحاجة لتحديد نوع التدخل المناسب وإعداد عرض واضح ومباشر." },
  { num: "03", title: "اعتماد الملف", desc: "يتم تأكيد العرض واعتماد الطلب من أجل إطلاق الخدمة بشكل فعلي." },
  { num: "04", title: "تأكيد الموعد", desc: "يتم تحديد موعد التدخل وتأكيده حسب المركز التقني أو الورشة المتنقلة." },
  { num: "05", title: "تدخل الزجاج", desc: "إصلاح أو استبدال الزجاج وفق معايير الجودة والسلامة المعتمدة." },
  { num: "06", title: "المراقبة النهائية والمتابعة", desc: "يتم تسليم السيارة بعد التحقق النهائي، ثم متابعة العميل بعد الخدمة لقياس رضاه." },
];

const highlightsFr = [
  { value: "6 étapes", label: "de prise en charge" },
  { value: "2 modes", label: "centre ou atelier mobile" },
  { value: "48h", label: "pour le suivi satisfaction" },
];

const highlightsAr = [
  { value: "6 مراحل", label: "ضمن مسار الخدمة" },
  { value: "وضعان", label: "مركز تقني أو ورشة متنقلة" },
  { value: "48 ساعة", label: "للمتابعة وقياس الرضا" },
];

const ClientJourneySection = () => {
  const { lang, t, isRtl } = useLanguage();
  const steps = lang === "ar" ? stepsAr : stepsFr;
  const highlights = lang === "ar" ? highlightsAr : highlightsFr;

  return (
    <section className="relative overflow-hidden py-16 md:py-20 px-4 md:px-6" dir={isRtl ? "rtl" : "ltr"}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))] to-[hsl(40,30%,93%)]" />
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/10 blur-[60px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-16 w-64 h-64 rounded-full bg-primary/8 blur-[60px] pointer-events-none" />

      {/* Grid noise */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto">
        {/* Topbar */}
        <div className="flex items-center justify-between mb-6">
          <span className="inline-flex items-center px-4 py-2.5 rounded-full bg-foreground/90 text-background text-[12px] font-extrabold tracking-[0.16em] uppercase shadow-lg">
            {t("Parcours client", "رحلة العميل")}
          </span>
        </div>

        {/* Hero area */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-5 items-end mb-9">
          <div>
            <h2 className="text-[clamp(29px,5vw,64px)] font-black leading-[0.98] tracking-[-0.04em] mb-3.5">
              {t(
                "Un parcours clair, rapide et maîtrisé du premier contact jusqu'au suivi final.",
                "مسار واضح وسريع ومضبوط من أول تواصل إلى المتابعة النهائية."
              )}
            </h2>
            <p className="text-muted-foreground text-[17px] leading-[1.72] max-w-[760px]">
              {t(
                "Une expérience pensée pour simplifier la prise en charge, rassurer le client et valoriser la qualité d'exécution à chaque étape.",
                "تجربة مصممة لتبسيط الخدمة، طمأنة العميل، وإبراز جودة التنفيذ في كل مرحلة."
              )}
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-3 gap-3">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="min-h-[96px] flex flex-col justify-between p-4 md:p-[18px] rounded-3xl bg-white/70 border border-border/60 shadow-[0_22px_60px_rgba(0,0,0,0.08)] backdrop-blur-sm"
              >
                <strong className="block text-[22px] md:text-[26px] leading-none tracking-[-0.03em] font-black">
                  {h.value}
                </strong>
                <span className="block text-[13px] leading-[1.5] text-muted-foreground mt-1">
                  {h.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Steps cards */}
        <div className="relative pt-1.5">
          {/* SVG Path - Desktop only */}
          <svg
            className="absolute top-11 left-0 right-0 w-full h-[220px] overflow-visible pointer-events-none hidden lg:block"
            viewBox="0 0 1200 220"
            preserveAspectRatio="none"
          >
            <path
              d="M40 130 C140 40, 240 40, 340 130 S540 220, 640 130 S840 40, 940 130 S1080 220, 1160 110"
              fill="none"
              stroke="hsl(var(--foreground) / 0.1)"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>

          {/* Cards grid - desktop */}
          <div className="hidden lg:grid grid-cols-6 gap-[18px] relative z-10">
            {steps.map((step, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`relative overflow-hidden min-h-[214px] p-5 rounded-[26px] bg-white/[0.78] border border-border/60 shadow-[0_22px_60px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_60px_rgba(0,0,0,0.12)] hover:border-primary/40 ${
                  i % 2 !== 0 ? "mt-[74px]" : ""
                }`}
              >
                {/* Glow */}
                <div className={`absolute -top-10 ${isRtl ? "-left-10" : "-right-10"} w-[120px] h-[120px] rounded-full bg-[radial-gradient(circle,rgba(228,181,44,0.30),rgba(228,181,44,0.03)_70%)] pointer-events-none`} />

                <span className="inline-flex items-center justify-center w-12 h-12 mb-[18px] rounded-2xl bg-gradient-to-b from-primary to-primary/90 text-primary-foreground text-[13px] font-black tracking-[0.08em] shadow-[0_12px_24px_rgba(228,181,44,0.24)]">
                  {step.num}
                </span>
                <h3 className="text-[18px] leading-[1.18] tracking-[-0.02em] font-bold mb-2.5">
                  {step.title}
                </h3>
                <p className="text-[14px] leading-[1.68] text-muted-foreground">
                  {step.desc}
                </p>
              </motion.article>
            ))}
          </div>

          {/* Cards - mobile horizontal scroll */}
          <div className="lg:hidden flex gap-3.5 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-foreground/15">
            {steps.map((step, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="relative overflow-hidden min-w-[248px] md:min-w-[268px] min-h-[212px] p-[18px_16px_16px] rounded-[22px] bg-white/[0.78] border border-border/60 shadow-[0_22px_60px_rgba(0,0,0,0.08)] backdrop-blur-sm snap-start flex-shrink-0"
              >
                <div className={`absolute -top-10 ${isRtl ? "-left-10" : "-right-10"} w-[120px] h-[120px] rounded-full bg-[radial-gradient(circle,rgba(228,181,44,0.30),rgba(228,181,44,0.03)_70%)] pointer-events-none`} />

                <span className="inline-flex items-center justify-center w-11 h-11 mb-4 rounded-[14px] bg-gradient-to-b from-primary to-primary/90 text-primary-foreground text-[12px] font-black tracking-[0.08em] shadow-[0_12px_24px_rgba(228,181,44,0.24)]">
                  {step.num}
                </span>
                <h3 className="text-[16px] leading-[1.18] tracking-[-0.02em] font-bold mb-2.5">
                  {step.title}
                </h3>
                <p className="text-[13px] leading-[1.62] text-muted-foreground">
                  {step.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientJourneySection;
