import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, FileText, CheckCircle, Calendar, Wrench, ShieldCheck } from "lucide-react";

const icons = [Phone, FileText, CheckCircle, Calendar, Wrench, ShieldCheck];

interface StepData {
  num: string;
  title: string;
  desc: string;
  details: { label: string; text: string }[];
}

const stepsFr: StepData[] = [
  {
    num: "01", title: "Demande & orientation",
    desc: "Le client contacte Pare-Brise Express via téléphone, site web, email, réseaux sociaux ou en agence.",
    details: [
      { label: "Objectif", text: "Recevoir la demande du client et l'orienter immédiatement vers le canal de prise en charge le plus pertinent." },
      { label: "Canaux disponibles", text: "Téléphone, site web, email, réseaux sociaux et accueil en agence." },
      { label: "Résultat attendu", text: "Un besoin qualifié et un dossier prêt à être analysé rapidement." },
      { label: "Valeur client", text: "Un premier contact simple, accessible et rassurant quel que soit le point d'entrée choisi." },
    ],
  },
  {
    num: "02", title: "Diagnostic & devis",
    desc: "Le besoin est analysé pour identifier l'intervention adaptée et établir un devis clair.",
    details: [
      { label: "Objectif", text: "Analyser la situation pour proposer une intervention adaptée au type de vitrage et au besoin réel du client." },
      { label: "Contenu", text: "Étude de la demande, identification de la solution appropriée et élaboration d'un devis clair." },
      { label: "Résultat attendu", text: "Une proposition rapide, lisible et cohérente avec la prestation à réaliser." },
      { label: "Valeur client", text: "Une vision transparente de la prise en charge avant toute confirmation." },
    ],
  },
  {
    num: "03", title: "Validation de la commande",
    desc: "Le devis est confirmé et le dossier est validé pour déclencher la prise en charge.",
    details: [
      { label: "Objectif", text: "Valider le devis et formaliser la commande afin de lancer la prise en charge opérationnelle." },
      { label: "Contenu", text: "Confirmation client, validation du dossier et préparation du traitement de la demande." },
      { label: "Résultat attendu", text: "Un dossier conforme, confirmé et prêt pour la planification du rendez-vous." },
      { label: "Valeur client", text: "Une étape de validation simple qui sécurise la suite du parcours." },
    ],
  },
  {
    num: "04", title: "Confirmation du rendez-vous",
    desc: "La date d'intervention est planifiée puis confirmée selon le centre technique ou l'atelier mobile.",
    details: [
      { label: "Objectif", text: "Planifier l'intervention dans les meilleurs délais selon la disponibilité et le mode de prise en charge choisi." },
      { label: "Modes d'intervention", text: "Centre technique ou atelier mobile selon la nature du besoin et la convenance du client." },
      { label: "Résultat attendu", text: "Un créneau confirmé et une organisation claire avant intervention." },
      { label: "Valeur client", text: "Une prise de rendez-vous rapide, lisible et alignée avec ses contraintes." },
    ],
  },
  {
    num: "05", title: "Intervention vitrage",
    desc: "Réparation ou remplacement réalisé dans le respect des standards de qualité et de sécurité.",
    details: [
      { label: "Objectif", text: "Réaliser la réparation ou le remplacement du vitrage dans des conditions optimales de qualité et de sécurité." },
      { label: "Contenu", text: "Exécution technique de la prestation avec respect des standards qualité, process et conformité." },
      { label: "Résultat attendu", text: "Un véhicule traité selon les exigences opérationnelles et les bonnes pratiques métier." },
      { label: "Valeur client", text: "Une intervention fiable, professionnelle et sécurisée." },
    ],
  },
  {
    num: "06", title: "Contrôle final & suivi",
    desc: "Le véhicule est restitué après vérification, puis un suivi client est effectué après livraison.",
    details: [
      { label: "Objectif", text: "Vérifier la conformité de l'intervention avant restitution puis prolonger l'expérience par un suivi client." },
      { label: "Contenu", text: "Contrôle final, restitution du véhicule, collecte d'avis et suivi après livraison." },
      { label: "Résultat attendu", text: "Une fin de parcours maîtrisée et une satisfaction client mesurable." },
      { label: "Valeur client", text: "Une relation prolongée au-delà de l'intervention avec un vrai souci de qualité perçue." },
    ],
  },
];

