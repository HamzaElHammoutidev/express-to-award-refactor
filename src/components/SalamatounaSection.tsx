import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const SalamatounaSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative bg-primary">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center">
            {/* IMANOR Logo - large and overflowing */}
            <div className="flex-shrink-0 relative z-10 -my-10 md:-my-14">
              <div className="w-44 h-44 md:w-64 md:h-64 rounded-full bg-card flex items-center justify-center shadow-2xl border-4 border-card">
                <img
                  src="https://parebriseexpress.ma/images/assets/imanor-orig.png"
                  alt="IMANOR - Certification Salamatouna"
                  className="h-28 md:h-44 object-contain"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="flex-1 py-6 md:py-8 px-4 md:px-10">
              <p className="text-xs md:text-sm text-primary-foreground leading-[1.8] font-normal">
                {t(
                  "Certifié par IMANOR, Pare-Brise Express met plus de dix ans d'expertise à votre service pour la réparation et le remplacement des vitrages de vos véhicules. Que vous ayez un impact, une fissure ou un bris de glace, nous vous offrons des solutions certifiées, adaptées à tous types de véhicules, qu'il s'agisse de voitures légères ou de poids lourds. Nos certifications vous garantissent des interventions conformes aux standards les plus exigeants du secteur, pour une tranquillité d'esprit totale.",
                  "حاصلة على شهادة IMANOR، تضع بار بريز إكسبرس أكثر من عشر سنوات من الخبرة في خدمتكم لإصلاح واستبدال زجاج سياراتكم. سواء كان لديكم تأثير أو شق أو كسر في الزجاج، نقدم لكم حلولاً معتمدة ومناسبة لجميع أنواع المركبات. شهاداتنا تضمن لكم تدخلات مطابقة لأعلى المعايير في القطاع."
                )}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SalamatounaSection;
