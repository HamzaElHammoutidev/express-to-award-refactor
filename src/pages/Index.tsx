import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SalamatounaSection from "@/components/SalamatounaSection";
import CarouselSection from "@/components/CarouselSection";
import ServicesSection from "@/components/ServicesSection";
import MapSection from "@/components/MapSection";
import ProcessSection from "@/components/ProcessSection";
import VideoSection from "@/components/VideoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersLogoSection from "@/components/PartnersLogoSection";
import Footer from "@/components/Footer";
import FloatingDeclarationButton from "@/components/FloatingDeclarationButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SalamatounaSection />
      <CarouselSection />
      <ServicesSection />
      <MapSection />
      <ProcessSection />
      <VideoSection />
      <TestimonialsSection />
      <PartnersLogoSection />
      <Footer />
      <FloatingDeclarationButton />
    </div>
  );
};

export default Index;