const stepsAr: StepData[] = [
  {
    num: "01", title: "الطلب والتوجيه",
    desc: "يتواصل العميل مع Pare-Brise Express عبر الهاتف أو الموقع أو البريد الإلكتروني أو الشبكات الاجتماعية أو الوكالة.",
    details: [
      { label: "الهدف", text: "استقبال طلب العميل وتوجيهه مباشرة نحو قناة الخدمة الأنسب حسب حالته واحتياجه." },
      { label: "القنوات المتاحة", text: "الهاتف، الموقع الإلكتروني، البريد الإلكتروني، الشبكات الاجتماعية أو الوكالة." },
      { label: "النتيجة المنتظرة", text: "حاجة واضحة وملف جاهز للمعالجة السريعة." },
      { label: "قيمة للعميل", text: "بداية سهلة ومطمئنة مهما كانت نقطة الدخول المختارة." },
    ],
  },
  {
    num: "02", title: "التشخيص وعرض السعر",
    desc: "يتم تحليل الحاجة لتحديد نوع التدخل المناسب وإعداد عرض واضح ومباشر.",
    details: [
      { label: "الهدف", text: "تحليل الحالة من أجل اقتراح تدخل مناسب لنوع الزجاج واحتياج العميل الحقيقي." },
      { label: "المحتوى", text: "دراسة الطلب، تحديد الحل المناسب وإعداد عرض سعر واضح ومباشر." },
      { label: "النتيجة المنتظرة", text: "عرض سريع وواضح ومتناسق مع طبيعة الخدمة المطلوبة." },
      { label: "قيمة للعميل", text: "رؤية شفافة لما سيتم إنجازه قبل أي تأكيد نهائي." },
    ],
  },
  {
    num: "03", title: "اعتماد الطلب",
    desc: "يتم تأكيد العرض واعتماد الملف لإطلاق الخدمة بشكل فعلي.",
    details: [
      { label: "الهدف", text: "اعتماد عرض السعر وتأكيد الطلب من أجل إطلاق المعالجة التشغيلية بشكل رسمي." },
      { label: "المحتوى", text: "تأكيد العميل، اعتماد الملف والتحضير لمرحلة الجدولة." },
      { label: "النتيجة المنتظرة", text: "ملف معتمد وجاهز لتحديد موعد التدخل." },
      { label: "قيمة للعميل", text: "مرحلة اعتماد بسيطة تؤمن الانتقال السلس إلى التنفيذ." },
    ],
  },
  {
    num: "04", title: "تأكيد الموعد",
    desc: "يتم تحديد موعد التدخل وتأكيده حسب المركز التقني أو الورشة المتنقلة.",
    details: [
      { label: "الهدف", text: "جدولة التدخل في أفضل الآجال حسب التوفر وطريقة الخدمة المناسبة." },
      { label: "طرق التدخل", text: "مركز تقني أو ورشة متنقلة حسب طبيعة الحالة وراحة العميل." },
      { label: "النتيجة المنتظرة", text: "موعد واضح ومؤكد وتنظيم جاهز قبل تنفيذ الخدمة." },
      { label: "قيمة للعميل", text: "تنظيم سريع وواضح يتلاءم مع قيوده وتوقعاته." },
    ],
  },
  {
    num: "05", title: "تدخل الزجاج",
    desc: "إصلاح أو استبدال الزجاج وفق معايير الجودة والسلامة المعتمدة.",
    details: [
      { label: "الهدف", text: "تنفيذ إصلاح أو استبدال الزجاج في أفضل شروط الجودة والسلامة." },
      { label: "المحتوى", text: "تنفيذ تقني مضبوط مع احترام معايير الجودة والإجراءات المعتمدة." },
      { label: "النتيجة المنتظرة", text: "مركبة تمت معالجتها وفق متطلبات المهنة والمعايير التشغيلية." },
      { label: "قيمة للعميل", text: "خدمة موثوقة ومهنية وآمنة." },
    ],
  },
  {
    num: "06", title: "المراقبة النهائية والمتابعة",
    desc: "يتم تسليم السيارة بعد التحقق النهائي، ثم متابعة العميل بعد الخدمة لقياس رضاه.",
    details: [
      { label: "الهدف", text: "التحقق من جودة التدخل قبل التسليم ثم تمديد التجربة بمتابعة فعلية مع العميل." },
      { label: "المحتوى", text: "فحص نهائي، تسليم السيارة، جمع الآراء والمتابعة بعد الخدمة." },
      { label: "النتيجة المنتظرة", text: "نهاية مسار مضبوطة ورضا عميل قابل للقياس." },
      { label: "قيمة للعميل", text: "علاقة مستمرة بعد التدخل مع اهتمام حقيقي بجودة التجربة." },
    ],
  },
];

