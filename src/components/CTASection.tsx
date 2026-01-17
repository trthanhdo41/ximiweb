import { Button } from "@/components/ui/button";
import { Zap, Home, Heart, ShieldCheck, Phone } from "lucide-react";
import mockupImage from "@/assets/pngwing.com.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ScrollReveal, TextReveal, WavyText } from "./ScrollReveal";

export const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const benefits = [
    {
      icon: Zap,
      title: "Bàn giao nhanh",
      description: "Website trong 3-7 ngày, App trong 1-2 tuần",
    },
    {
      icon: Home,
      title: "Code chất lượng",
      description: "Clean code, chuẩn best practices, dễ maintain",
    },
    {
      icon: Heart,
      title: "Hỗ trợ tận tâm",
      description: "24/7 support, tư vấn nhiệt tình, training miễn phí",
    },
    {
      icon: ShieldCheck,
      title: "Bảo hành 12 tháng",
      description: "Sửa lỗi không giới hạn, cập nhật tính năng miễn phí",
    },
  ];
  
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-r from-primary via-primary/90 to-cyan-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTQwIDQwaDQwdjQwSDQwVjQweiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center">
          <div ref={ref} className="space-y-5 md:space-y-6 text-white">
            <div className="flex flex-wrap gap-x-3">
              <WavyText 
                text="Lợi ích khi chọn" 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white"
              />
              <WavyText 
                text="XimiTech" 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white/90"
              />
            </div>
            
            <TextReveal 
              text="XimiTech cam kết mang đến giải pháp công nghệ chuyên nghiệp với chất lượng tốt nhất và giá cả hợp lý!"
              className="text-sm md:text-base lg:text-lg text-white/90 max-w-xl"
            />
            
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <benefit.icon className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs md:text-sm mb-1">{benefit.title}</h3>
                    <p className="text-[11px] md:text-xs text-white/80 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="h-12 md:h-14 px-5 md:px-6 text-sm md:text-base font-semibold hover:scale-105 transition-transform shadow-lg"
                onClick={() => window.open('tel:+84888889805', '_self')}
              >
                <Phone className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                Gọi 088 888 9805
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="h-12 md:h-14 px-5 md:px-6 text-sm md:text-base font-semibold hover:scale-105 transition-transform shadow-lg bg-white text-primary hover:bg-white/90"
                onClick={() => window.open('https://zalo.me/0888889805', '_blank')}
              >
                Tư vấn qua Zalo
              </Button>
            </div>
          </div>

          {/* Mockup Image */}
          <div className={`relative hidden lg:flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative w-full h-[500px] flex items-center justify-center">
              <div className="absolute -inset-4 bg-white/20 rounded-[3rem] blur-3xl transition-all"></div>
              <img 
                src={mockupImage} 
                alt="XimiTech - Web Development Mockup" 
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
