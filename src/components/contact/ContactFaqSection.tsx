import { motion } from "framer-motion";
import { Clock, Shield, MapPin, Truck, FileText, Award, CheckCircle, Wrench } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const faqs = [
  {
    icon: Clock,
    q: { fr: "Les délais pour une intervention", ar: "ما هي المدة اللازمة للتدخل؟" },
    a: { fr: "Pour les délais d'intervention, la réparation prend entre 1h et 1h30 pour les véhicules de tourisme, et entre 2h et 2h30 maximum pour les camions et les autocars.", ar: "بالنسبة لمدة التدخل، فإن إصلاح الزجاج يستغرق بين ساعة وساعة ونصف بالنسبة لسيارات السياحة، وبين ساعتين وساعتين ونصف كحد أقصى بالنسبة للشاحنات والحافلات." },
  },
  {
    icon: Shield,
    q: { fr: "La prise en charge par l'assurance", ar: "هل يتم التكفل من طرف شركة التأمين؟" },
    a: { fr: "Nous collaborons avec toutes les compagnies d'assurance.", ar: "نحن نتعاون مع جميع شركات التأمين." },
  },
  {
    icon: MapPin,
    q: { fr: "Les zones géographiques couvertes par nos services", ar: "ما هي المناطق الجغرافية التي تغطيها خدماتكم؟" },
    a: { fr: "Nos services sont disponibles partout au Maroc.", ar: "خدماتنا متوفرة في جميع أنحاء المغرب." },
  },
  {
    icon: Truck,
    q: { fr: "Les frais pour une intervention Atelier mobile", ar: "ما هي تكاليف التدخل عبر خدمة الورشة المتنقلة؟" },
    a: { fr: "L'intervention via notre service atelier mobile est gratuite.", ar: "التدخل عبر خدمة الورشة المتنقلة مجاني." },
  },
  {
    icon: FileText,
    q: { fr: "Quels documents fournir pour une prise en charge rapide ?", ar: "ما هي الوثائق المطلوبة للحصول على تكفل سريع؟" },
    a: { fr: "Que ce soit pour une prise en charge par l'assurance ou pour un particulier, il suffit de préciser le type de traitement et de fournir vos coordonnées afin que nous puissions vous appeler, et éviter de partager des documents confidentiels sur le site.", ar: "سواء كان الأمر يتعلق بتكفل من طرف شركة التأمين أو بطلب من طرف زبون خاص، يكفي تحديد نوع الخدمة وتزويدنا بمعلومات الاتصال الخاصة بكم حتى نتمكن من الاتصال بكم، مع تجنب مشاركة الوثائق السرية على الموقع." },
  },
  {
    icon: Award,
    q: { fr: "Offrez-vous une garantie sur vos réparations ou remplacements ?", ar: "هل تقدمون ضماناً على الإصلاحات أو الاستبدال؟ وما هي مدته؟" },
    a: { fr: "Oui, nous offrons une garantie à vie (sur l'étanchéité et le défaut de montage).", ar: "نعم، نقدم ضماناً مدى الحياة على الإحكام ومنع تسرب الماء وعلى عيوب التركيب." },
  },
  {
    icon: CheckCircle,
    q: { fr: "Utilisez-vous des vitrages certifiés ou d'origine constructeur ?", ar: "هل تستعملون زجاجاً معتمداً أو مطابقاً لمعايير المصنع؟" },
    a: { fr: "Chez Pare-Brise Express, nous garantissons des vitrages automobiles de qualité, conformes aux spécifications automobiles qui répondent aux standards internationaux et à la norme européenne.", ar: "في باري بريز إكسبريس، نضمن زجاج سيارات عالي الجودة، مطابق للمواصفات التقنية ويستجيب للمعايير الدولية والمعيار الأوروبي." },
  },
  {
    icon: Wrench,
    q: { fr: "La réparation des impacts", ar: "إصلاح الصدمات" },
    a: { fr: "Nous réalisons des réparations rapides des impacts en 30 minutes, grâce à de nouvelles techniques exclusives.", ar: "ننجز إصلاحات سريعة للصدمات في 30 دقيقة بفضل تقنيات جديدة وحصرية." },
  },
];

const ContactFaqSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-card/60 border border-border/40 text-muted-foreground text-[11px] font-bold uppercase tracking-[0.1em] mb-4">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.12)]" />
            {t("FAQ", "الأسئلة الشائعة")}
          </div>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-3">
            {t("Toutes les ", "كل ")}
            <span className="italic text-gradient-gold">{t("questions fréquentes", "الأسئلة المتكررة")}</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            {t(
              "Retrouvez l'ensemble des questions et réponses présentes sur la page actuelle, dans une FAQ plus claire et plus agréable à parcourir.",
              "جميع الأسئلة والأجوبة الحالية تم إدراجها هنا ضمن FAQ أوضح وأسهل في التصفح."
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="flex gap-4 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 grid place-items-center">
                <faq.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-bold mb-1.5">{t(faq.q.fr, faq.q.ar)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(faq.a.fr, faq.a.ar)}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-base text-muted-foreground mb-4">
            {t("Vous n'avez pas obtenu votre réponse ?", "لم تجد إجابتك؟")}
          </p>
          <a
            href="#contact-form"
            className="inline-block px-8 py-4 rounded-full border border-primary text-primary font-bold text-[13px] uppercase tracking-[0.15em] hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            {t("Contactez-nous", "تواصلوا معنا")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFaqSection;
