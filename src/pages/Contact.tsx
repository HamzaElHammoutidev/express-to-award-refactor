import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactFaqSection from "@/components/contact/ContactFaqSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <div className="h-20" />
      <PageHeader
        breadcrumbs={[{ label: "Contact", labelAr: "تواصل معنا" }]}
        title="Obtenez toutes nos "
        titleAr="احصل على كل "
        titleHighlight="informations"
        titleHighlightAr="معلوماتنا"
      />
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
      <ContactFaqSection />
      <Footer />
    </div>
  );
};

export default Contact;
