import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactFormSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <section className="section-padding py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.86fr_1.14fr] gap-6 items-stretch">
        {/* Media side */}
        <motion.div
          className="relative rounded-[26px] overflow-hidden bg-foreground shadow-xl min-h-[360px]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 to-foreground" />
          <div className="absolute inset-x-4 bottom-4 p-4 rounded-2xl bg-foreground/60 border border-card/10 backdrop-blur-sm">
            <strong className="block text-primary text-[12px] uppercase tracking-[0.08em] mb-1.5">
              {t("Contact direct", "تواصل مباشر")}
            </strong>
            <span className="text-[15px] text-card/80 leading-relaxed">
              {t(
                "Une équipe disponible pour répondre à vos questions, vous orienter et vous accompagner dans vos démarches.",
                "فريق متاح للإجابة على أسئلتكم وتوجيهكم ومرافقتكم في مختلف الإجراءات."
              )}
            </span>
          </div>
        </motion.div>

        {/* Form side */}
        <motion.form
          className="bg-gradient-to-br from-card/70 to-card/50 border border-border/30 rounded-[26px] p-6 md:p-8 shadow-sm"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-card/60 border border-border/40 text-muted-foreground text-[11px] font-bold uppercase tracking-[0.1em] mb-4">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.12)]" />
              {t("Message", "رسالة")}
            </div>
            <h2 className="text-2xl md:text-3xl font-serif leading-tight mb-3">
              {t("Des questions ? ", "هل لديكم أسئلة؟ ")}
              <span className="italic text-gradient-gold">{t("Contactez-nous via message", "تواصلوا معنا عبر رسالة")}</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(
                "Renseignez vos coordonnées et votre demande. Notre équipe reviendra vers vous dans les meilleurs délais.",
                "املأوا معلوماتكم وأرسلوا طلبكم، وسيتواصل معكم فريقنا في أقرب وقت ممكن."
              )}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-[13px] font-bold tracking-[0.04em] mb-2">{t("Nom complet", "الاسم الكامل")}</label>
              <input
                type="text"
                placeholder={t("Votre nom complet", "الاسم الكامل")}
                className="w-full min-h-[50px] rounded-2xl border border-border/60 bg-card/80 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 focus:shadow-[0_0_0_4px_hsl(var(--primary)/0.08)] transition-all"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-[13px] font-bold tracking-[0.04em] mb-2">{t("Email", "البريد الإلكتروني")}</label>
              <input
                type="email"
                placeholder={t("votre@email.com", "you@email.com")}
                className="w-full min-h-[50px] rounded-2xl border border-border/60 bg-card/80 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 focus:shadow-[0_0_0_4px_hsl(var(--primary)/0.08)] transition-all"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-[13px] font-bold tracking-[0.04em] mb-2">{t("Message", "الرسالة")}</label>
              <textarea
                placeholder={t("Écrivez votre message", "اكتب رسالتك هنا")}
                rows={5}
                className="w-full rounded-2xl border border-border/60 bg-card/80 p-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 focus:shadow-[0_0_0_4px_hsl(var(--primary)/0.08)] transition-all resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center min-h-[50px] px-8 rounded-full bg-primary text-primary-foreground font-bold text-sm tracking-[0.05em] shadow-[0_14px_32px_hsl(var(--primary)/0.24)] hover:-translate-y-0.5 transition-all duration-300"
            >
              {t("Envoyer le message", "إرسال الرسالة")}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactFormSection;
