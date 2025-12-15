import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AIPricingSection } from "@/components/AIPricingSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { ProcessSection } from "@/components/ProcessSection";
import { AppShowcase } from "@/components/AppShowcase";
import { ServicesSection } from "@/components/ServicesSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { WebsiteTemplates } from "@/components/WebsiteTemplates";
import { CookieBanner } from "@/components/CookieBanner";
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
import { PricingTableNew } from "@/components/PricingTableNew";

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
        <AchievementsSection />
        <WebsiteTemplates />
        <TestimonialsSection />
        <CTASection />
        <TechStack />
        <PricingTableNew />
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
        <CookieBanner />
    </div>
  );
};

export default Index;
