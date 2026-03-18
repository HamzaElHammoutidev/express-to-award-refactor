import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const SalamatounaSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative bg-primary/90 backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center">
            {/* IMANOR Logo */}
            <div className="flex-shrink-0 relative z-10 -my-8 md:-my-10">
              <motion.div
                className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-card flex items-center justify-center shadow-xl border-4 border-card cursor-pointer overflow-hidden"
                whileHover={{ scale: 1.08, rotate: 3, boxShadow: "0 20px 40px rgba(228,181,44,0.3)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src="https://parebriseexpress.ma/images/assets/imanor-orig.png"
                  alt="IMANOR - Certification Salamatouna"
                  className="h-24 md:h-40 object-contain"
                />
              </motion.div>
            </div>

            {/* Text content */}
            <div className="flex-1 py-5 md:py-7 px-4 md:px-10">
              <p className="text-xs md:text-base text-primary-foreground leading-[1.7] font-normal">
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
