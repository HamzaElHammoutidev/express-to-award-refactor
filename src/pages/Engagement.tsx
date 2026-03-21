import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EngagementHeroSection from "@/components/engagement/EngagementHeroSection";
import EngagementCertsSection from "@/components/engagement/EngagementCertsSection";
import EngagementPillarsSection from "@/components/engagement/EngagementPillarsSection";
import EngagementProcessSection from "@/components/engagement/EngagementProcessSection";
import EngagementMobileSection from "@/components/engagement/EngagementMobileSection";
import EngagementSeoSection from "@/components/engagement/EngagementSeoSection";
import EngagementEventsSection from "@/components/engagement/EngagementEventsSection";
import EngagementCtaSection from "@/components/engagement/EngagementCtaSection";

const Engagement = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <div className="h-20" />
      <EngagementHeroSection />
      <EngagementCertsSection />
      <EngagementPillarsSection />
      <EngagementProcessSection />
      <EngagementMobileSection />
      <EngagementSeoSection />
      <EngagementEventsSection />
      <EngagementCtaSection />
      <Footer />
    </div>
  );
};

export default Engagement;
