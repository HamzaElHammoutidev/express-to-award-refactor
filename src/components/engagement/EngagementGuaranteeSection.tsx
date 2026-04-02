import { motion } from "framer-motion";
import { Shield, Droplets, Wrench, Phone, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const guaranteeItems = [
  { icon: Shield, fr: "La pose lors du remplacement de votre vitrage", ar: "التركيب عند استبدال الزجاج الخاص بك" },
  { icon: Droplets, fr: "L'étanchéité", ar: "العزل المائي" },
  { icon: Wrench, fr: "La réparation des impacts", ar: "إصلاح الشروخ والصدمات" },
];

const EngagementGuaranteeSection = () => {
  const { t } = useLanguage();

  return (
    <section className="pb-20 md:pb-[92px]">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="relative bg-card/70 border border-border rounded-[28px] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
          {/* Decorative orb */}
          <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.08),transparent_70%)] pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.06),transparent_70%)] pointer-events-none" />

          <div className="relative z-[1] p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
              {/* Left: Text */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-extrabold uppercase tracking-[0.1em] mb-5">
                  <CheckCircle size={14} />
                  {t("Garantie à vie", "ضمان مدى الحياة")}
                </div>

                <h2 className="text-[clamp(26px,3.4vw,42px)] leading-[1.1] tracking-[-0.04em] mb-5">
                  {t(
                    "Chaque intervention réalisée avec ",
                    "كل تدخل يتم بكل "
                  )}
                  <span className="text-primary italic font-bold">
                    {t("exigence", "احترافية")}
                  </span>
                  {t(" pour garantir votre sécurité", " لضمان سلامتكم")}
                </h2>

                <p className="text-muted-foreground text-[clamp(16px,1.5vw,18px)] leading-[1.8] mb-6">
                  {t(
                    "Nous vous faisons bénéficier d'une garantie à vie sur l'ensemble des prestations réalisées dans notre réseau, couvrant :",
                    "نقدم لكم ضمانًا مدى الحياة على جميع الخدمات المنجزة في شبكتنا، يشمل:"
                  )}
                </p>

                {/* Guarantee items */}
                <div className="space-y-3.5 mb-8">
                  {guaranteeItems.map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3.5 bg-background/50 border border-border/60 rounded-2xl px-5 py-3.5"
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <div className="w-9 h-9 rounded-xl grid place-items-center bg-primary/10 text-primary shrink-0">
                        <item.icon size={18} strokeWidth={2} />
                      </div>
                      <span className="text-[15px] md:text-base leading-[1.5]">
                        {t(item.fr, item.ar)}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <p className="text-muted-foreground text-[clamp(15px,1.4vw,17px)] leading-[1.8]">
                  {t(
                    "Votre garantie est activée automatiquement, pour vous assurer une intervention sécurisée et aux normes internationales.",
                    "يتم تفعيل ضمانكم تلقائيًا، لضمان تدخل آمن ومطابق للمعايير الدولية."
                  )}
                </p>
              </motion.div>

              {/* Right: Contact + disclaimer */}
              <motion.div
                className="flex flex-col gap-5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Phone CTA */}
                <div className="bg-primary/10 border border-primary/20 rounded-[22px] p-7 text-center">
                  <div className="w-14 h-14 rounded-2xl grid place-items-center bg-primary/15 text-primary mx-auto mb-4">
                    <Phone size={26} strokeWidth={1.8} />
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">
                    {t("Pour toute demande, notre service client est à votre écoute", "لأي طلب، خدمة العملاء في استماعكم")}
                  </p>
                  <a
                    href="tel:0522663166"
                    className="inline-block text-[clamp(24px,3vw,36px)] font-black tracking-[-0.03em] text-primary hover:opacity-80 transition-opacity"
                    dir="ltr"
                  >
                    0522 66 31 66
                  </a>
                </div>

                {/* Disclaimer */}
                <div className="bg-muted/40 border border-border/50 rounded-2xl px-6 py-5">
                  <p className="text-muted-foreground text-xs leading-[1.7] italic">
                    {t(
                      "*Garantie applicable aux prestations réalisées par Pare-Brise Express, couvrant les défauts de pose et d'étanchéité, hors dommages liés à des causes externes (chocs, accidents, ou usure naturelle du véhicule).",
                      "*الضمان ينطبق على الخدمات المنجزة من طرف باري بريز إكسبريس، ويغطي عيوب التركيب والعزل، باستثناء الأضرار الناتجة عن أسباب خارجية (صدمات، حوادث أو التآكل الطبيعي للمركبة)."
                    )}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementGuaranteeSection;
