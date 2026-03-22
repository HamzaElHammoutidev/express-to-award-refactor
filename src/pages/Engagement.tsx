import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
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
      <PageHeader
        breadcrumbs={[{ label: "Engagement", labelAr: "التزامنا" }]}
        title="L'engagement qui fait la "
        titleAr="الالتزام الذي يصنع "
        titleHighlight="différence !"
        titleHighlightAr="الفرق !"
      />
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