const highlightsFr = [
  { value: "6", label: "étapes clés" },
  { value: "2", label: "modes d'intervention" },
  { value: "48h", label: "pour le suivi client" },
];

const highlightsAr = [
  { value: "6", label: "مراحل أساسية" },
  { value: "2", label: "طريقتا تدخل" },
  { value: "48h", label: "للمتابعة مع العميل" },
];

const DetailPanel = ({ step, stepLabel }: { step: StepData; stepLabel: string }) => (
  <motion.div
    key={step.num}
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.24 }}
    className="p-5 md:p-6 rounded-[30px] bg-white/[0.84] border border-border/60 shadow-[0_24px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl"
  >
    <span className="inline-flex items-center px-3 py-2 mb-3.5 rounded-full bg-primary/[0.14] text-[11px] font-extrabold uppercase tracking-[0.14em]">
      {stepLabel} {step.num}
    </span>
    <h3 className="text-[24px] md:text-[30px] font-black leading-[1.02] tracking-[-0.03em] mb-4">
      {step.title}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {step.details.map((d, i) => (
        <div key={i} className="p-4 rounded-[22px] bg-white/[0.68] md:bg-white/[0.68] border border-border/50">
          <span className="block mb-2.5 text-[12px] font-extrabold uppercase tracking-[0.12em] text-muted-foreground/60">
            {d.label}
          </span>
          <p className="text-[14px] md:text-[15px] leading-[1.72] text-muted-foreground m-0">
            {d.text}
          </p>
        </div>
      ))}
    </div>
  </motion.div>
);

