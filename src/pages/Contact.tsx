import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactFaqSection from "@/components/contact/ContactFaqSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
      <ContactFaqSection />
      <Footer />
    </div>
  );
};

export default Contact;
