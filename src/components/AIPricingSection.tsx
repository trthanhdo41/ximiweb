import { Brain, TrendingUp, CheckCircle2 } from "lucide-react";
import appPricingScreen from "@/assets/app-pricing-screen.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const AIPricingSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const features = [
    {
      icon: CheckCircle2,
      title: "Chính xác tuyệt đối",
      description: "Chỉ với một vài thông tin cơ bản đã có định giá ngay",
    },
    {
      icon: Brain,
      title: "AI phân tích đa chiều",
      description: "Xét đến tình trạng máy, thời gian ra mắt, biến động giá thị trường và khả năng tái bán cao",
    },
    {
      icon: TrendingUp,
      title: "Đánh giá tận nơi chi tiết",
      description: "Kiểm định chuyên sâu pin, RAM, bộ nhớ để đảm bảo giá trị thật",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center space-y-4 mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <Brain className="h-4 w-4" />
            Công nghệ AI tiên tiến
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Định giá thông minh với AI{" "}
            <span className="text-primary">luôn nhận tạo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hệ thống AI của chúng tôi phân tích hàng triệu dữ liệu giao dịch, diễn biến thị trường và nhu cầu thực tế để đưa ra mức giá công bằng cho mọi thiết bị
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center mb-12">
          <div className="grid gap-6 md:grid-cols-1">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative rounded-2xl border bg-card p-6 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={`relative flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/30 to-primary/20 rounded-[3rem] blur-2xl group-hover:blur-xl transition-all"></div>
              <img
                src={appPricingScreen}
                alt="AI Pricing Screen"
                className="relative h-[500px] w-auto object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