const ClientJourneySection = () => {
  const { lang, t, isRtl } = useLanguage();
  const steps = lang === "ar" ? stepsAr : stepsFr;
  const highlights = lang === "ar" ? highlightsAr : highlightsFr;
  const [activeStep, setActiveStep] = useState(0);
  const stepLabel = lang === "ar" ? "المرحلة" : "Étape";
  const detailLabel = lang === "ar" ? "عرض التفاصيل" : "Voir détail";

  return (
    <section className="relative overflow-hidden py-14 md:py-[68px] px-4 md:px-5" dir={isRtl ? "rtl" : "ltr"}>
      {/* Background blurs */}
      <div className="absolute -top-24 -left-20 w-[280px] h-[280px] rounded-full bg-primary/[0.18] blur-[70px] pointer-events-none opacity-65" />
      <div className="absolute -bottom-[90px] -right-[70px] w-[260px] h-[260px] rounded-full bg-primary/[0.14] blur-[70px] pointer-events-none opacity-65" />

      <div className="relative z-10 max-w-[1280px] mx-auto">
        {/* Topbar */}
        <div className="flex items-center justify-between gap-4 mb-7">
          <span className="inline-flex items-center px-[18px] py-3 rounded-full bg-foreground/[0.94] text-background text-[12px] font-extrabold tracking-[0.16em] uppercase shadow-[0_14px_28px_rgba(0,0,0,0.14)]">
            {t("Parcours client", "رحلة العميل")}
          </span>
        </div>

        {/* Hero area */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-5 items-end mb-8">
          <div>
            <h2 className="text-[clamp(30px,5.4vw,78px)] font-black leading-[0.95] tracking-[-0.05em] mb-3.5">
              {t(
                "Un parcours simple, fluide et rassurant à chaque étape.",
                "مسار بسيط وسلس ومطمئن في كل مرحلة."
              )}
            </h2>
            <p className="text-muted-foreground text-[14px] md:text-[17px] leading-[1.72] max-w-[760px]">
              {t(
                "De la prise de contact jusqu'au suivi après intervention, tout est pensé pour offrir une expérience claire, rapide et qualitative.",
                "من أول تواصل إلى المتابعة بعد التدخل، كل شيء مصمم لتقديم تجربة واضحة وسريعة وعالية الجودة."
              )}
            </p>
          </div>

          {/* Stats - hidden on mobile */}
          <div className="hidden md:grid grid-cols-3 gap-3.5">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="min-h-[98px] flex flex-col justify-between p-4 rounded-3xl bg-white/[0.72] border border-border/60 shadow-[0_14px_34px_rgba(0,0,0,0.06)] backdrop-blur-sm"
              >
                <strong className="block text-[24px] leading-none tracking-[-0.04em] font-black">
                  {h.value}
                </strong>
                <span className="block text-[13px] leading-[1.5] text-muted-foreground mt-1">
                  {h.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========== DESKTOP CARDS ========== */}
        <div className="hidden lg:block relative pt-4">
          {/* Wave SVG */}
          <div className="absolute left-[18px] right-[18px] top-[132px] h-[120px] z-[1] pointer-events-none">
            <svg viewBox="0 0 1600 160" preserveAspectRatio="none" className="w-full h-full block">
              <path
                d="M20 90 C120 45, 180 45, 280 90 S440 135, 540 90 S700 45, 800 90 S960 135, 1060 90 S1220 45, 1320 90 S1460 135, 1580 90"
                fill="none"
                stroke="hsl(var(--primary) / 0.9)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Cards grid */}
          <div className="relative z-[2] grid grid-cols-6 gap-7">
            {steps.map((step, i) => {
              const Icon = icons[i];
              const isActive = activeStep === i;
              return (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  onClick={() => setActiveStep(i)}
                  className={`relative min-h-[292px] p-[18px_16px] rounded-[28px] border backdrop-blur-sm cursor-pointer transition-all duration-[240ms] ease-out
                    ${isActive
                      ? "bg-white/[0.92] border-primary/50 shadow-[0_28px_64px_rgba(0,0,0,0.1)] -translate-y-2"
                      : "bg-white/[0.82] border-border/60 shadow-[0_24px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:bg-white/[0.92] hover:border-primary/50 hover:shadow-[0_28px_64px_rgba(0,0,0,0.1)]"
                    }
                    ${i % 2 !== 0 ? "mt-[58px]" : ""}
                  `}
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="inline-flex items-center justify-center min-w-[40px] h-10 px-2.5 rounded-[14px] bg-gradient-to-b from-primary to-primary/90 text-primary-foreground text-[12px] font-black tracking-[0.08em] shadow-[0_12px_22px_rgba(228,181,44,0.24)]">
                      {step.num}
                    </span>
                    <span className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-xl bg-primary/[0.16] border border-primary/30">
                      <Icon className="w-[18px] h-[18px]" />
                    </span>
                  </div>
                  <h3 className="text-[18px] leading-[1.18] tracking-[-0.02em] font-bold mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-[14px] leading-[1.7] text-muted-foreground">
                    {step.desc}
                  </p>
                  <button
                    onClick={(e) => { e.stopPropagation(); setActiveStep(i); }}
                    className="mt-[18px] inline-flex items-center gap-2 px-3.5 py-[11px] rounded-full bg-foreground/[0.94] text-background text-[12px] font-extrabold cursor-pointer transition-transform hover:-translate-y-0.5"
                  >
                    {detailLabel}
                  </button>
                </motion.article>
              );
            })}
          </div>

          {/* Detail panel - Desktop */}
          <div className="mt-7">
            <AnimatePresence mode="wait">
              <DetailPanel key={activeStep} step={steps[activeStep]} stepLabel={stepLabel} />
            </AnimatePresence>
          </div>
        </div>

        {/* ========== MOBILE / TABLET ========== */}
        <div className="lg:hidden">
          {/* Progress bar */}
          <div className="h-1.5 rounded-full bg-foreground/[0.08] overflow-hidden mb-4">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary to-primary/80"
              animate={{ width: `${((activeStep + 1) / 6) * 100}%` }}
              transition={{ duration: 0.24 }}
            />
          </div>

          {/* Horizontal scroll nav */}
          <div className="relative mt-2.5">
            {/* Wave - tablet only */}
            <div className="absolute left-3 right-3 top-11 h-[54px] z-[1] pointer-events-none hidden sm:block lg:hidden">
              <svg viewBox="0 0 1000 90" preserveAspectRatio="none" className="w-full h-full block">
                <path
                  d="M10 50 C70 22, 120 22, 180 50 S290 78, 350 50 S460 22, 520 50 S630 78, 690 50 S800 22, 860 50 S930 78, 990 50"
                  fill="none"
                  stroke="hsl(var(--primary) / 0.85)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="relative z-[2] flex gap-3.5 overflow-x-auto pb-3.5 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-foreground/[0.12]">
              {steps.map((step, i) => {
                const Icon = icons[i];
                const isActive = activeStep === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`flex-shrink-0 w-[min(86vw,240px)] min-h-[136px] p-3.5 rounded-[22px] border text-start snap-start transition-all duration-[220ms]
                      ${isActive
                        ? "bg-white/[0.96] border-primary/60 shadow-[0_18px_36px_rgba(228,181,44,0.12)]"
                        : "bg-white/[0.82] border-border/60 shadow-[0_14px_34px_rgba(0,0,0,0.06)]"
                      }
                    `}
                  >
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="inline-flex items-center justify-center min-w-[40px] h-10 px-2.5 rounded-[14px] bg-gradient-to-b from-primary to-primary/90 text-primary-foreground text-[12px] font-black tracking-[0.08em] shadow-[0_12px_22px_rgba(228,181,44,0.24)]">
                        {step.num}
                      </span>
                      <span className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-xl bg-primary/[0.16] border border-primary/30">
                        <Icon className="w-[18px] h-[18px]" />
                      </span>
                    </div>
                    <p className="text-[14px] sm:text-[15px] leading-[1.35] font-extrabold tracking-[-0.01em] m-0">
                      {step.title}
                    </p>
                    <div className="inline-flex items-center gap-2 mt-3.5 text-[12px] font-extrabold text-foreground/[0.78]">
                      <span className="w-5 h-5 rounded-full inline-flex items-center justify-center bg-gradient-to-b from-primary to-primary/80 text-[14px] font-black leading-none flex-shrink-0">
                        +
                      </span>
                      {detailLabel}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail panel - Mobile */}
          <div className="mt-0">
            <AnimatePresence mode="wait">
              <DetailPanel key={activeStep} step={steps[activeStep]} stepLabel={stepLabel} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientJourneySection;
