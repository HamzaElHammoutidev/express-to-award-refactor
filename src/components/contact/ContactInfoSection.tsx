import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactInfoSection = () => {
  const { t } = useLanguage();

  const cards = [
    {
      icon: MapPin,
      title: t("Notre adresse", "عنواننا"),
      desc: t(
        "Quartier Les Camps, rue Émile Brunet, immeuble Fajr, Ain Borja, Casablanca.",
        "حي لي كامب، شارع إميل بروني، عمارة الفجر، عين البرجة، الدار البيضاء."
      ),
      link: { text: t("Voir l'itinéraire", "عرض الاتجاه"), href: "#" },
    },
    {
      icon: Phone,
      title: t("Informations de contact", "معلومات الاتصال"),
      desc: t(
        "Appelez-nous ou ouvrez un chat directement avec notre équipe.",
        "اتصل بنا مباشرة أو افتح محادثة مع فريقنا."
      ),
      links: [
        { text: "+212 5 22 66 31 66", href: "tel:+212522663166" },
        { text: "+212 6 61 24 70 09", href: "https://wa.me/212661247009" },
      ],
    },
    {
      icon: Mail,
      title: t("Support en direct", "دعم مباشر"),
      desc: t(
        "Service de chat en direct et accompagnement par email pour toute demande d'information.",
        "خدمة محادثة مباشرة ومرافقة عبر البريد الإلكتروني لكل استفسار أو طلب."
      ),
      link: { text: "serviceclient@parebriseexpress.ma", href: "mailto:serviceclient@parebriseexpress.ma" },
    },
  ];

  return (
    <section className="section-padding py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-card/60 border border-border/40 text-muted-foreground text-[11px] font-bold uppercase tracking-[0.1em] mb-4">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.12)]" />
            {t("Coordonnées", "معلومات التواصل")}
          </div>
          <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-3">
            {t("Toutes les informations pour nous ", "كل المعلومات التي تحتاجها ")}
            <span className="italic text-gradient-gold">{t("joindre rapidement", "للتواصل معنا بسرعة")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <motion.article
              key={i}
              className="bg-card/70 border border-border/30 rounded-[22px] p-6 shadow-sm hover:-translate-y-1 hover:border-primary/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-11 h-11 rounded-[14px] grid place-items-center bg-primary/10 text-primary mb-4">
                <card.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{card.desc}</p>
              {"links" in card && card.links ? (
                <div className="space-y-1">
                  {card.links.map((l, j) => (
                    <a key={j} href={l.href} className="block text-sm font-bold text-primary hover:underline">{l.text}</a>
                  ))}
                </div>
              ) : card.link ? (
                <a href={card.link.href} className="text-sm font-bold text-primary hover:underline">{card.link.text}</a>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
