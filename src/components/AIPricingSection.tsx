import { Brain, TrendingUp, CheckCircle2 } from "lucide-react";
import appPricingScreen from "@/assets/mockups/pricing-screen.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const AIPricingSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const features = [
    {
      icon: Brain,
      title: "500.000+ Dữ liệu thực tế",
      description: "AI phân tích và so sánh model, tình trạng, dung lượng và giá thị trường từ hơn nửa triệu giao dịch thật",
    },
    {
      icon: CheckCircle2,
      title: "Condition Score tự động",
      description: "AI chấm điểm chất lượng máy, phản ánh giá trị realtime theo thị trường một cách chính xác",
    },
    {
      icon: TrendingUp,
      title: "Minh bạch và kiểm chứng",
      description: "Kết quả định giá hiển thị ngay, minh bạch 100% và có thể kiểm chứng bất cứ lúc nào",
    },
  ];

  return (
    <section id="pricing" className="relative py-16 md:py-24 bg-[hsl(220_40%_10%)] overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/10 to-transparent blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`text-center space-y-4 mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/30 px-4 py-2 text-sm font-medium text-accent">
            <Brain className="h-4 w-4" />
            AI Smart Check
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
            Định giá & Thẩm định thông minh{" "}
            <span className="text-primary">bằng AI</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Hệ thống AI Smart Check kết hợp định giá + thẩm định trong một quy trình tự động, giúp giao dịch minh bạch, chính xác và an toàn tuyệt đối
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center mb-12">
          <div className="grid gap-6 md:grid-cols-1">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 hover:bg-white/10 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-white">{feature.title}</h3>
                    <p className="text-sm text-white/60">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={`relative flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/30 to-primary/20 rounded-[3rem] blur-2xl transition-all"></div>
              <img
                src={appPricingScreen}
                alt="AI Pricing Screen"
                className="relative h-[350px] md:h-[450px] lg:h-[500px] w-auto object-contain drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
