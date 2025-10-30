import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AIPricingSection } from "@/components/AIPricingSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { ProcessSection } from "@/components/ProcessSection";
import { AppShowcase } from "@/components/AppShowcase";
import { ServicesSection } from "@/components/ServicesSection";
import { StatsHighlight } from "@/components/StatsHighlight";
import { TrustSection } from "@/components/TrustSection";
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
import { Windows11LockScreen } from "@/components/Windows11LockScreen";

const Index = () => {
  const [showLockScreen, setShowLockScreen] = useState(true);

  const handleUnlock = () => {
    setShowLockScreen(false);
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {showLockScreen && (
          <Windows11LockScreen onUnlock={handleUnlock} />
        )}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: showLockScreen ? 0 : 1,
          y: showLockScreen ? 20 : 0
        }}
        transition={{ 
          duration: 0.8,
          delay: showLockScreen ? 0 : 0.3,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        style={{
          pointerEvents: showLockScreen ? "none" : "auto"
        }}
      >
        <Header />
        <HeroSection />
        {/* <AIPricingSection /> */} {/* Removed - Rentino specific */}
        <FeaturesGrid />
        {/* <ProcessSection /> */} {/* Removed - Rentino specific */}
        {/* <AppShowcase /> */} {/* Removed - Rentino app mockups */}
        <ServicesSection />
        <StatsHighlight />
        <TrustSection />
        <TestimonialsSection />
        <CTASection />
        <TechStack />
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
      </motion.div>
    </div>
  );
};

export default Index;
