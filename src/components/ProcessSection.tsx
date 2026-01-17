import appSearchScreen from "@/assets/mockups/search-screen.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GL } from "@/components/gl";
import { useState } from "react";
import { ScrollReveal, TextReveal, WavyText } from "./ScrollReveal";

export const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hovering, setHovering] = useState(false);
  
      const steps = [
        {
          number: "01",
          title: "Mở app XimiTech",
          description: "Tải app và đăng ký tài khoản nhanh chóng",
        },
        {
          number: "02",
          title: "Định giá thiết bị AI",
          description: "AI định giá chính xác chỉ trong vài giây",
        },
        {
          number: "03",
          title: "Chọn dịch vụ",
          description: "Cầm – Thuê – Nâng đời theo nhu cầu của bạn",
        },
        {
          number: "04",
          title: "XimiTech đến tận nơi",
          description: "Nhận tiền/máy tại nhà trong 60 phút",
        },
      ];

  return (
    <section id="process" className="relative py-16 md:py-24 overflow-hidden">
      {/* Particle Wave Background */}
      <div className="absolute inset-0 z-0">
        <GL hovering={hovering} />
      </div>
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div ref={ref} className="text-center space-y-4 mb-12 md:mb-16">
          <div className="flex justify-center items-center flex-wrap gap-x-3">
            <WavyText 
              text="Quy trình" 
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white"
            />
            <WavyText 
              text="4 bước đơn giản" 
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary"
            />
          </div>
          
          <div className="flex justify-center">
            <TextReveal 
              text="Từ định giá đến nhận tiền/máy mới, mọi thứ đều nhanh chóng và minh bạch"
              className="text-lg text-white/70 max-w-3xl mx-auto justify-center"
            />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mb-12">
          {steps.map((step, index) => (
            <div key={index} className={`relative group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 150}ms` }}>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 hover:bg-white/10 hover:-translate-y-2">
                <div className="mb-4 text-6xl font-bold text-primary/60 group-hover:text-primary transition-colors">
                  {step.number}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{step.title}</h3>
                <p className="text-sm text-white/70">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden xl:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className={`relative flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative max-w-sm">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[3rem] blur-2xl transition-all"></div>
            <img
              src={appSearchScreen}
              alt="Search Screen"
              className="relative h-[350px] md:h-[400px] lg:h-[450px] w-auto object-contain drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
