import { HeroSection } from "@/components/HeroSection";
import { AIPricingSection } from "@/components/AIPricingSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustSection } from "@/components/TrustSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AIPricingSection />
      <FeaturesGrid />
      <ProcessSection />
      <ServicesSection />
      <TrustSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
