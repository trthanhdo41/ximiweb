import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check, Star, FileText, Globe, Smartphone, Bot, GraduationCap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const PricingTable = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const pricingPlans = [
    {
      name: "Landing Page",
      priceFrom: "1",
      priceTo: "5",
      description: "Trang đích chuyên nghiệp",
      features: ["Responsive", "SEO cơ bản", "Form liên hệ", "Hosting 1 năm"],
      popular: false,
      color: "from-blue-500 to-cyan-500",
      icon: FileText,
    },
    {
      name: "Website",
      priceFrom: "2",
      priceTo: "30",
      description: "Website đa trang đầy đủ",
      features: ["UI/UX chuyên nghiệp", "SEO nâng cao", "CMS", "Bảo trì 1 năm"],
      popular: true,
      color: "from-primary to-purple-500",
      icon: Globe,
    },
    {
      name: "Mobile App",
      priceFrom: "10",
      priceTo: "50+",
      description: "Ứng dụng di động iOS/Android",
      features: ["React Native/Flutter", "Backend API", "Push notification", "Bảo trì 1 năm"],
      popular: false,
      color: "from-purple-500 to-pink-500",
      icon: Smartphone,
    },
    {
      name: "Chatbot AI",
      priceFrom: "1",
      priceTo: "3",
      description: "Chatbot thông minh AI",
      features: ["GPT/Claude/Gemini", "Tùy chỉnh dữ liệu", "Tích hợp web/app", "Dashboard"],
      popular: false,
      color: "from-green-500 to-emerald-500",
      icon: Bot,
    },
    {
      name: "Mentor CNTT",
      priceFrom: "500k",
      priceTo: "1 giờ",
      description: "Hướng dẫn 1-1",
      features: ["Tư vấn career", "Review code", "Best practices", "Lộ trình học tập"],
      popular: false,
      color: "from-orange-500 to-red-500",
      icon: GraduationCap,
    },
    {
      name: "Đồ Án CNTT",
      priceFrom: "2",
      priceTo: "10",
      description: "Hỗ trợ đồ án tốt nghiệp",
      features: ["Tư vấn đề tài", "Code & implement", "Báo cáo", "Hỗ trợ bảo vệ"],
      popular: false,
      color: "from-yellow-500 to-orange-500",
      icon: BookOpen,
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`text-center space-y-4 mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Bảng Giá{" "}
            <span className="text-primary">Dịch Vụ</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
            Giá cả minh bạch, phù hợp với mọi nhu cầu và ngân sách
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const isFlipped = flippedCard === index;
            
            return (
              <div
                key={index}
                className={`relative h-[280px] cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  perspective: '1000px',
                }}
                onMouseEnter={() => setFlippedCard(index)}
                onMouseLeave={() => setFlippedCard(null)}
                onClick={() => setFlippedCard(isFlipped ? null : index)}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-primary to-purple-500 text-white px-3 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                      <Star className="h-3 w-3 fill-current" />
                      Phổ biến
                    </div>
                  </div>
                )}

                <div
                  className="relative w-full h-full transition-transform duration-700"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  {/* Front Side */}
                  <div
                    className={`absolute inset-0 rounded-xl border bg-card/50 backdrop-blur-sm p-4 md:p-5 transition-all duration-300 ${
                      plan.popular 
                        ? 'border-primary shadow-lg shadow-primary/20' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${plan.color} mb-4`}>
                        <plan.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-400 text-sm mb-4 text-center">{plan.description}</p>
                      <div className="flex items-center justify-center gap-1 mb-3">
                        <span className="text-3xl md:text-4xl font-bold text-primary">{plan.priceFrom}</span>
                        <span className="text-xl text-gray-400">-</span>
                        <span className="text-3xl md:text-4xl font-bold text-primary">{plan.priceTo}</span>
                        {plan.name !== "Mentor CNTT" && (
                          <span className="text-base text-gray-400 ml-1">tr</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">Hover để xem chi tiết</p>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div
                    className={`absolute inset-0 rounded-xl border bg-gradient-to-br ${plan.color} p-4 md:p-5`}
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <div className="flex flex-col h-full">
                      <h3 className="text-xl font-bold text-white mb-1 text-center">{plan.name}</h3>
                      <p className="text-white/80 text-xs mb-4 text-center">{plan.description}</p>
                      
                      <ul className="space-y-2 mb-auto">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-white">
                            <Check className="h-4 w-4 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button 
                        size="sm"
                        className="w-full text-xs bg-white text-gray-900 hover:bg-white/90 mt-4"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('https://zalo.me/0888889805', '_blank');
                        }}
                      >
                        Liên hệ tư vấn
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className={`text-center mt-12 md:mt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-400 mb-4">
            Cần tư vấn chi tiết hoặc báo giá dự án riêng?
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-purple-500 hover:opacity-90"
            onClick={() => window.open('https://zalo.me/0888889805', '_blank')}
          >
            Liên hệ tư vấn miễn phí
          </Button>
        </div>
      </div>
    </section>
  );
};
