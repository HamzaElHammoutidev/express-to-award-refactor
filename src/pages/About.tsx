import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import AboutStorySection from "@/components/about/AboutStorySection";
import AboutValuesSection from "@/components/about/AboutValuesSection";
import AboutTimelineSection from "@/components/about/AboutTimelineSection";
import AboutMediaSection from "@/components/about/AboutMediaSection";
import AboutEventsCarousel from "@/components/about/AboutEventsCarousel";
import AboutCtaSection from "@/components/about/AboutCtaSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <div className="h-20" /> {/* Navbar spacer */}
      <AboutHeroSection />
      <AboutStorySection />
      <AboutValuesSection />
      <AboutTimelineSection />
      <AboutMediaSection />
      <AboutEventsCarousel />
      <AboutCtaSection />
      <Footer />
    </div>
  );
};

export default About;
