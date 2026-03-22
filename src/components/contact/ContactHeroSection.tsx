import { motion } from "framer-motion";

import { useLanguage } from "@/contexts/LanguageContext";

const ContactHeroSection = () => {
  const { t } = useLanguage();

  const pills = [
    { fr: "Adresse", ar: "العنوان" },
    { fr: "Téléphone", ar: "الهاتف" },
    { fr: "WhatsApp", ar: "واتساب" },
    { fr: "Email", ar: "البريد الإلكتروني" },
  ];

  const cards = [
    { title: t("Casablanca", "الدار البيضاء"), desc: t("Quartier Les Camps, rue Émile Brunet, immeuble Fajr, Ain Borja", "حي لي كامب، شارع إميل بروني، عمارة الفجر، عين البرجة") },
    { title: "+212 5 22 66 31 66", desc: t("Service client", "خدمة العملاء") },
    { title: "serviceclient@parebriseexpress.ma", desc: t("Support en direct", "دعم مباشر") },
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-surface" />
      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-card/60 border border-border/40 text-muted-foreground text-[11px] font-bold uppercase tracking-[0.1em] mb-4">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.12)]" />
              {t("Contactez-nous", "اتصل بنا")}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[0.96] tracking-tight mb-5">
              {t("Obtenez toutes nos ", "احصل على كل ")}
              <span className="italic text-gradient-gold">{t("informations", "معلوماتنا")}</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-lg">
              {t(
                "Notre équipe vous accompagne pour toute question liée à la réparation, au remplacement de vitrage automobile, à l'atelier mobile ou à la prise en charge de votre dossier.",
                "فريقنا رهن إشارتكم للإجابة عن كل الأسئلة المتعلقة بإصلاح أو استبدال الزجاج، بالورشة المتنقلة، أو بمتابعة ملفاتكم في أفضل الظروف."
              )}
            </p>

            <div className="flex flex-wrap gap-2.5">
              {pills.map((pill, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/70 border border-border/40 text-foreground text-[13px] font-bold">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {t(pill.fr, pill.ar)}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-[26px] overflow-hidden bg-gradient-to-br from-foreground to-foreground/90 shadow-2xl min-h-[380px] lg:min-h-[420px]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.16),transparent_34%)]" />
            <div className="relative z-10 flex flex-col justify-between h-full p-5">
              <div className="rounded-[22px] overflow-hidden bg-card/5 border border-card/10 min-h-[200px] flex items-center justify-center">
                <div className="text-card/30 text-sm font-sans">{t("Image du centre", "صورة المركز")}</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                {cards.map((card, i) => (
                  <div key={i} className="bg-card/5 border border-card/10 backdrop-blur-sm rounded-2xl p-3.5">
                    <strong className="block text-primary text-sm leading-tight mb-1 break-all">{card.title}</strong>
                    <span className="block text-[11px] text-card/60 uppercase tracking-[0.08em]">{card.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
