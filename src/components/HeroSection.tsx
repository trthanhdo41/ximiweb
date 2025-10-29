import { Button } from "@/components/ui/button";
import { Smartphone, Users, Package, Headphones, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTextRotation } from "@/hooks/useTextRotation";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useCountUp } from "@/hooks/useCountUp";
import { useState } from "react";
import { GL } from "@/components/gl";

export const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hovering, setHovering] = useState(false);
  const { currentWord, isAnimating } = useTextRotation(
    ["chuyên nghiệp", "hiện đại", "uy tín"],
    2500
  );
  
  const { displayedText } = useTypewriter(
    "Thiết kế website chuyên nghiệp, phát triển web app, mobile app và giải pháp AI thông minh cho doanh nghiệp. Từ ý tưởng đến sản phẩm hoàn thiện với công nghệ tiên tiến nhất.",
    30
  );

  const count1 = useCountUp(50, 2000, isVisible);
  const count2 = useCountUp(3, 2000, isVisible);
  const count3 = useCountUp(100, 2000, isVisible);
  
  const stats = [
    { icon: Package, value: count1, suffix: "+", label: "Dự án thành công" },
    { icon: Smartphone, value: count2, suffix: "+ năm", label: "Kinh nghiệm" },
    { icon: Users, value: count3, suffix: "%", label: "Khách hài lòng" },
    { icon: Headphones, value: "24/7", suffix: "", label: "Hỗ trợ tận tâm" },
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32 min-h-screen flex items-center -mt-20">
      {/* Particle Wave Background - extends behind header */}
      <div className="absolute inset-0 top-[-80px] z-0">
        <GL hovering={hovering} />
      </div>
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          <div ref={ref} className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 px-4 py-2 text-sm font-medium text-primary shadow-lg">
              <Package className="h-4 w-4" />
              Giải pháp công nghệ toàn diện cho doanh nghiệp
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
              Thiết kế Website
              <br />
              <span className="inline-block mt-2">
                Web App & Mobile App{" "}
                <span 
                  className={`text-primary transition-all duration-500 ${
                    isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                  }`}
                >
                  {currentWord}
                </span>
              </span>
            </h1>
            
            <p className="text-lg text-white/90 md:text-xl max-w-3xl mx-auto min-h-[4rem] md:min-h-[3.5rem] drop-shadow">
              {displayedText}
              <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse"></span>
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Button 
                size="lg" 
                className="text-base font-semibold h-14 px-8 hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                onClick={() => window.open('https://zalo.me/0888889805', '_blank')}
              >
                Tư vấn miễn phí
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-base font-semibold h-14 px-8 bg-white text-primary hover:bg-white/90 transition-all shadow-lg"
                onClick={() => window.open('tel:+84888889805', '_self')}
              >
                Gọi 088 888 9805
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8 md:grid-cols-4 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <stat.icon className="h-5 w-5 text-primary" />
                    <p className="text-2xl font-bold text-white drop-shadow">
                      {typeof stat.value === 'number' ? Math.round(stat.value) : stat.value}{stat.suffix}
                    </p>
                  </div>
                  <p className="text-sm text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
