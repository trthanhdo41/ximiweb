import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AIPricingSection } from "@/components/AIPricingSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { ProcessSection } from "@/components/ProcessSection";
import { AppShowcase } from "@/components/AppShowcase";
import { ServicesSection } from "@/components/ServicesSection";
import { StatsHighlight } from "@/components/StatsHighlight";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { FeedbackSection } from "@/components/FeedbackSection";
import { EmojiGame } from "@/components/EmojiGame";
import { TechStack } from "@/components/TechStack";
import { AboutUs } from "@/components/AboutUs";
import { StatsCharts } from "@/components/StatsCharts";
import { FAQ } from "@/components/FAQ";
import { LocationMap } from "@/components/LocationMap";
import { XimiTechParticleSection } from "@/components/XimiTechParticleSection";
import { Footer } from "@/components/Footer";
import { SimpleChatBot } from "@/components/SimpleChatBot";
import { FloatingButtons } from "@/components/FloatingButtons";
import { WordCloudSection } from "@/components/WordCloudSection";
import { PricingTable } from "@/components/PricingTable";

const Index = () => {
  return (
    <div className="min-h-screen">
        <Header />
        <HeroSection />
        <WordCloudSection />
        {/* <AIPricingSection /> */} {/* Removed - Rentino specific */}
        {/* <FeaturesGrid /> */} {/* Removed - Duplicate content */}
        {/* <ProcessSection /> */} {/* Removed - Rentino specific */}
        {/* <AppShowcase /> */} {/* Removed - Rentino app mockups */}
        <ServicesSection />
        <StatsHighlight />
        <TestimonialsSection />
        <CTASection />
        <TechStack />
        <PricingTable />
        <AboutUs />
        <StatsCharts />
        <EmojiGame />
        <FAQ />
        <FeedbackSection />
        <LocationMap />
        <XimiTechParticleSection />
        <Footer />
        <SimpleChatBot />
        <FloatingButtons />
    </div>
  );
};

export default Index;
