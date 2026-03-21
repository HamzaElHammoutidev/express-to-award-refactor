import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarrieresHeroSection from "@/components/carrieres/CarrieresHeroSection";
import CarrieresValuesSection from "@/components/carrieres/CarrieresValuesSection";
import CarrieresCultureSection from "@/components/carrieres/CarrieresCultureSection";
import CarrieresOffersSection from "@/components/carrieres/CarrieresOffersSection";
import CarrieresSpontaneousSection from "@/components/carrieres/CarrieresSpontaneousSection";
import CarrieresSeoSection from "@/components/carrieres/CarrieresSeoSection";
import CarrieresCtaSection from "@/components/carrieres/CarrieresCtaSection";

const Carrieres = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <div className="h-20" />
      <CarrieresHeroSection />
      <CarrieresValuesSection />
      <CarrieresCultureSection />
      <CarrieresOffersSection />
      <CarrieresSpontaneousSection />
      <CarrieresSeoSection />
      <CarrieresCtaSection />
      <Footer />
    </div>
  );
};

export default Carrieres;
